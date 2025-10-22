import { ToolHandler, ToolResponse } from '../types.js';

/**
 * Test tool - echoes back a message
 * This is a simple example to demonstrate the MCP tool pattern
 */
export const testTool: ToolHandler = {
  name: 'test_echo',
  description: 'A simple test tool that echoes back your message. Use this to verify the MCP server is working correctly.',
  inputSchema: {
    type: 'object',
    properties: {
      message: {
        type: 'string',
        description: 'The message to echo back'
      }
    },
    required: ['message']
  },
  handler: async (args: { message: string }): Promise<ToolResponse> => {
    try {
      const { message } = args;

      return {
        success: true,
        data: {
          echo: message,
          timestamp: new Date().toISOString(),
          platform: process.platform
        }
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred'
      };
    }
  }
};
