# Working on Kernel Prompt

`skills/kernel-prompt/SKILL.md` is the self-contained skill. `README.md` explains its purpose and use; consult its linked article when reconsidering the design. The project is prose, with no application runtime or build step.

Keep the skill harness-neutral and focused on requested prompt design. KERNEL is a mnemonic, not a mandatory workflow. Prefer guidance with demonstrated task value to a growing catalog of rules.

For behavior changes, exercise representative prompt requests and inspect or consume the resulting handoffs. For source-layout or installation changes, use the discovery and isolated installation checks in `.github/workflows/ci.yml`. Unrelated prose edits do not need installer runs.

Keep installation checks in a disposable project and HOME, away from real installed skills. Within the agreed task, run local disposable checks and repair failures caused by the change without repeated approval.

Keep the README and unreleased changelog consistent with behavior and distribution changes. Every update follows [RELEASING.md](RELEASING.md). npm releases are only ever staged with `npm stage publish`, never published directly; the maintainer approves them with two-factor authentication. Do not push, tag, merge, release, or stage a publish without the maintainer's go-ahead for that release.

## GitHub and presentation

In the maintainer's environment, `gh` is authenticated as `codegiveness`; use it for issues, pull requests, checks, merges, and repository settings within the agreed task, under the go-ahead rule above. The "Protect main" ruleset admits changes to `main` only by squash-merged pull request after the `Validate skill discovery and installation` check passes, and blocks force pushes and deletion with no bypass. If Git reports dubious ownership on the shared folder, pass `-c safe.directory=<repo path>` per command instead of changing global configuration.

The README's first paragraph, the GitHub About description and topics, and the `package.json` `description` and `keywords` state one pitch; change them together. The README badge row shows only live facts about this repository; add no badge for a check that does not exist here. `.github/social-preview.png` (1280×640) is the uploaded social preview and the README banner. GitHub has no API for the social preview, so the maintainer re-uploads it under Settings → General → Social preview. The README loads the banner from its absolute `raw.githubusercontent.com` URL on `main` because the npm tarball does not include `.github/`; moving or renaming the file breaks the banner on GitHub and npm.

skills.sh and SkillsMP crawl GitHub and document no refresh or submission mechanism; their listings lag the current `SKILL.md`. Entries were proposed to heilcheng/awesome-agent-skills#569, promptslab/Awesome-Prompt-Engineering#230, VoltAgent/awesome-agent-skills#1188, and sickn33/agentic-awesome-skills#1864, and the skill was shared in the [Agent Skills Show and tell discussion](https://github.com/agentskills/agentskills/discussions/597). The sickn33 catalog holds a copy of `SKILL.md` with its own frontmatter, When to Use, and Limitations sections; a behavior change there needs a follow-up pull request. Other lists require at least 10 stars (junminhong and philipbankier awesome-agent-skills, travisvn/awesome-claude-skills) or a web issue form filed by a human (hesreallyhim/awesome-claude-code); travisvn also rejects AI-assisted pull requests, so only the maintainer submits there.