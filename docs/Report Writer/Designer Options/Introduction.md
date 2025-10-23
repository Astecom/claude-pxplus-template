# Report Writer

**Designer Options** |  **__**  
---|---  
  
The **Designer Options** window is used for setting options and preferences that govern the **[Report Designer](../Designing%20a%20Report/Report%20Designer/Overview.md)** environment.

A **[Suppress Post Report Logic](Introduction.htm#testing)** option has been added, which is used to suppress the execution of **[Post Report Logic](../Designing%20a%20Report/Report%20Options/Overview.htm#post_rpt)** (if defined in **Report Options** on the **Custom Interfaces** tab) while testing via the _Preview_ or _Print_ buttons.

_(The Suppress Post Report Logic option was added in PxPlus 2022.)  
__(The Post Report Logic option was added in PxPlus 2022.)_

To invoke this window, select _Designer Options_ from the Report Designer _Options_ menu.

> This window consists of the following:

**General**  
---  
**Auto Display** |  |  _Auto-display HTML output_ |  Automatically display HTML reports using the default browser when reports are generated in this format from the Report Designer.  
---|---  
_Auto-display PDF output_ |  Automatically display PDF reports using the PDF reader when reports are generated in this format from the Report Designer.  
**Units of Measure** |  |  _Metric Ruler_ |  Display the Designer layout using metric (centimeter) units. There will be a difference in the size of the display when switching to and from metric display.  
---|---  
**Testing Parameters** |  |  _Use Test Mode_ |  Restricts the number of records processed when a report is generated. A processed record is one that is included in the report; i.e. it has not been rejected by the filtering process.  
---|---  
_Number of records to process_ |  Specify the number records to be processed when in Test Mode.  
_Suppress Post Report Logic_ |  Suppresses the execution of **[Post Report Logic](../Designing%20a%20Report/Report%20Options/Overview.htm#post_rpt)** that has been defined for the report while testing via the _Preview_ or _Print_ buttons on the Report Designer tool bar.  
_Auto Save before preview/print_ |  Allows you to automatically save the current report definition prior to testing the report by choosing _Preview_ or _Print_.  
  
The options _Use Test Mode_ , _Suppress Post Report Logic_ and _Auto Save before preview/print_ are also available at the bottom of the main **[Report Designer](../Designing%20a%20Report/Report%20Designer/Overview.md)** panel.

_(The Auto Save option was added in PxPlus 2016.)  
(The Suppress Post Report Logic option was added in PxPlus 2022.)_  
  
**Default Row Height** |  Set the default line height (in inches or cm, depending on the **Units of Measure** setting) for new reports and new lines. An _Auto_ setting will determine the default line height based on the size of the default font. (By default, the _Auto_ check box is selected.)  
**Default Column Width** |  Set the column width (in inches or cm, depending on the **Units of Measure** setting) for new reports and new columns. The default is a half-inch or 1 cm (depending on the **Units of Measure** setting).  
**Numeric Format** |  |  _Default numeric format mask_ |  Specify the default numeric format mask to use for group functions. (This can also be set in **[Group Functions](../Designing%20a%20Report/Creating%20the%20Report%20Layout/Group%20Functions.md)**.)  
---|---  
**Other Options** |  |  _Inherit attributes from column on left when inserting a column_ |  If this option is selected, when a column is inserted, the cell attributes (font, colors, alignment, word-wrap and borders) from the previous column (on the left) are inherited on a cell-by-cell basis. If column 1 is inserted or the option is not selected, then the column cells will be assigned default attributes.

#### **Note:**  
If the cell to the left is a _joined_ cell (see **[Join](../Designing%20a%20Report/Creating%20the%20Report%20Layout/Formatting.htm#join)**), the inherited attributes would be those of the cell if it were _not_ joined and therefore may not match the attributes displayed when joined.

This option is also available at the bottom of the main Report Designer panel.  
---|---  
  
_(The Inherit attributes from column on left when inserting a column option was added in PxPlus 2023.)_  
  
**Font**  
**Font** |  Specify the default font, font size (point size) and font style to use for new reports. The font name may be selected from the list provided or entered in the input box above this list. This allows you to select a font that is not resident on the system.  
**Library**  
**Associate Libraries** |  Add or remove default libraries. Default libraries are automatically associated with new report definitions.  
_Save Settings_ |  Saves the current settings for future sessions when the Report Designer is closed.
