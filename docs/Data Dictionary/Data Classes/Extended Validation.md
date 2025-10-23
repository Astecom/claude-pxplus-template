# Data Classes

**Extended Class Validation and Display**|   
---|---  
  
Extended Validation is used to provide additional table validation and allow access to data elements for creating **_display-only_** Multi-Line controls when designing NOMADS panels. At run time, when a valid value is entered, the Extended Validation Multi-Line controls are populated with existing data from the table.

To define **_Extended Validation_** , access the **Validation** tab for a **[Multi-Line Data Class](Multiline.htm#validation)**.

> #### **Note:**  
Extended Validation is defined **_only_** for **_Multi-Line_** data classes that are [**Dynamic**](Multiline.htm#dynamic). For information on creating a dynamic data class, see **[Dynamic Control Properties](Dynamic.md)**.

When working with Grids in the NOMADS Panel Designer, a data class can be assigned in **[Grid Presets Definition](../../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Grid%20Control/Presets%20Definition.htm#dataclasses)** by selecting the _Class_ property. If assigning a Multi-Line data class that has **_Extended Validation_** , additional table validation will be provided at run time when a value is entered.

_(Extended Validation was added in PxPlus 2019.)  
__(Support for Extended Validation in Grids was added in PxPlus 2019 Update 1.)_

The following two examples include detailed steps on how to define **_Extended Validation_** and how it is subsequently used with _Multi-Line_ and _Grid_ controls when designing a NOMADS panel.

|  **[Example: Extended Validation (Multi-Lines)](Extended%20Validation.htm#example_ml)**  
---|---  
|  **[Example: Extended Validation (Grids)](Extended%20Validation.htm#example_grid)**  
  
Both examples use the **Sales Rep** table, which consists of the data elements below.

|    
**_Sales Rep Table: Data Elements_**  
---|---  
  
##  Example: Extended Validation (Multi-Lines)

This example includes the following steps for defining _Extended Validation_ , creating Multi-Line controls and viewing run-time examples of a NOMADS panel:

  * **[Step 1](Extended%20Validation.htm#step1_ml)**: Create a dynamic Multi-Line data class with Extended Validation.
  * **[Step 2](Extended%20Validation.htm#step2_ml)**: Create a Multi-Line control with the Extended Validation data class. This control will be used to enter the value to validate.
  * **[Step 3](Extended%20Validation.htm#step3_ml)** and **[Step 4](Extended%20Validation.htm#step4_ml)**: Create additional **_display-only_** Multi-Line controls from other table data elements. These controls will be populated when a valid value is entered.
  * **[Step 5](Extended%20Validation.htm#step5_ml)**: Panel recap that shows all the Multi-Line controls created in this example.



#### **Note:**  
In the File Maintenance Generator, the [**Fields**](../../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Fmgen/Field%20Layout.htm#fields_list) list will display Extended Validation descriptive fields (i.e. **SHOW**._xxxxxx_) **_only_** if this functionality was defined for a corresponding data element that is also part of a key with more than one segment. When displayed, the descriptive fields can be easily added to the layout grid for the panel being generated. See [**Extended Validation Descriptive Fields (SHOW.xxxxxx)**](../../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Fmgen/Add%20Remove%20Fields.htm#add_show).

To begin:

**_Step 1_**** _:_ Create a Multi-Line Data Class with Extended Validation**

In **[Data Class Definitions](Multiline.md)** maintenance, create a Multi-Line data class. Name it **SALESCD** and select the _Dynamic_ check box.

On the **Validation** tab, select the _Use Extended Validation_ check box. Enter the **Extended Validation** settings below.

|    
**_"SALESCD" Data Class with Extended Validation_**  
---|---  
  
**_Step 2_**** _:_ Create a Multi-Line Control with the Extended Validation Data Class**

In Step 1, **_SalesrepKey_ _: Sales Rep Code_** was selected for the _Key_. This is the value to be validated.

On the NOMADS panel, create a Multi-Line control with the Extended Validation data class. Name the Multi-Line control **SALES** and for the _Class_ , enter **SALESCD**.

|    
**_"SALES" Multi-Line  
_**** _  
_**  
**_"SALES" Multi-Line with Extended Validation Data Class "SALESCD"_**  
---|---  
| 

#### **Note:**  
On the **Validation** tab, the dynamic values for _Validator_ and _Formatter_ differ from the "standard" dynamic values. Because Extended Validation was defined in the **SALESCD** data class, these values allow the code to automatically validate the entry and correctly format it at run time.  
  
|    
  
**_Run-Time Example: Sales Rep Code Validation_**  
  
**_Step 3_**** _:_ Create a Multi-Line Control for the Descriptive Field**

In Step 1, **_Name$_** was selected for the _Descriptive Field_. This allows the **_Name_** data element to be available when designing the panel.

On the same panel, draw another Multi-Line control. Name it **SHOW.SALES**. This Multi-Line control will automatically display the Salesperson's Name when a valid Sales Rep Code is entered.

|    
**_SHOW.SALES Multi-Line_** |   
---|---|---  
| 

#### **Important Note:**  
When creating a Multi-Line control for the _Descriptive Field_ , the Multi-Line _Name**must**_ have the following format:  
  
**SHOW**._name_._element_ _  
_  
  
  
|    
**_SHOW.SALES Multi-Line_**  
  
  
** _Run-Time Example: Validation with Salesperson Name Displayed_** |   
| | | |   
  
**_Step 4_**** _:_ Create Multi-Line Controls for Other Data Elements**

In Step 1, the _Populate All Fields_ check box was selected. This allows all data elements to be available when designing the panel.

On the same panel, draw Multi-Line controls for the three data elements below, using the names provided. These Multi-Line controls will automatically populate with data when a valid Sales Rep Code is entered.

|  **_Data Element_** |  **_Multi-Line Control Name_**  
---|---|---  
|  Department$ |  **SHOW.SALES.DEPARTMENT**  
|  ytdOrders |  **SHOW.SALES.YTDORDERS**  
|  ytdSales |  **SHOW.SALES.YTDSALES**  
  
#### **Note:**  
The Multi-Line control _Name**must**_ correspond with the name given to the element in the data dictionary.  
  
|    
**_Multi-Lines for Other Data Elements_** |   
|    
  
**_SHOW.SALES.DEPARTMENT Multi-Line_**   
**_SHOW.SALES.YTDORDERS Multi-Line_**   
**_SHOW.SALES.YTDSALES Multi-Line_** |   
|    
  
**_Run-Time Example: Validation with Department, YTD Orders and YTD Sales Populated_** |   
| | | | |   
  
**_Step 5_**** _:_ Panel Recap**

The end result is a panel created with th$e following Multi-Line controls for Extended Validation:

|   
---|---  
  
To make it easier to create Multi-Line controls for Extended Validation data elements, the **[Extended Class Browse](../../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Multi-Line%20Control/Extended%20Class%20Browse.md)** can be used. It shows a list of all the table data elements that can be added to a panel. When a data element is selected, the appropriate Multi-Line properties, including the _Name_ , are defined.

|    
**_Extended Class Browse: Department Data Element Selected_** |  |    
**_Multi-Line Properties: SHOW.SALES.DEPARTMENT_**  
---|---|---|---  
  
## Example: Extended Validation (Grids)

This example includes the following steps for defining Extended Validation, adding the Extended Validation data class to a Grid and viewing run-time examples of a NOMADS panel:

  * **[Step 1](Extended%20Validation.htm#step1_grid)**: Create a dynamic Multi-Line data class with Extended Validation.
  * **[Step 2](Extended%20Validation.htm#step2_grid)**: Add the Extended Validation data class to **Grid Presets Definition** and then specify the column, row or cell to be used for entering the value to be validated.



To begin:

**_Step 1_**** _:_ Create a Multi-Line Data Class with Extended Validation**

If desired, a new Multi-Line data class can be created by following **[Step 1](Extended%20Validation.htm#step1_ml)** of the above example.

Since a Multi-Line data class (**SALESCD**) with Extended Validation was previously created, it will be used for this example. Proceed to **[Step 2](Extended%20Validation.htm#step2_grid)**.

|  **_  
"SALESCD" Data Class with Extended Validation_**  
---|---  
  
**_Step 2:_****Add the Extended Validation Data Class to Grid Presets Definition**

When **SALESCD** was created, **_SalesrepKey_ _: Sales Rep Code_** was selected for the _Key_. This is the value to be validated.

On the NOMADS panel, create a new or select an existing Grid control. In the **Grid Properties** dialog, select the **[Presets](../../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Grid%20Control/Grid%20Properties.htm#presets)** tab.

In the _Property_ column, select _Class_ from the drop-down list. Specify the desired _Column_ /_Row_ that will be used to enter the value to be validated. In the _Value/Expression_ column, select the **SALESCD** class from the query.

|    
  
  
**_Run-Time Example: Valid Sales Rep Code Entered_**  
  
  
** _Run-Time Example: Invalid Sales Rep Code Entered_**  
---|---  
  
## See Also

**[Populate from Data Source](Populate%20from%20Data%20Source.md)**  
**[File Maintenance Generator](../../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Fmgen/Fmgen%20Introduction.md)**
