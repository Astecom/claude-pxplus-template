This file contains must-read intructions regarding pxplus programming.

## CRITICAL: PxPlus Documentation Usage

**MANDATORY**: You have access to comprehensive PxPlus documentation via the `pxplus_search_docs` MCP tool. You MUST use this tool to look up documentation for:
 - ANY PxPlus function or directive you use or want to use
 - When the user asks about PxPlus features
 - Before writing code using unfamiliar PxPlus syntax
 - When debugging PxPlus-specific errors

### Using pxplus_search_docs Effectively

**Default Usage** (Lightweight, Fast):
- By default, searches return only **snippets** (300 chars around your search term)
- Use this for quick lookups and initial research
- Example: `pxplus_search_docs(query: "MSGBOX function", limit: 2)`

**When You Need Full Details** (includeFullContent):
- Set `includeFullContent: true` to get complete documentation content
- Content is automatically truncated to 3000 chars per result (configurable via `maxContentLength`)
- Use this when:
  - You need complete syntax details
  - Understanding complex examples
  - Researching advanced features
  - Snippets don't provide enough context
- Example: `pxplus_search_docs(query: "MSGBOX statement", limit: 1, includeFullContent: true)`

**Avoiding Token Limit Errors**:
- If you get "exceeds maximum allowed tokens" error:
  - Reduce `limit` to 1-2 results
  - Use more specific search queries
  - Don't set `includeFullContent: true` unless absolutely necessary
  - If using `includeFullContent`, reduce `maxContentLength` (e.g., 2000 instead of 3000)

## PxPlus Syntax Checking

Use the `pxplus_syntax_check` MCP tool to check PxPlus files for syntax errors after writing or modifying code.

**Important**: For date time operations, ALWAYS use the DTE function.

## Running PxPlus Applications

Sometimes it's good practice to actually execute a PxPlus application yourself (as the AI agent) to verify it works correctly or to test its behavior. To do this:

1. **Retrieve the PxPlus executable path**: Use the `pxplus_get_executable_path` MCP tool to get the configured path to the PxPlus executable
2. **Execute the program**: Use the Bash tool to run the PxPlus executable, passing the program file as the first parameter

**Example**:
```
# Get the executable path first
Use pxplus_get_executable_path tool -> returns "/path/to/pxplus"

# Then execute a PxPlus program
bash: "/path/to/pxplus "myprogram.pvc"
```

**When to run programs yourself**:
- After creating or modifying a program to verify it works
- To test program behavior with specific inputs
- To validate output or side effects
- To diagnose runtime issues beyond syntax errors

# Pxplus code generally looks like business basic, which is different from standard C-style.

# **NEVER** assume you know the exact syntax or behavior of a PxPlus function/directive without checking the docs first.

## PxPlus Programming Language Guide

### Language Overview
PxPlus (formerly ProvideX) is a business application development language. When writing PxPlus code:
- **NEVER include line numbers** in your code output
- File extensions can be `.pvxprg`, `.txt`, `.pvc` or others - focus on content, not extension
- For objects always use the `.pvc` extension.
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

<code-snippet name="class-definition" lang="pxplus">
DEF CLASS "ClassName" CREATE REQUIRED DELETE REQUIRED 
LIKE "parent/class" ! Optional inheritance
! Properties
PROPERTY propertyname$ SET ERR
PROPERTY HIDE __private_property$
PROPERTY readonly_prop$ SET ERR ! Read-only property
LOCAL variable$,numeric_var
! Public method with overloading
! IMPORTANT: Functions MUST have a label after parentheses!
FUNCTION methodname(param1$)METHOD_NAME_LABEL ! Label required!
FUNCTION methodname(param1$,param2)METHOD_NAME_LABEL ! Overloaded
! String functions need $ suffix on function name
FUNCTION get_name$()GET_NAME_LABEL ! Returns string
FUNCTION get_count()GET_COUNT_LABEL ! Returns numeric
! Private method
FUNCTION LOCAL private_method()PRIVATE_METHOD_LABEL
! Hidden method (not visible outside class)
FUNCTION HIDE internal_method()INTERNAL_METHOD_LABEL
END DEF
! Object lifecycle methods
ON_CREATE:
! Code executed when object is created
RETURN 
ON_DELETE:
! Code executed when object is deleted
RETURN 
! IMPORTANT: Method implementations go OUTSIDE the class definition!
METHOD_NAME_LABEL:
ENTER (param1$),(param2$="")
! Implementation for methodname
! Access properties directly (no THIS prefix)
LET propertyname$=param1$
RETURN result
GET_NAME_LABEL:
! String function implementation
RETURN propertyname$
GET_COUNT_LABEL:
! Numeric function implementation
RETURN numeric_var
PRIVATE_METHOD_LABEL:
! Private method implementation
RETURN 
INTERNAL_METHOD_LABEL:
! Hidden method implementation
RETURN
</code-snippet>

Object usage:
<code-snippet name="object-usage" lang="pxplus">
! Manual object lifecycle management
obj = NEW("ClassName")
result = obj'methodname("param", 123)  ! No CALL needed
obj'propertyname$ = "value"
DELETE OBJECT obj  ! or DROP OBJECT obj

! IMPORTANT - Property access inside class:
! WRONG: THIS'property or LET THIS'property = value
! CORRECT: Direct access without prefix: property = value
! Call own methods: _obj'method() not THIS'method()

! Automatic cleanup when program exits
obj = NEW("ClassName" FOR PROGRAM)
! Object will be automatically deleted when program ends

! FOR OBJECT - only available within the creating object
! (used when creating objects inside another object)
child_obj = NEW("ChildClass" FOR OBJECT)
! Object will be automatically deleted when parent object is deleted
</code-snippet>

### Traditional PxPlus Style

<code-snippet name="traditional-structure" lang="pxplus">
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
</code-snippet>

### Control Structures

<code-snippet name="control-structures" lang="pxplus">
! IF/THEN/ELSE
! Single-line format (no backslashes needed)
IF condition THEN statement ELSE other_statement

! Multi-line IF (use curly braces, not backslashes)
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
! CRITICAL: PxPlus FOR-NEXT loops ALWAYS execute at least once!
! Guard loops that might not need to run:
IF count > 0 THEN {
    FOR i = 1 TO count
        ! code
    NEXT i
}

FOR i = 1 TO 10 STEP 2
    ! code
NEXT i

WHILE condition
    ! code
    IF special_case THEN BREAK
    IF skip_iteration THEN CONTINUE
WEND

! CRITICAL: NO RETURN allowed inside FOR loops!
! WRONG: FOR i = 1 TO 10
!           IF condition THEN RETURN value
!        NEXT i
! CORRECT: Use flag and BREAK instead:
LOCAL result_found, result_value
result_found = 0
FOR i = 1 TO count
    IF condition THEN {
        result_value = value
        result_found = 1
        BREAK
    }
NEXT i
IF result_found THEN RETURN result_value

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
</code-snippet>

### Error Handling

Modern style:
<code-snippet name="error-handling-modern" lang="pxplus">
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
</code-snippet>

Traditional style:
<code-snippet name="error-handling-traditional" lang="pxplus">
! Error directives
statement; IF ERR THEN GOSUB ERROR_HANDLER
OPEN (1,ERR=*NEXT) "file.dat"  ! Continue on error
READ (1,DOM=*NEXT) record$      ! Continue if no match
EXTRACT (1,BSY=*SAME) record$   ! Retry if busy

! In error handlers:
! WRONG: RESUME LABEL
! CORRECT: GOTO LABEL
ERROR_HANDLER:
    error_msg$ = MSG(ERR)
    PRINT "Error: ", error_msg$
    GOTO CLEANUP  ! Use GOTO, not RESUME

! Common error handling patterns
ERR=*NEXT     ! Continue to next statement on error
DOM=*NEXT     ! Continue if key not found (Domain error)
BSY=*SAME     ! Retry same operation if busy
BSY=*NEXT     ! Continue if busy
TIM=10        ! Timeout after 10 seconds
</code-snippet>

### File Operations

<code-snippet name="file-operations" lang="pxplus">
! Open file modes
OPEN (1) "filename.dat"                          ! Default open
OPEN INPUT (chan) "file.txt"; chan = LFO         ! Read-only
OPEN OUTPUT (chan) "file.txt"                    ! Write-only
! CORRECT PATTERN: Use UNT and save LFO immediately
OPEN (UNT,IOL=*) "file.dat"; chan=LFO            ! Save LFO immediately!
OPEN (UNT,IOL=*) "file.dat" FOR PROGRAM; chan=LFO ! Auto-close when program ends
OPEN (UNT,IOL=IOL_VAR$) "file.dat"               ! With specific IOL
OPEN (1,ERR=*NEXT,TIM=10) "file.dat"             ! With error handling and timeout

! Special file types
OPEN (1) "[tcp]server:port"                ! TCP connection
OPEN (1) "[lcl]program"                    ! Local program

! Read operations
READ (chan) var1$, var2                     ! Sequential read
READ (chan,KEY=key$) record$                ! Keyed read
! IMPORTANT: Variables are auto-assigned from IOL
! NEVER use channel'variable$ after READ
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

! File creation pattern:
! Use SERIAL to create, then OPEN LOCK for exclusive access
SERIAL "output.html"
ch = UNT
OPEN LOCK (ch,ERR=ERROR_HANDLER)"output.html"
WRITE (ch)content$
CLOSE (ch)

! File positioning
SELECT * FROM chan BEGIN key$ END end_key$  ! Select range
NEXT RECORD                                 ! Move to next in SELECT

! File information
file_handle = LFO                           ! Last File Opened
PTH(channel)                                ! Get path of open file
FIN(channel,"NUMREC")                      ! File information

! Close file
CLOSE (chan)
</code-snippet>

### Object Reference Management (CRITICAL)

**PxPlus uses numeric references for objects (e.g., 100038)**
- When object deleted, variables still hold the reference number
- Accessing deleted reference = silent program termination
- **WRONG:** Reusing object references
<code-snippet name="object-reference-wrong" lang="pxplus">
! WRONG - _obj will be deleted later!
IF condition THEN {
    result_list'Append(_obj)
    RETURN result_list
}
</code-snippet>
- **CORRECT:** Always create new objects
<code-snippet name="object-reference-correct" lang="pxplus">
! CORRECT - create new object
IF condition THEN {
    new_obj = NEW("ClassName", params...)
    result_list'Append(new_obj)
    RETURN result_list
}
</code-snippet>

**Symptoms of stale references:**
- Program exits silently (no error)
- Works for first item, fails on later ones
- No error message displayed

**Debugging stale references:**
- Use SET_PARAM 'NE'=1 and 'PC'=0
- Add SETERR ERROR_HANDLER
- Print object refs before use
- Watch for early loop exits

### String Operations

<code-snippet name="string-operations" lang="pxplus">
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
</code-snippet>

### Common Functions and Directives

<code-snippet name="common-functions" lang="pxplus">
! Parameter passing
ENTER param1$, param2, param3$
! Parentheses make parameters read-only (pass by value):
ENTER param1$, (param2), param3$  ! param2 is read-only
! IMPORTANT: Parentheses do NOT indicate optional parameters!

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
</code-snippet>

### Important Patterns

1. **Line Continuation**: Use `\` at end of line
2. **Block Syntax**: Use `{ }` for multi-line blocks after THEN/ELSE
3. **Labels**: End with `:` and should be descriptive
4. **Comments**: Start with `!` or `REM`
5. **Statement Separator**: Use `;` to separate multiple statements on one line
6. **Parameter Passing**:
   - Default is by reference
   - Use parentheses in ENTER for by-value (read-only): `ENTER param1$, (param2)`
   - Arrays passed with `{ALL}`: `PROCESS "prog","screen_id", array${ALL}`
7. **Optional Parameters**: Use parentheses in ENTER: `ENTER param1$, optional_param$=""`
8. **Multiple Return Values**: Via passed parameters or global variables
9. **Array Property Access**: Store in local var first: `item = items[i]` then `item'property`
10. **LOCAL Arrays**: Use separate statement: `LOCAL var` then `LOCAL DIM array[10]`

### Modern vs Traditional Style

- **Modern**: Use object-oriented features, TRY/CATCH, property syntax
- **Traditional**: Use GOSUB/RETURN, line labels, traditional error handling
- Both styles are valid; match the existing codebase style

### Running PxPlus Programs

<code-snippet name="running-programs" lang="bash">
# Typical execution (varies by installation)
pxplus program.pxprg
pvx program.pxprg
</code-snippet>

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

**IMPORTANT**: Always check PxPlus files for syntax errors using the `pxplus_syntax_check` MCP tool after writing or modifying code.

**Common Syntax Error Numbers**:
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
11. In PxPlus, READ or FIND statements require a complete key to locate a record
12. When working with a partial key, use SELECT ... NEXT RECORD loop instead
13. FOR-NEXT loops ALWAYS execute at least once - guard with IF when needed
14. NO RETURN statements allowed inside FOR loops - use flag and BREAK instead
15. Object references: Always create new objects, don't reuse references that will be deleted
16. Comments: Use `!` not `rem`
17. GOSUB: Separate variable assignment: `var$ = "value"; gosub LABEL`
18. Print positioning: Use `'TEXT'(@x(x,p),@y(y,p),"text")` not `@(x,y),"text"`, should only be used when it has to be sent to a printer.

## Key Patterns to Follow when using classes

### 1. Internal Variables Use LOCAL, Not PROPERTY
```pxplus
! CORRECT - Use LOCAL for internal/private variables:
LOCAL json_request                ! Internal object reference
LOCAL json_response               ! Internal object reference
LOCAL response_headers$           ! Internal string

! WRONG - Don't use PROPERTY HIDE for these:
PROPERTY HIDE __rates$[]          ! This doesn't work!
```

### 2. Method Structure - Declare Variables BEFORE TRY Block
```pxplus
METHOD_LABEL:
    ENTER param1$, (param2$="")   ! Optional params with defaults

    ! Declare ALL local variables BEFORE TRY
    LOCAL result$
    LET result$ = ""              ! Initialize return value

    TRY
        ! ... method logic ...
        ! Set result$ throughout
        LET result$ = "success value"

    CATCH
        ! Handle error
        LET result$ = ""

    FINALLY
        ! Cleanup resources
        IF obj > 0 THEN DROP OBJECT obj

    END_TRY

    ! Return AFTER the TRY/CATCH/FINALLY completes
    RETURN result$
```

### 3. NO EXIT or EXITTO in TRY Blocks
```pxplus
! WRONG:
TRY
    IF error THEN EXIT 99
    IF error THEN EXITTO LABEL_END
END_TRY

! CORRECT - Just set result and let block complete:
TRY
    IF error THEN {
        LET result$ = ""
        ! Don't exit - let TRY block complete
    } ELSE {
        ! ... success logic ...
        LET result$ = "data"
    }
CATCH
    LET result$ = ""
END_TRY

RETURN result$
```

### 4. Use GOSUB for Internal Helper Routines
```pxplus
! Method can GOSUB to labels in same file:
METHOD_LABEL:
    GOSUB CLEAR_STATE
    ! ... rest of method ...
    RETURN result$

! Internal helper - just a label with RETURN, not a FUNCTION:
CLEAR_STATE:
    LET last_error$ = ""
    LET last_response$ = ""
    RETURN
```

### 5. Don't Declare FUNCTION HIDE for GOSUB Targets
```pxplus
! WRONG - Don't declare internal GOSUBs as FUNCTIONs:
FUNCTION HIDE __ClearError()CLEAR_ERROR_LABEL

! CORRECT - Just use label with GOSUB/RETURN:
! (no FUNCTION declaration needed)

SOME_METHOD:
    GOSUB CLEAR_ERROR_LABEL
    RETURN

CLEAR_ERROR_LABEL:
    LET last_error$ = ""
    RETURN
```

### 6. Arrays in Classes - Use LOCAL DIM
```pxplus
! In ON_CREATE or method:
LOCAL rates$              ! Declare as LOCAL
DIM rates$                ! Then DIM it as associative array

! NOT:
PROPERTY HIDE __rates$    ! Can't declare array properties
DIM __rates$[10]          ! This causes errors
```

### 7. Calling Other Methods of Same Class
```pxplus
! Use _obj' to call another method in same class:
VALIDATE_SIMPLE:
    ENTER full_address$, region$
    LOCAL result$
    LET result$ = _obj'ValidateAddress$(full_address$, region$)
    RETURN result$
```

### 8. Optional Parameters with Defaults
```pxplus
! Use parentheses with default value:
METHOD_LABEL:
    ENTER required_param$, (optional_param$="default")

    ! Check if default is still there:
    IF optional_param$ = "" THEN LET optional_param$ = "fallback"
```

### 9. NOT Operator with Properties
```pxplus
! WRONG - NOT without parentheses:
IF NOT RatesAvailable THEN ...
IF NOT __initialized THEN ...

! CORRECT - Use NOT with parentheses:
IF NOT(RatesAvailable) THEN ...
IF NOT(__initialized) THEN ...

! ALSO CORRECT - Compare to zero:
IF RatesAvailable = 0 THEN ...
IF __initialized = 0 THEN ...
```

### 10. FOR INDEX Loop Syntax for Associative Arrays
```pxplus
! WRONG:
FOR rate$ INDEX currency$ FROM __rates$[ALL]

! CORRECT:
FOR currency$ INDEX rates${ALL}
    LET rate$ = rates$[currency$]
    ! ... use currency$ and rate$ ...
NEXT
```

### MANDATORY Documentation Lookup Rules

1. **ALWAYS look up unfamiliar functions/directives**: When encountering a PxPlus function or directive you're not 100% certain about, you MUST use the `pxplus_search_docs` MCP tool to search the documentation.

2. **Use keywords or phrases**: Search with relevant keywords like "FUNCTION directive", "DIM array", "READ statement", etc.

3. **Priority for lookups**:
   - When writing code that uses a function/directive
   - When explaining how a function/directive works
   - When debugging issues related to specific functions/directives
   - When the user asks about any PxPlus feature
