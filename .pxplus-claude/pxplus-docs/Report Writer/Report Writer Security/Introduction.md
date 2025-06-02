# Report Writer

**Report Writer Security** |  **__**  
---|---  
  
For security purposes, an alternate user interface is available for designing reports. This interface acts as a front end to both the **[Report Designer](../Designing%20a%20Report/Report%20Designer/Overview.md)** and **[Report Wizard](../Report%20Wizard/Introduction.md)** and addresses security concerns on two fronts:

> **_Limiting Access to Input Sources_** \- For new reports, the user must pre-select an input source from a restricted selection of Views based on the Views System groupings. For existing reports, the input source cannot be changed.

> **_Restricting Access to Other Report Definitions_** \- The user is restricted to a specified directory for creating, modifying and saving report definitions.

The interface may be invoked in an application using the **[PROCESS](../../directives/process.md)** directive:

> **PROCESS** "Main","*rpt/rpt.en", _%directory$_ , g _roups$_

**_Where:_**

_directory$_ |  Directory where report definitions are created, modified and saved. Relative or absolute paths may be used. If null, then the current directory is used.  
---|---  
_groups$_ |  List of Views system groups that will be displayed for selection. The list is comprised of group descriptions; the last character in the list will serve as the list separator. For example, AR/AP/ uses the "/" character as a separator and would allow access to Views in the AR and AP groups.  
  
When invoked, the security interface presents a **Report Maintenance** panel that displays a list of report definitions that exist in the specified directory.

To update an existing report definition, select a report by double clicking on the list item, or highlight the item and click the _Update_ button. This will invoke the Report Designer and load the selected report definition. Once in the Report Designer, you can only modify and save the current report -- menu items and toolbar shortcuts for selecting new or other reports are disabled, as well as the menu item for selecting a different input source.

The _Delete_ button can be used to delete report definitions. However, you can suppress this button by setting the global variable %RW_SUPPRESS_DELETE=1, which also suppresses the _Delete_ item in the Report Designer _File_ menu.

To create new report definitions, click the _New_ button to invoke the **New Report** panel. The **New Report** panel requires that you pre-define the report name and simple file name for identifying and saving the definition and pre-select the input source from the Views groups specified. This information will be pre-loaded into the Report Designer or Report Wizard to create a new layout. Menu items and toolbars shortcuts will be disabled in the designer as described earlier. In the wizard, the file selection will be disabled; a report definition will be created using the given simple file name, which can then be loaded and modified using the _Update_ button.

If further security measures are necessary, it is possible to write your own front-end user interface to pre-input information before invoking the Report Designer or Report Wizard. See **[Security Interface](../Report%20Writer%20User%20Interfaces/Security%20Interface.md)**.

As well, you can create your own object classes with logic procedures associated with Views and Views Data Sources to suppress data elements. See **[Logic Object](../../Views%20System/Logic%20Procedures/Overview.htm#logicobj)**.
