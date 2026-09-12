# GARANG Tasks

## P1 — Founder OS v7-lite event-ready control plane
Status: IN PROGRESS
Owner: Command Center / Engineering / Release QA
Acceptance criteria:
- CONTROL and PRODUCT repository roles are machine-readable and validated.
- Project Graph can validate nodes/edges and trace work back to goals.
- Orchestrator produces deterministic workstream routes.
- GitHub events normalize into versioned event envelopes and deterministic directives.
- Recorded-vs-observed repository drift is explicit.
- Release checks deterministically classify GREEN/YELLOW/RED and UNKNOWN never equals PASS.
- Core passes `npm run verify` on the latest PR head.
- State/graph/release docs match verified evidence.
Evidence: pending current branch CI.

## P1 — Install PRODUCT event-envelope adapter
Status: TODO
Owner: Engineering / Release QA
Dependency: control-plane event contract verified first.
Acceptance criteria:
- Product repo emits the same `FounderEventEnvelope` shape for PR, main update, Release Gate completion and release events.
- Adapter is read-only, changes no app runtime behavior and passes product CI/release gate.

## P1 — Founder OS v5.1 baseline
Status: DONE
Owner: Project Director / Engineering / QA
Evidence: evidence/recovery/scope/DoD/failure-recovery/capability policies are merged and were verified before v7-lite work.

## P1 — Verify current product baseline
Status: DONE
Owner: Release / QA / Engineering
Evidence:
- Product main `c0fd29e06c4c29f3f504d940a8d2497e84d7c821`.
- GARANG Release Gate #999: GREEN.
- Pages deployment #746: success.

## P1 — Validate deployed Golden Path on real target device
Status: TODO
Owner: Release / QA + Product + Design / Brand
Acceptance criteria:
- Current deployed main loads on target iPhone Safari without critical runtime failure.
- Today motion remains visible/stable through lifecycle updates.
- Check-in, Record, Coach, plan execution, persistence and Accumulation remain usable.
- No horizontal clipping or blocked primary CTA in target in-app browser class.
- Failure becomes one narrow reproducible issue before new feature work.

## P1 — Decide next release channel
Status: FOUNDER DECISION REQUIRED
Owner: Founder / Command Center + Growth / Business + Release / QA
Decision: A. Continue beta/demo learning. B. Enter commercial-production hardening.
Acceptance criteria: release channel is explicit and workstream priorities are re-ranked.

## P2 — Commercial production hardening
Status: BLOCKED ON RELEASE-CHANNEL DECISION
Owner: Engineering + AI / Data + Growth / Business + Release / QA
Acceptance criteria if activated: hosted HTTPS backend, server-side auth verification, durable persistence/backups, required external endpoints, legal/privacy/retention review, consented telemetry/payments, staging load/restore/security/account-isolation/E2E gates.

## P2 — Retire stale historical product PRs
Status: IN PROGRESS
Owner: Command Center / Engineering / QA
Evidence: PR #61 closed as superseded.
Remaining: product PR #1 is historical and must be audited for a unique unresolved fix before closing; never merge it as-is.

## P4 — Validate the Intelligence loop before provider complexity
Status: TODO / NOT BLOCKING BETA
Owner: AI / Data + Product
Acceptance criteria: measure Goal→Plan→Action→Record→Interpretation→Feedback→Next Action from real data and add remote provider complexity only for a measured missing capability.

## P6 — Always-on external Founder OS runtime
Status: DEFERRED
Owner: Engineering / AI Data
Activation condition: v7-lite event contracts are proven useful and the Founder explicitly wants background autonomous execution.
