# System Functions  
  
**ARG( )** |  **_Parse String Arguments_**  
---|---  
  
##  Formats

1. |  _Return Argument from String_: |  **ARG(**_string$, argno_[,_delim_ _$_] [,**ERR=**_stmtref_]**)**  
---|---|---  
2. |  _Replace Argument in String_: |  **ARG(EDIT** _string$, argno, newval$_[,_delim_ _$_] [,**ERR=**_stmtref_]**)**  
  
**_Where:_**

_string$_ |  String containing a series of arguments/values each separated by a single character.  
---|---  
_argno_ |  Number of the argument in the string to return or replace (one based).  
_delim_ _$_ |  Character that separates each of the values _string$_. If omitted, the system default field separator is used.  
_newval_ _$_ |  New value to insert into _string$_.  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Format 1

This form of the **ARG** function extracts a specific field from a delimited string. If no delimiter is specified, the system uses the default SEP character (normally $8A$).

## Format 2

This form of the **ARG** function generates and returns a new string, replacing the field specified with that supplied in <_newvalue_ >.

If the field specified did not exist, additional delimiters will be added in the string to make up for the missing fields. If no delimiter is specified, the system uses the default SEP character.

##  Example

Given X$ = "a,b,c,d,e,":

ARG(X$, 1, ",") |  Returns "a"  
---|---  
ARG(EDIT X$, 2, "Cat", ",") |  Returns "a,Cat,c,d,e,"  
ARG(EDIT X$, 7, "Dog", ",") |  Returns "a,b,c,d,e,,Dog,"  
  
_(The substring parsing capabilities of the ARG function were added in PxPlus v7.00.)_
