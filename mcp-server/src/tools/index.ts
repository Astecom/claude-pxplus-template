import { ToolHandler } from '../types.js';
import { testTool } from './testTool.js';
import { syntaxCheckTool } from './syntaxCheck.js';
import { searchDocsTool } from './searchDocs.js';
import { compileTool } from './compileTool.js';
import { getExecutablePathTool } from './getExecutablePath.js';
import { runTool } from './runTool.js';
import { getDocTool, listDocsTool } from './getDoc.js';
import { controlPropertiesTool } from './controlProperties.js';
import { errorTool } from './errorTool.js';
import { lstTool } from './lstTool.js';
import { dictReadTool, dictCheckTool, dictEmbeddedTool, dictApplyTool, readRecordsTool } from './dictTools.js';

/**
 * pxplus_run is off by default: it is meant for bots that can't start PxPlus themselves (a BotOffice local app
 * starts the server with this flag). Claude Code runs PxPlus itself, as the instructions describe.
 */
export const RUN_FLAG = '--enable-pxplus-run';

/**
 * pxplus_dict_apply changes data dictionaries and data files, so it is off by default too: a person who works with
 * Claude Code turns it on (and is asked before a file with records changes); agents without a person (the pipeline)
 * only read.
 */
export const DICT_APPLY_FLAG = '--enable-dict-apply';

/**
 * Tool Registry
 * Add new tools to this array to register them with the MCP server
 */
export const tools: ToolHandler[] = [
  testTool,
  syntaxCheckTool,
  searchDocsTool,
  getDocTool,
  listDocsTool,
  controlPropertiesTool,
  errorTool,
  dictReadTool,
  dictCheckTool,
  dictEmbeddedTool,
  ...(process.argv.includes(DICT_APPLY_FLAG) ? [dictApplyTool] : []),
  readRecordsTool,
  compileTool,
  lstTool,
  getExecutablePathTool,
  ...(process.argv.includes(RUN_FLAG) ? [runTool] : []),
];

/**
 * Get a tool by name
 */
export function getToolByName(name: string): ToolHandler | undefined {
  return tools.find(tool => tool.name === name);
}
