# Directives 

**DEF ARG** |  **_Define Temporary ARG Value_**  
---|---  
  
##  Format

**DEF ARG(**_nnn_**)="**_value**"**_

**_Where:_**

_nnn_ |  Argument number to be changed.  
---|---  
_value_ |  New value to be returned for the specified ARG.  
  
##  Description

The **DEF ARG** directive can be used to change the values returned by the **ARG** function. This directive allows you to temporarily override the value normally found following the -ARG parameter on the Command line that launched the system.

_(The DEF ARG(nnn) function was added in PxPlus v6.30.)_

##  See Also

[**ARG( ) Get/Process Arguments**](../functions/arg.md)
