# GARANG Project State

Last updated: 2026-09-17

## Current objective
Keep the VERIFIED commercial GARANG web baseline frozen while finishing the separately isolated Wanted/competition public runtime and final submission. The only remaining competition gate is a fresh human click-through of the newly redeployed judge path.

## Repository observations
- CONTROL: `jangsang1214/GARANG-ai-agent`; orchestration/policy/project state.
- PRODUCT: `jangsang1214/-fitmind-ai`; implementation/tests/CI/releases.
- PRODUCT canonical commercial main: `b863a7634bd64b03a6e6f3772950c43cc81afb6f`.
- Wanted derivative release branch: `wanted/2026-release`.
- Wanted derivative current release SHA: `149ba11fe9dba33033aa3b1d201f7b3141f782ec`.
- PRODUCT PR #137 `Fix Wanted judge-mode entry freeze` is MERGED into the Wanted release branch only; commercial `main` remains unchanged.

## VERIFIED commercial release evidence
- Commercial main Release Gate #1449 / run `35110020514`: FULL GREEN.
- Commercial-main GitHub Pages #799 / run `35110017165`: SUCCESS.
- Public commercial URL: `https://jangsang1214.github.io/-fitmind-ai/`.
- Production Coach Live Smoke run `35101459492`: authenticated text + photo `source=llm` SUCCESS.

## VERIFIED Wanted derivative evidence
- 14-day synthetic judging history remains local-only and date-relative with 14 daily check-ins, 42 meals, workout/running/body history and fatigue-driven plan-adjustment evidence.
- PR #134 fixed deployment-origin asset resolution; its exact-head Wanted gate #20 was GREEN, full Release Gate #1455 FULL GREEN, and post-merge Wanted gate #21 GREEN.
- Founder later observed that, after Vercel Authentication was disabled, tapping the 14-day / `60초 심사 체험` entry still failed to enter the application.
- Source inspection VERIFIED a judge-mode mutation hazard: the Wanted runtime observed `hidden` changes on auth/app views while its callback unconditionally rewrote those same `hidden` values.
- PR #137 makes the Wanted loader temporarily wrap the MutationObserver used during judge-runtime bootstrap, filters redundant `hidden` mutations, preserves real visibility changes, and restores the native observer immediately after the Wanted script loads.
- PR #137 exact-head Wanted derivative gate #32 / run `35131048847`: GREEN, including the new observer regression test and 60-second WebKit journey.
- PR #137 full GARANG Release Gate #1461 / run `35131048722`: FULL GREEN. Core/build/rules and the complete browser WebKit suite passed, including authenticated app/Coach, Real LLM Golden Path, Golden Path complete journey, mobile regressions, button health and runtime stress.
- PR #137 merged as Wanted release SHA `149ba11fe9dba33033aa3b1d201f7b3141f782ec`.
- Post-merge Wanted derivative gate #33 / run `35131663143`: GREEN on the exact merge SHA, including dataset, deployment-origin/observer compatibility, build/assets and 60-second judging journey.

## Wanted public deployment observation
Evidence class: YELLOW / PUBLIC ROOT VERIFIED, CLICK-THROUGH PENDING.
- Vercel production alias: `https://garang-wanted-2026-jangsang1214.vercel.app`.
- Founder disabled Vercel Authentication / SSO Deployment Protection after the prior anonymous `login_required` blocker was identified.
- New production deployment `dpl_Bc7dxWoziC633y8EEZ6BWDJUFQWE` returned `READY` and pins the public shell to exact Wanted release SHA `149ba11fe9dba33033aa3b1d201f7b3141f782ec` via jsDelivr.
- The frozen CDN `version.js` and Wanted runtime script at that exact SHA were independently reachable before deployment.
- Fresh unauthenticated rendered fetch of `https://garang-wanted-2026-jangsang1214.vercel.app/?v=149ba11f` returned the GARANG page title instead of `login_required`; anonymous public root access is therefore restored.
- Interactive browser automation is unavailable in the current tool surface, so the actual public `60초 심사 체험 → Today → Coach → Progress` click path remains UNKNOWN until Founder performs one fresh-browser click-through.

## Product / AI state
- Commercial Golden Path remains: Onboarding → Today → Record → Coach → Plan → Confirmation → Execution → Record → Progress/Accumulation.
- Deterministic GARANG State/Decision Intelligence remains the judgment owner; LLM remains bounded explanation/language/multimodal context.
- Intelligence Learning Contract v1 remains released: `decisionId → recommendationId → actionId → planId → executionId → outcomeId`.
- Outcome Learning remains advisory-only: no silent mutation and no automatic progression increase.

## Stable
- Commercial product baseline remains frozen and GREEN.
- Wanted source snapshot `149ba11f…` is isolated and regression-verified.
- Wanted exact-head full release gate and post-merge derivative gate are GREEN.
- Anonymous access to the latest Vercel alias is restored.
- Real production text/photo Coach path remains VERIFIED.

## Broken / blockers
- No VERIFIED P0/P1 repository or CI blocker remains for commercial GARANG or Wanted source.
- Remaining P1 release gate: human fresh-browser confirmation that the latest public alias completes `60초 심사 체험 → Today → Coach → Progress` without freeze.
- Full commercial-production readiness across every physical device/channel is a separate standard and is not implied by the competition/web baseline.

## Durable release-channel decision
Commercial GARANG PRODUCT main is canonical. Wanted/competition work is a separate derivative from a VERIFIED stable snapshot. Competition-only demo/copy/presentation/deployment changes do not automatically flow back to commercial GARANG.

## Next priorities
1. P1 Founder smoke the new public deployment once in a fresh/incognito browser: `60초 심사 체험 → Today → Coach → Progress`.
2. P1 on PASS, replace `[WANTED_PUBLIC_URL]` in final submission copy with the stable alias and perform the final submission checklist.
3. P1 complete Wanted participation/submission form and final-submit action.
4. Keep commercial GARANG frozen unless a real P0/P1 defect appears before submission.
5. After submission, resume P4 User Performance Model v1 using attributable `State × Recommendation × Action × Outcome` evidence.
