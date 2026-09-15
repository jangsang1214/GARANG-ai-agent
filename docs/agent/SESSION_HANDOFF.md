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
- PRODUCT current VERIFIED main is `4c18ce254494e458de43c1d9e7030a09bfdb0a22`, merge commit for PR #122 `Activate production Real AI Coach timeout fix`.
- PR #122 exact head `fc8faec25f25e2b51cd500e93a593b42776ea95b`; exact-head Release Gate #1359 GREEN through final verify.
- Post-merge Release Gate #1360 GREEN through final verify; Pages #791 GREEN; Founder OS Event Envelope #783 GREEN.
- Before PR #122, Founder ran a real authenticated production Coach request. It reached the external-provider path, then server logging recorded `LLM_TIMEOUT` with `providerStatus: null`; GARANG safely fell back to the local deterministic Coach. This proves authentication/provider routing and fail-closed fallback, but not external LLM success.
- Root cause addressed by PR #122: provider deadline raised 8s → 20s and Firebase `api` Function timeout 15s → 30s. Regression test locks the timeout relationship and production activation trigger paths.
- PR #122 also fixes production activation coverage so approved `functions/**` and `firebase.json` changes can trigger the one-shot deploy workflow when the main merge message contains `Activate production Real AI Coach`.
- Production Coach Activation run #3 `35013994128` SUCCESS on current main: Firebase service-account auth/project access PASS, existing `GARANG_LLM_API_KEY` preserved, `api(asia-northeast3)` successful update, deploy complete, public route preflight POST 401 / GET 405 with no pre-auth provider invocation or user-data read.
- Workflow authenticated live smoke remains `SKIPPED_NO_TOKEN`; do not store a static Firebase ID token just to make CI green.
- Required next evidence is one new logged-in production Coach request after PR #122 deploy. PASS requires live external response / `source: llm`; failure evidence should record only privacy-safe `code` and `providerStatus`.
- GARANG deterministic decision identity remains authoritative. LLM remains explanation/orchestration only and cannot mutate state directly.
- Repository/UI/automated Golden Path and production infrastructure/public security boundary are GREEN. Commercial production readiness remains separate and RED.
- Real-device validation remains PARTIAL GREEN: app load → onboarding → Today → first record → Coach plus pre-fix authenticated provider-path/fallback evidence are verified; post-fix external response and later plan/execution/persistence/Accumulation remain unverified.
- Nutrition corpus remains locked/reviewed at 500 foods = `232 verified / 3 approximate / 265 estimated / 0 unknown`.

## Main audit judgment
- No new P0/P1 application/Golden-Path blocker was found beyond the verified production `LLM_TIMEOUT`, which is now fixed/redeployed and awaiting real-user retest.
- P2 release integrity: PRODUCT and CONTROL main lack branch protection/rulesets; current PR+CI discipline is procedural only.
- P2 Functions supply chain: no `functions/package-lock.json`, deploy uses dynamic `npm install`, and Functions runtime dependencies are not separately audited by CI.
- P2 toolchain: root production audit is clean, but dev/deploy tooling audit contains high/critical findings; Actions v4 emit Node 20 deprecation warnings; Firebase CLI reports outdated `firebase-functions` with breaking-change risk.
- P2 credential lifecycle: current deploy relies on a long-lived service-account JSON. Plan GitHub OIDC / Google Workload Identity Federation plus least-privilege review after live AI stabilizes.
- LOW cost hygiene: Firebase build-image cleanup warning remains; do not manually delete cloud artifacts without explicit Founder approval.
- P6 repo hygiene: superseded old experiment/UI PRs remain open and should be closed rather than revived.
- No evidence supports another broad UI redesign now.

## Product quality judgment
- Today / Record / Coach / Progress remains the locked release IA baseline.
- Production Coach infrastructure is live behind correct authentication/method boundaries and now has more realistic timeout headroom without weakening local fallback.
- Deployment success is not equivalent to post-fix authenticated external-provider success; keep Real AI activation YELLOW until live `source: llm` evidence exists.

## Next recommended work
1. Repeat one logged-in production Coach request after the timeout fix; on failure capture only `code` and `providerStatus`, never tokens/API keys.
2. If it succeeds, verify a second deliberately different user where secure evidence is available, then close Production Real AI Coach activation.
3. Complete real iPhone Golden Path through plan → execution → persistence → Accumulation and target in-app browser.
4. Prepare Wanted AI Championship submission copy/demo evidence.
5. After P1 closes, execute P2 hardening as separate small changes: Functions lock+audit → main protection/rulesets → Actions/dependency modernization → OIDC/WIF deploy auth. Keep UI/features out of that scope.

## Handoff rule
Never turn old handoff text into VERIFIED evidence without observing the source. DONE requires implementation + acceptance + verification + regression consideration + material state synchronization.
