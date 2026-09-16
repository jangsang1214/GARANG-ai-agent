# GARANG Project State

Last updated: 2026-09-16

## Current objective
Freeze the current VERIFIED commercial GARANG web baseline, copy that stable snapshot into a separate Wanted/competition derivative, and spend remaining submission work on judge-facing packaging rather than destabilizing the commercial product.

## Repository observations
- CONTROL: `jangsang1214/GARANG-ai-agent`; orchestration/policy/project state.
- PRODUCT: `jangsang1214/-fitmind-ai`; implementation/tests/CI/releases.
- PRODUCT current main: `b863a7634bd64b03a6e6f3772950c43cc81afb6f`.
- PR #123 Real AI Coach multimodal/release hardening: MERGED.
- PR #124 Intelligence Learning Contract v1: MERGED.
- PR #128 shell navigation race fix: MERGED.
- PR #129 Today remount self-healing + repeatable production Coach smoke: MERGED.
- PR #130 ChatGPT-style Coach photo composer `+` attachment UI: MERGED at `9452cea2929d6940f20d39806b2b3d30bc3bb004`.
- PR #131 mobile route-intent stabilization across presentation remounts: MERGED at current main `b863a7634bd64b03a6e6f3772950c43cc81afb6f`.

## VERIFIED release evidence
- PR #130 exact-head Release Gate #1444: FULL GREEN.
- PR #131 exact-head Release Gate #1448 / run `35109312382`: FULL GREEN.
- Post-merge current main Release Gate #1449 / run `35110020514`: FULL GREEN.
- Current-main GitHub Pages #799 / run `35110017165`: SUCCESS.
- Founder OS Event Envelope #968 / run `35110020344`: SUCCESS.
- Public deployment: `https://jangsang1214.github.io/-fitmind-ai/`.
- Production Coach Live Smoke run `35101459492`: SUCCESS. Disposable Firebase identity verified authenticated production text Coach and photo Coach, then was deleted.
- Text Coach: `source=llm`, provider `openai`, model `gpt-5.6-luna`, GARANG decision alignment verified.
- Photo Coach: `source=llm`, provider `openai`, model `gpt-5.6-luna`, GARANG alignment + grounding + image context verified.

## Product / AI state
- Golden Path remains: Onboarding → Today → Record → Coach → Plan → Confirmation → Execution → Record → Progress/Accumulation.
- Product shell remains Today / Record / Coach / Progress.
- Coach photo attachment is now a compact `+` inside the chat composer rather than a separate tools row.
- One JPG/PNG/WebP photo up to 8 MB is previewed/removable inside the composer and consumed ephemerally by the next request.
- Raw Coach image data is not persisted to GARANG state, localStorage, Firestore, telemetry or conversation text history by the released path.
- Mobile touch route intent is preserved across Today/Record presentation remounts without changing data ownership.
- Deterministic GARANG State/Decision Intelligence remains the judgment owner; LLM remains bounded explanation/language.
- Intelligence Learning Contract v1 remains released: `decisionId → recommendationId → actionId → planId → executionId → outcomeId`.
- Outcome Learning remains advisory-only: no silent mutation and no automatic progression increase.

## Stable
- Current commercial web baseline is GREEN for the verified web/competition scope.
- Real production text/photo Coach path is VERIFIED.
- Current exact main is deployed to Pages and passed full post-merge regression.
- Signed-out demo remains removed.

## Broken / blockers
- No VERIFIED P0/P1 technical blocker remains for the current web baseline or Wanted snapshot source.
- Full commercial-production readiness across every device/channel is a separate standard and is not implied by this web baseline.
- Explicit rejected/dismissed recommendations are not yet durably represented in the personalization causal graph.

## Durable release-channel decision
Commercial GARANG PRODUCT main is the canonical product. Wanted/competition work must branch/copy from a VERIFIED stable snapshot into a separate derivative build/repo/deployment target. Competition-specific copy, demo flow or presentation changes do not redefine commercial GARANG and do not automatically flow back.

## Next priorities
1. P1 copy/freeze `b863a763…` into the separate Wanted derivative and complete submission packaging.
2. Keep commercial GARANG frozen unless a real P0/P1 defect is found before submission.
3. After submission, resume P4 User Performance Model v1 using `State × Recommendation × Action × Outcome` evidence; avoid ML/vector infrastructure until measured need exists.
