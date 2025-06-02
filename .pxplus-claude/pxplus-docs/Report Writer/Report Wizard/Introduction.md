# Report Writer  
  
**Report Wizard**|   
---|---  
  
The **Report Wizard** provides a quick and simple way to create a report that does not require any special formatting. The wizard walks you through a series of eight **[Steps](Introduction.htm#steps)** that result in the creation of a new report definition. When the definition is complete, you can preview the results and revisit any steps. When you exit the wizard, the definition is loaded into the **[Report Designer](../Designing%20a%20Report/Report%20Designer/Overview.md)** where you can customize it and make final adjustments before saving it.

To invoke the **Report Wizard** , use one of the following methods:

**Location** |  **Method**  
---|---  
From the **[PxPlus IDE Main Launcher](../../PxPlus%20IDE/IDE%20Main%20Launcher.md)** |  Expand the _Report Writer_ category and select _Report Wizard._  
From the **[Report Designer](../Designing%20a%20Report/Report%20Designer/Overview.md)** menu bar |  From the _File_ menu, select _Report Wizard._ The current report is cleared from the Report Designer (if applicable), and the wizard **[Welcome Panel](Introduction.htm#welcome)** is launched.  
From the **[Report Designer](../Designing%20a%20Report/Report%20Designer/Overview.md)** tool bar |  Select the _Report Wizard_ tool bar button. The current report is cleared from the Report Designer (if applicable), and the wizard **[Welcome Panel](Introduction.htm#welcome)** is launched.  
  
##  Report Wizard Steps

**[Step 1: Name Report](Introduction.htm#step1)**

Give your report a title.

**[Step 2: Select Data](Introduction.htm#step2)**

Choose the data to report on.

**[Step 3: Select Fields](Introduction.htm#step3)**

Select the information to display. Create calculated fields and group functions.

**[Step 4: Organize Data](Introduction.htm#step4)**

Sort and group the data.

**[Step 5: Place Fields](Introduction.htm#step5)**

Determine the placement of the fields in the report.

**[Step 6: Select Records](Introduction.htm#step6)**

Filter the report data.

**[Step 7: Select Layout](Introduction.htm#step7)**

Choose the appearance of the report.

**[Step 8: Finish](Introduction.htm#step8)**

Select the default output destination for the report. Complete the Report Wizard and generate the report definition.

##  Welcome Panel

Invoking the Report Wizard displays the **Welcome** panel, which provides a **_How to Create a Report_** link that launches PxPlus Help documentation.

> Click _Next_ to proceed to the first step. Each step in the wizard presents a panel made up of three main sections:

_Image Bar (left side)_ |  Displays the eight steps for designing a new report.The list of steps is clickable, allowing you to jump ahead and back to navigate through the wizard without having to go through the intermediate steps. Some steps, however, do require others to be performed first before you are able to advance. The image is changeable by setting the **%RW_WIZARD_IMAGE$** variable to the path of the image to be displayed. This allows you to create your own look for the wizard.  
---|---  
_Work Area (right side)_ |  Body of the wizard panel that consists of fields used to process each step.  
_Navigation Bar (bottom)_ |  Consists of buttons that are shown/hidden or enabled/disabled, depending on the step being defined: |  _(First browse button)_ |  Goes directly to **[Step 1: Name Report](Introduction.htm#step1)**.  
---|---  
_Back_ |  Returns to the previous wizard panel.  
_Next_ |  Advances to the next wizard panel. If information is required before advancing to the next panel, a message will display.  
_(Last browse button)_ |  Goes directly to **[Step 8: Finish](Introduction.htm#step8)**.  
_Finish_ |  Completes the **Report Wizard** and saves the report definition. See **[Step 8: Finish](Introduction.htm#step8)**.  
_Cancel_ |  Closes the **Report Wizard** without saving the report definition.  
  
##  Step 1: Name Report

Enter the title of the report to be used on the page header (e.g. Customer Accounts).

> ##  Step 2: Select Data

Identify the type of data source, and then select the **_Click to select the data_** hyperlink button to choose the actual input source. See **[Input Source](../Designing%20a%20Report/Defining%20the%20Data/Input%20Source.md)**.

If a report requires data from multiple related files, you can use a _View_ or a _Query Definition_ as the input source. See **[Query Definition](../../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Query%20Subsystem/Query%20Definition.md)**.

If the main data source type is a _File Name_ or _Table Name_ , additional related data sources may be available for selection by clicking the associated button. See **[Related Data Sources](../Designing%20a%20Report/Defining%20the%20Data/Related%20Data%20Sources.md)**.

> ##  Step 3: Select Fields

Select the fields from the input source to display in the report. Click the check box adjacent to each field, or to select **_all_** the fields, click the check box adjacent to the name of the input source (e.g. vCustomer).

You can create **[Calculated Fields](../Designing%20a%20Report/Defining%20the%20Data/Calculated%20Fields.md)**, which are new fields derived from formulas.

In addition, **[Group Functions](../Designing%20a%20Report/Creating%20the%20Report%20Layout/Group%20Functions.md)** can be created to calculate totals, averages, minimums, maximums and count.

> ##  Step 4: Organize Data

Determine how the data is to be sorted for the report. If the data is to be organized into groups, you must sort the data accordingly. For example, to group data by country and then by region, you must sort the data by _Country + Region_ , and then create groups based on that sort order.

If the data is not to be grouped, you may still want the data sorted in a specific way. The default is to sort by the primary key of the data source.

See **[Sort Sequence](../Designing%20a%20Report/Defining%20the%20Data/Sort%20Sequence.md)** and **[Grouping the Data](../Designing%20a%20Report/Creating%20the%20Report%20Layout/Grouping%20the%20Data.md)**.

> ##  Step 5: Place Fields

Determine the placement of fields in the report in terms of placement in different sections, such as details, or group headers and footers, etc. In addition, determine the order of the fields within a section.

> Select the **Placement Type**  _(Default_ or _Custom)_ :

_Default_ |  Header fields will be placed in the appropriate group header sections, group functions in the group footers and report summary, and the remaining fields in the detail section.  
---|---  
_Custom_ |  Custom placement allows you to select report fields and place them in the appropriate section in the _Field Placement_ list. One or more selected fields can be moved by dragging from the _Report Fields_ list to the _Field Placement_ list or by using the _Add_ , _Add All_ , _Remove_ or _Remove All_ buttons. Once fields are placed, the field order can be changed within a section by using the _Move Up_ and _Move Down_ buttons.  
  
##  Step 6: Select Records

Filter the report data. Define **[Parameters](../Designing%20a%20Report/Defining%20the%20Data/Parameters.md)** and **[Data Filters](../Designing%20a%20Report/Defining%20the%20Data/Data%20Filters.md)** for selecting the records to appear in the report.

_(Support for defining Dynamic Filters was added in PxPlus 2022.)_

Parameters are values supplied by the user or application program when a report is generated, such as a start and stop date. They are often used to set up record selection criteria for filtering the data.

> ##  Step 7: Select Layout

Determine the layout of the report.

> Select the _Orientation_ and _Layout_ for the report. The two types of layouts are:

_Simple View_ |  Presents each field on a separate line with a field description on the left and the field value on the right.  
---|---  
_Tabular_ |  Presents the data in table form with field names as column headers and the field values in the columns.  
  
The _Detail Highlighting_ option is used to highlight alternate report details with background color. See **[Colours](../Designing%20a%20Report/Report%20Options/Overview.htm#colours)** for information on setting the system defaults for this option.

|    
**_Simple View Layout_** |    
**_Tabular Layout_**  
---|---|---  
  
##  Step 8: Finish

Select a default output destination for the report from the drop down list: _Clipboard, HTML document, PDF document, Printer, Tab delimited file_ and _Viewer_.

> The **[Destination Path Expression](../Designing%20a%20Report/Report%20Designer/Overview.htm#dest_path)** is used to generate a destination pathname for the output file created when a report is generated. The destination path is optional for single reports but is required for definitions that generate multiple reports.

_(Support for Destination Path Expressions was added in PxPlus 2022.)_

Prior to completing the wizard, select the **_Click to preview the report using the report viewer_** hyperlink button to view the results. You can go back to previous steps to make any necessary changes.

When done, click _Finish_. The resulting report definition will be loaded into the Report Designer where it can be modified and saved.

## See Also

**[Report Designer](../Designing%20a%20Report/Report%20Designer/Overview.md)**
