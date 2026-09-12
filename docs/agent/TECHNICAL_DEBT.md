# GARANG Technical Debt

## TD-001 — No model/provider action-synthesis layer

Severity: MEDIUM
Area: orchestration boundary

Problem: The core can execute explicit typed actions with permission checks, but it does not synthesize those actions from natural-language tasks by itself.

Risk: Fully external autonomous operation still needs a provider/orchestrator that converts intent into explicit actions.

Current mitigation: In the API-key-free workflow, ChatGPT + GitHub provides the reasoning/action proposal layer while the repository stores rules and state.

Recommended fix: When external autonomy is actually needed, add a provider adapter that emits typed actions rather than allowing free-form shell execution.

## TD-002 — Runtime AgentMemory is process-local

Severity: MEDIUM
Area: `src/context/memory.ts`

Problem: `AgentMemory` stores entries only in a `Map`.

Risk: Runtime state disappears when the process exits.

Mitigation: `docs/agent/` is the human-readable persistent project layer; `project-state.ts` can load/initialize it.

Recommended fix: Add a structured persistent runtime store only when needed, without making chat history the database.

## TD-003 — Risk classification is keyword based

Severity: MEDIUM
Area: `src/agent/planner.ts`

Problem: High-risk detection is a small keyword list.

Risk: Semantically risky work may be misclassified.

Recommended fix: Continue moving risk ownership toward typed actions/capabilities and explicit permission requirements.
