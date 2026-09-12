export type RiskLevel = "low" | "medium" | "high";

export type Capability =
  | "repository.read"
  | "repository.write"
  | "checks.run"
  | "git.mutate"
  | "git.force_update"
  | "release.deploy"
  | "data.destructive"
  | "secrets.access"
  | "billing.commit"
  | "architecture.rewrite";

export type TaskStatus =
  | "planned"
  | "running"
  | "verified"
  | "failed"
  | "blocked";

export interface AgentAction {
  id: string;
  description: string;
  tool: string;
  input: string;
  capability: Capability;
}

export interface AgentTask {
  id: string;
  request: string;
  status: TaskStatus;
  actions?: AgentAction[];
}

export interface PlanStep {
  id: string;
  description: string;
  tool: string;
  capability: Capability;
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

export interface ExecutedAction {
  action: AgentAction;
  result: ToolResult;
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
  actions?: ExecutedAction[];
  verification?: VerificationResult;
}
