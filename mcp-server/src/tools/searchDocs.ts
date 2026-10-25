import { ToolHandler, ToolResponse } from '../types.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to the docs index (from dist/tools/ to dist/data/)
const INDEX_PATH = path.join(__dirname, '..', 'data', 'docs-index.json');

/**
 * Words people use for a kind of page, and the category title those pages carry
 * ("DTE function" looks for DTE among the functions, not for the word "function")
 */
const KINDS: Record<string, string> = {
  function: 'System Functions', functions: 'System Functions',
  directive: 'Directives', directives: 'Directives', statement: 'Directives', command: 'Directives',
  parameter: 'System Parameters', parameters: 'System Parameters', param: 'System Parameters',
  mnemonic: 'Mnemonics', mnemonics: 'Mnemonics',
  variable: 'System Variables', variables: 'System Variables',
  property: 'Control Object Properties', properties: 'Control Object Properties'
};

// File names that say nothing about a page; the folder name does
const GENERIC_NAMES = /^(overview|introduction|index|appendix)$/i;

/**
 * A documentation page, prepared for ranking
 */
interface Page {
  doc: any;
  title: string;              // "DTE( ) - Convert Date (System Functions)"
  names: Set<string>;         // the page's own name and file name, normalized: "dte"
  titleWords: Set<string>;    // the words of the page's own title: "convert", "date"
  counts: Map<string, number>;
  length: number;
}

// Cache for the prepared pages
let pages: Page[] | null = null;
const documentFrequency = new Map<string, number>();
let averageLength = 1;

/**
 * A name as it is compared: lowercase, without spaces, brackets, quotes or underscores ("SET_PARAM" = "setparam")
 */
function normalize(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9$%]/g, '');
}

/**
 * The words of a text, lowercase; keeps names like set_param, len$ and %yl whole
 */
function wordsOf(text: string): string[] {
  return (text.toLowerCase().match(/[a-z0-9_$%']+/g) || []).map(w => w.replace(/'/g, '')).filter(Boolean);
}

/**
 * Prepare a page: the reference pages carry their category as heading ("# System Functions") and their
 * real name on the next line ("**DTE( )** | **_Convert Date_**"), so that is where the title comes from
 */
function preparePage(doc: any): Page {
  const stem = path.basename(doc.path, '.md');
  const label = GENERIC_NAMES.test(stem) ? path.basename(path.dirname(doc.path)) : stem;
  // Only the line right under the heading: further down, "**Format** | **Description**" is a table header
  const named = doc.content.match(/^#[^\n]*\n\s*\*\*([^*\n]{1,60})\*\*[ \t]*\|[ \t]*(?:\*\*_?([^*\n_]{1,80})_?\*\*)?/);
  const name = named ? named[1].trim() : '';
  const subtitle = named && named[2] ? named[2].trim() : '';

  const names = new Set<string>([normalize(name), normalize(stem),
    normalize(stem.replace(/\s+(directive|function|object|parameter)s?$/i, ''))].filter(Boolean));
  for (const part of stem.split('~')) {  // one page for several names: def_cvs~dte~lcs~ucs
    if (part) names.add(normalize(part));
  }

  const words = wordsOf(doc.content);
  const counts = new Map<string, number>();
  for (const word of words) {
    counts.set(word, (counts.get(word) || 0) + 1);
  }

  return {
    doc,
    title: named ? `${name}${subtitle ? ' - ' + subtitle : ''} (${doc.title})` : (label === doc.title ? label : `${label} (${doc.title})`),
    names,
    titleWords: new Set(wordsOf(subtitle || label)),
    counts,
    length: words.length
  };
}

/**
 * Load the documentation pages (lazy loading)
 */
function loadSearchIndex(): { success: boolean; error?: string } {
  if (pages) {
    return { success: true }; // Already loaded
  }

  try {
    // Check if index file exists
    if (!fs.existsSync(INDEX_PATH)) {
      return {
        success: false,
        error: 'Documentation index not found. Please run: npm run build-docs-index'
      };
    }

    // Load the index data
    const indexData = JSON.parse(fs.readFileSync(INDEX_PATH, 'utf8'));
    const prepared: Page[] = indexData.documents.map(preparePage);

    for (const page of prepared) {
      for (const word of page.counts.keys()) {
        documentFrequency.set(word, (documentFrequency.get(word) || 0) + 1);
      }
    }
    averageLength = prepared.reduce((sum, page) => sum + page.length, 0) / Math.max(prepared.length, 1);
    pages = prepared;

    console.error(`Loaded documentation index: ${indexData.documentCount} documents (v${indexData.version})`);

    return { success: true };

  } catch (error) {
    return {
      success: false,
      error: `Failed to load search index: ${error instanceof Error ? error.message : 'Unknown error'}`
    };
  }
}

/**
 * How rare a word is in the documentation (rare words say more about a page)
 */
function rarity(word: string, pageCount: number): number {
  const count = documentFrequency.get(word) || 0;
  return Math.log(1 + (pageCount - count + 0.5) / (count + 0.5));
}

/**
 * Rank the pages for a query: the page's own name first ("DTE", "DTE()", "OPEN OBJECT", "'XT'"), then the words of
 * its title, then how well its text matches all the words together (BM25), and a little extra for the kind of page
 * the query names ("function", "parameter", ...). Words that don't occur lower a page's score but don't rule it out.
 */
export function rankPages(query: string, limit: number): { page: Page; terms: string[] }[] {
  if (!pages) {
    return [];
  }
  const all = wordsOf(query);
  const kinds = new Set(all.filter(w => KINDS[w]).map(w => KINDS[w]));
  const terms = all.filter(w => !KINDS[w]);
  const whole = normalize(terms.join(''));
  const pageCount = pages.length;
  // In a short query a name is what is asked for ("DTE", "SETERR"); in a longer one it is one word of several
  const nameBonus = terms.length <= 2 ? 40 : 15;

  const scored = [];
  for (const page of pages) {
    let score = 0;
    if (whole && page.names.has(whole)) score += 100;
    for (const term of terms) {
      if (page.names.has(normalize(term))) score += nameBonus;
      if (page.titleWords.has(term)) score += 12;
      const count = page.counts.get(term) || 0;
      if (count) {
        score += rarity(term, pageCount) * (count * 2.2) / (count + 1.2 * (0.25 + 0.75 * page.length / averageLength));
      }
    }
    if (score > 0 && kinds.has(page.doc.title)) score += 25;
    if (score > 0) scored.push({ page, score });
  }
  scored.sort((a, b) => b.score - a.score);

  // The rarest words first: they are the best place for a snippet
  const byRarity = [...terms].sort((a, b) => rarity(b, pageCount) - rarity(a, pageCount));
  return scored.slice(0, limit).map(s => ({ page: s.page, terms: byRarity }));
}

/**
 * Create a snippet from content around the first search word found (rarest word first)
 */
function createSnippet(content: string, terms: string[], maxLength: number = 200): string {
  const lowerContent = content.toLowerCase();

  // Find the first occurrence of any search word
  let position = -1;
  for (const word of terms) {
    position = lowerContent.indexOf(word);
    if (position !== -1) break;
  }

  if (position === -1) {
    // No match found, return beginning of content
    return content.substring(0, maxLength) + (content.length > maxLength ? '...' : '');
  }

  // Calculate snippet boundaries
  const start = Math.max(0, position - Math.floor(maxLength / 2));
  const end = Math.min(content.length, start + maxLength);

  let snippet = content.substring(start, end);

  // Add ellipsis
  if (start > 0) snippet = '...' + snippet;
  if (end < content.length) snippet = snippet + '...';

  return snippet.trim();
}

/**
 * The part of a page to return when its full content is asked for: all of it when it fits, otherwise the stretch
 * with the most search words in it (the format codes of DTE are further down than the first 3000 characters)
 */
function excerpt(content: string, terms: string[], maxLength: number): string {
  if (content.length <= maxLength) {
    return content;
  }
  const lowerContent = content.toLowerCase();
  const positions: number[] = [];
  for (const term of terms) {
    for (let at = lowerContent.indexOf(term); at !== -1 && positions.length < 500; at = lowerContent.indexOf(term, at + 1)) {
      positions.push(at);
    }
  }
  positions.sort((a, b) => a - b);

  let bestStart = 0;
  let bestHits = -1;
  for (const position of [0, ...positions]) {
    const start = Math.max(0, position - Math.floor(maxLength / 4));
    const hits = positions.filter(p => p >= start && p < start + maxLength).length;
    if (hits > bestHits) {
      bestStart = start;
      bestHits = hits;
    }
  }

  const header = bestStart > 0 ? content.substring(0, content.indexOf('\n', 200) > 0 ? content.indexOf('\n', 200) : 200) + '\n\n[...]\n\n' : '';
  const end = Math.min(content.length, bestStart + maxLength);
  return header + content.substring(bestStart, end) + (end < content.length ? '\n\n[Content truncated...]' : '');
}

/**
 * Search PxPlus Documentation Tool
 */
export const searchDocsTool: ToolHandler = {
  name: 'pxplus_search_docs',
  description: 'Search through PxPlus documentation using keywords or phrases. Returns relevant documentation pages with content snippets. Useful for finding information about PxPlus functions, directives, syntax, and features. A function, directive or parameter by its name ("DTE", "SETERR", "\'XT\' parameter") comes first.',
  inputSchema: {
    type: 'object',
    properties: {
      query: {
        type: 'string',
        description: 'Search query (keywords or phrases to search for in the documentation)'
      },
      limit: {
        type: 'number',
        description: 'Maximum number of results to return (default: 3)',
        default: 3
      },
      includeFullContent: {
        type: 'boolean',
        description: 'Include full documentation content (truncated to maxContentLength chars per result to avoid token limits; a longer page gives the part with the search words). Default: false. Use this when you need complete documentation details, not just snippets.',
        default: false
      },
      maxContentLength: {
        type: 'number',
        description: 'Maximum characters of content per result when includeFullContent is true (default: 3000). Prevents response from exceeding token limits.',
        default: 3000
      }
    },
    required: ['query']
  },
  handler: async (args: { query: string; limit?: number; includeFullContent?: boolean; maxContentLength?: number }): Promise<ToolResponse> => {
    try {
      const { query, limit = 3, includeFullContent = false, maxContentLength = 3000 } = args;

      // Load index if not already loaded
      const loadResult = loadSearchIndex();
      if (!loadResult.success) {
        return {
          success: false,
          error: loadResult.error
        };
      }

      // Perform search
      const processedResults = rankPages(query, limit).map(({ page, terms }) => {
        const doc = page.doc;

        // Build result object
        const result: any = {
          title: page.title,
          path: doc.path,
          snippet: createSnippet(doc.content, terms, 300),
          headings: doc.headings.slice(0, 5), // First 5 headings
        };

        // Optionally include full content (truncated to avoid token limits)
        if (includeFullContent) {
          result.fullContent = excerpt(doc.content, terms, maxContentLength);
        }

        return result;
      });

      return {
        success: true,
        data: {
          query: query,
          resultCount: processedResults.length,
          results: processedResults,
          message: processedResults.length > 0
            ? `Found ${processedResults.length} result(s)`
            : 'No results found'
        }
      };

    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred during search'
      };
    }
  }
};
