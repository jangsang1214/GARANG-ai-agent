import { mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

export const PROJECT_STATE_FILES = [
  "PROJECT_STATE.md",
  "DECISIONS.md",
  "TASKS.md",
  "TECHNICAL_DEBT.md",
  "RELEASE_STATUS.md"
] as const;

export type ProjectStateFile = (typeof PROJECT_STATE_FILES)[number];

export interface ProjectStateSnapshot {
  directory: string;
  files: Partial<Record<ProjectStateFile, string>>;
  missing: ProjectStateFile[];
}

const DEFAULT_TEMPLATES: Record<ProjectStateFile, string> = {
  "PROJECT_STATE.md": "# Project State\n",
  "DECISIONS.md": "# Decision Log\n",
  "TASKS.md": "# Tasks\n",
  "TECHNICAL_DEBT.md": "# Technical Debt\n",
  "RELEASE_STATUS.md": "# Release Status\n"
};

function hasCode(error: unknown, code: string): boolean {
  return (
    error instanceof Error &&
    "code" in error &&
    (error as NodeJS.ErrnoException).code === code
  );
}

export function projectStateDirectory(root: string): string {
  return join(root, "docs", "agent");
}

export async function ensureProjectStateFiles(
  root: string,
  templates: Partial<Record<ProjectStateFile, string>> = {}
): Promise<void> {
  const directory = projectStateDirectory(root);
  await mkdir(directory, { recursive: true });

  for (const file of PROJECT_STATE_FILES) {
    try {
      await writeFile(
        join(directory, file),
        templates[file] ?? DEFAULT_TEMPLATES[file],
        { encoding: "utf8", flag: "wx" }
      );
    } catch (error) {
      if (!hasCode(error, "EEXIST")) throw error;
    }
  }
}

export async function loadProjectState(root: string): Promise<ProjectStateSnapshot> {
  const directory = projectStateDirectory(root);
  const files: Partial<Record<ProjectStateFile, string>> = {};
  const missing: ProjectStateFile[] = [];

  for (const file of PROJECT_STATE_FILES) {
    try {
      files[file] = await readFile(join(directory, file), "utf8");
    } catch (error) {
      if (hasCode(error, "ENOENT")) {
        missing.push(file);
        continue;
      }
      throw error;
    }
  }

  return { directory, files, missing };
}
