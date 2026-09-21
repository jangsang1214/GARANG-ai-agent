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

## Current handoff — 2026-09-21
- PRODUCT canonical main: `0a07c4c5bd19397f43bfe9eaedd20c524f7620da`.
- PR #164 outcome-attributed User Performance learning is merged.
- PR #164 exact-head Release Gate #1525 / `35502377218`: GREEN.
- Pages #816 / `35502863525`: SUCCESS for current main.
- Post-merge Release Gate #1527 / `35502864020`: FULL GREEN.
- Production Coach backend is explicitly activated on current commercial main `fca5357d1c844bd34353a118f9b23e81410e7ca9`.
- Production Coach Activation #13 / `35503623842`: SUCCESS.
- Authenticated disposable-user smoke returned `source=llm`, provider `openai`, model `gpt-5.6-luna`, alignment verified, then deleted the disposable identity.
- Release Gate #1529 / `35503623868`: FULL GREEN.
- Pages #817 / `35503623353`: SUCCESS.

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

## Production parity
- Production Coach backend remains VERIFIED on activated revision `c4da0000...`; current web/source main is `0a07c4c5...`.
- The new P1 change does not require a Functions code change, but source/backend SHA parity is no longer literal after the browser-only merge.
- Deterministic Decision Intelligence still owns judgment; typed server policy owns mutations.

## Next core work
1. Fix recurrent WebKit lifecycle/timing nondeterminism in active Today / Golden Path runtime ownership.
2. Measure real longitudinal behavior and recommendation usefulness over 2/4/8-week windows with external users and canonical funnel events.
3. Continue active-runtime simplification and stale-PR/repository cleanup before adding new screens.
4. Keep payment/subscription implementation gated behind external retained-value validation.

## Non-blocking debt
- Main branches are not server-protected.
- Production deploy auth should migrate to OIDC/WIF.
- Functions dependency-family upgrade remains separate.
- Firebase build-image cleanup remains cost hygiene.
- Do not mix these P2 changes into intelligence PRs without a specific release-integrity reason.

## Handoff rule
Never turn old handoff text into VERIFIED evidence without observing the source. DONE requires implementation + acceptance + verification + regression consideration + material state synchronization.
