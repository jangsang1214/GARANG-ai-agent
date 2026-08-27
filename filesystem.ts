import { readFile, writeFile, mkdir } from "node:fs/promises";
import { dirname, resolve, relative } from "node:path";
import type { AgentTool, ToolContext } from "./tool.js";
import type { ToolResult } from "../types.js";

function safePath(cwd: string, requested: string): string {
  const base = resolve(cwd);
  const target = resolve(base, requested);
  const rel = relative(base, target);

  if (rel.startsWith("..") || rel.includes(`..${process.platform === "win32" ? "\\" : "/"}`)) {
    throw new Error("Path escapes repository root");
  }

  return target;
}

export class ReadFileTool implements AgentTool {
  readonly name = "read_file";

  async execute(input: string, context: ToolContext): Promise<ToolResult> {
    try {
      const path = safePath(context.cwd, input.trim());
      return { ok: true, output: await readFile(path, "utf8") };
    } catch (error) {
      return {
        ok: false,
        output: "",
        error: error instanceof Error ? error.message : String(error)
      };
    }
  }
}

export class WriteFileTool implements AgentTool {
  readonly name = "write_file";

  async execute(input: string, context: ToolContext): Promise<ToolResult> {
    const separator = "\n---GARANG-CONTENT---\n";
    const index = input.indexOf(separator);

    if (index === -1) {
      return {
        ok: false,
        output: "",
        error: "Input must be: relative/path\\n---GARANG-CONTENT---\\ncontent"
      };
    }

    const requestedPath = input.slice(0, index).trim();
    const content = input.slice(index + separator.length);

    try {
      const path = safePath(context.cwd, requestedPath);
      await mkdir(dirname(path), { recursive: true });
      await writeFile(path, content, "utf8");
      return { ok: true, output: `Wrote ${requestedPath}` };
    } catch (error) {
      return {
        ok: false,
        output: "",
        error: error instanceof Error ? error.message : String(error)
      };
    }
  }
}