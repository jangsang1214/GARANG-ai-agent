# GARANG Release Status

Last updated: 2026-09-15

## Overall decision
GREEN for the current verified PRODUCT code baseline `451f5639bbee65c8f5659e150c0949d0b9bf24d5`, including Commercialization Stage 1, Core Intelligence Stage 2, the hardened Real LLM boundary, semantic Decision↔LLM alignment, Outcome Learning v2, Server Readiness Stage 0 and the fail-closed Firebase staging gate. Repository preparation for staging is GREEN. Commercial-production readiness remains a separate RED gate; actual staging deployment/smoke, real-device verification and live production environment evidence remain separate gates.

## CONTROL — Founder OS v7-lite
Decision: GREEN / PERSISTENT CONTROL PLANE.
- Founder OS v7-lite remains the persistent multi-repository control plane for state, tasks, decisions, debt, Project Graph and release evidence.
- Current observed CONTROL main before this reconciliation is `ea1964064d1380bb2f919c1c7c3158d07a73b570`; CI #40 is GREEN.
- This state-only reconciliation records PRODUCT PR #102/current-main evidence and must pass CONTROL CI before merge.

## PRODUCT — Commercialization Stage 1
Decision: GREEN / MERGED.
- PR #80 commercialization preservation/gap audit merged.
- PR #83 privacy-safe analytics contract merged.
- PR #84 workout Record friction reduction merged.
- PR #87 Coach decision-first UX merged.
- Stage 1 post-merge Release Gate #1093: GREEN.
- Existing Record/Coach/Planner/Today ownership remains preserved.

## PRODUCT — Stage 2 Core Intelligence
Decision: GREEN / MERGED.
Evidence:
- PR #88 Plan-vs-Actual / bounded Daily Plan adaptation merged as `c68ec3e915ae437dac35fbc1a9a39fc4ca6f6dbf`; Release Gate #1094 GREEN.
- PR #90 Weekly Review merged as `5f3d30e877e31d219623ebd521226e49265b46bf`; pre-merge Gate #1097 and post-merge Gate #1098 GREEN.
- Plan-vs-Actual, bounded adaptation and Weekly Review remain read-only until explicit Coach/user confirmation where behavior-changing action is involved.

## PRODUCT — Real LLM boundary + AI/Data hardening
Decision: GREEN / MERGED for repository code and CI.
Evidence:
- PR #95 stabilized Coach evidence and Real LLM browser release behavior; stale PR #93 was closed as superseded.
- PR #97 hardened the authenticated production boundary with quotas, canonical recovery normalization, explanation-only provider schema and privacy-safe observability; stale PR #94 was closed as superseded.
- PR #99 added machine-enforced Decision↔LLM alignment and conservative longitudinal Outcome Learning v2 and merged as `bcb27d5a283eb04643f0080f71a8a70ead14f95d`.
- PR #99 pre-merge Release Gate #1166 and post-merge Release Gate #1170: GREEN.

## PRODUCT — Server Readiness Stage 0
Decision: GREEN / MERGED / REPOSITORY BLOCKER CLOSED.
Evidence:
- PR #101 merged as `b2ddbf4e09c0c4861057135a61ab2f3e98ceb1df`.
- PR #101 pre-merge Release Gate #1210 and exact post-merge Release Gate #1212: GREEN.
- Repository/service boundaries preserve Firebase Auth + Firestore as user-data foundation and preserve existing app write ownership.
- Account export/delete and telemetry server paths are server-ready, but browser endpoint configuration remains activation-gated.

## PRODUCT — Firebase staging gate
Decision: GREEN / MERGED / REPOSITORY PREPARATION COMPLETE.
Evidence:
- PR #102 `Add fail-closed Firebase staging gate` merged as `451f5639bbee65c8f5659e150c0949d0b9bf24d5` from head `948806883ed47f7371ca20037752bad3aca880eb`.
- Pre-merge GARANG Release Gate #1217: GREEN.
- Exact post-merge main GARANG Release Gate #1218: GREEN.
- Founder OS Event Envelope run #473 on the main push succeeded; workflow-run envelope evidence also succeeded.
- Staging project-ID validation rejects the production Firebase project `fitfind-ai`.
- Staging operations require an explicit project; staging Coach smoke derives the exact `asia-northeast3` project-scoped endpoint.
- Production `.firebaserc` ownership is unchanged and provider secrets remain external to source control.
- PR #102 did not create a Firebase project, configure secrets, deploy Functions, or activate privileged browser endpoints.

## Preservation result
Decision: GREEN.
- GARANG deterministic Decision Intelligence remains the decision owner.
- LLM remains explanation-only; provider outputs that reverse the active decision or cite unsupported reason codes are rejected.
- LLM confidence remains capped by deterministic GARANG confidence.
- Outcome Learning v2 is read-only and cannot automatically increase progression.
- No silent mutation, Planner ownership change, Agent confirmation bypass, Memory Engine rewrite or destructive user-data migration was introduced by Server Readiness Stage 0 or PR #102.
- Golden Path and mobile regressions remain GREEN on the current repository baseline through Release Gate #1218.

## Firebase staging environment
Decision: YELLOW / EXTERNAL ENVIRONMENT EVIDENCE REQUIRED.
- Repository staging preparation and CI are VERIFIED GREEN on `451f5639...`.
- Separate staging project/config, matching deployed Functions revision, allowed-origin settings, authenticated Coach/export/delete smoke, consent OFF/ON telemetry checks and privacy-safe error telemetry have not yet been verified.
- Staging endpoint activation must occur only after staging server smoke is GREEN.

## Real-device Golden Path
Decision: YELLOW / EXTERNAL DEVICE EVIDENCE REQUIRED.
- Browser/WebKit regression coverage is GREEN in CI.
- Target real iPhone/Safari and target in-app-browser Golden Path evidence remains outstanding.

## Live production Real LLM activation
Decision: YELLOW / UNKNOWN ENVIRONMENT EVIDENCE.
- Repository code, CI and privacy-safe production smoke tooling are VERIFIED.
- Secret presence/value, exact deployed Functions revision, authenticated live `source: llm`, two-user production personalization smoke and target-environment observability are not verified from the current connected execution environment.
- `npm run smoke:coach:prod` remains the canonical live verification path once target endpoint and authorized test credentials are available.

## Commercial production
Decision: RED / NOT YET READY.
A GREEN repository baseline does not imply commercial-production readiness. Real-device validation, actual staging/security activation, payment entitlement, production monitoring, provider configuration and legal/privacy/retention review remain separate gates.
