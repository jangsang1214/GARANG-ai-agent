import type { VerificationResult } from "../types.js";
import type { AgentTool } from "../tools/tool.js";

export async function verifyWithTool(
  terminal: AgentTool,
  cwd: string
): Promise<VerificationResult> {
  const checks = [];

  for (const command of ["npm run check", "npm test"]) {
    const result = await terminal.execute(command, { cwd });

    checks.push({
      name: command,
      ok: result.ok,
      details: result.ok ? result.output : result.error ?? "Unknown failure"
    });

    if (!result.ok) break;
  }

  return {
    ok: checks.every((check) => check.ok),
    checks
  };
}