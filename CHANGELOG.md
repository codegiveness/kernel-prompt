# @codegiveness/kernel-prompt

## [0.1.1] - 2026-07-26

### Renamed & Released

- Rename `kernel-skill` → `kernel-prompt` across all naming surfaces (skill name, npm package, plugin name, directory, bin script, README, CHANGELOG, CI guard).
- Add CI naming-consistency guard — 13 assertions verifying all naming surfaces agree, preventing partial renames from shipping.
- Close three README content gaps: before/after example teaser, six-cut KERNEL acronym expansion inline, five output substances named (context, task, constraints, format, verify).
- Repository renamed on GitHub: `codegiveness/kernel-skill` → `codegiveness/kernel-prompt` (old URL auto-redirects).

## [0.1.0] - 2026-07-25

### Initial Release

- Ship **`kernel-prompt`** — a prompt-engineering skill that refines or composes a prompt into one paragraph that lands on first try. The skill runs the KERNEL pass: six cuts (Keep it simple, Easy to verify, Reproducible, Narrow scope, Explicit constraints, Logical structure) that turn a vague request into a single paragraph carrying context, task, constraints, format, and verify as flowing prose.
- Two branches: **Refine** (input is an existing prompt) and **Compose** (input is a task description). Same six letters, different starting material.
- A grounding step pins vague input terms to concrete codebase symbols before the pass writes against them.
- A vague-phrasing sweep tests every content clause against a two-reader test and applies one of seven named reformulation patterns when a clause fails.
- Ships as installable npm prose (`@codegiveness/kernel-prompt`) — no compiled binary, no platform matrix.
- `kernel-prompt update` pulls the latest version via npm.
