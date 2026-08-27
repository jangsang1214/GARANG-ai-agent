import type { ToolResult } from "../types.js";

export interface ToolContext {
  cwd: string;
}

export interface AgentTool {
  readonly name: string;
  execute(input: string, context: ToolContext): Promise<ToolResult>;
}