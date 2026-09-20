# GARANG Technical Debt

Last updated: 2026-09-20

## TD-001 — No external always-on provider/runtime
Severity: MEDIUM
Area: orchestration boundary
Problem: v7-lite emits/routes deterministic events but no external worker continuously consumes them and synthesizes approved actions.
Mitigation: ChatGPT + GitHub handles active-session reasoning; event contracts are stable for a future worker.
Recommended fix: add a webhook/queue/provider adapter only when background autonomy is explicitly needed.

## TD-002 — Runtime AgentMemory is process-local
Severity: MEDIUM
Area: CONTROL runtime memory
Problem: process exit loses runtime in-memory state.
Mitigation: GitHub state + Project Graph remain durable control-plane state.
Recommended fix: add structured runtime persistence only when a real process-surviving workflow requires it.

## TD-003 — Natural-language routing remains heuristic fallback
Severity: LOW
Area: planner/orchestrator
Problem: ambiguous text can be conservatively misrouted.
Mitigation: typed capabilities and explicit intent/repository may override heuristic inference.

## TD-004 — Event artifacts are not automatically consumed
Severity: EXPECTED / MEDIUM
Area: event runtime
Problem: workflows emit FounderEventEnvelope artifacts but no service wakes ChatGPT or executes follow-up work.
Mitigation: no false autonomy claim; deterministic event contract exists.

## TD-006 — Authenticated production Real LLM success
Status: RESOLVED
Previous severity: HIGH / P1
Resolution: Production Coach Live Smoke run `35101459492` created a disposable Firebase identity, verified authenticated production text Coach and photo Coach with `source=llm`, provider `openai`, model `gpt-5.6-luna`, verified GARANG alignment/grounding, then deleted the identity. No durable ID-token secret is required for this smoke path.

## TD-007 — Firebase server dependency family upgrade pending
Severity: MEDIUM / P2
Area: production Functions runtime
Problem: the current Firebase dependency family has upgrade pressure. The latest Functions audit reports 9 moderate findings in the `uuid` / Google client dependency chain; the available full fix requires a breaking `firebase-admin` upgrade.
Risk: opportunistic dependency upgrades could regress production Coach/server behavior; delaying indefinitely leaves moderate advisory exposure.
Mitigation: Functions dependencies are now locked and installed with `npm ci`; the release gate separately audits the Functions production tree and currently has no high/critical blocker.
Recommended fix: dedicated dependency-upgrade PR with emulator tests, full Release Gate and production text/photo Coach smoke before activation.

## TD-008 — Firebase build-image cleanup warning
Severity: LOW / COST HYGIENE
Area: production deployment / Artifact Registry
Problem: a successful production deploy reported an unhandled cleanup warning for build images and a possible small monthly storage cost.
Mitigation: deployment itself succeeded; no destructive cleanup was performed automatically.
Recommended fix: configure a reviewed retention/cleanup policy. Manual deletion remains a destructive/cost action and requires explicit Founder approval.

## TD-009 — Main branches are not server-enforced
Severity: MEDIUM / P2
Area: release integrity
Problem: CONTROL and PRODUCT main protection is still process-enforced rather than a verified GitHub branch/ruleset invariant.
Risk: accidental direct push or unchecked merge could bypass the normal branch → PR → CI discipline.
Mitigation: Founder OS continues to use branch/PR and exact-head CI verification; force-main is avoided.
Recommended fix: require PR + relevant checks and block force-push/deletion with the smallest practical ruleset for a solo-Founder workflow.

## TD-010 — Functions dependency lock/audit gap
Status: RESOLVED
Previous severity: MEDIUM / P2
Resolution: PRODUCT now contains a Functions lockfile; Release Gate installs Functions with `npm ci --prefix functions` and runs a separate production dependency audit. Current audit result is 9 moderate findings and no high/critical blocker; remaining upgrade work is tracked by TD-007.

## TD-011 — Dev/deploy tooling advisory backlog
Severity: MEDIUM / P2
Area: development/deployment tooling
Problem: PRODUCT release workflows have migrated to `actions/checkout@v7` and `actions/setup-node@v7`, but CONTROL CI #90 still uses `actions/checkout@v4` and `actions/setup-node@v4`. Separately, the PRODUCT root informational dev/tooling audit still reports 23 findings: 1 critical, 3 high and 19 moderate.
Risk: these are not current production-runtime blockers, but old workflow/tooling/transitive packages create future maintenance/security pressure.
Mitigation: PRODUCT root production audit is clean; tooling audit is reported separately; CONTROL CI #90 is VERIFIED GREEN despite the older Action majors.
Recommended fix: modernize CONTROL Actions in a dedicated no-product-behavior PR, and isolate dependency/toolchain upgrades with full verification.

## TD-012 — Long-lived Firebase deployment key in GitHub Actions
Severity: MEDIUM / P2
Area: CI authentication / IAM
Problem: production deployment still relies on a masked service-account JSON credential rather than short-lived workload identity.
Risk: long-lived credentials have a larger lifecycle blast radius.
Mitigation: credential material is not printed/committed and current production deployment is verified.
Recommended fix: migrate to GitHub OIDC / Google Workload Identity Federation, then rotate/retire the JSON key only after replacement is VERIFIED.

## TD-013 — Superseded open PRs create repository noise
Severity: LOW / P6
Area: repository hygiene
Problem: old experiment/recovery-era PRs can remain open after newer baselines supersede them.
Risk: stale branches can be mistaken for active work or accidentally revived.
Mitigation: current main + CONTROL state are authoritative.
Recommended fix: close superseded PRs with a short pointer to the newer verified baseline.

## TD-014 — Rejected recommendation learning is incomplete
Status: RESOLVED
Previous severity: LOW / P4
Area: personalization / AI·Data
Resolution: PRODUCT now durably persists recommendation resolution evidence for accepted, rejected, dismissed and ignored recommendations through the canonical action-data boundary. User Performance Model v1 consumes this evidence, and PR #166 additionally measures resolution coverage in Longitudinal Learning Metrics v1. No separate truth store was introduced.

## TD-015 — WebKit lifecycle timing is nondeterministic
Severity: MEDIUM / P2
Area: frontend runtime / release integrity
Problem: current PRODUCT main `c4da00002dbce7489593a2097dc82dc4da5b8ba4` required three Release Gate attempts. Attempt 1 timed out waiting for Golden Path Coach actions; attempt 2 timed out waiting for Today bottom Check-in readiness; attempt 3 passed the complete suite on the identical SHA.
Risk: nondeterministic lifecycle/observer/readiness behavior can hide a real mobile regression and makes release confidence depend on reruns.
Mitigation: the frozen runtime contract defines single owners and the full WebKit suite ultimately passes unchanged.
Recommended fix: trace active boot/lifecycle events and overlapping observers, remove duplicate reconciliation/retry ownership, and prefer explicit readiness/lifecycle contracts over arbitrary timeout increases.

## TD-016 — Commercial documentation and monetization artifacts are stale
Severity: LOW / P6
Area: product documentation / business readiness
Problem: PRODUCT README still describes User Performance Model v1 as roadmap work even though it is released, and `08_business/pricing-and-unit-economics.json` remains a FitMind V6 draft. The app explicitly says real payment integration is not yet connected.
Risk: stale docs create false implementation assumptions and pricing artifacts can be mistaken for validated monetization.
Mitigation: implementation and CONTROL state remain authoritative.
Recommended fix: refresh commercial docs after current validation priorities settle; keep payment/subscription build gated behind external retained-value evidence.
