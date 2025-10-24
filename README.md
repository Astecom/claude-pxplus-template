PxPlus Claude Template
======================

Collection of assets that bring PxPlus expertise into Claude Code. The repository bundles:

- A reusable `.pxplus-claude/` profile with Claude rules, prompts, and workflow helpers
- An MCP server written in Node.js that exposes PxPlus-aware capabilities to Claude Code
- Project documentation (`instructions-and-rules.md`, `CLAUDE.md`) that stays up to date with each release

## Installation

```bash
bash -c "$(curl -sSL https://raw.githubusercontent.com/Astecom/claude-pxplus-template/master/install.sh)"
```

Run the command from the root of any project that should use the template. The installer checks for Node.js 18+, npm, curl, and the Claude CLI before continuing.

**Supported platforms:** Ubuntu, macOS, and WSL (Windows Subsystem for Linux)

**To update to the latest version**, simply run the same command again from your project directory.

## What the installer sets up

- Latest `.pxplus-claude` template copied into your home directory (shared across projects)
- Project-level `instructions-and-rules.md` created or updated with PxPlus guidance
- Project-level `CLAUDE.md` either created or updated by appending PxPlus instructions (preserves any existing content)
- MCP server dependencies installed and registered automatically with Claude Code

When prompted, optionally provide the local PxPlus executable path so the MCP server can perform syntax checks. You can skip this step and update `~/.pxplus-claude/mcp-server/.env` later.
