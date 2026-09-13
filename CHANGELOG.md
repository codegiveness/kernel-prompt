# Kernel Prompt

## Unreleased

### Changed

- Redesign the skill as a self-contained adaptive prompt editor, with a focused trigger, lightweight KERNEL considerations, and task-specific decision and completion boundaries.
- Consolidate the README around a balanced KERNEL philosophy, the guiding article, ordinary chat use, and optional Git-based installation.
- Replace `CLAUDE.md` and the agent-guidance link/pointer arrangement with a standalone, harness-neutral `AGENTS.md`.


### Fixed

- Clarify the skill's discovery description and selection boundary: document or guidance reviews do not become prompt-design requests merely because they discuss AI instructions or ask for wording suggestions. Preserve prompt improvement, composition, design feedback, and AI handoffs.

### Removed

- Remove the `.agents/` architecture decision record and its incoming documentation links.
- Remove Changesets configuration, scripts, and dependencies.
- Remove Claude Code plugin packaging, installation instructions, and plugin-specific CI and release checks.
- Remove the separate `.out-of-scope/` checklist and its incoming documentation link.
- Remove `docs/`, including old audit artifacts, audit guidance, and improvement history.
- Remove npm package manifests, `node_modules/`, and the npm publishing workflow; distribute the skill through Git and Markdown files.
- Remove `EXAMPLE.md` and `REFORMULATIONS.md`; keep one short delegation contrast inside `SKILL.md`.
- Remove `CONTEXT.md`; keep the project explanation in the README and behavior in `SKILL.md`.

## [0.2.0] - 2026-09-13

### Changed

- Redesign KERNEL around intent preservation, evidence, consequential decisions, task boundaries, meaningful success checks, and a portable handoff.
- Replace mandatory one-paragraph output and visible per-clause audits with ready, clarification, and provisional response states that honor the requested format and language.
- Preserve fresh-information requests, multi-part deliverables, exact task inputs, and later corrections. Keep unknowns explicit rather than inventing versions, paths, diagnoses, or constraints.
- Replace meaning-changing reformulations and fabricated grounding examples with faithful repairs and examples covering missing evidence, conflicting constraints, no-question requests, quoted instructions, and strict formats.
- Reduce core instruction overhead and check each added obligation against the request, necessary completion criteria, or host requirements. Add examples distinguishing execution limits from planning, verbatim task inputs from transformed outputs, and unresolved permission from approval already granted.
- Check whether an existing prompt needs repair before rewriting it. Keep clear clauses unchanged, scope delegated choices, distinguish outcome checks from extra activity reports, and avoid repeated template payloads unless repetition is required by the task or format.
- Check surrounding task context before returning a draft unchanged. Carry supplied facts, input locations, access, and approval into the handoff while keeping refiner-only directions separate. Fill delegated choices with concise values instead of developing unassigned creative or implementation details.
- Add an LLM-consumer-only audit agreement and durable improvement history, with saved instruction snapshots, model outputs, and unresolved consumer difficulties. Keep historical scores separate from accuracy claims and installer verification.
- Flatten the canonical skill directory to `skills/kernel-prompt/`, matching the single-skill layout of `codegiveness/shared-understanding`. Make `npx skills@latest add codegiveness/kernel-prompt` the primary installation route; preserve the skill's prose unchanged by this migration.
- Remove the custom npm install/update command, development helper scripts, and obsolete installer tests. Update package metadata, plugin paths, CI, release checks, and current documentation for the flat layout and Skills CLI installation.
- Retire JavaScript CodeQL analysis after removing the last executable source; verify real Skills CLI installation in CI instead.

### Fixed

- Preserve the action, object, and conditions of prohibitions instead of broadening execution limits into planning bans or reopening granted approval. Distinguish task-input preservation from unrequested output-format restrictions.
- Synchronize the stale lockfile package version with the existing 0.1.3 package and plugin versions, without changing dependency resolutions; check all version fields in CI.

## [0.1.3] - 2026-07-26

### Fixed

- Restore skills.sh badge (removed in 0.1.2). Badge shows "resource not found" until skills.sh telemetry from `npx skills add` installs populates the listing — this is expected, not a broken badge. Per [skills.sh docs](https://skills.sh/docs): "The skills leaderboard ranks skills based on anonymous telemetry data collected from the skills CLI."

## [0.1.2] - 2026-07-26

### Fixed

- Remove broken skills.sh badge from README (repo not registered on skills.sh — badge rendered "resource not found"). Will re-add when listing is live.

## [0.1.1] - 2026-07-26

### Renamed & Released

- Rename `kernel-skill` → `kernel-prompt` across all naming surfaces (skill name, npm package, plugin name, directory, bin script, README, CHANGELOG, CI guard).
- Add CI naming-consistency guard — 13 assertions verifying all naming surfaces agree, preventing partial renames from shipping.
- Close three README content gaps: before/after example teaser, six-cut KERNEL acronym expansion inline, five output substances named (context, task, constraints, format, verify).
- Repository renamed on GitHub: `codegiveness/kernel-skill` → `codegiveness/kernel-prompt` (old URL auto-redirects).

## [0.1.0] - 2026-07-25

### Initial Release

- Ship **`kernel-prompt`** — a prompt-engineering skill that refines or composes a prompt into one paragraph that lands on first try. The skill runs the KERNEL pass: six cuts (Keep it simple, Easy to verify, Reproducible, Narrow scope, Explicit constraints, Logical structure) that turn a vague request into a single paragraph carrying context, task, constraints, format, and verify as flowing prose.
- Two branches: **Refine** (input is an existing prompt) and **Compose** (input is a task description). Same six letters, different starting material.
- A grounding step pins vague input terms to concrete codebase symbols before the pass writes against them.
- A vague-phrasing sweep tests every content clause against a two-reader test and applies one of seven named reformulation patterns when a clause fails.
- Ships as installable npm prose (`@codegiveness/kernel-prompt`) — no compiled binary, no platform matrix.
- `kernel-prompt update` pulls the latest version via npm.
