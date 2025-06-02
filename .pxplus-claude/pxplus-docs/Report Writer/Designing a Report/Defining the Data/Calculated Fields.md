# Defining the Data 

**Calculated Fields** |  **__**  
---|---  
  
Calculated fields are virtual fields derived from expressions that are created using data source elements and other calculated fields. A calculated field can also be a translation field that has different values based on conditions; e.g. a translation field can have the values "Yes" and "No", depending on the value of a Boolean variable.

A name is associated with the calculated field, and the value is evaluated and stored in the named variable after every data record is read. Calculated fields can be used wherever data elements are used within a report definition, including formulas, filter definitions, group functions and custom sort orders.

## Define Calculated Fields

The **Define Calculated Fields** window is used to create calculated fields for a report. Select _Calculated Fields_ from the Report Designer _Data_ menu or right click on the data source in the left data pane and select _Define Calculated Fields_ from the popup menu.

> A calculated field definition is comprised of the following:

_Name_ |  Name of the data variable in which to store the result when the expression is evaluated. It **_must_** start with an alpha character, followed by alphanumeric characters, underscore or period. Maximum 30 characters.  
---|---  
_Description_ |  **_(Optional)_** Short description of the calculated field.  
_Type_ |  Text or numeric (computational) value.  
_Maximum Length_ |  Maximum length of the value to be stored. If numeric, the length may contain a scaling factor (e.g. 10.2 where total length is 10 with two digits to the right of the decimal).  
_Function_ |  Select _Formula**(default)**_ or _Translation_ from the drop-down list to define a formula or set of translation values for the calculated field. When _Formula_ is selected, a **Formula** input box (described below) is displayed. If _Translation_ is selected, a grid for entering translation values (described below) is displayed.  
_(Formula Input Box)_ |  **_(Available when the selected Function is Formula)_** Input box that is used to enter the PxPlus expression to be evaluated and stored in the named variable. Click the Tool button beside the **Formula** input box to invoke the **Define a Numeric Formula** window (if the _Type_ column is set to _Numeric_) or the **Define a Text Formula** window (if the _Type_ column is set to _Text_).  
_(Translation Values Grid)_ |  **_(Available when the selected Function is Translation)_** Grid that is used to define all the possible translation values for the translation field and the conditions associated with them. When defining a translation field, initially a single row displays for the _Default_ translation value. To add more values, click the _Add_ button beside the grid to add a new row above the current row. To delete an item from the grid, click the _Remove_ button. Each translation value has a condition associated with it (except the _Default_ value) to determine when that value is to be used. If none of the conditions are true, then the _Default_ value will be used. To define the condition associated with a translation value, click the arrow button in the first column to invoke the **[Define Filters](Data%20Filters.md)** window. The _Translation Value_ itself can be a _Fixed_ value or _Expression_. If the value is _Fixed_ , enter the literal value in the _Translation Value_ column of the grid. If it is an _Expression_ , select the check box in the _Exp_ column. A Tool button displays to the right of the _Translation Value_ column. Click this button to invoke the **Define a Numeric Formula** window (if the _Type_ column is set to _Numeric_) or the **Define a Text Formula** window (if the _Type_ column is set to _Text_) and then define an expression. Alternatively, enter a PxPlus expression in the _Translation Value_ column.

#### **Note:**  
At run time, the conditions associated with the translation values are evaluated in the order they appear; therefore, order is significant. To change the order, use the _Move Up_ and _Move Down_ buttons beside the grid.  
  
_Default_ will always be the last row and **_cannot_** be moved.  
  
_Transfer button_ |  Transfer to the expression or translation field definition area below the main list.  
  
Calculated fields definitions can also be added by selecting existing definitions from Report Writer libraries. These can be accessed by clicking the _Select Calculated Fields_ button (calculator) next to the upper grid. Library calculated fields are displayed with their name prefixed by an *****_asterisk_ , and the associated definition is locked. See **[Adding Library Elements to a Report Definition](../../Report%20Writer%20Libraries/Introduction.htm#addlibraryelements)**.

The order in which calculated fields appear in the definition list is significant, as it reflects the order in which fields are evaluated. This is important when a calculated field contains a reference to another calculated field because the reference field would have to be evaluated first. Buttons for changing the list sequence are located beside the list.

Once calculated fields have been defined, they appear in the left data pane of the Report Designer, directly below the data source and its elements. From here, they may be dragged and dropped onto the report definition.

They will also appear in the element lists found in the Sort Order, Group Functions, Filters, as well as Numeric and String Formula build interfaces.

If an error occurs while evaluating a calculated field during report execution, default values (0 for numeric and null for string) are assigned to the field, and a Report Writer system variable called the _Calculation Error Flag_ (_CalcErrorFlag) is set to 1. This variable is available in the _System_ list in the left data pane of the Report Designer.
