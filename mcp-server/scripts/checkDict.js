#!/usr/bin/env node

/**
 * Check the data dictionary tools on a new dictionary in a temporary folder
 *
 * Run after npm run build, with PxPlus configured (.env or PXPLUS_EXECUTABLE_PATH): npm run check-dict
 * It creates a dictionary, a table with columns and an index, the file, writes records (with PxPlus), changes the
 * definition, brings the file in line and removes it all again. Nothing outside the temporary folder is touched.
 */

import { execFileSync } from 'child_process';
import { mkdtempSync, mkdirSync, rmSync, writeFileSync, existsSync } from 'fs';
import { tmpdir } from 'os';
import { join } from 'path';
import { config } from '../dist/utils/config.js';
import { dictReadTool, dictEmbeddedTool, dictApplyTool, readRecordsTool } from '../dist/tools/dictTools.js';

if (!config.pxplusExecutablePath) {
  console.log('PxPlus is not configured (PXPLUS_EXECUTABLE_PATH); dictionary checks skipped');
  process.exit(0);
}

let failed = 0;
const check = (ok, text) => {
  if (!ok) failed++;
  console.log(`${ok ? 'ok  ' : 'FAIL'} ${text}`);
};

const dir = mkdtempSync(join(tmpdir(), 'pxplus-dict-check-'));
const io = join(dir, 'prog');
const apply = (operations, extra = {}) => dictApplyTool.handler({ dir, operations, ...extra });
const pxplus = code => {
  const file = join(dir, 'write.pxprg');
  writeFileSync(file, code.join('\n') + '\n');
  execFileSync(config.pxplusExecutablePath, [file], { stdio: ['ignore', 'ignore', 'ignore'] });
};

try {
  const dry = await apply([{ op: 'create_dictionary' }], { dryRun: true });
  check(dry.success && !existsSync(join(dir, 'providex.ddf')), 'dryRun changes nothing');

  const made = await apply([
    { op: 'create_dictionary' },
    {
      op: 'add_table', table: 'Klant', group: 'Check', description: 'Klanten', physicalFile: join(dir, 'klant'),
      columns: [
        { name: 'Nummer', type: 'S', length: 8, description: 'Klantnummer' },
        { name: 'Naam', type: 'S', length: 30 },
        { name: 'Saldo', type: 'N', length: 10, scale: 2 }
      ],
      indexes: [{ name: 'OpNummer', unique: true, segments: [{ column: 'Nummer' }] }],
      createFile: true
    }
  ]);
  check(made.success && existsSync(join(dir, 'klant')), `create dictionary, table, columns, index and file (${made.error || made.data.steps.length + ' steps'})`);

  pxplus([`OPEN (1,IOL=*)"${join(dir, 'klant')}"`, 'FOR i=1 TO 3', 'nummer$="K"+STR(i),naam$="Klant "+STR(i),saldo=i*10', 'WRITE (1)', 'NEXT', 'CLOSE (1)', 'END']);

  const tables = (await dictReadTool.handler({ dir })).data?.tables || [];
  check(tables.length === 1 && tables[0].name === 'Klant' && tables[0].records === 3, 'dict_read lists the table with its 3 records');

  const unknown = await apply([{ op: 'add_column', table: 'Klant', column: { name: 'X', type: 'S', length: 1, colour: 'red' } }]);
  check(!unknown.success && /Unknown column property "colour"/.test(unknown.error), 'an unknown property is refused');

  const refused = await apply([
    { op: 'add_column', table: 'Klant', column: { name: 'Plaats', type: 'S', length: 20 } },
    { op: 'adjust_file', table: 'Klant' }
  ]);
  check(!refused.success && /3 record\(s\); adjust_file needs confirm/.test(refused.error), 'adjust_file on a file with records needs confirm');

  const plaats = await apply([{ op: 'adjust_file', table: 'Klant' }], { confirm: true });
  check(plaats.success, `adjust_file adds the new column to the file (${plaats.error || plaats.data.steps[0]})`);
  const mismatch = await apply([
    { op: 'add_column', table: 'Klant', column: { name: 'Tijdelijk', type: 'S', length: 2 } },
    { op: 'load_definition', table: 'Klant' }
  ], { dryRun: true, confirm: true });
  check(!mismatch.success && /number of fields must stay the same/.test(mismatch.error), 'load_definition refuses when the fields differ');

  // Rename: adjust_file would lose the data of the old name, load_definition keeps it
  const renamed = await apply([
    { op: 'rename_column', table: 'Klant', column: 'Naam', newName: 'Naam2' },
    { op: 'adjust_file', table: 'Klant' }
  ], { confirm: true });
  check(!renamed.success && /lose the data of NAAM\$/.test(renamed.error), `adjust_file refuses to lose the data of a renamed column (${renamed.error})`);
  const loaded = await apply([{ op: 'load_definition', table: 'Klant' }], { confirm: true });
  check(loaded.success, `load_definition writes the rename into the file (${loaded.error || loaded.data.steps[0]})`);

  const changed = await apply([
    { op: 'update_column', table: 'Klant', column: 'Naam2', set: { length: 40, description: 'Naam van de klant' } },
    { op: 'add_index', table: 'Klant', index: { name: 'OpNaam', segments: [{ column: 'Naam2' }, { column: 'Nummer', descending: true }] } },
    { op: 'adjust_file', table: 'Klant' }
  ], { confirm: true });
  check(changed.success, `update column, add index and adjust_file with confirm (${changed.error || 'done'})`);
  const dropped = await apply([
    { op: 'drop_column', table: 'Klant', column: 'Saldo' },
    { op: 'adjust_file', table: 'Klant' }
  ], { confirm: true });
  check(!dropped.success && /lose the data of SALDO/.test(dropped.error), 'dropping a column with data needs allowDataLoss');
  const allowed = await apply([{ op: 'adjust_file', table: 'Klant', allowDataLoss: true }], { confirm: true });
  check(allowed.success && /without the data of SALDO/.test(allowed.data.steps[0]), `with allowDataLoss it goes on and says so (${allowed.error || allowed.data.steps[0]})`);

  const def = (await dictReadTool.handler({ dir, table: 'Klant' })).data || {};
  check(def.columns?.map(c => c.name).join(',') === 'Nummer,Naam2,Plaats' && def.file?.sameAsDictionary === true,
    `the file matches the dictionary after adjust_file (${def.iolist})`);
  check(def.indexes?.find(i => i.name === 'OpNaam')?.segments?.[1]?.descending === true, 'the new index has a descending segment');

  const read = (await readRecordsTool.handler({ dir, table: 'Klant', key: 'K2', max: 1 })).data || {};
  check(read.count === 1 && read.records[0].values['NAAM2$'] === 'Klant 2' && read.nextKey === 'K3',
    `read_records keeps the data through adjust_file and continues with nextKey (${JSON.stringify(read.records?.[0])}, next ${read.nextKey})`);

  const embedded = (await dictEmbeddedTool.handler({ file: join(dir, 'klant') })).data || {};
  check(embedded.iolist === def.iolist, 'dict_embedded reads the definition in the file itself');

  // A file with an embedded IO program opens only when the program is found
  mkdirSync(io);
  writeFileSync(join(io, 'testio'), '! embedded IO for the check\nEXIT\n');
  const withIo = await apply([
    { op: 'add_table', table: 'Log', physicalFile: join(dir, 'log'), ioProgram: 'testio', columns: [{ name: 'Nr', type: 'S', length: 4 }], indexes: [{ name: 'OpNr', unique: true, segments: [{ column: 'Nr' }] }], createFile: true }
  ], { prefixProgram: io + '/' });
  check(withIo.success, `a table with an embedded IO program, created with prefixProgram (${withIo.error || 'done'})`);
  const noPrefix = (await dictReadTool.handler({ dir })).data?.tables?.find(t => t.name === 'Log');
  check(/#121/.test(noPrefix?.openError || ''), `without prefixProgram its file gives the error back (${noPrefix?.openError})`);
  const withPrefix = (await dictReadTool.handler({ dir, prefixProgram: io + '/' })).data?.tables?.find(t => t.name === 'Log');
  check(withPrefix?.records === 0 && !withPrefix.openError, 'with prefixProgram it opens');

  const removed = await apply([
    { op: 'delete_file', table: 'Klant' },
    { op: 'drop_table', table: 'Klant' },
    { op: 'rename_table', table: 'Log', newName: 'Logboek' }
  ], { confirm: true, prefixProgram: io + '/' });
  const after = (await dictReadTool.handler({ dir })).data?.tables || [];
  check(removed.success && !existsSync(join(dir, 'klant')) && after.map(t => t.name).join() === 'Logboek',
    `delete_file, drop_table and rename_table (${removed.error || after.map(t => t.name).join()})`);

  const primary = await apply([{ op: 'add_table', table: 'Fout', physicalFile: join(dir, 'fout'), columns: [{ name: 'A', type: 'S', length: 2 }], indexes: [{ name: 'OpA', segments: [{ column: 'A' }] }] }]);
  check(!primary.success && /primary key\) must be unique/.test(primary.error), `a non-unique first index is explained (${primary.error})`);

  const wrong = await apply([{ op: 'drop_column', table: 'Logboek', column: 'Bestaatniet' }]);
  check(!wrong.success && /no column Bestaatniet/.test(wrong.error), 'an unknown column is reported');
} finally {
  rmSync(dir, { recursive: true, force: true });
}

console.log(failed ? `\n${failed} check(s) failed` : '\nAll dictionary checks passed');
process.exit(failed ? 1 : 0);
