# GARANG Release Status

Last updated: 2026-09-16

## Overall decision
GREEN for current VERIFIED PRODUCT main `251c51491e7754103ffb6d5325c5197205e38d3e` (merged PR #119) at repository/UI/Golden Path level. The reviewed multi-source food corpus remains GREEN at `232 verified / 3 approximate / 265 estimated / 0 unknown`. Production Real AI Coach repository preflight is GREEN, but live production activation remains YELLOW/UNKNOWN because the current `fitfind-ai` Functions surface returns HTTP 404 for `/api/coach`, the production provider-secret state is unverified, and no privileged production deploy/authenticated live smoke has been executed. Real-device validation remains PARTIAL GREEN. Commercial-production readiness remains RED.

## PRODUCT — current main
Decision: GREEN.
- PR #119 `Gate production Coach route before live LLM activation` merged as `251c51491e7754103ffb6d5325c5197205e38d3e`.
- Exact verified PR head: `99d7d56966e49d828c98d67083bb1447d2c130b8`.
- Pre-merge exact-head Release Gate #1352: GREEN. `core-build-rules`, `browser-webkit`, and final `verify` all PASS.
- Post-merge main Release Gate #1353: GREEN. Core/build/security, full WebKit Golden Path, authenticated Coach, Real LLM integration, recovery and mobile regression all PASS.
- Pages #788 on the merge SHA: GREEN.
- Founder OS Event Envelope #765 on the main push: GREEN.

## Golden Path / regression preservation
Decision: GREEN in automated release gate.
- Full WebKit release gate passes Today action flow, Today Check-in/workout-preparation integration, Today visual parity, daily plan, Simplified Shell, Planner execution, Nutrition recommendation, truth surface/first record, Golden Path integration, complete Golden Path journey, authenticated boot, authenticated Coach plan flow, Real LLM Golden Path integration, conversational logging, recovery mutation/touch, mobile regression, Settings touch, mobile button audit and runtime stability stress.
- Core gate passes locked dependencies, browser server portability, production dependency security, GARANG Intelligence Core, Action & Data Reliability, Commercial Core regressions, runtime/build, build entry, Firebase public health and Firestore emulator rules.
- GARANG deterministic Decision Intelligence remains judgment owner; LLM remains explanation/orchestration only.
- No silent mutation or confirmation-boundary bypass was introduced.

## Production Real AI Coach preflight
Decision: REPOSITORY GREEN / LIVE PRODUCTION YELLOW.
- PR #119 adds a zero-provider-cost live route health probe and production activation checklist without invoking the LLM provider or reading user data.
- Production Firebase project is `fitfind-ai`; expected live route is `POST https://asia-northeast3-fitfind-ai.cloudfunctions.net/api/coach`.
- Repository contract after intended deployment: unauthenticated POST returns `401 UNAUTHENTICATED`; GET returns `405 METHOD_NOT_ALLOWED`.
- VERIFIED live probe on 2026-09-16 currently returns HTTP `404` for unauthenticated POST. This proves the currently deployed production Functions surface does not expose the repository Real Coach route.
- Current repository Function binds `GARANG_LLM_API_KEY` as a Firebase Secret Manager secret and runs `api` in `asia-northeast3` with bounded timeout/memory/maxInstances.
- The server verifies Firebase ID tokens, derives uid server-side, reads canonical state, computes GARANG Memory/State/Outcome/Decision Intelligence before provider invocation, and passes only bounded/redacted provider context.
- Provider responses must align to the exact deterministic GARANG decision identity/mode and supported reason codes. Provider output cannot directly mutate user state; behavior-changing writes remain behind GARANG Agent Contract and explicit user confirmation.
- Server-side Coach quotas and privacy-safe operational telemetry are preserved; provider/quota errors fail closed to deterministic fallback.
- Production `GARANG_LLM_API_KEY` existence is UNKNOWN from available evidence. No key value was accessed or exposed.
- No production Secret Manager write, Functions deploy, billing/provider-budget change, or authenticated production smoke has been performed.

## Production activation acceptance gate
Production Real AI Coach becomes VERIFIED only after all are observed against `fitfind-ai`:
1. `GARANG_LLM_API_KEY` is confirmed/configured in target Secret Manager without exposing its value.
2. Current repository `functions` revision is deployed to production and the route probe changes from 404 to the expected 401/405 boundary behavior.
3. Authenticated Coach smoke returns `source: llm`, a server-computed GARANG decision, and verified alignment.
4. A second intentionally different authenticated user state demonstrates appropriate personalization/deterministic-decision differentiation where evidence warrants it.
5. Provider failure and quota boundaries still fail closed without bypassing the deterministic Coach.
6. Production observability contains no raw uid, token, private Memory values, raw message or full provider context.
7. Repository Release Gate remains GREEN.

## Official nutrition data result
Decision: GREEN / REVIEWED MULTI-SOURCE V3 PRESERVED.
- PR #118 applied 151 additional reviewed official replacements: K-FIND 음식DB analyzed 86, 국가표준식품성분표 10.4 63, K-FIND 가공식품DB 2.
- The canonical 500-food corpus audits to `232 verified / 3 approximate / 265 estimated / 0 unknown`.
- Food IDs, canonical names, categories, serving labels and corpus order remain preserved.
- Remaining approximate rows are `라면`, `오트밀`, `그릭요거트`; ambiguous estimated rows remain intentionally fail-closed.

## Real-device validation
Decision: PARTIAL GREEN / IN PROGRESS.
- Real iPhone Chrome app load → onboarding → Today → first record → Coach is VERIFIED GREEN.
- Real-device plan → execution → persistence → Accumulation remains unverified.
- Target in-app-browser Golden Path remains unverified.

## Remaining release gates
- Repository/UI/automated Golden Path integration: GREEN.
- Reviewed food-corpus v3 through 232 verified foods: GREEN.
- Production Real AI Coach repository preflight: GREEN.
- Production Real AI Coach live activation: YELLOW / approval-gated; current live route 404 and secret/deploy/smoke evidence incomplete.
- Authenticated live production Coach + two-user personalization evidence: UNKNOWN.
- Real-device full Golden Path: PARTIAL GREEN.
- Commercial production: RED pending production AI/provider activation evidence, full real-device completion, payment/entitlement, monitoring, legal/privacy/retention and production release gates.
