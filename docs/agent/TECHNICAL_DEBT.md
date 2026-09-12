# GARANG Technical Debt

## TD-001 — No model/provider action-synthesis layer
Severity: MEDIUM
Area: orchestration boundary
Problem: Deterministic core executes explicit typed actions but does not synthesize them from natural language by itself.
Risk: Fully external autonomous operation needs a provider/orchestrator.
Mitigation: API-key-free mode uses ChatGPT + GitHub for reasoning/action proposal.
Recommended fix: If external autonomy becomes necessary, add a provider adapter that emits typed capabilities/actions, never unrestricted shell text.

## TD-002 — Runtime AgentMemory is process-local
Severity: MEDIUM
Area: `src/context/memory.ts`
Problem: `AgentMemory` stores entries in a process-local `Map`.
Risk: Runtime state disappears on process exit.
Mitigation: `docs/agent/` persists human-readable project state; `project-state.ts` loads/initializes it.
Recommended fix: Add structured runtime persistence only when needed.

## TD-003 — Natural-language capability inference is heuristic
Severity: LOW
Area: `src/agent/planner.ts`
Problem: When no explicit implementation capability is supplied, the deterministic planner still uses phrase matching to infer one.
Risk: Planning metadata may be conservative or inaccurate for ambiguous requests.
Mitigation: Actual action execution is authorized by explicit typed capability and central policy; callers may provide `implementationCapability` directly.
Recommended fix: A future provider adapter should emit explicit capabilities from structured tool schemas.
