# Report Designer  
  
**Menu Options**|   
---|---  
  
The **Report Designer** menu bar provides an alternative method to access Report Designer functions that are also available on the **[Tool Bar](Report%20Designer%20Tool%20Bar.md)**. A list of menu bar options is provided below in their order of appearance: **[File](Report%20Designer%20Menu.htm#file)**, **[Edit](Report%20Designer%20Menu.htm#edit)**, **[Data](Report%20Designer%20Menu.htm#data)**, **[Format](Report%20Designer%20Menu.htm#format)**, **[Options](Report%20Designer%20Menu.htm#options)**, **[Projects](Report%20Designer%20Menu.htm#projects)** and **[Help](Report%20Designer%20Menu.htm#help)**.

**File** |  Drop-down menu of options for defining a report.  
---|---  
_New_ |  Define a new report or define elements in a new **[Report Writer Library](../../Report%20Writer%20Libraries/Introduction.md)**.  
_Report Wizard_ |  Launches the **[Report Wizard](../../Report%20Wizard/Introduction.md)** for creating a new report.  
_Open_ |  Open an existing report or library file.  
_Save_ |  Save the report definition. See **[Saving the Report Definition](../Saving%20the%20Report%20Definition/Overview.md)**.  
_Save As_ |  Name and save the report definition. See **[Saving the Report Definition](../Saving%20the%20Report%20Definition/Overview.md)**.  
_Restrict Access_ |  Set up **[NOMADS Security](../../../NOMADS%20Graphical%20Application/System%20Maintenance%20Tools/Security%20Manager/Overview.md)** system for restricting or allowing access to reports. If the NOMADS security classification file does not exist, a message will display.  
_Delete_ |  Delete a selected report definition. See **[Deleting Report Definitions](../Deleting%20Report%20Definitions/Overview.md)**.  
_Associate a Library  
Disassociate a Library_ |  See **[Associating Other Report Writer Libraries](../../Report%20Writer%20Libraries/Introduction.htm#associate)**.  
_Output Destination_ |  Select an alternate default destination: _Clipboard, Custom Output, HTML document, PDF document, Printer, Tab delimited file, Viewer_. See **[Setting the Report Destination](../Setting%20the%20Report%20Destination/Overview.md)**.  
_Specify Custom Destination_ |  If _Custom Output_ is selected as the report _Output Destination_ , a specific custom output object may be specified for the report. See **[Custom Output Object Interface](../../Report%20Writer%20User%20Interfaces/Custom%20Output%20Object%20Interface/Overview.md)**.  
_Generate Report_ |  Send the generated report to the designated _Output Destination_. See **[Generating a Report](../../Generating%20a%20Report/Introduction.md)**.  
_Page Setup_ |  Set up page settings for printer output. See **[Page Setup](../Creating%20the%20Report%20Layout/Page%20Setup.md)**.  
_Print Preview_ |  Preview the report output. See **[Testing the Report](../Testing%20the%20Report/Overview.md)**.  
_Print_ |  Send the report to a printer.  
_Exit_ |  Close the **Report Designer**.  
_(Files list)_ |  Displays a list (up to 10) of the most recently selected or saved reports.  
  
**Edit** |  Drop-down menu of options for editing the report layout.  
---|---  
_Cut_ |  See **[Editing the Layout](../Creating%20the%20Report%20Layout/Editing%20the%20Layout.md)**.  
_Copy_ |  See **[Editing the Layout](../Creating%20the%20Report%20Layout/Editing%20the%20Layout.md)**.  
_Paste_ |  See **[Editing the Layout](../Creating%20the%20Report%20Layout/Editing%20the%20Layout.md)**.  
_Clear area_ |  Clear all data from the highlighted cells. This function also resets the cell formatting to default settings. This differs from selecting cells and pressing Delete, which only clears the data.  
_Insert Line_ |  Insert a line below the current line.  
_Delete Line_ |  Delete the current line.  
_Insert Column_ |  Insert a column to the right of the current column. If the _Inherit attributes from column on left when inserting a column_ designer option has been turned _On_ , then when a column is inserted, the cell attributes (i.e. font, colors, alignment, word-wrap and borders) from the previous column (on the left) are inherited on a cell-by-cell basis. If column 1 is inserted or the option is not selected, then the column cells will be assigned default attributes.

#### **Note:**  
If the cell to the left is a _joined_ cell (see **[Join](../Creating%20the%20Report%20Layout/Formatting.htm#join)**), the inherited attributes would be those of the cell if it were _not_ joined and therefore may not match the attributes displayed when joined.

The _Inherit attributes from column on left when inserting a column_ option is at the bottom of the main Report Designer panel and in the **[Designer Options](../../Designer%20Options/Introduction.htm#inherit_attrib)** window, which is accessed through the _Options_ menu. _(The Inherit attributes from column on left when inserting a column option was added in PxPlus 2023.)_  
_Delete Column_ |  Delete the current column.  
_Find Text_ |  Find the specified text value in the layout. Find will search data items, formulas and fixed text within the cells.  
_Groups_ |  Create, update or delete a group. See **[Grouping the Data](../Creating%20the%20Report%20Layout/Grouping%20the%20Data.md)**.  
  
**Data** |  Drop-down menu of options for defining the input source, sort sequence and fields to display.  
---|---  
_Input Source_ |  Determine the source of the data to be displayed in the report. See **[Input Source](../Defining%20the%20Data/Input%20Source.md)**.  
_Related Sources_ |  Select additional related data sources, if applicable. See **[Related Data Sources](../Defining%20the%20Data/Related%20Data%20Sources.md)**.  
_File Link Maintenance_ |  Launches the **[File Link Maintenance](../../../Data%20Dictionary/File%20Link%20Maintenance.md)** utility. _(File Link Maintenance was added to the Data menu in PxPlus 2021 Update 1.)_  
_Sort Sequence_ |  Define **[Sort Sequence](../Defining%20the%20Data/Sort%20Sequence.md)**.  
_Calculated Fields_ |  Define **[Calculated Fields](../Defining%20the%20Data/Calculated%20Fields.md)**.  
_Parameters_ |  Set up report **[Parameters](../Defining%20the%20Data/Parameters.md)**.  
_Filters_ |  Define **[Data Filters](../Defining%20the%20Data/Data%20Filters.md)**.  
  
**Format** |  Drop-down menu of options for formatting cells in the report layout.  
---|---  
_Formula_ |  Define **[Formulas](../Creating%20the%20Report%20Layout/Selecting%20Report%20Elements.htm#formulas)**.  
_Image_ |  Add or update **[Images](../Creating%20the%20Report%20Layout/Selecting%20Report%20Elements.htm#images)**.  
_Hyperlink_ |  Add **[Hyperlinks](../Creating%20the%20Report%20Layout/Selecting%20Report%20Elements.htm#hyperlinks)**.  
_Display Format_ |  Define a format mask, either a _Fixed_ value or an _Expression_. See **[Display Format](../Creating%20the%20Report%20Layout/Formatting.htm#format)**.  
_Bulk Edit Cell Format_ |  Set formatting attributes in a range of cells simultaneously. See **[Bulk Edit Cell Format](../Creating%20the%20Report%20Layout/Formatting.htm#bulkedit)**.  
_Word Wrap_ |  Set **[Word Wrap](../Creating%20the%20Report%20Layout/Formatting.htm#wordwrap)** to _On_ /_Off_.  
_Text Alignment_ |  Set text alignment horizontally (Left, Center or Right) **_and_** vertically (Top, Middle or Bottom). Click the drop-down arrow for a list of selections: _Left Top, Left Middle, Left Bottom, Center Top, Center Middle, Center Bottom, Right Top, Right Middle, Right Bottom_. _(Compound text alignment options were added in PxPlus 2019.)_  
_Text Font_ |  Set the **[Font](../Creating%20the%20Report%20Layout/Formatting.htm#format)** and font attributes (i.e. style, point size, orientation).  
_Text Colour_ |  Select the **[Text Colour](../Creating%20the%20Report%20Layout/Formatting.htm#format)**.  
_Background Colour_ |  Select the **[Background Colour](../Creating%20the%20Report%20Layout/Formatting.htm#format)**.  
_Border Size_ |  Adjust the border width to _Thin, Medium_ or _Wide_. The width must be set prior to adding the border. The currently selected width is displayed on the _Border width_ button on the **Report Designer** tool bar.  
_Borders_ |  Set preference for displaying **[Borders](../Creating%20the%20Report%20Layout/Formatting.htm#format)**. Available selections are _Full grid; Edges Only, Inside only, Left Edge, Right Edge, Top Edge, Bottom Edge, No Borders_. All borders are black.  
_Alternate Cell Condition_ |  Launches the **Define Filters** dialogue for specifying the conditions under which an alternate cell definition will be used. See **[Alternate Cell Condition](../Creating%20the%20Report%20Layout/Conditional%20Cell%20Definition.md)**.  
_Switch Cell Definition_ |  Switch between two cell definitions if an alternate cell definition has been created. See **[Switch Cell Definition](../Creating%20the%20Report%20Layout/Conditional%20Cell%20Definition.md)**.  
_Add/Modify Line Condition_ |  Launches the **Define Filters** dialogue for adding a condition to a line. See **[Conditional Lines](../Creating%20the%20Report%20Layout/Conditional%20Lines.md)**.  
_Join_ |  **[Join](../Creating%20the%20Report%20Layout/Formatting.htm#join)** highlighted cells.  
_Unjoin_ |  Reset joined cells to individual cells.  
  
**Options** |  Additional Report and Report Designer options.  
---|---  
_Report Options_ |  Launches **[Report Options](../Report%20Options/Overview.md)**.  
_Designer Options_ |  Launches **[Designer Options](../../Designer%20Options/Introduction.md)**.  
  
**Projects** |  Drop-down menu for projects.  
---|---  
_Create New Project_ |  Launches the **[Create Project](../../../PxPlus%20IDE/IDE%20Main%20Launcher.htm#createproject)** dialogue for entering a new project for the current working directory. Click the Query button to select a different working directory.  
_Add to Project_ |  Launches the **Add to Project** dialogue for adding the current task to an existing project that is selected from the _Project_ drop box. To manage all the tasks within a project, see **[Project Maintenance](../../../Project%20Maintenance.md)**. For information on adding tasks to a project from other locations, see **[Adding Tasks to Projects from Other Locations](../../../PxPlus%20IDE/Adding%20Tasks%20to%20Projects%20from%20Other%20Locations.md)**.  
  
**_Help_** |  Miscellaneous information.  
---|---  
_About_ |  **Report Writer** version information.
