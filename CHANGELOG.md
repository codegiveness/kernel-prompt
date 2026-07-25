# @codegiveness/kernel-skill

## 0.1.0

### Initial Release

- Ship **`kernel`** — a prompt-engineering skill that refines or composes a prompt into one paragraph that lands on first try. The skill runs the KERNEL pass: six cuts (Keep it simple, Easy to verify, Reproducible, Narrow scope, Explicit constraints, Logical structure) that turn a vague request into a single paragraph carrying context, task, constraints, format, and verify as flowing prose.
- Two branches: **Refine** (input is an existing prompt) and **Compose** (input is a task description). Same six letters, different starting material.
- A grounding step pins vague input terms to concrete codebase symbols before the pass writes against them.
- A vague-phrasing sweep tests every content clause against a two-reader test and applies one of seven named reformulation patterns when a clause fails.
- Ships as installable npm prose (`@codegiveness/kernel-skill`) — no compiled binary, no platform matrix.
- `kernel-skill update` pulls the latest version via npm.
