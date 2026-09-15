# GARANG Technical Debt

## TD-001 — No external always-on provider/runtime
Severity: MEDIUM
Area: orchestration boundary
Problem: v7-lite emits/routes deterministic events but no external worker continuously consumes them and synthesizes approved actions.
Mitigation: ChatGPT + GitHub handles active-session reasoning; event contracts are stable for a future worker.
Recommended fix: webhook/queue/provider adapter only when background autonomy is explicitly needed.

## TD-002 — Runtime AgentMemory is process-local
Severity: MEDIUM
Area: `src/context/memory.ts`
Problem: process exit loses runtime `Map` state.
Mitigation: GitHub state + Project Graph remain durable control-plane state.
Recommended fix: add structured runtime persistence only when a real process-surviving workflow requires it; do not confuse CONTROL AgentMemory with PRODUCT user-performance memory.

## TD-003 — Natural-language routing remains heuristic fallback
Severity: LOW
Area: planner/orchestrator
Problem: ambiguous text can be conservatively misrouted.
Mitigation: typed capabilities and explicit intent/repository may override heuristic inference.

## TD-004 — Event artifacts are not automatically consumed
Severity: EXPECTED / MEDIUM
Area: event runtime
Problem: workflows emit `FounderEventEnvelope` artifacts but no service wakes ChatGPT or executes follow-up work.
Mitigation: no false autonomy claim; deterministic contract exists.

## TD-005 — PRODUCT event adapter merge readiness
Status: RESOLVED
Severity: RESOLVED
Area: cross-repository integration
Previous problem: PR #69 had a PR-context WebKit failure and could not be merged while RED.
Resolution: the event adapter was subsequently merged and PRODUCT post-merge Release Gate #1004 plus Event Envelope #3 were GREEN. The previous “not merge-ready” statement is stale and must not be treated as a current blocker.

## TD-006 — Authenticated production Real LLM success still requires post-fix evidence
Severity: HIGH / P1 UNTIL RETEST
Area: production provider boundary
Problem: a real authenticated production user reached the provider path after the first successful deployment, but the server emitted `LLM_TIMEOUT` with `providerStatus: null` under the old 8-second provider deadline. GARANG correctly failed closed to the local deterministic Coach. PR #122 raised provider timeout to 20 seconds and Function timeout to 30 seconds, regression-locked those values, and redeployed successfully; a post-fix real authenticated request has not yet been observed.
Risk: infrastructure could be mistaken for live external-provider success, or the new timeout could still expose a different provider failure.
Mitigation: status remains YELLOW until a post-fix request returns live external output / `source: llm`. Never store or paste a long-lived Firebase ID token merely to manufacture a CI PASS.
Recommended fix: repeat one logged-in production Coach request after PR #122. On failure collect only privacy-safe `code` and `providerStatus`; on success verify `llm_success` / alignment and then run a second-user personalization check if available.

## TD-007 — Firebase Functions dependency upgrade pending
Severity: LOW / MEDIUM
Area: production Functions runtime
Problem: Firebase CLI reports the current `firebase-functions` dependency as outdated and explicitly warns that upgrading may include breaking changes.
Risk: delayed access to SDK fixes/features; opportunistic upgrade could regress production behavior.
Mitigation: current production deploy and Release Gate are GREEN on the existing dependency family.
Recommended fix: first establish a lockfile for Functions dependencies, then handle the SDK upgrade as a dedicated PR with emulator, full Release Gate and production-route regression verification.

## TD-008 — Firebase build-image cleanup warning
Severity: LOW / COST HYGIENE
Area: production deployment / Artifact Registry
Problem: successful production deploys report an unhandled cleanup error for build images and warn of a possible small monthly storage bill.
Risk: orphaned build images may accumulate minor cost.
Mitigation: deployment itself succeeds; no destructive cleanup was performed automatically.
Recommended fix: after deployment-tool modernization, configure a safe artifact retention/cleanup policy. Manual deletion is destructive/cost-related and requires explicit Founder approval before execution.

## TD-009 — Main branches are not server-enforced
Severity: MEDIUM / P2
Area: release integrity
Problem: PRODUCT and CONTROL both report `main` as unprotected and both repository ruleset lists are empty. Current branch → PR → CI discipline is a process convention, not a GitHub-enforced invariant.
Risk: an accidental direct push, force push or unchecked merge can bypass the release workflow.
Mitigation: Founder OS continues to use branch/PR and explicit CI verification; connector actions avoid force-main.
Recommended fix: configure GitHub branch protection/rulesets requiring PR + relevant CI/Release Gate and blocking force-push/deletion, keeping the rule set as small as practical for a solo-Founder workflow.

## TD-010 — Functions dependency resolution is not locked or separately audited
Severity: MEDIUM / P2
Area: production Functions supply chain
Problem: `functions/package.json` uses semver ranges, `functions/package-lock.json` is absent, and production activation uses `npm install --prefix functions`. The root Release Gate audits root production dependencies but not the separate Functions runtime dependency tree.
Risk: two deploys of the same repository revision can resolve different transitive server dependencies; runtime vulnerabilities could escape the root audit.
Mitigation: current deploy and full regression gates are GREEN, and Functions source is self-contained.
Recommended fix: generate/commit a real Functions lockfile, deploy with `npm ci --prefix functions --omit=dev`, and add `npm audit --prefix functions --omit=dev --audit-level=high` to CI.

## TD-011 — CI/deployment toolchain modernization pending
Severity: MEDIUM / P2
Area: GitHub Actions and dev/deploy dependencies
Problem: successful workflows emit Node 20 deprecation warnings for `actions/checkout@v4` and `actions/setup-node@v4` while the runner forces Node 24. Root production dependency audit is clean, but the informational dev/deploy tooling audit currently reports critical/high findings and multiple deprecated transitive packages.
Risk: future runner changes can convert warnings into failures; old deployment tooling carries avoidable maintenance/security exposure.
Mitigation: current CI and production deploy are GREEN; do not mix major tooling upgrades into Golden Path or AI behavior changes.
Recommended fix: dedicated small hardening PR(s) to update Actions, review root dev/deploy dependency advisories, and upgrade Firebase tooling with full regression verification.

## TD-012 — Long-lived Firebase deployment key in GitHub Actions
Severity: MEDIUM / P2
Area: CI authentication / IAM
Problem: production deployment currently authenticates through masked `FIREBASE_SERVICE_ACCOUNT_FITFIND_AI` service-account JSON. It works, but it is a long-lived credential.
Risk: long-lived keys have larger credential-lifecycle blast radius than short-lived workload identity; IAM permissions may also remain broader than the eventual minimum after activation troubleshooting.
Mitigation: the secret is scoped to required workflow steps, temporary files are cleaned, and no key material is printed or committed.
Recommended fix: after live AI stabilization, review least privilege and migrate GitHub Actions to OIDC / Google Workload Identity Federation, then rotate/retire the JSON key only after the replacement path is VERIFIED.

## TD-013 — Superseded open PRs create repository noise
Severity: LOW / P6
Area: repository hygiene
Problem: old UI/experiment/recovery-era PRs remain open despite current main and Golden Path having moved past their scope.
Risk: stale branches can be mistaken for active work or accidentally revived/merged.
Mitigation: current main and CONTROL state are authoritative; no stale PR is part of the release path.
Recommended fix: close superseded PRs with a short note pointing to the newer merged baseline; do not rebase or revive them unless new evidence creates a real need.
