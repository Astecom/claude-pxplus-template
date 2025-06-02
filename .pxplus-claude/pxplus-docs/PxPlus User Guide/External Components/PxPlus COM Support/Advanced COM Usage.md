# PxPlus COM Support

**Advanced COM Usage** |  **__**  
---|---  
  
This section describes some of the more advanced aspects of COM usage within the PxPlus environment.

## String Handling in COM

When string data is passed from PxPlus to the COM interop layer, a translation is performed that converts the data to a double byte character string. For example, the string "HELLO WORLD" becomes the following in memory:

> When string data is passed back to PxPlus, the double byte character string is converted back to a single byte (ANSI) string. While this is the expected behavior in most situations, it can cause problems when the string data type is used to transport binary data between a client and object. For example, if an object used the string data type to return data that represented a picture image, attempting to convert the data to a single byte string would be incorrect.

The following describes the mechanisms that should be used for correctly dealing with this situation.

  * When passing binary data to an object (using the string data type), a ***VARIANT** object must be used. The variant exposes the **VALB** property, which allows data to be set in binary mode, bypassing the normal double byte conversion. The **LENB** property can be used to determine the byte length, and the **ADDB** method can used to build a stream of byte data.
  * When receiving a byte string from a property or method call, the respective **Invocation Hints** .GetB$ and .CallB$ must be used. The invocation hints inform the COM interop layer that the return string data should not be converted from a double byte to single byte string.



The following pseudo code demonstrates the mechanics for both passing and receiving binary data from a fictitious object:

> 0010 DEF OBJECT X, "SOME OBJECT"   
>  0020 DEF OBJECT V, "*VARIANT"   
>  0030 LET V'VALB$ = $000102030405060708AB1215$   
>  0040 X'PASSTHEDATA(*V)   
>  0050 LET S$ = X'GETTHEDATA.CALLB$()   
>  0060 DELETE OBJECT V   
>  0070 DELETE OBJECT X

##  Passing Optional Parameters

Many objects have methods where the parameters are defined as optional. This is an indication to the developer that the parameter can be excluded. But, how is this accomplished in PxPlus? Below is an example of an ADO Recordset Open method in VB as translated to PxPlus:

|  _Visual Basic:_ |  RS.OPEN "GL1_ACCOUNTS", CONN, , , 2  
---|---|---  
|  _PxPlus:_ |  RS'OPEN("GL1_Accounts", *CONN, *, *, 2)  
  
In PxPlus, the optional parameters are passed using***__**_asterisk._ The one exception is that PxPlus will not allow***** to be passed as the last parameter. If these parameters are not required for the method call, then they must be omitted, and the method call should be terminated with a closing **_parenthesis_** at the last actual parameter:

|  _Incorrect:_ |  RS'OPEN("GL1_Accounts", *CONN, *, *, *)  
---|---|---  
|  _Correct:_ |  RS'OPEN("GL1_Accounts", *CONN)  
  
#### **Note:**  
Refer to the method's documentation or use a type library viewer to determine if a method uses optional parameters.

## Sub-Object Handling

In PxPlus, a sub-object is defined as any object that is the return value of another object's property or method call. Since a sub-object is owned by the base object, it will be destroyed when the base object is destroyed.

> 10 DEF OBJECT WORD, "Word.Application;Finalize=Quit"   
>  20 DOCS = WORD'DOCUMENTS   
>  30 DELETE OBJECT WORD

After line 30 executes, the DOCS object will no longer be valid, as the owning object has been destroyed. To determine if an object is owned by another (parent) object, the **[PVXPARENT](Extended%20Properties%20and%20Methods.htm#pvxparent)** property can be examined. For top-level objects, the return value will be zero; otherwise, the parent object handle will be returned. It is important to be aware of this, as the lifetime of an object is directly controlled by the lifetime of its parent.

## Reserved Word Conflicts

Occasionally, there are cases where an object's property or method is identical to a PxPlus reserved word. When this happens, PxPlus will generate a syntax error on any attempt to use the object's property or method name.

**_Example:_**

If you queried a calendar control for a property called Day, the following would occur.

> 10 DEF OBJECT CAL, "MSCAL.Calendar.7"   
>  20 PRINT CAL'DAY   
>  Error #20: Syntax error ...Day

An Error #20 is raised after line 20 executes. To handle these situations, the COM interop layer provides a mechanism called "aliasing". See **[PVXALIAS](Extended%20Properties%20and%20Methods.htm#pvxalias)**. This allows a developer to call a property or method by creating user-defined names.

**_Example:_**

The following could be done to correct the previous example:

> 0010 DEF OBJECT CAL, "MSCAL.Calendar.7"   
>  0020 CAL'PVXALIAS("DAY", "CALENDARDAY")   
>  0030 PRINT CAL'CALENDARDAY
