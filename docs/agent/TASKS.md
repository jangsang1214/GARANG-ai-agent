# GARANG Tasks

Last updated: 2026-09-17

## Active P1 — Wanted visible Coach smoke + final submission
Status: YELLOW / IMPLEMENTATION+CI+BACKEND+LIVE LLM+PUBLIC JUDGE RUNTIME GREEN, VISIBLE COACH ANSWER + FINAL SUBMISSION PENDING
Owner: Founder / Growth Business / Product / Release QA
Goal: finish the Wanted submission on the stable public URL without destabilizing commercial GARANG.

Acceptance:
- Commercial PRODUCT main remains frozen at `b863a7634bd64b03a6e6f3772950c43cc81afb6f`. ✅
- Wanted release branch is `wanted/2026-release`. ✅
- Current Wanted release SHA is `23990db387c9e1f6570dc971a8da34d56946bc85`. ✅
- 14-day synthetic judge dataset remains release-merged and CI-verified. ✅
- Today `오늘의 계획 + → Planner` and Coach guide/composer UX remain regression-covered. ✅
- No-login Wanted Coach text requests use isolated `/wanted/coach`. ✅
- Canonical `/coach` remains Firebase-authenticated. ✅
- Wanted synthetic context is sanitized/contract-bound; images rejected; origin/quota/expiry enforced. ✅
- PR #141 Wanted Gate #69 / `35141844675`: GREEN. ✅
- Full Release Gate #1476 / `35141844625`: FULL GREEN. ✅
- PR #141 merged as `23990db3…`. ✅
- Post-merge Wanted Gate #71 / `35142457444`: GREEN. ✅
- Production activation run `35142457402`: GREEN. ✅
- Canonical `/coach` post-deploy remains fail-closed at unauthenticated `401`. ✅
- Wanted production live smoke returns `source:"llm"` request `fb37b74b-c376-4e74-8854-8e4f64ec2898`. ✅
- Stable public alias is `https://garang-wanted-2026-jangsang1214.vercel.app`. ✅
- A bad Vercel shell redeploy causing login-only/non-interactive behavior was diagnosed as deployment-shell regression, not data/LLM failure. ✅
- Repaired production deployment `dpl_92kMMBx2tPepvsfBZNdY84B942bh` is READY. ✅
- Live browser smoke verifies `60초 심사 체험` visible/clickable, 14-day judging mode loads, and tap/toggle interaction works. ✅
- Founder smoke verifies Coach visible answer for `오늘 회복 상태를 알려줘`. ⬜
- Wanted participation/final submission completed before deadline. ⬜ Founder final action

## Closed P1 — Wanted public shell recovery
Status: DONE / VERIFIED GREEN FOR JUDGE ENTRY + 14-DAY INTERACTION
Owner: Engineering / Release QA
Evidence: stable alias recovered on Vercel deployment `dpl_92kMMBx2tPepvsfBZNdY84B942bh`; live browser automation clicked `60초 심사 체험`, entered `JUDGING MODE · 14 DAYS SYNTHETIC DATA`, and verified responsive taps/toggles with no visible error.

## Closed P1 — Wanted no-login Real AI Coach
Status: DONE / VERIFIED GREEN AT SOURCE+CI+PRODUCTION PROVIDER
Evidence: PRODUCT PR #141; Wanted Gate #69 `35141844675`; full Release Gate #1476 `35141844625`; release SHA `23990db3…`; post-merge Wanted Gate #71 `35142457444`; activation `35142457402`; live request `fb37b74b-c376-4e74-8854-8e4f64ec2898`.

## Closed P1 — Wanted Today Planner shortcut judge-mode gating fix
Status: DONE / VERIFIED GREEN
Evidence: PR #140 merged as `24dcacd2…`; exact-head Wanted gate `35137650732`; full Release Gate #1468; post-merge Wanted Gate #51.

## Closed P1 — Wanted Coach guide + Today Planner affordance
Status: DONE / SUPERSEDED FOR TODAY GATING BY PR #140
Evidence: PR #138 merged as `5ac57709…`; Wanted Gate #41; full Release Gate #1463; post-merge Wanted Gate #42.

## Closed P1 — Wanted judge-entry observer hotfix
Status: DONE / VERIFIED GREEN
Evidence: PR #137 merged as `149ba11f…`; Wanted Gate #32; full Release Gate #1461; post-merge Wanted Gate #33.

## Closed P1 — Wanted deployment-origin hotfix
Status: DONE / VERIFIED GREEN
Evidence: PR #134; Wanted Gate #20; full Release Gate #1455; post-merge Wanted Gate #21.

## Closed P1 — Wanted 14-day judge data upgrade
Status: DONE / VERIFIED GREEN
Evidence: PR #133; Release Gate #1454; post-merge Wanted Gate #13.

## P2 — Protect CONTROL + PRODUCT main
Status: PLANNED / NON-BLOCKING

## P2 — Production deployment credential hardening
Status: PLANNED / NON-BLOCKING

## P2 — Dependency/tooling hardening
Status: PLANNED / NON-BLOCKING

## P6 — Repository / cloud cost hygiene
Status: PLANNED

## Next P4 — User Performance Model v1
Status: PLANNED AFTER SUBMISSION FREEZE
