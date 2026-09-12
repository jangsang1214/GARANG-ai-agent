# GARANG Technical Debt

## TD-001 — No external model/provider action-synthesis runtime
Severity: MEDIUM
Area: orchestration boundary
Problem: The deterministic core routes work and executes explicit typed actions, but no external always-on provider turns events/natural-language goals into continuous action plans.
Risk: True background autonomy is not available.
Mitigation: ChatGPT + GitHub supplies active-session reasoning; v7-lite provides stable registry/graph/event contracts.
Recommended fix: Only when background autonomy is needed, add a webhook/queue worker + provider adapter that emits typed capabilities/actions.

## TD-002 — Runtime AgentMemory is process-local
Severity: MEDIUM
Area: `src/context/memory.ts`
Problem: Runtime memory uses a process-local `Map`.
Risk: Runtime state disappears on exit.
Mitigation: GitHub state and Project Graph are durable human-readable control-plane state.
Recommended fix: Add structured runtime storage only when an always-on worker proves it necessary.

## TD-003 — Natural-language intent/capability inference is heuristic
Severity: LOW
Area: `src/agent/planner.ts`, `src/orchestration/orchestrator.ts`
Problem: Fallback text inference can classify ambiguous intent conservatively or incorrectly.
Mitigation: Actual actions use typed capability authorization; callers may provide explicit intent/capability.
Recommended fix: Future provider adapter emits structured intent, target repo and capabilities from tool schemas.

## TD-004 — Event artifacts are not consumed automatically
Severity: EXPECTED / MEDIUM
Area: event runtime
Problem: GitHub workflows can emit FounderEventEnvelope artifacts, but no service subscribes and acts on them.
Risk: Event-ready behavior still requires an active ChatGPT session or future worker.
Mitigation: Contract and routing are deterministic/testable; no false claim of background execution.
Recommended fix: Add webhook/queue consumer only after v7-lite workflow proves useful.

## TD-005 — Cross-repository event coverage requires an adapter per repo
Severity: LOW
Area: GitHub workflows
Problem: A workflow in CONTROL cannot receive PRODUCT repository events.
Mitigation: Use the same envelope script/workflow contract in PRODUCT with read-only permissions.
Recommended fix: Install and verify the PRODUCT adapter without changing app runtime behavior.
