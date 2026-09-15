# GARANG Release Status

Last updated: 2026-09-15

## Overall decision
GREEN for current VERIFIED PRODUCT main `6d6222590285359a75300c9c3292eebf6549bf9e` (merged PR #116). Repository-level Product/Golden Path/UI integration remains GREEN, and the reviewed second official K-FIND food-corpus batch is GREEN with the canonical 500-food corpus at `81 verified / 10 approximate / 409 estimated / 0 unknown`. Real-device validation remains PARTIAL GREEN. Live production Real LLM activation remains UNKNOWN. Commercial-production readiness remains RED.

## PRODUCT — current main
Decision: GREEN.
- PR #116 `Apply second official K-FIND food corpus batch` merged as `6d6222590285359a75300c9c3292eebf6549bf9e`.
- PR #116 was first reconciled onto the latest UI/Design main `34116a7fade65fb589b7fc6c00b406d73076290e`; exact verified PR head: `5ec44f9241af36b7fbc8a5d5b8a4383d9bb63e3e`.
- Pre-merge exact-head Release Gate #1338: GREEN. `core-build-rules`, `browser-webkit`, and final `verify` all PASS.
- Post-merge main Release Gate #1339: GREEN. `core-build-rules`, `browser-webkit`, and final `verify` all PASS.
- Pages #783 on the merge SHA: GREEN.
- Founder OS Event Envelope #734 for the main push/workflow completion: GREEN.

## Final Today / UI integration
Decision: GREEN / PRESERVED.
- PR #114 Today workout integration remains intact: `오늘 운동 준비하기` is the single visible workout execution entry and delegates to canonical execution ownership.
- PR #115 Progress/Accumulation language consolidation is included in the PR #116 exact head before merge and remains preserved on main.
- Bottom `체크인` remains the bottom-most Today control, touch-safe, and continues to open the canonical check-in modal/write owner.
- Advanced workout generation controls remain available behind progressive disclosure.
- No new Workout mutation path, state-schema change, Planner ownership change, Agent Contract change, Decision Intelligence rewrite, LLM architecture change, or canonical Workout write-owner change was introduced by PR #116.
- Golden Path execution meaning remains intact.

## Golden Path / regression preservation
Decision: GREEN in automated release gate.
- Full WebKit release gate passes Today action flow, Today Check-in/workout-preparation integration, Today visual parity, daily plan, Simplified Shell, Planner execution, Nutrition recommendation, truth surface/first record, Golden Path integration, complete Golden Path journey, authenticated boot, authenticated Coach plan flow, Real LLM Golden Path integration, conversational logging, recovery mutation/touch, mobile regression, Settings touch, mobile button audit and runtime stability stress.
- Core gate passes locked dependencies, browser server portability, production dependency security, GARANG Intelligence Core, Action & Data Reliability, Commercial Core regressions, runtime/build, build entry, Firebase public health and Firestore emulator rules.
- GARANG deterministic Decision Intelligence remains judgment owner; LLM remains explanation/orchestration only.
- No silent mutation or confirmation-boundary bypass was introduced.

## Official nutrition data result
Decision: GREEN / SECOND VERIFIED K-FIND BATCH MERGED.
- Official source normalization continues to support K-FIND, USDA FoodData Central and Data.go.kr nationwide nutrition standard records.
- `verified` requires traceable provider/dataset/record ID and complete kcal/protein/carbs/fat.
- PR #116 uses Founder-provided MFDS K-FIND `KDDB_HOME_ANALYZED`, source date 2026-08-28, with a 100g basis and 482 eligible source rows.
- 82 canonical foods had exact-name matches; ambiguous `라면` was explicitly excluded from automatic replacement.
- 81 reviewed safe official records are committed. Five were previously verified and 76 additional canonical foods were upgraded in PR #116.
- The canonical 500-food corpus now audits to `81 verified / 10 approximate / 409 estimated / 0 unknown`.
- Exactly 76 canonical rows received the new official upgrade; the remaining 424 canonical rows were not replaced by this batch.
- Food IDs, canonical names, categories, serving labels and corpus order are preserved.
- The quality gate locks the reviewed semantic source payload to the workbook-derived SHA-256 and verifies exact official nutrient equality and provenance for reviewed rows.
- Unsupported or semantically ambiguous source matches remain fail-closed rather than silently promoted to `verified`.

## Food corpus release boundary
Decision: GREEN for the reviewed 81-record verified coverage; future expansion remains evidence-gated.
- Current verified canonical baseline: 500 foods = `81 verified / 10 approximate / 409 estimated / 0 unknown`.
- No claim is made that all 500 foods are official-source verified.
- Further verified-coverage expansion requires additional traceable official mappings and semantic review; ambiguous matches must remain excluded until resolved.

## Real-device validation
Decision: PARTIAL GREEN / IN PROGRESS.
- Real iPhone Chrome app load → onboarding → Today → first record → Coach is VERIFIED GREEN.
- Real-device plan → execution → persistence → Accumulation remains unverified.
- Target in-app-browser Golden Path remains unverified.

## Remaining release gates
- Repository/UI/automated Golden Path integration: GREEN.
- Reviewed K-FIND food-corpus batch through 81 verified foods: GREEN.
- Production Real AI Coach activation: READY TO START, but production secret/deployment changes require explicit Founder approval.
- Authenticated live production Coach + two-user personalization evidence: UNKNOWN.
- Real-device full Golden Path: PARTIAL GREEN.
- Commercial production: RED pending production AI/provider activation evidence, full real-device completion, payment/entitlement, monitoring, legal/privacy/retention and production release gates.
