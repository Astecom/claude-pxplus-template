# Directives

**DAY_FORMAT** |  **_Specify DAY Format_**  
---|---  
  
##  Formats

1. |  _Set Date Format Mask:_ |  **DAY_FORMAT** [_new_fmt_ _$_]  
---|---|---  
2. |  _Read Date Format Mask:_ |  **DAY_FORMAT READ** _current_fmt_ _$_  
  
**_Where:_**

_new_fmt_ _$_ |  String expression containing the format for the variable **DAY**. Optional. Defaults to "MM/DD/YY".  
---|---  
_current_fmt_ _$_ |  String expression (max 8kb) containing current **DAY_FORMAT** setting.  
  
##  Description

Use the **DAY_FORMAT** directive to change the format mask for the **DAY** variable. The format string contains the new format for the **DAY** variable.

Characters in the format string control the following: 

|  DD |  Insert current day  
---|---|---  
|  MM |  Insert current month  
|  YY |  Insert current year (last two digits only)  
|  YYYY |  Insert four digit year  
|  AA |  Insert current year using 00 - 99 for 1900 through 1999, A0 - A9 for 2000 through 2009, B0 - B9 for 2010 through 2019, etc.  
  
All other characters in the mask are returned as literals in the **DAY** variable. The **DAY_FORMAT** stays in effect until a **START** directive is executed.

The **DAY_FORMAT** directive mask can contain the letters AA (e.g. "MM/DD/AA"). The format AA indicates a packed two**-** character year field. PxPlus returns $A0$ for the year 2000, $A1$ for 2001, $B0$ for 2010, etc. up to $Z9$ for the year 2269. This format assists with conversion issues in legacy applications.

##  See Also

**[DAY Return Current System Date](../variables/day.md)**  
**[DTE( ) Convert Date](../functions/dte.md)**  
**[JUL( ) Return Julian Date](../functions/jul.md)**

##  Example

**_Example 1:_**

> print day  
> day_format "YYYY MM/DD"  
>  print day  
>   
>  ->run  
>  11/15/00  
>  2000 11/15

**_Example 2:_**

> X$="01/01/A0"  
> day_format "MM/DD/AA"  
>  print jul(X$)  
>  print dte(10957:"%Y %Ml %D")  
>   
>  ->run  
> 10957  
>  2000 January 1
