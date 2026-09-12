# GARANG Tasks

## P0 — Restore intended repository structure

Status: DONE
Owner role: Engineering / QA

Evidence:
- Source moved under `src/` and tests under `tests/`.
- GitHub Actions CI passed `npm run verify` before the execution-layer change.

## P0 — Verify Founder OS foundation

Status: DONE
Owner role: QA / Release

Evidence:
- State documents exist under `docs/agent/`.
- CI runs `npm run verify` on pull requests.
- Persistent-state and filesystem-boundary tests are included.

## P1 — Add explicit permission-gated action execution

Status: IN PROGRESS
Owner role: Engineering / QA

Acceptance criteria:
- Explicit typed actions resolve only to registered tools.
- High-risk actions are blocked before tool execution.
- Tool failures stop the run and are surfaced.
- Verification runs after successful actions.
- Deterministic tests cover successful and blocked execution paths.

## P1 — Merge PR #1

Status: TODO
Owner role: Founder / Release
Dependency: final PR CI GREEN

Acceptance criteria:
- PR head CI is GREEN.
- No unresolved critical review concern.
- Merge does not bypass the permission/release rules.

## P1 — Improve runtime persistence

Status: TODO
Owner role: Engineering

Acceptance criteria:
- Runtime memory can persist/recover structured session state without relying only on process-local `Map` storage.
- GitHub state documents remain the human-readable source-of-truth summaries.
