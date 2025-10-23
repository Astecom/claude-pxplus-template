# System Parameters

**'DK'** |  **_Detect and Prevent Separator Character_**  
---|---  
  
##  Description

When the **'DK'** parameter is enabled, the system will scan all output issued by a **WRITE** directive to assure that the field contents does **_not_** contain the field separator character for the file being written to. Enabling this will avoid bad data from shifting the contents of the data fields on the records.

If the **WRITE** does detect a field containing the separator character, an Error #5 - Data error on device or file will be generated.

##  Default

**'DK'** ** _Off_**

## See Also

**[WRITE Add/Update Data in File](../directives/write.md)**
