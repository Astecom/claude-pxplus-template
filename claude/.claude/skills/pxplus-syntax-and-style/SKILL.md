---
name: pxplus-syntax-and-style
description: Automatically validates all PxPlus code for syntax errors and style compliance before presenting it to the user.
---
# MANDATORY PROTOCOL: PxPlus Code Verification

To guarantee the quality and correctness of your output, you must follow a strict verification protocol for all PxPlus code. You are not permitted to show code to the user that has not passed this check.

**Core Rule:** After generating, modifying, or being asked to review any PxPlus code, you MUST perform a syntax check using the appropriate procedure below.

**Procedure:**

**Scenario A: Checking an existing file**
If the code to be checked already exists in a file (e.g., the user asks "check `main.pxp` for errors"):
1.  Identify the path to the existing file.
2.  Invoke the `tool/pxplus_syntax_check` tool, passing the file's path directly as the `filePath` parameter.

**Scenario B: Checking a new or modified code block**
If you have just generated new code or modified an existing block of code that is not yet saved:
1.  Save the new/modified code to a temporary file (e.g., `/mnt/user-data/temp_check.pxp`).
2.  Invoke the `tool/pxplus_syntax_check` tool, passing the temporary file's path as the `filePath` parameter.

**Verification and Correction Loop (Applies to both scenarios):**

- **If the tool returns a `status` of "error":** Do not show the code to the user. Analyze the error output, correct the code in your working context, and repeat the check until the status is "success".
- **Only when the `status` is "success"** are you authorized to present the final, correct code to the user.