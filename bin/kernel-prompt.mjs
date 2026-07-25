#!/usr/bin/env node
// kernel-prompt — thin npm wrapper for install / update.
// The skill itself is prose (skills/engineering/kernel-prompt/*.md); this script
// only symlinks the skill into the local harness directories or pulls the
// latest version via npm.

import { execSync } from "node:child_process";
import { existsSync, mkdirSync, readlinkSync, realpathSync, rmSync, symlinkSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { homedir } from "node:os";

const PKG = "@codegiveness/kernel-prompt";
const SKILL_NAME = "kernel-prompt";

// Resolve the skill source relative to this bin file's installed location.
// npm installs the package so that bin/kernel-prompt.mjs sits at <pkg-root>/bin/.
const PKG_ROOT = resolve(dirname(new URL(import.meta.url).pathname), "..");
const SKILL_SRC = join(PKG_ROOT, "skills", "engineering", SKILL_NAME);

const DESTS = [
  join(homedir(), ".claude", "skills"),
  join(homedir(), ".agents", "skills"),
];

function linkSkill() {
  if (!existsSync(SKILL_SRC)) {
    console.error(`error: skill source not found at ${SKILL_SRC}`);
    console.error("       the npm install may be corrupt; reinstall with:");
    console.error(`       npm install -g ${PKG}`);
    process.exit(1);
  }

  for (const dest of DESTS) {
    // Bail if dest is itself a symlink into the package — would pollute the install.
    if (existsSync(dest)) {
      try {
        const resolved = realpathSync(dest);
        if (resolved.startsWith(PKG_ROOT)) {
          console.error(`error: ${dest} is a symlink into the package (${resolved}).`);
          console.error(`       Remove it (rm "${dest}") and re-run.`);
          process.exit(1);
        }
      } catch {
        // Not a symlink, or unreadable — proceed.
      }
    }

    mkdirSync(dest, { recursive: true });
    const target = join(dest, SKILL_NAME);

    if (existsSync(target) || isSymlink(target)) {
      try { rmSync(target, { recursive: true, force: true }); } catch {}
    }

    try {
      symlinkSync(SKILL_SRC, target);
      console.log(`linked ${SKILL_NAME} -> ${SKILL_SRC} (${dest})`);
    } catch (err) {
      console.error(`warn: could not link into ${dest}: ${err.message}`);
    }
  }
}

function isSymlink(p) {
  try { readlinkSync(p); return true; } catch { return false; }
}

function update() {
  console.log(`Updating ${PKG}...`);
  try {
    execSync(`npm install -g ${PKG}@latest`, { stdio: "inherit" });
    console.log(`✅ ${PKG} updated.`);
  } catch (err) {
    console.error(`❌ npm install failed: ${err.message}`);
    process.exit(1);
  }
}

const cmd = process.argv[2];

switch (cmd) {
  case "install":
  case "link":
    linkSkill();
    break;
  case "update":
    update();
    break;
  case undefined:
  case "help":
  case "--help":
  case "-h":
    console.log(`kernel-prompt — install or update the kernel-prompt skill

usage:
  kernel-prompt install   symlink the skill into ~/.claude/skills and ~/.agents/skills
  kernel-prompt update    pull the latest version via npm
  kernel-prompt help      show this help
`);
    break;
  default:
    console.error(`unknown command: ${cmd}`);
    console.error("run `kernel-prompt help` for usage.");
    process.exit(2);
}
