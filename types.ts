export type RiskLevel = "low" | "medium" | "high";

export type TaskStatus =
  | "planned"
  | "running"
  | "verified"
  | "failed"
  | "blocked";

export interface AgentTask {
  id: string;
  request: string;
  status: TaskStatus;
  risk: RiskLevel;
}

export interface PlanStep {
  id: string;
  description: string;
  tool: string;
  risk: RiskLevel;
}

export interface AgentPlan {
  summary: string;
  steps: PlanStep[];
}

export interface ToolResult {
  ok: boolean;
  output: string;
  error?: string;
}

export interface VerificationResult {
  ok: boolean;
  checks: Array<{
    name: string;
    ok: boolean;
    details: string;
  }>;
}

export interface AgentRunResult {
  status: "success" | "failed" | "blocked";
  summary: string;
  attempts: number;
  plan: AgentPlan;
  verification?: VerificationResult;
}