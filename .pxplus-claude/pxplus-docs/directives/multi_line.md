# Directives 

**MULTI_LINE** |  **_Create/Control Multi-Line Input_**  
---|---  
  
#### **Note:**  
These formats also apply to [ **MULTI_LINE Rich Text Word Processor Controls**](multi_rtf.md).

##  Formats

1._Define/Create:_ |  **MULTI_LINE** _ctl_id_ ,**@(**_col,ln,wth,ht_**)**[,_ctrlopt_]  
---|---  
2._Delete_ _:_ |  **MULTI_LINE REMOVE** _ctl_id_[,**ERR=**_stmtref_]  
3._Disable/Enable:_ |  **MULTI_LINE**{**DISABLE** |**ENABLE**} _ctl_id_[,**ERR=**_stmtref_]  
4._Set Focus_ _:_ |  **MULTI_LINE GOTO** _ctl_id_[,**ERR=**_stmtref_]  
5._Read Current Value_ _:_ |  **MULTI_LINE READ** _ctl_id_**,**_var_ _$_[,_e_o_m_ _$_][,**ERR=**_stmtref_]  
6._Load Value_ _:_ |  **MULTI_LINE WRITE** _ctl_id_**,**_contents_ _$_[,**ERR=**_stmtref_]  
7._Notify re: Focus_ _:_ |  **MULTI_LINE SET_FOCUS** _ctl_id_**,**_alt_ctl_[,**ERR=**_stmtref_]  
8._Report All Changes_ _:_ |  **MULTI_LINE AUTO** _ctl_id_[,**ERR=**_stmtref_]   
9._Prevent/Allow Changes_ _:_ |  **MULTI_LINE**{**LOCK** | **UNLOCK**} _ctl_id_[,**ERR=**_stmtref_]  
10._Hide/Show_ _:_ |  **MULTI_LINE**{**HIDE** |**SHOW**} _ctl_id_[,**ERR=**_stmtref_]  
  
**_Where:_**

**@(**_col,ln,wth,ht_**)** |  Position and size of the Multi-Line region. Numeric expressions. Column and line coordinates for top left corner, width in number of columns and height in number of lines. Note that width and height are for the total area (box plus text/description). Use line value -1 to display the Multi-Line on the tool bar. See **['MF'=](../parameters/mf.md)** system parameter.  
---|---  
_alt_ctl_ |  CTL value to generate when the list box gains focus.  
_contents$_ |  Text/contents of the Multi-Line input field. String expression.  
_ctl_id_ |  Unique logical identifier for Multi-Line input (any integer **-** 32000 to +32000). Avoid integers that conflict with keyboard definitions (e.g. 4 cancels CTL=4 for the **F4** key) or [**Negative CTL Definitions**](../appendix/negative_ctl_definitions.md). Use this value with the **[Apostrophe Operator](../appendix/apostrophe_operator.md)** to access various [**MULTI_LINE Properties**](../control_object_properties/multiline_properties.md).  
_ctrlopt_ |  Control options. Supported options for **MULTI_LINE** include: |  **ERR=**_stmtref_ |  Error transfer.  
---|---  
**FMT=**_mask$_ |  For valid options, see [**Data Format Masks**](../appendix/data_format_masks.md). FMT="!" can be used to indicate that the field should be displayed as blank if the value is 0; however, do not use FMT="!" if you wish to display a 0 being entered or if the value being entered can have 0 as its integral component; e.g. - 0.99 or .12.  
**FNT=**_"font,size_[_,attr_]_"_ |  Font name, size, optional properties. See [**'FONT'**](../mnemonics/font.md) mnemonic.  
**KEY=**_char$_ |  Hot key.  
**LEN=**_num_ |  Maximum input characters. You can use the **LEN=** option in conjunction with the **FMT=** option to limit the number of characters allowed for a **MULTI_LINE WRITE** that violates the format mask.  
**MNU=**_ctl_ |  CTL value associated with right-click menu event.  
**MSG=**_text$_ |  Message line.  
**NUL=**_text$_ |  String text to display when the value of the Multi-Line field is empty.  
**OPT=**_char$_ |  Single character parameter/option. See **MULTI_LINE OPT= Settings**.  
**TBL=**_char$_ |  Translation characters.  
**TIP=**_text$_ |  Mouse pointer message. To change the colour, see [**'TC'=**](../parameters/tc.md) system parameter.  
_e_o_m_ _$_ |  String variable. PxPlus returns a single-character Hex value in this variable to report the last method/keystroke the user chose to terminate the Multi-Line input field (e.g. $0D$ for **Enter** as the **EOM** character for a 1-line Multi-Line input field, or $09$ for **Tab** to exit a Multi-Line input field). For function keys, the character will be $80$ plus the function key number (e.g. $82$=F2, $83$=F3).  
_stmtref_ |  Program line number or statement label to which to transfer control.  
_var_ _$_ |  String variable to receive the text/contents of the Multi-Line input field.  
  
##  Description

Use the **MULTI_LINE** directive to create and control a Multi-Line input region on the screen. Multi-Line input is used to enter or display text. When the input is complete, the user presses a function key, **Tab** or **Enter** for a single-line high Multi-Line input field. PxPlus then generates a control using the Multi-Line input region's associated _ctl_id_.

**_Multi-Line Properties_**

The [**Apostrophe Operator**](../appendix/apostrophe_operator.md) can be used with the unique logical identifier (_ctl_id_) to dynamically read and alter a wide variety of control attributes (properties) directly from the programming language.

See **[MULTI_LINE Properties](../control_object_properties/multiline_properties.md)** for the list of properties available for manipulating a Multi-Line object.

**MULTI_LINE OPT=_Settings_**

The valid parameters for **OPT=**_char$_ are:

"$" |  Password entry displays dollar sign as substitute for each character entered.  
---|---  
">" |  Include a horizontal scrollbar.  
"!" |  Support for Arabic characters (right to left entry).  
"A" |  _Auto_. Generates a CTL value signal for every character entered.  
"B" |  _No border_. The Multi-Line input region will not have a border.  
"C" |  Centre the input.  
"D" |  _Disabled_. Multi-Line region is grayed out and is not accessible to the user.  
"d" |  Multi-Line is permanently disabled (cannot be enabled).  
"E" |  _Edit Mode_. Append to end of existing text. (**_Default_** = _Insert_)  
"F" |  _Full_. Generate a signal upon maximum input length.  
"H" |  _Hide_. Multi-Line is not displayed but is accessible programmatically.  
"h" |  Permanently hidden.  
"I" |  Activate Implied decimal point input for this control (overrides the [**'+I'**](../mnemonics/+i.md) mnemonic setting).  
"i" |  Disable Implied decimal point input for this control (overrides the [**'+I'**](../mnemonics/+i.md) mnemonic setting).  
"L" |  _Lock_. User can set focus but cannot change the Multi-Line input region.  
"N" |  _Signal To/From Null._ Generates a CTL value signal when value changes from null to non-null and vice versa.  
"R" |  _Right Justify._  
"r" |  _Rich Text Editor._ Multi-Line provides Rich Text Editor capabilities. See **[Rich Text Editor](multi_rtf.md)**.  
"S" |  _Spell Checker._ Enables the Windows built-in spell checker on the Multi-Line where possible. If the "S" option is not specified, the system-wide **[AutoSpellCheck](../mnemonics/option.htm#spellcheck)** setting will be in effect. The spell checker uses a wavy red underline to flag words that appear misspelled or duplicated. Words that are **_all_** uppercase are **_not_** spell checked. This option is ignored for Multi-Lines that are defined as _Uppercase_ only or are used for Arabic (right to left) input. _(The "S" option was added in PxPlus 2019.)_  
"s" |  _Scroll_. Allows the Multi-Line input region to scroll in a resizable/scrollable dialogue box.  
"T" |  Strips trailing spaces.  
"t" |  Supports the use of the **Tab** key in the Multi-Line input region.  
"U" |  _Uppercase_. Converts lowercase to uppercase automatically.  
"X" |  _Signal on exit._ Generates a control when focus leaves the Multi-Line input region.  
"Z" |  Cursor changes to resize pointer if within 4 pixels from the edge of the control.  
"^" |  The Multi-Line background will be transparent when the control is locked and borderless. This will allow background images and textures to bleed through. _(The "^" option was added in PxPlus v9.00.)_  
  
**_Auto Complete_**

When the Auto Complete feature is applied to a Multi-Line control, it will predict text as the user is entering it. When the control is accessed, users are prompted with the previously entered words/phrases or entries already in a data file as soon as they start to type. This is a particularly useful tool for applications that require repetitive data entry. The Auto Complete feature will be disabled when MULTI_LINE is used for a password field.

Auto Complete may be set up using the **HLP=** option:

> multi_line  _ctl_id_ _,@__(col,ln,wth,ht)_ ,**HLP=** "**[AutoComplete]**_parameters$_ "

Quotes or apostrophes can be used to surround any of the Auto Complete parameter values so that trailing or leading spaces remain intact, as in the following examples:

**_Example (Using Quotes):_**

> multi_line 100,@(10,10,30,1),hlp="[AutoComplete]DATAFILE=test.dat;FIELD=2;PREFIX=""CLIENTCO """

**_Example (Using Apostrophes):_**

> multi_line 100,@(10,10,30,1),hlp="[AutoComplete]DATAFILE=test.dat;FIELD=2;PREFIX='CLIENTCO '"

The parameter list (_parameters$_) can consist of any of the following options separated by **;** (_semi-colons_):

**AUTOPURGE=YES | NO** |  Automatically purges expired records. Expired words or phrases are only purged when the Multi-Line is accessed. **_Default_** is **NO**.  
---|---  
**DATAFILE=**_path$_ |  Name of keyed file that contains the words/phrases. This file should be resident and accessible on the local workstation.  
**EXPIRED=**_num_ |  Number of days a given record will be used before expiry. If this is not set or set to 0, the words/phrases do not expire.  
**FIELD=**_num_ |  Field that is being displayed.  
**KNO=**_num_ __ |  Key number to be used.  
**LENGTH=**_num_ |  Maximum number of characters that will be displayed.  
**OFFSET=**_num_ |  Starting position within the field to be displayed.  
**PREFIX=**_string$_ |  Prefix that will be used for searching matching words/phrases.  
**READONLY=YES | NO** |  PxPlus does not automatically update the key file when user enters a new word and/or phrase. **_Default_** is **YES**.

#### **Note:**  
If the user is going to be using live data that is not supposed to be updated, ensure that **READONLY=YES**.  
  
#### **Note:**  
The **'AutoComplete$** property can also be used (with the above parameter list).  
  
**_Example:_**  
  
AutoComplete$="DataFile=PxPlus.dat;Readonly=NO"  
  
Existing parameters will not be reset unless they are set specifically when the **AutoComplete$** property is set. If you need to reset all parameters in the list, set the **AutoComplete$** property to a null string.

The system will maintain a list of previous Multi-Line entries in a keyed file that is accessible to the application. Auto Complete will be based on the internal key of the keyed file, and the key has to be case insensitive for the property to work correctly.

If the key is case sensitive, all lowercase keys will be ignored. For information on creating keyed files in PxPlus, see **[KEYED](keyed.md)** directive.

Once the user enters new text in the Multi-Line, each word/phrase will be saved to the keyed file. When the user tries to type the same information again, he/she will be presented with a match from the associated keyed file before he/she finishes typing. When defining this type of Auto Complete scenario, the **READONLY=** parameter should be set to **NO**. This allows the user to remove any unwanted Auto Complete entries that are, for example, the result of spelling or typing errors. To remove unwanted entries, the user first uses the Up/Down arrow keys on the keyboard to highlight the Auto Complete entry in the drop down list and then immediately presses the Delete key. If the user presses another key before pressing Delete, then only a single character in the input control is deleted.

For Multi-Lines that are defined for preset entries, the associated keyed file will already be populated with data. This could be an existing source data file used in your application. It is recommended that the **READONLY=** parameter be set to **YES** when defining this type of Auto Complete scenario; otherwise, the existing data may become corrupted as PxPlus tries to update the file with new user entries. Auto Complete entries that are based on preset data with the **READONLY=** parameter set to **YES** cannot be removed by the user.

**_Client-Server Behavior (WindX)_**

In this scenario, the file used by the Auto Complete logic to store and/or retrieve data must be on the client machine by default. If you wish to retrieve data from a read-only file on the server, you must use additional program logic to accomplish this. First, set the **[AutoCtl](../properties/autoctl.md)** property of the MULTI_LINE with a ctl_id to be generated when content is needed for loading values in the Auto Complete drop box. The final character of the list is used as the list item delimiter. Assign the list to the MULTI_LINE's **[AutoValue$](../properties/autovalue.md)** property. This will cause the drop box to be loaded for selection.

It is also possible to create a list with tab-separated display/return value pairs that displays the first item of the pair in the drop box but uses the second item to load the Multi-Line when selected.

**_Example:_**

A list consisting of 

> "12345 - Barry's Bargain Bistro"+$09$+"12345"+$0A$+"12121 -ABC Company"+$09$+"12121"+$0A"

... would display the following:

> 12345 - Barry's Bargain Bistro  
>  12121 - ABC Company

... but would load 12345 or 12121 into the Multi-Line depending on the selection.

**_Calendar Feature_**

The Calendar feature provides a user-friendly way to enter date information into a Multi-Line input area. When it is applied to a MULTI_LINE, a button will be added to the control that can be clicked to invoke a month calendar popup. This will allow users to pick a date to be inserted automatically into the Multi-Line input area.

The format of the date inserted is based on the formatting rules of the [**DTE( )**](../functions/dte.md) function.

The Calendar feature may be set up using the **HLP=** option:

> multi_line ctl_id, @(col,ln,wth,ht))**,HLP=** "**[Calendar]**_parameters$_ "

The parameter list _(parameters$_) can consist of any of the following options separated by **;** (_semi-colons_):

**CALENDAR=YES | NO** |  **YES** turns On the Calendar support. **NO** turns it Off. **_Default_** is**NO**.  
---|---  
**CONTENTS=**_string$_ |  Text or graph appearing on the button. **_Default_** is **"{!DATE}"**.  
**DTE=**_date$_ |  Date formatting rules. Default is based on the **DTE( )**. The **;** (_semi-colon_) cannot be part of this parameter. (If used, the string following will be ignored.) Date code should include **%** (_percent_); however, if not used, input will be parsed based on format provided. If a time formatting string is included, the current time is used.  
**HEIGHT=**_num_ |  Height of the button. Default is the height defined for **MULTI_LINE**.  
**SHOWBUTTON=YES | NO** |  **YES** shows the Calendar button. **NO** hides it. **_Default_** is **YES**.  
**WIDTH=**_num_ |  Width of the button. Default width is equal to the height defined for the**MULTI_LINE** ; i.e. the default size is a _square_.  
  
The 'Calendar$ property can also be used (with the above parameter list):

> ML_Ctl'Calendar$="CALENDAR=YES;DTE=%Y%M%D;Contents={!Stop}Stop;Width=10"

When invoked, the top border of the calendar popup will be aligned with the bottom border of the Multi-Line input area. If parameters are not specified, the default button contents will be {!DATE} and the width and height of the button equal to the height of the control itself.

The following methods can be used to invoke the calendar:

  * When the Multi-Line input area has focus, press Shift-F2. (_In this case, CTL=-6 is suppressed._)
  * Use the mouse or touchpad to click on the calendar button.



The calendar will disappear automatically when:

  * A date is selected and placed in the Multi-Line input area.
  * ESC is pressed.
  * The user clicks anywhere outside the button or calendar.



When the button is clicked, no EOM value will be generated as the button is considered part of the MULTI_LINE directive and is handled internally. When a date is inserted into the Multi-Line input area, no EOM value will be generated unless OPT="A" has been set and focus is on the MULTI_LINE control.

The calendar popup displays the following features:

  * A grid-like format makes it easy to distinguish the days of the month.
  * The text and background of the current date, as well as the current selection, are presented in a different color for clear identification.
  * Previous/Next month arrow buttons allow the user to browse through the months of the currently selected year.
  * To see the entire month at a glance, the last day(s) of the previous month and the first day(s) of the next month are displayed.



When the MULTI_LINE is hidden or disabled, the calendar button should also be hidden or disabled, and Shift-F2 will not display the calendar control.

**_Example:_**

The following code sample invokes the Calendar feature using both methods, the **HLP=** string and the **[Calendar$](../properties/calendar.md)** property:

> 0010 print 'dialogue'(0,0,100,50,"test",opt="*Z")   
>  0020 print '4D','CS'  
>  0030 let A=1000  
>  0040 multi_line A,@(10,10,30,1),hlp="[CALENDAR]CALENDAR=YES"  
>  0050 let B=1001  
>  0060 multi_line B,@(10,20,30,1)  
>  0070 let B'CALENDAR$="CALENDAR=YES;DTE=%Y %Ml %D;Contents=Enter Date;Width=10"  
>  0080 print "A: ",A'CALENDAR$  
>  0090 print "B: ",B'CALENDAR$  
>  0100 obtain (0,siz=1)'ME',A$,'MN',; let C=ctl; let E$=hta(eom); print "CTL=",C," EOM=",E$  
>  0110 if C=4 then escape  
>  0120 goto 0100

## Format 1

**_Define/Create Multi-Line_**

**MULTI_LINE** _ctl_id_ ,**@(**_col,ln,wth,ht_**)**[,_ctrlopt_]  
  
Use this format to define or create a Multi-Line input field. The **FNT=** option establishes the font for Multi-Line input. If you omit this option, PxPlus uses the "System" default font. If you specify **FNT="*"** , standard text mode fixed font is used.

If you define a Multi-Line input field as occupying more than one line, PxPlus adds scrollbars and automatic word wrapping. If you define the input area as only one line high, the Multi-Line input region will not have a vertical scrollbar but will scroll horizontally as required:

> multi_line 100,@(2,14,12,6)  
> multi_line write 100,"Now is the time for all"  
>  obtain *  
>  if ctl=100 \  
>  then multi_line read 100,X$

This creates a Multi-Line input field that generates a CTL=100 when its value changes and the user exits the Multi-Line input region.

#### **Important Note:**  
When defining a Multi-Line **_with a height greater than one_** , it is strongly advised to use a different separator character rather than the <Std> default, as the <Std> default can also be translated as a field separator when the user presses Enter to add another line during data entry.

## Format 2

**_Delete Multi-Line_**

**MULTI_LINE REMOVE** _ctl_id_[,**ERR** =_stmtref_]

This format to deletes a Multi-Line input field.

## Format 3

**_Disable/Enable Multi-Line_**

**MULTI_LINE**{**DISABLE** | **ENABLE**} _ctl_id_[,**ERR** =_stmtref_]

Use the **MULTI_LINE DISABLE** format to gray out a Multi-Line input region so that it will be visible but inaccessible to users. To reactivate it, use **MULTI_LINE ENABLE**.

## Format 4

**_Set Focus_**

**MULTI_LINE GOTO**  _ctl_id_[,**ERR** =_stmtref_]

Use the **MULTI_LINE GOTO** format to set the focus on the Multi-Line input field, ready for the user's next action.

## Format 5

**_Read Current Value_**

**MULTI_LINE READ** _ctl_id_ ,_var_ _$_[, _e_o_m_ _$_] [,**ERR** =_stmtref_]

If the user enters more than one line of text, PxPlus will delimit each line, either using the system **SEP** character or the character you specify in the **SEP=** option of a directive. By default, Multi-Line input fields auto-wrap text; therefore, the **SEP** character will only be returned on the **READ** if the user inserts a carriage return.

On the **READ** , the _mode$_ variable will identify the method use to end Multi-Line input. Typical values are:

> $00$ if end of input caused by focus exiting out of control

> $09$ for **Tab** used to exit

> $0D$ for **Enter** used to exit

> $82$ for **F2** used to exit

> $84$ for **F4** used to exit

Once this value is read, it is reset to $00$.

Use the **MULTI-LINE READ** format to read the contents of the Multi-Line input field.

## Format 6

**_Load Value_**

**MULTI_LINE WRITE** _ctl_id_ ,_contents_ _$_[,**ERR** =_stmtref_]

When you write string expressions into the Multi-Line input, you must use a delimiter set by either the **SEP=** or the **DLM=** option.

## Format 7

**_Notify re: Focus_**

**MULTI_LINE SET_FOCUS** _ctl_id_**,**_ctl_ __val_[**,ERR=**_stmtref_]

This format generates a CTL value whenever focus shifts to the Multi-Line input region.

## Format 8

**_Report All Changes_**

**MULTI_LINE AUTO** _ctl_id_[,**ERR=**_stmtref_]

Use the **MULTI_LINE AUTO** format to generate a control automatically whenever there is a change.

## Format 9

**_Prevent/Allow Changes_**

**MULTI_LINE**{**LOCK** | **UNLOCK**} _ctl_id_[,**ERR=**_stmtref_]

Use the **MULTI_LINE LOCK** or **UNLOCK** formats to prevent or allow access to the Multi-Line input field. Use a **LOCK** to limit the user's permissions to "view only" for data such as notes and instructions.

## Format 10

**_Hide/Show_**

**MULTI_LINE**{**HIDE** | **SHOW**} _ctl_id_[,**ERR=**_stmtref_]

With the**MULTI_LINE HIDE** format, the Multi-Line remains active but is not displayed. It is still accessible programmatically. Use the **SHOW** format to restore the display and user access.

## See Also

**[MULTI_LINE Properties](../control_object_properties/multiline_properties.md)**
