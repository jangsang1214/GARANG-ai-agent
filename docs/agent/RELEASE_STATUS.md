# GARANG Release Status

## Body Model v4 visual acceptance correction / v5 remediation — 2026-09-25
Decision: CURRENT RELEASE TECHNICALLY GREEN / BODY REALISM ACCEPTANCE YELLOW.
- PRODUCT current main remains `0da445691dc7c4107f6491d45461450f465327ed`; Gate #1967 and Pages #879 remain valid GREEN release evidence.
- Founder real-device screenshot review shows Body Model v4 does NOT meet the explicit anatomy reference minimum. This is a product/design acceptance failure, not a CI/runtime failure.
- Released v4 FRONT/SIDE/BACK switching and muscle interaction remain VERIFIED functional.
- Released v4 human proportions, anatomical realism and reference-minimum visual quality are NOT ACCEPTED.
- Replacement PRODUCT PR #261 is OPEN. Exact-head Release Gate #1972 is running.
- Do not mark Body realism GREEN until #261 (or successor) is merged/deployed and a new real-device screenshot is visually accepted.


## Essential-first UX + Body Model v4 — PR #259 — 2026-09-24
Decision: GREEN / MERGED / WEB DEPLOYED / CURRENT MAIN VERIFIED.
- PRODUCT PR #259 merged as current main `0da445691dc7c4107f6491d45461450f465327ed`.
- Exact head `7f51725416acc441d94ce7b2307d583e18b84fa3`: Release Gate #1951 / `36020573110` FULL GREEN.
- Post-merge Release Gate #1967 / `36022832225`: FULL GREEN; `core-build-rules`, `browser-webkit`, and final `verify` all SUCCESS.
- Pages #879 / `36022831829`: `build`, `report-build-status`, and `deploy` all SUCCESS.
- Live asset fetch verified deployed `garang-polish-v3.js?v=4.0.0-body-v4`, `garang-experience-v4.js?v=1.7.0-essential-first`, and `garang-workout-execution-v2.js?v=2.3.0-simplicity`.
- Verified browser scope includes Simplified Shell, Nutrition recommendation, Real Meal Scan, truth/first-record, Golden Path integration, Golden Path complete journey, authenticated app/Coach, Real LLM, recovery, WebKit mobile regression, Settings touch, button health, and runtime stability stress.
- Workout essential path is exercise + weight + reps + completion; advanced workout inputs remain available through progressive disclosure.
- Body Model v4 is FRONT / SIDE / BACK with dedicated side geometry; interactive muscle selection and male/female variants remain intact.
- No Firebase Functions production activation was required or performed for PR #259.


## Current-main reconciliation — PR #256/#257 — 2026-09-24
Decision: GREEN / CURRENT MAIN SOURCE+WEB VERIFIED.
- Current PRODUCT main: `0dafa0aab536548b1b80964d108228ee819155c6`.
- PR #256 exact head `a60f4369...`: Release Gate #1921 / `35973077815` FULL GREEN.
- PR #257 exact head `dbcbf617...`: Release Gate #1924 / `35976213135` FULL GREEN; core-build-rules, browser-webkit and verify all SUCCESS.
- PR #257 squash merge succeeded as `0dafa0aa...`.
- No Firebase Functions production activation is required by the #256/#257 changed-file scopes.
- Post-merge Release Gate #1925 / `35981031534`: FULL GREEN; `core-build-rules`, `browser-webkit`, and `verify` all SUCCESS.
- Pages #877 / `35981030735`: `build`, `report-build-status`, and `deploy` all SUCCESS.
- Korean official supplemental corpus data remains ungenerated because `DATA_GO_KR_SERVICE_KEY` is absent; verified local Food DB coverage remains 6,221 rows.

## Engineering P2 release-integrity / WIF readiness — 2026-09-24
Decision: CURRENT PRODUCT RELEASE GREEN / WIF INFRA BLOCKED.
- PRODUCT PR #255 merged as current main `8e6733cf4878484b23fe75765b01988b8b0b4794`.
- PR #255 exact-head Gate #1910: FULL GREEN.
- Pages #875 / `35970284935`: SUCCESS.
- Main Gate #1912 attempt 1: core/build SUCCESS, browser-webkit FAILURE only at complete Golden Path Coach proposal readiness timeout.
- Same-SHA Gate #1912 attempt 2: FULL GREEN; final verify SUCCESS. No test threshold or timeout was weakened.
- Production WIF Readiness #2 / `35969503578`: SUCCESS, status `NOT_CONFIGURED`; both repository WIF variables are absent.
- Founder-approved one-time WIF provisioning run `35970823847`: FAILED safely at `iam.workloadIdentityPools.create` using the existing Firebase deploy service account. No WIF resource or service-account key was created.
- Production Coach backend remains VERIFIED on Activation #39 revision `788aa81135fe996d28e29beaa4c578541ee77453`; PR #255 has no Functions runtime delta.

## Workout commercial UX v4 — PR #253
Decision: GREEN / MERGED / WEB DEPLOYED / CURRENT MAIN VERIFIED.
- PRODUCT PR #253 merged to `main` as `fc06d2b39c328fafa2c3755a54210163e3873744`.
- Exact-head Release Gate #1899 / `35966021302`: FULL GREEN.
- Post-merge Release Gate #1900 / `35967056029`: FULL GREEN; core/build, Firestore, Commercial Core, WebKit/Golden Path, authenticated Coach/Real LLM paths, mobile regression, button health, runtime stability and final verify all passed.
- Pages deployment `35967055339`: SUCCESS for the same main SHA.
- Live deployed assets were fetched and verified after deployment.
- Scope is frontend/runtime/test only; no Firebase Function production activation was required or performed.

Last updated: 2026-09-24

## Overall decision
- Production Real AI Coach + Autonomous Intelligence backend activation: GREEN / VERIFIED.
- End-to-end Coach action ownership: GREEN / VERIFIED in PR #176 exact-head Gate #1559 and merged to current main.
- Last VERIFIED application runtime/web baseline: `0da445691dc7c4107f6491d45461450f465327ed` via post-merge Gate #1967 / `36022832225` + Pages #879 / `36022831829`.
- Current observed PRODUCT main: `0da445691dc7c4107f6491d45461450f465327ed`.
- Current verified production Coach backend deployment revision: `788aa81135fe996d28e29beaa4c578541ee77453` via Production Coach Activation #39 / `35944749134`.
- Current source/web release: GREEN / VERIFIED on `0da445691dc7c4107f6491d45461450f465327ed` after Gate #1967 and Pages #879. Source/backend SHA parity is tracked separately; later Functions deltas require explicit activation evidence before being called production-live. Source/backend SHA parity is tracked separately; later Functions deltas require explicit activation evidence before being called production-live.

## Current PRODUCT release — Photo Evidence v1
Decision: GREEN / CURRENT MAIN VERIFIED.
- PRODUCT PR #188 merged as `40e83c32eac8fd7791ee1d6023d1458cc6e6d560`.
- Exact-head Release Gate #1599 / `35599456886`: SUCCESS on attempt 1.
- Post-merge Release Gate #1601 / `35601046564`: FULL GREEN on attempt 1.
- Pages #832 / `35601045094`: SUCCESS.
- Gate #1601 browser-webkit passes Today action flow, bottom Check-in CTA, mobile Planner shortcut, Today visual parity, Golden Path integration + complete journey, authenticated app/Coach, Real LLM Golden Path, recovery, WebKit mobile regression, Settings touch, button health and runtime stability stress.
- PR #188 changes browser/runtime Photo Evidence, manifest/entry wiring and tests only; no Functions code is changed and no production Function deployment is claimed.

## Personalized Response Learning v2
Decision: SOURCE/CI GREEN / MERGED / PRODUCTION BACKEND VERIFIED VIA LATER DESCENDANT ACTIVATION.
- PRODUCT PR #236 exact head `56c4875a80378a74da33768cc4d23760e49bf155`.
- Exact-head Release Gate #1795 / `35906532826`: FULL GREEN, including Commercial Core, Firestore emulator, Golden Path, authenticated Coach/Real LLM browser paths, WebKit/mobile regression and final verify.
- PR #236 merged as `9c22843eb81d8397c4cfda3fc7294a632eecadf0`.
- Pages #859 / `35907286397`: SUCCESS.
- Post-merge Gate #1797 was cancelled by a newer main push from workout UI PR #235; no failing step was recorded.
- PR #236 remained in the main lineage through later releases; current main `fc06d2b...` is FULL GREEN via Gate #1900 and Pages #874.
- Production Coach Activation #33 was SKIPPED at merge time as designed. Later Production Coach Activation #39 / `35944749134` on descendant main `788aa811...` succeeded, so PR #236 server-side Agent Context/Coach changes are included in the verified production backend lineage.
- New intelligence contracts remain constraint/shadow-first: no autonomous progression increase, no automatic nutrition-target mutation, no causal/counterfactual effectiveness claim.

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
- Main: `8e6733cf4878484b23fe75765b01988b8b0b4794`.
- PR #255 exact-head Gate #1910: FULL GREEN.
- Post-merge Gate #1912 / `35970286558`: attempt 1 browser-only nondeterministic readiness failure; attempt 2 FULL GREEN on the identical SHA.
- Pages #875 / `35970284935`: SUCCESS on the same main SHA.
- PR #255 changes WIF readiness workflow/test contracts only; commercial workout/runtime behavior from PR #253 remains preserved.
- Production Coach backend remains separately VERIFIED on Activation #39 revision `788aa81135fe996d28e29beaa4c578541ee77453`.

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
- The path subsequently stabilized across multiple later release lines, including #1592, #1600 and #1601.
- Latest current-main Gate #1900 / `35967056029` passes the complete browser/WebKit, Golden Path, authenticated Coach/Real LLM and runtime-stability gate on attempt 1.
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
Automated source/web gate status: GREEN on current main `8e6733cf...` via Gate #1912 attempt 2; production Coach backend remains VERIFIED GREEN on activated revision `788aa811...` via Activation #39.
Product-action confidence: GREEN for the server/browser single-owner contract on merged source; production backend evidence is tracked independently from newer source/web commits.
Release confidence note: TD-015 is monitor-only, not a current blocker. Historical lifecycle recurrence remains regression-covered; latest Gate #1900 passed the full browser/WebKit and runtime-stability gate on attempt 1.
- Provider connectivity: PASS on the latest verified production activation lineage.
- Production authenticated live smoke: PASS on Activation #39.
- Current main Pages deployment: PASS via Pages #875 / `35970284935`.
- Current main Release Gate #1912 / `35970286558`: PASS on attempt 2 after one nondeterministic browser readiness recurrence.
- Current source/web main: `8e6733cf4878484b23fe75765b01988b8b0b4794`.
- Current verified production backend revision: `788aa81135fe996d28e29beaa4c578541ee77453`.

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

## Real Meal Scan production closure — Activation #27
Decision: SOURCE / WEB / PRODUCTION GREEN / VERIFIED.
- PRODUCT main: `5f630b6ec3ed8b757a9eb6bde52d5fff50887056`.
- Production Coach Activation #27 / `35721577034`: SUCCESS.
- Deploy scope: Firebase Function `api` only.
- Existing GARANG LLM secret preserved.
- Public Coach + Meal Scan auth/method boundaries: PASS.
- Authenticated live Meal Scan Vision smoke: PASS (`visionBoundary=live`).
- Authenticated live Coach smoke: PASS; provider `openai`, model `gpt-5.6-luna`.
- Authenticated bounded write smoke: PASS.
- Sensitive-write boundary: PASS (`SENSITIVE_MEMORY_KEY_BLOCKED`).
- Disposable smoke identity cleanup: PASS / deleted.
- Release Gate #1659 / `35721577131`: FULL GREEN.
- Pages #848 / `35721576625`: SUCCESS.
- Remaining deployment-auth note: WIF auth step was skipped; current ADC/service-account deployment path remains functional, while WIF migration stays non-blocking P2 debt.

## External Validation Measurement Readiness — production closure
Decision: GREEN / CURRENT MAIN VERIFIED.
- PRODUCT PR #217 merged as `0f15adbbde19b87efec31b85f3cd43599f6164fa`.
- Exact-head Gate #1675 / `35726479828`: FULL GREEN.
- Post-merge Gate #1676 / `35727541902`: FULL GREEN.
- Pages #849 / `35727541068`: SUCCESS.
- Founder OS Event Envelope #1525 / `35727542003`: SUCCESS.
- Current release includes explicit analytics consent control, excludes analytics/error logs from generic Cloud Sync, emits one-time first-record measurement, and gives no-food Meal Scan a non-saving retry UX.
- External user validation can now start on a consent-safe, funnel-measurable web baseline.

## 2026-09-23 PR #225 commercial polish release
Decision: WEB GREEN / BACKEND NUTRITION FALLBACK ACTIVATION PENDING.
- PRODUCT main: `e84e012c3e0a0269634637c85d62bf0d19b0ece9`.
- PR #225: MERGED.
- Post-merge Release Gate #1756 / `35833873560`: FULL GREEN.
- Pages #851 / `35833872591`: SUCCESS.
- Event Envelope #1691 / `35833873735`: SUCCESS.
- Production Coach Activation #28 / `35833873751`: SKIPPED by the explicit activation-phrase guard.
- Workout Execution UI v2 and Running integrity are web-released and regression-verified.
- Meal Scan source-backed nutrition fallback is source/web-integrated, but the new authenticated nutrition lookup backend route is not yet claimed live until an explicitly approved production activation passes its live smoke.

## 2026-09-23 Nutrition fallback production release — GREEN
Decision: SOURCE / WEB / PRODUCTION BACKEND VERIFIED GREEN.
- PRODUCT main: `12a362d0ba80c1e78bf27cf5b6253306ade18033`.
- Production Coach Activation #32 / `35841937362`: SUCCESS.
- Authenticated nutrition lookup live smoke: PASS with official Starbucks primary-source evidence.
- Authenticated Meal Scan live smoke: PASS.
- Authenticated Coach live smoke: PASS.
- Bounded write + sensitive boundary + disposable cleanup: PASS.
- Release Gate #1767: FULL GREEN.
- Pages #856: SUCCESS.
- WIF remains non-blocking P2 debt; deployment used the existing `adc-service-account-fitfind` path.

## 2026-09-24 Workout commercial parity v2 — GREEN
Decision: SOURCE / WEB / RELEASE VERIFIED GREEN.
- PRODUCT PR #232: MERGED.
- PRODUCT main: `bd4aed95c8a43e0a1136d591ea2bb4484703115b`.
- Exact-head Release Gate #1781: FULL GREEN.
- Post-merge Release Gate #1782: FULL GREEN.
- Pages #857: SUCCESS.
- Founder OS Event Envelope #1751: SUCCESS.
- Scope: Workout web/runtime only; no Firebase Functions deployment required.
- Verified capabilities: unit-safe GARANG targets, mixed set types + per-set RIR, notes, Superset/Circuit grouping, reorder/replace-edit preservation, unit-aware plate loading, PR feedback, stable set lifecycle/reset/remount, and mobile WebKit touch/layout safety.
- Known release-integrity note: an unrelated Golden Path Coach proposal timing assertion recurred during intermediate attempts, while exact-head Gate #1781 and post-merge Gate #1782 both passed the complete suite. Keep lifecycle determinism monitored; do not weaken the gate.


## 2026-09-24 Workout resilience + grouped execution follow-up — GREEN
Decision: PRODUCT WEB/RUNTIME VERIFIED GREEN; NATIVE HEALTH/WATCH NOT IMPLEMENTED.
- PRODUCT PR #234: MERGED as main `b816a8bd5394660d7e0b3e0eea65d848dc25bdea`.
- PR #234 exact-head Release Gate #1789 / `35905526659`: core-build-rules SUCCESS, browser-webkit SUCCESS, verify SUCCESS.
- PRODUCT PR #235: MERGED; current PRODUCT main `990f67a20ffce9511617753d97bcf8313ee19e7d`.
- PR #235 exact head `3ade70c81bd5dc3c78f0b50d517149825a260090`; Gate #1796 / `35906643419`: core SUCCESS; browser-webkit SUCCESS on identical-head job rerun; verify SUCCESS.
- #234 scope: direct set add/delete, sessionStorage recovery of active workout + unsaved draft, immediate live e1RM PR cue.
- #235 scope: visible/contiguous Superset/Circuit draft grouping, group event metadata, 45 lb imperial bar default.
- No Firebase Functions deployment was required for either release.
- Native HealthKit / Health Connect / Watch integration remains NOT VERIFIED / NOT IMPLEMENTED in the current web/PWA dependency stack.

## 2026-09-24 Commercial Intelligence Reach v1 — GREEN
Decision: SOURCE / WEB / PRODUCTION BACKEND VERIFIED GREEN.
- PRODUCT PR #239 exact head: `1557317194756786955f3bc86157580301c9c119`.
- Exact-head Release Gate #1805 / `35910106988`: FULL GREEN.
- PRODUCT main after merge: `0e3ad6784d0171ef30afb3530da0f65ac8b9fd15`.
- Post-merge Release Gate #1807 / `35910744543`: FULL GREEN.
- Pages #861 / `35910743274`: SUCCESS.
- Production Coach Activation #34 / `35910744575`: SUCCESS.
- Deployment scope: Firebase Function `api` only; existing LLM secret preserved.
- Public Coach / Meal Scan / nutrition lookup auth-method boundaries: PASS.
- Authenticated nutrition lookup / Meal Scan / Coach / bounded-write smokes: PASS.
- Disposable Firebase smoke identity cleanup: PASS.
- Exact workout-dose and exact bounded nutrition-target proposals are live as advisory/confirmation-gated intelligence.
- Physiological Signal Intelligence is live as an optional input contract and deterministic readiness-fusion path, but no native/provider wearable connector is claimed.
- External longitudinal effectiveness remains unverified; no causal uplift or autonomous escalation claim is made.

## 2026-09-24 Workout commercial parity v3 + Warm-up Calculator — GREEN
Decision: PRODUCT WEB/RUNTIME VERIFIED GREEN; Superset auto-execution PARTIAL; native Health/Watch PENDING.
- PR #238: MERGED as `2d05f9873eec5ff9342664c7c7ef9cd098242864`.
- PR #238 exact-head Gate #1809: FULL GREEN. Post-merge Gate #1810: FULL GREEN. Pages #862: SUCCESS.
- PR #240: MERGED as current PRODUCT main `c7599d9d593561980fcabbb5da10b205d9f78c72`.
- PR #240 exact-head Gate #1814: core-build-rules SUCCESS, browser-webkit SUCCESS, verify SUCCESS.
- PR #240 post-merge Gate #1819: core-build-rules SUCCESS, browser-webkit SUCCESS, verify SUCCESS.
- Pages #863: SUCCESS. Founder OS Event Envelope #1831: SUCCESS.
- Warm-up Calculator release behavior: visible live working weight -> percentage scheme -> unit-safe plate rounding -> warm-up rows -> working rows, with execution runtime owning expanded set-plan state.
- No timeout inflation or regression deletion was used to clear the WebKit blocker.
- Superset/Circuit grouping is released, but automatic round-aware exercise switching is not claimed.
- Native Apple Health / Health Connect / Watch authorization/sync is not claimed.

## 2026-09-24 Intelligence Hardening v1 — GREEN
Decision: SOURCE / WEB / PRODUCTION BACKEND VERIFIED GREEN.
- PRODUCT PR #242 merged as `71de869744a533f8f492b93cec79e4a2745cd6e8`.
- Release Gate #1822 / `35914976924`: FULL GREEN on the merged code tree.
- Post-merge Release Gate #1824 / `35915693512`: FULL GREEN.
- Pages #864 / `35915692551`: SUCCESS.
- Initial Gate #1815 exposed a real semantic-memory performance regression; the implementation was optimized with feature caching and the existing benchmark limit was preserved.
- Founder-approved Production Coach Activation #36 / `35917354539`: SUCCESS. Deployment scope was Firebase Function `api` only; public Coach / Meal Scan / nutrition boundaries PASS; authenticated nutrition lookup, Meal Scan, live Coach, bounded-write and disposable cleanup PASS.
- Activation merge `3bbb37ea119e0f6de120bcb9e4e79d78c69d8450`; post-merge Release Gate #1831 / `35917354505`: FULL GREEN; Pages #865 / `35917353289`: SUCCESS.
- No autonomous workout progression, automatic nutrition-target mutation, causal uplift claim, native wearable claim, or invented food provenance was added.

## 2026-09-24 Smart Superset/Circuit execution — GREEN
Decision: PRODUCT WEB/RUNTIME VERIFIED GREEN.
- PR #244 `Add smart superset and circuit execution`: MERGED as current PRODUCT main `5174df812bf4e0e4ca71a159e8ab4ac7e0fd84db`.
- Exact-head Release Gate #1833 / `35918285491`: FULL GREEN.
- Post-merge Release Gate #1834 / `35919023081`: FULL GREEN.
- Pages #866 / `35919022366`: SUCCESS.
- Founder OS Event Envelope #1870: SUCCESS.
- Verified behavior includes round-aware grouped progression, round-boundary rest semantics, group/round state visibility, and grouped-session recovery.
- Native Health/Watch connectivity remains outside this web/runtime release.

## 2026-09-24 UI / Brand Simplification v1 — Today + Body Model GREEN
Decision: PRODUCT WEB/RUNTIME VERIFIED GREEN.
- PR #247 `Simplify Today and rebuild the GARANG body model`: MERGED as current PRODUCT main `eee151ee8fe021a5ce43cbaa65c57ba878c19201`.
- Exact-head Release Gate #1845: core-build-rules SUCCESS, browser-webkit SUCCESS, verify SUCCESS.
- Post-merge Release Gate #1850: core-build-rules SUCCESS, browser-webkit SUCCESS, verify SUCCESS.
- Pages #867: SUCCESS.
- Founder OS Event Envelope #1901: SUCCESS.
- Verified regressions include Today action flow, bottom Check-in, Planner shortcut touch target, Today visual parity, Simplified Shell, Planner execution, Meal Scan, Golden Path, authenticated Coach/recovery, mobile regression, Settings touch, button health and runtime stability stress.
- No core state/write owner was replaced. This release is a presentation/interaction simplification plus anatomy visual-system replacement.

## 2026-09-24 Intelligence Quality Hardening v2 — PRODUCTION GREEN
Decision: PRODUCT SOURCE / CI / WEB / PRODUCTION BACKEND VERIFIED GREEN.
- PR #246 merge: `75249fd04b2b60e643e27937c53f4cbea53f3d1a`; Gate #1851 FULL GREEN; Pages #868 SUCCESS.
- PR #248 exact head: `07406d53bcb923148ba931eb24f58a7792f26c79`; Gate #1855 FULL GREEN.
- PR #248 merged main: `26f01ad829afeeaca0deb97d0159915c315f758c`; post-merge Gate #1856 FULL GREEN; Pages #869 SUCCESS.
- Production Coach Activation #38: SKIPPED by explicit activation-phrase boundary; safe and expected.
- Trigger-only PR #250 exact-head Gate #1858: FULL GREEN; PR #250 merged as current PRODUCT main `788aa81135fe996d28e29beaa4c578541ee77453`.
- Production Coach Activation #39 / `35944749134`: SUCCESS. Firebase Function `api` deploy PASS; public Coach / Meal Scan / nutrition lookup boundaries PASS; authenticated nutrition lookup / Meal Scan / live Coach / bounded autonomous-write smokes PASS; disposable-user and temporary credential cleanup PASS.
- Post-activation Release Gate #1860 / `35944749127`: FULL GREEN. Pages #870 / `35944748708`: SUCCESS.

## 2026-09-24 Food DB Scale v1 — GREEN
Decision: PRODUCT SOURCE / WEB / RELEASE VERIFIED GREEN.
- PR #251 exact head: `432e6ea47ecba3bb03b8df5354dfc83663422bcb`.
- PR #251 exact-head Release Gate #1876 / `35948950490`: FULL GREEN.
- PR #251 merged as `f6fc6277e59b9b2a59592ad51bc6067cc1ffdfc9`.
- Current PRODUCT main: `3b21f20a0df1dd483475f7b84b517ae03fb13537` after subsequent Design PR #249.
- Pages #873 / `35961273643`: SUCCESS.
- Current-main Release Gate #1896 / `35961274355`: FULL GREEN.
- Food DB effective local lookup coverage is 6,221 rows: 500 curated Korean canonical + 5,721 verified USDA supplemental.
- Supplemental rows are lazy-loaded and preserve canonical-first lookup precedence.
- No Firebase Functions deployment was required for this Food DB expansion; it is a web/data release.

## 2026-09-24 Design Simplification v2 / Meal Scan closure
- PRODUCT PR #252 `Fix Meal Scan supplemental corpus latency`: MERGED as `384f9446737c341d0d3a841abd596acfbd153496`.
- PR #252 exact-head Release Gate #1891: FULL GREEN.
- PRODUCT PR #249 `Apply GARANG luxury design simplification v2 across P1-P5`: MERGED as current PRODUCT main `3b21f20a0df1dd483475f7b84b517ae03fb13537`.
- PR #249 exact-head Release Gate #1895: FULL GREEN.
- Post-merge Release Gate #1896 on exact current main: FULL GREEN.
- Pages #873 on exact current main: SUCCESS.
- Founder OS Event Envelope #2003: SUCCESS.
- Release classification: GREEN for source/web/runtime regression scope. No production Firebase Function change was introduced by the design PR; Meal Scan PR #252 changes client-side supplemental retrieval behavior only.

