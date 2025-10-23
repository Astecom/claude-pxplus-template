# Data Dictionary Maintenance   
  
**Updating the Data Dictionary** |  **__**  
---|---  
  
Be aware that all changes made to the definition _(table)_ currently loaded in **[Data Dictionary Maintenance](Overview.md)** are written immediately to the _providex.ddf_ and _providex.dde_ files as they are entered.

## Embedding a Definition

To embed the current definition into the physical database file, click the _Update File_ tool bar button. Depending on the contents of the current definition, PxPlus will determine how to update the physical file with the current definition:

> If the file does not exist, PxPlus creates it and then embeds the definition.

> If the file contains data and its existing definition (key structure, separator and embedded data dictionary) corresponds with the newly created definition, PxPlus will embed the new definition (without touching the data).

> If the file attributes/data elements have changed in such a way that a data conversion is required, an **Update physical** window with **[Update Options](Updating%20the%20Data%20Dictionary.htm#updateoptions)** will display.

This process can also be achieved programmatically. See **Automating the Embedded (Physical) Definition**.

##  Update Options

To update the physical file after changes are made to the current definition, click the _Update File_ tool bar button. If the changes do not require a data conversion, a message will display to confirm that the dictionary has been updated. If a data conversion is required, the **Update physical** window with update options will display:

> This window consists of the following:

_(File Changes)_ |  **_(Display Only)_** Area that describes the file changes.  
---|---  
_Update Options_ |  |  _Convert existing data_ |  **_(Default)_** Updates the file using the changes described in the upper File Changes area. A message will ask if you want to make a **_backup of your original data file_** before PxPlus overwrites it. Responding _Yes_ brings up a **Backup File** window for entering a backup file name (*.BAK).  
---|---  
_Clear existing data_ |  Purges data in the existing file.  
_Rewrite data dictionary only_ |  Updates the embedded definition using the changes described in the upper File Changes area but _without touching the data_. This does not change the actual keys or records inside the file.  
  
#### **Important Note:**  
To avoid loss of data, it is best to use the _Rewrite data dictionary_ option when embedding a definition for the first time.  
  
Only _Convert_ _existing data_ once the physical file has been tested to ensure the new definition matches the contents _exactly_.  
  
Ok |  Performs the selected update option.  
Cancel |  Closes the **Update physical** window without updating.  
  
To update multiple native (PxPlus) files, see **[Update Physical Files](Update%20Physical%20Files.md)** utility.

##  Creating a Definition

Create a new definition in the data dictionary (_providex.dde_ and _providex.ddf_ files) by entering a name in the **Name** field of the **[Main Panel](Overview.htm#mainpanel)**. If the entered name does not exist, you will be asked to create a new definition. Enter the path of a data source in the **Physical File** field.

If the data source contains an embedded definition, then **[Data Dictionary Maintenance](Overview.md)** can automatically extract the contents of that definition and populate all the corresponding fields with existing information.

This process can also be achieved programmatically. See **Automating the Data Dictionary Update**.

##  Automating the Data Dictionary Update

**CALL** "*dict/dd_updt;Update_DD", _pathname$, newpath$, errmsg$_

**_Where:_**

_pathname$_ |  Pathname of the database file containing the source definition.  
---|---  
_newpath_ _$_ |  Pathname to be stored in the _providex.ddf_ (if other than _pathname$_). If this value is null, then _pathname$_ is assumed.  
_errmsg_ _$_ |  Error message to be issued if the update procedure aborts.  
  
The Update_DD routine in PxPlus can be called from an application in order to update the data dictionary files (_providex.ddf_ and _providex.dde_) using information extracted from an existing embedded definition.

##  Automating the Embedded (Physical) Definition

**CALL** "*dict/dd_updt;Update_Physical",**ERR** =_stmtref_ ,_table$,newpath$,flags$,errmsg$,pswd$,level_

**_Where:_**

_stmtref_ |  Program line number or statement label to which to transfer control.  
---|---  
_table$_ |  Logical name of the file to be updated.  
_newpath_ _$_ |  Pathname of the file to be updated if other than the one specified in the path field in the _providex.ddf_ ; otherwise, this value is null.  
_flags$_ |  Data dictionary flag values: |  **_null_** |  Updates dictionary - recreates and converts existing file.  
---|---  
**D** |  Updates the embedded data dictionary only.  
**A** |  Aborts if duplicate keys are found.  
**S** |  Suppresses update of time stamp in _providex.ddf_.  
**B** |  Aborts if block size is invalid.  
**X** |  Suppresses recreating an existing empty file when "**D** " (embed dictionary only) is set.  
**V** |  Verbose mode display a progress bar when copying a file.  
  
Any combination of the above can be used (e.g. "DX","SAD","SADB", etc.).

_(The "V"erbose flag was added in PxPlus 2020.)_  
  
_errmsg_ _$_ |  Error message to be issued if the update procedure aborts.  
_pswd_ _$_ |  Password to be applied to the file.  
_level_ |  Access level: |  **0** |  Password always required.  
---|---  
**1** |  Password required for write access.  
**2** |  Password always required/data is encrypted.  
**3** |  Password required for write access/data is encrypted.  
  
The Update_Physical routine can be used to update the embedded definitions using information from the data dictionary files (_providex.ddf_ and _providex.dde_).

> If the file does not exist, PxPlus creates it and embeds the definition.

> If the file exists but has no data, the file is recreated with the new definition, unless the _flag$_ variable includes "DX".

> If the file contains data, the new definition is embedded based on flag values, the file is recreated and the records converted to the new format. See **_Example_** below.

#### **Important Note:**  
Unlike the _Update File_ tool bar button, there will be **_no warnings_** or options for handling discrepancies between old and new definitions.

The Update_Physical routine can be used in the batch conversion of database files from external/legacy formats to the PxPlus data dictionary. See **[Converting Other Formats](../Converting%20Other%20Formats/Overview.md)**.

**_Example:_**

The following sample program creates all the files defined in a data dictionary and embeds the individual definitions (tables) into the corresponding files:

> ! DD_CRPHY - ! Create Physical Files from the Data Dictionary  
>  ! This program creates all files in the data dictionary in the current directory  
>  !  
>  print 'CS','blue',"Create Physical Data Files from Dictionary",'RM'  
>  d_flag$="" ! Set flag to create/convert/update  
>  ddf_fn=hfn;  
>  open (ddf_fn,iol=*)"providex.ddf" ! Open DD header file  
>  select * from ddf_fn begin "000001"  
>  ddf_key$=kec(ddf_fn)  
>  if stp(PhysicalPath$)="" \  
>  then print 'SB','magenta',"Warning: "+ddf_key$+"-"+Name$+" has no path. Cannot create.",'RM';  
>  continue ! Check for incomplete record  
>  if mid(tbl(mid(PhysicalPath$,1,1)="=",PhysicalPath$,evs(PhysicalPath$(2))),1,1)="@" \  
>  then continue  
>  ! filter out Views  
>  print "Creating ",ddf_key$," - "+Name$,@(50)," >> ",PhysicalPath$  
>  call "*dict/dd_updt;Update_Physical",Name$,"",d_flag$,errmsg$  
>  if stp(errmsg$,2)<>"" \  
>  then print 'red',errmsg$,'RM'  
>  next record  
>  print "File update complete"  
>  close (ddf_fn)  
>  end
