# GARANG Release Status

Last updated: 2026-09-15

## Overall decision
GREEN for current VERIFIED PRODUCT main `9e853e8f9ba854b616eb894af5b178805bbce0e8` (merged PR #114). Repository-level Product/Golden Path/UI final integration is GREEN. Actual canonical food-corpus quality uplift remains YELLOW because no approved full official dataset has yet been processed and applied. Real-device validation remains PARTIAL GREEN. Live production Real LLM activation remains UNKNOWN. Commercial-production readiness remains RED.

## PRODUCT — current main
Decision: GREEN.
- PR #114 `Merge Today workout execution into preparation` merged as `9e853e8f9ba854b616eb894af5b178805bbce0e8`.
- Exact verified PR head: `60be81a43e9f5e6c40e0c4bf21241b9ca4be19ba`.
- Pre-merge exact-head Release Gate #1318: GREEN. `core-build-rules`, `browser-webkit`, and final `verify` all PASS.
- Post-merge main Release Gate #1319: GREEN. `core-build-rules`, `browser-webkit`, and final `verify` all PASS.
- Pages #780 on the merge SHA: GREEN.
- Founder OS Event Envelope for the main push/workflow completion: GREEN.

## Final Today workout integration
Decision: GREEN.
- Today exposes `오늘 운동 준비하기` as the single visible workout execution entry.
- The canonical Today workout execute owner remains present in the DOM; it is visually hidden and `aria-hidden` only after the preparation integration mounts successfully.
- `운동 시작` is rendered inside the preparation surface and remains touch-safe.
- If a generated workout plan exists, the existing Workout Intelligence import path is reused; otherwise execution delegates to the canonical Today execute action.
- Bottom `체크인` remains the bottom-most Today control, touch-safe, and continues to open the canonical check-in modal/write owner.
- Advanced workout generation controls remain available behind progressive disclosure.
- No new Workout mutation path, state-schema change, Planner ownership change, Agent Contract change, Decision Intelligence rewrite, LLM architecture change, or canonical Workout write-owner change was introduced.
- Golden Path execution meaning remains intact.

## Golden Path / regression preservation
Decision: GREEN in automated release gate.
- Full WebKit release gate passes Today action flow, Today Check-in/workout-preparation integration, Today visual parity, daily plan, Simplified Shell, Planner execution, Nutrition recommendation, truth surface/first record, Golden Path integration, complete Golden Path journey, authenticated boot, authenticated Coach plan flow, Real LLM Golden Path integration, conversational logging, recovery mutation/touch, mobile regression, Settings touch, mobile button audit and runtime stability stress.
- Core gate passes locked dependencies, browser server portability, production dependency security, GARANG Intelligence Core, Action & Data Reliability, Commercial Core regressions, runtime/build, build entry, Firebase public health and Firestore emulator rules.
- GARANG deterministic Decision Intelligence remains judgment owner; LLM remains explanation/orchestration only.
- No silent mutation or confirmation-boundary bypass was introduced.
- No further broad UI redesign is recommended without new external-user evidence.

## Official nutrition data result
Decision: GREEN / REPOSITORY CAPABILITY MERGED.
- Official source normalization supports K-FIND, USDA FoodData Central and Data.go.kr nationwide nutrition standard records.
- `verified` requires traceable provider/dataset/record ID and complete kcal/protein/carbs/fat.
- Unsupported volume basis such as 100ml is not silently converted into 100g.
- Corpus planning is fail-closed and does not automatically overwrite canonical foods.

## Food corpus release boundary
Decision: YELLOW / EXTERNAL OFFICIAL DATA EXECUTION REQUIRED.
- Last verified canonical baseline remains 500 foods = 0 verified / 12 approximate / 488 estimated.
- Actual replacement count and verified-coverage uplift remain UNKNOWN until a current official dataset is processed, ambiguous mappings reviewed, replacements applied and the corpus re-audited.

## Real-device validation
Decision: PARTIAL GREEN / IN PROGRESS.
- Real iPhone Chrome app load → onboarding → Today → first record → Coach is VERIFIED GREEN.
- Real-device plan → execution → persistence → Accumulation remains unverified.
- Target in-app-browser Golden Path remains unverified.

## Remaining release gates
- Repository/UI/automated Golden Path final integration: GREEN.
- Production Real AI Coach activation: READY TO START, but production secret/deployment changes require explicit Founder approval.
- Authenticated live production Coach + two-user personalization evidence: UNKNOWN.
- Actual official nutrition corpus replacement: YELLOW / external approved official data required.
- Real-device full Golden Path: PARTIAL GREEN.
- Commercial production: RED pending production AI/provider activation evidence, full real-device completion, payment/entitlement, monitoring, legal/privacy/retention and production release gates.
