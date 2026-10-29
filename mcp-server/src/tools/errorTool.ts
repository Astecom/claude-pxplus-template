import { ToolHandler, ToolResponse } from '../types.js';
import { getDocTool } from './getDoc.js';

// The appendix with every PxPlus error: "## Error #20", "**Syntax error**", possible reasons
const ERRORS_PAGE = 'appendix/list_of_messages.md';

/**
 * Look up a PxPlus error number: its message and possible reasons
 */
export const errorTool: ToolHandler = {
  name: 'pxplus_error',
  description: 'Look up a PxPlus error number (ERR, "Error #20"): its message and the possible reasons from the documentation. Numbers above 255 are operating system errors (the OS error plus 256).',
  inputSchema: {
    type: 'object',
    properties: {
      number: {
        type: 'number',
        description: 'Error number, e.g. 20 for "Error #20: Syntax error"'
      }
    },
    required: ['number']
  },
  handler: async (args: { number: number }): Promise<ToolResponse> => {
    const number = Math.trunc(Number(args.number));
    if (!Number.isFinite(number) || number < 0) {
      return { success: false, error: 'Give an error number of 0 or more' };
    }
    if (number > 255) {
      return {
        success: true,
        data: {
          number,
          message: `Operating system error ${number - 256} (PxPlus reports OS errors as the OS error plus 256)`,
          path: ERRORS_PAGE
        }
      };
    }

    const result = await getDocTool.handler({ path: ERRORS_PAGE, section: `Error #${number}` });
    if (!result.success) {
      return { success: false, error: `Error #${number} is not in the documentation (${ERRORS_PAGE})` };
    }
    // The first bold line under the heading is the message itself
    const content: string = result.data.content;
    const message = content.match(/\*\*([^*\n]+?)\s*\*\*/);
    return {
      success: true,
      data: {
        number,
        message: message ? message[1].trim() : undefined,
        content: content.trim(),
        path: ERRORS_PAGE
      }
    };
  }
};
