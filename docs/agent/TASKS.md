# GARANG Tasks

Last updated: 2026-09-16

## Active P1 — Coach reconnect + release stabilization
Status: IN PROGRESS / YELLOW
Owner: Engineering / Release QA / AI Data / Design Brand
Acceptance:
- PR #123 preserves deterministic GARANG decision ownership and fail-closed local Coach fallback.
- Provider budget is 25s with at most one transient-only retry; 401/auth failures are not retried.
- Firebase Function timeout is 60s; Coach limits are 40/10min and 200/day.
- Today bottom Check-in, Today action flow, Simplified Shell and Nutrition readiness regressions are stable in full WebKit.
- Exact-head Core/Functions/security/Commercial Core/Build/Firebase/Firestore remain GREEN.
- Full WebKit is reliably GREEN before merge.
- After Founder-approved merge, production Functions/Pages deploy is verified with POST 401 / GET 405 and real text + photo Coach smoke.
Evidence: PRODUCT PR #123 OPEN / UNMERGED, head `ef17f0673b47b4adb0b807ed89d423b9a0d97813`; exact-head run `35067308863` core GREEN but browser failed Today bottom Check-in CTA. New production failure `code` remains UNKNOWN.

## Active P1 — Intelligence Learning Contract v1
Status: IMPLEMENTED / VERIFICATION YELLOW
Owner: AI Data / Engineering / Release QA
Goal: close the first causal learning layer across `decisionId → recommendationId → actionId → planId → executionId → outcomeId` so GARANG can learn from intervention-response evidence rather than chat history alone.
Acceptance:
- Existing Agent Contract recommendation lifecycle is reused instead of creating a parallel system. ✅
- `decisionId` / `decisionMode` persist through proposal, modification and confirmation. ✅
- Confirmed canonical plan rows and confirmation actionLog retain decision/recommendation attribution. ✅
- Browser/core and Functions build stable read-only causal graphs. ✅
- Outcome Learning consumes the graph as advisory-only evidence. ✅
- No autonomous LLM tool calling, no silent mutation, no automatic progression increase. ✅
- Focused linkage tests are included in `npm test`. ✅
- Core/Functions/security/Commercial Core/Build/Firebase/Firestore pass. ✅
- Full stacked WebKit release verification is reliably GREEN. ⏳
- Rebase/retarget onto post-#123 main and re-run full gate before merge. ⏳
Evidence: PRODUCT Draft PR #124 OPEN / UNMERGED, stacked on #123, head `aabf5eadf38324a4503abc1000ff1c0ad1fa33ac`; exact-head core-build-rules GREEN. Browser attempts have moved between a Today CTA timing failure and a complete-journey production `/api/coach` access-control/CORS console failure, so overall status remains YELLOW until bounded rerun evidence is stable.

## Active P1 — Validate deployed Golden Path on real target device
Status: IN PROGRESS / PARTIAL GREEN
Owner: Release QA / Product / Design Brand
Acceptance:
- iPhone Chrome load/onboarding/Today/first record/Coach. ✅
- Authenticated production provider path reaches safe fallback on failure. ✅
- Post-#123 live text Coach succeeds or returns a verified privacy-safe error code. ⏳
- Post-#123 photo Coach succeeds or returns a verified privacy-safe error code. ⏳
- Plan → execution → persistence → Accumulation. ⏳
- Target in-app browser Golden Path. ⏳

## Active P1 — Wanted AI Championship submission
Status: PLANNED AFTER RELEASE STABILIZATION + REAL-DEVICE EVIDENCE
Owner: Founder / Growth Business / Product

## Next P4 — User Performance Model v1
Status: PLANNED AFTER INTELLIGENCE LEARNING CONTRACT RELEASE
Owner: AI Data / Product / Engineering
Acceptance direction:
- Learn living user dimensions from attributable evidence, not onboarding alone.
- Each learned dimension includes value, confidence, sample size, last updated time and evidence IDs.
- Start with deterministic evidence aggregation; do not introduce ML/vector infrastructure without measured need.
- Use `State × Recommendation × Action × Outcome` as the proprietary learning unit.

## P2 — Protect CONTROL + PRODUCT main
Status: PLANNED
Owner: Command Center / Release QA
Acceptance: require PR-based changes/status checks and block force-push/deletion where repository plan/capabilities permit.
Evidence: current protection remains procedural rather than server-enforced.

## P2 — Production deployment credential hardening
Status: PLANNED AFTER LIVE AI STABILIZATION
Owner: Engineering / Release QA
Acceptance: least-privilege review and migration toward short-lived OIDC / Workload Identity Federation where practical; do not rotate working credentials until replacement is VERIFIED.

## P6 — Repository / cloud cost hygiene
Status: PLANNED
Owner: Command Center / Engineering
Acceptance: close superseded experiment PRs and handle Firebase build-artifact retention only through safe reviewed changes.

## Closed / verified baselines
- Founder OS v7-lite event-ready control plane — DONE.
- Today Single Next Action — DONE.
- Final Today workout preparation / execution integration — DONE / VERIFIED GREEN on prior merged baseline.
- Commercialization Stage 1 stabilization — DONE.
- Stage 2 Plan-vs-Actual / Adaptive Loop v1 — DONE.
- Weekly Review driven by real outcome signals — DONE.
- Real LLM boundary + semantic alignment + Outcome Learning v2 — DONE.
- Server readiness / Firebase staging boundaries — DONE.
- Food Data Foundation v2 — DONE.
- Nutrition Intelligence v2 + Coach Knowledge Grounding — DONE.
- Official food-source ingestion/normalization and reviewed corpus replacement — DONE / VERIFIED GREEN.
- Production Real AI Coach baseline infrastructure, secret binding, public auth/method boundary and prior timeout-fix deploy — VERIFIED; latest #123 release remains separate and unmerged.
