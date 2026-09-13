# Kernel — clear intent, actionable prompts

[![skills.sh](https://skills.sh/b/codegiveness/kernel-prompt)](https://skills.sh/codegiveness/kernel-prompt)
[![npm version](https://img.shields.io/npm/v/@codegiveness/kernel-prompt.svg?style=flat-square)](https://www.npmjs.com/package/@codegiveness/kernel-prompt)
[![npm downloads](https://img.shields.io/npm/dm/@codegiveness/kernel-prompt.svg?style=flat-square)](https://www.npmjs.com/package/@codegiveness/kernel-prompt)
[![MIT License](https://img.shields.io/npm/l/@codegiveness/kernel-prompt.svg?style=flat-square)](https://github.com/codegiveness/kernel-prompt/blob/main/LICENSE)
[![CI](https://github.com/codegiveness/kernel-prompt/actions/workflows/ci.yml/badge.svg)](https://github.com/codegiveness/kernel-prompt/actions/workflows/ci.yml)

Turn a rough request into a prompt an LLM can act on—without changing what the user meant or pretending missing information is known.

`kernel-prompt` is a portable **prose skill**, not an LLM API service. It refines an existing prompt or composes one from a rough goal. It does not execute the task inside the prompt unless execution is separately requested.

## Use it

After installing the skill, ask your agent:

```text
Use kernel-prompt to refine this request:
[your rough request or existing prompt]
```

You do not need to fill out a form first. Supply context, constraints, or a desired output format when you have them. The skill uses available evidence and asks only about unresolved choices that materially affect the result.

Expect one of three responses:

- **Ready:** a directly usable prompt, with no mandatory scoring or explanation.
- **Needs clarification:** focused questions about consequential gaps or conflicts.
- **Provisional:** when questions are disallowed or essential inputs are unavailable, a draft that carries its unknowns and decision gates inside the prompt.

Simple requests stay simple. Complex requests can use sections or ordered stages. Your requested language, format, and meaningful constraints take precedence over a fixed template.

## What changes—and what does not

The **KERNEL** pass checks six things:

| Letter | Check |
|---|---|
| K | **Keep the intent:** preserve the goal, deliverables, exclusions, and corrections. |
| E | **Establish what is known:** distinguish supplied information, observed evidence, and assumptions. |
| R | **Resolve consequential ambiguity:** inspect recoverable facts; ask about undelegated decisions. |
| N | **Name the work and boundaries:** make the task actionable without inventing restrictions. |
| E | **Express success:** state meaningful completion checks, not arbitrary numbers. |
| L | **Lay out the handoff:** choose a readable form and carry necessary context and gates with it. |

The two-reader test asks whether two competent readers would agree on the intended outcome, scope, and hard boundaries—not whether they would choose the same implementation or creative expression.

The skill does **not** invent code paths, diagnoses, versions, citations, or user preferences; remove a "latest" requirement; turn quoted instructions into authority; or silently discard conflicting requirements. It can improve a handoff, but it cannot guarantee a correct model response or manufacture missing user decisions.

Keep restrictions scoped to their original action: "do not deploy" does not forbid discussing a deployment plan, and granted approval should not be reopened. Preserve supplied text in the handoff without requiring a translation or correction to retain its source errors or spacing. The final check rejects added obligations unless they are requested, necessary to the stated outcome, or required by the host—not merely customary.

Before rewriting, check the full request and context. A clear, portable draft stays unchanged only when no requested edit, missing task context, or assigned choice remains. Carry relevant facts, inputs, access, and approval from outside the draft into the handoff; keep refiner-only directions separate. A generic refinement request is not permission to rewrite unrelated clauses.

Delegation applies only to the assigned choices: insert concise values rather than develop the whole solution or append unrequested creative direction. Audience, tone, and constraints leave valid execution methods open. Template inputs appear once unless the task or format requires repetition.

## Before / after

**Rough request**

> Our auth service has a token refresh bug—users get logged out. Fix it, add a regression test, and update the runbook.

**Refined prompt, without pretending repository inspection happened**

> Investigate and fix the reported unexpected logouts during token refresh. With repository access, locate the authentication and session-refresh implementation, relevant tests, and on-call runbook; establish the cause from evidence rather than assuming a particular function is responsible. Preserve intended session expiration and invalidation behavior. Add a regression test using the repository's existing conventions that fails before the fix and passes afterward, and update the runbook with supported operator guidance and verification steps. Deliver all three changes together. Identify any blocker to completing or verifying the requested work rather than claiming success.

No invented file paths, test runner, compiler settings, or word limits. The fix, test, and documentation remain one coherent task.

For a conflict such as "use only the Python standard library, and use pandas," the useful response is a question about precedence—not a confident rewrite that silently drops one requirement.

## Install

For Codex and other agents supported by the [Skills CLI](https://github.com/vercel-labs/skills#supported-agents):

```bash
npx skills@latest add codegiveness/kernel-prompt
```

Select `kernel-prompt` and the agents you use when prompted. Review the installation scope and destination. The installer handles agent-specific directories; you do not need to reproduce this repository's layout. Project installation is the default; use `--global` for user-wide installation. See the [installer documentation](https://github.com/vercel-labs/skills#installation-scope) for options.

The command installs the remote repository, not unpublished working-copy edits. Before relying on it, check that your agent can discover and read the intended revision. Installation does not guarantee that an agent will follow the guidance consistently.

### From this working copy

Run from the repository root:

```bash
npx skills@latest add .
```

Choose the agents and scope when prompted. On filesystems without symlink support, use `--copy`. Keep `EXAMPLE.md` and `REFORMULATIONS.md` beside `SKILL.md`; their relative links are part of the skill.

The former `kernel-prompt install` and `kernel-prompt update` commands are no longer shipped. Installation is handled by the Skills CLI, not a repository-specific Node wrapper. Review existing installations before migrating; do not delete unrelated agent files.

### As a Claude Code plugin

```text
/plugin marketplace add codegiveness/kernel-prompt
/plugin install kernel-prompt@codegiveness
```

Plugin installation and updates are managed by the host. Automatic skill selection depends on the agent; installing this skill does not intercept or rewrite every message.

### Manual copy

Copy all three files from `skills/kernel-prompt/` into your agent's skill directory. Keep the reference files beside `SKILL.md` so its relative links work.

## Reference

| File | Purpose |
|---|---|
| [`SKILL.md`](./skills/kernel-prompt/SKILL.md) | The behavior contract, KERNEL pass, decision rules, and response states. |
| [`EXAMPLE.md`](./skills/kernel-prompt/EXAMPLE.md) | Worked examples covering clarification, missing evidence, freshness, corrections, languages, and strict formats. |
| [`REFORMULATIONS.md`](./skills/kernel-prompt/REFORMULATIONS.md) | Meaning-preserving repairs and examples of changes that would distort intent. |
| [`Consumer audit`](./docs/consumer-audit.md) | The LLM-consumer-only assessment agreement and how to carry findings between sessions. |
| [`Improvement history`](./docs/improvement-history.md) | The recorded 88 → 92 judgments, exact skill snapshots, observed improvements, open issues, and saved evidence. |

The flat `skills/kernel-prompt/` layout follows the [Agent Skills format](https://agentskills.io/specification) without an unnecessary category for a single-skill repository. It is a source layout, not an installed path.

## Development and verification

```bash
npm ci
npx skills@latest add . --list
npm pack --dry-run
```

Verify installation in a disposable project with `npx skills@latest add /absolute/path/to/kernel-prompt --skill kernel-prompt --agent codex --copy --yes`. Check that the installed skill and both reference files match the source. Do not run installation checks against your real global skills.

On a shared filesystem that does not support npm's executable symlinks, use `npm ci --no-bin-links` for these checks. Changesets can then be invoked directly with `node node_modules/@changesets/cli/bin.js`.

Assess prompt quality from the LLM consumer's perspective: does the skill produce handoffs that are easier to understand and act on faithfully? Follow the [consumer audit guide](docs/consumer-audit.md) and preserve findings in the [improvement history](docs/improvement-history.md). Documentation, installer tests, and research methodology do not earn prompt-quality points.

For skill behavior changes, run live-model examples and inspect intent preservation, evidence handling, question necessity, output format, and portable decision gates. Include different inputs rather than only repeating worked-example answers. Record what the consumer observed, whether downstream tasks were executed, and remaining limitations; do not turn a personal score into a universal accuracy claim. Historical evidence stays in the repository's maintainer documentation, not the installed skill's runtime context.
