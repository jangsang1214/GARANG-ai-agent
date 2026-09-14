# GARANG Project State

Last updated: 2026-09-15

## Current objective
Protect the verified Golden Path while moving from repository/server readiness into real-device validation. The isolated Firebase staging server path is GREEN, and PRODUCT now contains a fail-closed browser service boundary that exposes privileged account/telemetry endpoints only when the loaded Firebase browser config identifies the exact staging project `garang-staging`. Production `fitfind-ai` remains disabled for those privileged routes. Real-device validation has now started with a Founder-run iPhone Chrome pass through app load, onboarding, Today, first record and Coach; deeper plan/execution/persistence/Accumulation and target in-app-browser evidence remain unresolved.

## Repository observations
- CONTROL: `jangsang1214/GARANG-ai-agent`; Founder OS v7-lite remains the control plane.
- PRODUCT: `jangsang1214/-fitmind-ai`; current verified main is `419e947aaeec3f74e3c79b86a68362915b0c88d2` from PR #103 `Activate privileged browser endpoints only in verified Firebase staging`.
- PRODUCT PR #103 pre-merge Release Gate #1220: GREEN; Founder OS Event #478: GREEN.
- PRODUCT exact post-merge main `419e947...`: Release Gate #1221 GREEN through core/build/security/Firebase/Firestore, WebKit Golden Path, authenticated Coach, Real LLM, recovery, mobile regressions, runtime stability and final verify; Event #480 GREEN; GitHub Pages deployment #770 GREEN.
- Prior baselines remain preserved: Server Readiness Stage 0 PR #101 (`b2ddbf4e...`) and Firebase Staging Gate v1 PR #102 (`451f5639...`) were fully GREEN before PR #103.

## Real-device evidence
- Founder opened the deployed GitHub Pages app on a real iPhone using Chrome on iOS and confirmed the GARANG start/login surface rendered normally.
- Founder entered onboarding successfully and reached Today without reporting navigation or rendering failure.
- Founder completed a first record and confirmed the Coach interpretation/feedback surface appeared and the exercised flow behaved normally.
- This is VERIFIED only for the exercised iPhone Chrome path above. The full acceptance path through plan -> execution -> persistence -> Accumulation, plus a target in-app browser, remains outstanding.

## Firebase staging evidence
- Dedicated staging project: `garang-staging`; production project: `fitfind-ai`.
- Staging preflight returned `READY_FOR_EXTERNAL_STAGING_SETUP` and rejected production as a staging target.
- Firestore rules/indexes and Functions `api` deployed successfully to staging. Functions deployment is VERIFIED; a separate `npm test --prefix functions` output was not directly captured and is not independently VERIFIED.
- Authenticated Real LLM Coach smoke: PASS with `source: llm`, provider `openai`, model `gpt-5.6-luna`, deterministic `decisionMode: collect_data`, and `alignmentVerified: true`.
- Account export: PASS (`garang-user-export-v1`, `garang-state-v1`, schema 8; state/privacy/serverData present).
- Analytics consent OFF: HTTP 202, `accepted:false`, `CONSENT_REQUIRED`.
- Analytics consent ON: HTTP 202, `accepted:true`, `count:1` after exact root consent was set.
- Error telemetry privacy smoke: PASS; injected fake email/message/stack/token values were filtered.
- Disposable account delete: live endpoint PASS after creating Auth + Firestore root + `app/state` test data; subsequent sign-in confirmed Auth deletion. The deployed handler awaits server-side Firestore deletion before Auth deletion and success response. A later auxiliary Firestore REST post-read returned 401 because its ad-hoc admin token was invalid; that auxiliary check is INCONCLUSIVE, not a product failure.
- Codespaces Node `fetch` showed ETIMEDOUT/IPv6 ENETUNREACH while curl to the same staging endpoint succeeded; treat this as an execution-environment transport issue.

## Staging browser activation boundary
- PR #103 derives `apiBase` from `window.GARANG_FIREBASE_CONFIG.projectId`.
- Only exact `projectId === 'garang-staging'` exposes `/account/export`, `/account/delete`, `/analytics/events`, and `/telemetry/errors` to browser code.
- With production `projectId === 'fitfind-ai'`, all four privileged endpoints remain `null`/fail-closed.
- Coach continues to derive from the active Firebase project ID, preserving production behavior while allowing a staging-configured browser to route to staging.
- Consent suppression, analytics allowlisting, privacy-safe error filtering, authenticated transport, recent-login deletion, client fallback ownership, and deterministic GARANG decision ownership are preserved by tests and full Release Gate.
- The committed `07_config/firebase-config.js` still targets production `fitfind-ai`. Therefore the current GitHub Pages deployment does NOT activate privileged production endpoints and is not evidence of an actually deployed staging browser client. A separate staging browser config/deployment is still needed for live browser-path staging verification.

## Stable
- Golden Path remains Goal/Plan -> Action/Record -> Interpretation -> Feedback -> Next Action, with user confirmation before behavior-changing mutations.
- GARANG deterministic Decision Intelligence owns judgment; the LLM remains explanation/orchestration only.
- Outcome Learning remains bounded/read-only and cannot create automatic progression increases.
- Firebase Auth + Firestore remain the user-data foundation; canonical app write ownership is unchanged.
- `GARANG_LLM_API_KEY` remains Secret Manager-owned; no provider secret is stored in browser/source control.
- Production privileged endpoint activation, production Functions deployment, payments and commercial release remain separate Founder decisions.

## In progress / unknowns
- P1 real-device Golden Path validation is IN PROGRESS: iPhone Chrome load/onboarding/Today/first-record/Coach is GREEN; plan/execution/persistence/Accumulation and target in-app browser remain outstanding.
- A separately configured/deployed staging browser client using `garang-staging` has not yet been VERIFIED; PR #103 provides the safe activation mechanism, not that deployment.
- Live production Real LLM environment evidence remains UNKNOWN.
- Commercial-production readiness remains RED pending full real-device completion, payment/entitlement, monitoring, legal/privacy/retention and production gates.
- PRODUCT main branch governance hardening remains a separate deliberate Founder decision.

## Next priorities
1. P1 — Continue the same real iPhone journey from Coach through plan -> execution -> persistence -> Accumulation and verify no critical mobile/runtime failure.
2. P1 — Repeat the Golden Path in the target in-app browser and capture only pass/fail evidence.
3. P2 — If browser-path staging verification is still required, create a separate staging browser config/deployment without replacing committed production Firebase config, then exercise export/delete/telemetry through the real browser surface.
4. Keep production Real LLM/privileged endpoint activation and commercial hardening as separate explicit Founder decisions.
