# Documentation Search Index

This directory contains the pre-built search index for PxPlus documentation.

## Files

- `docs-index.json` - The FlexSearch index with full documentation content

## Building the Index

To rebuild the index (after documentation updates):

```bash
npm run build-docs-index
```

This will read all markdown files from `~/.pxplus-claude/pxplus-docs/` and generate a new index.

## Note

The `docs-index.json` file should be committed to git so users don't need to build it themselves.
