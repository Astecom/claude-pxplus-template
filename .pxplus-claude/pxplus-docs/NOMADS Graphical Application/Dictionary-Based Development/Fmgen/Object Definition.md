# File Maintenance Generator

**Step 1: File Maintenance Object Definition**|   
---|---  
  
Select the type of form(s) to create and the data dictionary table to use. The file maintenance object for the file definition is also specified, if applicable.

#### **Note:**  
For file maintenance panels, _Table Name_ and _Object Name_ are **_required_** before proceeding to [**Step 2: Properties**](Object%20Properties.md).

> This panel consists of the following:

**Select the file maintenance template and layout format** |  _Select a template to apply its settings to the new panel(s) or HTML page(s) to be generated._ _A template consists of predetermined settings that define the appearance of a panel or HTML page. Using templates makes designing new panels or HTML pages easier and gives them a consistent look and feel._ _The templates data file "maint_templates.dat" is created according to the prefix settings the first time the File Maintenance Generator is accessed on a new PxPlus installation or for a new PxPlus project. Therefore, different PxPlus projects may have unique template data files._ _(Support for creating the templates data file according to prefix settings was added in PxPlus 2021.)_ _Different templates can be used to create different panel or HTML page designs. For example:_ ___A simple maintenance panel with (or without) browse buttons  
__A panel that includes a folder with top (or bottom) tabs  
__A panel that includes a folder with left (or right) sidebar tabs  
__A panel with an embedded toolbar_ **_To save template settings for future use_** _, click the Save Template button in_**[Step 7: Finish](Completion.md)** _._  
---|---  
_File Maintenance Template_ |  **_(Available when a template exists)_** Click the drop-down arrow for a list of previously saved templates (if applicable). See **[Save Template](Completion.htm#save_template)** (in **Step 7: Finish**). When a template is selected, its settings are applied to the current panel or HTML page to be generated. If no templates exist or an existing template is not selected, the default will be _None_. If a template was saved with the _Default Template_ check box selected (see **[Save Template](Completion.htm#save_template)**), that template name will be the default when a new file maintenance panel is being generated, and the words ***Default Template*** will display.

#### **Note:**  
If a panel is being regenerated, the _File Maintenance Template_ drop box will initially be disabled. To enable this drop box and choose another template, select the _Reset Template_ check box.

_(The default setting "None" was added in PxPlus 2019 Update 1.)_  
_Layout_ |  **_(Available when creating a new file maintenance panel)_** Click the drop-down arrow to select the panel layout to use in **[Step 6: Fields](Field%20Layout.md)**. Starting with PxPlus 2024, the **_default_** is the _Enhanced_ layout. |  _Enhanced_ |  When selected, the _Layout Grid_ defaults to two Half sections. You can leave the rows as Half sections or change individual rows to a different Section size (i.e. _Full Section_ , _Half Section_ , _Third Section_ or _Quarter Section_) by using the right-click menu. See **[Enhanced Layout](Enhanced%20Layout.md)**.

#### **Important Note:**  
The _Enhanced_ layout is **_not_** backwards compatible with previous versions.

_(The Enhanced layout was added in PxPlus 2024.)_  
---|---  
_Two-Column_ |  When selected, the _Layout Grid_ defaults to the _Left Side_ and _Right Side_ layout that existed prior to PxPlus 2024. You can leave the rows as Half rows or change individual rows to a different size (i.e. _Full Row_ or _Half Row_) by using the right-click menu. See **[Two-Column Layout](Two_column.md)**.  
  
The _Layout_ option cannot be changed when regenerating a panel.

If you are creating a new panel and have not entered anything in **Step 6: Fields** , you can still go back to **Step 1: Definition** and change the _Layout_ option; otherwise, a message will display.

#### **Note:**  
If regenerating a panel that was created using an earlier version of the File Maintenance Generator (i.e. prior to PxPlus 2024), the _Layout_ option will display _Two-Column_ and be disabled.

_(The Layout option was added in PxPlus 2024.)_  
  
_(Copy Templates from another location)_ |  **_(Available when no templates are defined)_** Button (beside the _File Maintenance Template_ drop box) that launches the **Copy File Maintenance Templates** window. This window is used to copy the file maintenance templates from an _existing_ templates data file (**maint_templates.dat**) to the templates data file in the current PxPlus installation or project. This allows previously defined templates to be available in subsequent PxPlus installations or projects without having to recreate them. For example, assuming that file maintenance templates were defined in PxPlus 2020, after installing PxPlus 2021, you would need to use the _Copy Template_ button to copy those existing templates to the currently empty templates data file in PxPlus 2021. This window consists of the following: |  _Template File_ |  Specify the location of the _existing_ file maintenance templates data file (**maint_templates.dat**) to copy from.  
---|---  
_OK_ |  Copies the existing templates from the selected data file into the currently empty templates data file. The _File Maintenance Template_ drop box is loaded with the templates from the specified file, and the _Copy Templates_ button is hidden.  
_Exit_ |  Closes the **Copy File Maintenance Templates** window without copying any templates.  
  
#### **Note:**  
If a panel is being regenerated and the template used is invalid for the new installation or project, the template will be reset to the original value if it is valid after the copy is complete.

_(The Copy Template button was added in PxPlus 2020.)_  
  
_(Delete Template)_ |  **_(Available when a previously saved template is selected)_** Button (beside the _File Maintenance Template_ drop box) that is used to delete a template. Prior to deleting a template, a message will display. This button is enabled when a previously saved template (other than _None_) is selected from the _File Maintenance Template_ drop box.

#### **Note:**  
If the template that was used to generate a panel is subsequently deleted, a message will display when regenerating the panel, stating that the template is no longer valid. However, the template settings that were used to generate the original panel will not be deleted.  
  
_Reset Template_ |  **_(Available when an existing panel is being regenerated)_** Select this check box to enable the _File Maintenance Template_ drop box and reset the template by choosing one from the drop box. The settings associated with the selected template will be used instead of the settings when the panel was generated. If the _Reset Template_ check box is unchecked after another template has been selected, the original template name and its settings will be put back to the way they were on the original panel. By default, this check box is not selected. When generating a **_new_** file maintenance (or inquiry-only) panel, this check box is hidden. _(The Reset Template option was added in PxPlus 2020.)_  
_Screen Designer_ |  **_(Available when an existing panel is being regenerated)_** Button that opens the regenerated file maintenance panel in the **[NOMADS Panel Designer](../../Panel%20Designer/Introduction.md)**. If any File Maintenance settings were changed, a message will display when clicking this button. _(The Screen Designer button was added in PxPlus 2023.)_  
**Select the type of form(s) to create** |  _A NOMADS panel, an HTML page or both types can be created. Non-File Maintenance forms, which do not use the standard file maintenance logic, can also be created._  
_Form Type_ |  Select the type of form(s) to create: a _NOMADS Panel**(Default)**_ , a Webster+ _HTML Page_ , or both types. The _Non-File Maintenance Form_ check box is used for creating a NOMADS panel and/or HTML page that does not use the standard file maintenance logic. Selecting this check box provides the capability to generate informational/dashboard-like panels or pages. Entering a data dictionary table is optional. If a table is entered, fields can be added to the layout if desired. The _Non-File Maintenance Form_ setting is not saved to a template. Before an HTML page can be created, a location must be defined to store the **[Webster+](../../../Webster/Webster.md)** generated HTML forms. This is done by selecting _Webster+_ > _Directory_ on the **Library Object Selection** menu bar. If the location is not defined and the _HTML Page_ option is selected, a message will display. _(The Form Type option was added in PxPlus 2021.)  
(The Non-File Maintenance Form option was added in PxPlus 2022.)_  
**Select the table from the data dictionary** |  _A definition must exist in the data dictionary (providex.ddf and providex.dde files) to generate a new panel._  
_Table Name_ |  Name of an existing _data dictionary_ table for which the file maintenance object is being defined. Click the Query Table View button _(magnifying glass)_ to invoke the **[Lookup Table Names](../../../Data%20Dictionary/Data%20Dictionary%20Maintenance/Filtering%20the%20Table%20Names%20Lookup.md)** window to search for a table name or type the table name. If the _Non-File Maintenance Form_ check box is selected, the table name is optional.

#### **Note:**  
When the panel is generated, the table name is recorded in the _Tag Field_ property in the **[Panel Header](../../Panel%20Designer/Panel%20Header/Overview.htm#properties)** record for the main panel.  
  
_Panel Title_ |  Title to display at the top of the generated panel. The panel title is **_required_** before proceeding to the next step. By default, the panel title displays as _xxxxxx_ _Maintenance_ (**_where_** _xxxxxx_ is the _Table Name_ selected from the data dictionary). If the _Inquiry Only_ check box is selected, the panel title defaults to _xxxxxx_ _Inquiry_. If the _Non-File Maintenance Form_ check box is selected, a panel title must be entered.

#### **Note:**  
The default _Panel Title_ is derived using the data dictionary description and one of the standard message library references - 'FM_TITLE' for the word 'Maintenance' and 'FM_INQ' for the word 'Inquiry'.  
  
For generating panels in languages other than English, corresponding message library entries should be created.  
  
_Panel Title Symbol_ |  **_(Applicable for HTML Pages Only)_** A symbol can be optionally added before the panel title in Webster+ HTML pages. It can be either a Font Awesome symbol or a standard PxPlus bitmap selected from the Bitmap Library lookup button. For a list of Font Awesome symbols, visit <https://fontawesome.com/v4/icons/>.

#### **Note:**  
When specifying the Font Awesome symbol name, do not include the leading 'fa-'.

_(The Panel Title Symbol option was added in PxPlus 2022 Update 1.)_  
**Enter****the maintenance object** |  _Generated file maintenance panels require a file maintenance object as the**Default Program** in the _**[Panel Header](../../Panel%20Designer/Panel%20Header/Overview.htm#properties)** _for a generated main panel. This object contains properties that correspond to the options on the_**[Step 2: Properties](Object%20Properties.md)** _panel. This object can be unique to each generated file maintenance panel or can be shared among different generated file maintenance panels._  
_File Maintenance Object_ |  Click the drop-down arrow for available selections: |  _Use the Standard File Maintenance Object_ |  **_(Default)_** The panel will use the standard ***win/fm_maint.pvc** object and the properties on the **[Step 2: Properties](Object%20Properties.md)** panel will be set from the default values stored as %NOMADS Object properties. See **[File Maintenance and Object Inheritance](File%20Maintenance%20and%20Object%20Inheritance.md)**. PROPERTY FM_Update_Option$='R'  
PROPERTY FM_New_Option$='0'  
PROPERTY FM_Clear_Option$='0'  
PROPERTY FM_Auto_Save_Option$='0'  
PROPERTY FM_Confirm_New_Rec$='0'  
PROPERTY FM_Acknowledge_Writes$='0'  
PROPERTY FM_Confirm_Deletes$='1'  
PROPERTY FM_Acknowledge_Deletes$='1'

#### **Note:**  
These properties may be overridden by setting them in the **[NOMADS Environment Maintenance](../../Maintain%20Nomads%20Environment.md)** utility or by setting them individually elsewhere.  
  
---|---  
_Create a New File Maintenance Object_ |  Enter the name of a **_new_** object to be created with properties defined on the **[Step 2: Properties](Object%20Properties.md)** panel.  
_Use an Existing File Maintenance Object_ |  Enter the name of an **_existing_** object to be used with properties defined at the time the object was initially created.

#### **Note:**  
If an existing file maintenance object is entered, the options in **[Step 2: Properties](Object%20Properties.md)** will be set based on the values in the selected file maintenance object and cannot be modified. See **[File Maintenance and Object Inheritance](File%20Maintenance%20and%20Object%20Inheritance.md)** for information on file maintenance objects.  
  
_(The File Maintenance Object drop box was added in PxPlus 2020.)_  
  
_Object Name_ |  Input depends on the _File Maintenance Object_ drop box selection: |  |  If _Use the Standard File Maintenance Object_ is selected, _Object Name_ defaults to the standard ***win/fm_maint.pvc** object and is disabled.  
---|---  
|  If _Create a New File Maintenance Object_ is selected, enter a **_new_** _Object Name_. If a duplicate _Object Name_ is entered, a message will display.  
|  If _Use an Existing File Maintenance Object_ is selected, enter an **_existing_** _Object Name_ or click the Query button. If an _Object Name_ is entered that does not exist, a message will display.  
  
#### **Note:**  
Object names **_must_** end with the file extension .**_pvc_**.  
  
_Inquiry Only_ |  Select this check box to create a file maintenance panel in **_inquiry_** mode, which allows **_view-only access_** to records. Records cannot be added, edited or deleted. If this check box is selected, the _Panel Title_ defaults to _xxxxxx_ _Inquiry_. In addition, all options in **[Step 2: Properties](Object%20Properties.md)**, as well as the _Required Fields_ option in **[Step 4: Controls](Control%20Settings.md)**, are disabled.  
**Enter the optional HTML interface program** |  _As with the File Maintenance logic in NOMADS, hooks are available to allow additional logic to be performed for the HTML page. If the HTML page requires additional logic at some or all of the following points, ensure that the methods are named as shown below:_ |  **FM_INIT** |  Will be performed on initial page display.  
---|---  
**FM_POST_READ** |  Will be performed after each record is read.  
**FM_PRE_WRITE** |  Will be performed before writing any record.  
**FM_POST_WRITE** |  Will be performed after writing a record.  
**FM_PRE_REMOVE** |  Will be performed before removing a record.  
**FM_POST_REMOVE** |  Will be performed after removing a record.  
_Interface Program_ |  **_(Applicable for HTML Pages Only)_** Enter the name of the interface program or click the Query button. An interface program is needed if you want to add code for any of the methods listed above. It is also needed to code events associated with various **[Objects](Adding%20Objects.md)** (Buttons, Grids, Input Fields, etc.) that you are adding to the HTML page in **Step 6: Fields**. If adding a **[Grid](Grid.md)** object, the HTML interface program is **_required_** to create a method to load the Grid using a memory file. The interface program name entered will be used as the default **[Initialization Program](Grid.htm#init_program)**. For an example of an interface program, see **[Grid Example](Grid.htm#grid_example)**. For additional Grid information, see **[Using Grids in Webster+](../../../Webster/Using%20Grids%20in%20Webster.md)**. _(The Interface Program option was added in PxPlus 2021.)_  
_(Edit Interface Program)_ |  **_(Applicable for HTML Pages Only Available when Interface Program is entered)_** Button (beside the _Interface Program_ field) that is used to create or edit the interface program by launching the program editor. The program editor that is launched will either be the **[Integrated Toolkit](../../../toolkit1/overview.md)**™ (*IT) or **[Ed+](../../../Ed%20Program%20Editor.md)**, depending on whether the **[%NOMADS'Program_Editor$](../../Appendix/NOMADS%20Variables/Overview.htm#programeditor)** property has been set. If this property is not set, the default will be the Integrated Toolkit. If running the File Maintenance Generator from the Web IDE, the program editor will be Ed+. _(The Edit Interface Program button was added in PxPlus 2025.)_  
  
## See Also

**[File Maintenance Generator Steps](Fmgen%20Introduction.htm#steps)**
