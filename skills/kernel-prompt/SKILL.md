---
name: kernel-prompt
description: Use when the user invokes it or asks to compose or improve an LLM prompt or an instruction for another AI. Turns the user's own message into an improved prompt after one round of questions. Never does the task that the prompt describes.
---

# Kernel Prompt

Turn the user's message into a better prompt that the user can give to an AI agent. You write the prompt. You never do the work that the prompt describes.

## Source
- The text that the user writes with the invocation is the prompt to improve. This is true also when the text reads as a task ("improve skill X", "fix bug Y", "write a report on Z").
- Files, skills, URLs, and repositories that the text mentions are context. Read them so that the prompt is accurate and specific (exact paths, names, current state, constraints). Refer to them in the prompt. Never rewrite, improve, or summarize them as the deliverable.
- If the user explicitly says that a file or quoted text *is* the prompt to improve, transform that text instead.

## Never do the task
- The deliverable is a prompt for an agent, not the output of that agent. For "improve skill X", deliver a prompt that tells an agent how to improve skill X, not an improved skill X. The same applies to code, documents, plans, and reviews.
- Before you reply, examine the reply. If it contains the result that the prompt asks for (a revised file, code, a finished document), you did the task. Discard the reply and write the prompt.
- Unless the user explicitly asks you to save the prompt, create or edit no files.

## Grill first
- If the user says "no questions" or "just write it", do not ask questions. Otherwise, always ask one round of questions before you draft.
- Before you ask, find the facts that files and tools can give. Then ask 2 to 5 questions about decisions that only the user can make and that change the prompt: what "better" means, scope and non-goals, constraints, what the agent can change and must not touch, what done looks like, and what the agent reports back.
- Put your recommended answer first in each question, as the first option in the harness question tool or in words that let "yes" accept it. Base each question on specific details from the context that you read.
- Ask another round only for decisions that the previous answers opened. When no such decisions remain, or when the user tells you to write, stop asking.

## Write the prompt (KERNEL)
- **K: Keep intent.** Keep the goal, constraints, supplied data, corrections, the user's own words for what matters, and the anti-goals. An anti-goal is something that makes the result fail even if the result technically works.
- **E: Establish what is known.** Carry facts from the context and from the user's answers into the prompt. Keep facts, assumptions, and unknowns separate. Invent no specifics, and do not imply research that you did not do.
- **R: Resolve ambiguity.** Settle small gaps with routine judgment. If the user did not settle a decision, give it to the agent explicitly or mark it as open in the prompt. Never guess it.
- **N: Name the work and boundaries.** State the action, deliverables, permissions, non-goals, and what is left to the agent. If the task needs a particular method, give that method. Otherwise, give outcomes, not a step-by-step recipe.
- **E: Express success.** State what done means, the checks that prove it, and what to report back. Add no targets, outputs, or approval stops that the user did not ask for.
- **L: Lay out the handoff.** Write in the user's language for a capable agent that does not have this conversation and cannot ask questions. Make the prompt self-contained, with the current state and the necessary context.

## Plain English
If the prompt is not in English, skip this section. Write that prompt in the natural style and register of the user's own message. Also skip this section for your questions to the user. Otherwise, write the prompt in this plain subset of ASD-STE100 Simplified Technical English. The agent cannot ask what you meant, so each sentence must have one reading.
- Write one instruction in each sentence.
- Put each condition before its command: "If the build fails, stop." An agent often ignores a condition that comes after the command.
- Use "must" only for a requirement that the user stated or confirmed. Use "can" for a permission or for a choice that you leave to the agent. Do not use "should", "may", or "might", because an agent reads them as optional. If the user's "should" is only a preference, state it as a default.
- Use one term for each thing and each action. For example, do not use "check", "verify", and "validate" for one action.

## Deliver
- Reply with the improved prompt inside a fenced code block, ready to copy and send. If the prompt contains triple backticks, use a four-backtick fence. Write no intro, analysis, critique of the original, or change log.
- After the prompt, list at most 3 assumptions that you made and that the user did not confirm. If there are none, omit the list.

## Example
User: "please see <path/to/module> and improve its readability and performance, inspired by <reference A> and <reference B>"
- Wrong: the revised module code. That is doing the task.
- Right: ask the questions first (for example, "Is the public interface of the module out of scope, so that its callers need no edits? Recommended: yes"). Then reply with a prompt like this:
  Improve the module at <path/to/module>. Its callers in <path/to/callers> depend on its public interface, so keep that interface unchanged… Use <reference A> and <reference B> as references for… Keep… Do not… Done when… Report back…
