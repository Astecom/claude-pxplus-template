# Designing a Report   
  
**Report Options** |  **__**  
---|---  
  
The **Report Options** window is used to set additional report options, including suppressing empty reports, setting alternating background colours on detail lines and defining a custom output destination.

A **[Post Report Logic](Overview.htm#post_rpt)** option has been added, which is used to specify the logic to invoke when a report is complete. If desired, the execution of this logic can be suppressed while testing via the _Preview_ or _Print_ buttons by selecting the **[Suppress Post Report Logic](../../Designer%20Options/Introduction.htm#testing)** check box in **Designer Options** (on the **General** tab).

_(The Post Report Logic option was added in PxPlus 2022.)  
(The Suppress Post Report Logic option was added in PxPlus 2022.)_

To invoke this window, select _Report Options_ from the Report Designer _Options_ menu or click the _Options_ tool bar button.

> This window is divided into the following tabbed panels: **[General](Overview.htm#general)**, **[Colours](Overview.htm#colours)** and **[Custom Interfaces](Overview.htm#custom)**.

**General**  
---  
**Options** |  |  _Suppress empty reports_ |  If there is no data for a report, output nothing to the printer or clipboard. (Viewer, PDF and HTML output will display a blank page.) Default is to print the page header and footer of an empty report.  
---|---  
_Bookmark PDF output when groups change_ |  Generates a bookmark in PDF output whenever a defined control break (data grouping change) occurs within the report. This also generates a bookmark for the Report Summary, if one is defined. The text of the bookmark is based on the data source values that defined the data grouping for the control break.  
_Paginate HTML output when specified groups change_ |  Inserts page breaks when a control break group, which has the _Start new page when group changes_ option set, changes. Page headers and footers will be added to the HTML output where page breaks occur when the output is printed from the browser. Default is to output HTML reports as a single page.

#### **Note:**  
Page breaks in HTML may not be supported by all browsers.  
  
**Colours**  
**Alternating Background Colours** |  Options for setting alternating background colours on detail lines: |  _Alternate Background Colours_ |  |  _Default_ |  Alternate background colours are derived from values in two global variables, **%RW_BgColour1$** and **%RW_BgColour2**. **%RW_BgColour1$** is used for the background colour of the first detail line on each page or the first detail line in a group. **%RW_BgColour2$** is used for the colour of the second detail line. Colours may be defined using their names _(Dark Gray, Black, Dark Red, Light Red, Dark Green, Light Green, Dark Yellow, Light Yellow, Dark Blue, Light Blue, Dark Magenta, Light Magenta, Dark Cyan, Light Cyan, Light Gray, White)_ or an RGB setting (RGB: _n n n**where** n =_ 0 255). If only one colour is set, the other will default to _White_. If no colours are set, the system default will be to have no alternating background colour on detail lines.  
---|---  
_On_ |  Turn On alternating background colours for the current report (overrides system-wide default).  
_Off_ |  Turn Off alternating background colours for the current report (overrides system-wide default).  
_Colour 1  
Colour 2_ |  **_(Available when Alternate Background Colours drop box is set to On)_** Up to two colours must be chosen to alternate as background colours for the detail lines. If one is defined, the other defaults to _White_. The Colour selections are _None_ , _Default_ and _Custom_. _Default_ assumes the _Light Gray_ setting, which uses the current Windows theme background colour. _Custom_ colours can be selected by clicking the paint palette button to invoke the **Color** dialogue.  
**Custom Interfaces**  
**Custom Output Destination** |  Allows a non-standard output destination using a custom output object to be defined for a report. Click the drop-down arrow for selections: |  _Default_ |  Use the default custom object ***rpt/useroutput** or the object specified in the **%RW_UserOutput$** global variable (the latter takes precedence).  
---|---  
_Specify_ |  Specify the name of the custom object to be used for output for the report (overrides existing default custom output objects). This may be a _Fixed_ value or PxPlus _Expression_ if the _Expression_ check box is selected.  
  
This option merely defines what object to use if custom output is required. The Output Destination must be set to _Custom Output_ to actually invoke this option. See **[Setting the Report Destination](../Setting%20the%20Report%20Destination/Overview.md)**.

The Custom Output Destination can be set by selecting _Specify Custom Destination_ from the Report Designer _File_ menu.

For information on creating a custom output object, see **[Custom Output Object Interface](../../Report%20Writer%20User%20Interfaces/Custom%20Output%20Object%20Interface/Overview.md)**.  
  
**Parameter Interface** |  Allows the developer to specify a _Program_ or a _Panel_ to be used to process external parameters that are to be used by the report. See **[Parameters](../Defining%20the%20Data/Parameters.md)**. Click the drop-down arrow for selections: |  _Program_ |  Select this option to specify the program pathname and optional program label (separated with a **;**  _semi-colon_). This may be a _Fixed_ value or PxPlus _Expression_ if the _Expression_ check box is selected. **_Example:_** C:\MyApp\Progs\ParamProg;Init  
---|---  
_Panel_ |  Select this option to specify the panel Library and the name of the panel.  
_Default_ |  Select this option to use the generic parameter interface panel supplied with the Report Writer.  
  
For information on creating a parameter program or panel interface, see **[Custom Parameter Interfaces](../../Report%20Writer%20User%20Interfaces/Custom%20Parameter%20Interfaces/Overview.md)**.

If a parameter interface is not specified or if a program or panel is specified and cannot be found, then the generic parameter interface panel supplied with the Report Writer will be used.  
  
**Post Report Logic** |  Allows the developer to specify logic to invoke when a report is complete. A report is considered complete when the report file is physically closed or, in the case where physical files are not being generated (such as output to the printer, Clipboard or Viewer), when the virtual file would logically be closed. In the case where multiple reports are being generated for individual groups using the **[Start New Report](../Creating%20the%20Report%20Layout/Grouping%20the%20Data.htm#Mark3)** group option, the logic is invoked after each individual file is complete. Logic can consist of a program and arguments to call, logic to execute, or a method from the **[Logic Object Interface](../../Report%20Writer%20User%20Interfaces/Logic%20Object%20Interface/Overview.md)** to invoke. When the logic is invoked, it has access to report properties, field names and method calls (using the report object handle variable THIS), which can be used as arguments. Click the drop down arrow for selections: |  _None_ |  No additional logic is executed when the report is complete.  
---|---  
_Call_ |  Enter a program followed by optional arguments (comma-separated). **_Example:_** "programName",OutputDevice$, DestinationPath$, INV_NUM$  
"myprogram;mylabel",CurrentRecord$, this'recordIolist$()  
_Execute_ |  Enter a PxPlus statement to execute. **_Example:_** msgbox DestinationPath$, "Testing Post Report Logic"  
_Method_ |  Enter a method name and optional arguments. The method must exist within the user defined Logic Object Interface. **_Example:_** myMethod(OutputDevice$, DestinationPath$, INV_NUM$)  
PostReportLogic(this)  
  
_(The Post Report Logic option was added in PxPlus 2022.)_
