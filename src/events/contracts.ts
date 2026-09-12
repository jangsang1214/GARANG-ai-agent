export const FOUNDER_EVENT_TYPES = [
  "pull_request.opened",
  "pull_request.updated",
  "pull_request.closed",
  "ci.green",
  "ci.failed",
  "main.updated",
  "release.tagged",
  "task.completed"
] as const;

export type FounderEventType = (typeof FOUNDER_EVENT_TYPES)[number];

export interface FounderEventSource {
  repositoryId: string;
  repository: string;
  ref: string;
  sha: string;
}

export interface FounderEventEnvelope {
  schemaVersion: "1.0";
  id: string;
  type: FounderEventType;
  occurredAt: string;
  source: FounderEventSource;
  payload: Record<string, unknown>;
}

export function isFounderEventType(value: string): value is FounderEventType {
  return (FOUNDER_EVENT_TYPES as readonly string[]).includes(value);
}

export function validateFounderEvent(event: FounderEventEnvelope): string[] {
  const errors: string[] = [];
  if (event.schemaVersion !== "1.0") errors.push("schemaVersion must be 1.0");
  if (!event.id.trim()) errors.push("event id is required");
  if (!isFounderEventType(event.type)) errors.push(`unsupported event type: ${event.type}`);
  if (Number.isNaN(Date.parse(event.occurredAt))) errors.push("occurredAt must be an ISO timestamp");
  if (!event.source.repositoryId.trim()) errors.push("source.repositoryId is required");
  if (!/^[^/]+\/[^/]+$/.test(event.source.repository)) errors.push("source.repository must be owner/name");
  if (!event.source.ref.trim()) errors.push("source.ref is required");
  if (!event.source.sha.trim()) errors.push("source.sha is required");
  return errors;
}
