import { execFile } from "node:child_process";
import { promisify } from "node:util";
import type { AgentTool, ToolContext } from "./tool.js";
import type { ToolResult } from "../types.js";

const execFileAsync = promisify(execFile);

const ALLOWED_COMMANDS = new Set([
  "npm",
  "node",
  "npx",
  "git"
]);

export class TerminalTool implements AgentTool {
  readonly name = "terminal";

  async execute(input: string, context: ToolContext): Promise<ToolResult> {
    const parts = input.trim().split(/\s+/);
    const command = parts.shift();

    if (!command || !ALLOWED_COMMANDS.has(command)) {
      return {
        ok: false,
        output: "",
        error: "Command is not allowed by the V0.1 terminal policy"
      };
    }

    try {
      const result = await execFileAsync(command, parts, {
        cwd: context.cwd,
        timeout: 120_000,
        maxBuffer: 2 * 1024 * 1024
      });

      return {
        ok: true,
        output: `${result.stdout}${result.stderr}`.trim()
      };
    } catch (error) {
      const message =
        error instanceof Error ? error.message : String(error);

      return {
        ok: false,
        output: "",
        error: message
      };
    }
  }
}