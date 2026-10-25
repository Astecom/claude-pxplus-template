import { execFile } from 'child_process';
import { createHash } from 'crypto';
import { existsSync, lstatSync, readdirSync, readFileSync, realpathSync } from 'fs';
import { mkdtemp, rm, writeFile } from 'fs/promises';
import { homedir, tmpdir } from 'os';
import { dirname, join, resolve, sep } from 'path';
import stripAnsi from 'strip-ansi';
import { config } from './config.js';

const SANDBOX_EXEC = '/usr/bin/sandbox-exec';
const OUTPUT_MARK = '@@PXPLUS_RUN@@';
const MAX_OUTPUT = 10000;

export const DEFAULT_TIMEOUT = 30;
export const MAX_TIMEOUT = 120;

/**
 * The PxPlus program that runs the user's program: it CALLs it and reports how it ended,
 * so an error comes back with its number, line and message instead of a silent exit.
 * The error handler can also be reached with ERR=0 (INPUT without a keyboard), so each way out has its own mark.
 * TCB(30) is the line of the error in the called program (TCB(5) would be the line of the CALL).
 * 'XT'=0 keeps PxPlus from exiting silently on an error that gets past the handler (a program that sets 'NE'):
 * it then prints the error and the program and line itself.
 */
const RUNNER = [
  "SET_PARAM 'XT'=0",
  'SETERR PXPLUS_RUN_ERR',
  'CALL ENV("PXPLUS_RUN_PROGRAM")',
  `PRINT "${OUTPUT_MARK}OK"`,
  'QUIT',
  'PXPLUS_RUN_ERR:',
  `PRINT "${OUTPUT_MARK}ERR|",STR(ERR),"|",STR(TCB(30)),"|",MSG(ERR)`,
  'QUIT',
  ''
].join('\n');

/**
 * Result of running a program
 */
export interface RunResult {
  success: boolean;
  output: string;
  error?: { number: number; line: number; message: string };
  warning?: string;
  errorMessage?: string;
}

/**
 * A path for the sandbox profile, quoted
 */
function quoted(path: string): string {
  return '"' + path.replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '"';
}

/**
 * Where symbolic links in the PxPlus folder (and its lib) point to, so PxPlus can still read them
 */
function linkedFiles(pxplusDir: string): string[] {
  const found = new Set<string>();
  for (const dir of [pxplusDir, join(pxplusDir, 'lib')]) {
    if (!existsSync(dir)) {
      continue;
    }
    for (const name of readdirSync(dir)) {
      const path = join(dir, name);
      if (lstatSync(path).isSymbolicLink() && existsSync(path)) {
        found.add(realpathSync(path));
      }
    }
  }
  return [...found].sort();
}

/**
 * The activation file PxPlus opens for writing when it starts, if there is one
 */
function activationFile(pxplusDir: string): string | undefined {
  const path = join(pxplusDir, 'lib', 'ACTIVATE.PVX');
  return existsSync(path) ? realpathSync(path) : undefined;
}

function fingerprint(path: string | undefined): string {
  return path ? createHash('sha256').update(readFileSync(path)).digest('hex') : '';
}

/**
 * The macOS sandbox for one run. PxPlus may read its own installation and the workspace, write only the
 * workspace and the run's own temporary folder (plus its activation file, or it won't start), start no
 * other program (INVOKE, shell) and use no network. The rest of the home folder, mounted volumes and the
 * shared temporary folders stay closed.
 */
export function sandboxProfile(pxplus: string, workspace: string, runDir: string): string {
  const pxplusDir = dirname(pxplus);
  const linked = linkedFiles(pxplusDir).map(p => `(literal ${quoted(p)})`).join(' ');
  const activation = activationFile(pxplusDir);
  return [
    '(version 1)',
    '(allow default)',
    '(deny network*)',
    '(deny process-exec*)',
    `(allow process-exec (literal ${quoted(pxplus)}))`,
    '(deny appleevent-send)',
    `(deny file-read* (subpath ${quoted(realpathSync(homedir()))}) (subpath "/Volumes") (subpath "/private/tmp") (subpath "/private/var/folders"))`,
    '(deny file-write*)',
    `(allow file-read* (subpath ${quoted(pxplusDir)})${linked ? ' ' + linked : ''})`,
    `(allow file-read* file-write* (subpath ${quoted(workspace)}) (subpath ${quoted(runDir)}))`,
    ...(activation ? [`(allow file-write-data (literal ${quoted(activation)}))`] : []),
    '(allow file-write* (literal "/dev/null") (literal "/dev/stdout") (literal "/dev/stderr") (literal "/dev/tty"))',
    ''
  ].join('\n');
}

/**
 * The program's own output and how it ended, from what PxPlus printed
 */
export function parseRunOutput(stdout: string): Pick<RunResult, 'success' | 'output' | 'error'> {
  let clean = stripAnsi(stdout).replace(/\x1b\[[!?0-9;]*[a-zA-Z]/g, '').replace(/\r/g, '');
  clean = clean.replace(/[\x00-\x08\x0B-\x1F\x7F]/g, '');
  const at = clean.lastIndexOf(OUTPUT_MARK);
  if (at < 0) {
    // PxPlus's own error report, in Command mode: without a terminal its mnemonics ('RM') come out as text
    return { success: false, output: clean.replace(/'[A-Z0-9]{2}'/g, '').trim().slice(-MAX_OUTPUT) };
  }
  const output = clean.slice(0, at).replace(/^\n+/, '').replace(/\s+$/, '').slice(-MAX_OUTPUT);
  const [kind, number, line, ...message] = clean.slice(at + OUTPUT_MARK.length).split('\n')[0].split('|');
  if (kind.trim() === 'OK') {
    return { success: true, output };
  }
  const errorNumber = parseInt(number, 10) || 0;
  return {
    success: false,
    output,
    error: {
      number: errorNumber,
      line: parseInt(line, 10) || 0,
      message: errorNumber ? message.join('|').trim() : 'Interrupted (the program waited for input, which a run does not have)'
    }
  };
}

/**
 * A program path inside the workspace, or an error message
 */
export function programInWorkspace(workspace: string, filePath: string): { path?: string; error?: string } {
  const target = resolve(workspace, filePath);
  if (!existsSync(target)) {
    return { error: `Program not found: ${filePath}` };
  }
  const real = realpathSync(target);
  if (real !== workspace && !real.startsWith(workspace + sep)) {
    return { error: `${filePath} is outside the folder the MCP server runs in (${workspace}).` };
  }
  return { path: real };
}

/**
 * Run a PxPlus program (a file in the workspace, or code) in the macOS sandbox
 * @param program File path relative to the workspace, or undefined when code is given
 * @param code PxPlus code to run instead of a file
 * @param args Values the program reads with ARG(1), ARG(2), ...
 * @param timeoutSeconds Seconds before the run is stopped
 */
export async function runProgram(program: string | undefined, code: string | undefined, args: string[],
                                 timeoutSeconds: number): Promise<RunResult> {
  if (process.platform !== 'darwin' || !existsSync(SANDBOX_EXEC)) {
    return {
      success: false,
      output: '',
      errorMessage: 'pxplus_run needs the macOS sandbox (sandbox-exec), which this system does not have. Run the program another way.'
    };
  }
  if (!config.pxplusExecutablePath || !existsSync(config.pxplusExecutablePath)) {
    return { success: false, output: '', errorMessage: 'PxPlus executable not found; set PXPLUS_EXECUTABLE_PATH in the .env file.' };
  }
  const workspace = realpathSync(process.cwd());
  if (workspace === realpathSync(homedir()) || workspace === '/') {
    return {
      success: false,
      output: '',
      errorMessage: `The MCP server runs in ${workspace}; pxplus_run only works in a project folder.`
    };
  }
  let programPath: string | undefined;
  if (program) {
    const found = programInWorkspace(workspace, program);
    if (found.error) {
      return { success: false, output: '', errorMessage: found.error };
    }
    programPath = found.path;
  }

  const pxplus = realpathSync(config.pxplusExecutablePath);
  const runDir = realpathSync(await mkdtemp(join(tmpdir(), 'pxplus-run-')));
  try {
    if (!programPath) {
      programPath = join(runDir, 'program.txt');
      await writeFile(programPath, code || '');
    }
    const runner = join(runDir, 'runner.txt');
    const profile = join(runDir, 'sandbox.sb');
    await writeFile(runner, RUNNER);
    await writeFile(profile, sandboxProfile(pxplus, workspace, runDir));

    const activation = activationFile(dirname(pxplus));
    const before = fingerprint(activation);
    const timeout = Math.min(Math.max(timeoutSeconds || DEFAULT_TIMEOUT, 1), MAX_TIMEOUT);
    const env = {
      PATH: '/usr/bin:/bin',
      HOME: runDir,
      TMPDIR: runDir,
      TEMP: runDir,  // PxPlus puts its work files (WRK...) here
      TERM: 'dumb',
      LANG: process.env.LANG || 'en_US.UTF-8',
      PXPLUS_RUN_PROGRAM: programPath
    };
    const commandArgs = ['-f', profile, pxplus, runner, ...(args.length ? ['-arg', ...args] : [])];

    const { stdout, timedOut } = await new Promise<{ stdout: string; timedOut: boolean }>((done) => {
      const child = execFile(SANDBOX_EXEC, commandArgs, {
        cwd: workspace, env, encoding: 'utf8', timeout: timeout * 1000, killSignal: 'SIGKILL', maxBuffer: 4 * 1024 * 1024
      }, (error, out) => done({ stdout: String(out || ''), timedOut: Boolean(error && (error as any).killed) }));
      child.stdin?.end();  // no keyboard: INPUT gets an end of file instead of waiting
    });

    const result: RunResult = parseRunOutput(stdout);
    if (timedOut) {
      result.success = false;
      result.errorMessage = `The program did not finish within ${timeout} seconds (an endless loop, or waiting for something?).`;
    } else if (!result.success && !result.error) {
      result.errorMessage = 'The program ended without reporting back (an error PxPlus reported itself, QUIT or BYE in the program, or PxPlus did not start); see the output.';
    }
    if (fingerprint(activation) !== before) {
      result.warning = `PxPlus's activation file (${activation}) changed during this run.`;
    }
    return result;
  } finally {
    await rm(runDir, { recursive: true, force: true });
  }
}
