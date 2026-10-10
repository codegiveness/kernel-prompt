# Kernel Prompt

`kernel-prompt` is a small, harness-neutral prose skill for improving an existing prompt or composing one from a goal. It rewrites and reorganizes where useful while preserving intent. It designs the prompt, not the underlying task's result.

Select it for requested prompt design, including prompt-design feedback or instructions to hand off to another AI. Reviewing documents or collaboration guidance—even with wording suggestions—is not by itself a match. Asking to turn that guidance into a system prompt is.

## Use it

In an LLM chat, provide the contents of [SKILL.md](skills/kernel-prompt/SKILL.md) as guidance alongside your request. No installation is needed. With the skill available, ask:

```text
Use kernel-prompt to improve this request:
[your goal or draft, with relevant context and constraints]
```

Expect a usable prompt, a short round of questions when a decision only you can make matters, or a draft with explicit unknowns when answers are unavailable. Invoking the skill with text that reads as a task—"fix the failing login test"—yields a prompt for that task, not the fix. Questions use the harness's question tool when one exists, each led by a recommended answer. Ask for explanations or alternatives when wanted.

## The idea

A kernel makes the intended outcome, relevant context, boundaries, and completion conditions clear. Add detail where it helps the task; leave unassigned execution choices open. Facts are looked up, not asked; only decisions the user alone can make become questions. Before handing over, the draft is read as its recipient would read it—capable, without the conversation, unable to ask.

**KERNEL** is a mnemonic, not a mandatory sequence or template:

- **K**eep intent.
- **E**stablish what is known.
- **R**esolve consequential ambiguity.
- **N**ame the work and boundaries.
- **E**xpress success.
- **L**ay out the handoff.

The guiding reference is OpenAI's [Rethinking skills and prompts for GPT-6 Astra](https://developers.openai.com/blog/rethinking-skills-and-prompts-for-gpt-6-astra). Revisit accumulated instructions, avoid unnecessary recipes, and adapt guidance to the task and model. The article's model-specific advice is not a universal rule; clearer prompts do not guarantee correct answers.

The questioning adapts Matt Pocock's [grilling](https://github.com/mattpocock/skills/tree/main/skills/productivity/grilling) (rounds of independent decisions with recommended answers; facts versus decisions) and the recipient check adapts the builder check in obra's [brainstorming](https://github.com/obra/superpowers/tree/main/skills/brainstorming), scaled down so a clear request gets no questions.

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

Then copy `node_modules/@codegiveness/kernel-prompt/skills/kernel-prompt/` into your harness's skill location. Releases are staged with `npm stage publish` and go live only after a maintainer approves them with two-factor authentication.

Versions 0.1.0 through 0.2.0 remain deprecated: they carry historical skill content, and 0.1.x also shipped an `install`/`update` CLI that no longer exists. Replace only your existing Kernel Prompt skill with the current `SKILL.md`, preserving local edits and unrelated instructions; deprecation does not remove installed files or update copied instructions.

[MIT license](LICENSE)
