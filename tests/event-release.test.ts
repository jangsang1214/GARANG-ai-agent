import test from "node:test";
import assert from "node:assert/strict";
import type { FounderEventEnvelope } from "../src/events/contracts.js";
import { evaluateReleaseFromEvents } from "../src/release/event-release.js";

function ciEvent(
  repositoryId: string,
  type: "ci.green" | "ci.failed",
  occurredAt: string
): FounderEventEnvelope {
  const repository = repositoryId === "control"
    ? "jangsang1214/GARANG-ai-agent"
    : "jangsang1214/-fitmind-ai";
  return {
    schemaVersion: "1.0",
    id: `${repositoryId}-${type}-${occurredAt}`,
    type,
    occurredAt,
    source: { repositoryId, repository, ref: "main", sha: `${repositoryId}-sha` },
    payload: {}
  };
}

const requirements = [
  { repositoryId: "control", label: "Control CI" },
  { repositoryId: "product", label: "Product CI" }
];

test("event-driven release requires GREEN CI from every required repository", () => {
  const green = evaluateReleaseFromEvents([
    ciEvent("control", "ci.green", "2026-09-12T10:00:00Z"),
    ciEvent("product", "ci.green", "2026-09-12T10:01:00Z")
  ], requirements);
  assert.equal(green.decision, "GREEN");

  const missing = evaluateReleaseFromEvents([
    ciEvent("control", "ci.green", "2026-09-12T10:00:00Z")
  ], requirements);
  assert.equal(missing.decision, "YELLOW");

  const red = evaluateReleaseFromEvents([
    ciEvent("control", "ci.green", "2026-09-12T10:00:00Z"),
    ciEvent("product", "ci.failed", "2026-09-12T10:02:00Z")
  ], requirements);
  assert.equal(red.decision, "RED");
});
