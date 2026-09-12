import { readFile } from "node:fs/promises";
import { isWorkstream, type Workstream } from "../orchestration/workstreams.js";

export type ProjectNodeKind =
  | "goal"
  | "metric"
  | "initiative"
  | "feature"
  | "task"
  | "change"
  | "verification"
  | "release"
  | "result"
  | "decision";

export type ProjectNodeStatus = "planned" | "active" | "blocked" | "done" | "superseded";
export type ProjectEdgeKind =
  | "supports"
  | "measures"
  | "implements"
  | "verifies"
  | "depends-on"
  | "blocks"
  | "produces";

export interface ProjectNode {
  id: string;
  kind: ProjectNodeKind;
  title: string;
  status: ProjectNodeStatus;
  ownerWorkstream?: Workstream;
  repositoryId?: string;
}

export interface ProjectEdge {
  from: string;
  to: string;
  kind: ProjectEdgeKind;
}

export interface ProjectGraph {
  version: 1;
  nodes: ProjectNode[];
  edges: ProjectEdge[];
}

export function validateProjectGraph(graph: ProjectGraph): string[] {
  const errors: string[] = [];
  const ids = new Set<string>();

  if (graph.version !== 1) errors.push("project graph version must be 1");

  for (const node of graph.nodes) {
    if (!node.id.trim()) errors.push("node id is required");
    if (ids.has(node.id)) errors.push(`duplicate node id: ${node.id}`);
    ids.add(node.id);
    if (!node.title.trim()) errors.push(`node title is required: ${node.id}`);
    if (node.ownerWorkstream && !isWorkstream(node.ownerWorkstream)) {
      errors.push(`invalid workstream on ${node.id}: ${node.ownerWorkstream}`);
    }
  }

  for (const edge of graph.edges) {
    if (!ids.has(edge.from)) errors.push(`dangling edge source: ${edge.from}`);
    if (!ids.has(edge.to)) errors.push(`dangling edge target: ${edge.to}`);
    if (edge.from === edge.to) errors.push(`self edge is not allowed: ${edge.from}`);
  }

  return errors;
}

export function parseProjectGraph(content: string): ProjectGraph {
  const graph = JSON.parse(content) as ProjectGraph;
  const errors = validateProjectGraph(graph);
  if (errors.length > 0) throw new Error(`Invalid project graph: ${errors.join("; ")}`);
  return graph;
}

export async function loadProjectGraph(path: string): Promise<ProjectGraph> {
  return parseProjectGraph(await readFile(path, "utf8"));
}

export function traceToGoals(graph: ProjectGraph, startId: string): ProjectNode[] {
  const byId = new Map(graph.nodes.map((node) => [node.id, node]));
  const edgesBySource = new Map<string, ProjectEdge[]>();
  for (const edge of graph.edges) {
    const current = edgesBySource.get(edge.from) ?? [];
    current.push(edge);
    edgesBySource.set(edge.from, current);
  }

  const queue = [startId];
  const visited = new Set<string>();
  const goals: ProjectNode[] = [];

  while (queue.length > 0) {
    const currentId = queue.shift();
    if (!currentId || visited.has(currentId)) continue;
    visited.add(currentId);

    const node = byId.get(currentId);
    if (node?.kind === "goal") goals.push(node);

    for (const edge of edgesBySource.get(currentId) ?? []) {
      if (!visited.has(edge.to)) queue.push(edge.to);
    }
  }

  return goals;
}
