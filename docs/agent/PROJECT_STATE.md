# GARANG Project State

Last updated: 2026-09-15

## Current objective
The verified PRODUCT baseline includes Commercialization Stage 1, Core Intelligence Stage 2, the hardened Real LLM boundary, machine-enforced Decision↔LLM semantic alignment, conservative longitudinal Outcome Learning v2, Server Readiness Stage 0, and Firebase Staging Gate v1. The dedicated Firebase staging environment `garang-staging` now exists and has completed Firestore rules/indexes deployment, Functions `api` deployment, staging Auth setup, Secret Manager binding, and an authenticated Real LLM Coach smoke that returned `source: llm` with verified Decision↔LLM alignment. Remaining staging work is account export/delete and consent-gated telemetry verification. Target real-device Golden Path validation remains outstanding.

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
- `functions:api` deployed successfully to `garang-staging` after installing `functions` dependencies and running the Functions test suite.
- Staging endpoint `https://asia-northeast3-garang-staging.cloudfunctions.net/api/coach` responded with HTTP 405 + `Allow: POST` to an unauthenticated GET, confirming the deployed route is reachable.
- Initial authenticated Coach smoke reached the provider and returned `LLM_PROVIDER_ERROR` with providerStatus `429`; after OpenAI API credit was added, the Founder-run curl smoke returned `status: PASS`, `source: llm`, `decisionMode: collect_data`, `provider: openai`, `model: gpt-5.6-luna`, and `alignmentVerified: true`.
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
- Browser account/export/delete/analytics/telemetry endpoints remain inactive/null until their staging verification is complete; staging Coach GREEN does not authorize production activation.

## In progress
- Firebase staging infrastructure and authenticated Real LLM Coach path are GREEN based on Founder-run execution evidence.
- Remaining staging server validation: account export, account delete with a disposable staging account, analytics consent OFF/ON behavior, and privacy-safe error telemetry.
- Target real-device Golden Path remains a separate P1 validation.

## Blockers / unknowns
- Account export/delete staging smoke has not yet been verified.
- Consent-gated analytics/error telemetry staging smoke has not yet been verified.
- Real-device Golden Path validation on the target iPhone/in-app browser remains outstanding.
- Browser privileged endpoint activation remains intentionally inactive/null pending full staging server validation.
- Live production Real LLM activation remains UNKNOWN until target-environment secret/config, deployed Functions revision, authenticated live `source: llm`, two-user personalization smoke and production observability are verified.
- Commercial-production readiness remains RED until payment/entitlement, production monitoring, legal/privacy/retention review, staging/security and real-device gates are completed.
- PRODUCT `main` has been observed without required branch protection/status checks; governance hardening remains a separate deliberate Founder decision.

## Next priorities
1. P1 — Validate the deployed Golden Path on the target real iPhone/Safari and target in-app browser.
2. P2 — Validate staging `GET /account/export` with the authenticated staging user.
3. P2 — Validate analytics/telemetry consent OFF/ON behavior and privacy-safe error telemetry in staging.
4. P2 — Last, use a disposable staging Auth user for destructive `/account/delete` verification with recent-login enforcement.
5. Keep production endpoint activation, production Functions changes, payments/OCR and commercial-production release as separate Founder decisions.
