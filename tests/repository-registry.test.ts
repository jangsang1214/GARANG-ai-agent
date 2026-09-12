import test from "node:test";
import assert from "node:assert/strict";
import {
  loadRepositoryRegistry,
  repositoryForDomain,
  validateRepositoryRegistry
} from "../src/orchestration/repository-registry.js";

test("registered control and product repositories are valid", async () => {
  const registry = await loadRepositoryRegistry("docs/agent/REPOSITORIES.json");
  assert.deepEqual(validateRepositoryRegistry(registry), []);
  assert.equal(repositoryForDomain(registry, "project-state")?.id, "control");
  assert.equal(repositoryForDomain(registry, "application-code")?.id, "product");
});
