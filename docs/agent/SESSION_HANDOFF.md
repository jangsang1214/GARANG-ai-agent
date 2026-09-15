# GARANG Session Handoff & Recovery Protocol v7-lite

## PROJECT START order
1 `AGENTS.md`
2 `docs/agent/REPOSITORIES.json`
3 `PROJECT_STATE.md`
4 `PROJECT_GRAPH.json`
5 `SESSION_HANDOFF.md`
6 `TASKS.md`
7 `DECISIONS.md`
8 `TECHNICAL_DEBT.md`
9 `RELEASE_STATUS.md`
10 inspect CONTROL + PRODUCT branches/commits/open PRs/CI
11 reconcile evidence with state/graph
12 select top 1–3 priorities and route authorized work.

## Current handoff
- PRODUCT current VERIFIED main is `074cb1f3fcdd3fc9958c78c67314dc65dcd6ce6c`, merge commit for PR #121 production Coach Functions dependency-install fix.
- PR #121 exact head `48020dde072bff74a6d5e8ede428aedb60c2f37a`; exact-head Release Gate #1357 GREEN.
- Post-merge Release Gate #1358 GREEN through final verify; Pages #790 GREEN; current-main Founder OS Event Envelope runs GREEN.
- Production Coach Activation run #2 `35010146340` SUCCESS on current main.
- Firebase service-account authentication and `fitfind-ai` project access are VERIFIED.
- `GARANG_LLM_API_KEY` exists in Firebase Secret Manager and the production runtime identity has Secret Accessor; no secret value was exposed in chat or repository files.
- `api(asia-northeast3)` production Function updated successfully and Firebase deploy completed.
- Production route `https://asia-northeast3-fitfind-ai.cloudfunctions.net/api/coach` passes fail-closed boundary preflight: unauthenticated POST 401, wrong-method GET 405, no provider invocation and no user-data read before authentication.
- Authenticated live production smoke did NOT run because no `GARANG_FIREBASE_ID_TOKEN` / alternate token was available in Actions. Workflow recorded `SKIPPED_NO_TOKEN`; do not treat this as provider PASS.
- Therefore live `source: llm`, live decision alignment, and two-user production personalization remain pending.
- GARANG deterministic decision identity remains authoritative. LLM remains explanation/orchestration only and cannot mutate state directly.
- Repository/UI/automated Golden Path and production infrastructure/public security boundary are GREEN. Commercial production readiness remains separate and RED.
- Founder real-device validation is PARTIAL GREEN through iPhone Chrome app load → onboarding → Today → first record → Coach from before the current production provider deployment; post-deploy provider evidence and later plan/execution/persistence/Accumulation remain unverified.
- Nutrition corpus remains locked/reviewed at 500 foods = `232 verified / 3 approximate / 265 estimated / 0 unknown`.

## Product quality judgment
- Today / Record / Coach / Progress remains the locked release IA baseline.
- Production Coach infrastructure is now live behind correct authentication/method boundaries without changing GARANG decision ownership.
- Deployment success is not equivalent to authenticated provider success; keep Real AI activation YELLOW until live `source: llm` evidence exists.

## Non-blocking deployment debt
- Firebase CLI warns the current `firebase-functions` version is outdated and an upgrade may have breaking changes; isolate in a dedicated regression-tested PR later.
- Successful deploy also reported a build-image cleanup warning that may create a small monthly Artifact Registry/GCR cost. Manual deletion is destructive/cost-related and requires explicit Founder approval.

## Next recommended work
1. Close authenticated production Coach evidence safely: obtain a secure short-lived test identity/token path without exposing tokens in chat, run canonical `source: llm` smoke and verify decision alignment.
2. If secure evidence is available, repeat with a deliberately different user for personalization/deterministic-decision differentiation.
3. Complete real iPhone Golden Path through plan → execution → persistence → Accumulation and target in-app browser.
4. Prepare Wanted AI Championship submission copy/demo evidence after authenticated production AI + real-device evidence are complete.

## Handoff rule
Never turn old handoff text into VERIFIED evidence without observing the source. DONE requires implementation + acceptance + verification + regression consideration + material state synchronization.
