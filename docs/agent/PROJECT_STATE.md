# GARANG Project State

Last updated: 2026-09-20

## Current objective
Stabilize the canonical commercial GARANG after the Real AI Coach repair and User Performance Model v1 rollout, then move from feature construction to longitudinal external validation and measured behavior change.

## Repository observations
- CONTROL: `jangsang1214/GARANG-ai-agent`.
- PRODUCT: `jangsang1214/-fitmind-ai`.
- Canonical PRODUCT main: `47d95a71c4a526ba966656a8f923ebf0b1db46cf` (PR #164, outcome-attributed User Performance learning).
- Wanted remains an isolated competition derivative. Competition submissions remain RECORDED complete by Founder report and must not redefine commercial main.

## VERIFIED commercial evidence
- Production Coach activation run #11 / `35502595878`: SUCCESS on main `e238b6164da976219da328ef0fe3bd20ea0e7807`.
- The activation preserved the existing `GARANG_LLM_API_KEY`, deployed only Firebase Function `api`, minted a disposable Firebase identity, and ran authenticated live Coach smoke.
- Live smoke returned `source=llm`, provider `openai`, model `gpt-5.6-luna`, with alignment verified; disposable identity cleanup passed.
- Release Gate #1526 / `35502595898`: FULL GREEN for `e238b6164da976219da328ef0fe3bd20ea0e7807`.
- Pages #815: SUCCESS for the same revision.
- PR #164 exact-head Release Gate #1525 / `35502377218`: GREEN before merge.
- Pages #816 / `35502863525`: SUCCESS for current PRODUCT main `47d95a71...`.
- Post-merge Release Gate #1527 / `35502864020`: FULL GREEN for current PRODUCT main.

## Product / AI state
- Deterministic GARANG State/Decision Intelligence remains judgment owner.
- LLM remains bounded explanation/language/multimodal context.
- Generic Coach gateway failures are now classified instead of collapsing into a single external-AI failure message (PR #158).
- Low-data `collect_data` Coach responses were hardened to remain human and actionable instead of only refusing judgment (PR #159).
- Production activation now requires authenticated live LLM smoke rather than allowing a skipped token-based smoke (PR #160).
- Confidence-gated User Performance context is available to Coach without granting it decision ownership (PR #161).
- User Performance Model v1 now includes durable recommendation-resolution evidence and outcome-attributed learning through fully linked Intelligence Learning Contract cycles (PR #164).

## Runtime / deployment boundary
- Commercial web source of truth is PRODUCT main `47d95a71...`; Pages #816 has deployed it.
- Production Coach backend is now VERIFIED on current commercial main `fca5357d1c844bd34353a118f9b23e81410e7ca9` after explicit Founder approval.
- Production Coach Activation #13 / `35503623842`: SUCCESS.
- The activation deployed the current server-side User Performance attribution from PR #164, preserved the existing LLM secret, ran authenticated live smoke, and cleaned up the disposable Firebase identity.
- Live smoke returned `source=llm`, provider `openai`, model `gpt-5.6-luna`, with alignment verified.
- Browser/main and production Coach server parity is therefore VERIFIED GREEN.

## Stable
- Production Real AI Coach connectivity: VERIFIED GREEN.
- Commercial Coach decision/alignment boundary: VERIFIED GREEN.
- User Performance Model v1 core contract: merged.
- Recommendation accept/modify/dismiss evidence: durable.
- Confidence-gated UPM context: merged.
- Outcome-attributed UPM learning: merged to current main and Pages.
- No VERIFIED P0/P1 source or provider outage remains.

## Broken / blockers
- No VERIFIED P0/P1 blocker.
- Current PRODUCT main Release Gate #1527 is VERIFIED GREEN.
- Server-side #164 UPM attribution is production-activated and live-smoke verified.
- Main branch protection, OIDC/WIF deployment auth migration, Functions dependency-family upgrade and runtime ownership simplification remain non-blocking engineering debt.

## Next priorities
1. Begin longitudinal external validation: recommendation → accept/modify/dismiss → execution → outcome → later recommendation quality.
2. Continue runtime ownership simplification only where active boot-path evidence shows duplicate ownership or flake.
3. Keep P2 branch-protection / OIDC-WIF / dependency hardening separate from product-intelligence work.
