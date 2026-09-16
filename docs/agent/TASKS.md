# GARANG Tasks

Last updated: 2026-09-17

## Active P1 — Wanted derivative public deployment + final submission
Status: YELLOW / SOURCE+CI+PUBLIC ROOT GREEN, CORRECTED UX HUMAN SMOKE PENDING
Owner: Founder / Growth Business / Product / Release QA
Goal: publish the verified Wanted derivative at its stable public URL and complete the competition submission without destabilizing commercial GARANG.
Acceptance:
- Commercial source snapshot is PRODUCT main `b863a7634bd64b03a6e6f3772950c43cc81afb6f`. ✅
- Wanted derivative release branch is `wanted/2026-release`. ✅
- Current Wanted release SHA is `24dcacd29cf17ada5df63d857aaa93cc4a608e33`. ✅
- Relative 14-day synthetic judge dataset remains release-merged and CI-verified. ✅
- Deployment-origin compatibility and judge-entry observer safety remain permanent Wanted CI checks. ✅
- Coach judging guide no longer covers chat: auto-collapse on Coach + manual open/close control. ✅ source/CI
- Founder reported the Today `오늘의 계획 +` was absent on the public app. ✅ observed
- Root cause identified: Today shortcut/sync incorrectly depended on `garang_wanted_demo_active_v1`. ✅ verified
- Today `+ → Planner` now works across the Wanted derivative regardless of judge-mode localStorage state. ✅ source/CI
- Dedicated WebKit removes the judge-mode flag before requiring Today `+` visibility and Planner navigation. ✅
- PR #140 exact-head Wanted gate / `35137650732`: GREEN. ✅
- PR #140 full GARANG Release Gate #1468 / `35137651074`: FULL GREEN. ✅
- PR #140 merged as `24dcacd29cf17ada5df63d857aaa93cc4a608e33`. ✅
- Post-merge Wanted gate #51 / `35138268989`: GREEN. ✅
- Commercial GARANG remains canonical and unchanged. ✅
- Vercel Authentication / SSO Deployment Protection disabled. ✅
- Stable public alias is `https://garang-wanted-2026-jangsang1214.vercel.app`. ✅
- Production deployment `dpl_4Nvd8QzzXwD7X5Psw6R8NSnZdMbP` returned READY and pins exact release SHA `24dcacd2…`. ✅
- Exact-SHA corrected UX JS and loader are reachable on jsDelivr. ✅
- Fresh unauthenticated rendered fetch opens the GARANG page without `login_required`. ✅
- Founder fresh-browser smoke confirms `Today → 오늘의 계획 + → Planner → Coach 입력`. ⬜ final public UX confidence check
- Wanted participation registration and final submission are completed. ⬜ Founder final action

## Closed P1 — Wanted Today Planner shortcut judge-mode gating fix
Status: DONE / VERIFIED GREEN AT SOURCE+CI
Owner: Product / Engineering / Release QA
Acceptance:
- Reproduce why the shortcut is absent outside judge mode. ✅
- Keep Coach judging guide behavior judge-mode-only. ✅
- Decouple Today planner shortcut from judge-mode state. ✅
- Keep shortcut synchronized across Today rerenders. ✅
- Verify with judge-mode localStorage explicitly removed. ✅
- Preserve commercial Golden Path, authenticated Coach, Real LLM and mobile regression behavior. ✅
Evidence: PRODUCT PR #140 merged as `24dcacd2…`; exact-head Wanted gate `35137650732` GREEN; full Release Gate #1468 FULL GREEN; post-merge Wanted gate #51 GREEN.

## Closed P1 — Wanted Coach guide + Today Planner affordance
Status: DONE / SUPERSEDED FOR TODAY-SHORTCUT GATING BY PR #140
Owner: Product / Engineering / Design Brand / Release QA
Acceptance:
- Prevent the judging guide from covering the Coach composer. ✅
- Preserve the recommended judging route while allowing explicit collapse/expand. ✅
- Auto-collapse on Coach. ✅
- Keep Coach textarea focus and typing functional. ✅
- Add compact Today plan `+` shortcut to Planner. ✅ initial implementation
- Keep all changes isolated to Wanted derivative. ✅
Evidence: PRODUCT PR #138 merged as `5ac57709…`; Wanted gate #41 GREEN; full Release Gate #1463 FULL GREEN; post-merge Wanted gate #42 GREEN. Founder public observation later exposed judge-mode-only gating of the Today shortcut; PR #140 corrected it.

## Closed P1 — Wanted judge-entry observer hotfix
Status: DONE / VERIFIED GREEN AT SOURCE+CI
Owner: Engineering / Release QA
Acceptance:
- Filter redundant `hidden` mutations only during Wanted runtime bootstrap. ✅
- Preserve real visibility changes and restore native MutationObserver. ✅
- Preserve commercial Golden Path, authenticated Coach, Real LLM and mobile regression behavior. ✅
Evidence: PRODUCT PR #137 merged as `149ba11f…`; Wanted gate #32 GREEN; full Release Gate #1461 FULL GREEN; post-merge Wanted gate #33 GREEN.

## Closed P1 — Wanted judge-entry deployment-origin hotfix
Status: DONE / VERIFIED GREEN AT SOURCE+CI
Owner: Engineering / Release QA
Acceptance:
- Derive competition asset root from loaded `version.js`, not Vercel document origin. ✅
- Route competition assets to the same frozen release root. ✅
- Leave unrelated runtime fetches untouched. ✅
Evidence: PRODUCT PR #134 merged; Wanted gate #20 GREEN; full Release Gate #1455 FULL GREEN; post-merge Wanted gate #21 GREEN.

## Closed P1 — Wanted 14-day judge data upgrade
Status: DONE / VERIFIED GREEN
Owner: Product / Engineering / Release QA
Acceptance:
- Date-relative two-week synthetic history with recovery/nutrition/workout/body evidence. ✅
- Local-only, clearly synthetic data. ✅
- 60-second WebKit journey verified. ✅
Evidence: PRODUCT PR #133 merged; Release Gate #1454 SUCCESS; post-merge Wanted gate #13 SUCCESS.

## Closed P1 — Commercial critical-path baselines
Status: DONE / VERIFIED GREEN
- Coach photo composer simplification — PR #130 / Gate #1444 GREEN.
- Mobile route intent across remounts — PR #131 / post-merge Gate #1449 FULL GREEN.
- Coach reconnect + production AI stabilization — Production Coach Live Smoke `35101459492` SUCCESS.
- Intelligence Learning Contract v1 — causal `decisionId → recommendationId → actionId → planId → executionId → outcomeId` released.

## P2 — Protect CONTROL + PRODUCT main
Status: PLANNED / NON-BLOCKING
Owner: Command Center / Release QA
Acceptance: enforce PR-based changes/status checks and block force-push/deletion where practical without making solo-Founder operation brittle.

## P2 — Production deployment credential hardening
Status: PLANNED / NON-BLOCKING
Owner: Engineering / Release QA
Acceptance: migrate toward GitHub OIDC / Google Workload Identity Federation; retire long-lived credentials only after replacement is VERIFIED.

## P2 — Dependency/tooling hardening
Status: PLANNED / NON-BLOCKING FOR CURRENT WEB BASELINE
Owner: Engineering / Release QA
Acceptance:
- Resolve moderate Functions findings through a dedicated breaking-upgrade PR with emulator + production smoke evidence.
- Reduce root dev/tooling audit findings separately from the clean production-runtime audit.
- Modernize CONTROL tooling in a dedicated verified PR.

## P6 — Repository / cloud cost hygiene
Status: PLANNED
Owner: Command Center / Engineering
Acceptance: close superseded experiments and configure safe Firebase build-artifact retention; destructive cleanup requires explicit Founder approval.

## Next P4 — User Performance Model v1
Status: PLANNED AFTER SUBMISSION FREEZE
Owner: AI Data / Product / Engineering
Acceptance direction:
- Learn user dimensions from attributable evidence, not onboarding alone.
- Each dimension includes value, confidence, sample size, last-updated time and evidence IDs.
- Start deterministic; do not introduce ML/vector infrastructure without measured need.
- Add explicit rejected/dismissed recommendation evidence to future personalization.
