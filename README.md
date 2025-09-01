# Claude PxPlus Template

A template for using Claude Code with PxPlus (ProvideX) programming language support.

## Prerequisites

- [Claude Code](https://claude.ai/code) installed and configured
- PxPlus installed on your system

## Installation

1. **Download the template repository:**

   You can get the template files by either:
   
   - **Git clone** (recommended):
     ```bash
     git clone https://github.com/Astecom/claude-pxplus-template.git
     cd claude-pxplus-template
     ```
   
   - **Download ZIP**: Download the repository as a ZIP file from GitHub and extract it

2. **Copy template files to your home directory:**

   The `.claude` and `.pxplus-claude` directories need to be placed in your home directory. The location depends on your operating system:
   
   - **Linux/macOS**: Your standard home directory (`~/` or `/home/username/`)
   - **Windows**: You need to run Claude Code via WSL (Windows Subsystem for Linux). Place the directories in your WSL home directory (typically `/home/username/` inside WSL)
   
   You can copy them manually or use the following commands:

   ```bash
   # Copy the .claude directory (general instructions)
   cp -r .claude ~/
   
   # Copy the .pxplus-claude directory (PxPlus rules and documentation)
   cp -r .pxplus-claude ~/
   ```

3. **Configure PxPlus executable path:**

   After copying the files, you need to set the path to your PxPlus executable. In Claude Code, use:
   
   ```
   /set-pxplus-path <path-to-your-pxplus-executable>
   ```
   
   Example:
   ```
   /set-pxplus-path /usr/local/bin/pxplus
   ```

## Usage

Once installed, Claude Code will automatically:
- Read the PxPlus instructions when working with PxPlus files
- Use the configured PxPlus executable for syntax checking and compilation
- Follow PxPlus-specific coding patterns and best practices

## Features

- **Syntax Checking** - Automatic validation of PxPlus code
- **Compilation Support** - Compile PxPlus programs to optimized versions
- **Documentation Lookup** - Access to comprehensive PxPlus documentation
- **Code Patterns** - Follows modern and traditional PxPlus coding styles

## Troubleshooting

If Claude Code doesn't recognize PxPlus commands:
1. Verify the `.claude` directory exists in your home directory
2. Check that `.pxplus-claude` is in your home directory
3. Ensure the PxPlus executable path is correctly configured
4. Restart Claude Code if needed

## License

This template is provided as-is for use with Claude Code and PxPlus development.