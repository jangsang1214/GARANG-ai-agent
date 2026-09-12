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
- Objective: reconcile persistent state after the completed Founder OS v5.1 merge, then choose the next concrete work unit from verified needs.
- `main` HEAD: `ae2106b02605745cc0ac4261c420a04c08b4c679` (PR #2 squash merge).
- Reconciliation branch: `agent/project-start-reconcile-2026-09-12`.
- Verified: PR #2 latest head `717453e72b51b79713dc8c24eabbc68efc7b19d3` passed GitHub Actions CI run #8 (`npm run verify`) before merge.
- Verified: PR #2 is merged; there were no open PRs or issues at PROJECT START before the reconciliation branch was created.
- Known limitation: the squash-merge commit itself had no separate CI/status observed; release evidence is the successful latest-head CI immediately before merge.
- Technical debt remains: provider/action-synthesis layer (TD-001), process-local runtime memory (TD-002), heuristic fallback capability inference (TD-003).
- Exact next safe task: finish the reconciliation branch, verify its PR CI, and merge when GREEN. After that, do not implement runtime persistence unless a concrete workflow demonstrates the need.
