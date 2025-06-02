# PxPlus Documentation Index

This index provides a comprehensive guide to the PxPlus documentation available in `.claude/pxplus-docs/`. Use this to quickly locate the documentation you need.

## Quick Reference - Most Common Lookups

### Core Language Elements
- **Directives** (Commands): `.claude/pxplus-docs/directives/` - 233 files
  - Entry point: `directives.md`
  - Examples: `open.md`, `read.md`, `write.md`, `if.md`, `for.md`
  
- **Functions**: `.claude/pxplus-docs/functions/` - 130 files
  - Entry point: `functions.md`
  - Examples: `str.md`, `num.md`, `len.md`, `pos.md`, `msk.md`
  
- **System Variables**: `.claude/pxplus-docs/variables/` - 44 files
  - Entry point: `variables.md`
  - Examples: `err.md`, `lfo.md`, `day.md`, `tim.md`

- **System Parameters**: `.claude/pxplus-docs/parameters/` - 237 files
  - Entry point: `parameters.md`
  - Examples: `ez.md`, `lc.md`, `bf.md`

## Documentation Structure by Category

### 1. Language Reference
```
lang_ref_introduction.md - Main entry point for language reference
directives/ - All PxPlus commands (OPEN, READ, WRITE, etc.)
functions/ - All built-in functions (STR(), NUM(), etc.)
variables/ - System variables (ERR, LFO, etc.)
parameters/ - System parameters (SET_PARAM directives)
mnemonics/ - Print/display mnemonics (184 files)
properties/ - Object properties reference (324 files)
```

### 2. File Handling
```
file_handling/ - Specialty file types (15 files)
  - file_types_and_data_structures.md
  - indexed_files.md
  - keyed_files.md
  - native_files.md
  - odbc_database.md
command_tags/ - Special file tags (13 files)
  - tcp_tag.md
  - http_tag.md
  - serial_tag.md
```

### 3. GUI Development
```
NOMADS Graphical Application/ - Complete NOMADS reference (252 files)
  - introduction.md
  - panels.md
  - controls.md
  - events.md
Extended NOMADS Objects/ - Advanced NOMADS features (12 files)
iNOMADS/ - Web-based NOMADS (34 files)
control_object_properties/ - GUI control properties (30 files)
```

### 4. Web Development
```
Webster/ - Web framework documentation (30 files)
  - introduction.md
  - getting_started.md
Web Server Reference/ - Web server specifics (19 files)
Web Utilities/ - Web utility programs (9 files)
```

### 5. Database and Reporting
```
Data Dictionary/ - Data dictionary maintenance (47 files)
  - introduction.md
  - maintenance.md
Report Writer/ - Report generation tools (54 files)
  - introduction.md
  - designer.md
odbc/ - ODBC connectivity (27 files)
  - introduction.md
  - configuration.md
```

### 6. Development Tools
```
utilities/ - Various utility programs (47 files)
PxPlus User Guide/ - Comprehensive user guide (192 files)
  - introduction.md
  - programming_concepts.md
PxIO Library/ - I/O library reference (84 files)
```

### 7. Learning Resources
```
How To/ - Tutorial-style documentation (34 files)
  - Various how-to guides for common tasks
appendix/ - Reference appendices (15 files)
  - error_codes.md
  - ascii_table.md
```

### 8. Migration and Integration
```
conversion/ - Converting from other systems
  - bbx_to_pxplus.md
  - providex_to_pxplus.md
Language Interfaces/ - Interfacing with other languages (63 files)
```

## How to Use This Index

### Looking up a specific directive:
1. Go to `.claude/pxplus-docs/directives/`
2. Find the file named after the directive (e.g., `open.md` for OPEN)
3. Some related directives are combined (e.g., `def_ctl~err~lfo~lfa.md`)

### Looking up a specific function:
1. Go to `.claude/pxplus-docs/functions/`
2. Find the file named after the function (e.g., `str.md` for STR())
3. Special characters in function names are replaced (e.g., `_at.md` for @)

### Finding documentation on a topic:
1. Check the category sections above
2. Look for introduction.md files in relevant directories
3. Use the Agent tool to search across multiple files

### Common Documentation Patterns:
- **Introduction files**: Most major sections have `introduction.md`
- **Index files**: Look for `index.md` or topic-specific index files
- **Combined documentation**: Some related items share a file (indicated by `~` in filename)
- **Cross-references**: Documentation files often reference related topics

## Quick Links to Essential Documentation

### For Beginners:
- `lang_ref_introduction.md` - Language reference overview
- `PxPlus User Guide/introduction.md` - General introduction
- `PxPlus User Guide/programming_concepts.md` - Core concepts
- `How To/` directory - Tutorial-style guides

### For File Operations:
- `directives/open.md` - Opening files
- `directives/read.md` - Reading data
- `directives/write.md` - Writing data
- `file_handling/file_types_and_data_structures.md` - File types overview

### For Object-Oriented Programming:
- `directives/def_class.md` - Class definitions
- `directives/new.md` - Object creation
- `properties/` directory - Object properties

### For Error Handling:
- `directives/try.md` - Modern error handling
- `variables/err.md` - Error number variable
- `functions/msg.md` - Error messages
- `appendix/error_codes.md` - Error code reference

### For GUI Development:
- `NOMADS Graphical Application/introduction.md` - NOMADS overview
- `control_object_properties/` - Control properties
- `iNOMADS/introduction.md` - Web-based GUI

## Search Tips

When using the Agent tool to search documentation:

1. **For specific items**: "Read the documentation for [FUNCTION/DIRECTIVE] from .claude/pxplus-docs/[type]/[name].md"
2. **For topics**: "Search in .claude/pxplus-docs/ for documentation about [topic]"
3. **For examples**: "Find examples of [feature] usage in .claude/pxplus-docs/"
4. **For related items**: "Search for documentation files containing [keyword] in .claude/pxplus-docs/"

## Note on File Naming

- Lowercase filenames throughout
- Special characters replaced with underscores
- Related items may be combined with `~` separator
- `.md` extension for all documentation files