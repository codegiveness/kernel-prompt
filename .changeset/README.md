# Changesets

This folder is managed by `@changesets/cli`. A changeset is a Markdown file describing a single upcoming change (feature, fix, or breaking) before it lands on `main`. When changesets accumulate, the Release workflow opens a "chore: version" pull request that bumps `package.json`, `.claude-plugin/plugin.json`, and `CHANGELOG.md` together.

## Adding a changeset

```bash
npx changeset
```

Pick `@codegiveness/kernel-prompt`, choose minor/patch, write a one-line summary. Commit the new file under `.changeset/`. The Release workflow does the rest.

## Docs

- [Changesets common questions](https://github.com/changesets/changesets/blob/main/docs/common-questions.md)
- [Changesets repository](https://github.com/changesets/changesets)
