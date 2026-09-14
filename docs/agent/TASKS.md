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
Evidence: post-merge Gate #1093 GREEN.

## P4 — Stage 2 Plan-vs-Actual / Adaptive Loop v1
Status: DONE
Owner: AI Data / Product / Engineering / Release QA
Acceptance criteria:
- Canonical Daily Plan intent is compared with actual workout/recovery/nutrition evidence. ✅
- Explicit interpretation and bounded next-plan adjustment exist without silent write. ✅
- Coach remains the behavior-changing approval owner. ✅
- Confirmed/user-edited plan ownership is preserved; no automatic progression increase. ✅
- Golden Path and Stage 1 regressions remain GREEN. ✅
Evidence: PR #88 `c68ec3e...`; Release Gate #1094 GREEN.

## P5 — Weekly Review driven by real outcome signals
Status: DONE
Owner: Product / AI Data / Design Brand / Release QA
Acceptance criteria:
- Weekly Review consumes canonical Plan-vs-Actual/adaptation evidence. ✅
- Produces one explainable insight and bounded next-week adjustment. ✅
- Remains read-only; behavior-changing adjustment requires Coach approval. ✅
- No duplicate screen/write owner. ✅
Evidence: PR #90 `5f3d30e...`; post-merge Gate #1098 GREEN.

## P2 — Real LLM boundary + semantic alignment + Outcome Learning v2
Status: DONE
Owner: AI Data / Engineering / Release QA
Acceptance criteria:
- Authenticated Coach provider boundary, quotas and canonical server context are preserved. ✅
- LLM output remains explanation-only. ✅
- Decision identity/mode/reason alignment is machine-enforced. ✅
- LLM confidence cannot exceed deterministic GARANG confidence. ✅
- Outcome Learning v2 is bounded and cannot automatically increase progression. ✅
- Golden Path, authenticated Coach, Real LLM, recovery and mobile regressions remain GREEN. ✅
Evidence: PR #99 `bcb27d5a...`; post-merge Gate #1170 GREEN.

## P2 — Server Readiness Stage 0
Status: DONE
Owner: Engineering / Release QA / AI Data
Acceptance criteria:
- Explicit repository/auth boundaries exist without replacing Firebase Auth + Firestore or app write ownership. ✅
- Server-state transport reuses canonical schema/state contracts. ✅
- Account export/delete has authenticated server ownership while client fallback remains until activation. ✅
- Origin/security middleware and staging activation contract are explicit. ✅
- Analytics/error telemetry ingestion is consent-gated and allowlisted. ✅
- Real LLM compatibility and Privacy runtime v1.5 regressions remain GREEN. ✅
- PR #101 merged without bypassing full Gate. ✅
Evidence: PR #101 `b2ddbf4e...`; pre-merge Gate #1210 GREEN; post-merge Gate #1212 GREEN; Events #460/#461 GREEN.

## P2 — Firebase Staging Gate v1
Status: DONE
Owner: Engineering / Release QA
Acceptance criteria:
- Staging project ID is mandatory for staging commands. ✅
- Production project `fitfind-ai` is explicitly rejected as a staging target. ✅
- Generated secret/deploy commands always carry an explicit staging `--project`. ✅
- Staging Coach smoke derives and enforces the exact staging endpoint. ✅
- Repository preflight checks Node 22, `asia-northeast3`, Secret Manager binding and env-file ignore safety. ✅
- No secret value, staging project creation or deployment is performed by repository preparation. ✅
- New staging contract is part of the normal test suite. ✅
- Full Golden Path/Real LLM/mobile regressions remain GREEN before and after merge. ✅
Evidence: PR #102 merged as `451f5639bbee65c8f5659e150c0949d0b9bf24d5`; pre-merge Gate #1217 GREEN on `948806883ed47f7371ca20037752bad3aca880eb`; post-merge Gate #1218 GREEN; Events #470/#473 GREEN.

## P1 — Validate deployed Golden Path on real target device
Status: TODO
Owner: Release QA + Product + Design Brand
Acceptance criteria: target iPhone Safari/in-app browser completes Today->Record->Coach->plan->execution->persistence->Accumulation with no critical clipping/runtime failure, and current Decision/Outcome Learning evidence is consistent with stored outcomes.

## P2 — Validate Server Readiness in Firebase staging
Status: IN PROGRESS / ONE DESTRUCTIVE CHECK REMAINING
Owner: Founder / Engineering / Release QA
Acceptance criteria:
- Dedicated staging Firebase project exists and is not `fitfind-ai`. ✅ `garang-staging`
- `GARANG_FIREBASE_STAGING_PROJECT_ID=garang-staging npm run staging:preflight` passes. ✅ `READY_FOR_EXTERNAL_STAGING_SETUP`
- With explicit Founder approval, `GARANG_LLM_API_KEY` is stored in staging Secret Manager without exposing secret material. ✅
- Matching `functions:api` plus Firestore rules/indexes are deployed using explicit staging `--project`. ✅ Deployment VERIFIED; separate Functions test command output not independently captured.
- Authenticated staging Coach returns `source: llm` with verified Decision↔LLM alignment. ✅ Direct curl smoke PASS; repository Node fetch path was blocked by a Codespaces transport issue while curl succeeded.
- Account export returns complete server-owned account data. ✅ `garang-user-export-v1`, `garang-state-v1`, schema 8, state/privacy/serverData present.
- Disposable account deletion removes intended staging user data. ⬜ Requires explicit Founder approval; run last.
- Analytics consent OFF sends no remote product analytics; consent ON sends only allowlisted events/properties. ✅ OFF=`CONSENT_REQUIRED`; ON=`accepted:true,count:1`.
- Error telemetry excludes raw health/chat/email/displayName/provider tokens/precise location/free text. ✅ Privacy smoke PASS; injected fake email/message/stack/token values filtered.
- Only after full staging smoke is GREEN are staging browser endpoint URLs activated through a small reviewed change. ⬜
Evidence: Firebase Staging Gate v1 is VERIFIED GREEN on PRODUCT main `451f563...`; external staging infra/Coach/export/telemetry are VERIFIED GREEN. Destructive account delete remains outstanding.

## P2 — Verify live production Real LLM activation
Status: READY / EXTERNAL EXECUTION REQUIRED
Owner: AI Data / Engineering / Release QA
Acceptance criteria:
- Target production Firebase environment has the intended secret/config without exposing secret material.
- Current Coach Functions revision is deployed and identifiable.
- Authenticated production Coach request returns `source: llm` and verified Decision↔LLM alignment.
- Two authenticated test users with materially different state preserve deterministic personalization and explanation alignment.
- Provider success/fallback/rate-limit observability is visible without raw prompt/token/Memory/full context leakage.
- `npm run smoke:coach:prod` passes against the target endpoint.
Evidence: repository smoke path exists; live production environment evidence remains UNKNOWN.

## P2 — Commercial production hardening
Status: FOUNDER DECISION REQUIRED
Owner: Founder / Engineering / AI Data / Growth Business / Release QA
Scope: production endpoint activation, entitlement/payment, monitoring, production provider configuration, legal/privacy/retention gates, staging/security verification and real-device validation. Repository GREEN does not imply commercial production readiness.

## P6 — Always-on external Founder OS runtime
Status: DEFERRED
Owner: Engineering / AI Data
Activation: only after event contracts prove useful and Founder explicitly wants background autonomous execution.
