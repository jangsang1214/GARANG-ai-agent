# GARANG Release Status

Last updated: 2026-09-17

## Overall decision
- Commercial GARANG web baseline: GREEN / FROZEN FOR SUBMISSION WINDOW.
- Wanted source/CI, Firebase backend, live LLM provider path and repaired public judge runtime: GREEN.
- Final visible Coach-answer smoke and competition submission: YELLOW / pending Founder confirmation/action.

## Commercial PRODUCT main
Decision: GREEN / UNCHANGED.
- Canonical main: `b863a7634bd64b03a6e6f3772950c43cc81afb6f`.
- Release Gate #1449 / `35110020514`: FULL GREEN.
- Pages #799 / `35110017165`: SUCCESS.
- Production Coach Live Smoke `35101459492`: authenticated text + photo `source=llm` SUCCESS.
- Wanted work did not modify commercial `main`.

## Wanted derivative
Decision: GREEN / RELEASE SNAPSHOT VERIFIED.
- Release branch: `wanted/2026-release`.
- Release SHA: `23990db387c9e1f6570dc971a8da34d56946bc85`.
- PR #141 `Enable Wanted Real AI Coach`: MERGED into Wanted release only.
- Wanted Gate #69 / `35141844675`: GREEN.
- Full GARANG Release Gate #1476 / `35141844625`: FULL GREEN.
- Post-merge Wanted Gate #71 / `35142457444`: GREEN.

## Real AI Coach boundary
Decision: GREEN.
- Canonical `/coach` remains Firebase-authenticated.
- No-login judge mode uses isolated `/wanted/coach` only for the sanitized `garang-wanted-judge-data-v1` synthetic contract.
- Images are rejected on the public judge route; production authenticated Coach retains photo analysis.
- Exact stable Vercel origin, quotas and judging-period expiry are enforced.
- Existing server-side `GARANG_LLM_API_KEY` was preserved.
- Activation run `35142457402`: GREEN.
- Post-deploy canonical `/coach`: unauthenticated POST `401`, wrong-method GET `405`, no provider/user-data access.
- Wanted live production smoke: `source:"llm"`, request `fb37b74b-c376-4e74-8854-8e4f64ec2898`, decision mode `recover`.

## Vercel public deployment
Decision: GREEN for recovered judge entry, 14-day runtime and touch interaction.
- Stable alias: `https://garang-wanted-2026-jangsang1214.vercel.app`.
- A production redeploy briefly regressed the shell asset root, producing a static login-only/non-interactive symptom while exact release CDN assets and backend stayed healthy.
- Repaired production deployment: `dpl_92kMMBx2tPepvsfBZNdY84B942bh` / READY.
- Repaired shell loads exact Wanted release `23990db387c9e1f6570dc971a8da34d56946bc85` while retaining the Vercel page origin.
- Live TinyFish browser smoke on the stable alias VERIFIED:
  - `60초 심사 체험` visible and clickable.
  - 14-day judging experience loads with `JUDGING MODE · 14 DAYS SYNTHETIC DATA`.
  - Today/14-day judge surfaces render.
  - Tap/toggle interactions work.
  - No visible error or broken element observed in that smoke.

## Deployment status
- Commercial deployment: GREEN.
- Wanted source/CI: GREEN.
- Wanted production Firebase API: GREEN.
- Canonical authenticated Coach boundary: GREEN.
- Wanted production Real LLM smoke: GREEN.
- Wanted repaired public judge entry + 14-day interaction: GREEN.
- Wanted visible public Coach response: YELLOW / pending Founder check.
- Wanted final submission: YELLOW / pending Founder final action.

## Release-channel boundary
Commercial GARANG PRODUCT main is canonical. Wanted/competition submission is a separate derivative. Competition-only demo/deployment/backend-route changes do not redefine commercial GARANG.

## Remaining non-blocking debt
- Firebase build-image retention/cost cleanup.
- Functions dependency breaking upgrade.
- CONTROL tooling modernization.
- Main branch protection is not server-enforced.
- Production deployment credential should migrate to short-lived OIDC/WIF after verified replacement.
