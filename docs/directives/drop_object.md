# Directives 

**DROP OBJECT** |  **_Delete Object_**  
---|---  
  
##  Format

**DROP OBJECT** _obj_id_[,**ERR=**_stmtref_]  
  
**_Where:_**

_obj_id_ |  Object identifier.  
---|---  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
#### **Note:**  
The **[DELETE OBJECT](delete_object.md)** directive works the same as **DROP OBJECT**.

##  Description

The **DROP OBJECT** directive is used to delete an object.

**DROP OBJECT** , **DELETE OBJECT** and the **[REF( )](../functions/ref.md)** function can all be used to delete an object. Only objects whose reference count is 1 can be deleted. Once an object is destroyed, its identifier may be reassigned to another object, although this is not recommended. All objects are destroyed when the application issues a **START** directive or if the **END** directive is entered at the Command mode.

**REF(READ** _obj_id_**)** returns the current reference count value. All calls to **REF( )** return the current reference count (or 0 if deleted).

##  See Also

**[Object Oriented Programming](../PxPlus%20User%20Guide/Object-Oriented%20PxPlus/Introduction.md)**  
[**DEF OBJECT Define Windows Object**](def_object.md)  
[**Apostrophe Operator**](../appendix/apostrophe_operator.md)  
**[Automation in PxPlus](../Automation%20in%20PxPlus/Introduction.md)**
