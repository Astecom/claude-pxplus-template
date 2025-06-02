# Data Classes

**Dynamic Control Properties**|   
---|---  
  
As end users' priorities and requirements change, having the ability to quickly modify control properties or create new ones is crucial. To simplify panel design and streamline control definitions, PxPlus 2018 introduces the capability to create **_dynamic control properties_**. When combined with **_data classes_** , dynamic control properties are ideally suited for data elements with similar properties in an application (i.e. dates, numeric codes, descriptions or lists of values).

By using **_dynamic control properties_** , changes to existing panels and controls are minimized since only the data class needs to be changed. At run time, dynamic control properties are evaluated and **_automatically_** populated with values based on what is defined in the data class.

When a data class is entered for the control, information from the data class is loaded into the control's properties. If the data class is **_dynamic_** , the dynamic control properties are **_automatically_** set to _Dynamic_ initially and assigned a **%NOMADS'class'** variable that corresponds to a data class field (i.e. **%NOMADS'class'length**). **_Dynamic_** data classes are created by selecting the _Dynamic_ check box in **[Data Class Definitions](Overview.htm#Mark1)** maintenance.

Control properties designated as **_dynamic_** can be _manually_ switched to dynamic or non-dynamic. A control can have a combination of dynamic **_and_** non-dynamic control properties **_only_** when a data class is entered.

Dynamic control properties are available for Multi-Lines, Drop Boxes, List Boxes and Check Boxes.

When working with Grids in the NOMADS Panel Designer, a data class can be assigned in **[Grid Presets Definition](../../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Grid%20Control/Presets%20Definition.htm#dataclasses)** by selecting the _Class_ property.

For a list of the dynamic control properties for each of these control types, see **[Dynamic Control Properties](Dynamic.htm#dynamic)**.

#### **Note:**  
Dynamic control properties are supported in NOMADS **_and_** iNomads environments.

## Extended Class Validation

Extended Validation is used to provide additional table validation and allow access to data elements for creating **_display-only_** Multi-Line controls when designing NOMADS panels.

See **[Extended Class Validation](Extended%20Validation.md)** for information on defining **_Extended Validation_** for **[Multi-Line Data Classes](Multiline.htm#extvalidation)** that can be assigned to Multi-Line and Grid controls.

_(Extended Validation for Multi-Line Data Classes was added in PxPlus 2019.)_

## Populate Drop Boxes and List Boxes from a Data Source

When creating data classes for **[Drop Boxes](Dropbox.htm#display)** and **[List Boxes](Listbox.htm#display)**, a _Load From File_ check box (on **Display** tab) can be selected, which allows a data table/file to be defined as the source when populating a drop box or list box at run time.

See **[Populate from Data Source](Populate%20from%20Data%20Source.md)** for information on defining the **_Load From File_** functionality for Drop Box and List Box data classes, which can also be assigned to Grid controls.

_(The Load From File functionality was added in PxPlus 2019.)_

##  Examples - Dynamic Data Classes

The examples below show how to create, apply and use dynamic data classes, as well as how to manually set dynamic properties:

|  **[Example 1](Dynamic.htm#Example1):** |  **_Creating and Applying a Dynamic Data Class_**  
---|---|---  
|  **[Example 2](Dynamic.htm#Example2):** |  **_Manually Setting Dynamic Properties_**  
|  **[Example 3](Dynamic.htm#Example3):** |  **_Using Dynamic Data Classes_**  
|  **[Example 4](Dynamic.htm#Example4):** |  **_Applying a Dynamic Data Class Using Property Sheets_**  
  
**_Example 1_**** _: Creating and Applying a Dynamic Data Class_**

This example shows that the **_dynamic_** data class, NAME, is created for a Multi-Line control type in **Data Class Definitions** maintenance. The _Dynamic_ check box is selected, which defines this as a dynamic data class.

The NAME data class is applied to the CUSTOMER_NAME Multi-Line control. Information from the NAME data class is loaded into the control's properties. The _Dynamic Class_ check box indicates that the selected data class is dynamic. Dynamic control properties are automatically set to _Dynamic_ initially and assigned a **%NOMADS'class'** variable.

|    
**_* Indicates properties that can be Dynamic_** |  |    
**_Dynamic control properties automatically set to "Dynamic"_**  
---|---|---|---  
  
**_Example 2_**** _: Manually Setting Dynamic Properties_**

When a data class that is **_not_** dynamic is entered for a control, dynamic control properties (i.e. _Initial Value, Input Length, Input Format_) can be **_manually_** set to _Dynamic_.

In this example, the NAME data class is **_not_** dynamic, as indicated by the _Dynamic_ check box, which is **_not_** selected.

When the NAME data class is applied to the CUSTOMER_NAME multi-line control, information from the NAME data class is loaded into the control's properties.

Because NAME is **_not_** a dynamic data class, the dynamic control properties are **_not_** automatically set to _Dynamic_ , but they can be **_manually_** set. This is indicated by the _Dynamic_ option in the _Initial Value_ drop box in the screenshot below.

|    
**_Data class not Dynamic_** |  |    
**_Dynamic control properties can be manually set to "Dynamic"_**  
---|---|---|---  
  
**_Example 3_**** _: Using Dynamic Data Classes_**

For this example, suppose your application contains a drop box control named CREDIT_CARD, which is used for selecting a credit card type. This control exists in multiple panels throughout your application. Creating a **_dynamic data class_** will make subsequent changes to this drop box significantly easier.

To begin, create a **_dynamic_** data class for a drop box control. Enter CREDIT for the _Class Name_ , along with the following **List Values** : _American Express_ , _MasterCard_ and _Visa_.

Next, apply the CREDIT data class to the CREDIT_CARD drop box control. Information from the CREDIT data class is loaded into the control's properties. Dynamic control properties are automatically set to _Dynamic_ initially and assigned a **%NOMADS'class'** variable. In this example, **List Values** is set to _Dynamic_ and assigned a **%NOMADS'class'values$** variable.

|    
**_Dynamic data class "CREDIT" created_** |  |    
**_Dynamic data class "CREDIT" applied to the drop box control_**  
---|---|---|---  
  
At run time, the CREDIT_CARD drop box is automatically populated with the **List Values** entered for the CREDIT data class.

|    
**_Dynamic drop box at run time_**  
---|---  
  
Now, suppose that the end user requests the addition of two more selections to this drop box: _CitiBank_ and _Discover_.

To do this requires **_one change_** \- adding the two selections to the **List Values** for the CREDIT data class. No other panels need to be changed.

At run time, because the **List Values** property is **_dynamic_** , this drop box is automatically populated with the two additional selections entered for the CREDIT data class.

|    
**_List Values modified in the Dynamic data class "CREDIT"_** |  |    
**_Dynamic drop box at run time_**  
---|---|---|---  
  
**_Example 4_**** _: Applying a Dynamic Data Class Using Property Sheets_**

The example below shows the **_dynamic_** data class NAME applied to the _Customer_Name_ Multi-Line control using **[Property Sheets](../../NOMADS%20Graphical%20Application/Panel%20Designer/Properties%20Table/Overview.md)**.

  
**_Dynamic control properties automatically set with Expression_** |    
  
  
  
  
  
  
|    
  
  
  
  
  
  
  
**_Assign Data Class dialog_**  
---|---|---  
  
##  Dynamic Control Properties

The table below lists the **_dynamic control properties_** for Multi-Lines, Drop Boxes, List Boxes and Check Boxes.

**Control Type** |  **Name of Folder Tab**  
---|---  
|  **Display** |  **Font/Color** |  **Attributes** |  **Values** |  **User Aid** |  **Validation** |  **Query**  
**Multi-Line** |  Initial Value  
Input Length  
Empty Value  
Input Format |  Visual Class  
iNomads Class |  User-Defined Tag Field |  N/A |  Help Reference  
Floating Tip  
Message Bar |  Data Validation/Display Logic |  Query Type  
**Drop Box** |  List Values  
Input Length |  Visual Class  
iNomads Class |  User Tag Field |  Default Setting  
Translation |  Help Reference  
Floating Tip  
Message Bar |  N/A |  Query Type  
**List Box** |  List Values  
Input Length |  Visual Class  
iNomads Class |  User Tag Field  
Format button  
States button |  Default Setting  
Translation |  Help Reference  
Floating Tip  
Message Bar |  N/A |  Query Type  
**Check Box** |  Text  
Off State  
On State  
3rd State  
Image Transparency |  Visual Class  
iNomads Class |  User-Defined Tag Field |  Default Setting  
Values |  Help Reference  
Floating Tip  
Message Bar |  N/A |  N/A  
  
#### **Note:**  
Data classes can also be assigned to an entire grid or to individual cells in [**Grid Presets Definition**](../../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Grid%20Control/Presets%20Definition.htm#dataclasses) by selecting the _Class_ property.

_(Tree View States were added to Dynamic Data Classes in PxPlus 2019.)_
