# Directives 

**DEF CVS/DTE/LCS/UCS** |  **_Define System Tables_**  
---|---  
  
##  Formats

1. |  _Define Accent Conversion_ _:_ |  **DEF CVS**(_new_table_ _$)_  
---|---|---  
2. |  _Define Date Table_ _:_ |  **DEF DTE**(_new_table_ _$)_  
3. |  _Define Lowercase Table:_ |  **DEF LCS**(_new_table_ _$_)  
4. |  _Define Uppercase Table:_ |  **DEF UCS**(_new_table_ _$_)  
5. |  _Define Separators Table:_ |  **DEF SEP**(_new_table_ _$_)  
6. |  _Define Printable Character Table:_ |  **DEF CHR**(_new_table_ _$_)  
  
**_Where:_**

_new_table_ _$_ |  String expression. Contains the new definition (contents) of the table.  
---|---  
  
##  Description

Use these **DEF** directives to define new system tables for _Accent Conversion_ , _Date_ , _Lowercase_ and _Uppercase_.

##  Format 1

**_Define Accent Translation Table_**  
  
Use the **DEF CVS** directive to set the values for the accent conversion table. The value of each byte to be translated is used as an offset into the table. The character at the particular offset is used in place of the original character.

See the "T" option under **[Key Definition Attributes](keyed.htm#Mark3)**, as well as the [**CVS( )**](../functions/cvs.md) function.

##  Format 2

**_Define Date Table_**

The **DEF DTE** directive uses a string made up of 46 comma**-** delimited fields. These fields are used by the **DTE** function and should have the following values: 

**Number of Fields** |  **Field Contents**  
---|---  
12 |  Long form month names (%Ml)  
7 |  Long form day names (%Dl)  
2 |  Long form lowercase am/pm (%pl)  
2 |  Long form uppercase AM/PM (%Pl)  
12 |  Short form month names (%Ms)  
7 |  Short form day names (%Ds)  
2 |  Short form lowercase am/pm (%ps)  
2 |  Short form uppercase AM/PM (%Ps)  
  
##  Formats 3 and 4

**_Define Lowercase and Uppercase Tables_**

The **DEF LCS** and **DEF UCS** directives both take a 256-character string and replace the standard case conversion table with the string's value. Whenever PxPlus converts the case of a character, it uses the character's binary value as an offset into the tables. 

#### **Warning!**  
**_Be careful_** when changing the **UCS** conversion table because the PxPlus compiler uses this table to convert keywords to uppercase before scanning its syntax tables. If you define an incorrect table, you may be unable to enter any subsequent commands in PxPlus. See [**Reserved Words**](../appendix/reserved_words.md).

##  Format 5

**_Define Separator Table_** __

Use the DEF SEP(<string>) directive to define a list of potential field separators.

**_Example:_**

> DEF SEP($8A0A$) tells the system to accept either an $8A$ or $0A$ as the field separator.

When issuing the **DEF SEP** directive, the first character will become the system DEFAULT field separator.

Only **_one_** separator can be used at a time when parsing the data; that is, when the data is processed in the **READ DATA FROM** directive, it is first scanned to determine which, if any, of the field separator characters exist in the data. This scan is done initially with the first character in the separator list and, if not found in the data, the second character is checked and so on.

The currently defined field separators can be retrieved by accessing **SEP(*)**.

##  Format 6

**_Define Printable Character Table_** __

This option allows the user to define which characters are "printable" for use with the **CVS( )** function value 16. 

To define which characters are "printable", the programmer can issue a DEF CHR(<string>) directive passing a string of 256 bytes. Each byte must be a $00$ or $01$ where $01$ indicates a printable character and $00$ indicates non-printable.

The current table of printable characters can be found by accessing **CHR(*)**.

_(The ability to define the "Printable" characters was added in PxPlus v7.00.)_

## See Also

[**CHR( ) ASCII Character of Value**](../functions/chr.md)  
[**CVS( ) Convert String**](../functions/cvs.md)  
[**DTE( ) Convert Date**](../functions/dte.md)  
[**LCS( ) Return Lowercase String**](../functions/lcs.md)  
[**SEP( ) Return Field Separator**](../functions/sep.md)  
[**UCS( ) Return Uppercase String**](../functions/ucs.md)
