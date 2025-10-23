import { execFile } from 'child_process';
import { promisify } from 'util';
import { config } from './config.js';

const execFileAsync = promisify(execFile);

/**
 * PxPlus syntax error information
 */
export interface PxPlusSyntaxError {
  row: number;
  column: number;
  text: string;
  type: string;
}

/**
 * Result of a syntax check
 */
export interface SyntaxCheckResult {
  success: boolean;
  errors: PxPlusSyntaxError[];
  rawOutput?: string;
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
        errors: [],
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

    // Parse the JSON output
    try {
      const errors: PxPlusSyntaxError[] = JSON.parse(stdout || '[]');

      return {
        success: errors.length === 0,
        errors,
        rawOutput: stdout
      };
    } catch (parseError) {
      // If JSON parsing fails, return the raw output
      return {
        success: false,
        errors: [],
        rawOutput: stdout,
        errorMessage: `Failed to parse PxPlus output: ${parseError instanceof Error ? parseError.message : 'Unknown error'}`
      };
    }

  } catch (error) {
    return {
      success: false,
      errors: [],
      errorMessage: error instanceof Error ? error.message : 'Unknown error occurred'
    };
  }
}
