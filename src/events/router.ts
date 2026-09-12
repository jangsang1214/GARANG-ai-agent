import type { FounderEventEnvelope } from "./contracts.js";
import type { Workstream } from "../orchestration/workstreams.js";

export type EventPriority = "P0" | "P1" | "P2" | "P3" | "P4";

export interface EventDirective {
  priority: EventPriority;
  workstreams: Workstream[];
  action: string;
  requiresFounderApproval: boolean;
}

export function routeFounderEvent(event: FounderEventEnvelope): EventDirective {
  switch (event.type) {
    case "pull_request.opened":
    case "pull_request.updated":
      return {
        priority: "P2",
        workstreams: ["release-qa", "engineering"],
        action: "Verify the PR head, assess regression risk, and reconcile linked project-graph work.",
        requiresFounderApproval: false
      };
    case "pull_request.closed":
      return {
        priority: "P2",
        workstreams: ["command-center", "release-qa"],
        action: "Reconcile task, PR, and release state after PR closure.",
        requiresFounderApproval: false
      };
    case "ci.failed":
      return {
        priority: "P1",
        workstreams: ["engineering", "release-qa"],
        action: "Diagnose the failed CI evidence and create the smallest safe repair path.",
        requiresFounderApproval: false
      };
    case "ci.green":
      return {
        priority: "P2",
        workstreams: ["release-qa", "command-center"],
        action: "Record verified CI evidence and re-evaluate release readiness.",
        requiresFounderApproval: false
      };
    case "main.updated":
      return {
        priority: "P2",
        workstreams: ["command-center", "release-qa"],
        action: "Reconcile persistent state and project graph against the new main SHA.",
        requiresFounderApproval: false
      };
    case "release.tagged":
      return {
        priority: "P2",
        workstreams: ["release-qa", "growth-business", "command-center"],
        action: "Verify release evidence, record the release node, and prepare outcome measurement.",
        requiresFounderApproval: false
      };
    case "task.completed":
      return {
        priority: "P3",
        workstreams: ["command-center"],
        action: "Update project-graph state and select the next highest-value unblocked work.",
        requiresFounderApproval: false
      };
  }
}
