# Data Dictionary Utilities 

**Import Dictionary** |  **__**  
---|---  
  
The **Copy Data Dictionary Definition** utility is used to copy a file definition from a different PxPlus data dictionary (in another directory) into the current file definition. If a file named in **[Physical File](../Data%20Dictionary%20Maintenance/Overview.htm#tabs)** has an embedded data dictionary, then the definition can be loaded automatically; however, definitions from other data dictionary (_ddf_ _/dde_) file sets must be _imported_ using this utility.

#### **Note:**  
This utility is used for importing PxPlus data dictionaries **_only_**. For converting formats from outside of PxPlus, see **[Converting Other Formats](../Converting%20Other%20Formats/Overview.md)**.

To import a definition, enter a new or existing table _Name_ in the **Data Dictionary Maintenance** **[Main Panel](../Data%20Dictionary%20Maintenance/Overview.htm#mainpanel)** as the table to copy to and then select the data dictionary definition to be copied.

Invoke the **Copy Data Dictionary Definition** utility by selecting _Utilities > Import Dictionary_ from the **Data Dictionary Maintenance** menu bar.

> This utility consists of the following:

_Copy To_ |  Table into which the definition will be copied. (Displays the table _Name_ that was entered in the **Data Dictionary Maintenance** main panel.)  
---|---  
**Copy From** |  Specify the _Dictionary File Directory_ where the data dictionary (_ddf_ _/dde_) file sets reside. Click the Query button to specify a different dictionary file directory.  
**Dictionary** |  List of file definitions residing in the _Copy From_ directory.  
_Copy_ |  Button used to import the selected definition into your target file.  
_Close_ |  Exits the **Copy Data Dictionary Definition** utility.
