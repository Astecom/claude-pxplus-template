# Directives

**RETRY** |  **_Re-Execute Failing Instruction_**  
---|---  
  
##  Format

**RETRY**

##  Description

The **RETRY** directive returns control to the statement on which the last error transfer occurred. This allows you to take corrective action and retry the statement.

Use ***RETRY** to emulate this directive in a statement reference. See **[Labels/Logical Statement References](../appendix/labels~logical_statement_references.md)**.

If an error occurs on a statement where you have used any of the **ERR=** , **DOM=** or **END=** options, or where you have used a **[SETERR](seterr.md)** directive, PxPlus does the following:

  * Saves the statement number and directive where the error occurred (as a retry address).
  * Passes control to the file option or **SETERR** statement reference to handle the error.
  * Returns control to the **RETRY** directive using the retry address.



You can find the currently saved retry address or line reference in **TCB(11)**. PxPlus returns an Error #27: Unexpected or incorrect WEND, RETURN, or NEXT (i.e. no return address on an error) if it encounters a **RETRY** directive with no previous statement saved.

The saved statement number and directive are cleared by any of the following directives: **[BEGIN](begin.md)**, **[CLEAR](clear.md)**, **[LOAD](load.md)**, **[RESET](reset.md)** or **[START](start.md)**. You can also clear the retry address by executing a **[RUN](run.md)** directive with a program name specified. When you use it in a compound statement, the **RETRY** directive must be the final directive.

If you set the **'RR'** system parameter, PxPlus will also perform a reset for **RUN** directives. _(as of PxPlus version 4.20)_

##  See Also

**[RESET Reset Program State](reset.md)**  
**[TCB( ) Return Task Information](../functions/tcb.md)**  
**['RR' Reset on RUN](../parameters/rr.md)**

##  Example

0010 open (1)"CUSTFL"  
0020 input (0,err=1000)"Enter customer number: ",C  
0030 read (1,err=1010,key=str(C:"000000"))C$,N$  
0040 print C$," ",N$  
0050 stop  
1000 print 'RB','LF',"Invalid customer. "; retry ! Ring bell, retry 0020  
1010 print 'RB',"Cannot find customer: "; goto 0020  
  
->run  
Enter customer number: 123987  
Cannot find customer:  
Enter customer number: ABC  
Invalid customer.  
Enter customer number: 123456  
123456 ABC MFG
