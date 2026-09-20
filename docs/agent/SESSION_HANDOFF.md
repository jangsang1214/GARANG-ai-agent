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

## Current handoff — 2026-09-20
- CONTROL repository: `jangsang1214/GARANG-ai-agent`.
- PRODUCT repository: `jangsang1214/-fitmind-ai`.
- Canonical PRODUCT main: `25f369307424e845a895c8c15c28a5fbddf73346`.
- Previous CONTROL references to commercial main `b863a763...` are historical, not current.
- PRODUCT PR #159 is included on main and improves collect-data Coach wording without changing deterministic decisions.
- PRODUCT PR #161 `Feed confidence-gated User Performance context to Coach` merged as `25f36930...`.
- PR #161 exact-head Release Gate #1509 / `35500189808`: FULL GREEN after one transient WebKit rerun.
- Post-merge Release Gate #1513 / `35500590433`: FULL GREEN.
- Production Coach Activation #10 / `35500590430`: SKIPPED. New UPM Coach context is therefore not yet production-runtime VERIFIED.

## User Performance Model v1 current state
- UPM v1 is already a repository capability, not a future blank-slate task.
- PR #155 persists durable recommendation-resolution evidence through the existing Action/Data boundary.
- PR #156 exposes confidence-gated UPM context in the read-only browser Intelligence Bridge.
- PR #161 adds server parity and passes confidence-gated `userPerformance` into authenticated Coach explanation context.
- Browser/server model parity is regression-tested.
- Low-confidence dimensions are withheld.
- Guardrails: read-only, `affectsDecision=false`, no decision mutation, no automatic progression.
- Deterministic Decision Intelligence inputs remain `userState + memory + outcome`; UPM does not own or alter the decision.

## Current P4 gate
Production activation is the next incomplete step and is HIGH-IMPACT because it changes the live Firebase Coach function.
- Do not deploy production merely because source/CI are GREEN.
- Require explicit Founder approval.
- If approved, deploy through the established production activation path, preserve auth/security boundaries, and run authenticated live smoke.
- Do not mark UPM production GREEN until live evidence exists.

## Competition submissions
Evidence class: RECORDED from Founder report.
- Wanted: submitted.
- 롯데: submitted.
- 브로제이: submitted.
- Competition-specific runtimes stay frozen except critical fixes or organizer-required changes.

## Next
1. Founder decision on production UPM Coach activation.
2. If approved: deploy + authenticated production smoke + CONTROL reconciliation.
3. Then measure whether accumulated UPM evidence improves explanation/personalization quality before considering any decision influence.

## Handoff rule
Never convert repository/source success into production-runtime success without deployment/runtime evidence. Never turn Founder-reported external submission actions into VERIFIED without observing the external artifacts.
