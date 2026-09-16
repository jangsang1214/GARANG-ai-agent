# GARANG Project State

Last updated: 2026-09-17

## Current objective
Keep the VERIFIED commercial GARANG web baseline frozen while finishing the separately isolated Wanted/competition public deployment and final submission. Competition work must optimize judge comprehension without redefining commercial GARANG.

## Repository observations
- CONTROL: `jangsang1214/GARANG-ai-agent`; orchestration/policy/project state.
- PRODUCT: `jangsang1214/-fitmind-ai`; implementation/tests/CI/releases.
- PRODUCT canonical commercial main: `b863a7634bd64b03a6e6f3772950c43cc81afb6f`.
- Wanted derivative release branch: `wanted/2026-release`.
- Wanted derivative current release SHA: `711517a4d62c9383716498fceb5d22030b98e033`.
- PRODUCT PR #134 fixed the judge-entry deployment-origin bug and was MERGED into `wanted/2026-release`; commercial `main` remained unchanged.

## VERIFIED commercial release evidence
- Commercial main Release Gate #1449 / run `35110020514`: FULL GREEN.
- Commercial-main GitHub Pages #799 / run `35110017165`: SUCCESS.
- Public commercial URL: `https://jangsang1214.github.io/-fitmind-ai/`.
- Production Coach Live Smoke run `35101459492`: authenticated text + photo `source=llm` SUCCESS.

## VERIFIED Wanted derivative evidence
- Commercial source boundary remains exact PRODUCT main `b863a7634bd64b03a6e6f3772950c43cc81afb6f`.
- PR #133 introduced the relative 14-day synthetic judging history and merged at release SHA `561d900b...`.
- Founder runtime observation then found a P1 blocker: tapping `60초 심사 체험` on the first public Vercel attempt froze before entering judge mode.
- Root cause was deployment-origin mismatch: the judge script fetched `./04_data/wanted/wanted-14day-synthetic-v1.json` relative to the Vercel document while competition assets were loaded from a frozen external asset root.
- PR #134 exact-head Wanted derivative gate #20 / run `35125457506`: GREEN, including a deployment-origin compatibility test.
- PR #134 full GARANG Release Gate #1455 / run `35125457469`: FULL GREEN, including Golden Path, authenticated Coach, Real LLM integration, recovery and mobile regression/stress checks.
- PR #134 merged to `wanted/2026-release` as `711517a4d62c9383716498fceb5d22030b98e033`.
- Post-merge Wanted derivative gate #21 / run `35126068695`: GREEN, including 14-day dataset, deployment-origin compatibility, build/assets and 60-second WebKit journey.
- The fixed `07_config/version.js` derives the Wanted asset root from its own loaded URL and routes the 14-day dataset plus competition JS/CSS to that same frozen root; unrelated fetches remain untouched.
- The judge flow uses only synthetic local data and does not claim sample Coach output is a live GPT request.
- Dataset remains date-relative with 14 daily check-ins, 42 meals, workout/running/body history and fatigue-driven plan-adjustment evidence.

## Wanted public deployment observation
Evidence class: RED / PUBLIC ACCESS BLOCKED.
- Vercel production alias: `https://garang-wanted-2026-jangsang1214.vercel.app`.
- Latest deployment request returned READY with deployment id `dpl_6Ei1Xn4hvoWNbSndGUKAHWXCbEnM` and frozen Wanted release asset root `711517a4d62c9383716498fceb5d22030b98e033`.
- A fresh unauthenticated browser-render fetch against the public alias returned `login_required` on 2026-09-17. This is direct evidence that judges cannot currently open the submission URL anonymously.
- The remaining blocker is Vercel Deployment Protection / Vercel Authentication (SSO protection), not PRODUCT source or CI.
- Vercel documentation confirms Vercel Authentication can be disabled by setting project `ssoProtection` to `null` or by disabling SSO deployment protection in project settings/CLI. The currently connected Vercel toolset exposes read/deploy helpers but no project-protection write action, so this account-level setting cannot be safely changed from the current chat tool surface.
- Do not use the alias in the final Wanted form until anonymous access is enabled and a fresh judge-path smoke passes.

## Product / AI state
- Commercial Golden Path remains: Onboarding → Today → Record → Coach → Plan → Confirmation → Execution → Record → Progress/Accumulation.
- Coach photo attachment remains the compact composer `+` control.
- Deterministic GARANG State/Decision Intelligence remains the judgment owner; LLM remains bounded explanation/language.
- Intelligence Learning Contract v1 remains released: `decisionId → recommendationId → actionId → planId → executionId → outcomeId`.
- Outcome Learning remains advisory-only: no silent mutation and no automatic progression increase.

## Stable
- Commercial product baseline remains frozen and GREEN.
- Wanted derivative release SHA `711517a4…` is isolated and regression-verified.
- 14-day synthetic judging history and deployment-origin compatibility are release-merged and CI-verified.
- Real production text/photo Coach path remains VERIFIED.

## Broken / blockers
- No VERIFIED P0/P1 repository or CI blocker remains for commercial GARANG or the Wanted release source.
- P1 deployment blocker: Vercel Authentication currently requires login on the supposed public Wanted alias.
- Exact recovery: disable Vercel Authentication / SSO Deployment Protection for the Wanted project, then rerun fresh unauthenticated `60초 심사 체험 → Today → Coach → Progress` verification.
- Full commercial-production readiness across every physical device/channel is a separate standard and is not implied by the competition/web baseline.

## Durable release-channel decision
Commercial GARANG PRODUCT main is canonical. Wanted/competition work is a separate derivative from a VERIFIED stable snapshot. Competition-only demo/copy/presentation/deployment changes do not automatically flow back to commercial GARANG.

## Next priorities
1. P1 disable Vercel Authentication / SSO Deployment Protection for the Wanted public project so anonymous judges can access the alias.
2. P1 rerun fresh unauthenticated mobile smoke: `60초 심사 체험 → Today → Coach → Progress`.
3. P1 only on PASS, replace `[WANTED_PUBLIC_URL]` in final submission copy and complete the Wanted participation/submission form.
4. Keep commercial GARANG frozen unless a real P0/P1 defect appears before submission.
5. After submission, resume P4 User Performance Model v1 using attributable `State × Recommendation × Action × Outcome` evidence.
