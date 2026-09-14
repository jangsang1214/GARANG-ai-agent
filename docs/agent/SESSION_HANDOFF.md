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
- PRODUCT current verified main is `419e947aaeec3f74e3c79b86a68362915b0c88d2` from PR #103 `Activate privileged browser endpoints only in verified Firebase staging`.
- PR #103 pre-merge Release Gate #1220 and Event #478 were GREEN. Exact post-merge main passed Release Gate #1221 through final verify, Founder OS Event #480, and GitHub Pages deployment #770.
- PR #103 changes browser service routing to derive from `GARANG_FIREBASE_CONFIG.projectId`. Only exact `garang-staging` enables account export/delete, analytics and telemetry endpoints; production `fitfind-ai` keeps them null/fail-closed.
- Current committed `07_config/firebase-config.js` still targets production `fitfind-ai`; therefore the current GitHub Pages client does not activate privileged production endpoints and is not a deployed staging browser client.
- Firebase staging project `garang-staging` is GREEN for full server-path validation: Firestore/Functions deployment, authenticated Real LLM Coach, account export, analytics consent OFF/ON, privacy-safe error telemetry, and disposable account deletion.
- Functions deployment is VERIFIED; a separate `npm test --prefix functions` output was not directly captured and must not be promoted to VERIFIED.
- Disposable delete endpoint and subsequent Auth deletion passed. An additional Firestore REST post-read returned HTTP 401 because the ad-hoc admin token was invalid; keep that auxiliary check INCONCLUSIVE rather than treating it as either PASS or deletion failure.
- Codespaces Node `fetch` experienced ETIMEDOUT/IPv6 ENETUNREACH while curl to the same staging Cloud Function succeeded; treat it as an execution-environment issue.
- Founder-run real-device validation has started on a real iPhone using Chrome on iOS. VERIFIED path: deployed app opens -> onboarding opens/completes -> Today renders -> first record completes -> Coach interpretation/feedback appears and behaves normally.
- Do not promote the full real-device task to DONE yet: plan -> execution -> persistence -> Accumulation and a target in-app browser remain directly unverified.
- GARANG deterministic Decision Intelligence remains the judgment owner; LLM output remains explanation/orchestration only and cannot mutate state directly.
- Outcome Learning remains bounded/read-only with no automatic progression increase.
- Live production Real LLM activation remains UNKNOWN.
- Commercial-production readiness remains RED until full real-device, payment/entitlement, monitoring, production provider/endpoints and legal/privacy/retention gates are completed.

## Next recommended work
1. Continue the same iPhone journey from Coach through plan -> execution -> persistence -> Accumulation and capture only pass/fail evidence.
2. Repeat the Golden Path in the target in-app browser.
3. If end-to-end staging browser validation is needed, create a separate staging browser config/deployment targeting `garang-staging`; do not replace committed production Firebase config.
4. Keep production privileged endpoint activation, production Functions deployment and commercial release as separate explicit Founder decisions.

## Handoff rule
Never turn old handoff text into VERIFIED evidence without observing the source. DONE requires implementation + acceptance + verification + regression consideration + material state synchronization.
