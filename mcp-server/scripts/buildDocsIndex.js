#!/usr/bin/env node

/**
 * Build Search Index for PxPlus Documentation
 *
 * This script reads all markdown files from ~/.pxplus-claude/pxplus-docs/
 * and creates a FlexSearch index with full content embedded.
 *
 * Output: src/data/docs-index.json
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import os from 'os';
import FlexSearch from 'flexsearch';

const { Document } = FlexSearch;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths
const DOCS_DIR = path.join(__dirname, '..', '..', 'docs');
const OUTPUT_DIR = path.join(__dirname, '..', 'dist', 'data');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'docs-index.json');

/**
 * Recursively get all markdown files from a directory
 */
function getMarkdownFiles(dir, baseDir = dir) {
  const files = [];

  if (!fs.existsSync(dir)) {
    console.error(`Error: Directory not found: ${dir}`);
    return files;
  }

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...getMarkdownFiles(fullPath, baseDir));
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      const relativePath = path.relative(baseDir, fullPath);
      files.push({
        absolutePath: fullPath,
        relativePath: relativePath
      });
    }
  }

  return files;
}

/**
 * Extract title from markdown (first # heading or filename)
 */
function extractTitle(content, filename) {
  const titleMatch = content.match(/^#\s+(.+)$/m);
  if (titleMatch) {
    return titleMatch[1].trim();
  }

  // Fallback to filename without extension
  return path.basename(filename, '.md');
}

/**
 * Extract all headings from markdown
 */
function extractHeadings(content) {
  const headings = [];
  const headingRegex = /^#{1,6}\s+(.+)$/gm;
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    headings.push(match[1].trim());
  }

  return headings;
}

/**
 * Build the search index
 */
async function buildIndex() {
  console.log('Building PxPlus documentation search index...\n');

  // Get all markdown files
  console.log(`Reading markdown files from: ${DOCS_DIR}`);
  const markdownFiles = getMarkdownFiles(DOCS_DIR);
  console.log(`Found ${markdownFiles.length} markdown files\n`);

  if (markdownFiles.length === 0) {
    console.error('No markdown files found. Make sure ~/.pxplus-claude/pxplus-docs/ exists and contains .md files.');
    process.exit(1);
  }

  // Prepare documents
  const documents = [];

  for (let i = 0; i < markdownFiles.length; i++) {
    const file = markdownFiles[i];
    const content = fs.readFileSync(file.absolutePath, 'utf8');
    const title = extractTitle(content, file.relativePath);
    const headings = extractHeadings(content);

    documents.push({
      id: i,
      title: title,
      path: file.relativePath,
      content: content,
      headings: headings,
      // Create searchable text (combining title + headings + content)
      searchText: `${title} ${headings.join(' ')} ${content}`
    });

    // Progress indicator
    if ((i + 1) % 50 === 0 || i === markdownFiles.length - 1) {
      console.log(`Processed ${i + 1}/${markdownFiles.length} files...`);
    }
  }

  console.log('\nPreparing index data...');

  // Prepare output data (we'll rebuild the FlexSearch index on load)
  // This is simpler and avoids FlexSearch export/import complexity
  const outputData = {
    version: '1.0.0',
    buildDate: new Date().toISOString(),
    documentCount: documents.length,
    documents: documents.map(doc => ({
      id: doc.id,
      title: doc.title,
      path: doc.path,
      content: doc.content,
      headings: doc.headings,
      searchText: doc.searchText // Include for indexing on load
    }))
  };

  // Ensure output directory exists
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  // Write to file
  console.log(`\nWriting index to: ${OUTPUT_FILE}`);
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(outputData, null, 2));

  const fileSizeKB = Math.round(fs.statSync(OUTPUT_FILE).size / 1024);
  console.log(`\n✅ Index built successfully!`);
  console.log(`   Documents: ${documents.length}`);
  console.log(`   File size: ${fileSizeKB} KB`);
  console.log(`   Location: ${OUTPUT_FILE}\n`);
}

// Run the builder
buildIndex().catch(error => {
  console.error('Error building index:', error);
  process.exit(1);
});
