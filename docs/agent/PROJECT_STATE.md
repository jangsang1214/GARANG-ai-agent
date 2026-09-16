# GARANG Project State

Last updated: 2026-09-16

## Current objective
Close two P1 threads without mixing them: (1) finish PRODUCT PR #123 Coach reconnect/UI stabilization through a reliable full WebKit Release Gate, merge and production deploy only after approval; (2) close GARANG's AI/Data learning loop with the additive Intelligence Learning Contract in stacked Draft PR #124. Do not treat implementation, merge, deployment, or live provider success as interchangeable evidence.

## Repository observations
- CONTROL: `jangsang1214/GARANG-ai-agent`; orchestration/policy/project state. Mutation policy remains `branch-pr`.
- PRODUCT: `jangsang1214/-fitmind-ai`; implementation/tests/CI/releases.
- PRODUCT current main remains `4c18ce254494e458de43c1d9e7030a09bfdb0a22` (PR #122 merge baseline).
- PRODUCT PR #123 is OPEN / UNMERGED on `agent/coach-multimodal-hardening-2026-09-16`, exact head `ef17f0673b47b4adb0b807ed89d423b9a0d97813`.
- PRODUCT Draft PR #124 is OPEN / UNMERGED and stacked on PR #123, branch `agent/intelligence-learning-contract-v1-2026-09-16`, exact head `aabf5eadf38324a4503abc1000ff1c0ad1fa33ac`.
- CONTROL reconciliation is isolated on `agent/reconcile-learning-contract-2026-09-16`; main has not been mutated.

## PR #123 — Coach reconnect / UI stabilization
Founder-reported intended behavior at head `ef17f067...`:
- provider request budget changed from 20s x1 to 25s with at most one retry;
- retry only transient `LLM_TIMEOUT`, network and OpenAI 5xx failures; auth failures such as 401 are not retried;
- Firebase Function timeout raised 30s → 60s;
- Coach limits relaxed to 40/10min and 200/day;
- no separate short browser-side Coach timeout;
- GARANG deterministic Decision Intelligence ownership and fail-closed local Coach fallback preserved;
- Today bottom Check-in, Today action flow, Simplified Shell auth/render timing and Nutrition recommendation-test race were addressed.

VERIFIED GitHub evidence:
- PR #123 is open and not merged.
- Exact-head Release Gate core/build/security/Firebase/Firestore job is GREEN.
- Exact-head WebKit run `35067308863` failed at `Verify Today bottom Check-in CTA`; downstream browser steps were skipped.
- Therefore PR #123 is not release-complete from GitHub evidence yet even though targeted follow-up WebKit checks were reported GREEN.
- The exact `code` for the Founder's newest production AI connection failure remains UNKNOWN. Earlier `LLM_TIMEOUT` evidence must not be assumed to be the same incident.

## PR #124 — Intelligence Learning Contract v1
Purpose: turn GARANG's separate decision, recommendation, action, plan, execution and outcome records into one attributable learning unit:

`decisionId → recommendationId → actionId → planId → executionId → outcomeId`

Implemented scope:
- Existing Agent Contract recommendation lifecycle is extended rather than duplicated.
- `decisionId` / `decisionMode` survive proposal → modification → confirmation.
- Confirmed canonical Daily Plan rows and confirmation actionLog carry decision/recommendation identity.
- Browser/core and Functions read-only learning graph builders derive stable execution/outcome IDs from existing evidence.
- Outcome Learning v2 exposes `interventionLearning` as advisory-only evidence.
- Guardrails remain: no silent mutation, no automatic progression increase, no raw chat requirement, no autonomous LLM tool calling.
- Focused root/Functions/canonical-plan linkage tests are included in `npm test`.

VERIFIED #124 evidence:
- Core/Functions/security/Commercial Core/build/Firebase public health/Firestore emulator are GREEN on exact head `aabf5ead...`.
- Browser attempt 1 failed `Today bottom Check-in CTA`, the same assertion already observed on #123.
- Browser attempt 2 passed Today CTA, Today visual parity, Daily Plan, Simplified Shell, Planner, Nutrition, truth surface and Golden Path integration, then failed `Golden Path complete journey` because WebKit recorded two production `/api/coach` access-control/CORS console errors.
- Browser attempt 3 failed the same `Today bottom Check-in CTA` assertion as attempts on #123/attempt 1.
- After three bounded attempts, further blind reruns are stopped. The repeated CTA failure is now a VERIFIED stacked-base WebKit release blocker; the one later CORS failure remains a secondary browser/network stability signal to recheck after the CTA blocker is fixed.
- No merge or production deploy has been performed for #124.

## AI/Data architecture judgment
- VERIFIED baseline: deterministic GARANG State/Decision Intelligence owns judgment; LLM remains a bounded explanation/language layer.
- Before #124 the largest AI/Data gap was attribution: Recommendation → Action → Outcome existed in separate structures but not as a stable causal learning record.
- #124 closes the first structural layer of that gap for confirmed/applied recommendations.
- Remaining gap after #124: rejected/dismissed recommendation outcomes are not yet durably persisted into the learning graph; this belongs in the next personalization layer, not in the current release-critical scope.

## Stable
- Golden Path remains Onboarding → Today → Record → Coach → Plan → Confirmation → Execution → Record → Progress/Accumulation.
- `GARANG decides → LLM explains → User confirms → GARANG acts.` remains the safety/ownership contract.
- Food corpus and existing deterministic nutrition/workout intelligence remain unchanged by #124.
- Main has not changed during this AI/Data work.

## In progress / blockers
- P1 PR #123 full WebKit/release reconciliation: YELLOW. Repeated blocker: standalone Today workout execution CTA is sometimes visually restored after the workout-preparation integration owns execution.
- The likely race is in the #123 Today workout-prep presentation/reconcile path, but exact root cause remains INFERRED until the UI/Release owner patches and re-verifies it.
- P1 PR #123 merge/deploy: NOT DONE.
- P1 newest production Coach failure root cause: UNKNOWN until privacy-safe live `code` / `providerStatus` is captured after deployment.
- P1 PR #124 Intelligence Learning Contract: IMPLEMENTED, core verification GREEN, full release verification YELLOW because its stacked base is not browser-stable.
- Real production text Coach + photo Coach post-deploy smoke: NOT RUN for the #123 bundle.
- Commercial production readiness remains separate and not implied by repository GREEN.

## Next priorities
1. Fix/reconcile the smallest #123 Today workout-preparation CTA restore/reconcile race and run one complete WebKit gate; do not modify #124 AI/Data logic to mask this UI blocker.
2. If full WebKit then reaches `Golden Path complete journey`, recheck whether production `/api/coach` CORS/access-control console errors reproduce; fix only if reproducible.
3. When PR #123 is reliably GREEN, Founder-approved sequence is merge #123 → deploy Functions/Pages → verify POST 401 / GET 405 → run real authenticated text Coach + photo Coach; capture only privacy-safe error metadata if failure recurs.
4. Rebase/retarget #124 onto the resulting main, run the full Release Gate again, then merge only with approval.
5. After P1 linkage is released, start User Performance Model v1 using `State × Recommendation × Action × Outcome` evidence with confidence/sample-size/evidence IDs; do not jump to ML/vector infrastructure first.
