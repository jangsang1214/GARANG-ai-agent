# GARANG Release Status

Last updated: 2026-09-12

## Current decision

YELLOW

## Evidence

- Repository structure on `main` is inconsistent with imports and `tsconfig.json`.
- A structural repair and Founder OS foundation are being prepared on `agent/founder-os-v5`.
- Verification is not GREEN until CI or an equivalent real run confirms `npm run verify`.

## Release gate

- TypeScript check: PENDING
- Tests: PENDING
- Build: PENDING
- Permission tests: PENDING
- Persistent-state tests: PENDING
- Filesystem boundary tests: PENDING
- Critical known regression: repository layout on main

## GREEN criteria

All verification commands pass on the repaired branch and no high-risk permission boundary is weakened.
