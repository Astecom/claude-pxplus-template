# Directives 

**DEF CLASS** |  **_Define Object Class_**  
---|---  
  
##  Formats

**DEF CLASS** _class_ _$_ |  [**UNIQUE**] [**ACCEPT PROPERTIES**] [**ACCEPT UNDEFINED**]  
---|---  
|  [**CREATE** _label_[**REQUIRED**]]  
|  [**DELETE** _label_[**REQUIRED**]]  
  
**_Where:_**

_class$_ |  Class name that will refer to this type of object.  
---|---  
**ACCEPT PROPERTIES** |  Optional phrase that indicates that object properties can be created dynamically. See **Dynamic Property Creation**.  
**ACCEPT UNDEFINED** |  Optional phrase similar to **ACCEPT PROPERTIES** functionality except that **ACCEPT PROPERTIES** will not allow you to read a property that has never been defined whereas using **ACCEPT UNDEFINED** instead will return a null string or zero.

#### **Note:**  
**ACCEPT UNDEFINED** ** _only_** applies the top level class; therefore, this option is **_not_** inheritable using the **[LIKE](like.md)** directive.  
  
**CREATE** _label_ |  Optional keyword with statement label for override of ON_CREATE logic.  
**DELETE** _label_ |  Optional keyword with statement label for override of ON_DELETE logic.  
**REQUIRED** |  Optional keyword for either the **CREATE** or **DELETE** option that mandates that this object class' create/delete logic must be included even when the object is inherited.  
**UNIQUE** |  Optional keyword that, if specified, indicates that there will only be one instance of this class in the system ever. Any attempt to create multiple instances will return the handle to the already existing object.  
  
_(The ACCEPT UNDEFINED option was added in PxPlus 2021.)_

##  Description

Use the **DEF CLASS** directive in **[Object Oriented Programming](../PxPlus%20User%20Guide/Object-Oriented%20PxPlus/Introduction.md)** (OOP) to declare the start of an object definition. It defines the name of the object, and it can be used to override object creation and deletion logic.

The value of _class_ $ specifies the class name that will refer to this type of object. Class names are case insensitive, and forward/backward slashes are considered equivalent. Duplicate names are not allowed within the system.

An object declared as **UNIQUE** will have a single instance created, and any subsequent attempt to create an instance returns the same object identifier and increments the object reference count by one.

By default, an object can have ON_CREATE and/or ON_DELETE logic defined. You can override this by specifying new label names for the creation/deletion logic via **CREATE** _label_ and **DELETE** _label_ clauses in the class definition. Normally, object creation/deletion logic is invoked when an object of this _specific class_ is created/destroyed. That means if you have ON_CREATE logic for an object _A_ and object _B inherits_ it, then the ON_CREATE for object _A_ will not be executed on creation of object _B_. You can force creation and/or deletion logic to be executed on inheritance by including the keyword **REQUIRED**.

In terms of precedence, if an object inherits another object that has creation logic, the creation logic for the inherited object is performed first; e.g. if object _C_ inherited object _B_ which inherited object _A_ , then the ON_CREATE in object _A_ would be performed first, followed by object _B_ 's and finally object _C_ 's. (Deletion logic is performed in the opposite order).

##  Defining an Object

Fundamentally, an object consolidates data (**_properties_**) and functions (**_methods_**) into a single unit. The names assigned to properties and methods within the object are unique within the object; i.e. different objects can have data elements or functions of the same name. The names relate only to the object and not to anything else.

This single unit is used in an application to simplify design, coding and testing. All references to an object are controlled through a pointer called the **_object identifier_**.

In order to use an object, you must first define its characteristics. Each object is defined with a **DEF CLASS** statement and a combination of PxPlus OOP directives. **DEF CLASS** is followed immediately by the directives that describe the object.

> def class "_class_ "  
>  property _prop1_ , _prop2_ , ...  
>  local _prop1_ , _prop2_ , ...  
>  function _method_ (_param_) do_method  
>  like "_otherclass_ "  
>  program "_interface_prog_ "  
>  precision _nnn_  
>  end def

The definition begins with the **DEF CLASS** directive at the beginning and concludes with the **END DEF** directive at the end.

##  Dynamic Property Creation

If the **ACCEPT PROPERTIES** clause is declared on the class definition, external programs can dynamically create properties within any instance of the class merely by assigning the property a value. Once a property is dynamically created, it will be present in the property list returned in the '* property list string.

**_Example:_**

> def class "params" accept properties  
>  end def  
>   
>  ->a=new("params")  
>  ->?a'*  
>   
>  ->a'company$="Joes Crabs"  
>  ->a'City$="Any town"  
>  ->?a'*  
>  CITY$,COMPANY$,  
>  ->print a'city$  
>  Any town

In addition, any instance of an object can add properties to itself using the [**ADD PROPERTY**](add_prop.md) directive.

#### **Note:  
ACCEPT PROPERTIES** will not allow you to read a property that has never been defined whereas using **ACCEPT UNDEFINED** instead will return a null string or zero.

_(Dynamic property creation was added in PxPlus v8.01.)_

##  See Also

[**DROP CLASS Delete Class Definition**](drop_class.md)  
[**DROP OBJECT Delete Object**](drop_object.md)  
[**FUNCTION Declare Object Method**](function.md)  
[**LIKE Inherit Properties**](like.md)  
[**LOAD CLASS Pre-Load Class Definition**](load_class.md)  
[**LOCAL Designation of Local Data**](local.md)  
[**PROGRAM Create/Assign Program File**](program.md)  
[**PROPERTY Declare Object Properties**](property.md)  
[**RENAME CLASS Change Name of Class**](rename_class.md)  
[**STATIC Add Local Properties at Run Time**](static.md)  
[**NEW( ) Create New Object**](../functions/new.md)  
[**REF( ) Control Reference Count**](../functions/ref.md)

##  Example

The following is an example of the definition of the object "Customer":

> def class "Customer"  
>  property NAME$ set CHG_NAME ! Run CHG_NAME when NAME$ changes  
>  property Cust_No$,ADDR$,CITY$,SALESMAN$,AMT_OWING  
>  local FileNo ! File channel number  
>  !  
>  function FIND(KeyValue$)  
>  enter KeyValue$  
>  read (FileNo,key=KeyValue$) ! Loads all the variables  
>  return 1  
>  !  
>  function NEXT()  
>  read (FileNo,end=*next);  
>  return 1  
>  return 0  
>  !  
>  function UPDATE()  
>  write (FileNo)  
>  return 1  
>  !  
>  end def  
>  !  
>  CHG_NAME:  
>  enter NEW_NAME$  
>  local NEW_NAME_LEN=len(NEW_NAME$)  
>  if NEW_NAME_LEN<1 or NEW_NAME_LEN>40 \  
>  then exit 41 ! Prevent empty names and too long names  
>  NAME$=NEW_NAME$  
>  return  
>  !  
>  ON_CREATE:  
>  open object (hfn,iol=*)"ARCUST"  
>  FileNo=lfo  
>  return

The object can be used as follows:

> C=new("Customer")  
>  input "Customer #",X$:"000000"  
>  C'Find(X$,err=Bad_Cust)  
>  !  
>  while 1  
>  newname$=C'Name$ ! INPUT requires a true variable  
>  input edit "Name:",newname$  
>  C'Name$=newname$  
>  !  
>  C'Update()  
>  !  
>  input "Do you want to edit the next customer (yes/no)?",yesno$  
>  if lcs(yesno$)="no" \  
>  then break \  
>  else sts=C'Next();  
>  if sts=0 \  
>  then print "Last customer edited.";  
>  break  
>  !  
>  wend  
>  !  
>  drop object C  
>  end  
>  !  
> Bad_Cust:  
>  print "Record not found"  
>  drop object C  
>  end
