#!/usr/bin/env bash
set -euo pipefail

# NOTE: Dev-only script for maintainers of this repo.
# Symlinks the kernel skill into the local harness skill directories:
#   - ~/.claude/skills  — Claude Code
#   - ~/.agents/skills  — Codex and other Agent Skills-compatible harnesses
# Each entry is a symlink into this repo, so a git pull keeps the skill current.

REPO="$(cd "$(dirname "$0")/.." && pwd)"
DESTS=("$HOME/.claude/skills" "$HOME/.agents/skills")

SRC="$REPO/skills/engineering/kernel"
NAME="kernel"

for DEST in "${DESTS[@]}"; do
  if [ -L "$DEST" ]; then
    resolved="$(readlink -f "$DEST")"
    case "$resolved" in
      "$REPO"|"$REPO"/*)
        echo "error: $DEST is a symlink into this repo ($resolved)." >&2
        echo "Remove it (rm \"$DEST\") and re-run." >&2
        exit 1
        ;;
    esac
  fi

  mkdir -p "$DEST"
  target="$DEST/$NAME"

  if [ -e "$target" ] && [ ! -L "$target" ]; then
    rm -rf "$target"
  fi

  ln -sfn "$SRC" "$target"
  echo "linked $NAME -> $SRC ($DEST)"
done
