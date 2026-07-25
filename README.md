# Kernel — a prompt stripped to what works

[![skills.sh](https://skills.sh/b/codegiveness/kernel-prompt)](https://skills.sh/codegiveness/kernel-prompt)
[![npm version](https://img.shields.io/npm/v/@codegiveness/kernel-prompt.svg?style=flat-square)](https://www.npmjs.com/package/@codegiveness/kernel-prompt)
[![npm downloads](https://img.shields.io/npm/dm/@codegiveness/kernel-prompt.svg?style=flat-square)](https://www.npmjs.com/package/@codegiveness/kernel-prompt)
[![MIT License](https://img.shields.io/npm/l/@codegiveness/kernel-prompt.svg?style=flat-square)](https://github.com/codegiveness/kernel-prompt/blob/main/LICENSE)
[![CI](https://github.com/codegiveness/kernel-prompt/actions/workflows/ci.yml/badge.svg)](https://github.com/codegiveness/kernel-prompt/actions/workflows/ci.yml)
[![CodeQL](https://github.com/codegiveness/kernel-prompt/actions/workflows/codeql.yml/badge.svg)](https://github.com/codegiveness/kernel-prompt/actions/workflows/codeql.yml)

Six cuts that turn a vague request into a prompt that lands on first try.

## Quickstart (30-second setup)

1. Run the skills.sh installer:

```bash
npx skills@latest add codegiveness/kernel-prompt
```

2. Pick the skill, and which coding agent you want to install it on (Claude Code, Codex, OpenCode, or others).

3. Bam — you're ready to go. The skill is prose; nothing compiles.

## Install via npm

Prefer a managed npm install you control by hand?

```bash
npm install -g @codegiveness/kernel-prompt
kernel-prompt install   # symlinks the skill into ~/.claude/skills and ~/.agents/skills
```

Or copy the three files from `skills/engineering/kernel-prompt/` into your project's skill directory — the skill is prose, nothing compiles.

To stay current:

```bash
kernel-prompt update    # npm install -g @codegiveness/kernel-prompt@latest
```

## Install as a Claude Code plugin

This skill also ships as a native Claude Code plugin:

```
/plugin marketplace add codegiveness/kernel-prompt
/plugin install kernel-prompt@codegiveness
```

Or from your shell:

```bash
claude plugin marketplace add codegiveness/kernel-prompt
claude plugin install kernel-prompt@codegiveness
```

Three ways to install, three philosophies:

- **[skills.sh](https://skills.sh/codegiveness/kernel-prompt)** copies the skill into your project so you can hack on it and make it your own.
- **npm** installs the managed package globally and symlinks it into every agent harness you use.
- **The plugin** keeps it as a read-only, always-current bundle you don't edit — best when you just want the skill to work and follow along as it evolves.

## Why This Skill Exists

> "No-one knows exactly what they want."
>
> David Thomas & Andrew Hunt, [The Pragmatic Programmer](https://www.amazon.co.uk/Pragmatic-Programmer-Anniversary-Journey-Mastery/dp/B0833F1T3V)

Every prompt-engineering failure mode traces back to one root cause: the request was vague. The agent filled the vagueness with its own priors, the priors were wrong, and the output missed. The fix is not a longer prompt — it is a tighter one. A prompt where every clause passes a two-reader test: would two different readers produce outputs matching in type and scope?

> "The best modules are deep. They allow a lot of functionality to be accessed through a simple interface."
>
> John Ousterhout, [A Philosophy Of Software Design](https://www.amazon.co.uk/Philosophy-Software-Design-2nd/dp/173210221X)

`kernel-prompt` is a deep module. Its interface is one paragraph; its behaviour is a six-letter pass — **K**eep it simple, **E**asy to verify, **R**eproducible, **N**arrow scope, **E**xplicit constraints, **L**ogical structure — plus an exhaustive vague-phrasing sweep. That paragraph carries five substances as flowing prose: **context** (grounded codebase symbols), **task** (the operation to perform), **constraints** (type, scope, limits), **format** (the deliverable shape), and **verify** (a checkable success criterion). You hand it a vague request, it returns a paragraph that lands. The simplicity is the point — the depth is in the cuts.

> "With a ubiquitous language, conversations among developers and expressions of the code are all derived from the same domain model."
>
> Eric Evans, [Domain-Driven Design](https://www.amazon.co.uk/Domain-Driven-Design-Tackling-Complexity-Software/dp/0321125215)

The pass grounds vague terms to concrete codebase symbols before it writes. "The auth service" becomes `refreshToken (src/auth/tokens.ts:42)`. The paragraph carries the grounded vocabulary, not the user's original phrasing — so two readers see the same code, not the same ambiguity.

The skill is model-invoked: any agent can reach for it when the task fits, and a user can call it directly. It has no `disable-model-invocation` flag — that's deliberate. A kernel'd prompt is the input every other skill wants.

## Before / after

**Vague input:**

> Our auth service has a token refresh bug — users get logged out. Fix it, add a test that catches the regression, and update the runbook so on-call knows what to do.

**Kernel'd output (one paragraph):**

> `refreshToken` (src/auth/tokens.ts:42) drops sessions on token refresh, breaking `TokenStore` (src/auth/store.ts:15); patch `refreshToken` so it stops dropping sessions on refresh failure, add a `bun test` regression that fails before the fix and passes after, and update `docs/runbooks/auth.md` with Symptom, Cause, Fix, and Verification sections (under 200 words each), shipping as one PR — TypeScript strict, no `as any`.

The vague input names no symbols; the output grounds every term in a file and function, attaches a checkable success criterion, and carries its constraints inline. That's one pass — six cuts, one sweep, one paragraph.

## Reference

The skill splits on one axis — who can invoke it. **User-invoked** skills are reachable only when you type them; their job is to orchestrate. **Model-invoked** skills can be invoked by you _or_ reached for automatically by the agent when the task fits; they hold the reusable discipline. `kernel-prompt` is model-invoked.

| Skill | Invocation | Description |
|---|---|---|
| [kernel-prompt](./skills/engineering/kernel-prompt/SKILL.md) | Model-invoked | Kernel a prompt — refine or compose it into one paragraph that lands on first try. |

### Files

| File | Purpose |
|---|---|
| [`SKILL.md`](./skills/engineering/kernel-prompt/SKILL.md) | The KERNEL pass — six cuts (K-E-R-N-E-L) and the vague-phrasing sweep |
| [`EXAMPLE.md`](./skills/engineering/kernel-prompt/EXAMPLE.md) | A full disclosed pass: grounding, combining, six letters, sweep with per-clause verdicts |
| [`REFORMULATIONS.md`](./skills/engineering/kernel-prompt/REFORMULATIONS.md) | Seven named patterns for repairing clauses that fail the two-reader test |
