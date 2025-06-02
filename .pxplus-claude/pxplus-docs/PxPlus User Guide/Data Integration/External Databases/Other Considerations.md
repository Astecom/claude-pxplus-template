# External Databases

**Other Considerations** |  **__**  
---|---  
  
In a perfect world, the application works flawlessly with the new database. The reality is that some things may not work correctly, and the application will need to be adjusted.

## Views

Views programs may fail when trying to access index information that may not have been included in the conversion.

## Complex Variant Records

Occasionally, the rules required to identify the correct variant record are so complex, the syntax does not support the record definitions. These types of files require the use of the **RECDATA=** option.

**RECDATA=** specifies the column name that represents the data. The data type of this column is typically Binary, as no processing of any sort is performed upon it. No attempt is made to parse the data or apply indices. This option requires the use of **KEYDATA=**. Alternate keys are not supported.

## File Information

Programs that depend on **FIB( )** or**FIN( )** will typically fail as not all the information about the file exists.
