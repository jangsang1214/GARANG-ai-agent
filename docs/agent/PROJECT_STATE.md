# GARANG Project State

Last updated: 2026-09-15

## Current objective
The repository/UI final integration phase is complete. Protect the verified Golden Path and move next to production Real AI Coach activation/verification, followed by remaining real-device validation and Wanted AI Championship submission preparation. Large-scale UI redesign is no longer a priority.

## Repository observations
- CONTROL: `jangsang1214/GARANG-ai-agent`; Founder OS v7-lite remains the control plane.
- PRODUCT: `jangsang1214/-fitmind-ai`; current VERIFIED main is `9e853e8f9ba854b616eb894af5b178805bbce0e8`, merge commit for PR #114 `Merge Today workout execution into preparation`.
- CONTROL mutation policy and PRODUCT mutation policy are both `branch-pr` per `docs/agent/REPOSITORIES.json`.
- Product Consolidation PR #104 remains merged and preserved.
- PR #111 Today bottom Check-in/lifecycle durability remains preserved.
- PR #114 finalizes the visible Today workout path as `오늘 운동 준비하기` → optional details → `운동 시작` → canonical Workout execution.
- PR #114 exact verified head was `60be81a43e9f5e6c40e0c4bf21241b9ca4be19ba`.
- PR #114 exact-head Release Gate #1318: GREEN. `core-build-rules`, `browser-webkit`, and final `verify` all passed.
- PRODUCT post-merge main Release Gate #1319 on `9e853e8f...`: GREEN across core/build/security, Firebase public health, Firestore emulator, full WebKit Golden Path, authenticated Coach, Real LLM integration, recovery, mobile regression, Settings touch, button health and runtime stress.
- Pages #780 on PRODUCT main: GREEN.
- Founder OS Event Envelope for the merge/main workflow completed GREEN.

## Today / Golden Path final integration
- Today now exposes `오늘 운동 준비하기` as the single visible workout execution entry.
- The canonical Today workout execute owner remains in the DOM and retains execution ownership; it is visually hidden and `aria-hidden` only when the preparation integration is successfully mounted.
- The preparation surface exposes a touch-safe `운동 시작` action and reuses the existing generated-workout import path when available; otherwise it delegates to the canonical Today execute action.
- No new Workout mutation path, state schema, Planner ownership, Agent Contract, Decision Intelligence, LLM architecture, or canonical Workout write owner was introduced.
- The bottom `체크인` remains the bottom-most touch-safe Today utility and continues to reuse the canonical check-in modal/write owner.
- Advanced workout generation controls remain available behind progressive disclosure.
- Golden Path semantics remain Onboarding → Today → Record → Coach → Plan → Confirmation → Execution → Record → Progress.
- Repository-level final UI/Golden Path integration is GREEN. Do not start another broad UI redesign without new external-user evidence.

## AI/Data verified baseline
- GARANG deterministic Decision Intelligence remains judgment owner; LLM remains explanation/orchestration only and cannot mutate user state directly.
- Food quality states remain `verified / approximate / estimated / unknown`; `verified` requires traceable provider + dataset + record ID plus complete kcal/protein/carbs/fat.
- Official adapters cover K-FIND, USDA FoodData Central and Data.go.kr nationwide nutrition standard records.
- Canonical `food-db.json` has not yet been bulk-replaced by official records; last verified corpus audit remains 500 records: 0 verified / 12 approximate / 488 estimated.

## Real-device evidence
- Founder verified deployed iPhone Chrome flow through app load → onboarding → Today → first record → Coach.
- Full real-device plan → execution → persistence → Accumulation and target in-app browser remain outstanding.

## Stable
- Core loop remains Goal → Plan → Action → Record → Interpretation → Feedback → Next Action → Long-term Change.
- AI contract remains Memory → State Intelligence → Outcome Intelligence → Decision Intelligence → LLM Explanation → User Confirmation → Agent Contract → State Mutation → Outcome → Learning.
- `GARANG decides → LLM explains → User confirms → GARANG acts.` remains enforced.
- Firebase Auth + Firestore remain user-data foundations; canonical write ownership is unchanged.
- Repository/UI release readiness is GREEN on current PRODUCT main.
- Commercial-production readiness remains separate from repository GREEN status.

## In progress / unknowns
- P1 production Real AI Coach validation: READY TO START / production secret or deployment actions require explicit Founder approval.
- P1 real-device Golden Path validation: PARTIAL GREEN.
- P4 actual official nutrition corpus upgrade: READY / EXTERNAL OFFICIAL DATA ACCESS REQUIRED.
- Live production Real LLM environment evidence: UNKNOWN until authenticated production smoke is executed.
- Commercial production readiness: RED pending remaining production/commercial gates.

## Next priorities
1. P1 — Production Real AI Coach activation/verification: production API/secret activation (approval-gated) → Functions production config/deploy verification → authenticated live Coach smoke → two-user personalization differentiation.
2. P1 — Complete real iPhone Golden Path through plan → execution → persistence → Accumulation and target in-app browser.
3. P1 — Prepare Wanted AI Championship submission copy/demo evidence, then submit after the production/real-device evidence is complete.
4. P4 — When approved official nutrition data access is available, run the corpus planner, review ambiguous mappings, apply only traceable replacements, and re-audit verified coverage.
