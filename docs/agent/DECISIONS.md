# GARANG Decision Log

## D-001 — GitHub is the technical source of truth
Date: 2026-09-12
Decision: Code, branches, commits, pull requests, tests, and CI outrank chat memory for implementation status.
Reason: Prevent stale conversational context from being mistaken for repository reality.
Impact: Every work session inspects GitHub before implementation claims.

## D-002 — Project state is externalized from chat
Date: 2026-09-12
Decision: Persistent state lives in `docs/agent/` rather than one long conversation.
Reason: Sessions are finite and replaceable.
Impact: Material decisions, tasks, debt, handoff, and release readiness are recorded in GitHub.

## D-003 — High-risk actions stay gated
Date: 2026-09-12
Decision: High-risk operations are denied by default and require explicit Founder approval.
Reason: Autonomy must not remove Founder control over destructive or costly actions.

## D-004 — API-key-free first operating mode
Date: 2026-09-12
Decision: Use ChatGPT Project + GitHub connection before building a separate continuously running API agent.
Reason: Validate the operating system first.
Impact: ChatGPT supplies active-session reasoning; GitHub supplies persistent rules/state.

## D-005 — Evidence states are explicit
Date: 2026-09-12
Decision: Operational claims distinguish VERIFIED, RECORDED, INFERRED, and UNKNOWN evidence.
Reason: Prevent stale documentation or inference from being reported as current reality.
Impact: Unverified work cannot be represented as completed evidence.

## D-006 — Definition of Done requires evidence
Date: 2026-09-12
Decision: DONE requires implementation, acceptance criteria, verification evidence, regression consideration, and material state synchronization.
Reason: Code written is not equivalent to work complete.
Impact: Missing required evidence yields PARTIAL/YELLOW rather than DONE.

## D-007 — Execution risk is capability-owned
Date: 2026-09-12
Decision: Central typed capability policy owns execution risk; individual actions cannot self-declare a weaker risk level.
Reason: Security decisions should be structural and testable rather than dependent on free-form action labels.
Impact: High-risk capabilities are denied by default; Founder approval is represented by a narrow capability override.
