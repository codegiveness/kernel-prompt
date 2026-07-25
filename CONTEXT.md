# Kernel Skill

A single-skill repository publishing **kernel** — a prompt-engineering skill that refines or composes a prompt into one paragraph that lands on first try.

## Language

**Kernel**:
A prompt stripped to what works. The KERNEL pass (K-E-R-N-E-L) applies six cuts — Keep it simple, Easy to verify, Reproducible, Narrow scope, Explicit constraints, Logical structure — turning a vague request into one paragraph carrying context, task, constraints, format, and verify as flowing prose.
_Avoid_: prompt template, prompt formula, prompt framework

**Pass**:
One execution of the six letters in order. Each letter produces a before/after note, or marks _unchanged_ with a cited reason.
_Avoid_: run, iteration (use only when describing the vague-phrasing re-sweep)

**Branch**:
Which input the pass operates on — **Refine** (input is an existing prompt) or **Compose** (input is a task description). Same six letters, different starting material.
_Avoid_: mode, variant

**Grounding**:
Before the pass, pin vague input terms to concrete symbols (files, fields, APIs). The pass writes the paragraph against this grounded vocabulary, not the user's original phrasing.
_Avoid_: lookup, resolution

**Two-reader test**:
Would two different readers produce outputs matching in type and scope? "Matching" means same output kind and same coverage — not byte-identical implementations.
_Avoid_: clarity check, readability test

**Reformulation**:
When a content clause fails the two-reader test, replace it using one of seven named patterns from `REFORMULATIONS.md`. No silent reformulation — name the pattern in the sweep row.
_Avoid_: rewrite, fix-up

## Relationships

- A **Kernel** is produced by one **Pass**
- A **Pass** runs on one **Branch** (Refine or Compose)
- A **Pass** may be preceded by **Grounding**
- Every content clause in the final paragraph is tested by the **Two-reader test**
- Failing clauses receive a **Reformulation** naming its pattern

## Flagged ambiguities

- "kernel" was previously used to mean both the _skill_ and the _output paragraph_ — resolved: the skill is **kernel**; the output is the "kernel'd prompt" or "final paragraph". The word "kernel" alone refers to the skill.
- "sweep" was previously used to mean both the six-letter pass and the vague-phrasing sweep — resolved: the six-letter pass is the **Pass**; the post-pass clause-by-clause check is the "vague-phrasing sweep".
