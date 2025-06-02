# System Functions

**KGN( )** |  **_Generate Record Key_**  
---|---  
  
##  Format

**KGN(**[_ext_key_ _$_],_data$,key_def$_ ,_key_num_ __[ ,**SEP=**_sepchar_ _$_]__[,**ERR=**_stmtref_]**)**

**_Where:_**

_ext_key_ _$_ |  Value of the external key. Optional. String expression.  
---|---  
_data$_ |  Contents of the data record. String expression.  
_key_def_ _$_ |  Key definition structure. String expression. This can be extracted using the **[FIB( )](fib.md)** function at position 85 (in native PxPlus mode) or using the **[FIN( )](fin.md)** function at position 86 for a length of 385 (in BBx emulation mode).  
_key_num_ |  Key number (primary or an alternate key) to extract. Numeric expression - Base 0 (primary key=0, 1st secondary=1, etc.).  
_sepchar_ _$_ |  Separator character to be used in the parsing of _data$_. If omitted, the system separator is used or the Dynamic field separator logic is applied if enabled.  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
_(The ability to have a SEP table and Dynamic separators was added in PxPlus v7.00.)_

##  Returns

Key of record in file, given the record's contents.

##  Description

The **KGN( )** function returns a string comprising the key of the record provided. This function can be used to determine the value of an alternate (or primary) key of a record, given the record's contents (and external key, if present).

When comparing keys with descending segments, an application can specify the key number as a negative value. In this case, the descending segments will be inverted so that a logical compare will function properly.

##  Example

0010 open (13)"Cstfile"  
0020 if prm('BX')=0 then X$=mid(fib(13),85) else X$=mid(fin(13),86,385)  
0030 K$=key(13,end=0070)  
0040 read record (13,key=K$)R$  
0050 print "Key: ",K$," Alt: ",kgn(K$,R$,X$,1)  
0060 goto 0030  
0070 print "End-of-file"  
0080 end

BBx is a registered trademark of BASIS International Ltd.
