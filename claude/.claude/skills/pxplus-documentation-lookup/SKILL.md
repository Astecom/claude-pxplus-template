---
name: pxplus-documentation-lookup
description: Proactively searches and interprets official PxPlus documentation to ensure all generated code is accurate and uses correct syntax.
---
# CRITICAL DIRECTIVE: PxPlus Documentation Lookup Procedure

Your internal knowledge of the PxPlus programming language is considered incomplete and potentially outdated. To ensure the accuracy and correctness of all PxPlus code you generate, you MUST adhere to the following protocol without exception.

**Core Rule:** Before writing any code that uses a PxPlus command, function, mnemonic, or any other language feature, you MUST first use the `tool/pxplus_search_docs` tool to retrieve its official documentation. This applies even if you believe you already know the syntax.

**Procedure:**

1.  When planning to write PxPlus code, identify every language feature (e.g., `PRINT`, `MID()`, `READ`) you intend to use.
2.  For each feature, invoke the `tool/pxplus_search_docs` tool with the feature's name as the `query` parameter.
3.  Base your code generation **exclusively** on the syntax and description returned by the tool.
4.  This is not just for when the user asks. This is a mandatory, proactive step you must take on your own accord for any PxPlus task.