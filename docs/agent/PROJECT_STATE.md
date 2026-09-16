# GARANG Project State

Last updated: 2026-09-16

## Current objective
Ship the current verified GARANG web build as the stable Wanted AI Championship submission baseline, then spend remaining pre-submission work on judge-facing clarity and submission packaging rather than new product scope.

## Repository observations
- CONTROL: `jangsang1214/GARANG-ai-agent`; orchestration/policy/project state. Mutation policy remains `branch-pr`.
- PRODUCT: `jangsang1214/-fitmind-ai`; implementation/tests/CI/releases.
- PRODUCT current main: `01473986568a6bbb122ab9ff05c8927a73b5622b`.
- PRODUCT PR #123 Coach multimodal/release hardening: MERGED at `bd2d4b29737454fb72af1f7a193136065d7b4f21`.
- PRODUCT PR #124 Intelligence Learning Contract v1: MERGED at `ba31fa971b2d4a84ac69072229903fc048543056`.
- PRODUCT PR #128 shell navigation race fix: MERGED at `f0db7d8833cab8e3ba7ef578eaae6786a4eea966`.
- PRODUCT PR #129 final Today remount self-healing + disposable production Coach smoke: MERGED at `01473986568a6bbb122ab9ff05c8927a73b5622b`.

## VERIFIED release evidence
- PR #129 exact-head Release Gate #1441 / run `35100746180`: FULL GREEN.
- Post-merge main Release Gate #1442 / run `35101459478`: FULL GREEN.
- Core, Functions dependency security, GARANG Intelligence Core, Action & Data Reliability, Commercial Core regressions, build, Firebase public health and Firestore emulator rules: PASS.
- WebKit: Today action, Today bottom Check-in/remount, Today visual parity, Daily Plan, Simplified Shell, Planner, Nutrition, truth/first-record, Golden Path integration, Golden Path complete journey, authenticated boot, authenticated Coach plan, Real LLM integration, Coach logging, recovery, mobile, Settings, button-health and runtime-stress: PASS.
- GitHub Pages deployment #797 / run `35101457283`: SUCCESS for the exact main SHA.
- Deployed web URL: `https://jangsang1214.github.io/-fitmind-ai/`.
- Production Coach Live Smoke run `35101459492`: SUCCESS on exact main. A disposable Firebase email/password identity minted a short-lived masked ID token, verified production text Coach and photo Coach, then deleted the identity.
- Text Coach returned `source=llm`, provider `openai`, model `gpt-5.6-luna`, and verified GARANG decision alignment.
- Photo Coach returned `source=llm`, provider `openai`, model `gpt-5.6-luna`, verified alignment + grounding, and accepted image context.

## AI/Data state
- Deterministic GARANG State/Decision Intelligence remains the judgment owner; the LLM remains a bounded explanation/language layer.
- Intelligence Learning Contract v1 is released and connects `decisionId → recommendationId → actionId → planId → executionId → outcomeId` for confirmed/applied recommendations.
- Outcome Learning remains advisory-only: no silent mutation, no automatic progression increase, no autonomous LLM tool calling.
- Raw Coach image input is ephemeral and is not persisted to GARANG state/localStorage/Firestore/telemetry/conversation text history by the released path.

## Stable
- Golden Path: Onboarding → Today → Record → Coach → Plan → Confirmation → Execution → Record → Progress/Accumulation.
- Product shell: Today / Record / Coach / Progress.
- Real production text/photo Coach path is VERIFIED.
- Competition web deployment is VERIFIED.

## Broken / blockers
- No VERIFIED P0/P1 technical blocker remains for the Wanted web submission baseline.
- Commercial production readiness remains a separate standard and is not implied by competition/demo GREEN.
- Remaining AI/Data personalization gap: explicitly rejected/dismissed recommendations are not yet durably represented in the causal learning graph.

## Next priorities
1. P1 Wanted submission packaging: problem statement, AI-use explanation, tools used, deployed URL, concise judge-facing value narrative.
2. P3 judge-first clarity: at most a few small copy/first-60-second improvements if they do not destabilize the Golden Path; rerun release evidence after any code change.
3. After submission baseline is frozen, resume P4 User Performance Model v1 / recommendation outcome personalization using `State × Recommendation × Action × Outcome` evidence. Do not add vector/ML infrastructure without measured need.
