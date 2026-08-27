import test from "node:test";
import assert from "node:assert/strict";
import { decideRecovery } from "../src/agent/recovery.js";

test("failed verification retries before max attempts", () => {
  const decision = decideRecovery(
    {
      ok: false,
      checks: [{ name: "test", ok: false, details: "failed" }]
    },
    1,
    3
  );

  assert.equal(decision.shouldRetry, true);
});

test("recovery stops at maximum attempts", () => {
  const decision = decideRecovery(
    {
      ok: false,
      checks: [{ name: "test", ok: false, details: "failed" }]
    },
    3,
    3
  );

  assert.equal(decision.shouldRetry, false);
});