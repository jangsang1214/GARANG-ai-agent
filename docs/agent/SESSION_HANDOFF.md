## Latest AI/Data handoff — 2026-09-24
- Latest verified production Coach backend before PR #236: `12a362d0ba80c1e78bf27cf5b6253306ade18033` via Activation #32 / `35841937362`; deploy + Meal Scan + Coach + bounded write + cleanup all PASS.
- PRODUCT PR #236 Personalized Response Learning v2 is merged as `9c22843eb81d8397c4cfda3fc7294a632eecadf0`.
- Exact-head Gate #1795 / `35906532826`: FULL GREEN; Pages #859 / `35907286397`: SUCCESS.
- Current PRODUCT main observed: `c7599d9d593561980fcabbb5da10b205d9f78c72`; subsequent PR #235 changes only workout UI/app/test files and leaves PR #236 AI/Data files intact.
- Post-merge Gate #1797 was cancelled by that newer main push; replacement current-main Gate #1798 / `35907860238` is FULL GREEN and Pages #860 / `35907859391` is SUCCESS.
- User Response Model v1.1 learns duration/intensity/volume/timing and response/execution patterns.
- Offline Policy Evaluation v1 performs chronological leave-future-out replay with no counterfactual claim.
- Workout Prescription Shadow v1 and Adaptive Nutrition Learning v1 are observation/shadow-only and cannot autonomously escalate progression or nutrition targets.
- Production Coach Activation #33 was skipped by the explicit approval boundary; v2 server behavior is not yet claimed live.
- Highest-value remaining AI/Data evidence is external 2/4/8-week longitudinal validation; do not confuse technical readiness with proven recommendation uplift.

# GARANG Session Handoff & Recovery Protocol v7-lite

## Latest production handoff — 2026-09-22
- PRODUCT canonical main: `5f630b6ec3ed8b757a9eb6bde52d5fff50887056`.
- Production Coach Activation #27 / `35721577034`: SUCCESS.
- Live Meal Scan Vision: PASS.
- Live Coach: PASS via OpenAI `gpt-5.6-luna`.
- Bounded autonomous write: PASS; sensitive write blocked; disposable identity deleted.
- Release Gate #1659 / `35721577131`: FULL GREEN.
- Pages #848 / `35721576625`: SUCCESS.
- Real Meal Scan v1 production gap is CLOSED.
- Current highest-value work: Anonymous External Validation Sprint + 2/4/8-week longitudinal measurement. Do not return to feature expansion without external evidence or a verified critical blocker.

## Latest handoff — 2026-09-22 20:xx KST
- CONTROL main observed: `2cd573dde3abd1aa5519150ad5342ce0d3c6102a`.
- PRODUCT main observed: `0eb2a11e117c50b208581e5987c45ed7515687de`.
- PRODUCT PR #213 head: `5f5ad45a56cf976e244b8fe8bacd7e6acaabd142`; only the production Meal Scan smoke image fixture changes.
- PR #213 exact-head Release Gate #1655 / `35717702324`: FULL GREEN across core/build, WebKit including Real Meal Scan, and final verify.
- Production live Meal Scan Vision remains UNKNOWN. PR #213 metadata records Activation #26 reached the provider but failed with `502 MEAL_SCAN_PROVIDER_ERROR` using the old 1×1 PNG fixture.
- Next Founder decision: explicitly approve PR #213 merge + the intentional production activation retry. Do not merge as an unattended safe action because the merge is designed to trigger production deployment/smoke.
- After production live Vision is VERIFIED, shift the project from feature construction to anonymous external activation + 2/4/8-week longitudinal validation.

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

## Current handoff — 2026-09-22
- PRODUCT canonical main: `40e83c32eac8fd7791ee1d6023d1458cc6e6d560`.
- Current main Release Gate #1601 / `35601046564`: FULL GREEN on attempt 1.
- Pages #832 / `35601045094`: SUCCESS.
- PR #188 exact-head Gate #1599 / `35599456886`: GREEN on attempt 1; Photo Evidence v1 is merged with no Firebase Functions delta.
- PR #164 outcome-attributed User Performance learning is merged.
- PR #164 exact-head Release Gate #1525 / `35502377218`: GREEN.
- Pages #816 / `35502863525`: SUCCESS for current main.
- Post-merge Release Gate #1527 / `35502864020`: FULL GREEN.
- Production Coach backend is explicitly activated on current commercial main `fca5357d1c844bd34353a118f9b23e81410e7ca9`.
- Production Coach Activation #13 / `35503623842`: SUCCESS.
- Authenticated disposable-user smoke returned `source=llm`, provider `openai`, model `gpt-5.6-luna`, alignment verified, then deleted the disposable identity.
- Release Gate #1529 / `35503623868`: FULL GREEN.
- Pages #817 / `35503623353`: SUCCESS.

## AI/Data current handoff — Personalized Intelligence Loop v1
- Founder-approved production activation is complete.
- Activation #20 on `1723a581...` exposed a bounded createPlan display-title omission (`PLAN_TITLE_REQUIRED`) in the production write smoke; deterministic fallback hardening was added and regression-tested.
- Activation #21 / `35599747682` on `08cfa18e...`: SUCCESS; authenticated live LLM, bounded write, sensitive-write boundary and disposable cleanup all PASS.
- Release Gate #1600 / `35599747696`: FULL GREEN; Pages #831 / `35599747250`: SUCCESS.
- PRODUCT PR #186 merged Intelligence Episode v1 + User Response Model v1 + Recommendation Policy Evaluation v1.
- Exact-head Gate #1591 / `35596002250`: FULL GREEN.
- Post-merge Gate #1592 / `35596512205`: FULL GREEN.
- Pages #829 / `35596510796`: SUCCESS.
- Response learning can only constrain/simplify recommendations inside the deterministic GARANG Decision envelope.
- Production Coach backend is VERIFIED on current main `08cfa18e...` via Activation #21 / `35599747682`.
- Next AI/Data action: collect 2/4/8-week external Intelligence Episodes and measure whether response-aware personalization improves recommendation acceptance, execution and outcome.

## AI/Data production state — Autonomous Intelligence Loop v1
- PRODUCT PR #166 merged the bounded Autonomous Intelligence Loop; subsequent structured-response/write hardening is included in current main `c4da00002dbce7489593a2097dc82dc4da5b8ba4`.
- Production Coach Activation #18 / `35511759697`: SUCCESS.
- Authenticated live Coach smoke: `source=llm`, provider `openai`, model `gpt-5.6-luna`, alignment verified.
- Authenticated autonomous-write smoke: bounded `createPlan` executed and persisted; a sensitive write request remained denied/confirmation-gated; disposable account cleanup passed.
- Pages #822 / `35511758482`: SUCCESS.
- Release Gate #1543 / `35511759634` attempt 3: FULL GREEN.
- Attempts 1–2 on the identical SHA failed different WebKit lifecycle/timing assertions; attempt 3 passed the full Golden Path / Real LLM / mobile suite. Treat this as release-integrity/runtime debt, not as a closed flake.
- Raw DB authority and destructive/bulk/account/security/schema/secret/billing/production tools remain unavailable to the LLM.

## AI/Data released state
- GARANG deterministic Intelligence remains the decision owner.
- LLM remains explain-only with structural alignment verification.
- Coach gateway failures are classified rather than surfaced as one generic external connection failure.
- Low-data Coach responses remain conservative but must still provide a useful next action.
- User Performance Model v1 dimensions use `value / confidence / sampleSize / lastUpdated / evidenceIds`.
- Recommendation resolution evidence persists accept/modify/dismiss behavior.
- Confidence-gated User Performance context is available to Coach with `affectsDecision=false`.
- PR #164 adds read-only `attributedOutcomeScore` from fully attributed finalized learning cycles; it does not claim causality.

## Coach action ownership
- PRODUCT PR #176 is merged to main `0a07c4c5...`.
- Exact-head Release Gate #1559 / `35580756829`: FULL GREEN.
- Online authenticated LLM responses are the canonical action owner and preserve sanitized server action metadata in Coach thread state.
- Browser mock proposals are suppressed for server-owned responses; explicit local/offline fallback retains confirmation-first proposals.
- Duplicate P1 PRs #173–#175 are closed as superseded.
- Production Functions were not redeployed by this source-only ownership fix.

## WebKit lifecycle determinism
- PR #177 exact-head Gate #1562 passed, but immediate post-merge main Gate #1563 later reproduced the Today DOM identity assertion once.
- Subsequent main Gates #1592, #1600 and #1601 all passed on attempt 1.
- Current main #1601 passes Today action flow, Golden Path complete, authenticated Coach, Real LLM, recovery and the full mobile WebKit tail.
- Treat TD-015 as monitor-only. Reopen as P2 on recurrence; do not add broad retry/timeout masking.

## Production parity
- Current source/web main is `40e83c32...`; production Coach backend remains VERIFIED on Activation #21 revision `08cfa18e...`. PR #188 has no Functions delta, so no backend redeploy is claimed.
- Deterministic Decision Intelligence still owns judgment; typed server policy owns mutations.
- Response-derived personalization remains constraint-only and cannot autonomously increase progression.

## Next core work
1. Measure real longitudinal behavior and recommendation usefulness over 2/4/8-week windows with external users and canonical funnel events.
2. Continue active-runtime simplification and stale-PR/repository cleanup before adding new screens.
3. Keep payment/subscription implementation gated behind external retained-value validation.

## Non-blocking debt
- Main branches are not server-protected.
- Production deploy auth should migrate to OIDC/WIF.
- Functions dependency-family upgrade remains separate.
- Firebase build-image cleanup remains cost hygiene.
- Do not mix these P2 changes into intelligence PRs without a specific release-integrity reason.

## Handoff rule
Never turn old handoff text into VERIFIED evidence without observing the source. DONE requires implementation + acceptance + verification + regression consideration + material state synchronization.

## 2026-09-22 Photo Evidence v1.5 handoff
- Current PRODUCT main: `a60bf56c2a2f69a0eed138c22ee45c5f4bf76082`.
- PR #202 is merged. Workout/Nutrition Photo Evidence redesign is released with shared GARANG Evidence language and preserved device-local media ownership.
- Post-merge Gate #1625 / `35691173610`: FULL GREEN. Pages #837 / `35691172814`: SUCCESS.
- A real regression discovered during the redesign was fixed: legacy workout certification polish no longer rewrites the Photo Evidence card.
- TD-015 is reopened as active P2 due recurrence of the Today DOM identity assertion on the first exact-head Gate #1624 attempt. The exact-head rerun and post-merge main gate are GREEN, so current release remains GREEN.
- Next highest-value engineering/release task: isolate the remaining Today lifecycle identity owner before accepting reruns as normal release behavior; do not add broad retry or timeout masking.

## 2026-09-22 Real Meal Scan v1 handoff
- Current PRODUCT main: `d926b12a35105c02e240e2c0e677432b53c99d76`.
- Real Meal Scan v1 is merged and web-released: photo → authenticated Vision food/portion candidates → GARANG Food DB nutrition → user confirmation → meal save → Photo Evidence.
- Provider nutrition is ignored by contract; Vision cannot own kcal/macros or write meal state.
- Activation #24 deployed Function `api` after Meal Scan backend merge. Authenticated live Meal Scan Vision smoke was not part of that activation, so live provider execution is still UNKNOWN.
- PR #209 Gate #1644: FULL GREEN with Real Meal Scan WebKit flow.
- A separate post-merge mobile stability blocker was fixed in PR #210 by batching Workout Library async hydration; Gate #1649 and current-main Gate #1650 are FULL GREEN. Pages #844 is SUCCESS.
- Next release action: obtain explicit Founder approval for production live Meal Scan smoke/activation before claiming end-to-end production VERIFIED.

## Measurement readiness handoff — 2026-09-22
- PRODUCT main remains `5f630b6ec3ed8b757a9eb6bde52d5fff50887056`.
- PRODUCT PR #217 head `6bbe4c75d86ecded7d05ab11d3231aafa19885fa` is OPEN and exact-head GREEN via Release Gate #1675.
- PR #217 is the immediate precondition for clean external validation measurement: explicit analytics consent, Cloud Sync observability separation, first-record event, and no-food Meal Scan UX.
- Do not call this production-released until Founder-approved merge + post-merge Gate/Pages evidence.
- PRs #215/#216 are concurrent PRODUCT branches and share `01_app/app.js`; re-check mergeability/drift before release.

## Production measurement-readiness handoff — 2026-09-22
- PRODUCT current main: `0f15adbbde19b87efec31b85f3cd43599f6164fa`.
- PR #217: MERGED / RELEASED / VERIFIED GREEN.
- Release Gate #1676: FULL GREEN.
- Pages #849: SUCCESS.
- Event Envelope #1525: SUCCESS.
- External-validation measurement/privacy blocker is CLOSED.
- Highest-value next work: recruit and observe the first 10–20 unknown users against signup/onboarding → first record → Coach → next action → plan → execution intent → accumulated-value comprehension, then classify acquisition/activation/comprehension/action/retention failures.
- Do not prioritize PR #215/#216 feature scope ahead of the first external evidence batch; both currently require reconciliation with the new main.

## 2026-09-23 commercial polish handoff
- PRODUCT current main: `e84e012c3e0a0269634637c85d62bf0d19b0ece9`.
- PR #225 merged the final clean integration on top of Workout Execution UI v2.
- Release Gate #1756: FULL GREEN.
- Pages #851: SUCCESS.
- Event Envelope #1691: SUCCESS.
- Workout Execution UI v2 + Running integrity are released on current web main.
- Nutrition web fallback code is merged, but Production Coach Activation #28 skipped because production deployment requires an explicit activation commit phrase. Treat the new nutrition lookup backend as NOT YET LIVE-VERIFIED.
- Next release decision: Founder approval is required before intentionally triggering production Function activation + authenticated live nutrition lookup smoke.
- After backend parity is closed, return immediately to the first 10–20 unknown-user external validation batch.

## 2026-09-23 nutrition fallback production closure
- PRODUCT current main: `12a362d0ba80c1e78bf27cf5b6253306ade18033`.
- Nutrition fallback production activation is CLOSED / VERIFIED GREEN.
- Activation #32 / `35841937362`: SUCCESS.
- Nutrition lookup live smoke: PASS with official Starbucks source.
- Meal Scan live smoke: PASS via OpenAI `gpt-5.6-luna`.
- Coach live smoke: PASS via OpenAI `gpt-5.6-luna`.
- Bounded autonomous write: PASS; sensitive write blocked; disposable smoke account deleted.
- Release Gate #1767: FULL GREEN.
- Pages #856: SUCCESS.
- Next highest-value work: resume Anonymous External Validation Sprint and recruit/observe the first 10–20 unknown users against the Golden Path. New feature work remains frozen unless evidence or a verified critical blocker justifies it.

## 2026-09-24 Workout commercial parity handoff
- PRODUCT current main: `bd4aed95c8a43e0a1136d591ea2bb4484703115b`.
- PR #232 is MERGED.
- Exact-head Release Gate #1781: FULL GREEN.
- Post-merge Release Gate #1782: FULL GREEN.
- Pages #857: SUCCESS.
- Event Envelope #1751: SUCCESS.
- Workout commercial parity scope is CLOSED: Previous → GARANG Target → Actual, unit-safe target logic, mixed set types/RIR, notes, Superset/Circuit, reorder/replace-edit, unit-aware Plate Calculator, PR feedback, stable execution lifecycle and mobile hit safety are released.
- PR #223 was superseded by #232 after PRODUCT main drift; #232 was rebased/rebuilt cleanly on current main and preserved Meal Scan/Coach/Running changes.
- No backend activation is pending for this Workout release.
- Next highest-value project work is Anonymous External Validation + 2/4/8-week longitudinal evidence. New feature expansion should be justified by observed external-user failure or a verified critical blocker.


## 2026-09-24 Workout resilience/grouping handoff
- PRODUCT current main: `990f67a20ffce9511617753d97bcf8313ee19e7d`.
- PR #234: MERGED / Gate #1789 FULL GREEN. Direct set add/delete, active-session reload recovery, unsaved draft restoration, and live PR feedback are released.
- PR #235: MERGED / Gate #1796 GREEN on identical-head WebKit rerun. Superset/Circuit grouped draft ordering + visible group badges and 45 lb imperial bar default are released.
- The initial #235 browser failure was an unrelated Coach touch-ownership flake; identical head rerun passed the full browser suite. Keep lifecycle/touch determinism monitored rather than masking with broader retries.
- Current PRODUCT is web/PWA + Firebase; no native HealthKit/Health Connect/Watch SDK dependency is present. Do not claim native health/watch parity until a dedicated native integration path is designed, permissioned, implemented, and device-verified.
- Next highest-value project work: Anonymous External Validation + 2/4/8-week longitudinal evidence. Native integrations stay evidence-gated.

## 2026-09-24 Commercial Intelligence Reach handoff
- PRODUCT current main: `0e3ad6784d0171ef30afb3530da0f65ac8b9fd15`.
- PR #239 is MERGED / production activated.
- Exact-head Gate #1805: FULL GREEN.
- Post-merge Gate #1807 / `35910744543`: FULL GREEN.
- Pages #861 / `35910743274`: SUCCESS.
- Production Coach Activation #34 / `35910744575`: SUCCESS; deploy, nutrition lookup, Meal Scan, Coach, bounded-write and cleanup all PASS.
- Workout prescription now produces exact next sets/reps/load/target-RPE proposals from observed history but never silently progresses.
- Adaptive nutrition now produces exact bounded daily-kcal proposals from observed intake + weight trend but never silently mutates targets.
- Optional physiological signals can be normalized and conservatively fused into deterministic readiness with source/freshness/coverage confidence. Native Apple Health / Health Connect / wearable ingestion is still absent.
- Next highest-value AI/Data work is not another model feature. It is external 2/4/8-week prospective evidence and, if validated as necessary, a dedicated native/provider signal ingestion workstream.

## 2026-09-24 Workout commercial parity v3 final handoff
- PRODUCT main: `c7599d9d593561980fcabbb5da10b205d9f78c72`.
- PR #238 MERGED. Exact-head Gate #1809 FULL GREEN; post-merge Gate #1810 FULL GREEN; Pages #862 SUCCESS.
- PR #240 MERGED. Exact-head Gate #1814 FULL GREEN; post-merge Gate #1819 FULL GREEN; Pages #863 SUCCESS; Event Envelope #1831 SUCCESS.
- Warm-up Calculator is complete on main and release-verified. It derives warm-up rows from the visible live working-set target with selectable 50/70/85% or 60/80% schemes, plate rounding, canonical unit conversion, and preserved working rows.
- A real integration bug was found and fixed: app-level warm-up rendering conflicted with execution runtime `liveSetCount`; the runtime now exposes authoritative `replaceSetPlan` ownership. The previously failing WebKit mobile regression then passed.
- Remaining honest Workout gaps: (1) Superset/Circuit automatic round-aware A1 -> A2 -> A1 execution, (2) native Health/Watch provider integration. Grouping and interoperability contracts alone must not be called full parity for those two.
- Highest-value next work: anonymous external activation / longitudinal evidence. If continuing Workout parity specifically, implement and verify real Superset/Circuit execution before adding more features.

## 2026-09-24 Intelligence Hardening v1 handoff
- PRODUCT main: `71de869744a533f8f492b93cec79e4a2745cd6e8`.
- PR #242 merged Intelligence Hardening v1.
- Gate #1822 / `35914976924`: FULL GREEN after fixing semantic retrieval performance without weakening thresholds.
- Post-merge Gate #1824 / `35915693512`: FULL GREEN. Pages #864 / `35915692551`: SUCCESS.
- Memory + Coach grounding now use deterministic bilingual hybrid semantic retrieval.
- Response Model v1.2, Policy v1.2, Offline Eval v1.1, Workout Prescription v1.2 and Adaptive Nutrition v1.2 are merged.
- New Intelligence Data Quality and Recommendation Quality evaluators surface evidence integrity, calibration, actionability and safety quality to Agent Context/Coach observability.
- Founder-approved Production Coach Activation #36 / `35917354539` succeeded. Intelligence Hardening v1 server changes are production-live on activation merge `3bbb37ea119e0f6de120bcb9e4e79d78c69d8450`; post-merge Gate #1831 FULL GREEN and Pages #865 SUCCESS.
- Remaining honest AI/Data gaps are external: native/provider wearable ingestion, proprietary longitudinal data scale, and prospective 2/4/8-week recommendation uplift.

## 2026-09-24 Smart grouped Workout final handoff
- PRODUCT current main: `5174df812bf4e0e4ca71a159e8ab4ac7e0fd84db`.
- PR #244 is MERGED.
- Exact-head Gate #1833: FULL GREEN.
- Post-merge Gate #1834: FULL GREEN. Pages #866: SUCCESS. Event Envelope #1870: SUCCESS.
- Superset/Circuit is no longer partial for web execution: grouped sessions auto-advance A1 -> A2 -> A1 by round (and through all circuit members), rest at round boundaries, surface current group/round, and recover active grouped identity.
- Workout's remaining honest platform gap is native Apple Health / Health Connect / Watch integration.
- Product-level priority remains external activation / longitudinal validation rather than more Workout feature construction.

## Latest AI/Data handoff — PR #246 validation bundle
- PRODUCT main remains `5174df812bf4e0e4ca71a159e8ab4ac7e0fd84db`; PR #246 is not merged.
- PRODUCT PR #246 head is `165289dabd593f8af3d209dc01ff633d4faa447e`, mergeable, with exact-head Release Gate #1849 / `35939942308` FULL GREEN.
- PR #246 adds Food Intelligence v2, explicit Health signal import + schema v9 physiologicalSignals, Intelligence Validation Harness v2, Confidence Calibration v1, Intelligence Observability v1 and recommendation-quality benchmark coverage.
- Core and browser regression gates both pass; active Design PR #247 has no changed-file overlap with PR #246 at the observed heads.
- Food corpus scale remains materially limited: observed canonical corpus has 500 rows, 232 verified-provenance rows, 265 estimated rows, only 5 rows with aliases, and no serving-normalization rows.
- Hybrid semantic retrieval is deterministic lexical/semantic-feature retrieval, not an embedding/vector index.
- Highest-value remaining AI/Data evidence is still external 2/4/8-week longitudinal validation; technical evaluation readiness must not be described as proven recommendation uplift.
