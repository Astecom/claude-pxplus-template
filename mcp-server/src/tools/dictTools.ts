import { ToolHandler, ToolResponse, ToolContext } from '../types.js';
import fs from 'fs';
import path from 'path';
import { isPxPlusConfigured, getConfigError } from '../utils/config.js';
import { runDict, iolistNames, DictOptions, DictStep, DictResult, DEFAULT_DICT_TIMEOUT, MAX_DICT_TIMEOUT } from '../utils/pxplusDict.js';

/**
 * The project's environment, for files with an embedded IO program (e.g. a change logger): without it such a
 * file does not open (Error #121). All optional; without them the helper runs as it is.
 */
const ENVIRONMENT = {
  prefix: {
    type: 'string',
    description: 'PREFIX search paths (space separated). Note: relative file names, also physical files, are then found and created through it, as in the application'
  },
  prefixProgram: {
    type: 'string',
    description: 'PREFIX PROGRAM search paths, e.g. where the embedded IO program of the files is'
  },
  setup: {
    type: 'string',
    description: 'A program of the project that is CALLed first, e.g. to set PREFIX and globals'
  },
  encoding: {
    type: 'string',
    enum: ['latin1', 'utf8'],
    description: 'Character set of the data (default: latin1)'
  },
  timeoutSeconds: {
    type: 'number',
    description: `Stop after this many seconds (default ${DEFAULT_DICT_TIMEOUT}, at most ${MAX_DICT_TIMEOUT})`
  }
};

type Environment = Pick<DictOptions, 'prefix' | 'prefixProgram' | 'setup' | 'encoding' | 'timeoutSeconds'>;

function environmentOf(args: Environment): Environment {
  return { prefix: args.prefix, prefixProgram: args.prefixProgram, setup: args.setup, encoding: args.encoding, timeoutSeconds: args.timeoutSeconds };
}

function notConfigured(): ToolResponse | null {
  return isPxPlusConfigured() ? null : { success: false, error: getConfigError() || 'PxPlus is not configured' };
}

/**
 * The first failed step, or what PxPlus printed when the helper did not finish
 */
function failure(result: DictResult): ToolResponse | null {
  const failed = result.steps.find(step => !step.ok);
  if (failed) {
    return { success: false, error: failed.text, data: { step: failed.step, steps: result.steps } };
  }
  if (!result.done) {
    return { success: false, error: 'The PxPlus helper stopped before it was done', data: { steps: result.steps, output: result.output } };
  }
  return null;
}

// --- Turning the helper's lines into objects ---------------------------------------

function tableOf(parts: string[]) {
  const [, name, group, description, physicalFile, ioProgram, exists, records, openError, fullPath] = parts;
  return {
    name, group: group || undefined, description: description || undefined, physicalFile,
    ioProgram: ioProgram || undefined,
    fileExists: exists === '1',
    records: exists === '1' && records !== '-1' ? Number(records) : undefined,
    openError: openError || undefined,
    fullPath: fullPath || undefined
  };
}

function columnOf(parts: string[]) {
  const [, no, name, variable, type, length, scale, description, internalFormat, externalFormat, className, required, uppercase, defaultValue] = parts;
  return {
    no: Number(no), name, variable, type, length: Number(length), scale: Number(scale) || undefined,
    description: description || undefined, internalFormat: internalFormat || undefined, externalFormat: externalFormat || undefined,
    class: className || undefined, required: required === '1' || undefined, uppercase: uppercase === '1' || undefined,
    defaultValue: defaultValue || undefined
  };
}

function indexOf(parts: string[]) {
  const [, no, name, unique, ...segments] = parts;
  return {
    no: Number(no), name, unique: unique === '1',
    segments: segments.filter(Boolean).map(segment => {
      const [column, attr] = segment.split(':');
      return { column, descending: (attr || '').toUpperCase() === 'D' };
    })
  };
}

function definitionOf(result: DictResult) {
  const table = result.lines.find(l => l[0] === 'TABLE');
  const iolist = result.lines.find(l => l[0] === 'IOLIST');
  const file = result.lines.find(l => l[0] === 'FILE');
  const fileIolist = file ? file[1] : undefined;
  return {
    table: table ? tableOf(table) : undefined,
    columns: result.lines.filter(l => l[0] === 'COLUMN').map(columnOf),
    indexes: result.lines.filter(l => l[0] === 'INDEX').map(indexOf),
    iolist: iolist ? iolist[1] : undefined,
    file: file ? {
      iolist: fileIolist,
      keys: (file[2] || '').split(',').filter(Boolean),
      // The file follows the dictionary only after adjust_file
      sameAsDictionary: iolist ? fileIolist === iolist[1] : undefined
    } : undefined
  };
}

// --- Reading -------------------------------------------------------------------------

export const dictReadTool: ToolHandler = {
  name: 'pxplus_dict_read',
  description: 'Read the PxPlus data dictionary (providex.ddf/.dde) in a folder. Without a table: all tables with group, physical file, embedded IO program, whether the file exists and its number of records. With a table: its columns, indexes, IOList and the state of its physical file (does it match the dictionary). Read-only. A file with an embedded IO program only opens when the program is found: give prefixProgram or setup, otherwise its openError says why (Error #121).',
  inputSchema: {
    type: 'object',
    properties: {
      dir: { type: 'string', description: 'Folder of providex.ddf' },
      table: { type: 'string', description: 'Table name; empty: all tables' },
      ...ENVIRONMENT
    },
    required: ['dir']
  },
  handler: async (args: { dir: string; table?: string } & Environment): Promise<ToolResponse> => {
    try {
      const configError = notConfigured();
      if (configError) return configError;
      const steps: DictStep[] = args.table ? [{ op: 'read_table', table: args.table }] : [{ op: 'read_tables' }];
      const result = await runDict(steps, { dir: args.dir, ...environmentOf(args) });
      const failed = failure(result);
      if (failed) return failed;
      return {
        success: true,
        data: args.table
          ? definitionOf(result)
          : { dir: args.dir, tables: result.lines.filter(l => l[0] === 'TABLE').map(tableOf) }
      };
    } catch (error) {
      return { success: false, error: error instanceof Error ? error.message : 'Unknown error while reading the dictionary' };
    }
  }
};

export const dictCheckTool: ToolHandler = {
  name: 'pxplus_dict_check',
  description: 'Check every table of a PxPlus data dictionary: is its physical file there, does it open (an embedded IO program not found gives Error #121), do its fields and keys match the dictionary, has it a primary key. Read-only. Returns the tables with findings first; give prefixProgram or setup for files with an embedded IO program.',
  inputSchema: {
    type: 'object',
    properties: {
      dir: { type: 'string', description: 'Folder of providex.ddf' },
      ...ENVIRONMENT
    },
    required: ['dir']
  },
  handler: async (args: { dir: string } & Environment): Promise<ToolResponse> => {
    try {
      const configError = notConfigured();
      if (configError) return configError;
      const result = await runDict([{ op: 'check_tables' }], { dir: args.dir, ...environmentOf(args) });
      const failed = failure(result);
      if (failed) return failed;
      const tables = result.lines.filter(l => l[0] === 'CHECK').map(([, name, file, records, found]) => ({
        name, file, records: records === '-1' ? undefined : Number(records),
        findings: (found || '').split('; ').filter(Boolean)
      }));
      tables.sort((a, b) => Number(b.findings.length > 0) - Number(a.findings.length > 0));
      return {
        success: true,
        data: { dir: args.dir, tables: tables.length, withFindings: tables.filter(t => t.findings.length).length, results: tables }
      };
    } catch (error) {
      return { success: false, error: error instanceof Error ? error.message : 'Unknown error while checking the dictionary' };
    }
  }
};

export const dictEmbeddedTool: ToolHandler = {
  name: 'pxplus_dict_embedded',
  description: 'Read the definition embedded in a PxPlus data file itself (columns, indexes, IOList), without a providex.ddf. Read-only. Needs prefixProgram or setup when the file has an embedded IO program.',
  inputSchema: {
    type: 'object',
    properties: {
      file: { type: 'string', description: 'Path of the data file' },
      ...ENVIRONMENT
    },
    required: ['file']
  },
  handler: async (args: { file: string } & Environment): Promise<ToolResponse> => {
    try {
      const configError = notConfigured();
      if (configError) return configError;
      // The folder of the file serves as working folder; no providex.ddf is needed
      const dir = args.file.includes('/') || args.file.includes('\\') ? args.file.replace(/[\\/][^\\/]*$/, '') || '/' : '.';
      const result = await runDict([{ op: 'read_embedded', table: args.file }], { dir, ...environmentOf(args) });
      const failed = failure(result);
      if (failed) return failed;
      return { success: true, data: definitionOf(result) };
    } catch (error) {
      return { success: false, error: error instanceof Error ? error.message : 'Unknown error while reading the file' };
    }
  }
};

export const readRecordsTool: ToolHandler = {
  name: 'pxplus_read_records',
  description: 'Read records from a PxPlus data file, read-only (OPEN INPUT): from a table of a data dictionary (dir + table) or from a file (file). Starts at the first key >= key, on key number kno, at most max records (default 20, at most 1000); nextKey continues. Fields are named by the file\'s IOList. Needs prefixProgram or setup when the file has an embedded IO program.',
  inputSchema: {
    type: 'object',
    properties: {
      dir: { type: 'string', description: 'Folder of providex.ddf (with table)' },
      table: { type: 'string', description: 'Table name in the dictionary' },
      file: { type: 'string', description: 'Path of the data file (instead of dir + table)' },
      key: { type: 'string', description: 'Start at the first key >= this (default: the first record)' },
      kno: { type: 'number', description: 'Key number (default 0, the primary key)' },
      max: { type: 'number', description: 'Maximum number of records (default 20, at most 1000)' },
      ...ENVIRONMENT
    }
  },
  handler: async (args: { dir?: string; table?: string; file?: string; key?: string; kno?: number; max?: number } & Environment): Promise<ToolResponse> => {
    try {
      const configError = notConfigured();
      if (configError) return configError;
      if (!args.file && !(args.dir && args.table)) {
        return { success: false, error: 'Give file, or dir and table' };
      }
      const max = Math.min(Math.max(1, Math.trunc(args.max || 20)), 1000);
      const props = { KEY: args.key, KNO: args.kno !== undefined ? Math.trunc(args.kno) : undefined, MAX: max };
      const dir = args.dir || (args.file!.replace(/[\\/][^\\/]*$/, '') || '.');
      const step: DictStep = args.file
        ? { op: 'read_records', table: args.file, target: 'file', props }
        : { op: 'read_records', table: args.table, props };
      const result = await runDict([step], { dir, ...environmentOf(args) });
      const failed = failure(result);
      if (failed) return failed;

      const iolist = result.lines.find(l => l[0] === 'IOLIST');
      const names = iolist ? iolistNames(iolist[1]) : [];
      const records = result.lines.filter(l => l[0] === 'RECORD').map(([, key, ...fields]) => {
        // A record ends with a field separator: one empty field too many
        if (fields.length > names.length && fields[fields.length - 1] === '') fields.pop();
        const values: Record<string, string> = {};
        names.forEach((name, i) => { values[name] = fields[i] ?? ''; });
        return fields.length > names.length ? { key, values, extra: fields.slice(names.length) } : { key, values };
      });
      const summary = result.steps[result.steps.length - 1]?.text || '';
      const next = summary.match(/, next key: (.*)$/);
      return {
        success: true,
        data: { iolist: iolist ? iolist[1] : undefined, count: records.length, records, nextKey: next ? next[1] : null }
      };
    } catch (error) {
      return { success: false, error: error instanceof Error ? error.message : 'Unknown error while reading records' };
    }
  }
};

// --- Changing ------------------------------------------------------------------------

const COLUMN_PROPS: Record<string, string> = {
  description: 'DESCRIPTION', type: 'TYPE', length: 'LENGTH', scale: 'SCALE', internalFormat: 'INTERNALFORMAT',
  externalFormat: 'EXTERNALFORMAT', class: 'CLASS', defaultValue: 'DEFAULTVALUE', help: 'HELP', notes: 'NOTES',
  query: 'QUERY', validation: 'VALIDATION', occurs: 'OCCURS', shortName: 'SHORTNAME', alternateName: 'ALTERNATENAME',
  tag: 'TAG', security: 'SECURITY', inputLength: 'INPUTLENGTH', required: 'ISREQUIRED', uppercase: 'ISUPPERCASE',
  readOnly: 'ISREADONLY'
};

const TABLE_PROPS: Record<string, string> = {
  group: 'GROUP', description: 'DESCRIPTION', physicalFile: 'PHYSICALFILE', ioProgram: 'IOPROGRAM', notes: 'NOTES',
  options: 'OPTIONS', extension: 'EXTENSION', blockSize: 'BLOCKSIZE', security: 'SECURITY',
  dataCompression: 'ISDATACOMPRESSION', extendedRecords: 'ISEXTENDEDRECORDS', zlibCompression: 'ISZLIBCOMPRESSION'
};

/**
 * The JSON properties as the helper's NAME=value fields; an unknown property is an error, not silently ignored
 */
function mapProps(values: Record<string, any> | undefined, names: Record<string, string>, what: string): Record<string, string | number | boolean> {
  const props: Record<string, string | number | boolean> = {};
  for (const [key, value] of Object.entries(values || {})) {
    if (key === 'name' || value === undefined || value === null) continue;
    const name = names[key];
    if (!name) throw new Error(`Unknown ${what} property "${key}"; known: ${Object.keys(names).join(', ')}`);
    props[name] = key === 'type' ? typeOf(value) : value;
  }
  return props;
}

function typeOf(value: any): string {
  const type = String(value).toUpperCase();
  if (type === 'S' || type === 'STRING') return 'S';
  if (type === 'N' || type === 'NUMBER' || type === 'NUMERIC') return 'N';
  throw new Error(`Column type "${value}" not understood; use "S" (string) or "N" (numeric)`);
}

function indexProps(index: { unique?: boolean; segments?: { column: string; descending?: boolean }[] } | undefined, adding: boolean) {
  const props: Record<string, string | number | boolean> = {};
  if (index?.unique !== undefined || adding) props.UNIQUE = !!index?.unique;
  if (index?.segments) {
    if (!index.segments.length) throw new Error('An index needs at least one segment');
    props.SEG = index.segments.map(s => {
      if (!s.column) throw new Error('Each index segment needs a column');
      return `${s.column}:${s.descending ? 'D' : 'A'}`;
    }).join('\n');
  }
  return props;
}

function need(value: any, what: string, op: string): string {
  if (value === undefined || value === null || String(value).trim() === '') {
    throw new Error(`${op} needs ${what}`);
  }
  return String(value);
}

/**
 * One operation of pxplus_dict_apply as helper steps (add_table with columns and indexes becomes several)
 */
function stepsOf(operation: any): DictStep[] {
  const op = String(operation?.op || '');
  const table = operation?.table;
  switch (op) {
    case 'create_dictionary':
      return [{ op }];
    case 'add_table': {
      const name = need(table, 'table', op);
      // Next to the table properties, add_table carries its columns, indexes and createFile
      const { op: _op, table: _table, columns, indexes, createFile, ...tableProps } = operation;
      const steps: DictStep[] = [{ op, table: name, props: mapProps(tableProps, TABLE_PROPS, 'table') }];
      for (const column of columns || []) {
        steps.push(...stepsOf({ op: 'add_column', table: name, column }));
      }
      for (const index of indexes || []) {
        steps.push(...stepsOf({ op: 'add_index', table: name, index }));
      }
      if (createFile) steps.push({ op: 'create_file', table: name });
      return steps;
    }
    case 'update_table':
      return [{ op, table: need(table, 'table', op), props: mapProps(operation.set, TABLE_PROPS, 'table') }];
    case 'rename_table':
      return [{ op, table: need(table, 'table', op), props: { NEWNAME: need(operation.newName, 'newName', op) } }];
    case 'drop_table':
    case 'create_file':
    case 'load_definition':
    case 'delete_file':
      return [{ op, table: need(table, 'table', op) }];
    case 'adjust_file':
      return [{ op, table: need(table, 'table', op), props: { ALLOWDATALOSS: operation.allowDataLoss ? 1 : undefined } }];
    case 'add_column': {
      const column = operation.column || {};
      const props = mapProps(column, COLUMN_PROPS, 'column');
      need(column.type, 'column.type ("S" or "N")', op);
      if (!(Number(column.length) > 0)) throw new Error(`add_column ${column.name || ''} needs a length above 0`);
      return [{ op, table: need(table, 'table', op), target: need(column.name, 'column.name', op), props }];
    }
    case 'update_column':
      return [{ op, table: need(table, 'table', op), target: need(operation.column, 'column (its name)', op), props: mapProps(operation.set, COLUMN_PROPS, 'column') }];
    case 'rename_column':
      return [{ op, table: need(table, 'table', op), target: need(operation.column, 'column', op), props: { NEWNAME: need(operation.newName, 'newName', op) } }];
    case 'drop_column':
      return [{ op, table: need(table, 'table', op), target: need(operation.column, 'column', op) }];
    case 'add_index': {
      const index = operation.index || {};
      if (!index.segments) throw new Error(`add_index ${index.name || ''} needs segments`);
      return [{ op, table: need(table, 'table', op), target: need(index.name, 'index.name', op), props: indexProps(index, true) }];
    }
    case 'update_index':
      return [{ op, table: need(table, 'table', op), target: need(operation.index, 'index (its name)', op), props: indexProps(operation.set, false) }];
    case 'rename_index':
      return [{ op, table: need(table, 'table', op), target: need(operation.index, 'index', op), props: { NEWNAME: need(operation.newName, 'newName', op) } }];
    case 'drop_index':
      return [{ op, table: need(table, 'table', op), target: need(operation.index, 'index', op) }];
    default:
      throw new Error(`Unknown operation "${op}"`);
  }
}

/**
 * Folders where pxplus_dict_apply may change a dictionary and its files without asking a person: set by whoever
 * starts the server (PXPLUS_DICT_AUTO, folders separated like PATH: ":" on macOS/Linux, ";" on Windows), never by
 * the model. For automatic processes, e.g. the worktree of a pipeline run.
 */
function autoFolders(): string[] {
  return (process.env.PXPLUS_DICT_AUTO || '').split(path.delimiter).map(f => f.trim()).filter(Boolean).map(f => path.resolve(f));
}

/**
 * A path as it is compared: absolute, through symbolic links where it exists; on Windows without regard to case
 */
function comparable(target: string): string {
  let full = path.resolve(target);
  try {
    full = fs.realpathSync(full);
  } catch {
    // A file that is still to be made: its folder decides
    try {
      full = path.join(fs.realpathSync(path.dirname(full)), path.basename(full));
    } catch {
      // keep the resolved path
    }
  }
  return process.platform === 'win32' ? full.toLowerCase() : full;
}

function inside(target: string, folder: string): boolean {
  const relative = path.relative(comparable(folder), comparable(target));
  return relative === '' || (!relative.startsWith('..') && !path.isAbsolute(relative));
}

/**
 * Whether this change may go without a person: the dictionary and every physical file it changes lie in a
 * folder of PXPLUS_DICT_AUTO. A relative physical file is found through PREFIX, so with prefix, prefixProgram or
 * setup its place is unknown and it does not count as inside.
 */
function autoAllowed(dir: string, touched: string[], env: Environment): string | null {
  const folders = autoFolders();
  const folder = folders.find(f => inside(dir, f));
  if (!folder) return null;
  for (const file of touched) {
    const relative = !path.isAbsolute(file);
    if (relative && (env.prefix || env.prefixProgram || env.setup)) return null;
    if (!inside(relative ? path.join(dir, file) : file, folder)) return null;
  }
  return folder;
}

/**
 * Write one line to PXPLUS_DICT_LOG (when set): what was changed, where, and who agreed
 */
function logChange(entry: Record<string, any>) {
  const file = process.env.PXPLUS_DICT_LOG;
  if (!file) return;
  try {
    fs.appendFileSync(file, JSON.stringify({ time: new Date().toISOString(), ...entry }) + '\n');
  } catch (error) {
    console.error(`pxplus_dict_apply: cannot write PXPLUS_DICT_LOG ${file}: ${error instanceof Error ? error.message : error}`);
  }
}

export const dictApplyTool: ToolHandler = {
  name: 'pxplus_dict_apply',
  description: [
    'Change a PxPlus data dictionary (providex.ddf/.dde) and its physical files, through the *dict objects as in Data Dictionary Maintenance.',
    'operations run in order and stop at the first that fails (the ones before it are done). Operations:',
    '{op:"create_dictionary"} (only in a folder without providex.ddf);',
    '{op:"add_table", table, group, description, physicalFile, ioProgram, ..., columns:[column], indexes:[index], createFile:true};',
    '{op:"update_table", table, set:{group, description, physicalFile, ioProgram, ...}}; {op:"rename_table", table, newName};',
    '{op:"drop_table", table} (the definition goes, the file stays);',
    '{op:"add_column", table, column:{name, type:"S"|"N", length, scale, description, internalFormat, required, uppercase, ...}};',
    '{op:"update_column", table, column:"name", set:{...}}; {op:"rename_column", table, column, newName}; {op:"drop_column", table, column};',
    '{op:"add_index", table, index:{name, unique, segments:[{column, descending}]}}; {op:"update_index", table, index:"name", set:{unique, segments}};',
    '{op:"rename_index", table, index, newName}; {op:"drop_index", table, index};',
    '{op:"create_file", table}; {op:"adjust_file", table, allowDataLoss} (convert the file to the dictionary, keeping its records); {op:"load_definition", table} (write the definition into the file, records as they are); {op:"delete_file", table} (the file goes, the definition stays).',
    'Column and index changes reach an existing file only with adjust_file or load_definition.',
    'adjust_file takes the fields over BY NAME: a dropped or renamed column loses its data, so with records it refuses unless allowDataLoss. For a rename use load_definition instead (same fields in the same order, data kept).',
    'dryRun: check every operation and change nothing, and see the plan.',
    'Without dryRun the server first checks the whole plan and then asks the person in Claude Code to agree (a form); only then it changes anything. Without a person (an automatic process) it changes only dictionaries in the folders its operator allowed (PXPLUS_DICT_AUTO).',
    'Files with an embedded IO program (e.g. a change logger) need prefixProgram or setup; adjust_file rewrites the records through it.'
  ].join(' '),
  inputSchema: {
    type: 'object',
    properties: {
      dir: { type: 'string', description: 'Folder of providex.ddf' },
      operations: { type: 'array', items: { type: 'object' }, description: 'The operations, in order (see the description)' },
      dryRun: { type: 'boolean', description: 'Check and show the plan, change nothing', default: false },
      ...ENVIRONMENT
    },
    required: ['dir', 'operations']
  },
  handler: async (args: { dir: string; operations: any[]; dryRun?: boolean } & Environment, context?: ToolContext): Promise<ToolResponse> => {
    try {
      const configError = notConfigured();
      if (configError) return configError;
      if (!Array.isArray(args.operations) || !args.operations.length) {
        return { success: false, error: 'Give at least one operation' };
      }
      let steps: DictStep[];
      try {
        steps = args.operations.flatMap(stepsOf);
      } catch (error) {
        return { success: false, error: error instanceof Error ? error.message : String(error) };
      }
      const env = environmentOf(args);

      // The plan: every step checked, with the files it changes; files with records count as agreed here
      const plan = await runDict(steps, { dir: args.dir, dryRun: true, confirm: true, ...env });
      const planFailed = failure(plan);
      if (planFailed) return planFailed;
      const planSteps = plan.steps.map(s => s.text.replace(/^would: /, ''));
      const touched = plan.lines.filter(l => l[0] === 'TOUCH').map(l => l[2]).filter(Boolean);
      if (args.dryRun) {
        return { success: true, data: { dryRun: true, steps: planSteps, files: touched } };
      }

      // Who agrees: a folder the operator allowed, otherwise the person
      let agreedBy = '';
      const folder = autoAllowed(args.dir, touched, env);
      if (folder) {
        agreedBy = `PXPLUS_DICT_AUTO ${folder}`;
      } else {
        let answer: { action: string; content?: Record<string, any> } = { action: 'cancel' };
        if (context?.elicit) {
          const message = [`pxplus_dict_apply in ${args.dir}:`, ...planSteps.map((text, i) => `${i + 1}. ${text}`)].join('\n');
          try {
            answer = await context.elicit(message, {
              type: 'object',
              properties: { agree: { type: 'boolean', title: 'Make these changes', description: 'The dictionary and the files listed change now' } },
              required: ['agree']
            });
          } catch {
            answer = { action: 'cancel' };
          }
        }
        if (answer.action === 'accept' && answer.content?.agree === true) {
          agreedBy = 'person';
        } else if (answer.action === 'cancel') {
          return {
            success: false,
            error: 'Nobody could agree to this change (no person, an automatic process) and the dictionary is not in a folder of PXPLUS_DICT_AUTO; nothing changed',
            data: { plan: planSteps, files: touched }
          };
        } else {
          return { success: false, error: 'The person did not agree; nothing changed', data: { plan: planSteps } };
        }
      }

      const result = await runDict(steps, { dir: args.dir, confirm: true, ...env });
      const done = result.steps.filter(s => s.ok).map(s => s.text);
      logChange({ dir: args.dir, agreedBy, steps: done, files: touched, ...(result.done ? {} : { stoppedAt: result.steps.find(s => !s.ok)?.text || result.output }) });
      const failed = failure(result);
      if (failed) return failed;
      return { success: true, data: { agreedBy, steps: done } };
    } catch (error) {
      return { success: false, error: error instanceof Error ? error.message : 'Unknown error while changing the dictionary' };
    }
  }
};
