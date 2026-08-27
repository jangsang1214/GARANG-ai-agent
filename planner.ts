import type { AgentPlan, RiskLevel } from "../types.js";

export interface PlannerInput {
  request: string;
  files: string[];
}

function inferRisk(request: string): RiskLevel {
  const highRiskTerms = [
    "deploy",
    "production",
    "delete database",
    "drop database",
    "secret",
    "credential"
  ];

  const normalized = request.toLowerCase();
  if (highRiskTerms.some((term) => normalized.includes(term))) {
    return "high";
  }

  return "medium";
}

export function createInitialPlan(input: PlannerInput): AgentPlan {
  const risk = inferRisk(input.request);

  return {
    summary: `Analyze the repository and implement: ${input.request}`,
    steps: [
      {
        id: "inspect",
        description: "Inspect the repository structure and relevant files.",
        tool: "read_file",
        risk: "low"
      },
      {
        id: "implement",
        description: "Implement the smallest safe change that satisfies the request.",
        tool: "write_file",
        risk
      },
      {
        id: "verify",
        description: "Run project checks and tests.",
        tool: "terminal",
        risk: "low"
      }
    ]
  };
}