# Kernel Prompt

`kernel-prompt` is a small, harness-neutral prose skill for improving an existing prompt or composing one from a goal. It rewrites and reorganizes where useful while preserving intent. It designs the prompt, not the underlying task's result.

Select it for requested prompt design, including prompt-design feedback or instructions to hand off to another AI. Reviewing documents or collaboration guidance—even with wording suggestions—is not by itself a match. Asking to turn that guidance into a system prompt is.

## Use it

In an LLM chat, provide the contents of [SKILL.md](skills/kernel-prompt/SKILL.md) as guidance alongside your request. No installation is needed. With the skill available, ask:

```text
Use kernel-prompt to improve this request:
[your goal or draft, with relevant context and constraints]
```

Expect a usable prompt, focused questions when a decision matters, or a draft with explicit unknowns when answers are unavailable. Ask for explanations or alternatives when wanted.

## The idea

A kernel makes the intended outcome, relevant context, boundaries, and completion conditions clear. Add detail where it helps the task; leave unassigned execution choices open.

**KERNEL** is a mnemonic, not a mandatory sequence or template:

- **K**eep intent.
- **E**stablish what is known.
- **R**esolve consequential ambiguity.
- **N**ame the work and boundaries.
- **E**xpress success.
- **L**ay out the handoff.

The guiding reference is OpenAI's [Rethinking skills and prompts for GPT-6 Astra](https://developers.openai.com/blog/rethinking-skills-and-prompts-for-gpt-6-astra). Revisit accumulated instructions, avoid unnecessary recipes, and adapt guidance to the task and model. The article's model-specific advice is not a universal rule; clearer prompts do not guarantee correct answers.

## Optional installation

For harnesses supporting [Agent Skills](https://agentskills.io/specification), install with the [Skills CLI](https://github.com/vercel-labs/skills):

```bash
npx skills@latest add codegiveness/kernel-prompt
```

Choose the harness and installation scope when prompted. Add `--copy` if symlinks are unsupported. To install this working copy instead of the GitHub revision, run `npx skills@latest add .` from the repository root.

You can also copy `skills/kernel-prompt/` into your harness's skill location. Only `SKILL.md` is needed. The skill has no application runtime, build step, or project dependencies; the optional installer is external tooling.

## Retired npm distribution

The [npm package](https://www.npmjs.com/package/@codegiveness/kernel-prompt) is retired. Use the current [SKILL.md](skills/kernel-prompt/SKILL.md) directly or follow [Optional installation](#optional-installation); neither route requires this npm package.

All published versions (0.1.0, 0.1.1, 0.1.2, 0.1.3, and 0.2.0) are deprecated with a migration notice, not unpublished. They remain downloadable and installable, and existing version pins remain usable. They contain historical skill content, not the current Git revision.

To migrate, replace only your existing Kernel Prompt skill with `skills/kernel-prompt/SKILL.md`, preserving local edits and unrelated instructions. If you used the old npm CLI, switch to direct use or the Skills CLI instructions above; do not rely on the retired npm install/update commands for current content. Deprecation does not remove installed files or update copied instructions.

Retirement is a distribution decision, not a claim that nobody uses the package. The [npm downloads API](https://api.npmjs.org/downloads/point/2026-08-14:2026-09-12/@codegiveness%2Fkernel-prompt) reported 36 downloads for August 14–September 12, 2026. Downloads do not identify unique users or active installations, and public dependency/code searches cannot exclude direct installs or private consumers.

The npm manifests and publishing workflow have been removed from this checkout. No replacement npm release is planned; historical packages and release history remain available.

[MIT license](LICENSE)
