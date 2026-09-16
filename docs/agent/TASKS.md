# GARANG Tasks

Last updated: 2026-09-17

## Active P1 — Wanted derivative public deployment + final submission
Status: YELLOW / SOURCE+CI+PUBLIC ROOT GREEN, HUMAN CLICK-THROUGH PENDING
Owner: Founder / Growth Business / Product / Release QA
Goal: publish the verified Wanted derivative at its own public URL and complete the competition submission without destabilizing commercial GARANG.
Acceptance:
- Commercial source snapshot is PRODUCT main `b863a7634bd64b03a6e6f3772950c43cc81afb6f`. ✅
- Wanted derivative release branch is `wanted/2026-release`. ✅
- Current Wanted release SHA is `149ba11fe9dba33033aa3b1d201f7b3141f782ec`. ✅
- Relative 14-day synthetic judge dataset is release-merged and CI-verified. ✅
- Dataset includes 14 daily check-ins, 42 meals, workout/running/body history and fatigue-driven plan-adjustment evidence. ✅
- Deployment-origin compatibility remains a permanent Wanted CI check. ✅
- Founder-observed second public entry failure led to a competition-only MutationObserver safety fix. ✅
- PR #137 Wanted gate #32 / `35131048847`: GREEN. ✅
- PR #137 full GARANG Release Gate #1461 / `35131048722`: FULL GREEN. ✅
- PR #137 merged as `149ba11fe9dba33033aa3b1d201f7b3141f782ec`. ✅
- Post-merge Wanted gate #33 / `35131663143`: GREEN. ✅
- Commercial GARANG remains canonical and unchanged. ✅
- Vercel Authentication / SSO Deployment Protection disabled by Founder. ✅
- Vercel production redeployed from exact Wanted release SHA; deployment `dpl_Bc7dxWoziC633y8EEZ6BWDJUFQWE` returned READY. ✅
- Public alias is `https://garang-wanted-2026-jangsang1214.vercel.app`. ✅
- Fresh unauthenticated rendered fetch opens the GARANG page without `login_required`. ✅
- Fresh/incognito human smoke passes `60초 심사 체험 → Today → Coach → Progress`. ⬜ final public-runtime evidence
- Replace `[WANTED_PUBLIC_URL]` in final submission copy after the human smoke passes. ⬜
- Wanted participation registration and final submission are completed. ⬜ Founder final action

## Closed P1 — Wanted judge-entry observer hotfix
Status: DONE / VERIFIED GREEN AT SOURCE+CI
Owner: Engineering / Release QA
Acceptance:
- Identify source-level risk behind public signed-out judge transition. ✅
- Filter redundant `hidden` mutations only during Wanted runtime bootstrap. ✅
- Preserve real visibility changes and restore native MutationObserver. ✅
- Add regression coverage for redundant vs real visibility mutations. ✅
- Preserve commercial Golden Path, authenticated Coach, Real LLM and mobile regression behavior. ✅
Evidence: PRODUCT PR #137 merged as `149ba11f…`; Wanted gate #32 GREEN; full Release Gate #1461 FULL GREEN; post-merge Wanted gate #33 GREEN.

## Closed P1 — Wanted judge-entry deployment-origin hotfix
Status: DONE / VERIFIED GREEN AT SOURCE+CI
Owner: Engineering / Release QA
Acceptance:
- Derive competition asset root from loaded `version.js`, not Vercel document origin. ✅
- Route 14-day dataset and competition CSS/JS to the same frozen asset root. ✅
- Leave unrelated runtime fetches untouched. ✅
- Add deployment-origin compatibility regression test. ✅
- Preserve commercial Golden Path, authenticated Coach, Real LLM and mobile regression behavior. ✅
Evidence: PRODUCT PR #134 merged; Wanted gate #20 GREEN; full Release Gate #1455 FULL GREEN; post-merge Wanted gate #21 GREEN.

## Closed P1 — Wanted 14-day judge data upgrade
Status: DONE / VERIFIED GREEN
Owner: Product / Engineering / Release QA
Acceptance:
- Replace shallow sample history with a date-relative two-week synthetic history. ✅
- Keep all sample records local-only and clearly synthetic. ✅
- Exercise nutrition, recovery and body accumulation are visible to Today/Coach/Progress. ✅
- Strengthen CI so the 14-day dataset and 60-second WebKit journey are both verified. ✅
- Keep commercial main unchanged. ✅
Evidence: PRODUCT PR #133 merged to `wanted/2026-release`; Release Gate #1454 `35122058195` SUCCESS; post-merge Wanted gate #13 `35122761724` SUCCESS.

## Closed P1 — Wanted judging derivative build
Status: DONE / VERIFIED GREEN
Owner: Product / Design Brand / Engineering / Release QA
Acceptance:
- Add a clear `60초 심사 체험` entry without reintroducing the retired commercial demo flag. ✅
- Seed only synthetic local sample records. ✅
- Guide judges through Today → Coach → Progress. ✅
- Keep real production GPT/photo Coach on the existing authenticated path. ✅
- Preserve the full commercial regression suite. ✅

## Closed P1 — Commercial critical-path baselines
Status: DONE / VERIFIED GREEN
- Coach photo composer simplification — PR #130 / Gate #1444 GREEN.
- Mobile route intent across remounts — PR #131 / post-merge Gate #1449 FULL GREEN.
- Coach reconnect + production AI stabilization — Production Coach Live Smoke `35101459492` SUCCESS.
- Intelligence Learning Contract v1 — causal `decisionId → recommendationId → actionId → planId → executionId → outcomeId` released.

## P2 — Protect CONTROL + PRODUCT main
Status: PLANNED / NON-BLOCKING
Owner: Command Center / Release QA
Acceptance: enforce PR-based changes/status checks and block force-push/deletion where practical without making solo-Founder operation brittle.

## P2 — Production deployment credential hardening
Status: PLANNED / NON-BLOCKING
Owner: Engineering / Release QA
Acceptance: migrate toward GitHub OIDC / Google Workload Identity Federation; retire long-lived credentials only after replacement is VERIFIED.

## P2 — Dependency/tooling hardening
Status: PLANNED / NON-BLOCKING FOR CURRENT WEB BASELINE
Owner: Engineering / Release QA
Acceptance:
- Resolve moderate Functions findings through a dedicated breaking-upgrade PR with emulator + production smoke evidence.
- Reduce root dev/tooling audit findings separately from the clean production-runtime audit.
- Modernize CONTROL tooling in a dedicated verified PR.

## P6 — Repository / cloud cost hygiene
Status: PLANNED
Owner: Command Center / Engineering
Acceptance: close superseded experiments and configure safe Firebase build-artifact retention; destructive cleanup requires explicit Founder approval.

## Next P4 — User Performance Model v1
Status: PLANNED AFTER SUBMISSION FREEZE
Owner: AI Data / Product / Engineering
Acceptance direction:
- Learn user dimensions from attributable evidence, not onboarding alone.
- Each dimension includes value, confidence, sample size, last-updated time and evidence IDs.
- Start deterministic; do not introduce ML/vector infrastructure without measured need.
- Add explicit rejected/dismissed recommendation evidence to future personalization.

## Closed / verified baselines
- Founder OS v7-lite event-ready control plane — DONE.
- Today Single Next Action — DONE.
- Today workout preparation/execution integration — DONE.
- Commercialization Stage 1 stabilization — DONE.
- Plan-vs-Actual / Adaptive Loop v1 — DONE.
- Weekly Review real outcome signals — DONE.
- Real LLM alignment + Outcome Learning v2 — DONE.
- Server readiness / Firebase boundaries — DONE.
- Food Data Foundation v2 — DONE.
- Nutrition Intelligence v2 + Coach Knowledge Grounding — DONE.
- Official food-source ingestion/normalization + reviewed corpus replacement — DONE / VERIFIED GREEN.
