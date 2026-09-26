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

## D-011 — GARANG decisions are machine-aligned before LLM explanations are accepted
Date: 2026-09-14
Decision: Real LLM Coach output must structurally echo the active deterministic GARANG `decisionId`, `decisionMode`, and only supported reason codes. Decision reversal or unsupported provider reasoning is rejected before an LLM success is surfaced.
Reason: Prompt instructions alone are not a sufficient decision-ownership boundary.
Impact: `GARANG decides → LLM explains → User confirms → GARANG acts` is enforced as a runtime contract rather than only product guidance.

## D-012 — Longitudinal Outcome Learning may constrain progression but cannot create automatic progression increases
Date: 2026-09-14
Decision: Outcome Learning v2 may use sufficient longitudinal execution/recovery evidence to suppress progression or prefer reduced load, but cannot automatically increase progression or silently mutate user state.
Reason: Early/beta outcome data is useful for conservative personalization but is not sufficient evidence for aggressive autonomous optimization.
Impact: The system can learn from repeated execution gaps and recovery constraints while preserving user confirmation and avoiding overfitting.

## D-013 — Repository readiness and live production provider readiness are separate evidence states
Date: 2026-09-14
Decision: A GREEN Real LLM code/CI baseline does not establish that the production provider is live. Secret/config presence, deployed revision, authenticated live `source: llm`, production personalization smoke and observability require separate target-environment verification.
Reason: Deployment/config evidence cannot be inferred from source code or browser-mocked integration tests.
Impact: Live Real LLM activation remains YELLOW/UNKNOWN until the canonical production smoke passes in the target environment.

## D-014 — Official nutrition data requires traceable provenance and review before canonical replacement
Date: 2026-09-15
Decision: K-FIND/USDA nutrition rows may be classified as `verified` only when provider, dataset, source record ID and complete core kcal/protein/carbs/fat are present. Official-source matches never overwrite canonical GARANG food rows automatically; unique exact name/alias matches create reviewable replacement proposals and ambiguous mappings require manual review. Source credentials remain outside source/client bundles.
Reason: An official source does not eliminate unit, identity, serving-basis or mapping errors. Automatic replacement could turn uncertain mappings into confidently wrong nutrition recommendations.
Impact: GARANG can ingest official nutrition data at scale while keeping Food Data Foundation quality gates, deterministic recommendation math and human-review boundaries intact. Repository ingestion readiness must remain distinct from actual corpus quality uplift until reviewed replacements are applied and re-audited.

## D-015 — Commercial GARANG remains the source product; competition builds fork from a verified snapshot
Date: 2026-09-16
Decision: The commercial GARANG PRODUCT main is the canonical source product. Wanted/competition submission work starts by copying a verified stable snapshot into a separate derivative build/repository or deployment target; the competition build may optimize judge-facing clarity without redefining commercial GARANG or automatically merging those changes back.
Reason: Competition constraints and presentation goals can differ from long-term commercial product priorities, while both should begin from the same verified technical foundation.
Impact: Freeze and verify the commercial source first, then create the Wanted fork. Submission-specific demo state, copy or presentation changes stay isolated unless separately reviewed as valuable for commercial GARANG.

## D-016 — LLM autonomy uses typed capability boundaries, not raw database authority
Date: 2026-09-20
Decision: GARANG may autonomously execute reversible, user-scoped state changes requested by the user only through a bounded typed tool registry and authenticated server transaction boundary. The LLM does not receive raw Firestore paths, arbitrary query/write authority, destructive/bulk/account/security/schema/secret/billing/production tools, or authority to override deterministic GARANG decisions. Factual workout, meal, body and check-in writes require explicit current-message or verified-source evidence; idempotency, audit evidence and rollback metadata are required. Personalization Policy may simplify or constrain recommendations from confidence-gated longitudinal evidence but cannot autonomously increase progression beyond deterministic Decision Intelligence.
Reason: Agentic action is necessary for GARANG to become a Personal Performance OS, but unrestricted database authority would enlarge privacy, integrity and regression blast radius without improving the core learning loop.
Impact: The operating model becomes `GARANG decides → LLM interprets/plans bounded actions → server policy validates → authenticated transaction acts → outcome is measured → GARANG learns`. High-impact operations remain Founder/user gated.

## D-017 — Personalized response learning is constraint-first until longitudinal validation
Date: 2026-09-21
Decision: Intelligence Episode and User Response evidence may influence candidate evaluation and Personalization Policy only inside the deterministic GARANG Decision envelope. Response-derived policy may shorten, simplify, cap intensity/volume or suppress progression, but it cannot autonomously increase progression beyond the deterministic decision until external longitudinal evidence justifies a separately reviewed policy change.
Reason: GARANG now has enough attribution structure to learn user response patterns, but current beta evidence is observational and sparse; treating early correlations as causal optimization would create overfitting and safety risk.
Impact: The product can begin compounding personalized response evidence immediately while preserving Decision Intelligence ownership, transparent candidate scoring and the existing safety architecture.

## D-018 — Exercise and nutrition adaptation stay shadow-first until external response evidence is sufficient
Date: 2026-09-24
Decision: Exercise-level prescription learning and adaptive nutrition learning may derive observational recommendations, reductions, or progression/target review signals from durable user data, but they may not autonomously increase workout load or mutate nutrition targets. Offline replay must be chronological and leave future evidence out; it may measure calibration and guardrail behavior but must not claim causal or counterfactual uplift.
Reason: PRODUCT PR #236 adds substantially richer personalized response evidence, but current beta data volume is not sufficient to justify autonomous escalation or causal claims. Fit to historical observations is not equivalent to proven prospective benefit.
Impact: GARANG can accumulate and evaluate personalized exercise/nutrition response evidence now while preserving deterministic Decision ownership and a reversible path to future reviewed policy expansion after 2/4/8-week external validation.

## D-019 — Exact adaptive proposals are allowed; automatic escalation still requires prospective evidence
Date: 2026-09-24
Decision: GARANG may compute exact exercise-dose proposals and exact bounded nutrition-target proposals from observed user history, and may incorporate optional source-preserved physiological signals into deterministic readiness when signal quality is sufficient. Exercise progression and nutrition target increases remain advisory/confirmation-gated and may not silently mutate user state. A physiological signal contract is not equivalent to a provider integration; Apple Health, Health Connect, wearable and device connectivity must be separately implemented and device-verified.
Reason: Exact proposals close a commercial capability gap without requiring GARANG to treat sparse observational evidence as causal. Automatic escalation and passive biometric parity require evidence and infrastructure that application logic alone cannot manufacture.
Impact: AI/Data can reach commercial-grade recommendation resolution now while preserving safety. Remaining gaps are explicitly external: native/provider acquisition, proprietary data scale, and prospective longitudinal effectiveness.

## D-020 — Intelligence confidence must be evidence-calibrated before richer automation
Date: 2026-09-24
Decision: GARANG may use deterministic hybrid semantic retrieval and richer response/workout/nutrition features, but personalization confidence must be shrunk for small samples, future evidence must be excluded from replay, episode integrity must be audited, and low evidence may not be presented as high-confidence recommendation quality. Semantic retrieval must stay inside the existing privacy boundary unless a separately reviewed external vector provider/store is introduced.
Reason: Intelligence Hardening v1 showed that additional semantic/personalization capability can improve relevance while also creating performance and overconfidence risks. The release gate caught a real retrieval performance regression; preserving quality/performance/safety gates is more valuable than maximizing apparent intelligence.
Impact: Future automation or escalation policies must cite calibrated longitudinal evidence and pass data-quality/recommendation-quality gates before authority is expanded.

## D-021 — Evidence-first commercial execution order
Date: 2026-09-27
Decision: Until changed by the Founder or superseded by a verified P0/P1 incident, GARANG executes in this order: P2 Engineering runtime/WebKit determinism → P4/P5 longitudinal external validation → funnel-evidence-driven Product improvement → Infra/Security hardening → monetization validation → payment implementation. New feature scope does not jump this sequence by default.
Reason: current PRODUCT capability is already broad enough that release repeatability and external evidence are more valuable than additional feature construction, and payment plumbing should follow rather than precede commercial validation.
Impact: Command Center and Project Graph must keep later work dependent on earlier evidence; Infra/Security can be promoted only by an actual release/security blocker, and monetization evidence must exist before payment implementation.

## D-022 — Commercial Supremacy Gate precedes external validation
Date: 2026-09-27
Decision: GARANG will not begin unknown-user or 2/4/8-week longitudinal external validation immediately after P2 runtime closure. Before recruitment begins, the product must pass a Commercial Supremacy Gate covering in-scope functionality, design/usability, intelligence, reliability, platform quality, privacy/security and accessibility against current best-in-class commercial references. Existing external-validation instrumentation remains preserved but dormant until gate PASS.
Reason: Founder wants validation to evaluate a deliberately completed, commercially superior GARANG rather than use external users to decide which obvious benchmark gaps to build. The gate converts that preference into a finite pre-validation acceptance contract rather than an unlimited “add every competitor feature” backlog.
Boundary: raw social-network scale, proprietary wearable hardware and installed-base advantages are not fabricated as app features. Where those are relevant, GARANG must provide equivalent user value via integrations/interoperability or the Founder must explicitly expand company scope. This decision does not claim real-world retention/outcome superiority before users exist; it gates product/implementation superiority before validation.
Impact: D-021 is superseded where it placed external validation immediately after P2. Project Graph must make external validation depend on Commercial Supremacy PASS. Native Health/Recovery, Running depth, Nutrition depth and premium native UX may now be promoted ahead of external validation when required by the benchmark.
