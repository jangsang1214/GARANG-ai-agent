import test from "node:test";
import assert from "node:assert/strict";
import { loadProjectGraph, traceToGoals, validateProjectGraph } from "../src/project-graph/graph.js";

test("project graph is structurally valid and tasks trace to a goal", async () => {
  const graph = await loadProjectGraph("docs/agent/PROJECT_GRAPH.json");
  assert.deepEqual(validateProjectGraph(graph), []);
  const goals = traceToGoals(graph, "TASK-REAL-DEVICE-VALIDATION");
  assert.equal(goals.some((goal) => goal.id === "GOAL-PROTECT-GOLDEN-PATH"), true);
});
