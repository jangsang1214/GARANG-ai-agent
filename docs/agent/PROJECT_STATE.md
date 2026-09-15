# GARANG Project State

Last updated: 2026-09-16

## Current objective
Production Real AI Coach repository preflight is complete and GREEN. Protect the verified Golden Path and current nutrition data integrity while moving through the single approval-gated production activation bundle: confirm/configure the provider secret in `fitfind-ai` → deploy the current Firebase Functions revision → verify the live Coach route → run authenticated one/two-user production smoke. Remaining real-device validation and Wanted AI Championship submission preparation follow after production Coach evidence.

## Repository observations
- CONTROL: `jangsang1214/GARANG-ai-agent`; Founder OS v7-lite remains the control plane.
- PRODUCT: `jangsang1214/-fitmind-ai`; current VERIFIED main is `251c51491e7754103ffb6d5325c5197205e38d3e`, merge commit for PR #119 `Gate production Coach route before live LLM activation`.
- CONTROL and PRODUCT mutation policy remain `branch-pr` per `docs/agent/REPOSITORIES.json`.
- PR #117 established fail-closed KDDB/PFDB/KFCT official matching; PR #118 materialized the reviewed food-corpus v3.
- PR #119 added a zero-provider-cost production Coach route preflight and documented the production activation gate.
- PR #119 exact head `99d7d56966e49d828c98d67083bb1447d2c130b8`; Release Gate #1352: GREEN.
- PRODUCT post-merge Release Gate #1353 on `251c5149...`: GREEN across core/build/security, Firebase public health, Firestore emulator, full WebKit Golden Path, Nutrition, authenticated Coach, Real LLM integration, recovery, mobile regression, Settings touch, button health and runtime stress.
- Pages #788 on PRODUCT main: GREEN.
- Founder OS Event Envelope #765 on PRODUCT main: GREEN.

## Golden Path / UI baseline
- Today exposes `오늘 운동 준비하기` as the single visible workout execution entry while preserving canonical execution ownership.
- Bottom `체크인` remains the bottom-most touch-safe Today utility and reuses the canonical check-in modal/write owner.
- Advanced workout generation remains behind progressive disclosure.
- Golden Path semantics remain Onboarding → Today → Record → Coach → Plan → Confirmation → Execution → Record → Progress/Accumulation.
- Repository-level Golden Path, authenticated Coach, Real LLM integration and mobile regression remain GREEN after PR #119.

## AI/Data verified baseline
- GARANG deterministic Decision Intelligence remains judgment owner; LLM remains explanation/orchestration only and cannot mutate user state directly.
- Canonical `food-db.json` remains exactly 500 records and audits to `232 verified / 3 approximate / 265 estimated / 0 unknown`.
- PR #118 upgraded exactly 151 additional canonical rows and left 349 rows unchanged. Source contribution: K-FIND 음식DB analyzed 86, 국가표준식품성분표 10.4 63, K-FIND 가공식품DB 2.
- Remaining `approximate`: `라면`, `오트밀`, `그릭요거트`; remaining 265 `estimated` rows are usable but intentionally fail-closed from one-to-one official verification where identity/basis/nutrient evidence is insufficient.

## Production Real AI Coach preflight
- Repository architecture is VERIFIED: Firebase ID token determines uid; server reads canonical user state; Memory/State/Outcome/Decision Intelligence runs before the provider; the provider receives bounded context and cannot write Firestore or bypass Agent Contract/user confirmation.
- Provider boundary is server-side OpenAI Responses API with default model `gpt-5.6-luna`; secret binding is `GARANG_LLM_API_KEY` through Firebase Functions Secret Manager, not browser config.
- Provider success is accepted only when alignment echoes the exact GARANG deterministic `decisionId` and `decisionMode` and uses only supplied reason codes; confidence is capped by the deterministic decision.
- Authenticated Coach requests are rate-limited server-side; provider or quota failures fail closed to the deterministic local Coach path.
- Production project identity is `fitfind-ai`; documented endpoint is `https://asia-northeast3-fitfind-ai.cloudfunctions.net/api/coach`.
- VERIFIED live route probe on 2026-09-16: unauthenticated `POST /api/coach` returned HTTP `404`. Repository contract after the current Function is deployed is HTTP `401 UNAUTHENTICATED`; therefore the live production Functions surface does not yet expose the Real Coach route.
- `GARANG_LLM_API_KEY` existence/value in production is UNKNOWN from available evidence. No secret value has been requested or exposed in chat.
- No production Functions deploy, privileged authenticated live Coach smoke, or provider-billing change has been executed in this task.

## Real-device evidence
- Founder verified deployed iPhone Chrome flow through app load → onboarding → Today → first record → Coach.
- Full real-device plan → execution → persistence → Accumulation and target in-app browser remain outstanding.

## Stable
- Core loop remains Goal → Plan → Action → Record → Interpretation → Feedback → Next Action → Long-term Change.
- AI contract remains Memory → State Intelligence → Outcome Intelligence → Decision Intelligence → LLM Explanation → User Confirmation → Agent Contract → State Mutation → Outcome → Learning.
- `GARANG decides → LLM explains → User confirms → GARANG acts.` remains enforced.
- Firebase Auth + Firestore remain user-data foundations; canonical write ownership is unchanged.
- Repository/UI/automated Golden Path, food corpus, and production-Coach repository preflight are GREEN on current PRODUCT main.
- Commercial-production readiness remains separate from repository GREEN status.

## In progress / unknowns
- P1 production Real AI Coach activation: REPOSITORY PREFLIGHT GREEN / production activation approval-gated.
- P1 live production Coach route: BLOCKED by current deployed Functions surface returning 404 until intended revision is deployed.
- P1 production provider secret existence: UNKNOWN until checked by an authorized Firebase operator; secret value must never be pasted into chat/source.
- P1 authenticated live production Coach + two-user personalization evidence: UNKNOWN until post-deploy smoke.
- P1 real-device Golden Path validation: PARTIAL GREEN.
- Commercial production readiness: RED pending remaining production/commercial gates.

## Next priorities
1. P1 — Founder approval for one production activation bundle: confirm/configure `GARANG_LLM_API_KEY` in `fitfind-ai` Secret Manager → deploy current `functions`/`api` revision → require route preflight 401/405 → run authenticated primary/alternate-user Coach smoke and alignment/personalization checks.
2. P1 — After production Coach evidence, complete real iPhone Golden Path through plan → execution → persistence → Accumulation and target in-app browser.
3. P1 — Prepare Wanted AI Championship submission copy/demo evidence, then submit after production/real-device evidence is complete.
4. P4 — Keep food coverage at the evidence-backed 232 verified unless stronger traceable mappings become available; do not force ambiguous rows to verified.
