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
Recommended fix: add structured runtime persistence only when a real process-surviving workflow requires it; do not confuse CONTROL AgentMemory with PRODUCT user-performance memory.

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

## TD-005 — PRODUCT event adapter merge readiness
Status: RESOLVED
Severity: RESOLVED
Area: cross-repository integration
Previous problem: PR #69 had a PR-context WebKit failure and could not be merged while RED.
Resolution: the event adapter was subsequently merged and PRODUCT post-merge Release Gate #1004 plus Event Envelope #3 were GREEN. The previous “not merge-ready” statement is stale and must not be treated as a current blocker.

## TD-006 — Authenticated production Real LLM provider evidence remains incomplete
Severity: MEDIUM
Area: production provider boundary
Problem: production Firebase Function deployment, provider secret configuration and public auth/method boundaries are now VERIFIED, but activation run #2 could not execute authenticated live provider smoke because no secure `GARANG_FIREBASE_ID_TOKEN` was available in Actions. Live `source: llm` and two-user production personalization therefore remain unverified.
Risk: deployed infrastructure could be mistaken for verified provider behavior under a real authenticated user.
Mitigation: production status stays YELLOW until canonical authenticated smoke returns aligned provider evidence. Do not paste Firebase ID tokens into chat.
Recommended fix: establish a safe short-lived authenticated test identity/token path, run `smoke:coach:prod`, then repeat with a deliberately different test user if secure evidence is available.

## TD-007 — Firebase Functions dependency upgrade pending
Severity: LOW / MEDIUM
Area: production Functions runtime
Problem: Firebase CLI reports the current `firebase-functions` dependency as outdated and explicitly warns that upgrading may include breaking changes.
Risk: delayed access to SDK fixes/features; opportunistic upgrade could regress production behavior.
Mitigation: current production deploy and Release Gate are GREEN on the pinned dependency.
Recommended fix: handle as a dedicated dependency-upgrade PR with emulator, full Release Gate and production-route regression verification; do not bundle into feature work.

## TD-008 — Firebase build-image cleanup warning
Severity: LOW / COST HYGIENE
Area: production deployment / Artifact Registry
Problem: successful production deploy reported an unhandled cleanup error for build images and warned of a possible small monthly storage bill.
Risk: orphaned build images may accumulate minor cost.
Mitigation: deployment itself succeeded; no destructive cleanup was performed automatically.
Recommended fix: inspect Artifact Registry/GCR build images and retention policy. Manual deletion is destructive/cost-related and requires explicit Founder approval before execution.
