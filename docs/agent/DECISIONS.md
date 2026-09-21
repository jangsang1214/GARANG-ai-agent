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
