# System Maintenance Tools

**Application Parameter Configuration**|   
---|---  
  
The NOMADS **Application Parameter Configuration** utility is used by developers to define custom parameters specific to their applications and set their values. Parameters can consist of _string, numeric_ and _Boolean variables_ , as well as **[System Parameters](../../parameters.md)**. The descriptions and defined values are stored in the parameter file, _providex.prm_ , which must be accessible. Values may also be accessed through a series of CALLs that allow you to retrieve, edit and save the values as a string composed of assignment pairs that can be executed to load the values.

This utility is accessed from the **[NOMADS Session Manager](../NOMADS%20Development/Getting%20Started.htm#sessionmgr)** by selecting _Utilities > Application Parameter Configuration_ from the menu bar. You will be prompted to open the appropriate _providex.prm_ file. If the system detects that the _providex.prm_ file does not exist in the location specified, you will be asked if you want to create it. Responding _Yes_ creates the file automatically and displays the **Application Parameter Configuration** window below.

> This window consists of the following:

_Application_ |  Name used to identify the application.  
---|---  
_Prompt_ |  Description of the parameter. If _Variable_ is left blank, then this description will be used as the caption for the dialogue box in the **[Edit_Settings](Application%20Parameters.htm#Mark1)**CALLed routine.  
_Variable_ |  Name of the variable to be used as a parameter or the system parameter to set.  
_Type_ |  Data type of the parameter. Available selections are _String, Numeric_ or _Boolean_.  
_Min  
Max_ |  For **_Strings_** , this sets the minimum and maximum lengths.  
  
For **_Numerics_** , this sets the minimum and maximum values.  
  
For **_Boolean_** values, these are set to 0 and 1.  
_Value_ |  Sets the current value of the parameter.  
_Default_ |  Default parameter settings.  
  
## *PARAM Accessing Parameter Values

Four entry points into the *PARAM program are provided to allow access to the parameter values: **[Get_Settings](Application%20Parameters.htm#Mark2)**, **[Get_Defaults](Application%20Parameters.htm#Mark3)**, **[Edit_Settings](Application%20Parameters.htm#Mark4)** and **[Save_Settings](Application%20Parameters.htm#Mark5)**. All of them have the same relative syntax:

> **CALL** "*param;_entry_ __point_ ", _appname_ _$, parameterstring$, param_file$_

**_Where:_**

|  _entry_point_ |  See **[Entry Points](Application%20Parameters.htm#Mark1)** below.  
---|---|---  
|  _appname_ _$_ |  Name used to identify the application.  
|  _parameterstring_ _$_ |  Return string consisting of assignment pairs and **[SET_PARAM](../../directives/set_param.md)** directives.  
|  _param_file_ _$_ |  Path to the _providex.prm_ file. ** _(Optional)_**  
  
**_Entry Points_**

These four entry points are explained below.

**Get_Settings** |  Used to return the current settings for the parameters.  
  
The **Get_Settings** entry point requires that you pass the application name as the first argument. The second argument will then be loaded with a string consisting of a series of assignment pairs and/or system parameter settings, as in the following example (using the values in the screen shot above):  
  
**_Example:_** gimme$="Everything",gotcha$="Nothing",amount=0;SET_PARAM 'xi'=1 This string can then be executed to load the currently set values into the variables or to set the system parameters.  
---|---  
**Get_Defaults** |  Used to return the default settings for the parameters.  
  
The **Get_Defaults** entry point requires that you pass the application name as the first argument. The second argument will then be loaded with a string consisting of a series of assignment pairs and/or system parameter settings, as in the following example (using the values in the screen shot above):  
  
**_Example:_** gimme$="Lotsa money",gotcha$="Lotsagrief",amount=99;SET_PARAM 'xi'=1 This string can then be executed to load the default values into the variables or set the default system parameters.  
**Edit_Settings** |  Used to edit the current settings.  
  
The **Edit_Settings** entry point requires that you pass the application name as the first argument. The second argument can be used to pass a parameter string whose values will be parsed for editing or null (" ") to edit the current settings. An interactive dialog box is presented based on the parameter configuration information: The settings may be updated or the default values restored. When the _OK_ button is selected, a parameter string containing the new assignment pairs and system parameter settings is returned in the second argument. The new settings are **_not_** written to the _providex.prm_ file. To do that, you must use the **Save_Settings** CALL (below).  
**Save_Settings** |  Used to write parameter values to the _providex.prm_ file.  
  
The **Save_Settings** entry point requires that you pass the application name as the first argument. The second argument must be a parameter string containing the assignment pairs for the updated settings.  
  
#### **Note:**  
The FN%PARAM_UPDATE$_(parameterstring$)_ function will merge the current values into a parameter string.
