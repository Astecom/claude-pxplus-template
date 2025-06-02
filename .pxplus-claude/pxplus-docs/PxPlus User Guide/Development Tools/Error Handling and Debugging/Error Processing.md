# Error Handling and Debugging

**Error Processing** |  **__**  
---|---  
  
A program should be designed to handle most of the errors anticipated during normal program operation. This helps to avoid an unwelcome drop to Command mode (and/or cryptic messages displayed to the end user). The procedure for detecting and processing errors without dropping to the system is commonly referred to as **_error trapping_** (or **_error handling_**).

Three methods for dealing gracefully with program errors are described below. The order of precedence for handling errors in PxPlus is defined as follows:

> **[Error Transfer Option ERR=](Error%20Processing.htm#err)** syntax within directive or function

> **[Error Handling Subroutine SETERR](Error%20Processing.htm#seterr)** directive

> **[Error Handling Program ERROR_HANDLER](Error%20Processing.htm#errorhandler)** directive

##  Error Transfer Option ERR=

Most PxPlus directives and functions allow an error transfer option to be included within their syntax. This option is denoted by the**ERR=**  _stmtref_ clause, where _stmtref_ specifies a line number or label to which to transfer control. When a statement that includes an**ERR=** option generates an error, the branch to _stmtref_ will be executed.

**_Example:_**

> 0010 OPEN (2,ERR=0100) "CONFIG"   
>  0020 READ (2,ERR=0050) R$   
>  0030 PRINT R$   
>  0040 GOTO 0020   
>  0050 CLOSE (2)   
>  0060 STOP   
>  0100 PRINT "Unable to open file"   
>  0110 END

In the preceding example, if an error occurs on the **[OPEN](../../../directives/open.md)** directive, control will transfer to statement 0100. If an error occurs on the **[READ](../../../directives/read.md)** (most likely an END-OF-FILE), control will transfer to statement 0050.

##  Error Handling Subroutine SETERR

Use the **[SETERR](../../../directives/seterr.md)** directive to define a subroutine for handling errors in your program that are not covered by the **ERR=** option. While **SETERR** is in effect, all errors will cause an immediate transfer of control to the line number or label specified.

**_Example:_**

> 0010 SETERR YIKES   
>  0020 OPEN (2) "config"   
>  0030 LOOP: READ (2) R$   
>  0040 PRINT R$   
>  0050 GOTO LOOP   
>  0100 YIKES: !!! Error handler !!!  
>  0110 IF ERR=2 THEN CLOSE (2); STOP   
>  0120 PRINT "error ",ERR," while printing config"   
>  0130 END

In the preceding example, statement 0010 defines the general error handling procedure starting at YIKES (statement 0100). After the execution of the **SETERR** , any error will cause control to transfer to statement 0100. Statement 0110 tests the system variable**ERR** for an END-OF-FILE status, which is returned by the **[READ](../../../directives/read.md)** directive on statement 0030. Any other error would cause the generation of an error message.

The execution of a**SETERR** specifying a statement number of 0000 will disable the general error procedure. In addition, the execution of a **[BEGIN](../../../directives/begin.md)**, **[CLEAR](../../../directives/clear.md)**, **[END](../../../directives/end.md)**, **[STOP](../../../directives/stop.md)** or any directive that causes a program to be loaded will reset the**SETERR** location.

#### **Note:**  
**SETERR** can also be used to specify an error-trapping **_program_** , which is similar in functionality to the **[ERROR_HANDLER](../../../directives/error_handler.md)** directive. For syntax details, see **[SETERR](../../../directives/seterr.md)** directive.

## Retrying an Error

Sometimes, it is necessary to re-execute the directive that caused the error after some corrective action has been taken. A typical example of this would be to repeat an I/O request on a record or file that is currently busy.

Whenever an error occurs and an**ERR=** or**SETERR** transfer occurs, the location of the directive that caused the error is saved. To return to the saved location, the error handling procedure can execute a **RETRY**. The **[RETRY](../../../directives/retry.md)** directive transfers control back to the statement that initiated the error procedure.

**_Example:_**

> 0010 OPEN (2,ERR=0100) "config"   
>  0020 READ (2,ERR=0050) R$   
>  0030 PRINT R$   
>  0040 GOTO 0020   
>  0050 CLOSE (2)   
>  0060 STOP   
>  0100 REM See if file busy (ERR=0)   
>  0110 IF ERR=0 THEN PRINT "One moment please"; WAIT .5; RETRY   
>  0120 PRINT "Unable to open file"   
>  0130 END

In this example, the**RETRY** directive is used in statement 0110 to return to the **[OPEN](../../../directives/open.md)** directive should the error code indicate that the file was busy. The **[WAIT](../../../directives/wait.md)** directive suspends the execution of the program for half a second before retrying.

There is one exception to the**RETRY** procedure. When an**ERR=** option is used on a statement to transfer control to the same statement (i.e. to cause the statement to repeat in case of an error), the**RETRY** location is neither saved nor modified.

**RETRY** also returns control to directives within a compound statement; however, should control be returned to a **[LET](../../../directives/let.md)** directive with multiple assignments, all assignments will be repeated.

**_Example:_**

If the following statement is retried, the value of A would be re-evaluated incorrectly, since B will have changed:

> 0010 LET A=B+C, B=2*B, C=B/(D-A)

##  Error Handling Program ERROR_HANDLER

The **[ERROR_HANDLER](../../../directives/error_handler.md)** directive can be used to assign a generic program for handling untrapped errors. If an error occurs and it is not handled via**ERR=** option or **SETERR** subroutine, the system will call an error handling program (with optional entry point) specified by:

> **ERROR_HANDLER** _prog_ _$_ [; _entry$_]

By placing all common error-trapping procedures in a single program, the same logic can be used by multiple applications throughout the PxPlus session. The called program determines the necessary corrective actions, and once the recovery is performed, returns to the offending instruction via the **[EXIT](../../../directives/exit.md)** directive. Should the error handler specify an error code on the**EXIT** directive, PxPlus will return to Command mode, allowing the program to be corrected. If desired, the error handler can execute a **[START](../../../directives/start.md)** directive to abort the session and restart.

#### **Note:**  
PxPlus includes a sample error handler program that can be used as a template for creating application-specific routines; e.g. **ERROR_HANDLER "*ERROR"**.

To determine the error handler currently in effect, enter:

> **ERROR_HANDLER READ**  _var_ _$_

**_Where:_**

> _var_ _$_ is the string variable to receive the program name.

## Avoiding Endless Loops in Error Handling

PxPlus can prevent endless loops that are caused by errors within an error handling subroutine. Once a **[SETERR](../../../directives/seterr.md)** transfer takes place, PxPlus inhibits further**SETERR** transfers until a subsequent**SETERR** is executed or a **[RETRY](../../../directives/retry.md)** directive re-executes the statement that caused the error.

However, endless loops can occur on certain **_system errors_** that result in a call to the generic error-handling program. For example, if the**ERROR_HANDLER** is invoked due to an _out of file handles_ system error, PxPlus will attempt to load the error handling program. At this point, because the _out of file handles_ condition is still in effect, the result would be an endless loop. See **[Infinite Loops](../../Programming%20Constructs/Flow%20Control/Loop%20Structures.htm#Mark1)**.

You can avoid this situation by placing the error handler program in cache memory (via the **[ADDR](../../../directives/addr.md)** directive). Use **ADDR** prior to executing**ERROR_HANDLER** ; otherwise, an endless loop may occur when the system attempts to report Error #12: File does not exist (or already exists).

The error handler program should not generate any untrapped errors. If the error handler issues a **[CALL](../../../directives/call.md)** or **[PERFORM](../../../directives/perform.md)** that causes an error outside of itself, the error handler will be called again, thus creating another possibility for an endless loop.

As an additional safeguard in the event that an untrapped _out_ _of file handles_ condition does occur, PxPlus will first attempt to report the error condition to the application. If no corrective action is taken by the application, then the following message is displayed, prompting the user to decide how to proceed:

> _Application is attempting to open more files than allowed. Terminate it? (Yes/No)_
