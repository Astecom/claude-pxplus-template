# V_SCROLLBAR Create/Control Vertical Scrollbar

**V_SCROLLBAR Properties**|   
---|---  
  
The Vertical Scrollbar control is designed to create and manipulate vertical scrollbars on the screen.

This control can be created either by using the **[V_SCROLLBAR](../directives/v_scrollbar.md)** directive or by using the **[NOMADS Panel Designer](../NOMADS%20Graphical%20Application/Panel%20Designer/Introduction.md)** to draw a Vertical **[Scrollbar Control](../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Scrollbar%20Controls/Overview.md)** and apply the desired attributes.

Below is a list of properties used to define and manipulate Vertical Scrollbar controls. For a list of properties used to define **_Horizontal_** Scrollbar controls, see **[H_SCROLLBAR Properties](hscrollbar_properties.md)**.

Use the links in the **Property** column to access the PxPlus Help page for a selected property. The Help page may provide additional details, particularly if the property can be used to define other controls.

For a complete list of all the properties available, see **[Properties List](properties_list.md)**.

**Property** |  **Description**  
---|---  
**[Auto](../properties/auto.md)** |  When set, the control will generate a 'Change' event whenever its value changes as opposed to the default _Off_ state where the control will only generate the change event when losing focus. Possible values are: |  0 |  Only signal change when exiting the control or on special event such as double click/Enter. **_(Default)_**  
---|---  
1 |  Signal all changes to the value of the control regardless of why the change occurred.  
2 |  Signal all changes done by the user but not done by the program.  
**[BigJump](../properties/bigjump.md)** |  Scrollbar big jump value. (**_Default:_** 0)  
**[BringToTop](../properties/bringtotop.md)** |  This property, when set to **_any_** value, will cause the control to be moved to the top of the display order. Once at the top of the display order, the control will appear visually on top of any other control on the window. (**_Default:_** Not Applicable - Always returns 0)  
**[Col](../properties/col.md)** |  Screen position (column) of control.  
**[Cols](../properties/cols.md)** |  Width of control in column units.  
**[CtlName$](../properties/ctlname_.md)** |  Control type ("V_SCROLLBAR"). See **[V_SCROLLBAR](../directives/v_scrollbar.md)** directive.  
**[Enabled](../properties/enabled.md)** |  Enabled indicator: 1 = True; 0 = False (**_Default:_** 1)  
**[Height](../properties/height.md)** |  Height of control in pixels.  
**[hWnd](../properties/hwnd.md)** |  Windows handle for control.  
**[Key$](../properties/key_.md)** |  Hot key to jump to control.  
**[Left](../properties/left.md)** |  Left margin for control in pixels.  
**[Line](../properties/line.md)** |  Screen position of control.  
**[Lines](../properties/lines.md)** |  Height of control in number of lines.  
**[LookAndFeel](../properties/lookandfeel.md)** |  Defines how a control will look. Possible values are: |  2 |  Old Windows 3.1 2D look.  
---|---  
3 |  Windows 95/98 3D look.  
4 |  Windows XP/Vista/Windows 7 look.  
**[MaxValue](../properties/maxvalue.md)** |  Maximum value that the control will return. On a scroll bar, the value set in the MaxValue is used to determine the value returned when the scrollbar is slid to its highest position.  
**[ObjectID](../properties/objectid.md)** |  User object method. (**_Default:_** 0 - No object specified) The 'ObjectID property allows applications to intercept property values and add methods to controls. When set to a valid ObjectID by the application, you can add methods and add/override property logic for any control in the system. When set in the system, it allows the application to logically request methods against the control that, in turn, will be performed by the related Object ID. It will also first check the object for any property requests and, if the property is defined in the object, set or get that property instead of the controls. To allow the specified object to get true access to the control, while executing within the object identified by the 'ObjectID property, the system will direct any property requests directly to the control.

#### **Note:**  
When a control is deleted from the system, any object identified by an 'ObjectID property will be automatically dropped.  
  
**[OnTipCtl](../properties/ontipctl.md)** |  This property controls the CTL event that will be fired prior to the system displaying the Tip for any control. If the value of this property is non-zero, the system will use its value of a CTL event to fire and will defer the display of the tip until the application changes the value in 'Tip$. If the value in 'Tip$ is not changed, no tip will be displayed. Setting this to zero **_(Default)_** disables the event from being sent and the current 'Tip$ will be displayed.  
**[Parent](../properties/parent.md)** |  Parent window handle.  
**[ScrollWheel](../properties/scrollwheel.md)** |  Set scroll wheel increment. This property is used to define how many lines each click of the scroll wheel will move a list box or grid. Possible values are: |  0 |  Scroll wheel support (all events go to parent window).  
---|---  
1 |  Scroll only if the control has focus (mouse can hover on or off control).  
2 |  Scroll only if the control has focus (mouse must be hovered over control).  
3 |  If control does not have focus, then scroll when mouse hovers over this control (otherwise, same as 1).  
4 |  If control does not have focus, then scroll when mouse hovers over this control (otherwise, same as 2).  
**[SmallJump](../properties/smalljump.md)** |  Scrollbar small jump value.  
**[ThumbSize](../properties/thumbsize.md)** |  This property defines the size of the slider in terms of the total size of scrollbar. If this property is not set (**_Default:_** 0), the standard slider size will be shown. **_Example:_** If the scrollbar represents 100 records and the application is displaying 10 records, the application could set the ThumbSize to 10, resulting in the system displaying a slider approximately 1/10th the size of the scrollbar.  
**[Top](../properties/top.md)** |  Top of control in pixels.  
**[Value$](../properties/value_.md)** |  Current item or grid cell value.  
**[Visible](../properties/visible.md)** |  Control visible flag: 1 = Yes; 0 = No (**_Default:_** 1)  
**[Width](../properties/width.md)** |  Width of control in pixels.  
**[_PropList$](../properties/_proplist_.md)** |  Controls the list of properties to be returned in '_PropValues$. Each value is separated by the value in '_PropSep$. This property can be used to speed up the processing of multiple property accesses but reducing the number of interactions with the control. See **[Multi-Property Access](multi_prop.md)**.  
**[_PropSep$](../properties/_propsep_.md)** |  Controls the separator used between each of the values of the properties returned in '_PropValues$ as defined by '_PropList$. This property can be used to speed up the processing of multiple property accesses but reducing the number of interactions with the control. See **[Multi-Property Access](multi_prop.md)**.  
**[_PropValues$](../properties/_propvalue_.md)** |  Accesses the values of the properties defined in '_PropList$. Each value is separated by the value in '_PropSep$. This property can be used to speed up the processing of multiple property accesses but reducing the number of interactions with the control. See **[Multi-Property Access](multi_prop.md)**.  
  
## See Also

**[Using Property Names](../control_object_properties.htm#Mark1)**  
**[Compound Properties](compound_properties.md)**
