# GARANG Project State

Last updated: 2026-09-15

## Current objective
The verified PRODUCT baseline now includes Commercialization Stage 1, Core Intelligence Stage 2, the hardened Real LLM boundary, machine-enforced Decision↔LLM semantic alignment, conservative longitudinal Outcome Learning v2, Server Readiness Stage 0, and a fail-closed Firebase Staging Gate v1. Repository preparation for staging is complete; the next staging step is external environment creation/deployment/smoke in a dedicated Firebase project that is not production. Target real-device Golden Path validation remains outstanding.

## Repository observations
- CONTROL: `jangsang1214/GARANG-ai-agent`; Founder OS v7-lite remains the control plane. Current main before this reconciliation: `ea1964064d1380bb2f919c1c7c3158d07a73b570`.
- PRODUCT: `jangsang1214/-fitmind-ai`; current verified main is `451f5639bbee65c8f5659e150c0949d0b9bf24d5` from PR #102.
- Stage 1 remains GREEN through PRs #80, #83, #84 and #87; post-merge Release Gate #1093 was GREEN.
- Stage 2 Plan-vs-Actual / Adaptive Loop PR #88 merged as `c68ec3e915ae437dac35fbc1a9a39fc4ca6f6dbf`; Weekly Review PR #90 merged as `5f3d30e877e31d219623ebd521226e49265b46bf` with post-merge Gate #1098 GREEN.
- AI/Data hardening through PRs #95, #97 and #99 remains GREEN; PR #99 merged as `bcb27d5a283eb04643f0080f71a8a70ead14f95d` with post-merge Gate #1170 GREEN.
- Server Readiness Stage 0 PR #101 merged as `b2ddbf4e09c0c4861057135a61ab2f3e98ceb1df`; pre-merge Gate #1210 and post-merge Gate #1212 were GREEN.
- Firebase Staging Gate v1 PR #102 merged as `451f5639bbee65c8f5659e150c0949d0b9bf24d5` after full pre-merge Release Gate #1217 GREEN on head `948806883ed47f7371ca20037752bad3aca880eb`.
- PRODUCT post-merge Release Gate #1218 on exact main `451f563...` is GREEN: staging contract, core/build/security, Firebase public health, Firestore emulator, complete WebKit Golden Path, authenticated Coach, Real LLM integration, recovery, Settings/mobile regressions, runtime stability stress and final verify all passed.
- Founder OS Event Envelope #470 on PR #102 head and #473 on PRODUCT main completed successfully.

## Stable
- Canonical loop remains Goal/Plan -> Action/Record -> Interpretation -> Feedback -> Next Action, with Coach approval before behavior-changing mutations.
- GARANG deterministic Decision Intelligence remains the judgment owner; the LLM remains explanation-only and has no direct mutation contract.
- Provider output must echo the active `decisionId`, `decisionMode`, and supported reasons; mismatches are rejected before LLM success is returned. LLM confidence cannot exceed deterministic GARANG confidence.
- Outcome Learning v2 remains bounded/read-only and cannot create automatic progression increases.
- Existing Daily Plan, Planner, Agent confirmation, Record, Today and Golden Path ownership remain preserved.
- Firebase Auth + Firestore remain the user-data foundation and existing app write ownership remains unchanged.
- Repository staging commands are fail-closed: `GARANG_FIREBASE_STAGING_PROJECT_ID` is mandatory, production project `fitfind-ai` is explicitly rejected, generated deploy commands always use an explicit staging `--project`, and staging Coach smoke only accepts the exact derived staging endpoint.
- `GARANG_LLM_API_KEY` remains Secret Manager-owned and no secret value was added to source control.
- Browser account/export/delete/analytics/telemetry endpoints remain inactive/null until staging deployment and smoke verification; staging repository GREEN does not authorize production activation.

## In progress
- No repository implementation or Release Gate blocker remains for Firebase Staging Gate v1 / PR #102 scope.
- External staging environment creation, secret configuration, deployment, authenticated smoke and target real-device verification remain separate work.

## Blockers / unknowns
- A dedicated Firebase staging project has not been created/identified in verified evidence. No staging project ID, secret insertion, staging Functions deployment or staging Auth smoke has been verified.
- Real-device Golden Path validation on the target iPhone/in-app browser remains outstanding.
- Staging server activation evidence remains outstanding: matching Functions revision, Firestore rules/indexes, staging Auth users, authenticated Coach smoke, account export/delete smoke, consent OFF/ON telemetry behavior and privacy-safe error telemetry.
- Live production Real LLM activation remains UNKNOWN until target-environment secret/config, deployed Functions revision, authenticated live `source: llm`, two-user personalization smoke and production observability are verified.
- Commercial-production readiness remains RED until payment/entitlement, production monitoring, legal/privacy/retention review, staging/security and real-device gates are completed.
- PRODUCT `main` has been observed without required branch protection/status checks; governance hardening remains a separate deliberate Founder decision.

## Next priorities
1. P1 — Validate the deployed Golden Path on the target real iPhone/Safari and target in-app browser.
2. P2 — Create/identify a dedicated Firebase staging project that is not `fitfind-ai`, then run `GARANG_FIREBASE_STAGING_PROJECT_ID=<id> npm run staging:preflight`.
3. P2 — With explicit Founder approval and authorized Firebase credentials, set `GARANG_LLM_API_KEY` in staging Secret Manager, deploy `functions:api` plus Firestore rules/indexes using the explicit staging `--project`, create disposable staging Auth users, and run `npm run smoke:coach:staging`.
4. P2 — After staging server smoke is GREEN, validate account export/delete and consent-gated telemetry before any endpoint activation. Production activation remains a separate Founder decision.
