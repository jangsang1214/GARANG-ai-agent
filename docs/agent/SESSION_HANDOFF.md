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
- Commercialization Stage 1, Core Intelligence Stage 2, Real LLM/Outcome Learning hardening, Server Readiness Stage 0 and Firebase Staging Gate v1 are complete and GREEN at repository/CI level.
- PRODUCT current verified main: `451f5639bbee65c8f5659e150c0949d0b9bf24d5` from PR #102 `Add fail-closed Firebase staging gate`.
- PRODUCT post-merge Release Gate #1218 on exact main `451f563...` is GREEN across staging contract, core/build/security/Firebase/Firestore, complete WebKit Golden Path, authenticated Coach, Real LLM, recovery, Settings/mobile regressions, button health, runtime stability stress and final verify.
- Firebase staging project `garang-staging` has now been created and funded on Blaze with Firestore `(default)`, email/password Auth, a registered web app, and a dedicated staging OpenAI API project/key stored through Firebase Secret Manager as `GARANG_LLM_API_KEY`.
- Founder-run `GARANG_FIREBASE_STAGING_PROJECT_ID=garang-staging npm run staging:preflight` returned `READY_FOR_EXTERNAL_STAGING_SETUP` and kept production `fitfind-ai` isolated.
- Firestore rules/indexes deployed successfully to `garang-staging`.
- Functions `api` deployed successfully to `garang-staging` after installing `functions` dependencies. The deployed route responds and enforces POST-only behavior.
- First authenticated Coach smoke reached OpenAI and failed with providerStatus 429; after OpenAI API credit was added, a direct authenticated curl smoke passed with `status: PASS`, `source: llm`, `provider: openai`, `model: gpt-5.6-luna`, `decisionMode: collect_data`, and `alignmentVerified: true`.
- Codespaces Node `fetch` currently has a transport issue to the deployed Cloud Functions host (`ETIMEDOUT` IPv4 plus IPv6 `ENETUNREACH`) while curl succeeds to the same endpoint. Treat this as an execution-environment issue, not a staging server failure.
- Browser account export/delete/analytics/telemetry endpoints remain intentionally inactive/null. Full staging server validation is not complete until export, consent OFF/ON telemetry, privacy-safe error telemetry, and destructive account deletion on a disposable test user are checked.
- Deterministic GARANG Decision Intelligence remains the judgment owner. LLM output is explanation-only and cannot mutate state directly.
- Outcome Learning v2 remains bounded/read-only and cannot generate automatic progression increases.
- Real-device target iPhone/in-app-browser Golden Path validation remains outstanding.
- Live production Real LLM activation remains UNKNOWN until production environment evidence is verified.
- Commercial-production readiness remains separate and RED until remaining staging/security, real-device, payment/entitlement, monitoring and legal/privacy/retention gates are completed.

## Next recommended work
1. Validate staging `GET /account/export` with the existing authenticated staging test user.
2. Validate telemetry with analytics consent OFF then ON, including privacy-safe error telemetry.
3. Create/use a disposable staging Auth user and validate `/account/delete` last because it is destructive and requires recent-login behavior.
4. Independently run the deployed Golden Path on target real iPhone/Safari and in-app browser and record device evidence.
5. Keep any production endpoint activation or production Functions deployment as a separate explicit Founder decision.

## Handoff rule
Never turn old handoff text into VERIFIED evidence without observing the source. DONE requires implementation + acceptance + verification + regression consideration + material state synchronization.
