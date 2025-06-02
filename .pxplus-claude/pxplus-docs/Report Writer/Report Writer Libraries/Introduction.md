# Report Writer

**Report Writer Libraries** |  **__**  
---|---  
  
A Report Writer library is a collection of layouts, parameter definitions and calculated field definitions that can be inserted into report definitions. This allows you to create layouts and definitions that can be inserted into multiple reports. The insertion is by reference only. The layout or definition is loaded dynamically whenever the report is opened or generated; therefore, if you change a library element, then all reports that use the element will automatically inherit the change.

The PxPlus Report Writer supports the use of multiple libraries, allowing flexible organization for the developer, as well as enabling separate libraries for the developer and user. Libraries are saved with a **_.pvrlib_** suffix.

## Defining a Report Library

To define elements in a Report Writer library, select _New_ > _New Library_ or _Open_ > _Open Library_ from the Report Designer _File_ menu. A modified **[Report Designer](../Designing%20a%20Report/Report%20Designer/Overview.md)** interface is used to define a library.

The Report Library interface allows you to define parameters and calculated fields in basically the same way as for a report definition, and the report layout area is used to build individual layouts for the library. Functionality that does not apply to processing a library is disabled on the tool bar and menus.

## Defining a Library Layout

A blank layout area is provided for creating a new layout when a library is opened. You can also clear the layout area by clicking the _New_ button on the toolbar or by right-clicking on the _Library Layouts_ branch in the data pane on the left and selecting _New Layout_ from the popup menu. You can then add text, images, hyperlinks, data fields, etc. to the layout area and format them as you like. You can also add a list of data source fields to the data pane by selecting an input source.

#### **Note:**  
Associating a data source with a layout does not cause that data source to be opened and accessed when the layout is used in a report.

Each layout must be given a unique name to identify it. To modify an existing layout, double-click on the layout name in the data pane, or select _Open_ from the popup menu. The popup menu also allows you to delete or rename a layout, or create a new layout. Changes to individual layouts must be saved by clicking the _Apply_ button before loading a new layout.

The number of columns in a layout and the width of a layout do not have to match the report definitions in which it is included. Columns are scaled to fit the report when outputting to the printer, PDF and Viewer. Output to the Clipboard, Tab-delimited files and HTML does not scale; therefore, columns may not be aligned.

If parameters or calculated fields are dropped on a library layout, be aware that their definitions would have to be included as library elements in any report in which the layout is inserted in order for them to be evaluated properly.

## Defining Parameters

Parameters are defined using the same interface as used by the Report Designer. See **[Parameters](../Designing%20a%20Report/Defining%20the%20Data/Parameters.md)**.

#### **Note:**  
If a parameter is dropped onto a library layout, this does not cause the parameter definition to be included with the layout when the layout is inserted into a report definition. The parameter definition would have to be added to the report definition as a library element as well.

## Defining Calculated Fields

Calculated fields are defined using an interface similar to that used by the Report Designer with the addition of an _Input Source_ button that can be used to associate a data source with individual fields. This is so that field names from the source are available when creating formulas or conditions for translation values. See **[Calculated Fields](../Designing%20a%20Report/Defining%20the%20Data/Calculated%20Fields.md)**.

#### **Note:**  
If a calculated field is dropped onto a Library Layout, this does not cause the calculated field definition to be included with the layout when the layout is inserted into a report definition. The calculated field definition would have to be added to the report definition as a library element as well.

##  Associating Other Report Writer Libraries

It is possible to associate other Report Writer libraries with the library being defined by selecting _Associate a Library_ from the Report Designer _File_ menu.

Alternatively, you can select this option from the popup menu by right clicking on the _System_ branch in the data pane. This allows you to embed layouts from other libraries within a layout from the current library.

Disassociate libraries using the _Disassociate a Library_ option located on the Report Designer _File_ menu or on the right-click popup menu in the data pane.

##  Adding Library Elements to a Report Definition

The first step in adding library elements to a report definition is to associate a library with the report. This makes the parameters, calculated fields and layouts of that library available to the current report. Associate/disassociate libraries as described previously. Default associations may be set up in **[Designer Options](../Designer%20Options/Introduction.md)**. Associated libraries will appear in the data pane with a list of their layouts. A maximum of 99 libraries may be associated with a report definition.

Drag a library layout onto a **_blank line_** of the report layout to insert a layout into the current report definition. The library and layout name will be displayed on the line, which will be locked to prevent modification.

To remove a library layout, delete the line, or select the line and use the _Clear area_ option from the Report Designer _Edit_ menu.

When the report is generated, the layout will be scaled so that its width will match that of the report in which it is embedded when outputting to a printer, PDF file or Viewer. Output to the Clipboard, Tab-delimited files and HTML files does not scale and therefore may not be aligned.

To add a library parameter to a report definition, invoke the **[Report Parameters](../Designing%20a%20Report/Defining%20the%20Data/Parameters.md)** window by selecting _Data_ > _Parameters_ from the Report Designer menu bar. Alternatively, right click on the _System_ branch in the left data pane and select _Define Parameters_ from the popup menu.

In the **Report Parameters** window, click the _Library_ button located beside the upper grid to invoke the **Select Parameter Fields** window. This window displays a tree view where each main branch is a report library, and the sub-branches are the parameters defined within that library. The initial display will show all parameters currently selected on the right, and those not selected on the left.

To move selected items between the _Available Fields_ and _Selected Fields_ lists, either double-click or use the _Add_ and _Remove_ buttons.

You can also select an entire library by double-clicking the top-level library name. The _Add All_ and _Remove All_ buttons move all items in the list. You can also drag and drop selected items from one list to another.

Library parameters are displayed in a grid in the **Report Parameters** window prefixed by an *****  _asterisk_. The line entry is also locked to prevent alteration.

To add a library calculated field to a report definition, invoke the **[Define Calculated Fields](../Designing%20a%20Report/Defining%20the%20Data/Calculated%20Fields.md)** window by selecting _Data > Calculated Fields _from the Report Designer menu bar. Alternatively, select the _Define Calculated Fields_ option from the popup menu by right clicking on the _System_ branch in the left data pane. Click the _Library_ button located beside the upper grid to invoke the **Select Calculated Fields** window. This window is identical to the **Select Parameter Fields** window described above.

Library calculated fields are displayed prefixed by an *****  _asterisk_ in the grid, and the associated information is locked.

After selection, parameters and calculated fields that have been selected from libraries are displayed in the Report Designer data pane where they can be dragged and dropped onto the report layout.
