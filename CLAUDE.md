# Kernel Skill

A single-skill repository: **kernel** — refine or compose a prompt into one paragraph that lands on first try.

## Structure

- `skills/engineering/kernel/` — the skill itself:
  - `SKILL.md` — the KERNEL pass (K-E-R-N-E-L), six cuts turning a vague request into a landing prompt
  - `EXAMPLE.md` — disclosed worked example (grounding, combining, full pass, sweep)
  - `REFORMULATIONS.md` — seven patterns for repairing vague clauses

The skill is **model-invoked**: any agent (Claude Code, Codex, OpenCode) can reach for it when the task fits, and a user can also call it directly. It has no `disable-model-invocation` flag — that's deliberate.

## Conventions

- `AGENTS.md` is a symlink to `CLAUDE.md` so agent harnesses that look for either file see the same content.
- The npm package name is `@codegiveness/kernel-skill`. The bare name `kernel` is already taken on npm — do not attempt to claim it.
- The skill ships as prose (Markdown). There is no compiled binary, no native code, and no platform matrix. What npm publishes is the Markdown.
- Releases flow through the umans-gate pattern: push a `v*` tag, GitHub Actions builds and publishes to npm on tag.
- `kernel-skill update` pulls the latest version via npm. It's a thin npm wrapper, not a self-contained updater.

## Maintenance

When you change `SKILL.md`, re-read `EXAMPLE.md` and `REFORMULATIONS.md` — the example must stay a faithful disclosure of the pass, and the reformulations must cover every pattern the sweep names. A drift between any two breaks the skill's contract with its reader.

The `version` field in `.claude-plugin/plugin.json` must stay in sync with `package.json`'s `version` — the plugin uses it to decide when installed users see an update.
