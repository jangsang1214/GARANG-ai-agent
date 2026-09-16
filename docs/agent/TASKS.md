# GARANG Tasks

Last updated: 2026-09-16

## Active P1 — Wanted derivative snapshot + submission packaging
Status: READY / SOURCE BASELINE GREEN
Owner: Founder / Growth Business / Product / Release QA
Goal: copy the verified commercial GARANG baseline into a separate competition derivative and complete the Wanted submission without destabilizing commercial GARANG.
Acceptance:
- Source snapshot is PRODUCT main `b863a7634bd64b03a6e6f3772950c43cc81afb6f`. ✅
- Source snapshot full post-merge Release Gate is GREEN. ✅ Gate #1449 / run `35110020514`
- Source snapshot Pages deployment is SUCCESS. ✅ Pages #799 / run `35110017165`
- Commercial GARANG remains the canonical product; competition-specific copy/demo/presentation changes stay isolated unless separately reviewed for upstreaming. ✅ durable decision recorded
- Submission explains GARANG as Personal Performance Intelligence, not a generic chatbot.
- Submission communicates `Signal → Interpretation → Recommendation → Action → Outcome → Learning` and `GARANG decides → LLM explains`.
- No secrets/private user data appear in the derivative or submission.

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
- Full regression gate passes. ✅ PR #130 Gate #1444 GREEN
Evidence: PRODUCT PR #130 merged at `9452cea2929d6940f20d39806b2b3d30bc3bb004`; composer contract test included in root test chain.

## Closed P1 — Mobile route intent across remounts
Status: DONE / VERIFIED GREEN
Owner: Engineering / Release QA
Goal: prevent physical mobile route taps from being lost when Today/Record presentation nodes remount between touch intent and compatibility click.
Acceptance:
- Touch intent captured only for existing canonical route controls. ✅
- Drag/scroll gestures are not converted into navigation. ✅
- Route commit goes through canonical `GarangRouter`; no data/state mutation owner changes. ✅
- Frozen Router public version contract remains `garang-router-v1.3.0`. ✅
- Golden Path complete journey passes in WebKit. ✅
- Authenticated Coach, Real LLM integration, recovery, Settings, button health and runtime stress pass. ✅
Evidence: PR #131 exact-head Gate #1448 / `35109312382` FULL GREEN; merged main `b863a763…`; post-merge Gate #1449 / `35110020514` FULL GREEN.

## Closed P1 — Coach reconnect + production AI stabilization
Status: DONE / VERIFIED GREEN
Owner: Engineering / Release QA / AI Data
Acceptance:
- Deterministic GARANG decision ownership preserved. ✅
- Bounded provider retry/timeouts and fail-closed fallback released. ✅
- Signed-out demo removed. ✅
- Real authenticated production text Coach verified. ✅
- Real authenticated production photo Coach verified. ✅
Evidence: Production Coach Live Smoke `35101459492` SUCCESS.

## Closed P1 — Intelligence Learning Contract v1
Status: DONE / VERIFIED GREEN
Owner: AI Data / Engineering / Release QA
Goal: causal learning attribution across `decisionId → recommendationId → actionId → planId → executionId → outcomeId`.
Acceptance:
- Existing Agent Contract lifecycle reused. ✅
- Confirmed plans/actionLog retain decision/recommendation identity. ✅
- Browser/core + Functions build read-only causal graphs. ✅
- Outcome Learning remains advisory-only. ✅
- No autonomous LLM tool calling, silent mutation or automatic progression increase. ✅
Evidence: PR #124 merged; later current-main Gate #1449 remains GREEN.

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
