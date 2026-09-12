# GARANG Tasks

## P0 — Restore intended repository structure

Status: DONE
Owner role: Engineering / QA

Evidence:
- Source moved under `src/` and tests under `tests/`.
- GitHub Actions CI run #2 passed `npm run verify`.

## P0 — Verify Founder OS foundation

Status: DONE
Owner role: QA / Release

Evidence:
- State documents exist under `docs/agent/`.
- CI runs `npm run verify` on pull requests.
- Persistent-state and filesystem-boundary tests are included and passing in CI run #2.

## P1 — Merge PR #1

Status: TODO
Owner role: Founder / Release
Dependency: final PR CI GREEN

Acceptance criteria:
- PR head CI is GREEN.
- No unresolved critical review concern.
- Merge does not bypass the permission/release rules.

## P1 — Implement real execution-cycle abstraction

Status: TODO
Owner role: Engineering
Dependency: Founder OS foundation merged

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
- GitHub state documents remain the human-readable source-of-truth summaries.
