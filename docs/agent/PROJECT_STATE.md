# GARANG Project State

Last updated: 2026-09-17

## Current objective
Keep the VERIFIED commercial GARANG web baseline frozen while finishing the separately isolated Wanted/competition public deployment and final submission. Competition work must optimize judge comprehension without redefining commercial GARANG.

## Repository observations
- CONTROL: `jangsang1214/GARANG-ai-agent`; orchestration/policy/project state.
- PRODUCT: `jangsang1214/-fitmind-ai`; implementation/tests/CI/releases.
- PRODUCT canonical commercial main: `b863a7634bd64b03a6e6f3772950c43cc81afb6f`.
- Wanted derivative release branch: `wanted/2026-release`.
- Wanted derivative current release SHA: `561d900b82b2ff5aa85769457e4f39c1b4c14767`.
- PRODUCT PR #133 upgraded the isolated judge experience with a relative 14-day synthetic history and was MERGED into `wanted/2026-release`; commercial `main` remained unchanged.

## VERIFIED commercial release evidence
- Commercial main Release Gate #1449 / run `35110020514`: FULL GREEN.
- Commercial-main GitHub Pages #799 / run `35110017165`: SUCCESS.
- Public commercial URL: `https://jangsang1214.github.io/-fitmind-ai/`.
- Production Coach Live Smoke run `35101459492`: authenticated text + photo `source=llm` SUCCESS with disposable Firebase identity cleanup.

## VERIFIED Wanted derivative evidence
- Commercial source boundary remains exact PRODUCT main `b863a7634bd64b03a6e6f3772950c43cc81afb6f`.
- PR #133 exact-head full GARANG Release Gate #1454 / run `35122058195`: FULL GREEN.
- PR #133 exact-head Wanted derivative gate: GREEN.
- Post-merge Wanted derivative gate #13 / run `35122761724`: GREEN on release SHA `561d900b82b2ff5aa85769457e4f39c1b4c14767`.
- Wanted CI verifies the 14-day synthetic dataset, build output, derivative assets and `60초 심사 체험 → Today 판단 → Coach 설명 → Progress` on mobile WebKit.
- The judge flow uses only synthetic local data and does not claim sample Coach output is a live GPT request.
- The dataset is date-relative so judges consistently see a recent two-week history; it contains 14 daily check-ins, 42 meals, workout/running/body history and a fatigue-driven plan-adjustment scenario.
- `WANTED_FORM_COPY.md` contains paste-ready submission copy and intentionally keeps `[WANTED_PUBLIC_URL]` unresolved until the deployed URL is externally verified.

## Wanted deployment observation
Evidence class: PARTIAL / YELLOW.
- Vercel project/deployment creation was attempted under the connected `jangsang1214` Vercel account using a competition-only project name `garang-wanted-2026`.
- A production deployment request was accepted for deployment id `dpl_26o2uL2sWEQQNFuZaDLXoieUiB8t` with candidate alias `https://garang-wanted-2026-jangsang1214.vercel.app`.
- The bootstrap is pinned to Wanted release SHA `561d900b82b2ff5aa85769457e4f39c1b4c14767` and loads frozen public assets from that exact SHA rather than from moving `main`.
- Follow-up Vercel connector reads returned `projects: []` / deployment 404, and this execution environment cannot resolve public DNS directly. Therefore the alias runtime and fresh-browser judge path are NOT yet VERIFIED.
- Do not paste the candidate alias into the final Wanted form until external runtime verification succeeds.

## Product / AI state
- Commercial Golden Path remains: Onboarding → Today → Record → Coach → Plan → Confirmation → Execution → Record → Progress/Accumulation.
- Coach photo attachment remains the compact composer `+` control.
- Deterministic GARANG State/Decision Intelligence remains the judgment owner; LLM remains bounded explanation/language.
- Intelligence Learning Contract v1 remains released: `decisionId → recommendationId → actionId → planId → executionId → outcomeId`.
- Outcome Learning remains advisory-only: no silent mutation and no automatic progression increase.

## Stable
- Commercial product baseline remains frozen and GREEN.
- Wanted derivative release SHA `561d900b…` is isolated and regression-verified.
- 14-day synthetic judging history is release-merged and CI-verified.
- Real production text/photo Coach path remains VERIFIED.

## Broken / blockers
- No VERIFIED P0/P1 code blocker remains for the commercial web baseline or Wanted derivative source.
- P1 operational blocker: verify a stable public Wanted URL and fresh-browser 60-second judge path. Current Vercel deployment creation is observed, but runtime verification is UNKNOWN because the connector cannot read back its own deployment.
- Full commercial-production readiness across every physical device/channel is a separate standard and is not implied by the competition/web baseline.

## Durable release-channel decision
Commercial GARANG PRODUCT main is canonical. Wanted/competition work is a separate derivative from a VERIFIED stable snapshot. Competition-only demo/copy/presentation/deployment changes do not automatically flow back to commercial GARANG.

## Next priorities
1. P1 externally verify the candidate Wanted public alias or redeploy the same frozen SHA through a Vercel Git import if the candidate alias is not live.
2. P1 after runtime verification, replace `[WANTED_PUBLIC_URL]` in `WANTED_FORM_COPY.md` and run a fresh mobile/incognito `60초 심사 체험 → Today → Coach → Progress` smoke.
3. P1 complete Wanted participation/submission form and final-submit action.
4. Keep commercial GARANG frozen unless a real P0/P1 defect is found before submission.
5. After submission, resume P4 User Performance Model v1 using attributable `State × Recommendation × Action × Outcome` evidence.
