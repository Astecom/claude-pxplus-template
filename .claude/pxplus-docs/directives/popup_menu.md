# Directives 

**POPUP_MENU** |  **_Create Popup Menu_**  
---|---  
  
##  Format

**POPUP_MENU**[**@(**_col,ln_**)**], _list$_ , [_strvar_ _$_ |_numvar_]  
  
**_Where_** _:_

**@(**_col,ln_**)** |  Numeric expressions. The optional column and line position on the current window where the menu will appear.  
---|---  
_list$_ |  Menu structure and elements. String expressions. Maximum 2047 elements. A bitmap/icon can be included for each element.  
_numvar_ |  Name of the variable that receives the numeric value of the selection made.  
_strvar_ _$_ |  Name of the variable that receives the string containing the selection sequence of characters selected.  
  
##  Description

Use the **POPUP_MENU** directive to create and process floating menus. A popup menu "pops up" on top of the current window when you right click the mouse while the pointer is over a control, such as a button, multi-line or list box. Once a popup menu is created and assigned to a control, it remains invisible until the user right clicks the mouse button over the enabled component. In a popup menu, a default option may be specified.

**_Popup Menu Definition_**

The **POPUP_MENU** definition uses a format similar to the [**MENU_BAR**](menu_bar.md) directive:

  * Each menu group is enclosed by square brackets.
  * Each item in a group is separated by a comma.
  * Each item's selection character (hot key) is preceded by an **&**  _(ampersand)_.
  * Each sub-menu group is prefixed with its item ID.



Numeric values are assigned to each entry in the menu definition. By default, the first entry has the value '1', the second '2', etc. This value can be overridden by placing an **=**  _(equals sign)_ and numeric value after the menu item text.

**_Example:_**

> "F:[&Open,&Save,&Quit=4]"

In this example, **Quit** would have a value of 4. In addition, the starting numeric value can be changed or reset by placing a **#**  _(pound sign)_ , followed by the new starting point, within the menu definition string outside of group definitions. When setting a new starting value, the next menu selection will be assigned a number that is one more than the starting point:

> "[&File,&Quit],#1000,F:[&Open,&Save,&Rename]"

This example defines **_F_ ile** as 1, **_Q_ uit** as 2, **_F_ ile-_O_ pen** as 1001, **_F_ ile-_S_ ave** as 1002, and **_F_ ile-_R_ ename** as 1003.

Accelerator keys should be unique for each selection on a given sub-menu within a group. While the use of duplicate accelerator keys is permitted, it is difficult to determine which selection was made by using just the character strings.

Menu items can be **_disabled_** , displayed in **_bold_** or with a **_checkmark_** by placing a "D", "B" or "C" after the **=**  _(equals sign)_ and before the value to return.

**_Example:_**

> m$="[&One=1,&Two=C2,&Three=D3,&Four=BC4]"  
> popup_menu m$,answer$

In this example, the resulting menu shows "Two" _checked_ , "Three" _disabled_ , and "Four" both _bolded_ and _checked_.

**_Popup Menu Assignment_**

A **POPUP_MENU** can be associated with buttons, check boxes, drop boxes, grids, list boxes, multi-lines, radio buttons and tristate boxes. The directives that control these objects include a **MNU=** option that defines the CTL number that will be generated when the user right clicks on the control.

**_Bitmaps and Icons_**

Images can be included for each item in the menu. Enclose the image name in curly braces and place it in the menu definition just prior to the specific item text.

**_Example:_**

> "-[&File],F:[&Open=1001,{!Stop}&Stop=1002]"

Use a leading **!**  _(exclamation point)_ to identify the image as internal, or specify the relative path and filename to access an image file that is external. For information on internal/external images and recognized image file types, see [**Displaying Bitmaps/Icons**](../appendix/displaying_bitmaps~icons.md).

**_System Menu_**

The **POPUP_MENU** directive also supports the ability to invoke the system menu programmatically:

> **POPUP_MENU** "*",_status_

**_Where:_**

|  _status_ |  Returns a value of 1 if the menu was displayed successfully or 0 if the system cannot display it for some reason. **_(Not Applicable in iNomads)_**  
---|---|---  
  
_(System menu support was added in PxPlus 2017.)_

**_Inclusion of Special Characters_**

If the text you want to include has any of the characters used to define the popup menu, which is **{, }** , **[,** **]** , **=** (_equals sign_), **&** (_ampersand_), **:** (_colon_) or **,** (_comma_), you will need to escape these characters with the backslash and put a backslash as the first character of the menu definition string.

**_Example:_**

If you want an entry in the menu bar to read "Export [to Word]", your menu_bar command would look like this:

> popup_menu @(col,row),"\\[&File],F:[&Open=1,,&Save,&Export \\[to Word\\]=2,&Quit=4]",X

The first character of the menu definition string being a backslash indicates to the system that the menu contains escaped characters. Any subsequent character in the string preceded by a backslash will not be considered as a delimiter/control character and included in the actual popup_menu text.

_(Support to allow the inclusion of the special characters used to define the menu was added in PxPlus 2021.)_

## Two-Tone Effects

The **POPUP_MENU** directive supports the use of two optional parameters for defining background and left edge colours in menus (similar to MS Office applications):

|  **LEFT** _(arg)_ |  Background colour for the bitmap portion of the menu.Must be placed outside "[...]" menu definitions.  
---|---|---  
|  **FILL** _(arg)_ |  Background colour for the right/text side. If placed outside "[...]" menu definitions, it will serve as the default colour for all menu items. If placed within "[...]", it will be considered the colour associated with a specific menu item. The _arg_ value is defined using the same format as the Colour Properties.  
  
**_Example:_**

In the following example, the RGB colour 200,200,200 is used for the left edge of all entries in this menu:

> popup_menu "LEFT(RGB:200,200,200),[&File,&Edit,&Help],F:[...."

In the next example, the RGB colour 255,255,150 is used as the background colour for all of the text portion of the menu:

> popup_menu 10,"FILL(RGB:255,255,150),[&File,&Edit,&Help],F:[...."

#### **Note:**  
The system supplied _Cut_ , _Copy_ , _Paste_ and _Delete_ menu items will adhere to the **FILL** _(arg)_ and **LEFT** _(arg)_ definitions for the menu.

##  See Also

[**MENU_BAR Create/Control Menu Bar**](menu_bar.md)  
[**BUTTON Create/Control Button**](button.md)  
[**CHECK_BOX Create/Control Check Box**](check_box.md)  
[**DROP_BOX Create/Control Drop Box**](drop_box.md)  
[**GRID Create/Control Grid**](grid.md)  
[**LIST_BOX Create/Control List Box**](list_box.md)  
[**MULTI_LINE Create/Control Multi-Line Input**](multi_line.md)  
[**RADIO_BUTTON Create/Control Radio Button**](radio_button.md)  
[**TRISTATE_BOX Create/Control Tristate Box**](tristate_box.md)

##  Example

This popup menu returns a numeric value assigned by the menu bar definition:

> 0020 print 'CS',; list 0030,  
>  0030 check_box 100,@(50,10,10,2)="{}Popup Menu",opt="P",mnu=101  
>  0040 obtain *  
>  0050 if ctl=4 then stop  
>  0060 if ctl<>101 then goto 0040  
>  0070 mdef$="[&File,&Edit,E&xit=4],F:[&Open=10,&Save=D20], E:[C&ut=30,&Copy=40,&Paste=50]"  
>  0080 popup_menu @(58,12),mdef$,x  
>  0090 print "Selected: ",x  
>  0100 if x=4 then stop  
>  0110 goto 0040
