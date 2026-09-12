# GARANG Project State

Last updated: 2026-09-12

## Current objective
Upgrade the control plane from Founder OS v5.1 to v7-lite: formalize the existing control/product multi-repository reality, connect work to a Project Graph, normalize GitHub events, detect recorded-state drift, and make release decisions deterministic without introducing an always-on external runtime.

## Repository observations
- CONTROL registry target: `jangsang1214/GARANG-ai-agent`; v7-lite branch `agent/founder-os-v7-lite` is based on main `99686bfa69593bd2dc7b45a1b679cc3db9ab30fe`.
- PRODUCT registry target: `jangsang1214/-fitmind-ai`; observed main `c0fd29e06c4c29f3f504d940a8d2497e84d7c821`.
- Product beta/demo baseline remains the previously recorded Release Gate #999 GREEN / Pages deployment #746 success evidence.

## Stable
- v5.1 evidence discipline, deterministic recovery, capability gating, Definition of Done and failure recovery remain the safety foundation.
- Product Golden Path automated baseline is recorded GREEN on the current observed product main.
- Product/commercial-production distinction remains unchanged.

## In progress
- Founder OS v7-lite control-plane implementation on `agent/founder-os-v7-lite`.
- Candidate adds Repository Registry, Project Graph, Orchestrator, Event Contracts, Reconciler, Release Gate and GitHub event-envelope adapter.
- Candidate verification is UNKNOWN until the PR head passes `npm run verify`.

## Broken / blockers
- No known product beta blocker was introduced by this control-plane branch.
- v7-lite must remain YELLOW until CI verifies the candidate.
- Event artifacts do not create an always-on runtime; autonomous wake-up/consumption still requires future external infrastructure.
- Real-device product validation and release-channel Founder decision remain outstanding from the prior state.

## Next priorities
1. Verify v7-lite core with CI and fix any regression before merge.
2. Add the same read-only event-envelope adapter to the PRODUCT repository so both registered repos emit the contract.
3. After both adapters are verified, reconcile graph/state and mark v7-lite event-ready GREEN.
4. Preserve the existing product priorities: real-device Golden Path validation, then explicit beta-vs-production channel decision.

## Release readiness
- Founder OS v7-lite candidate: YELLOW pending verification.
- Product development beta/demo: GREEN on previously verified current product main evidence.
- Commercial production: RED until intentionally activated production gates are complete.
