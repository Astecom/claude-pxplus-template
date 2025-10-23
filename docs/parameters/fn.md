# System Parameters

**'FN'** |  **_Filename As Is: No Case Conversion_**  
---|---  
  
##  Description

**_On_** \- Passes filenames to the OS with no case conversion.  
  
**_Off_** \- Case conversion is governed by the current setting of either **'FL'** (forces lowercase) or **'FU'** (forces uppercase).

##  Default

**_On_** (unless **'FL'** or **'FU'** are **_On_**)

The **'FN'** setting is not displayed in the list returned using **PRINT PRM**.

##  See Also

**['FL' Filename in Lowercase](fl.md)**  
**['FU' Filename in Uppercase](fu.md)  
[FFN( ) Function](../functions/ffn.md)** (for a UNIX example using these parameters for case insensitive searches)
