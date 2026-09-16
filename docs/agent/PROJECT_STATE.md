# GARANG Project State

Last updated: 2026-09-17

## Current objective
Keep the VERIFIED commercial GARANG baseline frozen while finishing the isolated Wanted/competition public runtime and submission. The latest P1 fixed the Wanted Today plan-to-Planner shortcut so it remains visible even when the 60-second judge-mode localStorage flag is not active.

## Repository observations
- CONTROL: `jangsang1214/GARANG-ai-agent`; orchestration/policy/project state.
- PRODUCT: `jangsang1214/-fitmind-ai`; implementation/tests/CI/releases.
- PRODUCT canonical commercial main: `b863a7634bd64b03a6e6f3772950c43cc81afb6f`.
- Wanted derivative release branch: `wanted/2026-release`.
- Wanted derivative current release SHA: `24dcacd29cf17ada5df63d857aaa93cc4a608e33`.
- PRODUCT PR #140 `Keep Wanted Today planner shortcut visible` is MERGED into the Wanted release branch only; commercial `main` remains unchanged.
- During branch-head diagnosis, two temporary probe files were accidentally committed directly to the Wanted release branch and immediately deleted before PR #140. Net release tree is clean; the history contains the create/delete commits.

## VERIFIED commercial release evidence
- Commercial main Release Gate #1449 / run `35110020514`: FULL GREEN.
- Commercial-main GitHub Pages #799 / run `35110017165`: SUCCESS.
- Public commercial URL: `https://jangsang1214.github.io/-fitmind-ai/`.
- Production Coach Live Smoke run `35101459492`: authenticated text + photo `source=llm` SUCCESS.

## VERIFIED Wanted derivative evidence
- 14-day synthetic judging history remains local-only and date-relative with 14 daily check-ins, 42 meals, workout/running/body history and fatigue-driven plan-adjustment evidence.
- Previous deployment-origin, judge-entry observer, and Coach-guide overlap fixes remain release-merged and regression-covered.
- Founder observed that the Today `오늘의 계획` adjacent `+` was missing on the stable public URL.
- Source inspection VERIFIED the shortcut was incorrectly gated by `garang_wanted_demo_active_v1`; both `ensureTodayPlannerPlus()` and the shared sync path required judge mode, so normal Wanted Today could not render the shortcut.
- PR #140 keeps the Coach judging guide gated to judge mode but makes Today `+ → Planner` available across the Wanted derivative regardless of the judge-mode flag. The observer/sync path also remains active across Today rerenders.
- Dedicated WebKit regression explicitly removes the judge-mode localStorage flag, navigates to Today, requires the `+` to be visible, taps it, and verifies the canonical route becomes Planner.
- PR #140 exact-head Wanted derivative gate / run `35137650732`: GREEN, including the new non-judge-mode Today `+ → Planner` regression.
- PR #140 full GARANG Release Gate #1468 / run `35137651074`: FULL GREEN, including complete Golden Path, authenticated Coach, Real LLM, mobile regression, button health and runtime stress.
- PR #140 merged as Wanted release SHA `24dcacd29cf17ada5df63d857aaa93cc4a608e33`.
- Post-merge Wanted derivative gate #51 / run `35138268989`: GREEN on the exact merge SHA.

## Wanted public deployment observation
Evidence class: YELLOW / NEW DEPLOYMENT ROOT VERIFIED, CURRENT UX HUMAN CLICK-THROUGH PENDING.
- Stable Vercel alias: `https://garang-wanted-2026-jangsang1214.vercel.app`.
- Vercel Authentication / SSO Deployment Protection remains disabled.
- Latest production deployment `dpl_4Nvd8QzzXwD7X5Psw6R8NSnZdMbP` returned `READY` and retained the stable alias.
- The deployed shell pins its `<base>` to exact Wanted release SHA `24dcacd29cf17ada5df63d857aaa93cc4a608e33` via jsDelivr.
- Exact-SHA `version.js` and `garang-wanted-ux-fixes-v1.js` are independently reachable from jsDelivr.
- Fresh unauthenticated rendered fetch of the stable alias with `?v=24dcacd2` returned `GARANG — Quietly Becoming`, so anonymous public root access remains GREEN.
- The corrected Today shortcut behavior is VERIFIED in exact-release WebKit CI. A fresh Founder check on the deployed alias remains the final public UX confirmation.

## Product / AI state
- Commercial Golden Path remains: Onboarding → Today → Record → Coach → Plan → Confirmation → Execution → Record → Progress/Accumulation.
- Deterministic GARANG State/Decision Intelligence remains the judgment owner; LLM remains bounded explanation/language/multimodal context.
- Intelligence Learning Contract v1 remains released: `decisionId → recommendationId → actionId → planId → executionId → outcomeId`.
- Outcome Learning remains advisory-only: no silent mutation and no automatic progression increase.

## Stable
- Commercial product baseline remains frozen and GREEN.
- Wanted source snapshot `24dcacd2…` is isolated and regression-verified.
- Today `+ → Planner` outside judge mode is VERIFIED in dedicated Wanted WebKit coverage.
- Coach guide auto-collapse/composer usability remains VERIFIED.
- Full Release Gate #1468 and post-merge Wanted Gate #51 are GREEN.
- Stable public Vercel alias remains anonymously reachable and is pinned to the latest exact Wanted SHA.
- Real production text/photo Coach path remains VERIFIED.

## Broken / blockers
- No VERIFIED P0/P1 repository or CI blocker remains for commercial GARANG or Wanted source.
- Remaining release-confidence item: Founder fresh-browser confirmation on the latest public deployment that Today `+` is visible and opens Planner, and Coach chat remains unobstructed.
- Full commercial-production readiness across every physical device/channel is a separate standard and is not implied by the competition/web baseline.

## Durable release-channel decision
Commercial GARANG PRODUCT main is canonical. Wanted/competition work is a separate derivative from a VERIFIED stable snapshot. Competition-only demo/copy/presentation/deployment changes do not automatically flow back to commercial GARANG.

## Next priorities
1. P1 Founder smoke the latest public deployment once: `Today → 오늘의 계획 + → Planner → Coach 입력`.
2. P1 on PASS, keep the stable Vercel alias as the submitted service URL and finish the Wanted submission checklist/form.
3. Keep commercial GARANG frozen unless a real P0/P1 defect appears before submission.
4. After submission, resume P4 User Performance Model v1 using attributable `State × Recommendation × Action × Outcome` evidence.
