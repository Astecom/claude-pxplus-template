# Language Reference - Appendix   
  
**Apostrophe Operator** |   
---|---  
  
##  Formats

1. |  _Assign Property:_ |  _object**'** property_[$]_=var_[$]  
---|---|---  
2. |  _Retrieve Property:_ |  _var_[$]_=object**'** property_[$]  
3. |  _Call a Method:_ |  _var_[$]_=object**'** method_[$](_args_)  
4. |  _List of Available Properties or Methods:_ |  _var_ $_=object_**'***  
  
**_Where_**:

**'** |  Apostrophe operator (sometimes called a _tick_).  
---|---  
***** |  Asterisk to produce a comma-separated list of properties/methods available for a particular object. **_Example:_** To list DROP_BOX properties (assuming _dbox_ is a unique ctl_id): print dbox'Auto,BackColour,Col,Cols,CurrentItem,CtlName,Enabled,Eom,Focus,Font,Height,hWnd,Item,ItemCount,ItemText,Key,Left,Line, Lines,Msg,OnFocusCtl,Parent,Sep,SepLoad,Tbl,TextColour,Tip,Top,Value,Visible,Width  
_args_ |  Optional argument(s).  
_method_[$] |  Name of a valid method/function in the given control/object. Method names are not case sensitive. To query the list of available methods, use the above syntax for *****  _(asterisk)_.  
_object_ |  Numeric variable containing the control value (handle) for the object.  
_property_[$] |  Name of a valid property in the given control/object. Property names are not case sensitive. To query the list of available properties, use the above syntax for *****  _(asterisk)_.  
_var_[$] |  String or numeric variable.  
  
#### **Note:**  
In the above syntax, ensure that numeric methods/properties correspond to numeric variables and that string methods/properties correspond to string variables; i.e. _object_**'**_property_ $=_var_ $ or _var_ =_object**'** method_( ) on both sides of the equation.

##  Description

An apostrophe operator _(tick)_ allows **_dynamic_** access to the properties and methods available for a given *BROWSER, COM, .NET, OOP or graphical object. While the syntax is generally the same for all object-oriented coding in PxPlus, the apostrophe operator can be used to read and alter properties or execute methods in a variety of different control and object types.

##  Examples

**_Example 1:_**

This example creates a Multi-Line control, displays the properties available, changes the column width, and returns the current screen coordinates.

> multi_line 100,@(10,12,40,1)  
>  X=100  
>  print X'Auto,BackColour,Col,Cols,CtlName,Enabled,eom,Fmt,Focus,Font,Height,hWnd,ImpliedDecimal,Key,Left,Len,Line,Lines,Lock,MenuCtl,Msg,Nul,OnFocusCtl,Parent,Scroll,SelectLength,SelectOffset, SelectText,sep,SignalOnExit,TextColour,Tip,Top,Uppercase,Value,Visible,Width,  
> X'Cols=50 ! Make control 50 columns wide  
>  print X'Col,X'Line ! Current screen coordinates of the multi-line  
>  10 12

**_Example 2:_**

This example creates a Grid control with 10 columns and 5 rows, and then selects column two, row zero (which selects the entire column). Changing the value of the property sets the contents of all the selected cells to that value.

> grid 10,@(10,10,40,5)  
>  Y=10  
> Y'ColumnsWide=10  
> Y'RowsHigh=5  
> Y'Column=2  
> Y'Row=0  
> Y'Value$="New Data"

**_Example 3:_**

This example dynamically changes a property in one object based on the value of another.

> if Country.ctl'value$="CDN" \  
>  then Zip'Fmt$="A0A 0A0" \  
>  else Zip'Fmt$="00000"

**_Example 4:_**

This is a simple COM interface example that instantiates an Internet Explorer object and then displays the PVX Plus Web site.

> def object IE,@(10,10,40,20)="Shell.Explorer"  
>  IE'Navigate2(www.pvxplus.com)

**_Example 5:_**

This OOP example assumes the definition of a "Customer" object.

> Cst=new("Customer")  
> Cst'Find("012345")

## See Also

**[PxPlus Event Handling](../Automation%20in%20PxPlus/Events/Overview.htm#handlingevents)**  
[**Control Object Properties**](../control_object_properties.md)  
[**Object Oriented Programming**](../introduction/basic_concepts.htm#Mark10)  
**[DEF OBJECT Define Windows Object](../directives/def_object.md)**  
**[External Controls - *Browser, ActiveX (COM), PVX Plus, .NET](../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/COM%20Control/COM%20Control.md)**
