# Object-Oriented Interface  
  
**rptgroupfunc** |  **__**  
---|---  
  
The **rptgroupfunc** object is a data member of the **[pvxreport](../pvxreport/Overview.md)** object interface, delegated to store and manipulate a group function definition. One object is created for each function. The **pvxreportGetGroupFunc( )** method can be used to retrieve the object handle for an **rptgroupfunc** object, which allows access to all the object' methods and properties.

## rptgroupfunc Properties

The following table lists the properties of the **rptgroupfunc** object:

**Property** |  **Description**  
---|---  
**Element$** |  Data element to be used in the function calculation. This must start with an alphanumeric, optionally followed with alphanumeric, **.** (_period_) or **_** (_underscore_) characters.  
  
No trailing $ for string elements. Set to null if the element name is invalid.  
**Format$** |  Format mask for displaying the value.  
**Function$** |  Name of the group function.  
  
Possible values are **AVERAGE, COUNT, MAXIMUM, MINIMUM, SUM**. Set to null if the function name is invalid.  
**Type$** |  Single character code to indicate whether the function element contains string or numeric data:  
  
**S** \- String/text   
**N** \- Numeric/computational  
  
Set to null if code is invalid.  
  
## rptgroupfunc Methods

The following table lists the methods of the **rptgroupfunc** object:

**Method** |  **Description**  
---|---  
**GetGroupFunctionDefinition$( )** |  Returns a formatted string based on **rptgroupfunc** properties. The format of the string is that used to define a **Function=** entry in the report definition file. Format for **COUNT** function: **COUNT[(**_element_**)]:**_format  
  
**Example:**  
_  
COUNT:###,##0, COUNT(Manager):##0  
  
Format for other functions: _FuncName_**([**_convert_**]**_element_**):**_format  
  
**Example:**  
  
_ AVERAGE (Balance):###,###,##0.00  
MAXIMUM(Convert CustID):000000  
  
Returns null if the information in **rptgroupfunc** object is invalid.  
**GetGroupFunctionVariable$(**_LevelID_ _$_**)** |  Returns the name of the group function variable based on the current **Function$** , **Element$** and **Type$** properties and the given _LevelID_ _$._  
  
_LevelID_ _$:_ |  **00** |  Report Summary level  
---|---  
**01 - 16** |  Control break group level  
**DL** |  Detail line level  
  
**_Example:  
  
_** _SUMDLN_Balance, _AVG03N_Amount, _CTR00N, _CTR03N_Manager  
  
**SetGroupFunctionDefinition$(**_Def$_**)** |  Assigns **rptgroupfunc** properties based on a formatted string. The format of the string is that used to define a **Function=** entry in the report definition file. Returns **1**.  
  
_Def$ -_ Formatted string containing the group function information:  
  
Format for **COUNT** function: **COUNT:**_format  
  
**Example:  
**  
_ COUNT:###,##0.  
  
Format for other functions: _FuncName_**([**_convert_**]**_element_**):**_format  
  
**Example:  
**  
_ AVERAGE (Balance):###,###,##0.00   
MAXIMUM(Convert CustID):000000
