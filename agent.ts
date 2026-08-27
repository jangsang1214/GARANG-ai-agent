import type {
  AgentRunResult,
  AgentTask,
  VerificationResult
} from "../types.js";
import { createInitialPlan } from "./planner.js";
import { decideRecovery } from "./recovery.js";
import { verifyWithTool } from "./verifier.js";
import type { AgentTool } from "../tools/tool.js";
import { isAllowed, DEFAULT_PERMISSION_POLICY } from "../security/permissions.js";

export interface AgentDependencies {
  terminal: AgentTool;
  files: string[];
  cwd: string;
}

export class CodingAgent {
  constructor(private readonly deps: AgentDependencies) {}

  async plan(task: AgentTask) {
    return createInitialPlan({
      request: task.request,
      files: this.deps.files
    });
  }

  async run(task: AgentTask): Promise<AgentRunResult> {
    const plan = await this.plan(task);

    for (const step of plan.steps) {
      if (!isAllowed(step.risk, DEFAULT_PERMISSION_POLICY)) {
        return {
          status: "blocked",
          summary: `Blocked high-risk step: ${step.description}`,
          attempts: 0,
          plan
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
          verification
        };
      }
    }

    return {
      status: "failed",
      summary: "Recovery loop ended without verification success.",
      attempts: maxAttempts,
      plan,
      verification
    };
  }
}