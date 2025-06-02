# System Functions

**JST( )** |  **_Justify String_**  
---|---  
  
##  Format

**JST(**_string$_ ,_len_ [_, jstcode_ [$] ][,_char$_][,**ERR=**_stmtref_]**)**  
  
**_Where:_**

_char$_ |  Optional string. Its first character is used to pad _string$_. If omitted, the default is to pad with blanks. String expression.  
---|---  
_len_ |  Desired length of string. Numeric expression.  
_jstcode_ |  Optional numeric or string parameter defining how to justify the string: |  |  0 or R |  Right justify  
---|---|---  
|  1 or L |  Left justify **_(Default)_**  
|  2 or C |  Centre in string  
  
If omitted, the string is right justified.  
  
_stmtref_ |  Program line number or statement label to which to transfer control.  
_string$_ |  String expression to be processed.  
  
##  Returns

The value of the string after applying the padding/truncation.

##  Description

The **JST( )** function converts a given character string _(string$)_ to the length _(len)_ specified. It makes the string the desired length either by truncating the _string$_ or by appending a defined pad character. The default is to pad with spaces.

If the length you specify is less than 0, PxPlus returns an Error #41: Invalid integer encountered (range error or non-integer).

_(The JST( ) function was added in PxPlus v7.)_

##  See Also

[**PAD( ) Pad/Truncate String**](pad.md)

##  Example

The following code sample uses ***** (_asterisks_) to justify a numeric value to a length of 30 characters:

> chq_amt=1.98,cust_name$="ACME INC."  
> chq_amt$="*****"+jst(str(chq_amt),30,"*")  
>  print 'CS',@(0,5),"Customer name :",jst(cust_name$,20),"| ",  
>  print @(0,6),chq_amt$

> ->run  
>  Customer name :ACME INC. |  
>  *****1.98**************************

This example illustrates the use of alpha-numeric versus numeric pad types in the **JST( )** function:

> ! ^100 - PAD and JST functions  
>  Orig$="Test String",Char$=".",PadLen=20  
>  print 'LF',"Original String: "+@(24)+'BR'+Orig$+'ER'+'LF'  
>  Type=0,Type$="L";  
>  gosub JustifyIt;  
>  print  
>  Type=1,Type$="R";  
>  gosub JustifyIt;  
>  print  
>  Type=2,Type$="C";  
>  gosub JustifyIt  
>  stop  
>  !  
>  ! ^100  
> JustifyIt:  
>  print "PAD(Orig$,"+str(PadLen)+","+quo+Type$+quo+","+quo+Char$+quo,  
>  print ") = "+@(24)+'BR'+pad(Orig$,PadLen,Type$,Char$)+'ER'  
>  print "JST(Orig$,"+str(PadLen)+","+quo+Type$+quo+","+quo+Char$+quo,  
>  print ") = "+@(24)+'BR'+jst(Orig$,PadLen,Type$,Char$)+'ER'  
>  return
