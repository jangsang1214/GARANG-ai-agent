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
Evidence: PRs #101–#103; corresponding gates GREEN. Production activation is tracked separately below.

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
Status: DEPLOYED + PUBLIC BOUNDARIES VERIFIED / AUTHENTICATED LIVE SMOKE PENDING
Owner: AI Data / Engineering / Release QA
Acceptance:
- Repository Real LLM/provider/gateway/alignment/personalization/Agent-boundary tests pass. ✅
- Fail-closed production activation workflow is merged. ✅
- Firebase deployment credential is connected to PRODUCT GitHub Actions. ✅
- `GARANG_LLM_API_KEY` is confirmed/configured in Firebase Secret Manager without exposure. ✅
- Current production `api` Function is deployed at the intended revision. ✅
- Route changed from prior 404 to expected unauthenticated POST 401 / GET 405 boundaries. ✅
- Pre-auth provider invocation and user-data read are blocked. ✅
- Authenticated live Coach smoke succeeds with `source: llm`. ⏳
- Two-user personalization differentiation is demonstrated. ⏳
- GARANG decision ownership and confirmation boundary remain intact. ✅
Evidence: PRODUCT PR #121 merged as current main `074cb1f3fcdd3fc9958c78c67314dc65dcd6ce6c`; exact-head Gate #1357 GREEN; post-merge Gate #1358 GREEN; Pages #790 GREEN. Production Coach Activation run #2 `35010146340` SUCCESS: Firebase auth/project access PASS, secret metadata preserved, `functions:api` successful update, route preflight PASS with POST 401 / GET 405 and no pre-auth provider/user-data access. Authenticated smoke was explicitly `SKIPPED_NO_TOKEN`; do not count it as PASS.
Next unblock: obtain authenticated production evidence through a secure token/test-identity path without exposing Firebase ID tokens in chat, then run canonical production smoke and, if available, a second intentionally different user.

## P1 — Validate deployed Golden Path on real target device
Status: IN PROGRESS / PARTIAL GREEN
Owner: Release QA + Product + Design Brand
Acceptance:
- iPhone Chrome load/onboarding/Today/first record/Coach. ✅ (pre-current-production-LLM deploy)
- Post-deploy live provider evidence. ⏳
- Plan → execution → persistence → Accumulation. ⏳
- Target in-app browser Golden Path. ⏳

## P1 — Wanted AI Championship submission
Status: PLANNED AFTER AUTHENTICATED PRODUCTION AI + REAL-DEVICE EVIDENCE
Owner: Founder / Growth Business / Product

## P2 — Commercial production hardening
Status: FOUNDER DECISION REQUIRED
Owner: Founder / Engineering / AI Data / Growth Business / Release QA

## P6 — Always-on external Founder OS runtime
Status: DEFERRED
Owner: Engineering / AI Data
