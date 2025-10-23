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
