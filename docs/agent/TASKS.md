# GARANG Tasks

Last updated: 2026-09-20

## Active P4 — User Performance Model v1 production activation
Status: SOURCE+CI GREEN / PRODUCTION ACTIVATION PENDING EXPLICIT FOUNDER APPROVAL
Owner: Product / AI Data / Engineering / Release QA
Goal: make accumulated user-performance evidence available to the live authenticated Coach explanation layer without transferring deterministic decision ownership.

Completed acceptance:
- Existing UPM v1 derives compact performance dimensions from canonical user state. ✅ VERIFIED
- Recommendation-response evidence persists through the existing Action/Data boundary. ✅ VERIFIED (PR #155)
- Confidence-gated read-only context is exposed through the browser Intelligence Bridge. ✅ VERIFIED (PR #156)
- Low-confidence/missing dimensions are withheld rather than promoted as user facts. ✅ VERIFIED
- Guardrails remain `readOnly=true`, `affectsDecision=false`, no decision mutation, no automatic progression. ✅ VERIFIED
- Server Agent Context builds the same UPM semantics as the browser model. ✅ VERIFIED
- Browser/server parity regression prevents silent semantic drift. ✅ VERIFIED
- Authenticated Coach explanation context receives `userPerformance`. ✅ VERIFIED
- Deterministic `decide()` inputs remain unchanged. ✅ VERIFIED
- PR #161 exact-head Gate #1509 / `35500189808`: FULL GREEN. ✅
- PR #161 merged as PRODUCT main `25f369307424e845a895c8c15c28a5fbddf73346`. ✅
- Post-merge Gate #1513 / `35500590433`: FULL GREEN including authenticated Coach and Real LLM Golden Path. ✅

Pending acceptance:
- Production Firebase Coach deploys the `25f36930...` server context. ⬜ Founder approval required
- Live authenticated production smoke passes after deploy. ⬜
- Security/auth boundaries remain fail-closed after deploy. ⬜
- Runtime evidence confirms no regression before UPM Coach context is marked production GREEN. ⬜

## Verification note — WebKit flake
Status: CLOSED / RETRY PASS
- First PR #161 Gate #1509 browser attempt timed out in Golden Path complete while the app remained on Today before Coach.
- PR #161 changed no browser/router code.
- One failed-job rerun passed the same journey plus authenticated Coach, Real LLM and all remaining browser/mobile stress checks.
- Post-merge Gate #1513 also passed the same full suite.
- Treat as observed transient test flake unless recurrence provides contrary evidence.

## Closed P4 slice — UPM durable recommendation evidence
Status: DONE / VERIFIED
Evidence: PRODUCT PR #155.

## Closed P4 slice — UPM confidence-gated browser context
Status: DONE / VERIFIED
Evidence: PRODUCT PR #156.

## Closed P4 slice — UPM authenticated Coach source integration
Status: DONE / VERIFIED SOURCE+CI
Evidence: PRODUCT PR #161; exact-head Gate #1509 FULL GREEN; post-merge Gate #1513 FULL GREEN; merge `25f36930...`.
Note: source integration is not equivalent to production runtime activation.

## Closed P1 — Competition submissions
Status: DONE / RECORDED COMPLETE BY FOUNDER REPORT
- Wanted: submitted. ✅ RECORDED
- 롯데: submitted. ✅ RECORDED
- 브로제이: submitted. ✅ RECORDED

## Competition runtime protection
Status: ACTIVE POLICY
- Do not change submitted competition-specific surfaces except critical outage/bug fixes or organizer-required changes.

## P2 — Protect CONTROL + PRODUCT main
Status: PLANNED / NON-BLOCKING

## P2 — Production deployment credential hardening
Status: PLANNED / NON-BLOCKING

## P6 — Repository / cloud cost hygiene
Status: PLANNED
