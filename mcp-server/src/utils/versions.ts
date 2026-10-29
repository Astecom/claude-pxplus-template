/**
 * PxPlus versions in the documentation: "PxPlus v9.00", "PxPlus 2020", "PxPlus 2018 Update 1".
 * Since PxPlus 2016 (v13) the year and the version number go together: 2025 = 22.00, 2026 = 23.00.
 */

export interface VersionNote {
  text: string;      // "The CellIsNumeric property was added in PxPlus 2020."
  version: string;   // "2020", "v9.00", "2018 Update 1"
  number: number;    // the version as a number to compare: 17, 9, 15.1
}

const VERSION = /(?:PxPlus|ProvideX)\s+(v?\d+(?:\.\d+)?)(?:\s+Update\s+(\d+))?/i;

/**
 * A version as a number: "v9.00" -> 9, "2020" -> 17, "2018 Update 1" -> 15.1, "22.00" -> 22
 */
export function versionNumber(text: string): number | null {
  const match = text.trim().match(/^v?(\d+(?:\.\d+)?)(?:\s+Update\s+(\d+))?$/i);
  if (!match) return null;
  let number = parseFloat(match[1]);
  if (number >= 2000) number -= 2003;
  // An update counts as a little later than its release, never as the next one
  return match[2] ? number + Math.min(parseInt(match[2], 10), 9) / 10 : number;
}

/**
 * The version notes of a page: the remarks in parentheses that name a PxPlus version
 * ("(The Password property was added in PxPlus 2023.)", "(as of PxPlus 2017)")
 */
export function versionNotes(content: string): VersionNote[] {
  const notes: VersionNote[] = [];
  const seen = new Set<string>();
  for (const match of content.matchAll(/\(([^()]{0,300}?(?:PxPlus|ProvideX)\s+v?\d[^()]{0,300}?)\)/gi)) {
    const text = match[1].replace(/[*_]/g, '').replace(/\s+/g, ' ').trim();
    const found = text.match(VERSION);
    if (!found || seen.has(text)) continue;
    const version = found[1] + (found[2] ? ' Update ' + found[2] : '');
    const number = versionNumber(version);
    if (number === null) continue;
    seen.add(text);
    notes.push({ text, version, number });
  }
  return notes;
}

/**
 * The version a property itself came with: the note "The X property was added in ...", or null when the page
 * does not say (usually an old property)
 */
export function sinceOf(notes: VersionNote[]): VersionNote | null {
  return notes.find(note => /\b(property|method|option|directive|function)\b[^.]*\b(was )?added\b/i.test(note.text)
    && !/\bsupport for\b/i.test(note.text)) || null;
}

/**
 * Whether something is there in a version: "yes", "no" (it came later), "partly" (a later version added to it)
 * or "unknown" (no note about when it came; usually an old property)
 */
export function availability(notes: VersionNote[], version: number): 'yes' | 'no' | 'partly' | 'unknown' {
  const since = sinceOf(notes);
  if (since && since.number > version) return 'no';
  const later = notes.some(note => note.number > version);
  if (since) return later ? 'partly' : 'yes';
  return later ? 'partly' : 'unknown';
}
