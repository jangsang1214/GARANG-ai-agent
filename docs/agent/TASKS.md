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
Evidence: PR #80 `aac1eeb...`; PR #83 `33a7a422...`; PR #84 `0503979e...`; PR #87 `ecb75178...`; post-merge Gate #1093 GREEN.

## P4 — Stage 2 Plan-vs-Actual / Adaptive Loop v1
Status: DONE
Owner: AI Data / Product / Engineering / Release QA
Acceptance criteria:
- Compare canonical Daily Plan intent with actual workout/recovery/nutrition evidence using existing stored data. ✅
- Produce explicit interpretation: completed / partial / missed / recovery-constrained / insufficient-evidence where supported. ✅
- Produce a bounded next-plan adjustment recommendation with evidence and no silent write. ✅
- Coach remains the user-facing judgment/approval owner for behavior-changing plan changes. ✅
- Confirmed/user-edited plan ownership is preserved; no automatic progression increase. ✅
- No new external provider, secret, or production endpoint required for v1. ✅
- Golden Path and Stage 1 regressions remain GREEN. ✅
- Outcome/adaptation output has deterministic tests. ✅
Evidence: PR #88 merged as `c68ec3e915ae437dac35fbc1a9a39fc4ca6f6dbf`; complete Release Gate #1094 GREEN.

## P5 — Weekly Review driven by real outcome signals
Status: DONE
Owner: Product / AI Data / Design Brand / Release QA
Acceptance criteria:
- Weekly Review consumes the canonical Plan-vs-Actual/adaptation evidence instead of a parallel model. ✅
- Summarizes planned vs actual plus recovery/nutrition context. ✅
- Produces one explainable GARANG insight and one bounded next-week adjustment. ✅
- Remains read-only with no silent mutation or automatic progression increase. ✅
- Behavior-changing adjustment requires Coach approval. ✅
- Does not add a duplicate dashboard, router owner, persistence path or new screen. ✅
- Full PRODUCT regression and post-merge Release Gate remain GREEN. ✅
Evidence: PR #90 merged as `5f3d30e877e31d219623ebd521226e49265b46bf`; pre-merge Gate #1097 GREEN; post-merge Gate #1098 GREEN; Founder OS Event #214 GREEN.

## P2 — Real LLM boundary + semantic alignment + Outcome Learning v2
Status: DONE
Owner: AI Data / Engineering / Release QA
Acceptance criteria:
- Authenticated Coach provider quotas and canonical server-owned user context preserve the production boundary. ✅ PR #97
- LLM output remains explanation-only and cannot return or execute a state mutation contract. ✅
- Provider output structurally echoes deterministic GARANG `decisionId`, `decisionMode`, and supported reason codes. ✅
- Decision reversal or unsupported provider reasoning is rejected before success. ✅
- LLM confidence cannot exceed deterministic GARANG confidence. ✅
- Outcome Learning v2 uses bounded longitudinal evidence without overwriting recent Plan-vs-Actual truth. ✅
- Longitudinal learning can only constrain progression or prefer reduced load; it cannot automatically increase progression. ✅
- Missing/null outcome evidence cannot be learned as a missed outcome. ✅
- Golden Path, authenticated Coach, Real LLM integration, recovery and mobile regressions remain GREEN. ✅
Evidence: PR #99 merged as `bcb27d5a283eb04643f0080f71a8a70ead14f95d`; pre-merge Release Gate #1166 GREEN; post-merge Release Gate #1170 GREEN.

## P1 — Validate deployed Golden Path on real target device
Status: TODO
Owner: Release QA + Product + Design Brand
Acceptance criteria: target iPhone Safari/in-app browser completes Today->Record->Coach->plan->execution->persistence->Accumulation with no critical clipping/runtime failure, and current Decision/Outcome Learning evidence is consistent with stored outcomes.

## P2 — Verify live production Real LLM activation
Status: READY / EXTERNAL EXECUTION REQUIRED
Owner: AI Data / Engineering / Release QA
Acceptance criteria:
- Target Firebase environment has the intended LLM secret/config without exposing secret material.
- Current Coach Functions revision containing PR #99 behavior is deployed and identifiable.
- Authenticated production Coach request returns `source: llm` and a verified Decision↔LLM alignment result.
- Two authenticated test users with materially different state produce different deterministic GARANG decisions while preserving explanation alignment.
- Provider success/fallback/rate-limit observability is visible without raw prompt, token, Memory value or full context leakage.
- `npm run smoke:coach:prod` passes against the target endpoint.
Evidence: repository smoke path exists on PRODUCT main; live target-environment evidence remains UNKNOWN.

## P2 — Commercial production hardening
Status: FOUNDER DECISION REQUIRED
Owner: Founder / Engineering / AI Data / Growth Business / Release QA
Scope: durable production backend/data, entitlement/payment, monitoring, production provider configuration, legal/privacy/retention gates and staging/security verification. This scope is broader than Real LLM activation and must not be inferred from an AI/Data release alone.

## P6 — Always-on external Founder OS runtime
Status: DEFERRED
Owner: Engineering / AI Data
Activation: only after event contracts prove useful and Founder explicitly wants background autonomous execution.
