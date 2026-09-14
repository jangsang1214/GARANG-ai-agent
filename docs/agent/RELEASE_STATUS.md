# GARANG Release Status

Last updated: 2026-09-15

## Overall decision
GREEN for the current verified PRODUCT main `419e947aaeec3f74e3c79b86a68362915b0c88d2`, including Commercialization Stage 1, Core Intelligence Stage 2, hardened Real LLM/Decision alignment, Outcome Learning v2, Server Readiness Stage 0, Firebase Staging Gate v1, and the staging-only privileged browser endpoint activation boundary from PR #103. Firebase staging server-path validation is GREEN. Commercial-production readiness remains RED.

## PRODUCT — current main
Decision: GREEN.
- PR #103 `Activate privileged browser endpoints only in verified Firebase staging` squash merged as `419e947aaeec3f74e3c79b86a68362915b0c88d2`.
- Pre-merge Release Gate #1220: GREEN.
- Pre-merge Founder OS Event #478: GREEN.
- Exact post-merge Release Gate #1221: GREEN, including core/build/security, Intelligence Core, Action & Data Reliability, Commercial Core regressions, Firebase public health, Firestore emulator, full WebKit Golden Path, authenticated Coach, Real LLM, recovery, Settings/mobile regressions, button health, runtime stability stress and final verify.
- Post-merge Founder OS Event #480: GREEN.
- GitHub Pages build/deployment #770: GREEN.

## Staging privileged browser endpoint boundary
Decision: GREEN / MERGED / PRODUCTION FAIL-CLOSED.
- Browser service `apiBase` now derives from the loaded Firebase project ID.
- Exact `garang-staging` config enables browser URLs for account export/delete, analytics events and error telemetry.
- Production `fitfind-ai` config keeps all four privileged URLs `null`.
- Coach endpoint derivation remains compatible with the active Firebase project.
- Analytics consent OFF suppression, consent ON allowlisted transport, error telemetry privacy filtering, authenticated transport and existing client fallback ownership remain preserved.
- Current committed Firebase browser config still points to `fitfind-ai`; therefore the deployed GitHub Pages production client remains fail-closed for privileged endpoints. PR #103 does not itself constitute a deployed staging browser client.

## Firebase staging environment
Decision: GREEN / FULL SERVER-PATH VALIDATION COMPLETE.
- Dedicated project `garang-staging`; production `fitfind-ai` isolated.
- Firestore rules/indexes and Functions `api` deployed successfully.
- Authenticated Real LLM Coach: PASS / `source: llm` / alignment verified.
- Account export: PASS.
- Analytics consent OFF and ON: PASS.
- Privacy-safe error telemetry: PASS.
- Disposable account delete: live endpoint PASS and Auth deletion PASS. Handler success requires server-side Firestore deletion routine to complete before Auth removal. An auxiliary post-delete Firestore read failed authentication with HTTP 401 and remains INCONCLUSIVE rather than evidence of product failure.
- Codespaces Node fetch transport issue does not invalidate curl-based server smoke evidence.

## Preservation result
Decision: GREEN.
- GARANG deterministic Decision Intelligence remains the judgment owner; LLM remains explanation-only.
- Outcome Learning remains bounded/read-only with no automatic progression increase.
- No silent mutation, Planner ownership change, Agent confirmation bypass, Memory rewrite or destructive migration was introduced.
- No provider secret was added to source/browser config.
- Production privileged endpoint activation remains disabled and was not authorized.

## Remaining release gates
- Real-device Golden Path on target iPhone Safari/in-app browser: UNKNOWN / OUTSTANDING.
- Live staging browser client configured with `garang-staging`: UNKNOWN / NOT YET VERIFIED. The code boundary is ready and GREEN, but the current deployed GitHub Pages config is production.
- Live production Real LLM activation: UNKNOWN.
- Commercial production: RED pending payment/entitlement, production monitoring/provider activation, legal/privacy/retention review, real-device evidence and production release gates.
