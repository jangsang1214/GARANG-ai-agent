# GARANG Project State

Last updated: 2026-09-14

## Current objective
The verified PRODUCT baseline now includes Commercialization Stage 1, Core Intelligence Stage 2, the hardened Real LLM boundary, machine-enforced Decision↔LLM semantic alignment, conservative longitudinal Outcome Learning v2, and Server Readiness Stage 0. The repository blocker for Server Readiness Stage 0 is closed. The next highest-value work is target real-device Golden Path validation and a separate staging activation/smoke phase before any production endpoint activation.

## Repository observations
- CONTROL: `jangsang1214/GARANG-ai-agent`; Founder OS v7-lite remains the control plane. This reconciliation is being recorded on `state/server-readiness-stage0-green` from current CONTROL main.
- PRODUCT: `jangsang1214/-fitmind-ai`; current verified main is `b2ddbf4e09c0c4861057135a61ab2f3e98ceb1df` from PR #101.
- Stage 1 remains GREEN through PRs #80, #83, #84 and #87; post-merge Release Gate #1093 was GREEN.
- Stage 2 Plan-vs-Actual / Adaptive Loop PR #88 merged as `c68ec3e915ae437dac35fbc1a9a39fc4ca6f6dbf`; Weekly Review PR #90 merged as `5f3d30e877e31d219623ebd521226e49265b46bf` with post-merge Gate #1098 GREEN.
- Real LLM Golden Path and evidence race were stabilized on merged PR #95; stale PR #93 was closed as superseded.
- Real LLM production boundary hardening landed through PR #97; stale PR #94 was closed as superseded.
- AI/Data hardening PR #99 merged as `bcb27d5a283eb04643f0080f71a8a70ead14f95d`; post-merge Release Gate #1170 was GREEN.
- Server Readiness Stage 0 PR #101 merged as `b2ddbf4e09c0c4861057135a61ab2f3e98ceb1df` after fresh pre-merge Release Gate #1210 GREEN on head `2c81080a5047aa93b84e7a7c03394ee47fe8c391`.
- PRODUCT post-merge Release Gate #1212 on exact main `b2ddbf4e...` is GREEN: core/build/security, Firebase public health, Firestore emulator, complete WebKit Golden Path, authenticated Coach, Real LLM integration, recovery, Settings/mobile regressions, runtime stability stress and final verify all passed.
- Founder OS Event Envelope #460 (push) and #461 (workflow_run) on PRODUCT main `b2ddbf4e...` completed successfully.

## Stable
- Canonical loop remains Goal/Plan -> Action/Record -> Interpretation -> Feedback -> Next Action, with Coach approval before behavior-changing mutations.
- GARANG deterministic Decision Intelligence remains the judgment owner; the LLM remains an explanation layer and has no direct mutation contract.
- Provider output must echo the active `decisionId`, `decisionMode`, and supported `reasonCodesUsed`; mismatches or unsupported reasons are rejected before LLM success is returned.
- LLM confidence cannot exceed deterministic GARANG confidence.
- Outcome Learning v2 extends recent Plan-vs-Actual evidence with a 28-day read-only longitudinal view. Longitudinal evidence may suppress progression or prefer reduced load after sufficient evidence, but it cannot create automatic progression increases.
- Missing/null outcome rates are not converted into negative learning evidence.
- Existing Daily Plan, Planner, Agent confirmation, Record, Today and Golden Path ownership remain preserved.
- Server Readiness Stage 0 adds explicit repository/service boundaries, canonical server-state adaptation, server-ready account export/delete ownership, centralized security/origin middleware, and consent-gated analytics/error telemetry without replacing Firebase Auth + Firestore as the user-data foundation.
- Account/telemetry endpoints remain inactive/null until the matching server revision is deployed and smoke-verified in staging; repository GREEN does not authorize production activation.

## In progress
- No repository implementation or Release Gate blocker remains for Server Readiness Stage 0 / PR #101 scope.
- Staging activation and real-device verification are separate next phases, not implicit in PR #101 completion.

## Blockers / unknowns
- Real-device Golden Path validation on the target iPhone/in-app browser remains outstanding.
- Staging server activation evidence remains outstanding: separate Firebase staging environment, deployed matching Functions revision, origin/security config, authenticated export/delete smoke, consent OFF/ON telemetry behavior and privacy-safe error telemetry must still be verified.
- Live production Real LLM activation remains UNKNOWN until target-environment secret/config, deployed Functions revision, authenticated live `source: llm`, two-user personalization smoke, and production observability are verified.
- Commercial-production readiness remains RED until payment/entitlement, production monitoring, legal/privacy/retention review, staging/security and real-device gates are completed.
- PRODUCT `main` has been observed without required branch protection/status checks; governance hardening remains a separate deliberate Founder decision.

## Next priorities
1. P1 — Validate the deployed Golden Path on the target real iPhone/Safari and target in-app browser.
2. P2 — Prepare/approve a separate Firebase staging environment, deploy the verified Server Readiness revision there, and run account/telemetry/security smoke without exposing secrets.
3. P2 — After staging is GREEN, activate only staging account/telemetry endpoints through a small reviewed change; production activation remains a separate Founder decision.
4. P5 — Collect real beta outcome history and measure whether Decision/Outcome adaptations improve execution before expanding learning complexity.
