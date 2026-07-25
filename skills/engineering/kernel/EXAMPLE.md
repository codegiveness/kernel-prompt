# Worked example

Disclosed reference for [`kernel`](SKILL.md). A full pass: grounding, combining a multi-goal request into one prompt, the six-letter pass, and the exhaustive vague-phrasing sweep with per-clause verdicts.

## Input (vague, multi-goal request)

> Our auth service has a token refresh bug — users get logged out. Fix it, add a test that catches the regression, and update the runbook so on-call knows what to do.

## Grounding

Input references "auth service," "token refresh," and "runbook" — all vague. Explored the codebase and pinned each to a concrete symbol:

- "token refresh bug" → `refreshToken` (src/auth/tokens.ts:42)
- "users get logged out" → `TokenStore` (src/auth/store.ts:15) drops sessions on refresh failure
- "runbook" → `docs/runbooks/auth.md`

## Combining vs. chaining

Three sub-goals: fix, test, docs. Test whether they combine:
- Feed linearly? Yes — fix first, then test the fix, then document the fix.
- Share context + constraints + verify? Yes — same auth module, same bug.
- One deliverable? Yes — one PR (code + test + doc update).

→ Combine into one prompt.

## The KERNEL pass

**K — Keep it simple.**
- _Before:_ "Fix the token refresh bug, add a regression test, update the runbook"
- _After:_ "Fix the token refresh bug in `refreshToken` (src/auth/tokens.ts:42), add a test that reproduces the bug before the fix, and update `docs/runbooks/auth.md` with the symptom and resolution."

**E — Easy to verify.**
- _Before:_ (none)
- _After:_ "Test fails before the fix, passes after. Runbook entry has Symptom, Cause, Fix, Verification sections."

**R — Reproducible.**
- _unchanged_ — no temporal references in the input.

**N — Narrow scope.**
- _unchanged_ — combined into one deliverable (one PR). Sub-goals feed linearly and share context.

**E — Explicit constraints.**
- _Before:_ (none)
- _After:_ "TypeScript strict, no `as any`. Test via `bun test`. Runbook update under 200 words per section."

**L — Logical structure.**
- _Before:_ one sentence
- _After:_ one paragraph carrying context, task, constraints, format, and verify as flowing prose (below)

## Drafted prompt (before sweep)

```
`refreshToken` (src/auth/tokens.ts:42) drops sessions on token refresh, breaking `TokenStore` (src/auth/store.ts:15); patch it so refresh stops dropping sessions, add a `bun test` regression that fails before the fix and passes after, and update `docs/runbooks/auth.md` with Symptom, Cause, Fix, and Verification sections (under 200 words each), shipping as one PR — TypeScript strict, no `as any`.
```

## Vague-phrasing sweep

Numbered list, one row per content clause, every clause in the paragraph:

1. "`refreshToken` (src/auth/tokens.ts:42) drops sessions on token refresh" — same file, same bug. **Passes.**
2. "breaking `TokenStore` (src/auth/store.ts:15)" — same file, same role. **Passes.**
3. "patch it so refresh stops dropping sessions" — two readers would diverge: one patches the specific line, another redesigns the refresh flow. **Fails** — applying **Name the operation**: "patch `refreshToken` so it stops dropping sessions on refresh failure."
4. "add a `bun test` regression that fails before the fix and passes after" — same operation, same tool, checkable criterion. **Passes.**
5. "update `docs/runbooks/auth.md` with Symptom, Cause, Fix, and Verification sections (under 200 words each)" — same file, same scope, concrete limit. **Passes.**
6. "shipping as one PR — TypeScript strict, no `as any`" — same deliverable shape, same constraints. **Passes.**

One clause reformulated (clause 3). Re-sweep the replacement: "patch `refreshToken` so it stops dropping sessions on refresh failure" — two readers would both modify `refreshToken` with the same target behavior (no session drop). Same kind (code patch), same coverage (the specific function). **Passes.**

## Final kernel'd prompt (after sweep)

```
`refreshToken` (src/auth/tokens.ts:42) drops sessions on token refresh, breaking `TokenStore` (src/auth/store.ts:15); patch `refreshToken` so it stops dropping sessions on refresh failure, add a `bun test` regression that fails before the fix and passes after, and update `docs/runbooks/auth.md` with Symptom, Cause, Fix, and Verification sections (under 200 words each), shipping as one PR — TypeScript strict, no `as any`.
```

## Completion check

1. Every content clause in the paragraph passes the two-reader test, presented as a numbered list with per-clause verdict. One failure reformulated with pattern named. ✓
2. All six letters have before/after or unchanged with cited reason. ✓
3. Final prompt matches the L-letter form (one paragraph, all five substances present). ✓
4. Final paragraph re-swept — no vague terms introduced. ✓

Pass complete.
