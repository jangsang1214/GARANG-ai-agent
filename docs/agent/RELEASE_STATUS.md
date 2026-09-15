# GARANG Release Status

Last updated: 2026-09-16

## Overall decision
GREEN for current PRODUCT main `4c18ce254494e458de43c1d9e7030a09bfdb0a22` at repository/UI/automated Golden Path and production deployment/public-boundary level. A real authenticated production Coach attempt before PR #122 reached the external-provider path but failed with `LLM_TIMEOUT` (`providerStatus: null`) under the old 8-second provider timeout; GARANG safely fell back to the local deterministic Coach. PR #122 increased provider timeout to 20 seconds and Function timeout to 30 seconds, regression-locked the deployment contract, redeployed successfully, and passed post-merge Release Gate #1360. Production Real AI Coach remains YELLOW until one post-fix authenticated request proves live external provider output. Real-device validation remains PARTIAL GREEN. Commercial production remains RED.

## PRODUCT — current main
Decision: GREEN.
- PR #122 `Activate production Real AI Coach timeout fix` merged as `4c18ce254494e458de43c1d9e7030a09bfdb0a22`.
- Exact PR head: `fc8faec25f25e2b51cd500e93a593b42776ea95b`.
- Exact-head Release Gate #1359: GREEN through final verify.
- Post-merge Release Gate #1360: GREEN through final verify. Core/build/security, Firebase public health, Firestore emulator, complete WebKit Golden Path, authenticated Coach, Real LLM integration, recovery, Settings/mobile regressions, button health and runtime stress all PASS.
- Pages #791: GREEN.
- Founder OS Event Envelope #783: GREEN.
- PR #122 preserves deterministic decision ownership and fail-closed local fallback while changing provider timeout 8s → 20s and Function timeout 15s → 30s.
- Deployment-trigger contract now covers approved `functions/**` and `firebase.json` changes as well as the activation workflow itself.

## Production Real AI Coach activation
Decision: YELLOW / TIMEOUT FIX DEPLOYED; POST-FIX AUTHENTICATED PROVIDER SUCCESS PENDING.
- Founder explicitly approved the production secret/config/deploy/live-smoke bundle.
- Target project: `fitfind-ai`; Function: `api` / `asia-northeast3`.
- PRODUCT GitHub Actions Firebase service-account authentication: VERIFIED.
- Production project access: VERIFIED.
- `GARANG_LLM_API_KEY`: VERIFIED present in Firebase Secret Manager; value was never exposed.
- Before PR #122, a real authenticated production user reached the provider path. Production logging recorded `code: LLM_TIMEOUT` and `providerStatus: null`; the app displayed the designed local-Coach fallback. This is VERIFIED failure-path evidence, not provider success.
- Root cause at that point: GARANG's provider-side AbortController deadline was 8 seconds, shorter than the practical external response observed; no provider HTTP error status was received before GARANG aborted.
- PR #122 raised provider timeout to 20 seconds and Function timeout to 30 seconds and added regression assertions so those values/trigger paths cannot silently regress.
- Production Coach Activation run #3 `35013994128` on current main: SUCCESS.
- Existing secret metadata was preserved; `functions[api(asia-northeast3)] Successful update operation` and Firebase `Deploy complete!`: VERIFIED.
- Production route preflight after the fix: PASS. Unauthenticated POST = 401, GET wrong method = 405, `providerInvoked: false`, `userDataRead: false` before authentication.
- Workflow authenticated smoke remains `SKIPPED_NO_TOKEN` because no static `GARANG_FIREBASE_ID_TOKEN` or alternate token is configured; this is intentionally not treated as PASS.
- Post-fix live external response / `source: llm`, live deterministic decision alignment and two-user personalization are still PENDING.

## Production activation acceptance gate
Current status by criterion:
1. Firebase CI credential with `fitfind-ai` access — ✅ VERIFIED.
2. `GARANG_LLM_API_KEY` confirmed/configured without exposure — ✅ VERIFIED.
3. `functions:api` deployed and unauthenticated POST 401 / wrong-method GET 405 — ✅ VERIFIED.
4. Real authenticated request reaches the provider path — ✅ VERIFIED pre-fix.
5. Post-fix authenticated Coach returns live external LLM output / `source: llm` with server-computed decision identity/alignment — ⏳ NOT YET RETESTED.
6. Second intentionally different authenticated user demonstrates appropriate personalization/deterministic-decision differentiation — ⏳ NOT RUN.
7. Provider timeout/failure remains fail-closed — ✅ VERIFIED by the real `LLM_TIMEOUT` fallback plus repository tests.
8. Repository Release Gate remains GREEN — ✅ exact-head #1359 and post-merge #1360 GREEN.

## Golden Path / regression preservation
Decision: GREEN in automated release gate.
- Full WebKit release gate passes Today, Planner, Nutrition, first-record/truth surface, complete Golden Path, authenticated app/Coach, Real LLM integration, logging, recovery and mobile regressions.
- GARANG deterministic Decision Intelligence remains judgment owner; LLM remains explanation/orchestration only.
- No silent mutation or user-confirmation bypass was introduced.
- Current audit found no reason to reopen broad UI redesign before external user evidence.

## Official nutrition data result
Decision: GREEN / REVIEWED MULTI-SOURCE V3 PRESERVED.
- 500 canonical foods = `232 verified / 3 approximate / 265 estimated / 0 unknown`.
- PR #118 applied 151 reviewed official upgrades while preserving canonical identity/order/serving contract.
- Ambiguous estimated rows remain intentionally fail-closed.

## Real-device validation
Decision: PARTIAL GREEN / IN PROGRESS.
- Real iPhone Chrome app load → onboarding → Today → first record → Coach: VERIFIED GREEN.
- Authenticated external-provider path + safe local fallback on timeout: VERIFIED.
- Post-PR-122 live external LLM success: unverified.
- Plan → execution → persistence → Accumulation: unverified.
- Target in-app-browser Golden Path: unverified.

## Main audit — release integrity findings
- P2: PRODUCT and CONTROL main are not branch-protected and both repository ruleset collections are empty. Current PR/CI discipline is not server-enforced.
- P2: `functions/package-lock.json` is absent; production activation resolves Functions dependencies with `npm install`, so same-revision server dependency resolution is not fully reproducible.
- P2: CI audits root production dependencies but does not separately audit Functions production dependencies.
- P2: root production dependency audit is clean, but dev/deploy tooling audit still reports critical/high findings and deprecated packages; isolate modernization from product behavior changes.
- P2: Actions v4 emit Node 20 deprecation warnings while current runners force Node 24.
- P2: production deployment relies on a long-lived Firebase service-account JSON secret; plan OIDC / Workload Identity Federation + least-privilege review after live AI is stable.
- LOW/MEDIUM: Firebase CLI says current `firebase-functions` is outdated and warns of breaking changes on upgrade.
- LOW/COST: successful deploy still reports build-image cleanup failure and potential small Artifact Registry/GCR cost.
- P6: superseded old open PRs should be closed rather than revived.

## Remaining release gates
- Repository/UI/automated Golden Path: GREEN.
- Reviewed food corpus: GREEN.
- Production Firebase Function + provider secret + unauthenticated security boundaries: GREEN.
- Timeout-headroom fix + production redeploy: GREEN.
- Post-fix authenticated live external LLM response + two-user personalization: YELLOW / PENDING.
- Real-device full Golden Path: PARTIAL GREEN.
- Commercial production: RED pending authenticated production AI success, full real-device completion, payment/entitlement, monitoring, legal/privacy/retention and production release gates.
