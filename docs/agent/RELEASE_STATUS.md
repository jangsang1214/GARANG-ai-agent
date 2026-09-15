# GARANG Release Status

Last updated: 2026-09-16

## Overall decision
GREEN for current PRODUCT main `e80cb61179c7108ddd65c78793a8adb31aed5da0` at repository/UI/Golden Path level. Reviewed nutrition corpus remains GREEN at `232 verified / 3 approximate / 265 estimated / 0 unknown`. Production Real AI Coach activation is YELLOW/BLOCKED: the fail-closed activation workflow is merged and repository gates are GREEN, but Production Coach Activation run #1 stopped before any production mutation because no Firebase CI deployment credential is connected to PRODUCT GitHub Actions. Real-device validation remains PARTIAL GREEN. Commercial production remains RED.

## PRODUCT — current main
Decision: GREEN.
- PR #120 `Activate production Real AI Coach through fail-closed CI` merged as `e80cb61179c7108ddd65c78793a8adb31aed5da0`.
- Exact PR head: `ae2b6b4148ea995af50869ab7395ce59b9b5c837`.
- Exact-head Release Gate #1355: GREEN.
- Post-merge Release Gate #1356: GREEN. Core/build/security, Firebase public health, Firestore emulator, complete WebKit Golden Path, authenticated Coach, Real LLM integration, recovery, Settings/mobile regressions, button health, runtime stress and final verify all PASS.
- Pages #789: GREEN.
- Founder OS Event Envelope #772: GREEN.

## Production Real AI Coach activation
Decision: YELLOW / BLOCKED ON FIREBASE CI CREDENTIAL.
- Founder explicitly approved the production secret/config/deploy/live-smoke bundle.
- PR #120 added a one-shot fail-closed main activation workflow with minimum per-step secret scoping.
- Target project: `fitfind-ai`; target Function: `api` / `asia-northeast3`.
- Activation run #1: workflow `35003841570` on `e80cb611...`.
- VERIFIED root cause: Firebase authentication preflight received empty values for all supported deployment credentials: `FIREBASE_SERVICE_ACCOUNT_FITFIND_AI`, `GOOGLE_APPLICATION_CREDENTIALS_JSON`, and `FIREBASE_TOKEN`.
- Run #1 exited at the authentication gate before production project access. Project access check, Firebase Secret Manager check/write, Function deploy, public route 401/405 verification and authenticated provider smoke were all skipped.
- No production Function or secret was changed and no LLM provider call was made by activation run #1.
- `GARANG_LLM_API_KEY` existence in production remains UNKNOWN because authorized Firebase access was not reached.
- Existing Firebase secret values will be preserved after authentication; the workflow creates `GARANG_LLM_API_KEY` only when the Firebase secret is absent and a masked GitHub secret of the same name is available.
- Authenticated smoke runs only if a secure `GARANG_FIREBASE_ID_TOKEN` is available; otherwise it is explicitly recorded as pending.

## Production activation acceptance gate
Production Real AI Coach becomes VERIFIED only after:
1. A Firebase CI credential with access to `fitfind-ai` is connected securely.
2. `GARANG_LLM_API_KEY` is confirmed/configured in Firebase Secret Manager without exposing its value.
3. `functions:api` is deployed and the public route changes from the previously observed 404 to expected unauthenticated POST 401 / GET 405 boundaries.
4. Authenticated Coach smoke returns `source: llm`, server-computed GARANG decision identity and verified alignment.
5. A second intentionally different authenticated user demonstrates appropriate personalization/deterministic-decision differentiation where evidence warrants it.
6. Provider/quota failure remains fail-closed and production observability remains privacy-safe.
7. Repository Release Gate remains GREEN.

## Golden Path / regression preservation
Decision: GREEN in automated release gate.
- Full WebKit release gate continues to pass Today, Planner, Nutrition, first-record/truth surface, complete Golden Path, authenticated app/Coach, Real LLM integration, logging, recovery and mobile regressions.
- GARANG deterministic Decision Intelligence remains judgment owner; LLM remains explanation/orchestration only.
- No silent mutation or user-confirmation bypass was introduced.

## Official nutrition data result
Decision: GREEN / REVIEWED MULTI-SOURCE V3 PRESERVED.
- 500 canonical foods = `232 verified / 3 approximate / 265 estimated / 0 unknown`.
- PR #118 applied 151 reviewed official upgrades while preserving canonical identity/order/serving contract.
- Ambiguous estimated rows remain intentionally fail-closed.

## Real-device validation
Decision: PARTIAL GREEN / IN PROGRESS.
- Real iPhone Chrome app load → onboarding → Today → first record → Coach: VERIFIED GREEN.
- Plan → execution → persistence → Accumulation: unverified.
- Target in-app-browser Golden Path: unverified.

## Remaining release gates
- Repository/UI/automated Golden Path: GREEN.
- Reviewed food corpus: GREEN.
- Real AI Coach repository logic + fail-closed activation workflow: GREEN.
- Production Real AI Coach live activation: YELLOW / BLOCKED ON FIREBASE CI CREDENTIAL.
- Production Secret Manager state: UNKNOWN.
- Authenticated live Coach + two-user personalization: UNKNOWN / NOT REACHED.
- Real-device full Golden Path: PARTIAL GREEN.
- Commercial production: RED pending production AI activation evidence, full real-device completion, payment/entitlement, monitoring, legal/privacy/retention and production release gates.
