# GARANG Release Status

Last updated: 2026-09-15

## Overall decision
GREEN for current observed PRODUCT main `66b0e0f04274afee30b9d92f7752518de9b9ae52`, whose content tree is identical to merged PR #110 tree. Repository-level Food/Nutrition Intelligence, official-source ingestion and corpus-planning capability are GREEN. Actual canonical food-corpus quality uplift remains YELLOW because no approved full official dataset has yet been processed and applied. Real-device validation remains PARTIAL GREEN. Commercial-production readiness remains RED.

## PRODUCT — current main
Decision: GREEN.
- Design consolidation PR #104 is merged and preserved.
- PR #108 `Add official K-FIND and USDA food ingestion pipeline` merged as `6fdc51ae...`; exact post-merge Gate #1247 GREEN; Pages #774 GREEN.
- PR #110 `Add official corpus upgrade planning for GARANG food data` merged as `1763c4f9bf31408f76b5ec333964cdabf665793f`.
- PR #110 pre-merge Gate #1261: GREEN. One initial WebKit Coach-evidence timeout did not reproduce on failed-job rerun; rerun passed complete Golden Path, authenticated Coach, Real LLM, recovery and mobile/runtime regressions.
- Direct post-merge #1262/#1263 were cancelled by later main pushes/concurrency, not implementation test failures.
- Latest main `66b0e0f...` uses the same tree as PR #110 merge and Gate #1264 is GREEN across core/build/security, full npm tests, Firebase public health, Firestore emulator, complete WebKit Golden Path, authenticated Coach, Real LLM, recovery and mobile/runtime stability.
- Pages #778: GREEN.

## Official nutrition data result
Decision: GREEN / REPOSITORY CAPABILITY MERGED.
- Official source normalization supports K-FIND, USDA FoodData Central and Data.go.kr nationwide nutrition standard records.
- `verified` requires traceable provider/dataset/record ID and complete kcal/protein/carbs/fat.
- Unsupported volume basis such as 100ml is not silently converted into 100g.
- Corpus planning is fail-closed: unique exact name/alias match + one official candidate creates a review proposal only; multiple official candidates require manual review.
- Planner reports current vs projected quality counts before canonical changes.
- Full Data.go.kr retrieval path uses an environment-only service key and does not expose credentials.
- No `food-db.json` bulk rewrite, UI surface, state schema, Planner ownership, canonical mutation owner or provider secret changed in PR #110.

## Food corpus release boundary
Decision: YELLOW / EXTERNAL OFFICIAL DATA EXECUTION REQUIRED.
- Last verified canonical baseline remains 500 foods = 0 verified / 12 approximate / 488 estimated.
- Public Data.go.kr grid download is limited to 50,000 records; full official corpus access is through the approved API/service-key path.
- Actual replacement count and verified-coverage uplift remain UNKNOWN until a current official dataset is processed, ambiguous mappings reviewed, replacements applied and the corpus re-audited.
- Do not present the repository pipeline as evidence that the current production food values are already official/verified.

## Golden Path / preservation
Decision: GREEN in automated release gate.
- Current main Gate #1264 passed complete browser Golden Path, authenticated Coach, Real LLM integration, recovery, mobile regression and runtime stress.
- GARANG deterministic Decision Intelligence remains judgment owner; LLM remains explanation-only.
- No silent mutation or Agent confirmation bypass was introduced.

## Real-device validation
Decision: PARTIAL GREEN / IN PROGRESS.
- Real iPhone Chrome app load -> onboarding -> Today -> first record -> Coach is VERIFIED GREEN.
- Real-device plan -> execution -> persistence -> Accumulation remains unverified.
- Target in-app-browser Golden Path remains unverified.

## Remaining release gates
- Actual official nutrition corpus replacement: YELLOW / external official data artifact or secure approved API environment required.
- Real-device Golden Path: PARTIAL GREEN.
- Live production Real LLM activation: UNKNOWN.
- Commercial production: RED pending full real-device completion, payment/entitlement, monitoring/provider activation, legal/privacy/retention and production release gates.
