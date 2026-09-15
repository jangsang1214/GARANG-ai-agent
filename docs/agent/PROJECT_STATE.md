# GARANG Project State

Last updated: 2026-09-15

## Current objective
Protect the verified Golden Path while moving from repository/server readiness into production Real AI Coach activation and full real-device validation. Product Consolidation is now complete and merged: GARANG presents four primary mental-model surfaces — Today / Record / Coach / Progress — while preserving existing canonical capabilities. Knowledge & Nutrition Intelligence v2 and official K-FIND/USDA ingestion remain repository-GREEN; actual bulk official-data import and measured replacement coverage still require approved external source execution.

## Repository observations
- CONTROL: `jangsang1214/GARANG-ai-agent`; Founder OS v7-lite remains the control plane.
- PRODUCT: `jangsang1214/-fitmind-ai`; current verified main is `0058e1ba242962560c93ca2887298fd83763ca99` from PR #104 `Consolidate GARANG into four product surfaces`.
- PRODUCT PR #105 `Add Food Data Foundation v2 quality and eval gates` merged as `576bb65...`.
- PRODUCT PR #106 `Add Nutrition Intelligence v2 and Coach grounding foundation` merged as `79cfc854...`; pre-merge Release Gate #1232 GREEN.
- PRODUCT PR #107 `Ground live Coach in Nutrition Intelligence and curated knowledge` merged as `50bd02eb...`; pre-merge Gate #1237 and exact post-merge Gate #1239 GREEN; Pages #773 GREEN.
- PRODUCT PR #108 `Add official K-FIND and USDA food ingestion pipeline` merged as `6fdc51ae...`; pre-merge Gate #1245, exact post-merge Gate #1247 and Pages #774 GREEN.
- PRODUCT PR #104 Product Consolidation merged as `0058e1ba...` after exact-head merge-ref Release Gate #1259 GREEN. The verified merge-ref combined head `f270bfb...` with then-current main `6fdc51ae...` with no drift before merge.

## Design consolidation verified baseline
- Primary product surfaces are Today / Record / Coach / Progress.
- Today presents state -> deterministic GARANG judgment summary -> Training/Recovery/Nutrition plan -> one next action -> quiet Coach rationale entry.
- Coach remains the canonical judgment/rationale/action disclosure owner; GARANG deterministic Decision Intelligence still owns judgment.
- Record presents Workout / Running / Nutrition / Body / Recovery; Recovery reuses the existing Today check-in write owner and introduces no new mutation owner.
- Progress uses the canonical accumulation surface and presents actual records -> what GARANG learned -> next judgment.
- Planner and Memory remain directly routable capabilities but no longer compete as first-level product surfaces.
- Legacy Today hero/density/duplicate state and quick-record surfaces, legacy Progress dashboard/tabs, topbar membership/logout competition, and decorative falling-water-droplet motion are internalized/removed from the visible primary experience.
- Planner/Progress evidence controls remain touch-safe at 44x48 while using neutral static controls instead of droplet styling.
- No state schema, Memory/Decision engine, Agent Contract, backend, Real LLM gateway or canonical record write ownership changed.

## Design consolidation release evidence
- Exact-head Release Gate #1259: GREEN.
- `core-build-rules`: GREEN across dependency/security, Intelligence Core, Action & Data Reliability, commercial regressions, runtime/build, Firebase public health and Firestore emulator.
- `browser-webkit`: GREEN across Today action flow, no-droplet visual parity, daily plan draft, Simplified Shell, Planner execution, Nutrition, truth surface, Golden Path integration and complete journey, authenticated boot/Coach, Real LLM integration, recovery mutation/touch, mobile regression, Settings touch, button health and runtime stability stress.
- PR #104 merged normally; PRODUCT main now points to merge SHA `0058e1ba242962560c93ca2887298fd83763ca99`.
- No separate push-trigger Release Gate was observed on the merge SHA at reconciliation time; exact-head merge-ref Gate #1259 is the verified release evidence.
- Automated WebKit evidence is not a substitute for manual physical-iPhone visual review.

## AI/Data v2 verified baseline
- Food data quality contract uses `verified / approximate / estimated / unknown`; `verified` requires traceable provider + dataset + record ID.
- Nutrition Intelligence v2 deterministically interprets current-day meals, recent nutrition evidence, training demand and recovery state into bounded nutrition modes.
- Coach Knowledge Grounding v2 selects only decision-relevant curated evidence and binds it to the existing deterministic GARANG decision identity.
- Firebase Functions Coach path includes `nutritionIntelligence` and `knowledgeGrounding` before provider invocation.
- Grounding contract enforces `decisionOwnedBy: GARANG`, `llmRole: explain_only`, and `stateMutationAllowed: false`; unsupported provider reasons and decision drift fail closed.
- Official-food ingestion v2 normalizes K-FIND and USDA FoodData Central records into the Food Data Foundation contract.
- Existing GARANG food records are not rewritten automatically. Exact unique name/alias matches create reviewable replacement proposals; ambiguous matches are routed to manual review.

## Food corpus evidence
- Current canonical `food-db.json` has not yet been bulk-replaced by official records as part of PR #108.
- Last verified baseline audit before live ingestion: 500 records; 0 verified, 12 approximate, 488 estimated.
- Therefore official-source coverage improvement remains UNKNOWN until an approved K-FIND/USDA data pull is processed and reviewed.
- K-FIND/USDA credentials must remain outside source/client bundles; do not paste or commit them.

## Real-device evidence
- Founder opened the deployed GitHub Pages app on a real iPhone using Chrome on iOS and confirmed the GARANG start/login surface rendered normally.
- Founder completed onboarding, reached Today, completed a first record, and saw Coach interpretation/feedback normally.
- This is VERIFIED only for that exercised path. Plan -> execution -> persistence -> Progress/Accumulation and a target in-app browser remain outstanding on a physical device.

## Stable
- Golden Path remains Goal/Plan -> Action/Record -> Interpretation -> Feedback -> Next Action, with user confirmation before behavior-changing mutations.
- GARANG deterministic Decision Intelligence owns judgment; the LLM remains explanation/orchestration only.
- Outcome Learning remains bounded/read-only and cannot create automatic progression increases.
- Firebase Auth + Firestore remain the user-data foundation; canonical app write ownership is unchanged.
- `GARANG_LLM_API_KEY` remains Secret Manager-owned; no provider/source secret is stored in browser/source control.
- Production privileged endpoint activation, production Functions deployment, payments and commercial release remain separate Founder decisions.

## In progress / unknowns
- Product Consolidation PR #104 is DONE / MERGED / RELEASE-GATE GREEN.
- P1 real-device Golden Path validation remains PARTIAL GREEN: iPhone Chrome load/onboarding/Today/first-record/Coach is GREEN; physical-device plan/execution/persistence/Progress and target in-app browser remain outstanding.
- Official-food ingestion code/contract is VERIFIED GREEN; actual K-FIND/USDA bulk import, replacement count and quality uplift are NOT YET VERIFIED.
- Live production Real LLM environment evidence remains UNKNOWN; repository/browser integration tests are GREEN but production activation/smoke evidence is still required.
- Commercial-production readiness remains RED pending full real-device completion, payment/entitlement, monitoring, legal/privacy/retention and production gates.

## Next priorities
1. P2 — Activate and verify the production Real AI Coach provider/secret boundary under explicit production safeguards; verify Functions deployment/config first.
2. P2 — Run authenticated live Coach smoke and two-user personalization evidence without transferring decision ownership to the LLM.
3. P1 — Complete the real iPhone Golden Path through plan -> execution -> persistence -> Progress/Accumulation, then verify the target in-app browser.
4. P4 — Execute an approved K-FIND/USDA data pull, generate replacement proposals, measure quality-coverage delta, and review ambiguous matches before canonical nutrition changes.
5. After the above evidence is GREEN, prepare the Wanted AI Championship demo/submission copy from the verified Golden Path rather than adding new product scope.
