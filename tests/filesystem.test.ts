import test from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { ReadFileTool, WriteFileTool } from "../src/tools/filesystem.js";

const separator = "\n---GARANG-CONTENT---\n";

test("filesystem tools round-trip a file inside the repository", async () => {
  const root = await mkdtemp(join(tmpdir(), "garang-fs-"));

  try {
    const writer = new WriteFileTool();
    const reader = new ReadFileTool();
    const write = await writer.execute(`notes/test.txt${separator}hello`, { cwd: root });
    const read = await reader.execute("notes/test.txt", { cwd: root });

    assert.equal(write.ok, true);
    assert.equal(read.ok, true);
    assert.equal(read.output, "hello");
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});

test("filesystem tools reject paths escaping the repository", async () => {
  const root = await mkdtemp(join(tmpdir(), "garang-fs-"));

  try {
    const writer = new WriteFileTool();
    const result = await writer.execute(`../outside.txt${separator}blocked`, { cwd: root });

    assert.equal(result.ok, false);
    assert.match(result.error ?? "", /escapes repository root/);
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});
