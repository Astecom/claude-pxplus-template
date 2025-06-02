# NOMADS Graphical Application

**File Maintenance Generator**|   
---|---  
  
The **File Maintenance Generator** provides a simple seven-step process that, when completed, generates new NOMADS panels and/or **[Webster+ HTML](../../../Webster/Webster.md)** pages as file **_maintenance_** panels, **_inquiry-only_** panels or **_non-file maintenance_** forms.

File maintenance panels provide the capability to browse, write, edit and delete records. Inquiry-only panels provide view-only access to records, as well as browsing capability. Non-file maintenance forms create informational/dashboard-like NOMADS panels and/or HTML pages. See **[Panel Contents](Fmgen%20Introduction.htm#contents)**.

Invoke the File Maintenance Generator either from the PxPlus IDE Launcher or NOMADS Library Object Selection. See **[Invoking File Maintenance Generator](Invoking%20Fmgen.md)**.

The **[File Maintenance Generator Steps](Fmgen%20Introduction.htm#steps)** include options to:

  * Create a single panel.
  * Create a panel with a folder consisting of multiple tabs.
  * Select from a list of objects that can be added to the panel.
  * Select the location of browse and action buttons on the panel.
  * Define any additional buttons to be placed before and/or after the browse and action buttons.
  * Determine whether acknowledgement and confirmation messages are to be displayed.
  * Determine what update logic should be used.
  * Specify whether controls are to be hidden, shown, locked, unlocked, enabled or disabled based on preset conditions.
  * Define the settings for a multi-segment primary Key field.



**_Enhanced Layout and Two-Column Layout_**

The File Maintenance Generator provides two panel layouts to choose from when creating a new file maintenance panel: the **[Enhanced Layout](Enhanced%20Layout.md)** and the **[Two-Column Layout](Two_column.md)**.

Prior to PxPlus 2024, only the _Two-Column_ layout was available. Starting with PxPlus 2024, the _Enhanced_ layout has been added, and it is now the default layout when creating a new file maintenance panel. This can be changed by setting the **[Layout](Object%20Definition.htm#layout)** option in **Step 1: Definition**.

See the tutorial **[How to Use the Enhanced Layout in File Maintenance Generator](../../../How%20To/How%20to%20Use%20Enhanced%20Layout.md)**.

#### **Important Note:**  
The _Enhanced_ layout is **_not_** backwards compatible with previous versions.

While either layout can be used to define folders, add data fields, add objects, etc., the _Enhanced_ layout has distinct advantages. It provides the capability to format rows as true _Full_ , _Half_ , _Third_ or _Quarter_ sections and maintains these sections when generating NOMADS panels and Webster+ HTML pages. Panels can be up to four sections (columns) wide, giving you greater flexibility when adding controls to a panel.

With the _Two-Column_ layout, NOMADS panels can have a maximum width of two columns, which are referred to as the _Left Side_ and _Right Side_. Instead of treating each column as a true Half, each side is made as wide as it needs to be to accommodate the widest control. On the other hand, Webster+ HTML pages can have multiple sections placed across the page, depending on the **[HTML Section Size](Two_column.htm#html_size)** setting (accessed from the right-click menu).

_(The File Maintenance Generator was added in PxPlus 2019.)  
(The ability to create HTML pages using File Maintenance Generator was added in PxPlus 2021.)  
(The Enhanced Layout was added in PxPlus 2024.)_

##  File Maintenance Generator Steps

This table describes each step:

**Steps** |  **Description**  
---|---  
**[Step 1: Object Definition](Object%20Definition.md)** |  Define the file maintenance object:

  * Set the _Layout_ option (Defaults to _Enhanced_)
  * Select the type of form(s) to create: NOMADS panel, Webster+ HTML page, or both
  * Set the _Non-File Maintenance Form_ option if creating an informational/dashboard-like NOMADS panel and/or HTML page
  * Select a data dictionary table
  * Enter a file maintenance object for the file definition
  * Enter an optional HTML interface program

_(The Layout option was added in PxPlus 2024.)_  
**[Step 2: Object Properties](Object%20Properties.md)** |  Define the options for record update behavior, screen behavior and record messages.  
**[Step 3: Screen Layout](Screen%20Layout.md)** |  Define the options for screen positioning, browse and action buttons, and panel header:

  * Define NOMADS **[Panel Header Options](Screen%20Layout.htm#addtl_options)** and add panel notes
  * Specify the locations of **[Browse](Screen%20Layout.htm#location_browse)** and **[Action](Screen%20Layout.htm#location_action)** buttons
  * Define any **[Additional Buttons](Screen%20Layout.htm#addtl_buttons)** to add before and/or after the browse and action buttons
  * Specify whether an optional embedded panel and/or HTML page will be included
  * Specify a Webster+ template file

  
**[Step 4: Control Settings](Control%20Settings.md)** |  Define the options for field and screen layout (i.e. prompt alignment, tab sequence, etc.), fonted text and full horizontal lines.  
**[Step 5: Key Settings](Key%20Settings.md)** |  Define the options for a record query or a fixed Key segment only if the primary Key has more than one segment.  
**[Step 6: Field Layout](Field%20Layout.md)** |  Define the layout for the file maintenance Main panel and any folder panels:

  * Select the **[Fields](Field%20Layout.htm#fields_layout)** to add to the panel layout
  * **[Add Objects](Adding%20Objects.md)**
  * Define **[Folder Options](Folder.htm#folderoptions)** and specify the Folder location
  * Add **[Dependency Definitions](Dependency.md)** to panel controls
  * Select right-click menu options for manipulating the panel layout when using either the **[Enhanced Layout](Enhanced%20Layout.htm#rightclick)** or **[Two-Column Layout](Two_column.htm#rightclick)**
  * **[Preview](Preview.md)** the layout

_(The ability to add Smart List Boxes, Smart Charts, Images, Embedded Panels, HTML Short Codes, and Hyperlink Prompts was added in PxPlus 2021.)  
(The ability to add Buttons was added in PxPlus 2021 Update 1.)  
(The ability to add Input Fields, Text and Grids was added in PxPlus 2022.)_  
**[Step 7: Generator Completion](Completion.md)** |  Complete the File Maintenance Generator and generate the panels. Before panels are generated:

  * Review selections for previous steps and make any necessary changes
  * Enter the name of a **[File Maintenance Template](Completion.htm#save_template)** for saving settings
  * Set the _Launch the Screen Designer_ option to edit the generated panel(s) after completion

  
  
##  Panel Contents

The generated file maintenance panels are based on data files defined in a PxPlus **[Data Dictionary](../../../Data%20Dictionary/Introduction.md)** and are built with controls representing the data fields in the Data Dictionary and **[Data Class Objects](../../../Data%20Dictionary/Data%20Classes/Overview.md)**. The Data Dictionary also supplies key structure information to enable accessing and writing the data records. Element names, prompts, default values, validation rules, print formats, associated queries, help and control types are derived from the data dictionary and data class definitions.

#### **Note:**  
If a data element definition includes a **[Dynamic](../../../Data%20Dictionary/Data%20Classes/Dynamic.md)** data class, information from the dynamic data class will load the control's properties on a generated panel. If the Dynamic data class definition is for a **_Multi-Line_** control, **[Extended Class Validation](../../../Data%20Dictionary/Data%20Classes/Extended%20Validation.md)** can be defined to provide additional table validation and allow access to data elements for creating display-only Multi-Line controls when designing NOMADS panels.  
  
If a data element definition includes a **_non-dynamic_** data class, information for the control's properties will come from the data dictionary. The only **_exceptions_** are _Short Description_ (used for prompts) and _Default/Input Value_ , which always come from the data dictionary. See **[Element Description](../../../Data%20Dictionary/Data%20Dictionary%20Maintenance/Element%20Description.htm#Mark11)**.

**[Non-File Maintenance Forms](Object%20Definition.htm#formtype)**, which do not use the standard file maintenance logic, can also be created. This provides the capability to generate informational/dashboard-like NOMADS panels and/or HTML pages.

_(The ability to create Non-File Maintenance forms was added in PxPlus 2022.)_

Once the file maintenance panels and/or HTML pages are generated, they can be easily modified by using the **[NOMADS Panel Designer](../../Panel%20Designer/Introduction.md)** or the **[HTML Editor](../../../HTML%20Editor.md)**. Alternatively, they can be **_regenerated_** by using the File Maintenance Generator. See **[Updating a Generated File Maintenance Panel](Updatepnl.md)**.

_(The ability to regenerate an existing file maintenance panel was added in PxPlus 2020.)_

## See Also

**[Invoking File Maintenance Generator](Invoking%20Fmgen.md)**  
**[Enhanced Layout](Enhanced%20Layout.md)**  
**[Two-Column Layout](Two_column.md)**
