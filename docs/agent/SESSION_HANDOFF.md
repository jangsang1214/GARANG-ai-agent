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
- Commercial PRODUCT main is canonical at `6260bcb2051f458c0a77dcbb83d95986c3fabad4`.
- PR #156 User Performance context exact-head Release Gate #1500 / `35454549905`: FULL GREEN and merged.
- PR #158 Coach gateway error-classification exact-head Release Gate #1503 / `35455176855`: FULL GREEN and merged.
- Pages #811 / `35455497330`: SUCCESS; deployed app.js directly observed with the new classifier.
- Post-merge main Release Gate #1505 / `35455497834`: IN PROGRESS at this observation.
- Production Coach Live Smoke #2 / `35455269231`: authenticated text + photo `source=llm`, OpenAI `gpt-5.6-luna`, alignment verified and photo grounding verified; disposable identity deleted.
- Wanted release branch: `wanted/2026-release`.
- Wanted release SHA: `3acd2ae654ce0d387b64174c96a6243d89cb9b74`.
- Wanted PR #154 `Fix Wanted browser Real AI transport` merged.
- Wanted Gate #97 / `35183623414`: GREEN.
- Full Release Gate #1494 / `35183623380`: FULL GREEN.
- Wanted production Vercel deployment: `dpl_DXa432LkkUdPcC2fD61ZcHHX3wDx` / READY.
- Wanted stable alias: `https://garang-wanted-2026-jangsang1214.vercel.app`.
- Live public browser smoke VERIFIED `60초 심사 체험 → Coach → 나 준나 강해지고싶어` returns context-aware Real AI output without local fallback.

## Competition submissions
Evidence class: RECORDED from Founder report on 2026-09-17; submission receipts/forms were not independently re-opened during this reconciliation.
- Wanted: submitted.
- 롯데: submitted.
- 브로제이: submitted.
- Competition submission P1 is operationally closed.
- Keep competition-specific deployed/runtime surfaces stable after submission; change only for critical outage/bug handling or organizer-required updates.

## AI/Data released state
- Deterministic GARANG State/Decision Intelligence remains judgment owner.
- LLM remains bounded explanation/language/multimodal context.
- User Performance Model v1 is now released as read-only confidence-gated context with evidence-aware dimensions.
- Durable recommendation accepted/rejected/dismissed evidence is persisted through the canonical action durability path.
- Production Real AI Coach was re-verified live on 2026-09-20; there is no VERIFIED provider outage.
- PR #158 fixes a misleading browser diagnostic that previously called all gateway/auth/rate-limit/network failures "external AI connection failure".

## Next core priority — User Performance Model v1 longitudinal validation
Route: Product + AI Data + Engineering + Release QA.
Goal: turn accumulated action/execution/outcome evidence into a durable, inspectable model of how this user performs and responds over time.

Guardrails:
- Reuse existing canonical state and learning IDs; do not create a competing truth store.
- Separate observations from inferences and attach confidence/evidence.
- Improve interpretation and recommendation inside the Golden Path before adding UI surface.
- No silent goal/plan changes.
- Insufficient/stale data must fail conservatively.
- Verification must include persistence and regression of the existing Golden Path/Coach.

## Release-channel decision
Commercial GARANG PRODUCT main is the canonical product. Competition derivatives remain isolated snapshots and do not automatically flow back into commercial GARANG.

## Non-blocking debt
- Functions dependency audit requires a dedicated breaking-upgrade PR.
- CONTROL tooling modernization remains planned.
- CONTROL/PRODUCT main are not server-protected.
- Production deploy auth should migrate to OIDC/WIF after verified replacement.
- Firebase build-image retention cleanup remains reviewed cost hygiene.

## Handoff rule
Never turn old handoff text into VERIFIED evidence without observing the source. Founder-reported external actions are RECORDED until their artifacts are independently observed. DONE requires implementation + acceptance + verification + regression consideration + material state synchronization.
