# Directives

**LOAD CLASS** |  **_Pre-Load Class Definition_**  
---|---  
  
##  Format

**LOAD CLASS** _class_ _$_  
  
**_Where:_**

_class$_ |  Name of the class to be pre-loaded. String expression.  
---|---  
  
##  Description

The **LOAD CLASS** directive is used in **[Object Oriented Programming](../PxPlus%20User%20Guide/Object-Oriented%20PxPlus/Introduction.md)** (OOP) to pre-load a class definition into memory from a **_.pvc_** file. Normally, an OOP class definition is loaded into memory the first time an object of that class is instantiated, and that class definition remains in memory and is used for all subsequent instances of the same class.

#### **Note:**  
PxPlus accepts certain typographical errors. For example, it accepts **LAOD** as a substitute for **LOAD**.

##  See Also

**[DEF CLASS Define Object Class](def_class.md)**  
**[DROP CLASS Delete Class Definition](drop_class.md)**  
**[DROP OBJECT Delete Object](drop_object.md)**  
**[FUNCTION Declare Object Method](function.md)**  
**[LIKE Inherit Properties](like.md)**  
**[LOCAL Designation of Local Data](local.md)**  
**[PROGRAM Create/Assign Program File](program.md)**  
**[PROPERTY Declare Object Properties](property.md)**  
**[RENAME CLASS Change Name of Class](rename_class.md)**  
**[STATIC Add Local Properties at Runtime](static.md)**  
**[NEW( ) Create New Object](../functions/new.md)**  
**[REF( ) Control Reference Count](../functions/ref.md)**
