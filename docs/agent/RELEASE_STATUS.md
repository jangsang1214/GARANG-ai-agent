# GARANG Release Status

Last updated: 2026-09-17

## Overall decision
GREEN for the canonical commercial GARANG web baseline and GREEN for the repository-level Wanted derivative release snapshot. Latest Wanted production root is GREEN and pinned to the corrected release SHA; final human confirmation of the redeployed Today shortcut is YELLOW/pending.

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
- Current release SHA: `24dcacd29cf17ada5df63d857aaa93cc4a608e33`.
- PR #140 merged into the Wanted release branch only; commercial main is unchanged.

### Today Planner shortcut correction
- Founder observed the previously added Today `+` was absent on the stable public URL.
- Root cause was source-level and VERIFIED: the shortcut and sync path were gated by the `garang_wanted_demo_active_v1` judge-mode localStorage flag.
- PR #140 leaves the Coach judging guide judge-mode-only while making Today `오늘의 계획 + → Planner` available throughout the Wanted derivative.
- The browser regression explicitly removes the judge-mode flag before checking shortcut visibility and Planner navigation.

### Verification
- PR #140 exact-head Wanted derivative gate / run `35137650732`: GREEN.
- PR #140 full GARANG Release Gate #1468 / run `35137651074`: FULL GREEN.
- Full release browser checks passed real interactions, Today, Planner, Nutrition, Golden Path complete journey, authenticated app/Coach, Real LLM Golden Path, conversational logging, recovery, mobile regression, Settings touch, button health and runtime stress.
- PR #140 merged as `24dcacd29cf17ada5df63d857aaa93cc4a608e33`.
- Post-merge Wanted derivative gate #51 / run `35138268989`: GREEN on the exact merge SHA, including the corrected UX affordance test.

### Competition-only behavior
- `60초 심사 체험`, judging guide and Today shortcut remain isolated to the Wanted derivative.
- Coach guide auto-collapse/manual toggle remains active only in judge mode.
- Today `+ → Planner` is no longer dependent on judge mode within the Wanted derivative.
- Synthetic judging records remain local-only and contain no real-user data.
- Sample Coach output does not claim a live GPT call; real GPT/photo Coach remains on the authenticated production path.
- No Firebase production config/provider secret was changed.

## Vercel public deployment
Decision: YELLOW / ROOT+DEPLOYMENT GREEN, CORRECTED UX HUMAN SMOKE PENDING.
- Stable alias: `https://garang-wanted-2026-jangsang1214.vercel.app`.
- Vercel Authentication / SSO Deployment Protection remains disabled.
- Latest production deployment id: `dpl_4Nvd8QzzXwD7X5Psw6R8NSnZdMbP`; deployment response reported `READY` and assigned the stable alias.
- Public shell pins its asset root to exact Wanted release SHA `24dcacd29cf17ada5df63d857aaa93cc4a608e33`; it does not follow commercial `main`.
- Exact-SHA `version.js` and corrected Wanted UX JS were independently reachable through jsDelivr.
- Fresh unauthenticated rendered fetch of `https://garang-wanted-2026-jangsang1214.vercel.app/?v=24dcacd2` returned `GARANG — Quietly Becoming`; anonymous public root access is GREEN.
- The corrected interaction behavior is VERIFIED in exact-release WebKit CI; one Founder public click-through remains the final confidence check.

## Intelligence ownership
Decision: GREEN / unchanged.
- Deterministic GARANG State/Decision Intelligence owns judgment.
- LLM remains explanation/language/multimodal-context layer.
- Intelligence Learning Contract: `decisionId → recommendationId → actionId → planId → executionId → outcomeId`.
- Outcome Learning remains read-only/advisory.

## Deployment status
- Commercial deployment: GREEN.
- Wanted repository release snapshot: GREEN.
- Wanted exact-head full Release Gate #1468: GREEN.
- Wanted post-merge derivative gate #51: GREEN.
- Wanted Vercel deployment creation/readiness: GREEN.
- Wanted anonymous public root access: GREEN.
- Wanted corrected Today shortcut public human smoke: YELLOW / pending.

## Release-channel boundary
Commercial GARANG PRODUCT main is canonical. Wanted/competition submission is a separate derivative from the verified stable snapshot. Competition-only changes do not redefine or automatically modify commercial GARANG.

## Remaining non-blocking debt
- Functions dependency family breaking upgrade remains dedicated follow-up work.
- CONTROL CI Actions v4 modernization remains planned.
- Main branch protection is not server-enforced.
- Production deployment credential should migrate to short-lived OIDC/WIF after verified replacement.
- Firebase build-image retention/cost cleanup remains a reviewed maintenance task.
