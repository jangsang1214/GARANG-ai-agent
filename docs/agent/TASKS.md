# GARANG Tasks

Last updated: 2026-09-20

## Closed P1 — Competition submissions
Status: DONE / RECORDED COMPLETE BY FOUNDER REPORT
Owner: Founder / Growth Business / Product / Release QA
Goal: submit GARANG to the active competition/application tracks without destabilizing the commercial product.

Recorded completion:
- Wanted: submitted. ✅ RECORDED
- 롯데: submitted. ✅ RECORDED
- 브로제이: submitted. ✅ RECORDED
- Submission receipts/forms were not independently re-opened in this reconciliation; do not upgrade this evidence class beyond RECORDED without observing those artifacts.

Wanted technical acceptance remains VERIFIED:
- Commercial PRODUCT main remains frozen at `b863a7634bd64b03a6e6f3772950c43cc81afb6f`. ✅
- Wanted release branch is `wanted/2026-release`. ✅
- Current Wanted release SHA is `3acd2ae654ce0d387b64174c96a6243d89cb9b74`. ✅
- PR #154 Wanted Gate #97 / `35183623414`: GREEN. ✅
- PR #154 full Release Gate #1494 / `35183623380`: FULL GREEN. ✅
- Production deployment `dpl_DXa432LkkUdPcC2fD61ZcHHX3wDx` is READY. ✅
- Live public browser smoke passes `60초 심사 체험 → Coach → 나 준나 강해지고싶어` with a visible context-aware Real AI answer and no local fallback. ✅

## P4 — User Performance Model v1
Status: V1 RELEASED / LONGITUDINAL VALIDATION NEXT
Owner: Product / AI Data / Engineering / Release QA
Goal: make GARANG progressively understand the user from accumulated action, execution and outcome evidence rather than only responding to the latest record.

Verified implementation:
- PR #156 merged with exact-head Release Gate #1500 GREEN.
- Common evidence-aware dimensions expose `value / confidence / sampleSize / lastUpdated / evidenceIds`.
- Confidence-gated context withholds missing/low-confidence dimensions.
- Intelligence Bridge exposure is read-only; `affectsDecision=false`; no automatic progression or state mutation.
- Existing recommendation accepted/rejected/dismissed evidence is durable and contributes to responsiveness evidence.

Next acceptance direction:
- Define a compact durable user-performance state derived from existing verified data, not a new parallel source of truth.
- Link model updates to the existing learning contract: `decisionId → recommendationId → actionId → planId → executionId → outcomeId`.
- Separate observed facts, inferred traits/trends and confidence.
- Recommendations must be attributable to evidence and reversible; no silent goal or plan mutation.
- Strengthen Golden Path interpretation/recommendation without adding a new top-level screen unless evidence proves it is necessary.
- Add regression coverage for persistence, stale/insufficient-data behavior and recommendation changes.

## Competition runtime protection
Status: ACTIVE POLICY
- Do not change competition-specific deployed surfaces after submission except critical outage/bug fixes or organizer-required changes.
- Commercial GARANG evolution continues separately; competition derivatives do not redefine canonical PRODUCT main.

## Closed P1 — Wanted public browser Real AI transport
Status: DONE / VERIFIED GREEN END-TO-END
Evidence: PR #154; Wanted Gate #97 GREEN; full Release Gate #1494 FULL GREEN; release `3acd2ae6…`; Vercel `dpl_DXa432LkkUdPcC2fD61ZcHHX3wDx`; live browser same-prompt smoke returns Real AI response without fallback.

## Closed P1 — Wanted public shell recovery
Status: DONE / VERIFIED GREEN

## Closed P1 — Wanted no-login Real AI Coach backend
Status: DONE / VERIFIED GREEN

## Closed P1 — Wanted Today Planner shortcut judge-mode gating fix
Status: DONE / VERIFIED GREEN

## P2 — Protect CONTROL + PRODUCT main
Status: PLANNED / NON-BLOCKING

## P2 — Production deployment credential hardening
Status: PLANNED / NON-BLOCKING

## P2 — Dependency/tooling hardening
Status: PLANNED / NON-BLOCKING

## P6 — Repository / cloud cost hygiene
Status: PLANNED


## Closed P1 — Production external AI health and Coach failure classification
Status: DONE / PROVIDER VERIFIED GREEN / POST-MERGE GATE PENDING
Owner: Engineering / AI Data / Release QA
Goal: determine whether the reported "external AI connection failure" is a provider outage and remove misleading client diagnostics.

Evidence:
- Production Coach Live Smoke #2 / `35455269231`: authenticated text and photo both returned `source=llm`, provider `openai`, model `gpt-5.6-luna`; alignment passed, photo grounding passed, disposable account cleanup passed.
- Root diagnostic defect: browser previously mapped every non-2xx/auth/network failure to one generic external-connection-failure message.
- PR #158 merged as `6260bcb2051f458c0a77dcbb83d95986c3fabad4` after exact-head Release Gate #1503 FULL GREEN.
- Pages #811 deployed the fix successfully; deployed app.js was directly observed with the new error classifier.
- Post-merge Release Gate #1505 is still IN PROGRESS at this observation.

Behavior after fix:
- 429/rate limit surfaces a retry-oriented message.
- 401/auth surfaces relogin/refresh guidance.
- provider/timeout/network failures are distinguished.
- deterministic GARANG local fallback remains available.
- exact historical error code for the user's earlier request is UNKNOWN; current provider health is VERIFIED GREEN.
