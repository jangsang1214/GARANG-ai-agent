# GARANG Tasks

## P0 — Restore intended repository structure

Status: IN PROGRESS
Owner role: Engineering / QA

Acceptance criteria:
- Source lives under `src/` using the paths already referenced by imports.
- Tests live under `tests/`.
- `npm run check`, `npm test`, and `npm run build` can run against that structure.

## P0 — Verify Founder OS foundation

Status: IN PROGRESS
Owner role: QA / Release

Acceptance criteria:
- State documents exist.
- CI runs `npm run verify` on pull requests.
- Release status is updated from real CI evidence.

## P1 — Implement real execution-cycle abstraction

Status: TODO
Owner role: Engineering
Dependency: structural repair GREEN

Acceptance criteria:
- Planned steps can be bound to explicit tool inputs/actions.
- Permission checks happen before execution.
- Verification failures can trigger a real corrective action, not verification-only retries.
- Deterministic tests cover blocked and successful execution paths.

## P1 — Improve runtime persistence

Status: TODO
Owner role: Engineering

Acceptance criteria:
- Runtime memory can persist/recover structured session state without relying only on process-local `Map` storage.
- GitHub state documents remain human-readable source-of-truth summaries.
