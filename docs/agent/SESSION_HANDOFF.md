# Session Handoff Protocol

A chat is a temporary work session. The project must be recoverable from GitHub without replaying the entire conversation.

## On PROJECT START

1. Read `AGENTS.md`.
2. Read `PROJECT_STATE.md`, `DECISIONS.md`, `TASKS.md`, `TECHNICAL_DEBT.md`, and `RELEASE_STATUS.md`.
3. Inspect the default branch, current working branch, recent commits, open PRs/issues, and CI relevant to current work.
4. Reconcile state docs with repository evidence. Repository evidence wins for implementation facts.
5. Select the top 1–3 priorities using the priority engine.

## Before ending a meaningful work unit

Update only what changed:

- `PROJECT_STATE.md` — objective, branch, stable/in-progress/broken, blockers, next priorities.
- `DECISIONS.md` — durable decisions and superseded decisions.
- `TASKS.md` — status and acceptance criteria.
- `TECHNICAL_DEBT.md` — new/resolved debt.
- `RELEASE_STATUS.md` — real verification evidence and GREEN/YELLOW/RED.

Do not paste raw chat logs into state files.

## Handoff summary format

When useful, finish a session with:

- Current objective
- Branch / PR
- Work completed
- Verification evidence
- Known risks
- Exact next task

A new session should be able to type `PROJECT START` and continue from these sources.
