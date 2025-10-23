# Directives 

**FUNCTION** |  **_Declare Object Method_**  
---|---  
  
##  Formats

1\. _Declare Method:_ |  **FUNCTION[ HIDE ]**_method_[**(**_args_**)**] _logic_  
---|---  
2\. _Method with PERFORM Behavior:_ |  **FUNCTION [ HIDE ] PERFORM** _method_[**(**_args_**)**]_logic_  
3\. _Local Method:_ |  **FUNCTION [ HIDE ] LOCAL** _method_[**(**_args_**)**]_logic_  
4\. _COM Event Method:_ |  **FUNCTION** _method_[**(**_args_**)**]_logic_**FOR EVENT**{_event$_ | **SAME**}  
5\. _End Method Declaration:_ |  **FUNCTION END**  
  
**_Where:_**

**(**_args_**)** |  Optional parameter list within parenthesis.  
---|---  
**END** |  Keyword indicating the end of a method declaration.  
_event$_ |  Name of the corresponding COM event.  
**FOR EVENT** |  Keyword indicating that method is associated with given COM event.  
**HIDE** |  Keyword indicating that method is not to be displayed in the list of methods returned by **'***.  
**LOCAL** |  Keyword indicating that method is only to be called within the object.

#### **Note:**  
The **['IL'](../parameters/il.md)** system parameter must be **_Off_** to enforce the **LOCAL** option.  
  
_logic_ |  Procedure associated with method. Method should return a value; if not, the system forces 0 or " ".  
_method_ |  Name of method that the object can perform. (In Object Oriented Programming, functions are referred to as _methods_.)  
**PERFORM** |  Keyword indicating that logic is to be loaded/executed as in a **PERFORM**.  
**SAME** |  Keyword to use if the _method_ name matches _event$_ name _._  
  
##  Description

The **FUNCTION** directive is used to declare a method for an object in **[Object Oriented Programming](../PxPlus%20User%20Guide/Object-Oriented%20PxPlus/Introduction.md)** (OOP). Each method must have associated logic that will be called when it is invoked:

> function Find(X$)LookupCust  
> LookupCust:
> 
> enter Cst_id$  
>  ! Logic to find the client  
>  return sts ! Return value indicates success

Alternatively, the function logic can directly follow the **FUNCTION** declaration:

> function Find(X$)  
>  enter Cst_id$  
>  ! Logic to find the client  
>  return sts ! Return value indicates success

The declaration ends with a **FUNCTION END** directive for the method itself, by the start of the next method declaration, or when **END DEF** is reached at the end of the object definition:

> def class "MyObj"  
>  function MyFirstMethod()  
>  a=b,d=f  
>  if ... ... ... _etc.  
> _ function MySecondMethod()  
>  a=b,d=f  
>  if ... ... ... _etc._  
>  function end  
>  end def

Every method should return a value. The value can take the form of a string or numeric value depending on the name associated with the function (string functions must end with $). If no **RETURN** value is specified, then the system will return a value of zero for numeric functions and "" (null) for string functions.

#### **Note:**  
As a general rule of thumb, methods should return a non-zero value when successfully executed. This allows for logic such as:  
  
if not(Cst'Find("ABCD")) \  
then gotoBad_cust

When arguments are used in the definition, then the type/number should normally match variables in the application code. Multiple definitions of the same method name can be specified, as long as each method has a different parameter list. In order to determine which method to actually use, PxPlus attempts to match up the parameter lists specified with the variables provided in the application.

If an *****  _(asterisk)_ is used in the definition in place of the argument list (e.g. FUNCTION readbykey(*)), the method will be invoked regardless of the type/number of variables to be matched in the corresponding logic.

**FUNCTION PERFORM** indicates that the function logic is to be loaded and executed (as in a **PERFORM** directive). All variables will be shared with the calling program.

#### **Note:**  
The **PERFORM** format violates the general rules of OOP _encapsulation_.

**FUNCTION LOCAL** indicates that the function is only to be called internally from within the object. It cannot be called externally.

_(The FUNCTION HIDE directive was added in PxPlus v8.11.)_

##  See Also

**[Object Oriented Programming](../PxPlus%20User%20Guide/Object-Oriented%20PxPlus/Introduction.md)**  
[**DEF CLASS Define Object Class**](def_class.md)  
[**ON EVENT Event Processing**](on_event.md)

##  Example

function Find(X$)LookupByName  
function Find(X)LookupByNumber  
LookupByName: \  
enter Cst_id$  
! Logic to find the client by name  
return  
LookupByNumber: \  
enter Cst_id  
! Logic to find the client by number  
return
