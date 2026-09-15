# GARANG Tasks

## P1 — Founder OS v7-lite event-ready control plane
Status: DONE
Owner: Command Center / Engineering / Release QA
Evidence: multi-repo roles, Project Graph, capability policy and event routing validated.

## P1 — Today Single Next Action
Status: DONE
Owner: Design Brand / Product / Engineering / Release QA
Evidence: Golden Path and single next-action ownership preserved.

## P1 — Final Today workout preparation / execution integration
Status: DONE / VERIFIED GREEN
Owner: Product / Design Brand / Engineering / Release QA
Acceptance:
- `.garang-daily-workout` exists in Today execute state. ✅
- `오늘 운동 준비하기` is the single visible workout execution entry. ✅
- preparation exposes touch-safe `운동 시작`. ✅
- canonical Today workout execute owner remains in DOM. ✅
- standalone canonical CTA is visually hidden and `aria-hidden` only after successful integration. ✅
- bottom Check-in remains bottom-most and touch-safe. ✅
- `운동 시작` routes into canonical Workout execution. ✅
- generated workout plans reuse the existing Workout Intelligence import path. ✅
- no new Workout mutation path, state schema, Planner ownership, Agent Contract, Decision Intelligence or LLM architecture change. ✅
- Golden Path, authenticated Coach, Real LLM integration, recovery, Settings touch, mobile layout/button/runtime regressions pass. ✅
Evidence: PRODUCT PR #114 verified head `60be81a43e9f5e6c40e0c4bf21241b9ca4be19ba`; exact-head Release Gate #1318 GREEN; merged main `9e853e8f9ba854b616eb894af5b178805bbce0e8`; post-merge Gate #1319 GREEN; Pages #780 GREEN; Founder OS Event Envelope GREEN.

## P1 — Commercialization Stage 1 stabilization
Status: DONE
Owner: Product / Design Brand / Engineering / Growth Data / Release QA
Evidence: PRs #80/#83/#84/#87; post-merge Gate #1093 GREEN.

## P4 — Stage 2 Plan-vs-Actual / Adaptive Loop v1
Status: DONE
Owner: AI Data / Product / Engineering / Release QA
Evidence: PR #88 `c68ec3e...`; Gate #1094 GREEN.

## P5 — Weekly Review driven by real outcome signals
Status: DONE
Owner: Product / AI Data / Design Brand / Release QA
Evidence: PR #90 `5f3d30e...`; post-merge Gate #1098 GREEN.

## P2 — Real LLM boundary + semantic alignment + Outcome Learning v2
Status: DONE
Owner: AI Data / Engineering / Release QA
Evidence: PR #99 `bcb27d5a...`; post-merge Gate #1170 GREEN.

## P2 — Server Readiness / Firebase staging boundaries
Status: DONE
Owner: Engineering / Release QA / AI Data
Evidence: PRs #101–#103; corresponding pre/post merge gates GREEN. Production activation remains separate.

## P4 — Food Data Foundation v2
Status: DONE
Owner: AI Data / Engineering / Release QA
Acceptance:
- Quality states `verified / approximate / estimated / unknown`. ✅
- `verified` requires traceable provenance. ✅
- Existing estimated data are not silently promoted. ✅
Evidence: PR #105 `576bb65...`.

## P4 — Nutrition Intelligence v2 + Coach Knowledge Grounding
Status: DONE
Owner: AI Data / Engineering / Release QA
Acceptance:
- Deterministic meal/recovery/training interpretation. ✅
- GARANG decision identity preserved; LLM explanation-only. ✅
- Unsupported provider reasons fail closed. ✅
Evidence: PRs #106 `79cfc854...` and #107 `50bd02eb...`; verified gates GREEN.

## P4 — Official food-source ingestion and normalization
Status: DONE / REPOSITORY VERIFIED
Owner: AI Data / Engineering / Release QA
Evidence: PR #108 `6fdc51ae...`; Gate #1245 and exact post-merge #1247 GREEN; Pages #774 GREEN.

## P4 — Official nutrition corpus planner
Status: DONE / REPOSITORY VERIFIED
Owner: AI Data / Engineering / Release QA
Evidence: PRODUCT PR #110 merged as `1763c4f9...`; verified gates GREEN.

## P4 — Execute official nutrition corpus replacement
Status: DONE / VERIFIED GREEN
Owner: AI Data / Engineering / Release QA
Acceptance:
- Official K-FIND 음식DB, K-FIND 가공식품DB and 국가표준식품성분표 source artifacts were reviewed. ✅
- Ambiguous/generic mappings remain fail-closed. ✅
- Traceable reviewed replacements only were promoted to verified. ✅
- Canonical food identity/order/serving contract remains preserved. ✅
- Quality counts and full Release Gate were re-audited. ✅
Evidence: PRODUCT PR #118 merged as `3c3844edbe07920db41d9054aa968cb8be8bf8f4`; exact-head Gate #1347 GREEN; post-merge Gate #1348 GREEN; canonical 500 foods = `232 verified / 3 approximate / 265 estimated / 0 unknown`; 151 additional official upgrades applied and 349 rows unchanged.

## P1 — Production Real AI Coach activation / verification
Status: REPOSITORY PREFLIGHT GREEN / FOUNDER APPROVAL REQUIRED FOR PRODUCTION SECRET + DEPLOY
Owner: AI Data / Engineering / Release QA
Acceptance:
- Repository Real LLM/provider/gateway/alignment/personalization/Agent-boundary tests pass. ✅
- Zero-provider-cost production route probe exists and fails closed on auth/method boundaries after deployment. ✅
- Current production Functions route is deployed at the intended revision. ⏳
- `GARANG_LLM_API_KEY` is configured/confirmed in Firebase Secret Manager without exposure. ⏳
- Authenticated live Coach smoke succeeds with `source: llm`. ⏳
- Two-user personalization differentiation is demonstrated. ⏳
- GARANG decision ownership and confirmation boundary remain intact. ✅
Evidence: PRODUCT PR #119 exact head `99d7d56966e49d828c98d67083bb1447d2c130b8`; exact-head Release Gate #1352 GREEN. Live production probe on 2026-09-16 reached `fitfind-ai` but unauthenticated `POST https://asia-northeast3-fitfind-ai.cloudfunctions.net/api/coach` returned HTTP 404 instead of the repository contract 401, proving the current production Functions surface does not yet expose the Real Coach route. Provider-secret existence remains unverified and no production deployment or privileged smoke has been performed.

## P1 — Validate deployed Golden Path on real target device
Status: IN PROGRESS / PARTIAL GREEN
Owner: Release QA + Product + Design Brand
Acceptance:
- iPhone Chrome load/onboarding/Today/first record/Coach. ✅
- Plan → execution → persistence → Accumulation. ⏳
- Target in-app browser Golden Path. ⏳

## P1 — Wanted AI Championship submission
Status: PLANNED AFTER PRODUCTION AI + REAL-DEVICE EVIDENCE
Owner: Founder / Growth Business / Product

## P2 — Commercial production hardening
Status: FOUNDER DECISION REQUIRED
Owner: Founder / Engineering / AI Data / Growth Business / Release QA

## P6 — Always-on external Founder OS runtime
Status: DEFERRED
Owner: Engineering / AI Data
