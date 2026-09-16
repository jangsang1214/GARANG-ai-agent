# GARANG Tasks

Last updated: 2026-09-17

## Active P1 — Wanted final public smoke + submission
Status: YELLOW / IMPLEMENTATION+CI+BACKEND+LIVE LLM+PUBLIC ROOT GREEN, HUMAN UI SMOKE + FINAL SUBMISSION PENDING
Owner: Founder / Growth Business / Product / Release QA
Goal: finish the Wanted submission on the stable public URL without destabilizing commercial GARANG.
Acceptance:
- Commercial PRODUCT main remains frozen at `b863a7634bd64b03a6e6f3772950c43cc81afb6f`. ✅
- Wanted release branch is `wanted/2026-release`. ✅
- Current Wanted release SHA is `23990db387c9e1f6570dc971a8da34d56946bc85`. ✅
- Relative 14-day synthetic judge dataset remains release-merged and CI-verified. ✅
- Today `오늘의 계획 + → Planner` works independent of judge-mode flag. ✅
- Coach judge guide no longer blocks text entry. ✅
- No-login Wanted Coach text requests use an isolated `/wanted/coach` path instead of local fallback. ✅
- Canonical `/coach` remains Firebase-authenticated. ✅
- Wanted synthetic state is contract-validated/sanitized before server intelligence/LLM use. ✅
- Wanted public route accepts only the stable Vercel origin, rejects images, enforces quotas and auto-expires after judging. ✅
- PR #141 Wanted Gate #69 / `35141844675`: GREEN. ✅
- PR #141 full Release Gate #1476 / `35141844625`: FULL GREEN. ✅
- PR #141 merged as `23990db387c9e1f6570dc971a8da34d56946bc85`. ✅
- Post-merge Wanted Gate #71 / `35142457444`: GREEN. ✅
- Production activation run `35142457402`: GREEN. ✅
- Firebase `functions:api` deployed successfully. ✅
- Canonical `/coach` post-deploy preflight remains fail-closed at unauthenticated `401`; provider/user-data are not invoked/read. ✅
- Wanted production smoke returns `source:"llm"` with request `fb37b74b-c376-4e74-8854-8e4f64ec2898`. ✅
- Stable public alias is `https://garang-wanted-2026-jangsang1214.vercel.app`. ✅
- Vercel production deployment `dpl_Hicw8pdoT3Jo5zogrNe78nzWx7S8` is READY and pins exact release SHA `23990db3…`. ✅
- Fresh unauthenticated rendered fetch opens GARANG and exact Real-AI assets are publicly reachable. ✅
- Founder public smoke passes `60초 심사 체험 → Coach → 오늘 회복 상태를 알려줘` with a visible successful answer. ⬜ final human UI confidence check
- Wanted participation/final submission completed before deadline. ⬜ Founder final action

## Closed P1 — Wanted no-login Real AI Coach
Status: DONE / VERIFIED GREEN AT SOURCE+CI+PRODUCTION PROVIDER
Owner: AI Data / Engineering / Release QA
Acceptance:
- Diagnose why judge mode falls back to local Coach. ✅
- Keep canonical authenticated `/coach` boundary unchanged. ✅
- Avoid Firebase anonymous SDK login/cloud hydration that could change synthetic state ownership. ✅
- Add Wanted-only no-login text route using synthetic judge context. ✅
- Sanitize and whitelist synthetic context; strip identity/free-text fields. ✅
- Lock route to stable Wanted origin. ✅
- Reject anonymous photo analysis. ✅
- Add per-client/global rate limits and judging-period expiry. ✅
- Preserve server-side LLM secret. ✅
- Verify browser transport isolation. ✅
- Verify full commercial Golden Path/authenticated Coach/Real LLM regression. ✅
- Deploy production Firebase API and verify live `source=llm`. ✅
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

## Closed P1 — Commercial critical-path baselines
Status: DONE / VERIFIED GREEN
- Coach photo composer simplification — PR #130 / Gate #1444 GREEN.
- Mobile route intent across remounts — PR #131 / post-merge Gate #1449 FULL GREEN.
- Coach reconnect + production AI stabilization — Production Coach Live Smoke `35101459492` SUCCESS.
- Intelligence Learning Contract v1 released.

## P2 — Protect CONTROL + PRODUCT main
Status: PLANNED / NON-BLOCKING
Owner: Command Center / Release QA
Acceptance: enforce PR/status-check protection where practical without making solo-Founder operation brittle.

## P2 — Production deployment credential hardening
Status: PLANNED / NON-BLOCKING
Owner: Engineering / Release QA
Acceptance: migrate toward GitHub OIDC / Google Workload Identity Federation; retire long-lived credentials only after replacement is VERIFIED.

## P2 — Dependency/tooling hardening
Status: PLANNED / NON-BLOCKING FOR CURRENT WEB BASELINE
Owner: Engineering / Release QA
Acceptance:
- Resolve moderate Functions findings through a dedicated breaking-upgrade PR with emulator + production smoke evidence.
- Reduce root dev/tooling audit findings separately from the clean production-runtime audit.
- Modernize CONTROL tooling in a dedicated verified PR.

## P6 — Repository / cloud cost hygiene
Status: PLANNED
Owner: Command Center / Engineering
Acceptance: address Firebase build-image retention warning and other safe artifact retention/cost cleanup; destructive cleanup requires explicit Founder approval.

## Next P4 — User Performance Model v1
Status: PLANNED AFTER SUBMISSION FREEZE
Owner: AI Data / Product / Engineering
Acceptance direction:
- Learn user dimensions from attributable evidence, not onboarding alone.
- Each dimension includes value, confidence, sample size, last-updated time and evidence IDs.
- Start deterministic; do not introduce ML/vector infrastructure without measured need.
- Add explicit rejected/dismissed recommendation evidence to future personalization.
