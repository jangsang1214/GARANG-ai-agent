# GARANG Release Status

Last updated: 2026-09-15

## Overall decision
GREEN for the current verified PRODUCT code baseline `451f5639bbee65c8f5659e150c0949d0b9bf24d5`, including Commercialization Stage 1, Core Intelligence Stage 2, hardened Real LLM/Decision alignment, Outcome Learning v2, Server Readiness Stage 0 and Firebase Staging Gate v1. Repository preparation is GREEN. The dedicated Firebase staging environment `garang-staging` is now GREEN for full server-path validation: Firestore/Functions deployment, authenticated Real LLM Coach, account export, consent OFF/ON analytics, privacy-safe error telemetry, and destructive account deletion on a disposable staging account. Commercial-production readiness remains RED.

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

## PRODUCT — Firebase Staging Gate v1
Decision: GREEN / MERGED / REPOSITORY PREPARATION COMPLETE.
Evidence:
- PR #102 `Add fail-closed Firebase staging gate` merged as `451f5639bbee65c8f5659e150c0949d0b9bf24d5`.
- Pre-merge Release Gate #1217: GREEN.
- Exact post-merge PRODUCT main Release Gate #1218 on `451f563...`: GREEN.
- Founder OS Event Envelope #470 on PR head and #473 on exact main SHA: GREEN.
- Staging preflight requires `GARANG_FIREBASE_STAGING_PROJECT_ID` and refuses production project `fitfind-ai`.
- Staging secret/deploy plans always use an explicit staging `--project`; staging Coach smoke only accepts the exact derived staging endpoint.
- `GARANG_LLM_API_KEY` remains Secret Manager-owned; no secret value was committed.

## Firebase staging environment
Decision: GREEN / FULL SERVER-PATH VALIDATION COMPLETE.
Evidence from Founder-run execution:
- Dedicated staging project: `garang-staging`.
- Preflight: `READY_FOR_EXTERNAL_STAGING_SETUP`; production `fitfind-ai` isolated.
- Firestore rules compiled and released; indexes deployed successfully to `(default)`.
- Functions `api` deployed successfully to staging after installing missing Functions dependencies. The deployment is VERIFIED; a separate Functions test command result was not directly captured and is not independently VERIFIED.
- Deployed Coach route reachable: GET returned HTTP 405 with `Allow: POST`.
- Authenticated Coach path reached OpenAI. Initial providerStatus 429 identified missing API credit; after credit funding, direct curl smoke returned `status: PASS`, `source: llm`, `provider: openai`, `model: gpt-5.6-luna`, `decisionMode: collect_data`, and `alignmentVerified: true`.
- Authenticated account export returned `status: PASS`, `exportVersion: garang-user-export-v1`, `contractVersion: garang-state-v1`, `schemaVersion: 8`, and confirmed state/privacy/serverData presence.
- Analytics consent OFF returned HTTP 202 with `accepted:false` and `reason:CONSENT_REQUIRED`.
- Analytics consent ON returned HTTP 202 with `accepted:true` and `count:1` after `users/{uid}.consent.analytics=true` was verified in the authenticated staging user's root document.
- Privacy-safe error telemetry returned `status: PASS` and `sensitiveDataFiltered:true`; injected fake email/message/stack/token values did not persist in exported telemetry.
- Disposable delete smoke created a new Auth user plus root and `app/state` Firestore test data, then live `/account/delete` returned PASS and subsequent sign-in returned Auth deletion PASS. The deployed handler's success path awaits Firestore `deleteUserData(uid)` before deleting Auth and returning 200, so the live endpoint PASS verifies completion of the server-side data deletion routine before Auth removal.
- An additional post-delete Firestore REST read using an ad-hoc Firebase CLI token returned HTTP 401 because that auxiliary admin token was invalid. This check is INCONCLUSIVE, not a product failure, and does not contradict the successful live delete contract.
- Codespaces Node `fetch` experienced `ETIMEDOUT`/IPv6 `ENETUNREACH` to the deployed endpoint while curl to the same endpoint succeeded. This is an execution-environment transport issue and does not invalidate server-path validation.

## Preservation result
Decision: GREEN.
- GARANG deterministic Decision Intelligence remains the decision owner; LLM remains explanation-only.
- Outcome Learning remains bounded/read-only with no automatic progression increase.
- No silent mutation, Planner ownership change, Agent confirmation bypass, Memory rewrite or destructive data migration was introduced.
- `.firebaserc` production default remains unchanged; repository staging tooling cannot target production as staging.
- Production endpoint activation remains unchanged and is not authorized by staging GREEN.

## Staging browser activation
Decision: READY / SEPARATE REVIEWED CHANGE.
- Full server-path validation is now GREEN, so staging-only privileged browser endpoint activation is eligible for implementation.
- Activation must remain fail-closed to `garang-staging` and must not enable production `fitfind-ai`.
- Targeted export/delete/telemetry browser-path regressions should run after activation.

## Live production Real LLM activation
Decision: YELLOW / UNKNOWN ENVIRONMENT EVIDENCE.
- Repository code and production smoke tooling are VERIFIED.
- Production secret/config, exact deployed revision, authenticated live `source: llm`, two-user personalization and observability remain unverified.
- `npm run smoke:coach:prod` remains the canonical live verification path once authorized production evidence is available.

## Commercial production
Decision: RED / NOT YET READY.
A GREEN repository baseline and GREEN staging server path do not imply commercial-production readiness. Real-device validation, staging browser-path activation/regression, payment/entitlement, production monitoring/provider activation and legal/privacy/retention review remain separate gates.
