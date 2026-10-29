import { ToolHandler, ToolResponse } from '../types.js';
import path from 'path';
import { Page, loadSearchIndex, allPages, rankPages } from './searchDocs.js';

/**
 * A page path as the index has it: "../directives/multi_line.md", "directives/multi_line.htm#Mark4" and
 * "directives\multi_line.md" all become "directives/multi_line.md"
 */
function cleanPath(text: string): string {
  return text.trim().replace(/\\/g, '/').replace(/#.*$/, '').replace(/^(\.\.?\/)+/, '').replace(/\.html?$/i, '.md');
}

/**
 * The page for a path, a link relative to another page, a file name ("multi_line") or a name ("MULTI_LINE")
 */
function findPage(wanted: string, from?: string): Page | undefined {
  const pages = allPages();
  const clean = cleanPath(wanted);
  if (from && !clean.includes('/')) {
    const relative = path.posix.normalize(path.posix.join(path.posix.dirname(cleanPath(from)), clean));
    const page = pages.find(p => p.doc.path === relative);
    if (page) return page;
  }
  const exact = pages.find(p => p.doc.path === clean) || pages.find(p => p.doc.path.toLowerCase() === clean.toLowerCase());
  if (exact) return exact;

  const file = (clean.toLowerCase().endsWith('.md') ? clean : clean + '.md').toLowerCase();
  const byFile = pages.filter(p => p.doc.path.toLowerCase().endsWith('/' + file) || p.doc.path.toLowerCase() === file);
  if (byFile.length === 1) return byFile[0];

  // A name: only the page that carries that name, not just any page about it
  const top = rankPages(wanted, 1)[0];
  const name = wanted.toLowerCase().replace(/[^a-z0-9$%]/g, '');
  return top && top.page.names.has(name) ? top.page : byFile[0];
}

/**
 * The text of a heading or bold title line, without its markup ("## **_Format 5_**" -> "Format 5"); the
 * underscore in a name stays ("MULTI_LINE")
 */
function titleOf(line: string): string {
  return line.replace(/^#+\s*/, '').replace(/\*\*/g, '').replace(/(^|[\s=])_+|_+(?=\s|$)/g, '$1').trim();
}

/**
 * A title as it is compared: lowercase, only letters, digits, = and $ ("OPT= Settings" = "OPT=Settings")
 */
function titleKey(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9=$]/g, '');
}

/**
 * Where a heading ("## Format 5") or a line that is only bold text ("**MULTI_LINE OPT= Settings**") starts, and
 * where its part ends: at the next heading of the same or a higher level (a bold line ends at the next heading or
 * bold line)
 */
function sectionOf(content: string, wanted: string): { start: number; end: number; title: string } | null {
  const lines = content.split('\n');
  const want = titleKey(wanted);
  const levelOf = (line: string) => {
    const heading = line.match(/^(#{1,6})\s/);
    if (heading) return heading[1].length;
    return /^\s*\*\*[^*]+\*\*\s*$/.test(line) ? 7 : 0;
  };
  let offset = 0;
  let start = -1;
  let level = 0;
  let title = '';
  for (const line of lines) {
    const lineLevel = levelOf(line);
    if (start >= 0 && lineLevel > 0 && lineLevel <= level) {
      return { start, end: offset, title };
    }
    if (start < 0 && lineLevel > 0 && titleKey(titleOf(line)).includes(want)) {
      start = offset;
      level = lineLevel;
      title = titleOf(line);
    }
    offset += line.length + 1;
  }
  return start >= 0 && want ? { start, end: content.length, title } : null;
}

/**
 * The headings and bold title lines of a page, to ask for one of them as section
 */
function sectionsOf(content: string): string[] {
  return content.split('\n')
    .filter(line => /^#{1,6}\s/.test(line) || /^\s*\*\*[^*]+\*\*\s*$/.test(line))
    .map(titleOf)
    .filter(Boolean);
}

/**
 * The pages a page links to, as paths that pxplus_get_doc accepts
 */
function linksOf(page: Page): string[] {
  const found = new Set<string>();
  for (const match of page.doc.content.matchAll(/\]\(([^)\s]+\.html?(?:#[^)]*)?|[^)\s]+\.md(?:#[^)]*)?)\)/g)) {
    const target = findPage(match[1], page.doc.path);
    if (target && target !== page) found.add(target.doc.path);
  }
  return [...found];
}

/**
 * Get one whole documentation page (or one section of it), in parts when it is long
 */
export const getDocTool: ToolHandler = {
  name: 'pxplus_get_doc',
  description: 'Read one PxPlus documentation page in full, without the cut-off of pxplus_search_docs. Give the path from a search result ("directives/multi_line.md"), a link from another page ("../control_object_properties/multiline_properties.md"), a file name ("multi_line") or a name ("MULTI_LINE"). Optionally only one section ("Format 5", "OPT= Settings"). A long page comes in parts: call again with nextOffset. The result lists the sections and the pages it links to.',
  inputSchema: {
    type: 'object',
    properties: {
      path: {
        type: 'string',
        description: 'Page path, link, file name or name of a function, directive, parameter or property'
      },
      section: {
        type: 'string',
        description: 'Only this part of the page: (part of) a heading or a bold title line, e.g. "Format 5" or "OPT= Settings"'
      },
      offset: {
        type: 'number',
        description: 'Start at this character (the nextOffset of the previous part). Default: 0',
        default: 0
      },
      maxLength: {
        type: 'number',
        description: 'Maximum characters per part (default: 30000)',
        default: 30000
      }
    },
    required: ['path']
  },
  handler: async (args: { path: string; section?: string; offset?: number; maxLength?: number }): Promise<ToolResponse> => {
    try {
      const { section, offset = 0, maxLength = 30000 } = args;
      const loadResult = loadSearchIndex();
      if (!loadResult.success) {
        return { success: false, error: loadResult.error };
      }

      const page = findPage(args.path || '');
      if (!page) {
        const suggestions = rankPages(args.path || '', 5).map(r => r.page.doc.path);
        return { success: false, error: `No page found for "${args.path}"`, data: { suggestions } };
      }

      let content: string = page.doc.content;
      let sectionTitle: string | undefined;
      if (section) {
        const part = sectionOf(content, section);
        if (!part) {
          return {
            success: false,
            error: `Section "${section}" not found in ${page.doc.path}`,
            data: { sections: sectionsOf(content) }
          };
        }
        content = content.substring(part.start, part.end);
        sectionTitle = part.title;
      }

      const start = Math.max(0, Math.min(offset, content.length));
      const size = Math.max(1000, maxLength);
      // End a part at a line break, so a table row is not cut in half
      let end = Math.min(content.length, start + size);
      if (end < content.length) {
        const lineEnd = content.lastIndexOf('\n', end);
        if (lineEnd > start + size / 2) end = lineEnd + 1;
      }

      return {
        success: true,
        data: {
          title: page.title,
          path: page.doc.path,
          section: sectionTitle,
          length: content.length,
          offset: start,
          nextOffset: end < content.length ? end : null,
          content: content.substring(start, end),
          // Only with the first part, to keep the next parts small
          sections: start === 0 && !section ? sectionsOf(page.doc.content) : undefined,
          links: start === 0 ? linksOf(page) : undefined
        }
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred while reading the page'
      };
    }
  }
};

/**
 * List the documentation pages in a folder or with a word in their path or title
 */
export const listDocsTool: ToolHandler = {
  name: 'pxplus_list_docs',
  description: 'List PxPlus documentation pages by folder or by a word in their path or title, e.g. "control_object_properties/" (the property list of every control), "directives/" or "grid". Without a filter: the folders and how many pages each has. Read a page with pxplus_get_doc.',
  inputSchema: {
    type: 'object',
    properties: {
      filter: {
        type: 'string',
        description: 'Folder (ends with "/") or word in the path or title; empty: list the folders'
      },
      limit: {
        type: 'number',
        description: 'Maximum number of pages (default: 200)',
        default: 200
      }
    }
  },
  handler: async (args: { filter?: string; limit?: number }): Promise<ToolResponse> => {
    try {
      const { filter = '', limit = 200 } = args;
      const loadResult = loadSearchIndex();
      if (!loadResult.success) {
        return { success: false, error: loadResult.error };
      }
      const pages = allPages();

      if (!filter.trim()) {
        const folders = new Map<string, number>();
        for (const page of pages) {
          const folder = page.doc.path.includes('/') ? page.doc.path.substring(0, page.doc.path.indexOf('/') + 1) : '(root)';
          folders.set(folder, (folders.get(folder) || 0) + 1);
        }
        return {
          success: true,
          data: { folders: [...folders.entries()].sort().map(([folder, count]) => ({ folder, count })) }
        };
      }

      const wanted = cleanPath(filter).toLowerCase();
      const isFolder = filter.trim().endsWith('/');
      const matches = pages.filter(page => {
        const pagePath = page.doc.path.toLowerCase();
        return isFolder ? pagePath.startsWith(wanted.replace(/\/?$/, '/'))
          : pagePath.includes(wanted) || page.title.toLowerCase().includes(filter.trim().toLowerCase());
      }).sort((a, b) => a.doc.path.localeCompare(b.doc.path));

      return {
        success: true,
        data: {
          filter,
          total: matches.length,
          pages: matches.slice(0, limit).map(page => ({ path: page.doc.path, title: page.title })),
          message: matches.length > limit ? `Showing ${limit} of ${matches.length}; raise limit or narrow the filter` : undefined
        }
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred while listing pages'
      };
    }
  }
};
