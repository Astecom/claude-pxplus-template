# Set PxPlus Executable Path

This command updates the PxPlus executable path in the project configuration.

## Instructions

When a user runs this command with a path parameter, you should:

1. **Validate the provided path**:
   - Check if the provided path exists using the file system
   - Verify it points to an executable file (typically named `pxplus`, `pvx`, `pxplus.exe`, or `pvx.exe`)
   - If the path is invalid, inform the user and ask for a valid path

2. **Update the .pxplus-claude/pxplus-config.json file**:
   - Read the current `.pxplus-claude/pxplus-config.json` file
   - Update the `pxplus_executable_path` field with the validated path
   - Save the updated configuration

3. **Update the .pxplus-claude/instructions-and-rules.md file**:
   - This file no longer needs to be updated as it now references the JSON config file
   - The configuration is now centralized in the JSON file

4. **Confirm the update**:
   - Show the user the path that was set
   - Mention that they can now run PxPlus programs using this path
   - Remind them they can change it again by running this command with a new path

## Example Usage

User: "Set PxPlus path to /usr/local/bin/pxplus"
You: Validate the path, update .pxplus-claude/pxplus-config.json, and confirm the change

User: "Set PxPlus path to C:\PxPlus\pvx.exe"
You: Handle Windows path format, validate, update, and confirm

## Implementation Note

The configuration is stored in `.pxplus-claude/pxplus-config.json` with the following format:
```json
{
  "pxplus_executable_path": "/path/to/pxplus",
  "description": "Configuration file for PxPlus development. Set pxplus_executable_path to the full path of your PxPlus executable."
}
```