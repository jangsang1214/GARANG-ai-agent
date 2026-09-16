# GARANG Release Status

Last updated: 2026-09-17

## Overall decision
GREEN for the canonical commercial GARANG web baseline and GREEN for the repository-level Wanted derivative release snapshot. The latest Wanted production deployment is anonymously reachable and pinned to the verified release SHA; final public human confirmation of the newly changed UX is YELLOW/pending.

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
- Current release SHA: `5ac577094cf5ff4350ce33a7dbba2b79f8ba90cd`.
- PR #138 merged into the Wanted release branch only; commercial main is unchanged.

### Judge UX fixes
- Root cause of Coach usability issue: the competition judging guide was fixed near the bottom of the viewport and could cover the Coach composer.
- Wanted-only fix auto-collapses the guide on Coach, adds a manual open/close control, and places collapsed state away from the composer.
- Wanted-only Today fix adds a compact `+` beside `오늘의 계획`; it routes directly to Planner using the canonical GARANG router.
- Dedicated browser regression verifies Today `+ → Planner`, Coach auto-collapse, textarea focus/text entry, and no geometric guide/composer overlap.

### Verification
- PR #138 Wanted derivative gate #41 / run `35133826320`: GREEN.
- PR #138 full GARANG Release Gate #1463 / run `35133826275`: FULL GREEN.
- Full release browser checks passed real interactions, Today, Planner, Nutrition, Golden Path complete journey, authenticated app/Coach, Real LLM Golden Path, conversational logging, recovery, mobile regression, Settings touch, button health and runtime stress.
- PR #138 merged as `5ac577094cf5ff4350ce33a7dbba2b79f8ba90cd`.
- Post-merge Wanted derivative gate #42 / run `35134431895`: GREEN on the exact merge SHA, including the new judge UX affordance test.

### Competition-only behavior
- `60초 심사 체험` and the guide/Today shortcut adjustments remain isolated to the Wanted derivative.
- Synthetic judging records remain local-only and contain no real-user data.
- Dataset remains current-date-relative with 14 daily check-ins, 42 meals, workout/running/body history and fatigue-driven plan-adjustment evidence.
- Sample Coach output does not claim a live GPT call; real GPT/photo Coach remains on the authenticated production path.
- No Firebase production config/provider secret was changed.

## Vercel public deployment
Decision: YELLOW / ROOT+DEPLOYMENT GREEN, NEW UX HUMAN SMOKE PENDING.
- Stable alias: `https://garang-wanted-2026-jangsang1214.vercel.app`.
- Vercel Authentication / SSO Deployment Protection remains disabled.
- Latest production deployment id: `dpl_87pRSKTnUgw3iAi5RDrPCBjg8Hg4`; deployment response reported `READY` and assigned the stable alias.
- Public shell pins its asset root to exact Wanted release SHA `5ac577094cf5ff4350ce33a7dbba2b79f8ba90cd`; it does not follow commercial `main`.
- Exact-SHA `version.js`, new Wanted UX CSS and new Wanted UX JS were independently reachable through jsDelivr.
- Fresh unauthenticated rendered fetch of the cache-busted stable alias returned `GARANG — Quietly Becoming`; anonymous public root access remains GREEN.
- The requested interaction behavior is VERIFIED in exact-release WebKit CI; a human public click-through of the freshly deployed SHA remains the last confidence check.

## Intelligence ownership
Decision: GREEN / unchanged.
- Deterministic GARANG State/Decision Intelligence owns judgment.
- LLM remains explanation/language/multimodal-context layer.
- Intelligence Learning Contract: `decisionId → recommendationId → actionId → planId → executionId → outcomeId`.
- Outcome Learning remains read-only/advisory.

## Deployment status
- Commercial deployment: GREEN.
- Wanted repository release snapshot: GREEN.
- Wanted exact-head full Release Gate #1463: GREEN.
- Wanted post-merge derivative gate #42: GREEN.
- Wanted Vercel deployment creation/readiness: GREEN.
- Wanted anonymous public root access: GREEN.
- Wanted new UX public human smoke: YELLOW / pending.

## Release-channel boundary
Commercial GARANG PRODUCT main is canonical. Wanted/competition submission is a separate derivative from the verified stable snapshot. Competition-only changes do not redefine or automatically modify commercial GARANG.

## Remaining non-blocking debt
- Functions dependency family breaking upgrade remains dedicated follow-up work.
- CONTROL CI Actions v4 modernization remains planned.
- Main branch protection is not server-enforced.
- Production deployment credential should migrate to short-lived OIDC/WIF after verified replacement.
- Firebase build-image retention/cost cleanup remains a reviewed maintenance task.
