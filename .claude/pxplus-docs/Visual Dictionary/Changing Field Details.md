# Visual Dictionary™ Utility

**Changing Field Details**|   
---|---  
  
##  Changing a Field Name

To enter a new field name, navigate to the _Name_ cell for the desired field by using the arrow keys or mouse and enter the new name. Press Enter when done or exit the field.

To edit an existing name, double click on the cell or click once on the cell to select it and then press the Insert key.

Field names must start with an alphabetic character (A - Z) and contain only alphabetic characters, numbers, or an underscore character. The maximum field length for a name is 127. If you enter spaces in a field name, the system will automatically convert them to underscores. If you enter an invalid name, the system will restore the name to the previous value.

When you save a file, the system will check for duplicate field names.

## Changing a Field Length

To enter a new field length (size), navigate to the _Length_ cell for the desired field by using the arrow keys or mouse and enter the new value. Press Enter when done or exit the field.

To edit an existing length (size), double click on the cell or click once on the cell to select it and then press the Insert key.

For **_string fields_** , the length represents the number of characters in the string. For **_numeric fields_** , the length is the total number of characters needed to express the value, a decimal point, and the number of digits to the left of the decimal point (the scale). The digits to the left of the decimal point must always be at least one less than the total number of characters.

If the next field (the next column) is a sub-field, the system will validate that the length specified matches the offset of the next field.

## Changing a Field Description

To enter the descriptive text for a field, navigate to the _Description_ cell for the desired field by using the arrow keys or mouse and enter the new description. Press Enter when done or exit the field.

To enter an existing description, double click on the cell or click once on the cell to select it and then press the Insert key.

The Description is generally only used for prompts and titles when the data is displayed; therefore, no validation is done on text descriptions.

## Changing a Field Type

To toggle the field type between _Numeric_ to _String_ or vice versa, click once on the _Type_ cell for the desired field or press the space bar. Only two types of fields can be defined -- _Numeric_ or _String_.

## Changing the Internal Field Format

Each field has a format specification defining how the field contents are to be stored on the data. Normally, fields are stored as plain ASCII text, each separated with a field separator character (usually a HEX 8A).

The following table is a list of the format types supported:

**Format Type** |  **Description**  
---|---  
_Delimited_ |  Standard ASCII text field followed by a separator character (normally $8A$).  
_Fixed_ |  ASCII text field that, when written to the file, will be padded with spaces up to its specified field length. When the field is read, the trailing spaces will be stripped.  
_Padded_ |  ASCII text field that, when written to the file, will be padded with spaces up to its specified field length. When the field is read, the trailing spaces will **_not_** be stripped.  
_Substring_ |  ASCII text field that, when written to the file, will be padded with spaces up to its specified field length. When the field is read, only data up to the length specified or a field separator is accepted. If a field separator is encountered within the length assigned to the field, it will not be processed. Data must **_not_** contain the field separator character.  
_Last Substring_ |  ASCII text field that, when written to the file, will be padded with spaces up to its specified field length followed by a field separator. When the field is read, only data up to the length specified or a field separator is accepted. When read, all data following the length given up to and including the field separator will be ignored. Data must **_not_** contain the field separator character.  
_Binary_ |  Numeric value stored in a 2's compliment binary format with a leading sign bit. If a scale is present, the number is adjusted by the number of decimal places indicated.  
_Unsigned Binary_ |  Unsigned numeric value stored in binary format. If a scale is present, the number is adjusted by the number of decimal places indicated.  
_Decimal_ |  Standard numeric value converted to ASCII and stored in a fixed length field.  
_Trailing Sign_ |  Numeric value converted to ASCII with a trailing sign character.  
  
To change the format of a field type, click on the _Int. Form_ (Internal Format) field for the desired column to display a list of selections.
