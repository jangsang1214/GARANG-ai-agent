# GARANG AI Agent

GARANG AI Agent is an autonomous software-development agent designed to understand a repository, plan changes, execute tools, verify results, and recover from failures.

## V0.1 goals

- Explicit task planning
- Repository context discovery
- Safe tool abstraction
- Verification loop
- Recovery loop
- Permission gates
- Testable core without requiring an LLM

## Development

```bash
npm install
npm run check
npm test
npm run build
```

The V0.1 core deliberately keeps the model/provider layer separate from the agent loop so the orchestration can be tested deterministically.
