import { ToolHandler, ToolResponse } from '../types.js';
import { runSyntaxCheck } from '../utils/pxplusExecutor.js';
import { isPxPlusConfigured, getConfigError } from '../utils/config.js';

/**
 * PxPlus Syntax Check Tool
 * Checks a PxPlus file for syntax errors using the PxPlus built-in error checker
 */
export const syntaxCheckTool: ToolHandler = {
  name: 'pxplus_syntax_check',
  description: 'Check a PxPlus file for syntax errors. Returns a list of errors with line numbers, column positions, and error descriptions. Requires PXPLUS_EXECUTABLE_PATH to be configured in .env file.',
  inputSchema: {
    type: 'object',
    properties: {
      filePath: {
        type: 'string',
        description: 'Absolute path to the PxPlus file to check (.pxprg, .txt, or other PxPlus file)'
      }
    },
    required: ['filePath']
  },
  handler: async (args: { filePath: string }): Promise<ToolResponse> => {
    try {
      const { filePath } = args;

      // Check if PxPlus is configured
      if (!isPxPlusConfigured()) {
        const configError = getConfigError();
        return {
          success: false,
          error: configError || 'PxPlus is not configured'
        };
      }

      // Run syntax check
      const result = await runSyntaxCheck(filePath);

      if (result.errorMessage) {
        return {
          success: false,
          error: result.errorMessage,
          data: {
            output: result.output
          }
        };
      }

      // Return the cleaned JSON output from PxPlus
      // The output is a JSON array of error objects with format:
      // [{"row": number, "column": number, "text": string, "type": string}, ...]
      // An empty array [] means no errors found
      // Note: ANSI codes are stripped and keys are quoted for valid JSON
      return {
        success: result.success,
        data: {
          output: result.output,
          message: result.success
            ? 'No syntax errors found'
            : 'Syntax errors found (see output)'
        }
      };

    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred during syntax check'
      };
    }
  }
};
