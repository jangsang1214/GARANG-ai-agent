# GARANG Session Handoff & Recovery Protocol v5.1

A chat is a temporary work session. The project must be recoverable from GitHub without replaying chat history.

## PROJECT START — deterministic recovery order
1. Read root `AGENTS.md`.
2. Read `PROJECT_STATE.md`.
3. Read this `SESSION_HANDOFF.md`.
4. Read `TASKS.md`.
5. Read `DECISIONS.md`.
6. Read `TECHNICAL_DEBT.md`.
7. Read `RELEASE_STATUS.md`.
8. Inspect Founder OS and product GitHub `main`, current branches, recent commits, open PR/issues, and relevant CI/deployment evidence.
9. Reconcile documentation with repository evidence. Repository evidence wins for implementation facts.
10. Label uncertain claims internally as VERIFIED / RECORDED / INFERRED / UNKNOWN.
11. Select the top 1–3 priorities and proceed with the highest-value authorized safe work.

## Before ending a meaningful work unit
Update only facts that changed:
- PROJECT_STATE: objective/branch/stable/in-progress/broken/blockers/next.
- DECISIONS: durable new/superseded decisions.
- TASKS: status/acceptance/evidence.
- TECHNICAL_DEBT: created/changed/resolved debt.
- RELEASE_STATUS: actual verification evidence and GREEN/YELLOW/RED.

Do not paste raw chat logs. Do not turn an unverified claim into a fact merely because an older handoff said it.

## Completion rule
DONE requires implementation + acceptance criteria + verification evidence + regression consideration + material state synchronization. Otherwise use PARTIAL/YELLOW and name the missing evidence.

## Current handoff
- Workstream: Command Center.
- Objective: protect the verified product baseline, validate the deployed Golden Path on a real target device, and avoid starting production infrastructure until the Founder selects the next release channel.
- Founder OS main: `7292f542c25b3cd7fd1fb66f26dbeab437f54311`; push CI #17 GREEN.
- Product main: `c0fd29e06c4c29f3f504d940a8d2497e84d7c821`; GARANG Release Gate #999 GREEN; Pages deployment #746 successful.
- Current product version: `0.11.0-beta.5` development build.
- Automated Golden Path complete journey, Today/Coach/Planner flows, recovery, Firestore rules, Firebase public health, and mobile WebKit regression coverage passed on current product main.
- Product PR #61 was closed as superseded after confirming it was 142 commits behind main and its latest Release Gate #857 was RED.
- Historical product PR #1 remains an open draft, 1139 commits behind current main; audit for unique unresolved fixes before closing, never merge it as-is.
- Production external service endpoints remain intentionally disconnected (`null`), and the reference backend uses process-local `MemoryStore`.
- AI standalone repos are inactive scaffolds, not the active production path.
- Release readiness: beta/demo GREEN, commercial production RED, overall Command Center YELLOW.
- Founder decision required: continue beta/demo learning or intentionally enter commercial-production hardening.
- Exact next safe task: perform/collect real-device validation evidence for the deployed current main on target iPhone Safari and target in-app browser; if any regression exists, open one narrow reproducible issue before new feature work.
