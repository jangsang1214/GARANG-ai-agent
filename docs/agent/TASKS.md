# GARANG Tasks

Last updated: 2026-09-16

## Active P1 — Wanted AI Championship submission
Status: READY FOR PACKAGING / TECHNICAL BASELINE GREEN
Owner: Founder / Growth Business / Product / Release QA
Goal: submit a stable deployed GARANG experience that makes the Personal Performance Intelligence thesis understandable within the first interaction.
Acceptance:
- Deployed web service remains publicly reachable through the judging period. ✅ current Pages deployment verified
- Submission states the real user problem, GARANG solution, AI usage method and major AI tools used.
- Submission does not describe GARANG as a generic chatbot; explain `Signal → Interpretation → Recommendation → Action → Outcome → Learning` and `GARANG decides → LLM explains`.
- Judge can understand the core value from signup/onboarding → Today → Record → Coach → next action without requiring hidden instructions.
- No private user data, secrets or company-confidential material appears in the submission.
- Avoid new major features before submission; any code change must preserve the GREEN release gate.
Evidence: PRODUCT main `01473986568a6bbb122ab9ff05c8927a73b5622b`; post-merge Release Gate #1442 GREEN; Pages #797 SUCCESS; Production Coach Live Smoke `35101459492` SUCCESS.

## Closed P1 — Coach reconnect + release stabilization
Status: DONE / VERIFIED GREEN
Owner: Engineering / Release QA / AI Data / Design Brand
Acceptance:
- Deterministic GARANG decision ownership and fail-closed local Coach behavior preserved. ✅
- 25s provider budget with at most one transient-only retry; auth failures are not retried. ✅
- Firebase Function timeout 60s; Coach limits 40/10min and 200/day. ✅
- Signed-out demo entry removed. ✅
- One-photo ephemeral Coach path released. ✅
- Today action / bottom Check-in / remount / Simplified Shell / Nutrition regressions stable in full WebKit. ✅
- Core/Functions/security/build/Firebase/Firestore GREEN. ✅
- Real production text Coach verified. ✅
- Real production photo Coach verified. ✅
Evidence: PR #123 merged; PR #128 and #129 closed final UI races; exact main #1442 GREEN.

## Closed P1 — Intelligence Learning Contract v1
Status: DONE / VERIFIED GREEN
Owner: AI Data / Engineering / Release QA
Goal: causal learning layer across `decisionId → recommendationId → actionId → planId → executionId → outcomeId`.
Acceptance:
- Existing Agent Contract recommendation lifecycle reused. ✅
- `decisionId` / `decisionMode` persist through proposal, modification and confirmation. ✅
- Confirmed canonical plan rows and confirmation actionLog retain decision/recommendation attribution. ✅
- Browser/core + Functions build read-only causal graphs. ✅
- Outcome Learning consumes the graph as advisory-only evidence. ✅
- No autonomous LLM tool calling, silent mutation or automatic progression increase. ✅
- Focused linkage tests included in root test chain. ✅
- Full release verification GREEN. ✅
Evidence: PR #124 merged at `ba31fa971b2d4a84ac69072229903fc048543056`; later post-merge main #1442 remains GREEN.

## Closed P1 — Repeatable production Coach authentication smoke
Status: DONE / VERIFIED GREEN
Owner: Engineering / Release QA / AI Data
Acceptance:
- Do not depend on a manually maintained, expiring `GARANG_FIREBASE_ID_TOKEN` secret. ✅
- Create a disposable Firebase identity at smoke time. ✅
- Mask short-lived ID/refresh tokens. ✅
- Verify authenticated production text Coach. ✅
- Verify authenticated production photo Coach. ✅
- Delete disposable Firebase identity in cleanup. ✅
Evidence: workflow `Production Coach Live Smoke`, run `35101459492`, SUCCESS on main `01473986568a6bbb122ab9ff05c8927a73b5622b`.

## P3 — Judge-first clarity polish
Status: OPTIONAL / SMALL ONLY
Owner: Product / Design Brand / Growth Business
Acceptance direction:
- Maximum a few restrained copy/first-60-second changes.
- Clarify GARANG as Personal Performance Intelligence, not “AI 운동 챗봇”.
- Preserve Today / Record / Coach / Progress shell and Golden Path.
- No anonymous demo reintroduction.
- Full release gate required after any code change.

## Next P4 — User Performance Model v1
Status: PLANNED AFTER SUBMISSION BASELINE FREEZE
Owner: AI Data / Product / Engineering
Acceptance direction:
- Learn living user dimensions from attributable evidence, not onboarding alone.
- Each dimension includes value, confidence, sample size, last updated time and evidence IDs.
- Start with deterministic aggregation; do not introduce ML/vector infrastructure without measured need.
- Use `State × Recommendation × Action × Outcome` as the proprietary learning unit.
- Add explicit rejected/dismissed recommendation evidence in the future personalization layer.

## P2 — Protect CONTROL + PRODUCT main
Status: PLANNED / NON-BLOCKING FOR SUBMISSION
Owner: Command Center / Release QA
Acceptance: require PR-based changes/status checks and block force-push/deletion where repository plan/capabilities permit.

## P2 — Production deployment credential hardening
Status: PLANNED / NON-BLOCKING FOR SUBMISSION
Owner: Engineering / Release QA
Acceptance: least-privilege review and migration toward short-lived OIDC / Workload Identity Federation where practical; do not rotate working production credentials until replacement is VERIFIED.

## P6 — Repository / cloud cost hygiene
Status: PLANNED
Owner: Command Center / Engineering
Acceptance: close superseded experiments and handle Firebase build-artifact retention through safe reviewed changes.

## Closed / verified baselines
- Founder OS v7-lite event-ready control plane — DONE.
- Today Single Next Action — DONE.
- Today workout preparation / execution integration — DONE / self-healing remount verified.
- Commercialization Stage 1 stabilization — DONE.
- Stage 2 Plan-vs-Actual / Adaptive Loop v1 — DONE.
- Weekly Review driven by real outcome signals — DONE.
- Real LLM boundary + semantic alignment + Outcome Learning v2 — DONE.
- Server readiness / Firebase boundaries — DONE.
- Food Data Foundation v2 — DONE.
- Nutrition Intelligence v2 + Coach Knowledge Grounding — DONE.
- Official food-source ingestion/normalization and reviewed corpus replacement — DONE / VERIFIED GREEN.
