# System Functions

**CTL( )** |  **_Return CTL Definition_**  
---|---  
  
##  Formats

1. |  _Return CTL Definition_ : |  **CTL(**_chan_ ,_input_[_$_][,**ERR=**_stmtref_]**)**  
---|---|---  
2. |  _Return Input Sequence_ : |  **CTL(READ** _chan_ ,_ctlval_[,**ERR=**_stmtref_]**)**  
  
**_Where:_**

_chan_ |  Channel or logical file number. Usually 0 (zero), the terminal.  
---|---  
_ctlval_ |  CTL value whose input sequence is to be returned.  
_input_[_$_] |  Input sequence. Either the keyboard character string received or the invalid CTL value. String or numeric expression.  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Returns

CTL code associated with input, or input sequence associated with CTL.

##  Description

The **CTL( )** function is designed for use in programs that interact directly with the terminal. It provides access to the CTL lookup tables maintained internally in PxPlus.

When an input sequence is passed to **CTL( )** , it returns the CTL values associated with the input.

**_Example:_**

> print ctl(0,$000002E$) returns -1007

When a CTL value is passed to **CTL(READ** ..**)** , it returns the input sequence associated with the control.

##  See Also

[**DEFCTL Define/Redefine CTL Values**](../directives/defctl.md)  
[**Negative CTL Definitions**](../appendix/negative_ctl_definitions.md)

##  Example

The following example reads an uppercase string into Y$ without editing and stops on a CTL value >0:

> 0020 open (1) fid(0); Y$=""  
>  0030 read record (1,siz=1)X$  
>  0040 if X$<" " or X$=$7F$ then goto 0100  
>  0050 let X$=ucs(X$),Y$=Y$+X$  
>  0060 print X$,; goto 0030  
>  0100 let C=ctl(0,X$,err=0050); goto 0130  
>  0110 read record (1,siz=1)X1$  
>  0120 let X$=X$+X1$; goto 0100  
>  0130 if C>0 then goto 1000 ! Found it  
>  0140 let C=ctl(0,C,err=0160) ! Check alternates  
>  0150 goto 0130  
>  0160 print 'RB',; goto 0030  
>  1000 print "DONE"; stop

In the example below, the **CTL( )** function returns a string value containing a list of control sequences for a specified CTL value. The string is made up of a series of fields where the first byte preceding each field indicates the number of characters in the control sequence; the rest of the field shows the actual control sequence.

To print control sequences for function keys **F1** through **F4** :

> 0010 for CTL_CODE=1 to 4  
>  0020 print 'LF',str(CTL_CODE:"#0")," ",  
>  0030 let X$=ctl(read 0,CTL_CODE)  
>  0040 if X$="" then goto 0070  
>  0050 let X=dec(X$(1,1)); print pad(hta(X$(2,X)),10),  
>  0060 let X$=X$(X+2); goto 0040  
>  0070 next  
>  0080 print " DONE"; stop  
>   
>  ->run  
>  1 000070  
>  2 000071  
>  3 000072  
>  4 1B 000073 00FF82 DONE

If the expression is numeric, PxPlus returns any alternate CTL value that has been assigned:

> print ctl(0,$000070$) returns 1 (CTL=1 or the **F1** key)
