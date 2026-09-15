# GARANG Project State

Last updated: 2026-09-15

## Current objective
Protect the verified Golden Path while improving nutrition-data trust without weakening GARANG deterministic decision ownership. PRODUCT now includes the merged Design consolidation, Food Data Foundation v2, Nutrition Intelligence v2, Coach Knowledge Grounding v2, official-source ingestion, and a fail-closed official nutrition corpus upgrade planner. The repository path is GREEN; actual canonical food-corpus quality uplift remains external-data execution work.

## Repository observations
- CONTROL: `jangsang1214/GARANG-ai-agent`; Founder OS v7-lite remains the control plane.
- PRODUCT: `jangsang1214/-fitmind-ai`; latest observed main is `66b0e0f04274afee30b9d92f7752518de9b9ae52` (`Revert accidental placeholder file`). Its tree `e4411577...` is identical to merged PR #110 tree, so #110 content is present on current main.
- Design consolidation PR #104 is MERGED; AI/Data work was based on the post-#104 main and did not revert its UI/runtime changes.
- PR #108 `Add official K-FIND and USDA food ingestion pipeline` merged as `6fdc51ae...`; exact post-merge Gate #1247 GREEN; Pages #774 GREEN.
- PR #110 `Add official corpus upgrade planning for GARANG food data` merged as `1763c4f9...`.
- PR #110 pre-merge Gate #1261: GREEN after a non-reproducing Coach-evidence timing retry. All code/data tests and the successful WebKit rerun passed.
- Direct post-merge Gates #1262/#1263 were superseded/cancelled by subsequent main commits, not code failures.
- Current main Gate #1264 is GREEN across full npm tests, runtime/build, Firebase public health, Firestore emulator, complete WebKit Golden Path, authenticated Coach, Real LLM, recovery, mobile regression and runtime stress. Pages #778 is GREEN.

## AI/Data v2 verified baseline
- Food quality states remain `verified / approximate / estimated / unknown`; `verified` requires traceable provider + dataset + record ID plus complete kcal/protein/carbs/fat.
- Official adapters now cover K-FIND, USDA FoodData Central and the Data.go.kr nationwide nutrition standard contract.
- Data.go.kr fields including food code/name/type, basis, kcal, protein, fat, carbs, sugar, fiber, sodium and related provenance are normalized into Food Data Foundation v2.
- Volume-basis records such as `100ml` are not silently treated as `100g`; unsupported basis conversion fails closed.
- `corpusUpgradePlan` compares current GARANG foods against verified official records, measures before/projected quality, creates proposals only for one exact name/alias candidate, routes multiple official candidates to manual review, and never mutates `food-db.json` automatically.
- `scripts/import-official-food-data.cjs` supports credential-safe Data.go.kr pagination through `DATA_GO_KR_SERVICE_KEY` plus existing K-FIND/USDA flows; secrets are never stored or printed.
- GARANG deterministic Decision Intelligence remains judgment owner; LLM remains explanation/orchestration only and cannot mutate user state.

## Food corpus evidence
- Canonical `food-db.json` has NOT yet been bulk-replaced by official records.
- Last verified corpus audit remains 500 records: 0 verified / 12 approximate / 488 estimated.
- Therefore measured production-corpus quality uplift is still UNKNOWN, not failed.
- The public Data.go.kr grid allows downloadable data but is limited to 50,000 records; full dataset access is through the official API and requires approved service-key access.
- The repo is ready to generate safe replacement proposals and before/after quality reporting as soon as an approved official dataset artifact or secure external API environment is available.

## Real-device evidence
- Founder verified deployed iPhone Chrome flow through app load -> onboarding -> Today -> first record -> Coach.
- Full real-device plan -> execution -> persistence -> Accumulation and target in-app browser remain outstanding.

## Stable
- Golden Path remains Goal/Plan -> Action/Record -> Interpretation -> Feedback -> Next Action, with user confirmation before behavior-changing mutations.
- Outcome Learning remains bounded/read-only with no automatic progression increase.
- Firebase Auth + Firestore remain user-data foundations; canonical write ownership is unchanged.
- No official-food source credential is stored in repo/client code.
- Commercial-production readiness remains separate from repository GREEN status.

## In progress / unknowns
- P1 real-device Golden Path validation: PARTIAL GREEN.
- P4 actual official nutrition corpus upgrade: READY / EXTERNAL OFFICIAL DATA ACCESS REQUIRED.
- Live production Real LLM environment evidence: UNKNOWN.
- Commercial production readiness: RED pending remaining production/commercial gates.

## Next priorities
1. P1 — Complete real-device Golden Path through plan -> execution -> persistence -> Accumulation and target in-app browser.
2. P4 — Run the merged corpus planner against an approved current official Data.go.kr/K-FIND/USDA artifact or secure key-enabled environment; review ambiguous matches before any canonical replacement.
3. P4 — After approved replacements, re-audit verified/approximate/estimated/unknown counts and only then broaden nutrition recommendation confidence.
4. Expand Coach/Nutrition eval coverage from real beta failure cases before changing deterministic decision behavior.
