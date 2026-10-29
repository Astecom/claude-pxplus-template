/**
 * Shared type definitions for the MCP server
 */

export interface ToolResponse {
  success: boolean;
  data?: any;
  error?: string;
}

/**
 * What a tool can ask of the client while it runs
 */
export interface ToolContext {
  /** Ask the person a question in a form (MCP elicitation); without a person the client cancels */
  elicit?: (message: string, requestedSchema: Record<string, any>) => Promise<{ action: string; content?: Record<string, any> }>;
}

export interface ToolHandler {
  name: string;
  description: string;
  inputSchema: {
    type: string;
    properties: Record<string, any>;
    required?: string[];
  };
  handler: (args: any, context?: ToolContext) => Promise<ToolResponse>;
}
