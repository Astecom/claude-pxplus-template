# Directives

**DIM CLASS** |  **_Set an Elements Type-Flag_**  
---|---  
  
## Format

**DIM CLASS**  _array$_ [ _strName_ _$_ ] = _strval_ _$_

**_Where:_**

_array$_ |  String array whose element you want to change  
---|---  
_strName_ _$_ |  String expression or literal containing the index of the element to change  
_strval_ _$_ |  String expression that must contain the value "N" (for Numeric) or "S" (for String)

#### **Note:**  
The system only checks the first character, and either uppercase or lowercase values are accepted. Any value other than "N" or "S" will result in an Error #26: Variable type invalid.  
  
## Description

While the type-flags for each element will be set automatically when the array is loaded from either JSON or IOLIST, you can change the type-flag using the **DIM CLASS** directive. If the element does not exist, it will be created dynamically.

_(The DIM CLASS directive was added in PxPlus 2016.)_

## See Also

**[DIM Define Arrays and Strings](dim.md)**
