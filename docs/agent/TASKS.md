# GARANG Tasks

## P1 — Founder OS v7-lite event-ready control plane
Status: DONE
Owner: Command Center / Engineering / Release QA
Evidence: multi-repo roles, Project Graph, capability policy and event routing validated.

## P1 — Today Single Next Action
Status: DONE
Owner: Design Brand / Product / Engineering / Release QA
Evidence: Golden Path and single next-action ownership preserved.

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
Acceptance:
- K-FIND and USDA normalize into Food Data Foundation v2. ✅
- Traceable `verified` promotion is fail-closed. ✅
- Existing canonical foods are never automatically overwritten. ✅
Evidence: PR #108 `6fdc51ae...`; Gate #1245 and exact post-merge #1247 GREEN; Pages #774 GREEN.

## P4 — Official nutrition corpus planner
Status: DONE / REPOSITORY VERIFIED
Owner: AI Data / Engineering / Release QA
Acceptance:
- Data.go.kr nationwide nutrition standard adapter supports official food code/name/type/basis/core nutrients/provenance. ✅
- `100ml` or unsupported volume basis is not silently converted to grams. ✅
- Corpus planner reports before/projected quality. ✅
- One exact official candidate creates a review proposal only. ✅
- Multiple official candidates are routed to manual review. ✅
- Data.go.kr full API pagination uses environment-only `DATA_GO_KR_SERVICE_KEY`; no key is committed or printed. ✅
- Full GARANG regressions remain GREEN. ✅
Evidence: PRODUCT PR #110 merged as `1763c4f9...`; pre-merge Gate #1261 GREEN after non-reproducing WebKit timing retry; current integrated main `66b0e0f...` Gate #1264 GREEN; Pages #778 GREEN.

## P4 — Execute official nutrition corpus replacement
Status: READY / EXTERNAL OFFICIAL DATA ACCESS REQUIRED
Owner: AI Data / Engineering / Founder Review
Acceptance:
- Obtain current official Data.go.kr/K-FIND/USDA artifact or use secure approved API environment without exposing credentials.
- Run corpus planner against canonical GARANG food IDs.
- Review all ambiguous/multi-candidate mappings.
- Apply only traceable reviewed replacements.
- Re-audit quality counts and re-run full Release Gate.
Current evidence: canonical Food DB remains 500 records = 0 verified / 12 approximate / 488 estimated. No quality uplift is claimed yet.

## P1 — Validate deployed Golden Path on real target device
Status: IN PROGRESS / PARTIAL GREEN
Owner: Release QA + Product + Design Brand
Acceptance:
- iPhone Chrome load/onboarding/Today/first record/Coach. ✅
- Plan -> execution -> persistence -> Accumulation. ⏳
- Target in-app browser Golden Path. ⏳

## P2 — Verify live production Real LLM activation
Status: READY / EXTERNAL EXECUTION REQUIRED
Owner: AI Data / Engineering / Release QA

## P2 — Commercial production hardening
Status: FOUNDER DECISION REQUIRED
Owner: Founder / Engineering / AI Data / Growth Business / Release QA

## P6 — Always-on external Founder OS runtime
Status: DEFERRED
Owner: Engineering / AI Data
