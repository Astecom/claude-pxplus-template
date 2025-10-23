# Table Definitions  
  
**PxPlus Data Dictionary**|   
---|---  
  
PxPlus data dictionary file definitions created in NOMADS are compatible with the PxPlus SQL ODBC Driver. **[Data Dictionary Maintenance](../../Data%20Dictionary/Data%20Dictionary%20Maintenance/Overview.md)** is a menu-driven utility in NOMADS that allows you to define files by entering pertinent information for each element (variable name, type, length, delimiter, etc.). From this information, PxPlus builds and maintains the data dictionary for your given database and creates corresponding entries in: 

|  **_providex.ddf_** |  Table definitions  
---|---|---  
|  **_providex.dde_** |  Column definitions  
  
In addition, the data dictionary for each of your data source definitions is embedded in the corresponding physical database file. See **[PxPlus Data Dictionary](../../Data%20Dictionary/Introduction.md)** _._

The PxPlus SQL ODBC Driver reads the **_providex.ddf_** file to obtain a listing of tables/files from your data dictionary. As each data source defined in the providex.ddf file is accessed, the PxPlus SQL ODBC Driver reads its embedded data dictionary to determine the fields and the format of the data.

Any table defined in the **_providex.ddf_** file whose logical name begins with an ***** (_asterisk_) will not be made available to the user by the PxPlus SQL ODBC Driver.

The ability to define non-normalized data files (i.e. files with multi-format records) is allowed in Data Dictionary Maintenance; however, the PxPlus SQL ODBC Driver will only recognize and use the first record format. To define non-normalized files, use an [**INI Definition**](ini_definition.md).

##  Fields Used by the PxPlus SQL ODBC Driver

The PxPlus SQL ODBC Driver uses the following fields from the **Data Dictionary Maintenance** _ > _ **Element Description** dialog in NOMADS:

**Field** |  **Description**  
---|---  
_Name_ |  Column name as displayed. Must be unique within the table. Maximum length is 30 characters.  
_Class_ |  Optional field used to control the output type of the data. Maximum length is 30 characters. See [**Classes**](classes.md).  
_External Only_ |  Enable this flag to identify that the field exists as part of external key only.  
_Type and Format Mask_ |  Type and format mask elements combined. This describes both the output type (_String_ or _Number_) and how the data will be formatted in the record. See **Type-Format Mask Combinations** for the complete list of element combinations.  
_Length_ |  Precision, or maximum length, of the data field. The scale, or number of digits to the right of the decimal place, is optional. **_Example:_** |  6 |  Describes integer of 6 digits total.  
---|---  
6.2 |  Describes numeric of 6 digits total, 2 are right of decimal point.  
  
Maximum length is 6 digits total. Maximum precision is 999999. Maximum scale is 99.  
  
_Occurs_ |  Dimensions of an array. If the value is a single number, such as 3, then it is considered to be a single element of an array rather than an entire array. If this field contains two values (colon separated), then the PxPlus SQL ODBC Driver will generate multiple column names (_column name_ \+ _underscore_ \+ _numeric index_) for the elements in the array. **_Example:_** If the field MyArray occurs 3 times (has 3 values), the PxPlus SQL ODBC Driver will generate column names, MyArray_1, MyArray_2, MyArray_3, to represent the elements in the array.  
  
##  Type-Format Mask Combinations

This table lists all of the **_Type_** and **_Format Mask_** element combinations used by the PxPlus SQL ODBC Driver. The equivalent of the element combination for the INI definition displays in the column on the right.

**Type -  
Format Mask** |  **Description** |  **INI Equivalent**  
---|---|---  
String -  
Delimited |  **_(Default)_** String of variable length up to the size defined by Length. Field delimiter terminates field. |  string, variable  
String -  
Fixed |  Trailing spaces are stripped during read. If the field is the last segment of an external key, then it will _not_ be padded with spaces during insert/update. Non-external key fields are padded with spaces during insert/update. Field has no field delimiter. |  string, fixed  
String -  
Padded |  Always padded with spaces during insert/update. Fields are not stripped of trailing spaces during read. Field has no field delimiter. |  string, nostrip  
String -  
Substring |  Always padded with spaces during insert/update. Fields are not stripped of trailing spaces during read. Field has no field delimiter. |  string, substring  
String -  
Last Substring |  Always padded with spaces during insert/update. Fields are not stripped of trailing spaces during read. Field delimiter terminates field. |  string, padded  
Number -  
Delimited  |  Number of variable length up to the size defined by Length. Field delimiter terminates field. |  numeric, variable  
Number -  
Fixed |  Sub-stringed field. Field has an implied decimal point if scale is provided. Field has no field delimiter. |  numeric, fixed  
Number -  
Padded |  Sub-stringed field. Field has an implied decimal point if scale is provided. Field has no field delimiter. |  numeric, nostrip  
Number -  
Substring  |  Sub-stringed field. Field has no field delimiter. |  numeric, substring  
Number -  
Last Substring |  Sub-stringed field. Field delimiter terminates field. |  numeric, padded  
Number -  
Binary Numeric |  Sub-stringed field. Field has no field delimiter. |  numeric, binary  
Number -  
Decimal |  Sub-stringed field, which is number with an embedded decimal. Field has no field delimiter. |  numeric, decimal  
Number -  
Decimal Delimited |  Sub-stringed field, which is number with an embedded decimal. Field delimiter terminates field. |  numeric, delimited  
Number -  
Sign Fixed Numeric |  Sub-stringed field. Field has no field delimiter. |  numeric, signed  
Number -  
Unsigned Integer |  Sub-stringed field. Field has no field delimiter. |  uni
