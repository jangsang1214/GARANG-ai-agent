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
- PRODUCT canonical main: `47d95a71c4a526ba966656a8f923ebf0b1db46cf`.
- PR #164 outcome-attributed User Performance learning is merged.
- PR #164 exact-head Release Gate #1525 / `35502377218`: GREEN.
- Pages #816 / `35502863525`: SUCCESS for current main.
- Post-merge Release Gate #1527 / `35502864020`: FULL GREEN.
- Production Coach backend was explicitly activated at `e238b6164da976219da328ef0fe3bd20ea0e7807`.
- Production Coach Activation #11 / `35502595878`: SUCCESS.
- Authenticated disposable-user smoke returned `source=llm`, provider `openai`, model `gpt-5.6-luna`, alignment verified, then deleted the disposable identity.
- Release Gate #1526 / `35502595898`: FULL GREEN for the verified production Coach revision.

## AI/Data released state
- GARANG deterministic Intelligence remains the decision owner.
- LLM remains explain-only with structural alignment verification.
- Coach gateway failures are classified rather than surfaced as one generic external connection failure.
- Low-data Coach responses remain conservative but must still provide a useful next action.
- User Performance Model v1 dimensions use `value / confidence / sampleSize / lastUpdated / evidenceIds`.
- Recommendation resolution evidence persists accept/modify/dismiss behavior.
- Confidence-gated User Performance context is available to Coach with `affectsDecision=false`.
- PR #164 adds read-only `attributedOutcomeScore` from fully attributed finalized learning cycles; it does not claim causality.

## Important deployment boundary
- Pages/current commercial web includes #164.
- Production Coach backend is still the verified `e238b616...` deployment.
- #164 changes server-side UPM attribution source, but its Production Coach Activation run was skipped by design.
- Do not claim production server parity with #164 until an explicitly approved deployment + authenticated live smoke succeeds.

## Next core work
1. Ask Founder for explicit approval before deploying #164 server changes to production.
2. Measure real longitudinal behavior rather than adding chatbot breadth: recommendation shown → accept/modify/dismiss → execution → outcome → subsequent recommendation.
3. Use the accumulated evidence to validate UPM confidence and recommendation usefulness over 2/4/8-week windows.
4. Continue active-runtime simplification based on verified ownership conflicts, not inactive files.

## Non-blocking debt
- Main branches are not server-protected.
- Production deploy auth should migrate to OIDC/WIF.
- Functions dependency-family upgrade remains separate.
- Firebase build-image cleanup remains cost hygiene.
- Do not mix these P2 changes into intelligence PRs without a specific release-integrity reason.

## Handoff rule
Never turn old handoff text into VERIFIED evidence without observing the source. DONE requires implementation + acceptance + verification + regression consideration + material state synchronization.
