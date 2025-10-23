# Customizer 

**File Definitions** |  **__**  
---|---  
  
## Layout of a Customizer Definition File

Customizer definition files correspond to their associated panel library; that is, if there are custom definitions for panels in a library called _mypanels.en_ , then the custom definitions will be stored in a file called _mypanels.cus.en_. Potentially, there could be one customer definition file for each panel library.

**_library_name.cus.language_suffix_**

**External Key:** |  27 |  _panel name_ (12) + _owner_ (12) + _sequence_ (3)  
---|---|---  
  
**_Where:_**

|  _panel name_ |  12 |  Uppercase/Padded with spaces.  
---|---|---|---  
|  _owner_ |  12 |  mid(WHO,1,12) for Personal, blank (dim(12," ") for Public/Padded with spaces.  
|  _sequence_ |  3 |  Sequence number/Leading zeros.  
  
Customer definition records have two layouts: one for items from **_Application and User Files_** , and one for **_Formulas_**.

**_Application and User File Fields:_**

|  _Source_ |  Information source (**A** = Application File, **U** = User File, **F** = Formula).  
---|---|---  
|  _File_id_ |  6-digit file identifier (from _providex.ddf_ or _providex.udf_ files).  
|  _Phys_File_ |  Physical file name (simple path).  
|  _Item_Name_ |  Name of the file element to be displayed.  
|  _KeyDef_ |  Key definition for accessing records (PxPlus expression).  
|  _Flags_ |  **U** = Allow update for User file.  
|  _Security_ |  _Not Applicable_  
|  _Display_Option_ |  Special display option P _color_ ("P" followed by a color, e.g. PLight Red). Display value using a _Percent Bar_ in the specified color.  
  
_(Display_Optionwas added in PxPlus 2017.)_

**_Formula Fields:_**

|  _Source_ |  Information source (**A** = Application File, **U** = User File, **F** = Formula).  
---|---|---  
|  _Desc_ |  Short description used as a label in the _Custom Information_ grid.  
|  _Type_ |  Data type (**S** = String/Text, **N** = Numeric).  
|  _Formula_ |  Formula definition (PxPlus expression).  
|  _Len_ |  Maximum length of data to be displayed.  
|  _Format_ |  Optional display format (PxPlus format string).  
|  _Security_ |  Security classifications assigned to the formula.  
|  _Display_Option_ |  Special display option P _color_ ("P" followed by a color, e.g. PLight Red). Display value using a _Percent Bar_ in the specified color.  
  
_(Display_Optionwas added in PxPlus 2017.)_

##  Layout of a User File

User files are keyed files with an external key size of 127 characters and a variable record size with a maximum of 4000 bytes. By default, these files are created in the _Custom_ directory, which is located in the same directory as the PxPlus executable or where the _Lib_ directory is kept (on a Vista system). This may be changed by loading the **[%NOMAD_Custom_Dir$](../Appendix/NOMADS%20Variables/Overview.htm#customdir)** global variable with the path to an alternate directory.

The Customizer generates a default file name of the format **_U _nnnnnn_.dat** (where _nnnnnn_ is a sequence number such as 000001). This can be overridden when the file is defined.

## User Data Dictionary Files

The **_User_** data dictionary files (_providex.udf_ and _providex.ude_) are created in the same directory as the **_Application_** data dictionary files (_providex.ddf_ and _providex.dde_).

|  **providex.udf** |  Contains **_file_** information on the Customizer User files. (The field layout is the same as for the _providex.ddf_ data dictionary file.)  
---|---|---  
|  **External Key:** |  6 |  6-digit File ID   
__ |  _Alternate Key 1:_ |  [1:1:30:"CU"]+[5:1:12] |  Logical Name + Owner   
__ |  _Alternate Key 2:_ |  [5:1:12]+[1:1:30:"CU"] |  Owner + Logical Name   
__ |  _Alternate Key 3:_ |  [2:1:30:"LU"] |  Physical File Name  
  
  
|  **providex.ude** |  Contains **_element_** information for the Customizer User files. (The field layout is the same as for the _providex.dde_ data dictionary file.) |   
|  **External Key:** |  12 |  6-digit File ID + 6-digit Sequence Number |   
__ |  _Alternate Key 1:_ |  [Key:1:6]+[2:1:30] |  6-digit File ID + Element Name | 
