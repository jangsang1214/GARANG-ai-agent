# GARANG Project State

Last updated: 2026-09-15

## Current objective
The verified PRODUCT baseline includes Commercialization Stage 1, Core Intelligence Stage 2, the hardened Real LLM boundary, machine-enforced Decision↔LLM semantic alignment, conservative longitudinal Outcome Learning v2, Server Readiness Stage 0, and Firebase Staging Gate v1. The dedicated Firebase staging environment `garang-staging` now has Firestore rules/indexes deployed, Functions `api` deployed, staging Auth/Secret setup, an authenticated Real LLM Coach smoke GREEN, authenticated account export GREEN, analytics consent OFF/ON behavior GREEN, and privacy-safe error telemetry GREEN. The only remaining staging server validation is destructive account deletion on a disposable staging user. Target real-device Golden Path validation remains outstanding.

## Repository observations
- CONTROL: `jangsang1214/GARANG-ai-agent`; Founder OS v7-lite remains the control plane.
- PRODUCT: `jangsang1214/-fitmind-ai`; current verified main remains `451f5639bbee65c8f5659e150c0949d0b9bf24d5` from PR #102.
- Stage 1 remains GREEN through PRs #80, #83, #84 and #87; post-merge Release Gate #1093 was GREEN.
- Stage 2 Plan-vs-Actual / Adaptive Loop PR #88 merged as `c68ec3e915ae437dac35fbc1a9a39fc4ca6f6dbf`; Weekly Review PR #90 merged as `5f3d30e877e31d219623ebd521226e49265b46bf` with post-merge Gate #1098 GREEN.
- AI/Data hardening through PRs #95, #97 and #99 remains GREEN; PR #99 merged as `bcb27d5a283eb04643f0080f71a8a70ead14f95d` with post-merge Gate #1170 GREEN.
- Server Readiness Stage 0 PR #101 merged as `b2ddbf4e09c0c4861057135a61ab2f3e98ceb1df`; pre-merge Gate #1210 and post-merge Gate #1212 were GREEN.
- Firebase Staging Gate v1 PR #102 merged as `451f5639bbee65c8f5659e150c0949d0b9bf24d5` after full pre-merge Release Gate #1217 GREEN; exact post-merge Gate #1218 on main is GREEN.
- Founder OS Event Envelope #470 on PR #102 head and #473 on PRODUCT main completed successfully.

## External staging evidence
- Founder-run staging preflight on `garang-staging` returned `READY_FOR_EXTERNAL_STAGING_SETUP` and explicitly isolated production `fitfind-ai`.
- Firestore rules/indexes deployed successfully to `garang-staging`; rules compiled and `(default)` indexes deployed.
- `functions:api` deployed successfully to `garang-staging` after installing the missing Functions dependencies. The Functions deployment itself is VERIFIED; a separate `npm test --prefix functions` result was not directly captured in chat and must not be treated as independently VERIFIED evidence.
- Staging endpoint `https://asia-northeast3-garang-staging.cloudfunctions.net/api/coach` responded with HTTP 405 + `Allow: POST` to a GET, confirming the deployed route is reachable.
- Initial authenticated Coach smoke reached the provider and returned `LLM_PROVIDER_ERROR` with providerStatus `429`; after OpenAI API credit was added, the Founder-run curl smoke returned `status: PASS`, `source: llm`, `decisionMode: collect_data`, `provider: openai`, `model: gpt-5.6-luna`, and `alignmentVerified: true`.
- Authenticated `GET /account/export` returned `status: PASS`, `exportVersion: garang-user-export-v1`, `contractVersion: garang-state-v1`, `schemaVersion: 8`, with state/privacy/serverData present.
- Analytics consent OFF smoke returned HTTP 202 with `{ok:true, accepted:false, reason:'CONSENT_REQUIRED'}`.
- After setting the authenticated staging user's exact root Firestore document `users/{uid}.consent.analytics=true`, analytics consent ON smoke returned HTTP 202 with `{ok:true, accepted:true, count:1}`.
- Privacy-safe error telemetry smoke returned `status: PASS`, `kind: error`, `code: STAGING_SMOKE`, `feature: coach`, `source: staging-smoke`, and `sensitiveDataFiltered: true`; injected fake email/message/stack/token values were not present in exported telemetry.
- The repository Node smoke transport was temporarily blocked by a Codespaces Node `fetch` networking issue (`ETIMEDOUT` / IPv6 `ENETUNREACH`) while `curl` to the same endpoint succeeded. This is an execution-environment transport issue, not a Firebase/GARANG server failure.

## Stable
- Canonical loop remains Goal/Plan -> Action/Record -> Interpretation -> Feedback -> Next Action, with Coach approval before behavior-changing mutations.
- GARANG deterministic Decision Intelligence remains the judgment owner; the LLM remains explanation-only and has no direct mutation contract.
- Provider output must echo the active `decisionId`, `decisionMode`, and supported reasons; mismatches are rejected before LLM success is returned. LLM confidence cannot exceed deterministic GARANG confidence.
- Outcome Learning v2 remains bounded/read-only and cannot create automatic progression increases.
- Existing Daily Plan, Planner, Agent confirmation, Record, Today and Golden Path ownership remain preserved.
- Firebase Auth + Firestore remain the user-data foundation and existing app write ownership remains unchanged.
- Staging commands remain fail-closed: `GARANG_FIREBASE_STAGING_PROJECT_ID` is mandatory, production project `fitfind-ai` is explicitly rejected, deploy commands use explicit `--project`, and staging Coach smoke accepts only the exact derived staging endpoint.
- `GARANG_LLM_API_KEY` remains Secret Manager-owned and no secret value was added to source control.
- Browser account/export/delete/analytics/telemetry endpoints remain inactive/null until full staging verification is complete; current staging GREEN evidence does not authorize production activation.

## In progress
- Firebase staging infrastructure, authenticated Real LLM Coach, account export, consent OFF/ON analytics, and privacy-safe error telemetry are GREEN based on Founder-run execution evidence.
- Remaining staging server validation: destructive `/account/delete` on a disposable staging user, including intended data removal and recent-login behavior.
- Target real-device Golden Path remains a separate P1 validation.

## Blockers / unknowns
- Destructive account delete staging smoke has not yet been verified and requires explicit Founder approval before deleting a disposable staging account.
- Real-device Golden Path validation on the target iPhone/in-app browser remains outstanding.
- Browser privileged endpoint activation remains intentionally inactive/null pending full staging server validation and a separate reviewed activation change.
- Live production Real LLM activation remains UNKNOWN until target-environment secret/config, deployed Functions revision, authenticated live `source: llm`, two-user personalization smoke and production observability are verified.
- Commercial-production readiness remains RED until payment/entitlement, production monitoring, legal/privacy/retention review, full staging/security and real-device gates are completed.
- PRODUCT `main` has been observed without required branch protection/status checks; governance hardening remains a separate deliberate Founder decision.

## Next priorities
1. P1 — Validate the deployed Golden Path on the target real iPhone/Safari and target in-app browser.
2. P2 — With explicit Founder approval, create/use a disposable staging Auth user and validate destructive `/account/delete` with recent-login enforcement and post-delete data/auth removal checks.
3. P2 — After full staging server validation is GREEN, decide whether to activate staging browser privileged endpoint URLs through a small reviewed PRODUCT change.
4. Keep production endpoint activation, production Functions changes, payments/OCR and commercial-production release as separate Founder decisions.
