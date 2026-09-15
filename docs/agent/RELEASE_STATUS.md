# GARANG Release Status

Last updated: 2026-09-16

## Overall decision
GREEN for current PRODUCT main `074cb1f3fcdd3fc9958c78c67314dc65dcd6ce6c` at repository/UI/automated Golden Path and production deployment/public-boundary level. Production Real AI Coach is YELLOW only because authenticated live provider smoke (`source: llm`) and two-user personalization evidence have not yet run. Real-device validation remains PARTIAL GREEN. Commercial production remains RED.

## PRODUCT — current main
Decision: GREEN.
- PR #121 `Fix production Coach Functions dependency install` merged as `074cb1f3fcdd3fc9958c78c67314dc65dcd6ce6c`.
- Exact PR head: `48020dde072bff74a6d5e8ede428aedb60c2f37a`.
- Exact-head Release Gate #1357: GREEN through final verify.
- Post-merge Release Gate #1358: GREEN through final verify. Core/build/security, Firebase public health, Firestore emulator, complete WebKit Golden Path, authenticated Coach, Real LLM integration, recovery, Settings/mobile regressions, button health and runtime stress all PASS.
- Pages #790: GREEN.
- Founder OS Event Envelope on current main: GREEN, including run #778 after production activation.

## Production Real AI Coach activation
Decision: YELLOW / DEPLOYED AND BOUNDARIES GREEN; AUTHENTICATED LIVE PROVIDER EVIDENCE PENDING.
- Founder explicitly approved the production secret/config/deploy/live-smoke bundle.
- Target project: `fitfind-ai`; Function: `api` / `asia-northeast3`.
- PRODUCT GitHub Actions Firebase service-account authentication: VERIFIED.
- Production project access: VERIFIED.
- `GARANG_LLM_API_KEY`: VERIFIED present in Firebase Secret Manager; value was never exposed. Runtime compute service account has Secret Accessor for this secret.
- Production Coach Activation run #2 `35010146340` on current main: SUCCESS.
- `functions[api(asia-northeast3)] Successful update operation`: VERIFIED.
- Firebase deploy completed successfully.
- Production route preflight: PASS at `https://asia-northeast3-fitfind-ai.cloudfunctions.net/api/coach`.
- Unauthenticated POST = 401 and GET wrong method = 405: VERIFIED.
- Boundary preflight confirmed provider was not invoked and user data was not read before authentication: VERIFIED.
- Authenticated live provider smoke: `SKIPPED_NO_TOKEN` because no `GARANG_FIREBASE_ID_TOKEN` or alternate token is configured. This must not be treated as PASS.
- Live `source: llm`, live deterministic decision alignment, and two-user personalization remain UNKNOWN/PENDING.

## Production activation acceptance gate
Current status by criterion:
1. Firebase CI credential with `fitfind-ai` access — ✅ VERIFIED.
2. `GARANG_LLM_API_KEY` confirmed/configured without exposure — ✅ VERIFIED.
3. `functions:api` deployed and route changed from prior 404 to expected POST 401 / GET 405 — ✅ VERIFIED.
4. Authenticated Coach returns `source: llm` with server-computed decision identity/alignment — ⏳ NOT RUN / no secure ID token in Actions.
5. Second intentionally different authenticated user demonstrates appropriate personalization/deterministic-decision differentiation — ⏳ NOT RUN.
6. Provider/quota failure remains fail-closed and repository observability/privacy tests remain green — ✅ REPOSITORY VERIFIED; live failure-path evidence not additionally exercised in this activation.
7. Repository Release Gate remains GREEN — ✅ Gate #1357 and post-merge #1358 GREEN.

## Golden Path / regression preservation
Decision: GREEN in automated release gate.
- Full WebKit release gate passes Today, Planner, Nutrition, first-record/truth surface, complete Golden Path, authenticated app/Coach, Real LLM integration, logging, recovery and mobile regressions.
- GARANG deterministic Decision Intelligence remains judgment owner; LLM remains explanation/orchestration only.
- No silent mutation or user-confirmation bypass was introduced.

## Official nutrition data result
Decision: GREEN / REVIEWED MULTI-SOURCE V3 PRESERVED.
- 500 canonical foods = `232 verified / 3 approximate / 265 estimated / 0 unknown`.
- PR #118 applied 151 reviewed official upgrades while preserving canonical identity/order/serving contract.
- Ambiguous estimated rows remain intentionally fail-closed.

## Real-device validation
Decision: PARTIAL GREEN / IN PROGRESS.
- Real iPhone Chrome app load → onboarding → Today → first record → Coach: previously VERIFIED GREEN.
- Post-production-deploy live LLM provider evidence: unverified.
- Plan → execution → persistence → Accumulation: unverified.
- Target in-app-browser Golden Path: unverified.

## Deployment warnings / non-blocking debt
- Firebase CLI reports the current `firebase-functions` dependency as outdated and warns that upgrade may contain breaking changes. This is not an activation blocker and should be handled as a separately verified dependency upgrade.
- Deploy completed despite a build-image cleanup warning; leftover Artifact Registry/GCR images may cause a small monthly cost. Manual cleanup is destructive/cost-related and requires Founder approval.

## Remaining release gates
- Repository/UI/automated Golden Path: GREEN.
- Reviewed food corpus: GREEN.
- Production Firebase Function + provider secret + unauthenticated security boundaries: GREEN.
- Authenticated live `source: llm` + two-user personalization: YELLOW / PENDING.
- Real-device full Golden Path: PARTIAL GREEN.
- Commercial production: RED pending authenticated production AI evidence, full real-device completion, payment/entitlement, monitoring, legal/privacy/retention and production release gates.
