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
import {
  isCapabilityAllowed,
  DEFAULT_PERMISSION_POLICY,
  type PermissionPolicy
} from "../security/permissions.js";

export interface AgentDependencies {
  terminal: AgentTool;
  tools?: AgentTool[];
  files: string[];
  cwd: string;
  permissionPolicy?: PermissionPolicy;
}

export class CodingAgent {
  private readonly tools: ReadonlyMap<string, AgentTool>;
  private readonly permissionPolicy: PermissionPolicy;

  constructor(private readonly deps: AgentDependencies) {
    this.tools = new Map(
      [deps.terminal, ...(deps.tools ?? [])].map((tool) => [tool.name, tool])
    );
    this.permissionPolicy = deps.permissionPolicy ?? DEFAULT_PERMISSION_POLICY;
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
      if (!isCapabilityAllowed(step.capability, this.permissionPolicy)) {
        return {
          status: "blocked",
          summary: `Blocked capability ${step.capability}: ${step.description}`,
          attempts: 0,
          plan,
          actions
        };
      }
    }

    for (const action of task.actions ?? []) {
      if (!isCapabilityAllowed(action.capability, this.permissionPolicy)) {
        return {
          status: "blocked",
          summary: `Blocked capability ${action.capability}: ${action.description}`,
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
      verification = await verifyWithTool(this.deps.terminal, this.deps.cwd);
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
