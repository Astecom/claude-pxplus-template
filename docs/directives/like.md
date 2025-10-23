# Directives

**LIKE** |  **_Inherit Properties_**  
---|---  
  
##  Format

**LIKE** _"otherclass", "otherclass", ..._  
  
**_Where:_**

_otherclass_ |  Name of a class to inherit properties from.  
---|---  
  
##  Description

The **LIKE** directive is used in **[Object Oriented Programming](../PxPlus%20User%20Guide/Object-Oriented%20PxPlus/Introduction.md)** (OOP) to inherit the properties from one or more other classes.

All properties and methods are inherited from the specified classes. When multiple occurrences of the same property/function are found within the inheritance, the first class declared in the **LIKE** directive takes precedence.

##  See Also

**[DEF CLASS Define Object Class](def_class.md)**  
**[DROP CLASS Delete Class Definition](drop_class.md)**  
**[DROP OBJECT Delete Object](drop_object.md)**  
**[FUNCTION Declare Object Method](function.md)**  
**[LOAD CLASS Pre-Load Class Definition](load_class.md)**  
**[LOCAL Designation of Local Data](local.md)**  
**[PROGRAM Create or Assign Program File](program.md)**  
**[PROPERTY Declare Object Properties](property.md)**  
**[RENAME CLASS Change Name of Class](rename_class.md)**  
**[STATIC Add Local Properties at Runtime](static.md)**  
**[NEW( ) Create New Object](../functions/new.md)**  
**[REF( ) Control Reference Count](../functions/ref.md)**

##  Example

def class "Company"  
function Delete()  
remove (fileno,key=COMP_ID$)  
return 1  
end def  
  
def class "Client"  
function Delete()  
if AMT_OWING<>0 \  
then return 0  
remove (fileno,key=CUST_ID$)  
return 1  
end def  
  
def class "Dealer"  
like "Client","Company"  
end def

The Dealer class of objects would use the "Client" 'Delete() method since it was declared first.
