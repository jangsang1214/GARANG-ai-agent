# GARANG Release Status

Last updated: 2026-09-15

## Overall decision
GREEN for the current verified PRODUCT code baseline `451f5639bbee65c8f5659e150c0949d0b9bf24d5`, including Commercialization Stage 1, Core Intelligence Stage 2, hardened Real LLM/Decision alignment, Outcome Learning v2, Server Readiness Stage 0 and Firebase Staging Gate v1. Repository preparation is GREEN. The dedicated Firebase staging environment `garang-staging` has now completed Firestore rules/indexes deployment, Functions `api` deployment, staging Auth/Secret setup, and authenticated Real LLM Coach smoke with `source: llm` and verified Decision↔LLM alignment. Remaining staging server checks are account export/delete and consent-gated telemetry. Commercial-production readiness remains RED.

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
- Pre-merge Release Gate #1217: GREEN.
- Exact post-merge PRODUCT main Release Gate #1218 on `451f563...`: GREEN.
- Founder OS Event Envelope #470 on PR head and #473 on exact main SHA: GREEN.
- Staging preflight requires `GARANG_FIREBASE_STAGING_PROJECT_ID` and refuses production project `fitfind-ai`.
- Staging secret/deploy plans always use an explicit staging `--project`; staging Coach smoke only accepts the exact derived staging endpoint.
- `GARANG_LLM_API_KEY` remains Secret Manager-owned; no secret value was committed.

## Firebase staging environment
Decision: GREEN FOR INFRA + AUTHENTICATED REAL LLM COACH / PARTIAL FOR FULL SERVER VALIDATION.
Evidence from Founder-run execution:
- Dedicated staging project: `garang-staging`.
- Preflight: `READY_FOR_EXTERNAL_STAGING_SETUP`; production `fitfind-ai` isolated.
- Firestore rules compiled and released; indexes deployed successfully to `(default)`.
- Functions `api` deployed successfully to staging.
- Deployed Coach route reachable: unauthenticated GET returned HTTP 405 with `Allow: POST`.
- Authenticated Coach path reached OpenAI. Initial providerStatus 429 identified missing API credit; after credit funding, direct curl smoke returned `status: PASS`, `source: llm`, `provider: openai`, `model: gpt-5.6-luna`, `decisionMode: collect_data`, and `alignmentVerified: true`.
- Codespaces Node `fetch` experienced `ETIMEDOUT`/IPv6 `ENETUNREACH` to the deployed endpoint while curl to the same endpoint succeeded. This is an execution-environment transport issue and does not invalidate the server-path smoke.
Remaining checks:
- `GET /account/export` staging smoke.
- Consent OFF/ON analytics and privacy-safe error telemetry staging smoke.
- Destructive `/account/delete` smoke using a disposable staging Auth user with recent-login enforcement.
- Browser privileged endpoints remain inactive/null until these checks pass.

## Preservation result
Decision: GREEN.
- GARANG deterministic Decision Intelligence remains the decision owner; LLM remains explanation-only.
- Outcome Learning remains bounded/read-only with no automatic progression increase.
- No silent mutation, Planner ownership change, Agent confirmation bypass, Memory rewrite or destructive data migration was introduced.
- `.firebaserc` production default remains unchanged; repository staging tooling cannot target production as staging.
- Privileged browser endpoint activation remains unchanged/null pending full staging server validation.

## Live production Real LLM activation
Decision: YELLOW / UNKNOWN ENVIRONMENT EVIDENCE.
- Repository code and production smoke tooling are VERIFIED.
- Production secret/config, exact deployed revision, authenticated live `source: llm`, two-user personalization and observability remain unverified.
- `npm run smoke:coach:prod` remains the canonical live verification path once authorized production evidence is available.

## Commercial production
Decision: RED / NOT YET READY.
A GREEN repository baseline and GREEN staging Coach path do not imply commercial-production readiness. Real-device validation, remaining staging/privacy checks, payment/entitlement, production monitoring/provider activation and legal/privacy/retention review remain separate gates.
