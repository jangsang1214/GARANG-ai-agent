# GARANG Project State

Last updated: 2026-09-24

## Current objective
Stabilize the canonical commercial GARANG after the Real AI Coach repair and User Performance Model v1 rollout, then move from feature construction to longitudinal external validation and measured behavior change.

## Repository observations
- CONTROL: `jangsang1214/GARANG-ai-agent`.
- PRODUCT: `jangsang1214/-fitmind-ai`.
- Canonical PRODUCT main observed: `5174df812bf4e0e4ca71a159e8ab4ac7e0fd84db`.
- Wanted remains an isolated competition derivative. Competition submissions remain RECORDED complete by Founder report and must not redefine commercial main.

## Latest AI/Data evidence — Personalized Response Learning v2
- PRODUCT PR #236 merged as `9c22843eb81d8397c4cfda3fc7294a632eecadf0` with 15 AI/Data-only files; it did not touch the active workout UI/CSS runtime files.
- PR #236 exact-head Release Gate #1795 / `35906532826`: FULL GREEN across core/build, Firestore, Commercial Core, WebKit/Golden Path and final verify.
- Pages #859 / `35907286397`: SUCCESS for the merge revision.
- Post-merge Gate #1797 was CANCELLED by a newer main push from unrelated workout UI polish; this is not treated as a test failure.
- Current main `990f67a...` contains PR #236 unchanged plus PR #235 UI-only deltas; current-main Gate #1798 / `35907860238` is FULL GREEN and Pages #860 / `35907859391` is SUCCESS.
- Intelligence Episode v1.1 now captures time bucket/day-of-week and next-checkin recovery delta.
- User Response Model v1.1 learns duration, intensity, volume, timing, accept/edit/reject and execution patterns from attributed episodes.
- Recommendation Policy Evaluation v1.1 uses empirical response evidence while remaining bounded by deterministic GARANG Decision.
- Offline Policy Evaluation v1 performs chronological, leave-future-out replay and explicitly makes no causal/counterfactual uplift claim.
- Workout Prescription Shadow v1 derives exercise-level sets/reps/load/RPE evidence and can hold/reduce or flag progression for review, but never auto-increases.
- Adaptive Nutrition Learning v1 derives an observational intake/weight-trend estimate and bounded review direction, but never mutates nutrition targets automatically.
- Production Coach Activation #33 was SKIPPED by the explicit production-approval boundary. PR #236 server-side behavior is SOURCE/CI verified but is not yet claimed live in production.

## VERIFIED commercial evidence
- Current PRODUCT main `40e83c32eac8fd7791ee1d6023d1458cc6e6d560`: PR #188 exact-head Release Gate #1599 / `35599456886` SUCCESS on attempt 1; post-merge Release Gate #1601 / `35601046564` FULL GREEN on attempt 1; Pages #832 / `35601045094` SUCCESS.
- Gate #1601 browser-webkit passed Today action flow, Today Check-in CTA, mobile Planner shortcut, Today visual parity, Golden Path integration + complete journey, authenticated app/Coach, Real LLM Golden Path, recovery, WebKit mobile regression, Settings touch, button health and runtime stability stress.
- PR #188 changed browser/runtime Photo Evidence files, `index.html`, `package.json`, `runtime-manifest.json` and tests only; no Firebase Functions code changed and no production Function deployment is claimed for that merge.
- PRODUCT main `08cfa18e725c919ce2893c3c042d20c5e38d15da`: Release Gate #1600 / `35599747696` FULL GREEN; Pages #831 / `35599747250` SUCCESS; Production Coach Activation #21 / `35599747682` SUCCESS.
- Activation #21 deployed only Firebase Function `api`, preserved the existing GARANG LLM secret, passed authenticated live Coach smoke, authenticated autonomous-write smoke, sensitive-write boundary checks and disposable-user cleanup.
- Activation #20 / `35598862426` on `1723a581...` failed only the bounded createPlan write smoke with `PLAN_TITLE_REQUIRED` because the provider omitted a display title; subsequent commits `e2aa7ed...` + `895fb83...` added and regressed a deterministic display-only fallback before reactivation.
- PRODUCT PR #186 exact-head Release Gate #1591 / `35596002250`: FULL GREEN across core/build, Firestore emulator, Golden Path complete, authenticated Coach, Real LLM Golden Path and full WebKit/mobile regression. PR #186 merged as PRODUCT main `56ff9c788cac69b8106da66598ecbe4da35c0fcc`; post-merge Release Gate #1592 / `35596512205` is FULL GREEN and Pages #829 / `35596510796` is SUCCESS.
- PRODUCT PR #177 exact-head Release Gate #1562 / `35582093879`: FULL GREEN. The exact same SHA WebKit job was rerun and passed the complete suite again; PR #177 merged as main `9fa951b30be4981b8081e649dd05ab229df44218`.
- Production Coach activation run #11 / `35502595878`: SUCCESS on main `e238b6164da976219da328ef0fe3bd20ea0e7807`.
- The activation preserved the existing `GARANG_LLM_API_KEY`, deployed only Firebase Function `api`, minted a disposable Firebase identity, and ran authenticated live Coach smoke.
- Live smoke returned `source=llm`, provider `openai`, model `gpt-5.6-luna`, with alignment verified; disposable identity cleanup passed.
- Release Gate #1526 / `35502595898`: FULL GREEN for `e238b6164da976219da328ef0fe3bd20ea0e7807`.
- Pages #815: SUCCESS for the same revision.
- PR #164 exact-head Release Gate #1525 / `35502377218`: GREEN before merge.
- Pages #822 / `35511758482`: SUCCESS for current PRODUCT main `c4da0000...`.
- Production Coach Activation #18 / `35511759697`: SUCCESS for current PRODUCT main. Authenticated disposable-user smoke returned `source=llm`, provider `openai`, model `gpt-5.6-luna`, alignment verified; authenticated autonomous-write smoke executed and persisted bounded `createPlan`, verified sensitive-write denial/confirmation boundary, and deleted the disposable account.
- Release Gate #1543 / `35511759634` attempt 3: FULL GREEN for current PRODUCT main. Attempts 1–2 failed different WebKit lifecycle/timing assertions on the identical SHA; attempt 3 passed the complete Golden Path / Real LLM / mobile regression suite.

## Product / AI state
- Personalized Intelligence Loop v1 is MERGED and SOURCE/WEB VERIFIED on PRODUCT main `56ff9c788cac69b8106da66598ecbe4da35c0fcc` via PR #186.
- Intelligence Episode v1 derives recommendation episodes from the existing learning graph and durable resolution/execution/outcome evidence without raw-chat dependence.
- User Response Model v1 derives confidence-weighted acceptance/execution/outcome and duration-response patterns from attributed episodes.
- Recommendation Policy Evaluation v1 evaluates bounded candidates with transparent scoring; response learning is wired into Personalization Policy as constraint-only and cannot exceed the deterministic GARANG Decision envelope.
- Autonomous Intelligence Loop v1 is MERGED and VERIFIED in production on current PRODUCT main `c4da0000...`.
- PR #166 head `173f251542f7172dd8328f1a8c014b4035c7d0da` adds bounded typed Coach data tools, authenticated transactional writes with owner pinning/idempotency/rollback metadata, longitudinal loop metrics, deterministic confidence-gated Personalization Policy v1, and Coach tool-call integration.
- PR #166 exact-head Gate #1530 and merge Gate #1531 were GREEN; subsequent structured-response/write hardening is included in current main `c4da0000...`, Production Activation #18 is GREEN, and Release Gate #1543 attempt 3 is FULL GREEN.
- Deterministic GARANG State/Decision Intelligence remains judgment owner.
- LLM remains bounded explanation/language/multimodal context.
- Generic Coach gateway failures are now classified instead of collapsing into a single external-AI failure message (PR #158).
- Low-data `collect_data` Coach responses were hardened to remain human and actionable instead of only refusing judgment (PR #159).
- Production activation now requires authenticated live LLM smoke rather than allowing a skipped token-based smoke (PR #160).
- Confidence-gated User Performance context is available to Coach without granting it decision ownership (PR #161).
- User Performance Model v1 now includes durable recommendation-resolution evidence and outcome-attributed learning through fully linked Intelligence Learning Contract cycles (PR #164).

## Runtime / deployment boundary
- Commercial web source of truth is PRODUCT main `40e83c32eac8fd7791ee1d6023d1458cc6e6d560`; Pages #832 has deployed it.
- Production Coach backend is VERIFIED on `12a362d0ba80c1e78bf27cf5b6253306ade18033` via Production Coach Activation #32 / `35841937362`; deployment, authenticated Meal Scan, live Coach, bounded autonomous write and disposable-user cleanup all passed.
- Production Coach Activation #18 / `35511759697`: SUCCESS. It deployed only Firebase Function `api`, preserved the existing LLM secret, ran authenticated live LLM smoke plus authenticated autonomous-write smoke, and cleaned up the disposable Firebase identity.
- Live evidence: `source=llm`, provider `openai`, model `gpt-5.6-luna`, GARANG alignment verified; bounded `createPlan` executed and persisted; sensitive-write request remained denied/confirmation-gated.
- Current source/main contains PR #236 server intelligence beyond production backend `12a362d0...`; source/backend parity for Personalized Response Learning v2 is therefore YELLOW until an explicit production activation and live smoke.

## Stable
- Current commercial source/web release: VERIFIED GREEN on main `40e83c32...` via Gate #1601 attempt 1 + Pages #832.
- Photo Evidence v1 is merged and web-released; raw media remains device-local and optional.
- Personalized Intelligence Loop v1 production backend: VERIFIED GREEN on activated revision `08cfa18e...`.
- Production Real AI Coach connectivity: VERIFIED GREEN.
- Commercial Coach decision/alignment boundary: VERIFIED GREEN.
- User Performance Model v1 core contract: merged.
- Recommendation accept/modify/dismiss evidence: durable.
- Confidence-gated UPM context: merged.
- Outcome-attributed UPM learning: merged to current main and Pages.
- Autonomous Intelligence Loop v1 source/web/production release: VERIFIED GREEN on main `c4da0000...`.
- No VERIFIED P0/P1 source or provider outage remains.

## Broken / blockers
- Coach write ownership drift is RESOLVED in PRODUCT PR #176 and merged to main `0a07c4c5...`. Online authenticated LLM responses now carry sanitized `toolResults` / request metadata into Coach thread state and are marked server-owned; `garang-coach-agent-v4.js` suppresses local mock proposals for server-owned responses while explicit local/offline fallback preserves confirmation-first proposals.
- PR #176 exact-head Release Gate #1559 / `35580756829`: FULL GREEN after updating the complete Golden Path test to use an explicit local-fallback scenario. The earlier same-SHA rerun on Gate #1558 again exposed WebKit lifecycle timing debt, strengthening P2 priority rather than reopening P1.
- Autonomous Intelligence production activation is VERIFIED GREEN via Activation #18.
- Server-side #164 UPM attribution is production-activated and live-smoke verified.
- WebKit lifecycle timing is not a current release blocker. PR #177 exact-head Gate #1562 passed, but immediate post-merge main Gate #1563 later reproduced the Today DOM identity assertion once. Since then PRODUCT main Gates #1592, #1600 and #1601 have each passed on attempt 1; latest #1601 explicitly passes Today action flow and the complete browser gate. Track TD-015 as monitor-only unless the current-path identity assertion recurs.
- Main branch protection, OIDC/WIF deployment auth migration, Functions dependency-family upgrade and runtime ownership simplification remain non-blocking engineering debt.

## Next priorities
1. P4/P5 real longitudinal validation using Intelligence Episodes: recommendation → resolution → execution → outcome → later recommendation quality over 2/4/8-week windows, plus activation/retention funnel measurement on external users.
2. P4/P5 collect real external Intelligence Episodes and evaluate whether response-aware personalization improves acceptance/execution/outcome without weakening guardrails.
3. P4/P5 expand response-model signal quality only from observed episode evidence; keep semantic RAG/model upgrades and broader feature expansion behind demonstrated longitudinal value.

## 2026-09-22 Photo Evidence v1.5 reconciliation
- PRODUCT main is VERIFIED at `a60bf56c2a2f69a0eed138c22ee45c5f4bf76082` after PR #202, `Ship Photo Evidence v1.5 on current main`.
- Photo Evidence v1.5 is MERGED / SOURCE+CI+WEB VERIFIED: workout and nutrition now share the restrained GARANG Evidence language, saved records expose Evidence context, the viewer carries record metadata, and existing device-local IndexedDB media ownership is preserved.
- PR #202 exact-head Release Gate #1624 required one rerun: the first attempt reproduced the Today no-op DOM identity assertion; the rerun passed the complete suite. A separate mobile-stability mutation failure found during the work was traced to legacy workout certification polish rewriting the new Photo Evidence card and was fixed with an explicit guard plus contract coverage.
- Post-merge main Release Gate #1625 / `35691173610`: FULL GREEN. Founder OS Event Envelope #1407: SUCCESS. Pages #837 / `35691172814`: SUCCESS.
- TD-015 WebKit lifecycle determinism is REOPENED as active P2 because the current-path Today DOM identity assertion recurred on PR #202 exact head. It is not a current release blocker because the exact-head rerun and post-merge main gate are GREEN; do not mask future recurrence with timeout inflation or broad retries.

## 2026-09-22 Real Meal Scan v1 reconciliation
- PRODUCT current main is `d926b12a35105c02e240e2c0e677432b53c99d76`.
- Real Meal Scan v1 is MERGED / SOURCE+WEB VERIFIED. PR #206 introduced authenticated `POST /meal/scan`: Vision identifies visible food/aliases/portion/confidence only; GARANG Food DB remains nutrition authority; unmatched items require user review; user confirmation and the existing meal save remain the only write path.
- Production Coach Activation #24 / `35707420848` deployed Firebase Function `api` from revision `8ee4f2c291ac6077cfd83b95ba948aec9450883d`, which already contained the merged Meal Scan backend route. The activation passed deploy/project/secret/Coach smoke, but did not run an authenticated Meal Scan Vision smoke. Therefore live authenticated provider execution remains UNKNOWN, not VERIFIED.
- PR #209 exact-head Gate #1644 / `35709869410`: FULL GREEN, including Real Meal Scan WebKit mobile flow: photo → authenticated Vision request fixture → canonical Food DB match → user confirm → save → Photo Evidence.
- Main Gate #1645 reproduced a separate Workout DOM stability failure twice. Root cause was asynchronous Workout Library hydration appending exercise cards one-by-one after route entry. PR #210 batches hydration through one DocumentFragment commit without relaxing the stability threshold.
- PR #210 exact-head Gate #1649: FULL GREEN. Post-merge main Gate #1650 / `35715201276`: FULL GREEN. Pages #844 / `35715200771`: SUCCESS.
- Current release status: SOURCE/WEB GREEN. Real Meal Scan production endpoint is deployed, but end-to-end authenticated live Vision result remains the final production verification gap.

## 2026-09-22 Real Meal Scan live-smoke closure — latest
- PRODUCT main is OBSERVED at `0eb2a11e117c50b208581e5987c45ed7515687de`.
- PRODUCT PR #213 head `5f5ad45a56cf976e244b8fe8bacd7e6acaabd142` changes only `scripts/verify-production-meal-scan.cjs`, replacing the provider-invalid 1×1 smoke image with a valid 128×128 RGB PNG. Runtime Meal Scan behavior is unchanged by this PR.
- PR #213 exact-head GARANG Release Gate #1655 / `35717702324`: FULL GREEN. `core-build-rules`, `browser-webkit` (including Real Meal Scan flow), and final `verify` all passed.
- PR #213 records that Activation #26 reached the provider but returned `502 MEAL_SCAN_PROVIDER_ERROR` with the earlier 1×1 PNG fixture. Treat this activation-failure cause as RECORDED from current PR metadata unless separately re-opened from workflow logs.
- End-to-end authenticated production Vision execution remains UNKNOWN until a Founder-approved PR #213 merge intentionally retriggers production activation and the live smoke passes.
- Current Command Center priority order: (1) close live Meal Scan production verification, (2) launch anonymous external/longitudinal validation, (3) continue non-blocking release-integrity hardening (real-device coverage, WIF credential migration, TD-015 monitor).

## 2026-09-22 Production Meal Scan GREEN — Activation #27
- PRODUCT main is VERIFIED at `5f630b6ec3ed8b757a9eb6bde52d5fff50887056`.
- Production Coach Activation #27 / `35721577034`: SUCCESS.
- Activation #27 deployed only Firebase Function `api`, preserved the existing `GARANG_LLM_API_KEY`, and passed public Coach + Meal Scan auth/method boundaries.
- Authenticated live Meal Scan smoke: PASS with `visionBoundary=live`.
- Authenticated live Coach smoke: PASS with provider `openai`, model `gpt-5.6-luna`.
- Authenticated autonomous-write smoke: PASS; sensitive-memory write remained blocked with `SENSITIVE_MEMORY_KEY_BLOCKED`.
- Disposable Firebase smoke account cleanup: PASS / deleted.
- Post-merge Release Gate #1659 / `35721577131`: FULL GREEN, including Real Meal Scan flow, Golden Path complete journey, Real LLM integration, and mobile runtime stability stress.
- Pages #848 / `35721576625`: SUCCESS.
- Real Meal Scan v1 is now SOURCE / WEB / PRODUCTION VERIFIED GREEN. The previous live Vision gap is CLOSED.
- Deployment auth still used the existing ADC/service-account path; WIF was skipped because repository WIF configuration remains incomplete. Keep this as non-blocking P2 debt.

## 2026-09-22 External Validation Sprint start
- Feature construction is no longer the current bottleneck.
- `TASK-EXTERNAL-LONGITUDINAL-VALIDATION` is now IN PROGRESS.
- Immediate objective: validate unknown-user activation and whether recommendation → resolution → execution → outcome produces understandable retained value over 2/4/8-week windows.
- No paid acquisition and no new feature scope before the first external evidence batch unless a P0/P1 blocker is discovered.

## 2026-09-22 External Validation Measurement Readiness — PR #217
- PRODUCT PR #217 is OPEN at head `6bbe4c75d86ecded7d05ab11d3231aafa19885fa`.
- Exact-head Release Gate #1675 / `35726479828`: FULL GREEN.
- Founder OS Event Envelope #1521 / `35726479746`: SUCCESS.
- PR #217 defaults analytics consent to false, exposes an explicit Settings opt-in, removes analytics/error logs from generic Firebase Cloud Sync, emits `first_record_created` once, and maps Meal Scan no-food responses to a clear retry UX without creating a draft.
- External Validation remains the active objective, but the production web baseline is not yet measurement-ready until PR #217 is Founder-approved and merged/released.
- Parallel PRODUCT PRs #215 and #216 also touch `01_app/app.js`; reconcile against latest main before merge if either lands first.

## 2026-09-22 External Validation Measurement Readiness — PRODUCTION GREEN
- Founder-approved PRODUCT PR #217 merged as current main `0f15adbbde19b87efec31b85f3cd43599f6164fa`.
- Post-merge Release Gate #1676 / `35727541902`: FULL GREEN.
- Pages #849 / `35727541068`: SUCCESS.
- Founder OS Event Envelope #1525 / `35727542003`: SUCCESS.
- Current main passes Real Meal Scan, truth-surface + first-record flow, Golden Path complete journey, authenticated app/Coach, Real LLM integration, Settings touch, mobile regression and runtime stability stress.
- External-validation measurement readiness is now VERIFIED GREEN: analytics consent defaults off and is explicitly user-controlled; analytics/error logs do not piggyback on generic Cloud Sync; the first core record emits `first_record_created` once; Meal Scan no-food results remain non-saving and show a clear retry message.
- The first 10–20 unknown-user validation batch is now the highest-value active work. Do not reopen feature construction before external evidence unless a verified P0/P1 issue appears.
- PRODUCT PRs #215 and #216 became non-mergeable after #217 advanced `main`; they require latest-main reconciliation before any future merge and are not blockers to starting external validation.

## 2026-09-23 Commercial polish merge — PR #225
- PRODUCT PR #225 merged as current main `e84e012c3e0a0269634637c85d62bf0d19b0ece9`.
- Pages #851 / `35833872591`: SUCCESS.
- Post-merge Release Gate #1756 / `35833873560`: FULL GREEN, including core/build/security, Real Meal Scan, Golden Path complete, authenticated Coach/Real LLM, WebKit mobile regression, Settings, button health and runtime stability stress.
- Current web release contains Workout Execution UI v2, Running integrity, and the Meal Scan source-backed nutrition fallback client/source path.
- Production Coach Activation #28 / `35833873751` was SKIPPED by design because the merge commit did not carry the explicit activation phrase required by the production workflow.
- Therefore the newly merged nutrition-web-lookup Firebase Function code is SOURCE/CI/WEB READY but its live production backend activation remains PENDING explicit Founder approval. Existing production Meal Scan / Coach backend from Activation #27 remains the last live-verified backend.
- External validation remains the highest-value product objective once the nutrition fallback production activation gap is either intentionally closed or explicitly excluded from the validation scope.

## 2026-09-23 Nutrition fallback production activation — GREEN
- PRODUCT current main: `12a362d0ba80c1e78bf27cf5b6253306ade18033`.
- Production Coach Activation #32 / `35841937362`: SUCCESS.
- Activation #32 deployed only Firebase Function `api` and used fail-closed auth mode `adc-service-account-fitfind`; WIF remained unconfigured/skipped.
- Public Coach / Meal Scan / nutrition lookup auth-method boundaries: PASS.
- Authenticated live nutrition lookup smoke: PASS with an official Starbucks source URL and `nutritionStatus=estimated`.
- Authenticated live Meal Scan smoke: PASS via OpenAI `gpt-5.6-luna`.
- Authenticated live Coach smoke: PASS via OpenAI `gpt-5.6-luna`.
- Authenticated bounded autonomous write smoke: PASS; sensitive write remained blocked with `SENSITIVE_MEMORY_KEY_BLOCKED`.
- Disposable Firebase smoke identity cleanup: PASS / deleted.
- Post-activation PRODUCT Release Gate #1767 / `35841936990`: FULL GREEN.
- Pages #856 / `35841936175`: SUCCESS.
- Nutrition fallback production activation gap is CLOSED. PRODUCT source/web/backend are now VERIFIED GREEN for this scope.
- Highest-value next work returns to Anonymous External Validation Sprint with the first 10–20 unknown users; do not reopen feature construction without external evidence or a verified P0/P1 blocker.

## 2026-09-24 Workout commercial parity release — GREEN
- PRODUCT main is VERIFIED at `bd4aed95c8a43e0a1136d591ea2bb4484703115b` after PR #232, `Reach commercial workout parity v2`.
- PR #232 exact-head Release Gate #1781: FULL GREEN across core/build, complete WebKit regression, Settings touch, button health, and runtime stability stress.
- Post-merge Release Gate #1782: FULL GREEN.
- Pages #857: SUCCESS.
- Founder OS Event Envelope #1751: SUCCESS.
- Workout commercial execution now includes Previous → GARANG Target → Actual guidance, canonical kg/lb target integrity, mixed Warm-up/Working/Drop/Failure set semantics, per-set RIR, notes, Superset/Circuit grouping, exercise reorder + replace/edit preservation, unit-aware Plate Calculator, PR comparison feedback, stable draft/remount/reset behavior, and mobile-safe hit areas.
- During release verification, the mobile Workout Log width regression was traced to a 640px set-table header escaping its horizontal scroll owner; the header now stays inside the set scroll container and WebKit mobile regression passes.
- The earlier PR #223 was superseded after PRODUCT main advanced with Meal Scan/Real AI Coach/Running changes; #232 was rebuilt cleanly on the then-current main to preserve those capabilities.
- No Firebase Functions/backend deployment was introduced by PR #232. This is a PRODUCT web/runtime release.
- Highest-value next work returns to Anonymous External Validation / longitudinal evidence; broad feature expansion should remain evidence-gated.


## 2026-09-24 Workout execution resilience + grouping closure — GREEN
- PRODUCT current main is VERIFIED at `990f67a20ffce9511617753d97bcf8313ee19e7d` after PRs #234 and #235.
- PR #234 merged direct in-session set add/delete, session-scoped reload recovery for live rows + unsaved workout draft, and immediate live e1RM PR feedback. Exact-head Release Gate #1789 / `35905526659`: core-build-rules, browser-webkit, and verify all SUCCESS.
- PR #235 merged visible/contiguous Superset/Circuit draft grouping plus a standard 45 lb imperial bar default. Gate #1796 / `35906643419` was GREEN after rerunning the failed WebKit job on the identical head `3ade70c81bd5dc3c78f0b50d517149825a260090`.
- The first #235 WebKit attempt failed only the unrelated Coach conversational touch-ownership assertion; the identical-head job rerun passed Coach conversational logging and the full remaining mobile regression tail. Treat this as lifecycle/touch flake evidence, not a Workout regression, and do not weaken the release gate.
- Workout web/PWA commercial parity is now substantially closed for the identified internal scope: Previous → GARANG Target → Actual, mixed set semantics/RIR, notes, reorder/replace, direct set lifecycle, rest, live PR, plate calculator, grouped Superset/Circuit draft UX, and reload recovery are merged and release-verified.
- Apple Health / Health Connect / Watch connectivity is NOT claimed complete. PRODUCT package/runtime evidence shows a web/PWA + Firebase stack with no native HealthKit/Health Connect/Watch SDK dependency. Native provider integration remains a separate external/platform workstream and must not be represented as VERIFIED.
- Highest-value project priority returns to anonymous external activation + longitudinal validation; native health/watch expansion remains evidence-gated unless external validation proves it critical.

## 2026-09-24 Commercial Intelligence Reach v1 — PRODUCTION GREEN
- PRODUCT PR #239 merged as `0e3ad6784d0171ef30afb3530da0f65ac8b9fd15`.
- PR #239 exact-head Release Gate #1805 / `35910106988`: FULL GREEN after correcting the frozen runtime manifest for the new physiological core dependency.
- Post-merge Release Gate #1807 / `35910744543`: FULL GREEN.
- Pages #861 / `35910743274`: SUCCESS.
- Founder-approved Production Coach Activation #34 / `35910744575`: SUCCESS.
- Activation #34 deployed only Firebase Function `api`; public Coach / Meal Scan / nutrition route boundaries PASS; authenticated nutrition lookup, Meal Scan, live Coach, bounded autonomous write and disposable-user cleanup all PASS.
- Workout Prescription Shadow v1.1 now emits exact next sets/reps/load/target-RPE advisory from observed exercise history. Progression proposals remain confirmation-gated and never silently increase state.
- Adaptive Nutrition Learning v1.1 now emits an exact bounded daily-kcal proposal from observed intake + body-weight trend. Target changes remain confirmation-gated and never silently mutate state.
- Physiological Signal Intelligence v1 adds a source-preserving contract for HRV, resting HR, sleep, stress, steps and active minutes with freshness/coverage/confidence handling. When usable signals exist, deterministic State Intelligence fuses them conservatively into readiness; missing signals remain unknown.
- This does NOT mean Apple Health, Health Connect, WHOOP, Oura, Garmin or Watch connectivity exists. No native/provider ingestion path is implemented or device-verified.
- This does NOT prove prospective recommendation uplift. External 2/4/8-week longitudinal validation remains required before causal claims or autonomous progression/target escalation.

## 2026-09-24 Workout commercial parity v3 + Warm-up Calculator closure — GREEN
- PRODUCT main is VERIFIED at `c7599d9d593561980fcabbb5da10b205d9f78c72`.
- PR #238 `Reach workout commercial parity v3 on latest main` merged as `2d05f9873eec5ff9342664c7c7ef9cd098242864`; exact-head Gate #1809 FULL GREEN, post-merge Gate #1810 FULL GREEN, Pages #862 SUCCESS, Founder OS Event Envelope SUCCESS.
- PR #240 `Add commercial workout warm-up calculator` merged as `c7599d9d593561980fcabbb5da10b205d9f78c72`; exact-head Gate #1814 FULL GREEN after fixing live execution state ownership, post-merge Gate #1819 FULL GREEN, Pages #863 SUCCESS, Founder OS Event Envelope #1831 SUCCESS.
- Warm-up Calculator is now release-verified: visible working-set target -> selectable 50/70/85% or 60/80% scheme -> active plate rounding -> typed warm-up set generation -> existing working sets preserved. Completed live sets are protected from overwrite.
- Superset/Circuit remains PARTIAL: group metadata, contiguous draft placement and visible group chip exist, but round-aware A1 -> A2 -> A1 automatic execution is not implemented/verified.
- Health/Watch remains INTEROP-READY / NATIVE PENDING: native bridge contract + canonical JSON web export exist, but Apple Health / Health Connect / Watch provider authorization/sync is not implemented or device-verified.
- Highest-value product priority returns to anonymous external activation + longitudinal validation. Further Workout expansion should be evidence-gated except for the explicit Superset/Circuit execution gap.

## 2026-09-24 Intelligence Hardening v1 — PRODUCTION GREEN
- PRODUCT PR #242 merged as current main `71de869744a533f8f492b93cec79e4a2745cd6e8`.
- Exact merged-tree Release Gate #1822 / `35914976924`: FULL GREEN after eliminating a real hybrid-memory retrieval performance regression. Memory benchmark precision remained 1.0; semantic feature caching restored the performance gate.
- Post-merge Release Gate #1824 / `35915693512`: FULL GREEN. Pages #864 / `35915692551`: SUCCESS.
- User Response Model v1.2 adds posterior shrinkage, timing/day/readiness segmentation, evidence coverage and calibrated confidence.
- Recommendation Policy v1.2 weights empirical evidence by segment confidence and applies an uncertainty penalty while remaining inside the deterministic Decision envelope.
- Offline Policy Evaluation v1.1 excludes future episodes before replay.
- Workout Prescription v1.2 adds RIR/RPE, failure-set and e1RM-trend awareness while keeping exact progression proposals confirmation-gated.
- Adaptive Nutrition v1.2 adds smoothed weight trends, multi-window consistency, logging stability and maintenance uncertainty ranges.
- Memory and Coach knowledge retrieval now use deterministic bilingual hybrid semantic scoring without an external embedding/vector provider.
- Intelligence Data Quality v1 audits duplicate/future/broken episode evidence and coverage. Recommendation Quality Eval v1 exposes safety/personalization/actionability/calibration quality and prevents low evidence from being represented as high confidence.
- Founder-approved Production Coach Activation #36 / `35917354539`: SUCCESS. Firebase Function `api` deploy, public route boundaries, authenticated nutrition lookup, Meal Scan, live Coach, bounded autonomous write, disposable identity cleanup and credential cleanup all PASS.
- Activation merge `3bbb37ea119e0f6de120bcb9e4e79d78c69d8450`; post-merge Release Gate #1831 / `35917354505`: FULL GREEN; Pages #865 / `35917353289`: SUCCESS.
- External 2/4/8-week recommendation uplift, native wearable ingestion, and proprietary data-scale parity remain external evidence/infrastructure gaps.

## 2026-09-24 Smart Superset/Circuit execution closure — GREEN
- PRODUCT current main is VERIFIED at `5174df812bf4e0e4ca71a159e8ab4ac7e0fd84db` after PR #244, `Add smart superset and circuit execution`.
- PR #244 exact-head `bd1bb6e133d762f752e8ed25bf4e6ece5974e090`; Release Gate #1833 / `35918285491`: FULL GREEN.
- PR #244 merged as `5174df812bf4e0e4ca71a159e8ab4ac7e0fd84db`; post-merge Release Gate #1834 / `35919023081`: FULL GREEN. Pages #866 / `35919022366`: SUCCESS. Founder OS Event Envelope #1870: SUCCESS.
- Real grouped execution is now release-verified: explicit group launch, A1 -> A2 -> A1 round-aware auto-advance for supersets, equivalent all-member circuit progression, rest only at round boundaries, visible group/round state, and active grouped identity recovery.
- The remaining Workout parity limitation is native Health/Watch provider connectivity, not web Workout execution.

## 2026-09-24 AI/Data Validation Bundle v1 — PR OPEN / EXACT-HEAD CI GREEN
- PRODUCT PR #246 `Reach data coverage and validation bundle v1` is open and mergeable at head `165289dabd593f8af3d209dc01ff633d4faa447e`.
- Exact-head GARANG Release Gate #1849 / `35939942308`: FULL GREEN across core-build-rules, browser-webkit and final verify.
- Existing bundle scope adds Food Intelligence v2 matching/ambiguity handling, explicit Health signal file import, schema v9 physiologicalSignals persistence and 150+ deterministic Intelligence Validation Harness assertions.
- AI/Data follow-up on the same PR adds `confidence-calibration-v1` (ECE/MCE/Brier/log-loss + over/under-confidence alerts), `intelligence-observability-v1` (quality/calibration/execution/data-quality drift) and a recommendation-quality benchmark covering grounding/relevance, safety, actionability, personalization, calibration and longitudinal drift.
- These additions are diagnostic/evaluation-only and do not mutate recommendation policy or user state.
- Changed-file overlap with active Design PR #247 is empty as observed at this head.
- PR #246 is NOT merged and NOT released; no production activation is claimed.
- External 2/4/8-week prospective recommendation usefulness remains the highest-value unverified AI/Data evidence.

## 2026-09-24 AI/Data Validation Bundle v1 — MERGED / POST-MERGE GREEN
- PRODUCT PR #246 merged to main as `75249fd04b2b60e643e27937c53f4cbea53f3d1a`.
- Merge preserved active Design PR #247: PR #246 merge parents are Design merge `eee151ee...` and exact AI/Data head `165289da...`.
- Post-merge GARANG Release Gate #1851 / `35941173457`: FULL GREEN across core-build-rules, browser-webkit and final verify.
- Pages #868 / `35941172498`: SUCCESS.
- Founder OS Event Envelope #1905 / `35941173535`: SUCCESS.
- Production Coach Activation #37 was SKIPPED by the explicit activation-phrase guard; no new production Function deployment is claimed.
- PRODUCT follow-up PR #248 is separate in-progress AI/Data hardening and must not be conflated with this closed #246 release.
