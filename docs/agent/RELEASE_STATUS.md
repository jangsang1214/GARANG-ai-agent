# GARANG Release Status

Last updated: 2026-09-14

## Overall decision
GREEN for the current verified PRODUCT code baseline `bcb27d5a283eb04643f0080f71a8a70ead14f95d`, including Commercialization Stage 1, Core Intelligence Stage 2, the hardened Real LLM boundary, semantic Decision↔LLM alignment and Outcome Learning v2. Commercial-production readiness remains a separate RED gate; live production Real LLM activation is still UNKNOWN until target-environment verification is performed.

## CONTROL — Founder OS v7-lite
Decision: GREEN / MERGED.
- Founder OS v7-lite remains the persistent multi-repository control plane for state, tasks, decisions, debt, Project Graph and release evidence.

## PRODUCT — Commercialization Stage 1
Decision: GREEN / MERGED.
- PR #80 commercialization preservation/gap audit merged.
- PR #83 privacy-safe analytics contract merged.
- PR #84 workout Record friction reduction merged.
- PR #87 Coach decision-first UX merged.
- Stage 1 post-merge Release Gate #1093: GREEN.
- Existing Record/Coach/Planner/Today ownership remains preserved.

## PRODUCT — Stage 2 Core Intelligence
Decision: GREEN / MERGED.
Evidence:
- PR #88 Plan-vs-Actual / bounded Daily Plan adaptation merged as `c68ec3e915ae437dac35fbc1a9a39fc4ca6f6dbf`; Release Gate #1094 GREEN.
- PR #90 Weekly Review merged as `5f3d30e877e31d219623ebd521226e49265b46bf`; pre-merge Gate #1097 and post-merge Gate #1098 GREEN.
- Plan-vs-Actual, bounded adaptation and Weekly Review remain read-only until explicit Coach/user confirmation where behavior-changing action is involved.

## PRODUCT — Real LLM boundary + AI/Data hardening
Decision: GREEN / MERGED for repository code and CI.
Evidence:
- PR #95 stabilized Coach evidence and Real LLM browser release behavior; stale PR #93 was closed as superseded.
- PR #97 hardened the authenticated production boundary with quotas, canonical recovery normalization, explanation-only provider schema and privacy-safe observability; stale PR #94 was closed as superseded.
- PR #99 added machine-enforced Decision↔LLM alignment and conservative longitudinal Outcome Learning v2 and merged as `bcb27d5a283eb04643f0080f71a8a70ead14f95d`.
- PR #99 pre-merge Release Gate #1166: GREEN.
- PRODUCT post-merge Release Gate #1170 on `bcb27d5a...`: GREEN.
- Post-merge `core-build-rules`: GREEN, including dependency/security, Intelligence Core, Action & Data Reliability, Commercial Core regressions, runtime/build, Firebase public health and Firestore rules emulator.
- Post-merge complete `browser-webkit`: GREEN, including Today, Daily Plan, Planner, Nutrition, truth/first-record, Golden Path integration + complete journey, authenticated app/Coach, Real LLM Golden Path, conversational logging, recovery mutation/touch, mobile regression, Settings touch, button health and runtime stability stress.
- Post-merge final `verify`: GREEN.

## AI/Data preservation result
Decision: GREEN.
- GARANG deterministic Decision Intelligence remains the decision owner.
- LLM remains explanation-only; provider outputs that reverse the active decision or cite unsupported reason codes are rejected.
- LLM confidence remains capped by deterministic GARANG confidence.
- Outcome Learning v2 is read-only and may only make progression more conservative when longitudinal evidence is sufficient.
- No automatic progression increase, silent mutation, Planner ownership change, Agent confirmation bypass, Memory Engine rewrite or destructive data migration was introduced.
- Golden Path and mobile regressions remain GREEN after merge.

## Live production Real LLM activation
Decision: YELLOW / UNKNOWN ENVIRONMENT EVIDENCE.
- Repository code, CI and privacy-safe production smoke tooling are VERIFIED.
- Secret presence/value, exact deployed Functions revision, authenticated live `source: llm`, two-user production personalization smoke and target-environment observability are not verified from the current connected execution environment.
- `npm run smoke:coach:prod` is the canonical live verification path once target endpoint and authorized test credentials are available.

## Commercial production
Decision: RED / NOT YET READY.
A GREEN code baseline does not imply commercial-production readiness. Durable production backend/data, payment entitlement, broader monitoring, provider configuration, legal/privacy/retention review, staging/security and real-device validation remain separate gates.
