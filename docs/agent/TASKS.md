# GARANG Tasks

## P1 — Founder OS v7-lite event-ready control plane
Status: DONE
Owner: Command Center / Engineering / Release QA
Acceptance criteria:
- CONTROL/PRODUCT repository roles machine-readable and validated. ✅
- Project Graph validates structure and traces work to goals. ✅
- Deterministic workstream orchestration and event routing are GREEN. ✅

## P1 — Today Single Next Action
Status: DONE
Owner: Design Brand / Product / Engineering / Release QA
Acceptance criteria:
- Today exposes one visible next-action owner. ✅
- Golden Path remains first record -> Coach -> recovery/check-in -> plan -> execute -> accumulation. ✅
- Existing Record/check-in/execution mutation owners are preserved. ✅

## P1 — Commercialization Stage 1 stabilization
Status: DONE
Owner: Product / Design Brand / Engineering / Growth Data / Release QA
Evidence: PRs #80/#83/#84/#87; post-merge Gate #1093 GREEN.

## P4 — Stage 2 Plan-vs-Actual / Adaptive Loop v1
Status: DONE
Owner: AI Data / Product / Engineering / Release QA
Evidence: PR #88 `c68ec3e...`; Gate #1094 GREEN.

## P5 — Weekly Review driven by real outcome signals
Status: DONE
Owner: Product / AI Data / Design Brand / Release QA
Evidence: PR #90 `5f3d30e...`; post-merge Gate #1098 GREEN.

## P2 — Real LLM boundary + semantic alignment + Outcome Learning v2
Status: DONE
Owner: AI Data / Engineering / Release QA
Acceptance criteria:
- GARANG deterministic decision identity/mode/reasons remain machine-enforced against LLM output. ✅
- LLM remains explanation-only; confidence cannot exceed deterministic GARANG confidence. ✅
- Outcome Learning is bounded and cannot automatically increase progression. ✅
Evidence: PR #99 `bcb27d5a...`; post-merge Gate #1170 GREEN.

## P2 — Server Readiness Stage 0
Status: DONE
Owner: Engineering / Release QA / AI Data
Acceptance criteria:
- Authenticated server boundaries for export/delete/telemetry exist without replacing Firebase Auth + Firestore or canonical app write ownership. ✅
- Security/origin boundary and consent-gated allowlisted telemetry are present. ✅
- Real LLM and Privacy runtime regressions remain GREEN. ✅
Evidence: PR #101 `b2ddbf4e...`; Gates #1210/#1212 GREEN; Events #460/#461 GREEN.

## P2 — Firebase Staging Gate v1
Status: DONE
Owner: Engineering / Release QA
Acceptance criteria:
- Staging project ID mandatory; production `fitfind-ai` rejected as staging. ✅
- Deploy/secret commands require explicit staging `--project`. ✅
- Staging Coach smoke enforces exact staging endpoint. ✅
- No secret value committed. ✅
Evidence: PR #102 `451f5639...`; Gates #1217/#1218 GREEN; Events #470/#473 GREEN.

## P2 — Validate Server Readiness in Firebase staging
Status: DONE
Owner: Founder / Engineering / Release QA
Acceptance criteria:
- Dedicated staging project `garang-staging` exists and is isolated from `fitfind-ai`. ✅
- Staging preflight passes. ✅
- Staging Secret Manager binding plus Functions/Firestore deployment complete. ✅ Deployment VERIFIED; separate Functions test output not independently captured.
- Authenticated Real LLM Coach returns `source: llm` with Decision↔LLM alignment verified. ✅
- Account export returns canonical account data. ✅
- Analytics consent OFF/ON behavior verified. ✅
- Error telemetry privacy filtering verified. ✅
- Disposable account delete endpoint PASS and Auth deletion PASS. ✅ Handler success awaits server-side Firestore deletion before Auth removal; auxiliary post-delete REST read was INCONCLUSIVE due invalid admin token.
Evidence: full staging server path GREEN; production not targeted.

## P2 — Implement staging-only privileged browser endpoint boundary
Status: DONE
Owner: Engineering / Release QA
Acceptance criteria:
- Browser account export/delete/analytics/telemetry URLs activate only for exact `GARANG_FIREBASE_CONFIG.projectId === 'garang-staging'`. ✅
- Production `fitfind-ai` remains disabled/fail-closed for all four privileged endpoints. ✅
- Coach endpoint remains derived from active Firebase project and preserves production behavior. ✅
- Consent suppression, allowlisting, privacy filtering, authenticated transport and client fallback ownership are preserved. ✅
- Full Release Gate GREEN before and after merge. ✅
Evidence: PRODUCT PR #103 merged as `419e947aaeec3f74e3c79b86a68362915b0c88d2`; pre-merge Gate #1220 + Event #478 GREEN; post-merge Gate #1221 + Event #480 GREEN; Pages deployment #770 GREEN.

## P1 — Validate deployed Golden Path on real target device
Status: TODO
Owner: Release QA + Product + Design Brand
Acceptance criteria:
- Target iPhone Safari and target in-app browser complete Today -> Record -> Coach -> plan -> execution -> persistence -> Accumulation.
- No critical clipping, overlap, broken navigation or runtime failure.
- Current Decision/Outcome Learning evidence remains consistent with stored outcomes.

## P2 — Deploy and verify a separate staging browser client
Status: READY / EXTERNAL CONFIGURATION REQUIRED
Owner: Engineering / Release QA
Acceptance criteria:
- Use a separate browser Firebase config with projectId `garang-staging`; do not replace committed production config.
- Staging browser resolves privileged endpoints to `asia-northeast3-garang-staging.cloudfunctions.net/api`.
- Production GitHub Pages client remains `fitfind-ai` and privileged endpoints remain null.
- Browser-surface account export, consent OFF/ON telemetry and privacy-safe error telemetry are verified; destructive delete uses only a disposable staging account.
Evidence: activation mechanism is merged and GREEN, but no live staging browser client/deployment has yet been VERIFIED.

## P2 — Verify live production Real LLM activation
Status: READY / EXTERNAL EXECUTION REQUIRED
Owner: AI Data / Engineering / Release QA
Acceptance criteria:
- Production secret/config and exact deployed revision are identified without exposing secret material.
- Authenticated production Coach returns `source: llm` with verified alignment.
- Two materially different users preserve deterministic personalization.
- Provider success/fallback/rate-limit observability is privacy-safe.
Evidence: repository smoke path exists; live production environment evidence remains UNKNOWN.

## P2 — Commercial production hardening
Status: FOUNDER DECISION REQUIRED
Owner: Founder / Engineering / AI Data / Growth Business / Release QA
Scope: production endpoints/provider, entitlement/payment, monitoring, legal/privacy/retention gates, real-device validation and commercial release. Repository/staging GREEN does not imply commercial-production readiness.

## P6 — Always-on external Founder OS runtime
Status: DEFERRED
Owner: Engineering / AI Data
Activation: only after event contracts prove useful and Founder explicitly wants external always-on execution.
