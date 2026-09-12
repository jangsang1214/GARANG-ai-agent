import test from "node:test";
import assert from "node:assert/strict";
import { execFile } from "node:child_process";
import { mkdtemp, readFile, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);

async function emit(
  eventName: string,
  raw: Record<string, unknown>,
  extraEnv: Record<string, string> = {}
): Promise<{ type: string; source: { repositoryId: string }; payload: Record<string, unknown> }> {
  const directory = await mkdtemp(path.join(tmpdir(), "garang-event-"));
  const eventPath = path.join(directory, "event.json");
  await writeFile(eventPath, JSON.stringify(raw));

  const script = path.resolve("scripts/emit-event.mjs");
  await execFileAsync(process.execPath, [script], {
    cwd: directory,
    env: {
      ...process.env,
      GITHUB_EVENT_NAME: eventName,
      GITHUB_EVENT_PATH: eventPath,
      GITHUB_REPOSITORY: "jangsang1214/-fitmind-ai",
      GITHUB_RUN_ID: "99",
      GITHUB_REF_NAME: "main",
      GITHUB_SHA: "abc123",
      ...extraEnv
    }
  });

  return JSON.parse(
    await readFile(path.join(directory, "artifacts", "founder-os-event.json"), "utf8")
  ) as { type: string; source: { repositoryId: string }; payload: Record<string, unknown> };
}

test("GitHub adapter emits a PR event envelope", async () => {
  const emitted = await emit("pull_request", {
    action: "opened",
    number: 42,
    pull_request: { number: 42, head: { ref: "feature/test", sha: "abc123" } }
  });

  assert.equal(emitted.type, "pull_request.opened");
  assert.equal(emitted.source.repositoryId, "product");
  assert.equal(emitted.payload.pullRequestNumber, 42);
});

test("GitHub adapter maps release-gate completion to CI evidence", async () => {
  const emitted = await emit("workflow_run", {
    workflow_run: {
      id: 1000,
      conclusion: "failure",
      head_branch: "main",
      head_sha: "deadbeef"
    }
  });

  assert.equal(emitted.type, "ci.failed");
  assert.equal(emitted.payload.workflowRunId, 1000);
  assert.equal(emitted.payload.workflowConclusion, "failure");
});
