import type {
  AgentRunResult,
  AgentTask,
  ExecutedAction,
  VerificationResult
} from "../types.js";
import { createInitialPlan } from "./planner.js";
import { decideRecovery } from "./recovery.js";
import { verifyWithTool } from "./verifier.js";
import type { AgentTool } from "../tools/tool.js";
import { isAllowed, DEFAULT_PERMISSION_POLICY } from "../security/permissions.js";

export interface AgentDependencies {
  terminal: AgentTool;
  tools?: AgentTool[];
  files: string[];
  cwd: string;
}

export class CodingAgent {
  private readonly tools: ReadonlyMap<string, AgentTool>;

  constructor(private readonly deps: AgentDependencies) {
    this.tools = new Map(
      [deps.terminal, ...(deps.tools ?? [])].map((tool) => [tool.name, tool])
    );
  }

  async plan(task: AgentTask) {
    return createInitialPlan({
      request: task.request,
      files: this.deps.files
    });
  }

  async run(task: AgentTask): Promise<AgentRunResult> {
    const plan = await this.plan(task);
    const actions: ExecutedAction[] = [];

    for (const step of plan.steps) {
      if (!isAllowed(step.risk, DEFAULT_PERMISSION_POLICY)) {
        return {
          status: "blocked",
          summary: `Blocked high-risk step: ${step.description}`,
          attempts: 0,
          plan,
          actions
        };
      }
    }

    for (const action of task.actions ?? []) {
      if (!isAllowed(action.risk, DEFAULT_PERMISSION_POLICY)) {
        return {
          status: "blocked",
          summary: `Blocked high-risk action: ${action.description}`,
          attempts: 0,
          plan,
          actions
        };
      }

      const tool = this.tools.get(action.tool);
      if (!tool) {
        return {
          status: "failed",
          summary: `Unknown tool: ${action.tool}`,
          attempts: 0,
          plan,
          actions
        };
      }

      const result = await tool.execute(action.input, { cwd: this.deps.cwd });
      actions.push({ action, result });

      if (!result.ok) {
        return {
          status: "failed",
          summary: `Action failed: ${action.description}`,
          attempts: 0,
          plan,
          actions
        };
      }
    }

    let verification: VerificationResult | undefined;
    const maxAttempts = 3;

    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      verification = await verifyWithTool(
        this.deps.terminal,
        this.deps.cwd
      );

      const decision = decideRecovery(verification, attempt, maxAttempts);

      if (!decision.shouldRetry) {
        return {
          status: verification.ok ? "success" : "failed",
          summary: decision.reason,
          attempts: attempt,
          plan,
          actions,
          verification
        };
      }
    }

    if (!verification) {
      return {
        status: "failed",
        summary: "Verification did not run.",
        attempts: 0,
        plan,
        actions
      };
    }

    return {
      status: "failed",
      summary: "Recovery loop ended without verification success.",
      attempts: maxAttempts,
      plan,
      actions,
      verification
    };
  }
}
