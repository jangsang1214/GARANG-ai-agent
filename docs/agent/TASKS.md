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
Status: DONE
Owner: Project Director / QA
Evidence:
- Project Instructions are 7,688 characters including spaces/newlines.
- Evidence states, escalation, scope control, DoD, failure recovery, state mutation, and deterministic recovery order are defined.
- Root `AGENTS.md` is aligned with the v5.1 constitution.
- Code-bearing v5.1 commit passed CI run #7.

## P1 — Typed capability authorization
Status: DONE
Owner: Engineering / Security / QA
Evidence:
- Actions declare typed capabilities rather than self-selected risk.
- Central capability map determines risk.
- High-risk capabilities are denied by default.
- Narrow Founder-approved override is supported.
- Planner accepts explicit `implementationCapability` with heuristic inference only as fallback.
- Mapping, blocking, override, planner, execution, and regression tests passed CI run #7.

## P1 — Merge PR #2
Status: DONE
Owner: Founder / Release
Evidence:
- Latest PR #2 head `717453e72b51b79713dc8c24eabbc68efc7b19d3` passed GitHub Actions CI run #8 (`npm run verify`).
- PR #2 was squash-merged to `main` as `ae2106b02605745cc0ac4261c420a04c08b4c679`.
- No unresolved critical concern was observed in the recovered GitHub state.

## P1 — Reconcile persistent state after PR #2 merge
Status: DONE
Owner: Project Director / QA
Acceptance criteria:
- `PROJECT_STATE.md`, `SESSION_HANDOFF.md`, `TASKS.md`, and `RELEASE_STATUS.md` reflect the actual merged state.
- Reconciliation changes are made on a working branch, not directly on `main`.
- PR #3 latest-head CI is GREEN before merge.
Evidence:
- PR #3 changed only the four intended `docs/agent/` state files.
- Final PR #3 head `8dc06a14353959eb13aae9c8ab6897a209e19fef` passed GitHub Actions CI run #14.
- PR #3 was merged as `97341fcf0240f3c80a5946fbcf50e1266bbb2dfb`.

## P2 — Improve runtime persistence
Status: TODO / NOT SCHEDULED
Owner: Engineering
Acceptance criteria:
- A concrete workflow demonstrates that process-surviving runtime state is needed.
- Structured runtime state persists/recover when needed without using chat history as a database.
- GitHub state docs remain human-readable summaries/source of truth.
Note: Do not build this only because it exists as technical debt; prioritize verified product/workflow value first.
