# System Functions

**SRT( )** |  **_Sort String_**  
---|---  
  
##  Formats

1. |  _Sort Equal Length Elements:_ |  **SRT(**_string$_**,**_fixed_len_[,**ERR=**_stmtref_]**)**  
---|---|---  
2. |  _Sort Delimited Elements:_ |  **SRT(**_string$_[,_dlm_char_ _$_][,**ERR=**_stmtref_]**)**  
  
**_Where:_**

_dlm_char_ _$_ |  Delimiter for each string element. If omitted, the default delimiter is the **SEP** character (e.g. $8A$).  
---|---  
_fixed_len_ |  Numeric expression. Length of each element in the string (all the same fixed length).  
_stmtref_ |  Program line number or statement label to which to transfer control.  
_string$_ |  String to be sorted.  
  
##  Returns

Sorted character string.

##  Description

The **SRT( )** function returns a sorted character string. The string elements are internally sorted into ascending sequence. The order of duplicate elements is undefined.

#### **Note:**  
To sort a string into descending order, use the **NOT( )** function to invert the bits in the string prior to and after sorting. See **[NOT( ) Invert String Bits/Logical Condition](not.md)**.

##  Format 1

**_Sort Equal Length Elements_**  
  
**SRT(**_string$_**,**_fixed_len_[,**ERR=**_stmtref_]**)**

If each element in the string is the same fixed length, use this format to sort the string.

**_Example_**** _:_**

> rem To sort in ascending order:  
>  A$="0231405242670291234403242"  
>  print srt(A$,5)  
>   
> ->run  
>  0231403242052421234467029  
>   
>  rem To sort in descending order:  
>  print not(srt(not(A$),5))  
>   
>  ->run  
>  6702912344052420324202314

##  Format 2

**_Sort Delimited Elements_**  
  
**SRT(**_string$_[,_dlm_char_ _$_][,**ERR=**_stmtref_]**)**

If each element in the string has a delimiter or **SEP** character, use this format to sort the string. PxPlus considers the first character of _dlm_char_ _$_ to be your delimiter. The default is the current **SEP** value.

**_Example_**** _:_**

> rem To sort with delimited strings:  
>  A$="THE BROWN FOX JUMPED OVER THE DOG" ! Blank as delimiter, ends string  
>  print srt(A$," ")  
>   
>  ->run  
>  BROWN DOG FOX JUMPED OVER THE THE
