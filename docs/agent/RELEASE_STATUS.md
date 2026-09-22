# GARANG Release Status

Last updated: 2026-09-22

## Overall decision
- Production Real AI Coach + Autonomous Intelligence backend activation: GREEN / VERIFIED.
- End-to-end Coach action ownership: GREEN / VERIFIED in PR #176 exact-head Gate #1559 and merged to current main.
- Last VERIFIED application runtime/web baseline: `d926b12a35105c02e240e2c0e677432b53c99d76` via post-merge Gate #1650 + Pages #844; subsequent observed main commits are release/activation verification changes.
- Current observed PRODUCT main: `0eb2a11e117c50b208581e5987c45ed7515687de`.
- Current verified production Coach backend deployment revision: `08cfa18e725c919ce2893c3c042d20c5e38d15da`.
- Current source/web release: GREEN / VERIFIED. Literal source/backend SHA parity is not expected after frontend-only PR #188; no Firebase Functions code changed.

## Current PRODUCT release — Photo Evidence v1
Decision: GREEN / CURRENT MAIN VERIFIED.
- PRODUCT PR #188 merged as `40e83c32eac8fd7791ee1d6023d1458cc6e6d560`.
- Exact-head Release Gate #1599 / `35599456886`: SUCCESS on attempt 1.
- Post-merge Release Gate #1601 / `35601046564`: FULL GREEN on attempt 1.
- Pages #832 / `35601045094`: SUCCESS.
- Gate #1601 browser-webkit passes Today action flow, bottom Check-in CTA, mobile Planner shortcut, Today visual parity, Golden Path integration + complete journey, authenticated app/Coach, Real LLM Golden Path, recovery, WebKit mobile regression, Settings touch, button health and runtime stability stress.
- PR #188 changes browser/runtime Photo Evidence, manifest/entry wiring and tests only; no Functions code is changed and no production Function deployment is claimed.

## Personalized Intelligence Loop v1
Decision: SOURCE/WEB/PRODUCTION GREEN / VERIFIED.
- PRODUCT PR #186 head `da755b62726be55e5f96f23272d99129054bb45e`.
- Exact-head Release Gate #1591 / `35596002250`: FULL GREEN across core/build, Firestore emulator, Golden Path complete, authenticated Coach, Real LLM Golden Path and full WebKit/mobile regression.
- PR #186 merged as PRODUCT main `56ff9c788cac69b8106da66598ecbe4da35c0fcc`.
- Post-merge Release Gate #1592 / `35596512205`: FULL GREEN.
- Pages #829 / `35596510796`: SUCCESS.
- Intelligence Episode v1, User Response Model v1 and Recommendation Policy Evaluation v1 are merged.
- Response-derived personalization is confidence-gated and constraint-only; it cannot exceed deterministic Decision Intelligence or create automatic progression increases.
- Production Coach Activation #19 was correctly skipped before approval. Founder-approved Activation #20 deployed `1723a581...` but failed the bounded createPlan write smoke with `PLAN_TITLE_REQUIRED`; deterministic display-title fallback hardening followed. Activation #21 / `35599747682` on `08cfa18e...` then passed deployment, authenticated live LLM smoke, autonomous-write smoke, sensitive-write boundary checks and disposable identity cleanup.

## Production Coach
Decision: GREEN / LIVE PROVIDER + PERSONALIZED INTELLIGENCE VERIFIED.
- Production Coach Activation #21 / `35599747682`: SUCCESS on `08cfa18e725c919ce2893c3c042d20c5e38d15da`.
- Release Gate #1600 / `35599747696`: FULL GREEN.
- Pages #831 / `35599747250`: SUCCESS.
- Authenticated live Coach smoke: PASS.
- Authenticated bounded createPlan write smoke: PASS after deterministic title fallback hardening.
- Sensitive-write denial/confirmation boundary: PASS.
- Disposable Firebase smoke identity cleanup: PASS.
- Production Coach Activation run #13 / `35503623842`: SUCCESS on current commercial main.
- Firebase project: `fitfind-ai`; deployed Function: `api`.
- Existing `GARANG_LLM_API_KEY` was preserved.
- Authenticated disposable-user live smoke: PASS.
- Response evidence: `source=llm`, provider `openai`, model `gpt-5.6-luna`, alignment verified.
- Disposable smoke identity deletion: PASS.
- Release Gate #1529 / `35503623868`: FULL GREEN.
- Pages #817 / `35503623353`: SUCCESS.

## Current commercial PRODUCT main
Decision: GREEN / CURRENT MAIN VERIFIED.
- Main: `40e83c32eac8fd7791ee1d6023d1458cc6e6d560`.
- PR #188 exact-head Gate #1599 / `35599456886`: PASS on attempt 1.
- Post-merge Gate #1601 / `35601046564`: FULL GREEN on attempt 1.
- Pages #832 / `35601045094`: SUCCESS.
- Production Coach backend remains VERIFIED on Activation #21 revision `08cfa18e725c919ce2893c3c042d20c5e38d15da`; PR #188 has no Functions delta.

## Autonomous Intelligence Loop v1
Decision: PRODUCTION GREEN / VERIFIED.
- PRODUCT PR #166 introduced the bounded loop; structured-response/write hardening is included in current main `c4da00002dbce7489593a2097dc82dc4da5b8ba4`.
- Production Coach Activation #18 / `35511759697`: SUCCESS.
- Authenticated live Coach smoke: PASS with `source=llm`, provider `openai`, model `gpt-5.6-luna`, GARANG alignment verified.
- Authenticated autonomous-write smoke: PASS; bounded `createPlan` executed and persisted, sensitive-write path remained denied/confirmation-gated, disposable account cleanup passed.
- Pages #822 / `35511758482`: SUCCESS.
- Release Gate #1543 / `35511759634` attempt 3: FULL GREEN.
- Attempts 1–2 failed distinct WebKit lifecycle/timing waits on the identical SHA; this remains release-integrity debt despite final GREEN.
- Raw database authority and destructive/bulk/account/security/schema/secret/billing/production actions remain unavailable to the LLM.

## Coach write ownership unification
Decision: SOURCE/CI GREEN / MERGED.
- PRODUCT PR #176 merged as `0a07c4c5bd19397f43bfe9eaedd20c524f7620da`.
- Exact-head Release Gate #1559 / `35580756829`: FULL GREEN.
- Online authenticated LLM messages preserve bounded server action metadata and suppress browser mock proposal regeneration.
- Explicit local/offline fallback preserves the previous confirmation-first browser proposal path.
- Gate #1558 on an earlier same task head failed a known WebKit lifecycle/proposal readiness path; #1559 passed after the complete Golden Path fixture was made explicit about local fallback.
- No production Function deployment was performed in this change.

## WebKit lifecycle determinism
Decision: CURRENT RELEASE GREEN / MONITOR.
- PRODUCT PR #177 exact head `137b3e55af5eb5e5dcdbda15bf9c78d19a1c251f`; exact-head Gate #1562 / `35582093879` passed, including a successful same-SHA rerun.
- Immediate post-merge main Gate #1563 / `35583816682` later failed the Today action-flow DOM identity assertion once: no-op lifecycle events replaced both the Today flow and active button node.
- The current path has since stabilized across three later main gates: #1592 on `56ff9c78...`, #1600 on `08cfa18e...`, and #1601 on current main `40e83c32...`; all three completed GREEN on attempt 1.
- Latest Gate #1601 explicitly passes Today action flow plus the complete Golden Path / authenticated Coach / Real LLM / mobile WebKit suite.
- No current release blocker remains. Reopen TD-015 as P2 if the identity assertion or equivalent lifecycle replacement recurs; do not mask recurrence with broad retries or timeout inflation.

## User Performance Model release state
- Evidence-aware UPM v1: merged.
- Recovery/check-in legacy fallback defect: fixed.
- Recommendation resolution evidence persistence: merged.
- Confidence-gated read-only UPM context: merged.
- Coach consumes confidence-gated UPM context while Decision Intelligence retains ownership.
- Outcome-attributed score from fully linked recommendation → execution → outcome cycles: merged in PR #164.
- Browser/main deployment includes #164 via Pages #816.
- Production server context includes the #164 server-side attribution changes and authenticated live smoke is VERIFIED.

## Coach UX repair
- PR #158 classifies gateway failures instead of exposing one generic external-AI failure.
- PR #159 keeps `collect_data` responses useful and conversational while preserving conservative confidence boundaries.
- PR #160 makes authenticated live LLM smoke mandatory inside production activation.
- PR #161 supplies confidence-gated UPM context to Coach without state mutation or LLM decision ownership.

## Competition channel
Competition derivatives remain separate release channels. Founder-reported Wanted / 롯데 / 브로제이 submission completion stays RECORDED unless submission artifacts are independently re-opened.

## Release gate
Automated source/web gate status: GREEN on current main `40e83c32...`; production Coach backend remains VERIFIED GREEN on activated revision `08cfa18e...`.
Product-action confidence: GREEN for the server/browser single-owner contract on merged source. Production backend is activated and verified on current main `08cfa18e...`.
Release confidence note: TD-015 is monitor-only, not a current blocker. Historical main Gate #1563 reproduced the lifecycle assertion once after PR #177, but subsequent main Gates #1592, #1600 and #1601 all passed on attempt 1; latest #1601 covers the full browser gate.
- Provider connectivity: PASS.
- Production authenticated live smoke: PASS.
- Previous exact production revision gate: PASS.
- Current main Pages deployment: PASS.
- Current main Release Gate #1601 attempt 1: PASS.
- Current main Pages #832: PASS.
- Production Coach Activation #21 on `08cfa18e...`: PASS, including authenticated live LLM + bounded createPlan write smoke, sensitive-write boundary and cleanup.
- Current source/web main contains no newer Functions change than the activated backend revision.

## Remaining non-blocking debt
- Server-enforced main branch protection.
- Long-lived Firebase deployment credential → OIDC/WIF.
- Firebase Functions dependency-family upgrade.
- Firebase build-image cleanup/cost hygiene.
- Active runtime ownership simplification where duplicate owners are VERIFIED.

## Photo Evidence v1.5 — 2026-09-22
Decision: MERGED / CURRENT MAIN GREEN.
- PRODUCT PR #202 merged as `a60bf56c2a2f69a0eed138c22ee45c5f4bf76082`.
- Post-merge Release Gate #1625 / `35691173610`: FULL GREEN.
- Pages #837 / `35691172814`: SUCCESS.
- Founder OS Event Envelope #1407: SUCCESS.
- Photo Evidence remains optional and device-local; no cloud photo sync, new social surface, or automatic AI mutation was introduced.
- During verification, legacy workout certification polish was found repeatedly rewriting the new Evidence card; the runtime now skips `.photo-evidence-card`, and the design contract covers the boundary.
- TD-015 is active P2 again because Gate #1624 first attempt reproduced the Today DOM identity assertion. Exact-head rerun and post-merge Gate #1625 are GREEN, so it is not a current release blocker.

## Real Meal Scan v1 — 2026-09-22
Decision: SOURCE/WEB GREEN / LIVE VISION SMOKE PENDING.
- Current PRODUCT main: `d926b12a35105c02e240e2c0e677432b53c99d76`.
- Real Meal Scan backend/client source is merged. Vision returns food identity/aliases/grams/confidence only; GARANG Food DB calculates nutrition; user confirmation precedes the existing save path.
- Production Coach Activation #24 / `35707420848` successfully deployed Function `api` from `8ee4f2c...`, which contains the Meal Scan route. That activation did not execute the Meal Scan Vision smoke, so authenticated live provider execution remains UNKNOWN.
- PR #209 Gate #1644: FULL GREEN including Real Meal Scan WebKit flow.
- PR #210 fixed a separate Workout async hydration mutation burst without changing Meal Scan.
- Post-merge current-main Gate #1650 / `35715201276`: FULL GREEN.
- Pages #844 / `35715200771`: SUCCESS.
- Release confidence: GREEN for source/web behavior; YELLOW only for the unverified authenticated live Vision provider call.

## Real Meal Scan live production verification — latest 2026-09-22
Decision: SOURCE/WEB GREEN; PRODUCTION LIVE VISION YELLOW / APPROVAL-GATED.
- Current observed PRODUCT main: `0eb2a11e117c50b208581e5987c45ed7515687de`.
- PR #212 exact-head Gate #1653 / `35716733566`: SUCCESS before merge. PR #212 adds mandatory authenticated production Meal Scan live-smoke enforcement.
- PRODUCT PR #213 is open at `5f5ad45a56cf976e244b8fe8bacd7e6acaabd142`; its only changed file is `scripts/verify-production-meal-scan.cjs`.
- PR #213 exact-head Release Gate #1655 / `35717702324`: FULL GREEN; all release jobs passed, including Real Meal Scan browser flow.
- The PR metadata states Activation #26 reached the live provider but the old 1×1 PNG smoke fixture received `502 MEAL_SCAN_PROVIDER_ERROR`; PR #213 replaces that fixture with a valid 128×128 RGB PNG.
- Do not claim live Meal Scan provider execution VERIFIED until the Founder approves the production-triggering merge and the resulting activation smoke succeeds with cleanup.
