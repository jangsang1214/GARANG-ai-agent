# GARANG Project State

Last updated: 2026-09-16

## Current objective
Production Real AI Coach deployment is now VERIFIED GREEN at the infrastructure, secret, route, and automated regression levels. PRODUCT main deploys the current `api` Function to `fitfind-ai`, production Coach rejects unauthenticated POST with 401 and wrong-method GET with 405 before provider/user-data access, and the OpenAI provider secret is configured through Firebase Secret Manager. The only remaining Real AI activation evidence gap is an authenticated production request proving live provider output (`source: llm`) and, after that, a second-user personalization check. Highest priority is to close that authenticated live evidence without weakening secret/auth boundaries, then finish the remaining real-device Golden Path and Wanted demo evidence.

## Repository observations
- CONTROL: `jangsang1214/GARANG-ai-agent`; Founder OS v7-lite control plane.
- PRODUCT: `jangsang1214/-fitmind-ai`; current VERIFIED main `074cb1f3fcdd3fc9958c78c67314dc65dcd6ce6c`, merge commit for PR #121 `Activate production Real AI Coach dependency fix`.
- Mutation policy remains `branch-pr` per `docs/agent/REPOSITORIES.json`.
- PR #120 introduced the fail-closed production activation workflow.
- PR #121 fixed the activation workflow by installing the existing `functions/` runtime dependencies before Firebase trigger analysis/deploy; no application/provider contract was changed.
- PR #121 exact head `48020dde072bff74a6d5e8ede428aedb60c2f37a`; exact-head Release Gate #1357: GREEN across core/build/security, Firestore/Firebase health, full WebKit Golden Path, authenticated Coach, Real LLM integration, recovery and mobile regressions.
- PRODUCT post-merge Release Gate #1358 on `074cb1f3...`: GREEN through final verify.
- Pages #790: GREEN.
- Founder OS Event Envelope on current main: GREEN, including run #778 after activation evidence.

## Production activation evidence
- Founder explicitly approved production secret/config/deploy/live-smoke work for this bundle.
- Production project: `fitfind-ai`; Function: `api` in `asia-northeast3`.
- PRODUCT GitHub Actions now authenticates to Firebase via `FIREBASE_SERVICE_ACCOUNT_FITFIND_AI`; project access is VERIFIED.
- Secret Manager API and required deployment permissions were enabled/assigned by Founder without exposing secret values in chat or repository files.
- `GARANG_LLM_API_KEY` was created in Firebase Secret Manager and subsequent activation preserved the existing value. Runtime compute identity was granted Secret Accessor for that secret by Firebase deploy.
- Production Coach Activation run #2: workflow `35010146340` on PRODUCT main `074cb1f3...`: SUCCESS.
- `functions[api(asia-northeast3)] Successful update operation` and Firebase `Deploy complete!`: VERIFIED.
- Public route preflight: PASS at `https://asia-northeast3-fitfind-ai.cloudfunctions.net/api/coach`.
- Unauthenticated POST = 401; wrong-method GET = 405; preflight confirmed `providerInvoked: false` and `userDataRead: false` before authentication.
- Authenticated production provider smoke was explicitly `SKIPPED_NO_TOKEN` because `GARANG_FIREBASE_ID_TOKEN` / alternate token are not configured. This is NOT a live-provider PASS.
- Therefore `source: llm`, exact live alignment, and two-user production personalization remain UNKNOWN/PENDING.

## Golden Path / UI baseline
- Today single workout execution entry, bottom Check-in, progressive disclosure, canonical execution ownership and persistence semantics remain unchanged.
- Golden Path remains Onboarding → Today → Record → Coach → Plan → Confirmation → Execution → Record → Progress/Accumulation.
- Repository Golden Path, authenticated Coach test path, Real LLM integration tests, recovery and mobile regressions are GREEN on current PRODUCT main.

## AI/Data verified baseline
- GARANG deterministic Decision Intelligence remains judgment owner; LLM remains explanation/orchestration only and cannot mutate state directly.
- Firebase ID token determines uid server-side; canonical state is read server-side before deterministic Memory/State/Outcome/Decision Intelligence and provider invocation.
- Provider success requires exact GARANG `decisionId`/`decisionMode` alignment; provider/quota failures fail closed to deterministic Coach behavior.
- Canonical food DB remains 500 foods = `232 verified / 3 approximate / 265 estimated / 0 unknown`; remaining ambiguous rows stay fail-closed.

## Real-device evidence
- Founder verified deployed iPhone Chrome through app load → onboarding → Today → first record → Coach before the current production LLM deployment.
- Post-deploy authenticated Real LLM evidence, plan → execution → persistence → Accumulation, and target in-app browser remain outstanding.

## Stable
- Core loop: Goal → Plan → Action → Record → Interpretation → Feedback → Next Action → Long-term Change.
- AI contract: Memory → State Intelligence → Outcome Intelligence → Decision Intelligence → LLM Explanation → User Confirmation → Agent Contract → State Mutation → Outcome → Learning.
- `GARANG decides → LLM explains → User confirms → GARANG acts.` remains enforced.
- Repository/UI/automated Golden Path, food corpus, Real AI Coach repository logic, Firebase production deployment and public auth/method boundaries are GREEN.
- Commercial production readiness remains separate from repository/deployment GREEN status.

## In progress / blockers
- P1 production Real AI Coach deployment + public route boundaries: VERIFIED GREEN.
- P1 production provider secret/config: VERIFIED GREEN without secret exposure.
- P1 authenticated live Coach provider evidence: YELLOW / SKIPPED_NO_TOKEN.
- P1 two-user production personalization: UNKNOWN / NOT RUN.
- P1 real-device Golden Path: PARTIAL GREEN.
- Commercial production readiness: RED pending remaining production/commercial gates.

## Technical debt observed during production deploy
- Firebase CLI reports the current `firebase-functions` version as outdated and warns that upgrading may include breaking changes; do not upgrade opportunistically during activation.
- Firebase deploy reported an unhandled build-image cleanup warning that could create a small monthly Artifact Registry/GCR charge. Any manual image deletion is destructive/cost-related and requires explicit Founder approval.

## Next priorities
1. P1 — Obtain authenticated production evidence safely and run canonical Coach smoke to require live `source: llm` + deterministic decision alignment; do not paste or expose Firebase ID tokens in chat.
2. P1 — If secure second-user evidence is available, verify intentional personalization/deterministic-decision differentiation.
3. P1 — Complete real iPhone Golden Path through plan → execution → persistence → Accumulation and target in-app browser.
4. P1 — Prepare Wanted AI Championship submission copy/demo evidence after live AI + real-device evidence are complete.
