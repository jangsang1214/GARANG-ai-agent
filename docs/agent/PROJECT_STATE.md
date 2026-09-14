# GARANG Project State

Last updated: 2026-09-14

## Current objective
The verified PRODUCT baseline now includes Commercialization Stage 1, Core Intelligence Stage 2, the hardened Real LLM boundary, machine-enforced Decision↔LLM semantic alignment, and conservative longitudinal Outcome Learning v2. The next highest-value work is real-device Golden Path validation; within AI/Data, the next unresolved gate is live production Real LLM activation evidence in the target Firebase environment.

## Repository observations
- CONTROL: `jangsang1214/GARANG-ai-agent`; Founder OS v7-lite remains the control plane. Observed main before this reconciliation: `fcf8fdf173f51d4842462f79cef07289fcff31ab`.
- PRODUCT: `jangsang1214/-fitmind-ai`; current verified main is `bcb27d5a283eb04643f0080f71a8a70ead14f95d` from PR #99.
- Stage 1 remains GREEN through PRs #80, #83, #84 and #87; post-merge Release Gate #1093 was GREEN.
- Stage 2 Plan-vs-Actual / Adaptive Loop PR #88 merged as `c68ec3e915ae437dac35fbc1a9a39fc4ca6f6dbf`; Weekly Review PR #90 merged as `5f3d30e877e31d219623ebd521226e49265b46bf` with post-merge Gate #1098 GREEN.
- Real LLM Golden Path and evidence race were stabilized on merged PR #95; stale PR #93 was closed as superseded.
- Real LLM production boundary hardening landed through PR #97; stale PR #94 was closed as superseded.
- AI/Data hardening PR #99 merged as `bcb27d5a283eb04643f0080f71a8a70ead14f95d` after complete pre-merge Release Gate #1166 GREEN.
- PRODUCT post-merge Release Gate #1170 on `bcb27d5a...` is GREEN: core/build/security, Firebase public health, Firestore emulator, complete WebKit Golden Path, authenticated Coach, Real LLM integration, recovery, mobile regression/stability and final verify all passed.

## Stable
- Canonical loop remains Goal/Plan -> Action/Record -> Interpretation -> Feedback -> Next Action, with Coach approval before behavior-changing mutations.
- GARANG deterministic Decision Intelligence remains the judgment owner; the LLM remains an explanation layer and has no direct mutation contract.
- Provider output must echo the active `decisionId`, `decisionMode`, and supported `reasonCodesUsed`; mismatches or unsupported reasons are rejected before LLM success is returned.
- LLM confidence cannot exceed deterministic GARANG confidence.
- Outcome Learning v2 extends recent Plan-vs-Actual evidence with a 28-day read-only longitudinal view. Longitudinal evidence may suppress progression or prefer reduced load after sufficient evidence, but it cannot create automatic progression increases.
- Missing/null outcome rates are not converted into negative learning evidence.
- Existing Daily Plan, Planner, Agent confirmation, Record, Today and Golden Path ownership remain preserved.

## In progress
- No AI/Data implementation or merge blocker remains for PR #99 scope.
- A separate Design/Brand Today vNext PR may exist independently and is not part of this AI/Data completion state.

## Blockers / unknowns
- Real-device Golden Path validation on the target iPhone/in-app browser remains outstanding.
- Live production Real LLM activation remains UNKNOWN: repository readiness is VERIFIED, but target-environment secret presence, deployed Functions revision, authenticated live `source: llm`, two-user personalization smoke, and production observability have not been verified from the current connected execution environment.
- Commercial-production readiness remains RED until durable production backend/data, payment entitlement, monitoring, provider configuration, legal/privacy/retention, staging/security and real-device gates are completed.
- PRODUCT `main` is still observed without required branch protection/status checks; governance hardening remains a separate deliberate Founder decision.

## Next priorities
1. P1 — Validate the deployed Golden Path on the target real iPhone/in-app browser.
2. P2 — Verify live production Real LLM activation using the added privacy-safe authenticated Coach smoke path once target Firebase execution/credentials are available.
3. P5 — Collect real beta outcome history and measure whether Decision/Outcome adaptations improve execution before expanding Outcome Learning beyond the current conservative v2 rules.
