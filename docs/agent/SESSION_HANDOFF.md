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
- Founder OS v7-lite implementation is complete and merged across both registered repositories.
- CONTROL main: `e25dbad8dd835dd6b5be88112c2d6742b4aa8ba9`; post-merge CI #26 GREEN and Event Envelope #9 GREEN.
- PRODUCT main: `5c1f46c448a43e69025356bda5ca0a121ded4372`; post-merge GARANG Release Gate #1004 GREEN and Founder OS Event Envelope #3 GREEN.
- PRODUCT PR #69 earlier exposed a transient PR-context WebKit route timeout; final PR revalidation and post-merge main both passed the complete suite, so no active blocker remains.
- v7-lite provides Repository Registry, Project Graph, workstream Orchestrator, versioned Event Contracts, reconciliation, deterministic release readiness and read-only GitHub event artifacts.
- Event artifacts are contracts/evidence only; no always-on external consumer exists yet.
- Next product priorities: real-device Golden Path validation, then Founder release-channel decision.
- Commercial-production readiness remains separate from beta/development GREEN.

## Handoff rule
Never turn old handoff text into VERIFIED evidence without observing the source. DONE requires implementation + acceptance + verification + regression consideration + material state/graph synchronization.
