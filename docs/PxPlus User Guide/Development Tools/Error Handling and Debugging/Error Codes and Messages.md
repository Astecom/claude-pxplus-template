# Error Handling and Debugging

**Error Codes and Messages** |  **__**  
---|---  
  
The interpretive nature of the development environment ensures that statements are automatically checked for correct syntax before they are tokenized. This is true whether you are entering a command at the PxPlus prompt or program code using a full-screen editor.

When an erroneous statement is entered, an error message is displayed immediately:

> print hello world  
>  Error #20: Syntax error ...world  
>  print "hello world"  
>  hello world

The resulting Error #20 indicates a syntax error.

For the complete list of error codes with descriptions, see **[Error Codes and Messages](../../../appendix/list_of_messages.md)**.

## Execution Errors

During program execution, PxPlus may detect various errors due to problems with program logic, invalid data, or status conditions (End-Of-File, duplicate record, etc.).

All errors detected by PxPlus have a numeric code associated with them. The value of this code represents the type of error. Error codes ranging from 0 to 255 represent PxPlus-specific messages. Error codes starting from 256 are operating system (OS) errors. When PxPlus detects an error during program execution:

  * The **[ERR](../../../variables/err.md)** system variable is set to the appropriate error code.
  * The program is halted.
  * PxPlus returns to Command mode (unless the **['XT'](../../../parameters/xt.md)** system parameter is set, in which case PxPlus is also terminated).
  * The statement that generated the error is displayed.
  * The error code and its associated message text is displayed.



For the complete list of error codes with descriptions, see **[Error Codes and Messages](../../../appendix/list_of_messages.md)**.

## Displaying Error Messages

The**ERR** variable contains the error code for the last system-detected error. Use the **[MSG( )](../../../functions/msg.md)** function to display a description of the error code.

**_Example:_**

> PRINT MSG(11)   
>  Error #11: Record not found or Duplicate key on write   
>  PRINT MSG(275)   
>  No more files   
>  OPEN(1)"COM10"   
>  Error #12: File does not exist (or already exists)   
>  PRINT MSG(-1)   
>  IE_BADID Invalid/unsupported device I.D.

Descriptive messages can also be returned for OS errors, provided the information is available from the OS.

The statement number where the last error occurred is available in the **[ERS](../../../variables/ers.md)** system variable. This information can also be obtained via the **[TCB( )](../../../functions/tcb.md)** function: TCB(5) or TCB(30). The **['ES'](../../../parameters/es.md)** system parameter, if enabled, will display any OS error message returned, along with the normal PxPlus error from a command prompt.

**_Example:_**

> SET_PARAM 'ES'   
>  OPEN (1)"[ODB]Access;FooFoo"   
>  Error #15: Operating system command failed   
>  IM002: [Microsoft][ODBC Driver Manager] Data source name not found and no default driver specified

## Extended Error Information

The **[ERR( )](../../../functions/err.md)** function provides additional information for diagnosing the most recent un-trapped error. This information is not affected by errors that are programmatically trapped using the procedures described under **[Error Processing](Error%20Processing.md)**.

The syntax for this feature,**ERR(**_keyword$_**)** , denotes a _keyword$_ representing the specific return value. Use **ERR("*")** to display a list of supported keywords.
