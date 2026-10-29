#!/usr/bin/env node

/**
 * Check the documentation search on questions with a known answer
 *
 * Run after npm run build and npm run build-docs-index: npm run check-docs-search
 * Each line is a query and the page that must come first. Add a line when a search found the wrong page.
 */

import { searchDocsTool } from '../dist/tools/searchDocs.js';
import { getDocTool, listDocsTool } from '../dist/tools/getDoc.js';

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

console.log(failed ? `\n${failed} check(s) failed` : '\nAll checks passed');
process.exit(failed ? 1 : 0);
