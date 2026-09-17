# GARANG Project State

Last updated: 2026-09-17

## Current objective
Competition submission execution is complete by Founder report. Keep submitted competition surfaces stable and resume the core GARANG roadmap, beginning with P4 User Performance Model v1 / recommendation-outcome personalization.

## Repository observations
- CONTROL: `jangsang1214/GARANG-ai-agent`.
- PRODUCT: `jangsang1214/-fitmind-ai`.
- Commercial PRODUCT main remains frozen at `b863a7634bd64b03a6e6f3772950c43cc81afb6f` through the submission window.
- Wanted release branch: `wanted/2026-release`.
- Wanted release SHA: `3acd2ae654ce0d387b64174c96a6243d89cb9b74`.
- PRODUCT PR #154 `Fix Wanted browser Real AI transport` is merged into Wanted only.

## Competition submission status
Evidence class: RECORDED from Founder report; receipt/form artifacts were not independently re-opened in this reconciliation.
- Wanted: submitted.
- 롯데: submitted.
- 브로제이: submitted.
- Competition submission P1 is therefore closed operationally.
- Competition-specific public/runtime surfaces should remain change-frozen except for critical outage/bug handling or organizer-required changes.

## VERIFIED commercial evidence
- Release Gate #1449 / `35110020514`: FULL GREEN.
- Pages #799 / `35110017165`: SUCCESS.
- Production Coach Live Smoke `35101459492`: authenticated text + photo `source=llm` SUCCESS.

## VERIFIED Wanted evidence
- Canonical `/coach` remains Firebase-authenticated.
- Signed-out judge mode uses isolated `/wanted/coach` only for the explicit synthetic 14-day contract.
- Server boundary remains synthetic-contract-bound, text-only, exact-origin constrained, quota-limited and judging-period-limited.
- PR #154 Wanted Gate #97 / `35183623414`: GREEN.
- PR #154 full Release Gate #1494 / `35183623380`: FULL GREEN.
- PR #154 merged as `3acd2ae654ce0d387b64174c96a6243d89cb9b74`.
- Stable Wanted alias: `https://garang-wanted-2026-jangsang1214.vercel.app`.
- Production deployment: `dpl_DXa432LkkUdPcC2fD61ZcHHX3wDx` / READY.
- Live browser smoke VERIFIED `60초 심사 체험 → Coach → 나 준나 강해지고싶어` returns a context-aware Real AI answer without local fallback.

## Product / AI state
- Deterministic GARANG State/Decision Intelligence remains judgment owner.
- LLM remains bounded explanation/language/multimodal context.
- Intelligence Learning Contract v1 already links `decisionId → recommendationId → actionId → planId → executionId → outcomeId`.
- Outcome learning is still advisory-only; the next product-intelligence step is to turn accumulated outcomes into an explicit, inspectable User Performance Model rather than adding chatbot breadth.

## Stable
- Commercial GARANG baseline: GREEN / frozen through competition handoff.
- Wanted source/CI: GREEN.
- Wanted production Firebase API + CORS boundary: GREEN.
- Wanted public 14-day interactive runtime: GREEN.
- Wanted public visible Real AI Coach response: GREEN.
- Competition submission execution: RECORDED COMPLETE for Wanted / 롯데 / 브로제이.

## Broken / blockers
- No VERIFIED P0/P1 source, CI, Firebase, provider, judge-entry, touch or public-Coach blocker remains.
- No active competition-submission blocker remains by Founder report.
- Firebase build-image cleanup warning remains non-blocking cost hygiene.

## Next priorities
1. P4 define and implement User Performance Model v1: durable user-state features learned from action → execution → outcome evidence.
2. Preserve Golden Path and current commercial capability while integrating that model into interpretation/recommendation, not as a new standalone feature surface.
3. P2 protect CONTROL + PRODUCT main and harden production deployment credentials when it can be done without blocking P4.
4. Keep competition-specific deployments frozen except critical fixes or organizer-required changes.
