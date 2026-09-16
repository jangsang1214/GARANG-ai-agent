# GARANG Release Status

Last updated: 2026-09-16

## Overall decision
YELLOW for the current release train. PRODUCT main `4c18ce254494e458de43c1d9e7030a09bfdb0a22` remains the last merged baseline. PR #123 and stacked Draft PR #124 are both open/unmerged. Core/build/security/Firebase/Firestore verification is GREEN, but full WebKit stability is not yet reliably GREEN, so merge/production deployment must not be reported as complete.

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
- Founder reported targeted follow-up WebKit checks GREEN and a final full WebKit revalidation in progress, but GitHub exact-head evidence is not yet a complete GREEN release gate.
- Merge: NOT DONE. Production Functions/Pages deploy for #123: NOT DONE.

## PR #124 — Intelligence Learning Contract v1
Decision: YELLOW / IMPLEMENTED / CORE GREEN / FULL BROWSER GATE NOT RELIABLY GREEN.
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
- First browser-webkit attempt: FAILED at `Today bottom Check-in CTA`, matching the base #123 failure.
- First bounded rerun: the previous CTA failure PASSED; Today visual parity, Daily Plan, Simplified Shell, Planner, Nutrition, truth surface and Golden Path integration also PASSED. It then FAILED `Golden Path complete journey` because the test captured two production `/api/coach` access-control/CORS console errors.
- Because failures moved between unrelated browser assertions on the same code and the AI/Data core suite stayed GREEN, current evidence points to browser/environment timing/network instability rather than a proven deterministic Learning Contract regression. This remains an INFERRED diagnosis until the bounded final rerun finishes.
- Merge/deploy: NOT DONE.

## Production Real AI Coach
Decision: YELLOW.
- Previous production infrastructure/secret/public boundary remains established on main.
- The Founder's newly observed production AI connection failure has no verified exact `code` yet.
- Do not label the newest incident `LLM_TIMEOUT` merely because an earlier incident used that code.
- Required after #123 release approval: deploy Functions/Pages, confirm unauthenticated POST 401 and wrong-method GET 405, then run real authenticated text Coach + photo Coach. On failure, retain only privacy-safe `code` and `providerStatus`.

## Golden Path / regression
Decision: YELLOW for the unmerged release train.
- Core and most browser slices are GREEN.
- Full WebKit currently has instability across Today CTA / complete-journey network-console assertions.
- Do not weaken the release gate or suppress real browser errors merely to make CI green.
- Fix the smallest verified runtime/test race if the bounded rerun reproduces a stable root cause.

## Remaining release sequence
1. Obtain a reliable full WebKit verdict for PR #123 release scope.
2. If stable GREEN: merge #123 only with Founder approval.
3. Deploy Functions/Pages only after approved merge.
4. Verify public 401/405 boundaries and real authenticated text/photo Coach behavior.
5. Rebase/retarget #124 onto resulting main and run the full gate again.
6. Merge #124 only after its own reliable GREEN and Founder approval.
7. Then proceed to User Performance Model v1 / Recommendation Outcome Learner work.

Commercial production readiness remains a separate gate and is not implied by any repository CI result above.
