# GARANG Release Status

Last updated: 2026-09-15

## Overall decision
GREEN for current verified PRODUCT main `0058e1ba242962560c93ca2887298fd83763ca99`, including prior Commercialization/Intelligence/Server Readiness baselines, Food Data Foundation v2, Nutrition Intelligence v2, Coach Knowledge Grounding v2, official K-FIND/USDA ingestion, and Product Consolidation PR #104. Real-device validation remains PARTIAL GREEN. Actual bulk official-food replacement remains NOT YET EXECUTED. Live production Real LLM activation remains UNKNOWN. Commercial-production readiness remains RED.

## PRODUCT — current main
Decision: GREEN.
- PR #105 `Add Food Data Foundation v2 quality and eval gates` merged as `576bb65...`.
- PR #106 `Add Nutrition Intelligence v2 and Coach grounding foundation` merged as `79cfc854...`; pre-merge Release Gate #1232 GREEN.
- PR #107 `Ground live Coach in Nutrition Intelligence and curated knowledge` merged as `50bd02eb...`; pre-merge Gate #1237 and exact post-merge Gate #1239 GREEN; Pages #773 GREEN.
- PR #108 `Add official K-FIND and USDA food ingestion pipeline` merged as `6fdc51ae...`; pre-merge Gate #1245 and exact post-merge Gate #1247 GREEN; Pages #774 GREEN.
- PR #104 `Consolidate GARANG into four product surfaces` merged as `0058e1ba242962560c93ca2887298fd83763ca99`.
- PR #104 exact-head merge-ref Release Gate #1259: GREEN. The merge-ref combined head `f270bfb...` with then-current main `6fdc51ae...`; main did not drift before merge.
- No separate push-trigger Release Gate was observed on merge SHA `0058e1ba...` at reconciliation time; Gate #1259 is the exact pre-merge merge-ref evidence.

## Product Consolidation release result
Decision: GREEN / MERGED.
- Primary navigation is exactly Today / Record / Coach / Progress.
- Today presents state -> GARANG judgment summary -> Training/Recovery/Nutrition plan -> one next action -> Coach rationale entry.
- Coach remains the canonical judgment/rationale/action disclosure owner; deterministic GARANG Decision Intelligence remains the judgment engine.
- Record integrates Workout / Running / Nutrition / Body / Recovery while preserving existing canonical mutation owners.
- Recovery Record reuses the existing Today check-in write owner; no new route or state schema was introduced.
- Progress presents actual records -> what GARANG learned -> next judgment using the existing accumulation/weekly-review intelligence.
- Planner and Memory remain directly routable capabilities while no longer competing at first level.
- Legacy Today hero/density/duplicate state/quick-record surfaces and legacy Progress metric wall/tabs are internalized rather than deleting underlying capability.
- Decorative falling-water-droplet animation/runtime is no longer mounted. Neutral static evidence controls preserve a 44x48 touch-safe target.
- Membership/logout primary-chrome competition is removed; Settings retains the capabilities.

## PR #104 Release Gate #1259 evidence
Decision: GREEN.
- Core/build/security: dependency contract, production dependency security, dev tooling audit, Intelligence Core, Action & Data Reliability, commercial regressions, runtime/build, build entry, Firebase public health, Firestore rules emulator — PASS.
- WebKit: Firebase fallback, real browser interactions, mobile layout, Today action flow, no-droplet visual parity, daily plan draft, Simplified Shell, Planner execution, Nutrition recommendation, truth surface/first-record, Golden Path integration, Golden Path complete journey, authenticated app boot, authenticated Coach plan flow, Real LLM Golden Path integration, Coach logging, recovery mutation/touch, mobile regression, Settings touch, button health and runtime stability stress — PASS.
- Automated WebKit verification does not claim manual physical-iPhone visual review.

## AI/Data v2 release result
Decision: GREEN / MERGED.
- Food data quality states are explicit: verified, approximate, estimated, unknown.
- `verified` claims require traceable provider/dataset/record ID provenance and complete core nutrition values.
- Nutrition Intelligence v2 is deterministic and uses saved meal/recovery/training evidence.
- Coach Knowledge Grounding v2 is decision-bound and explanation-only.
- Firebase Functions Coach receives grounded nutrition + curated knowledge context before provider invocation.
- Grounding cannot replace/reverse GARANG Decision Intelligence and cannot mutate user state.
- K-FIND and USDA official-source adapters are implemented and contract-tested.
- Existing canonical food rows are not overwritten automatically. Unique exact name/alias matches become reviewable replacement proposals; ambiguous matches fail into review.

## Food corpus release boundary
Decision: YELLOW / EXTERNAL DATA EXECUTION REQUIRED.
- Repository ingestion capability is GREEN.
- Actual K-FIND/USDA bulk source pull has not yet been executed in an authenticated/approved source environment.
- Canonical `food-db.json` was not bulk-rewritten by PR #108.
- Last verified baseline remains 500 records: 0 verified / 12 approximate / 488 estimated.
- Do not claim nutrition-corpus quality uplift until replacement proposals are generated, reviewed, applied and re-audited.

## Real-device validation
Decision: PARTIAL GREEN / IN PROGRESS.
- Real iPhone Chrome: app load -> onboarding -> Today -> first record -> Coach is VERIFIED GREEN.
- Physical-device plan -> execution -> persistence -> Progress/Accumulation remains directly unverified.
- Target in-app-browser Golden Path remains directly unverified.

## Production Real LLM boundary
Decision: YELLOW / EXTERNAL PRODUCTION VERIFICATION REQUIRED.
- Repository and automated WebKit Real LLM integration tests are GREEN.
- Production provider secret/config activation, exact Functions deployment revision and authenticated live Coach smoke remain unverified.
- Two-user personalization behavior in the production target remains unverified.

## Preservation result
Decision: GREEN.
- GARANG deterministic Decision Intelligence remains the judgment owner; LLM remains explanation-only.
- Outcome Learning remains bounded/read-only with no automatic progression increase.
- No silent mutation, Planner ownership change, Agent confirmation bypass, Memory rewrite or destructive migration was introduced.
- No provider or food-source secret was added to source/browser config.

## Remaining release gates
- Product Consolidation PR #104: GREEN / MERGED.
- Real-device Golden Path: PARTIAL GREEN.
- Official nutrition corpus upgrade: READY / EXTERNAL SOURCE ACCESS REQUIRED; actual replacement count and quality uplift UNKNOWN.
- Live production Real LLM activation: UNKNOWN / next production evidence gate.
- Commercial production: RED pending full real-device completion, payment/entitlement, monitoring/provider activation, legal/privacy/retention review and production release gates.
