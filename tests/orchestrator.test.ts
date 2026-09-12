import test from "node:test";
import assert from "node:assert/strict";
import { createWorkflow, inferIntent } from "../src/orchestration/orchestrator.js";

test("AI work routes through product, AI/Data, engineering, and QA", () => {
  const workflow = createWorkflow({
    request: "Improve Coach personalization from user history",
    targetRepositoryId: "product"
  });
  assert.equal(workflow.intent, "ai-data");
  assert.deepEqual(workflow.stages, ["product", "ai-data", "engineering", "release-qa"]);
});

test("release intent outranks generic engineering words", () => {
  assert.equal(inferIntent("Run CI and prepare production release"), "release");
});
