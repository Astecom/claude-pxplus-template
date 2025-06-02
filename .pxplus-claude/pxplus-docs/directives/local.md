# Directives 

**LOCAL** |  **_Designation of Local Data_**  
---|---  
  
##  Formats

1. |  _Assign Local Variables_ _:_ |  **LOCAL** _varlist_  
---|---|---  
2. |  _[Define Local Properties (OOP)](local.htm#Mark9):_ |  **LOCAL**  _prop1_ **[OBJECT]** , _prop2_ **[OBJECT]**...  
3. |  _[Define Local Variables for User-Defined Functions](local.htm#Mark10):_ |  **DEF FN _xxxxx_** **(LOCAL** _var_ **[** , **LOCAL** _var_ ...**] )**  
  
**_Where:_**

**OBJECT** |  Optional keyword identifies that the property contains an object identifier to another object.  
---|---  
_prop1,  
prop2 _ |  Property names treated like any other variable in the system. (In **[Object Oriented Programming](../PxPlus%20User%20Guide/Object-Oriented%20PxPlus/Introduction.md)**, data is referred to as _properties_.)  
_varlist_ |  Variables to be used temporarily in the execution of a sub-routine, sub-program, **[FOR/NEXT](for.md)**, **[SWITCH/END SWITCH](switch.md)**, **[WHILE/WEND](while.md)**, **[REPEAT/UNTIL](repeat.md)** or user-defined function.  
  
##  Description

The **LOCAL** directive is used to reassign variable names temporarily without affecting the original contents. In Object Oriented Programming (OOP), the **LOCAL** directive is similar to the **[PROPERTY](property.md)** directive but is used to declare data that is only visible to processing logic.

##  Format 1

**_Assign Local Variables_**

**LOCAL** _varlist_

Use this format to reassign variable names temporarily without affecting the original contents. If the variable name supplied in the **LOCAL** directive is in current use, PxPlus will preserve its value/contents. Once the current **FOR** /**GOSUB** stack has been cleared or the program is exited, PxPlus restores variables that were designated local to their original values. (Local variables are only active until the current stack is cleared.)

The **LOCAL** directive can take an assignment during declaration; however, direct assignment does not work for arrays that are declared as local.

#### **Note:**  
The _varlist_ may be specified as an IOLIST using IOL=iolist. _(as of PxPlus v9.10)_  
  
The ***** entries in the IOLIST will be ignored for a LOCAL directive. _(as of PxPlus 2018)_

**_Example:_**

In this example, X is designated as local for both sub-routines (CHK_IT and LOOP); therefore, the value of X is restored to its original value "1234" after the GOSUB stack is cleared for each sub-routine. Since X$ was not designated as **LOCAL** in the LOOP subroutine, its value has changed from "START TEST, X="__ to "LOOP" after the GOSUB stack for the LOOP has been cleared.

> X=1234,X$="START TEST, X=";  
>  print X$,X  
>  gosub CHK_IT  
>  print "TEST DONE"  
>  gosub LOOP  
>  print X$,X," DONE";  
>  stop  
>   
>  CHK_IT:  
>  local X$,X;  
>  X$="CHECK X:";  
>  print X$,X  
>  X=X+10  
>  print X$,X  
>  return  
>   
>  LOOP:  
>  print "START LOOP, X=",X  
>  X$="LOOP" ! Not designated as LOCAL  
>  for local X=1 to 4  
>  print X$,X  
>  next X  
>  return  
>   
>  ->run  
>  start TEST,X=1234  
>  CHECK X: 0  
>  CHECK X: 10  
>  TEST DONE  
>  START LOOP, X=1234  
>  LOOP 1  
>  LOOP 2  
>  LOOP 3  
>  LOOP 4  
>  LOOP 1234 DONE

Variables in function definitions can be designated as LOCAL to prevent changes in program variables:

> def fnXY(local X, local Y, local Z)=X+Y+Z

##  Format 2

**_Define Local Properties in Object Oriented Programming_**

**LOCAL**  _prop1_ **[OBJECT]** , _prop2_ **[OBJECT]**...

In **[Object Oriented Programming](../PxPlus%20User%20Guide/Object-Oriented%20PxPlus/Introduction.md)** (OOP), the **LOCAL** directive can be used to define the properties for an object class that are not exposed to external applications. They can be accessed during the execution of program logic within the object class itself.

This format of the **LOCAL** directive is similar to the **[PROPERTY](property.md)** directive: variable declarations may include dimensioned arrays and object references.

**LOCAL** properties are typically used for:

  * File handles (if the object is maintained on a file).
  * Security information.
  * Flags and status information used by the programming logic.



If the local variable contains an object identifier to another object, specify the keyword **OBJECT** after the variable _name_. When the object is deleted, PxPlus will use the **[REF( )](../functions/ref.md)** function against the object identifier to remove it (as long as it has no other references):

> def class "Customer"  
>  local File object

When you delete an object whose class is "Customer", then the system reduces the reference count of the object whose identifier is in "File" and, if it is no longer being referenced, deletes it as well.

## See Also

[**DEF CLASS Define Object Class**](def_class.md)  
[**DROP CLASS Delete Class Definition**](drop_class.md)  
[**DROP OBJECT Delete Object**](drop_object.md)  
[**FUNCTION Declare Object Method**](function.md)  
[**LIKE Inherit Properties**](like.md)  
[**LOAD CLASS Pre-Load Class Definition**](load_class.md)  
[**PROGRAM Create/Assign Program File**](program.md)  
[**PROPERTY Declare Object Properties**](property.md)  
[**RENAME CLASS Change Name of Class**](rename_class.md)  
[**STATIC Add Local Properties at Runtime**](static.md)  
[**NEW( ) Create New Object**](../functions/new.md)  
[**REF( ) Control Reference Count**](../functions/ref.md)

##  Format 3

**_Define Local Variables for User-Defined Functions_**

**DEF FN _xxxxx_** **(LOCAL**  _var_**[** , **LOCAL**  _var_ ...**] )**

When defining a user function, the **LOCAL** keyword can be used to specify that the variables declared in the parameter list are local to the function; that is, the assignment of values from the function invocation parameter list will only affect the variables while within the function.
