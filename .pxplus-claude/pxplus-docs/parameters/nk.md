# System Parameters

**'NK'** |  **_Null Key Stripping_**  
---|---  
  
##  Description

Strips trailing nulls from a key; i.e. key values $00$, $0000$ and $000000$ become $$.

A file with the **'NK'** parameter enabled will pad all keys with null bytes; thus, a key of $00$, $0000$ and $000000$ will be considered the same. However, files with a large number of records will function better due to the issue with legacy file structures.

#### **Note:**  
The **SET_NK** command can be used to set/reset the **'NK'** system parameter for a file.

##  Default

**_Off_** \- No stripping occurs.

## See Also

**[SET_NK Console Command](../commands/set_nk.md)**
