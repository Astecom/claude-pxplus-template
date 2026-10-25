import { ToolHandler, ToolResponse } from '../types.js';
import { runProgram, DEFAULT_TIMEOUT, MAX_TIMEOUT } from '../utils/pxplusRun.js';
import { isPxPlusConfigured, getConfigError } from '../utils/config.js';

/**
 * PxPlus Run Tool
 * Runs a PxPlus program in the macOS sandbox and reports its output and how it ended
 */
export const runTool: ToolHandler = {
  name: 'pxplus_run',
  description: 'Run a PxPlus program and get back what it printed and, if it stopped on an error, the error number, line and message. ' +
    'Give a program file (relative to the project folder) or the code itself. Runs locked in the macOS sandbox: the program can read ' +
    'the PxPlus installation and the project folder, write only the project folder, has no network, cannot start other programs ' +
    '(INVOKE, shell) and gets no keyboard input. The program is CALLed, so END returns normally. Requires macOS and ' +
    'PXPLUS_EXECUTABLE_PATH to be configured in .env file.',
  inputSchema: {
    type: 'object',
    properties: {
      filePath: {
        type: 'string',
        description: 'The program to run, relative to the project folder (e.g. "tests/dates.txt"); plain text source or compiled'
      },
      code: {
        type: 'string',
        description: 'PxPlus code to run instead of a file (lines with or without line numbers)'
      },
      args: {
        type: 'array',
        items: { type: 'string' },
        description: 'Values the program reads with ARG(1), ARG(2), ...'
      },
      timeoutSeconds: {
        type: 'number',
        description: `Stop the run after this many seconds (default ${DEFAULT_TIMEOUT}, at most ${MAX_TIMEOUT})`
      }
    },
    required: []
  },
  handler: async (args: { filePath?: string; code?: string; args?: string[]; timeoutSeconds?: number }): Promise<ToolResponse> => {
    try {
      const { filePath, code } = args;

      if (!filePath && !code) {
        return {
          success: false,
          error: 'Give filePath (a program file) or code'
        };
      }

      // Check if PxPlus is configured
      if (!isPxPlusConfigured()) {
        return {
          success: false,
          error: getConfigError() || 'PxPlus is not configured'
        };
      }

      const result = await runProgram(filePath, filePath ? undefined : code, (args.args || []).map(String),
                                      args.timeoutSeconds || DEFAULT_TIMEOUT);

      if (result.errorMessage) {
        return {
          success: false,
          error: result.errorMessage,
          data: {
            output: result.output,
            ...(result.warning ? { warning: result.warning } : {})
          }
        };
      }

      return {
        success: result.success,
        data: {
          output: result.output,
          ...(result.error ? { error: result.error } : {}),
          ...(result.warning ? { warning: result.warning } : {}),
          message: !result.error
            ? 'Finished without error'
            : result.error.line
              ? `Stopped at line ${result.error.line}: ${result.error.message}`
              : `Stopped: ${result.error.message}`
        }
      };

    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred while running the program'
      };
    }
  }
};
