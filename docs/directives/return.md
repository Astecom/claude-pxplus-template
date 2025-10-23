# Directives 

**RETURN** |  **_Return From a Subroutine_**  
---|---  
  
##  Formats

1\. _Terminate Subroutine:_ |  **RETURN**  
---|---  
2\. _Terminate Procedure, Specify Value:_ |  **RETURN** _expression_[_$_]  
  
**_Where_** _:_

_expression_[_$_] |  Value to be returned from a multi-line function, embedded I/O procedure, or OOP method logic. String or numeric expression.  
---|---  
  
##  Description

The **RETURN** directive is used to terminate a subroutine. This directive can also be used to pass a value back from a multi-line function, an embedded I/O procedure, or OOP method logic.

##  Format 1

**_Terminate Subroutine_**

The **RETURN** directive is used as the terminator for a **GOSUB** or **SETESC** subroutine. Control is returned to the initiating statement. If the subroutine has been accessed externally via the **PERFORM** directive, the **RETURN** statement will both terminate the subroutine and return control to the initiating program.

If PxPlus encounters a **RETURN** directive without an associated subroutine, PxPlus returns an Error #27: Unexpected or incorrect WEND, RETURN or NEXT.

**RETURN** must be the final directive in a compound statement.

Use the ***RETURN** label to emulate this directive in a statement reference.

##  Format 2

**_Terminate Procedure, Specify Value_**

**RETURN**  _expression_[_$_]

The **RETURN** directive serves a similar purpose in a multi-line function, embedded I/O, or OOP function procedure as it does in a typical subroutine; however, this version of a **RETURN** statement also passes back a value, _expression_[_$_].

**_Multi-Line Function_**

When used in a multi-line definition of a user-defined function (**DEF FN**), the **RETURN** directive terminates the function procedure and passes back a result. The specified value must match the data type of the function definition itself.

**_Embedded I/O Procedure_**

The **RETURN** directive terminates an embedded I/O procedure and returns a value to the file handler, which it may use to determine the next operation.

**_OOP Method Logic_**

In Object Oriented Programming, the **RETURN** directive terminates the method logic and passes back a result.

##  See Also

[**GOSUB.. Execute Subroutine**](gosub.md)  
[**SETESC Set Interrupt Processing**](setesc.md)  
[**Labels/Logical Statement References**](../appendix/labels~logical_statement_references.md)  
**[EXIT Terminate Subprogram and Return](exit.md)**  
**[DEF FN Define Function](def_fn.md)**

##  Example

Use in terminating/exiting a subroutine:

> 0100 ! 100  
>  0110 input "Enter start date DD/MM/YY: ",D$  
>  0120 gosub 1000  
>  0130 let D1$=D$  
>  0140 input "Enter ending date DD/MM/YY: ",D$  
>  0150 gosub 1000  
>  0160 let D2$=D$  
>  0170 print "DONE"; stop  
>  1000 ! 1000  
>  1010 if len(D$)<>8 then goto 1080  
>  1020 if D$(3,1)<>"/" or D$(6,1)<>"/" then goto 1080  
>  1030 let D=num(D$(1,2),err=1080),M=num(D$(4,2),err=1080),Y=num(D$(7,2),err=1080)  
>  1040 if D<1 or D>31 then goto 1080  
>  1050 if M<1 or M>12 then goto 1080  
>  1060 return  
>  1070 !  
>  1080 print "Invalid: Restart..."  
>  1090 exitto 0100  
>   
>  ->run  
>  Enter start date DD/MM/YY: 033199  
>  Invalid: Restart...  
>  Enter start date DD/MM/YY: 31/03/99  
>  Enter ending date DD/MM/YY: 16/04/99  
>  DONE

Use in terminating function and returning value:

> 0010 def fn%SHRINK$(local X$)  
>  0020 local I  
>  0030 I=pos(" "=X$)  
>  0040 if I <> 0 then X$=X$(1,I-1)+" "+X$(I+2); goto 0040  
>  0050 return X$  
>  0060 end def
> 
> 0010 def class "Customer"  
>  0020 property CUST_NO$,NAME$,ADDR1$,ADDR2$,CITY$,AMT_OWING,LAST_ORD_DT$  
>  0030 function Find(X$)Get_Customer  
>  0040 function Update()Upd_Customer  
>  0050 local File object  
>  0050 end def  
>  0100 ON_CREATE: enter Db  
>  0110 File = Db'Open("ARCUST")  
>  0120 return  
>  0200 Get_Customer: enter C$  
>  0210 read (File'Channel,key=C$) ! Loads all the variables  
>  0220 return 1  
>  0300 Upd_Customer:  
>  0310 write (File'Channel)  
>  0320 return 1
