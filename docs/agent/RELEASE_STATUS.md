# GARANG Release Status

Last updated: 2026-09-16

## Overall decision
YELLOW for the current release train. PRODUCT main `4c18ce254494e458de43c1d9e7030a09bfdb0a22` remains the last merged baseline. PR #123 and stacked Draft PR #124 are both open/unmerged. Core/build/security/Firebase/Firestore verification is GREEN, but full WebKit is not reliably GREEN, so merge/production deployment must not be reported as complete.

## PRODUCT main
Decision: GREEN as the last merged baseline.
- Current main: `4c18ce254494e458de43c1d9e7030a09bfdb0a22`.
- This is the prior PR #122 production Real AI Coach timeout-fix baseline.
- Nothing from PR #123 or #124 has been merged to main in this reconciliation.

## PR #123 — Coach reconnect + UI stabilization
Decision: YELLOW / OPEN / UNMERGED.
- Exact head: `ef17f0673b47b4adb0b807ed89d423b9a0d97813`.
- Intended Coach transport changes: 25s request timeout, at most one retry, transient-only retry policy, no retry on 401/auth errors, Firebase Function timeout 60s, limits 40/10min and 200/day.
- Deterministic GARANG decision ownership and fail-closed local Coach fallback remain required invariants.
- UI scope includes Today bottom Check-in, Today action flow, Simplified Shell auth/render timing and Nutrition test readiness race.
- Exact-head Release Gate run `35067308863`: core-build-rules GREEN; browser-webkit FAILED at `Verify Today bottom Check-in CTA`; final verify FAILED.
- Merge: NOT DONE. Production Functions/Pages deploy for #123: NOT DONE.

## PR #124 — Intelligence Learning Contract v1
Decision: YELLOW / IMPLEMENTED / CORE GREEN / STACKED BROWSER BLOCKER.
- Draft PR #124 is stacked on PR #123.
- Exact head: `aabf5eadf38324a4503abc1000ff1c0ad1fa33ac`.
- Learning chain: `decisionId → recommendationId → actionId → planId → executionId → outcomeId`.
- Existing recommendation lifecycle is reused; no autonomous LLM tool calling, no ML/vector DB, no silent mutation and no automatic progression increase.
- Outcome Learning consumes the causal graph as advisory-only evidence.
- Root, Functions and canonical-plan causal-linkage tests were added to `npm test`.

### #124 verification evidence
- Core/build/security: GREEN.
- GARANG Intelligence Core v1: GREEN.
- Action & Data Reliability: GREEN.
- Commercial Core + regressions: GREEN.
- Functions production dependency security: GREEN.
- Firebase public health: GREEN.
- Firestore emulator rules: GREEN.
- Browser attempt 1: FAILED `Today bottom Check-in CTA`, matching base #123.
- Browser attempt 2: previous CTA PASSED; Today visual parity, Daily Plan, Simplified Shell, Planner, Nutrition, truth surface and Golden Path integration PASSED; then `Golden Path complete journey` FAILED because WebKit captured two production `/api/coach` access-control/CORS console errors.
- Browser attempt 3: FAILED the same `Today bottom Check-in CTA` assertion again.
- Bounded retries are stopped. The repeated CTA failure is a VERIFIED release blocker in the stacked #123 browser/UI baseline. The exact race mechanism is still INFERRED until a targeted patch is verified.
- Merge/deploy: NOT DONE.

## Production Real AI Coach
Decision: YELLOW.
- Previous production infrastructure/secret/public boundary remains established on main.
- The Founder's newly observed production AI connection failure has no verified exact `code` yet.
- Do not label the newest incident `LLM_TIMEOUT` merely because an earlier incident used that code.
- Required after #123 release approval: deploy Functions/Pages, confirm unauthenticated POST 401 and wrong-method GET 405, then run real authenticated text Coach + photo Coach. On failure, retain only privacy-safe `code` and `providerStatus`.

## Golden Path / regression
Decision: YELLOW for the unmerged release train.
- Core and most isolated browser slices are GREEN.
- Repeated WebKit blocker: Today workout-preparation integration sometimes fails to keep the legacy standalone workout execution CTA visually removed.
- One run progressed beyond that blocker and exposed production `/api/coach` access-control/CORS console errors in the complete-journey test; treat this as a secondary signal and re-evaluate only after the CTA blocker is fixed.
- Do not weaken the release gate, hide browser errors, or alter AI/Data behavior merely to force GREEN.

## Remaining release sequence
1. Fix the smallest verified #123 Today workout-preparation CTA restore/reconcile race and run one complete WebKit gate.
2. If the gate reaches complete journey, determine whether `/api/coach` access-control/CORS console errors reproduce.
3. When reliably GREEN: merge #123 only with Founder approval.
4. Deploy Functions/Pages only after approved merge.
5. Verify public 401/405 boundaries and real authenticated text/photo Coach behavior.
6. Rebase/retarget #124 onto resulting main and run the full gate again.
7. Merge #124 only after its own reliable GREEN and Founder approval.
8. Then proceed to User Performance Model v1 / Recommendation Outcome Learner work.

Commercial production readiness remains a separate gate and is not implied by any repository CI result above.
