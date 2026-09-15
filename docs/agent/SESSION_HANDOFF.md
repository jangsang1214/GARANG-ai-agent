# GARANG Session Handoff & Recovery Protocol v7-lite

## PROJECT START order
1 `AGENTS.md`
2 `docs/agent/REPOSITORIES.json`
3 `PROJECT_STATE.md`
4 `PROJECT_GRAPH.json`
5 `SESSION_HANDOFF.md`
6 `TASKS.md`
7 `DECISIONS.md`
8 `TECHNICAL_DEBT.md`
9 `RELEASE_STATUS.md`
10 inspect CONTROL + PRODUCT branches/commits/open PRs/CI
11 reconcile evidence with state/graph
12 select top 1–3 priorities and route authorized work.

## Current handoff
- PRODUCT current VERIFIED main is `84589d66d0cce2c818982a97b7206ce6fc9d5fa5`, merged PR #111 `Make Today bottom CTA open Check-in`.
- PR #111 final Today model: GARANG judgment/plan → primary `오늘 운동 실행` → separate bottom `체크인` utility. Check-in reuses the existing canonical app modal/write owner; no duplicate mutation path exists.
- During final verification a real P2 stale-state race was found: Coach evidence could exist in bridge/localStorage and then be overwritten by an older app snapshot during Coach → Today routing. The lifecycle durability boundary now resynchronizes app state from the canonical Agent State Bridge after durable commit.
- PWA delivery is hardened: state-durability and Today Check-in dynamic runtime versions are explicitly matched to service-worker precache; app shell is v24.
- PR #111 exact-head pre-merge Gate #1288: GREEN.
- Post-merge PRODUCT main Gate #1289: GREEN across core/build/security/Firebase/Firestore and every WebKit stage including complete Golden Path, authenticated Coach, Real LLM, recovery, mobile regression, Settings touch, button health and runtime stress.
- Pages #779: GREEN. Founder OS Event Envelope #628: GREEN.
- Design consolidation PR #104, Food Data Foundation/Nutrition Intelligence, PR #108 official ingestion and PR #110 official corpus-planning capability remain preserved.
- `food-db.json` has NOT been bulk-upgraded. Last verified audit remains 500 foods = 0 verified / 12 approximate / 488 estimated.
- GARANG deterministic decision identity remains authoritative. LLM remains explanation/orchestration only and cannot mutate state directly.
- Founder real-device validation remains PARTIAL GREEN through iPhone Chrome app load → onboarding → Today → first record → Coach; later plan/execution/persistence/Accumulation and target in-app browser remain unverified.
- Live production Real LLM activation remains UNKNOWN. Commercial-production readiness remains RED.

## Product quality judgment
- The current Today/Record/Coach/Progress product structure and Today action hierarchy should be treated as the release baseline.
- Do not start another broad UI redesign without new external-user evidence. Further visual/IA changes now have lower expected value than production AI and real-device validation and carry Golden Path regression risk.
- Repository/product implementation is GREEN; this is not equivalent to commercial production readiness.

## Next recommended work
1. Production Real AI Coach activation/verification: production API/secret activation (explicit Founder approval required) → Functions verification → authenticated live Coach smoke → two-user personalization differentiation.
2. Complete real iPhone Golden Path through plan → execution → persistence → Accumulation and target in-app browser.
3. Prepare demo/submission copy and evidence, then submit to the Wanted AI Championship after the production and real-device evidence is complete.
4. In parallel when approved official nutrition data is available, run the corpus planner, review ambiguous mappings, apply only traceable replacements and re-audit quality counts.

## Handoff rule
Never turn old handoff text into VERIFIED evidence without observing the source. DONE requires implementation + acceptance + verification + regression consideration + material state synchronization.
