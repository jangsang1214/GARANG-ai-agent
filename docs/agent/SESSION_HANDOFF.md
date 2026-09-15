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
- PRODUCT current verified main is `0058e1ba242962560c93ca2887298fd83763ca99` from PR #104 `Consolidate GARANG into four product surfaces`.
- PR #104 is MERGED. Exact-head merge-ref Release Gate #1259 was GREEN across core/build/security plus full WebKit Today/Planner/Golden Path/authenticated Coach/Real LLM/recovery/mobile/runtime-stability coverage.
- PR #104 final product model is Today / Record / Coach / Progress. Planner and Memory remain capabilities/direct routes, not first-level product surfaces.
- Today shows state -> deterministic GARANG judgment summary -> Training/Recovery/Nutrition plan -> one next action -> Coach rationale entry. Coach remains the canonical decision/rationale/action disclosure owner.
- Record exposes Workout / Running / Nutrition / Body / Recovery; Recovery reuses the existing Today check-in mutation owner.
- Progress presents actual records -> what GARANG learned -> next judgment using the canonical accumulation surface.
- Decorative falling-water-droplet motion is no longer mounted. Planner/Progress evidence controls use neutral static symbols while retaining a touch-safe 44x48 target.
- No state schema, Decision Intelligence, Outcome Learning, Memory engine, Agent Contract, backend, Real LLM gateway or canonical record write ownership changed.
- PR #105 established Food Data Foundation v2 quality/provenance contracts, source registry, audit gates and Coach/Nutrition eval foundations.
- PR #106 established deterministic Nutrition Intelligence v2 and Coach Knowledge Grounding v2; Gate #1232 GREEN.
- PR #107 wired nutrition + curated knowledge grounding into the Firebase Functions Coach path; Gate #1237 and exact post-merge Gate #1239 GREEN; Pages #773 GREEN.
- PR #108 added executable official-source adapters and import/proposal tooling for K-FIND and USDA. Pre-merge Gate #1245 GREEN; exact post-merge Gate #1247 GREEN; Pages #774 GREEN.
- PR #108 does not auto-rewrite `food-db.json`. Current official-source quality uplift remains unverified until external source data are actually pulled/reviewed/applied.
- Founder-run real-device validation remains PARTIAL GREEN: deployed app opens -> onboarding -> Today -> first record -> Coach on real iPhone Chrome. Physical-device plan -> execution -> persistence -> Progress/Accumulation and target in-app browser remain unverified.
- Live production Real LLM activation remains UNKNOWN. Repository and WebKit integration are GREEN, but production Functions/provider/secret activation and authenticated live smoke evidence are still required.
- Commercial-production readiness remains RED until full real-device, payment/entitlement, monitoring, production provider/endpoints and legal/privacy/retention gates are completed.

## Next recommended work
1. Verify production Real AI Coach activation boundary: provider secret/config, Functions production deployment and fail-closed behavior.
2. Run authenticated live Coach smoke and two-user personalization validation while preserving `GARANG decides -> LLM explains -> User confirms -> GARANG acts`.
3. Complete real iPhone Golden Path through plan -> execution -> persistence -> Progress/Accumulation, then repeat in the target in-app browser.
4. Run an approved K-FIND/USDA source pull with external credentials, generate replacement proposals and a before/after quality report, then review ambiguous mappings before canonical nutrition updates.
5. After those evidence gates are GREEN, prepare Wanted AI Championship demo/submission copy; avoid new scope unless it fixes a demonstrated Golden Path blocker.

## Handoff rule
Never turn old handoff text into VERIFIED evidence without observing the source. DONE requires implementation + acceptance + verification + regression consideration + material state synchronization.
