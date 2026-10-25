#!/usr/bin/env node

/**
 * Check the documentation search on questions with a known answer
 *
 * Run after npm run build and npm run build-docs-index: npm run check-docs-search
 * Each line is a query and the page that must come first. Add a line when a search found the wrong page.
 */

import { searchDocsTool } from '../dist/tools/searchDocs.js';

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

console.log(failed ? `\n${failed} check(s) failed` : '\nAll checks passed');
process.exit(failed ? 1 : 0);
