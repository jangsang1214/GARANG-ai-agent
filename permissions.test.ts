import test from "node:test";
import assert from "node:assert/strict";
import { isAllowed } from "../src/security/permissions.js";

test("low and medium risk are allowed by default", () => {
  assert.equal(isAllowed("low"), true);
  assert.equal(isAllowed("medium"), true);
});

test("high risk is blocked by default", () => {
  assert.equal(isAllowed("high"), false);
});