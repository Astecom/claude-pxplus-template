# System Functions

**CPL( )** |  **_Compile String_**  
---|---  
  
##  Format

**CPL(**_statement$_[_,optval$_]__[,**ERR=**_stmtref_]**)**  
  
**_Where:_**

_statement$_ |  String containing the statement to compile.  
---|---  
_optval_ _$_ |  Optional second parameter that is ignored by the system - provided for compatibility with other BB dialects.  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Returns

PxPlus compiled format of the statement.

##  Description

The **CPL( )** function returns the PxPlus internal (compiled) format of the statement provided in the string argument _statement$_.

##  Example

MYSRS_IOL$=cpl("IOLIST A$,B$,C$")  
read data from CUR_RECORD$ to iol=MYSRS_IOL$
