# Reformulations

Use these repairs with [the KERNEL pass](SKILL.md) when wording leaves a consequential ambiguity. A repair must preserve the requested operation and meaning. It is not permission to invent an audience, count, role, constraint, diagnosis, or goal.

First check the full request and applicable context, not just the quoted draft. An already-clear, portable prompt should remain unchanged when no specific edit or assigned choice remains. Integrate missing task context and make requested changes without rewriting unrelated clauses. A generic request to improve wording does not authorize developing the underlying task or filling choices left to the executor.

Examples below are illustrative inputs, not facts about the user's task. Bracketed values are placeholders for a requested template or information that must be supplied; never present them as established facts.

## Repair patterns

| Problem | Repair | Boundary |
|---|---|---|
| A pronoun or label has several plausible referents | **Name the referent:** replace it with the supplied object, document, or verified symbol. | If evidence cannot identify it, ask or instruct the executor to locate it. Do not fabricate a path. |
| A verb leaves the requested operation unclear | **Name the operation:** distinguish explain, summarize, compare, investigate, edit, implement, and recommend. | Preserve an operation already specified. "Explain" is not "act as an expert"; "tips" is not "challenge my idea." |
| The same output would not serve different audiences | **Identify the recipient:** use the known audience and its relevant needs. | Ask only when the missing audience materially changes the task. Do not invent a persona. |
| A quality word hides a consequential preference | **Anchor the quality:** connect "professional," "fast," or "simple" to supplied examples, observed behavior, or an agreed criterion. | Do not turn "fast" into an invented latency target or "professional" into an arbitrary word count. |
| A request contains several deliverables | **Expose scope and dependencies:** enumerate the requested outputs and order only dependent work. | Do not delete a deliverable or split a coherent outcome solely because outputs have different types. |
| A claim has stronger certainty than its evidence | **Separate observation from explanation:** retain the reported symptom and make the suspected cause something to investigate. | Do not dismiss the report or claim that a guessed cause was verified. |
| "Latest," "current," or "recent" matters | **Anchor freshness:** require authoritative sources, versions or dates observed, and an as-of date. | Preserve the need for fresh information; do not substitute a memorized version. |
| Constraints cannot all hold | **Expose the conflict:** quote the incompatible requirements and ask which takes precedence. | Do not quietly drop one or treat your recommendation as approval. |
| A necessary decision is missing and questions are disallowed | **Carry the uncertainty:** make the draft provisional, name the unresolved choice, and gate the dependent action inside the prompt. | Do not make consequential choices or authorize irreversible actions on the user's behalf. |
| A handoff depends on hidden conversation context | **Make the input portable:** carry task-relevant facts, corrections, input locations, access, and approval from outside the draft. | Check this before returning a prompt unchanged. Keep refiner-only directions separate; do not fill gaps with guesses, include secrets, or create an unrequested template. |
| A limited prohibition becomes a blanket ban | **Keep the target:** retain an already-clear prohibition verbatim; otherwise preserve its action, object, and conditions. | "Do not deploy" does not prohibit explaining a deployment plan, nor make such a plan a new required deliverable. |
| Task-input fidelity is confused with output fidelity | **Separate input from transformation:** preserve the supplied material in the handoff, then specify the requested operation. | Keeping the source verbatim does not require a corrected or translated output to preserve its errors or spacing. |
| A precaution reopens settled permission | **Preserve authorization:** carry the granted action and its limits into the handoff. | Verify a genuinely uncertain target; do not request the same approval again. |
| Helpful elaboration introduces a new requirement | **Repair, do not enrich:** keep clear clauses and change only the parts with a concrete clarity, fidelity, or handoff problem. | Genre conventions are not missing requirements. A comparison does not require a ranking, and checking completion does not require a separate activity report. |
| A limited delegation becomes permission to design everything | **Fill assigned choices:** combine the user's task clauses with concise values for choices delegated to the refiner. | A setting does not also assign a cast or plot. An audience, tone, or constraint does not prescribe one execution method; do not append unrequested advice once the task is covered. |
| Repeated placeholders duplicate the supplied payload | **Name the input once:** include the input block or placeholder once, then refer to its label. | Preserve repetition needed for the requested meaning or format, such as independently copyable tasks. |

## Meaning-preserving examples

### Keep the operation

Input: "Summarize this report."

Faithful repair: "Summarize the supplied report's main findings and conclusions, preserving its stated uncertainty."

Not a repair: "Critique the report through five strategic lenses." That changes the task and invents a count. If the original request is already adequate in context, keep it.

### Make a quality observable without inventing a target

Input: "Make this email more professional, but keep it friendly."

Faithful repair: "Rewrite the supplied email in a courteous, clear, friendly tone. Preserve its facts, requests, and commitments."

Not a repair: "Use exactly three sentences and remove all informal language." Neither restriction was requested; removing all informality may conflict with friendliness.

### Preserve a report without asserting its cause

Input: "Checkout is slow; it must be the database. Find out why."

Faithful repair: "Investigate the reported checkout slowdown using available timing and execution evidence. Treat the database as a suspected cause, not an established one, and explain which evidence supports the findings."

Not a repair: "Add an index to the orders table." That invents a table, a cause, and a solution while changing investigation into implementation.

### Keep explicit limits, not arbitrary ones

Input: "Shorten this to at most 100 words without losing the safety warnings."

Faithful repair: "Edit the supplied text to at most 100 words while preserving every safety warning and its meaning."

Here the count is supported by the user. For "make this shorter," do not invent 100 words; reduce redundancy while preserving the message, or ask about a real publication limit when it matters.

### Ask where precision requires authority

Input: "Use only the Python standard library, and use pandas to read the CSV."

Response: "These requirements conflict because pandas is not part of the standard library. Should the script use the standard-library CSV tools, or may it depend on pandas?"

A precise-looking prompt that silently chooses either option is not a successful reformulation.

## Repair check

After a repair, compare it with the full request and applicable context. Did the operation, scope, exclusions, evidence strength, or user's authority change? For each new condition not required by the request or host, could an executor fully satisfy the intended outcome without it? If yes, remove it rather than adding it as an assumption or optional advice. Keep delegated choices within their assigned scope, and leave other valid choices available rather than forbidding them. Ask only about a genuine unresolved decision, then reapply the two-reader test to the repaired clause and its surrounding context.
