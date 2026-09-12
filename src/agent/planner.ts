import type { AgentPlan, Capability } from "../types.js";
import { riskForCapability } from "../security/permissions.js";

export interface PlannerInput {
  request: string;
  files: string[];
  implementationCapability?: Capability;
}

function inferCapability(request: string): Capability {
  const normalized = request.toLowerCase();

  if (/delete database|drop database|wipe data|destroy data/.test(normalized)) {
    return "data.destructive";
  }
  if (/secret|credential|api key|token/.test(normalized)) {
    return "secrets.access";
  }
  if (/deploy|production release|release to production/.test(normalized)) {
    return "release.deploy";
  }
  if (/force push|force update main|rewrite git history/.test(normalized)) {
    return "git.force_update";
  }
  if (/paid service|purchase|subscribe|billing/.test(normalized)) {
    return "billing.commit";
  }
  if (/rewrite architecture|replatform|replace architecture/.test(normalized)) {
    return "architecture.rewrite";
  }

  return "repository.write";
}

export function createInitialPlan(input: PlannerInput): AgentPlan {
  const implementationCapability =
    input.implementationCapability ?? inferCapability(input.request);

  return {
    summary: `Analyze the repository and implement: ${input.request}`,
    steps: [
      {
        id: "inspect",
        description: "Inspect the repository structure and relevant files.",
        tool: "read_file",
        capability: "repository.read",
        risk: riskForCapability("repository.read")
      },
      {
        id: "implement",
        description: "Implement the smallest safe change that satisfies the request.",
        tool: "write_file",
        capability: implementationCapability,
        risk: riskForCapability(implementationCapability)
      },
      {
        id: "verify",
        description: "Run project checks and tests.",
        tool: "terminal",
        capability: "checks.run",
        risk: riskForCapability("checks.run")
      }
    ]
  };
}
