# GARANG Release Status

Last updated: 2026-09-12

## Current decision
GREEN for the code-bearing Founder OS v5.1 commit `b4b733ed7bc6cd8cfc837ceea8bc897c21a8ff2d` based on GitHub Actions CI run #7. PR #2 merge still requires the latest head CI to remain GREEN after documentation/version synchronization.

## Verified coverage on v5.1 code
- TypeScript check: PASS
- production build: PASS
- existing recovery/project-state/filesystem regression tests: PASS
- centralized capability/risk mapping tests: PASS
- high-risk capability default blocking: PASS
- narrow Founder-approved capability override: PASS
- planner explicit/fallback capability behavior: PASS
- explicit action execution and verification path: PASS

## Last GREEN baseline on main
`15bcf93d8cdd655a0ae7d5a2dd693bd9cc76f90e` (PR #1 squash merge).

## Remaining non-blocking limitation
Natural-language capability inference is a heuristic fallback. Actual action execution is authorized by explicit typed capability and central policy.

## Merge rule
GitHub CI on the latest PR head is authoritative for merge readiness. Documentation-only synchronization must not bypass that check.
