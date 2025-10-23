# System Functions

**PAD( )** |  **_Pad/Truncate String_**  
---|---  
  
##  Format

**PAD(**_string$_ ,_len_[,_pad_code_][,_char$_][,**ERR=**_stmtref_]**)**  
  
**_Where:_**

_char$_ |  Optional string. Its first character is used to pad _string$_. If omitted, the default is to pad with blanks. String expression.  
---|---  
_len_ |  Desired length of string. Numeric expression.  
_pad_code_ __ |  Optional numeric parameter defining how to pad the string, either numeric or string: |  0 or L |  Pad on Left (right justify)  
---|---  
1 or R |  Pad on Right (left justify) - **_Default_**  
2 or C |  Centre in string  
If omitted, the string is padded to the right.  
_stmtref_ |  Program line number or statement label to which to transfer control.  
_string$_ |  String expression to be processed.  
  
##  Returns

The value of the string after applying the padding/truncation.

##  Description

The **PAD( )** function converts a given character string (_string$_) to the length (_len_) specified. It makes the string the desired length either by truncating the _string$_ or by appending the defined pad character. The default is to pad with spaces.

If the length you specify is less than 0, PxPlus returns an Error #41: Invalid integer encountered (range error or non-integer).

##  See Also

[**JST( ) Justify String**](jst.md)

##  Example

The following code uses ***** (_asterisks_) to pad a numeric value to a length of 30 characters:

> chq_amt=1.98,cust_name$="ACME INC."  
> chq_amt$="*****"+pad(str(chq_amt),30,"*")  
>  print 'CS',@(0,5),"Customer name :",pad(cust_name$,20),"| ",  
>  print @(0,6),chq_amt$

> ->run  
>  Customer name :ACME INC. |  
>  *****1.98**************************

This code sample illustrates the use of alpha-numeric versus numeric pad types in the **PAD( )** function:

> ! ^100 - PAD function  
>  Orig$="Test String",Char$=".",PadLen=20  
>  print 'LF',"Original String: "+@(24)+'BR'+Orig$+'ER'+'LF'  
>  Type=0,Type$="L";  
>  gosub PadIt;  
>  print  
>  Type=1,Type$="R";  
>  gosub PadIt;  
>  print  
>  Type=2,Type$="C";  
>  gosub PadIt  
>  stop  
>  !  
> PadIt:  
>  print "PAD(Orig$,"+str(PadLen)+","+pad(str(Type),3,2)+","+quo+Char$+quo,  
>  print ") = "+@(24)+'BR'+pad(Orig$,PadLen,Type,Char$)+'ER'  
>  print "PAD(Orig$,"+str(PadLen)+","+quo+Type$+quo+","+quo+Char$+quo,  
>  print ") = "+@(24)+'BR'+pad(Orig$,PadLen,Type$,Char$)+'ER'  
>  return
