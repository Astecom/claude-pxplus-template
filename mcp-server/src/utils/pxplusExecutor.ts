import { execFile } from 'child_process';
import { promisify } from 'util';
import { access, mkdir } from 'fs/promises';
import { dirname } from 'path';
import { constants } from 'fs';
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
 * Result of a compile operation
 */
export interface CompileResult {
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

    // 3. Strip control characters (like \u000f which appears in demo output)
    cleanOutput = cleanOutput.replace(/[\x00-\x1F\x7F]/g, '');

    // 4. Extract JSON array from output
    //    The output may contain a demo banner (from demo versions of PxPlus) followed by the JSON array.
    //    We need to find and extract just the JSON array part: [] or [{...}]
    //    Look for the last occurrence of a JSON array in the output
    const jsonArrayMatch = cleanOutput.match(/\[[\s\S]*\](?![\s\S]*\[)/);

    if (!jsonArrayMatch) {
      // No JSON array found, assume no errors
      cleanOutput = '[]';
    } else {
      cleanOutput = jsonArrayMatch[0].trim();
    }

    // 5. Fix PxPlus JSON format - add quotes around unquoted keys
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

/**
 * Compile a PxPlus file
 * @param sourceFilePath Absolute path to the source PxPlus file to compile
 * @param outputFilePath Absolute path where the compiled file should be written
 * @returns Compile result with success status and any output
 */
export async function runCompile(sourceFilePath: string, outputFilePath: string): Promise<CompileResult> {
  try {
    const executablePath = config.pxplusExecutablePath;

    if (!executablePath) {
      return {
        success: false,
        output: '',
        errorMessage: 'PxPlus executable path is not configured. Please set PXPLUS_EXECUTABLE_PATH in your .env file.'
      };
    }

    // Validate PxPlus executable exists and is executable
    try {
      await access(executablePath, constants.F_OK | constants.X_OK);
    } catch (error) {
      return {
        success: false,
        output: '',
        errorMessage: `PxPlus executable not found or not executable at: ${executablePath}\n\nPlease verify:\n1. The path is correct in your .env file\n2. The file exists\n3. The file has execute permissions\n4. If the path contains spaces, ensure it's properly quoted in .env`
      };
    }

    // Validate source file exists
    try {
      await access(sourceFilePath, constants.F_OK | constants.R_OK);
    } catch (error) {
      return {
        success: false,
        output: '',
        errorMessage: `Source file not found or not readable: ${sourceFilePath}\n\nPlease verify:\n1. The file path is correct\n2. The file exists\n3. You have read permissions`
      };
    }

    // Ensure output directory exists
    const outputDir = dirname(outputFilePath);
    try {
      await access(outputDir, constants.F_OK);
    } catch (error) {
      // Directory doesn't exist, try to create it
      try {
        await mkdir(outputDir, { recursive: true });
      } catch (mkdirError) {
        return {
          success: false,
          output: '',
          errorMessage: `Cannot create output directory: ${outputDir}\n\nError: ${mkdirError instanceof Error ? mkdirError.message : 'Unknown error'}`
        };
      }
    }

    // Use execFile to avoid shell interpretation issues (cross-platform safe)
    // Pass arguments as an array - no shell escaping needed
    // Command structure: pxplus -cpl source_file output_file
    const args = ['-cpl', sourceFilePath, outputFilePath];

    // Execute the command
    const { stdout, stderr } = await execFileAsync(executablePath, args, {
      encoding: 'utf8',
      maxBuffer: 1024 * 1024 // 1MB buffer
    });

    // Clean the output
    let cleanOutput = stripAnsi(stdout);
    cleanOutput = cleanOutput.replace(/\x1b\[[!?0-9;]*[a-zA-Z]/g, '');
    cleanOutput = cleanOutput.trim();

    // Also check stderr for any errors
    let cleanError = stripAnsi(stderr);
    cleanError = cleanError.replace(/\x1b\[[!?0-9;]*[a-zA-Z]/g, '');
    cleanError = cleanError.trim();

    // If there's error output, the compilation failed
    if (cleanError) {
      return {
        success: false,
        output: cleanError,
        errorMessage: 'Compilation failed - see output for details'
      };
    }

    return {
      success: true,
      output: cleanOutput || `Successfully compiled ${sourceFilePath} to ${outputFilePath}`
    };

  } catch (error) {
    // Provide detailed error message based on error type
    let errorMessage = 'Unknown error occurred during compilation';

    if (error instanceof Error) {
      errorMessage = error.message;

      // Add helpful context for common errors
      if (error.message.includes('ENOENT')) {
        errorMessage += '\n\nThis usually means a file or directory was not found. Please check all paths are correct.';
      } else if (error.message.includes('EACCES')) {
        errorMessage += '\n\nThis is a permission error. Please check file and directory permissions.';
      } else if (error.message.includes('EPERM')) {
        errorMessage += '\n\nOperation not permitted. Please check you have the necessary permissions.';
      }
    }

    return {
      success: false,
      output: '',
      errorMessage
    };
  }
}
