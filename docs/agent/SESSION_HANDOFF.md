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
- PR #102 final head `948806883ed47f7371ca20037752bad3aca880eb` passed full pre-merge Release Gate #1217. PR #102 was squash merged without bypassing the gate.
- PRODUCT post-merge Release Gate #1218 on exact main `451f563...` is GREEN across staging contract, core/build/security/Firebase/Firestore, complete WebKit Golden Path, authenticated Coach, Real LLM, recovery, Settings/mobile regressions, button health, runtime stability stress and final verify.
- PRODUCT Founder OS Event Envelope #470 on PR head and #473 on exact main completed successfully.
- Firebase Staging Gate v1 is fail-closed: staging project ID is mandatory; `fitfind-ai` is rejected as staging; generated deploy/secret commands require explicit staging `--project`; staging Coach smoke enforces the exact derived staging endpoint.
- `npm run staging:preflight` and `npm run smoke:coach:staging` are now canonical staging repository paths. `GARANG_LLM_API_KEY` remains Secret Manager-owned; no secret value was committed.
- `.firebaserc` remains pointed at production `fitfind-ai`; staging tooling deliberately does not rely on that default project.
- No dedicated staging Firebase project creation, secret insertion, Functions/Firestore deployment, staging Auth user creation or authenticated staging smoke has yet been VERIFIED. These are external execution steps and secret/deploy actions require explicit Founder approval plus authorized Firebase credentials.
- Browser account export/delete/analytics/telemetry endpoints remain intentionally inactive/null until external staging smoke is GREEN.
- Deterministic GARANG Decision Intelligence remains the judgment owner. LLM output is explanation-only and cannot mutate state directly.
- Outcome Learning v2 remains bounded/read-only and cannot generate automatic progression increases.
- Real-device target iPhone/in-app-browser Golden Path validation remains outstanding.
- Live production Real LLM activation remains UNKNOWN until production environment evidence is verified.
- Commercial-production readiness remains separate and RED until staging/security, real-device, payment/entitlement, monitoring and legal/privacy/retention gates are completed.
- PRODUCT main branch governance hardening remains a separate deliberate Founder decision.

## Next recommended work
1. Create or identify a dedicated Firebase staging project that is not `fitfind-ai`; provide only its project ID, never the LLM secret value in chat/source control.
2. Run `GARANG_FIREBASE_STAGING_PROJECT_ID=<id> npm run staging:preflight` and confirm the generated explicit-project commands.
3. After explicit Founder approval and with authorized Firebase credentials, set `GARANG_LLM_API_KEY` in staging Secret Manager, deploy `functions:api` plus Firestore rules/indexes to the staging project, create disposable staging Auth users and run `npm run smoke:coach:staging`.
4. Once staging Coach is GREEN, validate account export/delete plus consent OFF/ON analytics and privacy-safe error telemetry before activating any staging browser endpoints.
5. Independently run the deployed Golden Path on target real iPhone/Safari and in-app browser and record device evidence.

## Handoff rule
Never turn old handoff text into VERIFIED evidence without observing the source. DONE requires implementation + acceptance + verification + regression consideration + material state synchronization.
