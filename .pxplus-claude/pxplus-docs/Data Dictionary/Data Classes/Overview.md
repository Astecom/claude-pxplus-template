# Data Dictionary

**Data Classes** |  **__**  
---|---  
  
Data classes are used to implement standardized definitions for commonly used data elements such as dates, monetary amounts, etc. This means that a data class can be defined according to a standard and then used as a basis for any new data element. The use of data classes simplifies dictionary definitions for similar _element_ types.

Data classes are defined using **[Data Class Definitions](Overview.htm#Mark1)** maintenance and stored in a separate file, _providex.dcl_. When a data class is included for a data element definition (in the **[Element Description](../Data%20Dictionary%20Maintenance/Element%20Description.md)** window), information from the data class is loaded into the element definition where it can be adjusted for a particular field if needed. The information that comes from the data class includes the short description, length, default value, validation, print format, user defined tag field, help reference and query information. Most of these fields are used by NOMADS and its sub-systems.

Data classes can be created for many control types (i.e. **[Multi-Lines](../../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Multi-Line%20Control/Multi-Line%20Properties.md)**, **[Drop Boxes](../../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Drop%20Box%20Control/Drop%20Box%20Properties.md)**, **[List Boxes](../../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/List%20Box%20Controls/List%20Box%20Type.md)**, **[Radio Buttons](../../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Radio%20Button%20Control/Overview.md)** and **[Check Boxes](../../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Check%20Box%20and%20Tri-State%20Control/Overview.md)**) for use within **[NOMADS](../../NOMADS%20Graphical%20Application/Introduction.md)** and its sub-systems, as well as in **[iNomads](../../iNOMADS/iNOMADS%20Introduction.md)**. The NOMADS **[Panel Designer](../../NOMADS%20Graphical%20Application/Panel%20Designer/Introduction.md)** and **[File Maintenance Generator](../../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Fmgen/Fmgen%20Introduction.md)** use this information to generate the desired control type when creating panels. The use of data classes simplifies the creation of controls for similar _control_ types.

When creating panel controls in the NOMADS **[Panel Designer](../../NOMADS%20Graphical%20Application/Panel%20Designer/Introduction.md)**, data classes can be implemented by using any of the following methods:

  * Enter a data _Class_ in the **Properties** window after a control is drawn. See **[Multi-Lines](../../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Multi-Line%20Control/Multi-Line%20Properties.htm#properties)**, **[Drop Boxes](../../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Drop%20Box%20Control/Drop%20Box%20Properties.htm#properties)**, **[List Boxes](../../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/List%20Box%20Controls/List%20Box%20Type.htm#properties)** and **[Check Boxes](../../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Check%20Box%20and%20Tri-State%20Control/Overview.htm#properties)**.
  * Create a control from a data class. See **[Data Class Controls](../../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Introduction.htm#Mark4)**.
  * Create a control from a data dictionary element with an assigned data class. See **[Data Element Controls](../../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Introduction.htm#Mark5)**.
  * Assign a data class in **[Grid Presets Definition](../../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Grid%20Control/Presets%20Definition.htm#dataclasses)** by selecting the _Class_ property.



#### **Note:**  
To apply a data class simultaneously to controls in multiple panels in a single library or in multiple libraries within a specified directory, use the **[Library Bulk Edit](../../NOMADS%20Graphical%20Application/NOMADS%20Development/Maintaining%20Library%20Objects/Library%20Bulk%20Edit.md)** utility.

See **[Frequently Asked Questions](Dataclasses_faq.md)** for answers to some commonly asked questions about Data Classes.

**_Dynamic Control Properties_**

PxPlus 2018 introduces the capability to create **_dynamic control properties_** for Multi-Lines, Drop Boxes, List Boxes and Check Boxes. When combined with **_data classes_** , dynamic control properties are ideally suited for data elements with similar properties in an application (i.e. dates, numeric codes, descriptions or lists of values). **_Dynamic_** data classes are created by selecting the _Dynamic_ check box in **[Data Class Definitions](Overview.htm#Mark1)** maintenance.

For dynamic **[Multi-Line](Multiline.htm#validation)** data classes, **[Extended Class Validation](Extended%20Validation.md)** can be defined (on **Validation** tab) to provide additional table validation and allow access to data elements for creating **_display-only_** Multi-Line controls when designing NOMADS panels.

For dynamic **[Drop Box](Dropbox.htm#display)** and **[List Box](Listbox.htm#display)** data classes, the _Load From File_ option (on **Display** tab) allows a data table/file to be defined as the source when populating a drop box or list box at run time. See **[Populate from Data Source](Populate%20from%20Data%20Source.md)**.

See **[Dynamic Control Properties](Dynamic.md)** for information and examples.

#### **Note:**  
Dynamic control properties are supported in NOMADS **_and_** iNomads environments.

##  Data Class Definitions

**Data Class Definitions** maintenance is used to create and maintain data classes, including **_Dynamic_** data classes, for specific control types. It is invoked by using one of the following methods:

**Location** |  **Method**  
---|---  
From the **[PxPlus IDE Main Launcher](../../PxPlus%20IDE/IDE%20Main%20Launcher.md)** |  Expand the _Data Management_ category and select _Data Class Definitions._  
From the **[NOMADS Session Manager](../../NOMADS%20Graphical%20Application/NOMADS%20Development/Getting%20Started.htm#sessionmgr)** |  From the menu bar, select _Dictionary_ > _Classes._  
From **[Data Dictionary Maintenance](../Data%20Dictionary%20Maintenance/Overview.md)** |  From the _Utilities_ menu, select _Data Class Definitions_. _(The Data Class Definitions option on the Utilities menu was added in PxPlus 2021 Update 1.)_  
From the PxPlus Command window |  From the _Utilities_ menu, select _Class Maintenance._  
  
**Data Class Definitions** maintenance is displayed below with a sample entry:

> Depending on the _Control Type_ selected, the properties displayed on each folder tab may vary. The following links provide information on the properties associated with each _Control Type_ :

> **[Multi-Line Data Class](Multiline.md)**

> **[Drop Box Data Class](Dropbox.md)**

> **[List Box Data Class](Listbox.md)**

> **[Radio Buttons Data Class](Radiobuttons.md)**

> **[Check Box Data Class](Checkbox.md)**

## Data Dictionary Elements

If a data class is entered when defining a data element in **[Data Dictionary Maintenance](../Data%20Dictionary%20Maintenance/Overview.md)**, the following information from the data class is used in the data dictionary:

**Control Type** |  **** |  **Name of Folder Tab**  
---|---|---  
|  |  **Display** |  **Attributes** |  **User Aids** |  **Validation** |  **Query**  
**Multi-Line** |  Description  
Internal Data Type |  Initial Value  
Input Format  
Length |  User Tag Field |  Help Reference |  Rules |  Query Type  
Library/Panel, Program, Non-Query Logic or Spinner  
**Drop Box  
List Box** |  Description  
Internal Data Type  
Internal Size |  N/A |  User Tag Field |  Help Reference |  Default Setting |  Query Type  
Library/Panel, Program or Non-Query Logic  
**Radio Button** |  Description  
Internal Data Type  
Internal Size |  Default Value |  User Tag Field |  Help Reference |  N/A |  N/A  
**Check Box** |  Description (see **Note**)  
Internal Data Type  
Internal Size |  Bitmaps (see **Note**) |  User Tag Field |  Help Reference |  Default Initial Value |  N/A  
  
#### **Note:**  
When a Check Box data class is entered for a data element, the element's **Short Description** is a combination of the **Bitmaps** description(s), if applicable, and the Check Box data class _Description_.

## See Also

**[Frequently Asked Questions](Dataclasses_faq.md)**
