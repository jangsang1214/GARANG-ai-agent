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
- Commercialization Stage 1 and Core Intelligence Stage 2 are complete and GREEN on PRODUCT main.
- PRODUCT current verified main: `5f3d30e877e31d219623ebd521226e49265b46bf` from PR #90 `Stage 2: add Weekly Review from real adaptation evidence`.
- Stage 2 adaptation PR #88 merged as `c68ec3e915ae437dac35fbc1a9a39fc4ca6f6dbf` after full Release Gate #1094 GREEN.
- Stage 2 Weekly Review PR #90 merged as `5f3d30e877e31d219623ebd521226e49265b46bf` after full pre-merge Release Gate #1097 GREEN.
- PRODUCT post-merge Release Gate #1098 is GREEN: core/build/security/Firebase/Firestore, deterministic Stage 2 regressions, complete WebKit regression, Today, Daily Plan, Planner, Nutrition, Golden Path complete journey, authenticated Coach/recovery, Settings touch, mobile button health, runtime stability and final verify all passed.
- PRODUCT post-merge Founder OS Event Envelope #214 is GREEN.
- Plan-vs-Actual now turns stored Daily Plan + execution/recovery/nutrition evidence into completed / partial / missed / recovery-constrained / insufficient-evidence interpretation and bounded next-plan adjustment.
- Confirmed/user-edited plans are not silently overwritten; automatic progression increase remains prohibited; Coach remains user-facing judgment/approval owner.
- Weekly Review consumes the same adaptation evidence and returns planned-vs-actual context, recovery/nutrition context, one explainable insight and one bounded next-week adjustment without creating a duplicate dashboard or write owner.
- Experimental duplicate PR #89 was closed without merge after #88 became the verified canonical implementation.
- Stage 1 Record/Coach/Planner/Today mutation ownership and Golden Path remain preserved after Stage 2.
- Real-device target iPhone/in-app-browser validation remains outstanding and is the highest-priority product verification task.
- Commercial-production readiness remains separate and RED until production backend/data durability, payment/entitlement, monitoring, production provider configuration, legal/privacy/retention, staging/security and real-device gates are completed.
- PRODUCT main is currently observed without required branch protection/status checks; governance hardening is a separate deliberate Founder decision.

## Next recommended work
1. Real-device Golden Path + Stage 2 behavior validation on the target iPhone/in-app browser.
2. Founder chooses whether to enter commercial-production hardening.
3. If commercial hardening is approved, prioritize durable backend/data + monitoring + entitlement/payment foundations before adding new feature surfaces or provider complexity.

## Handoff rule
Never turn old handoff text into VERIFIED evidence without observing the source. DONE requires implementation + acceptance + verification + regression consideration + material state synchronization.
