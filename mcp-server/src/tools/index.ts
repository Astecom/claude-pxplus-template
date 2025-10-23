import { ToolHandler } from '../types.js';
import { testTool } from './testTool.js';
import { syntaxCheckTool } from './syntaxCheck.js';
import { searchDocsTool } from './searchDocs.js';

/**
 * Tool Registry
 * Add new tools to this array to register them with the MCP server
 */
export const tools: ToolHandler[] = [
  testTool,
  syntaxCheckTool,
  searchDocsTool,
];

/**
 * Get a tool by name
 */
export function getToolByName(name: string): ToolHandler | undefined {
  return tools.find(tool => tool.name === name);
}
