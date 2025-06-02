# Visual Dictionary™ Utility

**Saving the Dictionary**|   
---|---  
  
Once you have completed your changes, you can update the file's internal dictionary by selecting _File > Save definition_ from the menu.

During the Save process, the system will crosscheck your definition for errors such as duplicate field names and/or improper External Key definitions. If any error is detected, the Save process will be aborted and you will need to correct the definition.

##  Updating the System Data Dictionary

After the file's internal dictionary has been updated, select _File > Update System Dictionary_ from the menu to save the file definition to the system's data dictionary files (_providex.dde_ and _providex.ddf_). This will make the file accessible via the PxPlus SQL ODBC Driver.

#### **Note:**  
When the file is initially saved to the system data dictionary, the full absolute pathname will be recorded in the system dictionary. This likely will need to be changed manually to a relative pathname or some form of expression.
