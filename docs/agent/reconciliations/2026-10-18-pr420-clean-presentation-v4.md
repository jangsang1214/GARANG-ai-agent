# PRODUCT #420 — Clean Presentation v4 / Founder v8 reconciliation

Date: 2026-10-22
Status: YELLOW / ACTIVE DRAFT / CORE GREEN / BROWSER GATE IN PROGRESS / NOT MERGE-READY

## Judgment
PRODUCT #420 remains the single current integration owner for the Founder-approved commercial presentation rebuild. The stable PRODUCT baseline is still #417 on main. The current #420 runtime has evolved from the original Presentation v4 prototype into a Founder v8 presentation owner while preserving the intended architectural boundary: canonical product state/actions stay owned by the existing GARANG runtime, while presentation moves and styles those owners rather than cloning them.

The branch has also accumulated substantial historical presentation residue during iteration. The current loader no longer activates the earlier v5/v6/v7/reference-v2 layers, but many of those files are still present as branch-added changes. Treat those files as branch-hygiene cleanup candidates before merge, not as active product capability.

## Current truth
- PRODUCT main baseline: `62c008e8cb6e7f4219682b3f0b5ee71261de80e1` via merged #417.
- PRODUCT PR: #420 `Rebuild GARANG presentation with clean v4 architecture`.
- Branch: `design/commercial-v4-clean-presentation`.
- Exact head: `c2f97d9b588666a52414c573d19aa8b915859dc4`.
- GitHub state: OPEN / DRAFT / mergeable=true.
- Base SHA equals current PRODUCT main `62c008e8...`; no main drift is observed at this snapshot.
- Current PR scope: 185 commits / 44 changed files / +2416 / -216.

## Current presentation owner
`07_config/version.js` identifies build `0.11.0-beta.6`, build id `20261022-founder-v8.6`, and currently loads only the active Founder v8 presentation stack:
- `garang-founder-v8-foundation.css`
- `garang-founder-v8-screens.css`
- `garang-founder-v8-exact-board.css`
- `garang-anatomy-exact-v2.js`
- `garang-founder-v8-owner-guard.js`
- `garang-founder-v8.js`
- `garang-founder-v8-exact-board.js`

The static architecture gate explicitly rejects restoring `garang-founder-exact-v7`, target-v6, target-v5, Reference UI v2, or the old Presentation v4 loader as active presentation owners. It also rejects concept-board image crops, cloned canonical owners and replacement of canonical interactive owners. It requires reuse of the canonical Today decision/action, Workout/Rest, Meal Scan, session finish and Body interaction owners.

## Verification — exact head `c2f97d9b...`
- Founder OS Event Envelope run `39771034782`: SUCCESS.
- GARANG Release Gate #2994 / run `39771034755`: IN PROGRESS.
- `core-build-rules`: SUCCESS.
  - locked dependency contract: PASS
  - production / Functions dependency security checks: PASS
  - Intelligence Core: PASS
  - Action & Data Reliability: PASS
  - clean Presentation v4 / Founder v8 architecture gate: PASS
  - Commercial Core + regressions: PASS
  - runtime/build/build-entry checks: PASS
  - live Firebase public health: PASS
  - Firestore rules emulator: PASS
- `browser-webkit`: IN PROGRESS at latest observation. The full browser/Golden Path/mobile regression suite has not yet completed on this exact head.

Classification remains **YELLOW**. Core success is not enough to call #420 GREEN or merge-ready while the required browser job is still unknown.

## Red Team / branch hygiene
The #420 diff still includes many branch-added superseded presentation artifacts from the v5/v6/v7 iteration history even though the current loader explicitly excludes them. Examples include the `garang-founder-exact-v7-*` CSS/JS family and earlier target/presentation layers.

Policy:
- Do not mutate PRODUCT #420 while Gate #2994 is running; a new head would invalidate the current exact-head evidence.
- After the gate result, verify whether any superseded presentation files still have secondary build/test/runtime references.
- If they are genuinely unreferenced, remove the dead presentation residue before final merge and run a fresh exact-head Release Gate.
- Do not weaken assertions, restore stacked visual owners, or keep dead files merely because an earlier branch revision used them.

## #419 disposition
PRODUCT #419 remains reference/fallback evidence only. Do not merge #419. If #420 reaches functional, visual and architecture parity with fresh exact-head evidence, #419 should be closed as superseded rather than revived.

## Next
1. Let Gate #2994 finish on exact head `c2f97d9b...` without changing PRODUCT head.
2. If RED, classify the first failing browser/Golden Path owner and make only the smallest architecture-safe fix on #420.
3. If FULL GREEN, inspect the generated 390px review screenshots against the Founder 11-screen authority and confirm 320/360/390/430 touch/layout safety.
4. Perform branch-hygiene review for unreferenced legacy presentation additions; if cleanup changes the head, require a fresh exact-head gate.
5. Recheck PRODUCT main drift and mergeability.
6. Merge #420 only after exact-head verification, acceptable screenshot parity, no blocking drift and explicit Founder merge approval.
7. After the final PRODUCT result, reconcile PROJECT_STATE / PROJECT_GRAPH / TASKS / RELEASE_STATUS / SESSION_HANDOFF on CONTROL.
