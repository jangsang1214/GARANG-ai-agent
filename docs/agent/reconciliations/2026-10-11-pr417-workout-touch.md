# 2026-10-11 — PRODUCT PR #417 Workout mobile touch regression

## Judgment

Status: **GREEN / MERGED / POST-MERGE VERIFIED**.

The post-#414 mobile Workout touch recurrence is closed. PRODUCT PR #417 is the canonical fix line and is now merged to PRODUCT main. The prior superseded #413/#415 spacer/touch-clearance approaches remain closed and must not be revived.

## Verified repository state

- CONTROL main at final observation: `8323408bcda5d8c7c9c1e04187ed03024205cdd8`.
- PRODUCT pre-merge main/base: `02189c21da0d38889d58a12855e79014aaa1de83`.
- PRODUCT PR #417: `Keep Workout Record primary without manage touch overlap`.
- Final PR head before merge: `8c4a73c6a64a386283d4f88e335b7a6c0a0560db`.
- Founder explicitly approved merge.
- PRODUCT merge commit / current main after merge: `62c008e8cb6e7f4219682b3f0b5ee71261de80e1`.
- PR #417 was merged successfully.

## Final implementation direction

#417 preserves the intended beginner-first Workout hierarchy:
- `Record` remains the primary draft action.
- `Manage` remains a compact 72px secondary mobile control.
- the Manage menu opens upward so its actions stay clear of the fixed bottom navigation.
- no unconditional 112/152px spacer padding is used.
- cache-bust / Reference UI assertions stay synchronized so presentation changes reach cached clients.
- Rest timer visibility is re-synchronized after set-completion rerenders so active `restUntil` state cannot remain hidden behind a replaced DOM surface.

No Workout state/save/routing/Intelligence policy ownership was intentionally broadened.

## Failure progression

Earlier exact-head gates isolated several concrete mobile interaction failures instead of treating the line as one generic visual defect:

1. Edit/Manage actions could lose physical hit ownership to `#addWorkout` because a local menu z-index could not escape its ancestor stacking context.
2. A later grouped draft Record action could land below the usable mobile viewport hierarchy.
3. After those touch issues were cleared, the remaining failure moved to `#workoutExecutionRest`, where the canonical Rest surface could remain hidden after a set-completion rerender even though rest state was active.

Each failure was addressed on #417 without weakening assertions or restoring the rejected large-padding workaround.

## Exact-head release evidence

Final pre-merge exact-head Release Gate #2662 ran on PR head `8c4a73c6a64a386283d4f88e335b7a6c0a0560db` and finished **FULL GREEN**.

Required PASS evidence included:
- core-build-rules;
- dependency/security checks;
- GARANG Intelligence Core and Action/Data Reliability;
- commercial regressions;
- runtime/build/Firebase/Firestore checks;
- Simplified Shell;
- MD-driven Reference UI v2 at 320/360/390/430;
- Planner, Nutrition, Real Meal Scan and truth/first-record flows;
- Golden Path integration and complete journey;
- authenticated boot, Coach, Real LLM and conversational logging;
- recovery mutation/touch;
- WebKit mobile regression suite;
- WebKit Settings touch regression;
- mobile button health audit;
- mobile runtime stability stress;
- final verify.

No PRODUCT main/head drift existed before merge, so this exact-head evidence remained valid for the approved merge.

## Post-merge release evidence

Post-merge Release Gate #2663 / run `38143287895` ran on PRODUCT main `62c008e8cb6e7f4219682b3f0b5ee71261de80e1` and finished **FULL GREEN**.

Post-merge PASS included the same release-critical chain:
- core/build/security/data checks;
- Reference UI and Simplified Shell;
- Today / Planner / Nutrition / Meal Scan;
- Golden Path and complete journey;
- authenticated Coach / Real LLM / Recovery;
- WebKit mobile regression;
- Settings touch;
- mobile button health;
- runtime stability stress;
- final `verify` requiring all release jobs.

This satisfies the release-integrity requirement that success is demonstrated on current PRODUCT main, not only on the PR head.

## Project Graph relation

`GOAL-TODAY-REASON-TO-USE`
→ `INIT-TODAY-DO-RECORD-DECIDE`
→ Workout Golden Path usability / mobile touch integrity
→ PRODUCT PR #417
→ exact-head Gate #2662 FULL GREEN
→ Founder-approved merge
→ PRODUCT main `62c008e8...`
→ post-merge Gate #2663 FULL GREEN
→ UI/UX v2 Workout touch recurrence closed.

## Next

1. Treat #417 as DONE/GREEN and do not reopen the same touch/padding line without new runtime evidence.
2. Continue Design/Brand work from PRODUCT main `62c008e8...`.
3. Future Workout UI changes must preserve physical touch ownership, Rest visibility, 320px safety, and the existing Golden Path regression contracts.
4. Merge this CONTROL reconciliation only under normal CONTROL review/approval policy; until then this PR records the current verified evidence.