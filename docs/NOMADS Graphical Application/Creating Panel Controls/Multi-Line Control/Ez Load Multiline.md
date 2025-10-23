# Multi-Line Control  
  
**EZ Load Multi-Line**|   
---|---  
  
An EZ Load Multi-Line is a Multi-Line that self-loads based on the value of another control or variable associated with its panel. When the value of the other control changes, the EZ Load Multi-Line is re-populated with the associated value. The EZ Load Multi-Line can be used as a display-only lookup field to display additional information. For example, if the meaning of a Sales Code is not obvious on its own, you can add an EZ Load Multi-Line to your panel to automatically display the description for the Sales Code. When the Sales Code is changed, the description is automatically updated -- **_no coding is needed_**.

The EZ Load Multi-Line is automatically loaded when a panel is initially drawn if the control or variable that it is associated with is populated. The associated control or variable is referred to as the **_trigger_**. Whenever the value of the trigger control changes, the EZ Load Multi-Line is automatically updated.

To accomplish this, you only need to define the **_parameters_** required for an EZ Load Multi-Line:

  * **_Lookup File_** to be read and **_Key_** information to read the required record
  * **_Trigger Variable(s) and Control(s)_** that will initiate the reload when changed



See **[Defining an EZ Load Multi-Line](Ez%20Load%20Multiline.htm#Mark1)**.

#### **Note:**  
_EZ Load_ logic is **_not_** compatible with **[Smart Load](../../Smart%20Controls/Overview.md)** logic.

_(EZ Load Multi-Line was added in PxPlus 2018.)_

##  Defining an EZ Load Multi-Line

The **EZ Load Multi-Line Definition** window is used to turn on the _EZ Load_ logic for the target Multi-Line and supply the file and key information required to retrieve the information to be displayed. It also allows you to define load-triggering criteria for the control.

**_To create an EZ Load Multi-Line Definition:_**

|  1. |  In the **[NOMADS Panel Designer](../../Panel%20Designer/Introduction.md)**, access the **Properties** window for the target **[Multi-Line](Multi-Line%20Properties.md)**.  
---|---|---  
|  2. |  Select the **Attributes** tab (using the Folder Style version of the NOMADS designer).  
|  3. |  Click the _EZ Load_ button to bring up the **EZ Load Multi-Line Definition** window.  
  
  
  
This window consists of the following:

**Use EZ Load logic** |  Select this check box to enable EZ Load logic for the Multi-Line.  
---|---  
**File Information** |  **_(Available when Use EZ Load logic check box is selected)_** Identify the information about the file to be read to look up the targeted data to be displayed in the Multi-Line: |  _Lookup Table_ |  Specify the logical file name of the Data Dictionary defined table to be read to look up the data to be displayed. Use the Query buttons to locate the logical file name by Group or by Name.  
---|---  
_Table Key_ |  Select the key to use to read the specified _Lookup Table_. Hover the mouse pointer over the Information button to display a more detailed key definition.  
_Key Expression_ |  Enter a PxPlus expression consisting of any combination of variables from the panel, fields from accessible files, global variables, and/or literal values that may be concatenated to create the key value to read the record to retrieve the required data. A key expression may be string or numeric. **_Examples:_** TRN_CUSTID$ CustomerNum "D"+FLD#2$(1,3) %COMPANY_CODE$+CLIENT_CODE$ PAD(Company$,5,$00$)+PAD(Department$,10,$00$)+STR(EmployeeNum) KEY(__fileFN,KNO=0,KEY=Company$:Department$:EmployeeNum) **_Multi-Segment Keys_** When dealing with multi-segmented keys (i.e. keys made up of more than one field), you can use a **+** (_plus sign_) to concatenate multiple string segments of a key when entering a free-form expression. Be sure to add the correct padding logic to the initial key segments. By default, the initial segments of native PxPlus keys are padded with $00$ characters, and the final segment is not padded. Such a key definition might look like this: PAD(Company$,5,$00$)+PAD(Department$,10,$00$)+STR(EmployeeNum) Individual applications can pad key segments with other characters, such as spaces; therefore, knowledge of the key architecture of individual files is a **_must_**. Knowledge of segment characteristics is not necessary; however, if the key expression uses the **KEY(__linkFN,KNO=n,KEY=FLD1$:FLD2$)** format where **__linkFN** is a special channel variable used by the system when evaluating the key, **_n_** is the key number used by the file, and **FLD1$:FLD2$** are the key segment variables. The latter format is also more flexible as it can handle changes in key segment length if keys are updated for a file. In addition, this format allows a mixture of string and numeric segments. **_Key Expression Builder_** An easy way to build a key expression is to use the **Key Expression** utility, which is invoked by clicking the Tool button next to the _Key Expression_. The key expression is built by specifying key segments to match the target key definition. These segments can consist of fields from the parent file, literal values and variables. Partial items can be defined, and segments can be padded, have characters stripped, or be converted to upper/lower case. In the case of **_multi-segment keys_** , a _Generate a KEY=F1$:F2$ expression_ check box option is available: |  |  If it is not selected, the key segments will be concatenated, and individual key segments would have to be padded or manipulated appropriately.  
---|---  
|  If it is selected, then a key expression in the format **KEY(__linkFN,KNO=_n_ ,KEY=FLD1$:FLD2$)** will be generated where the segments need not be manipulated. (For an explanation of the contents of the generated key, see **[Multi-Segment Keys](Ez%20Load%20Multiline.htm#multiseg_keys)**.)  
  
Simple numeric keys can be built using a numeric field. Multi-segment numeric keys should be built using the _Generate a KEY=F1$:F2$ expression_ option.

_(The Generate a KEY=F1$:F2$ expression check box was added in PxPlus 2023.)  
(The ability to define numeric keys and multi-segment keys for an EZLoad Multi-Line was added in PxPlus 2023 Update 1.)_  
  
_Display Field_ |  Select the field whose value will be displayed in the Multi-Line using the drop-down list of fields in the specified _Lookup Table_.  
_Additional Fields_ |  **_(Available when Display Field is selected)_** Button that invokes the **EZ Load Additional Fields Definition** dialog. This dialog is used to specify additional Multi-Line controls on the same NOMADS panel that will be populated with data read from the selected _Lookup Table_ using the same _Key Expression_. For example, a Multi-Line for entering Product Codes is defined on a NOMADS panel. To display the Product Description when a Product Code is entered, a second Multi-Line can be defined with EZ Load functionality to read the Product table and retrieve that data. To display other fields, such as Price, Standard Cost and Quantity on Hand, from the same Product table record, additional Multi-Lines are created. Instead of defining these Multi-Lines with their own EZ Load definitions, they can be defined as **EZ Load Additional Fields** by associating them with the EZ Load definition on the Product Description Multi-Line. This allows other Multi-Lines on the same panel to use data from the same _Lookup Table_ record, eliminating the need for multiple EZ Load definitions. This dialog consists of the following: |  **File Information** |  Displays the selected _Lookup Table_ and _Display Field_.  
---|---  
_Screen Controls_ |  Click the drop-down arrow for a list of existing Multi-Line controls on the current NOMADS panel. This list does not include the actual EZ Load Multi-Line since it has already been defined on the main **EZ Load Multi-line Definition** dialog.  
  
Multi-Line controls that are not yet defined on the NOMADS panel may also be manually entered.  
_Field Expression_ |  **_(Available when a Screen Control is entered)_** Click the drop-down arrow for a list of fields from the selected _Lookup Table_. The _Field Expression_ is usually the name of the field; however, it may also be any expression derived from constants and/or variables known at run time.  
_Delete Row(s)_ |  Grid-side button used to delete any row(s) no longer required.  
_Auto Allocate_ |  If the Multi-Lines on the NOMADS panel have been named to match the field names from the _Lookup Table_ , use the _Auto Allocate_ button to auto populate the grid.

#### **Note:**  
Only controls and fields of the same type (numeric/string) will be matched by the _Auto Allocate_ button.  
  
_OK_ |  Saves the additional fields entered in the grid and returns to the **EZ Load Multi-line Definition** dialog. The _Additional Fields_ button will display a check mark to indicate that additional fields have been defined. Any rows that do not have a _Field Expression_ entered will not be saved.  
_Cancel_ |  Exits the **EZ Load Additional Fields Definition** dialog without saving any changes.  
  
_(The Additional Fields button and EZ Load Additional Fields Definition dialog were added in PxPlus 2020.)_  
  
**Trigger Variables and Controls** |  Trigger variables initiate the load logic. Any change in the value of a trigger variable will cause the EZ Load Multi-Line to be reloaded after the trigger control's On Change logic has been executed. (EZ Load-enabled controls are also loaded whenever a panel is drawn if the trigger variable has been populated.) |  _Variables_ |  Enter the name of a variable from your PxPlus application. Click the _Add Variable_ button to add the variable to the _Selected Triggers_ list.  
---|---  
_Controls_ |  Lists all available controls in the current panel. Click the _Add Control_ button to move a selected control to the _Selected Triggers_ list.  
_Selected Triggers_ |  Lists variables and controls currently selected to be used in the trigger criteria. To remove a selected item from this list, click the _Remove_ button.

#### **Note:**  
If no triggers have been selected, defining the **[Key Expression](Ez%20Load%20Multiline.htm#Mark2)** will automatically populate the _Selected Triggers_ list with its associated variables.  
  
**Text to Display if Read Fails** |  Text to load into the Multi-Line when the load logic fails to retrieve data. Can be a _Fixed_ value, string _Expression_ or _Message Library_ entry (see **[Message Library Maintenance](../../Message%20Library%20Maintenance/Overview.md)**). If left blank, the default message _Not on File_ (i.e. MSG("NOTONFILE")) will be displayed.  
  
#### **Note:   
**EZ Load Multi-Lines are intended for information as **_display only_**. Typically, this type of field might be used to look up and display a client name beside the input field where the client code is entered.  
  
As display-only fields, it is common practice to turn **_Off_** the _Tab Stop_ option and turn **_On_** the _Locked_ and _Borderless_ attributes for the Multi-Line.
