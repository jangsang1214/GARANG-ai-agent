import test from "node:test";
import assert from "node:assert/strict";
import { evaluateReleaseGate } from "../src/release/release-gate.js";

test("release gate distinguishes GREEN, YELLOW, and RED", () => {
  const green = evaluateReleaseGate([
    { name: "build", required: true, status: "pass", evidence: "CI" }
  ]);
  assert.equal(green.decision, "GREEN");
  assert.equal(green.releaseAllowed, true);

  const yellow = evaluateReleaseGate([
    { name: "real device", required: true, status: "unknown", evidence: "not run" }
  ]);
  assert.equal(yellow.decision, "YELLOW");
  assert.equal(yellow.releaseAllowed, false);

  const red = evaluateReleaseGate([
    { name: "tests", required: true, status: "fail", evidence: "CI failed" }
  ]);
  assert.equal(red.decision, "RED");
  assert.equal(red.releaseAllowed, false);
});
