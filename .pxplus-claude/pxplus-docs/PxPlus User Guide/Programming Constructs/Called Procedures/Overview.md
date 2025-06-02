# Programming Constructs

**Called Procedures** |  **__**  
---|---  
  
**_Sub-routines_** , ** _sub-programs_** and **_user-defined functions_** comprise a sequence of statements that are specified once but can be accessed many times from various points in a main program. These directives are used for building and accessing called procedures in PxPlus.

|  **[GOSUB](Overview.htm#gosub)** |  Transfers control to a **_sub-routine_** , which exists inside the current program.  
---|---|---  
|  **[CALL](Overview.htm#call)** and **[PERFORM](Overview.htm#perform)** |  Transfers control to a **_sub-program_** , which exists outside the current program.  
|  **[DEF FN](Overview.htm#def_fn)** |  Creates a **_user-defined function_** that can be invoked by name anywhere in the current program.  
  
Called procedures are common features in structured programming. They allow a larger program to be split into smaller logical sections, which makes it easier to maintain and debug. They can also consolidate general-purpose tasks and frequently used calculations, which eliminate repetitious code and help reduce overall program size. This concept (of reusable blocks of code) is integral to the more advanced programming techniques on which **[Object-Oriented PxPlus](../../Object-Oriented%20PxPlus/Introduction.md)** is based.

#### **Note:**  
While the **SETESC** and **SETERR** directives perform similar transfers of control, this form of called procedure has a single purpose and is not intended for reuse.

Each time a sub-routine, sub-program, or user-defined function is called, the system remembers where the transfer occurs in the main program and resumes execution at that point when the procedure is completed. However, some sub-routines can include statements that redirect control to a destination other than the original transfer point. See **[Flow Overrides](../Flow%20Control/Flow%20Overrides.md)**.

Some called procedures share variables with the initiating procedure so that they can be defined, modified or cleared at any point during execution. Use the **[LOCAL](../../../directives/local.md)** directive to restrict or reassign a variable name within a called procedure. See **[Variables](../../Language%20Elements/Data%20Types,%20Literals%20and%20Variables/Variables.md)**.

##  GOSUB Directive

Use the **GOSUB** Directive to transfer control to a _sub-routine_ \- a sequence of statements that can be accessed multiple times from anywhere in the main program; e.g. **GOSUB**  _stmtref_ _._

When **GOSUB** is executed, PxPlus saves the current location on the **GOSUB** stack, then transfers control to the specified program line number or label (_stmtref_), which marks the start of the called sub-routine. See **[Statement References](../Flow%20Control/Statement%20References.md)**.

The **[RETURN](../../../directives/return.md)** directive marks the end of a sub-routine and transfers control back to the location saved on the **GOSUB** stack.

**_Example:_**

> 00010 FOR X=1 TO 10   
>  00020 PRINT " GOING TO THAT";   
>  GOSUB THAT   
>  00030 NEXT X   
>  00040 PRINT 'LF',"VALUE IN X=",X   
>  00050 END   
>  00060 THAT:   
>  00070 LOCAL X   
>  00080 WHILE X<25   
>  00090 PRINT X,;   
>  X++   
>  00100 WEND   
>  00110 RETURN

All sub-routine content exists between the called statement reference and the **RETURN** directive. The sub-routine itself can exist anywhere in the program, typically outside the main order of execution.

Alternatively, the **[EXITTO](../../../directives/exitto.md)** directive may be used to terminate the sub-routine before it reaches the **RETURN** statement - this transfers control to the statement identified by the **EXITTO** instead of the location saved on the **GOSUB** stack. There is no limit to the number of locations that can be saved on the **GOSUB** stack.

#### **Note:**  
The same stack is used for **GOSUB** , **FOR..NEXT** , **WHILE..WEND** , and **REPEAT..UNTIL** directives; therefore, a **RETURN** can only be executed after all of these structures in the sub-routine have been terminated.

For syntax details, see **[GOSUB](../../../directives/gosub.md)** directive,

##  CALL Directive

Use the **CALL** directive to transfer control to a _sub-program_ \- a called procedure that exists in a completely separate program file:

> **CALL**  _subprog_ _$_[ _;entry$_ ] [, _arglist_ ]

When a **CALL** is executed, PxPlus saves the current location on the stack in the current program, then loads and executes the sub-program (_subprog_ _$_).

For syntax details, see **[CALL](../../../directives/call.md)** directive.

**_Sub-programs_**

The term **_sub-program_** denotes a program that is called from another program. There are no real differences between sub-programs and programs, except that when a sub-program terminates, processing continues as control is passed back to the program that initiated it. Sub-programs can also initiate further sub-programs with virtually no limit (apart from memory constraints).

The **[EXIT](../../../directives/exit.md)** directive is used to **_terminate_** a sub-program; however, a **[STOP](../../../directives/stop.md)** or **[END](../../../directives/end.md)** directive may be used in its place.

A _level number_ is maintained within PxPlus that records the number of sub-programs currently in progress. When a sub-program is started, the current level is incremented by one. When the sub-program terminates, the level is decremented by one. The value of the current level indicates the number of programs currently active. This information can be accessed via the **[TCB( )](../../../functions/tcb.md)** function and is displayed by PxPlus at the prompt line whenever execution is halted while within a program. The return address and programs are maintained in the _sub-program stack._ This information can be retrieved via the **[STK( )](../../../functions/stk.md)** function.

**_Passing Arguments_**

Arguments (_arglist_) are received in a sub-program via the **[ENTER](../../../directives/enter.md)** directive. Each argument in the **CALL** statement corresponds by position and in data type (numeric or string) to an argument in the **ENTER** statement. A complete numeric array may be passed to a sub-program by specifying **{ALL}** following the variable name in both the **CALL** and **ENTER** directives. Changes to any element of the array will affect the corresponding array in the main program.

**_Example:_**

If a **CALL** to a sub-program named SUBR defines arguments as follows 

> CALL "SUBR",LEN(A$),N,A$,T{ALL}

the sub-program SUBR would require the following **ENTER** statement to receive those arguments:

> 0020 ENTER A,B,Z$,N{ALL}

Sub-programs can alter the value of the arguments passed to them in this manner. Simple variables passed as arguments become common between the main program and the sub-program - any changes to these variables in the sub-program will directly affect the value of the variable in the main program.

This affects only the variables defined by the **ENTER** directive. All other variables in the sub-program remain completely independent of variables in the main program. If you wish to prevent a variable in the argument list from being changed, place parentheses around it - this makes it an expression rather than a simple variable so it cannot be changed.

The following table defines the conditions under which a **CALL** argument can be changed by a sub-program:

**CALL** **  
Directive** |  **ENTER** **  
Directive** |  **Description**  
---|---|---  
**X** |  **Y** |  **Y** in the sub-program will be assigned value of **X** from the main program. Changes to **Y** will change **X** in the main program.  
**X+**  _nn_ |  **Y** |  **Y** in the sub-program will be assigned value of **X+**  _nn_ from the main program. Changes to **Y** will **_not_** affect **X** in the main program.  
**X** (_n_) |  **Y** |  **Y** in the sub-program will be assigned value of **X**  _(n)_ from the main program. Changes to **Y** will **_not_** affect variable **X**  _(n)_ in the main program.  
**X** (_all_) |  **Y** (_all_) |  **Y** in the sub-program will receive the complete array defined by **X** in the main program. All changes to elements in **Y** will affect the corresponding element in **X**.  
**X$** |  **Y$** |  **Y$** in the sub-program will be assigned value of **X$** from the main program. Changes to **Y$** will change **X$** in the main program.  
**X** $( _..._ ) |  **Y** $ |  **Y$** in the sub-program will be assigned value of the substring **X$** (...). Changes to **Y$** will **_not_** affect **X$** in the main program.  
"Fred" |  **Y** $ |  **YS** in the sub-program will be assigned the value of "Fred".  
  
#### **Note:**  
If the **CALL** statement has fewer arguments than in the **ENTER** statement, make sure to maintain the same relative position and type up to the point where the _arglist_ is shortened (and include error handling options). Otherwise, this will result in an Error #36: ENTER parameters don't match those of the CALL.

**_Entry Points_**

When specifying a program name, you can also suffix it with an entry point (_;entry$_) within the called program.

**_Example:_**

> CALL "PROG01;Add_Record",X$,Y$

> If the sub-program PROG01 contains:

> 0010 REM PROG01   
>  0020 INIT:   
>  0030 OPEN (1) "ARCUST",(2) "ARBILL"   
>  0040 EXIT   
>  0100 ! 100 - Add-record logic   
>  0110 ADD_RECORD:   
>  0120 ENTER CST_ID$,CST_NAME$   
>  0130 WRITE (1) CST_ID$, CST_NAME$   
>  0140 EXIT

> CALL "PROG01:Add_record" causes the system to open the sub-program PROG01 and commence execution at the label ADD_RECORD, rather than at the beginning of the program.

PxPlus internally issues a **[GOTO](../../../directives/goto.md)** directive using _entry$_ as a statement reference. Use this feature to create sub-programs to act as "libraries" (i.e. multiple stand-alone routines, each starting at its own entry point).

##  PERFORM Directive

A **PERFORM** is similar to a **[CALL](Overview.htm#call)** directive (described above) in that it also transfers control to a sub-program. However, when a **PERFORM** is used to invoke a sub-program, **_all variables_** are made **_common_** between the initiating and called programs (no _arglist_ or corresponding **ENTER** directive is required).

**_Example:_**

> **PERFORM**  _subprog_ _$_ [; _entry$_ ]

All variables that are defined, modified or cleared during execution of the sub-program will be transferred back to the initiating program.

For syntax details, see **[PERFORM](../../../directives/perform.md)** directive.

**_Sub-Routines within Sub-Programs_**

**PERFORM** can also access **_sub-routines_** externally via entry points in the called program. With this feature, the **RETURN** statement that is used to terminate the sub-routine in a sub-program automatically returns control to the initiating program. This allows the same block of code to be accessed internally (**GOSUB**), as well as externally (**PERFORM**).

**_Example:_**

If the sub-program CUSTOMER contains:

> 0010 ! CUSTOMER - Customer logic   
>  ...   
>  0100 GOSUB CHK_TYPE   
>  ...   
>  1000 ! 1000 - Validate customer number   
>  1010 CHK_TYPE: ERR_MSG$=""   
>  1020 IF POS(CST_TYPE$=%CST_TYPE_TBL$)=0 ERR_MSG$="Bad Type"   
>  1030 RETURN

> The CHK_TYPE sub-routine could be accessed externally via:

> 1000 PERFORM "CUSTOMER;Chk_type"   
>  1010 IF ERR_MSG$<>"" GOTO ...

##  DEF FN Directive

When a user-defined function is executed, it transfers control to a function procedure - a single statement (or a sequence of statements) defined for multiple access using the **[DEF FN](../../../directives/def_fn.md)** directive. This type of procedure does not require a calling directive (**CALL** or **GOSUB**) because it is **_invoked via the function name itself_**.

The following syntax defines a _single-line_ function procedure (function name, parameters and associated expression):

> **DEF FN**  _name_ [ _$_ ]([ **LOCAL** ] _argvar1_ [, _argvar2_ , ])= _expression_ [ _$_ ]

For syntax details, see **[DEF FN](../../../directives/def_fn.md)** directive.

All user-defined functions are identified by an **FN** prefix. The remaining characters in the function name follow the same rules that apply to **[Variables](../../Language%20Elements/Data%20Types,%20Literals%20and%20Variables/Variables.md)**. When executing a user-defined function, the syntax is consistent with **[System Functions](../../Language%20Elements/Primary%20Syntax%20Elements/System%20Functions.md)**. All functions in PxPlus accept and process values, and return control (with results) to the statement where the function was invoked in the main program.

**_Example:_**

> LIST   
>  0010 DEF FNSUM(A,B,C)=A+B+C   
>  0020 LET D=5,E=6,F=7   
>  0030 LET X=FNSUM(D,E,F)   
>  0040 PRINT X   
>  RUN   
>  18

Depending on how they were defined, functions can return either a numeric value or a character string. This is determined by the data type represented in the function name and by the result of the expression/procedure specified.

**_Example:_**

|  **_Numeric:_** |  0010 DEF FNSUM(A,B,C)=A+B+C  
---|---|---  
|  **_String:_** |  0020 DEF FNNME$(X$)=UCS(X$(1,1))+LCS(X$(2))  
  
Parameters used in a function definition must match the variables used in the expression it represents, as well as the parameters specified when the function is used. In the numeric example above (FNSUM), if the function uses the arguments 1, 2 and 3, then the variables in the expression A+B+C will receive these values respectively. To avoid this, the keyword LOCAL may be specified in front of the variable name. This will make the value in the variable local to the execution of the function and not impact the calling logic.

**_Example:_**

The use of **[LOCAL](../../../directives/local.md)** in the following example would prevent the variables A, B, and C in the calling logic from being changed:

> 0010 DEF FNSUM(**LOCAL** A, **LOCAL** B, **LOCAL** C) = A+B+C

While there is no limit to the number of parameters that can be defined, it is imperative that each time the function is used, the number of arguments and their type (numeric/string) match the parameter list specified in the **[DEF FN](../../../directives/def_fn.md)** directive. Any mismatch will generate an Error #25: Invalid call to user function (Non-existent or recursive). Arguments can also be defined as **LOCAL** for processing exclusively within the function procedure.

**_Multi-Line Function Procedure_**

A user-defined function procedure can also be listed over multiple lines. This type of **DEF FN** procedure is very similar in appearance to the contents of a **GOSUB** sub-routine.

Use the following syntax to define a multi-line function:

> **DEF FN**  _name_ [ _$_ ]([ **LOCAL** ] _argvar1_ [, _argvar2_ , ])   
> **RETURN**  _expression_ [ _$_ ]   
> **END DEF**

If the **DEF FN** directive is used without the equals sign/expression in the syntax, it is used to mark the beginning of a multi-line function definition; **END DEF** marks the end. Execution of a multi-line function is terminated via the **RETURN** statement. Once completed, the value specified by the **RETURN** statement will be passed back to the statement where the function was invoked in the main program.

It is also possible to define an error number within a multi-line function by issuing an **ESCAPE** _nnn_ , where _nnn_ is the error to be returned to the calling expression.

**_Example:_**

> 0010 DEF FNPRIME(A)   
>  0020 IF A<2 THEN RETURN 0 ELSE IF A=2 THEN RETURN 1   
>  0030 FOR N=2 TO A/2   
>  0040 LET M=INT(A/N)   
>  0050 IF (M*N)=A THEN EXITTO 0080   
>  0060 NEXT N   
>  0070 RETURN 1   
>  0080 RETURN 0   
>  0090 END DEF   
>  0100 FOR I=1 TO 200   
>  0110 IF FNPRIME(I) THEN PRINT I,   
>  0120 NEXT I

In this example, the multi-line function FNPRIME checks to see if the value given is a prime number by trying to divide it by all the numbers up to 1/2 of the original number. If all the numbers fail, the function returns 1; otherwise, it returns 0.

User-defined functions can be directly executed as a directive and not necessarily within an expression evaluation. _(as of PxPlus v10)_

Direct invocation of multi-line function:

> 0010 DEF FN_LoadCust(local Custid$)   
>  0020 READ ("custfile", KEY=CustId$, ERR=*NEXT); RETURN 1   
>  0030 RETURN 0   
>  0040 END DEF   
>  0050 . . .   
>  1000 FN_LoadCust(Clientid$)   
>  1010 . . .

_(Support for user-defined functions as directives was added in PxPlus v10.)_

**_Global User-Defined Functions_**

Global variable names can be used in defining user functions. If a global variable name is used in the **DEF FN** directive, then this function remains defined for the duration of the session and in all programs and sub-programs.

**_Example:_**

> 0010 DEF FN%TM$(T)=STR(INT(T*60)+INT(T)*40:"00:00")

Once this **DEF** instruction is executed, the user function FN%TM$ is defined and is accessible to all programs for the duration of the user session or until a **START** is issued.

Single-line and multi-line functions may be defined as global. If necessary, you can redefine global functions at any time. To change the definition, simply re-execute the DEF FN%... directive.
