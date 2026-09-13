# Kernel Prompt Skill

A single-skill repository: **kernel-prompt** refines or composes a clear, actionable prompt without changing intent or inventing missing requirements.

## Structure

- `skills/kernel-prompt/` — the skill itself:
  - `SKILL.md` — authoritative behavior, KERNEL checks, decision rules, and response states.
  - `EXAMPLE.md` — illustrative outputs and the observable boundaries they preserve.
  - `REFORMULATIONS.md` — meaning-preserving repairs and counterexamples.

The skill is **model-invoked**: any agent (Claude Code, Codex, OpenCode) can reach for it when the task fits, and a user can also call it directly. It has no `disable-model-invocation` flag — that's deliberate.

## Conventions

- Git stores `AGENTS.md` as a symlink to `CLAUDE.md`. Filesystems without symlink support may check it out as pointer text; read `CLAUDE.md` directly there.
- Keep `@codegiveness/kernel-prompt`, the `kernel-prompt` skill name, and `skills/kernel-prompt/` consistent across distribution metadata.
- The skill ships as prose. Installation uses `npx skills@latest add codegiveness/kernel-prompt`; there is no repository-specific runtime or installer.
- Keep installation verification isolated from the maintainer's installed skills. The Skills CLI owns agent-specific destinations and installation behavior.

## Maintenance

When changing `SKILL.md`, keep `EXAMPLE.md`, `REFORMULATIONS.md`, `CONTEXT.md`, the README, and `docs/kernel-prompt.md` aligned. Do not revive the former mandatory one-paragraph output, exhaustive visible audit, arbitrary constraints, or invented grounding. Run live-model smoke scenarios for behavioral changes; examples illustrate a contract but are not proof that every model follows it.

For skill audits, improvements, and reassessments, follow `docs/consumer-audit.md` and consult `docs/improvement-history.md`. Score only LLM consumer usefulness, not documentation quality, installer checks, or research rigor. Preserve the assessed skill and relevant inputs/outputs as documented; historical scores are context, not targets. Audit records are maintainer-only and must not be added to the runtime skill's context.

The `version` field in `.claude-plugin/plugin.json` must stay in sync with `package.json`'s `version` — the plugin uses it to decide when installed users see an update.

Run `npm ci`, `npx skills@latest add . --list`, and `npm pack --dry-run`. On a filesystem without executable-symlink support, use `npm ci --no-bin-links`. Smoke-test local installation with the Skills CLI in a disposable project, checking all three installed files against the source; never install into the maintainer's real global skills for verification.

Use the existing [distribution ADR](.agents/adr/0001-ship-as-installable-npm-prose.md), [domain vocabulary](CONTEXT.md), and [scope boundaries](.out-of-scope/README.md). Keep unreleased changes in `CHANGELOG.md`; do not publish, tag, or push without authorization.
