# Directives

**LOAD** |  **_Read Program into Memory_**  
---|---  
  
##  Format

**LOAD** [_prog_name_ _$_]  
  
**_Where:_**

_prog_name_ _$_ |  Name of the program to load/read. String expression.  
---|---  
  
#### **Note:**  
PxPlus accepts certain typographical errors. For example, it accepts **LAOD** as a substitute for **LOAD**.

##  Description

Use the **LOAD** directive to read a program into memory (i.e. to open or retrieve a program) for execution, listing or modification. The program you load into memory replaces the current program, if any.

On a **LOAD** , PxPlus resets the **FOR** /**NEXT** , **GOSUB** /**RETURN** and **WHILE** /**WEND** stack. Any addresses set in **[SETERR](seterr.md)** or **[SETESC](setesc.md)** directives are cleared, and the current **PRECISION** is reset to two. The current **DATA** pointer is also reset to the start of the program. No user data areas or files are affected by the **LOAD** directive.

You can only use the **LOAD** directive in Command mode or with the **[EXECUTE](execute.md)** directive. Misuse of the **LOAD** directive in Execution mode (i.e. without the **EXECUTE** directive) generates Error #45: Referenced statement invalid. If you omit the program filename, PxPlus loads the last file for which there was a **LOAD** , **RUN** or **SAVE**. If there is no prior file in the stack, PxPlus returns Error #10: Illegal pathname specified.

##  See Also

**[RUN Transfer and Execute a Program](run.md)**  
**[SAVE Write Program to File](save.md)**

##  Example

load "MYPROG" ! Loads "MYPROG"  
load ! Loads last program specified, if any (in this case, "MYPROG")  
  
delete  
load  
Error #10: Illegal pathname specified
