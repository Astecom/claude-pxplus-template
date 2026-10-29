import { ToolHandler, ToolResponse } from '../types.js';
import { execFile } from 'child_process';
import { promisify } from 'util';
import { access } from 'fs/promises';
import { constants } from 'fs';
import stripAnsi from 'strip-ansi';
import { config, isPxPlusConfigured, getConfigError } from '../utils/config.js';

const execFileAsync = promisify(execFile);

/**
 * The listing without the terminal codes PxPlus writes around it (ESC [..., ESC ( B, ESC ) 0, ESC =, ESC >)
 */
function cleanListing(text: string): string {
  return stripAnsi(text)
    .replace(/\x1b\[[!?0-9;]*[a-zA-Z]/g, '')
    .replace(/\x1b[()][A-Z0-9]/g, '')
    .replace(/\x1b[=>]/g, '')
    .replace(/\r/g, '')
    .replace(/[\x00-\x08\x0B-\x1F\x7F]/g, '')
    .trim();
}

/**
 * List a tokenized PxPlus program or class as text (pxplus -lst)
 */
export const lstTool: ToolHandler = {
  name: 'pxplus_lst',
  description: 'Show a tokenized (compiled, binary) PxPlus program or class as source text, using pxplus -lst. Use it to read .pxprg/.pvc/.lib files that are not plain text. Optionally only some lines. Requires PXPLUS_EXECUTABLE_PATH to be configured in .env file.',
  inputSchema: {
    type: 'object',
    properties: {
      filePath: {
        type: 'string',
        description: 'Absolute path to the PxPlus program'
      },
      fromLine: {
        type: 'number',
        description: 'First line of the listing to return (1 = first; default: 1)',
        default: 1
      },
      maxLines: {
        type: 'number',
        description: 'Maximum number of lines to return (default: 2000)',
        default: 2000
      }
    },
    required: ['filePath']
  },
  handler: async (args: { filePath: string; fromLine?: number; maxLines?: number }): Promise<ToolResponse> => {
    try {
      const { filePath, fromLine = 1, maxLines = 2000 } = args;
      if (!isPxPlusConfigured()) {
        return { success: false, error: getConfigError() || 'PxPlus is not configured' };
      }
      if (!filePath || !filePath.trim()) {
        return { success: false, error: 'File path is required' };
      }
      try {
        await access(filePath, constants.R_OK);
      } catch {
        return { success: false, error: `File not found or not readable: ${filePath}` };
      }

      const { stdout } = await execFileAsync(config.pxplusExecutablePath, ['-lst', filePath], {
        encoding: 'utf8',
        maxBuffer: 16 * 1024 * 1024
      });
      const lines = cleanListing(stdout).split('\n');
      const first = Math.max(1, Math.trunc(fromLine));
      const part = lines.slice(first - 1, first - 1 + Math.max(1, Math.trunc(maxLines)));
      const last = first - 1 + part.length;

      return {
        success: true,
        data: {
          filePath,
          totalLines: lines.length,
          fromLine: first,
          toLine: last,
          nextLine: last < lines.length ? last + 1 : null,
          listing: part.join('\n')
        }
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred while listing the program'
      };
    }
  }
};
