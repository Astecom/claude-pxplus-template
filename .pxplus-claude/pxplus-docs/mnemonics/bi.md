# Mnemonics

**'BI'** |  **_Begin Input Transparency_**  
---|---  
  
**Editing _or_ Behaviour**

##  Description

Use '**BI** ' to begin input transparency mode. (All input is accepted without any system interpretation of control codes.) With '**BI** ' activated, a **SIZ=** option on an **INPUT** directive is the only way you can specify a terminator/end of input.

To end input transparency mode, use the **'EI'** mnemonic.

## See Also

**['EI' End Input Transparency](ei.md)  
['ME' Begin Edit Mode](me.md)  
[INPUT Get Input from Terminal](../directives/input.md)**

##  Example

When you need to return input one character at a time, it is recommended that you use the **'ME'** mnemonic. However, it is also possible to use '**BI** ' in combination with **SIZ=1** to return input one character at a time. Then, each character is returned as entered. Standard characters are returned in the variable specified (e.g. CHAR$). Function and edit keys are returned in the system variable **CTL**. Your program will still be responsible for processing all the edit keys.

> input (0,siz=1)'BI',CHAR$,'EI' ! This will echo the data  
>  obtain (0,siz=1)'BI',CHAR$,'EI' ! This will not echo
