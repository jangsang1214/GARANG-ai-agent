# GARANG Release Status

Last updated: 2026-09-15

## Overall decision
GREEN for current verified PRODUCT main `6fdc51ae6184527bfbc4a8df75fa33ac7c37f8cc`, including prior Commercialization/Intelligence/Server Readiness baselines, Food Data Foundation v2, Nutrition Intelligence v2, Coach Knowledge Grounding v2, live Coach gateway grounding, and the official K-FIND/USDA ingestion pipeline from PR #108. Real-device validation remains PARTIAL GREEN. Actual bulk official-food replacement remains NOT YET EXECUTED. Commercial-production readiness remains RED.

## PRODUCT — current main
Decision: GREEN.
- PR #105 `Add Food Data Foundation v2 quality and eval gates` merged as `576bb65...`.
- PR #106 `Add Nutrition Intelligence v2 and Coach grounding foundation` merged as `79cfc854...`; pre-merge Release Gate #1232 GREEN.
- PR #107 `Ground live Coach in Nutrition Intelligence and curated knowledge` merged as `50bd02eb...`; pre-merge Gate #1237 and exact post-merge Gate #1239 GREEN; Pages #773 GREEN.
- PR #108 `Add official K-FIND and USDA food ingestion pipeline` merged as `6fdc51ae6184527bfbc4a8df75fa33ac7c37f8cc`.
- PR #108 pre-merge Release Gate #1245: GREEN. An earlier run #1244 failed only because an ambiguity test fixture did not actually create ambiguity; the fixture was corrected and the implementation contract remained unchanged.
- Exact post-merge main Release Gate #1247: GREEN across core/build/security, Food adapter regressions, Firebase public health, Firestore emulator, full WebKit Golden Path, authenticated Coach, Real LLM, recovery and mobile/runtime stability.
- GitHub Pages #774: GREEN. Founder OS event runs on the exact main are GREEN.

## AI/Data v2 release result
Decision: GREEN / MERGED.
- Food data quality states are explicit: verified, approximate, estimated, unknown.
- `verified` claims require traceable provider/dataset/record ID provenance and complete core nutrition values.
- Nutrition Intelligence v2 is deterministic and uses saved meal/recovery/training evidence.
- Coach Knowledge Grounding v2 is decision-bound and explanation-only.
- Firebase Functions Coach receives grounded nutrition + curated knowledge context before provider invocation.
- Grounding cannot replace/reverse GARANG Decision Intelligence and cannot mutate user state.
- K-FIND and USDA official-source adapters are implemented and contract-tested.
- USDA energy normalization supports kJ->kcal; K-FIND respects declared nutrient basis.
- Existing canonical food rows are not overwritten automatically. Unique exact name/alias matches become reviewable replacement proposals; ambiguous matches fail into review.
- No UI surface, state schema, canonical write owner, Planner ownership, production secret or food-source credential changed.

## Food corpus release boundary
Decision: YELLOW / EXTERNAL DATA EXECUTION REQUIRED.
- Repository ingestion capability is GREEN.
- Actual K-FIND/USDA bulk source pull has not yet been executed in an authenticated/approved source environment.
- Canonical `food-db.json` was not bulk-rewritten by PR #108.
- Last verified baseline remains 500 records: 0 verified / 12 approximate / 488 estimated.
- Do not claim nutrition-corpus quality uplift until replacement proposals are generated, reviewed, applied and re-audited.

## Design parallelism
Decision: GREEN / NO FILE COLLISION WITH ACTIVE DESIGN WORK.
- AI/Data PRs #105–#108 intentionally avoided active Design consolidation PR #104 UI/runtime surfaces.
- Do not infer Founder visual approval or merge readiness for PR #104 from AI/Data evidence.

## Real-device validation
Decision: PARTIAL GREEN / IN PROGRESS.
- Real iPhone Chrome: app load -> onboarding -> Today -> first record -> Coach is VERIFIED GREEN.
- Plan -> execution -> persistence -> Accumulation remains directly unverified.
- Target in-app-browser Golden Path remains directly unverified.

## Preservation result
Decision: GREEN.
- GARANG deterministic Decision Intelligence remains the judgment owner; LLM remains explanation-only.
- Outcome Learning remains bounded/read-only with no automatic progression increase.
- No silent mutation, Planner ownership change, Agent confirmation bypass, Memory rewrite or destructive migration was introduced.
- No provider or food-source secret was added to source/browser config.

## Remaining release gates
- Real-device Golden Path: PARTIAL GREEN.
- Active Design consolidation PR #104: separate Founder visual/release gate.
- Official nutrition corpus upgrade: READY / EXTERNAL SOURCE ACCESS REQUIRED; actual replacement count and quality uplift are UNKNOWN.
- Live production Real LLM activation: UNKNOWN.
- Commercial production: RED pending full real-device completion, payment/entitlement, monitoring/provider activation, legal/privacy/retention review and production release gates.
