# GARANG Release Status

Last updated: 2026-09-17

## Overall decision
GREEN for the canonical commercial GARANG web baseline and GREEN for the repository-level Wanted derivative release snapshot. Wanted public deployment is RED until anonymous access is enabled because the current Vercel alias returns `login_required` to a fresh unauthenticated browser fetch.

## Commercial PRODUCT main
Decision: GREEN / FROZEN FOR SUBMISSION WINDOW.
- Current canonical main: `b863a7634bd64b03a6e6f3772950c43cc81afb6f`.
- Release Gate #1449 / run `35110020514`: FULL GREEN.
- GitHub Pages #799 / run `35110017165`: SUCCESS.
- Public commercial URL: `https://jangsang1214.github.io/-fitmind-ai/`.
- Production Coach Live Smoke `35101459492`: authenticated text + photo LLM SUCCESS.

## Wanted derivative
Decision: GREEN / RELEASE SNAPSHOT VERIFIED.
- Source commercial snapshot: `b863a7634bd64b03a6e6f3772950c43cc81afb6f`.
- Release branch: `wanted/2026-release`.
- Current release SHA: `711517a4d62c9383716498fceb5d22030b98e033`.
- PR #134 merged into the Wanted release branch only; commercial main is unchanged.

### Judge-entry hotfix
- Founder observed the first public Vercel judge flow freezing after tapping `60초 심사 체험`.
- Root cause: the 14-day synthetic dataset used a document-relative URL while the public shell loaded competition assets from a frozen external origin.
- PR #134 makes `07_config/version.js` derive the asset root from its own loaded URL and route Wanted JS/CSS and the judge dataset to that same root.
- A dedicated deployment-origin compatibility test verifies this behavior and verifies unrelated fetches are not rewritten.

### Verification
- PR #134 Wanted derivative gate #20 / run `35125457506`: GREEN.
- PR #134 full GARANG Release Gate #1455 / run `35125457469`: FULL GREEN.
- Full release browser checks include real browser interactions, mobile layout, Today, Planner, Nutrition, Golden Path complete journey, authenticated app/Coach, Real LLM integration, recovery mutation/touch, mobile regression, Settings, button health and runtime stress.
- Post-merge Wanted derivative gate #21 / run `35126068695`: GREEN on release SHA `711517a4d62c9383716498fceb5d22030b98e033`.
- Post-merge Wanted gate verifies 14-day dataset, deployment-origin compatibility, build output/assets and the 60-second WebKit judging journey.

### Competition-only behavior
- `60초 심사 체험` remains isolated to the Wanted derivative.
- Synthetic judging records are local-only and contain no real-user data.
- Dataset remains current-date-relative with 14 daily check-ins, 42 meals, workout/running/body history and fatigue-driven plan-adjustment evidence.
- Sample Coach output does not claim a live GPT call; real GPT/photo Coach remains on the authenticated production path.
- No Firebase production config/provider secret was changed.

## Vercel public deployment
Decision: RED / ANONYMOUS ACCESS BLOCKED.
- Alias: `https://garang-wanted-2026-jangsang1214.vercel.app`.
- Latest production deployment id: `dpl_6Ei1Xn4hvoWNbSndGUKAHWXCbEnM`; deployment response reported `READY`.
- Public shell pins its asset root to exact Wanted release SHA `711517a4d62c9383716498fceb5d22030b98e033`; it does not follow commercial `main`.
- Fresh unauthenticated browser-render fetch on 2026-09-17 returned `login_required`.
- Therefore repository/build readiness is not the current problem; Vercel Deployment Protection / Vercel Authentication is blocking judges before application runtime.
- Release cannot be considered public-runtime GREEN until Vercel Authentication / SSO protection is disabled for this Wanted project and a fresh anonymous `60초 심사 체험 → Today → Coach → Progress` pass succeeds.

## Intelligence ownership
Decision: GREEN / unchanged.
- Deterministic GARANG State/Decision Intelligence owns judgment.
- LLM remains explanation/language/multimodal-context layer.
- Intelligence Learning Contract: `decisionId → recommendationId → actionId → planId → executionId → outcomeId`.
- Outcome Learning remains read-only/advisory.

## Deployment status
- Commercial deployment: GREEN.
- Wanted repository release snapshot: GREEN.
- Wanted Vercel deployment creation/readiness: GREEN evidence from deploy response.
- Wanted anonymous public access: RED — `login_required`.
- Wanted fresh public judge path: BLOCKED until deployment protection is disabled.

## Release-channel boundary
Commercial GARANG PRODUCT main is canonical. Wanted/competition submission is a separate derivative from the verified stable snapshot. Competition-only changes do not redefine or automatically modify commercial GARANG.

## Remaining non-blocking debt
- Functions dependency family breaking upgrade remains dedicated follow-up work.
- CONTROL CI Actions v4 modernization remains planned.
- Main branch protection is not server-enforced.
- Production deployment credential should migrate to short-lived OIDC/WIF after verified replacement.
- Firebase build-image retention/cost cleanup remains a reviewed maintenance task.
