# GARANG Tasks

## P1 — Founder OS v7-lite event-ready control plane
Status: DONE
Owner: Command Center / Engineering / Release QA
Acceptance criteria:
- CONTROL/PRODUCT repository roles machine-readable and validated. ✅
- Project Graph validates structure and traces work to goals. ✅
- Deterministic workstream orchestration and event routing are GREEN. ✅

## P1 — Today Single Next Action
Status: DONE
Owner: Design Brand / Product / Engineering / Release QA
Acceptance criteria:
- Today exposes one visible next-action owner. ✅
- Golden Path remains first record -> Coach -> recovery/check-in -> plan -> execute -> accumulation. ✅
- Existing Record/check-in/execution mutation owners are preserved. ✅

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
Acceptance criteria:
- GARANG deterministic decision identity/mode/reasons remain machine-enforced against LLM output. ✅
- LLM remains explanation-only; confidence cannot exceed deterministic GARANG confidence. ✅
- Outcome Learning is bounded and cannot automatically increase progression. ✅
Evidence: PR #99 `bcb27d5a...`; post-merge Gate #1170 GREEN.

## P2 — Server Readiness Stage 0
Status: DONE
Owner: Engineering / Release QA / AI Data
Evidence: PR #101 `b2ddbf4e...`; Gates #1210/#1212 GREEN; Events #460/#461 GREEN.

## P2 — Firebase Staging Gate v1
Status: DONE
Owner: Engineering / Release QA
Evidence: PR #102 `451f5639...`; Gates #1217/#1218 GREEN; Events #470/#473 GREEN.

## P2 — Validate Server Readiness in Firebase staging
Status: DONE
Owner: Founder / Engineering / Release QA
Evidence: full staging server path GREEN; production not targeted.

## P2 — Implement staging-only privileged browser endpoint boundary
Status: DONE
Owner: Engineering / Release QA
Evidence: PRODUCT PR #103 merged as `419e947...`; pre-merge Gate #1220 + Event #478 GREEN; post-merge Gate #1221 + Event #480 GREEN; Pages #770 GREEN.

## P4 — Food Data Foundation v2
Status: DONE
Owner: AI Data / Engineering / Release QA
Acceptance criteria:
- Canonical nutrition quality states `verified / approximate / estimated / unknown`. ✅
- `verified` requires traceable provider + dataset + source record ID. ✅
- Existing estimated/approximate values are not silently promoted. ✅
- Structural quality audit, official source registry, deterministic Coach/Nutrition eval fixtures and CI coverage exist. ✅
Evidence: PRODUCT PR #105 merged as `576bb65...`; release verification GREEN before merge.

## P4 — Nutrition Intelligence v2 + Coach Knowledge Grounding foundation
Status: DONE
Owner: AI Data / Engineering / Release QA
Acceptance criteria:
- Nutrition Intelligence deterministically uses meal/recovery/training evidence. ✅
- Low evidence and recovery stress remain conservative. ✅
- Grounding preserves deterministic GARANG decision identity and forbids state mutation. ✅
- Unsupported LLM reason codes fail alignment. ✅
Evidence: PRODUCT PR #106 merged as `79cfc854...`; pre-merge Release Gate #1232 GREEN.

## P4 — Ground live Coach in Nutrition Intelligence and curated knowledge
Status: DONE
Owner: AI Data / Engineering / Release QA
Acceptance criteria:
- Firebase Functions Coach builds `nutritionIntelligence` and `knowledgeGrounding` from authenticated server state before provider invocation. ✅
- Grounding contract enforces GARANG decision ownership, explanation-only LLM role and `stateMutationAllowed:false`. ✅
- Functions/core parity and live gateway context tests exist. ✅
- No UI surface, schema or canonical mutation ownership changed. ✅
Evidence: PRODUCT PR #107 merged as `50bd02eb...`; pre-merge Gate #1237 GREEN; exact post-merge Gate #1239 GREEN; Pages #773 GREEN.

## P4 — Official food-source ingestion and normalization
Status: DONE / REPOSITORY VERIFIED
Owner: AI Data / Engineering / Release QA
Acceptance criteria:
- K-FIND/USDA adapters normalize to Food Data Foundation v2 without embedding credentials in source/client bundles. ✅
- `verified` rows require traceable provider/dataset/recordId plus complete kcal/protein/carbs/fat. ✅
- K-FIND declared basis and USDA 100g/kJ->kcal normalization are contract-tested. ✅
- Existing GARANG food rows are never automatically overwritten; exact unique matches produce reviewable proposals and ambiguous matches require review. ✅
- Full Release Gate GREEN before and after merge. ✅
Evidence: PRODUCT PR #108 merged as `6fdc51ae...`; pre-merge Gate #1245 GREEN; exact post-merge Gate #1247 GREEN; Pages #774 GREEN.

## P4 — Execute official nutrition corpus upgrade
Status: READY / EXTERNAL SOURCE ACCESS REQUIRED
Owner: AI Data / Engineering / Founder Review
Acceptance criteria:
- Pull current official K-FIND and/or USDA records through approved source access without exposing credentials.
- Generate exact-match proposals against canonical GARANG food IDs.
- Report verified / approximate / estimated / unknown counts before and after proposed replacement.
- Review ambiguous matches and reject unsafe mappings.
- Apply canonical data changes only from traceable official records and re-run Release Gate.
Current evidence: canonical Food DB bulk replacement has not occurred; last verified baseline is 500 records = 0 verified / 12 approximate / 488 estimated.

## P1 — Validate deployed Golden Path on real target device
Status: IN PROGRESS / PARTIAL GREEN
Owner: Release QA + Product + Design Brand
Acceptance criteria:
- Real iPhone Chrome opens the deployed GARANG start/login surface normally. ✅
- Onboarding completes and reaches Today on the real iPhone. ✅
- First record completes and Coach interpretation/feedback appears normally. ✅
- Continue from Coach through plan -> execution -> persistence -> Accumulation. ⏳
- Repeat the Golden Path in the target in-app browser. ⏳

## P2 — Deploy and verify a separate staging browser client
Status: READY / EXTERNAL CONFIGURATION REQUIRED
Owner: Engineering / Release QA

## P2 — Verify live production Real LLM activation
Status: READY / EXTERNAL EXECUTION REQUIRED
Owner: AI Data / Engineering / Release QA

## P2 — Commercial production hardening
Status: FOUNDER DECISION REQUIRED
Owner: Founder / Engineering / AI Data / Growth Business / Release QA

## P6 — Always-on external Founder OS runtime
Status: DEFERRED
Owner: Engineering / AI Data
