# GARANG Release Status

Last updated: 2026-09-17

## Overall decision
GREEN for the canonical commercial GARANG web baseline and GREEN for the repository-level Wanted derivative release snapshot. Wanted public root access is GREEN; the end-to-end public judge click path remains YELLOW until one fresh human click-through confirms the latest redeploy.

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
- Current release SHA: `149ba11fe9dba33033aa3b1d201f7b3141f782ec`.
- PR #137 merged into the Wanted release branch only; commercial main is unchanged.

### Judge-entry runtime hotfix
- Founder observed that the public judge entry still did not enter the app after Vercel Authentication had been disabled.
- Source inspection VERIFIED a mutation-loop hazard in the competition-only auth/app visibility observer: it observed `hidden` changes while unconditionally writing those same `hidden` values.
- PR #137 temporarily wraps MutationObserver during Wanted runtime bootstrap, filters redundant `hidden` mutations, preserves real visibility transitions and restores native MutationObserver immediately after script load.
- Regression coverage verifies redundant writes are filtered, real visibility changes are propagated, and the native observer is restored.

### Verification
- PR #137 Wanted derivative gate #32 / run `35131048847`: GREEN.
- PR #137 full GARANG Release Gate #1461 / run `35131048722`: FULL GREEN.
- Full release browser checks passed real interactions, Today, Planner, Nutrition, truth/first-record, Golden Path integration + complete journey, authenticated app/Coach, Real LLM Golden Path, conversational logging, recovery mutation/touch, mobile regression, Settings touch, button health and runtime stress.
- PR #137 merged as `149ba11fe9dba33033aa3b1d201f7b3141f782ec`.
- Post-merge Wanted derivative gate #33 / run `35131663143`: GREEN on the exact merge SHA, including dataset, deployment-origin/observer compatibility, build/assets and 60-second WebKit judging journey.

### Competition-only behavior
- `60초 심사 체험` remains isolated to the Wanted derivative.
- Synthetic judging records are local-only and contain no real-user data.
- Dataset remains current-date-relative with 14 daily check-ins, 42 meals, workout/running/body history and fatigue-driven plan-adjustment evidence.
- Sample Coach output does not claim a live GPT call; real GPT/photo Coach remains on the authenticated production path.
- No Firebase production config/provider secret was changed.

## Vercel public deployment
Decision: YELLOW / PUBLIC ROOT GREEN, END-TO-END CLICK PENDING.
- Alias: `https://garang-wanted-2026-jangsang1214.vercel.app`.
- Founder disabled Vercel Authentication / SSO Deployment Protection.
- Latest production deployment id: `dpl_Bc7dxWoziC633y8EEZ6BWDJUFQWE`; deployment response reported `READY`.
- Public shell pins its asset root to exact Wanted release SHA `149ba11fe9dba33033aa3b1d201f7b3141f782ec`; it does not follow commercial `main`.
- Exact-SHA CDN `version.js` and Wanted runtime were reachable before deploy.
- Fresh unauthenticated rendered fetch of the cache-busted production alias returned `GARANG — Quietly Becoming`, so the previous Vercel `login_required` blocker is no longer present.
- Interactive public button-click verification is still UNKNOWN from the current tool surface; one Founder fresh-browser `60초 심사 체험 → Today → Coach → Progress` pass is required before final submission URL sign-off.

## Intelligence ownership
Decision: GREEN / unchanged.
- Deterministic GARANG State/Decision Intelligence owns judgment.
- LLM remains explanation/language/multimodal-context layer.
- Intelligence Learning Contract: `decisionId → recommendationId → actionId → planId → executionId → outcomeId`.
- Outcome Learning remains read-only/advisory.

## Deployment status
- Commercial deployment: GREEN.
- Wanted repository release snapshot: GREEN.
- Wanted exact-head full Release Gate #1461: GREEN.
- Wanted post-merge derivative gate #33: GREEN.
- Wanted Vercel deployment creation/readiness: GREEN evidence from deploy response.
- Wanted anonymous public root access: GREEN.
- Wanted fresh public judge click path: YELLOW / human verification pending.

## Release-channel boundary
Commercial GARANG PRODUCT main is canonical. Wanted/competition submission is a separate derivative from the verified stable snapshot. Competition-only changes do not redefine or automatically modify commercial GARANG.

## Remaining non-blocking debt
- Functions dependency family breaking upgrade remains dedicated follow-up work.
- CONTROL CI Actions v4 modernization remains planned.
- Main branch protection is not server-enforced.
- Production deployment credential should migrate to short-lived OIDC/WIF after verified replacement.
- Firebase build-image retention/cost cleanup remains a reviewed maintenance task.
