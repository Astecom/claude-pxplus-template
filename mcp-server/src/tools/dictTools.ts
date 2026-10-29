import { ToolHandler, ToolResponse } from '../types.js';
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
    'dryRun: check every operation and change nothing. confirm: needed for adjust_file and delete_file on a file with records (ask the user first).',
    'Files with an embedded IO program (e.g. a change logger) need prefixProgram or setup; adjust_file rewrites the records through it.'
  ].join(' '),
  inputSchema: {
    type: 'object',
    properties: {
      dir: { type: 'string', description: 'Folder of providex.ddf' },
      operations: { type: 'array', items: { type: 'object' }, description: 'The operations, in order (see the description)' },
      dryRun: { type: 'boolean', description: 'Check, change nothing', default: false },
      confirm: { type: 'boolean', description: 'Allowed to change or delete a file that has records', default: false },
      ...ENVIRONMENT
    },
    required: ['dir', 'operations']
  },
  handler: async (args: { dir: string; operations: any[]; dryRun?: boolean; confirm?: boolean } & Environment): Promise<ToolResponse> => {
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
      const result = await runDict(steps, { dir: args.dir, dryRun: !!args.dryRun, confirm: !!args.confirm, ...environmentOf(args) });
      const failed = failure(result);
      if (failed) return failed;
      return { success: true, data: { dryRun: !!args.dryRun, steps: result.steps.map(s => s.text) } };
    } catch (error) {
      return { success: false, error: error instanceof Error ? error.message : 'Unknown error while changing the dictionary' };
    }
  }
};
