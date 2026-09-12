# GARANG Technical Debt

## TD-001 — No external always-on provider/runtime
Severity: MEDIUM
Area: orchestration boundary
Problem: v7-lite emits/routes deterministic events but no external worker continuously consumes them and synthesizes approved actions.
Mitigation: ChatGPT + GitHub handles active-session reasoning; event contracts are stable for a future worker.
Recommended fix: webhook/queue/provider adapter only when background autonomy is explicitly needed.

## TD-002 — Runtime AgentMemory is process-local
Severity: MEDIUM
Area: `src/context/memory.ts`
Problem: process exit loses runtime `Map` state.
Mitigation: GitHub state + Project Graph remain durable control-plane state.

## TD-003 — Natural-language routing remains heuristic fallback
Severity: LOW
Area: planner/orchestrator
Problem: ambiguous text can be conservatively misrouted.
Mitigation: typed capabilities and explicit intent/repository may override heuristic inference.

## TD-004 — Event artifacts are not automatically consumed
Severity: EXPECTED / MEDIUM
Area: event runtime
Problem: workflows emit `FounderEventEnvelope` artifacts but no service wakes ChatGPT or executes follow-up work.
Mitigation: no false autonomy claim; deterministic contract exists.

## TD-005 — PRODUCT event adapter is not merge-ready
Severity: MEDIUM
Area: cross-repository integration
Problem: PR #69 event workflow succeeds, but the existing product Release Gate #1000 fails in `browser-webkit-regression.test.cjs` at Record→workout after returning from Coach to Today.
Evidence: failure reproduced on PR #69 retry; PRODUCT main Release Gate #999 rerun passes the same complete browser suite on application SHA `c0fd29e...`. PR #69 diff contains no app runtime code.
Risk: merging while RED would violate the release constitution; current evidence does not prove the adapter caused an app regression.
Recommended fix: isolate the PR-context transition instability in a separate diagnostic/test-reliability change, preserve the functional assertion, and require a GREEN product gate before merging the adapter.
