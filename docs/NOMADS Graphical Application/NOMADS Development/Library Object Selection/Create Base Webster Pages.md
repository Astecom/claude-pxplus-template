# Library Object Selection

**Create Base Webster+ Page(s)**|   
---|---  
  
The **Create Base Webster+ Page(s)** utility is the first step in converting existing NOMADS panels into Webster+ HTML pages in situations where an existing application is being moved to a Web environment using Webster+.

Where possible, information from the screen library is converted to Webster+ **[Short Codes](../../../Webster/Short%20Codes.md)**. However, not everything that is supported in NOMADS has an existing short code or option in Webster+.

The utility creates **_both_** an HTML file **_and_** a PxPlus program for every panel converted. The HTML file is located in the **[Webster+ Pages Directory](Menu%20Options.htm#webster)** defined for the current screen library. The program's location is determined according to the **PREFIX** rules currently in effect.

#### **Important Note:**  
The HTML pages and programs that are created are a **_starting point only_** and will require editing to complete functioning Webster+ pages.

_(The Create Base Webster+ Page(s) utility was added in PxPlus 2025.)_

To invoke this utility, use one of the following methods:

**Location** |  **Method**  
---|---  
From **[NOMADS Library Object Selection](Overview.md)** |  Select _Webster+ > Create Base Webster+ Panel(s)_ from the top menu bar.

#### **Note:**  
This menu option is enabled only when a Webster+ **_pages_** directory has been defined.  
  
This is done by selecting the **[Define Webster+ Pages Directory](Menu%20Options.htm#webster)** option from the _Webster+_ menu.  
  
From **[NOMADS Library Object Selection](Overview.md)** |  Select an individual _Object Name_ in the Object List. Then, right click to display the popup menu. Select the _Create Base Webster+ Panel_ option.  
  
If this utility is accessed from the right click popup menu, only the selected panel is converted, and the conversion happens without displaying an additional dialog. When the conversion is completed, a message box displays.

**_Example:_**

> If the utility is accessed from the _Webster+_ menu at the top, the **Create Base Webster+ Page(s)** window displays.

> This window consists of the following:

_Screen Library_ |  Displays the path to the current screen library and is locked for editing.  
---|---  
_Webster+ Pages Directory_ |  Displays the Webster+ **p _ages_** directory defined for the screen library and is locked for editing.  
_(Objects Grid)_ |  All of the Dialog and Window objects from the screen library, **_except_** for those last generated as File Maintenance panels, are loaded into the grid.  
_Convert (Check Boxes)_ |  In the _Convert_ grid column, select the check box beside the NOMADS Object Name to be converted to Webster+. A single check box or multiple check boxes can be selected in random or consecutive order. To select **_all_** of the check boxes, click the _Select All_ check box in row 1.  
_Convert_ |  Button that is used to convert the selected Object Names. When the conversion is completed, a message displays to indicate the total number of panels that were converted.  
_Exit_ |  Exits the utility.  
  
## What is Converted for the HTML Pages?

Every .HTML page created by the **Create Base Webster+ Page(s)** utility will share some common code at the beginning to specify the title (the **[[ttl]](../../../Webster/Short%20Codes.htm#ttl)** short code) and the program associated with the page (the **[form program =xxxxxx.wbs]**).

Below this section, the HTML page contains short codes for the various object types on the panel.

**On Exit** logic defined for the NOMADS Panel Header is **_not_** converted.

The converted HTML file ends with the **[[/form]](../../../Webster/Short%20Codes.htm#form)** short code.

**_Which Control Types are converted?_**

This table lists the control types that are converted and provides additional information about the conversion.

**Control Type** |  **Conversion Information**  
---|---  
**Common to Multiple Types** |  Foreground and Background control colors are converted using the **[text__xxxxx_](../../../Webster/Webster%20Defined%20Classes.htm#text)** and **[fill__xxxxxx_](../../../Webster/Webster%20Defined%20Classes.htm#fill)** classes. Width and Height approximations are converted using the **[size](../../../Webster/Short%20Code%20Options.htm#size)** option. _Initially Disabled_ attribute is usually converted using the **[disabled](../../../Webster/Short%20Code%20Options.htm#disabled)** option, **_except_** where mentioned below. Tips are converted using the **[tip](../../../Webster/Short%20Code%20Options.htm#tip)** option. Font and Font Size are converted by setting **[font__xxxxx_](../../../Webster/Webster%20Defined%20Classes.htm#font_x)** classes. The Bold Font attribute is converted via the **[bold](../../../Webster/Webster%20Defined%20Classes.htm#bold)** class. Control Properties defined as expressions are evaluated prior to creating the HTML page. Controls with **Button Pressed** or **On Change** logic are given events (named for the control name), referencing methods created in the **.wbs** program; e.g. event=MULTI_LINE_!_CHANGED.  
**[Buttons](../../Creating%20Panel%20Controls/Button%20Control/Overview.md)** |  Conventional button controls are converted using the **[[button]](../../../Webster/Short%20Codes.htm#button)** short code, and Web-Style buttons (hyperlinks) are converted using the **[[link]](../../../Webster/Short%20Codes.htm#link)** short code. Images are supported using the **[[symbol]](../../../Webster/Short%20Codes.htm#symbol)** short code. Drop buttons are supported using the **[dropmenu](../../../Webster/Short%20Code%20Options.htm#dropmenu)** option with a corresponding **[[menu]](../../../Webster/Short%20Codes.htm#menu)** short code and separate events for each **[menu](../../../Webster/Short%20Code%20Options.htm#menu)** option.  
**[Charts](../../Creating%20Panel%20Controls/Chart%20Control/Chart.md)** |  Only Charts that are loaded with the **[SmartLoad](../../Creating%20Panel%20Controls/Chart%20Control/Chart.htm#chartproperties)** option will be converted to Webster+ using the **[[chart]](../../../Webster/Short%20Codes.htm#chart)** short code. Smart Load charts are converted using the **[query](../../../Webster/Short%20Code%20Options.htm#query)** and optional **[queryif](../../../Webster/Short%20Code%20Options.htm#queryif)** options. If **Conditional Trigger Test** logic references a control on the panel, that control must have **On Change** logic defined to trigger an event in order to update the page display. Support for the **[event](../../../Webster/Short%20Code%20Options.htm#event)** option.  
**[Check Boxes](../../Creating%20Panel%20Controls/Check%20Box%20and%20Tri-State%20Control/Overview.md)** |  Converted using the **[[checkbox]](../../../Webster/Short%20Codes.htm#checkbox)** short code. Images are **_not supported_**. Support for the **[onright](../../../Webster/Short%20Code%20Options.htm#onright)**, **[off](../../../Webster/Short%20Code%20Options.htm#off)**, **[on](../../../Webster/Short%20Code%20Options.htm#on)** and other options.  
**[Drop Boxes](../../Creating%20Panel%20Controls/Drop%20Box%20Control/Drop%20Box%20Properties.md)** |  Converted using the **[[list]](../../../Webster/Short%20Codes.htm#list)** short code with the **[size=](../../../Webster/Short%20Code%20Options.htm#size)** option only specifying a width. Support for Data Classes defined as drop boxes. Support for **[Dynamic Data Classes](../../../Data%20Dictionary/Data%20Classes/Dynamic.md)** using the **[Load from File](../../../Data%20Dictionary/Data%20Classes/Dropbox.htm#load_file)** option for List Values.

#### **Note:**  
In Webster+, drop boxes using Dynamic Data Classes will be sorted alphabetically by return value (value or translation value).

Smart Load drop boxes are converted using the **[query](../../../Webster/Short%20Code%20Options.htm#query)** and optional **[queryif](../../../Webster/Short%20Code%20Options.htm#queryif)** options. Initially disabled drop boxes are converted using the **[locked](../../../Webster/Short%20Code%20Options.htm#locked)** option. Data values use the **[[data]](../../../Webster/Short%20Codes.htm#data)** short code and the **[rowsep](../../../Webster/Short%20Code%20Options.htm#rowsep)** and **[colsep](../../../Webster/Short%20Code%20Options.htm#colsep)** options.  
**[Fixed/Fonted Text](../../Creating%20Panel%20Controls/Text%20Control/Text.md)** |  Converted using the **[[show]](../../../Webster/Short%20Codes.htm#show)** short code. **[Align](../../../Webster/Short%20Code%20Options.htm#align)** option supported as "left" _(default)_ , "right" or "center".  
**[Folders](../../Creating%20Panel%20Controls/Folder%20Controls/Folder%20Properties.md)** |  Created using the **[[folder]](../../../Webster/Short%20Codes.htm#folder)** short code and class of either "web" or "bar" for the main panel. Panels comprising the folder tabs are converted using **[[tab]](../../../Webster/Short%20Codes.htm#tab)** short codes. A panel with a folder and three tabs will be converted into one HTML file with one associated **.wbs** program even if the tab panels were not selected for conversion.  
**[Frames (Boxes)](../../Creating%20Panel%20Controls/Frame%20Control/Frame.md)** |  Only Frame controls with a height of 1 line or less are converted to Webster+ as horizontal lines spanning the entire (whole) section, regardless of the width defined for the NOMADS control.  
**[Grids](../../Creating%20Panel%20Controls/Grid%20Control/Grid%20Properties.md)** |  Created using the **[[grid]](../../../Webster/Short%20Codes.htm#grid)** short code. Program option to point to a method created in the **.wbs** program to load the grid data into a memory file. Support for grid header definitions using the **[[col]](../../../Webster/Short%20Codes.htm#col)** short code with **[ttl](../../../Webster/Short%20Code%20Options.htm#ttl)**, **[width](../../../Webster/Short%20Code%20Options.htm#width)**, **[align](../../../Webster/Short%20Code%20Options.htm#align)** and **[source](../../../Webster/Short%20Code%20Options.htm#source)** options. Support for the **[gridlines](../../../Webster/Short%20Code%20Options.htm#gridlines)** option.  
**[Horizontal Line Shapes](../../Creating%20Panel%20Controls/Shape%20Control/Shape.md)** |  Converted as horizontal lines spanning the entire (whole) section, regardless of the width defined for the NOMADS control.  
**[Images](../../Creating%20Panel%20Controls/Image%20Control/Image.md)** |  Converted using the **[[image]](../../../Webster/Short%20Codes.htm#image)** short code. Support for the **[file](../../../Webster/Short%20Code%20Options.htm#file)** and **[align](../../../Webster/Short%20Code%20Options.htm#align)** options. All images are scaled to fit within the designated size in Webster+.  
**[List Boxes](../../Creating%20Panel%20Controls/List%20Box%20Controls/List%20Box%20Type.md)** |  Converted using the **[[list]](../../../Webster/Short%20Codes.htm#list)** or **[[tree]](../../../Webster/Short%20Codes.htm#tree)** short code with the **[size=](../../../Webster/Short%20Code%20Options.htm#size)** option specifying both width and height. Support for Data Classes defined as list boxes. Support for **[Dynamic Data Classes](../../../Data%20Dictionary/Data%20Classes/Dynamic.md)** using **[Load from File](../../../Data%20Dictionary/Data%20Classes/Listbox.htm#load_file)** option for List Values.

#### **Note:**  
In Webster+, list boxes using Dynamic Data Classes will be sorted alphabetically by return value (value or translation value).

Smart Load list boxes converted using the **[query](../../../Webster/Short%20Code%20Options.htm#query)** and optional **[queryif](../../../Webster/Short%20Code%20Options.htm#queryif)** options. If **Conditional Trigger Test** logic references a control on the panel, that control must have **On Change** logic defined to trigger an event in order to update the page display. Column header data is converted using the **[[col]](../../../Webster/Short%20Codes.htm#col)** short code with the **[ttl](../../../Webster/Short%20Code%20Options.htm#ttl)**, **[align](../../../Webster/Short%20Code%20Options.htm#align)** and **[source](../../../Webster/Short%20Code%20Options.htm#source)** options. Initially disabled list boxes are converted using the **[locked](../../../Webster/Short%20Code%20Options.htm#locked)** option. Data values use the **[[data]](../../../Webster/Short%20Codes.htm#data)** short code and the **[rowsep](../../../Webster/Short%20Code%20Options.htm#rowsep)** and **[colsep](../../../Webster/Short%20Code%20Options.htm#colsep)** options. Tree view list boxes that are **_not_** Smart Controls are converted using a **[program](../../../Webster/Short%20Code%20Options.htm#program)** option to point to a method created in the **.wbs** program to load the tree view data into a memory file.  
**[Multi-Lines](../../Creating%20Panel%20Controls/Multi-Line%20Control/Multi-Line%20Properties.md)** |  Converted using the **[[input]](../../../Webster/Short%20Codes.htm#input)** short code. Support for **[format](../../../Webster/Short%20Code%20Options.htm#format)**, **[default](../../../Webster/Short%20Code%20Options.htm#default)**, **[uppercase](../../../Webster/Short%20Code%20Options.htm#uppercase)**, **[align](../../../Webster/Short%20Code%20Options.htm#align)**, **[locked](../../../Webster/Short%20Code%20Options.htm#locked)**, **[query](../../../Webster/Short%20Code%20Options.htm#query)** and password options. Numeric multi-lines or those with a format or query defined are all converted as one line high.  
**[Radio Buttons](../../Creating%20Panel%20Controls/Radio%20Button%20Control/Overview.md)** |  Converted using the **[[radio]](../../../Webster/Short%20Codes.htm#radio)** short code. Images are **_not supported_**. Radio buttons sharing the same control name will be converted into separate whole sections (either aligned vertically or horizontally). Support for the **[onright](../../../Webster/Short%20Code%20Options.htm#onright)** option.  
  
## What is Not Converted for the HTML Pages?

This table provides information about what is not converted for the HTML pages.

Logic Associated with the Panel Header:  
  
**Pre-Display** Logic **Post-Display** Logic **On Exit** Logic |  If there is logic to be executed at any time while loading the form, this can be accomplished with the use of the **[[execute]](../../../Webster/Short%20Codes.htm#execute)** short code. **_Example:_** [execute perform "_panel_name.wbs_ ;_method_name_ ",err=*proceed] **_Where:_** _panel_name.wbs_ is the name of the program created by the utility. _method_name_ is the name of the method manually added to that program.  
---|---  
Foreground and Background Colors for the Panel |  This can be controlled by other means in Webster+.  
Some Control Types: Shapes other than Horizontal lines Frames with Heights of more than 1 line Horizontal Scrollbars Vertical Scrollbars Charts not loaded via SmartLoad External Controls Embedded Panels |  These controls are converted only as red text (using the **[[show]](../../../Webster/Short%20Codes.htm#show)** short code) as a reminder to the developer that they were not actually converted to the Webster+ HTML page. The HTML added for these controls should be removed after the conversion is completed.  
**Post Create** and **When Receiving Focus** Logic for individual controls |  While the **On Change** (**When Button Pressed** , **When Entry is Selected** or **On Change**) logic is converted to a Webster+ event, any **Post Create** or **When Receiving Focus** logic defined for a control is **_not_** converted.  
Precise Screen Layout |  Controls within approximately the same line in NOMADS will be converted on the same Webster+ line with **_three_** non-breakable spaces (**& nbsp**) between each control for separation. Each approximate line is surrounded by the **[[section whole]](../../../Webster/Short%20Codes.htm#section)** and [\section] short codes. After conversion, the HTML file should be edited by replacing all or some of these whole sections with the appropriate Webster+ section short codes - [section half], [section third], [section quarter] and [section flex] - to control the Webster+ screen layout and resizing as required.  
Background Colors for Check Boxes and Radio Buttons |  In NOMADS, these colors control the color of the actual check box or radio button portion of the control only. In Webster+, the **[fill_xxxxx](../../../Webster/Webster%20Defined%20Classes.htm#fill)** classes control the background color of the entire control; therefore, these colors are **_not_** converted.  
Visual Classes |  Since most appearance-related attributes are controlled via style sheets in the Web, only Foreground and Background colors for controls are converted. All Theme and Visual Class settings are ignored.  
Initially Hidden Attribute |  Webster+ has no hidden option. Controls may be hidden by adding code to the panel's **.wbs** program to use the Hide method in the Webster+ Object.  
Dependencies |  Any dependencies defined for the panel are **_not_** converted. Dependencies may be added to the panel's **.wbs** program by using the **[[depends]](../../../Webster/Short%20Codes.htm#depends)** short code.  
Italics Font Attribute |  Webster+ does **_not_** support this via an option. The Font Name specified with the **[font_xxxx](../../../Webster/Webster%20Defined%20Classes.htm#font_x)** class would need to include 'Italics'.  
  
See **[Example HTML Page](Create%20Base%20Webster%20Pages.htm#Mark1)** below.

See **[Example HTML Page Running in Webster+](Create%20Base%20Webster%20Pages.htm#Mark2)** below.

## What is Converted for the PxPlus (.wbs) Program?

The PxPlus programs created contain an initial section common to all programs. The name of the program (determined by the panel name) and the path to the bound HTML page are the only variables. This logic intercepts the events triggered by changes to the Web page and sends program control to the proper methods defined for the events below.

Any button control with **When Button Pressed** logic defined will result in a method called **EVENT_CONTROL_NAME_PRESSED** (where CONTROL_NAME is the name of the button control).

Any other control type with **On Change** logic defined will result in a method called **EVENT_CONTROL_NAME_CHANGED** (where CONTROL_NAME is the name of the control).

All of the above event methods are created as an outline with only the method label, a remark line indicating what happened in NOMADS and the EXIT statement. It will be necessary for the developer to review the NOMADS code indicated and translate it appropriately to work in Webster+.

See **[Example PxPlus .wbs Program](Create%20Base%20Webster%20Pages.htm#Mark3)** below.

## Example NOMADS Panel Conversion

For this example, a simple NOMADS panel (Sample) has been defined as shown below:

> When converting the Sample panel above, an .HTML file (_sample.html_) will be created in the Webster+ **_pages_** directory defined for the screen library, and a _sample.wbs_ PxPlus program will be created according to the current **PREFIX** rules.

**_Example HTML Page_** _(sample.html)_

> <!DOCTYPE html>  
>  <html>  
>  <head>  
>  <meta name="author" content="Susan" />  
>  </head>  
>  <body>  
>  [ttl]sample[/ttl]<br>  
>  [form program=sample.wbs]<br>  
>  [section whole]  
>   
>  [show "Sample Panel to be converted to Webster+" size=37.5/1.88 align=left class=font_200,text_#0000ff,fill_default]&nbsp;&nbsp;&nbsp;  
>  [/section]  
>  <br>  
>  [section whole]  
>   
>  [show "Input 1:" size=10 align=left]&nbsp;&nbsp;&nbsp;  
>  [input MULTI_LINE_1$ size=28 event=MULTI_LINE_1_CHANGED]&nbsp;&nbsp;&nbsp;  
>  [/section]  
>  <br>  
>  [section whole]  
>   
>  [show "Input 2:" size=10 align=left]&nbsp;&nbsp;&nbsp;  
>  [input MULTI_LINE_2$ size=33 event=MULTI_LINE_2_CHANGED]&nbsp;&nbsp;&nbsp;  
>  [/section]  
>  <br>  
>  [section whole]  
>   
>  [show "Box/Frame BOXES_1$ not converted" size=15/5 align=center class=text_red bold]&nbsp;&nbsp;&nbsp;  
>  [/section]  
>  <br>  
>  [section whole]  
>   
>  [/section]  
>  [section whole]  
>  [radio RADIO_BUTTON_1$ size=23/2.25 event=RADIO_BUTTON_1_PRESSED]Radio Button 1[/radio]&nbsp;&nbsp;&nbsp;<br>[radio RADIO_BUTTON_1$ size=22/2.25]Radio Button 2[/radio]&nbsp;&nbsp;&nbsp;<br>[radio RADIO_BUTTON_1$ size=22/2.25]Radio Button 3[/radio]&nbsp;&nbsp;&nbsp;<br><br>  
>   
>  [/section]  
>  <br>  
>  [section whole]  
>   
>  [checkbox CHECK_BOX_1$ size=16/2.25 event=CHECK_BOX_1_PRESSED]Check Box[/checkbox]&nbsp;&nbsp;&nbsp;  
>  [/section]  
>  <br>  
>  [section whole]  
>   
>  [show "Locked 1:" size=10 align=left]&nbsp;&nbsp;&nbsp;  
>  [input MULTI_LINE_3 size=15 locked]&nbsp;&nbsp;&nbsp;  
>  [show "Locked 2:" size=10 align=left]&nbsp;&nbsp;&nbsp;  
>  [input MULTI_LINE_4 size=15 locked]&nbsp;&nbsp;&nbsp;  
>  [/section]  
>  <br>  
>  [section whole]  
>   
>  <hr>  
>   
>  [button id=BUTTON_1$ size=14/2.75 event=*close class=text_#ffffff,fill_#0000ff text="Exit"]&nbsp;&nbsp;&nbsp;<br><br>  
>  [/form]

**_Example HTML Page Running in Webster+_**

> After conversion, all of the elements, except the frame control, have been converted and look similar; however, the alignment is not the same since there are only whole sections in use.

The developer would need to edit the HTML files as follows:

  * Remove the short codes created for any controls not converted.
  * Correct alignment by removing **& nbsp** codes and assign **[[section]](../../../Webster/Short%20Codes.htm#section)** short codes for whole, half, third, quarter or flex sections as desired.
  * Fine-tune the converted file as needed.



**_Example PxPlus ._****_wbs_ _Program_** _(sample.wbs)_

> ! sample.wbs - Webster program for sample panel  
>  ! Initially generated by Create Base Webster+ Page(s) Utility on 15/04/25  
>  !  
>  %webster'BindFile$="c:\webster2024\pages/sample.html"  
>  !  
>  ! Handle events  
>  GOTO LNO("EVENT_"+_event$,ERR=*NEXT)  
>  %webster'msgbox("Invalid event: "+_event$,"Internal Error - "+PGM(-3),"!")  
>  !  
>  EXIT  
>  !  
>  EVENT_MULTI_LINE_1_CHANGED:  
>  ! Perform ";change_input_1"  
>  EXIT  
>  !  
>  EVENT_MULTI_LINE_2_CHANGED:  
>  ! Perform ";change_input_2"  
>  EXIT  
>  !  
>  EVENT_RADIO_BUTTON_1_PRESSED:  
>  ! Perform ";change_radio_button"  
>  EXIT  
>  !  
>  EVENT_CHECK_BOX_1_PRESSED:  
>  ! Perform ";change_check_box"  
>  EXIT

## See Also

**[Short Codes](../../../Webster/Short%20Codes.md)  
[Short Codes Examples](../../../Webster/Webster%20Code%20Examples.md)**  
**[Short Code Options](../../../Webster/Short%20Code%20Options.md)**  
**[Webster+ General Configuration](../../../Webster/General%20Configuration.md)**  
**[Webster+ Setup and Configuration](../../../Webster/Webster%20Setup.md)**  
**[Webster+ Object Methods](../../../Webster/Webster%20Object%20Methods.md)**  
**[Webster+ Object Properties](../../../Webster/Webster%20Object%20Properties.md)**  
**[Webster+ Defined Classes](../../../Webster/Webster%20Defined%20Classes.md)**
