# Out of scope

Items deliberately not in this repo. Listed so contributors don't file them as missing.

- **A second skill.** This repo ships `kernel` and only `kernel`. A multi-skill repo (à la mattpocock/skills) is a different product — when a second skill is ready it gets its own repo under `codegiveness/`, not a bucket folder here.
- **A compiled binary.** The skill is prose; there is no native code to compile. See [ADR 0001](../.agents/adr/0001-ship-as-installable-npm-prose.md).
- **A prompt template library.** `kernel` produces one paragraph per request. It does not ship a catalog of pre-written prompts.
- **A prompt evaluation harness.** The two-reader test is a manual judgement, not an automated score. Automating it is a separate project.
