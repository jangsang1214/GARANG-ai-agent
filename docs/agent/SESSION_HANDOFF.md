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
- Commercialization Stage 1, Core Intelligence Stage 2 and the latest AI/Data hardening are complete and GREEN on the verified PRODUCT code baseline.
- PRODUCT current verified main: `bcb27d5a283eb04643f0080f71a8a70ead14f95d` from PR #99 `Add semantic LLM alignment and longitudinal Outcome Learning v2`.
- PR #99 pre-merge Release Gate #1166 is GREEN; post-merge Release Gate #1170 is GREEN across core/build/security/Firebase/Firestore, complete WebKit Golden Path, authenticated Coach, Real LLM integration, recovery, mobile regressions/stability and final verify.
- PR #95 is the canonical Coach evidence/Real LLM release-gate stabilization; stale PR #93 was closed without merge as superseded.
- PR #97 is the canonical authenticated Real LLM production-boundary hardening; stale PR #94 was closed without merge as superseded.
- Deterministic GARANG Decision Intelligence remains the judgment owner. LLM output is explanation-only, must echo the active decision identity/mode and supported reasons, and cannot exceed GARANG confidence.
- Outcome Learning v2 adds bounded longitudinal execution/recovery evidence while preserving the recent Plan-vs-Actual contract. It may suppress progression or prefer reduced load after sufficient evidence, but it cannot generate automatic progression increases.
- Missing/null outcome data is not learned as a negative outcome.
- Stage 1 Record/Coach/Planner/Today mutation ownership, Agent confirmation boundaries and Golden Path remain preserved.
- Real-device target iPhone/in-app-browser validation remains outstanding and is the highest-priority product verification task.
- Live production Real LLM activation remains UNKNOWN until the target Firebase secret/config, deployed Functions revision, authenticated `source: llm`, two-user smoke and observability are verified. The PRODUCT repo now contains `npm run smoke:coach:prod` for this purpose.
- Commercial-production readiness remains separate and RED until broader backend/data durability, payment/entitlement, monitoring, legal/privacy/retention, staging/security and real-device gates are completed.
- PRODUCT main remains observed without required branch protection/status checks; governance hardening is a separate deliberate Founder decision.

## Next recommended work
1. Run the deployed Golden Path on the target real iPhone/Safari and in-app browser; record concrete device evidence.
2. In AI/Data, connect to the target Firebase execution environment and run the production Coach activation smoke without exposing secret material.
3. After real beta outcome history exists, measure execution/retention impact before adding broader learning rules, RAG, embeddings or additional AI surfaces.

## Handoff rule
Never turn old handoff text into VERIFIED evidence without observing the source. DONE requires implementation + acceptance + verification + regression consideration + material state synchronization.
