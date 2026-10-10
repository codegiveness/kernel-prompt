# Releasing Kernel Prompt

Every update, including documentation-only changes, goes through an issue, a branch, and a pull request. A release adds the version bump, tag, GitHub release, and staged npm publish. Pushing, merging, tagging, releasing, and staging need the maintainer's go-ahead for that release. npm versions are only ever staged with `npm stage publish`, never published directly; the maintainer approves them with two-factor authentication.

Examples use `X.Y.Z` for the new version and `N-short-slug` for the branch.

## 1. Open an issue

```bash
gh issue create --title "<change>" --body "<problem, change, acceptance>" --label enhancement
```

Use `bug`, `enhancement`, or `documentation`, plus `ready-for-agent` or `ready-for-human` for who does the work. Note the issue number `N`.

## 2. Create a worktree branch

Cut the branch from the current `origin/main` and do all work in the worktree, not the main checkout:

```bash
git fetch origin
git worktree add -b N-short-slug .worktrees/N-short-slug origin/main
cd .worktrees/N-short-slug
```

`.worktrees/` is ignored. If the checkout's filesystem rejects worktrees, create it outside the repository.

## 3. Sync the installed skill

When the skill was edited in an installed copy, that copy is the source of truth. Copy it over the repository file without changing its wording, then confirm both are byte-identical:

```bash
cp <installed-skill-dir>/SKILL.md skills/kernel-prompt/SKILL.md
cmp <installed-skill-dir>/SKILL.md skills/kernel-prompt/SKILL.md
```

## 4. Update the changelog, version, and docs

- Add `## [X.Y.Z] - YYYY-MM-DD` to the top of `CHANGELOG.md` with `### Changed`, `### Fixed`, or `### Removed` sections. Leave earlier entries alone unless one is wrong.
- Set `"version": "X.Y.Z"` in `package.json`. Use a patch version for wording and documentation fixes, a minor version for behavior changes.
- Update the README wherever it describes changed behavior or distribution.

## 5. Verify locally

- Behavior changes: give the skill a representative request that exercises the change and inspect the resulting prompt.
- `npm pack --dry-run`: the tarball contains only `skills/`, `CHANGELOG.md`, and the files npm always includes (`package.json`, `README.md`, `LICENSE`).
- Source-layout, installation, or new repository files: run the discovery and isolated installation steps from `.github/workflows/ci.yml` against the worktree, with `HOME` and the project in a disposable directory.

## 6. Open a pull request

```bash
git add -A
git commit -m "release: vX.Y.Z with <summary>"
git push -u origin N-short-slug
gh pr create --base main --title "release: vX.Y.Z with <summary>" --body-file <filled template>
```

Fill in `.github/pull_request_template.md` and write `Closes #N` so the merge closes the issue. Use a conventional prefix (`release:`, `fix:`, `docs:`) for non-release changes.

## 7. Merge after CI passes

```bash
gh pr checks <pr> --watch
gh pr merge <pr> --squash
git push origin --delete N-short-slug
gh pr view <pr> --json mergeCommit --jq .mergeCommit.oid
```

The last command prints the merge commit SHA. If CI fails, fix the cause on the branch and push again. If branch protection or a required review blocks the merge, stop and ask the maintainer. Never force-push to `main`.

## 8. Tag and create the GitHub release

Tag the squash-merge commit on `main` with an annotated tag, then publish release notes taken from the version's changelog entry (without its heading):

```bash
git fetch origin
git tag -a vX.Y.Z -m vX.Y.Z <merge-commit-sha>
git push origin vX.Y.Z
gh release create vX.Y.Z --verify-tag --title vX.Y.Z --notes-file <changelog-entry.md>
```

## 9. Remove the worktree

From the main checkout, after the branch is merged:

```bash
git worktree remove .worktrees/N-short-slug
git branch -D N-short-slug
git pull --ff-only
```

`-D` is needed because a squash merge leaves the branch's own commit unmerged.

## 10. Stage the npm release

Stage from a clean checkout of the tag, never from a working tree with local changes:

```bash
git clone --depth 1 --branch vX.Y.Z https://github.com/codegiveness/kernel-prompt.git <temp-dir>
cd <temp-dir>
npm pack --dry-run
npm stage publish
npm stage list @codegiveness/kernel-prompt
```

Do not run `npm stage approve`, change dist-tags, or touch other versions. Hand the staged ID to the maintainer.

## 11. Maintainer approval

The maintainer approves with two-factor authentication:

```bash
npm stage approve <id>
npm view @codegiveness/kernel-prompt version
```

`npm stage reject <id>` discards a staged version instead.
