# GARANG AI Agent

GARANG AI Agent is the persistent, safety-gated operating layer for running GARANG development across replaceable ChatGPT work sessions.

## V0.3 — Founder OS v5.1

The repository has two complementary layers:

1. **ChatGPT Project + GitHub Founder OS** — works without a separate OpenAI API key. GitHub is the technical source of truth and `docs/agent/` carries durable state across chats.
2. **Deterministic TypeScript core** — planning, repository context, capability-based permission gates, safe tools, explicit action execution, verification, recovery, and project-state loading without requiring an LLM.

Founder OS v5.1 adds evidence discipline, deterministic session recovery, scope control, Definition of Done, failure recovery, and centralized typed capability authorization.

## Start a project session

Use `docs/agent/CHATGPT_PROJECT_INSTRUCTIONS.md` as the ChatGPT Project instructions, then start a new project chat with:

```text
PROJECT START
```

Recovery order is defined in `docs/agent/SESSION_HANDOFF.md`. The agent reconciles state documents against the actual repository and CI before choosing work.

## Repository layout

```text
src/
  agent/        planning, execution, verification, recovery
  context/      repository and persistent project-state context
  security/     centralized capability/risk policy
  tools/        bounded filesystem and terminal tools
tests/          deterministic regression/security tests
docs/agent/     long-lived state, handoff, release status, project instructions
AGENTS.md       repository-wide operating rules
```

## Development

```bash
npm install
npm run check
npm test
npm run build
npm run verify
```

`npm run verify` is the release gate for the TypeScript core.

## Capability security

Actions declare a typed capability such as `repository.write` or `release.deploy`; they do not choose their own risk level. `src/security/permissions.ts` centrally maps each capability to risk. High-risk capabilities are denied by default, and explicit Founder approval can be represented by a narrow capability override rather than enabling all high-risk work.

The deterministic planner may infer an implementation capability from natural language as a fallback, but callers can supply an explicit capability. Actual action execution is authorized by the typed capability policy.

## Execution model

`CodingAgent` executes explicit typed actions through registered tools, checks permission before execution, stops on failures, and verifies the repository afterward. It does not invent arbitrary shell inputs by itself. ChatGPT/GitHub currently supplies the active reasoning/action-proposal layer; a future provider adapter should emit structured typed actions rather than unrestricted command text.
