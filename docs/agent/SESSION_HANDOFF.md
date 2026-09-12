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
- Objective: Founder OS v5.1 baseline is established; choose the next concrete GARANG work unit from verified needs rather than extending infrastructure by default.
- Verified code baseline: PR #2 was squash-merged as `ae2106b02605745cc0ac4261c420a04c08b4c679`.
- Verified pre-merge CI: PR #2 latest head `717453e72b51b79713dc8c24eabbc68efc7b19d3` passed GitHub Actions CI run #8 (`npm run verify`).
- State recovery: PR #3 contains the documentation-only reconciliation that removes the stale pre-merge PR #2 handoff. Its latest head must be GREEN before merge.
- No product/code feature is currently designated as active work.
- Technical debt remains: provider/action-synthesis layer (TD-001), process-local runtime memory (TD-002), heuristic fallback capability inference (TD-003).
- Exact next session action: run PROJECT START, verify current `main`, open PR/issues, and CI, then select the highest-value concrete work unit. Do not implement runtime persistence unless a real workflow demonstrates the need.
