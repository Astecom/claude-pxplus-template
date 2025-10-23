# Directives

**DELETE OBJECT** |  **_Remove Object_**  
---|---  
  
##  Format

**DELETE OBJECT** _ext_id_[,**ERR=**_stmtref_]  
  
**_Where:_**

_ext_id_ |  Numeric variable to receive a handle (memory pointer to the external object).  
---|---  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
#### **Note:  
** The [**DROP OBJECT**](drop_object.md) directive works the same as **DELETE OBJECT**.

##  Description

The **DELETE OBJECT** directive is used to remove/disconnect associated external objects.

**DROP OBJECT** , **DELETE OBJECT** and the **[REF( )](../functions/ref.md)** function can all be used to delete an object. Only objects whose reference count is 1 can be deleted. Once an object is destroyed, its identifier may be reassigned to another object, although this is not recommended. All objects are destroyed when the application issues a **START** directive or if the **END** directive is entered at the Command mode.

**REF(READ** _obj_id_**)** returns the current reference count value. All calls to **REF( )** return the current reference count (or 0 if deleted).

#### **Note:**  
An external object is automatically destroyed when the window it was defined in is dropped.

## See Also

For information on the creation of an external object, see **[DEF OBJECT](def_object.md)** directive.

##  Example

def object handle,@(2,2,70,16)="*BROWSER"  
errcode=handle'Navigate2("www.pvxplus.com")  
input *  
delete object handle
