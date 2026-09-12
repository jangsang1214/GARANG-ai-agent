# GARANG AI Agent

GARANG AI Agent is the operating layer for running GARANG development as a persistent, safety-gated project system.

## V0.2 — Founder OS foundation

This repository has two complementary layers:

1. **ChatGPT Project + GitHub operating layer** — works without a separate OpenAI API key. GitHub is the technical source of truth and `docs/agent/` is the persistent project-state layer across chat sessions.
2. **Deterministic TypeScript core** — planner, repository scanning, permission gates, filesystem/terminal tools, explicit action execution, verification, recovery, and project-state loading. The model/provider layer remains separate so the core can be tested without an LLM.

## Start a project session

In the GARANG ChatGPT Project, use the instructions in `docs/agent/CHATGPT_PROJECT_INSTRUCTIONS.md` and begin a fresh session with:

```text
PROJECT START
```

The operating agent should read `AGENTS.md`, inspect the repository, then load the state files under `docs/agent/` before choosing work.

## Repository layout

```text
src/
  agent/        planning, permission-gated execution, verification, recovery
  context/      repository and persistent project-state context
  security/     permission gates
  tools/        safe filesystem and terminal tools
tests/          deterministic tests
docs/agent/     long-lived project state and operating instructions
AGENTS.md       repository-wide agent rules
```

## Development

```bash
npm install
npm run check
npm test
npm run build
npm run verify
```

`npm run verify` is the local release gate for the TypeScript core. High-risk operations remain blocked by default.

## Execution model

`CodingAgent` can now execute **explicit, typed actions** supplied with a task, but it does not invent arbitrary tool inputs by itself. That separation is intentional: a ChatGPT/GitHub layer or future model provider can propose actions, while the deterministic core enforces permission checks, executes known tools, and verifies the repository afterward.
