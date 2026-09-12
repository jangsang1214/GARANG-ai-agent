import test from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import {
  ensureProjectStateFiles,
  loadProjectState
} from "../src/context/project-state.js";

test("project state can be initialized and loaded across sessions", async () => {
  const root = await mkdtemp(join(tmpdir(), "garang-state-"));

  try {
    await ensureProjectStateFiles(root, {
      "PROJECT_STATE.md": "# Project State\nstatus: GREEN\n"
    });

    const snapshot = await loadProjectState(root);

    assert.equal(snapshot.missing.length, 0);
    assert.match(snapshot.files["PROJECT_STATE.md"] ?? "", /GREEN/);
    assert.match(snapshot.files["DECISIONS.md"] ?? "", /Decision Log/);
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});
