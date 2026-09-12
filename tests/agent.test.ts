import test from "node:test";
import assert from "node:assert/strict";
import { CodingAgent } from "../src/agent/agent.js";
import { DEFAULT_PERMISSION_POLICY } from "../src/security/permissions.js";
import type { AgentTool, ToolContext } from "../src/tools/tool.js";
import type { ToolResult } from "../src/types.js";

class PassingTerminal implements AgentTool {
  readonly name = "terminal";

  async execute(_input: string, _context: ToolContext): Promise<ToolResult> {
    return { ok: true, output: "ok" };
  }
}

class RecordingWriter implements AgentTool {
  readonly name = "write_file";
  calls: string[] = [];

  async execute(input: string, _context: ToolContext): Promise<ToolResult> {
    this.calls.push(input);
    return { ok: true, output: "written" };
  }
}

test("agent executes explicit permitted capabilities before verification", async () => {
  const writer = new RecordingWriter();
  const agent = new CodingAgent({
    terminal: new PassingTerminal(),
    tools: [writer],
    files: ["README.md"],
    cwd: "."
  });

  const result = await agent.run({
    id: "task-1",
    request: "Update project documentation",
    status: "planned",
    actions: [
      {
        id: "write-1",
        description: "Write documentation",
        tool: "write_file",
        input: "README.md\n---GARANG-CONTENT---\nupdated",
        capability: "repository.write"
      }
    ]
  });

  assert.equal(result.status, "success");
  assert.equal(writer.calls.length, 1);
  assert.equal(result.actions?.length, 1);
  assert.equal(result.verification?.ok, true);
});

test("agent blocks explicit high-risk capabilities before tool execution", async () => {
  const writer = new RecordingWriter();
  const agent = new CodingAgent({
    terminal: new PassingTerminal(),
    tools: [writer],
    files: [],
    cwd: "."
  });

  const result = await agent.run({
    id: "task-2",
    request: "Prepare a safe maintenance change",
    status: "planned",
    actions: [
      {
        id: "danger-1",
        description: "Deploy the release",
        tool: "write_file",
        input: "danger",
        capability: "release.deploy"
      }
    ]
  });

  assert.equal(result.status, "blocked");
  assert.equal(writer.calls.length, 0);
  assert.match(result.summary, /Blocked capability release\.deploy/);
});

test("founder-approved capability override permits the specific high-risk action", async () => {
  const writer = new RecordingWriter();
  const agent = new CodingAgent({
    terminal: new PassingTerminal(),
    tools: [writer],
    files: [],
    cwd: ".",
    permissionPolicy: {
      ...DEFAULT_PERMISSION_POLICY,
      capabilityOverrides: { "release.deploy": true }
    }
  });

  const result = await agent.run({
    id: "task-3",
    request: "Prepare deployment after founder approval",
    status: "planned",
    actions: [
      {
        id: "deploy-1",
        description: "Run approved deployment action",
        tool: "write_file",
        input: "approved",
        capability: "release.deploy"
      }
    ]
  });

  assert.equal(result.status, "success");
  assert.equal(writer.calls.length, 1);
});
