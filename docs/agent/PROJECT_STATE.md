# GARANG Project State

Last updated: 2026-09-12

## Current objective
Upgrade Founder OS from v5.0 to v5.1: strengthen the 8K project constitution, evidence/DoD/recovery protocols, and replace self-declared action risk with centralized typed capability authorization.

## Current branch
`agent/founder-os-v5.1`

## Stable
- PR #1 was squash-merged into `main` as commit `15bcf93d8cdd655a0ae7d5a2dd693bd9cc76f90e`.
- Founder OS v5 baseline, persistent state docs, explicit action execution, repository boundaries, CI, and verification loop are present on `main`.
- Final PR #1 head CI was GREEN before merge.

## In progress
- Founder OS v5.1 instruction/rule upgrade.
- Capability-based central permission policy and tests.

## Broken / blockers
- No known blocker on `main` before this branch.
- v5.1 branch is not GREEN until CI verifies the new capability-policy changes.

## Next priorities
1. Verify v5.1 with `npm run verify` in GitHub Actions.
2. Open/merge the v5.1 PR only after the latest head is GREEN.
3. Improve structured runtime persistence when it creates real value; keep GitHub docs human-readable.
