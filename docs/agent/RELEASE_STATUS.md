# GARANG Release Status

Last updated: 2026-09-15

## Overall decision
GREEN for the current verified PRODUCT main `50bd02eb7fed08c7f0e4369bb18c0fc5630b4e3c`, including prior Commercialization/Intelligence/Server Readiness baselines plus Food Data Foundation v2, Nutrition Intelligence v2, Coach Knowledge Grounding v2, and live Coach gateway grounding from PRs #105–#107. Real-device validation remains PARTIAL GREEN. Commercial-production readiness remains RED.

## PRODUCT — current main
Decision: GREEN.
- PR #105 `Add Food Data Foundation v2 quality and eval gates` merged as `576bb65...`.
- PR #106 `Add Nutrition Intelligence v2 and Coach grounding foundation` merged as `79cfc854...`; pre-merge Release Gate #1232 GREEN.
- PR #107 `Ground live Coach in Nutrition Intelligence and curated knowledge` merged as `50bd02eb7fed08c7f0e4369bb18c0fc5630b4e3c`.
- PR #107 pre-merge Release Gate #1237: GREEN.
- Exact post-merge main Release Gate #1239: GREEN.
- GitHub Pages build/deployment #773: GREEN.

## AI/Data v2 release result
Decision: GREEN / MERGED.
- Food data quality states are explicit: verified, approximate, estimated, unknown.
- `verified` claims require traceable provider/dataset/record ID provenance.
- Nutrition Intelligence v2 is deterministic and uses saved meal/recovery/training evidence.
- Coach Knowledge Grounding v2 is decision-bound and explanation-only.
- Firebase Functions Coach now receives grounded nutrition + curated knowledge context before provider invocation.
- Grounding cannot replace/reverse GARANG Decision Intelligence and cannot mutate user state.
- Unsupported provider reason codes or decision identity drift fail closed.
- No UI surface, state schema, canonical write owner, Planner ownership, or production secret changed.

## Design parallelism
Decision: GREEN / NO FILE COLLISION WITH ACTIVE DESIGN WORK.
- AI/Data PRs #105–#107 intentionally avoided the active Design consolidation PR #104 UI/runtime files.
- Do not infer Founder visual approval or merge readiness for PR #104 from AI/Data GREEN evidence.

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
- Official K-FIND/USDA live ingestion: NOT YET VERIFIED. Contracts/registry exist, but no live import is claimed.
- Live production Real LLM activation: UNKNOWN.
- Commercial production: RED pending full real-device completion, payment/entitlement, monitoring/provider activation, legal/privacy/retention review and production release gates.
