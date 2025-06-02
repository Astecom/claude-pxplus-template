# Multi-Line Control

**Extended Class Browse**|   
---|---  
  
**Extended Class Browse** is used in the NOMADS Panel Designer when creating _display-only_ ** _Multi-Line_** controls for **[Extended Class Validation](../../../Data%20Dictionary/Data%20Classes/Extended%20Validation.md)** data elements.

#### **Note:**  
To use Extended Class Browse, a Multi-Line control with an **Extended Validation** data class **_must_** exist on the **_current_** panel; otherwise, a message will display and **Extended Class Browse** will not be available.  
  
At any time, a panel can have multiple Multi-Line controls with **Extended Validation** data classes.

To access **Extended Class Browse** , select the Browse Extended Class Variables button next to the _Name_ property in **[Multi-Line Properties](Multi-Line%20Properties.md)**.

> _(Extended Class Browse was added in PxPlus 2019.)_

The **Extended Class Browse** window consists of the following:

_Control_ |  Click the drop-down arrow for a list of Multi-Line controls (on the **_current_** panel) that have an **[Extended Validation](../../../Data%20Dictionary/Data%20Classes/Multiline.htm#extvalidation)** data class with a _Descriptive Field_ selected.  
---|---  
_Class_ |  Displays the name of the **Extended Validation** data class for the selected Multi-Line control.  
_Table_ |  Displays the name and description of the table used when defining **Extended Validation** for the data class.  
**Variables Available** |  A list box that displays **_all_** data elements in the table **_only_** when the _Descriptive Field_ is specified ** _and_** the _Populate All Fields_ check box is selected for the **Extended Validation** data class. |    
**_Descriptive Field is specified  
Populate All Fields is "On"_** |    
**_Displays All Data Elements_**  
---|---  
  
If only the _Descriptive Field_ is specified ** _and_** the _Populate All Fields_ check box is **_Off_** , only the _Descriptive Field_ data element will be displayed.

  
**_Descriptive Field is specified  
Populate All Fields is "Off"_** |    
**_Displays Data Element for Descriptive Field Only_**  
---|---  
_Select_ |  **_(Available when a Data Element in the list box is selected)_** When selected, the _Variable_ name of the data element (_Variable_ column of the **Variables Available** list box) is used for the _Name_ of the Multi-Line control. The following Multi-Line attributes (on **[Attributes](Multi-Line%20Properties.htm#attributes)** tab) are set to **_On_** : _Locked_ _, Borderless_ and _Transparent_. The _Tab Stop_ attribute is set to **_Off_**. The _Numeric_ attribute is set according to the data dictionary, and if _Numeric_ is **_On_** , the _Input Format_ (on **[Display](Multi-Line%20Properties.htm#display)** tab) is set according to the data dictionary.  
_Cancel_ |  Closes **Extended Class Browse** with no further action taken.
