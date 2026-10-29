# How To Tutorials

**How to Use Extended Class Validation and Display**|   
---|---  
  
Starting with PxPlus 2019, **[Extended Class Validation](../Data%20Dictionary/Data%20Classes/Extended%20Validation.md)** allows for additional data validation and the ability to add display-only fields based on a table when designing NOMADS panels. For example, you may have a Customer Maintenance panel with a Salesperson Code field that you want to validate against the Salesperson table. You may also want to display the Salesperson Name, along with other data, when a valid Salesperson Code is entered.

The steps below show you how to accomplish this.

**_How to Define a Multi-Line Data Class with Extended Validation_**

1. |  In **Data Class Definitions** maintenance, create a new **_dynamic_** Multi-Line data class (i.e. SALESREP).  
---|---  
2. |  On the **Validation** tab, select the _Use Extended Validation_ check box.  
3. |  In the _Table_ field, select the data table to be used for the validation.  
4. |  From the _Key_ drop box, select the key to use for the verification.  All the keys defined for the table are loaded.  
5. |  From the _Descriptive Field_ drop box, select the data element (i.e. Salesperson Name) that is to be available when designing the NOMADS panel.  All data elements from the table are loaded.  
6. |  Select the _Populate All Fields_ check box to make all the data elements from the selected table available when designing the NOMADS panel.  
7. |  _(Optional)_ You can override the standard validation message by selecting a message library in the _Error if Invalid_ field.  
8. |  _(Optional)_ Program logic can also be entered to override the standard validation message in the _Logic if not Found_ field.  
9. |  Enter the other required fields and save the Data Class definition.  
  
**_How to Create NOMADS Multi-Line Controls to Use with Extended Validation and Display_**

1. |  Call up the NOMADS panel.  
---|---  
2. |  Create a new Multi-Line control and give it a name (i.e. SALESPERSON). Enter the data class SALESREP that you created earlier (in Step 1 above under **Data Class Definition**).  
3. |  Create another new Multi-Line control, which will be used for the Salesperson Name.  
4. |  To get the data you want, you can use **_one_** of the following two methods: **_Method 1:_  
**  
In the Multi-Line control _Name_ field, enter the name using the syntax **SHOW**._name_._element_ (i.e. **SHOW**.SALESPERSON.NAME) where SALESPERSON is the name of the Multi-Line control created in Step 2, and NAME is the name of the data element from the table.  
  
**_OR_**  
**  
_Method 2:_  
  
** Click the _Extended Class Browse_ button beside the Multi-Line control _Name_ field to display the data elements from the table based on the SALESPERSON Multi-Line control created in Step 2. When a data element is selected, the same control _Name_ syntax used in **Method 1** is created.  
5. |  When creating a **SHOW** Multi-Line control, the _Locked_ , _Borderless_ and _Transparent_ attributes (on the **Attributes** tab) are automatically set.  
6. |  You can continue to create new Multi-Line controls and select other data elements to display as desired.  
  
## See Also

**[Example: Extended Validation (Multi-Lines)](../Data%20Dictionary/Data%20Classes/Extended%20Validation.htm#example_ml)**  
**[Example: Extended Validation (Grids)](../Data%20Dictionary/Data%20Classes/Extended%20Validation.htm#example_grid)**

 

 

 
