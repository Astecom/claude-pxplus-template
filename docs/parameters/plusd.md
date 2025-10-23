# System Parameters

**'+D'** |  **_Inter-character Delay for Function Keys_**  
---|---  
  
##  Description

The **'+D'** parameter is used to define the maximum number of 1/100ths of a second delay to allow between characters of a multi-character escape sequence from a keyboard. When the first character of a known/defined keyboard sequence is received, the system will allow no more than the time defined by this parameter to elapse before terminating the escape sequence.

This parameter can be set to a value between 0 and 1000 (10 seconds).

_(The '+D' system parameter was added in PxPlus v6.30.)_

##  Default

**200** (2 seconds)
