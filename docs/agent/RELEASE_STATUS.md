# GARANG Release Status

Last updated: 2026-09-12

## Current decision
GREEN for the merged Founder OS v5.1 content on `main`, with one evidence nuance: the latest PR #2 head `717453e72b51b79713dc8c24eabbc68efc7b19d3` passed GitHub Actions CI run #8 (`npm run verify`) immediately before squash merge, while no separate CI/status was observed on the resulting merge commit `ae2106b02605745cc0ac4261c420a04c08b4c679`.

## Verified coverage on v5.1 code
- TypeScript check: PASS on the latest PR #2 head.
- production build: PASS on the latest PR #2 head.
- existing recovery/project-state/filesystem regression tests: PASS.
- centralized capability/risk mapping tests: PASS.
- high-risk capability default blocking: PASS.
- narrow Founder-approved capability override: PASS.
- planner explicit/fallback capability behavior: PASS.
- explicit action execution and verification path: PASS.

## Main baseline
- `15bcf93d8cdd655a0ae7d5a2dd693bd9cc76f90e`: PR #1 squash merge.
- `ae2106b02605745cc0ac4261c420a04c08b4c679`: PR #2 squash merge; current `main` HEAD at PROJECT START.

## Current reconciliation gate
Persistent state files were stale after PR #2 merged. They are being corrected on `agent/project-start-reconcile-2026-09-12` and should merge only after that branch's PR CI is GREEN.

## Remaining non-blocking limitations
- Natural-language capability inference is a heuristic fallback. Actual action execution is authorized by explicit typed capability and central policy.
- Runtime `AgentMemory` remains process-local; structured persistence is not scheduled without a concrete workflow need.
- The current operating mode still relies on ChatGPT + GitHub for reasoning/action proposal rather than a separate provider adapter.

## Merge rule
GitHub CI on the latest PR head is authoritative for merge readiness. Documentation/state synchronization must follow the same branch/PR verification discipline as code changes.
