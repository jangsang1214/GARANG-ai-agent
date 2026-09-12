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
- Founder OS v7-lite implementation remains complete and merged across both registered repositories.
- CONTROL baseline remains GREEN; current state docs record the latest PRODUCT merge evidence.
- PRODUCT main: `99369b097da5d6655dbc083adf8c8aa1adb9c106` from PR #73 `Unify Today next action ownership`.
- PR #73 latest head `0029b94ae21f42ca9b4083572d7a337ca261c58f` passed GARANG Release Gate #1046 GREEN before merge.
- PRODUCT post-merge GARANG Release Gate #1047 is GREEN: `core-build-rules`, complete `browser-webkit`, and final `verify` all passed on main.
- PRODUCT post-merge Founder OS Event Envelope #94 is GREEN.
- Today has one canonical visible next-action owner while Golden Path remains sequence truth; duplicate sibling surfaces are suppressed and canonical Record/check-in/execution mutation owners remain unchanged.
- Verified Golden Path in WebKit: first record → Coach → recovery/check-in → plan → execute → accumulation, including authenticated Coach/recovery and mobile stability suites.
- No active implementation blocker remains for Today Single Next Action.
- Next product priorities: real-device Golden Path validation, then Founder release-channel decision.
- Commercial-production readiness remains separate from beta/development GREEN.
- Event artifacts are contracts/evidence only; no always-on external consumer exists yet.

## Handoff rule
Never turn old handoff text into VERIFIED evidence without observing the source. DONE requires implementation + acceptance + verification + regression consideration + material state/graph synchronization.
