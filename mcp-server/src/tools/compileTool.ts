import { ToolHandler, ToolResponse } from '../types.js';
import { runCompile } from '../utils/pxplusExecutor.js';
import { isPxPlusConfigured, getConfigError } from '../utils/config.js';

/**
 * PxPlus Compile Tool
 * Compiles a PxPlus source file to a compiled output file
 */
export const compileTool: ToolHandler = {
  name: 'pxplus_compile',
  description: 'Compile a PxPlus source file to a compiled output file. Requires PXPLUS_EXECUTABLE_PATH to be configured in .env file.',
  inputSchema: {
    type: 'object',
    properties: {
      sourceFilePath: {
        type: 'string',
        description: 'Absolute path to the source PxPlus file to compile'
      },
      outputFilePath: {
        type: 'string',
        description: 'Absolute path where the compiled file should be written (with optional directory path)'
      }
    },
    required: ['sourceFilePath', 'outputFilePath']
  },
  handler: async (args: { sourceFilePath: string; outputFilePath: string }): Promise<ToolResponse> => {
    try {
      const { sourceFilePath, outputFilePath } = args;

      // Validate inputs
      if (!sourceFilePath || sourceFilePath.trim() === '') {
        return {
          success: false,
          error: 'Source file path is required'
        };
      }

      if (!outputFilePath || outputFilePath.trim() === '') {
        return {
          success: false,
          error: 'Output file path is required'
        };
      }

      // Check if PxPlus is configured
      if (!isPxPlusConfigured()) {
        const configError = getConfigError();
        return {
          success: false,
          error: configError || 'PxPlus is not configured. Please set PXPLUS_EXECUTABLE_PATH in your .env file.'
        };
      }

      // Run compile
      const result = await runCompile(sourceFilePath, outputFilePath);

      if (result.errorMessage) {
        return {
          success: false,
          error: result.errorMessage,
          data: {
            output: result.output,
            sourceFile: sourceFilePath,
            outputFile: outputFilePath,
            details: 'The compilation failed. See error message above for details.'
          }
        };
      }

      return {
        success: result.success,
        data: {
          output: result.output,
          sourceFile: sourceFilePath,
          outputFile: outputFilePath,
          message: result.success
            ? `Successfully compiled ${sourceFilePath} to ${outputFilePath}`
            : 'Compilation failed (see output)'
        }
      };

    } catch (error) {
      return {
        success: false,
        error: `Compilation error: ${error instanceof Error ? error.message : 'Unknown error occurred during compilation'}`
      };
    }
  }
};
