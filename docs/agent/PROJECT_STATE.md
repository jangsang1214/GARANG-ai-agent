# GARANG Project State

Last updated: 2026-09-12

## Current objective
Complete Founder OS v7-lite as an event-ready, multi-repository control plane without weakening the verified GARANG product baseline.

## Repository observations
- CONTROL: `jangsang1214/GARANG-ai-agent`; working PR #6 on `agent/founder-os-v7-lite`.
- CONTROL verified code head before this state-sync commit: `43fa47db0a0f05fd4e4e069fbb0a8d5c7257c36a`.
- CONTROL CI #24: GREEN. Founder OS Event Envelope #5: GREEN. Project Instructions 8,000-character gate: PASS.
- PRODUCT: `jangsang1214/-fitmind-ai`; main `c0fd29e06c4c29f3f504d940a8d2497e84d7c821`.
- PRODUCT main Release Gate #999 was re-run during this work and finished GREEN, including the complete `browser-webkit` suite.
- PRODUCT event-adapter PR #69 head: `9238d28a6a2f0e5b8c5217ba64f6b5fb7807440c`.
- PRODUCT Founder OS Event Envelope #1: GREEN and produced an artifact.
- PRODUCT Release Gate #1000: RED on `browser-webkit-regression.test.cjs` route transition; the failed browser job was retried and reproduced the same timeout.

## Stable
- v5.1 evidence discipline, capability policy, DoD, recovery and scope rules remain intact.
- v7-lite now has validated Repository Registry, Project Graph, Orchestrator, Event Contracts, Reconciler, deterministic Release Gate, CI-event release evaluation and read-only GitHub event artifacts.
- CONTROL event artifacts are real workflow outputs, not claimed background execution.
- PRODUCT main remains healthy on current evidence: Release Gate #999 rerun GREEN.

## In progress
- PR #6 final state synchronization and latest-head verification.
- PR #69 is implemented but blocked from merge by its existing product Release Gate.

## Blockers / unknowns
- PR #69 merge-ref reproduces a 5-second timeout after Record→workout in `browser-webkit-regression.test.cjs`; main with the same application SHA passes the same test when re-run.
- PR #69 changes only the read-only event workflow and emitter script, so causality between the adapter and app route timing is not established.
- Do not merge PR #69 while its Release Gate is RED.
- Real-device Golden Path validation remains outstanding.
- Always-on event consumption still requires a future external runtime/provider; v7-lite intentionally stops at event-ready contracts.

## Next priorities
1. Require latest CONTROL PR #6 head CI + Event Envelope GREEN, then mark PR #6 merge-ready.
2. Keep PRODUCT PR #69 blocked; isolate the PR-context WebKit transition issue in a separate narrow test/reliability task rather than modifying app behavior speculatively.
3. Preserve product priorities: real-device Golden Path validation, then explicit beta-vs-commercial-production decision.
