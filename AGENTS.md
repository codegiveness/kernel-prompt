# Working on Kernel Prompt

`skills/kernel-prompt/SKILL.md` is the self-contained skill. `README.md` explains its purpose and use; consult its linked article when reconsidering the design. The project is prose, with no application runtime or build step.

Keep the skill harness-neutral and focused on requested prompt design. KERNEL is a mnemonic, not a mandatory workflow. Prefer guidance with demonstrated task value to a growing catalog of rules.

For behavior changes, exercise representative prompt requests and inspect or consume the resulting handoffs. For source-layout or installation changes, use the discovery and isolated installation checks in `.github/workflows/ci.yml`. Unrelated prose edits do not need installer runs.

Keep installation checks in a disposable project and HOME, away from real installed skills. Within the agreed task, run local disposable checks and repair failures caused by the change without repeated approval.

Keep the README and unreleased changelog consistent with behavior and distribution changes. Do not publish, tag, or push without authorization.