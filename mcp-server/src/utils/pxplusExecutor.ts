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

    // Strip ANSI escape codes from the output (PxPlus sometimes includes terminal control codes)
    // Then return the clean JSON directly to the AI
    const cleanOutput = stripAnsi(stdout).trim() || '[]';

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
