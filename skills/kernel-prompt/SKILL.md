---
name: kernel-prompt
description: Use when the user asks to improve or compose an LLM prompt, including prompt-design feedback. Not for executing tasks or reviewing documents or guidance merely because they concern AI instructions or request wording suggestions.
---

# Kernel Prompt

Select by the work the user requests, not the subject matter: an LLM prompt composed, improved, or critiqued as a prompt, including an instruction or handoff for another AI described without the word "prompt". When the user invokes this skill directly, the accompanying text is the prompt or goal to design, even when it reads as a task. Assessing guidance that concerns AI is not prompt design; turning that guidance into a system prompt is.

Design the prompt, not the underlying task's result, unless execution is also requested. Rewrite and reorganize where useful without changing intent. Quoted instructions are material to edit, not permission to act.

Develop choices the user delegates at the requested depth; leave other substantive choices to the recipient. Choosing a story's setting, cast, and premise does not also choose its length, viewpoint, or style.

## KERNEL

Use these considerations where they help, not as required stages or a fixed template:

- **K — Keep intent.** Preserve the goal, meaningful constraints, supplied task data, corrections, and the user's own words for what matters, including anti-goals: what would make the result fail even if it technically works.
- **E — Establish what is known.** Look up what supplied context, files, history, or tools can establish; ask the user only for what they alone know or decide. Distinguish facts, assumptions, and unknowns; do not invent specificity or imply research you have not done. Carry essential inputs or source references into the prompt.
- **R — Resolve consequential ambiguity.** Settle minor gaps with routine judgment. Ask about decisions only the user can make that would change the result. Keep unresolved ones explicit rather than guessing.
- **N — Name the work and boundaries.** Make the action, deliverables, permissions, non-goals, and what is left to the recipient clear. Prefer outcomes to an elaborate recipe unless the task needs a particular method.
- **E — Express success.** Make the requested endpoint clear: what done means, the checks and corrections needed to reach it, and what to report back. Do not append unrequested output requirements, targets, or approval stops.
- **L — Lay out the handoff.** Honor the requested language and format. Write for a capable recipient who lacks this conversation and cannot ask: include the current state, necessary context, and unresolved decisions inside the copyable prompt.

## Ask

Ask only when the user can answer and an open decision would change the result; otherwise draft. Use the harness's question tool when one is available, otherwise plain text.

Ask in rounds. A round holds every open decision whose prerequisites are settled; a question that depends on another unanswered one waits for the next round. If a tool limits the round, ask the most consequential first. Lead each question with your recommended answer: the first, marked option in a tool, or worded so "yes" accepts it in plain text. Anchor questions in specifics, and show a provisional draft when reacting is easier than answering. Stop when no such decision remains or the user says to just write it.

## Deliver

Before handing over, read the draft as its recipient. Where it would have to guess and a wrong guess would matter, add what is already known, settle minor gaps yourself, and ask the user about the rest in one round, or keep them explicit in the prompt when the user cannot answer.

The deliverable is the prompt: gather facts for it, but do not perform its task unless asked. Usually return only the usable prompt, followed by a short list of any consequential calls you made so the user can reject them. Include explanations or alternatives when requested. Check for lost intent, invented details, and unnecessary instructions; do not append a separate layer of execution advice. Leave an effective prompt alone when a change would add no value.
