# GARANG Project State

Last updated: 2026-09-20

## Current objective
Advance P4 User Performance Model v1 from repository capability into measured product intelligence while preserving deterministic GARANG decision ownership and the existing Golden Path. Competition submissions remain closed and competition-specific runtimes remain frozen except critical fixes or organizer-required changes.

## Repository observations
- CONTROL: `jangsang1214/GARANG-ai-agent`.
- PRODUCT: `jangsang1214/-fitmind-ai`.
- PRODUCT main is now `25f369307424e845a895c8c15c28a5fbddf73346`.
- Previous CONTROL state that treated `b863a763...` as current commercial main was stale. PRODUCT continued through post-submission Coach and User Performance Model work.
- PR #159 was already on main before PR #161 merged; it keeps `collect_data` Coach responses human/actionable without transferring decision ownership.
- Competition submissions remain RECORDED complete by Founder report for Wanted / 롯데 / 브로제이.

## User Performance Model v1 — VERIFIED source state
- User Performance Model v1 already existed in the browser intelligence runtime before this reconciliation.
- PR #155 persists durable recommendation-resolution evidence through the existing Action/Data boundary.
- PR #156 exposes confidence-gated User Performance context through the read-only Intelligence Bridge.
- Trusted context requires non-null evidence and the confidence threshold; low-confidence dimensions remain explicitly withheld.
- Guardrails remain read-only, `affectsDecision=false`, no decision mutation, and no automatic progression.
- PR #161 `Feed confidence-gated User Performance context to Coach` merged to PRODUCT main as `25f369307424e845a895c8c15c28a5fbddf73346`.
- PR #161 adds server-side UPM parity, builds confidence-gated `userPerformance` from canonical persisted state, and passes it into authenticated Coach explanation context.
- Deterministic Decision Intelligence inputs remain unchanged: UPM is not an input to `decide()`.
- Browser/server UPM semantic parity is regression-tested.

## Verification evidence
- PR #161 exact-head Release Gate #1509 / `35500189808`: FULL GREEN after one WebKit transition flake was rerun successfully.
- The first #1509 browser attempt timed out while still on Today before Coach; no browser/router files were changed by PR #161. The single retry passed the same Golden Path test and the full remaining suite.
- #1509 verified Commercial Core, build, Firebase health, Firestore rules, Golden Path, authenticated Coach, Real LLM Golden Path, recovery/mobile regressions and runtime stress.
- Post-merge main Release Gate #1513 / `35500590433`: FULL GREEN with PR #159 + PR #161 combined.
- PRODUCT main merge commit: `25f369307424e845a895c8c15c28a5fbddf73346`.

## Production activation boundary
Evidence class: NOT ACTIVATED / NOT VERIFIED for the new UPM Coach context in production.
- Production Coach Activation #10 / `35500590430` was SKIPPED for merge `25f36930...`.
- Therefore source + CI are GREEN, but do not claim the live Firebase Coach currently consumes UPM v1 context.
- Production deployment requires explicit Founder approval under the production-change gate.

## Competition runtime protection
- Wanted / 롯데 / 브로제이 submissions: RECORDED COMPLETE by Founder report.
- Do not modify competition-specific deployed surfaces except critical outage/bug fixes or organizer-required changes.
- Competition derivatives do not redefine canonical PRODUCT main.

## Stable
- PRODUCT main source/CI at `25f36930...`: GREEN.
- Existing Golden Path: GREEN in post-merge Gate #1513.
- Existing authenticated Coach + Real LLM regression: GREEN in post-merge Gate #1513.
- UPM v1 browser context + durable recommendation evidence: VERIFIED in repository.
- UPM v1 authenticated Coach server-context integration: VERIFIED in source/CI.
- Competition submission execution: RECORDED COMPLETE.

## Broken / blockers
- No VERIFIED P0/P1 product blocker is open from this reconciliation.
- P4 production activation of UPM Coach context is gated by explicit Founder approval, not by a code/test failure.
- Main branch protection and production credential hardening remain non-blocking P2 debt.

## Next priorities
1. P4 Founder decision: authorize production Firebase Coach activation for PRODUCT main `25f36930...`.
2. If approved: deploy through the existing production activation path, verify auth/security boundaries, and run live authenticated Coach smoke before calling runtime GREEN.
3. After runtime activation, evaluate whether UPM evidence measurably improves explanation/personalization quality before allowing any influence on deterministic recommendations.
4. Keep `affectsDecision=false` until a separate evidence-backed decision explicitly changes that contract.
