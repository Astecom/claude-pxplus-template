# Directives 

**VARLIST_BOX** |  **_Create/Control Variable List Box_**  
---|---  
  
##  Formats

1. |  _Define/Create_ _:_ |  **VARLIST_BOX** _ctl_id_ ,**@(**_col,ln,wth,ht_**)**[,_ctrlopt_]  
---|---|---  
2. |  _Delete_ _:_ |  **VARLIST_BOX REMOVE** _ctl_id_[,**ERR=**_stmtref_]  
3. |  _Disable/Enable_ _:_ |  **VARLIST_BOX** {**DISABLE** | **ENABLE**} _ctl_id_[,**ERR=**_stmtref_]  
4. |  _Set Focus_ _:_ |  **VARLIST_BOX GOTO** _ctl_id_[,**ERR=**_stmtref_]  
5. |  _Load List:_ |  **VARLIST_BOX LOAD** _ctl_id_ ,_dlm_list_ _$_[,**ERR=**_stmtref_]  
6. |  _Load Array:_ |  **VARLIST_BOX LOAD** _ctl_id,array_name_ _$_**{ALL}**[,**ERR=**_stmtref_]

#### **Note:   
**The curly braces enclosing **{ALL}** are part of Format 6.  
  
7. |  _Load/Delete Element:_ |  **VARLIST_BOX LOAD** _ctl_id_ ,_index_ ,_{element$|_*****}[,**ERR=**_stmtref_]  
8. |  _Retrieve Element_ _:_ |  **VARLIST_BOX FIND** _ctl_id,index,var_ _$_[,**ERR=**_stmtref_]  
9. |  _Read Current Selection_ _:_ |  **VARLIST_BOX READ** _ctl_id,var_ _$_[,_mode$_][,**ERR=**_stmtref_]  
10. |  _Read Current Index:_ |  **VARLIST_BOX READ** _ctl_id,var_[,_mode$_][,**ERR=**_stmtref_]  
11. |  _Update Current Item_ _:_ |  **VARLIST_BOX WRITE** _ctl_id_ ,_element_ _$_[,**ERR=**_stmtref_]  
12. |  _Update Current Index_ _:_ |  **VARLIST_BOX WRITE** _ctl_id_ ,_index_[,**ERR=**_stmtref_]  
13. |  _Clear Current Selection_: |  **VARLIST_BOX WRITE** _ctl_id_ ,""__[,**ERR=**_stmtref_]  
14. |  _Set Focus Notification_ _:_ |  **VARLIST_BOX SET_FOCUS** _ctl_id_ ,_alt_ctl_[,**ERR=**_stmtref_]  
15. |  _Report All Changes_ _:_ |  **VARLIST_BOX AUTO** _ctl_id_[,**ERR=**_stmtref_]  
  
**_Where:_**

_@(col,ln,wth,ht)_ |  Position and size of the list box region. Numeric expressions. Column and line coordinates for top left corner, width in number of columns and height in number of lines. Note that width and height are for the total area (box plus text/description). Use line value -1 to display the check box on the tool bar.  
---|---  
_alt_ctl_ |  CTL value to generate when the list box gains focus.  
_array_name_ _$_ |  Name of array to load into list box. String variable followed by **{ALL}**.  
_ctl_id_ |  Unique logical identifier for a variable list box (any integer **-** 32000 to +32000). Avoid integers that conflict with keyboard definitions (e.g. 4 cancels CTL=4 for the **F4** key) or [**Negative CTL Definitions**](../appendix/negative_ctl_definitions.md). Use this value with the **[Apostrophe Operator](../appendix/apostrophe_operator.md)** to access [**VARLIST_BOX Properties**](../control_object_properties/varlistbox_properties.md).  
_ctrlopt_ |  Control options. Supported options for **LIST_BOX** include: |  **ERR=**_stmtref_ __ |  Error transfer  
---|---  
**FMT** =_def_ _$_ |  Format definitions depending on the list box type  
**FNT=**_"font,size_[_,attr_]_"_ |  Font name, size, optional properties (See [**'FONT'**](../mnemonics/font.md) mnemonic)  
**KEY=**_char$_ |  Hot key  
**MNU=**_ctl_ __ |  CTL value associated with right-click menu event  
**MSG=**_text$_ |  Message line  
**OPT=**_char$_ |  Single character parameter/option: |  "A" |  _Auto._ Generate CTL signal for every character entered.  
---|---  
"D" |  _Disabled_. User cannot access the list box.  
"d" |  List box is permanently disabled (cannot be enabled).  
"H" |  _Hide_. Do not display the list box.  
"s" |  _Scroll_. Allow scroll within resizable/scrollable dialogue box.  
"T" |  Strip trailing spaces.  
"X" |  Signal on Exit.  
"Z" |  Cursor changes to resize pointer if within 4 pixels of control.  
**TBL=**_char$_ |  Translation characters  
**TIP=**_text$_ |  Mouse pointer message (To change the colour, see [**'TC'=**](../parameters/tc.md) system parameter)  
_dlm_list_ _$_ |  Delimited list of elements to load. String expressions.  
_element$_ |  Single element to load. Maximum string size 8KB. The ***** (_asterisk_) can be used to _delete_ an element (e.g. varlist_box load 86,4,* removes element 4 from a variable list box whose _ctl_id_ is 86).  
_index_ |  Position of the element in the list box. Numeric expression. Integers: the index of the 1st element is 1.  
_mode$_ |  String variable. The system returns a single-character Hex value in this variable to report the last method/keystroke the user chose to toggle the list box ($01$ for **MOUSE-CLICK** or $0D$ for **Enter**).  
_stmtref_ |  Program line number or statement label to which to transfer control.  
_var_ _[$]_ |  Receives the value of the selected element (string variable) or index (numeric variable).  
  
##  Description

Use the **VARLIST_BOX** directive to create and control a variable list box on the screen; that is, the user can select any element from a list of items associated with the variable list box or can enter any other value.

**_Variable List Box Properties_**

The **[Apostrophe Operator](../appendix/apostrophe_operator.md)** can be used with the unique logical identifier _(ctl_id)_ to dynamically read and alter a wide variety of control attributes (properties) directly from the programming language.

See **[VARLIST_BOX Properties](../control_object_properties/varlistbox_properties.md)** for the list of properties available for manipulating a variable list box object.

##  Format 1

**_Define/Create_**

**VARLIST_BOX** _ctl_id_ ,**@(**_col,ln,wth,ht_**)**[,_ctrlopt_]

Use the format above to create a variable list box, giving it a unique _ctl_id_. When a user selects an item from a variable list box or enters an item that is not on the list, the associated _ctl_id_ you give to the variable list box is used to generate a CTL value.

Use the **FNT=** option to establish the font for the variable list box. If you omit the font option, the system uses the system default font. Use **FNT=** "***** " (_asterisk_) to set the font as standard text mode fixed font.

**_Example:_**

This example creates a variable list box that generates a CTL=100 when any item is selected from it. It is loaded with the items Cat, Dog, and Pig:

> varlist_box 100,@(2,14,12,6)  
> varlist_box load 100,"Cat/Dog/Pig/"

The user can select any of the three items supplied or enter any other value.

##  Format 2

**_Delete_**

**VARLIST_BOX REMOVE** _ctl_id_[,**ERR=**_stmtref_]

Use the **VARLIST_BOX REMOVE** format to delete a variable list box.

##  Format 3

**_Disable/Enable_**

**VARLIST_BOX** {**DISABLE** | **ENABLE**}_ctl_ __id_[,**ERR=**_stmtref_]

Use the **VARLIST_BOX DISABLE** format to gray out a variable list box so that it will be visible but inaccessible to users. To reactivate it, use **VARLIST_BOX ENABLE**.

##  Format 4

**_Set Focus_**

**VARLIST_BOX GOTO** _ctl_id_[,**ERR=**_stmtref_]

Use **VARLIST_BOX GOTO** to set the focus on the variable list box, ready for the next user action.

##  Formats 5, 6 and 7

**_Load a Variable List Box_**

Use the **VARLIST_BOX LOAD** formats below to load items into a variable list box. The element(s) can be loaded as a _delimited string_ , as an _array of string elements_ , or _individually_.

**VARLIST_BOX LOAD** _ctl_id_ ,_dlm_ __list_ _$_[,**ERR=**_stmtref_]

**_Load List._** When you load items from a _delimited string_ , the last character in the string must be the delimiter:

> varlist_box load 10000,"Fox/Cat/Dog/Cow/Sheep/Horse/Pig/Elephant/Ant/"  
> varlist_box load 15000,"Fox"+sep+"Cat"+sep+"Dog"+sep

**VARLIST_BOX LOAD** _ctl_id,array_name_ _$_**{ALL}**[,**ERR=**_stmtref_]

**_Load Array._** Use this format to load a complete _array_ into the variable list box. Note that the curly braces enclosing **{ALL}** are part of the syntax.

**VARLIST_BOX LOAD** _ctl_id_ ,_index_ ,_{element$ |_*****}[,**ERR=**_stmtref_]

**_Load Element._** When loading a variable list box one element at a time, the index value refers to the element before which the new element is to be inserted. For example, if _index_ is 1, the new element will be inserted before 1, at the start of the list. If _index_ is 0, the new element will be appended to the end of the list.

If you have more items on a list than will fit the physical screen size of a variable list box, the system automatically supplies scrollbars.

To delete or remove a specified element from a variable list box, use an ***** (_asterisk_) in place of the element string:

> varlist_box load 86,4,* ! Deletes item whose index=4 from a variable list box whose _ctl_id_ is 86

##  Format 8

**_Retrieve Element_**

**VARLIST_BOX FIND** _ctl_id,index,var_ _$_[,**ERR=**_stmtref_]

Use **VARLIST_BOX FIND** to retrieve a specific element from a list box.

**_Retrieve Complete Contents_**

**VARLIST_BOX FIND** _ctl_id,0,var$_[,**ERR** =_stmtref_]

If the _index_ value of 0 is used, PxPlus will return the complete contents of the list box.

_(The ability to use an index of zero to obtain the complete contents was added in PxPlus v7.10.)_

##  Formats 9 and 10

**_Read Current Selection_**

Use the **VARLIST_BOX READ** formats below to read which element the user has selected from the variable list box. Note that you must read the user's selection before an application can use it.

Use a string variable to return information on how the element was selected. The value returned will be:

> $02$ for **DOUBLE MOUSE-CLICK**  
>  $0D$ for **Enter**

After this value is read, it resets to $00$ (null).

**VARLIST_BOX READ** _ctl_id,var_ _$_[,_mode$_][,**ERR=**_stmtref_]

**_Read Current Element._** Use a string variable in a **VARLIST_BOX READ** to receive the value of the currently selected element. Use an optional second variable to receive the selection method (i.e. _mode$_).

**VARLIST_BOX READ** _ctl_id,var_[,_mode$_][,**ERR=**_stmtref_]

**_Read Current Index._** Use a numeric variable in a **VARLIST_BOX READ** to receive the index of the element the user has selected. Once a user has made a selection, it is your responsibility to read it to return the value to your program.

##  Formats 11 and 12

**_Write Current Selection_**

Use the **VARLIST_BOX WRITE** formats below to update the current selection in the variable list box. The value you write can be one of the elements loaded into the list box or any other value.

**VARLIST_BOX WRITE** _ctl_id_ ,_element_ _$_[,**ERR=**_stmtref_]

**_Update Current Setting._** Use **VARDLIST_BOX WRITE** with a string expression to update the current selection by element.

**VARLIST_BOX WRITE** _ctl_id_ ,_index_[,**ERR=**_stmtref_]

**_Update Current Index._** Use**VARDLIST_BOX WRITE** with a numeric expression to update the current selection by element index.

##  Format 13

**_Clear Current Selection_**

**VARLIST_BOX WRITE** _ctl_id_ ,""__[,**ERR=**_stmtref_]

Use this format to clear the currently selected entry in a variable list box.

#### **Note:**  
This behavior can be altered by use of the **['+N' & '-N'](../mnemonics/+n.md)** mnemonics.

##  Format 14

**_Set Focus Notification_**

**VARLIST_BOX SET_FOCUS** _ctl_id_ ,_alt_ __ctl_[,**ERR=**_stmtref_]

Use the **VARLIST_BOX SET_FOCUS** format to obtain notification when focus changes. **SET_FOCUS** generates an alternate CTL value whenever focus shifts to the variable list box.

##  Format 15

**_Report All Changes_**

**VARLIST_BOX AUTO** _ctl_id_[,**ERR=**_stmtref_]

Use the **VARLIST_BOX AUTO** format to have the system generate a CTL value whenever the current selection is changed. This lets you track changes in which selection is highlighted in a **VARLIST_BOX**.

## See Also

**[VARLIST_BOX Properties](../control_object_properties/varlistbox_properties.md)**  
**[LIST_BOX Create/Control List Box](list_box.md)**  
**[DROP_BOX Create/Control Drop Box](drop_box.md)**
