# GARANG Decision Log

## D-001 — GitHub is the technical source of truth
Date: 2026-09-12
Decision: Code, branches, commits, pull requests, tests and CI outrank chat memory for implementation status.

## D-002 — Project state is externalized from chat
Date: 2026-09-12
Decision: Persistent state lives in `docs/agent/` so sessions are replaceable.

## D-003 — High-risk actions stay gated
Date: 2026-09-12
Decision: High-risk operations are denied by default and require explicit Founder approval.

## D-004 — API-key-free first operating mode
Date: 2026-09-12
Decision: Use ChatGPT Project + GitHub before a continuously running external API agent.

## D-005 — Evidence states are explicit
Date: 2026-09-12
Decision: Operational claims distinguish VERIFIED, RECORDED, INFERRED and UNKNOWN.

## D-006 — Definition of Done requires evidence
Date: 2026-09-12
Decision: DONE requires implementation, acceptance, verification, regression consideration and material state synchronization.

## D-007 — Execution risk is capability-owned
Date: 2026-09-12
Decision: Central typed capability policy owns execution risk; actions cannot self-declare weaker risk.

## D-008 — Founder OS is multi-repository
Date: 2026-09-12
Decision: `GARANG-ai-agent` is the CONTROL repository and `-fitmind-ai` is the PRODUCT repository. Repository identity and truth domains are declared in `REPOSITORIES.json`.
Reason: Project-state/orchestration truth and actual product-code truth are different and must not be conflated.
Impact: PROJECT START and reconciliation inspect both repositories according to registry ownership.

## D-009 — Project causality is explicit
Date: 2026-09-12
Decision: Strategic work is represented as a Project Graph linking goals, metrics, initiatives, work, verification, release and outcomes.
Reason: A task list alone cannot explain why work exists or whether a shipped change achieved its intended result.
Impact: Material new work should connect to a goal or be challenged/deferred.

## D-010 — v7-lite is event-ready, not always-on autonomous
Date: 2026-09-12
Decision: GitHub events are normalized into versioned envelopes and routing directives, but no event grants authority or independently wakes ChatGPT.
Reason: Preserve an API-key-free, testable control plane while creating a stable boundary for a future webhook/provider runtime.
Impact: Future always-on automation should consume the existing event contract and capability policy rather than bypass them.
