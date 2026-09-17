# GARANG Tasks

Last updated: 2026-09-17

## Active P1 — Wanted final submission
Status: YELLOW / PUBLIC RUNTIME GREEN, FINAL SUBMISSION PENDING
Owner: Founder / Growth Business / Product / Release QA
Goal: complete the Wanted submission on the stable public URL without destabilizing commercial GARANG.

Acceptance:
- Commercial PRODUCT main remains frozen at `b863a7634bd64b03a6e6f3772950c43cc81afb6f`. ✅
- Wanted release branch is `wanted/2026-release`. ✅
- Current Wanted release SHA is `3acd2ae654ce0d387b64174c96a6243d89cb9b74`. ✅
- 14-day synthetic judge dataset and judge UX remain release-merged and regression-covered. ✅
- Canonical `/coach` remains Firebase-authenticated. ✅
- Wanted `/wanted/coach` remains synthetic-contract-bound, text-only, exact-origin/quota/expiry constrained. ✅
- Browser CORS activation is deployed (PR #150/#152). ✅
- Remaining browser transport mismatch fixed by PR #154: public judge request strips inherited custom headers and sends only `Content-Type`. ✅
- PR #154 Wanted Gate #97 / `35183623414`: GREEN. ✅
- PR #154 full Release Gate #1494 / `35183623380`: FULL GREEN. ✅
- PR #154 merged as `3acd2ae6…`. ✅
- Stable public alias is `https://garang-wanted-2026-jangsang1214.vercel.app`. ✅
- Production deployment `dpl_DXa432LkkUdPcC2fD61ZcHHX3wDx` is READY and loads exact release `3acd2ae6…`. ✅
- Live public browser smoke passes `60초 심사 체험 → Coach → 나 준나 강해지고싶어` with a visible context-aware Real AI answer and no local fallback message. ✅
- Wanted participation/final submission completed before deadline. ⬜ Founder final action

## Closed P1 — Wanted public browser Real AI transport
Status: DONE / VERIFIED GREEN END-TO-END
Owner: AI Data / Engineering / Release QA
Evidence: Founder-observed fallback reproduced by TinyFish; PR #154 fixes inherited-header leakage; Wanted Gate #97 GREEN; full Release Gate #1494 FULL GREEN; release `3acd2ae6…`; Vercel `dpl_DXa432LkkUdPcC2fD61ZcHHX3wDx`; live browser same-prompt smoke returns Real AI response without fallback.

## Closed P1 — Wanted public shell recovery
Status: DONE / VERIFIED GREEN
Evidence: login-only/non-interactive Vercel shell regression was repaired; 60-second entry, 14-day state and touch interaction restored.

## Closed P1 — Wanted no-login Real AI Coach backend
Status: DONE / VERIFIED GREEN
Evidence: PRODUCT PR #141; production activation `35142457402`; direct provider smoke `source:llm`; canonical `/coach` stayed auth-closed.

## Closed P1 — Wanted Today Planner shortcut judge-mode gating fix
Status: DONE / VERIFIED GREEN
Evidence: PR #140.

## Closed P1 — Wanted Coach guide + Today Planner affordance
Status: DONE
Evidence: PR #138 + PR #140 correction.

## Closed P1 — Wanted judge-entry observer hotfix
Status: DONE / VERIFIED GREEN
Evidence: PR #137.

## Closed P1 — Wanted deployment-origin hotfix
Status: DONE / VERIFIED GREEN
Evidence: PR #134.

## Closed P1 — Wanted 14-day judge data upgrade
Status: DONE / VERIFIED GREEN
Evidence: PR #133.

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
