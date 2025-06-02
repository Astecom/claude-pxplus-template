# Data Dictionary Maintenance   
  
**SQL Key Definition** |  **__**  
---|---  
  
The **SQL Key Definition Update** utility is used to set an update option for the SQL Key Definition file _providex.kdf_. The update option determines how or if the _providex.kdf_ file will be automatically updated when the PxPlus Data Dictionary key definition is changed. To edit the PxPlus Data Dictionary key definition, see **[Defining Keys](Defining%20Keys.md)**.

To invoke this utility, select _SQL Key Definition Update_ from the _Options_ menu in **Data Dictionary Maintenance** :

> This window consists of the following:

|  _If Record Exists_ |  The _providex.kdf_ file will only be updated with the PxPlus Data Dictionary key definition if a record already exists in the _providex.kdf_ file. **_(Default)_**  
---|---|---  
|  _Always_ |  Always update the _providex.kdf_ file.  
|  _Manually_ |  Never updates the _providex.kdf_ with the PxPlus Data Dictionary key definition. To manually update the _providex.kdf_ file, see **SQL Key Definition**.  
  
The update option will be saved in the _nomads.ini_ file or a project settings file under the section [Data Dictionary Options]:

SQL Keys Update = _update option value_

**_Where:_**

_update_ _option value_ can be:

1 |  If record exists  
---|---  
2 |  Always  
3 |  Manually  
  
##  SQL Key Definition

The **SQL Key Definition** window is used to create or remove an SQL key definition for the selected table.

To invoke, select the _SQL Keydef_ tool bar button in **Data Dictionary Maintenance** :

> The external database key definition for the selected table will be automatically displayed. The _Delete_ button will be disabled if the record does not exist in the _providex.kdf_ file.

## Key Definition Mismatch

If **SQL Key Definition Update** is set to _Manually_ and the **SQL Key Definition** record does not match the PxPlus key definition, selecting the _SQL Keydef_ button brings up the **SQL Key Definition** window with the following message:

> _Mismatch between the PxPlus DD key definition and the SQL key definition. Press the 'Re-Sync' button to load from the PxPlus definition._
