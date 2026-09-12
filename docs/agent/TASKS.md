# GARANG Tasks

## P0 — Restore intended Founder OS repository structure
Status: DONE
Owner: Engineering / QA
Evidence: `src/` and `tests/` restored; CI verifies layout.

## P1 — Founder OS v5.1 baseline
Status: DONE
Owner: Project Director / Engineering / QA
Evidence:
- Evidence discipline, escalation, scope control, DoD, failure recovery, deterministic recovery, and typed capability authorization are merged.
- Founder OS main `7292f542c25b3cd7fd1fb66f26dbeab437f54311` passed push CI run #17.

## P1 — Verify current product baseline
Status: DONE
Owner: Release / QA / Engineering
Acceptance criteria:
- Current product main has a successful post-merge Release Gate.
- Golden Path complete journey passes on current main.
- Pages deployment for the same main SHA succeeds.
Evidence:
- Product main `c0fd29e06c4c29f3f504d940a8d2497e84d7c821`.
- GARANG Release Gate #999: GREEN.
- Golden Path integration and complete journey: PASS in browser-webkit job.
- Pages build/deployment #746: success.

## P1 — Validate deployed Golden Path on real target device
Status: TODO
Owner: Release / QA + Product + Design / Brand
Priority reason: current automated evidence is strong, but PR #68 addressed a live iOS/in-app-browser motion failure class. The post-merge baseline needs a fresh real-device confirmation before more UI work.
Acceptance criteria:
- Current deployed main loads on target iPhone Safari without critical runtime/console failure.
- Today motion remains visible and stable through lifecycle/state updates.
- Check-in, Record, Coach, plan execution, record persistence, and Accumulation remain usable.
- No horizontal clipping or blocked primary CTA in the target in-app browser class.
- Any failure is captured as a narrow reproducible issue before new feature work.

## P1 — Decide next release channel
Status: FOUNDER DECISION REQUIRED
Owner: Founder / Command Center + Growth / Business + Release / QA
Decision:
- A. Continue development beta/demo and prioritize user-loop learning.
- B. Enter commercial-production hardening.
Reason:
- Product code is beta/demo GREEN, but production service endpoints remain disconnected and the reference backend uses process-local memory.
- Production hardening would introduce hosting, database, monitoring, payment, legal/privacy, and operational scope that should not be started accidentally.
Acceptance criteria:
- Release channel is explicit.
- Workstream priorities are re-ranked against that channel.

## P2 — Commercial production hardening
Status: BLOCKED ON RELEASE-CHANNEL DECISION
Owner: Engineering + AI / Data + Growth / Business + Release / QA
Acceptance criteria if activated:
- Production backend is hosted behind HTTPS with server-side Firebase token verification.
- Durable managed persistence and backup/restore policy replace `MemoryStore` for production data.
- Required external service endpoints are configured without browser secrets.
- Legal/privacy/retention/health-disclaimer review is complete.
- Consented analytics/error monitoring and payment webhooks are verified.
- Staging load, restore, security, account isolation, and end-to-end tests pass.

## P2 — Retire stale historical product PRs
Status: IN PROGRESS
Owner: Command Center / Engineering / QA
Evidence:
- PR #61 closed as superseded on 2026-09-12; it was 142 commits behind main and Release Gate #857 was RED.
Remaining:
- Product PR #1 is still an old draft and 1139 commits behind current main.
Acceptance criteria:
- Audit whether PR #1 contains any unique unresolved safety fix.
- If not, close it with a durable supersession note.
- Do not merge the old branch into current main.

## P4 — Validate the Intelligence loop before adding provider complexity
Status: TODO / NOT BLOCKING BETA
Owner: AI / Data + Product
Acceptance criteria:
- Measure whether current Goal → Plan → Action → Record → Interpretation → Feedback → Next Action loop produces useful next actions from real user data.
- Identify the smallest missing intelligence signal/interpretation/recommendation capability.
- Add a remote model/provider only if it materially improves that loop; do not treat “LLM connected” as the goal by itself.

## P6 — Founder OS runtime persistence
Status: TODO / NOT SCHEDULED
Owner: Engineering
Acceptance criteria:
- A concrete workflow demonstrates that process-surviving Founder OS runtime state is needed.
- GitHub state docs remain human-readable summaries/source of truth.
Note: Do not build this only because it exists as technical debt.
