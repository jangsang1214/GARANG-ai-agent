# GARANG Project State

Last updated: 2026-09-15

## Current objective
Protect the verified Golden Path while moving from repository/server readiness into real-device validation. In parallel with active Design consolidation, PRODUCT now has a GREEN non-UI Knowledge & Nutrition Intelligence v2 baseline plus a verified official-food ingestion pipeline for K-FIND and USDA. The ingestion path is fail-closed and does not automatically overwrite GARANG food records. Actual bulk official-data import and measured replacement coverage remain external execution work because approved source access/data pull has not yet been executed.

## Repository observations
- CONTROL: `jangsang1214/GARANG-ai-agent`; Founder OS v7-lite remains the control plane.
- PRODUCT: `jangsang1214/-fitmind-ai`; current verified main is `6fdc51ae6184527bfbc4a8df75fa33ac7c37f8cc` from PR #108 `Add official K-FIND and USDA food ingestion pipeline`.
- PRODUCT PR #105 `Add Food Data Foundation v2 quality and eval gates` merged as `576bb65...`.
- PRODUCT PR #106 `Add Nutrition Intelligence v2 and Coach grounding foundation` merged as `79cfc854...`; pre-merge Release Gate #1232 GREEN.
- PRODUCT PR #107 `Ground live Coach in Nutrition Intelligence and curated knowledge` merged as `50bd02eb...`; pre-merge Gate #1237 and exact post-merge Gate #1239 GREEN; Pages #773 GREEN.
- PRODUCT PR #108 `Add official K-FIND and USDA food ingestion pipeline` merged as `6fdc51ae...`; pre-merge Gate #1245 GREEN after correcting a test-fixture expectation, exact post-merge main Gate #1247 GREEN, Founder OS events GREEN, Pages #774 GREEN.
- Active Design consolidation PR #104 remains a separate UI/runtime concern; AI/Data work #105–#108 intentionally avoided its UI files.

## AI/Data v2 verified baseline
- Food data quality contract uses `verified / approximate / estimated / unknown`; `verified` requires traceable provider + dataset + record ID.
- Nutrition Intelligence v2 deterministically interprets current-day meals, recent nutrition evidence, training demand and recovery state into bounded nutrition modes.
- Coach Knowledge Grounding v2 selects only decision-relevant curated evidence and binds it to the existing deterministic GARANG decision identity.
- Firebase Functions Coach path includes `nutritionIntelligence` and `knowledgeGrounding` before provider invocation.
- Grounding contract enforces `decisionOwnedBy: GARANG`, `llmRole: explain_only`, and `stateMutationAllowed: false`; unsupported provider reasons and decision drift fail closed.
- Official-food ingestion v2 normalizes K-FIND and USDA FoodData Central records into the Food Data Foundation contract.
- Official rows are promoted to `verified` only when required provenance and core kcal/protein/carbs/fat are present.
- Existing GARANG food records are not rewritten automatically. Exact unique name/alias matches create reviewable replacement proposals; ambiguous matches are routed to manual review.
- No UI surface, user-state schema, canonical write owner, Planner ownership, automatic mutation path or source credential was changed.

## Food corpus evidence
- Current canonical `food-db.json` has not yet been bulk-replaced by official records as part of PR #108.
- Last verified baseline audit before live ingestion: 500 records; 0 verified, 12 approximate, 488 estimated.
- Therefore official-source coverage improvement remains UNKNOWN until an approved K-FIND/USDA data pull is processed and reviewed.
- K-FIND/USDA credentials must remain outside source/client bundles; do not paste or commit them.

## Real-device evidence
- Founder opened the deployed GitHub Pages app on a real iPhone using Chrome on iOS and confirmed the GARANG start/login surface rendered normally.
- Founder completed onboarding, reached Today, completed a first record, and saw Coach interpretation/feedback normally.
- This is VERIFIED only for that exercised path. Plan -> execution -> persistence -> Accumulation and a target in-app browser remain outstanding.

## Stable
- Golden Path remains Goal/Plan -> Action/Record -> Interpretation -> Feedback -> Next Action, with user confirmation before behavior-changing mutations.
- GARANG deterministic Decision Intelligence owns judgment; the LLM remains explanation/orchestration only.
- Outcome Learning remains bounded/read-only and cannot create automatic progression increases.
- Firebase Auth + Firestore remain the user-data foundation; canonical app write ownership is unchanged.
- `GARANG_LLM_API_KEY` remains Secret Manager-owned; no provider/source secret is stored in browser/source control.
- Production privileged endpoint activation, production Functions deployment, payments and commercial release remain separate Founder decisions.

## In progress / unknowns
- P1 real-device Golden Path validation is IN PROGRESS: iPhone Chrome load/onboarding/Today/first-record/Coach is GREEN; plan/execution/persistence/Accumulation and target in-app browser remain outstanding.
- Active Design consolidation PR #104 is still under separate Founder visual review flow.
- Official-food ingestion code/contract is VERIFIED GREEN; actual K-FIND/USDA bulk import, replacement count and quality uplift are NOT YET VERIFIED.
- Live production Real LLM environment evidence remains UNKNOWN.
- Commercial-production readiness remains RED pending full real-device completion, payment/entitlement, monitoring, legal/privacy/retention and production gates.

## Next priorities
1. P1 — Continue the real iPhone journey from Coach through plan -> execution -> persistence -> Accumulation and verify no critical mobile/runtime failure.
2. P2 — Preserve Design parallelism; do not edit PR #104 UI/runtime surfaces from AI/Data work.
3. P4 — Execute an approved official K-FIND/USDA data pull, generate replacement proposals, measure verified/approximate/estimated coverage delta, and review ambiguous matches before changing canonical nutrition values.
4. P4 — Expand Coach/Nutrition eval coverage with real beta scenarios before changing Decision behavior.
5. Keep production provider/privileged endpoint activation and commercial hardening as separate explicit Founder decisions.
