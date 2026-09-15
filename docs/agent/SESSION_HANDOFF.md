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
- PRODUCT latest observed main is `66b0e0f04274afee30b9d92f7752518de9b9ae52`. Its tree is identical to merged PR #110 tree, so the official corpus planner is present on current main.
- Design consolidation PR #104 is merged. PR #110 was based on the post-design main and did not revert UI/runtime work.
- PR #108 established K-FIND/USDA official ingestion with fail-closed provenance; exact post-merge Gate #1247 GREEN.
- PR #110 `Add official corpus upgrade planning for GARANG food data` merged as `1763c4f9...` and adds Data.go.kr standard normalization, secure paginated retrieval support, before/projected quality reporting, and exact/ambiguous corpus matching boundaries.
- Current integrated main Gate #1264 is GREEN across full tests/build/Firebase/Firestore and complete WebKit Golden Path including authenticated Coach, Real LLM, recovery and mobile/runtime stress. Pages #778 GREEN.
- `food-db.json` has NOT been bulk-upgraded. Last verified audit remains 500 foods = 0 verified / 12 approximate / 488 estimated.
- Actual quality uplift requires a current approved official Data.go.kr/K-FIND/USDA artifact or a secure external environment with approved source access. Never paste or commit service keys.
- Corpus planner rules: unsupported volume basis fails closed; exactly one verified exact candidate creates a review proposal; multiple candidates require manual review; no automatic canonical rewrite.
- GARANG deterministic decision identity remains authoritative. LLM remains explanation-only and cannot mutate state directly.
- Founder real-device validation remains PARTIAL GREEN through iPhone Chrome app load -> onboarding -> Today -> first record -> Coach; later plan/execution/persistence/Accumulation and target in-app browser remain unverified.
- Live production Real LLM activation remains UNKNOWN. Commercial-production readiness remains RED.

## Next recommended work
1. Complete real-device Golden Path through plan -> execution -> persistence -> Accumulation and target in-app browser.
2. Obtain an approved official nutrition dataset artifact or run the merged importer in a secure key-enabled environment; generate the 500-food replacement plan and review ambiguous mappings.
3. Apply only traceable reviewed replacements, re-audit quality counts, then re-run full Release Gate before raising recommendation confidence.
4. Continue collecting real beta Coach/Nutrition failure scenarios before changing deterministic decision behavior.

## Handoff rule
Never turn old handoff text into VERIFIED evidence without observing the source. DONE requires implementation + acceptance + verification + regression consideration + material state synchronization.
