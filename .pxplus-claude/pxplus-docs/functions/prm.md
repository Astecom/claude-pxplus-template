# System Functions  
  
**PRM( )** |  **_Return Parameter Value_**  
---|---  
  
##  Format

**PRM(**_param_[,**ERR=**_stmtref_]**)**  
  
**_Where:_**

_param_ |  Two-character valid system parameter code, enclosed in single quotes. See **[System Parameters](../parameters.md)**. String expression.  
---|---  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Returns

Current value of system parameter, or status code if switch.

##  Description

The **PRM( )** function returns the current value of the specified system parameter unless the parameter is a switch. The following numeric status codes are returned for a switch:

|  0 |  If the switch is _Off_  
---|---|---  
|  1 |  If the switch is _On_  
|  -1 |  If the specified parameter does not exist  
  
##  See Also

**[SET_PARAM Set System Parameters](../directives/set_param.md)**

##  Example

This temporarily changes the **'BY'** parameter to obtain a new date:

> print "Valentine days.."  
>  SV_BY=prm('BY')  
>  for Y=1999 to 2009  
>  set_param 'BY'=Y  
>  print dte(31+14-1:"%Dl %Ml %D/%Y")  
>  next Y  
> set_param 'BY'=SV_BY  
>   
>  ->run  
>  Valentine days..  
>  Sunday February 14/1999  
>  Monday February 14/2000  
>  Wednesday February 14/2001  
>  Thursday February 14/2002  
>  Friday February 14/2003  
>  Saturday February 14/2004  
>  Monday February 14/2005  
>  Tuesday February 14/2006  
>  Wednesday February 14/2007  
>  Thursday February 14/2008  
>  Saturday February 14/2009

**PRM( )** returns a specific parameter's current setting (or the Boolean value for a switch):

> ?prm('AH')  
>  0  
> set_param 'AH'  
>  ?prm('AH')  
>  1

The parameter's status is returned even when it is hidden from the **PRM** variable's contents listing:

> ?prm('!I') ! hidden unless ON  
>  0
