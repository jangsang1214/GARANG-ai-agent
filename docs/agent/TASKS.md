# GARANG Tasks

## P1 — Founder OS v7-lite event-ready control plane
Status: DONE
Owner: Command Center / Engineering / Release QA
Evidence: multi-repo roles, Project Graph, capability policy and event routing validated.

## P1 — Today Single Next Action
Status: DONE
Owner: Design Brand / Product / Engineering / Release QA
Evidence: Golden Path and single next-action ownership preserved.

## P1 — Final Today workout preparation / execution integration
Status: DONE / VERIFIED GREEN
Owner: Product / Design Brand / Engineering / Release QA
Evidence: PRODUCT PR #114 merged as `9e853e8f9ba854b616eb894af5b178805bbce0e8`; post-merge Gate #1319 GREEN; Today workout preparation delegates to canonical execution and bottom Check-in remains touch-safe.

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
Evidence: PR #99 `bcb27d5a...`; post-merge Gate #1170 GREEN.

## P2 — Server Readiness / Firebase staging boundaries
Status: DONE
Owner: Engineering / Release QA / AI Data
Evidence: PRs #101–#103; corresponding gates GREEN. Production activation is tracked separately below.

## P4 — Food Data Foundation v2
Status: DONE
Owner: AI Data / Engineering / Release QA
Evidence: PR #105 `576bb65...`; traceable quality states and fail-closed verified contract established.

## P4 — Nutrition Intelligence v2 + Coach Knowledge Grounding
Status: DONE
Owner: AI Data / Engineering / Release QA
Evidence: PRs #106/#107; deterministic interpretation and LLM explanation-only boundary verified GREEN.

## P4 — Official food-source ingestion and normalization
Status: DONE / REPOSITORY VERIFIED
Owner: AI Data / Engineering / Release QA
Evidence: PR #108 `6fdc51ae...`; Gate #1245 / #1247 GREEN; Pages #774 GREEN.

## P4 — Official nutrition corpus planner
Status: DONE / REPOSITORY VERIFIED
Owner: AI Data / Engineering / Release QA
Evidence: PR #110 merged as `1763c4f9...`; verified gates GREEN.

## P4 — Execute official nutrition corpus replacement
Status: DONE / VERIFIED GREEN
Owner: AI Data / Engineering / Release QA
Acceptance:
- Official K-FIND 음식DB, K-FIND 가공식품DB and 국가표준식품성분표 artifacts reviewed. ✅
- Ambiguous/generic mappings remain fail-closed. ✅
- Canonical identity/order/serving contract preserved. ✅
- Quality counts and full Release Gate re-audited. ✅
Evidence: PRODUCT PR #118 merged as `3c3844edbe07920db41d9054aa968cb8be8bf8f4`; 500 foods = `232 verified / 3 approximate / 265 estimated / 0 unknown`; 151 official upgrades; Gate #1347/#1348 GREEN.

## P1 — Production Real AI Coach activation / verification
Status: TIMEOUT FIX DEPLOYED / POST-FIX AUTHENTICATED LIVE RETEST PENDING
Owner: AI Data / Engineering / Release QA
Acceptance:
- Repository Real LLM/provider/gateway/alignment/personalization/Agent-boundary tests pass. ✅
- Fail-closed production activation workflow is merged. ✅
- Firebase deployment credential is connected to PRODUCT GitHub Actions. ✅
- `GARANG_LLM_API_KEY` is confirmed/configured in Firebase Secret Manager without exposure. ✅
- Current production `api` Function is deployed at the intended revision. ✅
- Unauthenticated POST 401 / wrong-method GET 405 and pre-auth no-provider/no-user-read boundaries. ✅
- A real authenticated production request reaches the provider path. ✅
- Pre-fix provider request returned live external response. ❌ `LLM_TIMEOUT` with `providerStatus: null`; local fallback worked as designed.
- Provider timeout headroom raised 8s → 20s and Function timeout 15s → 30s with regression contract. ✅
- Approved Functions/config changes trigger production activation. ✅
- Timeout fix deployed to production. ✅
- Post-fix authenticated live Coach succeeds with `source: llm`. ⏳
- Two-user personalization differentiation is demonstrated. ⏳
- GARANG decision ownership and confirmation boundary remain intact. ✅
Evidence: PRODUCT PR #122 exact head `fc8faec25f25e2b51cd500e93a593b42776ea95b`; exact-head Gate #1359 GREEN; merged current main `4c18ce254494e458de43c1d9e7030a09bfdb0a22`; Production Coach Activation run #3 `35013994128` SUCCESS with Function update and 401/405 preflight; post-merge Gate #1360 GREEN; Pages #791 GREEN; Event #783 GREEN. Workflow live smoke remains `SKIPPED_NO_TOKEN`, so the required final evidence is a post-fix real authenticated app request, not a stored static ID token.
Next unblock: repeat one logged-in production Coach request. If it fails, record only privacy-safe `code` and `providerStatus`; never paste token/API key.

## P1 — Validate deployed Golden Path on real target device
Status: IN PROGRESS / PARTIAL GREEN
Owner: Release QA + Product + Design Brand
Acceptance:
- iPhone Chrome load/onboarding/Today/first record/Coach. ✅
- Authenticated production provider path reached with safe fallback. ✅
- Post-timeout-fix live external LLM response. ⏳
- Plan → execution → persistence → Accumulation. ⏳
- Target in-app browser Golden Path. ⏳

## P1 — Wanted AI Championship submission
Status: PLANNED AFTER AUTHENTICATED PRODUCTION AI + REAL-DEVICE EVIDENCE
Owner: Founder / Growth Business / Product

## P2 — Functions runtime dependency reproducibility + security gate
Status: PLANNED / AUDIT VERIFIED
Owner: Engineering / Release QA
Acceptance:
- Commit a real generated `functions/package-lock.json`.
- Replace production deployment `npm install --prefix functions` with locked `npm ci --prefix functions`.
- Add Functions production dependency audit to CI.
- Preserve emulator/full Release Gate and production route behavior.
Evidence: current Functions package uses semver ranges; `functions/package-lock.json` is absent; current CI audits root production dependencies but not the separate Functions runtime.

## P2 — Protect CONTROL + PRODUCT main
Status: PLANNED / AUDIT VERIFIED
Owner: Command Center / Release QA
Acceptance:
- Require PR-based changes for `main` where GitHub plan/repository capabilities permit.
- Require relevant CI/Release Gate status checks.
- Block force-push/deletion to main.
Evidence: both repositories report `protected: false` and repository ruleset lists are empty. Current discipline is procedural only.

## P2 — CI/toolchain modernization
Status: PLANNED / NON-BLOCKING
Owner: Engineering / Release QA
Acceptance:
- Upgrade GitHub Actions that still target deprecated Node 20 runtime and re-run both repo gates.
- Review root dev/deploy dependency audit findings without forcing breaking production upgrades into feature work.
- Upgrade Firebase CLI / `firebase-functions` only in isolated regression-tested PRs.
Evidence: current workflows run successfully but emit Node 20 deprecation warnings; root production audit is clean while dev/deploy tooling audit has high/critical findings; Firebase deploy warns `firebase-functions` is outdated.

## P2 — Production deployment credential hardening
Status: PLANNED AFTER LIVE AI STABILIZATION
Owner: Engineering / Release QA
Acceptance:
- Review least-privilege deploy permissions.
- Migrate GitHub deployment authentication from long-lived service-account JSON to short-lived OIDC / Workload Identity Federation where practical.
- Rotate/retire old key only after replacement path is VERIFIED.
Evidence: production deploy currently succeeds through masked `FIREBASE_SERVICE_ACCOUNT_FITFIND_AI` JSON.

## P6 — Repository / cloud cost hygiene
Status: PLANNED
Owner: Command Center / Engineering
Acceptance:
- Close superseded old UI/experiment PRs rather than merging stale scope.
- Configure safe Firebase build-artifact retention/cleanup after toolchain modernization or inspect manually with Founder approval before destructive deletion.
Evidence: stale PRODUCT experiment PRs remain open; deploy repeatedly reports build-image cleanup warning and possible small monthly charge.

## P2 — Commercial production hardening
Status: FOUNDER DECISION REQUIRED
Owner: Founder / Engineering / AI Data / Growth Business / Release QA

## P6 — Always-on external Founder OS runtime
Status: DEFERRED
Owner: Engineering / AI Data
