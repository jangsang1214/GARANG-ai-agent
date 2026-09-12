# GARANG Release Status

Last updated: 2026-09-12

## Current decision
GREEN for the merged Founder OS v5.1 code baseline and the completed persistent-state reconciliation through PR #3.

## Verified coverage on v5.1 code
- TypeScript check: PASS on latest PR #2 head `717453e72b51b79713dc8c24eabbc68efc7b19d3` via GitHub Actions CI run #8.
- production build: PASS on the latest PR #2 head.
- existing recovery/project-state/filesystem regression tests: PASS.
- centralized capability/risk mapping tests: PASS.
- high-risk capability default blocking: PASS.
- narrow Founder-approved capability override: PASS.
- planner explicit/fallback capability behavior: PASS.
- explicit action execution and verification path: PASS.

## Baseline evidence
- `15bcf93d8cdd655a0ae7d5a2dd693bd9cc76f90e`: PR #1 squash merge.
- `ae2106b02605745cc0ac4261c420a04c08b4c679`: PR #2 squash merge.
- `97341fcf0240f3c80a5946fbcf50e1266bbb2dfb`: PR #3 state-reconciliation merge.
- Final PR #3 head `8dc06a14353959eb13aae9c8ab6897a209e19fef` passed GitHub Actions CI run #14 before merge.
- No separate CI/status was observed on the PR #2 or PR #3 squash-merge commits themselves; authoritative merge-readiness evidence is the successful latest-head CI immediately before each merge.

## State synchronization
Persistent state now records the completed PR #2 and PR #3 merges. Future state-only changes follow the same working-branch, latest-head CI, and Founder-controlled merge discipline as code changes.

## Remaining non-blocking limitations
- Natural-language capability inference is a heuristic fallback. Actual action execution is authorized by explicit typed capability and central policy.
- Runtime `AgentMemory` remains process-local; structured persistence is not scheduled without a concrete workflow need.
- The current operating mode still relies on ChatGPT + GitHub for reasoning/action proposal rather than a separate provider adapter.

## Merge rule
GitHub CI on the latest PR head is authoritative for merge readiness. Documentation/state synchronization follows the same branch/PR verification discipline as code changes.
