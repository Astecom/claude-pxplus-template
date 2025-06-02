# Directives 

**DIM** |  **_Define/Use Structured Strings_**  
---|---  
  
##  Format

**DIM** _var_ _$_**: :**_structure$_   
  
**_Where:_**

_var_ _$_ |  String variable containing the string whose structure is being defined  
---|---  
_structure$_ |  A string that defines the format of the structured string  
  
##  Description

Using structured strings allows for the direct manipulation of components within a string. This feature allows the developer to treat a string much like a data structure and then reference the components within the string by name as opposed to by offset.

Structured strings are similar to composite strings in that the full string itself is comprised of multiple component values. However, unlike composite strings, the string itself is not dynamically generated when referenced. Instead, the string remains intact in memory and references to its components merely extract their value from the complete structure. All existing composite string functions and directives (VIS, VIN, VIA and XFA) will work with structured strings.

#### **Note:**  
For **_numeric_** arrays, you can use either **( )** (_parenthesis_) or **[ ]** (_square brackets_) to define arrays or reference elements.  
  
For **_string_** arrays, use **[ ]** (_square brackets_) to avoid confusion with substrings.  
  
All arrays have three subscripts. An array defined as X$[4] has values 0:4 for subscript 1, 0:0 for subscript 2, and 0:0 for subscript 3. However, specifying the unused subscripts is unnecessary.

## Structured String Definition

The **DIM** directive is used to define a structured string in much the same way as composite strings are defined, but instead of using an IOList, the structure is defined using a string similar to other language template definitions.

The format of a structure definition statement is:

> DIM _varname_ _$_**::** "_< definition>"_

**_Where:_**

_varname_ _$_ |  Name of the string variable that will contain the structure  
---|---  
_definition_ |  A string containing comma-separated various field names and definitions  
  
**_Example:_**

> dim CLIENT$::"Name:C(30), Addr:C(30), City:C(15), Owing:N(10)"

This would define an 85-byte structure with four elements. The first 30 being the Name, next 30 Addr, 15 for City, and a 10-character numeric field containing the Owing value.

#### **Note:**  
**[Composite Strings](../PxPlus%20User%20Guide/Language%20Elements/Data%20Types,%20Literals%20and%20Variables/Composite%20Strings.md)** cannot be used as object properties.

## Accessing Elements in the Structure

To access the various elements/fields within a string structure, the '**::** ' operator is used.

**_Example:_**

Using the Client structure above:

|  N$ = Client::Name$ |  _Returns the 'name' element from the string Client$_  
---|---|---  
|  Client::City$ = "Markham" |  _Changes the 'city' element in the structure Client$_  
|  Client::Owing += 3 |  _Adds three to the Owing field in the structure Client$ converting it to/from string format_  
  
Note that the type of variable being referenced is defined on the field/element name not the name of the string structure itself. Even though the values are stored in the string Client$, the $ is omitted prior the **::** operator. String elements that are numeric in nature can be referenced either as a string or as a numeric. Non-numeric data can only be referenced as a string.

##  Field Definition

Each field definition consists of a field name, optional array specification, and a field type/length specification. Some field types do not require a length specification since, by their definition, their length is pre-defined. A **:** (_colon_) is used to separate the field name from its definition.

**Field Type** |  **Length** |  **Description**  
---|---|---  
C |  Required |  Character data  
N |  Required |  Numeric data  
I |  1 to 6 |  Binary value from 1 to 6 bytes in length with a leading sign bit  
U |  1 to 6 |  Unsigned binary value from 1 to 6 in length  
F |  8 |  8 byte IEEE floating point number  
+P |  * |  Operating system pointer  
+Z |  * |  Pointer to a NULL terminated string  
+L |  * |  Signed 'long'  
+I |  * |  Signed 'int'  
+S |  * |  Signed 'short'  
+UL |  * |  Un-signed 'long'  
+UI |  * |  Un-signed 'int'  
+US |  * |  Un-signed 'short'  
+H |  * |  **_(Windows Only)_** HANDLE  
+W |  * |  **_(Windows Only)_** WORD  
+2 |  * |  **_(Windows Only)_** DWORD  
  
If desired, type C, N, I, and U can be immediately followed by a slash and byte swapping indicators. Three-byte swapping indicators are supported:

|  B |  Swap every byte with the following byte in two-byte pairs.  
---|---|---  
|  W |  Swap every two bytes with the following two bytes.  
|  L |  Swap every four bytes with the following four bytes.  
  
If only a slash is given, the byte swapping is done in accordance with the standard internal format on the machine you are running on.

## Length Specifications

The length of a field can be specified within parenthesis as either fixed or variable. To specify a fixed length field, simply place the field length within the parenthesis following the field name.

To specify a variable length field, one that has a delimiter character, provide the maximum expected field length followed by "*=" and then optionally the CHR value for the delimiter character.

**_Example:_**

> (10*=9) would indicate a field whose maximum length is 10, delimited by a CHR(9) or a TAB character.

If no delimiter character is specified, the system will use the default SEP character (or $0A$ if the **'TX'** system parameter is set).

## Special '+' Field Types

A number of special '**+** ' field definitions are provided to allow for the definition of OS specific data types. The size and format of these data types will be determined by the operating system you are running on. In addition, the value contained in the fields will be properly 'byte swapped' such that the fields can be directly used by the operating system, as well as accessed by your application without regard to byte ordering.

The '+P' and '+Z' field types are special as they represent true memory pointers. Accessing these types of elements as a numeric value returns the memory pointer as numeric value. Accessing these types of fields as string returns the data to which they are pointing.

**_Example:_**

> 0010 DIM Struct$::"Path:+Z"  
> 0020 DIM Filename$(256, $00$)  
> 0030 Struct::Path$ = Filename$  
> 0040 A = DLL(, Struct$)  
> 0050 PRINT Struct::Path$

The above example will define a structure (Struct$) that contains a pointer to a null byte terminated string. Line 0030 assigns the address of the variable Filename$ into the pointer Path$ within Struct$. Subsequent referencing of the value in Struct::Path$ will return the string value up to and including the null byte terminator. Struct::Path$ will return the same value as MEM(Filename$).

Much the same logic applies to a '+P' data type; however, when referencing a '+P' field as a string, you **_must_** specify a length, as in Struct::Path$(1, 40).

A null pointer is assumed to have a value of "", and if a pointer is assigned "", its internal value is set to NULL.

Using these '**+** ' field definitions makes it easier to create structures that are compatible with most operating system functions. For instance, the Windows system call to choose a color is passed in a structure as follows:

**The 'C' Structure Definition:** |   
---|---  
typedef struct { |  DWORD lStructSize;  
|  HWND hwndOwner;  
|  HWND hInstance;  
|  COLORREF rgbResult;  
|  COLORREF* lpCustColors;  
|  DWORD Flags;  
|  LPARAM lCustData;  
|  LPCCHOOKPROC lpfnHook;  
|  LPCTSTR lpTemplateName;  
|  } CHOOSECOLOR;  
**Using String Structures Becomes:** |   
DIM ChooseColor$::" |  lStructSize:+2,  
|  hwndOwner:+H,  
|  hInstance:+H,  
|  rgbResult:+2,  
|  lpCustColors:+P,  
|  Flags:+2,  
|  lCustData:+UL,  
|  lpfnHook:+P,  
|  lpTemplateName:+P"  
  
## Comment Information

You can provide a comment and/or descriptive information following any field description by enclosing it in colons. These comments can be accessed via the **[XFA](../functions/xfa.md)** function.

##  Standard Structures

A number of built-in standard structures are provided with the system. They are identified with a "**+** " in the first position of the structure and can be used in conjunction with accessing some of the internal structures in PxPlus.

The built-in structures are:

**+MSE** |  Status:I(1), Column:U(1), Line:U(1), XPos:I(2), YPos:I(2), AbsCol:U(1), AbsRow:U(1), XChsz:U(1), YChsz:U(1), XSbar:U(1), YSbar:U(1), XRel:I(2), YRel:I(2), CtlFocus:I(2), LastFocus:I(2), WdxVer:U(1), CtlHelp:I(2), LastLostFocus:I(2), xMax:U(2), yMax:U(2), ShowSts:I(1), ClientType:C(1)  
---|---  
**+OBJ** |  Type:I(2), State:I(2), Column:I(2), Line:I(2), Width:I(2), Height:I(2), Attrib:I(4), Handle:I(4), Left:I(2), Top:I(2), Right:I(2), Bottom:I(2), LeftView:I(2), TopView:I(2), WidthView:I(2), HeightView:I(2)  
**+CHN** |  Fileno[500]:I(2)  
**+FIB** |  Numrec:I(3), Path1to6:C(6), BinType:I(1), ExtKsz:I(1), Maxrec:I(3), Rsz:I(2), Flags:I(1), Invpct:I(1), Type:C(1), Fhdl:I(1), Attrib:C(1), TextColor:U(1), BackColor:U(1), RFU:C(1), Pathname:C(60), Extdef:C(1000*=)  
**+ExtDefDev** |  Column:I(1), Line:I(1), MaxColumn:I(1), MaxLine:I(1), DevWdw[10]:C(11), DevType:C(255*=)  
**+DevWdw** |  WindowNo:I(1), Column:I(1), Line:I(1), Width:I(1), Height:I(1), ScrollColumn:I(1), ScrollLine:I(1), ScrollWidth:I(1), ScrollHeight:I(1)  
  
To use a pre-defined structure, simply enter its name as the DIM structure definition:

> dim X$::"+MSE"  
>  X$=mse  
>  print X::XPos ! Get the X position for the mouse

The actual definitions are maintained in the file "*plus/plusdim.txt".
