# GARANG Project State

Last updated: 2026-09-12

## Current objective

Establish the API-key-free Founder OS v5 operating layer and restore the TypeScript repository to its intended buildable structure.

## Current branch

`agent/founder-os-v5`

## Stable

- Deterministic planner/recovery/permission primitives exist.
- Filesystem tool confines reads/writes to the repository root.
- Terminal tool uses an allowlist.
- High-risk plan steps are blocked by default.

## In progress

- Restore source files under `src/` and tests under `tests/`.
- Add persistent GitHub-backed project-state documents.
- Add deterministic project-state loading and tests.
- Add CI verification.

## Broken / blockers

- `main` currently has TypeScript files flattened at repository root while imports and `tsconfig.json` expect `src/` and `tests/` directories.

## Next priorities

1. Get the structural repair and Founder OS changes through CI.
2. Merge only after verification is GREEN.
3. Design the next execution layer so plans can drive real tool actions without bypassing permission gates.
