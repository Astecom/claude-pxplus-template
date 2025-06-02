# Control Objects

**Multi-Line Control** |  **__**  
---|---  
  
**MULTI_LINE** _ctl_id,_**@(**_col,ln,wth,ht_**)** [, _ctrlopt_ ]  
**MULTI_LINE** { **REMOVE** | **DISABLE** | **ENABLE** | **LOCK** | **UNLOCK** } _ctl_id_  
**MULTI_LINE** { **GOTO** | **HIDE** | **SHOW** | **AUTO** } _ctl_id_ _  
_**MULTI_LINE SET_FOCUS** _ctl_id, ctl_val  
_**MULTI_LINE READ** _ctl_id, var$_ [, _mode$_ ]   
**MULTI_LINE WRITE** _ctl_id, contents$_

A multi-line input area is used to enter and display text. If the multi-line input field is more than one line in height, PxPlus adds scrollbars and applies word wrapping. If the height of the multi-line is less than or equal to the height of a line of text, no scrollbars are drawn, and the text will automatically scroll to the left as the input box is filled. Input lengths and formats, as well as **[Auto Complete](Multi-Line.htm#autocomplete)** and **[Calendar](Multi-Line.htm#calendar)** functionality, may be applied to multi-line controls. For syntax details, see **[MULTI_LINE](../../../directives/multi_line.md)** directive.

For information on adding a multi-line to a panel using the **[NOMADS Panel Designer](../../../NOMADS%20Graphical%20Application/Panel%20Designer/Introduction.md)**, see **[Multi-Line Control](../../../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Multi-Line%20Control/Overview.md)**.

**_Examples:_**

> M1=100,M2=200,M3=300   
>  MULTI_LINE M1,@(70,10,12,1)   
>  MULTI_LINE WRITE M1,"The quick brown fox jumped"   
>  MULTI_LINE M2,@(70,13,12,5),LEN=30   
>  MULTI_LINE WRITE M2,"The quick brown fox jumped"   
>  MULTI_LINE M3,@(70,19,12,1),OPT="BL"   
>  M3'BACKCOLOUR$="WHITE"   
>  MULTI_LINE WRITE M3,"over the lazy dog."   
>  OBTAIN *

The examples below show multi-lines that are a single line and several lines high.

> When a multi-line with a height of one is displayed, it is actually drawn with a height greater than 1 (one) to accommodate the height of the text plus white space above and below it.

A third multi-line is also included that is locked and borderless. This type of multi-line is often used for display-only text that may need to be changed dynamically. Locked multi-lines are normally greyed out, so the background colour may need to be changed to match the panel background.

**[MULTI_LINE WRITE](../../../directives/multi_line.md)** is used to load a string into the input area. You can set the**'Value** property to do this as well.

For a list of properties that can be applied to a **_multi-line_** , see **[Multi_Line Properties](../../../control_object_properties/multiline_properties.md)**.

## Formatting Input

An input format can also be imposed on the multi-line using the **[FMT=](../../../directives/multi_line.htm#Mark2)** option in the **MULTI_LINE** directive or by setting the **['Fmt$](../../../properties/fmt_.md)** property.

**_Example:_**

> M1=100,M2=200   
>  MULTI_LINE M1,@(62,8,10,1),FMT="#,##0.00-"   
>  MULTI_LINE WRITE M1,"-123.456"   
>  MULTI_LINE M2,@(62,10,10,1)   
>  M2'FMT$="#,##0.00-"   
>  SET_FOCUS M2

> See **[Data Format Masks](../../../appendix/data_format_masks.md)**.

##  Auto Complete

The PxPlus _Auto Complete_ feature enables multi-line controls to show suggested text based on partially typed entries in an attached drop box. With this functionality turned on, a multi-line field can be set up to remember what a user has entered so that the next time he/she begins to type, it will display a list of previously-entered words/phrases that match what the user has typed thus far.

When defining this type of Auto Complete scenario, the **READONLY=** parameter should be set to **NO**. This allows the user to remove any unwanted Auto Complete entries that are, for example, the result of spelling or typing errors. To remove unwanted entries, the user must first use the Up/Down arrow keys on the keyboard to highlight the Auto Complete entry in the drop down list and then immediately press the Delete key. If the user presses another key before pressing Delete, then only a single character in the input control is deleted.

#### **Note:**  
NOMADS offers a utility for specifying Auto Complete definitions that can be assigned to multi-lines on a panel. See **[Auto Complete](../../../NOMADS%20Graphical%20Application/System%20Maintenance%20Tools/System%20Options/Auto%20Complete.md)**.

Auto Complete is also useful for handling repetitive data entry. In this case, you can populate the data in advance so that the user will receive suggestions from a pre-set list of matches as he/she types in the field. The pre-set data may be retrieved from an existing source data file used in your application and accessed in _Read Only_ mode. Auto Complete entries that are based on pre-set data with the **READONLY=** parameter set to **YES** cannot be removed by the user.

To set up a multi-line to use Auto Complete functionality, a definition string must be built and specified using the**HLP=** clause when the multi-line is created, or using the**'AutoComplete$** property (see **[Dynamic Control Properties](../Introduction.htm#dynamic)**).

The definition string consists of a number of parameter settings separated by semi-colons:

**AUTOPURGE=YES | NO** |  Automatically purges expired records. Expired words or phrases are only purged when the multi-line is accessed. Default is NO.  
---|---  
**DATAFILE=**_path$_ |  Name of keyed file that contains the words/phrases. This file should be resident and accessible on the local workstation.  
**DISPLAY** _=string$_ |  String specifying the structure of the items displayed in the Auto Complete drop box. The _string$_ consists of a combination of literals and fields or subfields formatted as follows: _type_ \+ **TAB** +{ _value_ | _FieldNum_ \+ **TAB** \+ _FieldOffset_ \+ **TAB** \+ _FieldLen_ }+$0A$ []  **_Where:  
_**_  
type_ can be**L** for literal value (with _value_ supplied) _or_**F** for field references (with _FieldNum_ ,_FieldOffset_ and _FieldLen_ supplied). A _Fieldnum_ of 0 _(zero)_ represents the current key and a _FieldLen_ of 0 _(zero)_ indicates the remainder of the field value beginning at the specified offset.  
**EXPIRED=**_num_ |  Number of days a given record will be used before expiry. If this is not set or set to 0, the words/phrases do not expire.  
**FIELD=**_num_ |  Field that is being displayed.  
**KNO=**_num_ |  Key number to be used.  
**LENGTH=**_num_ |  Maximum number of characters that will be displayed.  
**OFFSET=**_num_ |  Starting position within the field to be displayed.  
**PREFIX=**_string$_ |  Prefix that will be used for searching matching words/phrases.  
**READONLY=YES|NO** |  PxPlus does not automatically update the key file when the user enters a new word and/or phrase. Default is YES.  
**RETVAL=**_string$_ |  String specifying the structure of the value to be returned and loaded into the multi-line. The _string$_ consists of a combination of literals and fields (same as the format described for**DISPLAY=** parameter above). Used in conjunction with the *obj/mlac.pvc object class. Overrides any settings in**FIELD** =,**OFFSET=** and**LENGTH=** parameters.  
  
When setting _AutoComplete_ using the**HLP=** clause, the definition string must be prefixed with "[AutoComplete]":

> Parameters$="DATAFILE=ac_clname.dat;KNO=1;FIELD=2;READONLY=YES"  
>  MULTI_LINE ctl_id, @(10,2,15,1)),HLP="[AutoComplete]"+parameters$

Quotes or apostrophes can be used to surround any of the AutoComplete parameter values so that trailing or leading spaces remain intact, as in the following examples.

**_Example (using quotes)_ :**

> MULTI_LINE 100,@(10,10,30,1),HLP="[AutoComplete]DATAFILE=test.dat;FIELD=2;PREFIX=""CLIENTCO """

**_Example (using apostrophes):_**

> MULTI_LINE 100,@(10,10,30,1),HLP="[AutoComplete]DATAFILE=test.dat;FIELD=2;PREFIX='CLIENTCO '"

When using the**'AutoComplete$** property, just specify the parameters:

> ctl_id'AutoComplete$="DATAFILE=ac_clname.dat;KNO=1;FIELD=2;READONLY=YES"

For multi-lines that are intended for remembering previous entries, a keyed file must be set up to store the entries. Generally, a keyed file should be created by you for each set of multi-line entries required for your application:

> 0010 LET F$="ac_clname.dat"; ERASE F$,ERR=*NEXT  
>  0020 KEYED F$,[1:1:30:"C"],0,-40

Auto Complete will be based on the internal key of the keyed file, which must be case insensitive for this functionality to work correctly. If the key is case sensitive, all lowercase keys will be ignored. For information on creating keyed files in PxPlus, see **[KEYED](../../../directives/keyed.md)** directive.

Once the user enters new text in the multi-line, each word/phrase will be saved to the keyed file. When the user tries to type the same information again, he/she will be presented with a match from the associated keyed file before he/she finishes typing.

For multi-lines that are intended for pre-set entries, the associated keyed file will already be populated with data. This could be an existing source data file used in your application. It is recommended that the**READONLY=** parameter be set to**YES** when defining this type of Auto Complete scenario; otherwise, the existing data may become corrupted as PxPlus tries to update the file with new user entries.

**_Example:_**

In the following example, the Auto Complete definition for MULTILINEA is specified using the**MULTI_LINE** directive declaration, and for MULTILINEB, it is specified using the**'AutoComplete$** property. They both use the same key file.

> F$="AutoComplete.dat";   
>  ERASE F$,ERR=*NEXT   
>  KEYED F$,[1:1:30:"C"],0,-40   
>  MULTILINEA=1000;   
>  MULTILINEB=1001   
>  AUTODEF$="Datafile=Autocomplete.dat;Readonly=NO"   
>  MULTI_LINE MULTILINEA,@(35,4,20,1),HLP="[AutoComplete]"+AUTODEF$   
>  MULTI_LINE MULTILINEB,@(35,8,20,1)   
>  MULTILINEB'AUTOCOMPLETE$=AUTODEF$   
>  ESCAPE

> The result appears similar to the Address edit box in a web browser. Initially, the key file is empty, so nothing will happen when the user types. When the user enters new text in the multi-line, each word/phrase will be saved in the keyed file. If the user tries to type the same word/phrase again, it will find a match from the list before he/she finishes typing.

## Client/Server Environment

In this scenario, the file used by the Auto Complete logic to store and/or retrieve data must be on the client machine by default. If you wish to retrieve data from a _read-only_ file on the server, you must use additional program logic to accomplish this.

Set the**'AutoCTL** property of the**MULTI_LINE** with a _ctl_id_ to be generated when content is needed for loading values in the Auto Complete drop box. The final character of the list is used as the list item delimiter. Assign the list to the **MULTI_LINE** 's **AutoValue$** property. This will cause the drop box to be loaded for selection.

It is also possible to create a list with tab-separated display/return value pairs that displays the first item of the pair in the drop box but uses the second item to load the multi-line when selected.

**_Example:_**

A list consisting of 

> "12345 - Barry's Bargain Bistro"+$09$+"12345"+$0A$+"12121 - ABC Company"+$09$+"12121"+$0A"

... would display the following:

> 12345 - Barry's Bargain Bistro   
>  12121 - ABC Company

... but would load 12345 or 12121 into the multi-line, depending on the selection.

PxPlus supplies an object class definition called _*obj/mlac.pvc_ to build the list of entries for the drop box. The object class should be instantiated after the multi-line it services has been created. The class possesses two methods, a **Load(**_ctl_id_**)** method which uses the multi-line's assigned CTL value as an argument. Once loaded, the **GetList$( )** method can be called to create the contents of the Auto Complete drop box associated with the multi-line.

The contents of the drop box may be a simple list defined by the**FIELD=** ,**OFFSET=** and**LENGTH=** parameters, and where the selected value is loaded back into the multi-line. It may also be a more complex combination of literals and fields defined using the**DISPLAY=** and**RETVAL=** parameters, which also allows a different value to be loaded into the multi-line than the one displayed.

**_Example:_**

> m=1000,m1=1001   
>  AutoDef$="[AutoComplete]Datafile=cstfile;KNO=1;Field=2;READONLY=YES"   
>  MULTI_LINE m,@(10,28,25,1),HLP=AutoDef$   
> m'AutoCtl=m1   
> mlac=NEW("*obj/mlac");   
> mlac'Load(m)   
>  SET_FOCUS m   
>  WHILE 1   
>  OBTAIN *   
>  IF CTL=4 \   
>  THEN BREAK   
>  IF CTL=m1 \   
>  THEN m'AutoValue$=mlac'GetList$( )   
>  WEND   
>  DROP OBJECT mlac   
>  END

> ##  Calendar

The PxPlus _Calendar_ feature provides a user-friendly way to enter date information into a multi-line input area. When applied to a multi-line, a button will be added to the control that can be clicked to invoke a month calendar popup. This will allow users to pick a date to be inserted automatically into the multi-line input area.

The format of the date inserted is based on the formatting rules of the **[DTE( )](../../../functions/dte.md)** function.

To set up a multi-line to use _Calendar_ functionality, a definition string must be built and specified using the**HLP=** clause when the multi-line is created or by setting the **['Calendar$](../../../properties/calendar.md)** property. See **[Dynamic Control Properties](../Introduction.htm#dynamic)**.

The definition string consists of a number of parameter settings separated by semi-colons:

**CALENDAR=YES | NO** |  **YES** turns on the Calendar support.**NO** turns it off. Default is **NO**.  
---|---  
**CONTENTS=**_string$_ |  Text or graph appearing on the button. Default is **{!DATE}**.  
**DTE=**_date$_ |  Date formatting rules. Default is based on the**DTE( )**. Semi-colon cannot be part of this parameter (if used, the string following will be ignored). Date code should include**%**_percent;_ however, if not used, input will be parsed based on the format provided. If a time formatting string is included, the current time is used.  
**HEIGHT=**_num_ |  Height of the button. Defaults to the height defined for**MULTI_LINE**.  
**SHOWBUTTON=YES | NO** |  **YES** shows the Calendar button.**NO** hides it. Default is**YES.**  
**WIDTH=**_num_ |  Width of the button. Default width is equal to the height defined for the**MULTI_LINE** ; i.e. the default size is a _square_.  
  
When setting the _Calendar_ feature using the**HLP=** clause, the definition string must be prefixed with "[Calendar]":

> MULTI_LINE ctl_id,@(10,2,15,1)),HLP="[Calendar]CALENDAR=YES;DTE=%Y%M%D"

When using the**'AutoComplete$** property, just specify the parameters:

> ctl_id'Calendar$="CALENDAR=YES;DTE=%Y%M%D;CONTENTS={!Calendar}"

**_Example:_**

> A=1000,B=1001   
>  MULTI_LINE A,@(10,16,10,1),HLP="[CALENDAR]CALENDAR=YES"   
>  PRINT @(0,13),"A: ",A'CALENDAR$   
>  MULTI_LINE B,@(40,16,15,1)   
>  B'CALENDAR$="CALENDAR=YES;DTE=%Y %Ml %D;Contents=Enter Date;Width=10"   
>  PRINT @(0,14),"B: ",B'CALENDAR$   
>  WHILE 1   
>  OBTAIN *   
>  IF CTL=4 \   
>  THEN BREAK   
>  WEND

To invoke the calendar, the user can use any of the following methods:

  * Use the mouse or touchpad to click on the calendar button.
  * Press Shift-F2 when the multi-line has focus.



The calendar popup displays the following features:

  * A grid-like format makes it easy to distinguish the days of the month.
  * The text and background of the current date, as well as the current selection, are presented in a different color for clear identification.
  * Previous/Next month arrow buttons allow the user to browse through the months of the currently selected year.
  * To see the entire month at a glance, the last day(s) of the previous month and the first day(s) of the next month are displayed.



For syntax details on the PxPlus Calendar feature, see **[MULTI_LINE](../../../directives/multi_line.htm#calendar)** directive.
