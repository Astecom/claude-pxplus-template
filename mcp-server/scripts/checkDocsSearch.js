#!/usr/bin/env node

/**
 * Check the documentation search on questions with a known answer
 *
 * Run after npm run build and npm run build-docs-index: npm run check-docs-search
 * Each line is a query and the page that must come first. Add a line when a search found the wrong page.
 */

import { searchDocsTool } from '../dist/tools/searchDocs.js';
import { getDocTool, listDocsTool } from '../dist/tools/getDoc.js';
import { controlPropertiesTool } from '../dist/tools/controlProperties.js';
import { errorTool } from '../dist/tools/errorTool.js';

const EXPECTED = [
  ['DTE', 'functions/dte.md'],
  ['DTE()', 'functions/dte.md'],
  ['DTE function', 'functions/dte.md'],
  ['DTE function format %Y %Yz year four digits', 'functions/dte.md'],
  ['TCB', 'functions/tcb.md'],
  ['SETERR', 'directives/seterr.md'],
  ['SET_PARAM', 'directives/set_param.md'],
  ["'XT' parameter", 'parameters/xt.md'],
  ['Subprogram Error Report', 'parameters/ne.md'],
  ['OPEN OBJECT', 'PxPlus User Guide/Object-Oriented PxPlus/PxPlus OOP Interface/OPEN OBJECT Directive.md'],
  ['MID function', 'functions/mid.md'],
  ['CALL', 'directives/call.md'],
  ['EXTRACT', 'directives/extract.md'],
  ['JUL', 'functions/jul.md'],
  ['STP function', 'functions/stp.md'],
  ['PRM', 'functions/prm.md'],
  ['ENTER directive', 'directives/enter.md'],
];

let failed = 0;

for (const [query, expected] of EXPECTED) {
  const result = await searchDocsTool.handler({ query, limit: 3 });
  const found = (result.data?.results || []).map(r => r.path);
  const ok = found[0] === expected;
  if (!ok) failed++;
  console.log(`${ok ? 'ok  ' : 'FAIL'} ${query}  ->  ${found[0] || '(nothing)'}${ok ? '' : `  (expected ${expected})`}`);
}

// A long page gives the part with the search words: the year formats of DTE are past the first 3000 characters
const long = await searchDocsTool.handler({ query: 'DTE year long format', limit: 1, includeFullContent: true });
const content = long.data?.results?.[0]?.fullContent || '';
const excerptOk = content.includes('lowercase L');
if (!excerptOk) failed++;
console.log(`${excerptOk ? 'ok  ' : 'FAIL'} full content of DTE around "year long format" includes the long/short format codes`);

// pxplus_get_doc: the whole page, by path, link, file name or name; one section; in parts
const check = (ok, text) => {
  if (!ok) failed++;
  console.log(`${ok ? 'ok  ' : 'FAIL'} ${text}`);
};
const pageOf = async args => (await getDocTool.handler(args)).data || {};

const whole = await pageOf({ path: 'directives/multi_line.md' });
check(whole.nextOffset === null && whole.content?.includes('"X"') && whole.content?.includes('NUL='),
  'get_doc gives all of MULTI_LINE, with the OPT letters and NUL=');
check(whole.links?.includes('control_object_properties/multiline_properties.md'),
  'get_doc lists the pages MULTI_LINE links to');
check((await pageOf({ path: '../directives/multi_line.htm#Mark4' })).path === 'directives/multi_line.md',
  'get_doc accepts a link (../, .htm, #anchor)');
check((await pageOf({ path: 'MULTI_LINE' })).path === 'directives/multi_line.md', 'get_doc finds a page by its name');
check((await pageOf({ path: 'dte' })).path === 'functions/dte.md', 'get_doc finds a page by its file name');

const part = await pageOf({ path: 'directives/multi_line.md', section: 'Format 5' });
check(part.content?.startsWith('## Format 5') && !part.content.includes('## Format 6'), 'get_doc gives one section');

const settings = await pageOf({ path: 'MULTI_LINE', section: 'OPT= Settings' });
check(settings.section === 'MULTI_LINE OPT= Settings' || /MULTI_LINE OPT=/.test(settings.section || ''),
  `get_doc finds a bold title line as section, spaces and underscores aside (${settings.section})`);
check(settings.content?.includes('"U"') && !settings.content.includes('Auto Complete**'),
  'the OPT= Settings section has the OPT letters and stops at the next title');

const first = await pageOf({ path: 'control_object_properties/grid_properties.md', maxLength: 5000 });
const second = await pageOf({ path: 'control_object_properties/grid_properties.md', maxLength: 5000, offset: first.nextOffset });
check(first.nextOffset > 0 && second.offset === first.nextOffset && second.sections === undefined,
  'get_doc gives a long page in parts');
check((await getDocTool.handler({ path: 'no_such_page_xyz' })).success === false, 'get_doc reports an unknown page');

const listed = (await listDocsTool.handler({ filter: 'control_object_properties/' })).data || {};
check(listed.pages?.some(p => p.path === 'control_object_properties/multiline_properties.md'),
  'list_docs lists a folder');

check((await pageOf({ path: 'properties/cellisnumeric.md' })).versionNotes?.some(n => n.includes('2020')),
  'get_doc gives the version notes of a page');
check((await pageOf({ path: 'appendix/list_of_messages.md', section: 'Error #2' })).content?.startsWith('##  Error #2\n'),
  'get_doc prefers the exact section title ("Error #2" is not "Error #20")');

// pxplus_control_properties: the property table of a control, with versions
const grid = (await controlPropertiesTool.handler({ control: 'GRID', filter: 'CellIsNumeric', version: '22.00' })).data || {};
const numeric = grid.properties?.find(p => p.name === 'CellIsNumeric');
check(numeric?.since === '2020' && numeric?.available === 'yes', 'control_properties: CellIsNumeric came in 2020, so 22.00 has it');
const old = (await controlPropertiesTool.handler({ control: 'grid', filter: 'CellIsNumeric', version: '2019' })).data || {};
check(old.properties?.[0]?.available === 'no', 'control_properties: 2019 does not have CellIsNumeric yet');
const ml = (await controlPropertiesTool.handler({ control: 'Multi-Line' })).data || {};
check(ml.count > 50 && ml.properties.some(p => p.name === 'BackColor$ / BackColour$'),
  `control_properties: all properties of MULTI_LINE, with both spellings (${ml.count})`);
check((await controlPropertiesTool.handler({ control: 'no_such_control' })).success === false, 'control_properties reports an unknown control');

// pxplus_error: message and reasons of an error number
const e20 = (await errorTool.handler({ number: 20 })).data || {};
check(e20.message === 'Syntax error' && !e20.content.includes('Error #21'), `error 20 is "${e20.message}", without the next error`);
check((await errorTool.handler({ number: 258 })).data?.message?.includes('Operating system error 2'), 'error above 255 is an OS error');

console.log(failed ? `\n${failed} check(s) failed` : '\nAll checks passed');
process.exit(failed ? 1 : 0);
