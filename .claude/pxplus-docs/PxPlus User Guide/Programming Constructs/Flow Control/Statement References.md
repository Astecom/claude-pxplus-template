# Flow Control

**Statement References** |  **__**  
---|---  
  
By definition, a sequence control procedure will generally redirect program flow to some place that is outside the current order of execution. These transfers (branches or jumps) are most often invoked via **_statement references_** \- pointers to other locations in the program that are identified by **[Line Numbers](Statement%20References.htm#linenumbers)**, **[Line Labels](Statement%20References.htm#linelabels)** or **[Logical Statement References](Statement%20References.htm#stmtref)**.

##  Line Numbers

At one time, line numbers were among the most distinctive features of BASIC programming. In early dialects, they were mandatory for identifying lines of code and serving as reference points for any type of sequence control procedure. They still work in PxPlus but are generally associated with less structured programming techniques. See **[Numberless Programs](../../Development%20Tools/Writing%20and%20Modifying%20Program%20Code/Overview.htm#Mark1)**.

Currently, with prevalent use of line labels in contemporary programming, line numbers are now considered superfluous. While many developers keep them in their applications, line numbers are really only necessary when working with the **[PxPlus Command Line Editing](../../Development%20Tools/Writing%20and%20Modifying%20Program%20Code/PxPlus%20Command%20Line%20Editing.md)** (for listing and editing).

#### **Note:**  
Many of the code samples in this documentation use line numbers for _illustration purposes_. These are _optional_ unless they appear in a statement reference.

In _unstructured_ line-numbered programs, transfers are normally accomplished via the **[GOTO](../../../directives/goto.md)** directive. This provides a direct unconditional jump. For example, when the system encounters a GOTO 0021 _,_ control automatically transfers to the statement at line 21.

However, if line 21 does not exist, control moves down to the statement with the next higher line number.

**_Example:_**

> 0010 LET X=10   
>  0020 IF X=10 THEN GOTO 0021   
>  0025 PRINT "Where is line 21?"   
>  RUN  
> Where is line 21?

While the use of**GOTO** statements does not mean that a program is unstructured, they are most often used to facilitate unstructured flow control. Generally, you should **_avoid_** unstructured programming wherever possible.

##  Line Labels

Like line numbers, line labels are used to identify a single line of code. Labels can include any combination of characters (plus the _ _underscore_ character) but must begin with a _letter_ and end with a :  _colon_. The colon is not used when referencing a line label. A label name can be up to 127 characters in length.

**_Example:_**

When the statement GOTO Total is processed, the program automatically jumps to the line with the label Total: at the beginning of the statement:

> CHECK_TOTAL: IF A$=B$ THEN GOTO TOTAL

The line label can also appear on a line by itself:

> TOTAL:   
>  ! Continue processing

While a line label can be referenced multiple times, the label itself can only occur **_once_** in a program. When used in large programs, line labels offer improved readability and are considered much easier to maintain. References to line labels make line numbers unnecessary.

While line label references are optional in line-numbered programs, they are mandatory in programs where line numbers are omitted (and in this case, references to line numbers would be invalid).

##  Logical Statement References

PxPlus includes a set of built-in logical statement references that can be applied as keywords (with leading *****_asterisk)_ anywhere actual statement references are used:

|  ***BREAK** |  Execute **[BREAK](../../../directives/break.md)** directive  
---|---|---  
|  ***CONTINUE** |  Execute **[CONTINUE](../../../directives/continue.md)** directive  
|  ***END** |  Execute **[END](../../../directives/end.md)** directive  
|  ***ESCAPE** |  Execute **[ESCAPE](../../../directives/escape.md)** directive  
|  ***NEXT** |  Continue to the next line  
|  ***PROCEED** |  Continue to the next logical directive  
|  ***RETRY** |  Execute **[RETRY](../../../directives/retry.md)** directive  
|  ***RETURN** |  Execute **[RETURN](../../../directives/return.md)** directive  
|  ***SAME** |  Restart current line  
  
Unlike number or label references, logical references do not point to a _specific_ location but provide a _generic or dynamic_ transfer of execution; i.e. advancing to the next line or returning from a sub-routine. These references are particularly useful in line-numbered programs because they help to reduce errors caused by renumbering issues and can clarify the intent of a statement.

**_Example:_**

> READ(1,KEY=CUST_NUM$,DOM=*NEXT)

**_Where:_**

> The logical statement reference *NEXT automatically transfers execution to the beginning of the next line/statement.

## See Also

**[Labels/Logical Statement References](../../../appendix/labels~logical_statement_references.md)**
