# GARANG Tasks

Last updated: 2026-09-17

## Active P1 — Wanted derivative public deployment + final submission
Status: YELLOW / CODE GREEN, PUBLIC RUNTIME UNVERIFIED
Owner: Founder / Growth Business / Product / Release QA
Goal: publish the verified Wanted derivative at its own public URL and complete the competition submission without destabilizing commercial GARANG.
Acceptance:
- Commercial source snapshot is PRODUCT main `b863a7634bd64b03a6e6f3772950c43cc81afb6f`. ✅
- Wanted derivative release branch is `wanted/2026-release`. ✅
- Wanted derivative release SHA is `561d900b82b2ff5aa85769457e4f39c1b4c14767`. ✅
- PR #133 full GARANG Release Gate #1454 / `35122058195`: FULL GREEN. ✅
- Post-merge Wanted derivative gate #13 / `35122761724`: GREEN. ✅
- Relative 14-day synthetic judge dataset is release-merged and CI-verified. ✅
- Judge dataset includes 14 daily check-ins, 42 meals, workout/running/body history and fatigue-driven plan adjustment evidence. ✅
- Synthetic sample mode contains no real-user data and does not claim a live GPT call. ✅
- Commercial GARANG remains canonical and unchanged by the derivative merge. ✅
- Submission narrative exists as `WANTED_SUBMISSION.md`; paste-ready form copy exists as `WANTED_FORM_COPY.md`. ✅
- Vercel production deployment request accepted for `garang-wanted-2026`, deployment id `dpl_26o2uL2sWEQQNFuZaDLXoieUiB8t`, candidate alias `https://garang-wanted-2026-jangsang1214.vercel.app`. ✅ deployment creation only
- Candidate public alias returns the Wanted experience in a fresh browser. ⬜ UNKNOWN — connector read-back 404 / environment DNS unavailable
- Fresh-browser mobile smoke passes `60초 심사 체험 → Today → Coach → Progress` on the public alias. ⬜
- Replace `[WANTED_PUBLIC_URL]` in `WANTED_FORM_COPY.md` only after the public smoke passes. ⬜
- Wanted participation registration and final submission are completed. ⬜ Founder action / submission UI

## Closed P1 — Wanted 14-day judge data upgrade
Status: DONE / VERIFIED GREEN
Owner: Product / Engineering / Release QA
Acceptance:
- Replace shallow sample history with a date-relative two-week synthetic history. ✅
- Keep all sample records local-only and clearly synthetic. ✅
- Exercise nutrition, recovery and body accumulation are visible to Today/Coach/Progress. ✅
- Strengthen CI so the 14-day dataset and 60-second WebKit journey are both verified. ✅
- Keep commercial main unchanged. ✅
Evidence: PRODUCT PR #133 merged to `wanted/2026-release` as `561d900b…`; Release Gate #1454 `35122058195` SUCCESS; post-merge Wanted gate #13 `35122761724` SUCCESS.

## Closed P1 — Wanted judging derivative build
Status: DONE / VERIFIED GREEN
Owner: Product / Design Brand / Engineering / Release QA
Acceptance:
- Add a clear `60초 심사 체험` entry without reintroducing the retired commercial demo flag. ✅
- Seed only synthetic local sample records. ✅
- Guide judges through Today → Coach → Progress. ✅
- Keep real production GPT/photo Coach on the existing authenticated path. ✅
- Pin derivative metadata to verified commercial source SHA. ✅
- Preserve the full commercial regression suite. ✅
Evidence: PRODUCT PR #132 established the derivative; PR #133 then upgraded the judge history while preserving the commercial boundary.

## Closed P1 — Coach photo composer simplification
Status: DONE / VERIFIED GREEN
Owner: Product / Design Brand / Engineering / Release QA
Acceptance:
- Separate photo-tools row removed. ✅
- Compact `+` control lives inside the Coach chat composer. ✅
- Hidden picker and preview/remove state remain composer-owned. ✅
- One JPG/PNG/WebP photo up to 8 MB remains supported. ✅
- Photo remains ephemeral and is consumed/cleared after the next request. ✅
- Raw image is not persisted to GARANG state/localStorage/Firestore/telemetry/text history. ✅
Evidence: PRODUCT PR #130 merged at `9452cea2929d6940f20d39806b2b3d30bc3bb004`; Gate #1444 GREEN.

## Closed P1 — Mobile route intent across remounts
Status: DONE / VERIFIED GREEN
Owner: Engineering / Release QA
Evidence: PR #131 exact-head Gate #1448 / `35109312382` FULL GREEN; commercial main `b863a763…`; post-merge Gate #1449 / `35110020514` FULL GREEN.

## Closed P1 — Coach reconnect + production AI stabilization
Status: DONE / VERIFIED GREEN
Owner: Engineering / Release QA / AI Data
Evidence: Production Coach Live Smoke `35101459492` SUCCESS for authenticated text + photo.

## Closed P1 — Intelligence Learning Contract v1
Status: DONE / VERIFIED GREEN
Owner: AI Data / Engineering / Release QA
Goal: causal learning attribution across `decisionId → recommendationId → actionId → planId → executionId → outcomeId`.

## P2 — Protect CONTROL + PRODUCT main
Status: PLANNED / NON-BLOCKING
Owner: Command Center / Release QA
Acceptance: enforce PR-based changes/status checks and block force-push/deletion where practical without making solo-Founder operation brittle.

## P2 — Production deployment credential hardening
Status: PLANNED / NON-BLOCKING
Owner: Engineering / Release QA
Acceptance: migrate toward GitHub OIDC / Google Workload Identity Federation; retire the long-lived JSON key only after replacement is VERIFIED.

## P2 — Dependency/tooling hardening
Status: PLANNED / NON-BLOCKING FOR CURRENT WEB BASELINE
Owner: Engineering / Release QA
Acceptance:
- Resolve the 9 moderate Functions findings through a dedicated breaking-upgrade PR with emulator + production smoke evidence.
- Reduce root dev/tooling audit findings separately from the clean production-runtime audit.
- Modernize CONTROL checkout/setup-node Actions from v4 in a dedicated verified PR.

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
