# Directives

**LOAD DATA FROM** |  **_Load Variables from Array_**  
---|---  
  
## Format

**LOAD DATA FROM**  _strarray_ _$_ [, **IOL=**  _iolist_ ] [, **REC=**  _recpfx_ _$_ ]

**_Where:_**

_strarray_ |  String associative array.  
---|---  
_iolist_ |  IOLIST being referenced.  
_recpfx_ _$_ |  Variable name.  
  
## Description

This directive takes data from the array and loads it into (or creates) variables whose names match those of the array indices based on each element's type-flag. For example, if the array contained an element whose index was "custid", **LOAD DATA FROM** would load that array's element value into the variable CUSTID$. If the type-flag of the element indicates the value was numeric, then CUSTID would be loaded with the numeric value of the "custid" element.

If an IOList is specified, instead of using the index names of elements already existing in the array, the variables listed in the IOList will be loaded from the array with the corresponding name (or set to NULL or 0 if not in the array). All values will become their respective format based of the type-flag.

If a _recpfx_ _$_ is specified, then the actual variables references will have their names prefixed with the _recpfx_ _$_ variable name. For example, if REC=CST$ was specified, the element "custid" would be loaded into CST.CUSTID$.

_(The LOAD DATA FROM directive was added in PxPlus 2016.)_

## See Also

**[LOAD DATA TO Load an Array from Variables or an IOLIST](load_data_to.md)**
