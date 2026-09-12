# GARANG Decision Log

## D-001 — GitHub is the technical source of truth

Date: 2026-09-12

Decision: Code, branches, commits, pull requests, tests, and CI outrank chat memory for implementation status.

Reason: Prevent stale conversational context from being mistaken for repository reality.

Impact: Every new work session should inspect GitHub before making implementation claims.

## D-002 — Project state is externalized from chat

Date: 2026-09-12

Decision: Persistent state lives in `docs/agent/` rather than depending on one long conversation.

Reason: Chat sessions have finite context and should be replaceable.

Impact: Material decisions, tasks, debt, and release readiness must be updated at handoff points.

## D-003 — High-risk actions stay gated

Date: 2026-09-12

Decision: High-risk operations are blocked by default and require explicit Founder approval.

Reason: Autonomy must not remove control over destructive or costly actions.

## D-004 — API-key-free first operating mode

Date: 2026-09-12

Decision: The first production workflow uses ChatGPT Project + GitHub connection without requiring a separate OpenAI API key.

Reason: Validate the operating system and workflow before building a continuously running external agent server.

Impact: GitHub documents provide persistent state; ChatGPT provides reasoning and connected actions during active sessions.
