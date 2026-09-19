# GARANG Project State

Last updated: 2026-09-20

## Current objective
Commercial GARANG has resumed after competition submission. Current focus is to preserve the Golden Path while integrating confidence-gated User Performance evidence, keeping the production Real AI Coach observable and correctly classifying gateway failures.

## Repository observations
- CONTROL: `jangsang1214/GARANG-ai-agent`.
- PRODUCT: `jangsang1214/-fitmind-ai`.
- Commercial PRODUCT main is active at `6260bcb2051f458c0a77dcbb83d95986c3fabad4`.
- Wanted release branch: `wanted/2026-release`.
- Wanted release SHA: `3acd2ae654ce0d387b64174c96a6243d89cb9b74`.
- PRODUCT PR #154 `Fix Wanted browser Real AI transport` is merged into Wanted only.

## Competition submission status
Evidence class: RECORDED from Founder report; receipt/form artifacts were not independently re-opened in this reconciliation.
- Wanted: submitted.
- 롯데: submitted.
- 브로제이: submitted.
- Competition submission P1 is therefore closed operationally.
- Competition-specific public/runtime surfaces should remain change-frozen except for critical outage/bug handling or organizer-required changes.

## VERIFIED commercial evidence
- PR #156 `Expose confidence-gated User Performance context` merged. Exact-head Release Gate #1500 / `35454549905`: FULL GREEN.
- User Performance context is read-only and confidence-gated; low-confidence/missing dimensions are withheld from trusted context and do not own decisions.
- Durable recommendation accepted/rejected/dismissed evidence is available to the User Performance Model through the canonical action durability path.
- Production Coach Live Smoke #2 / `35455269231`: authenticated text + photo both `source=llm`, provider `openai`, model `gpt-5.6-luna`; alignment verified for both and grounding verified for photo; disposable smoke identity cleanup succeeded.
- PR #158 `Classify Coach gateway failures instead of generic connection errors` merged as `6260bcb2051f458c0a77dcbb83d95986c3fabad4`. Exact-head Release Gate #1503 / `35455176855`: FULL GREEN.
- Pages #811 / `35455497330`: SUCCESS and the deployed `app.js` contains the new Coach gateway error classification.
- Post-merge Release Gate #1505 / `35455497834`: IN PROGRESS at this reconciliation observation.
- Release Gate #1449 / `35110020514`: FULL GREEN.
- Pages #799 / `35110017165`: SUCCESS.
- Production Coach Live Smoke `35101459492`: authenticated text + photo `source=llm` SUCCESS.

## VERIFIED Wanted evidence
- Canonical `/coach` remains Firebase-authenticated.
- Signed-out judge mode uses isolated `/wanted/coach` only for the explicit synthetic 14-day contract.
- Server boundary remains synthetic-contract-bound, text-only, exact-origin constrained, quota-limited and judging-period-limited.
- PR #154 Wanted Gate #97 / `35183623414`: GREEN.
- PR #154 full Release Gate #1494 / `35183623380`: FULL GREEN.
- PR #154 merged as `3acd2ae654ce0d387b64174c96a6243d89cb9b74`.
- Stable Wanted alias: `https://garang-wanted-2026-jangsang1214.vercel.app`.
- Production deployment: `dpl_DXa432LkkUdPcC2fD61ZcHHX3wDx` / READY.
- Live browser smoke VERIFIED `60초 심사 체험 → Coach → 나 준나 강해지고싶어` returns a context-aware Real AI answer without local fallback.

## Product / AI state
- Deterministic GARANG State/Decision Intelligence remains judgment owner.
- LLM remains bounded explanation/language/multimodal context.
- Intelligence Learning Contract v1 already links `decisionId → recommendationId → actionId → planId → executionId → outcomeId`.
- Outcome learning is still advisory-only; the next product-intelligence step is to turn accumulated outcomes into an explicit, inspectable User Performance Model rather than adding chatbot breadth.

## Stable
- Commercial GARANG baseline: GREEN / frozen through competition handoff.
- Wanted source/CI: GREEN.
- Wanted production Firebase API + CORS boundary: GREEN.
- Wanted public 14-day interactive runtime: GREEN.
- Wanted public visible Real AI Coach response: GREEN.
- Competition submission execution: RECORDED COMPLETE for Wanted / 롯데 / 브로제이.

## Broken / blockers
- No VERIFIED P0/P1 production-provider outage exists: authenticated production text/photo Coach live smoke is GREEN.
- A user-visible diagnostic defect was VERIFIED: the browser previously collapsed auth, rate-limit, provider, timeout and network failures into the same "외부 AI 연결 실패" message. PR #158 fixes the classification while preserving deterministic local fallback.
- The exact historical HTTP/error code behind a previously observed user fallback remains UNKNOWN unless that specific request evidence is available.
- Firebase build-image cleanup warning remains non-blocking cost hygiene.

## Next priorities
1. Continue User Performance Model v1 from the released read-only confidence-gated context into longitudinal validation using real 2/4/8-week user evidence; do not transfer decision ownership to the LLM.
2. Simplify active frontend runtime ownership, especially redundant remount/observer/retry paths, before adding new recovery layers.
3. Measure recommendation acceptance/rejection/dismissal → execution → outcome using the existing canonical analytics and learning IDs.
4. P2 protect CONTROL + PRODUCT main and migrate production deploy credentials toward OIDC/WIF without blocking Golden Path work.
