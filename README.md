# Claude PxPlus Template

A template for using Claude Code with PxPlus (ProvideX) programming language support.

## Prerequisites

- [Claude Code](https://claude.ai/code) installed and configured
- PxPlus interpreter installed on your system

## Installation

1. **Copy template files to your home directory:**

   The `.claude` and `.pxplus-claude` directories need to be placed in your home directory. You can copy them manually or use the following commands:

   ```bash
   # Copy the .claude directory (general instructions)
   cp -r .claude ~/
   
   # Copy the .pxplus-claude directory (PxPlus rules and documentation)
   cp -r .pxplus-claude ~/
   ```

2. **Configure PxPlus executable path:**

   After copying the files, you need to set the path to your PxPlus executable. In Claude Code, use:
   
   ```
   /set-pxplus-path <path-to-your-pxplus-executable>
   ```
   
   Example:
   ```
   /set-pxplus-path /usr/local/bin/pxplus
   ```

## What's Included

- **`.claude/CLAUDE.md`** - Project instructions that remind Claude to check PxPlus documentation
- **`.pxplus-claude/instructions-and-rules.md`** - Comprehensive PxPlus programming guide and syntax rules
- **`.pxplus-claude/pxplus-config.json`** - Configuration file for PxPlus executable path

## Usage

Once installed, Claude Code will automatically:
- Read the PxPlus instructions when working with PxPlus files
- Use the configured PxPlus executable for syntax checking and compilation
- Follow PxPlus-specific coding patterns and best practices

## Features

- **Syntax Checking** - Automatic validation of PxPlus code
- **Compilation Support** - Compile PxPlus programs to optimized versions
- **Documentation Lookup** - Access to comprehensive PxPlus documentation (if installed)
- **Code Patterns** - Follows modern and traditional PxPlus coding styles

## Troubleshooting

If Claude Code doesn't recognize PxPlus commands:
1. Verify the `.claude` directory exists in your home directory
2. Check that `.pxplus-claude` is in your home directory
3. Ensure the PxPlus executable path is correctly configured
4. Restart Claude Code if needed

## License

This template is provided as-is for use with Claude Code and PxPlus development.