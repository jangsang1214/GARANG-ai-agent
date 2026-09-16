# GARANG Session Handoff & Recovery Protocol v7-lite

## PROJECT START order
1 `AGENTS.md`
2 `docs/agent/REPOSITORIES.json`
3 `PROJECT_STATE.md`
4 `PROJECT_GRAPH.json`
5 `SESSION_HANDOFF.md`
6 `TASKS.md`
7 `DECISIONS.md`
8 `TECHNICAL_DEBT.md`
9 `RELEASE_STATUS.md`
10 inspect CONTROL + PRODUCT branches/commits/open PRs/CI
11 reconcile evidence with state/graph
12 select top 1–3 priorities and route authorized work.

## Current handoff — 2026-09-16
- PRODUCT canonical commercial main: `b863a7634bd64b03a6e6f3772950c43cc81afb6f`.
- PRODUCT PR #130 (Coach composer photo `+`) is MERGED.
- PRODUCT PR #131 (mobile route intent across remounts) is MERGED.
- PR #131 exact-head Release Gate #1448 / run `35109312382`: FULL GREEN.
- Post-merge current-main Release Gate #1449 / run `35110020514`: FULL GREEN.
- Current-main Pages #799 / run `35110017165`: SUCCESS.
- Founder OS Event Envelope #968 / run `35110020344`: SUCCESS.
- Deployed web URL: `https://jangsang1214.github.io/-fitmind-ai/`.

## Coach photo UX
- Photo upload is no longer a separate tools row.
- Composer contains a compact `+` control, hidden image picker, inline thumbnail preview and remove action.
- One JPG/PNG/WebP image up to 8 MB is supported.
- Attachment is ephemeral: next Coach request consumes it, then local draft is cleared.
- Released contract forbids raw image persistence in GARANG state, localStorage, Firestore, telemetry and conversation text history.

## Route stability
- Post-#130 main exposed a repeatable WebKit physical-tap loss during Golden Path complete journey even though PR head and merge tree had zero file differences.
- Root pattern: presentation DOM could remount between touch intent and compatibility click.
- PR #131 hardened the canonical Router by carrying short non-drag touch intent through pointerup for existing Today/Record route controls only.
- Router public version remains frozen `garang-router-v1.3.0`; mouse/keyboard and data ownership are unchanged.
- Exact-head #1448 and post-merge #1449 both pass Golden Path complete journey plus authenticated Coach, Real LLM integration, recovery, mobile, Settings, button health and runtime stress.

## Production AI evidence
- Production Coach Live Smoke run `35101459492`: SUCCESS.
- Disposable Firebase identity verified authenticated production Text Coach and Photo Coach and was deleted afterward.
- Text Coach: `source=llm`, provider `openai`, model `gpt-5.6-luna`, GARANG decision alignment verified.
- Photo Coach: `source=llm`, provider `openai`, model `gpt-5.6-luna`, alignment + grounding + image context verified.
- PR #130/#131 did not change Functions code, so no new Functions deployment was required for those frontend changes.

## AI/Data released state
- Deterministic GARANG State/Decision Intelligence remains judgment owner.
- LLM remains bounded explanation/language layer.
- Intelligence Learning Contract v1 is released: `decisionId → recommendationId → actionId → planId → executionId → outcomeId`.
- Outcome Learning remains advisory-only: no silent mutation and no automatic progression increase.
- Remaining personalization follow-up: rejected/dismissed recommendations are not yet durable causal evidence.

## Release-channel decision
Commercial GARANG PRODUCT main is the source product. Wanted/competition work must begin from a copied VERIFIED stable snapshot in a separate derivative build/repo/deployment target. Competition-specific judge copy/demo/presentation changes do not automatically flow back to commercial GARANG.

## Current priority
1. Freeze/copy PRODUCT main `b863a763…` as the Wanted derivative source snapshot.
2. Complete submission packaging and judge-facing narrative without adding new commercial scope.
3. After submission, resume User Performance Model v1 / recommendation-outcome personalization.

## Non-blocking debt
- Functions dependency audit: 9 moderate findings; breaking upgrade path requires dedicated release work.
- Root dev/tooling informational audit: 23 findings; production-runtime audit remains clean.
- CONTROL/PRODUCT main are not server-protected.
- Production deploy auth should migrate to OIDC/WIF after replacement verification.
- Firebase build-image retention cleanup remains cost hygiene and requires reviewed/destructive handling.

## CONTROL state
- Reconciliation branch: `agent/reconcile-learning-contract-2026-09-16`.
- Persistent state is being closed through CONTROL PR #32 after PRODUCT release evidence above.

## Handoff rule
Never turn old handoff text into VERIFIED evidence without observing the source. DONE requires implementation + acceptance + verification + regression consideration + material state synchronization. Merge/deployment/live-provider evidence remain separate states.
