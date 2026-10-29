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
- `pxplus_control_properties` lists the properties of one control (`MULTI_LINE`, `GRID`, ...) as a table with the version notes; with `"version": "22.00"` it says per property whether that version has it (yes, no, partly, unknown).
- `pxplus_error` gives the message and possible reasons of an error number (`20` = Syntax error).

`pxplus_get_doc` and `pxplus_control_properties` read the version notes of the documentation ("added in PxPlus 2020"). Since PxPlus 2016 a year and a version number go together: 2025 = 22.00, 2026 = 23.00.

## Data dictionary and data files

Through the PxPlus `*dict` objects, as Data Dictionary Maintenance does (the PxPlus side is `pxplus/dict.pxprg`). Requires `PXPLUS_EXECUTABLE_PATH`.

- `pxplus_dict_read`: the tables of a `providex.ddf` folder (group, physical file, embedded IO program, records), or one table: columns, indexes, IOList and whether its file matches the dictionary.
- `pxplus_dict_embedded`: the definition inside a data file itself.
- `pxplus_read_records`: records of a table or a file, read-only (`OPEN INPUT`), from a key, on a key number, in parts (`nextKey`).
- `pxplus_dict_apply`: a list of operations: create a dictionary, add/update/rename/drop tables, columns and indexes, and create, convert (`adjust_file`), re-describe (`load_definition`) or delete the physical file. `dryRun` checks without changing anything.

Safety, because these are data files:

- a file with records is changed or deleted only with `confirm: true`;
- `adjust_file` takes the fields over by name, so a dropped or renamed column loses its data; with records it refuses unless `allowDataLoss: true`. A rename goes with `load_definition`, which keeps the records as they are;
- a file with an embedded IO program (for example a change logger) only opens when that program is found: give `prefixProgram` (or `prefix`, or a `setup` program that is CALLed first). Without it the tools give the error back (Error #121). With `prefix`, relative file names are found and created through it, as in the application.

`npm run check-dict` runs the whole cycle in a temporary folder.

## Reading a tokenized program

`pxplus_lst` shows a compiled (binary) program or class as text, with `pxplus -lst`, optionally from a line on (`fromLine`, `maxLines`). Requires `PXPLUS_EXECUTABLE_PATH`.

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
