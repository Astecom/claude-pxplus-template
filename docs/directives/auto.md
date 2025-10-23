# Directives 

**AUTO** |  **_Automatic Line Generation_**  
---|---  
  
##  Format

**AUTO** [_lineno_[,_incr_]]

**_Where_** _:_

_incr_ |  Increment you want PxPlus to add automatically to generate each subsequent line number. Default increment is 10; however, you can set a different default via the [**'AI'=**](../parameters/ai.md) system parameter.  
---|---  
_lineno_ |  Starting program line number you want PxPlus to use. Optional.  
  
##  Description

Use the **AUTO** directive to have PxPlus automatically generate line numbers to prefix your statement input.

#### **Note:**  
This directive only works in Command mode.

If you omit the starting line number in this directive, then PxPlus uses either the last generated line number (if any), or the next higher line in the current program. If you do not specify an increment, the default is 10.

If you change the increment in Command mode, it stays at the new setting until you change it again.

The **AUTO** function remains active until you enter a null line (e.g. press **Enter**) or execute a command. You can backspace over and change the generated line number.

##  Example

auto 100,10  
0100 ! PxPlus generates Lineno 0100 for you. Add the statement.   
0110 ! PxPlus adds 10, generates line 0110.   
0120
