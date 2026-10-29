# Utilities

***TOOLS/DOTNETCONVERT** |  **_.NET Conversion Utilities_**  
---|---  
  
## Description

Convert a PxPlus array to a .NET array, or a .NET array to a PxPlus array.

_(The DotNetConvert utility was added in PxPlus 2026.)_

## Format 1

**_Convert a PxPlus Array to a .NET Array_**

**CALL "*tools/dotnetconvert;toarray"**, _pxpArray$_**{ALL}** , _dotNetArray_

**_Where:_**  
---  
  |  _pxpArray$_**{ALL}** |  PxPlus array of numbers or strings to convert.  
  |  _dotNetArray_ |  Numeric variable to hold handle to new .NET array object.  
  
**_Example:_**

Convert a PxPlus array to a .NET array and use it to set a textbox:

          def object textbox,@(10,10,50,50),"[.net]System.Windows.Forms,System.Windows.Forms.TextBox"  
          textbox'multiline=1  
          dim strArray$[2]  
          strArray$[0]="aaa"  
          strArray$[1]="bbb"  
          strArray$[2]="ccc"  
          call "*tools/dotnetconvert;toarray",strArray${ALL},dotNetArray  
          textbox'lines$=dotNetArray'pvxhandle$

## Format 2

**_Convert a .NET Array to a PxPlus Array_**

**CALL "*tools/dotnetconvert;fromarray"**, _dotNetArray_ , _pxpArray_**[** $**]{ALL}**

**_Where:_**  
---  
  |  _dotNetArray_ |  Handle to a .NET array object to convert.  
  |  _pxpArray_**[** $**]{ALL}** |  PxPlus array of numbers or strings to receive output.  
  
**_Example:_**

Convert a .NET string array of month names to a PxPlus string array:

          def object dtInfo,"[.net]System.Runtime,System.Globalization.DateTimeFormatInfo"  
          call "*tools/dotnetconvert;fromarray",dtInfo'MonthNames,myarray${ALL}

## See Also

**[.NET Interface](../Dot%20Net%20Interface.md)**  
**[How To Tutorials (for .NET Interface)](../How%20To/Dot%20NET%20Tutorials%20Intro.md)  
[DEF OBJECT Define Windows Object](../directives/def_object.md)**

 

 

 
