# GARANG Session Handoff & Recovery Protocol v7-lite

A chat is temporary. Project identity/state must be recoverable from GitHub.

## PROJECT START order
1. `AGENTS.md`
2. `docs/agent/REPOSITORIES.json`
3. `PROJECT_STATE.md`
4. `PROJECT_GRAPH.json`
5. this `SESSION_HANDOFF.md`
6. `TASKS.md`
7. `DECISIONS.md`
8. `TECHNICAL_DEBT.md`
9. `RELEASE_STATUS.md`
10. inspect CONTROL + PRODUCT default/current branches, recent commits, open PR/issues and relevant CI/deployment evidence
11. reconcile observed evidence with recorded state/graph
12. select top 1–3 priorities and route the highest-value authorized work

## Handoff rule
Update only facts that changed. DONE requires implementation + acceptance criteria + verification + regression consideration + material graph/state synchronization. Never turn an old handoff into current VERIFIED evidence without observing the source.

## Current handoff
- Objective: implement and verify Founder OS v7-lite event-ready control plane without changing the healthy product beta runtime.
- CONTROL base before branch: `99686bfa69593bd2dc7b45a1b679cc3db9ab30fe`; working branch `agent/founder-os-v7-lite`.
- PRODUCT observed main: `c0fd29e06c4c29f3f504d940a8d2497e84d7c821`.
- Product beta/demo remains recorded GREEN from Release Gate #999 and Pages #746.
- v7-lite candidate is YELLOW until CI verifies the latest control head.
- After control GREEN, install the same read-only event-envelope adapter in PRODUCT on a separate branch/PR and require product CI/release-gate evidence.
- Event artifacts are contracts/evidence only; there is no always-on external consumer yet.
- Existing product next actions remain: real-device Golden Path validation and Founder release-channel decision.
