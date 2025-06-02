# Directives 

**VARDROP_BOX** |  **_Create/Control Variable Drop Box_**  
---|---  
  
##  Formats

1. |  _Define/Create:_ |  **VARDROP_BOX** _ctl_id_ ,**@(**_col,ln,wth,ht_**)**[,_ctrlopt_]  
---|---|---  
2. |  _Delete_ _:_ |  **VARDROP_BOX REMOVE** _ctl_id_[,**ERR=**_stmtref_]  
3. |  _Disable/Enable_ _:_ |  **VARDROP_BOX** {**DISABLE** | **ENABLE**} _ctl_id_[,**ERR=**_stmtref_]  
4. |  _Set Focus_ _:_ |  **VARDROP_BOX GOTO** _ctl_id_[,**ERR=**_stmtref_]  
5. |  _Load Via Delimited String:_ |  **VARDROP_BOX LOAD** _ctl_id_ ,_dlm_list_ _$_[,**ERR=**_stmtref_]  
6. |  _Load Via Array:_ |  **VARDROP_BOX LOAD** _ctl_id,array_name_ _$_**{ALL}**[,**ERR=**_stmtref_]

#### **Note:   
**The curly braces enclosing **{ALL}** are part of Format 6.  
  
7. |  _Load/Delete Element:_ |  **VARDROP_BOX LOAD** _ctl_id_ ,_index_ ,{_element$|_*****}[,**ERR=**_stmtref_]  
8. |  _Retrieve Element_ _:_ |  **VARDROP_BOX FIND** _ctl_id,index,var_ _$_[,**ERR=**_stmtref_]  
9. |  _Read Current String:_ |  **VARDROP_BOX READ** _ctl_id,var_ _$_[,_mode$_][,**ERR=**_stmtref_]  
10. |  _Read Current Index:_ |  **VARDROP_BOX READ** _ctl_id,var_[,_mode$_][,**ERR=**_stmtref_]  
11. |  _Write Current Selection_ _:_ |  **VARDROP_BOX WRITE** _ctl_id_ ,_element_ _$_[,**ERR=**_stmtref_]  
12. |  _Update Using Index:_ |  **VARDROP_BOX WRITE** _ctl_id_ ,_index_[,**ERR=**_stmtref_]  
13. |  _Clear Current Selection_ _:_ |  **VARDROP_BOX WRITE** _ctl_id_ , ""[,**ERR=**_stmtref_]  
14. |  _Set Focus Notification_ _:_ |  **VARDROP_BOX SET_FOCUS** _ctl_id_ ,_alt_ctl_[,**ERR=**_stmtref_]  
15. |  _Report All Changes_ _:_ |  **VARDROP_BOX AUTO** _ctl_id_[,**ERR=**_stmtref_]  
16. |  _Hide/Show_ _:_ |  **VARDROP_BOX** {**HIDE** | **SHOW**} _ctl_id_[,**ERR=**_stmtref_]  
  
**_Where:_**

**@(**_col,ln,wth,ht_**)** |  Position and size of the variable drop box region when expanded. Numeric expressions. Column and line coordinates for top left corner, width in number of columns and height in number of lines. (Note that drop box height, when not expanded, is governed by the system and is roughly 1.5 times the standard graphic font height.)  
---|---  
_alt_ctl_ |  CTL value to generate when the variable drop box gains focus.  
_array_name_ _$_ |  Name of array to load into variable drop box. String variable followed by **{ALL}**.  
_ctl_id_ |  Unique logical identifier for a variable drop box (any integer **-** 32000 to +32000). Avoid integers that conflict with keyboard definitions (e.g. 4 cancels CTL=4 for the **F4** key) or [**Negative CTL Definitions**](../appendix/negative_ctl_definitions.md). Use this value with the **[Apostrophe Operator](../appendix/apostrophe_operator.md)** to access [**VARDROP_BOX Properties**](../control_object_properties/vardropbox_properties.md).  
_ctrlopt_ |  Control options. Supported options for **DROP_BOX** include: |  **ERR=**_stmtref_ |  Error transfer  
---|---  
**FNT=**_"font,size_[_,attr_]_"_ |  Font name, size, optional properties (See [**'FONT'**](../mnemonics/font.md) mnemonic)  
**KEY=**_char$_ |  Hot key  
**MSG=**_text$_ |  Message line  
**MNU=**_ctl_ __ |  CTL value associated with right-click menu event  
**OPT=**_char$_ |  Single character parameter/option: |  "A" |  _Auto._ Generate CTL signal for every character entered.  
---|---  
"D" |  _Disabled_. User cannot access the drop box.  
"d" |  Drop box is permanently disabled (cannot be enabled).  
"H" |  _Hide_. Do not display the drop box.  
"s" |  _Scroll_. Allow scroll within resizable/scrollable dialogue box.  
"T" |  Strip trailing spaces.  
"U" |  Convert the text being loaded into the drop box to uppercase characters.  
"X" |  Signal on Exit.  
"Z" |  Cursor changes to resize pointer if within 4 pixels of control.  
**TBL=**_char$_ |  Translation table  
**TIP=**_text$_ |  Mouse pointer message (To change the colour, see [**'TC'=**](../parameters/tc.md) system parameter)  
_dlm_list_ _$_ |  Delimited list of elements to load. String expressions.  
_element$_ |  Single element to load. String expression. The ***** (_asterisk_) can be used to _delete_ an element (e.g. vardrop_box load 86,4,* will remove element 4 from a variable drop box whose _ctl_id_ is 86).  
_index_ |  Position of the element in the drop box. Numeric expression. Integers: the index of the 1st element is 1.  
_mode$_ |  String variable. The system returns a single-character Hex value in this variable to report the last method/keystroke the user chose to activate the drop box ($01$ for **MOUSE-CLICK** or $0D$ for **Enter**).  
_var_ _[$]_ |  Variable to receive value. String variable for element/numeric for index.  
  
##  Description

Use the **VARDROP_BOX** directive to create and control a variable drop box on the screen. A variable drop box normally displays a single line on the screen with a down arrow on the right side and allows variable input; that is, the user can select any element from a list of items associated with the variable drop box or can enter any other value. To view the list, the user clicks on the down arrow.

Because a variable drop box list is in drop-down form, it takes a smaller amount of space on the screen than a comparable variable list box _._ In addition, the system automatically supplies vertical scrollbars if the number of elements overflows the drop-down box size. Combine these features to optimize screen design when display space is at a premium.

**_Variable Drop Box Properties_**

The **[Apostrophe Operator](../appendix/apostrophe_operator.md)** can be used with the unique logical identifier _(ctl_id)_ to dynamically read and alter a wide variety of control attributes (properties) directly from the programming language.

See **[VARDROP_BOX Properties](../control_object_properties/vardropbox_properties.md)** for the list of properties available for manipulating a variable drop box object.

##  Format 1

**_Create_**

**VARDROP_BOX** _ctl_id_ ,**@(**_col,ln,wth,ht_**)**[,_ctrlopt_]

Use the format above to create a variable drop box, giving it a unique _ctl_id_. When a user selects an item from a variable drop box or enters an item that is not in the list, the associated _ctl_id_ you give to the variable drop box is used to generate a CTL value. Use the **FNT=** option to establish the font for variable drop box. If you omit the font option, the system uses the system default font. Use **FNT=** "***** " (_asterisk_) to set the font as standard text mode fixed font.

**_Example:_**

This example creates a variable drop box that generates a CTL=100 when any item is selected from it. It is loaded with the items Cat, Dog and Pig:

> vardrop_box 100,@(2,14,12,6)  
> vardrop_box load 100,"Cat/Dog/Pig/"

The user can select any of the three items supplied or enter any other value.

##  Format 2

**_Delete_**

**VARDROP_BOX REMOVE** _ctl_id_[,**ERR=**_stmtref_]

Use the **VARDROP_BOX REMOVE** format to delete a variable drop box.

##  Format 3

**_Disable/Enable_**

**VARDROP_BOX** {**DISABLE** | **ENABLE**}_ctl_ __id_[,**ERR=**_stmtref_]

Use the **VARDROP_BOX DISABLE** format to gray out a variable drop box so that it will be visible but inaccessible to users. To reactivate it, use **VARDROP_BOX ENABLE**.

##  Format 4

**_Set Focus_**

**VARDROP_BOX GOTO** _ctl_id_[,**ERR=**_stmtref_]

Use **VARDROP_BOX GOTO** to set the focus on the variable drop box, ready for the user's next input.

##  Formats 5, 6 and 7

**_Load a Variable Drop Box_**

Use the **VARDROP_BOX LOAD** formats below to load items into a variable drop box. The element(s) can be loaded as a _delimited string_ , as an _array of string elements_ , or _individually_.

**VARDROP_BOX LOAD**  _ctl_id,dlm_list_ _$_[,**ERR=**_stmtref_]

**_Load List._** When you load items from a _delimited string_ , the last character in the string must be the delimiter:

> vardrop_box load 10000,"Fox/Cat/Dog/Cow/Sheep/Horse/Pig/Elephant/Ant/"  
> vardrop_box load 15000,"Fox"+sep+"Cat"+sep+"Dog"+sep

**VARDROP_BOX LOAD** _ctl_id,array_name_ _$_**{ALL}**[,**ERR=**_stmtref_]

**_Load Array._** Use this format to load a complete _array_ into the variable drop box.

#### **Note:**  
The curly braces enclosing **{ALL}** are part of the syntax.

**VARDROP_BOX LOAD** _ctl_id_ ,_index_ ,_{element$ |_*****}[,**ERR=**_stmtref_]

**_Load Element._** When you load a variable drop box one element at a time, the index value refers to the element before which the new element is to be inserted. For example, if _index_ is 1, the new element will be inserted before 1 at the start of the list. If _index_ is 0, the new element will be appended to the end of the list.

If you have more items in the list than will fit the physical screen size of the variable drop box, scrollbars will be automatically be supplied.

To delete or remove a specified element from a variable drop box, use an ***** (_asterisk_) in place of the element string:

> vardrop_box load 86,4,* ! Deletes item whose index=4 from a variable drop box whose _ctl_id_ is 86

##  Format 8

**_Retrieve Element_**

**VARDROP_BOX FIND** _ctl_id,index,var_ _$_[,**ERR=**_stmtref_]

Use **VARDROP_BOX FIND** to retrieve a specific element from a drop box.

**_Retrieve Complete Contents_**

**VARDROP_BOX FIND** _ctl_id,0,var$_[,**ERR** =_stmtref_]

If the _index_ value of 0 is used, PxPlus will return the complete contents of the drop box.

_(The ability to use an index of zero to obtain the complete contents was added in PxPlus v7.10.)_

##  Formats 9 and 10

**_Read Current Selection_**

Use the **VARDROP_BOX READ** formats to read which element the user has selected from the variable drop box. You must **READ** the user's selection before your application can use it.

Use a string variable to return information on how the element was selected. The value returned will be:

> $01$ for **MOUSE-CLICK**  
>  0D$ for **Enter**

After this value is read, it resets to $00$ (null).

**VARDROP_BOX READ** _ctl_id,var_ _$_[,_mode$_][,**ERR=**_stmtref_]

**_Read Current Element_**

Use a string variable in a **VARDROP_BOX READ** to receive the value of the currently selected element. Use an optional second variable to receive the selection method (i.e. _mode$_).

**VARDROP_BOX READ** _ctl_id,var_[,_mode$_][,**ERR=**_stmtref_]

**_Read Current Index_**

Use a numeric variable in a **VARDROP_BOX READ** to receive the index of the element the user has selected. Once a user has made a selection, it is your responsibility to read it to return the value to your program.

##  Formats 11 and 12

**_Write Current Selection_**

Use the **VARDROP_BOX WRITE** formats below to update the current selection in the variable drop box. The value you write can be one of the elements loaded into the drop box or any other value.

**VARDROP_BOX WRITE** _ctl_id_ ,_element_ _$_[,**ERR=**_stmtref_]

**_Update Current Setting_**

Use **VARDDROP_BOX WRITE** with a string expression to update the current selection by element.

**VARDROP_BOX WRITE** _ctl_id_ ,_index_[,**ERR=**_stmtref_]

**_Update Current Index_**

Use**VARDDROP_BOX WRITE** with a numeric expression to update the current selection by element index.

##  Format 13

**_Clear Current Selection_**

**VARDROP_BOX WRITE** _ctl_id_ ,"" [,**ERR=**_stmtref_]

Use this format to clear the currently selected entry in a variable drop box.

#### **Note:**  
This behavior can be altered by use of the **['+N' & '-N'](../mnemonics/+n.md)** mnemonics.

##  Format 14

**_Set Focus Notification_**

**VARDROP_BOX SET_FOCUS** _ctl_id_ ,_alt_ __ctl_[,**ERR=**_stmtref_]

Use the **VARDROP_BOX SET_FOCUS** format to obtain notification when focus changes. **SET_FOCUS** generates an alternate CTL value whenever focus shifts to the variable drop box.

##  Format 15

**_Report All Changes_**

**VARDROP_BOX AUTO** _ctl_id_[,**ERR=**_stmtref_]

Use the **VARDROP_BOX AUTO** format to have the system generate a CTL value whenever the current selection is changed. This lets you track changes in which selection is highlighted in a **VARDROP_BOX**.

##  Format 16

**_Hide/Show_**

**VARDROP_BOX** {**HIDE** | **SHOW**} _ctl_id_[,**ERR=**_stmtref_]

With the**VARDROP_BOX HIDE** format, the drop box remains active but is not displayed. It is still accessible programmatically. Use the **SHOW** format to restore the display and user access.

## See Also

**[VARDROP_BOX Properties](../control_object_properties/vardropbox_properties.md)**  
**[DROP_BOX Create/Control Drop Box](drop_box.md)**  
**[VARLIST_BOX Create/Control Variable List Box](varlist_box.md)**
