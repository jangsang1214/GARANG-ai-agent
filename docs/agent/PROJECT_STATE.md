# GARANG Project State

Last updated: 2026-09-16

## Current objective
Production Real AI Coach infrastructure, secret binding, deployment and public auth/method boundaries are VERIFIED GREEN. A real authenticated production user then exercised the provider path and the server recorded `LLM_TIMEOUT` with `providerStatus: null`; GARANG correctly failed closed to the local deterministic Coach. PRODUCT PR #122 raised provider timeout headroom from 8s to 20s and Function timeout from 15s to 30s, locked that contract in regression tests, fixed activation triggers for `functions/**` / `firebase.json`, and redeployed successfully. Highest priority is now one post-fix authenticated real-user Coach request proving live provider output (`source: llm`) or yielding a new privacy-safe failure code, then finish the remaining real-device Golden Path and Wanted demo evidence.

## Repository observations
- CONTROL: `jangsang1214/GARANG-ai-agent`; Founder OS v7-lite control plane.
- PRODUCT: `jangsang1214/-fitmind-ai`; current VERIFIED main `4c18ce254494e458de43c1d9e7030a09bfdb0a22`, merge commit for PR #122 `Activate production Real AI Coach timeout fix`.
- Mutation policy remains `branch-pr` per `docs/agent/REPOSITORIES.json`.
- PR #121 fixed Functions runtime dependency installation and established the first successful production `api` deploy.
- Real authenticated production evidence after PR #121: provider path reached, external LLM response did not complete within the configured 8s, and the server emitted `LLM_TIMEOUT` with `providerStatus: null`; local Coach fallback remained available.
- PR #122 exact head `fc8faec25f25e2b51cd500e93a593b42776ea95b`; exact-head Release Gate #1359: GREEN through final verify.
- PR #122 changed provider timeout 8s → 20s, Function timeout 15s → 30s, and added fail-closed deployment-trigger coverage for `functions/**` and `firebase.json`; decision ownership, secret handling and local fallback contracts were unchanged.
- PRODUCT post-merge Release Gate #1360 on `4c18ce25...`: GREEN through final verify across core/build/security, Firebase public health, Firestore emulator, full WebKit Golden Path, authenticated Coach, Real LLM integration, recovery, Settings/mobile regressions, button health and runtime stress.
- Pages #791: GREEN.
- Founder OS Event Envelope #783: GREEN.

## Production activation evidence
- Founder explicitly approved the production secret/config/deploy/live-smoke work for this bundle.
- Production project: `fitfind-ai`; Function: `api` in `asia-northeast3`.
- PRODUCT GitHub Actions authenticates to Firebase via `FIREBASE_SERVICE_ACCOUNT_FITFIND_AI`; project access is VERIFIED.
- `GARANG_LLM_API_KEY` exists in Firebase Secret Manager and its value was never exposed in chat or repository files.
- Production Coach Activation run #3 `35013994128` on PRODUCT main `4c18ce25...`: SUCCESS.
- Existing `GARANG_LLM_API_KEY` metadata was found and preserved; `functions[api(asia-northeast3)] Successful update operation` and Firebase `Deploy complete!`: VERIFIED.
- Public route preflight PASS: unauthenticated POST 401, wrong-method GET 405, `providerInvoked: false`, `userDataRead: false` before authentication.
- Workflow authenticated smoke remains `SKIPPED_NO_TOKEN` because no long-lived Firebase ID token is stored in Actions. This is intentionally not treated as PASS.
- The previous real authenticated app attempt is stronger live evidence than the workflow token gap: authentication/provider routing worked, but the request timed out at the old 8s provider deadline and safely fell back.
- Post-fix live `source: llm`, exact live alignment and two-user production personalization remain PENDING until a real authenticated request is repeated after the 20s/30s deploy.

## Golden Path / UI baseline
- Today single workout execution entry, bottom Check-in, progressive disclosure, canonical execution ownership and persistence semantics remain unchanged.
- Golden Path remains Onboarding → Today → Record → Coach → Plan → Confirmation → Execution → Record → Progress/Accumulation.
- Repository Golden Path, authenticated Coach test path, Real LLM integration tests, recovery and mobile regressions are GREEN on current PRODUCT main.
- No evidence from this audit justifies reopening broad UI redesign work.

## AI/Data verified baseline
- GARANG deterministic Decision Intelligence remains judgment owner; LLM remains explanation/orchestration only and cannot mutate state directly.
- Firebase ID token determines uid server-side; canonical state is read server-side before deterministic Memory/State/Outcome/Decision Intelligence and provider invocation.
- Provider success requires exact GARANG `decisionId`/`decisionMode` alignment; provider/quota/timeout failures fail closed to deterministic Coach behavior.
- Canonical food DB remains 500 foods = `232 verified / 3 approximate / 265 estimated / 0 unknown`; remaining ambiguous rows stay fail-closed.

## Real-device evidence
- Founder verified deployed iPhone Chrome through app load → onboarding → Today → first record → Coach.
- Founder also produced authenticated production provider-path evidence: the pre-fix request reached the external-provider stage but timed out and fell back safely.
- Post-fix authenticated external-provider success, plan → execution → persistence → Accumulation, and target in-app browser remain outstanding.

## Stable
- Core loop: Goal → Plan → Action → Record → Interpretation → Feedback → Next Action → Long-term Change.
- AI contract: Memory → State Intelligence → Outcome Intelligence → Decision Intelligence → LLM Explanation → User Confirmation → Agent Contract → State Mutation → Outcome → Learning.
- `GARANG decides → LLM explains → User confirms → GARANG acts.` remains enforced.
- Repository/UI/automated Golden Path, food corpus, Real AI Coach repository logic, Firebase production deployment and public auth/method boundaries are GREEN.
- Commercial production readiness remains separate from repository/deployment GREEN status.

## In progress / blockers
- P1 production Real AI Coach infrastructure/deploy/public boundaries: VERIFIED GREEN.
- P1 pre-fix real authenticated provider attempt: VERIFIED `LLM_TIMEOUT` with safe local fallback.
- P1 timeout-headroom fix PR #122 + production redeploy: VERIFIED GREEN.
- P1 post-fix authenticated live `source: llm`: YELLOW / NOT YET RETESTED.
- P1 two-user production personalization: UNKNOWN / NOT RUN.
- P1 real-device Golden Path: PARTIAL GREEN.
- Commercial production readiness: RED pending remaining production/commercial gates.

## Main audit — actionable findings
- P2 release integrity: PRODUCT and CONTROL `main` have no branch protection and no repository rulesets; PR+CI discipline is procedural, not enforced by GitHub.
- P2 Functions reproducibility: `functions/package-lock.json` is absent and activation uses `npm install --prefix functions`, so deployed server dependencies are not exact-lock reproducible.
- P2 Functions security gate: root production dependencies are audited, but Functions runtime dependencies do not have their own production audit gate.
- P2 toolchain maintenance: current Actions v4 emit Node 20 deprecation warnings while the runner forces Node 24; root dev/deploy tooling audit reports high/critical findings even though root production dependency audit is clean.
- P2 credential hardening: production deploy currently depends on a long-lived Firebase service-account JSON secret; migrate to short-lived GitHub OIDC / Workload Identity Federation after live AI stabilization and review least privilege before rotating the existing key.
- LOW/MEDIUM dependency debt: Firebase CLI reports `firebase-functions` is outdated and warns of breaking changes on upgrade; isolate any upgrade in a dedicated regression-tested PR.
- LOW cost hygiene: Firebase deploy still reports build-image cleanup failure and possible small Artifact Registry/GCR storage cost; do not delete manually without Founder approval.
- Repo hygiene: old experimental/superseded open PRs remain and should be closed rather than revived once the P1 live-provider check is closed.
- No obvious `TODO`/`FIXME`/`HACK` markers or current-default-branch secret patterns were found in the audit; this is not a historical-secret audit.

## Next priorities
1. P1 — Repeat one authenticated production Coach request after PR #122 deploy. PASS requires live external response / `source: llm`; on failure capture only the privacy-safe `code` and `providerStatus`.
2. P1 — If primary live provider succeeds, run a secure second-user personalization/deterministic-decision differentiation check.
3. P1 — Complete real iPhone Golden Path through plan → execution → persistence → Accumulation and target in-app browser.
4. P1 — Prepare Wanted AI Championship submission copy/demo evidence after live AI + real-device evidence are complete.
5. P2 — Then harden release integrity in separate small PRs: Functions lock+audit, main protection/rulesets, GitHub Actions/toolchain updates, and OIDC/WIF credential migration. Do not mix these with feature/UI work.
