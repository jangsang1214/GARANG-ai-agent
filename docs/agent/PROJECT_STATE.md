# GARANG Project State

Last updated: 2026-09-15

## Current objective
Protect the verified Golden Path while moving from repository/UI hardening to production Real AI Coach validation. PRODUCT now includes the merged Design consolidation, Food Data Foundation v2, Nutrition Intelligence v2, Coach Knowledge Grounding v2, official-source ingestion, fail-closed official nutrition corpus planning, and the final Today Check-in/workout-action reliability fix from PR #111. Large-scale UI modification is no longer a priority; the next highest-value work is production Real AI Coach activation/verification, followed by remaining real-device validation and Wanted AI Championship submission preparation.

## Repository observations
- CONTROL: `jangsang1214/GARANG-ai-agent`; Founder OS v7-lite remains the control plane.
- PRODUCT: `jangsang1214/-fitmind-ai`; latest VERIFIED main is `84589d66d0cce2c818982a97b7206ce6fc9d5fa5`, the merge commit for PR #111 `Make Today bottom CTA open Check-in`.
- Design consolidation PR #104 is MERGED and preserved.
- PR #108 `Add official K-FIND and USDA food ingestion pipeline` merged as `6fdc51ae...`; exact post-merge Gate #1247 GREEN; Pages #774 GREEN.
- PR #110 `Add official corpus upgrade planning for GARANG food data` merged as `1763c4f9...`; its nutrition/data capabilities remain present after PR #111.
- PR #111 preserves workout execution as Today’s primary Golden Path action (`오늘 운동 실행`) and adds a separate bottom-most Check-in utility that reuses the existing canonical check-in modal/write owner.
- PR #111 also closes a P2 state-integrity race: after a lifecycle write, app state is resynchronized from the canonical Agent State Bridge so Coach evidence such as `ai_chat_answered` is not overwritten by a stale route-transition snapshot.
- Critical dynamic runtimes are explicitly version-aligned with PWA precache; app-shell cache is rotated to v24 for the state-durability fix.
- PR #111 pre-merge exact-head Release Gate #1288: GREEN.
- Current PRODUCT main Release Gate #1289: GREEN across core/build/security, Firebase public health, Firestore emulator, complete WebKit Golden Path, authenticated Coach, Real LLM integration, recovery, mobile regression, Settings touch, button health and runtime stress.
- Pages #779 for main `84589d66...`: GREEN.
- Founder OS Event Envelope #628 for main `84589d66...`: GREEN.

## AI/Data v2 verified baseline
- Food quality states remain `verified / approximate / estimated / unknown`; `verified` requires traceable provider + dataset + record ID plus complete kcal/protein/carbs/fat.
- Official adapters cover K-FIND, USDA FoodData Central and the Data.go.kr nationwide nutrition standard contract.
- Data.go.kr fields including food code/name/type, basis, kcal, protein, fat, carbs, sugar, fiber, sodium and related provenance are normalized into Food Data Foundation v2.
- Volume-basis records such as `100ml` are not silently treated as `100g`; unsupported basis conversion fails closed.
- `corpusUpgradePlan` compares current GARANG foods against verified official records, measures before/projected quality, creates proposals only for one exact name/alias candidate, routes multiple official candidates to manual review, and never mutates `food-db.json` automatically.
- `scripts/import-official-food-data.cjs` supports credential-safe Data.go.kr pagination through `DATA_GO_KR_SERVICE_KEY` plus K-FIND/USDA flows; secrets are never stored or printed.
- GARANG deterministic Decision Intelligence remains judgment owner; LLM remains explanation/orchestration only and cannot mutate user state directly.

## Food corpus evidence
- Canonical `food-db.json` has NOT yet been bulk-replaced by official records.
- Last verified corpus audit remains 500 records: 0 verified / 12 approximate / 488 estimated.
- Therefore measured production-corpus quality uplift remains UNKNOWN, not failed.
- The public Data.go.kr grid allows downloadable data but is limited to 50,000 records; full dataset access is through the official API and requires approved service-key access.
- The repo is ready to generate safe replacement proposals and before/after quality reporting as soon as an approved official dataset artifact or secure external API environment is available.

## Today / Golden Path state
- Today’s canonical hierarchy is stable: GARANG judgment/plan → primary `오늘 운동 실행` → bottom secondary `체크인` utility.
- Check-in remains the existing canonical check-in mutation path; no duplicate state owner was introduced.
- Automated Golden Path now verifies Coach evidence survives Coach → Today route transitions and subsequent state writes.
- Additional UI redesign is not recommended without new user evidence; it would add regression risk and scope without improving the current Golden Path.

## Real-device evidence
- Founder verified deployed iPhone Chrome flow through app load → onboarding → Today → first record → Coach.
- Full real-device plan → execution → persistence → Accumulation and target in-app browser remain outstanding.

## Stable
- Golden Path remains Goal/Plan → Action/Record → Interpretation → Feedback → Next Action, with user confirmation before behavior-changing mutations.
- Outcome Learning remains bounded/read-only with no automatic progression increase.
- Firebase Auth + Firestore remain user-data foundations; canonical write ownership is unchanged.
- No official-food source credential is stored in repo/client code.
- Repository/UI release readiness is GREEN on current PRODUCT main.
- Commercial-production readiness remains separate from repository GREEN status.

## In progress / unknowns
- P1 production Real AI Coach validation: READY TO START / production secret or deployment actions require explicit Founder approval.
- P1 real-device Golden Path validation: PARTIAL GREEN.
- P4 actual official nutrition corpus upgrade: READY / EXTERNAL OFFICIAL DATA ACCESS REQUIRED.
- Live production Real LLM environment evidence: UNKNOWN until authenticated production smoke is executed.
- Commercial production readiness: RED pending remaining production/commercial gates.

## Next priorities
1. P1 — Production Real AI Coach activation/verification: production API/secret activation (approval-gated) → Functions verification → authenticated live Coach smoke → two-user personalization differentiation.
2. P1 — Complete real-device Golden Path through plan → execution → persistence → Accumulation and target in-app browser.
3. P1 — Prepare submission copy/demo evidence and submit the verified product to the Wanted AI Championship after the production/real-device evidence is complete.
4. P4 — In parallel when approved official data access is available, run the merged nutrition corpus planner, review ambiguous mappings, apply only traceable replacements, and re-audit verified coverage.
