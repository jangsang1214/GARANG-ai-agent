import test from "node:test";
import assert from "node:assert/strict";
import { execFile } from "node:child_process";
import { mkdtemp, readFile, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);

test("GitHub adapter emits a valid PR event envelope shape", async () => {
  const directory = await mkdtemp(path.join(tmpdir(), "garang-event-"));
  const eventPath = path.join(directory, "event.json");
  await writeFile(eventPath, JSON.stringify({
    action: "opened",
    number: 42,
    pull_request: { number: 42, head: { ref: "feature/test", sha: "abc123" } }
  }));

  const script = path.resolve("scripts/emit-event.mjs");
  await execFileAsync(process.execPath, [script], {
    cwd: directory,
    env: {
      ...process.env,
      GITHUB_EVENT_NAME: "pull_request",
      GITHUB_EVENT_PATH: eventPath,
      GITHUB_REPOSITORY: "jangsang1214/-fitmind-ai",
      GITHUB_RUN_ID: "99",
      GITHUB_REF_NAME: "feature/test",
      GITHUB_SHA: "abc123"
    }
  });

  const emitted = JSON.parse(
    await readFile(path.join(directory, "artifacts", "founder-os-event.json"), "utf8")
  ) as { type: string; source: { repositoryId: string }; payload: { pullRequestNumber: number } };

  assert.equal(emitted.type, "pull_request.opened");
  assert.equal(emitted.source.repositoryId, "product");
  assert.equal(emitted.payload.pullRequestNumber, 42);
});
