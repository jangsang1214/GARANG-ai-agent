# GARANG Release Status

Last updated: 2026-09-12

## Current decision
Overall Command Center: YELLOW.

- Founder OS v7-lite candidate: YELLOW until latest PR head passes `npm run verify` and cross-repo event adapter is verified.
- Product development beta/demo: GREEN on the previously verified current product baseline.
- Commercial production: RED until production-only gates are intentionally activated and completed.

## Founder OS candidate
- Base main observed before v7-lite branch: `99686bfa69593bd2dc7b45a1b679cc3db9ab30fe`.
- Branch: `agent/founder-os-v7-lite`.
- Added: Repository Registry, Project Graph, deterministic Orchestrator, event contracts/router/engine, repository-state reconciliation, release gate, GitHub event artifact adapter and regression tests.
- Verification: UNKNOWN until GitHub Actions completes on the candidate head.

## Product baseline
- Repository: `jangsang1214/-fitmind-ai`.
- Observed main: `c0fd29e06c4c29f3f504d940a8d2497e84d7c821`.
- Recorded Release Gate #999: GREEN.
- Recorded Pages build/deployment #746: success.
- Real target-device post-PR-#68 validation remains unverified in this work session.

## v7-lite release rule
- Event contract tests, registry, graph, orchestration, reconciliation and release-gate tests are required.
- Event adapter must be read-only and must not change product runtime behavior.
- UNKNOWN required checks produce YELLOW, not GREEN.
- Always-on runtime is explicitly out of scope for v7-lite.
