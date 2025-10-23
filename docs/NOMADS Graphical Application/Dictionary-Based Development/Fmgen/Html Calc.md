# File Maintenance Generator  
  
**HTML Calculation** |  **_Step 6: Field Layout_**  
---|---  
  
#### **Note:**  
The _HTML Calculation_ option is only available when the [**HTML Page**](Object%20Definition.htm#formtype) check box is selected for _Form Type_.

The **Add an HTML Calculation** window is used to add an HTML calculation to a cell that contains a data dictionary field.

_(The ability to add/edit an HTML Calculation was added in PxPlus 2022.)_

To invoke this window, use one of the following methods:

Click the _Add Object_ button (above the _Layout Grid_) and select the _HTML Calculation_ option. **_OR_**

Right click on a cell in the _Layout Grid_ , select _Add Object_ from the popup menu and then select the _Add or Edit an HTML Calculation_ option.

This window consists of the following:

_Field Name_ |  Displays the name of the data dictionary field.  
---|---  
**Webster+ HTML Calculation** |  |  _Calculation_ |  Enter an HTML calculation. Fields used in the calculation must either exist on the panel _Layout Grid_ or be included as **[Hidden Variables](Variables.md)**. **_Example:_** ytdSales+prvSales  
---|---  
_Priority_ |  **_(Available when an HTML Calculation is entered)_** Controls the order in which the HTML calculations are done. Can be any number between 1 and 9 (1 is first priority). The **_default_** priority is 5 for each calculation defined. The **[[addcalc]](../../../Webster/Short%20Codes.htm#addcalc)** short codes, which correspond to all the HTML calculations entered on the panel _Layout Grid_ , are added at the end of the generated HTML page, sorted by priority. If two or more HTML calculations are assigned the same priority level, calculations will be done in field name sequence within each priority level. If the order of the HTML calculations is not important, the priority can be left as 5 for all HTML calculations. When an HTML calculation is entered for a data dictionary field, the priority level displays at the end of the **[Info Line](Field%20Layout.htm#infoline)** for that field. _(The HTML Calculation Priority was added in PxPlus 2022 Update 1.)_  
_OK_ |  Saves the HTML calculation and returns to the _Layout Grid_. A blue tick displays in the top left corner of the cell to indicate that an HTML calculation was added. If a data dictionary field has both an HTML calculation and an **[HTML Event](Html%20Event.md)** defined, a magenta tick will display. _(The colored tick indicator was added in PxPlus 2023.)_  
_Cancel_ |  Cancels any changes and returns to the _Layout Grid_.
