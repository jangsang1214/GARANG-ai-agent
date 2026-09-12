# GARANG Release Status

Last updated: 2026-09-12

## Current decision
YELLOW for `agent/founder-os-v5.1` until the new capability-policy and instruction changes pass CI on the latest branch head.

## Last known GREEN baseline
`main` commit `15bcf93d8cdd655a0ae7d5a2dd693bd9cc76f90e` (PR #1 squash merge). Final PR #1 head CI was GREEN before merge.

## v5.1 required verification
- TypeScript check
- production build
- permission/capability tests
- planner capability tests
- explicit action execution/blocking/override tests
- existing recovery, project-state, and filesystem-boundary regression tests

## Known non-blocking limitation
Natural-language capability inference remains heuristic fallback. Execution authorization itself is typed and centrally policy-owned in v5.1.

## Decision rule
Set GREEN only after the latest PR head passes required CI. Missing evidence remains YELLOW; critical failure is RED.
