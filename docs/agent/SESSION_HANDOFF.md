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
8. Inspect GitHub `main`, current branch, recent commits, open PR/issues, and relevant CI.
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
- Objective: finalize Founder OS v5.1 and PR #2.
- Branch/PR: `agent/founder-os-v5.1` / PR #2.
- Code-bearing commit: `b4b733ed7bc6cd8cfc837ceea8bc897c21a8ff2d`.
- Verified: GitHub Actions CI run #7 passed `npm run verify` on that commit.
- Work completed: 7,688-char v5.1 constitution; evidence/DoD/recovery/scope protocols; centralized typed capability authorization; high-risk default deny; narrow Founder override; expanded tests.
- Known risk: latest documentation/version head still needs its own CI before merge.
- Exact next safe task: confirm latest PR #2 head CI GREEN, then request/perform Founder-approved squash merge.
