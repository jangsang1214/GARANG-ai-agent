# 2026-10-18 — PRODUCT PR #419 Founder-approved Commercial UI v3

## Judgment

Status: **YELLOW / ACTIVE / NOT MERGE-READY** at this observation.

PRODUCT main remains the fully verified #417 merge at `62c008e8cb6e7f4219682b3f0b5ee71261de80e1`. The active PRODUCT line is PR #419, `Rebuild GARANG to Founder-approved Commercial UI v3`, on branch `design/founder-approved-commercial-polish`.

The approved dark four-tab commercial target is binding. The Golden Path remains `Today → concrete workout → execute/record → GARANG interpretation → next action`. No merge is authorized until current exact-head Release Gate evidence is FULL GREEN and Founder explicitly approves merge.

## Verified repository state

- CONTROL main observed: `8323408bcda5d8c7c9c1e04187ed03024205cdd8`.
- PRODUCT main observed: `62c008e8cb6e7f4219682b3f0b5ee71261de80e1`.
- PRODUCT PR #419 is open, non-draft, and GitHub reports `mergeable=true`.
- Current PR head at this observation: `706593cd3ef8e9150b9c2d40b55ad566c2a8dbc5`.
- PR base remains PRODUCT main `62c008e8...`; no main drift was observed during the current repair sequence.
- Previous exact-head `db60b751...` Release Gate #2756 / run `39045712170` was FULL GREEN before the latest review-driven repairs.

## Review-driven release-integrity repairs on #419

The current branch now contains fixes for four live P2 review findings:

1. Coach action disclosure state is reset when leaving Coach so re-entry stays quiet by default.
2. Modified direct Coach/Core Loop runtimes use rotated script cache keys.
3. Commercial generated labels are language-safe; English no longer receives Korean pseudo-copy and Korean/English set/rest labels are scoped by `html[lang]`.
4. The exact Commercial UI stylesheet chain, including v3 through v3-9 and the language-safe override, is included in the PWA app-shell precache. The service-worker generation was rotated under the repository's existing `v<number>-<date>` safety contract.

Static regression contracts were updated where they had hard-coded obsolete cache keys. Tests were not weakened.

## Today structural race repair

Exact-head Gate #2769 exposed a real WebKit DOM ownership race: `#garangTodayFlow` could be placed in `.g-ref-today-stage`, then another canonical Today rerender could reparent it immediately afterward.

PR head `706593cd...` adds a narrow observer owned by Reference UI v2 that watches only `.g-ref-today-stage` child ownership and reattaches the existing canonical flow when it escapes. It does not create a new state/write/session owner.

Gate #2770 verified this repair:
- MD-driven Reference UI v2: PASS;
- Founder-approved commercial polish: PASS;
- Founder review screenshots: captured and uploaded;
- Planner / Nutrition / Real Meal Scan: PASS;
- Golden Path integration and complete journey: PASS;
- authenticated app boot: PASS.

## Current blocker

Release Gate #2770 / run `39094945352` is not FULL GREEN in its first browser attempt because `browser-authenticated-coach-plan.test.cjs` timed out after returning from Planner to Coach while waiting for `.g2-thread-popover [data-act="rename"]`.

The same Coach thread-menu runtime and test passed on the prior exact-head `db60b751...` FULL GREEN Gate #2756 and were not changed by the current Commercial UI repair set. Therefore the failure is being treated as a WebKit/touch timing candidate, not as a verified product regression yet.

A single same-head re-run of the failed WebKit job was started to classify reproducibility. If it reproduces, the canonical Coach thread-menu interaction must be hardened before merge. If it does not reproduce, the flake still needs to be recorded rather than silently treated as deterministic PASS.

## Screenshot evidence

Gate #2770 produced the `founder-review-screens` artifact for head `706593cd...`, containing 390x844 captures for Today, Workout LIVE, Workout Rest, Nutrition, Body, and Coach. The captured screens show a coherent premium dark four-tab mobile system with no obvious gross viewport overflow in the reviewed contact sheet. Pixel-perfect parity with the binding target has not been claimed solely from this observation.

## Project Graph relation

`GOAL-TODAY-REASON-TO-USE`
→ `INIT-TODAY-DO-RECORD-DECIDE`
→ Founder-approved Commercial UI v3 / Golden Path presentation integrity
→ PRODUCT PR #419
→ review-driven cache/i18n/PWA/Coach-state repairs
→ Today Reference UI ownership race repair
→ exact-head Gate #2770 partial GREEN + authenticated Coach plan blocker
→ same-head WebKit revalidation
→ Founder merge decision only after FULL GREEN and visual acceptance.

## Next

1. Finish the same-head #2770 WebKit revalidation.
2. If Coach thread menu reproduces, fix the canonical interaction without weakening the test and rerun exact-head Release Gate.
3. Reconcile unresolved review threads only after their fixes are verified on the current exact head.
4. Recheck PR head vs PRODUCT main drift and GitHub mergeability.
5. Keep #419 unmerged until FULL GREEN plus explicit Founder merge approval.
