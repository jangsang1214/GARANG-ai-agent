# GARANG Tasks

## P1 — Founder OS v7-lite event-ready control plane
Status: DONE
Owner: Command Center / Engineering / Release QA
Acceptance criteria:
- CONTROL/PRODUCT repository roles machine-readable and validated. ✅
- Project Graph validates structure and traces work to goals. ✅
- Deterministic workstream orchestration. ✅
- Versioned GitHub event envelopes + deterministic routing. ✅
- Recorded-vs-observed repo drift explicit. ✅
- GREEN/YELLOW/RED release evaluation; UNKNOWN never equals PASS. ✅
- CI-event stream derives multi-repo release readiness. ✅
- Project Instructions <= 8,000 characters enforced by test. ✅
- CONTROL workflow emits real read-only event artifacts. ✅

## P1 — PRODUCT event-envelope adapter
Status: DONE
Owner: Engineering / Release QA
Acceptance criteria:
- Read-only event adapter installed without runtime app changes. ✅
- Existing product Release Gate GREEN before/after merge. ✅
- Main event artifact emitted successfully. ✅

## P1 — Today Single Next Action
Status: DONE
Owner: Design Brand / Product / Engineering / Release QA
Acceptance criteria:
- Today exposes one visible next-action owner. ✅
- Golden Path remains the sequence truth. ✅
- first record -> Coach -> recovery/check-in -> plan -> execute -> accumulation remains canonical. ✅
- Existing Record/check-in/execution mutation owners are preserved. ✅
- Mobile Today has no competing CTA or critical layout regression. ✅

## P1 — Commercialization Stage 1 stabilization
Status: DONE
Owner: Product / Design Brand / Engineering / Growth Data / Release QA
Acceptance criteria:
- Commercialization preservation/gap audit frozen before behavior changes. ✅ PR #80
- Privacy-safe activation/intelligence/execution analytics contract exists with remote consent default off. ✅ PR #83
- Record friction reduced through read-only recent workout prefill; canonical save owner unchanged. ✅ PR #84
- Coach default hierarchy is judgment -> reason -> proposal action, with evidence progressively disclosed and approval path preserved. ✅ PR #87
- Planner remains execution/evidence surface without new write owner. ✅
- Today remains single-next-action surface with Coach as judgment owner. ✅
- Golden Path complete journey remains GREEN. ✅
- Authenticated Coach/recovery flows remain GREEN. ✅
- Mobile button health and runtime stability remain GREEN. ✅
- Post-merge PRODUCT Release Gate #1093 on `ecb7517897080b01ee81b717882826a061ae1df0` is GREEN. ✅
Evidence: PR #80 `aac1eeb...`; PR #83 `33a7a422...`; PR #84 `0503979e...`; PR #87 `ecb75178...`; pre-merge Gate #1092 GREEN; post-merge Gate #1093 GREEN; Founder OS event #201 GREEN.

## P4 — Stage 2 Plan-vs-Actual / Adaptive Loop v1
Status: IN PROGRESS
Owner: AI Data / Product / Engineering / Release QA
Goal: convert actual execution outcomes into an explainable adaptation signal that can change the next Daily Plan.
Acceptance criteria:
- Compare canonical Daily Plan intent with actual workout/recovery/nutrition evidence using existing stored data.
- Produce explicit interpretation: completed / partial / missed / recovery-constrained / insufficient-evidence where supported.
- Produce a bounded next-plan adjustment recommendation with evidence and no silent write.
- Coach remains the user-facing judgment/approval owner for behavior-changing plan changes.
- No new external provider, secret, or production endpoint required for v1.
- Golden Path and existing Stage 1 regressions remain GREEN.
- Outcome/adaptation output has deterministic tests.

## P5 — Weekly Review driven by real outcome signals
Status: TODO / AFTER ADAPTIVE LOOP V1
Owner: Product / AI Data / Design Brand
Acceptance criteria: weekly review summarizes planned vs actual, recovery/nutrition context, one explainable GARANG insight and one next-week adjustment without becoming a duplicate dashboard.

## P1 — Validate deployed Golden Path on real target device
Status: TODO
Owner: Release QA + Product + Design Brand
Acceptance criteria: target iPhone Safari/in-app browser completes Today->Record->Coach->plan->execution->persistence->Accumulation with no critical clipping/runtime failure.

## P2 — Commercial production hardening
Status: TODO / SEPARATE FROM STAGE 2
Owner: Engineering + AI Data + Growth Business + Release QA
Scope includes durable production backend/data, entitlement/payment, monitoring, production provider configuration, legal/privacy/retention gates and staging/security verification.

## P6 — Always-on external Founder OS runtime
Status: DEFERRED
Owner: Engineering / AI Data
Activation: only after event contracts prove useful and Founder explicitly wants background autonomous execution.
