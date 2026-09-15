# GARANG Project State

Last updated: 2026-09-16

## Current objective
The repository/UI final integration and the reviewed multi-source official food-corpus v3 release are complete. Protect the verified Golden Path and current data integrity, then move next to production Real AI Coach activation/verification, followed by remaining real-device validation and Wanted AI Championship submission preparation. Large-scale UI redesign is not a priority without new external-user evidence.

## Repository observations
- CONTROL: `jangsang1214/GARANG-ai-agent`; Founder OS v7-lite remains the control plane.
- PRODUCT: `jangsang1214/-fitmind-ai`; current VERIFIED main is `3c3844edbe07920db41d9054aa968cb8be8bf8f4`, merge commit for PR #118 `Apply reviewed official food corpus v3`.
- CONTROL and PRODUCT mutation policy remain `branch-pr` per `docs/agent/REPOSITORIES.json`.
- PR #114 Today workout integration and PR #115 Progress/Accumulation language remain preserved.
- PR #117 introduced the fail-closed KDDB/PFDB/KFCT multi-source official matcher and preserved generic or ambiguous identities such as `라면` instead of forcing a source match.
- PR #118 materialized 151 additional reviewed official replacements onto the canonical 500-food corpus.
- PR #118 exact-head `6cee4f5eb5b8185cf1e089ece7720ee60befbab4` Release Gate #1347: GREEN.
- PRODUCT post-merge main Release Gate #1348 on `3c3844ed...`: GREEN across core/build/security, Firebase public health, Firestore emulator, full WebKit Golden Path, Nutrition, authenticated Coach, Real LLM integration, recovery, mobile regression, Settings touch, button health and runtime stress.
- Pages #787 on PRODUCT main: GREEN.
- Founder OS Event Envelope #754 on PRODUCT main: GREEN.

## Golden Path / UI baseline
- Today exposes `오늘 운동 준비하기` as the single visible workout execution entry while preserving canonical execution ownership.
- Bottom `체크인` remains the bottom-most touch-safe Today utility and reuses the canonical check-in modal/write owner.
- Advanced workout generation remains behind progressive disclosure.
- Golden Path semantics remain Onboarding → Today → Record → Coach → Plan → Confirmation → Execution → Record → Progress/Accumulation.
- No new Workout mutation path, state schema, Planner ownership, Agent Contract, Decision Intelligence, LLM architecture, or canonical Workout write owner was introduced by the food-corpus work.

## AI/Data verified baseline
- GARANG deterministic Decision Intelligence remains judgment owner; LLM remains explanation/orchestration only and cannot mutate user state directly.
- Food quality states remain `verified / approximate / estimated / unknown`; `verified` requires traceable official provenance and the committed data-quality contract.
- Official source support includes MFDS K-FIND 음식DB, MFDS K-FIND 가공식품DB, 국가표준식품성분표, USDA FoodData Central and Data.go.kr adapters.
- Canonical `food-db.json` remains exactly 500 records and now audits to `232 verified / 3 approximate / 265 estimated / 0 unknown`.
- PR #118 upgraded exactly 151 additional canonical rows and left 349 rows unchanged. Source contribution for the new upgrades: K-FIND 음식DB analyzed 86, 국가표준식품성분표 10.4 63, K-FIND 가공식품DB 2.
- Canonical food IDs, names, categories, serving labels and order remain preserved.
- The v3 audit locks the reviewed source hashes, target identity hash, canonical byte hash, provenance and exact nutrient values for all 151 new upgrades.
- Remaining `approximate`: `라면`, `오트밀`, `그릭요거트`.
- Remaining 265 `estimated` rows are usable GARANG nutrition records, not unknown/missing rows. They did not meet the v3 one-to-one official verification threshold because the reviewed official sources did not provide a sufficiently safe identity/basis/nutrient match; generic recipe, cooking-form, brand/SKU or multiple-candidate ambiguity remains fail-closed.
- Estimated category distribution: 고기/구이/볶음 40; 빵/디저트 36; 생선/해산물 30; 외식/패스트푸드/음료 30; 분식/간편식 27; 유제품/계란/콩 26; 밥/곡류/면 19; 국/찌개/탕 18; 반찬/김치/나물 17; 과일/견과 13; 기타/추가 9.

## Real-device evidence
- Founder verified deployed iPhone Chrome flow through app load → onboarding → Today → first record → Coach.
- Full real-device plan → execution → persistence → Accumulation and target in-app browser remain outstanding.

## Stable
- Core loop remains Goal → Plan → Action → Record → Interpretation → Feedback → Next Action → Long-term Change.
- AI contract remains Memory → State Intelligence → Outcome Intelligence → Decision Intelligence → LLM Explanation → User Confirmation → Agent Contract → State Mutation → Outcome → Learning.
- `GARANG decides → LLM explains → User confirms → GARANG acts.` remains enforced.
- Firebase Auth + Firestore remain user-data foundations; canonical write ownership is unchanged.
- Repository/UI/automated Golden Path and reviewed food-corpus release readiness are GREEN on current PRODUCT main.
- Commercial-production readiness remains separate from repository GREEN status.

## In progress / unknowns
- P1 production Real AI Coach validation: READY TO START / production secret or deployment actions require explicit Founder approval.
- P1 real-device Golden Path validation: PARTIAL GREEN.
- Live production Real LLM environment evidence: UNKNOWN until authenticated production smoke is executed.
- Commercial production readiness: RED pending remaining production/commercial gates.

## Next priorities
1. P1 — Production Real AI Coach activation/verification: production API/secret activation (approval-gated) → Functions production config/deploy verification → authenticated live Coach smoke → two-user personalization differentiation.
2. P1 — Complete real iPhone Golden Path through plan → execution → persistence → Accumulation and target in-app browser.
3. P1 — Prepare Wanted AI Championship submission copy/demo evidence, then submit after production/real-device evidence is complete.
4. P4 — Expand verified food coverage beyond 232 only with additional traceable source identity or carefully reviewed mappings; do not force the remaining 265 estimated or 3 approximate rows into `verified` merely to raise coverage.
