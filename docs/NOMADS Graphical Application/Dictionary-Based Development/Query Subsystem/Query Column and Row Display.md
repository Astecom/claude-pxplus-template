# Query Subsystem

**Defining Query Column and Row Display**|   
---|---  
  
Visual attributes, such as bold text, text color or highlight color, can be assigned to a query column or a row in the query data list. The various visual attributes can be assigned based on specified conditions being met. A query column can also display images or percent bars.

#### **Note:**  
Visual attributes can be assigned to a query column or row for **[Query+](Overview.htm#queryplus)** and **[Drop Query](Overview.htm#dropquery)** only.

For example, percent bars can be assigned to a column to show the percentage of sales achieved by each salesperson. Text colors can be assigned to a query row to show Red text or Green text based on a specified condition being met.

In the query example below, text colors have been assigned to the query row to show Red text if a value in the Balance column is equal to or greater than 3000.00 or Green text if the value equals 0.00. Images have been assigned to the CR Limit column to show a check mark or an exclamation based on whether a client's Credit Limit has been exceeded.

> Visual attributes for a query column are defined by using **[Query Column Display](Query%20Column%20and%20Row%20Display.htm#Mark1)**.

Visual attributes for a query row are defined by using **[Row Display Option](Query%20Column%20and%20Row%20Display.htm#Mark3)**.

For examples of column and row display scenarios that can be defined, see **[Column Display Examples](Query%20Column%20and%20Row%20Display.htm#Mark2)** and **[Row Display Examples](Query%20Column%20and%20Row%20Display.htm#Mark4)**.

#### **Note:**  
Display settings on individual columns will override Row Display settings.

##  Query Column Display

The **Query Column Display** window is used to assign visual attributes, such as bold text, text color, highlight color, percent bars, or an image, to a query column. The various visual attributes can be assigned based on specified conditions being met.

To assign visual attributes to a row in the query data list, see **[Row Display Option](Query%20Column%20and%20Row%20Display.htm#Mark3)**.

#### **Note:**  
Display settings on individual columns will override Row Display settings.

To invoke the **Query Column Display** window, follow these steps:

|  1. |  In the **Query Definition** window, click on a column in the **Columns** list and then select the _Column Options_ toolbar button.  
---|---|---  
|  2. |  In the **Column Options** window, click the _Define_ button (next to _Method_ under the **Display Option** heading).  
  
Alternatively, invoke the **Query Column Display** window by clicking the _Define_ button in the **[Query Formula Definition](Query%20Formula.md)** window when adding or modifying a formula.

> This window consists of the following:

_Display Value_ |  Value that will be displayed in the column. (The **_exception_** is if an image is to be displayed instead.)  
---|---  
**Display Method** |  The following methods are available to assign various visual attributes to a column: |  _None_ |  No display method. ** _(Default)_**  
---|---  
_BoldText_ |  Display text in bold font.  
_Colors_ |  Set text and background colors.  
_HiLiteColor_ |  Set background colors.  
_Image_ |  Display images. (See **[Note](Query%20Column%20and%20Row%20Display.htm#Mark5)** below.)  
_PercentBar_ |  Display a horizontal bar that represents a percentage of the column size based on a numeric column value. For example, a value of 100 causes _PercentBar_ to fill the entire width of the column, and a value of 50 fills half of the column width, and so on. A maximum value can also be specified such that the column is filled when the column value is the maximum value rather than 100.  
_PercentBarWithLabel_ |  Same as _PercentBar_ but with the column value displayed (using the column format) following the horizontal bar. The maximum value fills **_three-quarters_** of the column width with the remaining **_one-quarter_** of the width for the label.  
_TextColor_ |  Set text colors.  
_User_ |  Specify your own display strings.  
  
####  **Note****:**  
When displaying an image, the image size will be dependent upon the _height_ of the row and the _width_ of the column containing the image:  
  
\- If the original image is **_larger_** than the allotted space, it will be scaled down to fit, maintaining its aspect ratio and centered in the space.  
\- If the original image is **_smaller_** than the allotted space, its original size will be maintained and it will be centered.  
  
All images in the query will be rendered using the same dimensions, derived from the row height and the width of the narrowest column to contain an image. To increase the row height, adjust the _Display Line Height_ option on the **Query Header[Display](Query%20Header.htm#display)** tab.  
  
_(Support for Image Scaling was added in PxPlus 2017.)_

_(The PercentBar option was added in PxPlus 2017.)  
(The PercentBarWithLabel option was added in PxPlus 2017.)_  
  
**Parameter Values** |  In addition to the _Display Value,_ which is the default parameter value, you can specify other query fields as parameters if they are to be used as part of a condition or display string. **_To Add a Parameter:_** Click the _Add_ button (next to _Parameter Values_) and then click the drop-down arrow at the right of the newly-allotted parameter to select a field from the list, or define field characteristics (i.e. field number, offset, length) for manual fields. Formulas must be named to be included as additional parameters. See **[Query Formula Definition](Query%20Formula.md)**. Each parameter is assigned an ID (such as %1, %2, etc.) that is to be used in a condition and display string expressions rather than the actual name of the field. **_To Remove a Parameter:_** Select the parameter entry to be deleted and then click the _Remove_ button (next to _Parameter Values_). To select multiple entries, use Shift-Click (consecutive selections) or Ctrl-Click (random selections). Prior to deleting, a message will display.  
**Condition** |  Set conditions for the assigned visual attribute(s). Conditions consist of PxPlus expressions that can be evaluated to zero/non-zero, but using the ID placeholder in the place of a field name; e.g. %1="Y". **_To Add a Condition:_** Click the _Add_ button (below _Condition_ grid) and then enter the condition. Multiple conditions can be defined, each with its own assigned display setting (i.e. color, image, etc.). Conditions are evaluated in the order in which they appear until a condition evaluates as true (i.e. non-zero). This means that if two conditions are set, %1<10 and %1<100, then values less than 10 will be assigned the first display setting, and values from 10 to less than 100 will be assigned the second display setting. Values that fall outside of the range of the specified conditions may or may not have an assigned display setting. To assign a setting to these values, simply add a blank condition at the end and assign a display setting. Otherwise, no display setting will be assigned, and default text and color will be used for these values. Use the Move Up/Move Down buttons (below _Condition_ grid) to change the order of the conditions. **_To Remove a Condition:_** Select the condition entry to be deleted and then click the _Remove_ button (below _Condition_ grid). To select multiple entries, use Shift-Click (consecutive selections) or Ctrl-Click (random selections). Prior to deleting, a message will display.  
_Color_ |  **_(Display Method is Colors, HiLiteColor, PercentBar, PercentBarWithLabel or TextColor)_** To assign a color to a condition, click the dotted button at the right of the Color cell to launch the **[Color Selections](../../Appendix/Color%20Selections.md)** window. In the case of the _PercentBar_ and _PercentBarWithLabel_ methods, the assigned _Bar Color_ will be the color of the top of the bar with an optional _Gradient Color_ for the bottom. (If a gradient color is omitted, the bottom of the bar will be shaded.)

#### **Note:  
** Selecting _Default_ (i.e. no color) is a valid selection.

_(Support for the PercentBar and PercentBarWithLabel methods was added in PxPlus 2017.)_  
_Max Value_ |  **_(Display Method is PercentBar or PercentBarWithLabel)_** By default, a column value of 100 causes _PercentBar_ to fill the entire width of the column, a column value of 50 fills half of the column width, and a column value of 0 (zero) displays no bar. You can also specify a different _Max Value_ , which is used as the value to determine when the entire column width is to be filled. **_Example:_** A _Max Value_ of 150 causes _PercentBar_ to fill the entire width of the column when the column value is 150. When the value is 100, two-thirds of the column width is filled, and so on. Values that are greater than the _Max Value_ are truncated. When using a _PercentBarWithLabel_ display, the _Max Value_ fills only **_three-quarters_** of the column width with the remaining **_one-quarter_** of the width for the label. _(Max Value was added in PxPlus 2017.)_  
_Image_ |  **_(Display Method is Image)_** To assign an image to a condition, click the dotted button at the right of the Image cell to launch the **Bitmaps** window to select a particular bitmap. You can also specify an expression by selecting the _Exp_ check box and entering an expression using placeholder IDs.  
_Display String_ |  **_(Display Method is User)_** Display strings allow greater flexibility when assigning display attributes for particular conditions; e.g. you can mix bold text and background color. Display strings are PxPlus expressions; therefore, select the _Exp_ check box and enter the expression to use. **_Example:_** '_COLOR'("Light Yellow")+'BB'

#### **Note:**  
Be sure to use placeholder IDs rather than field name variables in your expression, if required.  
  
You can also create your own display methods by creating your own column display class. The existing methods are in the ***obj/qrycoldsp** class. Create your own class and inherit the ***obj/qrycoldsp** class in yours by using **LIKE "*obj/qrycoldsp"** in its definition. Then incorporate your new methods. Set **[%NOMADS'Query_ColumnDisplay$](Designing%20and%20Using%20the%20Query%20Subsystem.htm#querycoldis)** to the name of your class, and your new methods will become available.

##  Column Display Examples

Below are examples of setting up column display scenarios:

**Description** |  **Method**  
---|---  
**_Example 1:_** For the BALANCE column, you want to display negative values using Red text and high values (10000 or greater) using Green text. The rest are to display using the default text color. |  **_To do this:_** Assign _TextColor_ as the _Display Method_ to the BALANCE column. BALANCE is the default _Parameter_. It is assigned an ID of %1. Then create two _Conditions_ : %1<0 %1>=10000 For the first _Condition_ , assign Light Red as the _Color_ , and Dark Green for the second _Condition_.  
**_Example 2:_** Your query has the following columns: CUSTOMER_NAME$  
CUSTOMER_CLASS$ You want to display the CUSTOMER_NAME$ value in **bold text** if CUSTOMER_CLASS$ contains the value "VAR". |  **_To do this:_** Assign _BoldText_ as the _Display Method_ to the CUSTOMER_NAME$ column. The condition is based on the CUSTOMER_CLASS$ column; therefore, add CUSTOMER_CLASS$ to the list of _Parameter Values_. It is assigned an ID of %2. Then create the _Condition_ : %2="VAR"  
**_Example 3:_** You want to highlight the entire CLIENTID$ column with a Light Green custom background color. |  **_To do this:_** Assign _HiLiteColor_ as the _Display Method_ to the CLIENTID$ column. Leave the _Condition_ blank. Select your custom color in the **Color Selections** window.  
**_Example 4:_** Given a salesperson's yearly sales and sales target, you want to display a _PercentBarWithLabel_ showing the percentage of the target that was achieved by each salesperson. In addition, you want to display a Gold bar if the salesperson outperformed their target. |  **_To do this:_** Create a formula to calculate the percentage of the sales target the salesperson achieved: 100*SMN_YR_SALES/SMN_YR_TARGET Set a format for the formula such as ##0.0%. Click the _Define_ button to select a _Display Option_. For the _Display Method_ , select _PercentBarWithLabel_. To create a Gold bar for the salespersons achieving more than their sales target, enter %1>100 as the _Condition_. For the _Bar Color_ , assign a color such as RGB:225 210 30. For the remaining salespersons, add a second blank _Condition_ with a _Bar Color_ of your choice. _(Example 4 using the PercentBarWithLabel method was added in PxPlus 2017.)_  
  
##  Row Display Option

To invoke the **Row Display Option** window, in **Query Header Definition** on the **[Display](Query%20Header.htm#rowhighlight)** tab, click the link _Add (Edit) row display option_ (under the **Row Highlight** heading).

> _(The Row Display Option window was added in PxPlus 2021.)_

This window consists of the following:

**Display Method** |  The following methods are available to assign various visual attributes to a row: |  _None_ |  No display method. ** _(Default)_**  
---|---  
_BoldText_ |  Display text in bold font.  
_Colors_ |  Set text and background colors.  
_HiLiteColor_ |  Set background colors.  
_TextColor_ |  Set text colors.  
_User_ |  Specify your own display strings.  
**Parameter Values** |  Specify the query fields that are to be used as part of a condition. **_To Add a Parameter:_** Click the _Add_ button (next to _Parameter Values_) and then click the drop-down arrow at the right of the newly-allotted parameter to select a field from the list, or define field characteristics (i.e. field number, offset, length) for manual fields. Formulas must be named to be included as additional parameters. See **[Query Formula Definition](Query%20Formula.md)**. Each parameter is assigned an ID (such as %1, %2, etc.) that is to be used in a condition rather than the actual name of the field. **_To Remove a Parameter:_** Select the parameter entry to be deleted and then click the _Remove_ button (next to _Parameter Values_). To select multiple entries, use Shift-Click (consecutive selections) or Ctrl-Click (random selections). Prior to deleting, a message will display.  
**Condition** |  Set conditions for the assigned visual attribute(s). Conditions consist of PxPlus expressions that can be evaluated to zero/non-zero, but using the ID placeholder in the place of a field name; e.g. %1="Y". **_To Add a Condition:_** Click the _Add_ button (below _Condition_ grid) and then enter the condition. Multiple conditions can be defined, each with its own assigned display setting (i.e. color, image, etc.). Conditions are evaluated in the order in which they appear until a condition evaluates as true (i.e. non-zero). This means that if two conditions are set, %1<10 and %1<100, then values less than 10 will be assigned the first display setting, and values from 10 to less than 100 will be assigned the second display setting. Values that fall outside of the range of the specified conditions may or may not have an assigned display setting. To assign a setting to these values, simply add a blank condition at the end and assign a display setting. Otherwise, no display setting will be assigned, and default text and color will be used for these values. Use the Move Up/Move Down buttons (below _Condition_ grid) to change the order of the conditions. **_To Remove a Condition:_** Select the condition entry to be deleted and then click the _Remove_ button (below _Condition_ grid). To select multiple entries, use Shift-Click (consecutive selections) or Ctrl-Click (random selections). Prior to deleting, a message will display.  
_Color_ |  **_(Display Method is Colors, HiLiteColor or TextColor)_** To assign a color to a condition, click the dotted button at the right of the Color cell to launch the **[Color Selections](../../Appendix/Color%20Selections.md)** window.

#### **Note:**  
Selecting _Default_ (i.e. no color) is a valid selection.  
  
_Display String_ |  **_(Display Method is User)_** Display strings allow greater flexibility when assigning display attributes for particular conditions; e.g. you can mix bold text and background color. Display strings are PxPlus expressions; therefore, select the _Exp_ check box and enter the expression to use. **_Example:_** '_COLOR'("Light Yellow")+'BB'

#### **Note:**  
Be sure to use placeholder IDs rather than field name variables in your expression, if required.  
  
You can also create your own display methods by creating your own display class. The existing methods are in the ***obj/qrycoldsp** class. Create your own class and inherit the ***obj/qrycoldsp** class in yours by using **LIKE "*obj/qrycoldsp"** in its definition. Then incorporate your new methods. Set **[%NOMADS'Query_ColumnDisplay$](Designing%20and%20Using%20the%20Query%20Subsystem.htm#querycoldis)** to the name of your class, and your new methods will become available.

##  Row Display Examples

Below are examples of setting up row display scenarios:

**_Example 1:_** Your query has a BALANCE column. Based on its value, you want the row to display using Red text if the value of BALANCE is negative and Green text if the value is 10000 or greater. The remaining rows are to display using the default text color. |  **_To do this:_** Assign _TextColor_ as the _Display Method_. The conditions are based on the BALANCE column; therefore, select BALANCE from the drop-down list of _Parameter Values_. It is assigned an ID of %1. Then create two _Conditions_ : %1<0 %1>=10000 For the first _Condition_ , assign Light Red as the _Color_ , and Dark Green for the second _Condition_.  
---|---  
**_Example 2:_** Your query has a CUSTOMER_CLASS$ column. You want to display a record in **bold text** if CUSTOMER_CLASS$ contains the value "VAR". |  **_To do this:_** Assign _BoldText_ as the _Display Method_. The condition is based on the CUSTOMER_CLASS$ column; therefore, select CUSTOMER_CLASS$ from the drop-down list of _Parameter Values_. It is assigned an ID of %1. Then create the _Condition:_ %1="VAR"  
  
## See Also

**[Query Header](Query%20Header.md)**  
**[Query Definition](Query%20Definition.md)**  
**[Invoking a Query](Invoking%20a%20Query.md)**
