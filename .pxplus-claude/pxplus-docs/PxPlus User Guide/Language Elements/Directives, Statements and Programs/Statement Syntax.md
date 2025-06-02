# Directives, Statements and Programs

**Statement Syntax** |  **__**  
---|---  
  
A valid program statement requires at least one directive. Depending on the directives used, various arguments and syntax elements may be needed to complete the statement. The example below illustrates the format of a typical program statement:

**_Example:_**

> 0010 Total: PRINT a,b,c+d ! Totals

**_Where:_**

0010 |  **_Line Number_** (optional). Any integer between 1 and 64999. Each line number must be unique - the best practice is to assign line numbers in increments of 5 or 10 to allow for easy insertion of additional statements. When a line number precedes a statement, the statement will be included in the construction of a program. See **[Line Numbers](../../Programming%20Constructs/Flow%20Control/Statement%20References.htm#linenumbers)**.  
---|---  
Total: |  **_Line Label_** (optional). Descriptive name up to 127 characters long, followed by a colon. Alphanumeric line labels can be used in place of line numbers to identify statements within the program.  
PRINT |  **_Directive._** Keyword identifying the task to be performed.  
a,b,c+d |  **_Arguments_** (optional). Data to be processed or system keywords that further define the directive. A space is required to separate the directive from its arguments. See **Arguments** below.  
! Totals |  **_Comment_** (optional). Descriptive text beginning with an exclamation point**!** or the keyword**REM**. Text following an exclamation point is ignored by the system; i.e. the exclamation point terminates a statement and passes execution to the next line of code _._  
  
#### **Note:**  
Comments are very important for the readability and maintainability of a program. However, this text is included in the final compiled program, so be aware that excessive comments may increase memory requirements and degrade overall system performance.

##  Arguments

While some directives are executed without arguments, most accept/require data or keywords to perform their tasks. Argument components may be optional or mandatory - this depends on the directive and the task involved.

Most arguments supply some form of data for processing - a text or numeric value delivered in literal or variable form. See **[Data Types, Literals and Variables](../Data%20Types,%20Literals%20and%20Variables/Overview.md)**. Other types of arguments can redefine or augment the functionality of the directive itself - system parameters, mnemonics, options, and built-in keywords. See **[Primary Syntax Elements](../Primary%20Syntax%20Elements/Overview.md)**.

## Compound Statements

If more than one directive appears in a statement, it is considered a **_compound_** statement. Semi-colons ( **;** ) are required to separate the different directives (and their arguments) until the end of the line:

> 0020 let x=a+b; print "Answer=",x; goto 1000

Each of the directives in a compound statement (between the semi-colons) would function the same if they were entered in sequence on separate lines.

A transfer of control into a compound statement starts processing from the **_first_** directive only. In the above example (statement 0020), it would be impossible to start processing at the**PRINT** or**GOTO** directive. However, it is possible to transfer control out of (and then back into) a compound statement if the directive is designed to return back to the current location (**GOSUB** /**RETURN** and**FOR..NEXT**):

> 0030 x=10;print x; gosub xyz; goto 1000

Directives that transfer control without returning (e.g.,**GOTO** ,**EXITTO** ,**RETURN**) must appear at the end of a compound statement. The following is not valid because**RETURN** transfers control and the last statement is unreachable code:

> print "hello"; return; if name$<>"" print "-", name$

Some directives cannot be included in a compound statement. See individual directives for any restrictions. For a list of **_all_** directives, see **[Directives](../../../directives.md)** in the _PxPlus Language Reference_.
