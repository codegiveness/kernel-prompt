# 0001 — Ship the skill as installable npm prose, not a compiled binary

**Date**: 2026-07-25
**Status**: Accepted; installation mechanism revised 2026-09-13

## Context

`kernel-prompt` is a prompt-engineering skill whose entire behaviour is prose — `SKILL.md`, `EXAMPLE.md`, and `REFORMULATIONS.md`. There is no runtime code, no native module, and no platform-specific behaviour. The reference release flow (umans-gate) compiles a Bun binary for six platform targets and publishes a main shim plus per-platform packages — that machinery is pure overhead for prose.

## Decision

Ship the skill as prose **files**, not a compiled binary. The canonical source is `skills/kernel-prompt/`, matching the flat single-skill layout of `codegiveness/shared-understanding`. Install with `npx skills@latest add codegiveness/kernel-prompt`; the Skills CLI handles agent-specific destinations. `package.json` retains npm distribution of `skills/`, `README.md`, `LICENSE`, and `CHANGELOG.md`, without a `bin` entry. There is no build step, platform matrix, or repository-specific installer.

## Consequences

- The skill and its two reference files stay together so relative links work.
- Skills CLI discovery and isolated local installation verify the source layout; `npm pack --dry-run` verifies the npm payload.
- The former Node install/update wrapper and its helper scripts and regression tests are removed. Installation behavior belongs to the external Skills CLI.
- Existing Claude Code plugin metadata points to the same canonical skill. GitHub Actions retains npm prose publication on `v*` tags.
- The npm token (`secrets.NPM_TOKEN`) is deferred — CI references it as a placeholder secret to be added before the first real publish.
