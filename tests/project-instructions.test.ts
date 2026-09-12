import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

test("ChatGPT Project Instructions stay within the 8,000-character product limit", async () => {
  const content = await readFile("docs/agent/CHATGPT_PROJECT_INSTRUCTIONS.md", "utf8");
  assert.ok(
    content.length <= 8000,
    `Project Instructions are ${content.length} characters; limit is 8000.`
  );
  assert.ok(content.includes("GARANG FOUNDER OS v7-lite"));
});
