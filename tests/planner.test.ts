import test from "node:test";
import assert from "node:assert/strict";
import { createInitialPlan } from "../src/agent/planner.js";

test("planner creates a deterministic three-step plan", () => {
  const plan = createInitialPlan({
    request: "Add a login button",
    files: ["src/app.ts"]
  });

  assert.equal(plan.steps.length, 3);
  assert.equal(plan.steps[0]?.capability, "repository.read");
  assert.equal(plan.steps[1]?.capability, "repository.write");
  assert.equal(plan.steps[2]?.capability, "checks.run");
});

test("planner maps production deployment to a high-risk capability", () => {
  const plan = createInitialPlan({
    request: "Deploy to production",
    files: []
  });

  assert.equal(plan.steps[1]?.capability, "release.deploy");
  assert.equal(plan.steps[1]?.risk, "high");
});

test("caller can provide an explicit implementation capability", () => {
  const plan = createInitialPlan({
    request: "Perform the approved architecture migration",
    files: [],
    implementationCapability: "architecture.rewrite"
  });

  assert.equal(plan.steps[1]?.capability, "architecture.rewrite");
  assert.equal(plan.steps[1]?.risk, "high");
});
