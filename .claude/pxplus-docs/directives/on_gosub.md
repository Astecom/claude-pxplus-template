# Directives 

**ON...GOSUB** |  **_Conditional Subroutine Execution_**  
---|---  
  
##  Format

**ON** _num**GOSUB** stmtref,stmtref,..._  
  
**_Where_** _:_

_num_ |  Value determines the location to which to transfer. Numeric expression. Integer range -32768 to +32767.  
---|---  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Description

Use the **ON ... GOSUB** directive to transfer control to a subroutine at one of the statement references listed, based on the numeric value supplied:

|  _num_ <=0 |  Control is transferred to the first statement specified.  
---|---|---  
|  _num_ =1 |  Control is passed to the second statement number specified.  
|  _num_ =2 |  Control is passed to the third.  
|  _num_ =3 _nnn_ |  Control is passed sequentially.  
  
If _num_ is greater than the number of _stmtref_ supplied, the last _stmtref_ is assumed.

##  See Also

[**GOSUB.. Execute Subroutine**](gosub.md)  
[**RETURN Return From a Subroutine**](return.md)

##  Example

0020 on X gosub 0100,0200,0300,0400,0500

|  **ON...** |  **GOSUB**  
---|---|---  
|  X <= 0 |  Transfers to 0100  
|  X = 1 |  Transfers to 0200  
|  X = 2 |  Transfers to 0300  
|  X = 3 |  Transfers to 0400  
|  X >= 4 |  Transfers to 0500
