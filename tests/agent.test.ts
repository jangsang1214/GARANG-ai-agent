import test from "node:test";
import assert from "node:assert/strict";
import { CodingAgent } from "../src/agent/agent.js";
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

test("agent executes explicit permitted actions before verification", async () => {
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
    risk: "medium",
    actions: [
      {
        id: "write-1",
        description: "Write documentation",
        tool: "write_file",
        input: "README.md\n---GARANG-CONTENT---\nupdated",
        risk: "medium"
      }
    ]
  });

  assert.equal(result.status, "success");
  assert.equal(writer.calls.length, 1);
  assert.equal(result.actions?.length, 1);
  assert.equal(result.verification?.ok, true);
});

test("agent blocks explicit high-risk actions before tool execution", async () => {
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
    risk: "medium",
    actions: [
      {
        id: "danger-1",
        description: "Perform destructive operation",
        tool: "write_file",
        input: "danger",
        risk: "high"
      }
    ]
  });

  assert.equal(result.status, "blocked");
  assert.equal(writer.calls.length, 0);
  assert.match(result.summary, /Blocked high-risk action/);
});
