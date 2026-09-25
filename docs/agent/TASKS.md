# GARANG Tasks

## Closed P4 — Commercial parity uplift: Label Scan + Adaptive Nutrition Apply + Running Analysis v2
Status: DONE / CURRENT-MAIN SOURCE+WEB+RELEASE VERIFIED GREEN
Owner: Product / AI Data / Engineering / Release QA
Goal: convert already-built Food, Nutrition Intelligence, and Running foundations into commercially legible user-facing capability without creating duplicate state owners.

Delivered:
- AI Nutrition Label Scan through the existing authenticated Meal Scan/Nutrition draft owner. ✅
- visible-label-only extraction with K-FIND/GARANG match priority and confirmation-required OCR fallback. ✅
- Adaptive Nutrition proposal -> explicit apply -> canonical calorie target -> reversible reset loop. ✅
- adult/evidence/confidence guardrails; no silent nutrition target mutation. ✅
- Running Analysis v2: split pattern/consistency, relative Pace Guide, training distribution, 5K/10K progression, bounded race estimates. ✅
- sensor/elevation/HR-zone claims remain fail-closed when evidence is absent. ✅

Verification:
- PR #265 exact-head Gate #1987 / `36035658986`: FULL GREEN; merged as `343985808ca913da58ded294d634130f8f640fc8`. ✅
- PR #277 exact-head Gate #2014 / `36077139186`: FULL GREEN; merged as `f8c78317a41621a81dd4745b5dcab2a2b4ed41a9`. ✅
- PR #278 exact-head Gate #2016 / `36077757353`: FULL GREEN; merged as current main `f72b3ef7d2546747896e64b5c5d9bbbc9c54f8f5`. ✅
- current-main Gate #2017 / `36078348231`: FULL GREEN. ✅
- Pages #893 / `36078346509`: SUCCESS. ✅

Boundary:
- Source/web release is GREEN.
- Newer Firebase server behavior for Nutrition Identity / barcode Vision / GTIN-aware lookup is not called production-live until the existing explicit production activation + authenticated live smoke passes.
- Next product priority is external activation/retention and 2/4/8-week longitudinal outcome evidence, not another code-only parity pass.


## Active P3 — Body Model v5 reference-minimum remediation
Status: DEPLOYED / TECHNICALLY VERIFIED / VISUAL ACCEPTANCE REQUIRED
Owner: Product / Design / Engineering / Release QA
Goal: make the released body map meet or exceed the Founder-provided anatomy reference minimum instead of merely functioning.
- Real-device review of released v4: FAIL for realism/proportions/limb-hand-foot quality. ✅ observed
- Keep structural capability separate from visual acceptance: FRONT/SIDE/BACK and muscle interaction remain REACHED. ✅
- Continuous human silhouette + 260×520 anatomy system + revised muscle overlays implemented. ✅
- PR #261: CLOSED / UNMERGED after main advanced. ✅
- Successor PR #262 exact head `6bc643f965cef244a64c163a82fd8f148683f5eb`: Gate #1981 FULL GREEN. ✅
- Founder-approved PR #262 merged as PRODUCT main `7b5032418b49a43ea4504f7566542591ad783b60`. ✅
- Pages #882 / `36031260217`: SUCCESS; live v5 runtime asset verified. ✅
- Post-merge Gate #1983 / `36031262125`: final same-SHA FULL GREEN. ✅
- Earlier #1983 WebKit attempts timed out at different waits; final identical SHA passed the full suite without code or timeout changes. TD-015 remains MONITOR. ✅
- Final visual acceptance: ⏳ fresh deployed real-device screenshot must meet the Founder reference minimum before realism is marked REACHED.

### Current commercial-parity status snapshot
| Area | Status |
| --- | --- |
| Workout essential logging | REACHED |
| Advanced workout progressive disclosure | REACHED |
| Workout session lifecycle | REACHED |
| Progress essential-first IA | REACHED |
| Nutrition entry UX | REACHED |
| Body FRONT/SIDE/BACK structure | REACHED |
| Body muscle interaction | REACHED |
| Body v5 technical implementation | REACHED |
| Body human proportions | INSUFFICIENT — awaiting deployed phone acceptance |
| Body visual realism | INSUFFICIENT — awaiting deployed phone acceptance |
| Body reference-minimum compliance | INSUFFICIENT — awaiting deployed phone acceptance |
| Exercise search/discovery | PARTIAL |
| Progress data depth | PARTIAL |
| Meal Scan coverage/accuracy | PARTIAL |
| Coach/personalization effectiveness evidence | PARTIAL |
| Native Health / Watch | INSUFFICIENT |
| External activation evidence | INSUFFICIENT |
| D7/D30 longitudinal retention evidence | INSUFFICIENT |

## Active P2 — Reconcile and verify current PRODUCT main after PR #256/#257
Status: DONE / CURRENT-MAIN VERIFIED GREEN
Owner: Command Center / Release QA
Goal: restore one canonical current-main release baseline before further product expansion.
- PRODUCT main is `0dafa0aab536548b1b80964d108228ee819155c6`. ✅
- PR #256 exact-head Gate #1921 FULL GREEN. ✅
- PR #257 exact-head Gate #1924 FULL GREEN. ✅
- PR #257 merged successfully to current main. ✅
- Post-merge Release Gate #1925 / `35981031534`: FULL GREEN. ✅
- Pages #877 / `35981030735`: build/report/deploy SUCCESS. ✅
- Keep PR #254 out of merge path until stale-base conflicts and overlapping Food scope are reconciled. ⏳

## Closed P4 — Korean official Food DB scale v1
Status: DONE / VERIFIED GREEN
Owner: AI Data / Release QA
Goal: expand Korean brand/product coverage without weakening canonical precedence or provenance.
- PR #257 infrastructure remains the Korean-first sharding/retrieval foundation. ✅
- PR #260 acquired and materialized official K-FIND data without requiring the previously blocked DATA.GO.KR service-key path. ✅
- Released K-FIND general corpus: 2,502 rows. ✅
- Released K-FIND processed corpus: 266,415 rows; 266,110 branded rows / 19,770 unique brands. ✅
- Existing USDA supplemental: 5,721 rows; GARANG canonical: 500 rows. ✅
- Total materialized local lookup records across canonical + K-FIND general + K-FIND processed + USDA: 275,138. ✅
- PR #260 exact-head Gate #1971 FULL GREEN. ✅
- Post-merge lifecycle regression was repaired by PR #264; exact-head Gate #1977 FULL GREEN, Pages #881 SUCCESS, current-main Gate #1982 FULL GREEN. ✅
- No automatic canonical overwrite; provenance/verified-only guardrails preserved. ✅

Last updated: 2026-09-25

## Active P4/P5 — Personalized Response Learning v2
Status: IMPLEMENTED IN MAIN / CURRENT-MAIN SOURCE+WEB VERIFIED GREEN / PRODUCTION BACKEND ACTIVATION PENDING
Owner: AI Data / Engineering / Release QA
Goal: close the non-UI personalization gaps by learning richer response patterns, evaluating policy offline, and creating safe exercise/nutrition adaptation shadows without autonomous escalation.

Implemented in PRODUCT PR #236:
- Intelligence Episode v1.1: time-of-day/day-of-week + next-checkin recovery delta. ✅
- User Response Model v1.1: duration/intensity/volume/timing + accept/edit/reject/execution response patterns. ✅
- Recommendation Policy Evaluation v1.1: empirical response-weighted transparent bounded candidate scoring. ✅
- Offline Policy Evaluation v1: chronological leave-future-out replay, guardrail violation measurement, observational calibration only. ✅
- Workout Prescription Shadow v1: exercise-level observed sets/reps/load/RPE learning; hold/reduce/review-progression only, never autonomous progression. ✅
- Adaptive Nutrition Learning v1: observed intake + weight-trend estimate and bounded review direction; no automatic target mutation. ✅
- Agent Context / Coach receive compact bounded outputs. ✅
- Server/browser parity + conservative regression coverage included in standard gate. ✅

Verification:
- PR #236 exact head `56c4875a80378a74da33768cc4d23760e49bf155`. ✅
- Release Gate #1795 / `35906532826`: FULL GREEN. ✅
- PR #236 merged as `9c22843eb81d8397c4cfda3fc7294a632eecadf0`. ✅
- Pages #859 / `35907286397`: SUCCESS. ✅
- Gate #1797: CANCELLED by later unrelated main push, not a test failure.
- Production Coach Activation #33: SKIPPED by approval boundary. ⏳

Next acceptance:
- Current-main Gate #1798 / `35907860238`: FULL GREEN after unrelated workout UI merge. ✅
- Pages #860 / `35907859391`: SUCCESS. ✅
- Founder-approved Production Coach activation is required before claiming the v2 server context live.
- External 2/4/8-week longitudinal data is required before claiming causal usefulness or enabling any autonomous progression/target increase.

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
- Protect CONTROL + PRODUCT main: BLOCKED / EXTERNAL GITHUB ADMIN. Rulesets are empty; installed GitHub integration cannot manage branch protection.
- Migrate production deployment auth to OIDC/WIF: PARTIAL / CODE READY / EXTERNAL GCP IAM BLOCKER. PR #255 merged; readiness audit works and reports NOT_CONFIGURED; existing deploy SA lacks `iam.workloadIdentityPools.create`.
- Restore current main release after PR #255: DONE / VERIFIED. Gate #1912 attempt 1 reproduced a browser Coach-readiness timing failure; same-SHA attempt 2 FULL GREEN without threshold weakening; Pages #875 SUCCESS.
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

## Closed P4 — Commercial Intelligence Reach v1
Status: DONE / SOURCE+WEB+PRODUCTION VERIFIED GREEN
Owner: AI Data / Engineering / Release QA
Goal: raise the remaining code-addressable personalization, workout, nutrition and physiological-signal capabilities without colliding with active Design/Workout UI work.

Delivered:
- exact exercise-dose advisory: next sets/reps/load/target RPE from observed exercise history;
- recovery/high-RPE conservative reduction paths;
- progression recommendation can be exact but is confirmation-gated and never silently applied;
- exact bounded daily-kcal target proposal from observed intake + weight trend;
- nutrition target changes are confirmation-gated and never silently applied;
- optional physiological signal contract for HRV/resting HR/sleep/stress/steps/active minutes;
- deterministic readiness fusion only when signal freshness/coverage confidence is usable;
- no-medical-diagnosis, no-state-mutation, missing-signal-is-unknown guardrails.

Verification:
- PRODUCT PR #239 exact head `1557317194756786955f3bc86157580301c9c119`.
- Exact-head Release Gate #1805 / `35910106988`: FULL GREEN.
- PR #239 merged as `0e3ad6784d0171ef30afb3530da0f65ac8b9fd15`.
- Post-merge Release Gate #1807 / `35910744543`: FULL GREEN.
- Pages #861 / `35910743274`: SUCCESS.
- Production Coach Activation #34 / `35910744575`: SUCCESS with deploy + authenticated nutrition lookup + Meal Scan + Coach + bounded-write + cleanup PASS.

Remaining external acceptance:
- Native Apple Health / Health Connect / wearable provider ingestion is NOT implemented or device-verified.
- Proprietary data-scale / food-corpus-scale parity is NOT created by code alone.
- Recommendation uplift and safe autonomous progression/target mutation require external prospective 2/4/8-week evidence.

## Closed P3 — Workout commercial parity v3 + Warm-up Calculator
Status: DONE / SOURCE+WEB+RELEASE VERIFIED GREEN
Owner: Product / Engineering / Release QA
Goal: close code-addressable Workout commercial gaps without weakening Golden Path or release gates.

Delivered:
- PR #238: set-type execution semantics, LAST NOTE continuity, direct exercise replacement, advanced plate calculator, readiness/recent-trend GARANG targets, 7D/30D + muscle-load analytics, Planner-backed 1–8 week Workout Program flow, Health interoperability contract, active Planner context recovery. ✅
- PR #240: percentage-based Warm-up Calculator using visible live working-set target, selectable 50/70/85% or 60/80% scheme, active plate rounding, typed warm-up generation, preserved working sets, completed-set overwrite guard. ✅
- Live execution state ownership was fixed through an authoritative set-plan replacement contract instead of timeout/test weakening. ✅

Verification:
- PR #238 exact-head Gate #1809 FULL GREEN; post-merge Gate #1810 FULL GREEN; Pages #862 SUCCESS. ✅
- PR #240 exact-head Gate #1814 FULL GREEN; post-merge Gate #1819 FULL GREEN; Pages #863 SUCCESS; Event Envelope #1831 SUCCESS. ✅
- PRODUCT main: `c7599d9d593561980fcabbb5da10b205d9f78c72`. ✅

Remaining:
- Real Superset/Circuit round-aware automatic execution: PARTIAL / separate task candidate.
- Native HealthKit / Health Connect / Watch provider integration: external/native blocker, not web-complete.

## Closed P4 — Intelligence Hardening v1
Status: DONE / SOURCE+WEB+PRODUCTION VERIFIED GREEN
Owner: AI Data / Engineering / Release QA
Goal: close remaining code-addressable intelligence quality gaps without touching active design/workout UI work.

Delivered:
- deterministic bilingual hybrid semantic retrieval for Memory and Coach knowledge grounding;
- User Response Model v1.2 with posterior shrinkage, timing/day/readiness segments and evidence-quality confidence;
- Recommendation Policy v1.2 with confidence-weighted empirical evidence and uncertainty penalty;
- Offline Policy Evaluation v1.1 with future-evidence exclusion;
- Workout Prescription v1.2 with RIR/RPE, failure-set and e1RM-trend awareness;
- Adaptive Nutrition v1.2 with 3-point median weight smoothing, multi-window consistency and uncertainty range;
- Intelligence Data Quality v1 for duplicate/future/chain/coverage audits;
- Recommendation Quality Eval v1 for safety/personalization/actionability/calibration observability;
- dedicated Intelligence Hardening synthetic stress suite and expanded Korean/English memory benchmark.

Verification:
- Initial Gate #1815 correctly failed a memory retrieval performance regression: precision stayed 1.0 but retrieval100Ms exceeded the 7.5s limit.
- Semantic feature caching and grounding-binding fixes were applied; no benchmark threshold weakening.
- Release Gate #1822 / `35914976924`: FULL GREEN.
- PR #242 merged as `71de869744a533f8f492b93cec79e4a2745cd6e8`.
- Post-merge Release Gate #1824 / `35915693512`: FULL GREEN.
- Pages #864 / `35915692551`: SUCCESS.
- PR #243 was closed as redundant after confirming #242 had already merged the same hardening changes.

Remaining external acceptance:
- Production Coach Activation #36 / `35917354539`: SUCCESS; server-side hardening is production-live. Post-merge Gate #1831 FULL GREEN; Pages #865 SUCCESS.
- Native health/wearable ingestion still requires provider/native implementation and device evidence.
- Recommendation uplift/causal personalization/proprietary data moat require real external longitudinal usage.

## Closed P3 — Smart Superset/Circuit execution
Status: DONE / SOURCE+WEB+RELEASE VERIFIED GREEN
Owner: Product / Engineering / Release QA
Delivered:
- explicit grouped-session launch;
- round-aware A1 -> A2 -> A1 superset progression and all-member circuit progression;
- set completion persisted into the draft owner before advancing;
- rest only at round boundaries;
- visible group / round execution state;
- active grouped identity preserved through recovery.
Verification:
- PR #244 head `bd1bb6e133d762f752e8ed25bf4e6ece5974e090`.
- Exact-head Gate #1833 / `35918285491`: FULL GREEN.
- Merge `5174df812bf4e0e4ca71a159e8ab4ac7e0fd84db`.
- Post-merge Gate #1834 / `35919023081`: FULL GREEN; Pages #866 SUCCESS.
Remaining Workout external/native gap:
- Apple Health / Health Connect / Watch provider integration.

## UI / Brand Simplification v1
Status: IN PROGRESS — Slice 1 DONE / RELEASE VERIFIED GREEN
Owner: Design / Product / Engineering / Release QA
Goal: make GARANG understandable and premium without reducing core capability.

Done — Today + Body Model:
- Today reduced to state -> judgment -> one next action -> Coach explanation.
- Legacy dashboard density internalized; compact Planner shortcut preserved.
- Final anatomy visual owner replaced with premium performance silhouette, male/female proportion awareness, quieter muscle treatment and existing interaction mapping preserved.
- PR #247 merged as `eee151ee8fe021a5ce43cbaa65c57ba878c19201`.
- Exact-head Gate #1845 FULL GREEN; post-merge Gate #1850 FULL GREEN; Pages #867 SUCCESS; Event Envelope #1901 SUCCESS.
- Pre-merge regressions found and fixed: Planner shortcut zero-size touch target and conflicting `display:grid!important` ownership. No timeout inflation or test deletion.

Next slices:
- Workout execution: remove default horizontal-density / advanced-tool overload while preserving one-tap access to advanced capabilities.
- Progress: lead with change -> GARANG interpretation -> detail instead of metric dashboard density.
- Coach: lead with one interpretation + one recommended action; keep conversation and provenance secondary.

## Closed P4 — Intelligence Quality Hardening v2 production activation
Status: PRODUCT SOURCE / WEB / PRODUCTION BACKEND VERIFIED GREEN
Owner: AI Data / Release QA
Goal: activate the merged code-addressable AI/Data maturity improvements in production without expanding autonomous authority.
- PR #246 validation bundle: merged; post-merge Gate #1851 FULL GREEN; Pages #868 SUCCESS. ✅
- PR #248 Intelligence Quality Hardening v2: merged as `26f01ad829afeeaca0deb97d0159915c315f758c`. ✅
- exact-head Gate #1855: FULL GREEN. ✅
- post-merge Gate #1856: FULL GREEN. ✅
- Pages #869: SUCCESS. ✅
- Production activation #38 skipped by the explicit fail-closed phrase boundary. Expected / safe. ✅
- Trigger-only PR #250 merged as current PRODUCT main `788aa81135fe996d28e29beaa4c578541ee77453`. ✅
- Production Coach Activation #39 / `35944749134`: deploy + public boundaries + authenticated nutrition lookup + Meal Scan + Coach + bounded-write + cleanup all PASS. ✅
- Post-activation Release Gate #1860 / `35944749127`: FULL GREEN; Pages #870 SUCCESS. ✅
- External longitudinal effectiveness, native provider integration and proprietary food-data scale remain evidence/infrastructure gaps and must not be labeled solved.

## Closed P4 — Food DB Scale v1
Status: DONE / SOURCE+WEB+RELEASE VERIFIED GREEN
Owner: AI Data / Product / Release QA
Goal: materially expand verified nutrition coverage without bloating first-load UX or weakening the Korean canonical database.

Delivered:
- preserved existing 500-row curated Korean canonical Food DB as primary. ✅
- generated 5,721-row USDA supplemental corpus from public Foundation + FNDDS bulk releases. ✅
- accepted rows: Foundation 311, FNDDS 5,430. ✅
- verified-only gate, provider/dataset/recordId provenance required, no fabricated aliases, no automatic canonical overwrite. ✅
- lazy supplemental load only on canonical miss; initial app DB hydration remains unchanged. ✅
- Meal Scan fallback order: canonical -> USDA supplemental -> source-backed web lookup. ✅
- exact/prefix supplemental index prevents full 5,721-row fuzzy scan on every miss. ✅
- regression tests cover scale, provenance, dedupe and fallback ordering. ✅

Verification:
- corpus build workflow #1 / `35947597274`: SUCCESS.
- PR #251 exact-head Gate #1876 / `35948950490`: FULL GREEN.
- PR #251 merged as `f6fc6277e59b9b2a59592ad51bc6067cc1ffdfc9`.
- current combined PRODUCT main `3b21f20a0df1dd483475f7b84b517ae03fb13537`: Pages #873 SUCCESS; Release Gate #1896 / `35961274355` FULL GREEN.

Remaining:
- K-FIND / Korean branded / restaurant-specific data breadth remains a separate corpus-acquisition task.
- Do not represent USDA supplemental coverage as Korean-brand parity.

## UI / Brand Simplification v2 — RELEASE VERIFIED GREEN
- Status: DONE / RELEASE VERIFIED GREEN.
- PRODUCT PR #249 merged to main `3b21f20a0df1dd483475f7b84b517ae03fb13537`.
- Done: classical Greco-Roman-inspired body model; current-set-first Workout execution; mobile no-horizontal-table contract; active-set progressive details; Group/Warm-up/Plate/Program/Health/Evidence progressive disclosure; Progress/Coach low-density refinement; P5 cleanup; mobile draft action touch-safety.
- Regression closure: PRODUCT PR #252 fixed Real Meal Scan latency introduced by USDA supplemental corpus expansion without weakening DB/provenance guardrails.
- Verification: PR #252 Gate #1891 GREEN; PR #249 Gate #1895 GREEN; post-merge Gate #1896 GREEN; Pages #873 SUCCESS; Event #2003 SUCCESS.
- Acceptance: Golden Path, Real Meal Scan, authenticated Coach/LLM/recovery, mobile regression, Settings touch, button health and runtime stability all pass in the final release gate.
- Next: external/longitudinal validation and human visual review of the final body model; new feature scope remains lower priority than measured user comprehension/retention.

## Active P3 — Body Model v6 deployed visual acceptance
Status: TECHNICALLY DONE / DEPLOYED / HUMAN VISUAL ACCEPTANCE REQUIRED

Acceptance evidence already VERIFIED:
- PR #272 exact-head Gate #2004 FULL GREEN.
- PRODUCT main `c09e00530b325f68e0cf90bfb16de97331a10b12`.
- Post-merge Gate #2005 FULL GREEN.
- Pages #888 SUCCESS.
- Gaussian blur removed from all six mesh assets.
- Muscle highlight/hit zones moved to native 720×1100 mesh coordinates.
- Offline/PWA precache includes all six exact Body v6 assets.

Remaining acceptance:
- Fresh real-device screenshot confirms the Body is no longer visibly blurry.
- Selected muscle overlay visually aligns with the rendered anatomy in FRONT/SIDE/BACK.
- Founder accepts the deployed model against the intended anatomy/reference quality floor.

Do not reopen renderer architecture or add another Body version unless the fresh deployed visual evidence still fails.

## Active P3 — Body Model v7 deployed visual acceptance
Status: TECHNICALLY DONE / DEPLOYED / FOUNDER VISUAL ACCEPTANCE REQUIRED

Verified:
- PR #273 exact-head Gate #2007 FULL GREEN.
- PRODUCT main `dcc4fa2ac589f4f4b158b4f5c1941b472ffec645`.
- Post-merge Gate #2008 FULL GREEN.
- Pages #889 SUCCESS.
- Male FRONT/SIDE/BACK muscular geometry upgrade is deployed without canvas clipping.
- v7 muscle-definition layer is present; mesh contrast is reduced.
- Chest and related interaction/highlight zones are remapped; non-selected zones no longer render as floating silhouettes.
- Duplicate legacy Body SVG layers are removed at mount.

Remaining acceptance:
- Fresh real-device screenshot confirms the male physique is sufficiently muscular for the Founder target.
- Selected chest/shoulder/arm/core/leg overlays visually sit on the intended anatomy in FRONT/SIDE/BACK.
- Founder confirms muscle definition is visible without the wireframe dominating.

Do not create another Body architecture/version unless the new deployed screenshot shows a concrete residual defect.

## Active P3 — Body Model v7.1 deployed visual acceptance
Status: TECHNICALLY DONE / DEPLOYED / FOUNDER VISUAL ACCEPTANCE REQUIRED

Verified:
- PR #276 exact-head Gate #2011 FULL GREEN.
- PRODUCT main `08ae9240e26b118097c99ccc1d7a168579a91aed`.
- Pages #891 SUCCESS.
- Post-merge Gate #2013 final SUCCESS on attempt 2.
- FRONT biceps/triceps/chest/shoulder/legs remapped from Founder screenshot evidence.
- FRONT legs are independent left/right thigh/calf zones.
- Definition/highlight overlays are alpha-masked to the exact visible Body asset.
- Selected overlay stroke removed and opacity reduced.

Remaining acceptance:
- Fresh phone screenshot confirms biceps no longer float beside the arms.
- Leg highlights no longer form detached wedges/blocks.
- Definition lines remain inside the visible body and overall anatomy reads naturally.

Only fix concrete residual screenshot evidence after this point.

## Active P4 — Nutrition Capture & Food Identity production activation
Status: SOURCE / WEB / RELEASE VERIFIED GREEN; PRODUCTION BACKEND ACTIVATION PENDING FOUNDER APPROVAL
Owner: AI Data / Engineering / Product / Release QA
Goal: make packaged-food capture fast and exact without substituting similar products.

Delivered:
- GTIN/EAN/UPC checksum validation + canonical GTIN-14 identity. ✅
- BarcodeDetector path + authenticated Vision barcode fallback. ✅
- Label Scan extraction of visible barcode and K-FIND item-manufacturing report number. ✅
- exact K-FIND report-number match before fuzzy product matching. ✅
- GTIN-aware source-backed nutrition lookup; unknown GTIN remains fail-closed. ✅
- confirmation-required first lookup; confirmed barcode mapping reused locally on later scans. ✅
- bounded account learning: barcode mappings 300 / misses 120 / corrections 120. ✅
- PR #271 Gate #2000 FULL GREEN; PR #274 Gate #2009 FULL GREEN. ✅
- current PRODUCT main `f72b3ef7d2546747896e64b5c5d9bbbc9c54f8f5`: Nutrition Identity v1/v1.1 preserved by ahead-only GitHub comparison; Pages #893 SUCCESS; Gate #2017 FULL GREEN. ✅

Remaining:
- explicit Founder approval for Firebase Function `api` production activation. ⏳
- live authenticated barcode Vision + GTIN-aware lookup + existing Meal Scan/Coach regression after activation. ⏳
- real-user barcode/label miss and correction rates should determine future catalog investment. ⏳

### Body v7.1 current-main verification update — 2026-09-25
- Current PRODUCT main is `f72b3ef7d2546747896e64b5c5d9bbbc9c54f8f5`.
- Gate #2017 FULL GREEN; Pages #893 SUCCESS.
- Body v7.1 overlay-fit implementation remains present after later Nutrition/Running merges.
- Remaining task is unchanged: fresh real-device visual acceptance only.

