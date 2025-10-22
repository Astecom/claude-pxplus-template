/**
 * Shared type definitions for the MCP server
 */

export interface ToolResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface ToolHandler {
  name: string;
  description: string;
  inputSchema: {
    type: string;
    properties: Record<string, any>;
    required?: string[];
  };
  handler: (args: any) => Promise<ToolResponse>;
}
