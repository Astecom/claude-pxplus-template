# Language Elements

**Directives, Statements and Programs** |  **__**  
---|---  
  
All processing in PxPlus is controlled by **_Directives_** \- keywords that "direct" the system to perform certain tasks. Directives can be entered in Command mode to be executed immediately. They also represent the core ingredient in the **_statements_** that constitute a PxPlus **_program_**.

**_Example:_**

> In the example above, the **[PRINT](../../../directives/print.md)** directive is executed as soon as it is entered on the Command line. However, the **_line number_** inserted before the **[LET](../../../directives/let.md)** directive prevents that input from being executed - when **_numbered statements_** are entered:

  * The input is not executed but added to a program in memory.
  * The prompt changes from **- >** to **-:** to indicate that a program is being **_edited_**.
  * The series of numbered statements currently in memory will only be executed when a **[RUN](../../../directives/run.md)** or a **[CALL](../../../directives/call.md)** directive is issued.



Each statement can be made up of one or more directives. A PxPlus program consists of a series of statements that are organized in a logical manner and stored together in memory. When a program is executed, all the statements (and the directives inside each statement) are evaluated and processed in the order in which they are read by the system. Once the directives in one statement have been executed, PxPlus proceeds to the next statement (next line of code) in the sequence, and so on.

#### **Note:**  
Some statements can alter the normal (top to bottom) flow of execution by transferring control to other points in the program. See **[Programming Constructs](../../Programming%20Constructs/Introduction.md)**.

In theory, each program statement begins and terminates on one line - a carriage return marks the end of a line of code, and PxPlus executes it as though it were entered directly on the Command line. However, there are exceptions to this rule; e.g. if the **[LIST EDIT](../../../directives/list.md)** directive is used to _format_ program code for readability, lengthy statements may be listed over several lines - the line number representing the entire statement appears on the first line only.

## Statement Syntax

A valid program statement requires at least one directive. Depending on the directives used, various arguments and syntax elements may be needed to complete the statement. The example below illustrates the format of a typical program statement:

**_Example:_**

> 0010 Total: print a,b,c+d ! Totals

**_Where:_**

0010 |  **_Line Number_**  _(Optional)_  
  
Any integer between 1 and 64999. Each line number must be unique - the best practice is to assign line numbers in increments of 5 or 10 to allow for easy insertion of additional statements. When a line number precedes a statement, the statement will be included in the construction of a program. See **[Line Numbers](../../Programming%20Constructs/Flow%20Control/Statement%20References.htm#linenumbers)**.  
---|---  
Total: |  **_Line Label_**  _(Optional)_  
  
Descriptive name up to 127 characters long, followed by a **:** (_colon_). Alphanumeric line labels can be used in place of line numbers to identify statements within the program.  
print |  **_Directive_**  
  
Keyword identifying the task to be performed.  
a,b,c+d |  **_Arguments_**  _(Optional)_  
  
Data to be processed or system keywords that further define the directive. A space is required to separate the directive from its arguments. See **[Arguments](Overview.htm#arguments)**.  
! Totals |  **_Comment_**  _(Optional)_  
  
Descriptive text beginning with an **!** (_exclamation point_) or the keyword **REM**. Text following an exclamation point is ignored by the system; i.e. the exclamation point terminates a statement and passes execution to the next line of code _._  
  
#### **Note:**  
Comments are very important for the readability and maintainability of a program. However, this text is included in the final compiled program; therefore, be aware that excessive comments may increase memory requirements and degrade overall system performance.

**_Arguments_**

While some directives are executed without arguments, most accept/require data or keywords to perform their tasks. Argument components may be optional or mandatory - this depends on the directive and the task involved.

Most arguments supply some form of data for processing - a text or numeric value delivered in literal or variable form. See **[Data Types, Literals and Variables](../Data%20Types,%20Literals%20and%20Variables/Overview.md)**.

Other types of arguments can redefine or augment the functionality of the directive itself - system parameters, mnemonics, options, and built-in keywords. See **[Primary Syntax Elements](../Primary%20Syntax%20Elements/Overview.md)**.

**_Compound Statements_**

If more than one directive appears in a statement, it is considered a **_compound_** statement. _Semi-colons_ (**;**) are required to separate the different directives (and their arguments) until the end of the line:

> 0020 let x=a+b; print "Answer=",x; goto 1000

Each of the directives in a compound statement (between the semi-colons) would function the same if they were entered in sequence on separate lines.

A transfer of control into a compound statement starts processing from the **_first_** directive only. In the above example (statement 0020), it would be impossible to start processing at the **[PRINT](../../../directives/print.md)** or **[GOTO](../../../directives/goto.md)** directive. However, it is possible to transfer control out of (and then back into) a compound statement if the directive is designed to return back to the current location (see **[GOSUB..RETURN](../../../directives/gosub.md)** and **[FOR..NEXT](../../../directives/for.md)**):

> 0030 x=10;print x; gosub xyz; goto 1000

Directives that transfer control without returning (e.g. **[GOTO](../../../directives/goto.md)**, **[EXITTO](../../../directives/exitto.md)**, **[RETURN](../../../directives/return.md)**) must appear at the end of a compound statement. The following is not valid because **RETURN** transfers control and the last statement is unreachable code:

> print "hello";  
>  return ;  
>  if name$<>"" \  
>  then print "-",name$

Some directives cannot be included in a compound statement. Refer to the individual directives for any restrictions.

## Saving, Loading and Executing a Program

A PxPlus program is a collection of statements that are stored in memory (or saved to a file) for consecutive execution. In Command mode, the **_current program_** represents all the statements in memory that are immediately available for editing and/or execution. In Execution mode, the current program is also referred to as the **_main-line_** program (also known as _execution level 1_).

The current program can be **RUN** without being saved to a file. Once saved, a program can also be **RUN** directly from a file. By default, program files are saved in a semi-processed state that allows them to be executed as though they are already loaded in memory. These pre-compiled tokenized program files are not readable in a standard text editor and must be loaded into a PxPlus session for editing. For information on working with text-based program files, see **[Text (ASCII) Format](Overview.htm#ascii)**.

Whether you create a new program or**LOAD** an existing program from a file, all changes you make to numbered statements at the Command line will apply to the program currently loaded in memory.

For the different methods for creating and saving PxPlus programs, see **[Writing and Modifying Program Code](../../Development%20Tools/Writing%20and%20Modifying%20Program%20Code/Overview.md)**.

**_Saving a Program to a File_**

During a PxPlus session (in Command mode), the current program will cease to exist if a **[START](../../../directives/start.md)** or **[DELETE](../../../directives/delete.md)** is issued, or another program is loaded. All changes to the current program will be lost.

To retain your changes for later use, use the **[SAVE](../../../directives/save.md)** directive to copy the current program to a file on disk:

> save "Myprogram"

If the file name specified by _"Myprogram"_ does not exist, a new program file is created, and the program is written to it. If a program exists with the same name, it will be overwritten by the current program. Programs can also be saved in program libraries.

See **[[LIB] Program Library](../../../command_tags/lib.htm)**.

**_Retrieving a Program File_**

Programs that are saved to disk may be recalled using the **[LOAD](../../../directives/load.md)** directive. This clears the current program (if any) and replaces it with the program specified:

> load "Myprogram"

**_Executing a Program_**

The **[RUN](../../../directives/run.md)** directive can be used to execute the current program. If the **RUN** command includes a program name, the system will automatically load the specified program from disk before executing it:

> run "Myprogram"

**_Text (ASCII) Format_**

It is possible to **[RUN](../../../directives/run.md)**, **[CALL](../../../directives/call.md)**, **[PERFORM](../../../directives/perform.md)**, **[LOAD](../../../directives/load.md)** and **[SAVE](../../../directives/save.md)** PxPlus programs in text (ASCII) file format. If the target file for a**SAVE** is not a program file, PxPlus will automatically write the program out in ASCII format:

> delete  
>  for I=1 to 20  
>  print I  
>  next  
>  serial "PROG999"  
>  save "PROG999"

This would output the program to the text file PROG999. If desired, you can insert the keyword**EDIT** following the **[SAVE](../../../directives/save.md)** directive, and the system will save the program in formatted form. Text-based PxPlus programs do have some advantages:

  * Use of more advanced editing/formatting functionality that is available in other types of editors (spell checking, multiple undo, etc.).
  * Version control and configuration management systems.
  * Accessing multiple files via bulk editing tools.



However, when running a text-based program from a PxPlus session, each statement must be evaluated for syntax and converted to tokenized code prior to execution. These extra steps may have an impact on system performance. One way to avoid a performance hit is to **[LOAD](../../../directives/load.md)** a text-based program prior to executing it. At this point, it can be **RUN** as the current program in memory.

## See Also

**[Directives](../../../directives.md)**
