import test from "node:test";
import assert from "node:assert/strict";
import { reconcileRepositoryStates } from "../src/reconciliation/state-reconciler.js";

test("repository SHA drift is YELLOW and RED CI becomes a blocker", () => {
  const drift = reconcileRepositoryStates(
    [{ repositoryId: "product", ref: "main", sha: "old", ci: "green" }],
    [{ repositoryId: "product", ref: "main", sha: "new", ci: "green" }]
  );
  assert.equal(drift.status, "YELLOW");
  assert.equal(drift.findings[0]?.kind, "sha-drift");

  const failed = reconcileRepositoryStates(
    [{ repositoryId: "product", ref: "main", sha: "new", ci: "green" }],
    [{ repositoryId: "product", ref: "main", sha: "new", ci: "red" }]
  );
  assert.equal(failed.status, "RED");
  assert.equal(failed.findings.some((finding) => finding.kind === "ci-regression"), true);
});
