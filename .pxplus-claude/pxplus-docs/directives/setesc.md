# Directives

**SETESC** |  **_Set Interrupt Processing_**  
---|---  
  
##  Formats

1. |  _Subroutine Interrupt-Handler:_ |  **SETESC** _stmtref_  
---|---|---  
2. |  _Subprogram Interrupt-Handler:_ |  **SETESC**  _prog_name_ _$_  
3. |  _[Interrupt Process On/Off](setesc.htm#Mark10):_ |  **SETESC**{**ON** |**OFF**}  
4. |  _Enable/Disable for Range:_ |  **SETESC** {**DISABLE** |**ENABLE**}  
5. |  _[Return Current Program](setesc.htm#Mark16):_ |  **SETESC** **READ**  _x$_  
  
**_Where:_**

_prog_name_ _$_ |  Name of generic interrupt-handling program. Define it once per session.  
---|---  
_stmtref_ |  Program line number or statement label to which to transfer control.  
_x$_ |  Name of the current SETESC program.  
  
##  Description

Use the **SETESC** directive to:

  * Specify the subroutine or subprogram to handle a break request.
  * Enable/disable recognition of the **Break** or **Esc** keys in PxPlus.



Use this directive to prevent a user from breaking out of a program during critical periods or for security reasons.

_(The SETESC READ directive was added in PxPlus 2016 Update 0003.)_

##  Format 1

**_Subroutine Interrupt-Handler_**  
  
**SETESC** _stmtref_  
  
Use this format to specify a subroutine written to handle break requests. If a **SETESC** is active and the user enters a **Break** or **Esc** , PxPlus performs a **GOSUB** to the statement you designate in this format of the **SETESC** directive.

Use the **[RETURN](return.md)** directive if you want control to return to the original program flow after the subroutine processes the break request.

To deactivate the **SETESC** directive, set the _stmtref_ to 0000.

**_Example:_**

> 0010 setesc BREAK_IT  
>  0020 for I=1 to 100000  
>  0030 print I  
>  0040 next I  
>  0050 stop  
>  1000 rem -- BREAK HANDLER ---  
>  1010 BREAK_IT:  
>  1020 print "Please wait till I'm finished"  
>  1030 print "... I've lost track"  
>  1040 print "I'll have to start again"  
>  1050 I=1  
>  1055 wait 5 ! Or messages flash by, user doesn't see, breaks again...and again  
>  1060 return

To terminate **SETESC** handling:

> 0020 setesc 0000

##  Format 2

**_Subprogram Interrupt-Handler_**  
  
**SETESC** _prog_name_ _$_  
  
Use this format to specify a program PxPlus is to **CALL** automatically to process **BREAK** /**ESCAPE** signals. When the program exits, execution resumes.

##  Format 3

**_Interrupt On/Off in Program_**  
  
**SETESC {ON | OFF}**  
  
If you use **SETESC ON** , PxPlus recognizes the user's **Ctrl - Break** input and halts execution. If you apply a **SETESC OFF** directive in your current session or program, PxPlus treats the user's subsequent use of the break keys as equivalent to a carriage return or **Enter**. That is, the user's **Esc** key or **Ctrl - C** terminates the current input (e.g. by advancing to the next input) but does not let the user halt a program in Execution mode from the keyboard. A **Ctrl - Break** retries the current input but does not halt program execution.

If you use **SETESC ON** , PxPlus recognizes the user's **Ctrl - Break** input and halts execution.

**_Example:_**

> 0010 setesc BREAK_IT  
>  0020 data 1,2,3,"CAT"  
>  0030 data 4,5,6,"DOG"  
>  0040 data 7,8,9,"PIG"  
>  0050 data 3,2,1,"DONE"  
>  0060 read data A,B,C,X$,err=0110  
>  0070 print A,B,C,X$  
>  0080 input "Try to break out: ",Y$  
>  0090 goto 0060  
>  0100 BREAK_IT: print "That was easy."; stop  
>  0110 print "Error on the READ (EOF)"  
>  0120 stop

Results when run under Windows with **SETESC ON** , then **SETESC OFF** :

**_User Enters:_** |  **SETESC ON  
RUN  
1 2 3CAT** |  **SETESC OFF  
RUN  
1 2 3CAT**  
---|---|---  
**Enter** |  Try to break out:  
4 5 6DOG |  Try to break out:  
4 5 6DOG  
**Esc** |  Try to break out:  
7 8 9PIG |  Try to break out:  
7 8 9PIG  
**Ctrl - C** |  Try to break out:  
3 2 1DONE |  Try to break out:  
3 2 1DONE  
**Ctrl - Break** |  Try to break out: That  
was easy. |  Try to break out: Try  
to break out: Try to  
break out: Try to break  
out: Try to break out:  
  
The **SETESC {ON | OFF}** directive is in effect for the duration of the session or until you reverse it with another **SETESC {ON | OFF}**.

##  Format 4

**_Enable/Disable for Range_**  
  
**SETESC {DISABLE | ENABLE****}  
**  
When you use the **SETESC DISABLE** directive, that disables **SETESC** for a range of statements. PxPlus ignores all subsequent **SETESC** _stmtref_ s until a **SETESC ENABLE** is encountered. You can make use of the **DISABLE** option in debugging a program that has embedded **SETESC** directives.

##  Format 5

**_Return Current Program_**

**SETESC READ**  _x$_

Use the **SETESC READ**  _x$_ format to return the name of the current **SETESC** program. If none is set, a null string is returned.
