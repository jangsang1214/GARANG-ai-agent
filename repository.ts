import { readdir } from "node:fs/promises";
import { join } from "node:path";

export interface RepositorySnapshot {
  root: string;
  files: string[];
  directories: string[];
}

const IGNORED = new Set([
  ".git",
  "node_modules",
  "dist",
  "coverage"
]);

export async function scanRepository(root: string): Promise<RepositorySnapshot> {
  const files: string[] = [];
  const directories: string[] = [];

  async function walk(current: string): Promise<void> {
    const entries = await readdir(current, { withFileTypes: true });

    for (const entry of entries) {
      if (IGNORED.has(entry.name)) continue;

      const absolute = join(current, entry.name);
      const relative = absolute.slice(root.length + 1);

      if (entry.isDirectory()) {
        directories.push(relative);
        await walk(absolute);
      } else {
        files.push(relative);
      }
    }
  }

  await walk(root);

  return {
    root,
    files: files.sort(),
    directories: directories.sort()
  };
}