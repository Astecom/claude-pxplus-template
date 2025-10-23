import { ToolHandler, ToolResponse } from '../types.js';
import FlexSearch from 'flexsearch';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const { Document } = FlexSearch;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to the docs index (from dist/tools/ to dist/data/)
const INDEX_PATH = path.join(__dirname, '..', 'data', 'docs-index.json');

// Cache for the search index
let searchIndex: InstanceType<typeof Document> | null = null;
let documentsCache: any[] = [];

/**
 * Load the search index (lazy loading)
 */
function loadSearchIndex(): { success: boolean; error?: string } {
  if (searchIndex) {
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

    // Create FlexSearch instance
    searchIndex = new Document({
      document: {
        id: 'id',
        index: ['title', 'searchText'],
        store: ['title', 'path', 'content', 'headings']
      },
      tokenize: 'forward',
      context: true
    });

    // Rebuild the index from documents (fast and simple)
    for (const doc of indexData.documents) {
      searchIndex.add(doc);
    }

    // Cache documents for quick access
    documentsCache = indexData.documents;

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
 * Create a snippet from content around a search term
 */
function createSnippet(content: string, searchQuery: string, maxLength: number = 200): string {
  const lowerContent = content.toLowerCase();
  const lowerQuery = searchQuery.toLowerCase();
  const words = lowerQuery.split(/\s+/);

  // Find the first occurrence of any search word
  let position = -1;
  for (const word of words) {
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
 * Search PxPlus Documentation Tool
 */
export const searchDocsTool: ToolHandler = {
  name: 'pxplus_search_docs',
  description: 'Search through PxPlus documentation using keywords or phrases. Returns relevant documentation pages with content snippets. Useful for finding information about PxPlus functions, directives, syntax, and features.',
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
        description: 'Include full documentation content (truncated to maxContentLength chars per result to avoid token limits). Default: false. Use this when you need complete documentation details, not just snippets.',
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
      const { query, limit = 10, includeFullContent = false, maxContentLength = 3000 } = args;

      // Load index if not already loaded
      const loadResult = loadSearchIndex();
      if (!loadResult.success) {
        return {
          success: false,
          error: loadResult.error
        };
      }

      if (!searchIndex) {
        return {
          success: false,
          error: 'Search index failed to initialize'
        };
      }

      // Perform search
      const results = searchIndex.search(query, { limit });

      // Process results
      const processedResults = [];

      for (const result of results) {
        if (!result.result || result.result.length === 0) continue;

        // Get document IDs from this result field
        for (const docId of result.result) {
          const doc = documentsCache.find(d => d.id === docId);
          if (!doc) continue;

          // Create snippet
          const snippet = createSnippet(doc.content, query, 300);

          // Build result object
          const result: any = {
            title: doc.title,
            path: doc.path,
            snippet: snippet,
            headings: doc.headings.slice(0, 5), // First 5 headings
          };

          // Optionally include full content (truncated to avoid token limits)
          if (includeFullContent) {
            result.fullContent = doc.content.substring(0, maxContentLength) +
              (doc.content.length > maxContentLength ? '\n\n[Content truncated...]' : '');
          }

          processedResults.push(result);

          // Stop if we've reached the limit
          if (processedResults.length >= limit) break;
        }

        if (processedResults.length >= limit) break;
      }

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
