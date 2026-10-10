# Kernel Prompt

`kernel-prompt` is a small, harness-neutral prose skill that turns your message—a draft prompt or a task you want an AI agent to do—into an improved prompt for that agent. It asks one round of questions first, then writes the prompt while preserving your intent. It writes the instruction, never the task's result.

Select it when you invoke it by name or ask to compose or improve an LLM prompt or an instruction for another AI. Reviewing documents or collaboration guidance—even with wording suggestions—is not by itself a match. Asking to turn that guidance into a system prompt is.

## Use it

In an LLM chat, provide the contents of [SKILL.md](skills/kernel-prompt/SKILL.md) as guidance alongside your request. No installation is needed. With the skill available, ask:

```text
Use kernel-prompt to improve this request:
[your goal or draft, with relevant context and constraints]
```

Expect one round of two to five questions before any draft, each led by a recommended answer and using the harness's question tool when one exists. Say "no questions" or "just write it" to skip them. A further round comes only for decisions your answers opened. The reply is the prompt alone, inside a fenced code block ready to copy and send (a four-backtick fence when the prompt itself contains triple backticks), followed by at most three assumptions you did not confirm; decisions you left unsettled are delegated to the agent or marked open in the prompt, never guessed.

Invoking the skill with text that reads as a task—"fix the failing login test"—yields a prompt for that task, not the fix. Files, skills, URLs, and repositories you mention are read as context for the prompt, not rewritten as the deliverable, unless you say that text is the prompt to improve. No files are created or edited unless you ask to save the prompt.

## The idea

A kernel makes the intended outcome, relevant context, boundaries, and completion conditions clear. Add detail where it helps the task; leave unassigned execution choices open. Facts are looked up, not asked; only decisions the user alone can make become questions. The prompt is written for its recipient—a capable agent without the conversation, unable to ask—and checked before replying so it holds the instruction, not the task's result.

**KERNEL** is a mnemonic, not a mandatory sequence or template:

- **K**eep intent.
- **E**stablish what is known.
- **R**esolve ambiguity.
- **N**ame the work and boundaries.
- **E**xpress success.
- **L**ay out the handoff.

The guiding reference is OpenAI's [Rethinking skills and prompts for GPT-6 Astra](https://developers.openai.com/blog/rethinking-skills-and-prompts-for-gpt-6-astra). Revisit accumulated instructions, avoid unnecessary recipes, and adapt guidance to the task and model. The article's model-specific advice is not a universal rule; clearer prompts do not guarantee correct answers.

The questioning adapts Matt Pocock's [grilling](https://github.com/mattpocock/skills/tree/main/skills/productivity/grilling) (rounds of independent decisions with recommended answers; facts versus decisions) and the recipient framing adapts the builder check in obra's [brainstorming](https://github.com/obra/superpowers/tree/main/skills/brainstorming), scaled down to one round before drafting unless you skip it.

## Optional installation

For harnesses supporting [Agent Skills](https://agentskills.io/specification), install with the [Skills CLI](https://github.com/vercel-labs/skills):

```bash
npx skills@latest add codegiveness/kernel-prompt
```

Choose the harness and installation scope when prompted. Add `--copy` if symlinks are unsupported. To install this working copy instead of the GitHub revision, run `npx skills@latest add .` from the repository root.

You can also copy `skills/kernel-prompt/` into your harness's skill location. Only `SKILL.md` is needed. The skill has no application runtime, build step, or project dependencies; the optional installer is external tooling.

## npm package

The skill is also published as [`@codegiveness/kernel-prompt`](https://www.npmjs.com/package/@codegiveness/kernel-prompt). The package contains only the skill files, with the skill at `skills/kernel-prompt/SKILL.md`; it has no CLI or runtime. Use it when you want a versioned, pinnable copy:

```bash
npm install @codegiveness/kernel-prompt
```

Then copy `node_modules/@codegiveness/kernel-prompt/skills/kernel-prompt/` into your harness's skill location. Releases are staged with `npm stage publish` and go live only after a maintainer approves them with two-factor authentication; [RELEASING.md](RELEASING.md) lists the full release workflow.

Versions 0.1.0 through 0.2.0 remain deprecated: they carry historical skill content, and 0.1.x also shipped an `install`/`update` CLI that no longer exists. Replace only your existing Kernel Prompt skill with the current `SKILL.md`, preserving local edits and unrelated instructions; deprecation does not remove installed files or update copied instructions.

[MIT license](LICENSE)
