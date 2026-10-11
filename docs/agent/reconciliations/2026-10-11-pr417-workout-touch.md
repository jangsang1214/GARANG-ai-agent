# 2026-10-11 — PRODUCT PR #417 Workout mobile touch regression

## Judgment

Status: **YELLOW / ACTIVE DESIGN-BRAND + RELEASE-QA / NOT RELEASED**.

The UI/UX v2 line recorded as closed through PRODUCT PRs #411 and #414 has a fresh post-merge mobile WebKit interaction recurrence. Do not reopen #411/#414 or resume the earlier 320px Rest-card fix. The canonical active line is PRODUCT PR #417.

## Verified repository state

- CONTROL main at observation: `8323408bcda5d8c7c9c1e04187ed03024205cdd8` (`Reconcile Today reason-to-use and UI/UX v2 release state (#122)`).
- PRODUCT main/base remains `02189c21da0d38889d58a12855e79014aaa1de83`.
- PRODUCT PR #417: `Keep Workout Record primary without manage touch overlap`.
- Current PR #417 head: `0da203c4cb5849948c1f7ebc9c715e8309bdbd6c`.
- PR #417 is open and mergeable.
- Scope remains intentionally narrow: `index.html`, `07_config/version.js`, `tests/browser-reference-ui-v2.test.cjs`.
- The change remains presentation/cache/test-contract only: keep `Record` primary, constrain mobile `Manage` to a compact secondary control, and open its menu upward above the fixed bottom navigation. No Workout state/save/routing/execution/Intelligence policy ownership changes are intended.

## Trigger / recurrence evidence

Post-merge Gate #2633 on PRODUCT main `02189c21...` reproduced a mobile Workout draft-action collision after #414: resolving one action vertically displaced the other into/under the fixed bottom navigation. The prior padding/spacer approaches are superseded by #417's compact action-row direction.

Older PRs #413 and #415 represented superseded touch-clearance/spacer approaches and were closed unmerged during this reconciliation. D-024's single-current-main-line rule applies.

## Gate #2648 — RED on superseded PR head

Gate #2648 / run `38128927787` ran on PR head `167aa892eaf52efc1f55dc6814af4a86a2829f89`.

PASS before the failure included:
- full core-build-rules;
- dependency/security checks;
- Intelligence Core and Action/Data Reliability;
- runtime/build/Firebase/Firestore checks;
- Simplified Shell;
- MD-driven Reference UI v2 at 320/360/390/430;
- Planner, Nutrition, Meal Scan and truth/first-record regressions;
- Golden Path and complete journey;
- authenticated boot, Coach, Real LLM and recovery touch.

The first concrete failure was `tests/browser-webkit-regression.test.cjs`: `[data-edit-workout="0"]` did not own its physical hit point after opening the Workout draft management menu. The overlapping owner was `#addWorkout` (`이 운동 세션에 추가`). Settings touch, mobile button health and runtime stress were skipped after this required failure.

Root cause: the popup had a high local z-index, but its ancestor `.workout-draft-actions` was an isolated stacking context that was not itself elevated above `#addWorkout`. The child menu therefore could not escape the lower outer stacking layer.

No failed job was rerun to normalize this result; no timeout/assertion was weakened.

## Smallest repair

PR #417 head `0da203c4...` adds only an outer stacking elevation to the existing mobile action row in `07_config/version.js`:
- preserve compact `Record + 72px Manage` grid;
- preserve upward-opening Manage menu;
- preserve touch sizes and DOM order;
- set the action-row stacking context itself to an elevated `z-index:40` so disclosed Edit/Replace/Delete controls can physically own their hit points above `#addWorkout`.

No state/save/routing/execution/Intelligence behavior changed.

## Current verification

Fresh exact-head GARANG Release Gate #2649 / run `38129433470` is running on head `0da203c4...`.
Founder OS Event Envelope #3657 / run `38129433484`: SUCCESS.

Do not reuse Gate #2648 as success evidence for the new head. No PASS is inferred for Gate #2649 pending jobs.

## Project Graph relation

`GOAL-TODAY-REASON-TO-USE`
→ `INIT-TODAY-DO-RECORD-DECIDE`
→ Workout Golden Path usability / mobile touch integrity
→ PRODUCT PR #417
→ exact-head Gate #2649
→ Founder-approved merge
→ post-merge current-main verification
→ UI/UX v2 release closure restored.

## Next

1. Finish exact-head Gate #2649 on `0da203c4...` without retries, timeout inflation, assertion weakening, or broad unrelated edits.
2. If RED, diagnose the first concrete failing owner and make the smallest fix on #417 only.
3. If FULL GREEN, re-check PRODUCT main/head drift and mergeability.
4. PRODUCT main merge remains Founder-approval-gated.
5. After an approved merge, require post-merge current-main Golden Path/Release evidence before marking the recurrence DONE/GREEN.
6. Reconcile this CONTROL record to the final exact-head result before closing the line.
