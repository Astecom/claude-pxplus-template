# System Parameters

**'FU'** |  **_Filename in Uppercase_**  
---|---  
  
#### **Important Note:**  
The **'FU'** system parameter is included for compatibility purposes only and **_should not be used_**.  
  
To avoid potential issues, it is **_strongly recommended_** to use the **'FL'** system parameter instead.

##  Description

When the **'FU'** parameter is enabled ** _(On)_** , the system will convert all filenames to **_uppercase_** before passing them to the operating system file system. This conversion **_does not_** occur on filenames that specify full pathnames to files.

#### **Note:**  
When the **'FU'** parameter is set to **_On_** , **'FL'** is turned off automatically. In addition, the **'FN'** system parameter may override the **'FU'** setting.

##  Default

**_Off_** \- Filenames are passed in original case.

##  See Also

[**'FL' Filename in Lowercase**](fl.md)  
[**'FN' Filename As Is: No Case Conversion**](fn.md)  
[**FFN( ) Find File Number**](../functions/ffn.md) (for a UNIX example using these parameters for case insensitive searches)
