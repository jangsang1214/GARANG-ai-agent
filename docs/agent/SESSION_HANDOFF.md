# GARANG Session Handoff & Recovery Protocol v7-lite

## PROJECT START order
1 `AGENTS.md`
2 `docs/agent/REPOSITORIES.json`
3 `PROJECT_STATE.md`
4 `PROJECT_GRAPH.json`
5 `SESSION_HANDOFF.md`
6 `TASKS.md`
7 `DECISIONS.md`
8 `TECHNICAL_DEBT.md`
9 `RELEASE_STATUS.md`
10 inspect CONTROL + PRODUCT branches/commits/open PRs/CI
11 reconcile evidence with state/graph
12 select top 1–3 priorities and route authorized work.

## Current handoff
- PRODUCT current verified main is `6fdc51ae6184527bfbc4a8df75fa33ac7c37f8cc` from PR #108 `Add official K-FIND and USDA food ingestion pipeline`.
- PR #105 established Food Data Foundation v2 quality/provenance contracts, source registry, audit gates and Coach/Nutrition eval foundations.
- PR #106 established deterministic Nutrition Intelligence v2 and Coach Knowledge Grounding v2; Gate #1232 GREEN.
- PR #107 wired nutrition + curated knowledge grounding into the Firebase Functions Coach path; Gate #1237 and exact post-merge Gate #1239 GREEN; Pages #773 GREEN.
- PR #108 added executable official-source adapters and import/proposal tooling for K-FIND and USDA. Pre-merge Gate #1245 GREEN; exact post-merge Gate #1247 GREEN; Pages #774 GREEN.
- PR #108 does not auto-rewrite `food-db.json`. `verified` requires provider + dataset + recordId and complete kcal/protein/carbs/fat. Unique exact name/alias matches generate review proposals; ambiguous matches require manual review.
- Current food corpus has not yet been bulk-upgraded. Last verified baseline remains 500 records = 0 verified / 12 approximate / 488 estimated. Do not claim quality uplift until official data are actually pulled, proposed, reviewed, applied and re-audited.
- Source credentials must remain outside source/client bundles. Never paste or commit K-FIND/USDA credentials.
- Coach grounding preserves deterministic GARANG decision identity. Contract remains `decisionOwnedBy: GARANG`, `llmRole: explain_only`, `stateMutationAllowed:false`.
- Active Design consolidation PR #104 is a separate UI/runtime effort. AI/Data PRs #105–#108 intentionally did not edit its UI surfaces.
- Founder-run real-device validation remains PARTIAL GREEN: deployed app opens -> onboarding -> Today -> first record -> Coach on real iPhone Chrome. Plan -> execution -> persistence -> Accumulation and target in-app browser remain unverified.
- Live production Real LLM activation remains UNKNOWN.
- Commercial-production readiness remains RED until full real-device, payment/entitlement, monitoring, production provider/endpoints and legal/privacy/retention gates are completed.

## Next recommended work
1. Continue real iPhone Golden Path from Coach through plan -> execution -> persistence -> Accumulation.
2. Preserve Design parallelism while PR #104 is active.
3. For AI/Data, run an approved current K-FIND/USDA source pull using external credentials/environment, generate replacement proposals and a before/after quality report, then review ambiguous mappings before any canonical food-data update.
4. Expand Coach/Nutrition eval scenarios using real beta failures and edge cases before changing deterministic decision behavior.
5. Keep production privileged endpoint activation, production Functions deployment and commercial release as separate explicit Founder decisions.

## Handoff rule
Never turn old handoff text into VERIFIED evidence without observing the source. DONE requires implementation + acceptance + verification + regression consideration + material state synchronization.
