# Defining the Data   
  
**Parameters** |  **__**  
---|---  
  
Parameters are values that are supplied by the user or application program when a report is generated. These may be displayed in the report, used in formulas, or used to set up selection criteria. For example, a report may be designed to generate data for a particular department to be specified by the user requesting the report. In addition, a report may be designed to display transactions between a certain start and end date to be specified at run time.

## Report Parameters

The **Report Parameters** window is used to define parameters.

To invoke this window, select _Parameters_ from the Report Designer _Data_ menu or right click on the data source in the left data pane and select _Define Parameters_ from the popup menu.

> A parameter definition is comprised of the following:

_Parameter Name_ |  Name of the data variable. It is used mainly in formulas and filter definitions and **_must_** start with an alpha character, followed by alphanumeric characters, underscore or period. Maximum 30 characters.  
---|---  
_Class_ |  Click the _Class_ button to assign a Data Class to a parameter. Data classes can have descriptions, input lengths, default values and formats assigned to them, which will be applied to the default interactive interface. They may also have drop box definitions, check box input and queries that will be applied. _Prompt/Description_ , _Maximum Length_ , _Default Value_ and _Format_ values are loaded from the Data Class definition but may be overridden. When a _Class_ is selected, pertinent Class information is displayed in the **Data Class Information** grid below the parameters. For data classes using a Multi-line control type with an assigned _Validator_ program or **[Extended Validation](../../../Data%20Dictionary/Data%20Classes/Extended%20Validation.md)**, an option to _Ignore class validation_ is available. This option allows the end user at run time to enter a value that would not pass the validation test and is useful for entering general Start and End value ranges. To remove Data Class specifications from parameters, select the parameters and click the button next to the **Data Class Information** grid. You will be prompted to confirm your selection prior to the deletion.

#### **Note:**  
If no Data Classes have been defined, the _Class_ button and **Data Class Information** grid will not display.

_(The ability to specify a Class was added in PxPlus 2019.)  
(Support for loading Maximum Length value from a Data Class was added in PxPlus 2020.)  
(The Ignore class validation option was added in PxPlus 2022.)_  
_Prompt/Description_ |  Prompt to display in the user interface that is presented when the report is generated. This should explain to the user what value to enter and its format. By default, the prompt is a _Fixed_ value; however, an _Expression_ can be used by preceding the expression with an **=** (_equals sign_): =%DatePrompt$ _(The ability to use an Expression to set a parameter was added in PxPlus 2020.)_  
_Type_ |  Text or numeric (computational) value.  
_Maximum Length_ |  Maximum length of the value to be entered by the user. By default, the maximum length is a _Fixed_ value; however, an _Expression_ can be used by preceding the expression with an **=** (_equals sign_): =%MaxLength _(The ability to use an Expression to set a parameter was added in PxPlus 2020.)_  
_Minimum Value_ |  **_(Optional)_** Minimum value that can be entered. By default, the minimum value is a _Fixed_ value; however, an _Expression_ can be used by preceding the expression with an **=** (_equals sign_): =DTE(0:"%Y%Mz%Dz") _(The ability to use an Expression to set a parameter was added in PxPlus 2020.)_  
_Maximum Value_ |  **_(Optional)_** Maximum value that can be entered. By default, the maximum value is a _Fixed_ value; however, an _Expression_ can be used by preceding the expression with an **=** (_equals sign_): =DTE(0:"%Y%Mz%Dz") _(The ability to use an Expression to set a parameter was added in PxPlus 2020.)_  
_Default Value_ |  **_(Optional)_** Pre-set value that will automatically be loaded. By default, the default value is a _Fixed_ value; however, an _Expression_ can be used by preceding the expression with an = (_equals sign_): =DTE(0:"%Y%Mz%Dz") _(The ability to use an Expression to set a parameter was added in PxPlus 2020.)_  
_Format_ |  An input format may be assigned to a parameter to simplify and restrict user input. By default, the format is a _Fixed_ value; however, an _Expression_ can be used by preceding the expression with an **=** (_equals sign_): =%MyFormat$ **_Example:_** A date format defined as 0000/00/00 limits the input to eight digits and acts as a visual cue that the input is a date.

#### **Note:**  
When a format is used, the value returned is raw unformatted data excluding any special formatting characters. The value returned using a format such as 000-0000 would be seven digits long and exclude the dash.

_(The ability to specify a Format was added in PxPlus 2019.)  
__(The ability to use an Expression to set a parameter was added in PxPlus 2020.)_  
  
Parameter definitions can also be added by selecting existing definitions from Report Writer libraries. These can be accessed by clicking the _Select Parameter Fields_ button next to the grid. Library parameters are displayed with their name prefixed by an *****_(asterisk)_ , and the associated definition is locked. See **[Adding Library Elements to a Report Definition](../../Report%20Writer%20Libraries/Introduction.htm#addlibraryelements)**.

Once parameters have been defined, they will appear in the data pane of the Report Designer, above the data source and its elements. From here, they may be dragged and dropped onto the report definition.

When the report is generated, by default a generic interactive parameter interface is presented to the user to input the values required for the report generator if parameters are defined. These values are validated for correct type, length and minimum/maximum values. If a parameter has been assigned a **_Format_** , input is restricted as per the specified format. If the parameter has been assigned a **_Data Class_** , the class definition may supply drop lists of valid items, check box inputs or queries from which to select a value.

There is no validation beyond type, length and value range unless the parameter has been assigned a Multi-line class with an assigned validator. If the latter is not the case, be sure to create prompts that describe the required input as thoroughly as possible, as invalid parameter values can result in unexpected data or empty reports. The default parameter interface presents the parameters in the order that they appear in the parameter definition.

To change the order of the parameters, re-order the entries in the parameter definition by selecting an entry and clicking the _Move Up_ and _Move Down_ buttons. To remove a selected entry, click the _Delete Row_ button.

It is also possible to create your own interface to input parameter values, which can then be passed to the report generator at run time. Parameters can be set programmatically using the Report Writer object (***rpt/pvxreport**) or passed as panel or program arguments by setting the _Parameter Interface_ report option. See **[Custom Interfaces](../Report%20Options/Overview.htm#custom)**.
