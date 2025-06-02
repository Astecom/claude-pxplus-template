# System Functions

**ARG( )** |  **_Command-Line Argument_**  
---|---  
  
##  Format

**ARG(**_position_**[** , **ERR=**_stmtref_**] )**

**_Where_** _:_

_position_ |  Position of the argument you want returned. Numeric expression. Range: integer value from **-4** to the number of arguments in the command that launched the session.  
---|---  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Returns

String, value of start-up argument.

##  Description

The **ARG( )** function returns the string value of one of the arguments specified in the operating system command that launched the session. The numeric expression _position_ indicates which argument is to be returned.

If you refer to an invalid argument, the system will generate Error #41: Invalid integer encountered (range error or non-integer).

##  See Also

[**NAR Number of Arguments, Start PxPlus**](../variables/nar.md)

##  Example

Given the command line of:

> pxplus -sz=20 -arg TOM JONES

Then:

|  ARG(0) |  yields __ "pxplus"  
---|---|---  
|  ARG(1) |  yields __ "TOM"  
|  ARG(2) |  yields "JONES"  
|  ARG(3) |  yields Error #41: Invalid integer encountered...  
|  ARG(-1) |  yields the INI filename in use for the current session  
|  ARG(-2) |  yields the pathname to the System Library  
|  ARG(-3) |  yields the pathname to the directory in which the activation keys will be found  
|  ARG(-4) |  yields the full command line used to launch the process:  
  
"pxplus -sz=20 -arg TOM JONES"
