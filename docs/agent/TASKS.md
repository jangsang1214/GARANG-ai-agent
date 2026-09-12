# GARANG Tasks

## P0 — Restore intended repository structure

Status: DONE
Owner role: Engineering / QA

Evidence:
- Source moved under `src/` and tests under `tests/`.
- GitHub Actions verifies the repaired layout.

## P0 — Verify Founder OS foundation

Status: DONE
Owner role: QA / Release

Evidence:
- State documents exist under `docs/agent/`.
- CI runs `npm run verify` on pull requests.
- Persistent-state and filesystem-boundary tests pass.

## P1 — Add explicit permission-gated action execution

Status: DONE
Owner role: Engineering / QA

Evidence:
- Explicit typed actions resolve only to registered tools.
- High-risk actions are blocked before tool execution.
- Successful actions are followed by verification.
- Deterministic success and blocked-path tests pass in GitHub Actions CI #4.

## P1 — Merge PR #1

Status: TODO
Owner role: Founder / Release
Dependency: final PR CI GREEN

Acceptance criteria:
- PR head CI is GREEN.
- No unresolved critical review concern.
- Merge does not bypass the permission/release rules.

## P1 — Improve typed risk/capability policy

Status: TODO
Owner role: Engineering / Security

Acceptance criteria:
- Sensitive capabilities carry explicit risk rather than relying primarily on natural-language keyword matching.
- Tests cover risky capabilities and permission overrides.

## P2 — Improve runtime persistence

Status: TODO
Owner role: Engineering

Acceptance criteria:
- Runtime memory can persist/recover structured session state when needed without relying only on process-local `Map` storage.
- GitHub state documents remain the human-readable source-of-truth summaries.
