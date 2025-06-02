# System Parameters

**'FL'** |  **_Filename in Lowercase_**  
---|---  
  
##  Description

When the **'FL'** parameter is enabled ** _(On)_** , the system will convert all filenames to **_lowercase_** before passing them to the operating system file system. This conversion **_does not_** occur on filenames that specify full pathnames to files.

#### **Note:**  
When the **'FL'** parameter is set to **_On_** , **'FU'** is turned off automatically. In addition, the **'FN'** system parameter may override the **'FL'** setting.

##  Default

**_Off_** \- Filenames are passed in original case.

##  See Also

[**'FN' Filename As Is: No Case Conversion**](fn.md)  
[**'FU' Filename in Uppercase**](fu.md)  
[**FFN( ) Find File Number**](../functions/ffn.md) (for a UNIX example using these parameters for case insensitive searches)
