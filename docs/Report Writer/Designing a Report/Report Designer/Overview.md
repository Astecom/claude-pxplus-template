# Designing a Report

**Report Designer** |  **__**  
---|---  
  
The **Report Designer** is used for designing the layout of the report. The **[Menu Bar](Report%20Designer%20Menu.md)** and **[Tool Bar](Report%20Designer%20Tool%20Bar.md)** provide convenient access to Report Designer functions.

Report layouts are saved as PxPlus report definition files, which are used to generate the reports. Single reports can be generated, or multiple individual reports can be generated based on data groupings. For example, if you want to produce invoices using the Report Writer, you may want each invoice in a separate PDF file. If you are printing customer statements, you may want each statement in an individual file for emailing. See **[Generating Multiple Reports](../Creating%20the%20Report%20Layout/Grouping%20the%20Data.htm#Mark2)**.

A **[Destination Path Expression](Overview.htm#dest_path)** may be entered, which will generate a destination pathname for the output file created when a report is generated. You also have the option to **[Suppress Post Report Logic](Overview.htm#testing_param)** that has been defined for the report while testing via the _Preview_ or _Print_ buttons.

_(The Destination Path Expression and Suppress Post Report Logic options were added in PxPlus 2022.)_

Below is an example of a report layout that was designed using the Report Designer:

> To invoke the Report Designer, use one of the following methods:

**Location** |  **Method**  
---|---  
From the **[PxPlus IDE Main Launcher](../../../PxPlus%20IDE/IDE%20Main%20Launcher.md)** |  Expand the _Report Writer_ category and select _Report Designer._  
From the **[NOMADS Session Manager](../../../NOMADS%20Graphical%20Application/NOMADS%20Development/Getting%20Started.htm#sessionmgr)** |  From the _Utilities_ menu, select _Report Writer._  
From the PxPlus Command line |  Enter: **RW**  _(Report Writer)_  
  
The Report Designer can also be made available to end users (within an application) using the **[PROCESS](../../../directives/process.md)** directive.

**_Example:_**

> **PROCESS** "Design","*rpt/rpt.en"

To update a specific report, the Report Definition file can be included as an argument.

**_Example:_**

> **RW** myreport.pvr  
>   
> ** _or_**  
>   
> **PROCESS** "Design","*rpt/rpt.en","myreport.pvr"

A specific report can also be updated from within the Report Designer by selecting _File_ > _Open_ from the menu bar, by clicking the _Open_ tool bar button, by using the file browser, or by selecting a file from the file history list in the _File_ menu.

Additional menu items applicable to the development environment (such as _Data_ > _File Link Maintenance_ and _Projects_ > _Create New Project_ and _Projects_ > _Add to Project_) can be added to the main menu of the Report Designer by including a second argument for developer access set to "1".

**_Example:_**

> **PROCESS** "Design","*rpt/rpt.en",_reportname_ _$_ ,"1"

## Main Panel

After the Report Designer has been invoked, the following options are available on the Main panel:

_Report Name_ |  Descriptive name of the report. Can be used to identify the contents of the report.  
---|---  
_Destination Path Expression_ |  Expression used to generate a destination pathname for the output file created when a report is generated. The destination path is optional for single reports but is required for definitions that generate multiple reports. If supplied, the destination path will only be applied to PDF, HTML, tab-delimited and custom output. It will override the **DestinationFile$** property of a custom output class. If an output file is opened independently for the report, the destination path expression will be ignored. The destination path expression may or may not include a file extension. If omitted, a file extension will be added when the report is generated based on the output destination specified for the report (_.pdf_ for PDF documents, _.htm_ for HTML files, and _.txt_ for tab-delimited files). If an extension is included in the expression that does not match the output destination specified for the report, the output destination will be changed to match the extension when the report is run. This behavior occurs when the report is run through the Report Designer or when using a **[RunReport](../../Generating%20a%20Report/Introduction.htm#runreport)** method or called program. **_Example:_** "custlist" will result in a report file called custlist.pdf, custlist.htm or custlist.txt if the output destination is PDF, HTML or tab-delimited. "custlist."+%EXT$ will result in a report name based on the value of %EXT$. Destination paths for reports that generate multiple files should be designed to evaluate to a unique path name for each file, possibly using record fields or time/date stamps in the path expression. If unique names are not generated, the individual reports will be written together in one file. **_Example:_** "Acct_"+ACCT_NUM$ When the _Print_ button on the Report Designer tool bar is clicked, the destination path expression will be evaluated and used as the default file name when output goes to an HTML document, a PDF document or a tab-delimited file. Clicking the Tool button beside the _Destination Path Expression_ input invokes the **Report Destination Path Expression** window. It allows you to build the expression using literals, system variables, parameter values and data field values. (Data fields will only be available for report definitions generating multiple reports.)

#### **Note:**  
If a report definition specifies multiple reports (i.e. a report group has the **[Start New Report](../Creating%20the%20Report%20Layout/Grouping%20the%20Data.htm#Mark3)** option set), then the _Destination Path Expression_ , if empty, is automatically loaded with the group field name.

_(The Destination Path Expression option was added in PxPlus 2022.)_  
**Testing Parameters** |  |  _Use Test Mode_ |  This option restricts the number of records processed when a report is generated. A processed record is one that is included in the report; i.e. it has not been rejected by the filtering process. The number of records to process is specified in the **[Designer Options](../../Designer%20Options/Introduction.htm#testing)** window, which is accessed through the _Options_ menu.  
---|---  
_Suppress Post Report Logic_ |  This option suppresses the execution of **[Post Report Logic](../Report%20Options/Overview.htm#post_rpt)** that has been defined for the report while testing via the _Preview_ or _Print_ buttons on the Report Designer tool bar. _(The Suppress Post Report Logic option was added in PxPlus 2022.)_  
_Auto Save before preview/print_ |  This option allows you to automatically save the current report definition prior to testing the report by choosing _Preview_ or _Print_. This option is also available in the **[Designer Options](../../Designer%20Options/Introduction.htm#testing)** window, which is accessed through the _Options_ menu.  
_Inherit attributes from column on left when inserting a column_ __|  If this option is selected, when a column is inserted, the cell attributes (i.e. font, colors, alignment, word-wrap and borders) from the previous column (on the left) are inherited on a cell-by-cell basis. If column 1 is inserted or the option is not selected, then the column cells will be assigned default attributes.

#### **Note:**  
If the cell to the left is a _joined_ cell (see **[Join](../Creating%20the%20Report%20Layout/Formatting.htm#join)**), the inherited attributes would be those of the cell if it were _not_ joined and therefore may not match the attributes displayed when joined.

This option is also available in the **[Designer Options](../../Designer%20Options/Introduction.htm#inherit_attrib)** window, which is accessed through the _Options_ menu. _(The Inherit attributes from column on left when inserting a column option was added in PxPlus 2023.)_  
  
## Report Wizard

The **[Report Wizard](../../Report%20Wizard/Introduction.md)** presents a series of eight interactive steps to guide you through the process of creating a new report definition. An alternate user interface is also available that addresses certain security issues. See **[Report Writer Security](../../Report%20Writer%20Security/Introduction.md)**.

The report can be added to a new or existing project by selecting _Projects_ from the Report Designer menu bar. The _Projects_ menu displays the following options:

_Create New Project_ |  Launches the **[Create Project](../../../PxPlus%20IDE/IDE%20Main%20Launcher.htm#createproject)** dialogue for entering a new project for the current working directory. Click the Query button to select a different working directory.  
---|---  
_Add to Project_ |  Launches the **Add to Project** dialogue for adding the current task to an existing project that is selected from the _Project_ drop box. To manage all the tasks within a project, see **[Project Maintenance](../../../Project%20Maintenance.md)**. For information on adding tasks to a project from other locations, see **[Adding Tasks to Projects from Other Locations](../../../PxPlus%20IDE/Adding%20Tasks%20to%20Projects%20from%20Other%20Locations.md)**.
