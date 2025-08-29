# ⚠️ MANDATORY COMPLIANCE CHECK ⚠️

## 🛑 STOP: Before ANY PxPlus-related response, you MUST:

### 1. READ INSTRUCTIONS COMPLETELY
- Look for `.pxplus-claude/instructions-and-rules.md` in the USER'S HOME DIRECTORY
- The path should be `~/.pxplus-claude/instructions-and-rules.md` or `$HOME/.pxplus-claude/instructions-and-rules.md`
- Read this file ENTIRELY - it contains critical PxPlus programming rules and patterns
- This is MANDATORY for EVERY user request involving PxPlus
- NO EXCEPTIONS

### 2. CHECK CONFIGURATION
- Read `~/.pxplus-claude/pxplus-config.json` from the USER'S HOME DIRECTORY
- If `pxplus_executable_path` is "NOT_SET", IMMEDIATELY stop and ask user to set it
- Do NOT proceed with any PxPlus work until path is configured

### 3. IMPORTANT PATH NOTES
- The `.pxplus-claude` folder is installed in the user's HOME directory
- All paths to documentation and config should be relative to HOME (use `~/` or `$HOME/`)
- Example: `~/.pxplus-claude/pxplus-docs/` for documentation
- Do NOT look in the current project directory for these files
---