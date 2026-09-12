# GARANG Founder OS v7-lite — Repository Agent Rules

## Mission
Operate GARANG as a multi-repository, evidence-driven project system: Observe → Reconcile → Goal → Priority → Route → Execute → Verify → Record → Learn → Next.

## Repository identity
Read `docs/agent/REPOSITORIES.json` before cross-repository work.
- CONTROL owns orchestration, policies, durable project state, decisions, Project Graph and event contracts.
- PRODUCT owns application implementation, product tests/CI, UX and releases.
Never use one repository as evidence for the other's implementation state.

## Evidence
Current code/config and GitHub branch/commit/PR/CI evidence outrank state docs; state docs outrank old chat; inference is last. Internally distinguish VERIFIED / RECORDED / INFERRED / UNKNOWN. UNKNOWN never equals PASS.

## Project Graph
Use `docs/agent/PROJECT_GRAPH.json` to connect work to goals. Prefer Goal → Metric → Initiative → Feature/Task → Change/PR → Verification → Release → Result. Work that cannot support a goal should be challenged, deferred, or recorded as debt/nice-to-have.

## Workstream routing
Use only needed perspectives: Command Center, Product, Engineering, AI/Data, Design/Brand, Growth/Business, Release/QA, Red Team. `src/orchestration` provides the deterministic default route; repository evidence and explicit Founder direction outrank heuristic routing.

## Priority
P0 broken system > P1 critical/Golden Path > P2 data/security/release integrity > P3 critical UX > P4 intelligence > P5 retention > P6 polish > P7 new feature > P8 nice-to-have. Concrete deadlines may temporarily reorder priority.

## Autonomy & capabilities
Low-risk reversible work may execute. Medium-risk reversible work may execute and report. High-impact/irreversible/costly work requires Founder approval. Destructive, production, secret, billing, forced-main/history, legal/financial and major architecture actions require explicit approval. Events never grant authority; capability policy remains the execution boundary.

## Engineering loop
1. Observe registered repo/ref/PR/CI and relevant state.
2. Reconcile stale recorded state.
3. Define problem + acceptance criteria + Project Graph relation.
4. Trace impact/dependencies.
5. Make the smallest safe change.
6. Run relevant checks; core TypeScript changes require `npm run verify`.
7. Check Golden Path/regression/security boundaries.
8. Red-team value, complexity and failure modes.
9. Update material graph/state/evidence only.
10. Classify GREEN/YELLOW/RED.

## Definition of Done
DONE = Implemented + Acceptance Criteria Met + Verification Evidence + Regression Considered + Graph/State Updated when material. Otherwise report PARTIAL/YELLOW and state what remains unknown.

## Events & reconciliation
`src/events` defines the versioned event contract. `scripts/emit-event.mjs` and the GitHub workflow emit artifacts; they do not create autonomous authority. CI failure routes to Engineering + Release/QA. Main updates require reconciliation. Compare observed repo snapshots with recorded state and surface SHA drift, missing evidence, untracked repos and RED CI.

## Release gate
Required FAIL = RED. Required UNKNOWN = YELLOW. Required PASS with no blocking uncertainty = GREEN. Beta/demo and commercial-production readiness are separate gates.

## Session recovery
On `PROJECT START`: AGENTS → REPOSITORIES → PROJECT_STATE → PROJECT_GRAPH → SESSION_HANDOFF → TASKS → DECISIONS → TECHNICAL_DEBT → RELEASE_STATUS → inspect both registered GitHub repos/branches/PRs/CI → reconcile → select top 1–3 priorities → proceed with highest-value authorized safe work.

## Communication
For meaningful work report Judgment → Work → Verification → Status → Next. Never claim an unobserved test, commit, PR, build, deployment, event consumption or runtime action occurred.
