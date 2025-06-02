# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## PxPlus Configuration

**PXPLUS_EXECUTABLE_PATH**: NOT_SET

**CRITICAL**: The PxPlus executable path is not set. To set it, use the command:
`/project:set-pxplus-path <path-to-pxplus-executable>`

Example: `/project:set-pxplus-path /usr/local/bin/pxplus`

# **MANDATORY AGENT BEHAVIOR**: 
# - If PXPLUS_EXECUTABLE_PATH is "NOT_SET", you MUST IMMEDIATELY ask the user to set it BEFORE doing ANY work
# - Start your response with: "I notice the PxPlus executable path is not set. This is required for debugging and running PxPlus programs. Please set it using: `/project:set-pxplus-path <path-to-pxplus-executable>`"
# - Only proceed with the user's request AFTER they set the path or explicitly tell you to continue without it (not recommended)
# - If the user says to continue without setting it, warn them that debugging capabilities will be unavailable

## CRITICAL: PxPlus Documentation Usage

# **MANDATORY**: You have access to comprehensive PxPlus documentation in `.claude/pxplus-docs/`. You MUST use the Agent tool to look up documentation for:
# - ANY PxPlus function or directive you're not 100% certain about
# - When the user asks about PxPlus features
# - Before writing code using unfamiliar PxPlus syntax
# - When debugging PxPlus-specific errors

# Pxplus code generally looks like business basic, which is different from standard C-style.

# **NEVER** assume you know the exact syntax or behavior of a PxPlus function/directive without checking the docs first.

## PxPlus Programming Language Guide

### Language Overview
PxPlus (formerly ProvideX) is a business application development language. When writing PxPlus code:
- **NEVER include line numbers** in your code output
- File extensions can be `.pvxprg`, `.txt`, or others - focus on content, not extension
- PxPlus is case-insensitive but conventionally uses UPPERCASE for keywords

### Variable Conventions
- String variables end with `$` (e.g., `name$`, `data$`)
- Numeric variables have no suffix (e.g., `count`, `total`)
- System/Global variables prefixed with `%` (e.g., `%BEDRIJF$`, `%POOL_DIR$`)
- Arrays declared with `DIM`: `DIM array$[10], matrix[5,5]`
- Dynamic arrays: `DIM array[*]` - size determined at runtime
- Associative arrays use `[key$]` syntax: `customer[id$]`
- Array operations: `array{ALL}` for all elements, `array[*]=value` for assignment
- LOCAL scope modifier: `LOCAL variable$, LOCAL DIM array[10]`

### Modern Object-Oriented PxPlus

```pxplus
DEF CLASS "ClassName" CREATE REQUIRED DELETE REQUIRED
    LIKE "parent/class"  ! Optional inheritance
    
    ! Properties
    PROPERTY propertyname$ SET ERR
    PROPERTY HIDE __private_property$
    PROPERTY readonly_prop$ GET ERR  ! Read-only property
    
    LOCAL variable$, numeric_var
    
    ! Constructor
    FUNCTION CREATE()CONSTRUCTOR
        ! Initialization code
    END FUNCTION
    
    ! Public method with overloading
    FUNCTION methodname(param1$)method_name
        ! Implementation
        RETURN result
    END FUNCTION
    
    FUNCTION methodname(param1$, param2)method_name
        ! Overloaded implementation
        RETURN result
    END FUNCTION
    
    ! Private method
    FUNCTION LOCAL private_method()private_method
        ! Implementation
    END FUNCTION
    
    ! Hidden method (not visible outside class)
    FUNCTION HIDE internal_method()internal_method
        ! Implementation
    END FUNCTION
    
END DEF

! Object lifecycle methods
ON_CREATE:
    ! Code executed when object is created
    RETURN

ON_DELETE:
    ! Code executed when object is deleted
    RETURN
```

Object usage:
```pxplus
! Manual object lifecycle management
obj = NEW("ClassName")
result = obj'methodname("param", 123)
obj'propertyname$ = "value"
DELETE OBJECT obj  ! or DROP OBJECT obj

! Automatic cleanup when program exits
obj = NEW("ClassName" FOR PROGRAM)
! Object will be automatically deleted when program ends

! FOR OBJECT - only available within the creating object
! (used when creating objects inside another object)
child_obj = NEW("ChildClass" FOR OBJECT)
! Object will be automatically deleted when parent object is deleted
```

### Traditional PxPlus Style

```pxplus
! Program structure
PRECISION 6
SET_PARAM 'EZ'=1

! Main program - entry point
MAIN:
    LET variable$ = "value"
    GOSUB PROCESS_DATA  ! Call subroutine
    EXIT                ! Exit the program
    
! Subroutine - must end with RETURN
PROCESS_DATA:
    ! Subroutine code
    IF condition THEN {
        ! Multi-line block
        statement1
        statement2
    }
    RETURN              ! Return to calling point (after GOSUB)
```

### Control Structures

```pxplus
! IF/THEN/ELSE
IF condition \
    THEN statement \
    ELSE other_statement

! Multi-line IF
IF condition THEN {
    statement1
    statement2
} ELSE {
    statement3
}

! Nested inline IF with TBL function
result$ = TBL(condition=1, "true_value", "false_value")

! SWITCH/CASE
SWITCH expression$
    CASE "value1"
        ! code
        BREAK
    CASE "value2", "value3"
        ! code
        BREAK
    DEFAULT
        ! code
END SWITCH

! Loops
FOR i = 1 TO 10
    ! code
NEXT i

FOR i = 1 TO 10 STEP 2
    ! code
NEXT i

WHILE condition
    ! code
    IF special_case THEN BREAK
    IF skip_iteration THEN CONTINUE
WEND

! Associative array iteration
FOR element$ INDEX key$ FROM array[]
    ! Process array[key$] = element$
NEXT

! Iterate with INDEX
FOR value INDEX key$ FROM array{ALL}
    ! Process each element
NEXT

! Special exit controls
EXITTO label      ! Exit to specific label
EXITTO *CONTINUE  ! Continue loop iteration
```

### Error Handling

Modern style:
```pxplus
TRY
    ! Code that might fail
CATCH e
    ! Error handling
    error_msg$ = MSG(e)
    error_line = NUM(ERR("STNO"))
    error_prog$ = ERR("PROGRAM")
FINALLY
    ! Cleanup code - always executes
END_TRY
```

Traditional style:
```pxplus
! Error directives
statement; IF ERR THEN GOSUB ERROR_HANDLER
OPEN (1,ERR=*NEXT) "file.dat"  ! Continue on error
READ (1,DOM=*NEXT) record$      ! Continue if no match
EXTRACT (1,BSY=*SAME) record$   ! Retry if busy

! Common error handling patterns
ERR=*NEXT     ! Continue to next statement on error
DOM=*NEXT     ! Continue if key not found (Domain error)
BSY=*SAME     ! Retry same operation if busy
BSY=*NEXT     ! Continue if busy
TIM=10        ! Timeout after 10 seconds
```

### File Operations

```pxplus
! Open file modes
OPEN (1) "filename.dat"                          ! Default open
OPEN INPUT (chan) "file.txt"; chan = LFO         ! Read-only
OPEN OUTPUT (chan) "file.txt"                    ! Write-only
OPEN (UNT) "file.dat"                            ! Next available channel
OPEN (UNT,IOL=*) "file.dat"                      ! With IOL from file
OPEN (UNT,IOL=*) "file.dat" FOR PROGRAM          ! Auto-close when program ends
OPEN (UNT,IOL=*) "file.dat" FOR PROGRAM; chan=LFO ! Common pattern - save channel
OPEN (UNT,IOL=IOL_VAR$) "file.dat"               ! With specific IOL
OPEN (1,ERR=*NEXT,TIM=10) "file.dat"             ! With error handling and timeout

! Special file types
OPEN (1) "[tcp]server:port"                ! TCP connection
OPEN (1) "[lcl]program"                    ! Local program

! Read operations
READ (chan) var1$, var2                     ! Sequential read
READ (chan,KEY=key$) record$                ! Keyed read
READ (chan,KNO=0,KEY=key$) record$          ! Specific key number
READ (chan,IND=index) record$               ! By index
EXTRACT (chan,KEY=key$) record$             ! Read with lock
EXTRACT (chan,KEY=key$,BSY=*NEXT) record$  ! Skip if locked
READ DATA FROM "",REC=VAR$ TO IOL=IOL(chan) ! Read into IOL

! Write operations
WRITE (chan) var1$, var2                    ! Sequential write
WRITE (chan,KEY=key$) record$               ! Keyed write
WRITE RECORD (chan,KEY=key$) record$        ! Write full record
INSERT (chan,KEY=key$) record$              ! Insert new record

! File positioning
SELECT * FROM chan BEGIN key$ END end_key$  ! Select range
NEXT RECORD                                 ! Move to next in SELECT

! File information
file_handle = LFO                           ! Last File Opened
PTH(channel)                                ! Get path of open file
FIN(channel,"NUMREC")                      ! File information

! Close file
CLOSE (chan)
```

### String Operations

```pxplus
! Concatenation
full$ = first$ + " " + last$

! Special characters
crlf$ = $0D0A$       ! Carriage return + line feed
tab$ = $09$          ! Tab character
quote$ = $22$        ! Double quote
sep$ = SEP           ! System separator character

! String functions
length = LEN(string$)
position = POS("search" = string$)           ! Find substring
position = POS("search" = string$, -1)       ! Find from end
substring$ = MID(string$, start, length)
padded$ = PAD(string$, 20)                   ! Pad to 20 chars
padded$ = PAD(string$, -20)                  ! Right pad
number$ = STR(numeric_value)
number$ = STR(value:"000000")               ! Format with zeros
value = NUM(string$)
trimmed$ = STP(string$)                      ! Strip spaces
upper$ = UCS(string$)                        ! Uppercase
lower$ = LCS(string$)                        ! Lowercase
converted$ = CVS(string$, "flag")           ! Convert string

! Pattern matching
match = MSK(string$, pattern$)               ! Regex match
IF MSK(string$, "^[A-Z]+$") THEN ...        ! Check pattern
match_start = MSK(1)                         ! Get match position
match_length = MSL                           ! Get match length

! String comparison
IF string1$ = string2$ THEN ...              ! Exact match
IF POS(substring$ = string$) THEN ...        ! Contains
```

### Common Functions and Directives

```pxplus
! Parameter passing
ENTER param1$, param2, param3$

! Exit variations
EXIT              ! Exit program/function
EXITTO label      ! Exit to specific label
RETURN            ! Return from subroutine/function

! System functions
MSG(err_num)      ! Get error message
ERR               ! Last error number
LFO               ! Last file opened
TCB(num)          ! Task control block info
day = DAY         ! Current day
tim = TIM         ! Current time

! Precision and formatting
PRECISION 4       ! Set numeric precision
ROUND(value, 2)   ! Round to 2 decimals

! LET statement with multiple assignments
LET a=1, b=2, c$="test"    ! Comma-separated assignments in single LET
! Equivalent to:
LET a=1; LET b=2; LET c$="test"
```

### Important Patterns

1. **Line Continuation**: Use `\` at end of line
2. **Block Syntax**: Use `{ }` for multi-line blocks after THEN/ELSE
3. **Labels**: End with `:` and should be descriptive
4. **Comments**: Start with `!` or `REM`
5. **Statement Separator**: Use `;` to separate multiple statements on one line
6. **Parameter Passing**:
   - Default is by reference
   - Use parentheses for by value: `CALL "prog", (var$)`
   - Arrays passed with `{ALL}`: `PROCESS "prog", array${ALL}`
7. **Optional Parameters**: Use parentheses in ENTER: `ENTER param1$, (optional_param$)`
8. **Multiple Return Values**: Via passed parameters or global variables

### Modern vs Traditional Style

- **Modern**: Use object-oriented features, TRY/CATCH, property syntax
- **Traditional**: Use GOSUB/RETURN, line labels, traditional error handling
- Both styles are valid; match the existing codebase style

### Running PxPlus Programs

```bash
# Typical execution (varies by installation)
pxplus program.pxprg
pvx program.pxprg
```

# PxPlus Syntax Elements

## PxPlus Directives

# Here's all the PxPlus directives:

# accept, add, addr, and, auto, begin, break, button, bye, call, case, catch, chart, check_box, class, clear, clip_board, close, continue, control, create, ctl, custom_vbx, cwdir, data, day_format, def, default, defctl, defprt, deftty, delete, dictionary, dim, direct, directory, disable, drop, drop_box, dump, edit, else, enable, end, end_if, end_try, endtrace, enter, erase, err, error_handler, escape, event, except, execute, exit, exitto, extract, file, finally, find, floatingpoint, flush, for, for event, from, function, get, get_file_box, gosub, goto, grid, h_scrollbar, hide, if, index, indexed, input, insert, invoke, iolist, key, keyed, let, like, line_switch, list, list_box, load, local, lock, long_form, menu_bar, merge, message_lib, mnemonic, msgbox, multi_line, multi_media, next, next record, object, obtain, off, on, open, password, perform, pop, popup_menu, precision, prefix, preinput, print, process, program, properties, property, purge, quit, radio_button, randomize, read, record, redim, refile, release, remove, rename, renumber, repeat, required, reset, restore, retry, return, round, run, same, save, select, serial, server, set, set_focus, set_param, setctl, setday, setdrive, seterr, setesc, setfid, setmouse, settime, settrace, short_form, show, sort, start, static, step, stop, swap, switch, system_help, system_jrnl, table, then, time, to, translate, tristate_box, try, unique, unlock, until, update, user_lex, v_scrollbar, vardrop_box, varlist_box, via, video_palette, wait, wend, where, while, window, winprt_setup, with, write

## PxPlus Functions

# Here's all the PxPlus built-in functions:

# @, @x, @y, abs, acs, and, arg, asc, asn, ath, atn, bin, bsz, chg, chr, cmp, cos, cpl, crc, cse, ctl, cvs, dec, deg, dim, dir, dll, dlx, dsk, dte, env, ept, err, evn, evs, exp, ffn, fib, fid, fin, fpt, gap, gbl, gep, hsa, hsh, hta, hwn, i3e, i86, ind, int, iol, ior, jst, jul, kec, kef, kel, ken, kep, key, kgn, lcs, len, lno, log, lrc, lst, max, mem, mid, min, mnm, mod, msg, msk, mxc, mxl, new, not, nul, num, obj, opt, pad, pck, pfx, pgm, pos, prc, prm, pth, pub, rad, rcd, rdx, rec, ref, rnd, rno, sep, sgn, sin, sqr, srt, ssz, stk, stp, str, sub, swp, sys, tan, tbl, tcb, tmr, trx, try, tsk, txh, txw, ucp, ucs, upk, vin, vis, xeq, xfa, xml, xor

Note: Functions are highlighted when followed by parentheses.

## Operators

### Comparison Operators
<=, >=, =, <, >, <>, =<, =>

### Assignment Operators
=, +=, -=, *=, /=, |=, ^=

### Arithmetic Operators
+, -, *, /, |, ^

### Logical Operators
and, or

## Other Syntax Elements

- **Mnemonics**: Single-quoted alphanumeric strings like 'CS', 'LF', '+C', etc.
- **Strings**: Double-quoted strings with "" for escaping quotes
- **Hex Strings**: Format like $48656C6C6F$ (hex representation)
- **Numbers**: Decimal, hexadecimal (0x prefix), with optional suffixes (L, UL, F, etc.)
- **Comments**: REM statements (defined elsewhere in grammar)
- **Labels**: Word followed by colon at start of line (e.g., START:)
- **User Functions**: Any identifier followed by parentheses is highlighted as a function

## Special Notes

- All keywords are case-insensitive
- The grammar uses complex regex patterns to ensure proper context (avoiding false matches)
- Some directives have variations (e.g., "for" vs "for event", "next" vs "next record")
- You should always write these out in full caps

# Debugging PxPlus Code

**IMPORTANT**: You have to check PxPlus files for syntax errors using the built-in error checking tool.

**Note**: Use the PxPlus executable path configured at the top of this file (PXPLUS_EXECUTABLE_PATH). If it's NOT_SET, prompt the user to set it first.

**Syntax Check Command**:
```bash
"<PXPLUS_EXECUTABLE_PATH>" "*tools/extEditor;ErrorCheck" -arg "./filename.pxprg"
```

**IMPORTANT**: Always put the PxPlus executable path in quotes when running commands, as the path contains spaces.
**IMPORTANT**: If the PXPLUS_EXECUTABLE_PATH is NOT_SET, always remind the user to set it so you can do debugging.

Example (replace <PXPLUS_EXECUTABLE_PATH> with the actual path):
```bash
"/mnt/x/PVX Plus Technologies/PxPlus-64-2025-linux/pxplus" "*tools/extEditor;ErrorCheck" -arg "./show_time.pxprg"
```

**Response Format**:
- If there are errors: The error checker returns a JSON array with error details:
  ```json
  [{row:9,column:13,text:"line:10(13) Error #20: Syntax error",type:"error"}]
  ```
- **If there are NO errors**: The command produces no output or may show terminal control characters. This means the syntax is correct.

**Understanding the Response**:
- `row`: The line number where the error occurs (0-based index)
- `column`: The column position of the error
- `text`: Detailed error message including:
  - `line:X(Y)` - Line X, column Y in the file
  - Error number (e.g., `#20`)
  - Error description (e.g., `Syntax error`)
- `type`: Error severity (usually "error")

**How to Use When Debugging**:
1. After writing or modifying PxPlus code, run the syntax checker
2. Parse the JSON response to identify errors
3. Fix the errors at the specified line and column
4. Re-run the checker to verify fixes

**Common Error Numbers**:
- `#20`: Syntax error - general syntax issues
- `#21`: Invalid label/line number
- `#26`: Variable name error
- `#27`: Subscript/index error

### Common Pitfalls to Avoid

1. Don't forget `$` suffix for string variables
2. Remember PxPlus arrays are 1-based by default
3. Use proper line continuation with `\`
4. Match the style of the existing codebase
5. Always close files after opening them
6. Use proper error handling for file operations
7. LFO (Last File Opened) changes with each OPEN - save it immediately
8. EXTRACT locks records - always have a plan to unlock
9. Object variables need explicit deletion with DELETE OBJECT
10. System variables (%) are global - be careful with naming

## PxPlus Documentation Lookup

**IMPORTANT**: The `.claude/pxplus-docs/` directory contains comprehensive PxPlus documentation extracted from the official sources. You MUST use this documentation when working with PxPlus functions and directives.

### Documentation Index
**A comprehensive documentation index is available at `.claude/docs-index.md`**. This index provides:
- Quick reference to the most common lookups (directives, functions, variables, parameters)
- Complete directory structure with file counts
- Category-based organization for easy navigation
- Search tips and usage patterns
- Quick links to essential documentation

### Documentation Structure
- **Functions**: `.claude/pxplus-docs/functions/` - Each function has its own .md file (e.g., `str.md` for STR() function)
- **Directives**: `.claude/pxplus-docs/directives/` - Each directive has its own .md file (e.g., `open.md` for OPEN directive)
- **Other Topics**: Various subdirectories containing guides on specific topics

### MANDATORY Documentation Lookup Rules

1. **ALWAYS look up unfamiliar functions/directives**: When encountering a PxPlus function or directive you're not 100% certain about, you MUST use the Agent tool to search the documentation.

2. **Use the Agent tool for documentation searches**: The Agent tool is optimized for searching through the documentation efficiently. DO NOT manually browse files.

3. **Priority for lookups**:
   - When writing code that uses a function/directive
   - When explaining how a function/directive works
   - When debugging issues related to specific functions/directives
   - When the user asks about any PxPlus feature

### How to Look Up Documentation

**FIRST: Check the documentation index at `.claude/docs-index.md`** to understand the documentation structure and find the right location for your lookup.

**For Functions**:
Use the Agent tool with a prompt like:
```
Read the documentation for the STR() function from .claude/pxplus-docs/functions/str.md and explain its syntax and usage
```

**For Directives**:
Use the Agent tool with a prompt like:
```
Read the documentation for the OPEN directive from .claude/pxplus-docs/directives/open.md and show me all the available options
```

**For General Topics**:
Use the Agent tool to search for relevant documentation:
```
Search in .claude/pxplus-docs/ for documentation about error handling in PxPlus
```

**For Quick Navigation**:
Use the Agent tool to check the index:
```
Read .claude/docs-index.md to find where [topic] documentation is located
```

### Examples of When to Use Documentation

1. **User asks about a function**:
   - User: "How does the MSK() function work?"
   - Action: Use Agent to read `.claude/pxplus-docs/functions/msk.md`

2. **Writing code with unfamiliar syntax**:
   - Task: Need to use the FIN() function
   - Action: Use Agent to read `.claude/pxplus-docs/functions/fin.md` before writing code

3. **Debugging syntax errors**:
   - Error: Issues with EXTRACT directive
   - Action: Use Agent to read `.claude/pxplus-docs/directives/extract.md` to verify correct syntax

4. **Exploring PxPlus features**:
   - Task: Implement file mirroring
   - Action: Use Agent to search for "mirroring" in `.claude/pxplus-docs/`

### Documentation Search Tips

- Function names in docs may have special characters (e.g., `_at.md` for @ function)
- Some directives have combined documentation (e.g., `def_ctl~err~lfo~lfa.md`)
- Use the Agent tool's ability to search multiple files when looking for concepts
- The documentation includes examples, syntax, parameters, and error conditions