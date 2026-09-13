# Out of scope

Items deliberately not in this repo. Listed so contributors don't file them as missing.

- **A second skill.** This repo ships `kernel-prompt` and only `kernel-prompt`. A multi-skill repo (à la mattpocock/skills) is a different product — when a second skill is ready it gets its own repo under `codegiveness/`, not a bucket folder here.
- **A compiled binary.** The skill is prose; there is no native code to compile. See [ADR 0001](../.agents/adr/0001-ship-as-installable-npm-prose.md).
- **A prompt template library.** `kernel-prompt` refines or composes a prompt for the request at hand. It can produce a template when requested, but does not ship a catalog of pre-written task prompts.
- **An automated prompt quality scorer.** The two-reader test is a judgment about intent and boundaries, not a numeric guarantee. Live-model smoke checks support individual cases; the repository does not ship an LLM evaluation service.
