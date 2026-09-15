# GARANG Project State

Last updated: 2026-09-16

## Current objective
Production Real AI Coach code, regression gates, and the fail-closed activation workflow are GREEN. Founder approved the production activation bundle and PRODUCT PR #120 was merged, but the first activation run stopped before any production mutation because PRODUCT GitHub Actions has no Firebase deployment credential. Highest priority is now one credential-connection step, then rerun the already-merged activation workflow to verify Secret Manager, deploy `functions:api`, require 401/405 route boundaries, and run authenticated live Coach smoke where credentials permit.

## Repository observations
- CONTROL: `jangsang1214/GARANG-ai-agent`; Founder OS v7-lite control plane.
- PRODUCT: `jangsang1214/-fitmind-ai`; current VERIFIED main `e80cb61179c7108ddd65c78793a8adb31aed5da0`, merge commit for PR #120 `Activate production Real AI Coach through fail-closed CI`.
- Mutation policy remains `branch-pr` per `docs/agent/REPOSITORIES.json`.
- PR #119 completed zero-provider-cost production Coach preflight and proved the previously deployed `/api/coach` surface returned 404.
- PR #120 added the Founder-approved fail-closed production activation workflow.
- PR #120 exact head `ae2b6b4148ea995af50869ab7395ce59b9b5c837`; exact-head Release Gate #1355: GREEN; Event Envelope #769: GREEN.
- PRODUCT post-merge Release Gate #1356 on `e80cb611...`: GREEN across core/build/security, Firebase public health, Firestore emulator, full WebKit Golden Path, authenticated Coach, Real LLM integration, recovery, mobile regression, Settings touch, button health, runtime stress and final verify.
- Pages #789 on PRODUCT main: GREEN.
- Founder OS Event Envelope #772 on PRODUCT main: GREEN.

## Production activation evidence
- Founder explicitly approved production secret/config/deploy/live-smoke work for this bundle.
- Production project identity remains `fitfind-ai`; target Function is `api` in `asia-northeast3`.
- Production Coach Activation run #1: workflow run `35003841570`, main `e80cb611...`.
- VERIFIED failure root cause: Firebase authentication preflight found no `FIREBASE_SERVICE_ACCOUNT_FITFIND_AI`, no `GOOGLE_APPLICATION_CREDENTIALS_JSON`, and no `FIREBASE_TOKEN` in PRODUCT GitHub Actions.
- The workflow failed closed with exit code 42 before project access, Secret Manager query/write, Function deployment, route verification, or provider smoke.
- Therefore no production Secret Manager mutation, Firebase Functions deploy, provider call, or billing-triggering LLM smoke occurred in run #1.
- Production `GARANG_LLM_API_KEY` existence remains UNKNOWN because the workflow never obtained Firebase access.
- The workflow is ready to rerun after one approved Firebase CI credential is connected. Existing Firebase secret values are preserved; a secret is created only if absent and a masked GitHub `GARANG_LLM_API_KEY` is available.
- Authenticated live smoke remains conditional on a secure Firebase ID token; absence is reported as pending, never as PASS.

## Golden Path / UI baseline
- Today single workout execution entry, bottom Check-in, progressive disclosure, canonical execution ownership and persistence semantics remain unchanged.
- Golden Path remains Onboarding → Today → Record → Coach → Plan → Confirmation → Execution → Record → Progress/Accumulation.
- Repository Golden Path, authenticated Coach, Real LLM integration and mobile regressions are GREEN on current PRODUCT main.

## AI/Data verified baseline
- GARANG deterministic Decision Intelligence remains judgment owner; LLM remains explanation/orchestration only and cannot mutate state directly.
- Firebase ID token determines uid server-side; canonical state is read server-side before deterministic Memory/State/Outcome/Decision Intelligence and provider invocation.
- Provider success requires exact GARANG `decisionId`/`decisionMode` alignment; provider/quota failures fail closed to deterministic Coach behavior.
- Canonical food DB remains 500 foods = `232 verified / 3 approximate / 265 estimated / 0 unknown`; remaining ambiguous rows stay fail-closed.

## Real-device evidence
- Founder verified deployed iPhone Chrome through app load → onboarding → Today → first record → Coach.
- Real-device plan → execution → persistence → Accumulation and target in-app browser remain outstanding.

## Stable
- Core loop: Goal → Plan → Action → Record → Interpretation → Feedback → Next Action → Long-term Change.
- AI contract: Memory → State Intelligence → Outcome Intelligence → Decision Intelligence → LLM Explanation → User Confirmation → Agent Contract → State Mutation → Outcome → Learning.
- `GARANG decides → LLM explains → User confirms → GARANG acts.` remains enforced.
- Repository/UI/automated Golden Path, food corpus, Real AI Coach repository logic, and activation workflow are GREEN.
- Commercial production readiness remains separate from repository GREEN status.

## In progress / blockers
- P1 production Real AI Coach activation: BLOCKED ON FIREBASE CI CREDENTIAL.
- P1 production provider secret existence: UNKNOWN until Firebase authentication succeeds.
- P1 live Function deploy + route 401/405 verification: NOT REACHED in run #1.
- P1 authenticated live Coach + two-user personalization evidence: NOT REACHED / UNKNOWN.
- P1 real-device Golden Path: PARTIAL GREEN.
- Commercial production readiness: RED pending remaining production/commercial gates.

## Next priorities
1. P1 — Connect one Firebase deployment credential to PRODUCT GitHub Actions. Prefer ADC/service-account style credentials over legacy `FIREBASE_TOKEN`.
2. P1 — Rerun Production Coach Activation run #1; verify project access → Secret Manager → `functions:api` deploy → 401/405 route boundaries → authenticated `source: llm` smoke where secure token evidence is available.
3. P1 — Complete real iPhone Golden Path through plan → execution → persistence → Accumulation and target in-app browser.
4. P1 — Prepare Wanted AI Championship submission copy/demo evidence after production AI and real-device evidence are complete.
