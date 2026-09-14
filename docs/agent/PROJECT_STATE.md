# GARANG Project State

Last updated: 2026-09-15

## Current objective
Protect the verified Golden Path while moving from repository/server readiness into real-device validation. In parallel with active Design consolidation, PRODUCT now has a GREEN non-UI Knowledge & Nutrition Intelligence v2 baseline: Food Data Foundation v2, deterministic Nutrition Intelligence v2, curated Coach Knowledge Grounding v2, and live Coach gateway grounding are merged without changing canonical write ownership or GARANG deterministic decision ownership.

## Repository observations
- CONTROL: `jangsang1214/GARANG-ai-agent`; Founder OS v7-lite remains the control plane.
- PRODUCT: `jangsang1214/-fitmind-ai`; current verified main is `50bd02eb7fed08c7f0e4369bb18c0fc5630b4e3c` from PR #107 `Ground live Coach in Nutrition Intelligence and curated knowledge`.
- PRODUCT PR #105 `Add Food Data Foundation v2 quality and eval gates` merged as `576bb65...`; it added canonical nutrition quality/provenance states, official-source registry, Food DB audit gates, deterministic Coach/Nutrition eval fixtures, CLI audit support and CI coverage.
- PRODUCT PR #106 `Add Nutrition Intelligence v2 and Coach grounding foundation` merged as `79cfc854...`; pre-merge Release Gate #1232 GREEN.
- PRODUCT PR #107 `Ground live Coach in Nutrition Intelligence and curated knowledge` merged as `50bd02eb...`; pre-merge Release Gate #1237 GREEN and exact post-merge main Release Gate #1239 GREEN. GitHub Pages deployment #773 GREEN.
- Active Design consolidation PR #104 remains a separate UI/runtime concern; the #105–#107 AI/Data work intentionally avoided its UI files.

## AI/Data v2 verified baseline
- Food data quality contract uses `verified / approximate / estimated / unknown`; `verified` requires traceable provider + dataset + record ID.
- Existing approximate/estimated food values are not silently promoted to verified.
- Nutrition Intelligence v2 deterministically interprets current-day meals, recent nutrition evidence, training demand and recovery state into bounded nutrition modes.
- Coach Knowledge Grounding v2 selects only decision-relevant curated evidence and binds it to the existing deterministic GARANG decision identity.
- Firebase Functions Coach path now includes `nutritionIntelligence` and `knowledgeGrounding` before provider invocation.
- Grounding contract enforces `decisionOwnedBy: GARANG`, `llmRole: explain_only`, and `stateMutationAllowed: false`.
- Unsupported LLM reason codes and decision identity drift fail closed through alignment checks.
- No UI surface, user-state schema, canonical write owner, Planner ownership or automatic mutation path was changed.

## Real-device evidence
- Founder opened the deployed GitHub Pages app on a real iPhone using Chrome on iOS and confirmed the GARANG start/login surface rendered normally.
- Founder entered onboarding successfully and reached Today without reporting navigation or rendering failure.
- Founder completed a first record and confirmed the Coach interpretation/feedback surface appeared and the exercised flow behaved normally.
- This is VERIFIED only for the exercised iPhone Chrome path above. The full acceptance path through plan -> execution -> persistence -> Accumulation, plus a target in-app browser, remains outstanding.

## Stable
- Golden Path remains Goal/Plan -> Action/Record -> Interpretation -> Feedback -> Next Action, with user confirmation before behavior-changing mutations.
- GARANG deterministic Decision Intelligence owns judgment; the LLM remains explanation/orchestration only.
- Outcome Learning remains bounded/read-only and cannot create automatic progression increases.
- Firebase Auth + Firestore remain the user-data foundation; canonical app write ownership is unchanged.
- `GARANG_LLM_API_KEY` remains Secret Manager-owned; no provider secret is stored in browser/source control.
- Production privileged endpoint activation, production Functions deployment, payments and commercial release remain separate Founder decisions.

## In progress / unknowns
- P1 real-device Golden Path validation is IN PROGRESS: iPhone Chrome load/onboarding/Today/first-record/Coach is GREEN; plan/execution/persistence/Accumulation and target in-app browser remain outstanding.
- Active Design consolidation PR #104 is still under separate Founder visual review flow.
- Official nutrition-source live ingestion is not yet VERIFIED; #105 provides the contract/registry, not evidence that K-FIND/USDA records were imported.
- Live production Real LLM environment evidence remains UNKNOWN.
- Commercial-production readiness remains RED pending full real-device completion, payment/entitlement, monitoring, legal/privacy/retention and production gates.

## Next priorities
1. P1 — Continue the real iPhone journey from Coach through plan -> execution -> persistence -> Accumulation and verify no critical mobile/runtime failure.
2. P2 — Preserve Design parallelism; do not edit PR #104 UI/runtime surfaces from AI/Data work.
3. P4 — Next AI/Data increment should be official food-source ingestion/normalization + measured nutrition quality improvement, using #105 quality gates; do not add vector DB/RAG bloat before evidence shows need.
4. P4 — Expand Coach/Nutrition eval coverage with real beta scenarios before changing Decision behavior.
5. Keep production provider/privileged endpoint activation and commercial hardening as separate explicit Founder decisions.
