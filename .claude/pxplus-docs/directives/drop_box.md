# Directives 

**DROP_BOX** |  **_Create/Control Drop Box_**  
---|---  
  
##  Formats

1. |  _Define/Create_: |  **DROP_BOX** _ctl_id_ ,**@(**_col,ln,wth,ht_**)**[,_ctrlopt_]  
---|---|---  
2. |  _Delete_: |  **DROP_BOX REMOVE** _ctl_id_[,**ERR=**_stmtref_]  
3. |  _Disable/Enable_ _:_ |  **DROP_BOX** {**DISABLE** | **ENABLE**} _ctl_id_[,**ERR=**_stmtref_]  
4. |  _Set Focus_ _:_ |  **DROP_BOX GOTO** _ctl_id_[,**ERR=**_stmtref_]  
5. |  _Load via Delimited String_: |  **DROP_BOX LOAD** _ctl_id_ ,_dlm_list_ _$_[,**ERR=**_stmtref_]  
6. |  _Load via Array_: |  **DROP_BOX LOAD** _ctl_id,array_name_ _$_**{ALL}**[,**ERR=**_stmtref_]

#### **Note:   
**The curly braces enclosing **{ALL}** are part of Format 6.  
  
7. |  _Load/Delete Index Element_: |  **DROP_BOX LOAD** _ctl_id_ ,_index_ ,{_element$|_*****}[,**ERR=**_stmtref_]  
8. |  _Retrieve Element_ _:_ |  **DROP_BOX FIND** _ctl_id,index,var_ _$_[,**ERR=**_stmtref_]  
9. |  _Read Current String_: |  **DROP_BOX READ** _ctl_id,var_ _$_[,_mode$_][,**ERR=**_stmtref_]  
10. |  _Read Current Index_: |  **DROP_BOX READ** _ctl_id,var_[,_mode$_][,**ERR=**_stmtref_]  
11. |  _Update Selection_: |  **DROP_BOX WRITE** _ctl_id_ ,_element_ _$_[,**ERR=**_stmtref_]  
12. |  _Update Using Index_: |  **DROP_BOX WRITE** _ctl_id_ ,_index_[,**ERR=**_stmtref_]  
13. |  _Clear Current Selection_: |  **DROP_BOX WRITE** _ctl_id_ , ""[,**ERR=**_stmtref_]  
14. |  _Set Focus Notification_ _:_ |  **DROP_BOX SET_FOCUS** _ctl_id_ ,_alt_ctl_[,**ERR=**_stmtref_]  
15. |  _Report All Changes_ _:_ |  **DROP_BOX AUTO** _ctl_id_[,**ERR=**_stmtref_]  
16. |  _Hide/Show_ _:_ |  **DROP_BOX** {**HIDE** | **SHOW**} _ctl_id_[,**ERR=**_stmtref_]  
  
**_Where_**** _:_**

**@(**_col,ln,wth,ht_**)** |  Position and size of the drop box region when expanded. Numeric expressions. Column and line coordinates for top left corner, width in number of columns and height in number of lines.

#### **Note:**  
Drop box height, when not expanded, is governed by the system and is roughly 1.5 times the standard graphic font height.  
  
---|---  
_alt_ctl_ |  CTL value to generate when the drop box gains focus.  
_array_name_ _$_ |  Name of array to load into drop box. String variable followed by **{ALL}**.  
_ctl_id_ |  Unique logical identifier for the drop box (any integer **-** 32000 to +32000). Avoid integers that conflict with keyboard definitions (e.g. 4 cancels CTL=4 for the **F4** key) or [**Negative CTL Definitions**](../appendix/negative_ctl_definitions.md). Use this value with the **[Apostrophe Operator](../appendix/apostrophe_operator.md)** to access various [**DROP_BOX Properties**](../control_object_properties/dropbox_properties.md).  
_ctrlopt_ |  Control options. Supported options for **DROP_BOX** include: |  **ERR=**_stmtref_ |  Error transfer  
---|---  
**FNT=**_"font,size_[_,attr_]_"_ |  Font name, size, optional properties (See [**'FONT'**](../mnemonics/font.md) mnemonic)  
**KEY=**_char$_ |  Hot key  
**MSG=**_text$_ |  Message line  
**MNU=**_ctl_ |  CTL value associated with right-click menu event  
**OPT=**_char$_ |  Single character parameter/option: |  "A" |  _Auto._ Generate CTL signal for every character entered.  
---|---  
"D" |  _Disabled_. User cannot access the drop box.  
"d" |  Drop box is permanently disabled (cannot be enabled).  
"H" |  _Hide_. Do not display the drop box.  
"S" |  _Signal_. Generate CTL value but without shifting focus.  
"s" |  _Scroll_. Allow scroll within resizable/scrollable dialogue box.  
"T" |  Strip trailing spaces.  
"U" |  Convert the text being loaded into the drop box to uppercase characters.  
"X" |  Signal on Exit.  
"Z" |  Cursor changes to resize pointer if within 4 pixels of control.  
**TBL=**_char$_ |  Translation table  
**TIP=**_text$_ |  Mouse pointer message (To change the color, see [**'TC'=**](../parameters/tc.md) system parameter)  
_dlm_list_ _$_ |  Delimited list of elements to load. String expressions.  
_element$_ |  Single element to load. String expression. The *****  _(asterisk)_ can be used to _delete_ an element (e.g. drop_box load 86,4,* will remove element 4 from a drop_box whose _ctl_id_ is 86).  
_index_ |  Position of the element in the drop box. Numeric expression. Integers: the index of the 1st element is 1.  
_mode$_ |  String variable. PxPlus returns a single-character Hex value in this variable to report the last method/keystroke the user chose to activate the drop box ($01$ for **MOUSE-CLICK** or $0D$ for **Enter**).  
_var_ _[$]_ |  Variable to receive value. String variable for element/numeric for index.  
  
##  Description

Use the **DROP_BOX** directive to create and manipulate drop box control objects on the screen. A drop box normally displays a single line on the screen with a down arrow on the right side. The user can select any element from a list of items you assign to the drop box, but variable input is _not_ allowed. That is, the user can only select, _not enter_ , values. To view the list, the user clicks on the down arrow. When the user selects a drop box item, the associated _ctl_id_ is used to generate a CTL value.

See [**VARDROP_BOX Create/Control Variable Drop Box**](vardrop_box.md) if you need a drop box that allows **_both_** variable input **_and_** selection from a list.

Because a drop box list is in drop down form, a drop box takes a smaller amount of space on the screen than a comparable list box. In addition, PxPlus automatically supplies vertical scrollbars if the number of elements overflows the dropdown box size. Combine these features to optimize the screen design when display space is at a premium. 

**_Drop Box Properties_**

The **[Apostrophe Operator](../appendix/apostrophe_operator.md)** can be used with the unique logical identifier _(ctl_id)_ to dynamically read and alter a wide variety of control attributes (properties) directly from the programming language.

See **[DROP_BOX Properties](../control_object_properties/dropbox_properties.md)** for the list of properties available for manipulating a drop box.

**_Multiple Character Search_**

Drop boxes provide a multiple character search capability that makes it easier to search for an exact match in a drop box list. To use this capability effectively, the characters **_must_** be entered within a second of one another and **_must_** exactly match the start of an item in the drop box.

**_Example:_**

Assume that a drop box contains the following items:

> C10000  
>  C30000  
>  C50000

Typing the character "c" followed within second by the number "3" would select the "C30000" item.

#### **Note:**  
In drop boxes, searching always starts from the current selection and wraps.

_(Multiple character search in drop boxes was added in PxPlus 2019.)_

##  Format 1

**_Create_**

**DROP_BOX** _ctl_id_ ,**@(**_col,ln,wth,ht_**)**[,_ctrlopt_]

Use this format to define or create a drop box and give it a unique identifier in _ctl_id_. You can use the **FNT=** option to establish the font for it. If you omit the font option, PxPlus uses the system default font. Use **FNT=** "***** " _(asterisk)_ to set the font as standard text mode fixed font.

**_Example:_**

This example creates a drop box that generates a CTL=100 when any item is selected from it. It is loaded with the items Cat, Dog and Pig:

> drop_box 100,@(2,14,12,6)  
> drop_box load 100,"Cat/Dog/Pig/"

##  Format 2

**_Delete_**

**DROP_BOX REMOVE** _ctl_id_[,**ERR=**_stmtref_]

Use the **DROP_BOX REMOVE** format to delete a drop box.

##  Format 3

**_Disable/Enable_**

**DROP_BOX** {**DISABLE** | **ENABLE**} _ctl_id_[,**ERR=**_stmtref_]

Use **DROP_BOX DISABLE** to gray out a drop box so that it will be visible but inaccessible to users. To reactivate it, use **DROP_BOX ENABLE**.

##  Format 4

**_Set Focus_**

**DROP_BOX GOTO** _ctl_id_[,**ERR=**_stmtref_]

Use the **DROP_BOX GOTO** format to set the focus on a drop box, ready for the user's next input.

##  Formats 5, 6 and 7

**_Load a Drop Box_**

Use **DROP_BOX LOAD** to add or delete the elements listed in a drop box. To add elements, you can load them from a delimited string, as an array of string elements, or individually. If you load more items into the list than the drop down box can display at one time (because of its physical size), PxPlus automatically supplies scrollbars.

**DROP_BOX LOAD** _ctl_id_ ,_dlm_list_ _$_[,**ERR=**_stmtref_]

**_Load List._** When you load a drop box from a delimited string, the last character in the string must be the delimiter. That delimiter must be identical to the separator between the elements in the string. For example, in the delimited string below, the delimiter is the slash "/". It ends the string and separates the elements:

> drop_box load 12000,"Fox/Cat/Dog/Cow/Sheep/Horse/Pig/Elephant/Ant/"

To clear all elements from a drop box, use a null string:

> drop_box load 86, ""

**DROP_BOX LOAD** _ctl_id,array_name_ _$_**{ALL}**[,**ERR=**_stmtref_]

**_Load Array._** Use this format to load a complete _array_ into the drop box. The curly braces enclosing **{ALL}** are part of the syntax:

> drop_box load 16000,A${ALL}

**DROP_BOX LOAD** _ctl_id_ ,_index_ ,{_element$ |_*****}[,**ERR=**_stmtref_]

**_Load Element._** When you load individual drop box elements, use an integer value to state the index of the element before which to insert the element being loaded. For example, if _index_ is 1, the new element will be inserted before 1 at the start of the list. If _index_ is 0, the new element will be appended to the end of the list.

To delete or remove a specified element from a drop box, use an *****  _(asterisk)_ in place of the element string:

> drop_box load 86,4,* ! Deletes list element 4 from a drop_box whose _ctl_id_ is 86

#### **Note:**  
When a **DROP_BOX LOAD** is issued with no _index,_ the current contents of the drop box will first be cleared and the new data will replace it. Setting the **['LoadPoint](../properties/loadpoint.md)** property to a non-zero value alters this behavior.  
  
If 'LoadPoint is set to -1, the data included with the **DROP_BOX LOAD** will be appended to the list.  
  
If 'LoadPoint is set to -2, the data included with the **DROP BOX LOAD** will replace the current contents of the list starting at the item number set in the **['Item](../properties/item.md)** property, which will be updated to the next item number once the load is complete (new items will be added, if required).  
  
If 'LoadPoint is set to a value > 0, the data will be inserted into the list at the point specified and the value in 'LoadPoint will be reset.  
  
This functionality allows list boxes to load a block of records at a time.  
  
_(The LoadPoint property was added in PxPlus v8.11.)  
(The LoadPoint setting of -2 was added in PxPlus 2019.)_

##  Format 8

**_Retrieve Element_**

**DROP_BOX FIND** _ctl_id,index,var_ _$_[,**ERR=**_stmtref_]

Use the string variable in **DROP_BOX FIND** to retrieve a specific element from a drop box.

**_Retrieve Complete Contents_**

**DROP_BOX FIND** _ctl_id,0,var$_[,**ERR** =_stmtref_]

If the _index_ value of 0 is used, PxPlus will return the complete contents of the drop box.

##  Formats 9 and 10

**_Read Current Selection_**

Use the **DROP_BOX READ** formats to read which element the user has selected from the drop box. You must read the user's selection before your application can use it. Use the (optional) _mode$_ variable to have PxPlus return the user's method of selecting an item from the drop box.

Some possible return values are:

> $01$ for **MOUSE-CLICK**  
>  $0D$ for **Enter**  
>  $00$ when the user **Tab** s away from the drop box  
>  $00$ when the user exits the button control

After this value is read, the value in _mode$_ is reset to $00$ (null).

**DROP_BOX READ** _ctl_id,var_ _$_[,_mode$_][,**ERR=**_stmtref_]

**_Read Current Element._** With this format, PxPlus returns the string contents of the user's currently selected element in _var_ _$_ and (optionally) the user's method of selection in _mode$_.

**DROP_BOX READ** _ctl_id,var_[,_mode$_][,**ERR=**_stmtref_]

**_Read Current Index._** Use **DROP_BOX READ** to read the index of the user's current selection and (optionally) the _mode$_ of selection.

##  Formats 11 and 12

**_Write Current Selection_**

Use the **DROP_BOX WRITE** formats to update a **DROP_BOX** to show the current selection.

**DROP_BOX WRITE** _ctl_id_ ,_element_ _$_[,**ERR=**_stmtref_]

**_Update Current Setting._** IfI you use this format to write an element to a drop box as the current selection, the contents of the string must exactly match the value of one of the elements in the drop box; otherwise, PxPlus returns an Error #11: Record not found or Duplicate key on write.

**DROP_BOX WRITE** _ctl_id_ ,_index_[,**ERR=**_stmtref_]

**_Update Current Index._** You can use the element's index number to write it to the drop box as the current selection.

##  Format 13

**_Clear Current Selection_**

**DROP_BOX WRITE** _ctl_id_ ,""__[,**ERR=**_stmtref_]

Use this format to clear the currently selected entry in a drop box.

#### **Note:**  
This behavior can be altered by use of the **['+N' & '-N'](../mnemonics/+n.md)** mnemonics.

##  Format 14

**_Set Focus Notification_**

**DROP_BOX SET_FOCUS** _ctl_id_ ,_alt_ctl_[,**ERR=**_stmtref_]

Use the **DROP_BOX SET_FOCUS** format to define an alternate CTL value to generate whenever focus shifts to a drop box.

##  Format 15

**_Report All Changes_**

**DROP_BOX AUTO** _ctl_id_[,**ERR=**_stmtref_]

Use the **DROP_BOX AUTO** format to have PxPlus generate a CTL value to report all changes whenever the user highlights an element from a drop box list.

##  Format 16

**_Hide/Show_**

**DROP_BOX** {**HIDE** | **SHOW**} _ctl_id_[,**ERR=**_stmtref_]

With the**DROP_BOX HIDE** format, the drop box remains active but is not displayed. It is still accessible programmatically. Use the **DROP_BOX SHOW** format to restore the display and user access.

## See Also

**[DROP_BOX Properties](../control_object_properties/dropbox_properties.md)**  
[**VARDROP_BOX Create/Control Variable Drop Box**](vardrop_box.md)

##  Example

0010 ! DROP_BOX Creation and Use  
0020 print 'CS'; list  
0030 drop_box 88,@(30,18,15,10)  
0040 drop_box load 88,"CAT,DOG,PIG,FOX,"  
0050 drop_box write 88,"CAT"  
0060 let D_BX=88  
0070 setctl D_BX:READ_BOX  
0080 drop_box goto D_BX  
0090 print @(30,24),"Try Mouse and/or keyboard to select. END=<F4>"  
0100 obtain (0,siz=1,err=0100)@(0,0),'cursor'("off"),'ME',IN_VAR$,'MN'  
0110 let CT=ctl; if CT=4 then goto END  
0120 READ_BOX:  
0130 drop_box read D_BX,ANIMAL$,STROKE$,err=0001  
0140 drop_box read D_BX,IND_NUM  
0150 print @(30,20),"HTA(SELECTION) : ",HTA(STROKE$)," AND CTL=",ctl:"#####"  
0160 print @(30,21),"Index for ",ANIMAL$,@(44,21)," : ",IND_NUM,""  
0170 goto 0100  
0180 END:  
0190 drop_box remove D_BX  
0200 print 'CS'
