import { execFile } from 'child_process';
import { mkdir, mkdtemp, rm, writeFile } from 'fs/promises';
import { tmpdir } from 'os';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import stripAnsi from 'strip-ansi';
import { config } from './config.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

// The PxPlus side: mcp-server/pxplus/dict.pxprg (from dist/utils/)
const HELPER = join(__dirname, '..', '..', 'pxplus', 'dict.pxprg');
const MARK = '@@DICT@@';

export const DEFAULT_DICT_TIMEOUT = 60;
export const MAX_DICT_TIMEOUT = 600;

/**
 * How the helper is started: the dictionary folder, and optionally the environment of the project
 * (PREFIX, PREFIX PROGRAM, a setup program CALLed first)
 */
export interface DictOptions {
  dir?: string;
  dryRun?: boolean;
  confirm?: boolean;
  prefix?: string;
  prefixProgram?: string;
  setup?: string;
  encoding?: 'latin1' | 'utf8';
  timeoutSeconds?: number;
}

/**
 * One step of a request: operation, table (or file), target (column, index or "file") and NAME=value fields
 */
export interface DictStep {
  op: string;
  table?: string;
  target?: string;
  props?: Record<string, string | number | boolean | undefined>;
}

export interface DictResult {
  steps: { step: number; ok: boolean; text: string }[];
  lines: string[][];      // the data lines: ["TABLE", ...], ["COLUMN", ...], ...
  done: boolean;          // all steps ran
  output?: string;        // what PxPlus printed besides the helper lines, when something went wrong
}

/**
 * A value for the request file: no TAB or line break
 */
function field(value: string | number | boolean | undefined): string {
  const text = typeof value === 'boolean' ? (value ? '1' : '0') : String(value ?? '');
  return text.replace(/[\t\r\n]+/g, ' ');
}

/**
 * Run the helper with these steps and collect what it reports
 */
export async function runDict(steps: DictStep[], options: DictOptions): Promise<DictResult> {
  const lines: string[] = [];
  if (options.dir) lines.push(['DIR', field(options.dir)].join('\t'));
  if (options.prefix) lines.push(['PREFIX', field(options.prefix)].join('\t'));
  if (options.prefixProgram) lines.push(['PREFIXPROGRAM', field(options.prefixProgram)].join('\t'));
  if (options.setup) lines.push(['SETUP', field(options.setup)].join('\t'));
  if (options.dryRun) lines.push('DRYRUN\t1');
  if (options.confirm) lines.push('CONFIRM\t1');
  for (const step of steps) {
    const props = Object.entries(step.props || {})
      .filter(([, value]) => value !== undefined && value !== '')
      .flatMap(([name, value]) => name === 'SEG' ? String(value).split('\n').map(seg => `SEG=${field(seg)}`) : [`${name}=${field(value)}`]);
    lines.push([step.op, field(step.table), field(step.target), ...props].join('\t'));
  }

  const work = await mkdtemp(join(tmpdir(), 'pxplus-dict-'));
  try {
    if (options.dryRun) {
      // create_dictionary in a dry run: the next steps are checked against an empty dictionary here
      const scratch = join(work, 'scratch');
      await mkdir(scratch);
      lines.splice(1, 0, ['SCRATCH', field(scratch)].join('\t'));
    }
    const request = join(work, 'request.txt');
    await writeFile(request, lines.join('\n') + '\n', 'latin1');
    const timeout = Math.min(Math.max(1, options.timeoutSeconds || DEFAULT_DICT_TIMEOUT), MAX_DICT_TIMEOUT) * 1000;
    const stdout = await new Promise<Buffer>((resolve, reject) => {
      execFile(config.pxplusExecutablePath, [HELPER, '-arg', request], { encoding: 'buffer', maxBuffer: 64 * 1024 * 1024, timeout, cwd: work },
        (error, out) => {
          // PxPlus can end with a non-zero code after QUIT; what it printed still counts
          if (error && (!out || out.length === 0)) reject(error);
          else resolve(out);
        });
    });
    return parse(stdout.toString(options.encoding || 'latin1'));
  } finally {
    await rm(work, { recursive: true, force: true });
  }
}

function parse(text: string): DictResult {
  const clean = stripAnsi(text).replace(/\x1b\[[!?0-9;]*[a-zA-Z]/g, '').replace(/\x1b[()][A-Z0-9]/g, '').replace(/\x1b[=>]/g, '');
  const result: DictResult = { steps: [], lines: [], done: false };
  const other: string[] = [];
  for (const raw of clean.split(/\r?\n/)) {
    const at = raw.indexOf(MARK + '\t');
    if (at < 0) {
      if (raw.trim()) other.push(raw.trim());
      continue;
    }
    const parts = raw.substring(at + MARK.length + 1).split('\t');
    if (parts[0] === 'OK' || parts[0] === 'FAIL') {
      result.steps.push({ step: Number(parts[1]), ok: parts[0] === 'OK', text: parts.slice(2).join(' ').trim() });
    } else if (parts[0] === 'DONE') {
      result.done = true;
    } else {
      result.lines.push(parts);
    }
  }
  if (!result.done && other.length) {
    result.output = other.slice(-20).join('\n');
  }
  return result;
}

/**
 * The names in an IOList: "IOLIST NUMMER$,NAAM$,SALDO" -> ["NUMMER$", "NAAM$", "SALDO"]
 */
export function iolistNames(iolist: string): string[] {
  return iolist.replace(/^\s*IOLIST\s*/i, '').split(',').map(name => name.trim()).filter(Boolean);
}
