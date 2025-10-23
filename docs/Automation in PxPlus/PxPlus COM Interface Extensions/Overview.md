# Automation in PxPlus

**PxPlus COM Interface Extensions** |  **__**  
---|---  
  
##  Extended Properties and Methods

During the development of the PxPlus COM interface, it was realized that developers may require information and helper functions that are not exposed by all COM objects, such as the container window handle, or the internal COM object class name, etc. To accommodate this, a set of properties and methods were created for access by all COM objects instantiated in PxPlus. The DLL handles the execution of these internally, but to the developer, they function identically to the other COM properties and methods of the object

The following is a list of additional COM members that are available for use with PxPlus:

**PVXERROR[$]** |  **_Read-Only Property._** Returns the last error code or message (depending on $ suffix) that occurred when accessing a property or method of the object.  
---|---  
**PVXEVENTS[$]** |  **_Read-Only Property._** Returns the PxPlus class object that is handling events or returns a list of events names (depending on **$** suffix) for the object.  
**PVXHEIGHT** |  **_Read/Write Property._** Used to set the height, in pixels, of an ActiveX or OLE control. If the object is not a control, then setting this property has no effect.  
**PVXLEFT** |  **_Read/Write Property._** Used to set the left border, in pixels, of an ActiveX or OLE control. If the object is not a control, then setting this property has no effect.  
**PVXTOP** |  **_Read/Write Property._** Used to set the top border, in pixels, of an ActiveX or OLE control. If the object is not a control, then setting this property has no effect.  
**PVXWIDTH** |  **_Read/Write Property._** Used to set the width, in pixels, of an ActiveX or OLE control. If the object is not a control, then setting this property has no effect.  
**PVXNAME** |  **_Read-Only Property._** Returns the string used to create the instance of the object. For sub-objects, the string also includes the property/method names.  
**PVXHANDLE** |  **_Read-Only Property._** Returns the window handle for the container window that is hosting the ActiveX or OLE control. If the object is not a control, a zero will be returned.  
**PVXMODE** |  **_Read/Write Property._** For controls that differentiate between development and run-time mode, this is used to set the "user mode" state. Setting this to zero will place the control in development mode; any other value will place it into run-time mode. If the object is not an OLE control, then setting this property has no effect.  
**PVXALIAS(**_member$_**,**_user$_**)** |  **_Method Call._** This method takes two string parameters. The first parameter, _member$ ,_ indicates the actual COM member name to alias. The second parameter, _user$,_ is the user-defined alias name to use. Upon success, the object can be accessed using the alias name in place of the actual name.  
  
**_Example:_**  
  
If an object had a property called DAY, an Error 20 would occur when attempting to access it (PxPlus name collision).  
  
To correct this:   
Z = OBJECT'PVXALIAS("DAY", "_DAY")   
A$ = OBJECT'_DAY$  
**PVXID** |  **_Read-Only Property._** This property returns the interop handle to the object. It can be assigned to another integer variable, which can then be used in a **DEF OBJECT** statement. This is useful for situations in WindX where the PxPlus local variable goes out of scope.  
**PVXFREE(["**_children_**"])** |  **_Method Call._** This method will release the instance of the object. This is useful for sub-objects, when **DEF OBJECT** has not been called. This method will also accept one optional string parameter, which if passed, should be set to " _children_ ". This will cause all the children of the object to be released, but will not release the object itself. Any other setting will cause the object to be released.  
**PVXEXTDATA[$]** |  **_Read-Only Property._** This property provides buffering for returned string data that exceeds 32K. If a result returns more than 32K of data, the first 32K bytes will be returned, and the remaining data can be accessed via this property. The numeric value is the amount of data remaining in the buffer; the string value is the next 32000 bytes, or whatever is remaining.  
**PVXPARENT** |  **_Read-Only Property._** Returns the parent handle (interop id, also see **[PVXID](Overview.htm#pvxid)** above) for the object, or zero if the object is top level.  
**PVXTYPELIB$** |  **_Read-Only Property._** Returns the file name that exposes type information for the object. (Type information must be available.)  
**PVXMAKEGLOBAL(**_global$_**)** |  **_Method Call._** This method accepts one string parameter, which is the name to make "global". If successful, another PxPlus session can access this object though a **DEF OBJECT** statement using the **"[global]"** parameter. This allows a PxPlus session to expose objects to other sessions in a server-like fashion.  
**PVXLICENSE$** |  **_Read-Only Property._** Returns a hexadecimal string for objects that utilize license keys (providing the key is available). This string can then be used in a **DEF OBJECT** statement, which will allow the code to create an instance of the object without the key being available (run-time client sites).  
**PVXISA$** |  **_Read-Only Property._** Returns the internal COM class interface name from the associated type library, if available. If no type library is available, a blank string is returned.  
**PVXDESCRIBE$(**_member$_**)** |  **_Method Call._** This method accepts one string parameter, which is the actual COM member name to "describe" (requires type information to be available). If successful, returns a multi-line string of information describing the member, its return type, as well as parameters and their types.  
  
##  Extended Objects

To complete the COM functionality and provide a mechanism for future enhancements, extended objects were added. These pseudo objects are instantiated in the same way as all other COM objects within PxPlus, except for the fact that an asterisk must preface the object name.

> **DEF OBJECT "*{_extended_** _name_**}"**

It should be noted that while these objects appear identical to other COM objects, they are not COM based in nature. This means that extended objects: do not expose events, do not expose controls, cannot have member names aliased, cannot have member information "described", and cannot be made global to other processes.

The currently supported (internal) extended objects are listed below:

***VARIANT** |  Wrapper around an OLE variant data type. Provides a means for passing data by reference, as well as converting data from a PxPlus type to Automation types.  
---|---  
***VARARRAY** |  Wrapper around an OLE SafeArray of variants. Provides a mechanism for COM array data handling.  
***MASTER** |  Serves as a system object for the interop layer. Provides object iteration capabilities, version information, etc.  
***ERROR** |  Wrapper export for last error information.  
  
The four extended objects are described in detail below.

##  *VARIANT Extended Object

Being a wrapper around an OLE variant, this object can store any data type, including other objects. It also provides a means for converting data in place and handling data types that are not directly supported by PxPlus. Its primary purpose is for method calls that expect data to be passed ** _by reference_ ,** but it is also useful when a COM object will only handle data of a specific type.

The following members belong to the ***VARIANT** object:

**LEN** |  **_Read-Only Property._** Returns the length of the data held by the variant. Logical use is primarily for string data.  
---|---  
**TYPE$** |  **_Read/Write Property._** Returns the data type for the data being held in the variant. When set, will attempt to convert the data to the requested data type. An error will occur if the conversion fails. Valid types are as follows: |  A |  Array data type  
---|---  
B |  Boolean data type  
C |  Byte data type  
M |  Currency data type  
D |  Date data type  
R |  Double data type  
E |  Empty data type  
N |  16-bit Integer data type  
I |  32-bit Integer data type  
O |  Object data type  
F |  Single data type  
S |  String data type  
**PASSBYREF** |  **_Read/Write Property._** Determines if the variant will be passed by reference. Setting the property to zero indicates false, any other value indicates true. The default setting for this property is true. See **EXPLICITBYREF** below.  
**EXPLICITBYREF** |  **_Read/Write Property._** Determines how the variant will be passed if **PASSBYREF** is set to true. When this property is set to false (zero), a pointer to the variant will be passed to the COM method. When set to true (non-zero), a pointer to the actual data will be passed. The default setting for this property is false.  
**VAL[$]** |  **_Read/Write Property._** Used to get/set the data held by the variant. It should be noted that setting the data may cause an implicit conversion.  
  
**_Example:_**  
If the current data type is B, setting the **VAL** property to 0 will cause a conversion to data type I. When assigning an object to the **VAL** property, the following notation must be used: _object'_**VAL.PUT (***_otherobject_**)**.  
**ADD(**_data_ [$]**)** |  **_Method Call._** Add the value of the data parameter to the currently held variant data. Logical use is for building strings greater than 32K in length, but can be used to add numbers, etc. Calling this method will perform an implicit conversion to the data type of the passed parameter.  
**CLEAR( )** |  **_Method Call._** Clears the contents of the variant. After the **CLEAR** finishes, the data type for the variant will be set to E(mpty). If the variant contained an object or array reference, the object will be released.  
  
If an object's documentation indicates that a parameter for a method call is "by reference", then ***VARIANT** must be used. The ***VARIANT** object is always passed "by reference" to the object, thus allowing the developer to retrieve the new value after method execution.

**_Example:_**

> 0010 DEF OBJECT V, "*VARIANT"   
>  0020 DEF OBJECT X, "MSScriptControl.ScriptControl"   
>  0030 V'VAL=10   
>  0040 Z=X'RUN("MySub", *V)   
>  0050 ! Pretend that the object X has set the data for V to "Hello World"   
>  0060 ?V'VAL$ ! Will print "Hello World"

The data for V was set to 10 and then passed as a parameter to the object's method call. Because it was passed "by reference", the method call can change the data to anything or any type it wishes. If you are unsure of the data type returned in the ***VARIANT** object, then check the **'TYPE$** property.

## *VARARRAY Extended Object

Instances of this object type are used to facilitate methods that either accept or return COM arrays. What distinguishes this object from PxPlus arrays is the fact that each element can accept data of any type. For example, **_element 1_** may hold a string value, **_element 2_** an object, **_element 3_** an integer, etc. It should also be noted that this object is always passed by reference.

If a situation arises where this functionality is not desirable, a ***VARIANT** object can be used to pass the variant array:

> 10 DEF OBJECT VARIANT, "*VARIANT"   
>  20 DEF OBJECT VARRAY, "*VARARRAY"   
>  20 ! SET UP VARRAY   
>  30 VARIANT'VAL.PUT(*VARRAY)   
>  40 VARIANT'PASSBYREF=0   
>  50 OBJECT'METHOD(*VARIANT) ! Pass the variant array by value

When an array is assigned to a ***VARIANT** , it is important to remember that the ***VARIANT** will end up with a copy of the array, not the actual array itself. Any changes, even releasing the array, will not affect the array held by the ***VARIANT**.

The following members belong to the ***VARARRAY** object:

**CREATE(**_elements_**[,**_elements_**])** |  **_Method Call._** Initializes the variant array to the dimension count, and element count for each dimension. This method must be passed at least one element count (to create a single dimensioned array) and can accept a maximum of 20 element counts. **_Example:_** ! Create 1 dim array with 10 elements   
OBJECT'CREATE(10)   
! Create 2 dim array   
OBJECT'CREATE(10, 100) Either this method or **CREATEVECTOR** must first be called before attempting to access data. Calling **CREATE** multiple times is also allowed, but will clear any existing data.  
---|---  
**DIMENSIONS** |  **_Read-Only Property._** Returns the number of dimensions in the variant array.  
**TYPE$(**_index_**[,**_index_**])** |  **_Method Call._** Returns the data type for the data being held in the variant array element. It is legal to call this method without passing in the element index, in which case the index will default to zero. For example, the following is identical for a two dimension array: T$=OBJECT'TYPE$()   
T$=OBJECT'TYPE$(0, 0) Unlike the variant object though, the **TYPE** property is read only. If conversion of a data type is required, then the use of a variant object is mandatory. See **[*VARIANT](Overview.htm#variant)** above.  
**COPY** |  **_Read-Only Property._** Returns a variant array object that contains an exact copy of the contents of the current variant array.  
**CLEAR(**_index_**[,**_index_**])** |  **_Method Call._** Clears the data being held in the variant array element. It is legal to call this method without passing in the element index, in which case the index will default to zero. After the clear completes, the element data type is set to **E**(mpty).  
**LBOUND(**_dimension_**)** |  **_Method Call._** Returns the lower boundary for the dimension in the array. Please note that this will always be zero for a valid dimension. When passing _dimension_ , the value should be an integer between 1 and the number of valid dimensions; otherwise, an error occurs.  
**UBOUND(**_dimension_**)** |  **_Method Call._** Returns the upper boundary for the dimension in the array. This will be one number less than the total count of elements in the dimension; i.e., **0 ...**_Element_Count_**-1**.  
**GETDATA[$](**_index_**[,**_index_**])** |  **_Method Call._** Returns the data being held in the variant array element. It is legal to call this method without passing in the element index, in which case the index will default to zero.  
**GETDATAEX(**_index_**[,**_index_**])** |  **_Method Call._** Returns the data being held in the variant array element as a variant object. It is legal to call this method without passing in the element index, in which case the index will default to zero.  
**SETDATA(**_index_**[,**_index_**],**_data_**[$])** |  **_Method Call._** Assigns the contents of _data_ to the variant array element. It is legal to call this method without passing in the element index, in which case the index will default to zero. The _data_ parameter can be any valid data type, including variant and variant array objects.  
**CREATEVECTOR(**_data_**[,**_data_**])** |  **_Method Call._** Initializes the object as a single dimension array with the element count equal to the number of parameters passed in. Each element in the array will be assigned the contents of the corresponding _data_ parameter. **_Example:_**   
OBJECT'CREATEVECTOR("John", "Smith", 31, 150.3) Will create a single dimension array with an **LBOUND** of zero, a **UBOUND** of 3, and element data types of [0] = "S", [1] = "S", [2] = "I", [3] = "R". Calling **CREATEVECTOR** multiple times is also allowed but will clear any existing data.  
  
***VARARRAY** encapsulates the functionality of OLE SafeArrays. The data type for the array is always set to VT_VARIANT, which allows each array element to contain any valid data type (including other arrays!). Only the object's documentation can tell you if you need to pass an array or not. If you run into difficulties using the ***VARARRAY** (i.e., changes are not getting passed back), try setting ***VARIANT** 's **VAL** property to the array, and then pass the ***VARIANT**.

**_Example:_**

> 0010 DEF OBJECT A, "*VARARRAY"  
>  0020 Z=A'CREATE(10, 10)  
>  0030 Z=A'SETDATA(0, 0, "Testing")  
>  0040 DEF OBJECT V, "*VARIANT"  
>  0050 Z=V'VAL.PUT(*A)  
>  0060 ! Perform call passing *V, which is a variant holding a SafeArray  
>  0070 ?OBJ'METHOD(*V)  
>  0080 A=V'VAL  
>  0090 ?A'GETDATA$(0, 0)

If the documentation indicates that the object's method call takes a "variable argument list", then ***VARARRAY** does **_not_** need to be used. For these methods, the individual parameters should be passed in as normal.

## *MASTER Extended Object

The master object provides direct access to the object list maintained by the interop layer, as well as any future global settings that may be introduced. With this access, a developer can quickly determine the number of objects in use, which is essential when tracking down code that may not be handling sub-object references properly.

The following members belong to the ***MASTER** object:

**COUNT** |  **_Read-Only Property._** Returns the number of objects being managed by the interop layer (includes the master object in this count).  
---|---  
**ITEM(**_index_**)** |  **_Method Call._** Returns the interop handle for the object at the specified _index_ (see **[PVXID](Overview.htm#pvxid)** above).

#### **Note:**  
**ITEM** should be treated as a zero-based array.  
  
**VERSION$** |  **_Read-Only Property._** Returns the file version number for the interop library PXPOCX.  
**CALLCOUNT** |  **_Read-Only Property._** Returns the number of command call executions since the interop library was initialized.  
  
## *ERROR Extended Object

This static table is exposed as another internal object. It can be **DEF** 'ed after an error has occurred and will still contain the last error information. One note in regards to this class: While multiple instances can be created, they all point to the same data block; i.e., clearing one ***ERROR** object will in effect clear all other instances.

The following members belong to the ***ERROR** object:

**OLEERROR** |  **_Read-Only Property._** Returns the last OLE HRESULT code that was raised.  
---|---  
**NUMBER** |  **_Read-Only Property._** Returns last object code set for a dispatch call that failed with DISP_E_EXCEPTION.  
**DESCRIPTION** |  **_Read-Only Property._** Contents depends on if the last error was DISP_E_EXCEPTION or not. If so, it returns the object defined message. If not, it returns the string representation of the OLE HRESULT.  
**HELPFILE** |  **_Read-Only Property._** If last error code was DISP_E_EXCEPTION, then this will be pulled from the EXCEPINFO structure.  
**HELPCONTEXT** |  **_Read-Only Property._** Same as **HELPFILE** , except for HELPCONTEXT field of structure.  
**CLEAR( )** |  **_Method Call._** Clears the last error information.
