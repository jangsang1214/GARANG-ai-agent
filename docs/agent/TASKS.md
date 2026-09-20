# GARANG Tasks

Last updated: 2026-09-20

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

## Active P2 — WebKit lifecycle determinism
Status: OPEN / RELEASE-INTEGRITY DEBT
Owner: Engineering / Release QA
Goal: make current-main browser verification deterministic without relying on repeated reruns.
Evidence:
- Release Gate #1543 attempt 1 failed a Golden Path Coach-action wait on `c4da0000...`.
- Attempt 2 failed Today bottom Check-in readiness on the identical SHA.
- Attempt 3 passed the entire browser/Golden Path suite unchanged.
Acceptance:
- Identify the active lifecycle/observer/readiness race.
- Remove duplicate/retry ownership rather than increasing arbitrary waits.
- Demonstrate repeated same-SHA WebKit success without functional regression.

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
