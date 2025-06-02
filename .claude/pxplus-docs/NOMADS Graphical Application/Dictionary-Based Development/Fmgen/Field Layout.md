# File Maintenance Generator

**Step 6: File Maintenance Field Layout**|   
---|---  
  
Define the layout for the file maintenance Main panel and any folder panels using either the **[Enhanced Layout](Enhanced%20Layout.md)** or **[Two-Column Layout](Two_column.md)**.

See the tutorial **[How to Use the Enhanced Layout in File Maintenance Generator](../../../How%20To/How%20to%20Use%20Enhanced%20Layout.md)**.

_(The Enhanced Layout was added in PxPlus 2024.)_

  
**_Using Enhanced Layout_** |    
**_Using Two-Column Layout_**  
---|---  
  
This panel consists of the following for both layouts:

**Select field layout options** |  _Define the field layout for the panel._  
---|---  
_Use SmartPhone Layout_ |  Select this check box to use a SmartPhone (single column) layout for the panel; otherwise, a two-column layout is displayed by default. If this check box is selected (or deselected) after fields have been added to the _Layout Grid_ , a _Reset_ message will display: |  |  _Yes_ removes all fields (**_except_** Key fields) from the _Layout Grid_. Data dictionary fields are returned to the _Fields_ list box in their original sequence in the data dictionary definition. Any fonted text fields and horizontal lines previously added are removed, as well as any Smart List Boxes, Smart Charts, Images, etc. If any folder tabs were previously added, an additional message will display.  
---|---  
|  _No_ does not remove any fields from the _Layout Grid_. Folder tabs (if any) remain unchanged.  
_Folder_ |  Select this check box to set up Folder sub-panels. See **[Adding a Folder](Folder.md)**.  
_(Folder Options)_ |  **_(Available when Folder check box is selected)_** Button (beside the _Folder_ check box) that launches the **Folder Options** window for specifying Folder properties. See **[Adding a Folder](Folder.md)**.  
_Panel (or Current Tab)_ |  Indicates the current panel being defined (i.e. Main panel or a Folder tab). See **[Adding a Folder](Folder.md)**.  
_(Maintain Folder Tabs)_ |  **_(Available when Folder check box is selected)_** Button (beside the _Current Tab_ drop box) that launches the **File Maintenance Panel Tabs** window. See **[Adding a Folder](Folder.md)**.  
_(Dependency Definition)_ |  Button (beside the _Maintain Folder Tabs_ button) that launches the **Dependency Definition** window. See **[Dependency Definition](Dependency.md)**.  
_Add Object_ |  Button that displays a list of objects that can be added to the file maintenance panel. See **[Adding Objects](Adding%20Objects.md)**.  
**_Fields List Box and Panel Layout Grid_** To add fields from the selected data dictionary table to the panel, select the fields in the _Fields_ list box on the left. Then, drag and drop them into the _Layout Grid_ on the right to add them to the selected Main panel (or folder panel).  
_(Fields List Box)___|  Lists all the fields in the data dictionary table, which was selected in **[Step 1: Definition](Object%20Definition.htm#ddtable)**. Use this list to select the fields to drag and drop into the _Layout Grid_ on the right when defining the panel layout. You can add one, some or all fields to the _Layout Grid_. See **[Adding Data Dictionary Fields](Add%20Remove%20Fields.htm#add_ddflds)**. To select **_multiple_** fields, use Shift-Click (consecutive selections) or Ctrl-Click (random selections). To select **_all_** fields, click the _Select All_ button. Fields are listed in the same order as they appear in the data dictionary definition (in **[Data Dictionary Maintenance](../../../Data%20Dictionary/Data%20Dictionary%20Maintenance/Overview.md)** on the **Elements** tab). Fields flagged as _Required_ in the data dictionary table are preceded with an *****  _(asterisk)_ , providing that the _Non-File Maintenance Form_ check box was not selected in **Step 1: Definition**. If a field is defined with a **_Multi-Line data class_** that is using **[Extended Validation](../../../Data%20Dictionary/Data%20Classes/Extended%20Validation.md)** with a _Descriptive Field_ specified, the descriptive field will be listed and named **SHOW**._xxxxxx_ (**_where_** _xxxxxx_ is the name of its related field); e.g. SHOW.SalesRep. If the descriptive field is related to a single-segment primary Key field, the descriptive field will not be listed. See **[Adding Extended Validation Descriptive Fields (SHOW.xxxxxx)](Add%20Remove%20Fields.htm#add_show)**. Any data dictionary fields that are removed from the _Layout Grid_ are returned to the _Fields_ list box. Data dictionary fields that are added as **[Hidden Variables](Variables.md)** are shown in gray text as a visual cue only. _(The gray text display to indicate hidden variables was added in PxPlus 2023.)_  
_Layout Grid_ __|  This grid is used to define the layout of the Main panel and any folder panels (if **[Folder Tabs](Field%20Layout.htm#foldertabs)** have been defined). When creating a new file maintenance panel, the _Layout Grid_ initially displays either two Half _Sections_ or _Left Side/Right Side_ columns, depending on the **[Layout](Object%20Definition.htm#layout)** selected in **Step 1: Definition**. If the **[Use SmartPhone Layout](Field%20Layout.htm#smartphone)** check box is selected, only a single _SmartPhone Layout_ column will display. Each layout accommodates a maximum of 50 grid rows. Once fields are added to the _Layout Grid_ , you can **[Move Fields](Moving%20Fields.md)** and **[Remove Fields](Add%20Remove%20Fields.htm#remove_flds)** when needed. **_Key Fields_** Key fields are displayed in dark red bolded font and, by default, occupy cells at the top of the Main panel. Key fields reside on the Main panel only. They cannot be deleted or moved to a folder panel; however, they can be moved to any row on the Main panel by using the drag and drop method. _(The ability to move Key fields to any row on the Main panel was added in PxPlus 2021.)_ If the _Non-File Maintenance Form_ check box was selected in **[Step 1: Definition](Object%20Definition.md)** and a table name was entered, Key fields will not be displayed in dark red bolded font and will be treated the same as other fields. **_HTML Events and HTML Calculations_** Colored ticks in the top left corner of a cell in the _Layout Grid_ indicate the following: A red tick in a cell that contains a data dictionary field or fonted text indicates that an **[HTML Event](Html%20Event.md)** was added.  
A blue tick in a cell that contains a data dictionary field indicates that an **[HTML Calculation](Html%20Calc.md)** was added.  
A magenta tick in a cell that contains a data dictionary field indicates that **_both_** an HTML calculation and an HTML event were added. _(The colored tick indicators were added in PxPlus 2023.)_ **_Right-Click Menus_** Right clicking either on a cell or a column header in the _Layout Grid_ displays different popup menu options, depending on the **[Layout](Object%20Definition.htm#layout)** selected in **Step 1: Definition**. For information on the right-click menu options for each layout, see **[Enhanced Layout](Enhanced%20Layout.htm#rightclick)** and **[Two-Column Layout](Two_column.htm#rightclick)**.  
_Select All (or Deselect All)_ |  Toggle button that is used to select (or deselect) all remaining fields in the _Fields_ list box.  
_Reset_ |  Selecting this button displays a message for resetting the _Layout Grid_. The message will have either two or three possible responses, depending on whether the _Layout Grid_ is being reset when creating a new file maintenance panel or regenerating an existing panel. When creating a **_new_** panel, the _Reset_ message displays _Yes/No_ responses: |  |  _Yes_ removes all fields (**_except_** Key fields) from the _Layout Grid_. Data dictionary fields are returned to the _Fields_ list box in their original sequence in the data dictionary definition. Any fonted text fields and horizontal lines previously added are removed, as well as any Smart List Boxes, Smart Charts, Images, etc. If any folder tabs were previously added, an additional message will display.  
---|---  
|  _No_ does not remove any fields from the _Layout Grid_. Folder tabs (if any) remain unchanged.  
  
If regenerating an **_existing_** panel, the _Reset_ message displays _Yes/No/Cancel_ responses:

|  _Yes_ resets the _Layout Grid_ (including any folder tabs and options) to the original layout when the panel was last generated.  
---|---  
|  _No_ removes all fields (**_except_** Key fields) from the _Layout Grid_. Data dictionary fields are returned to the _Fields_ list box in their original sequence in the data dictionary definition. Any fonted text fields and horizontal lines previously added are removed, as well as any Smart List Boxes, Smart Charts, Images, etc. If any folder tabs were previously added, an additional message will display.  
|  _Cancel_ closes the _Reset_ message. The field layout and folder tabs (if any) remain unchanged.  
  
_(Support for resetting a regenerated panel layout was added in PxPlus 2020.)_  
  
_Hidden Variables_ |  **_(Available when_ [HTML Page](Object%20Definition.htm#formtype) _check box is selected for Form Type)_** Button that launches the **Include Hidden Fields on HTML Page** window for adding hidden variables. See **[Hidden Variables](Variables.md)**. _(The Hidden Variables button was added in PxPlus 2022.)_  
_(Info Line)_ |  The Info line is located above the **[Navigation Bar](Invoking%20Fmgen.htm#sections)** and displays information about a selected field or control in the _Fields_ list box or the _Layout Grid_. For example, when a data dictionary field is selected, the Info line displays the field name, type and size. When a Smart List Box control is selected, the Info line displays the width, height, query library/panel, and _Span Multiple Lines_ settings. _(The Info Line was added in PxPlus 2021.)_  
  
## See Also

**[How to Use the Enhanced Layout in File Maintenance Generator](../../../How%20To/How%20to%20Use%20Enhanced%20Layout.md)  
[File Maintenance Generator Steps](Fmgen%20Introduction.htm#steps)  
[Updating a Generated File Maintenance Panel](Updatepnl.md)  
[Adding and Removing Fields](Add%20Remove%20Fields.md)  
[Moving Fields](Moving%20Fields.md)  
[Adding Objects](Adding%20Objects.md)**
