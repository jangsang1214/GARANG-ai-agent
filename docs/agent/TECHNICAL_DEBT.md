# GARANG Technical Debt

## TD-001 — CodingAgent does not execute implementation steps

Severity: HIGH
Area: `src/agent/agent.ts`

Problem: The agent creates a plan and checks permissions, but its run loop only executes verification. It does not bind the plan's inspect/implement steps to tool actions.

Risk: The TypeScript core can be described as orchestration scaffolding, but not yet as a self-contained autonomous coding executor.

Recommended fix: Introduce an explicit execution-step contract that includes validated tool inputs, execute permitted steps, then verify and generate a bounded recovery action.

## TD-002 — Runtime AgentMemory is process-local

Severity: MEDIUM
Area: `src/context/memory.ts`

Problem: `AgentMemory` stores entries only in a `Map`.

Risk: Runtime state disappears when the process exits.

Mitigation: `docs/agent/` is now the human-readable persistent project layer; `project-state.ts` can load/initialize it.

Recommended fix: Add a structured persistent runtime store only when needed, without making chat history the database.

## TD-003 — Risk classification is keyword based

Severity: MEDIUM
Area: `src/agent/planner.ts`

Problem: High-risk detection is a small keyword list.

Risk: Semantically risky work may be misclassified.

Recommended fix: Replace/augment keywords with typed operation capabilities and explicit permission requirements.
