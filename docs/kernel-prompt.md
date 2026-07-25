# kernel-prompt

> Kernel a prompt — refine or compose it into one paragraph that lands on first try.

**Invocation**: model-invoked (any agent can reach for it; a user can also call it directly).

**Branches**:
- **Refine** — input is an existing prompt
- **Compose** — input is a task description

**The pass** runs six cuts in order — K-E-R-N-E-L:

| Letter | Cut | What it does |
|---|---|---|
| K | Keep it simple | Strip to one clear goal; cut context that doesn't serve it |
| E | Easy to verify | Attach a checkable success criterion |
| R | Reproducible | Remove temporal references; pin versions and exact requirements |
| N | Narrow scope | One prompt, one deliverable; split only when combining fails |
| E | Explicit constraints | List the exact scope: libraries, lengths, output type, audience |
| L | Logical structure | Weave into one paragraph of flowing prose carrying all five substances |

**The sweep** tests every content clause with the two-reader test: would two different readers produce outputs matching in type and scope? Each failing clause gets a named reformulation from `REFORMULATIONS.md`.

**Output**: one paragraph. Not a list, not a template — a paragraph.

## Files

- [`SKILL.md`](../skills/engineering/kernel-prompt/SKILL.md) — the pass
- [`EXAMPLE.md`](../skills/engineering/kernel-prompt/EXAMPLE.md) — disclosed worked example
- [`REFORMULATIONS.md`](../skills/engineering/kernel-prompt/REFORMULATIONS.md) — seven reformulation patterns

## Install

```bash
npm install -g @codegiveness/kernel-prompt
kernel-prompt install
```

Or as a Claude Code plugin:

```
/plugin marketplace add codegiveness/kernel-prompt
/plugin install kernel-prompt@codegiveness
```
