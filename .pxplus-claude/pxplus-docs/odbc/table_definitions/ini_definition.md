# Table Definitions

**INI Definition**|   
---|---  
  
Structured text files (INI files) may be used to manually define data that is not normalized (i.e. data sources with more than one record type) or cannot be handled by the PxPlus Data Dictionary. INIs are typically used to define files from legacy systems that were not created using the NOMADS Data Dictionary facilities.

These definition files consist of a Table Declaration section that assigns a logical table name to the physical path of each file. The logical names become section headings for column definitions. The maximum line length in an INI definition is 255 characters. The INI contents are described in the sections below.

#### **Note:**  
The square brackets enclosing section headings are part of the INI syntax. Other square brackets in the format examples below indicate optional elements.

##  Table Declaration

The [*tables*] declaration section is used to assign a logical name to a database's physical filename.

**_Example:_**

> [*tables*]  
>  INVOICELINE=\INVOICE\INVLINE  
>  CLIENT==%c$+"cstfile"

The [*tables*] section heading is not case sensitive; however, square brackets, asterisks, and the word tables are all part of the required syntax. The syntax for assigning a logical table appears as follows: 

> _table_name_ =_path_filename_[ ,_alternate._ INI ] [ ,SORTTABLE ] 

**_Where:_**

_table_name_ |  Logical name assigned to the physical file. **_Example:_** In this example, _invoiceline_ is the logical name for the physical file _invline_ in the _invoice_ directory: *tables*]  
invoiceline=\invoice\invline  
---|---  
_path_filename_ |  Physical location and file name of database in the system. Either absolute or relative path names can be specified. Relative path names are resolved based on the database directory setting in the PxPlus SQL ODBC Driver configuration. If the first character of the path is an **=** (_equals sign_), the PxPlus SQL ODBC Driver treats the path as an expression and replaces all instances of %c$ with _company_ , %u$ with _user ID_ , and %s with _session ID_ that are supplied during the connection. **_Example:_** Client==%c$+"cstfile" In this example, if ABC is entered in the Company field of the PxPlus SQL ODBC Driver, then Client would be evaluated to ABCcstfile.  
_alternate_ |  Optional alternate INI definition file. Early Windows systems had a limit on the amount of information that could be stored in a single INI file. This option allows the definition to be spread over multiple INI files to keep the size of any one file below 64K. It is now more commonly used to specify that the INI definition overrides the embedded dictionary definition.  
SORTTABLE |  Optional entry informing the PxPlus SQL ODBC Driver that the column definitions are not defined in the file in physical order. The physical order is controlled through the use of the FIELD= keyword. The default is that all fields are defined in the physical order that they exist in the file.  
  
##  Column Declaration

The record descriptors define logical columns extracted from the PxPlus data file with each entry consisting of:

  * The column name as it appears to the user.
  * Additional parameters separated by commas.



The minimum information required is a column name and its length. All columns default to string, delimited. The column descriptors can be in any order and are comma delimited. Only the first three characters of the keywords are required. Invalid keywords are ignored.

Column descriptors have the following format:

> [_table_name_]  
> _column_name_ = LENGTH=_length,_[_type_ , _formatting_ , _attributes_]

**_Where:_**

_column_name_ |  Logical name of the column. **_Example:_** [Client]  
CustomerID=STRING,LENGTH=6,FIELD=1,OFFSET=0  
Name=LEN=20 In this example, CustomerID is the first column in the logical table, Client and Name is the second.  
---|---  
_length_ |  Mandatory value. Use a numeric expression or integer for _length._ **_Example:_** LEN=30 If desired, you can set the number of digits to the right of the decimal. **_Example:_** LEN=5.2  
_type_ |  Optional type. The following keywords set the type of the data: |  **BNR** |  Numeric values stored as a signed binary.  
---|---  
**LOGICAL** |  Logical field - resulting output type is SQL_BIT.  
**MAS90*YEAR** |  Special year only format used in Sage MAS 90 and Sage MAS 200.  
**NUMERIC** |  Numeric value - in a PxPlus file, this is an ASCII representation of the number.  
**STRING** |  ASCII string.  _(Default)_  
**UNI** |  Data is an unsigned integer stored as a binary.  
**UNSIGNEDBINARY** |  Numeric value stored as unsigned binary.  
_formatting_ |  Optional format mask. The following keywords describe the layout of data in the file: |  **BINARY** |  Numeric value stored as a signed binary as a sub-string of a longer field.   
---|---  
**DECIMAL** |  Sub-stringed numeric with an embedded decimal. Numerics are right justified.   
**DELIMITED** |  Alternate description for PADDED with the exception of how numerics are handled. If the field is a numeric, then it will be space-padded, right justified.   
**FIXED** |  Fixed length with no separator, trailing spaces stripped on read. Numerics are right justified.   
**I86** |  Swapped. On Intel machines, numbers are natively stored as swapped (e.g. 00 01 is stored as 01 00).  
**NOSTRIP** |  Sub-string - trailing spaces are never stripped. Same as the Data Dictionary formats Padded and Substring.  
**PADDED** |  Fixed length, padded to length and with a field delimiter. Same as the Data Dictionary format: Last Substring.  
**SIGNED** |  Same as NUMERIC,FIXED except the first character of the field will have a negative sign ( - ).  
**SUBSTRING** |  Same as NOSTRIP. Added for consistency with Data Dictionary.  
**VARIABLE** |  Variable length delimited by $8A$.  _(Default)_  
_attributes_ |  Optional attributes that are not handled by the Data Dictionary: |  **CLASS=**_str_ |  Class declaration. See [**Classes**](classes.md).  
---|---  
**FIELD=**_nnn_ |  Logical column number in the record. Zero indicates "from start of record". The INI default is "in sequential order by position in the list".   
**FORMAT=**_value_ |  Mask to be applied to the data when returned to the calling application. Maximum is 39 characters.   
**HIDE** |  Can be used to hide data when data has been duplicated do to an external key. See [**External Keys**](external_keys.md). Can also be used to hide filler data.  
**KEY** |  Defines external key fields.  
**MUSTBE="**_str_**"**  
**MUSTBE <"**_str_**"**  
**MUSTBE >"**_str_**"** |  String comparison for filtering data. If the condition is not met, the record is skipped. Maximum is 80 characters. See [**Record Selection**](record_selection.md).  
**NOSHOW** |  Field in Data Dictionary, data never returned.  
**OFFSET=**_nnn_ |  Defines the offset (zero based) in the field.  
**RECTYPE=**_value_**  
 _or_ *RECTYPE ** |  Flattens data. See [**Record Selection**](record_selection.md).  
**SAMEAS** |  Used to link duplicate columns. This attribute is designed for columns, which comprise an external key, and the data is duplicated in the record. **_Example:_** CustId=len=6  
CustId_dup=len=6, sameas=CustId,hide During insert/update operations, the data is copied from the column referenced to the target column.   
**SEPARATOR=**_nnn_ |  Delimiter for variable length field. Use the decimal value of your delimiter character. **_Example:_** For the LF character ($0A$), you would use either SEPARATOR=10 or SEP=10.
