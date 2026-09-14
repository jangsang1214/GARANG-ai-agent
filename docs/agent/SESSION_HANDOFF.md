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
- PRODUCT current verified main is `50bd02eb7fed08c7f0e4369bb18c0fc5630b4e3c` from PR #107 `Ground live Coach in Nutrition Intelligence and curated knowledge`.
- PR #105 established Food Data Foundation v2 quality/provenance contracts, official source registry, audit gates and Coach/Nutrition eval foundations.
- PR #106 established deterministic Nutrition Intelligence v2 and Coach Knowledge Grounding v2 foundation; pre-merge Release Gate #1232 GREEN.
- PR #107 wired nutrition + curated knowledge grounding into the Firebase Functions Coach path; pre-merge Release Gate #1237 GREEN, exact post-merge Release Gate #1239 GREEN, Pages #773 GREEN.
- Coach grounding preserves the exact deterministic GARANG decision identity. Contract remains `decisionOwnedBy: GARANG`, `llmRole: explain_only`, `stateMutationAllowed:false`.
- Provider reason codes remain limited to deterministic `decisionReasons`; unsupported reasons fail closed.
- Active Design consolidation PR #104 is a separate UI/runtime effort. AI/Data PRs #105–#107 intentionally did not edit its UI surfaces. Do not merge or modify PR #104 based on AI/Data evidence.
- Food-source registry includes official-source paths, but live K-FIND/USDA ingestion is not yet VERIFIED; do not claim the current food corpus has been converted to verified official-source coverage.
- Founder-run real-device validation remains PARTIAL GREEN: deployed app opens -> onboarding -> Today -> first record -> Coach on real iPhone Chrome. Plan -> execution -> persistence -> Accumulation and target in-app browser remain unverified.
- GARANG deterministic Decision Intelligence remains the judgment owner; LLM output remains explanation/orchestration only and cannot mutate state directly.
- Outcome Learning remains bounded/read-only with no automatic progression increase.
- Live production Real LLM activation remains UNKNOWN.
- Commercial-production readiness remains RED until full real-device, payment/entitlement, monitoring, production provider/endpoints and legal/privacy/retention gates are completed.

## Next recommended work
1. Continue real iPhone Golden Path from Coach through plan -> execution -> persistence -> Accumulation.
2. Preserve Design parallelism while PR #104 is active.
3. For AI/Data, next safe increment is official food-source ingestion/normalization against Food Data Foundation v2, followed by measured coverage/quality reporting before recommendation behavior changes.
4. Expand Coach/Nutrition eval scenarios using real beta failures and edge cases before changing deterministic decision behavior.
5. Keep production privileged endpoint activation, production Functions deployment and commercial release as separate explicit Founder decisions.

## Handoff rule
Never turn old handoff text into VERIFIED evidence without observing the source. DONE requires implementation + acceptance + verification + regression consideration + material state synchronization.
