# System Functions

**I3E( )** |  **_Convert To/From IEEE Format_**  
---|---  
  
##  Formats

1. |  _Convert from Internal Value to Floating Point_: |  **I3E(**_num_[,**ERR** =_stmtref_]**)**  
---|---|---  
2. |  _Convert from Floating Point to Internal Value:_ |  **I3E(**_string$_[,**ERR** =_stmtref_]**)**  
  
**_Where:_**

_num_ |  Numeric value to convert to 8-byte IEEE format (scientific notation).  
---|---  
_string$_ |  8-byte string expression to convert from IEEE format to a numeric value.  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Returns

Numeric data, IEEE converted to/from PxPlus internal values.

##  Description

The **I3E( )** function converts data to/from IEEE floating point format and PxPlus internal values. The primary purpose of this function is to allow for the conversion of data between PxPlus and other applications.

##  Format 1

**_Convert from Internal Value to Floating Point_**  
  
**I3E(**_num_[,**ERR** =_stmtref_]**)**

If the function is passed a numeric expression, it will return an 8-byte string containing the IEEE floating point value of the number.

##  Format 2

**_Convert from Floating Point to Internal Value_**  
  
**I3E(**_string$_[,**ERR** =_stmtref_]**)**

If the function is passed an 8-byte string, the string will be converted to an internal PxPlus numeric value.

##  Example

! Program to convert values to square roots  
open (1,isz=8)"FLTDTA"  
I=0  
LOOP: \  
read record (1,ind=I,err=DONE)F$  
F$=i3e(sqr(i3e(F$)))  
write record (1,ind=I)F$  
I=I+1;  
goto LOOP  
DONE: \  
close (1)  
end
