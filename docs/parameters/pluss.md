# System Parameters

**'+S'** |  **_Enable Dynamic Field Separators_**  
---|---  
  
##  Description

The **'+S'** parameter enables the PxPlus dynamic field separator logic.

When enabled, the system will attempt to determine the field separator in the **ARG** , **READ DATA FROM** and **KGN** functions automatically by checking the last non-null character of the input string.

_(The '+S' system parameter was added in PxPlus v6.30.)_

##  Default

**_Off_**

## See Also

**[ARG Get/Process Arguments](../functions/arg.md)**  
**[READ DATA FROM](../directives/read_data.htm#Mark8)**  
**[KGN Generate Record Key](../functions/kgn.md)**
