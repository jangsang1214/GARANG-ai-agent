import test from "node:test";
import assert from "node:assert/strict";
import { createInitialPlan } from "../src/agent/planner.js";

test("planner creates a deterministic three-step plan", () => {
  const plan = createInitialPlan({
    request: "Add a login button",
    files: ["src/app.ts"]
  });

  assert.equal(plan.steps.length, 3);
  assert.equal(plan.steps[0]?.tool, "read_file");
  assert.equal(plan.steps[1]?.tool, "write_file");
  assert.equal(plan.steps[2]?.tool, "terminal");
});

test("planner blocks high-risk work by marking it high risk", () => {
  const plan = createInitialPlan({
    request: "Deploy to production",
    files: []
  });

  assert.equal(plan.steps[1]?.risk, "high");
});