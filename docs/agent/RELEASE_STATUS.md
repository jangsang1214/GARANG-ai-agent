# GARANG Release Status

Last updated: 2026-09-14

## Overall decision
GREEN for the current verified PRODUCT code baseline `b2ddbf4e09c0c4861057135a61ab2f3e98ceb1df`, including Commercialization Stage 1, Core Intelligence Stage 2, the hardened Real LLM boundary, semantic Decision↔LLM alignment, Outcome Learning v2 and Server Readiness Stage 0. The repository blocker for Server Readiness Stage 0 is CLOSED. Commercial-production readiness remains a separate RED gate; staging activation, real-device verification and live production environment evidence remain separate gates.

## CONTROL — Founder OS v7-lite
Decision: GREEN / PERSISTENT CONTROL PLANE.
- Founder OS v7-lite remains the persistent multi-repository control plane for state, tasks, decisions, debt, Project Graph and release evidence.
- This update reconciles PRODUCT PR #101 / main evidence into CONTROL state; CONTROL CI must still verify the state-only change before its merge.

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
- PR #101 `Server Readiness Stage 0: harden data and privileged API boundaries` merged by squash as `b2ddbf4e09c0c4861057135a61ab2f3e98ceb1df`.
- Final pre-merge head: `2c81080a5047aa93b84e7a7c03394ee47fe8c391`.
- Pre-merge Release Gate #1210: GREEN.
- Pre-merge Founder OS Event Envelope #456: GREEN.
- Exact post-merge PRODUCT main Release Gate #1212 on `b2ddbf4e...`: GREEN.
- Post-merge `core-build-rules`: GREEN, including locked dependencies, production dependency security, Intelligence Core, Action & Data Reliability, Commercial Core regressions, runtime/build, Firebase public health and Firestore emulator.
- Post-merge `browser-webkit`: GREEN, including Today, Daily Plan, Simplified Shell, Planner, Nutrition, truth/first-record, Golden Path integration + complete journey, authenticated app/Coach, Real LLM Golden Path, conversational logging, recovery mutation/touch, WebKit mobile regression, Settings touch, mobile button health and runtime stability stress.
- Post-merge final `verify`: GREEN.
- Founder OS Event Envelope #460 (push) and #461 (workflow_run) on exact main SHA: GREEN.
- Repository/service boundaries preserve Firebase Auth + Firestore as user-data foundation and preserve existing app write ownership.
- Account export/delete and telemetry server paths are server-ready, but browser endpoint configuration remains intentionally inactive until staging deploy/smoke verification.

## Preservation result
Decision: GREEN.
- GARANG deterministic Decision Intelligence remains the decision owner.
- LLM remains explanation-only; provider outputs that reverse the active decision or cite unsupported reason codes are rejected.
- LLM confidence remains capped by deterministic GARANG confidence.
- Outcome Learning v2 is read-only and cannot automatically increase progression.
- No silent mutation, Planner ownership change, Agent confirmation bypass, Memory Engine rewrite or destructive user-data migration was introduced by Server Readiness Stage 0.
- Golden Path and mobile regressions remain GREEN after merge.

## Firebase staging activation
Decision: YELLOW / EXTERNAL ENVIRONMENT EVIDENCE REQUIRED.
- Repository code and CI are VERIFIED GREEN.
- Separate staging project/config, matching deployed Functions revision, allowed-origin settings, authenticated export/delete smoke, consent OFF/ON telemetry checks and privacy-safe error telemetry have not yet been verified.
- Staging endpoint activation must occur only after staging server smoke is GREEN.

## Live production Real LLM activation
Decision: YELLOW / UNKNOWN ENVIRONMENT EVIDENCE.
- Repository code, CI and privacy-safe production smoke tooling are VERIFIED.
- Secret presence/value, exact deployed Functions revision, authenticated live `source: llm`, two-user production personalization smoke and target-environment observability are not verified from the current connected execution environment.
- `npm run smoke:coach:prod` remains the canonical live verification path once target endpoint and authorized test credentials are available.

## Commercial production
Decision: RED / NOT YET READY.
A GREEN repository baseline does not imply commercial-production readiness. Real-device validation, staging/security activation, payment entitlement, production monitoring, provider configuration and legal/privacy/retention review remain separate gates.
