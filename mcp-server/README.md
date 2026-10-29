# PxPlus MCP Server

A Model Context Protocol (MCP) server for PxPlus development with Claude Code CLI.

## Installation

1. **Install dependencies:**
```bash
cd mcp-server
npm install
```

2. **Build the server:**
```bash
npm run build
```

## Usage with Claude Code CLI

Add the MCP server to Claude Code using the `claude mcp add` command:

### Windows

```bash
claude mcp add --transport stdio pxplus -- node "C:\Users\YourUsername\path\to\mcp-server\dist\index.js"
```

### Linux/WSL/macOS

```bash
claude mcp add --transport stdio pxplus -- node /absolute/path/to/mcp-server/dist/index.js
```

**Important:** Replace the path with the absolute path to your `dist/index.js` file.

## Verify Installation

List configured MCP servers:

```bash
claude mcp list
```

You should see `pxplus` in the list.

## Reading the documentation

- `pxplus_search_docs` finds pages by keywords or by name and gives snippets (or a cut-off part of the page).
- `pxplus_get_doc` reads one page in full: by path (`directives/multi_line.md`), link (`../control_object_properties/multiline_properties.md`), file name (`multi_line`) or name (`MULTI_LINE`). Optionally one section (`"section": "OPT= Settings"`); a long page comes in parts (`nextOffset`). It lists the page's sections and the pages it links to.
- `pxplus_list_docs` lists the pages in a folder (`control_object_properties/`) or with a word in their path or title; without a filter, the folders.

## pxplus_run (off by default)

`pxplus_run` runs a PxPlus program locked in the macOS sandbox and reports its output, or the error number, line and message. It is meant for bots that can't start PxPlus themselves (a BotOffice local app), so the server offers it only when started with `--enable-pxplus-run`:

```bash
node /absolute/path/to/mcp-server/dist/index.js --enable-pxplus-run
```

macOS only; Claude Code runs PxPlus itself, as the instructions describe.

## Testing

To test the MCP server, we can use the mcp inspector package

```bash
npx @modelcontextprotocol/inspector dist/index.js
```

## Rebuild After Changes

After making changes to the TypeScript source files, rebuild:

```bash
npm run build
```

Claude Code will automatically use the updated version.
