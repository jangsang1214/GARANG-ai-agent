# GARANG Project State

Last updated: 2026-09-15

## Current objective
The verified PRODUCT baseline now includes Commercialization Stage 1, Core Intelligence Stage 2, the hardened Real LLM boundary, machine-enforced Decision↔LLM semantic alignment, conservative longitudinal Outcome Learning v2, Server Readiness Stage 0, and a fail-closed Firebase staging gate. The repository-level staging preparation blocker is closed. The next highest-value work is target real-device Golden Path validation plus actual staging-environment creation/deployment/smoke before any endpoint activation.

## Repository observations
- CONTROL: `jangsang1214/GARANG-ai-agent`; current observed main is `ea1964064d1380bb2f919c1c7c3158d07a73b570`, with CI #40 GREEN. This reconciliation is being recorded on `state/reconcile-product-pr102`.
- PRODUCT: `jangsang1214/-fitmind-ai`; current observed main is `451f5639bbee65c8f5659e150c0949d0b9bf24d5` from PR #102.
- Stage 1 remains GREEN through PRs #80, #83, #84 and #87; post-merge Release Gate #1093 was GREEN.
- Stage 2 Plan-vs-Actual / Adaptive Loop PR #88 merged as `c68ec3e915ae437dac35fbc1a9a39fc4ca6f6dbf`; Weekly Review PR #90 merged as `5f3d30e877e31d219623ebd521226e49265b46bf` with post-merge Gate #1098 GREEN.
- Real LLM Golden Path and evidence race were stabilized on merged PR #95; stale PR #93 was closed as superseded.
- Real LLM production boundary hardening landed through PR #97; stale PR #94 was closed as superseded.
- AI/Data hardening PR #99 merged as `bcb27d5a283eb04643f0080f71a8a70ead14f95d`; post-merge Release Gate #1170 was GREEN.
- Server Readiness Stage 0 PR #101 merged as `b2ddbf4e09c0c4861057135a61ab2f3e98ceb1df`; exact post-merge Release Gate #1212 was GREEN.
- Firebase staging gate PR #102 merged as `451f5639bbee65c8f5659e150c0949d0b9bf24d5` from head `948806883ed47f7371ca20037752bad3aca880eb`.
- PR #102 pre-merge Release Gate #1217 was GREEN and exact post-merge main Release Gate #1218 was GREEN.
- PRODUCT Founder OS Event Envelope run #473 on the PR #102 main push and workflow-run envelope evidence completed successfully.

## Stable
- Canonical loop remains Goal/Plan -> Action/Record -> Interpretation -> Feedback -> Next Action, with Coach approval before behavior-changing mutations.
- GARANG deterministic Decision Intelligence remains the judgment owner; the LLM remains an explanation layer and has no direct mutation contract.
- Provider output must echo the active `decisionId`, `decisionMode`, and supported `reasonCodesUsed`; mismatches or unsupported reasons are rejected before LLM success is returned.
- LLM confidence cannot exceed deterministic GARANG confidence.
- Outcome Learning v2 extends recent Plan-vs-Actual evidence with a 28-day read-only longitudinal view. Longitudinal evidence may suppress progression or prefer reduced load after sufficient evidence, but it cannot create automatic progression increases.
- Missing/null outcome rates are not converted into negative learning evidence.
- Existing Daily Plan, Planner, Agent confirmation, Record, Today and Golden Path ownership remain preserved.
- Server Readiness Stage 0 keeps Firebase Auth + Firestore as the user-data foundation while adding explicit repository/service, account, security/origin and telemetry boundaries.
- Firebase staging operations now fail closed unless an explicit non-production project ID is supplied; the production project `fitfind-ai` is rejected as a staging target.
- Staging Coach smoke is bound to the exact staging project/region contract and secrets remain external to source control.
- Account/telemetry endpoints remain inactive/null until the matching server revision is deployed and smoke-verified in staging; repository GREEN does not authorize endpoint or production activation.

## In progress
- No repository implementation or Release Gate blocker remains for Server Readiness Stage 0 or the Firebase staging preparation gate.
- Actual Firebase staging project creation/configuration, matching Functions deployment and authenticated staging smoke remain external next-phase work.
- Real-device target validation remains separate from repository CI.

## Blockers / unknowns
- Real-device Golden Path validation on the target iPhone/Safari and target in-app browser remains outstanding.
- Staging environment evidence remains outstanding: separate Firebase staging project, deployed matching Functions revision, origin/security config, authenticated export/delete smoke, consent OFF/ON telemetry behavior and privacy-safe error telemetry must still be verified.
- Live production Real LLM activation remains UNKNOWN until target-environment secret/config, deployed Functions revision, authenticated live `source: llm`, two-user personalization smoke and production observability are verified.
- Commercial-production readiness remains RED until payment/entitlement, production monitoring, legal/privacy/retention review, staging/security and real-device gates are completed.
- PRODUCT `main` remains observed without required branch protection/status checks; governance hardening is a separate deliberate Founder decision.
- PRODUCT has older open PRs (#1, #70, #72, #100); none is treated as current main truth or release evidence. PR #100 still explicitly requires Founder visual approval before merge.

## Next priorities
1. P1 — Validate the deployed Golden Path on the target real iPhone/Safari and target in-app browser.
2. P2 — Identify/approve a separate Firebase staging environment, then deploy the exact verified PRODUCT revision there and run authenticated Coach/account/telemetry/security smoke without exposing secrets.
3. P2 — Only after staging smoke is GREEN, activate staging account/telemetry endpoint URLs through a small reviewed change; production activation remains a separate Founder decision.
4. P5 — Collect real beta outcome history and measure whether Decision/Outcome adaptations improve execution before expanding learning complexity.
