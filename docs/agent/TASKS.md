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
Evidence: PRODUCT PR #114 merged as `9e853e8f9ba854b616eb894af5b178805bbce0e8`; post-merge Gate #1319 GREEN; Today workout preparation delegates to canonical execution and bottom Check-in remains touch-safe.

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
Evidence: PRs #101–#103; corresponding gates GREEN. Production activation remains separate.

## P4 — Food Data Foundation v2
Status: DONE
Owner: AI Data / Engineering / Release QA
Evidence: PR #105 `576bb65...`; traceable quality states and fail-closed verified contract established.

## P4 — Nutrition Intelligence v2 + Coach Knowledge Grounding
Status: DONE
Owner: AI Data / Engineering / Release QA
Evidence: PRs #106/#107; deterministic interpretation and LLM explanation-only boundary verified GREEN.

## P4 — Official food-source ingestion and normalization
Status: DONE / REPOSITORY VERIFIED
Owner: AI Data / Engineering / Release QA
Evidence: PR #108 `6fdc51ae...`; Gate #1245 / #1247 GREEN; Pages #774 GREEN.

## P4 — Official nutrition corpus planner
Status: DONE / REPOSITORY VERIFIED
Owner: AI Data / Engineering / Release QA
Evidence: PR #110 merged as `1763c4f9...`; verified gates GREEN.

## P4 — Execute official nutrition corpus replacement
Status: DONE / VERIFIED GREEN
Owner: AI Data / Engineering / Release QA
Acceptance:
- Official K-FIND 음식DB, K-FIND 가공식품DB and 국가표준식품성분표 artifacts reviewed. ✅
- Ambiguous/generic mappings remain fail-closed. ✅
- Canonical identity/order/serving contract preserved. ✅
- Quality counts and full Release Gate re-audited. ✅
Evidence: PRODUCT PR #118 merged as `3c3844edbe07920db41d9054aa968cb8be8bf8f4`; 500 foods = `232 verified / 3 approximate / 265 estimated / 0 unknown`; 151 official upgrades; Gate #1347/#1348 GREEN.

## P1 — Production Real AI Coach activation / verification
Status: BLOCKED ON FIREBASE CI CREDENTIAL / REPOSITORY GREEN
Owner: AI Data / Engineering / Release QA
Acceptance:
- Repository Real LLM/provider/gateway/alignment/personalization/Agent-boundary tests pass. ✅
- Fail-closed production route preflight exists. ✅
- Founder approved production secret/deploy/smoke bundle. ✅
- Fail-closed one-shot production activation workflow is merged. ✅
- A Firebase deployment credential is connected to PRODUCT GitHub Actions. ⛔
- Current production `api` Function is deployed at the intended revision. ⏳
- `GARANG_LLM_API_KEY` is confirmed/configured in Firebase Secret Manager without exposure. ⏳
- Route changes from 404 to expected 401/405 boundaries. ⏳
- Authenticated live Coach smoke succeeds with `source: llm`. ⏳
- Two-user personalization differentiation is demonstrated. ⏳
- GARANG decision ownership and confirmation boundary remain intact. ✅
Evidence: PR #119 repository preflight GREEN. PR #120 exact head `ae2b6b4148ea995af50869ab7395ce59b9b5c837`; exact-head Release Gate #1355 GREEN; merged PRODUCT main `e80cb61179c7108ddd65c78793a8adb31aed5da0`. Production Coach Activation run #1 (`35003841570`) failed safely at the Firebase authentication preflight because `FIREBASE_SERVICE_ACCOUNT_FITFIND_AI`, `GOOGLE_APPLICATION_CREDENTIALS_JSON`, and `FIREBASE_TOKEN` were all absent. Secret Manager query, Function deploy, route verification and provider smoke were skipped; no production mutation or provider call occurred.
Next unblock: add one approved Firebase CI credential to PRODUCT repository Actions secrets. Recommended long-term path is Application Default Credentials/service-account or workload-identity style auth; the workflow currently supports service-account JSON. The legacy `FIREBASE_TOKEN` path is supported only as a short-lived fallback. After credential connection, rerun failed activation run #1.

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
