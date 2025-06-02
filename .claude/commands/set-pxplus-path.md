# Set PxPlus Executable Path

This command updates the PxPlus executable path in the project configuration.

## Instructions

When a user runs this command with a path parameter, you should:

1. **Validate the provided path**:
   - Check if the provided path exists using the file system
   - Verify it points to an executable file (typically named `pxplus`, `pvx`, `pxplus.exe`, or `pvx.exe`)
   - If the path is invalid, inform the user and ask for a valid path

2. **Update the CLAUDE.md file**:
   - Read the current CLAUDE.md file
   - Look for the section about "Running PxPlus Programs" 
   - Update or add the executable path information
   - If no such section exists, add it at the end of the file
   - The format should be:
     ```
     ### Running PxPlus Programs
     
     ```bash
     # PxPlus executable path (configured by user)
     PXPLUS_PATH="/path/to/pxplus"
     
     # Typical execution
     $PXPLUS_PATH program.pxprg
     ```

3. **Confirm the update**:
   - Show the user the path that was set
   - Mention that they can now run PxPlus programs using this path
   - Remind them they can change it again by running this command with a new path

## Example Usage

User: "Set PxPlus path to /usr/local/bin/pxplus"
You: Validate the path, update CLAUDE.md, and confirm the change

User: "Set PxPlus path to C:\PxPlus\pvx.exe"
You: Handle Windows path format, validate, update, and confirm