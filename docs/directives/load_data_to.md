# Directives

**LOAD DATA TO** |  **_Load an Array from Variables or an IOLIST_**  
---|---  
  
## Format

**LOAD DATA TO**  _strarray_ _$_ [, **IOL=**  _iolist_ ] [, **REC=**  _recpfx_ _$_ ]

**_Where:_**

_strarray_ |  String associative array.  
---|---  
_iolist_ |  IOLIST being referenced.  
_recpfx_ _$_ |  Variable name.  
  
## Description

This directive loads the array from the variables whose names match those of the array indices based on each element's type-flag. For example, if the array contained an element whose index was "custid", **LOAD DATA TO** would replace that array's element with the contents of the variable CUSTID$. If the type-flag of the element indicates the value was numeric, then that element would be loaded with the STR( ) equivalent value from the variable CUSTID.

If an IOList is specified, instead of using the index names of elements already existing in the array, the variables listed in the IOList will be loaded into the array with new element being created as needed. String variable names will have their trailing $ stripped. All variable names will be converted to lowercase and used as the array index.

All values loaded into the array will become strings. Values converted from a numeric variable will be flagged as numeric in the array. The existing array will not be pre-cleared, and any existing data with the same indices will be overwritten and their associated type-flag replaced.

If a _recpfx_ _$_ is specified, then the actual variables references will have their names prefixed with the _recpfx_ _$_ variable name. For example, if REC=CST$ was specified, the element "custid" would be loaded from CST.CUSTID$.

_(The LOAD DATA TO directive was added in PxPlus 2016.)_

## See Also

**[LOAD DATA FROM Load Variables from Array](load_data_from.md)**
