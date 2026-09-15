# GARANG Release Status

Last updated: 2026-09-15

## Overall decision
GREEN for current VERIFIED PRODUCT main `84589d66d0cce2c818982a97b7206ce6fc9d5fa5` (merged PR #111). Repository-level Product/Golden Path/UI, Food/Nutrition Intelligence, official-source ingestion and corpus-planning capability are GREEN. Actual canonical food-corpus quality uplift remains YELLOW because no approved full official dataset has yet been processed and applied. Real-device validation remains PARTIAL GREEN. Live production Real LLM activation remains UNKNOWN. Commercial-production readiness remains RED.

## PRODUCT — current main
Decision: GREEN.
- PR #111 `Make Today bottom CTA open Check-in` merged as `84589d66d0cce2c818982a97b7206ce6fc9d5fa5`.
- Today preserves the primary workout execution action (`오늘 운동 실행`) and exposes a separate bottom Check-in utility using the canonical existing check-in modal/write path.
- A P2 stale-state race found during complete Golden Path verification was fixed at the lifecycle durability boundary so Coach evidence is not lost during Coach → Today route transitions.
- Dynamic state-durability and Today Check-in runtimes are version-aligned with the service-worker precache; app shell is rotated to v24.
- PR #111 pre-merge Gate #1288: GREEN across core/build/security and the full WebKit suite.
- Exact post-merge main Gate #1289: GREEN. Core/build/security, Firebase public health, Firestore emulator, Today Check-in, complete Golden Path, authenticated Coach, Real LLM integration, recovery, mobile regression, Settings touch, mobile button health and runtime stability stress all PASS.
- Pages #779 on `84589d66...`: GREEN.
- Founder OS Event Envelope #628 on `84589d66...`: GREEN.
- Design consolidation PR #104 remains merged and preserved.
- PR #108 official K-FIND/USDA ingestion and PR #110 corpus-upgrade planning remain present on current main.

## Golden Path / preservation
Decision: GREEN in automated release gate.
- Current main Gate #1289 passes the complete browser Golden Path and verifies Coach evidence persists through route transitions.
- Authenticated Coach, Real LLM integration, recovery, mobile regression and runtime stress all pass on the merged main SHA.
- GARANG deterministic Decision Intelligence remains judgment owner; LLM remains explanation/orchestration only.
- No silent mutation, duplicate Check-in write owner, Agent confirmation bypass, Planner semantics rewrite or state-schema migration was introduced.
- No further UI redesign is recommended without new external user evidence; the current Today hierarchy is the release baseline.

## Official nutrition data result
Decision: GREEN / REPOSITORY CAPABILITY MERGED.
- Official source normalization supports K-FIND, USDA FoodData Central and Data.go.kr nationwide nutrition standard records.
- `verified` requires traceable provider/dataset/record ID and complete kcal/protein/carbs/fat.
- Unsupported volume basis such as 100ml is not silently converted into 100g.
- Corpus planning is fail-closed: unique exact name/alias match + one official candidate creates a review proposal only; multiple official candidates require manual review.
- Planner reports current vs projected quality counts before canonical changes.
- Full Data.go.kr retrieval path uses an environment-only service key and does not expose credentials.

## Food corpus release boundary
Decision: YELLOW / EXTERNAL OFFICIAL DATA EXECUTION REQUIRED.
- Last verified canonical baseline remains 500 foods = 0 verified / 12 approximate / 488 estimated.
- Actual replacement count and verified-coverage uplift remain UNKNOWN until a current official dataset is processed, ambiguous mappings reviewed, replacements applied and the corpus re-audited.
- Do not present the repository pipeline as evidence that the current production food values are already official/verified.

## Real-device validation
Decision: PARTIAL GREEN / IN PROGRESS.
- Real iPhone Chrome app load → onboarding → Today → first record → Coach is VERIFIED GREEN.
- Real-device plan → execution → persistence → Accumulation remains unverified.
- Target in-app-browser Golden Path remains unverified.

## Remaining release gates
- Repository/UI/automated Golden Path: GREEN.
- Production Real AI Coach activation: READY TO START, but production secret/deployment changes require explicit Founder approval.
- Authenticated live production Coach + two-user personalization evidence: UNKNOWN.
- Actual official nutrition corpus replacement: YELLOW / external approved official data required.
- Real-device full Golden Path: PARTIAL GREEN.
- Commercial production: RED pending production AI/provider activation evidence, full real-device completion, payment/entitlement, monitoring, legal/privacy/retention and production release gates.
