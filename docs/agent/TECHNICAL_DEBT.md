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

## TD-006 — Live production Real LLM activation is not yet evidenced
Severity: MEDIUM
Area: production provider boundary
Problem: repository code and CI verify the Real LLM gateway, semantic alignment and privacy-safe smoke tooling, but the current control plane cannot verify target Firebase secret/config presence, exact deployed Functions revision, authenticated live `source: llm`, two-user production personalization behavior or provider observability.
Risk: code readiness could be mistaken for live-provider readiness.
Mitigation: `npm run smoke:coach:prod` fails closed unless the authenticated live boundary returns aligned LLM evidence; RELEASE_STATUS keeps this gate YELLOW/UNKNOWN.
Recommended fix: use authorized target Firebase/GCP execution access, verify deployment/config without exposing secret material, then run the canonical production smoke and record evidence.
