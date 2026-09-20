# GARANG Tasks

Last updated: 2026-09-20

## Active P4 — User Performance Model v1 longitudinal learning
Status: IMPLEMENTED IN MAIN / CURRENT WEB RELEASE VERIFIED GREEN
Owner: Product / AI Data / Engineering / Release QA
Goal: make GARANG progressively understand how the user responds to recommendations from durable action, execution and outcome evidence.

Implemented:
- Evidence-aware dimensions expose `value / confidence / sampleSize / lastUpdated / evidenceIds`. ✅
- Legacy recovery/check-in fallback bug fixed. ✅
- Recommendation accept/modify/dismiss resolution evidence persists durably. ✅
- Confidence-gated User Performance context is available through the read-only Intelligence Bridge. ✅
- Coach receives confidence-gated UPM context without LLM decision ownership. ✅
- `attributedOutcomeScore` uses only fully attributed finalized Intelligence Learning Contract cycles. ✅
- Pending/incomplete cycles do not become outcome learning evidence. ✅
- No automatic progression, silent mutation or new competing truth store. ✅

Verification:
- PR #164 exact-head Release Gate #1525 / `35502377218`: GREEN. ✅
- PR #164 merged to PRODUCT main as `47d95a71c4a526ba966656a8f923ebf0b1db46cf`. ✅
- Pages #816 / `35502863525`: SUCCESS. ✅
- Post-merge Release Gate #1527 / `35502864020`: FULL GREEN. ✅
- Production server-side #164 UPM attribution: NOT DEPLOYED; explicit production approval required. ⏳

Next acceptance:
- If approved, production Function deployment from current main followed by authenticated live `source=llm` smoke.
- Real-user longitudinal validation at 2/4/8-week windows.
- Measure recommendation shown → accept/modify/dismiss → execution → outcome → subsequent recommendation quality.

## Closed P1 — Production Real AI Coach connectivity repair
Status: DONE / VERIFIED GREEN
Evidence:
- PR #158 gateway failure classification merged.
- PR #159 conversational/actionable collect-data response merged.
- PR #160 mandatory authenticated activation smoke merged.
- PR #161 confidence-gated User Performance Coach context merged.
- Production activation #11 / `35502595878`: SUCCESS.
- Live response: `source=llm`, provider `openai`, model `gpt-5.6-luna`, alignment verified.
- Release Gate #1526 / `35502595898`: FULL GREEN.

## Active P3 — Runtime ownership simplification
Status: IN PROGRESS / EVIDENCE-DRIVEN
Goal: reduce active screen/route/observer/retry ownership without adding more self-healing layers.
- Route mutation ownership has been constrained toward `GarangRouter`.
- Continue only against active boot-path owners.
- Repeated WebKit instability should be treated as ownership evidence, not hidden with additional retries.

## Closed P1 — Competition submissions
Status: DONE / RECORDED COMPLETE BY FOUNDER REPORT
- Wanted: submitted.
- 롯데: submitted.
- 브로제이: submitted.
Competition derivatives remain isolated and change-frozen except critical outage/organizer-required fixes.

## P2 — Release integrity
- Protect CONTROL + PRODUCT main: PLANNED.
- Migrate production deployment auth to OIDC/WIF: PLANNED.
- Functions dependency-family upgrade: PLANNED.
- Firebase build-image cleanup: PLANNED / COST HYGIENE.
