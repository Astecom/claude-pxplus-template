# Primary Syntax Elements

**Directives** |  **__**  
---|---  
  
Directives are commands that instruct the system to perform a task. A directive is the first keyword in a valid program statement. There may be more than one directive in a statement.

Below is a list of some commonly used directives. For a list of all directives, see **[Directives](../../../directives.md)**.

**[BEGIN](../../../directives/begin.md)** |  Re-initialize current session; close files, clear all non-global variables, release memory to the system. See **[CLEAR](../../../directives/clear.md)** and **[RESET](../../../directives/reset.md)** directives.  
---|---  
**[BYE](../../../directives/bye.md)** |  Terminate session; close all opened files, return memory to the operating system and terminate PxPlus. See **[QUIT](../../../directives/quit.md)** and **[RELEASE](../../../directives/release.md)** directives.  
**[CWDIR](../../../directives/cwdir.md)** |  Change working directory.  
**[DELETE](../../../directives/delete.md)** |  Remove lines from program or if no lines specified, unload program.  
**[DUMP](../../../directives/dump.md)** |  Print all variables in use (including **[ERR](../../../variables/err.md)** system variable), program name, line number, and the **[FOR..NEXT](../../../directives/for.md)**/**[GOSUB](../../../directives/gosub.md)** stack.  
**[EDIT](../../../directives/edit.md)** |  Change an existing statement.  
**[END](../../../directives/end.md)** |  Terminate execution of program (functionally identical to **[STOP](../../../directives/stop.md)** directive).  
**[GOSUB](../../../directives/gosub.md)** |  Transfer control to line referenced.  
**[INPUT](../../../directives/input.md)** |  Issue prompt and process response.  
**[LET](../../../directives/let.md)** |  Assign value to a variable.  
**[LIST](../../../directives/list.md)** |  Convert program statements to readable format and output to display or file.  
**[LOAD](../../../directives/load.md)** |  Read a program into memory for execution, listing, or modification.  
**[MSGBOX](../../../directives/msgbox.md)** |  Display a message window in the middle of the screen.  
**[PRINT](../../../directives/print.md)** |  Send information to display or a file (if file number specified).  
**[RUN](../../../directives/run.md)** |  Start or continue execution of a program.  
**[SAVE](../../../directives/save.md)** |  Copy current program to file specified.  
**[START](../../../directives/start.md)** |  Reset files and variables (including global files and variables).  
  
## Examples

The **[PRINT](../../../directives/print.md)** directive (or**?** shortcut) displays a string literal at the console (with output positioning determined via the **[@](../../../functions/_at.md)** function):

> print "HELLO WORLD"  
>  ? @(10,10),"HELLO WORLD"

The **[LET](../../../directives/let.md)** directive assigns values to a string variable and a global string variable:

> let X$="HELLO"  
>  let %X$="JELLO"

The **[LOAD](../../../directives/load.md)** and the **[LIST](../../../directives/list.md)** directives are used to view a program (options for the**LIST** directive include listing a range and displaying with indentation):

> load "**" *1   
>  list   
> list 5100,5220 *2   
>  list edit 5100,5220 *3

The **[DELETE](../../../directives/delete.md)** directive removes lines from a program:

> delete 5100,5220 *4

The **DELETE** directive removes the program from memory:

> delete

The **[RUN](../../../directives/run.md)** directive loads and runs a program (the **[END](../../../directives/end.md)** directive halts execution):

> run "**  
>  stop execution <ctrl+break>  
>  end
