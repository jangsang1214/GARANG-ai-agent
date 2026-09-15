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

## Current handoff
- PRODUCT current VERIFIED main is `9e853e8f9ba854b616eb894af5b178805bbce0e8`, merge commit for PR #114 `Merge Today workout execution into preparation`.
- PR #114 verified head `60be81a43e9f5e6c40e0c4bf21241b9ca4be19ba` passed exact-head Release Gate #1318: GREEN.
- PR #114 merged to main as `9e853e8f...` and post-merge push Release Gate #1319 passed `core-build-rules`, `browser-webkit`, and `verify`: GREEN.
- Pages #780 on the merge commit completed GREEN; Founder OS Event Envelope runs for main completed GREEN.
- Final Today model: GARANG judgment/plan → `오늘 운동 준비하기` → optional progressive details → `운동 시작` → canonical Workout execution; separate standalone execute CTA stays as canonical owner in DOM but is visually/accessibility-hidden only after successful preparation integration.
- Generated workout plans reuse the existing Workout Intelligence import path; otherwise `운동 시작` delegates to the canonical Today execute action. No new mutation path exists.
- Bottom `체크인` remains the bottom-most touch-safe Today utility and reuses the existing canonical check-in modal/write owner.
- Advanced workout generation controls remain available behind disclosure.
- Product Consolidation PR #104 and PR #111 lifecycle/check-in integrity remain preserved.
- GARANG deterministic decision identity remains authoritative. LLM remains explanation/orchestration only and cannot mutate state directly.
- Repository/UI final integration is GREEN. Do not start another broad UI redesign without new external-user evidence.
- Founder real-device validation remains PARTIAL GREEN through iPhone Chrome app load → onboarding → Today → first record → Coach; later plan/execution/persistence/Accumulation and target in-app browser remain unverified.
- Live production Real LLM activation remains UNKNOWN. Commercial-production readiness remains RED.

## Product quality judgment
- Today / Record / Coach / Progress is the locked release IA baseline.
- The final Today workout preparation/execution integration closes the remaining duplicate-action UX gap without changing canonical ownership.
- Repository/product implementation is GREEN; this is not equivalent to commercial production readiness.

## Next recommended work
1. Production Real AI Coach activation/verification: production API/secret activation (explicit Founder approval required) → Functions production config/deploy verification → authenticated live Coach smoke → two-user personalization differentiation.
2. Complete real iPhone Golden Path through plan → execution → persistence → Accumulation and target in-app browser.
3. Prepare Wanted AI Championship submission copy/demo evidence and submit after production and real-device evidence are complete.
4. In parallel when approved official nutrition data is available, run the corpus planner, review ambiguous mappings, apply only traceable replacements and re-audit quality counts.

## Handoff rule
Never turn old handoff text into VERIFIED evidence without observing the source. DONE requires implementation + acceptance + verification + regression consideration + material state synchronization.
