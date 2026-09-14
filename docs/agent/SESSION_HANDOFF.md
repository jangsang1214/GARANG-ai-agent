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
- Commercialization Stage 1, Core Intelligence Stage 2, Real LLM/Outcome Learning hardening, Server Readiness Stage 0, and the repository-level Firebase staging gate are complete and GREEN at code/CI level.
- PRODUCT current verified main: `451f5639bbee65c8f5659e150c0949d0b9bf24d5` from PR #102 `Add fail-closed Firebase staging gate`.
- PR #102 final head `948806883ed47f7371ca20037752bad3aca880eb` passed pre-merge Release Gate #1217 and merged as `451f5639...`.
- PRODUCT post-merge Release Gate #1218 on exact main `451f5639...` is GREEN.
- PRODUCT Founder OS Event Envelope run #473 on the PR #102 main push and workflow-run envelope evidence completed successfully.
- PR #102 adds explicit staging project-ID validation, rejects production project `fitfind-ai` as a staging target, binds staging Coach smoke to the exact project/region endpoint, preserves production `.firebaserc` ownership, and keeps secrets out of source control.
- PR #102 did not create a Firebase project, insert a secret, deploy Functions, or activate privileged browser endpoints. Those remain separate external/high-impact steps.
- Server Readiness Stage 0 remains the underlying server boundary: repository/service separation, canonical server-state adaptation, server-ready account export/delete ownership, centralized origin/security middleware, and consent-gated analytics/error telemetry.
- Firebase Auth + Firestore remain the user-data foundation and existing app write owners remain unchanged.
- Deterministic GARANG Decision Intelligence remains the judgment owner. LLM output is explanation-only, must echo the active decision identity/mode and supported reasons, and cannot exceed GARANG confidence.
- Outcome Learning v2 remains bounded/read-only and cannot generate automatic progression increases.
- Real-device target iPhone/in-app-browser validation remains outstanding.
- Actual Firebase staging project setup/deploy/smoke remains outstanding despite the repository staging gate being GREEN.
- Live production Real LLM activation remains UNKNOWN until target-environment secret/config, deployed Functions revision, authenticated `source: llm`, two-user smoke and observability are verified.
- Commercial-production readiness remains separate and RED until staging/security activation, real-device verification, payment/entitlement, monitoring and legal/privacy/retention gates are completed.
- PRODUCT main branch governance hardening remains a separate deliberate Founder decision.
- Older PRODUCT PRs #1, #70, #72 and #100 remain open; they are not current main truth. PR #100 still requires Founder visual approval before merge.

## Next recommended work
1. Run the deployed Golden Path on the target real iPhone/Safari and target in-app browser; record concrete device evidence.
2. Identify/approve a separate Firebase staging project without sharing secrets in chat/source control; use the fail-closed staging preflight, deploy the exact verified PRODUCT revision and run authenticated Coach/account/telemetry/security smoke.
3. Only after staging smoke is GREEN, activate staging account/telemetry endpoint URLs through a small reviewed change. Production activation remains a separate Founder decision.
4. After real beta outcome history exists, measure execution/retention impact before adding broader learning rules, RAG, embeddings or additional AI surfaces.

## Handoff rule
Never turn old handoff text into VERIFIED evidence without observing the source. DONE requires implementation + acceptance + verification + regression consideration + material state synchronization.
