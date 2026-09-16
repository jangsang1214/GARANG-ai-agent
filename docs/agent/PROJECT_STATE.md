# GARANG Project State

Last updated: 2026-09-17

## Current objective
Keep the VERIFIED commercial GARANG baseline frozen while finishing the isolated Wanted/competition public runtime and submission. The latest work fixes two competition-only UX blockers: the fixed judging guide covering Coach chat and the missing Today plan-to-Planner shortcut.

## Repository observations
- CONTROL: `jangsang1214/GARANG-ai-agent`; orchestration/policy/project state.
- PRODUCT: `jangsang1214/-fitmind-ai`; implementation/tests/CI/releases.
- PRODUCT canonical commercial main: `b863a7634bd64b03a6e6f3772950c43cc81afb6f`.
- Wanted derivative release branch: `wanted/2026-release`.
- Wanted derivative current release SHA: `5ac577094cf5ff4350ce33a7dbba2b79f8ba90cd`.
- PRODUCT PR #138 `Improve Wanted judge navigation and Coach usability` is MERGED into the Wanted release branch only; commercial `main` remains unchanged.

## VERIFIED commercial release evidence
- Commercial main Release Gate #1449 / run `35110020514`: FULL GREEN.
- Commercial-main GitHub Pages #799 / run `35110017165`: SUCCESS.
- Public commercial URL: `https://jangsang1214.github.io/-fitmind-ai/`.
- Production Coach Live Smoke run `35101459492`: authenticated text + photo `source=llm` SUCCESS.

## VERIFIED Wanted derivative evidence
- 14-day synthetic judging history remains local-only and date-relative with 14 daily check-ins, 42 meals, workout/running/body history and fatigue-driven plan-adjustment evidence.
- Previous deployment-origin and judge-entry observer hotfixes remain release-merged and regression-covered.
- Founder previously confirmed the public `60초 심사 체험` successfully entered the app on release `149ba11f…` after Vercel Authentication was disabled.
- Current UX diagnosis VERIFIED the judging guide was fixed near the bottom of the viewport and could geometrically cover the Coach composer.
- PR #138 adds a Wanted-only UX layer: the guide auto-collapses on Coach and can be manually opened/closed; collapsed state moves away from the composer.
- PR #138 also adds a compact `+` beside Today’s `오늘의 계획` that routes directly to Planner using the canonical GARANG router.
- Dedicated WebKit regression verifies `Today + → Planner`, Coach guide auto-collapse, textarea focus/text entry, and zero guide/composer overlap.
- PR #138 exact-head Wanted derivative gate #41 / run `35133826320`: GREEN.
- PR #138 full GARANG Release Gate #1463 / run `35133826275`: FULL GREEN, including complete Golden Path, authenticated Coach, Real LLM, mobile regression, button health and runtime stress.
- PR #138 merged as Wanted release SHA `5ac577094cf5ff4350ce33a7dbba2b79f8ba90cd`.
- Post-merge Wanted derivative gate #42 / run `35134431895`: GREEN on the exact merge SHA, including the new judge UX affordance browser test.

## Wanted public deployment observation
Evidence class: YELLOW / NEW DEPLOYMENT ROOT VERIFIED, CURRENT UX HUMAN CLICK-THROUGH PENDING.
- Stable Vercel alias: `https://garang-wanted-2026-jangsang1214.vercel.app`.
- Vercel Authentication / SSO Deployment Protection remains disabled.
- New production deployment `dpl_87pRSKTnUgw3iAi5RDrPCBjg8Hg4` returned `READY` and the stable alias was assigned.
- The deployed shell pins its `<base>` to exact Wanted release SHA `5ac577094cf5ff4350ce33a7dbba2b79f8ba90cd` via jsDelivr.
- Exact-SHA `version.js`, `garang-wanted-ux-fixes-v1.css`, and `garang-wanted-ux-fixes-v1.js` are independently reachable from jsDelivr.
- Fresh unauthenticated rendered fetch of the stable alias with `?v=5ac57709` returned `GARANG — Quietly Becoming`, so anonymous public root access remains available.
- The exact requested interactions are VERIFIED in WebKit CI, but a fresh human public smoke of this newly redeployed SHA is still pending because interactive public-browser automation is unavailable in the current tool surface.

## Product / AI state
- Commercial Golden Path remains: Onboarding → Today → Record → Coach → Plan → Confirmation → Execution → Record → Progress/Accumulation.
- Deterministic GARANG State/Decision Intelligence remains the judgment owner; LLM remains bounded explanation/language/multimodal context.
- Intelligence Learning Contract v1 remains released: `decisionId → recommendationId → actionId → planId → executionId → outcomeId`.
- Outcome Learning remains advisory-only: no silent mutation and no automatic progression increase.

## Stable
- Commercial product baseline remains frozen and GREEN.
- Wanted source snapshot `5ac57709…` is isolated and regression-verified.
- Requested Coach-guide and Today-Planner UX changes are VERIFIED in dedicated Wanted WebKit coverage.
- Full Release Gate #1463 and post-merge Wanted Gate #42 are GREEN.
- Stable public Vercel alias remains anonymously reachable.
- Real production text/photo Coach path remains VERIFIED.

## Broken / blockers
- No VERIFIED P0/P1 repository or CI blocker remains for commercial GARANG or Wanted source.
- Remaining release-confidence item: Founder fresh-browser confirmation on the new public deployment that Coach chat is unobstructed and Today `+` opens Planner.
- Full commercial-production readiness across every physical device/channel is a separate standard and is not implied by the competition/web baseline.

## Durable release-channel decision
Commercial GARANG PRODUCT main is canonical. Wanted/competition work is a separate derivative from a VERIFIED stable snapshot. Competition-only demo/copy/presentation/deployment changes do not automatically flow back to commercial GARANG.

## Next priorities
1. P1 Founder smoke the current public deployment once: `60초 심사 체험 → Today + → Planner → Coach 입력`.
2. P1 on PASS, keep the stable Vercel alias as the submitted service URL and finish the Wanted submission checklist/form.
3. Keep commercial GARANG frozen unless a real P0/P1 defect appears before submission.
4. After submission, resume P4 User Performance Model v1 using attributable `State × Recommendation × Action × Outcome` evidence.
