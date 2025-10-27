import { ToolHandler, ToolResponse } from '../types.js';
import { config, isPxPlusConfigured, getConfigError } from '../utils/config.js';

/**
 * Get PxPlus Executable Path Tool
 * Returns the configured PxPlus executable path so AI agents can execute PxPlus programs
 */
export const getExecutablePathTool: ToolHandler = {
  name: 'pxplus_get_executable_path',
  description: 'Returns the configured PxPlus executable path. AI agents can use this to retrieve the path for executing PxPlus programs directly.',
  inputSchema: {
    type: 'object',
    properties: {},
    required: []
  },
  handler: async (): Promise<ToolResponse> => {
    try {
      // Check if PxPlus is configured
      if (!isPxPlusConfigured()) {
        return {
          success: false,
          error: getConfigError() || 'PxPlus executable path is not configured'
        };
      }

      return {
        success: true,
        data: {
          executablePath: config.pxplusExecutablePath,
          message: 'PxPlus executable path retrieved successfully'
        }
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred while retrieving executable path'
      };
    }
  }
};
