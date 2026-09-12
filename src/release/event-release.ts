import type { FounderEventEnvelope } from "../events/contracts.js";
import { evaluateReleaseGate, type ReleaseGateResult } from "./release-gate.js";

export interface RequiredRepositoryCi {
  repositoryId: string;
  label: string;
}

function latestCiEvent(
  events: FounderEventEnvelope[],
  repositoryId: string
): FounderEventEnvelope | undefined {
  return events
    .filter(
      (event) =>
        event.source.repositoryId === repositoryId &&
        (event.type === "ci.green" || event.type === "ci.failed")
    )
    .sort((a, b) => Date.parse(b.occurredAt) - Date.parse(a.occurredAt))[0];
}

export function evaluateReleaseFromEvents(
  events: FounderEventEnvelope[],
  requirements: RequiredRepositoryCi[]
): ReleaseGateResult {
  const checks = requirements.map((requirement) => {
    const event = latestCiEvent(events, requirement.repositoryId);
    if (!event) {
      return {
        name: requirement.label,
        required: true,
        status: "unknown" as const,
        evidence: `No CI event observed for ${requirement.repositoryId}`
      };
    }

    return {
      name: requirement.label,
      required: true,
      status: event.type === "ci.green" ? "pass" as const : "fail" as const,
      evidence: `${event.id} ${event.source.ref}@${event.source.sha}`
    };
  });

  return evaluateReleaseGate(checks);
}
