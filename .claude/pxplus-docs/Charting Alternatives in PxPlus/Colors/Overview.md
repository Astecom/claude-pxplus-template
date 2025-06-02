# Charting Alternatives in PxPlus

**Colors** |  **__**  
---|---  
  
The colors used to display individual datasets within a chart can be controlled in several ways. They can be:

  * Specified in the chart definition **[Presets](../../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Chart%20Control/Chart.htm#presetsdef)**.
  * Programmed using the **['CurrentSet](../../properties/currentset.md)** and **[TextColour$](../../properties/textcolor_.md)** properties.
  * Defined for various **[Theme](../../NOMADS%20Graphical%20Application/System%20Maintenance%20Tools/System%20Options/Themes.md)** and **[Visual Class](../../NOMADS%20Graphical%20Application/System%20Maintenance%20Tools/System%20Options/Visual%20Classes.md)** settings.
  * Defined in a **_template_** file.
  * Specified in the **[%NOMAD_Chart_Colors$](../../NOMADS%20Graphical%20Application/Appendix/NOMADS%20Variables/Overview.htm#chart_colors)** global variable. **_(NOMADS Only)_**



These methods are described below.

**Method** |  **Description**  
---|---  
**_Presets_** |  Colors of individual datasets can be defined in the chart definition **[Presets](../../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Chart%20Control/Chart.htm#presetsdef)** by setting the _Data Set_ number and setting the _Property_ to _TextColour_.

#### **Note:**  
This is the only **Preset** property supported by the Google chart interface.  
  
**_Program_** |  Programmatically set the dataset colors by setting the ['**CurrentSet**](../../properties/currentset.md) property to the _Data Set_ number and setting the ['**TextColour$**](../../properties/textcolor_.md) property to the desired color.  
**_Themes and Visual Classes_** |  Use the _Chart Colors_ property in the **[Themes Maintenance](../../NOMADS%20Graphical%20Application/System%20Maintenance%20Tools/System%20Options/Themes.htm#colors)** and **[Visual Classes Maintenance](../../NOMADS%20Graphical%20Application/System%20Maintenance%20Tools/System%20Options/Visual%20Classes.htm#colors)** utilities to select the colors to apply when plotting the different datasets of a chart. Click the dotted Query button or double click inside the cell to display the **Chart Colors** window, which provides a grid for assigning the colors: |  |  |    
**_Run-Time Chart Example_**  
---|---|---  
  
This window consists of the following:

_(Drag and Drop)_ |  _Four-headed arrow_ button used to drag and drop an individual row to a different location within the **Chart Colors** grid to change the order of the rows entered.  
---|---  
_Set_ _#_ |  Dataset sequence (i.e. first dataset, second dataset, etc.).  
_Color_ |  Click the Query button (_magnifying glass_) to bring up the **Colour Selections** window for assigning a color to a dataset. After a color is selected, the color name/expression is displayed.

#### **Note:**  
After a color is selected, a new row is added to the bottom of the grid for adding another color, if desired.  
  
_(Actual Color)_ |  Displays the actual color after a _Color_ is selected.  
_Insert Above  
Insert Below_ |  Adds a blank row above or below the currently selected row to allow a new color to be entered out of sequence.

#### **Note:**  
A new row cannot be inserted above or below a blank row.  
  
_Delete Row(s)_ |  Removes the currently selected row(s). To select **_multiple_** rows, use Shift-Click (consecutive selections) or Ctrl-Click (random selections). Prior to deleting, a message will display.  
_Clear_ |  Removes **_all_** the rows in the **Chart Colors** grid without needing to select them first. Prior to deleting, a message will display.  
_OK_ |  Saves the chart color selections and closes the **Chart Colors** window.

#### **Note:**  
Once chart color selections have been made, the Theme record must be saved/updated. If any unsaved changes are detected, a message will display.  
  
_Cancel_ |  Closes the **Chart Colors** window without saving changes.  
  
_(The Chart Colors property in Themes Maintenance and Visual Classes Maintenance was added in PxPlus 2020.)_  
  
**_Template File_** |  The template file is a text file consisting of a list of colors (one per line). The file name **_must_** be **chart_clrs.txt** and be located in a sub-directory of ***plus/inomads/templates**. For example, the default colors used for the Google charts are defined in ***plus/inomads/templates/default/chart_clrs.txt**.  
  
To create an alternative color selection, create a **chart_clrs.txt** file and place it in a sub-directory of the **_templates_** directory.  
  
**_Example:_**  
  
***plus/inomads/templates/**_mytemplate_**/chart_clrs.txt**  
  
Then, set the global variable **%iNomads_Template$** with the name of the sub-directory (in this case **%iNomads_Template$="mytemplate"**).

#### **Note:**  
This method is valid for **_both_** iNomads **_and_** NOMADS environments.  
  
**_NOMADS Global Variable_** |  **_(NOMADS Only)_** Create a string consisting of color names (the last character in the string will be used as the separator) and assign it to the global variable **[%NOMAD_Chart_Colors$](../../NOMADS%20Graphical%20Application/Appendix/NOMADS%20Variables/Overview.htm#chart_colors)**.  
  
**_Example:_**  
  
**%Nomad_Chart_Colors$** ="light red/light blue/dark green/yellow/RGB:192 255 192/"  
  
Colors can be specified using standard PxPlus colors (e.g. Light Red, Dark Blue, etc.), User-Defined colors (e.g. COLOR16), and RGB settings (e.g. RGB:192 255 192). Expressions may also be used in Theme and Visual Class settings for charts. If there are more datasets than colors specified, the colors will repeat.

Color **_precedence_** is:

> 1\. Programmed colors

> 2\. Preset colors

> 3\. Visual Class settings
> 
> 4\. Theme settings
> 
> 5\. Colors specified in the **[%NOMAD_Chart_Colors$](../../NOMADS%20Graphical%20Application/Appendix/NOMADS%20Variables/Overview.htm#chart_colors)** variable

> 6\. Template colors
