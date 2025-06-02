# Object Controls  
  
**Object Enhanced Controls** |  **__**  
---|---  
  
The control property **['ObjectID](../../control_object_properties/properties_list.htm#Mark246)** is used to associate an object with a control to create an Object Enhanced Control (OEC). By setting this control property to the handle of an existing object, all subsequent property references and control directives will be checked against the property and methods that the object provides.

**_Example:_**

This is an example of a simple object to enhance a Grid control:

> def class "grid"  
>  local _CTLNO  
>  function GETVALUE$(COL,ROW)  
>  enter C,R  
>  _CTLNO'COLUMN=C  
>  _CTLNO'ROW=R  
>  return _CTLNO'VALUE$  
>  function SETVALUE(COL,ROW,VALUE$)  
>  enter C,R,V$  
>  _CTLNO'COLUMN=C  
>  _CTLNO'ROW=R  
>  _CTLNO'VALUE$=V$  
>  return 1  
>  function WRITE(COL,ROW,VALUE$)  
>  enter C,R,V$  
>  settrace print "Add c="+str(C)+" r="+str(R)+" v="+V$  
>  grid write _CTLNO,C,R,V$  
>  return 1  
>  end def  
>  ON_CREATE:  
>  enter CTLNO  
>  _CTLNO=CTLNO  
>  _CTLNO'OBJECTID=_OBJ  
>  return

Once this object is instantiated, it can be assigned to the Grid control 'ObjectID property, at which point all property requests will be filtered through the object:

> GRD_NO=10  
>   
>  grid GRD_NO,@(40,4,30,15)  
> TheObj=new("GRID",GRD_NO)

For the purposes of this example, the object attaches itself to the control passed in on the **[NEW](../../functions/new.md)** function. This is not required; instead, the application could simply have created the control and then linked the object to the control by setting 'ObjectID.

Once the above logic is executed, the application can then issue calls to GRD_NO'GetValue$( ) and GRD_NO'SetValue( ) to access the grid values. In addition, any **[GRID WRITE](../../directives/grid.md)** directives applied to GRD_NO will invoke the method WRITE within the object.

#### **Note:**  
When a control is removed from the system and 'ObjectID is non-zero, the object it identifies will be automatically de-referenced (dropped).
