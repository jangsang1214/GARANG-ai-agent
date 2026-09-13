# GARANG Session Handoff & Recovery Protocol v7-lite

## PROJECT START order
1 `AGENTS.md`
2 `docs/agent/REPOSITORIES.json`
3 `PROJECT_STATE.md`
4 `PROJECT_GRAPH.json`
5 `SESSION_HANDOFF.md`
6 `TASKS.md`
7 `DECISIONS.md`
8 `TECHNICAL_DEBT.md`
9 `RELEASE_STATUS.md`
10 inspect CONTROL + PRODUCT branches/commits/open PRs/CI
11 reconcile evidence with state/graph
12 select top 1–3 priorities and route authorized work.

## Current handoff
- Commercialization Stage 1 is complete and GREEN on PRODUCT main.
- PRODUCT current verified main: `ecb7517897080b01ee81b717882826a061ae1df0` from PR #87 `Stage 1: make Coach decision-first without changing approval ownership`.
- Stage 1 chain: PR #80 audit -> PR #83 analytics contract -> PR #84 workout Record prefill -> PR #87 Coach decision-first UX.
- PR #87 head `5d54d90f9f68167961130dad24812303d82f84de` passed complete GARANG Release Gate #1092 GREEN before merge.
- PRODUCT post-merge Release Gate #1093 is GREEN: core/build/security/Firebase/Firestore, complete WebKit regression, Today, Planner, Golden Path complete journey, authenticated Coach/recovery, Settings touch, mobile button health, runtime stability and final verify all passed.
- PRODUCT post-merge Founder OS Event Envelope #201 is GREEN.
- Stage 1 preserved existing Record/Coach/Planner/Today mutation ownership and introduced no production provider, secret, payment integration, destructive migration or architecture rewrite.
- Today remains single-next-action; Coach remains user-facing judgment/approval owner; Planner remains execution/evidence surface.
- Stage 2 is now active. First target is Plan-vs-Actual / Adaptive Loop v1: derive explainable execution outcome and bounded next-plan adjustment from existing canonical Daily Plan + actual workout/recovery/nutrition evidence.
- Stage 2 v1 must remain provider-free, must not silently write plans, and must keep Coach approval ownership.
- Real-device target iPhone/in-app-browser validation remains outstanding.
- Commercial-production readiness remains separate and RED until production backend/data durability, payment/entitlement, monitoring, provider configuration, legal/privacy/retention, staging/security and real-device gates are completed.

## Handoff rule
Never turn old handoff text into VERIFIED evidence without observing the source. DONE requires implementation + acceptance + verification + regression consideration + material state synchronization.
