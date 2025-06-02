# System Functions

**STK( )** |  **_Program Call Stack_**  
---|---  
  
##  Formats

1. |  _Retrieve CALL Stack Information_: |  **STK(**_level_[,**ERR=**_stmtref_]**)**  
---|---|---  
2. |  _Retrieve List of Arguments_: |  **STK(PROPERTIES)**  
  
**_Where:_**

_level_ |  Program **CALL** stack level. Numeric expression.  
---|---  
_string$_ |  String expression to be processed.  
  
##  Returns

String, program line number (characters 1 to 5) plus full pathname.

##  Format 1

**_Retrieve CALL Stack Information_**

**STK(**_level_[,**ERR=**_stmtref_]**)**

This format returns a character string reporting the program line number (5 digits) and program (full pathname) being executed at the program level specified. Use a negative value to specify a level that is relative to the current level. PxPlus returns an Error #41: Invalid integer encountered (range error or non-integer) if your given level does not exist.

**_Example_**** _:_**

The current directory is "/usr/test". In program "PROG1":

> 0100 call "STACKER"

In program "/usr/test/STACKER":

> 0010 print "Level 1=",stk(1)  
>  0020 print "Level 2=",stk(2)  
>  0030 print "Level -1=",stk(-1)

When run:

> Level 1=00100/usr/test/PROG1  
>  Level 2=00020/usr/test/STACKER Level -1=00100/usr/test/PROG1

The next example prints all the programs in the stack:

> 0010 I=1-prm('B0')  
>  print stk(I,err=*next); I=I+1;goto 0020

#### **Note:**  
You can use PRM('B0') to circumvent a potential problem should the base level be level 0 rather than 1.

##  Format 2

**_Retrieve List of Arguments_**

**STK(PROPERTIES)**

This format returns a character string that identifies the type and number of arguments passed into the current program. Each character of the string represents the type of calling argument.

The possible character values are:

**Character** |  **Description**  
---|---  
S |  The argument is a string variable and changes in the subprogram will be returned to the variable passed by the caller.  
s |  The argument is a string expression and changes in the subprogram will **_not_** be returned to the caller.  
N |  The argument is a numeric/integer variable and changes in the subprogram will be returned to the variable passed by the caller.  
n |  The argument is a numeric expression and changes in the subprogram will **_not_** be returned to the caller.  
R |  The argument is a composite string with a format and changes in the subprogram will be returned in the variable and its associated components in the caller.  
A |  The argument is a string array and changes in the subprogram will be reflected in the array passed by the caller.  
a |  The argument is a numeric/integer array and changes in the subprogram will be reflected in the array passed by the caller.  
  
**_Example:_**

This table provides some examples of the values returned for various combinations of CALLs:

**CALL Arg List** |  **STK(PROPERTIES) Value**  
---|---  
X,Y$ |  "NS"  
X,X+1 |  "Nn"  
INT(N), UCS(X$),Y$ |  "nsS"  
X${ALL},N,(Y$) |  "ANs"
