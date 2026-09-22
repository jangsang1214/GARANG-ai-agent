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

