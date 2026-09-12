# GARANG Tasks

## P0 — Restore intended repository structure
Status: DONE
Owner: Engineering / QA
Evidence: `src/` and `tests/` restored; CI verifies layout.

## P0 — Verify Founder OS foundation
Status: DONE
Owner: QA / Release
Evidence: persistent state, boundaries, action execution, tests, and CI were GREEN before PR #1 merge.

## P1 — Merge PR #1
Status: DONE
Owner: Founder / Release
Evidence: squash-merged to `main` as `15bcf93d8cdd655a0ae7d5a2dd693bd9cc76f90e`.

## P1 — Founder OS v5.1 operating constitution
Status: IN PROGRESS
Owner: Project Director / QA
Acceptance criteria:
- Project Instructions remain below the 8,000-character limit.
- Evidence, escalation, scope, DoD, failure recovery, state mutation, and deterministic recovery order are defined.
- Repository `AGENTS.md` is consistent with the project constitution.
- Latest PR head CI is GREEN before merge.

## P1 — Typed capability authorization
Status: IN PROGRESS
Owner: Engineering / Security / QA
Acceptance criteria:
- Actions declare capabilities, not self-selected risk.
- Central capability map determines risk.
- High-risk capabilities are denied by default.
- Narrow Founder-approved override is supported.
- Planner can accept an explicit capability; natural-language inference is fallback only.
- Tests cover mapping, blocking, override, and execution.

## P2 — Improve runtime persistence
Status: TODO
Owner: Engineering
Acceptance criteria:
- Structured runtime state can persist/recover when needed without using chat history as a database.
- GitHub state docs remain human-readable summaries/source of truth.
