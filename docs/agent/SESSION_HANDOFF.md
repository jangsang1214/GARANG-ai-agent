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

## Current handoff — 2026-09-16
- PRODUCT current merged main remains `4c18ce254494e458de43c1d9e7030a09bfdb0a22`.
- PRODUCT PR #123 `agent/coach-multimodal-hardening-2026-09-16` is OPEN / UNMERGED at `ef17f0673b47b4adb0b807ed89d423b9a0d97813`.
- PR #123 carries Coach reconnect hardening (25s + one transient retry, 60s Function timeout, relaxed rate limits) plus Today/Shell/Nutrition timing fixes. Deterministic Decision Intelligence ownership and local fail-closed fallback must remain unchanged.
- Exact-head #123 GitHub Release Gate core job is GREEN, but browser WebKit run `35067308863` failed `Today bottom Check-in CTA`. Do not treat PR #123 as release-complete.
- The exact privacy-safe `code` for the Founder's newest production AI connection failure is still UNKNOWN. Do not assume it is the earlier `LLM_TIMEOUT`.

## AI/Data P1 implemented
- PRODUCT Draft PR #124 `agent/intelligence-learning-contract-v1-2026-09-16` is OPEN / UNMERGED and stacked on PR #123.
- Exact #124 head: `aabf5eadf38324a4503abc1000ff1c0ad1fa33ac`.
- Purpose: make intervention evidence attributable across `decisionId → recommendationId → actionId → planId → executionId → outcomeId`.
- Existing recommendation proposal/modify/confirm lifecycle is reused; no parallel action system was added.
- Canonical plan rows and confirmation actionLog now retain decision/recommendation identity.
- Browser/core + Functions learning graphs are read-only and derive stable execution/outcome IDs from existing evidence.
- Outcome Learning v2 exposes intervention learning as advisory-only evidence; it cannot silently mutate state or automatically increase progression.
- Focused causal-linkage tests were added to the root test chain.
- Exact-head #124 core/build/security/Functions/Firebase/Firestore gate is GREEN.

## Browser blocker evidence
Three bounded WebKit attempts were observed on the #124 stacked head:
1. Attempt 1 failed `Today bottom Check-in CTA` with `standalone Today workout execution CTA must be visually removed`.
2. Attempt 2 passed that CTA and all browser checks through Golden Path integration, then failed `Golden Path complete journey` because WebKit captured two production `/api/coach` access-control/CORS console errors.
3. Attempt 3 failed the same Today CTA assertion again.

Judgment: stop blind reruns. The repeated Today CTA failure is a VERIFIED stacked-base release blocker. The likely restore/reconcile timing race in `garang-today-workout-prep-integration-v1.js` remains INFERRED until targeted UI/Release work verifies a fix. The later `/api/coach` CORS signal should be rechecked only after the CTA blocker is fixed. Do not patch unrelated UI behavior inside #124 AI/Data scope.

## Required release sequence
1. Fix the smallest #123 Today workout-preparation CTA restore/reconcile race and run one full WebKit gate.
2. If the gate reaches complete journey, recheck whether production `/api/coach` CORS/access-control console errors reproduce.
3. When #123 is reliably GREEN, merge only with Founder approval.
4. After approved merge, deploy Functions/Pages and verify unauthenticated POST 401 / wrong-method GET 405.
5. Run real authenticated production text Coach + photo Coach. On failure record only `code` and `providerStatus`; never tokens or API keys.
6. Rebase/retarget #124 onto the resulting main and run its complete Release Gate again.
7. Merge #124 only with Founder approval and reliable GREEN evidence.
8. Then start User Performance Model v1 using `State × Recommendation × Action × Outcome` with confidence/sample-size/evidence IDs; do not jump to ML/vector infrastructure first.

## Known remaining AI/Data gap
The current #124 contract closes attribution for confirmed/applied recommendations. Durable learning from explicitly rejected/dismissed recommendations is not yet part of the causal graph. Treat this as follow-up personalization work, not a reason to expand the current release-critical scope.

## CONTROL state
- CONTROL reconciliation branch: `agent/reconcile-learning-contract-2026-09-16`.
- `PROJECT_STATE.md`, `TASKS.md`, `RELEASE_STATUS.md` and this handoff are reconciled on that branch.
- CONTROL main has not been changed by this work.

## Handoff rule
Never turn old handoff text into VERIFIED evidence without observing the source. DONE requires implementation + acceptance + verification + regression consideration + material state synchronization. Merge/deployment/live provider success are separate evidence states.
