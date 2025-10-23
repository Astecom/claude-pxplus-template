# Control Object Properties

**ObjectID** |  **_User Object Method_**  
---|---  
  
## Description

User object method

The 'ObjectID property allows applications to intercept property values and add methods to controls. When set to a valid Object ID by the application, you can add methods and add/override property logic for any control in the system. When set in the system, it allows the application to logically request methods against the control that, in turn, will be performed by the related Object ID. It will also first check the object for any property requests and if the property is defined in the object set or get that property instead of the controls.

To allow the specified object to get true access to the control, while executing within the object identified by the 'ObjectID property, the system will direct any property requests directly to the control.

_(The ObjectID property was added in PxPlus v7.00.)_

##  Example

Sample used to add a GetValue$ and SetValue method to a grid:

Grid Object definition (GRID.PVC):

> 0010 DEF CLASS "grid"  
>  0020 LOCAL _CTLNO  
>  0030 FUNCTION GETVALUE$(COL,ROW)  
>  0040 ENTER C,R  
>  0050 LET _CTLNO'COLUMN=C  
>  0060 LET _CTLNO'ROW=R  
>  0070 RETURN _CTLNO'VALUE$  
>  0080 FUNCTION SETVALUE(COL,ROW,VALUE$)  
>  0090 ENTER C,R,V$  
>  0100 LET _CTLNO'COLUMN=C  
>  0110 LET _CTLNO'ROW=R  
>  0120 LET _CTLNO'VALUE$=V$  
>  0130 RETURN 1  
>  0140 END DEF  
>  0150 ON_CREATE:  
>  0160 ENTER CTLNO  
>  0170 LET _CTLNO=CTLNO  
>  0180 LET _CTLNO'OBJECTID=_OBJ  
>  0190 RETURN

Test program to create the grid and assign the Object to the grid control:

> 0010 GRID 10,@(30,2,40,15)  
>  0020 GRID ADD 10,10,10  
>  0030 LET X=10  
>  0040 LET O=NEW("grid",X)  
>  0050 FOR I=1 TO 3  
>  0060 X'SETVALUE(I,I,"Hi there")  
>  0070 NEXT  
>  0080 PRINT X'GETVALUE$(2,2)  
>  0090 ESCAPE

#### **Note:**  
When a control is deleted from the system, any object identified by an 'ObjectID property will be automatically dropped.

## Default 

0 (No object specified)

## Used By 

**BUTTON****CHART****CHECK_BOX****DROP_BOX****GRID****H_SCROLLBAR****LIST_BOX****LIST_VIEW****MULTI_LINE****RADIO_BUTTON****REPORT_VIEW****TREE_VIEW****TRISTATE_BOX****VARDROP_BOX****VARLIST_BOX****V_SCROLLBAR**
