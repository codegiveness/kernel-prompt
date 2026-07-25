# 0001 — Ship the skill as installable npm prose, not a compiled binary

**Date**: 2026-07-25
**Status**: Accepted

## Context

`kernel` is a prompt-engineering skill whose entire behaviour is prose — `SKILL.md`, `EXAMPLE.md`, and `REFORMULATIONS.md`. There is no runtime code, no native module, and no platform-specific behaviour. The reference release flow (umans-gate) compiles a Bun binary for six platform targets and publishes a main shim plus per-platform packages — that machinery is pure overhead for prose.

## Decision

Ship the skill as installable npm **files**, not a compiled binary. `package.json`'s `files` array lists `skills/`, `bin/`, `README.md`, `LICENSE`, and `CHANGELOG.md` — npm publishes exactly those. There is no build step, no platform matrix, and no per-platform package.

## Consequences

- `npm install` delivers the Markdown directly; there is nothing to compile.
- `npm publish --dry-run` resolves without error as long as `package.json` is valid and the `files` array points at real paths.
- The `bin` entry (`kernel-skill`) is a tiny Node script for `install` / `update` — it is not the skill itself. The skill is the Markdown.
- We keep the umans-gate release flow (GitHub Actions auto-publish on `v*` tag) but drop the platform-binary matrix entirely.
- The npm token (`secrets.NPM_TOKEN`) is deferred — CI references it as a placeholder secret to be added before the first real publish.
