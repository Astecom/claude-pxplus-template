PxPlus Claude Template
======================

Collection of assets that bring PxPlus expertise into Claude Code. The repository bundles:

- A reusable `.pxplus-claude/` profile with Claude rules, prompts, and workflow helpers
- An MCP server written in Node.js that exposes PxPlus-aware capabilities to Claude Code:
  - documentation: `pxplus_search_docs`, `pxplus_get_doc`, `pxplus_list_docs`, `pxplus_control_properties` (with version check), `pxplus_error`
  - code: `pxplus_syntax_check`, `pxplus_compile`, `pxplus_lst`, `pxplus_get_executable_path`
  - data dictionary and data files: `pxplus_dict_read`, `pxplus_dict_check`, `pxplus_dict_embedded`, `pxplus_read_records`, `pxplus_dict_apply` (only with `--enable-dict-apply`; asks the person before it changes anything)

  See [mcp-server/README.md](mcp-server/README.md) for each tool.
- The PxPlus manual as searchable documentation (`docs/`, from https://manual.pvxplus.com), up to **PxPlus 2026 (23.00)**, including PxPlus 2025 Update 1 (22.10). `pxplus_control_properties` uses its version notes to say whether a PxPlus version has a property (for example `CornerRadius$` and `FocusRect`: 23.00, not 22.00). `mcp-server/scripts/fetchDocs.py` brings it up to date for a new version (see [mcp-server/README.md](mcp-server/README.md#updating-the-documentation))
- Project documentation (`instructions-and-rules.md`, `CLAUDE.md`) that stays up to date with each release

## Installation

Run the installer from the root of any project that should use the template. The installer checks for Node.js 18+, npm, curl, and the Claude CLI before continuing.

### Linux / macOS / WSL

```bash
bash -c "$(curl -sSL https://raw.githubusercontent.com/Astecom/claude-pxplus-template/master/install.sh)"
```

### Windows

```powershell
irm https://raw.githubusercontent.com/Astecom/claude-pxplus-template/master/install.ps1 | iex
```

**Local installation (if you've cloned the repository):** `.\install.ps1`

**Supported platforms:** Ubuntu, macOS, WSL (Windows Subsystem for Linux), and Windows 10/11

**To update to the latest version**, simply run the same command again from your project directory.

## What the installer sets up

- Latest `.pxplus-claude` template copied into your home directory (shared across projects)
- Project-level `instructions-and-rules.md` created or updated with PxPlus guidance
- Project-level `CLAUDE.md` either created or updated by appending PxPlus instructions (preserves any existing content)
- MCP server dependencies installed and registered automatically with Claude Code, with `--enable-dict-apply` (see below)

When prompted, optionally provide the local PxPlus executable path so the MCP server can perform syntax checks. You can skip this step and update `~/.pxplus-claude/mcp-server/.env` later.

## Changing data dictionaries (`pxplus_dict_apply`)

`pxplus_dict_apply` creates and changes PxPlus data dictionaries (`providex.ddf`/`.dde`) and their physical files. Because these are data files:

- **You agree to every change.** The server first checks the whole plan and then asks you in Claude Code, in a form that lists every step and the number of records involved. Nothing changes until you say yes; the model cannot agree for you.
- **A file with records is safe by default.** `adjust_file` refuses when a column's data would be lost (dropped or renamed column) unless `allowDataLoss` is given; a rename goes with `load_definition`, which keeps the records as they are.
- **Files with an embedded IO program** (for example a change logger) only open when that program is found: pass `prefixProgram`, `prefix` or a `setup` program of the project. Otherwise the tool reports the error (Error #121).

### Turning it on

The installer registers the MCP server with `--enable-dict-apply`. For an installation made before v1.0.10, run the installer again, or register the server yourself:

```bash
claude mcp remove pxplus -s user
claude mcp add -s user --transport stdio pxplus -- node ~/.pxplus-claude/mcp-server/dist/index.js --enable-dict-apply
```

Windows (PowerShell):

```powershell
claude mcp remove pxplus -s user
claude mcp add -s user --transport stdio pxplus -- node "$HOME\.pxplus-claude\mcp-server\dist\index.js" --enable-dict-apply
```

Restart Claude Code and check with `/mcp` that the pxplus server has `--enable-dict-apply` in its arguments. Without the flag the server only reads dictionaries and records (`pxplus_dict_read`, `pxplus_dict_check`, `pxplus_dict_embedded`, `pxplus_read_records`).

### Automatic processes

Without a person (for example `claude -p` in a pipeline) the question cannot be answered, so the server changes nothing, except in folders that whoever starts the server allows:

- `PXPLUS_DICT_AUTO`: folders, separated like `PATH` (`:` on macOS/Linux, `;` on Windows). Only dictionaries there, and only when every physical file a change touches lies there too.
- `PXPLUS_DICT_LOG`: a file that gets one line per change, with who agreed (the person, or the allowed folder).

The model cannot set these; they come from the configuration that starts the server.

### Windows

The data dictionary tools start PxPlus with a helper program and read its answer from a file, so a windowed PxPlus works too. This has been tested on macOS; on Windows it is still to be tried (`pxplus_syntax_check` and `pxplus_dict_check` on a test folder).

