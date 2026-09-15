# GARANG Release Status

Last updated: 2026-09-16

## Overall decision
GREEN for current VERIFIED PRODUCT main `3c3844edbe07920db41d9054aa968cb8be8bf8f4` (merged PR #118). Repository-level Product/Golden Path/UI integration remains GREEN, and the reviewed multi-source official food-corpus v3 release is GREEN with the canonical 500-food corpus at `232 verified / 3 approximate / 265 estimated / 0 unknown`. Real-device validation remains PARTIAL GREEN. Live production Real LLM activation remains UNKNOWN. Commercial-production readiness remains RED.

## PRODUCT — current main
Decision: GREEN.
- PR #118 `Apply reviewed official food corpus v3` merged as `3c3844edbe07920db41d9054aa968cb8be8bf8f4`.
- Exact verified PR head: `6cee4f5eb5b8185cf1e089ece7720ee60befbab4`.
- Pre-merge exact-head Release Gate #1347: GREEN. `core-build-rules`, `browser-webkit`, and final `verify` all PASS.
- Post-merge main Release Gate #1348: GREEN. `core-build-rules`, `browser-webkit`, and final `verify` all PASS.
- Pages #787 on the merge SHA: GREEN.
- Founder OS Event Envelope #754 on the main push: GREEN.

## Golden Path / regression preservation
Decision: GREEN in automated release gate.
- Full WebKit release gate passes Today action flow, Today Check-in/workout-preparation integration, Today visual parity, daily plan, Simplified Shell, Planner execution, Nutrition recommendation, truth surface/first record, Golden Path integration, complete Golden Path journey, authenticated boot, authenticated Coach plan flow, Real LLM Golden Path integration, conversational logging, recovery mutation/touch, mobile regression, Settings touch, mobile button audit and runtime stability stress.
- Core gate passes locked dependencies, browser server portability, production dependency security, GARANG Intelligence Core, Action & Data Reliability, Commercial Core regressions, runtime/build, build entry, Firebase public health and Firestore emulator rules.
- GARANG deterministic Decision Intelligence remains judgment owner; LLM remains explanation/orchestration only.
- No silent mutation or confirmation-boundary bypass was introduced.

## Official nutrition data result
Decision: GREEN / REVIEWED MULTI-SOURCE V3 MERGED.
- PR #117 established fail-closed multi-source matching for K-FIND 음식DB (KDDB), K-FIND 가공식품DB (PFDB), and 국가표준식품성분표 (KFCT), with 100g normalization and canonical identity preservation.
- PR #118 applied 151 additional reviewed official replacements: K-FIND 음식DB analyzed 86, 국가표준식품성분표 10.4 63, K-FIND 가공식품DB 2.
- The canonical 500-food corpus now audits to `232 verified / 3 approximate / 265 estimated / 0 unknown`.
- Exactly 151 canonical rows received the v3 upgrade and 349 rows were unchanged by this materialization.
- Food IDs, canonical names, categories, serving labels and corpus order are preserved.
- Generic or ambiguous identities remain fail-closed. In particular, generic `라면` was not promoted to verified merely because official ramen products exist.
- Remaining approximate rows are `라면`, `오트밀`, `그릭요거트`.
- The v3 audit locks source hashes, reviewed source row identity, provider/dataset/record ID, mapping rule, target identity hash, canonical byte hash and exact nutrient equality for the 151 new upgrades.

## Remaining 265 estimated boundary
Decision: ACCEPTED / NOT A RELEASE BLOCKER.
- The 265 estimated foods are not unknown or empty records; they retain usable GARANG nutrition values.
- They remain estimated because the reviewed official sources did not support a sufficiently safe one-to-one official replacement under the current verification contract. Typical blockers are recipe variance, cooking-form mismatch, generic food names, brand/SKU ambiguity, multiple plausible official candidates, or incomplete basis/nutrient comparability.
- Category distribution: 고기/구이/볶음 40; 빵/디저트 36; 생선/해산물 30; 외식/패스트푸드/음료 30; 분식/간편식 27; 유제품/계란/콩 26; 밥/곡류/면 19; 국/찌개/탕 18; 반찬/김치/나물 17; 과일/견과 13; 기타/추가 9.
- No claim is made that all 500 foods are official-source verified. Current verified coverage is 232/500 (46.4%).
- Further promotion requires stronger traceable identity/evidence or manual review; raising the verified count alone is not a valid reason to replace a value.

## Real-device validation
Decision: PARTIAL GREEN / IN PROGRESS.
- Real iPhone Chrome app load → onboarding → Today → first record → Coach is VERIFIED GREEN.
- Real-device plan → execution → persistence → Accumulation remains unverified.
- Target in-app-browser Golden Path remains unverified.

## Remaining release gates
- Repository/UI/automated Golden Path integration: GREEN.
- Reviewed food-corpus v3 through 232 verified foods: GREEN.
- Production Real AI Coach activation: READY TO START, but production secret/deployment changes require explicit Founder approval.
- Authenticated live production Coach + two-user personalization evidence: UNKNOWN.
- Real-device full Golden Path: PARTIAL GREEN.
- Commercial production: RED pending production AI/provider activation evidence, full real-device completion, payment/entitlement, monitoring, legal/privacy/retention and production release gates.
