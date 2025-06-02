# Data Classes

**Populate from Data Source (Drop Boxes and List Boxes)**|   
---|---  
  
When creating data classes for **[Drop Boxes](Dropbox.htm#display)** and **[List Boxes](Listbox.htm#display)**, a _Load From File_ check box (on **Display** tab) can be selected, which allows a data table/file to be defined as the source when populating a Drop Box or List Box at run time.

|    
**_Drop Box Data Class: Load From File_** |    
**_List Box Data Class: Load From File_**  
---|---|---  
  
#### **Note:**  
The _Load From File_ check box is available only when defining **_Dynamic_** data classes for Drop Boxes and List Boxes. For information on creating a dynamic data class, see **[Dynamic Control Properties](Dynamic.md)**.

When working with Grids in the NOMADS Panel Designer, a data class can be added in **[Grid Presets Definition](../../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Grid%20Control/Presets%20Definition.htm#dataclasses)** by selecting the _Class_ property. If adding a **_Drop Box_** or a **_List Box_** data class that is defined with **_Load From File_** functionality, at run time, the cell will be created as a _Drop Box_ populated from the pre-defined data source.

_(The Load From File check box was added in PxPlus 2019.)_

The following five examples include detailed steps on how to define the **_Load From File_** functionality for Drop Box and List Box data classes, as well as how this functionality is subsequently applied when a NOMADS panel is run.

|  **[Example: Load From File (Drop Box)](Populate%20from%20Data%20Source.htm#example_db)**  
---|---  
|  **[Example: Load From File (List Box)](Populate%20from%20Data%20Source.htm#example_lb)**  
|  **[Example: Load From File (Other List Box Types)](Populate%20from%20Data%20Source.htm#example_otherlb)**  
|  **[Example: Load From File (Drop Box Class Added to Grid)](Populate%20from%20Data%20Source.htm#example_dbgrid)**  
|  **[Example: Load From File (List Box Class Added to Grid)](Populate%20from%20Data%20Source.htm#example_lbgrid)**  
  
All examples use the **Sales Rep** table, which consists of the data elements below.

|    
**_Sales Rep Table: Data Elements_**  
---|---  
  
## Example: Load From File (Drop Box)

This example includes the following steps for defining the _Load From File_ functionality for a Drop Box data class and viewing run-time examples of a NOMADS panel:

  * **[Step 1](Populate%20from%20Data%20Source.htm#step1_db)**: Create a dynamic Drop Box data class with the _Load From File_ option.
  * **[Step 2](Populate%20from%20Data%20Source.htm#step2_db)**: Create a Drop Box control with the _Load From File_ data class.
  * **[Step 3](Populate%20from%20Data%20Source.htm#step3_db)**: Run the panel.



To begin:

**_Step 1_**** _:_ Create a Drop Box Data Class with the Load From File Option**

In **[Data Class Definitions](Dropbox.md)** maintenance, create a Drop Box data class. Name it **SALESDB** and select the _Dynamic_ check box.

On the **Display** tab, select the _Load From File_ check box. Enter the _Load From File_ settings below.

|    
**_"SALESDB" Data Class with Load From File_**  
---|---  
  
**_Step 2_**** _:_ Create a Drop Box Control with the Load From File Data Class**

In Step 1, **_SalesrepKey_ _: Sales Rep Code_** was selected for the _Key_. This value will be used when populating the Drop Box.

On the NOMADS panel, create a Drop Box control with the _Load From File_ data class. Name the Drop Box control **SALESCODE** and for the _Class_ , enter **SALESDB**.

|    
**_"SALESCODE" Drop Box_**  
  
  
** _"SALESCODE" Drop Box with Load From File Data Class "SALESDB"_**  
---|---  
  
**_Step 3_**** _:_ Run the Panel**

In Step 1, the following _Load From File_ settings were selected:

|  _Key_ |  **_SalesrepKey_ _: Sales Rep Code_**  
---|---|---  
|  _Display Value_ |  **_Name$_**  
|  _Include Key and Value_ |  **_On_**  
  
At run time, the Drop Box control is populated with data from the **_Sales Rep_** table. The values displayed include **_Sales Rep Code_** and **_Name$_** , separated by a **:**  _(colon)_ and two spaces.

|    
**_Run-Time Example: Sales Rep Code + Name_**  
---|---  
  
#### **Note:**  
For multi-part keys that are displayed in the Drop Box values, any Hex null characters are translated to spaces.

If the _Include Key and Value_ check box is **_Off_** , then the values displayed will consist of **_Name$_** only.

|    
**_Run-Time Example: Name Only_**  
---|---  
  
If _Display Value_ is blank, then the values displayed will consist of **_Key_** values only.

|    
**_Run-Time Example: Key Values Only_**  
---|---  
  
These run-time examples demonstrate how changing certain settings can affect the values displayed in the Drop Box. When a record is selected, the value returned is based on the _Return Value_ , which was specified as **_SalesrepKey_** for this example. This consists of the Sales Rep Code (e.g. AN).

## Example: Load From File (List Box)

This example includes the following steps for defining the _Load From File_ functionality for a List Box data class and viewing run-time examples of a NOMADS panel:

  * **[Step 1](Populate%20from%20Data%20Source.htm#step1_lb)**: Create a dynamic List Box data class with the _Load From File_ option.
  * **[Step 2](Populate%20from%20Data%20Source.htm#step2_lb)**: Create a List Box control with the _Load From File_ data class.
  * **[Step 3](Populate%20from%20Data%20Source.htm#step3_lb)**: Run the panel.



To begin:

**_Step 1_**** _:_ Create a List Box Data Class with the Load From File Option**

In **[Data Class Definitions](Dropbox.md)** maintenance, create a List Box data class and for the _List Box Type_ , select _Report View_. Name it **SALESLB** and select the _Dynamic_ check box.

On the **Display** tab, select the _Load From File_ check box. Enter the _Load From File_ settings below.

|    
**_"SALESLB" Data Class with Load From File_**  
---|---  
  
**_Step 2_**** _:_ Create a List Box Control with the Load From File Data Class**

In Step 1, **_SalesrepKey_ _: Sales Rep Code_** was selected for the _Key_. This value will be used when populating the List Box.

On the NOMADS panel, create a List Box control with the _Load From File_ data class. Name the List Box control **SALESCODE** and for the _Class_ , enter **SALESLB**.

|    
**_"SALESCODE" List Box_**  
  
  
** _"SALESCODE" List Box with Load From File Data Class "SALESLB"_**  
---|---  
  
**_Step 3_**** _:_ Run the Panel**

In Step 1, the following _Load From File_ settings were selected:

|  _Key_ |  **_SalesrepKey_ _: Sales Rep Code_**  
---|---|---  
|  _Display Value_ |  **_Name$_**  
|  _Include Key and Value_ |  **_On_**  
  
At run time, the List Box (Report View) control is populated with data from the **_Sales Rep_** table. The values displayed include **_Sales Rep Code_** and **_Name$_** in two separate columns using the column headers from the table.

|    
**_Run-Time Example: Sales Rep Code + Name_**  
---|---  
  
#### **Note 1:**  
When determining the format for _Report View_ List Boxes, column widths are determined by taking the _higher_ value between the data size and the header size.  
  
**Note 2:**  
For multi-part keys that are displayed in the List Box values, any Hex null characters are translated to spaces.

If the _Include Key and Value_ check box is **_Off_** , then the values displayed will consist of **_Name$_** only.

|    
**_Run-Time Example: Name Only_**  
---|---  
  
If _Display Value_ is blank, then the values displayed will consist of **_Key_** values only.

|    
**_Run-Time Example: Key Values Only_**  
---|---  
  
These run-time examples demonstrate how changing certain settings can affect the values displayed in the List Box. When a record is selected, the value returned is based on the _Return Value_ , which was specified as **_SalesRepNameKey_** (this is not the primary key) for this example. This consists of the **_Name + Sales Rep Code_** and may contain Hex null characters (e.g. Andrew Newman AN). Returning a key other than the Primary key may be advantageous if it is useful to know other values that may be passed out of the key value.

## Example: Load From File (Other List Box Types)

The examples below show List Box results that were produced when the same _Load From File_ selections (see **[Example: Load From File (List Box)](Populate%20from%20Data%20Source.htm#example_lb)** were used to define new List Box data classes for other **[List Box Types](Listbox.htm#display)** (i.e. _Standard, Formatted, List View, Tree View_).

> #### **Note:**  
When defining List Box data classes, the _List Box Type**cannot**_ be changed once the data class definition is saved. If the preference is to use an existing _Class Name_ , delete the existing definition before creating a new one with the same name.

## Example: Load From File (Drop Box Class Added to Grid)

This example includes the following steps for defining the _Load From File_ functionality for a Drop Box data class, adding this data class to a grid and viewing run-time examples of a NOMADS panel:

  * **[Step 1](Populate%20from%20Data%20Source.htm#step1_dbgrid)**: Create a dynamic Drop Box data class with the _Load From File_ option.
  * **[Step 2](Populate%20from%20Data%20Source.htm#step2_dbgrid)**: Add this _Load From File_ data class to the **Grid Presets Definition** and then specify the column, row or cell that is to contain the Drop Box to be populated.
  * **[Step 3](Populate%20from%20Data%20Source.htm#step3_dbgrid)**: Run the panel.



To begin:

**_Step 1_** **_:_** **Create a Drop Box Data Class with the Load From File Option**

If desired, a new Drop Box data class can be created by using the steps in the **[Example: Load From File (Drop Box)](Populate%20from%20Data%20Source.htm#example_db)**.

Since a Drop Box data class (**SALESDB**) with the _Load From File_ option was previously created, it will be used for this example. Proceed to **[Step 2](Populate%20from%20Data%20Source.htm#step2_dbgrid)**.

> **_Step 2_**** _:_ Add this Load From File Data Class to Grid Presets Definition**

On the NOMADS panel, create a new or select an existing Grid control. In the **Grid Properties** dialog, select the **[Presets](../../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Grid%20Control/Grid%20Properties.htm#presets)** tab.

In the _Property_ column, select _Class_ from the drop-down list. Specify the desired _Column/Row_ that is to contain the Drop Box to be populated. In the _Value/Expression_ column, select the **SALESDB** class from the query.

|    
**_Grid Presets with Load From File Data Class "SALESDB"_**  
---|---  
  
**_Step 3_** **_:_ Run the Panel**

In Step 1, the following _Load From File_ settings were selected:

|  _Key_ |  **_SalesrepKey_ _: Sales Rep Code_**  
---|---|---  
|  _Display Value_ |  **_Name$_**  
|  _Include Key and Value_ |  **_On_**  
  
At run time, the Drop Box is populated with data from the **_Sales Rep_** table. The values displayed include the **_Sales Rep Code_** and **_Name$_** , separated by a **:**  _(colon)_ and two spaces.

|    
**_Run-Time Example: Sales Rep Code + Name_**  
---|---  
  
If the _Include Key and Value_ check box is **_Off_** , then the values displayed will consist of **_Name$_** only.

|    
**_Run-Time Example: Name Only_**  
---|---  
  
If the _Display Value_ is blank, then the values displayed will consist of **_Key_** values only.

|    
**_Run-Time Example: Key Values Only_**  
---|---  
  
These run-time examples demonstrate how changing certain settings can affect the values displayed in the Drop Box. When a record is selected, the value returned is based on the _Return Value_ , which was specified as **_SalesrepKey_** for this example. This consists of the Sales Rep Code (e.g. AN).

## Example: Load From File (List Box Class Added to Grid)

This example includes the following steps for defining the _Load From File_ functionality for a List Box data class, adding this data class to a grid and viewing run-time examples of a NOMADS panel:

#### **Note****:**  
When adding a **List Box** data class with _Load From File_ functionality to a grid, the cell will be created as a _Drop Box_ (rather than a List Box) and populated at run time from the pre-defined data source.

  * **[Step 1](Populate%20from%20Data%20Source.htm#step1_lbgrid)**: Create a dynamic List Box data class with the _Load From File_ option.
  * **[Step 2](Populate%20from%20Data%20Source.htm#step2_lbgrid)**: Add this _Load From File_ data class to the **Grid Presets Definition** and then specify the column, row or cell that is to contain the Drop Box to be populated.
  * **[Step 3](Populate%20from%20Data%20Source.htm#step3_lbgrid)**: Run the panel.



To begin:

**_Step 1_** **_:_** **Create a List Box Data Class with the Load From File Option**

If desired, a new List Box data class can be created by using the steps in the **[Example: Load From File (List Box)](Populate%20from%20Data%20Source.htm#example_lb)**.

Since a List Box data class (**SALESLB**) with the _Load From File_ option was previously created, it will be used for this example. Proceed to **[Step 2](Populate%20from%20Data%20Source.htm#step2_lbgrid)**.

|   
---|---  
  
**_Step 2_**** _:_ Add this Load From File Data Class to Grid Presets Definition**

On the NOMADS panel, create a new or select an existing Grid control. In the **Grid Properties** dialog, select the **[Presets](../../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Grid%20Control/Grid%20Properties.htm#presets)** tab.

In the _Property_ column, select _Class_ from the drop-down list. Specify the desired _Column_ /_Row_ that is to contain the Drop Box to be populated (see **[Note](Populate%20from%20Data%20Source.htm#note_lb)** above). In the _Value/Expression_ column, select the **SALESLB** class from the query.

|    
**_Grid Presets with Load From File Data Class "SALESLB"_**  
---|---  
  
**_Step 3_** **_:_ Run the Panel**

In Step 1, the following _Load From File_ settings were selected:

|  _Key_ |  **_SalesrepKey_ _: Sales Rep Code_**  
---|---|---  
|  _Display Value_ |  **_Name$_**  
|  _Include Key and Value_ |  **_On_**  
  
At run time, the _Drop Box_ is populated with data from the **_Sales Rep_** table. The values displayed include the **_Sales Rep Code_** and **_Name$_** , separated by a **:**  _(colon)_ and two spaces.

|    
**_Run-Time Example: Sales Rep Code + Name_**  
---|---  
  
If the _Include Key and Value_ check box is **_Off_** , then the values displayed will consist of **_Name$_** only.

|    
**_Run-Time Example: Name Only_**  
---|---  
  
If the _Display Value_ is blank, then the values displayed will consist of **_Key_** values only.

|    
**_Run-Time Example: Key Values Only_**  
---|---  
  
These run-time examples demonstrate how changing certain settings can affect the values displayed in the List Box. When a record is selected, the value returned is based on the _Return Value_ , which was specified as **_SalesRepNameKey_** (this is not the primary key) for this example. This consists of the **_Name + Sales Rep Code_** and may contain Hex null characters (e.g. Andrew Newman AN). Returning a key other than the Primary key may be advantageous if it is useful to know other values that may be passed out of the key value.

## See Also

**[Extended Class Validation](Extended%20Validation.md)**
