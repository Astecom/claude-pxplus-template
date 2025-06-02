# PxPlus COM Support

**Extended Objects** |  **__**  
---|---  
  
Extended objects complete the COM functionality and provide a mechanism for future enhancements. These pseudo objects are instantiated in the same way as all other COM objects within PxPlus, except for the fact that an *****_asterisk_ must preface the object name.

**_Example:_**

> **DEF OBJECT "*{_extended_** _name_**}"**

It should be noted that while these objects appear identical to other COM objects, they are not COM-based in nature. This means that extended objects: do not expose events, do not expose controls, cannot have member information "described", and cannot be made global to other processes.

#### **Note:**  
The***FOREACH** ,***RECORD** and***CONSTANTS** object types are not able to be directly created. These object types are returned (respectively) as results from **[PVXFOREACH](Extended%20Properties%20and%20Methods.htm#pvxforeach)**, **[PVXALLOCRECORD](Extended%20Properties%20and%20Methods.htm#pvxallocrecord)** and **[PVXCONSTANTS](Extended%20Properties%20and%20Methods.htm#pvxconstants)**.

The currently supported (internal) extended objects are listed below:

**[*CONSTANTS](Extended%20Objects.htm#constants)** |  Provides a mechanism for exposing all enumerated constant values from an object's type library.  
---|---  
**[*ERROR](Extended%20Objects.htm#error)** |  Wrapper export for last error information.  
**[*FOREACH](Extended%20Objects.htm#foreach)** |  Wrapper around an IEnumVariant interface, which is more commonly referred to as a "collection". PxPlus allows this wrapper to be created on both collection objects, as well as single dimension COM SafeArrays. Provides a means of iterating data without regards to the lower or upper bounds of the container.  
**[*GLOBAL](Extended%20Objects.htm#global)** |  Provides an enumerator for the system-wide list of objects exposed using PvxMakeGlobal.  
**[*MASTER](Extended%20Objects.htm#master)** |  Serves as a system object for the interop layer. Provides object iteration capabilities, version information, etc.  
**[*PROXY](Extended%20Objects.htm#proxy)** |  Allows the developer to expose instantiated PxPlus objects directly to the COM world.  
**[*RECORD](Extended%20Objects.htm#record)** |  Wrapper around an IRecordInfo interface, which is also referred to as a COM user-defined type (record structure).  
**[*VARARRAY](Extended%20Objects.htm#vararray)** |  Wrapper around an OLE safe array of variants. Provides a mechanism for COM array data handling.  
**[*VARIANT](Extended%20Objects.htm#variant)** |  Wrapper around an OLE variant data type. Provides a means for passing data by reference, as well as converting data from a PxPlus type to Automation types.  
  
Each of these extended objects is described in detail below.

##  *CONSTANTS

The goal of the ***CONSTANTS** object is to expose all the enumerated constant values from an object's type library. For example, Microsoft Word exposes over 1100 constants from its type library. Attempting to use any of these values would require the developer to research the type library to locate the constant name in order to find its associated value. The developer would then be forced to code these constants into his/her program to use them.

Using the ***CONSTANTS** object provides the following benefits:

  * Coding effort is reduced, as a single constants object contains all constant values from a type library.
  * The developer can refer to the constant values by name, which makes transposing code (e.g. from VB, etc.) a much simpler task.



The following belongs to the***CONSTANTS** object:

**{CONSTANTNAME}** |  **_Read-Only Property._** All constant names from a type library are exposed as read-only properties. The return type for each constant value will be an integer.  
---|---  
  
The following example demonstrates how to acquire an instance of a constants object and then utilize a constant value in code.

> 0010 DEF OBJECT WORD, "Word.Application;Finalize=Quit"   
>  0020 LET WORD'VISIBLE = 1   
>  0030 LET WORDCONSTS = WORD'PVXCONSTANTS   
>  0040 LET KEYCODE = WORD'BUILDKEYCODE(WORDCONSTS'WDKEYALT, WORDCONSTS'WDKEYF1)   
>  0050 WORDCONSTS'PVXFREE()   
>  0060 ESCAPE   
>  0070 DELETE OBJECT WORD

#### **Note:**  
As of PxPlus 2017, an **[Excel Object](Excel%20Object.md)** and a **[Word Object](Word%20Object.md)** were created to simplify the use of the Excel.Application and Word.Application extended objects.

##  *ERROR

This static table is exposed as another internal object. It can be**DEF'ed** after an error has occurred and will still contain the last error information. One note in regards to this class: While multiple instances can be created, they all point to the same data block; i.e. clearing one***ERROR** object will in effect clear all other instances.

The following members belong to the***ERROR** object:

**CLEAR( )** |  **_(Method Call)_** Clears the last error information.  
---|---  
**CODE(**_number_**)** |  **_(Method Call)_** Returns the OLE code for the passed number, which is treated as an HRESULT to evaluate. If no parameter is passed, the code for the**OLEERROR** property is returned.  
**DESCRIPTION$** |  **_(Read-Only Property)_** Contents depends on if the last error was DISP_E_EXCEPTION or not. If so, it returns the object-defined message. If not, it returns the string representation of the OLE HRESULT based on the**OLEERROR** property.  
**FACILITY(**_number_**)** |  **_(Method Call)_** Returns the OLE facility for the passed number, which is treated as an HRESULT to evaluate. If no parameter is passed, the facility for the**OLEERROR** property is returned.  
**HELPCONTEXT** |  **_(Read-Only Property)_** If last error code was DISP_E_EXCEPTION, then this property will return the associated help context number, if available.  
**HELPFILE$** |  **_(Read-Only Property)_** If the last error code was DISP_E_EXCEPTION , then this property will return the associated help file name, if available.  
**NUMBER** |  **_(Read-Only/Default Property)_** Returns last object code set for a dispatch call that failed with DISP_E_EXCEPTION.  
**OLEERROR** |  **_(Read-Only Property)_** Returns the last OLE HRESULT code that was raised.  
**SEVERITY(**_number_**)** |  **_(Method Call)_** Returns the OLE severity for the passed number, which is treated as an HRESULT to evaluate. If no parameter is passed, the severity for the**OLEERROR** property is returned.  
**SOURCE$** |  **_(Read-Only Property)_** If the last error code was DISP_E_EXCEPTION, this property will return a textual, human-readable name of the source of the exception, if available.  
  
##  *FOREACH

When dealing with collections, one of the biggest pitfalls is determining if the collection index is zero or one based. To aid the developer, an enumerator object of***FOREACH** is made available from all collection objects (that expose the IEnumVariant interface).

To access this object, the**PVXFOREACH** property must be queried:

> FOREACHOBJ=OBJECT'PVXFOREACH

Once returned, the ***FOREACH** object can be used to access each element in the collection. In addition to collections, the interop layer also allows the developer to obtain a ***FOREACH** object from an instance of a ***VARARRAY** object, providing the underlying COM SafeArray only contains a single dimension.

#### **Note:**  
A***FOREACH** object obtained from an array becomes a snapshot of the original array. Any changes to the original array will not be reflected during enumeration.

The following members belong to the ***FOREACH** object:

**DATA[$]** |  **_(Read Only/Default Property)_** Returns the item data that was returned from a call to **NEXT( )**. The actual data type depends on the collection or array item being enumerated.  
---|---  
**NEXT( )** |  **_(Method Call)_** This method reads the next available collection or array item into the **DATA** property and returns _true_ on success. If no further items exist, _false_ will be returned. This method must be called (and return success) before accessing the **DATA** property.  
**RESET( )** |  **_(Method Call)_** Resets the "for each" enumerator and clears the **DATA** property. This allows item enumeration to start from the first item. Only required if a second (or more) iteration is desired.  
  
**_Example:_**

The following example demonstrates how to acquire an instance of a ***FOREACH** object and then enumerate all items in a collection:

> 0010 DEF OBJECT WMI, "[GetObject]winmgmts:\\\\.\root\cimv2"   
>  0020 LET ITEMS = WMI'EXECQUERY("Select * from WIN32_NetworkAdapterConfiguration where IPEnabled = True")   
>  0030 LET ITER = ITEMS'PVXFOREACH   
>  0040 WHILE ITER'NEXT()   
>  0050 PRINT ITER'DATA'PROPERTIES_("MACAddress")'VALUE$   
>  0060 LET IPITER = ITER'DATA'PROPERTIES_("IPAddress")'VALUE'PVXFOREACH   
>  0070 WHILE IPITER'NEXT()   
>  0080 PRINT IPITER'DATA$   
>  0090 WEND   
>  0100 IPITER'PVXFREE()   
>  0110 WEND   
>  0120 ITER'PVXFREE()   
>  0130 ESCAPE   
>  0140 DELETE OBJECT WMI

##  *GLOBAL

The purpose of the***GLOBAL** object is to provide an enumerator for the system-wide list of objects exposed using PvxMakeGlobal. With this enumerator, a developer can quickly determine the available global objects and can bind to any object within this list.

The following members belong to the ***GLOBAL** object:

**BINDTO**(_index/name$_) |  **_(Method Call)_** Returns a reference to the global object specified by either name or index of item in the global list.  
---|---  
**COUNT** |  **_(Read-Only Property)_** Returns the count of objects in the system-wide list.  
**ITEM$**(_index_) |  **_(Method Call)_** Returns the name of the global object at the specified index.

#### **Note:**  
**ITEM$** should be treated as a zero-based array.  
  
**REFRESH( )** |  **_(Method Call)_** Rfreshes the system-wide list of global objects.  
  
##  *MASTER

The ***MASTER** object provides direct access to the object list maintained by the interop layer, as well as any future global settings that may be introduced. With this access, a developer can quickly determine the number of objects in use, which is essential when tracking down code that may not be handling sub-object references properly.

The following members belong to the***MASTER** object:

**CALLCOUNT** |  **_(Read-Only Property)_** Returns the number of command call executions since the interop library was initialized.  
---|---  
**COUNT** |  **_(Read-Only Property)_** Returns the number of objects being managed by the interop layer (includes the master object in this count).  
**ITEM(**_index_**)** |  **_(Method Call)_** Returns the interop handle for the object at the specified _index_. See **[PVXID](Extended%20Properties%20and%20Methods.htm#pvxid)**.

#### **Note:**  
**ITEM** should be treated as a zero-based array.  
  
**LISTPVXMETHODS** |  **_(Read/Write Property)_** Determines if the internal PVX methods should be listed when the**'*** property of an object is queried. Defaults to true (-1).  
**VERSION$** |  **_(Read-Only Property)_** Returns the file version number for the interop library PVXOCX32.  
  
##  *PROXY

The ***PROXY** object allows the developer to expose instantiated PxPlus objects directly to the COM world. A good example of this would be to a hosted scripting language. To use the proxy, a binding to a PxPlus object must first be established. This is done using the**ON EVENT FROM** syntax:

**_Example:_**

> 0010 oCol = NEW("*obj/Collection")   
>  0020 DEF OBJECT colProxy, "*PROXY"   
>  0030 ON EVENT FROM colProxy PROCESS oCol 

#### **Note:**  
The * **PROXY** object is not intended to be used directly from PxPlus, as it is only a translation layer for the COM to PxPlus method calls. Because of this, issuing a**'*** against the proxy will only return the PVX prefixed internal method names. Once the binding has been done, the proxy wrapper may be passed to a COM object using the standard***** notation for objects.

The following members belong to the***PROXY** object:

**ASOBJECT(**_objid_**)** |  **_(Method Call)_** Allows the COM client to wrap a (PxPlus) object handle. If the _objid_ represents a valid PxPlus object handle, an internal proxy wrapper will be created and the dispatch interface will be returned.  
---|---  
**INVOKE(**_name, flag_ [, _parameters_ ]**)** |  **_(Method Call)_** Executes the property or method name specified by the _name_ parameter.  
  
The _flag_ value must be one of the following: **1** (property get), **2** (property set) or **3** (method call). Any _parameters_ that should be passed to the PxPlus object will then follow.   
  
This method is provided to handle overload situations where it can be unclear which property or method should be called:  
  
PROPERTY TEST   
PROPERTY TEST$   
FUNCTION TEST( )   
FUNCTION TEST$( )   
  
Would translate to the following Invoke calls:   
  
.Invoke("TEST", 1)   
.Invoke("TEST$", 1)   
.Invoke("TEST", 3)   
.Invoke("TEST$", 3)  
**EVALUATE(**_statement_**)** |  **_(Method Call)_** Passes the statement string parameter to the PxPlus interpreter for evaluation.  
**EXECUTE(**_statement_**)** |  **_(Method Call)_** Passes the statement string parameter to the PxPlus interpreter for execution.  
  
##  *RECORD

COM user-defined types (UDT) or records are handled using this object type. A record object may be returned as a result of a method or property call, or can be directly created using the **[PVXALLOCRECORD](Extended%20Properties%20and%20Methods.htm#pvxallocrecord)** method. Each field in the record will be handled as a read/write property and will be displayed when the**'*** listing is queried.

The following is a predefined member in the record object:

**PASSBYREF** |  **_Read/Write/Default Property._** Determines if the IRecordInfo interface will be passed by reference. Setting the property to zero indicates false, any other value indicates true. The default setting for this property is true.  
---|---  
  
##  *VARIANT

Being a wrapper around an OLE variant, this object can store any data type, including other objects. It also provides a means for converting data in place and handling data types that are not directly supported by PxPlus. Its primary purpose is for method calls that expect data to be passed ** _by reference_** , but it is also useful when a COM object will only handle data of a specific type.

The following members belong to the***VARIANT** object:

**ADD(**_data_ [$]**)** |  **_(Method Call)_** Adds the value of the data parameter to the currently held variant data. Logical use is for building strings greater than 32K in length but can be used to add numbers, etc. Calling this method will perform an implicit conversion to the data type of the passed parameter.  
---|---  
**ADDB(**_data_ [$]**)** |  **_(Method Call)_** Adds the string data parameter to the currently held variant string data. No conversion to Unicode is performed. Requires the passed data parameter to be a either a string or a variant object that contains a string. Also requires the current data to be a string type.  
**CLEAR( )** |  **_(Method Call)_** Clears the contents of the variant. After the**CLEAR** finishes, the data type for the variant will be set to E(_mpty_). If the variant contained an object or array reference, the object will be released.  
**EXPLICITBYREF** |  **_(Read/Write Property)_** Determines how the variant will be passed if**PASSBYREF** is set to true. When this property is set to false (zero), a pointer to the variant will be passed to the COM method. When set to true (non-zero), a pointer to the actual data will be passed. The default setting for this property is false.  
**LEN** |  **_(Read-Only Property)_** Returns the length of the data held by the variant. Logical use is primarily for string data.  
**LENB** |  **_(Read-Only Property)_** Returns the length of the data held by the variant. This is identical to the**LEN** property except when the variant contains string data. For strings, the actual byte count is returned, which is not the same as the character count when dealing with Unicode strings.  
**PASSBYREF** |  **_(Read/Write Property)_** Determines if the variant will be passed by reference. Setting the property to zero indicates false; any other value indicates true. The default setting for this property is true. See **EXPLICITBYREF** above.  
**TYPE$** |  **_(Read/Write Property)_** Returns the data type for the data being held in the variant. When set, will attempt to convert the data to the requested data type. An error will occur if the conversion fails. Valid types are: |  **A** |  Array data type (not settable) |  **M** |  Currency data type  
---|---|---|---  
**B** |  Boolean data type |  **N** |  16-bit Integer data type  
**C** |  Byte data type |  **O** |  Object data type  
**D** |  Date data type |  **R** |  Double data type  
**E** |  Empty data type |  **S** |  String data type  
**F** |  Single data type |  **X** |  Record data type  
**I** |  32-bit Integer data type |  **Z** |  Null data type (value)  
**L** |  Decimal data type |  |   
| | | |   
**VAL[$]** |  **_(Read/Write Property)_** Used to get/set the data held by the variant. It should be noted that setting the data may cause an implicit conversion. For example, if the current data type is B, setting the **VAL** property to 0 will cause a conversion to data type I. When assigning an object to the**VAL** property, the following notation must be used:_object'_**VAL.PUT(***_otherobject_**)**.  
**VALB[$]** |  **_(Read/Write Property)_** Used to get/set the string data held by the variant. The difference between this property and the **VAL** property is that the data is assigned "as is". No conversion from Unicode to ANSI is performed on the data.   
  
**_Example:_**

The following example helps to illustrate the difference between the default string handling versus byte handling properties and methods:

> 0010 DEF OBJECT V, "*VARIANT"   
>  0020 LET V'VAL$ = "Hello World"   
>  0030 PRINT V'LEN, ",", V'LENB$   
>  0040 PRINT V'VAL$   
>  0050 PRINT V'VALB$   
>  0060 ESCAPE   
>  0070 DELETE OBJECT V

If an object's documentation indicates that a parameter for a method call is "by reference", then ***VARIANT** must be used. The ***VARIANT** object is always passed "by reference" to the object, thus allowing the developer to retrieve the new value after method execution.

> 0010 DEF OBJECT V, "*VARIANT"   
>  0020 DEF OBJECT X, "MSScriptControl.ScriptControl"   
>  0030 V'VAL=10   
>  0040 Z=X'RUN("MySub", *V)   
>  0050 ! Pretend that the object X has set the data for V to "Hello World"   
>  0060 ?V'VAL$ ! Will print "Hello World"

The data for V was set to 10 and then passed as a parameter to the object's method call. Because it was passed "by reference", the method call can change the data to anything or any type it wishes. If you are unsure of the data type returned in the ***VARIANT** object, then check the **'TYPE$** property.

##  *VARARRAY

Instances of this object type are used to facilitate methods that either accept or return COM arrays. What distinguishes this object from PxPlus arrays is the fact that each element can accept data of any type. For example, **_element 1_** may hold a string value, **_element 2_** an object, **_element 3_** an integer, etc. It should also be noted that this object is always passed by reference. The ***VARARRAY** wrapper is also able to return a ***FOREACH** enumerator when the COM array contains a single dimension.

When an array is assigned to a ***VARIANT,** it is important to remember that the ***VARIANT** will end up with a copy of the array, not the actual array itself. Any changes, even releasing the array, will not affect the array held by the ***VARIANT**.

The following is a list of members in the Variant array object:

**ARRAYTYPE$** |  **_(Read-Only Property)_** Returns the array type. Valid types are: |  **B** |  Boolean data type |  **M** |  Currency data type  
---|---|---|---  
**C** |  Byte data type |  **N** |  16-bit Integer data type  
**D** |  Date data type |  **O** |  Object data type  
**F** |  Single data type |  **R** |  Double data type  
**L** |  Decimal data type |  **S** |  String data type  
**I** |  32-bit Integer data type |  **V** |  Variant data type  
**CLEAR(**_index_**[,**_index_**])** |  **_(Method Call)_** Clears the data being held in the variant array element. It is legal to call this method without passing in the element index, in which case the index will default to zero. After the clear completes, the element data type is set to **E(**_mpty_).  
**COPY** |  **_(Read-Only Property)_** Returns a variant array object that contains an exact copy of the contents of the current variant array.  
**CREATE(**_elements_**[,**_elements_**])** |  **_(Method Call)_** Initializes the variant array to the dimension count and element count for each dimension. This method must be passed at least one element count (to create a single dimensioned array) and can accept a maximum of 20 element counts.   
  
**_Example:_** 10 ! Create 1 dim array with 10 elements   
20 OBJECT'CREATE(10)   
30 ! Create 2 dim array   
40 OBJECT'CREATE(10, 100)   
  
Either this method or **CREATEVECTOR** must first be called before attempting to access data. Calling**CREATE** multiple times is also allowed but will clear any existing data.  
**CREATEBYTEARRAY (**_data_ [_$_]**)** |  **_(Method Call)_** Requires the passed data parameter to be a either a string or a variant object that contains a string. Initializes the array as a single dimension array of byte (ArrayType = "C"), with the element count of the array equal to the length of the data string. For string data, a conversion to Unicode is performed, resulting in an element count that is 2x the length of the string. If byte handling is desired then, a***VARIANT** object should be used.   
  
**_Example:_** 10 DEF OBJECT V, "*VARIANT"   
20 DEF OBJECT A, "*VARARRAY"   
30 V'VALB$="Hello world"   
40 A'CREATEBYTEARRAY(*V)  
**CREATEEX(**_type$, elements_**[,**_elements_**])** |  **_(Method Call)_** Initializes an array of the type specified by _type$,_ where _type$_ is one of the valid characters from**ARRAYTYPE$**. See **ARRAYTYPE$** above.  
  
The number of dimensions is determined by the count of passed elements. Each element parameter determines the element count for the dimension. This method must be passed at least one element count (to create a single dimensioned array) and can accept a maximum of 19 element counts.  
**CREATEVECTOR(**_data_**[,**_data_**])** |  **_(Method Call)_** Initializes the array as a single dimension variant array with the element count equal to the number of parameters passed in. Each element in the array will be assigned the contents of the corresponding _data_ parameter.  
**_  
Example:_** OBJECT'CREATEVECTOR("John", "Smith", 31, 150.3)  
  
Creates a single dimension array with an**LBOUND** of zero, a**UBOUND** of 3, and element data types of: [0] = "S", [1] = "S", [2] = "I", [3] = "R".  
  
Calling**CREATEVECTOR** multiple times is allowed but will clear any existing data.  
**DIMENSIONS** |  **_(Read-Only Property)_** Returns the number of dimensions in the variant array.  
**GETDATA[$](**_index_**[,**_index_**])** |  **_(Method Call)_** Returns the data being held in the variant array element. It is legal to call this method without passing in the element index, in which case the index will default to zero.  
**GETDATAEX(**_index_**[,**_index_**])** |  **_(Method Call)_** Returns the data being held in the variant array element as a variant object. It is legal to call this method without passing in the element index, in which case the index will default to zero.  
**LBOUND(**_dimension_**)** |  **_(Method Call)_** Returns the lower boundary for the dimension in the array. Note that this will always be zero for a valid dimension. When passing _dimension,_ the value should be an integer between 1 and the number of valid dimensions; otherwise, an error occurs.  
**OLEARRAY** |  **_(Read-Only Property)_** Returns a variant array copy of the current array. If the current**ARRAYTYPE$** property is "V", then no conversion is required.  
**PASSBYREF** |  **_(Read/Write Property)_** Determines if the array will be passed by reference. Setting the property to zero indicates false, any other value indicates true. The default setting for this property is true.  
**SETDATA(**_index_**[,**_index_**],**_data_**[$])** |  **_(Method Call)_** Assigns the contents of data to the variant array element. It is legal to call this method without passing in the element _index,_ in which case the _index_ will default to zero. For variant arrays, the _data_ parameter can be any valid data type, including variant and variant array objects. For all other arrays, the _data_ parameter must be convertible to the array type.  
**TYPE$(**_index_**[,**_index_**])** |  **_(Method Call)_** Returns the data type for the data being held in the variant array element. It is legal to call this method without passing in the element index, in which case the index will default to zero.  
  
**_Example:_** The following is identical for a two-dimension array:   
  
T$=OBJECT'TYPE$()   
T$=OBJECT'TYPE$(0, 0)   
  
Unlike the variant object though, the**TYPE** property is read only. If conversion of a data type is required, then the use of a variant object is mandatory. See **[*VARIANT](Extended%20Objects.htm#variant)** above.  
**UBOUND(**_dimension_**)** |  **_(Method Call)_** Returns the upper boundary for the dimension in the array. This will be one number less than the total count of elements in the dimension: **_Example:_**  
**  
0 ...**_Element_Count_**-1**  
  
**_Example:_**

The following is an example of initializing an array using all the valid array types:

> 0010 ! Set array types to create   
>  0020 DEF OBJECT A, "*VARARRAY"   
>  0030 LET TYPES$ = "VBCMDRNIOFS"   
>  0040 FOR I = 1 TO LEN(TYPES$)   
>  0050 A'CREATEEX(TYPES$(I,1),10)   
>  0060 PRINT "ARRAY TYPE:", A'ARRAYTYPE$   
>  0070 PRINT "ARRAY DIMENSIONS:", A'DIMENSIONS   
>  0080 PRINT "ARRAY LBOUND:", A'LBOUND(1)   
>  0090 PRINT "ARRAY UBOUND:", A'UBOUND(1)   
>  0100 FOR X = A'LBOUND(1) TO A'UBOUND(1)   
>  0110 PRINT A'GETDATA$(X)   
>  0120 NEXT X   
>  0130 ESCAPE   
>  0140 NEXT I 
