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
- Commercialization Stage 1, Core Intelligence Stage 2, Real LLM/Outcome Learning hardening and Server Readiness Stage 0 are complete and GREEN at repository/CI level.
- PRODUCT current verified main: `b2ddbf4e09c0c4861057135a61ab2f3e98ceb1df` from PR #101 `Server Readiness Stage 0: harden data and privileged API boundaries`.
- PR #101 final pre-merge head `2c81080a5047aa93b84e7a7c03394ee47fe8c391` passed full Release Gate #1210. PR #101 was squash merged without bypassing the gate.
- PRODUCT post-merge Release Gate #1212 on exact main `b2ddbf4e...` is GREEN across core/build/security/Firebase/Firestore, complete WebKit Golden Path, authenticated Coach, Real LLM integration, recovery, Settings/mobile regressions, button health, runtime stability stress and final verify.
- PRODUCT Founder OS Event Envelope #460 (push) and #461 (workflow_run) on exact main SHA completed successfully.
- The prior CI blockers were resolved as compatibility/test-contract issues: legacy Real LLM transport compatibility was preserved; WebKit raw-coordinate touch flakiness was stabilized; Settings and mobile stability tests were aligned with canonical Privacy runtime v1.5.
- Server Readiness Stage 0 adds repository/service boundaries, canonical server-state adaptation, server-ready account export/delete ownership, centralized origin/security middleware, and consent-gated analytics/error telemetry. Firebase Auth + Firestore remain the user-data foundation and existing app write owners remain unchanged.
- Browser account/telemetry endpoints remain intentionally inactive/null until the matching Functions revision is deployed and smoke-verified in a separate Firebase staging environment.
- Deterministic GARANG Decision Intelligence remains the judgment owner. LLM output is explanation-only, must echo the active decision identity/mode and supported reasons, and cannot exceed GARANG confidence.
- Outcome Learning v2 remains bounded/read-only and cannot generate automatic progression increases.
- Real-device target iPhone/in-app-browser validation remains outstanding.
- Live production Real LLM activation remains UNKNOWN until target-environment secret/config, deployed Functions revision, authenticated `source: llm`, two-user smoke and observability are verified.
- Commercial-production readiness remains separate and RED until staging/security activation, real-device verification, payment/entitlement, monitoring and legal/privacy/retention gates are completed.
- PRODUCT main branch governance hardening remains a separate deliberate Founder decision.

## Next recommended work
1. Run the deployed Golden Path on the target real iPhone/Safari and target in-app browser; record concrete device evidence.
2. Prepare/approve a separate Firebase staging environment without sharing secrets in chat/source control; deploy the exact verified Server Readiness revision and run authenticated account export/delete + telemetry/security smoke.
3. Only after staging smoke is GREEN, activate staging account/telemetry endpoint URLs through a small reviewed change. Production activation remains a separate Founder decision.
4. After real beta outcome history exists, measure execution/retention impact before adding broader learning rules, RAG, embeddings or additional AI surfaces.

## Handoff rule
Never turn old handoff text into VERIFIED evidence without observing the source. DONE requires implementation + acceptance + verification + regression consideration + material state synchronization.
