# System Parameters

**'FS'=** |  **_Default Field Separator_**  
---|---  
  
##  Description

Assigns the default field separator value for the **SEP** system variable. Use the ASCII value of your character either as a decimal value or by using the **ASC( )** function. You can also use the ASCII value of the character that is currently in the **DLM** system variable.

##  Default

**'FS'=138**($8A$, not a printable character) or **'FS'=ASC(SEP)**

## See Also

**[SEP PxPlus Field Delimiter](../variables/sep.md)  
[ASC( ) Get Internal Character Value](../functions/asc.md)  
[DLM Return System Directory Delimiter](../variables/dlm.md)**

##  Example

In this example, the current value in the **DLM** system variable (_backslash_ "\") replaces the **SEP** value $8A$ (i.e. **CHR(138)**) as the default field separator:

> a$=sep;  
>  print hta(a$),asc(sep)  
>  8A 138  
>   
> set_param 'FS'=asc(dlm);  
>  print hta(sep),asc(sep)  
>  5C 92
