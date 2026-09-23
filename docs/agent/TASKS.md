# GARANG Tasks

Last updated: 2026-09-22

## Release / QA baseline — current main
Status: GREEN / VERIFIED
- PRODUCT main: `40e83c32eac8fd7791ee1d6023d1458cc6e6d560`.
- PR #188 exact-head Release Gate #1599 / `35599456886`: attempt 1 GREEN.
- Post-merge Release Gate #1601 / `35601046564`: attempt 1 FULL GREEN.
- Pages #832 / `35601045094`: SUCCESS.
- Latest browser gate passes Today action flow, Golden Path complete, authenticated Coach, Real LLM, recovery, WebKit mobile regression, Settings, button health and runtime stress.
- Production Coach backend remains VERIFIED on Activation #21 revision `08cfa18e...`; PR #188 contains no Functions change.

## Active P4 — Personalized Intelligence Loop v1
Status: IMPLEMENTED IN PRODUCTION / VERIFIED GREEN
Owner: AI Data / Engineering / Release QA
Goal: make observed recommendation outcomes change later personalization without transferring decision ownership to the LLM.

Implemented in PRODUCT PR #186:
- Intelligence Episode v1 derives context → decision → recommendation → user response → execution → outcome evidence from the existing learning graph. ✅
- User Response Model v1 derives confidence-weighted acceptance, execution, observed outcome and duration-response patterns. ✅
- Recommendation Policy Evaluation v1 creates bounded candidates and transparent scores. ✅
- Response learning is connected to Personalization Policy as constraint-only; it cannot increase intensity/volume/duration beyond deterministic Decision Intelligence. ✅
- Agent Context and Coach receive compact episode/response/policy context. ✅
- Browser/server parity and conservative-policy regressions are included in the standard gate. ✅

Verification:
- PR #186 head `da755b62726be55e5f96f23272d99129054bb45e`.
- Exact-head Release Gate #1591 / `35596002250`: FULL GREEN. ✅
- PR #186 merged as PRODUCT main `56ff9c788cac69b8106da66598ecbe4da35c0fcc`. ✅
- Post-merge Release Gate #1592 / `35596512205`: FULL GREEN. ✅
- Pages #829 / `35596510796`: SUCCESS. ✅
- Production Coach Activation #19: SKIPPED before approval. ✅ safety boundary
- Founder-approved Activation #20 / `35598862426` deployed but failed bounded createPlan write smoke with `PLAN_TITLE_REQUIRED`; root cause was omitted display title. ⚠️ diagnosed
- Deterministic display-title fallback hardening: `e2aa7ed...` + regression `895fb83...`. ✅
- Activation #21 / `35599747682` on current main `08cfa18e...`: SUCCESS. Authenticated live LLM, bounded createPlan write, sensitive-write boundary and disposable cleanup all PASS. ✅
- Release Gate #1600 / `35599747696`: FULL GREEN. ✅
- Pages #831 / `35599747250`: SUCCESS. ✅

Next acceptance:
- External 2/4/8-week Intelligence Episode collection and response-policy usefulness measurement.
- Measure recommendation shown → accept/edit/reject → execution → outcome → next recommendation.
- Keep response learning conservative until real-user evidence supports broader adaptation.

## Active P4 — Autonomous Intelligence Loop v1
Status: IMPLEMENTED IN PRODUCTION / VERIFIED GREEN
Owner: AI Data / Engineering / Release QA
Goal: connect GARANG longitudinal evidence to safe actions so the Coach can execute bounded user-requested state changes while deterministic GARANG retains decision ownership.

Implemented on PR #166:
- Typed user-scoped tools for plan/goal/memory/workout/meal/body/check-in writes. ✅
- No raw DB, destructive, bulk, account/security, schema, secret, billing or production tool exposure. ✅
- Explicit current-message or verified-source evidence gates; factual numeric values cannot be invented. ✅
- Authenticated transactional user-state mutation with owner pinning, idempotency receipts, audit evidence and rollback metadata. ✅
- Longitudinal metrics across recommendation → resolution → plan/action → execution → outcome → later recommendation. ✅
- Deterministic confidence-gated Personalization Policy v1 can simplify/constrain/reduce but cannot autonomously increase progression. ✅
- Agent Context and Coach structured tool-call integration preserve decisionId/mode alignment. ✅
- Browser/server parity and autonomous-write regression tests added to the standard gates. ✅

Verification:
- PR #166 head: `173f251542f7172dd8328f1a8c014b4035c7d0da`.
- Release Gate #1530 / `35505697471` attempt 2: FULL GREEN. ✅
- Core/build/dependency/Firestore emulator: PASS. ✅
- Golden Path / authenticated Coach / Real LLM integration / mobile WebKit regression: PASS. ✅
- Attempt 1 Today Check-in timeout passed unchanged on same-SHA rerun; treat as runtime timing evidence, not an AI regression.

Merge/release evidence:
- PR #166 merged to PRODUCT main as `5483b848e2973f2bf66a1a67148f3c5a5142fb66`. ✅
- Post-merge Release Gate #1531 / `35506440313` attempt 2: FULL GREEN. ✅
- Pages #818 / `35506439803`: SUCCESS. ✅
- Production Coach Activation #18 / `35511759697`: SUCCESS on current main `c4da0000...`. ✅
- Authenticated production smoke: `source=llm`, OpenAI `gpt-5.6-luna`, alignment verified. ✅
- Authenticated autonomous-write smoke: bounded `createPlan` executed + persisted; sensitive write stayed denied/confirmation-gated; disposable account cleanup passed. ✅
- Pages #822 / `35511758482`: SUCCESS. ✅
- Release Gate #1543 / `35511759634` attempt 3: FULL GREEN. ✅

Next acceptance:
- 2/4/8-week longitudinal usefulness validation with external users.
- Measure canonical activation → recommendation → resolution → execution → accumulation/retention funnel.
- Add a dedicated isolation verification strategy for cross-user mutation beyond current owner-policy/CI evidence if a safe staging two-account smoke is justified.

## Active P4 — User Performance Model v1 longitudinal learning
Status: IMPLEMENTED IN MAIN / CURRENT WEB RELEASE VERIFIED GREEN
Owner: Product / AI Data / Engineering / Release QA
Goal: make GARANG progressively understand how the user responds to recommendations from durable action, execution and outcome evidence.

Implemented:
- Evidence-aware dimensions expose `value / confidence / sampleSize / lastUpdated / evidenceIds`. ✅
- Legacy recovery/check-in fallback bug fixed. ✅
- Recommendation accept/modify/dismiss resolution evidence persists durably. ✅
- Confidence-gated User Performance context is available through the read-only Intelligence Bridge. ✅
- Coach receives confidence-gated UPM context without LLM decision ownership. ✅
- `attributedOutcomeScore` uses only fully attributed finalized Intelligence Learning Contract cycles. ✅
- Pending/incomplete cycles do not become outcome learning evidence. ✅
- No automatic progression, silent mutation or new competing truth store. ✅

Verification:
- PR #164 exact-head Release Gate #1525 / `35502377218`: GREEN. ✅
- PR #164 merged to PRODUCT main as `47d95a71c4a526ba966656a8f923ebf0b1db46cf`. ✅
- Pages #816 / `35502863525`: SUCCESS. ✅
- Post-merge Release Gate #1527 / `35502864020`: FULL GREEN. ✅
- Production server-side #164 UPM attribution: DEPLOYED and authenticated live-smoke VERIFIED. ✅

Next acceptance:
- Real-user longitudinal validation at 2/4/8-week windows.
- Measure recommendation shown → accept/modify/dismiss → execution → outcome → subsequent recommendation quality.

## Closed P1 — Production Real AI Coach connectivity repair
Status: DONE / VERIFIED GREEN
Evidence:
- PR #158 gateway failure classification merged.
- PR #159 conversational/actionable collect-data response merged.
- PR #160 mandatory authenticated activation smoke merged.
- PR #161 confidence-gated User Performance Coach context merged.
- Production activation #13 / `35503623842`: SUCCESS on current commercial main.
- Live response: `source=llm`, provider `openai`, model `gpt-5.6-luna`, alignment verified.
- Release Gate #1529 / `35503623868`: FULL GREEN.
- Pages #817 / `35503623353`: SUCCESS.

## Closed P1 — Coach write ownership unification
Status: DONE / VERIFIED GREEN
Owner: Engineering / AI Data / Product / Release QA
Resolution:
- PRODUCT PR #176 merged to main as `0a07c4c5bd19397f43bfe9eaedd20c524f7620da`.
- Online authenticated LLM responses preserve sanitized `source`, `requestId`, and `toolResults` in Coach thread messages and are marked server-owned.
- `garang-coach-agent-v4.js` does not regenerate a browser mock proposal for server-owned responses.
- Explicit local/offline fallback remains confirmation-first through the existing mock Agent path.
- Real LLM browser regression asserts server-owned `createPlan` => zero browser proposal and zero mirrored local Planner/actionLog write.
- Complete Golden Path regression now explicitly exercises local fallback where browser confirmation is still expected.
Verification:
- PR #176 exact-head Release Gate #1559 / `35580756829`: FULL GREEN.
- Earlier Gate #1558 exposed a separate WebKit lifecycle timing failure; this remains P2 release-integrity debt, not a P1 ownership failure.
- Duplicate P1 PRs #173–#175 were closed as superseded by #176.

## Closed P2 — WebKit lifecycle determinism
Status: DONE FOR CURRENT RELEASE / MONITOR
Owner: Engineering / Release QA
Root cause:
- Active Today action flow could rebuild and `replaceWith()`-replace `#garangTodayFlow` on lifecycle events even when the semantic model was unchanged.
- On mobile WebKit this could replace the active CTA during a touch sequence.
Resolution and evidence:
- PR #177 introduced deterministic render identity and no-op DOM preservation without adding timeout inflation or a new retry owner.
- Exact-head Gate #1562 passed, but immediate post-merge main Gate #1563 later reproduced the DOM identity assertion once.
- Subsequent main Gates #1592, #1600 and #1601 all completed FULL GREEN on attempt 1.
- Latest #1601 on current main `40e83c32...` passes Today action flow and the complete Golden Path / authenticated Coach / Real LLM / mobile WebKit suite.
Reopen condition:
- Reclassify to active P2 if the current-path DOM identity assertion or an equivalent lifecycle replacement recurs. Do not normalize reruns or add broad timeout/retry masking.

## Active P5 — External longitudinal validation
Status: PLANNED / PRODUCT CAPABILITY READY
Owner: Product / Growth Business / AI Data
Goal: prove that GARANG's connected loop changes behavior and becomes more useful over time.
Acceptance:
- Unknown-user activation tests across onboarding → first record → Coach → plan → execution → accumulation.
- Measure canonical events already defined in `garang-analytics-v1`.
- 2/4/8-week recommendation resolution, execution, outcome and return behavior.
- Do not add major feature surface until the largest observed activation/retention break is identified.

## Active P3 — Runtime ownership simplification
Status: IN PROGRESS / EVIDENCE-DRIVEN
Goal: reduce active screen/route/observer/retry ownership without adding more self-healing layers.
- Route mutation ownership has been constrained toward `GarangRouter`.
- Continue only against active boot-path owners.
- Repeated WebKit instability should be treated as ownership evidence, not hidden with additional retries.

## Closed P1 — Competition submissions
Status: DONE / RECORDED COMPLETE BY FOUNDER REPORT
- Wanted: submitted.
- 롯데: submitted.
- 브로제이: submitted.
Competition derivatives remain isolated and change-frozen except critical outage/organizer-required fixes.

## P2 — Release integrity
- Protect CONTROL + PRODUCT main: PLANNED.
- Migrate production deployment auth to OIDC/WIF: PLANNED.
- Functions dependency-family upgrade: PLANNED.
- Firebase build-image cleanup: PLANNED / COST HYGIENE.

## Closed P1 — Photo Evidence v1.5 redesign
Status: DONE / VERIFIED GREEN
Owner: Product / Design Brand / Engineering / Release QA
Resolution:
- PRODUCT PR #202 merged to main `a60bf56c2a2f69a0eed138c22ee45c5f4bf76082`.
- Workout and Nutrition use one GARANG Evidence visual/copy system without changing record mutation ownership or device-local IndexedDB media storage.
- Legacy workout certification polish is explicitly blocked from rewriting `.photo-evidence-card`.
Verification:
- Exact-head Gate #1624 passed on rerun after one unrelated/current-path Today lifecycle identity recurrence.
- Post-merge main Gate #1625 / `35691173610`: FULL GREEN.
- Pages #837 / `35691172814`: SUCCESS.

## Active P2 — WebKit lifecycle determinism recurrence
Status: ACTIVE / NON-BLOCKING FOR CURRENT RELEASE
Evidence:
- PR #202 exact-head Gate #1624 first attempt reproduced the Today no-op DOM identity assertion previously tracked as TD-015.
- Same exact head passed the complete gate on rerun; post-merge main Gate #1625 passed the complete suite.
Next:
- Diagnose active Today lifecycle ownership against the recurring identity replacement signal.
- Do not normalize reruns or add timeout inflation/retry masking.

## Closed P1 — Real Meal Scan v1 source/web implementation
Status: DONE / VERIFIED SOURCE+WEB GREEN
Owner: Product / Engineering / AI Data / Release QA
Resolution:
- PRODUCT PR #206 connects meal photo → authenticated Vision identity/portion candidates → canonical GARANG Food DB nutrition → user confirmation → existing meal save + Photo Evidence.
- Vision is prohibited from supplying kcal/protein/carbs/fat; unmatched foods are not silently fabricated.
- Production Function `api` containing `/meal/scan` was deployed by Activation #24.
Verification:
- PR #209 exact-head Gate #1644: FULL GREEN, including Real Meal Scan WebKit mobile flow.
- Current main `d926b12...` post-merge Gate #1650: FULL GREEN.
- Pages #844: SUCCESS.
Remaining production gate:
- Authenticated live Meal Scan Vision smoke is UNKNOWN. Do not call provider execution VERIFIED until a live authenticated request proves it.

## Closed P2 — Workout async hydration release blocker
Status: DONE / VERIFIED GREEN
Owner: Engineering / Release QA
Root cause:
- Workout Library v2 appended asynchronously loaded exercise cards directly to the live DOM one-by-one, creating a burst of child-list mutations during mobile route settle.
Resolution:
- PR #210 batches clones in a DocumentFragment and commits once.
- Canonical mobile stability threshold was preserved unchanged; a static contract guards batched hydration.
Verification:
- PR #210 Gate #1649: FULL GREEN.
- Post-merge main Gate #1650: FULL GREEN, including mobile runtime stability stress.

## Closed P2 — Real Meal Scan production live-smoke closure
Status: DONE / VERIFIED GREEN
Owner: Release QA / Engineering / AI Data
Goal: close the final gap between merged Meal Scan source/web behavior and authenticated live Vision provider execution.

Verification:
- PRODUCT main: `5f630b6ec3ed8b757a9eb6bde52d5fff50887056`.
- Production Coach Activation #27 / `35721577034`: SUCCESS.
- Authenticated live Meal Scan Vision smoke: PASS.
- Authenticated live Coach smoke: PASS via OpenAI `gpt-5.6-luna`.
- Authenticated autonomous write smoke: PASS.
- Sensitive write boundary: PASS.
- Disposable Firebase smoke account cleanup: PASS / deleted.
- Release Gate #1659: FULL GREEN.
- Pages #848: SUCCESS.

Result:
- Real Meal Scan v1 is SOURCE / WEB / PRODUCTION VERIFIED GREEN.

## Active P4/P5 — Anonymous External Validation Sprint
Status: IN PROGRESS
Owner: Growth Business / Product / AI Data / Command Center
Goal: prove that unknown users understand and act on the GARANG Golden Path without founder explanation, then measure whether repeated Intelligence Episodes create retained value.

Immediate acceptance:
- Recruit unknown users without friend/family testing, GARANG brand-account seeding, or paid ads.
- Observe signup/onboarding → first record → Coach interpretation → next action understanding → plan → execution intent → Progress/accumulated-value understanding.
- Capture canonical funnel counts and qualitative confusion points without adding features during the first evidence batch.
- Begin longitudinal follow-up at 2/4/8-week windows for recommendation shown → accept/edit/reject → execution → outcome → later recommendation.
- Separate acquisition failure, comprehension failure, action failure, and retention failure before proposing product changes.

Execution contract:
- First batch target: 10–20 unknown users.
- Stop feature expansion until at least the first external batch is reviewed, except P0/P1 fixes.
- Any product change must map to a measured drop-off or repeated qualitative failure.

## Active P2/P4 — External Validation Measurement Readiness
Status: PR READY / EXACT-HEAD GREEN / RELEASE APPROVAL REQUIRED
Owner: Engineering / Product / Growth Business / Release QA
Goal: make the external validation sprint measurable without violating consent boundaries.

PRODUCT PR #217:
- Head: `6bbe4c75d86ecded7d05ab11d3231aafa19885fa`.
- Release Gate #1675: FULL GREEN.
- Event Envelope #1521: SUCCESS.
- Analytics consent defaults false and is user-controlled in Settings.
- Analytics events + local error logs no longer piggyback on general Cloud Sync.
- Canonical `first_record_created` is emitted once for the first saved core record.
- Meal Scan no-food result gives an explicit retry message and clears result draft state.

Next:
- Founder approval required before PRODUCT merge because merge updates the production web release.
- After merge + post-merge gate/Pages verification, begin the first 10–20 unknown-user validation batch.

## Closed P2/P4 — External Validation Measurement Readiness
Status: DONE / PRODUCTION VERIFIED GREEN
Owner: Engineering / Product / Growth Business / Release QA
Result:
- PRODUCT PR #217 merged as main `0f15adbbde19b87efec31b85f3cd43599f6164fa`.
- Post-merge Release Gate #1676 / `35727541902`: FULL GREEN.
- Pages #849 / `35727541068`: SUCCESS.
- Event Envelope #1525 / `35727542003`: SUCCESS.
- Explicit analytics opt-in, Cloud Sync observability separation, one-time `first_record_created`, and Meal Scan no-food UX are released.
- Measurement/privacy readiness no longer blocks Anonymous External Validation.

Next:
- Execute the first 10–20 unknown-user validation batch.
- Freeze new feature scope until the first evidence batch is reviewed except verified P0/P1 fixes.
- PRs #215/#216 are stale against current main and require explicit reconciliation before any later release.

## Closed P2 — Production nutrition fallback activation
Status: DONE / SOURCE+WEB+PRODUCTION VERIFIED GREEN
Owner: Engineering / Release QA
Goal: activate the newly merged authenticated nutrition lookup route and verify it live without reopening product scope.

Evidence:
- PRODUCT PR #225 merged as main `e84e012c3e0a0269634637c85d62bf0d19b0ece9`.
- Release Gate #1756: FULL GREEN.
- Pages #851: SUCCESS.
- Production Activation #28: SKIPPED because the workflow requires an explicit `Activate production Real AI Coach` commit phrase.

Acceptance:
- explicit Founder approval for production activation;
- deploy only approved Firebase Function `api`;
- public nutrition lookup auth/method preflight PASS;
- authenticated live nutrition lookup smoke PASS;
- existing live Meal Scan + Coach + bounded write smoke PASS;
- disposable Firebase identity cleanup PASS.

### Production closure — Activation #32
- PRODUCT main `12a362d0ba80c1e78bf27cf5b6253306ade18033`.
- Production Coach Activation #32 / `35841937362`: SUCCESS.
- Public route boundaries: PASS.
- Authenticated nutrition lookup / Meal Scan / Coach / bounded-write smokes: PASS.
- Sensitive write boundary: PASS / blocked as expected.
- Disposable Firebase identity cleanup: PASS.
- Release Gate #1767: FULL GREEN.
- Pages #856: SUCCESS.
- This task is CLOSED. Return priority to `TASK-EXTERNAL-LONGITUDINAL-VALIDATION`.

## Closed P3/P4 — Workout commercial parity v2
Status: DONE / SOURCE+WEB VERIFIED GREEN
Owner: Product / Engineering / AI Data / Design Brand / Release QA
Goal: close the commercial Workout execution gaps without regressing GARANG Intelligence or the Golden Path.

Delivered:
- Previous → GARANG Target → Actual execution guidance with canonical unit-safe target computation.
- Mixed Warm-up / Working / Drop / Failure sets with row-level RIR persistence.
- Exercise notes, Superset/Circuit grouping with required group IDs.
- Exercise reorder plus replace/edit flow that preserves position and entered weights.
- Unit-aware Plate Calculator for metric and imperial loading.
- Pre-save all-time PR comparison with NEW PR vs maintained-PR feedback.
- Stable live session timer/rest/set lifecycle, draft reset/remount, and mobile hit ownership.

Verification:
- PRODUCT PR #232 exact-head Release Gate #1781: FULL GREEN.
- PRODUCT main `bd4aed95c8a43e0a1136d591ea2bb4484703115b`.
- Post-merge Release Gate #1782: FULL GREEN.
- Pages #857: SUCCESS.
- Event Envelope #1751: SUCCESS.

Result:
- Workout commercial parity task is CLOSED.
- Return priority to `TASK-EXTERNAL-LONGITUDINAL-VALIDATION`; further Workout scope requires external evidence or a verified P0/P1 blocker.

