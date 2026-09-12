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
- CONTROL PR #6 implements v7-lite registry, graph, orchestrator, event contracts, reconciliation, release evaluation, event-derived multi-repo readiness, event workflow and 8K prompt gate.
- Verified CONTROL code head `43fa47d...`: CI #24 GREEN + Event Envelope #5 GREEN. Final state-sync head must be reverified before merge.
- PRODUCT main `c0fd29e...`: Release Gate #999 rerun GREEN including full browser-webkit suite.
- PRODUCT PR #69 head `9238d28...`: Event Envelope #1 GREEN, but Release Gate #1000 RED twice at Record→workout transition in existing WebKit regression test. Do not merge.
- PR #69 changes only event workflow/emitter; causality with app timing is UNKNOWN. Keep diagnosis separate from adapter scope.
- Existing product priorities remain real-device Golden Path validation and Founder release-channel decision.
- Event artifacts are contracts/evidence only; no always-on consumer exists yet.

## Handoff rule
Never turn old handoff text into VERIFIED evidence without observing the source. DONE requires implementation + acceptance + verification + regression consideration + material state/graph synchronization.
