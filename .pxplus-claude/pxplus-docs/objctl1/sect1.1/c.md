# Object Controls

**Object Defined Controls** |  **__**  
---|---  
  
Object Defined Controls (ODC) are completely defined by the related object which is responsible for all properties, methods and aspects of the control. The system provides the **DEFCTL OBJECT** directive to create an ODC:

> **DEFCTL OBJECT** _objectid_** __ = **_ctlid_

**_Where:_**

_objectid_ __ |  Handle to the object that defines the control. This object will service all property requests and any desired method calls associated with the control.  
---|---  
_ctlid_ __ |  The number of the control with which the object is to be associated. It must be in the range of from 1 to 32000.  
  
#### **Note:**  
Once an Object Defined Control is defined, both the object handle and CTL value will logically refer to the same object.

## Foundation Classes

PxPlus provides a number of foundation classes for the basic control types in the _*plus/ctls_ directory. These foundation classes can be used to build your own controls that respond to most of the standard system directives and property requests. 

This table contains a list of the foundation classes that PxPlus supplies and their related functions:

**Class File** |  **Description/Purpose**  
---|---  
_button.pvc_ __ |  This class provides the foundation for a button-style control.  
_control.pvc_ __ |  This is a common class used by all the _*plus/ctls_ control objects and provides generic logic for common properties and functions.  
_dragdrop.pvc_ __ |  This class defines the methods required to handle DRAG and DROP functionality. The actual class does little other than provide the required method prototypes.  
_itemlist.pvc_ __ |  This sub-class is used by those controls that are required to maintain a list of items such as List Boxes.  
_list_box.pvc_ __ |  This class defines a basic List Box.  
_multi_line.pvc_ __ |  This class defines a basic input field Multi-Line.  
_radios.pvc_ __ |  This sub-class is used by the "radio_button.pvc" object class to provide linkages between the various Radio Button ODC's that share the same CTL value.  
_radio_button.pvc_ __ |  The class defines a basic Radio Button control.  
  
These class files are designed to be inherited by your own class definition, which, as a minimum, will have to have a Paint method.

**_Example:_**

The following is a sample demo button ODC class definition:

> !  
>  ! Demo text mode button  
>  !  
>  def class "mybutton"  
>  like "*plus/ctls/button"  
>  !  
>  function _paint()  
>  c=int(col),l=int(line),w=int(cols),h=int(lines)  
>  !  
>  ml=l+int((h-1)/2)  
>  if h<1 or w<0 \  
>  then return 1  
>  print 'SA','RM', ! Save attributes  
>  !  
>  if not(visible) \  
>  then ml=-1 \  
>  else if not(enabled) \  
>  then print 'B8','black', \  
>  else print tbl(backcolour$="",'_colour'(backcolour$),'B?'),tbl(textcolour$="",'colour'(textcolour$),'black'),;  
>  if focus \  
>  then print 'BR',  
>  !  
>  while h<>0  
>  if ml=l \  
>  then print @(c,l),pad(text$,w,2), \  
>  else print @(c,l),dim(w),  
>  l++  
>  h--  
>  wend  
>  !  
>  print 'RA',  
>  return 1  
>  end def

#### **Note:**  
Most of these foundation classes are designed to be used in conjunction with an **[ODC Server](d.md)**.
