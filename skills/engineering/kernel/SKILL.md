---
name: kernel
description: Kernel a prompt — refine or compose it into one paragraph that lands on first try. Use when the user wants to refine or compose a prompt. Other skills reach this when they need a kernel'd prompt as input.
---

A **kernel** is a prompt stripped to what works. This skill runs the KERNEL pass — six cuts that turn a vague request into a prompt that lands on first try.

## Branches

Two branches, same six letters, different input material:
- **Refine** — input is an existing prompt. The "before" for each letter is that prompt's current state.
- **Compose** — input is a task description. The "before" for each letter is what the task description provides for that letter; if it provides nothing, record _absent_ as the before.

## Grounding

Before the pass, pin vague input terms to concrete symbols. When the input references a codebase, system, or API, explore it first (read files, query the index) and record a short grounding inventory: each vague term → the concrete symbol, file, or field it maps to. The pass writes the paragraph against this grounded vocabulary, not the user's original phrasing. Skip grounding only when the input is fully self-contained.

## Combining vs. chaining

When the input spans multiple sub-goals, the default is to **combine** them into one prompt. Combine when the sub-goals:
- Feed linearly (output of one is input to the next, in order).
- Share the same context, constraints, and verify criteria.
- Produce one deliverable (one document, one script, one spec).

Split into a chain only when sub-goals produce different output types (a script vs. a doc) or need independent execution with different constraints. See [Chaining](#chaining).

## The KERNEL pass

Run each letter in order. For each, produce a before/after note, or mark _unchanged_ with a reason that cites what's already in the prompt satisfying that letter (e.g., "unchanged — goal already stated as single sentence in line 1").

**K — Keep it simple.** Strip to one clear goal. Cut context that doesn't serve it. If no goal is recoverable from the input, ask the user for one before continuing — do not invent one. This is the one legitimate pause point in the pass.
- _Before:_ "I need help writing something about Redis"
- _After:_ "Write a technical tutorial on Redis caching"

**E — Easy to verify.** Attach a checkable success criterion. "Engaging" is not checkable; "3 code examples" is. If you can't verify success, the prompt can't deliver it.

**R — Reproducible.** Remove temporal references ("current trends", "latest best practices"). Pin specific versions and exact requirements. The prompt should work next month.

**N — Narrow scope.** One prompt, one deliverable. If the request genuinely cannot combine (see [Combining vs. chaining](#combining-vs-chaining)), split — see [Chaining](#chaining).

**E — Explicit constraints.** List the exact scope: allowed libraries, max function length, output type, target audience. Keep a prohibition only as a hard guardrail you cannot phrase positively, and pair it with the positive target.
- _Before:_ "Python code"
- _After:_ "Python stdlib only; functions under 20 lines; output to stdout"

**L — Logical structure.** Weave the prompt into **one paragraph** of prose carrying all five substances — context, task, constraints, format, verify — as flowing sentences joined by connectors (`;`, `,`, `and`).
- _Before:_ scattered labeled lines — `Context: …` / `Task: …` / `Constraints: …`
- _After:_ one paragraph — e.g. "`refreshToken` (src/auth/tokens.ts:42) drops sessions on refresh; patch it, add a failing-then-passing `bun test`, and update `docs/runbooks/auth.md` — TypeScript strict, no `as any`, one PR."

## Vague-phrasing sweep

After the six letters, present the sweep as a numbered list — one row per content clause across the paragraph (the same five substances, now as sentences), every clause, not a representative sample. Each row states the clause and a pass/fail verdict. Apply the two-reader test per clause: would two different readers produce outputs matching in type and scope? "Matching" means same output kind (both produce a Python script, not one script and one prose) and same coverage (both cover the same scope, not one comprehensive and one partial). It does not mean byte-identical implementations.

For each failing row, replace the vague clause using a pattern from [`REFORMULATIONS.md`](REFORMULATIONS.md), and name the pattern in the row: "Fails — applying **[Pattern Name]**: [replacement]". No silent reformulation.

If no clause fails, state "No reformulations needed" — this is the common outcome when the paragraph is well-constructed and the input was grounded.

## Completion

The pass is done when all four hold:
1. Every content clause in the paragraph passes the two-reader test, presented as a numbered list with a per-clause verdict. Each failing clause names the REFORMULATIONS.md pattern applied.
2. All six letters have a before/after note or _unchanged_ with a cited reason.
3. The final prompt matches the L-letter form (one paragraph, all five substances present).
4. The final paragraph passes its own two-reader sweep (re-swept after reformulation) — no vague verbs, vague nouns, or unscoped counts introduced in the output.

## Chaining

Split a task into a chain only when combining fails the test in [Combining vs. chaining](#combining-vs-chaining). Each prompt in the chain gets its own KERNEL pass.

Chain format: numbered list of prompts, each noting its dependency on the prior (`1. → 2. (feeds output of 1) → 3. (feeds output of 2)`).

Re-pass rule: treat each prior prompt's output as input to the next. Re-run the vague-phrasing sweep on your own output before passing it forward — do not propagate vague terms across the chain.

## Worked example

See [`EXAMPLE.md`](EXAMPLE.md) for a full pass: grounding, combining a multi-goal request into one prompt, the six-letter pass, and the exhaustive vague-phrasing sweep with per-clause verdicts.
