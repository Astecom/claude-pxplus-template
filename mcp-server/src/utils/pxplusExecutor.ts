import { execFile } from 'child_process';
import { promisify } from 'util';
import stripAnsi from 'strip-ansi';
import { config } from './config.js';

const execFileAsync = promisify(execFile);

/**
 * Result of a syntax check
 */
export interface SyntaxCheckResult {
  success: boolean;
  output: string;
  errorMessage?: string;
}

/**
 * Run PxPlus syntax check on a file
 * @param filePath Absolute path to the PxPlus file to check
 * @returns Syntax check result with any errors found
 */
export async function runSyntaxCheck(filePath: string): Promise<SyntaxCheckResult> {
  try {
    const executablePath = config.pxplusExecutablePath;

    if (!executablePath) {
      return {
        success: false,
        output: '[]',
        errorMessage: 'PxPlus executable path is not configured'
      };
    }

    // Use execFile to avoid shell interpretation issues (cross-platform safe)
    // Pass arguments as an array - no shell escaping needed
    const args = ['*tools/extEditor;ErrorCheck', '-arg', filePath];

    // Execute the command
    const { stdout, stderr } = await execFileAsync(executablePath, args, {
      encoding: 'utf8',
      maxBuffer: 1024 * 1024 // 1MB buffer
    });

    // Clean the output:
    // 1. Strip ANSI escape codes (PxPlus includes terminal control codes like \u001b[!p)
    let cleanOutput = stripAnsi(stdout);

    // 2. Additional regex to catch any remaining ANSI codes that strip-ansi might miss
    //    Pattern matches: ESC [ <parameters like !?0-9;> <final letter>
    cleanOutput = cleanOutput.replace(/\x1b\[[!?0-9;]*[a-zA-Z]/g, '');

    // 3. Trim whitespace
    cleanOutput = cleanOutput.trim() || '[]';

    // 4. Fix PxPlus JSON format - add quotes around unquoted keys
    //    PxPlus returns: {row:8,column:0,...}
    //    Valid JSON needs: {"row":8,"column":0,...}
    cleanOutput = cleanOutput.replace(/([{,]\s*)(\w+)(:)/g, '$1"$2"$3');

    // Check if it's an empty array (no errors)
    const hasErrors = cleanOutput !== '[]' && cleanOutput.length > 2;

    return {
      success: !hasErrors,
      output: cleanOutput
    };

  } catch (error) {
    return {
      success: false,
      output: '[]',
      errorMessage: error instanceof Error ? error.message : 'Unknown error occurred'
    };
  }
}
