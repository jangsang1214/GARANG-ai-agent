# GARANG Project State

Last updated: 2026-09-15

## Current objective
The repository/UI final integration and the second provenance-safe official K-FIND food-corpus batch are complete. Protect the verified Golden Path and current data integrity, then move next to production Real AI Coach activation/verification, followed by remaining real-device validation and Wanted AI Championship submission preparation. Large-scale UI redesign is no longer a priority.

## Repository observations
- CONTROL: `jangsang1214/GARANG-ai-agent`; Founder OS v7-lite remains the control plane.
- PRODUCT: `jangsang1214/-fitmind-ai`; current VERIFIED main is `6d6222590285359a75300c9c3292eebf6549bf9e`, merge commit for PR #116 `Apply second official K-FIND food corpus batch`.
- CONTROL mutation policy and PRODUCT mutation policy are both `branch-pr` per `docs/agent/REPOSITORIES.json`.
- Product Consolidation PR #104 remains merged and preserved.
- PR #111 Today bottom Check-in/lifecycle durability remains preserved.
- PR #114 finalizes the visible Today workout path as `오늘 운동 준비하기` → optional details → `운동 시작` → canonical Workout execution.
- PR #115 latest UI/Design consolidation for Progress/Accumulation language is preserved in PRODUCT main.
- PR #116 was reconciled onto then-current main `34116a7fade65fb589b7fc6c00b406d73076290e`; its exact verified head was `5ec44f9241af36b7fbc8a5d5b8a4383d9bb63e3e` with zero commits behind main.
- PR #116 exact-head Release Gate #1338: GREEN. `core-build-rules`, `browser-webkit`, and final `verify` all passed.
- PRODUCT post-merge main Release Gate #1339 on `6d622259...`: GREEN across core/build/security, Firebase public health, Firestore emulator, full WebKit Golden Path, authenticated Coach, Real LLM integration, recovery, mobile regression, Settings touch, button health and runtime stress.
- Pages #783 on PRODUCT main: GREEN.
- Founder OS Event Envelope #734 for the merge/main workflow completed GREEN.

## Today / Golden Path final integration
- Today exposes `오늘 운동 준비하기` as the single visible workout execution entry.
- The canonical Today workout execute owner remains in the DOM and retains execution ownership; it is visually hidden and `aria-hidden` only when the preparation integration is successfully mounted.
- The preparation surface exposes a touch-safe `운동 시작` action and reuses the existing generated-workout import path when available; otherwise it delegates to the canonical Today execute action.
- No new Workout mutation path, state schema, Planner ownership, Agent Contract, Decision Intelligence, LLM architecture, or canonical Workout write owner was introduced by the final UI integration or the food-corpus upgrade.
- The bottom `체크인` remains the bottom-most touch-safe Today utility and continues to reuse the canonical check-in modal/write owner.
- Advanced workout generation controls remain available behind progressive disclosure.
- Golden Path semantics remain Onboarding → Today → Record → Coach → Plan → Confirmation → Execution → Record → Progress/Accumulation.
- Repository-level final UI/Golden Path integration remains GREEN. Do not start another broad UI redesign without new external-user evidence.

## AI/Data verified baseline
- GARANG deterministic Decision Intelligence remains judgment owner; LLM remains explanation/orchestration only and cannot mutate user state directly.
- Food quality states remain `verified / approximate / estimated / unknown`; `verified` requires traceable provider + dataset + record ID plus complete kcal/protein/carbs/fat.
- Official adapters cover K-FIND, USDA FoodData Central and Data.go.kr nationwide nutrition standard records.
- Canonical `food-db.json` remains exactly 500 records and is now VERIFIED at `81 verified / 10 approximate / 409 estimated / 0 unknown`.
- The second K-FIND batch compared the 500 canonical foods against the Founder-provided MFDS K-FIND `KDDB_HOME_ANALYZED` 2026-08-28 source: 482 eligible 100g source rows, 82 exact canonical-name matches, 1 semantic exclusion (`라면`), 81 reviewed safe official rows, and 76 newly upgraded canonical foods in addition to the previously verified 5.
- The upgrade preserved food IDs, canonical names, categories, serving labels and corpus order. Exactly 76 canonical rows received the new official upgrade and the remaining 424 canonical rows were not replaced by this batch.
- The committed quality gate locks the reviewed official semantic payload to the workbook-derived SHA-256, verifies complete MFDS K-FIND provenance and exact nutrient equality for the reviewed rows, and fails if corpus size, identities, serving labels or projected quality counts drift.

## Real-device evidence
- Founder verified deployed iPhone Chrome flow through app load → onboarding → Today → first record → Coach.
- Full real-device plan → execution → persistence → Accumulation and target in-app browser remain outstanding.

## Stable
- Core loop remains Goal → Plan → Action → Record → Interpretation → Feedback → Next Action → Long-term Change.
- AI contract remains Memory → State Intelligence → Outcome Intelligence → Decision Intelligence → LLM Explanation → User Confirmation → Agent Contract → State Mutation → Outcome → Learning.
- `GARANG decides → LLM explains → User confirms → GARANG acts.` remains enforced.
- Firebase Auth + Firestore remain user-data foundations; canonical write ownership is unchanged.
- Repository/UI/food-corpus batch release readiness is GREEN on current PRODUCT main.
- Commercial-production readiness remains separate from repository GREEN status.

## In progress / unknowns
- P1 production Real AI Coach validation: READY TO START / production secret or deployment actions require explicit Founder approval.
- P1 real-device Golden Path validation: PARTIAL GREEN.
- Live production Real LLM environment evidence: UNKNOWN until authenticated production smoke is executed.
- Commercial production readiness: RED pending remaining production/commercial gates.

## Next priorities
1. P1 — Production Real AI Coach activation/verification: production API/secret activation (approval-gated) → Functions production config/deploy verification → authenticated live Coach smoke → two-user personalization differentiation.
2. P1 — Complete real iPhone Golden Path through plan → execution → persistence → Accumulation and target in-app browser.
3. P1 — Prepare Wanted AI Championship submission copy/demo evidence, then submit after the production/real-device evidence is complete.
4. P4 — Expand verified food coverage beyond the current 81 only when additional traceable official mappings are available; keep ambiguous semantic matches fail-closed.
