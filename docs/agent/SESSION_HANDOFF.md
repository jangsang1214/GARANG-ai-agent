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

## Current handoff — 2026-09-20
- PRODUCT canonical main: `5483b848e2973f2bf66a1a67148f3c5a5142fb66`.
- PR #164 outcome-attributed User Performance learning is merged.
- PR #164 exact-head Release Gate #1525 / `35502377218`: GREEN.
- Pages #816 / `35502863525`: SUCCESS for current main.
- Post-merge Release Gate #1527 / `35502864020`: FULL GREEN.
- Production Coach backend is explicitly activated on current commercial main `fca5357d1c844bd34353a118f9b23e81410e7ca9`.
- Production Coach Activation #13 / `35503623842`: SUCCESS.
- Authenticated disposable-user smoke returned `source=llm`, provider `openai`, model `gpt-5.6-luna`, alignment verified, then deleted the disposable identity.
- Release Gate #1529 / `35503623868`: FULL GREEN.
- Pages #817 / `35503623353`: SUCCESS.

## AI/Data merged — PR #166
- PRODUCT PR #166 `Build Autonomous Intelligence Loop v1` is MERGED as `5483b848e2973f2bf66a1a67148f3c5a5142fb66`.
- Exact-head Release Gate #1530 / `35505697471` attempt 2: FULL GREEN.
- Post-merge Release Gate #1531 / `35506440313` attempt 2: FULL GREEN.
- Pages #818 / `35506439803`: SUCCESS for merged main.
- The merged change adds bounded typed user-scoped Coach write tools; explicit-evidence gates for factual records; authenticated Firestore transaction ownership; idempotency and rollback metadata; longitudinal learning metrics; deterministic Personalization Policy v1; and structured LLM tool calls.
- Raw DB authority, delete/bulk/account/security/schema/secret/billing/production tools are not exposed to the LLM.
- Production Coach backend remains on `fca5357d...`; Production Coach Activation #14 was SKIPPED, so the new write path is NOT deployed or live-smoke verified yet.
- Post-merge attempt 1 hit the same unchanged Today bottom Check-in WebKit timing/assertion flake; identical merged SHA passed the full browser suite on attempt 2.

## AI/Data released state
- GARANG deterministic Intelligence remains the decision owner.
- LLM remains explain-only with structural alignment verification.
- Coach gateway failures are classified rather than surfaced as one generic external connection failure.
- Low-data Coach responses remain conservative but must still provide a useful next action.
- User Performance Model v1 dimensions use `value / confidence / sampleSize / lastUpdated / evidenceIds`.
- Recommendation resolution evidence persists accept/modify/dismiss behavior.
- Confidence-gated User Performance context is available to Coach with `affectsDecision=false`.
- PR #164 adds read-only `attributedOutcomeScore` from fully attributed finalized learning cycles; it does not claim causality.

## Production parity
- Current commercial web and production Coach backend both include PR #164 server-side User Performance attribution.
- Production parity is VERIFIED by Activation #13 plus authenticated `source=llm` smoke.
- Deterministic Decision Intelligence still owns judgment; UPM context remains read-only and confidence-gated.

## Next core work
1. Separately gate production activation and authenticated live smoke for structured tool calls and actual transactional user-data writes.
2. Measure real longitudinal behavior and recommendation usefulness over 2/4/8-week windows.
3. Continue active-runtime simplification based on verified ownership conflicts, not inactive files.

## Non-blocking debt
- Main branches are not server-protected.
- Production deploy auth should migrate to OIDC/WIF.
- Functions dependency-family upgrade remains separate.
- Firebase build-image cleanup remains cost hygiene.
- Do not mix these P2 changes into intelligence PRs without a specific release-integrity reason.

## Handoff rule
Never turn old handoff text into VERIFIED evidence without observing the source. DONE requires implementation + acceptance + verification + regression consideration + material state synchronization.
