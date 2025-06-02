# Directives 

**CUSTOM_VBX** |  **_Create/Control VBX_**  
---|---  
  
#### ***Deprecated***  
 **VBX support is discontinued as of PxPlus v7. Execution of this directive will result in an Error #99: Feature not supported.**

##  Formats

1. |  _Define VBX_ _,_  _Logical ID_ _:_ |  **CUSTOM_VBX** _id_ ,**@(**_col,ln,wth,ht_**)** ,_name_ $,_control_ $[,_fileopt_]  
---|---|---  
2. |  _[Define Event-CTL](custom_vbx.htm#Mark8):_ |  **CUSTOM_VBX DEFCTL** _id_ ,_ctl_val_ ,_event_ _$_[,**ERR=**_stmtref_]  
3. |  _List Event Names_ _:_ |  **CUSTOM_VBX DEFCTL** _id_ ,***** ,_list$_[,**ERR=**_stmtref_]  
4. |  _Add Item to List_ _:_ |  **CUSTOM_VBX LOAD** _id_ ,_index_ ,_val_ _$_[,**ERR=**_stmtref_]  
5. |  _[Remove List Item](custom_vbx.htm#Mark14):_ |  **CUSTOM_VBX LOAD** _id_ ,_index_ ,*****[,**ERR=**_stmtref_]  
6. |  _Read Property_ _:_ |  **CUSTOM_VBX READ** _id_ ,_property$_ ,_var_ _$_[,_array_element_][,**ERR=**_stmtref_]  
7. |  _List Properties_ _:_ |  **CUSTOM_VBX READ** _id,_*****_,list$_[,**ERR=**_stmtref_]  
8. |  _Write Property_ _:_ |  **CUSTOM_VBX WRITE** _id_ ,_property$_ ,_val_ _$_[,_array_element_][,**ERR=**_stmtref_]  
9. |  _Disable/Enable_ _:_ |  **CUSTOM_VBX** {**DISABLE | ENABLE**} _id_[,**ERR=**_stmtref_]  
10. |  _Set Focus_: |  **CUSTOM_VBX GOTO** _id_[,**ERR=**_stmtref_]  
11. |  _Remove VBX_ _:_ |  **CUSTOM_VBX REMOVE** _id_[,**ERR=**_stmtref_]  
12. |  _Hide/Show VBX_ _:_ |  **CUSTOM_VBX** {**HIDE | SHOW**} _id_[,**ERR=**_stmtref_]  
  
**_Where:_**

**@(**_col,ln,wth,ht_**)** |  Position and size of the **CUSTOM_VBX** region. Numeric expressions. Column and line coordinates for top left corner, width in number of columns and height in number of lines.  
---|---  
_control$_ |  Name of the control to use in the file (usually only one per VBX file). String expression.  
_ctl_val_ |  **CTL** to be generated when an event occurs.  
_event$_ |  Name/number of the VBX event.  
_fileopt_ |  Supported file options (see **[File Options](../appendix/input~output_and_control_options.htm#Mark1)**): |  **ERR=**_stmtref_ |  Error transfer  
---|---  
**KEY=**_char$_ |  Hot key  
**MSG=**_text$_ |  Message line  
**OPT=**_char$_ |  Single character parameter/option. The single-character parameters for **OPT=** are: |  "s" -_Scroll_ |  Allow scroll within resizable/scrollable dialogue box  
---|---  
"D" - _Disabled_ |  User cannot access the VBX  
"H" - _Hide_ |  Do not display the VBX  
**TBL=**_char$_ |  Single character translation  
_id_ |  Unique logical identifier for the **CUSTOM_VBX** control object. Numeric expression: integer.  
_index_ |  Array index. Numeric expression, integer.  
  
#### **Note:**  
This directive will convert numerics/strings as required. This means that you can read or write a numeric property into a string variable. PxPlus will automatically convert the value using current **PRECISION**.  
  
_list$_ |  String variable for receiving list of event/property names.  
_name$_ |  Name/number of the VBX property.  
_val_ _$_ |  Value of an item/property.  
_var_ _$_ |  Variable to receive current value of the property.  
  
##  Description

Use the **CUSTOM_VBX** directive to load and define a given VBX custom control object. You must use the same logical ID number (assigned in Format 1) for all subsequent references to your custom VBX.

#### **Note:**  
You can use VBX's in both Windows and UNIX systems when running in graphics mode of PxPlus. There is no text mode support since VBX's are Windows programs that require a graphical Windows device.

**_TCB(__80) Status Codes_**  
  
Whenever an error is detected in the VBX interface logic, PxPlus returns the VBX status or error code in TCB(80). The chart below lists the status codes.

|  **TCB(80)** |  **TCB(80)**|   
---|---|---|---  
|  **Returns** |  **Where VBX Status / Error =** |  **Returns** |  **Where VBX Status / Error =**  
|  03 |  RETURN without GOSUB |  05 |  Illegal function call  
|  06 |  Overflow |  07 |  Out of memory  
|  09 |  Subscript out of range |  10 |  Duplicate definition  
|  11 |  Division by zero |  13 |  Type mismatch  
|  14 |  Out of string space |  16 |  String formula too complex  
|  17 |  Can't continue |  19 |  No Resume  
|  20 |  Resume without error |  28 |  Out of stack space  
|  35 |  Sub or Function not defined |  48 |  Error in loading DLL  
|  49 |  Bad DLL calling convention |  51 |  Internal error  
|  52 |  Bad filename or number |  53 |  File not found  
|  54 |  Bad file mode |  55 |  File already open  
|  57 |  Device I/O error |  58 |  File already exists  
|  59 |  Bad record length |  61 |  Disk full  
|  62 |  Input past End**-** Of**-** File |  63 |  Bad record number  
|  64 |  Bad filename |  67 |  Too many files  
|  68 |  Device unavailable |  70 |  Permission denied  
|  71 |  Disk not ready |  74 |  Can't rename with different drive  
|  75 |  Path/File access error |  76 |  Path not found  
|  91 |  Object variable not set |  92 |  FOR loop not initialized  
|  93 |  Invalid pattern string |  94 |  Invalid use of Null  
|  95 |  Cannot destroy active form instance |  281 |  No More DDE channels  
|  282 |  No foreign application responded to a DDE initiate |  283 |  Multiple applications responded to a DDE initiate  
|  284 |  DDE channel locked |  285 |  Foreign application won't perform DDE method or operation  
|  286 |  Time-out occurred while waiting for DDE response |  287 |  User pressed ESC key during DDE operation  
|  288 |  Destination is busy |  289 |  Data not provided in DDE operation  
|  290 |  Data in wrong format |  291 |  Foreign application quit  
|  292 |  DDE method invoked with no channel open |  294 |  Message queue filled; DDE message lost  
|  298 |  Can't use character device names in filenames: 'item' |  |   
|  321 |  Invalid file format |  341 |  Invalid object array index  
|  342 |  Not enough room to allocate control array 'item' |  343 |  Object not an array  
|  344 |  Must specify index for object array |  360 |  Object already loaded  
|  361 |  Can't unload controls created at design time |  |   
|  363 |  Custom control 'item' not found |  364 |  Object was unloaded  
|  365 |  Unable to unload within this context |  380 |  Invalid property value  
|  382 |  'item' property cannot be set at run time |  383 |  'item' property is read-only; 'item' property can't be modified  
|  384 |  when form is minimized or maximized |  385 |  Must specify index when using property array  
|  386 |  'item' property not available at run time |  387 |  'item' property can't be set on this control  
|  388 |  Can't set Visible property from a parent menu |  391 |  Name not available  
|  392 |  'item' property cannot be read at runtime |  394 |  Form already displayed; can't show modally  
|  401 |  Can't show non-modal form when a modal form is displayed |  402 |  Must close or hide topmost modal form first  
|  403 |  MDI child forms cannot be shown modally |  |   
|  420 |  Invalid object reference |  421 |  Method not applicable for this object  
|  422 |  Property 'item' not found |  424 |  Object required  
|  425 |  Invalid object use |  426 |  Only one MDI form allowed  
|  460 |  Specified format does not match format of data |  |   
|  480 |  Can't create AutoRedraw image |  481 |  Invalid picture  
|  482 |  Printer error |  708 |  File not found:  
|  710 |  File already open: |  712 |  Device I/O error:  
|  713 |  File already exists: |  716 |  Disk full:  
|  719 |  Bad filename: |  722 |  Too many files:  
|  725 |  Permission denied: |  730 |  Path access error:  
|  731 |  Path not found: |  732 |  Must have startup form or Sub Main( )  
| | | | |   
  
##  Format 1

**_Define VBX, Logical ID_**  
  
**CUSTOM_VBX** _id_ ,**@(**_col,ln,wth,ht_**)** ,_name_ $,_control_ $[,_fileopt_]

Use this format to define or create a VBX custom control object and assign it a unique logical ID:

> 0020 custom_vbx 100, @(10,10,10,10),"MHCD200.VBX","MhCardDeck"

When you create the VBX custom control object, you can set default properties. Use the **TBL=** "property=value" option. The last character in the list sets the delimiter for the rest. 

##  Format 2

**_Define Event_**  
  
**CUSTOM_VBX DEFCTL** _id_ ,_ctl_ __val_ ,_event_ _$_[,**ERR=**_stmtref_]

Use the **CUSTOM_VBX DEFCTL** format to define the CTL values for events:

> 0030 custom_vbx defctl 100,101,"Click"

##  Format 3

**_List Event Names_**  
  
**CUSTOM_VBX DEFCTL** _id_ ,***** ,_list_ _$_[,**ERR=**_stmtref_]

It is recommended that you refer to your proprietary VBX documentation for information on VBX events and properties. However, you can also obtain a list of VBX events by using PxPlus to create a custom VBX on the screen and then using the **CUSTOM_VBX DEFCTL** format:

> 0030 custom_vbx defctl 100,***** ,A$

The string variable receives a list of events (comma**-** separated and in numeric order).

##  Format 4

**_Add Item to List_**  
  
**CUSTOM_VBX LOAD** _id_ ,_index_ ,_val_ _$_[,**ERR=**_stmtref_]

Use the **CUSTOM_VBX LOAD** format to add an item to a custom VBX list:

> 0130 custom_vbx load 150,6,"abc"

##  Format 5

**_Remove Item from List_**  
  
**CUSTOM_VBX LOAD** _id_ ,_index_ ,*****[,**ERR=**_stmtref_]

Use this **CUSTOM_VBX LOAD** format to remove an item from a custom VBX list. Note the asterisk in place of a value to indicate that you want an item removed.

**_Example:_**

To remove item 86 from the custom VBX whose _id_ is 15000:

> 0190 custom_vbx load 15000,86,*

##  Format 6

**_Read Property_**  
  
**CUSTOM_VBX READ** _id_ ,_property_ _$_ ,_var_ _$_[,_array_element_][,**ERR=**_stmtref_]

Use the **CUSTOM_VBX READ** format to read the current value of a property:

> custom_vbx read 100,"Suit",RND(4) 

##  Format 7

**_List Properties_**  
  
**CUSTOM_VBX READ** _id,_*****_,list_ _$_[,**ERR=**_stmtref_]

It is recommended that you refer to the proprietary VBX documentation for each product for information on VBX events and properties. However, you can also obtain a list of event Properties by using PxPlus to create a custom VBX on the screen and then using the **CUSTOM_VBX READ** format. The string variable receives the list (comma**-** separated and in numeric order). If you then issue a CUSTOM_VBX READ id,"",X$ (with a null value in place of the asterisk), you will receive a string of characters indicating property types. Lowercase values indicate arrays. The property types are listed as follows:

|  "B" |  8-bit byte ENUM value (numeric)  
---|---|---  
|  "C" |  Color reference (string)  
|  "F" |  Single bit Boolean value/flag (numeric)  
|  "I" |  16-bit integer (numeric)  
|  "L" |  32-bit integer (numeric)  
|  "P" |  Picture / bitmap (string, output only)  
|  "R" |  Real floating point value (numeric)  
|  "S" |  String/String in VBasic format  
|  "X" |  32-bit X position in twips (numeric)  
|  "Y" |  32-bit Y position in twips (numeric)  
  
##  Format 8

**_Write Property_**  
  
**CUSTOM_VBX WRITE** _id_ ,_property_ _$_ ,_val_ _$_[,_array_element_][,**ERR=**_stmtref_]

Use the **CUSTOM_VBX WRITE** format to update or write a property:

> 0080 custom_vbx write 100,"Value",RND(13)+1   
>  0090 custom_vbx write 100,"Suit",RND(4) 

##  Format 9

**_Disable_****/_Enable_**  
  
**CUSTOM_VBX** {**DISABLE | ENABLE**} _id_[,**ERR=**_stmtref_]

Use the **CUSTOM_VBX DISABLE** format to gray out a custom VBX so that it will be visible but _inaccessible_ , to users. To reactivate it, use **CUSTOM_VBX ENABLE**.

> 0150 custom_vbx disable 100

##  Format 10

**_Set Focus_**  
  
**CUSTOM_VBX GOTO** _id_[,**ERR=**_stmtref_]

Use the **CUSTOM_VBX GOTO** format to set the focus on a custom VBX:

> 0130 custom_vbx goto 100

##  Format 11

**_Remove VBX_**  
  
**CUSTOM_VBX REMOVE** _id_[,**ERR=**_stmtref_]

Use the **CUSTOM_VBX REMOVE** format to remove or delete a custom VBX:

> 0150 custom_vbx remove 100

##  Format 12

**_Hide/Show VBX_**  
  
**CUSTOM_VBX** {**HIDE | SHOW**} _id_[,**ERR=**_stmtref_]

Use the **CUSTOM_VBX HIDE** format to prevent the display of a custom VBX:

> 0150 custom_vbx hide 100

Use the **CUSTOM_VBX SHOW** format to restore the display.

##  Examples

This simple "Shuffle the Deck" program uses the Microhelp Card Deck VBX. It will shuffle the deck whenever the mouse is clicked on the card displayed on the screen.

> 0010 print 'CS'  
>  0020 custom_vbx 100,@(10,10,10,10),"MHCD200.VBX","MhCardDeck"  
>  0030 custom_vbx defctl 100,101,"Click"  
>  0040 obtain (0,siz=1)'ME',A$,'MN',  
>  0050 if ctl=4 then end  
>  0060 if ctl<>101 then goto 0040  
>  0070 for I=1 to 10  
>  0080 custom_vbx write 100,"Value",rnd(13)+1  
>  0090 custom_vbx write 100,"Suit",rnd(4)  
>  0100 wait .05  
>  0110 next  
>  0120 goto 0040

This program randomly updates the two properties "Value" (card 1-13) and "Suit"(0-3) with a short delay between updates. Note that the event is defined as CTL 101 whenever the mouse is clicked on the card.
