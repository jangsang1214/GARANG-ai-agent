import test from "node:test";
import assert from "node:assert/strict";
import {
  DEFAULT_PERMISSION_POLICY,
  isAllowed,
  isCapabilityAllowed,
  riskForCapability
} from "../src/security/permissions.js";

test("low and medium risk are allowed by default", () => {
  assert.equal(isAllowed("low"), true);
  assert.equal(isAllowed("medium"), true);
});

test("high risk is blocked by default", () => {
  assert.equal(isAllowed("high"), false);
});

test("capabilities own their central risk classification", () => {
  assert.equal(riskForCapability("repository.read"), "low");
  assert.equal(riskForCapability("repository.write"), "medium");
  assert.equal(riskForCapability("release.deploy"), "high");
  assert.equal(isCapabilityAllowed("release.deploy"), false);
});

test("explicit capability override can represent founder approval", () => {
  const policy = {
    ...DEFAULT_PERMISSION_POLICY,
    capabilityOverrides: { "release.deploy": true }
  };

  assert.equal(isCapabilityAllowed("release.deploy", policy), true);
  assert.equal(isCapabilityAllowed("data.destructive", policy), false);
});
