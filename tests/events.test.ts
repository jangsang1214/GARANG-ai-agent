import test from "node:test";
import assert from "node:assert/strict";
import type { FounderEventEnvelope } from "../src/events/contracts.js";
import { processFounderEvent } from "../src/events/engine.js";

function event(type: FounderEventEnvelope["type"]): FounderEventEnvelope {
  return {
    schemaVersion: "1.0",
    id: "evt-1",
    type,
    occurredAt: "2026-09-12T09:00:00.000Z",
    source: {
      repositoryId: "product",
      repository: "jangsang1214/-fitmind-ai",
      ref: "main",
      sha: "abc123"
    },
    payload: {}
  };
}

test("failed CI routes to Engineering and Release/QA", () => {
  const result = processFounderEvent(event("ci.failed"));
  assert.equal(result.accepted, true);
  if (result.accepted) {
    assert.equal(result.directive.priority, "P1");
    assert.deepEqual(result.directive.workstreams, ["engineering", "release-qa"]);
  }
});

test("invalid event evidence is rejected", () => {
  const invalid = event("ci.green");
  invalid.source.sha = "";
  const result = processFounderEvent(invalid);
  assert.equal(result.accepted, false);
});
