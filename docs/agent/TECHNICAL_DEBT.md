# GARANG Technical Debt

Last updated: 2026-09-22

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
Status: ACTIVE / EXTERNAL IAM BLOCKER
Severity: MEDIUM / P2
Area: CI authentication / IAM
Problem: production deployment still relies on a masked service-account JSON credential rather than short-lived workload identity.
Risk: long-lived credentials have a larger lifecycle blast radius.
Mitigation: credential material is not printed/committed; current production deployment is verified; PRODUCT main now contains fail-closed WIF support plus a non-deploying readiness audit.
Latest evidence:
- PR #255 merged as PRODUCT main `8e6733cf...`; WIF Readiness #2 reports `NOT_CONFIGURED`.
- Both repository identifiers `GCP_WORKLOAD_IDENTITY_PROVIDER` and `GCP_DEPLOY_SERVICE_ACCOUNT` are currently absent.
- Founder-approved bootstrap run `35970823847` authenticated the existing deploy identity `firebase-adminsdk-fbsvc@fitfind-ai.iam.gserviceaccount.com` but failed safely because it lacks `iam.workloadIdentityPools.create`.
- No WIF pool/provider or new service-account key was created.
- 2026-09-25 Production Coach Activation #48 / `36113706298` succeeded on PRODUCT main `3bf04c961b0378ba3c611a4b554dd3baeb8b6e8d` using `adc-service-account-fitfind`; WIF auth was skipped because repository WIF variables remain absent. This verifies the fallback still works but does not resolve the long-lived credential risk.
Recommended fix: use a human-authenticated Google Cloud principal with Workload Identity Pool Admin capability to create the GitHub OIDC pool/provider and grant `roles/iam.workloadIdentityUser` to the existing verified deploy service account for PRODUCT main only. Configure the two non-secret repo identifiers, require a `via WIF` production activation to pass, then rotate/retire the JSON key only after replacement is VERIFIED.

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

## TD-015 — WebKit / lifecycle timing variance
Status: MONITOR / NON-BLOCKING
Previous severity: MEDIUM / P2
Area: frontend runtime / release integrity
Root cause lineage: Today has multiple bounded presentation/orchestration layers. PR #177 fixed same-key DOM replacement; PR #264 later repaired a concrete Today Product Consolidation mount-order race by delaying readiness until required nodes exist and observing only relevant nested Today-flow additions.
Verified repair baseline: PR #264 exact-head Gate #1977 FULL GREEN; merged main `047ccb839447b6c54a1b381d39cb887cac9c8bc9`; Pages #881 SUCCESS; Gate #1982 FULL GREEN.
Latest monitoring evidence: after Body v5 PR #262 merged as `7b5032418b49a43ea4504f7566542591ad783b60`, post-merge Gate #1983 showed two same-SHA WebKit timing timeouts at different owners: attempt 1 timed out waiting for Planner draft state settlement in Golden Path; attempt 2 passed that point and later timed out waiting for superset completion settlement. A third identical-SHA WebKit run passed both prior points and the entire downstream suite, including Golden Path complete journey, authenticated Coach/Real LLM, recovery, mobile regression, Settings touch, button health and runtime stability. Core and final verify also passed.
Interpretation: this specific #1983 evidence is consistent with scheduling/timing variance rather than one confirmed deterministic owner regression because the failure location moved and both prior points passed without any code, timeout, or threshold change.
Mitigation: no timeout inflation and no retry-based product claim. Keep exact same-location recurrence as the threshold for instrumentation/root-cause work; if a concrete owner repeats, fix that owner rather than normalizing it as flakiness.
Current risk: non-blocking monitoring debt; current main Gate #1983 final same-SHA result is FULL GREEN.

## TD-016 — Commercial documentation and monetization artifacts are stale
Severity: LOW / P6
Area: product documentation / business readiness
Problem: PRODUCT README still describes User Performance Model v1 as roadmap work even though it is released, and `08_business/pricing-and-unit-economics.json` remains a FitMind V6 draft. The app explicitly says real payment integration is not yet connected.
Risk: stale docs create false implementation assumptions and pricing artifacts can be mistaken for validated monetization.
Mitigation: implementation and CONTROL state remain authoritative.
Recommended fix: refresh commercial docs after current validation priorities settle; keep payment/subscription build gated behind external retained-value evidence.

## TD-017 — Coach server/browser write semantics diverged
Status: RESOLVED
Previous severity: HIGH / P1
Area: Coach action ownership / Golden Path
Resolution: PRODUCT PR #176 established one online action owner. Authenticated LLM responses persist sanitized server action metadata into Coach thread state and are marked server-owned; the browser Agent suppresses mock proposal regeneration for those messages. Explicit local/offline fallback retains confirmation-first browser proposals. Exact-head Release Gate #1559 / `35580756829` passed the complete core/WebKit/verify suite before merge to PRODUCT main `0a07c4c5bd19397f43bfe9eaedd20c524f7620da`. Duplicate P1 PRs #173–#175 were closed as superseded.

### TD-015 update — 2026-09-22
Status: MONITOR / NON-BLOCKING after PR #210.
The latest mobile stability recurrence was isolated to Workout Library async hydration: exercise cards were appended one by one after route entry. PR #210 batches those additions in one DocumentFragment commit without changing the existing stability threshold. Exact-head Gate #1649 and post-merge main Gate #1650 are FULL GREEN. Keep monitoring the older Today identity history and trace any new recurrence to its concrete runtime owner.


## TD-017 — Main branches are not server-protected
Status: ACTIVE / EXTERNAL GITHUB ADMIN BLOCKER
Severity: MEDIUM / P2
Area: repository release integrity
Problem: CONTROL and PRODUCT main have no active ruleset / server-enforced branch protection.
Evidence:
- GitHub branch metadata reports PRODUCT main unprotected.
- Ruleset reads return an empty list for both repositories.
- The installed GitHub integration cannot access or mutate branch-protection administration endpoints and returns `403 Resource not accessible by integration`.
Risk: CI exists but GitHub does not independently prevent an authorized direct push or merge that bypasses required checks.
Mitigation: operating policy continues to require branch → PR → Release Gate → merge; current releases remain verified.
Recommended fix: from an authenticated GitHub owner/admin session, add a main ruleset requiring PRs and the repository’s release/CI checks while preserving production activation semantics. Verify with a harmless docs-only PR before treating this debt as resolved.
