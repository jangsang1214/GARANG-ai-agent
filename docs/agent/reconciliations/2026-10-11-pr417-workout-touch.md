# 2026-10-11 — PRODUCT PR #417 Workout mobile touch regression

## Judgment

Status: **YELLOW / ACTIVE DESIGN-BRAND + RELEASE-QA / NOT RELEASED**.

The UI/UX v2 line recorded as closed through PRODUCT PRs #411 and #414 has a fresh post-merge mobile WebKit interaction recurrence. Do not reopen #411/#414 or resume the earlier 320px Rest-card fix. The canonical active line is PRODUCT PR #417.

## Verified repository state

- CONTROL main at observation: `8323408bcda5d8c7c9c1e04187ed03024205cdd8` (`Reconcile Today reason-to-use and UI/UX v2 release state (#122)`).
- PRODUCT main/base: `02189c21da0d38889d58a12855e79014aaa1de83`.
- PRODUCT PR #417: `Keep Workout Record primary without manage touch overlap`.
- PR #417 head: `167aa892eaf52efc1f55dc6814af4a86a2829f89`.
- PR #417 is open and mergeable.
- Scope is intentionally narrow: `index.html`, `07_config/version.js`, `tests/browser-reference-ui-v2.test.cjs`.
- The change is presentation/cache/test-contract only: keep `Record` primary, constrain mobile `Manage` to a compact secondary control, and open its menu upward above the fixed bottom navigation. No Workout state/save/routing/execution/Intelligence policy ownership changes are intended.

## Trigger / recurrence evidence

Post-merge Gate #2633 on PRODUCT main `02189c21...` reproduced a mobile Workout draft-action collision after #414: resolving one action vertically displaced the other into/under the fixed bottom navigation. The prior padding/spacer approaches are superseded by #417's compact action-row direction.

Older open PRs #413 and #415 represent superseded touch-clearance/spacer approaches and must not be treated as active integration lines. D-024's single-current-main-line rule applies.

## Current verification

Exact-head GARANG Release Gate #2648 / run `38128927787` is running on PR #417 head `167aa892...`.

Observed PASS so far:
- core-build-rules;
- locked dependency / production security checks;
- GARANG Intelligence Core;
- Action & Data Reliability;
- commercial regressions;
- runtime/build entry;
- live Firebase public health;
- Firestore rules emulator;
- browser job steps through Today/daily-plan checks at the time of this reconciliation.

Still required before merge:
- Simplified Shell completion;
- MD-driven Reference UI v2 including 320/360/390/430;
- Planner/Nutrition/Meal Scan regressions;
- Golden Path and complete journey;
- authenticated Coach/Real LLM/recovery regressions;
- WebKit mobile regression;
- Settings touch;
- mobile button health;
- runtime stability stress;
- final Release Gate completion.

No PASS is inferred for pending steps.

## Project Graph relation

`GOAL-TODAY-REASON-TO-USE`
→ `INIT-TODAY-DO-RECORD-DECIDE`
→ Workout Golden Path usability / mobile touch integrity
→ PRODUCT PR #417
→ exact-head Gate #2648
→ Founder-approved merge
→ post-merge current-main verification
→ UI/UX v2 release closure restored.

## Next

1. Finish exact-head Gate #2648 on the exact PR #417 head without retries, timeout inflation, assertion weakening, or broad unrelated edits.
2. If RED, diagnose the first concrete failing owner and make the smallest fix on #417 only.
3. If FULL GREEN, re-check PRODUCT main/head drift and mergeability.
4. Main merge remains Founder-approval-gated.
5. After an approved merge, require post-merge current-main Golden Path/Release evidence before marking the recurrence DONE/GREEN.
