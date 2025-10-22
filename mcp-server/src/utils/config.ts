import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Load .env file from the mcp-server root directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const envPath = join(__dirname, '..', '..', '.env');

dotenv.config({ path: envPath });

/**
 * Configuration for the MCP server
 */
export const config = {
  /**
   * Path to the PxPlus executable
   * Must be set in .env file as PXPLUS_EXECUTABLE_PATH
   */
  pxplusExecutablePath: process.env.PXPLUS_EXECUTABLE_PATH || '',
};

/**
 * Check if PxPlus executable path is configured
 */
export function isPxPlusConfigured(): boolean {
  return config.pxplusExecutablePath.trim().length > 0;
}

/**
 * Get configuration error message if not properly configured
 */
export function getConfigError(): string | null {
  if (!isPxPlusConfigured()) {
    return 'PxPlus executable path is not configured. Please set PXPLUS_EXECUTABLE_PATH in the .env file.';
  }
  return null;
}
