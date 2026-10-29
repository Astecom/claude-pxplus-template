import { ToolHandler, ToolResponse } from '../types.js';
import { Page, loadSearchIndex, allPages } from './searchDocs.js';
import { versionNotes, versionNumber, sinceOf, availability } from '../utils/versions.js';

/**
 * The property pages per control: "multiline" -> control_object_properties/multiline_properties.md
 * (a control name is compared without underscores and spaces: "MULTI_LINE", "Multi-Line", "multiline")
 */
function controlPages(): Map<string, Page> {
  const found = new Map<string, Page>();
  for (const page of allPages()) {
    const match = page.doc.path.match(/^control_object_properties\/(.+)_properties\.md$/);
    if (match) found.set(match[1].toLowerCase().replace(/[^a-z0-9]/g, ''), page);
  }
  return found;
}

function controlKey(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]/g, '').replace(/properties$/, '');
}

/**
 * A text without its markdown: links, bold and italics, and with single spaces
 */
function plain(text: string): string {
  return text.replace(/\[([^\]]*)\]\([^)]*\)/g, '$1').replace(/\*\*|__/g, '').replace(/(^|\s)_|_(\s|$)/g, '$1$2')
    .replace(/\|\s*---\|---/g, ' ').replace(/\s+/g, ' ').trim();
}

interface PropertyRow {
  names: string[];
  page: string;
  description: string;
}

/**
 * The rows of a control's property table: "**[BackColor$  BackColour$](../properties/backcolor_.md)** | text";
 * the text runs on to the next row (it can hold its own small table of values)
 */
function propertyRows(content: string): PropertyRow[] {
  const header = content.search(/\*\*Property\*\*\s*\|\s*\*\*Description\*\*/i);
  const table = header >= 0 ? content.substring(header) : content;
  const rowStart = /\*\*\[([^\]]+)\]\(([^)\s]+)\)([^*|\n]*)\*\*\s*\|/g;
  const starts = [...table.matchAll(rowStart)];
  return starts.map((match, i) => {
    const end = i + 1 < starts.length ? starts[i + 1].index! : table.length;
    let description = table.substring(match.index! + match[0].length, end);
    const heading = description.search(/\n#{1,3}\s/);
    if (heading >= 0) description = description.substring(0, heading);
    const names = match[1].split(/\s{2,}|\n/).map(n => n.trim()).filter(Boolean);
    if (match[3].trim()) names[names.length - 1] += match[3].trim();
    const link = match[2].replace(/#.*$/, '').replace(/^(\.\.\/)+/, '').replace(/\.html?$/i, '.md');
    return { names, page: link, description: plain(description) };
  });
}

/**
 * All properties of one control, with since which version they (or parts of them) are there
 */
export const controlPropertiesTool: ToolHandler = {
  name: 'pxplus_control_properties',
  description: 'List the properties of a PxPlus control (MULTI_LINE, GRID, BUTTON, DROP_BOX, LIST_BOX, CHECK_BOX, RADIO_BUTTON, ...) as a table: name, short description, the page with the details, and the version notes ("added in PxPlus 2020"). Give a version ("22.00" or "2025") to see per property whether that version has it: yes, no, partly (a later version added to it) or unknown (the documentation does not say; usually an old property). Without a control: the controls there are.',
  inputSchema: {
    type: 'object',
    properties: {
      control: {
        type: 'string',
        description: 'Control name, e.g. "MULTI_LINE", "GRID", "Check_Box"'
      },
      filter: {
        type: 'string',
        description: 'Only properties with this text in their name or description, e.g. "color" or "cell"'
      },
      version: {
        type: 'string',
        description: 'PxPlus version to check against: "22.00", "23.00", "2025", "v9.00"'
      },
      descriptionLength: {
        type: 'number',
        description: 'Maximum characters of each description (default: 200)',
        default: 200
      }
    }
  },
  handler: async (args: { control?: string; filter?: string; version?: string; descriptionLength?: number }): Promise<ToolResponse> => {
    try {
      const { control = '', filter = '', version, descriptionLength = 200 } = args;
      const loadResult = loadSearchIndex();
      if (!loadResult.success) {
        return { success: false, error: loadResult.error };
      }
      const controls = controlPages();
      if (!control.trim()) {
        return { success: true, data: { controls: [...controls.keys()].sort() } };
      }

      const page = controls.get(controlKey(control));
      if (!page) {
        return { success: false, error: `No property list for control "${control}"`, data: { controls: [...controls.keys()].sort() } };
      }

      let checkAgainst: number | null = null;
      if (version) {
        checkAgainst = versionNumber(version);
        if (checkAgainst === null) {
          return { success: false, error: `Version "${version}" not understood; use e.g. "22.00", "2025" or "v9.00"` };
        }
      }

      const byPath = new Map(allPages().map(p => [p.doc.path, p]));
      const wanted = filter.trim().toLowerCase();
      const properties = propertyRows(page.doc.content)
        .filter(row => !wanted || row.names.some(n => n.toLowerCase().includes(wanted)) || row.description.toLowerCase().includes(wanted))
        .map(row => {
          // The notes of the row itself and of the property's own page
          const own = byPath.get(row.page);
          const notes = versionNotes(row.description + '\n' + (own ? own.doc.content : ''));
          const since = sinceOf(notes);
          const short = row.description.length > descriptionLength
            ? row.description.substring(0, descriptionLength).replace(/\s+\S*$/, '') + ' ...'
            : row.description;
          return {
            name: row.names.join(' / '),
            description: short,
            page: own ? row.page : undefined,
            since: since ? since.version : undefined,
            versionNotes: notes.length ? notes.map(note => note.text) : undefined,
            available: checkAgainst === null ? undefined : availability(notes, checkAgainst)
          };
        });

      return {
        success: true,
        data: {
          control: page.title,
          path: page.doc.path,
          version: version || undefined,
          count: properties.length,
          properties,
          message: properties.length ? undefined : 'No properties found (check the filter)'
        }
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred while listing properties'
      };
    }
  }
};
