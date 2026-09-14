# GARANG Release Status

Last updated: 2026-09-15

## Overall decision
GREEN for the current verified PRODUCT code baseline `451f5639bbee65c8f5659e150c0949d0b9bf24d5`, including Commercialization Stage 1, Core Intelligence Stage 2, hardened Real LLM/Decision alignment, Outcome Learning v2, Server Readiness Stage 0 and Firebase Staging Gate v1. Repository preparation for a separate staging environment is GREEN. The actual external staging environment is still YELLOW/UNKNOWN because no staging project creation, secret insertion, deploy or authenticated smoke has been verified. Commercial-production readiness remains RED.

## CONTROL — Founder OS v7-lite
Decision: GREEN / PERSISTENT CONTROL PLANE.
- Founder OS v7-lite remains the persistent multi-repository control plane for state, tasks, decisions, debt, Project Graph and release evidence.

## PRODUCT — Commercialization Stage 1
Decision: GREEN / MERGED.
- PRs #80, #83, #84 and #87 merged; post-merge Release Gate #1093 GREEN.
- Record/Coach/Planner/Today ownership remains preserved.

## PRODUCT — Stage 2 Core Intelligence
Decision: GREEN / MERGED.
- PR #88 Plan-vs-Actual / bounded Daily Plan adaptation merged as `c68ec3e915ae437dac35fbc1a9a39fc4ca6f6dbf`; Gate #1094 GREEN.
- PR #90 Weekly Review merged as `5f3d30e877e31d219623ebd521226e49265b46bf`; post-merge Gate #1098 GREEN.

## PRODUCT — Real LLM boundary + AI/Data hardening
Decision: GREEN / MERGED.
- PRs #95/#97 preserve Real LLM release behavior and authenticated production boundary.
- PR #99 Decision↔LLM alignment + Outcome Learning v2 merged as `bcb27d5a283eb04643f0080f71a8a70ead14f95d`; post-merge Gate #1170 GREEN.

## PRODUCT — Server Readiness Stage 0
Decision: GREEN / MERGED / REPOSITORY BLOCKER CLOSED.
- PR #101 merged as `b2ddbf4e09c0c4861057135a61ab2f3e98ceb1df`.
- Pre-merge Gate #1210 and exact post-merge Gate #1212: GREEN.
- Events #460/#461: GREEN.
- Repository/service boundaries preserve Firebase Auth + Firestore as the user-data foundation and preserve app write ownership.
- Account export/delete and telemetry server paths remain activation-gated in the browser until staging verification.

## PRODUCT — Firebase Staging Gate v1
Decision: GREEN / MERGED / REPOSITORY PREPARATION COMPLETE.
Evidence:
- PR #102 `Add fail-closed Firebase staging gate` merged as `451f5639bbee65c8f5659e150c0949d0b9bf24d5`.
- Final PR head: `948806883ed47f7371ca20037752bad3aca880eb`.
- Pre-merge Release Gate #1217: GREEN, including the new staging production-isolation contract plus full core/build/security/Firebase/Firestore and WebKit Golden Path regression suite.
- Exact post-merge PRODUCT main Release Gate #1218 on `451f563...`: GREEN.
- Post-merge `core-build-rules`: GREEN, including staging contract, dependency/security, Intelligence Core, Action & Data Reliability, Commercial Core regressions, build, Firebase public health and Firestore emulator.
- Post-merge `browser-webkit`: GREEN, including Today, Daily Plan, Simplified Shell, Planner, Nutrition, truth/first-record, Golden Path complete journey, authenticated Coach, Real LLM, recovery, Settings/mobile regression, button health and runtime stability stress.
- Post-merge final `verify`: GREEN.
- Founder OS Event Envelope #470 on PR head and #473 on exact main SHA: GREEN.
- Staging preflight requires `GARANG_FIREBASE_STAGING_PROJECT_ID` and refuses production project `fitfind-ai`.
- Staging secret/deploy plans always use an explicit staging `--project`; staging Coach smoke only accepts the exact derived staging endpoint.
- `GARANG_LLM_API_KEY` remains Secret Manager-owned; no secret value was committed.

## Preservation result
Decision: GREEN.
- GARANG deterministic Decision Intelligence remains the decision owner; LLM remains explanation-only.
- Outcome Learning remains bounded/read-only with no automatic progression increase.
- No silent mutation, Planner ownership change, Agent confirmation bypass, Memory rewrite or destructive data migration was introduced.
- `.firebaserc` production default remains unchanged; repository staging tooling cannot target production as staging.
- Privileged browser endpoint activation remains unchanged/null until external staging verification passes.

## Firebase staging environment
Decision: YELLOW / EXTERNAL ENVIRONMENT EVIDENCE REQUIRED.
- Repository staging tooling and CI are VERIFIED GREEN.
- Dedicated staging Firebase project existence/ID is not yet verified.
- Staging `GARANG_LLM_API_KEY` Secret Manager value has not been set in verified evidence.
- Matching Functions/Firestore deployment, staging Auth users, authenticated `source: llm` Coach smoke, account export/delete smoke and consent-gated telemetry checks have not yet been verified.
- External secret insertion/deployment requires explicit Founder approval and authorized Firebase credentials.

## Live production Real LLM activation
Decision: YELLOW / UNKNOWN ENVIRONMENT EVIDENCE.
- Repository code and production smoke tooling are VERIFIED.
- Production secret/config, exact deployed revision, authenticated live `source: llm`, two-user personalization and observability remain unverified.
- `npm run smoke:coach:prod` remains the canonical live verification path once authorized production evidence is available.

## Commercial production
Decision: RED / NOT YET READY.
A GREEN repository baseline does not imply commercial-production readiness. Real-device validation, external staging/security verification, payment/entitlement, production monitoring/provider activation and legal/privacy/retention review remain separate gates.
