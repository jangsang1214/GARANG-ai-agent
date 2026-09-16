# GARANG Project State

Last updated: 2026-09-17

## Current objective
Keep the VERIFIED commercial GARANG web baseline frozen while finishing the separately isolated Wanted/competition deployment and submission. Competition work must optimize judge comprehension without redefining commercial GARANG.

## Repository observations
- CONTROL: `jangsang1214/GARANG-ai-agent`; orchestration/policy/project state.
- PRODUCT: `jangsang1214/-fitmind-ai`; implementation/tests/CI/releases.
- PRODUCT canonical commercial main: `b863a7634bd64b03a6e6f3772950c43cc81afb6f`.
- Wanted derivative release branch: `wanted/2026-release`.
- Wanted derivative current release SHA: `6f7a6e97792971a550a2bf79e49c0ac07c071aa4`.
- PRODUCT PR #132 Wanted judging derivative: MERGED into `wanted/2026-release`; commercial `main` unchanged.

## VERIFIED commercial release evidence
- Commercial main Release Gate #1449 / run `35110020514`: FULL GREEN.
- Commercial-main GitHub Pages #799 / run `35110017165`: SUCCESS.
- Public commercial URL: `https://jangsang1214.github.io/-fitmind-ai/`.
- Production Coach Live Smoke run `35101459492`: authenticated text + photo `source=llm` SUCCESS with disposable Firebase identity cleanup.

## VERIFIED Wanted derivative evidence
- Source snapshot is exact commercial main `b863a7634bd64b03a6e6f3772950c43cc81afb6f`.
- PR #132 exact-head full GARANG Release Gate #1451 / run `35116671610`: FULL GREEN.
- PR #132 exact-head Wanted derivative gate #4 / run `35116671535`: GREEN.
- Post-merge Wanted derivative gate #5 / run `35117403297`: GREEN on release SHA `6f7a6e97792971a550a2bf79e49c0ac07c071aa4`.
- Mobile WebKit verifies `60초 심사 체험 → Today 판단 → Coach 설명 → Progress`.
- The judge flow uses only synthetic local sample data and is explicitly labeled `JUDGING MODE · SAMPLE DATA`.
- Sample mode does not claim a live GPT call; the real authenticated production GPT/photo path remains available through normal signup/login.
- No Firebase config/provider secret mutation and no real-user sample data were introduced.

## Wanted derivative UX
- Auth surface adds a restrained Wanted competition kicker and `60초 심사 체험` entry.
- Synthetic sample state demonstrates recent training, nutrition, body trend and a high-soreness daily check-in so GARANG can show an interpreted next action immediately.
- A compact guide routes judges through Today → Coach → Progress rather than exposing a feature catalog.
- Submission narrative is stored with the derivative as `WANTED_SUBMISSION.md` and positions GARANG as Personal Performance Intelligence, not a generic fitness chatbot.

## Product / AI state
- Commercial Golden Path remains: Onboarding → Today → Record → Coach → Plan → Confirmation → Execution → Record → Progress/Accumulation.
- Coach photo attachment remains the compact composer `+` control.
- Deterministic GARANG State/Decision Intelligence remains the judgment owner; LLM remains bounded explanation/language.
- Intelligence Learning Contract v1 remains released: `decisionId → recommendationId → actionId → planId → executionId → outcomeId`.
- Outcome Learning remains advisory-only: no silent mutation and no automatic progression increase.

## Stable
- Commercial product baseline remains frozen and GREEN.
- Wanted derivative source/release branch is isolated and regression-verified.
- Real production text/photo Coach path remains VERIFIED.

## Broken / blockers
- No VERIFIED P0/P1 code blocker remains for the commercial web baseline or Wanted derivative source.
- Wanted derivative still needs its own public deployment URL before final competition submission; current GitHub connector cannot create a separate repository/deployment target by itself.
- Full commercial-production readiness across every physical device/channel is a separate standard and is not implied by the competition/web baseline.

## Durable release-channel decision
Commercial GARANG PRODUCT main is canonical. Wanted/competition work is a separate derivative from a VERIFIED stable snapshot. Competition-only demo/copy/presentation changes do not automatically flow back to commercial GARANG.

## Next priorities
1. P1 deploy `wanted/2026-release @ 6f7a6e97…` to a separate public URL and verify the deployed 60-second judge path in a fresh browser.
2. P1 complete Wanted participation/submission form using `WANTED_SUBMISSION.md`; disclose commercial service status separately to Wanted if applicable.
3. Keep commercial GARANG frozen unless a real P0/P1 defect is found before submission.
4. After submission, resume P4 User Performance Model v1 using attributable `State × Recommendation × Action × Outcome` evidence.
