# Table Definitions

**Classes**|   
---|---  
  
Classes are used to define the format of special string or numeric data types. Use keywords in the CLASS field to define a class in a Data Dictionary definition. Use CLASS= in an INI definition (e.g. _CLASS=DATE_ for data fields containing a date in YYYYMMDD format).

##  Date Formats

The DATE class option can be used to convert to and from the SQL date format (YYYY-MM-DD) to the format of the date field stored in PxPlus files. The maximum length for a date field is 30 characters.

Since there are no rules on date formatting, separate keywords are available to assist the driver converting data to and from the SQL date format.

The syntax for the date class is:

> DATE**[**_keywords_**]**

DATE with no optional keywords defaults to YYYYMMDD.

**-BIN** |  Binary value. **_Example:_** DATE-BIN-YYMMDD = BIN(990101,4)  
---|---  
**-PACK** |  Packed numeric. **_Example:_** DATE-PACK-YYMMDD = PCK(990101)  
**-BCD** |  Binary packed decimal. **_Example:_** DATE-BCD-YYMMDD = ATH(STR(990101))  
**-JUL** |  Julian date. The default base year is 1970. The default year can be overridden by adding a new base year in the format -YYYY. **_Example:_** A base year of 0 zero would be represented as DATE-JUL-0000.  
**-UNKNOWN** |  Date value is processed as a string, without formatting and validation. This is provided for debugging purposes, as the PxPlus SQL ODBC Driver will report an error if a date string fails to convert to an SQL date.  
***MAS90** |  Special packed date format compatible with Sage MAS 90 and Sage MAS 200.  
***SSI** |  Infor Global Solutions FACTS packed date.  
**-AAMMDD  
-KKMMDD** |  AA or KK are special cases of YY. The first time a K or A is encountered and there have been no Y's, then: |  If the first character is greater than or equal to A, the year is 200 + ASC(data$) - ASC('A'); otherwise, the year is 190 + ASC(data$) - ASC('0') or zero. All subsequent occurrences of A are treated as Y.  
---  
If the first character is K, the year is 190 + ASC(data$) - ASC('0'). All subsequent occurrences of K are treated as Y.  
  
**_Example:_**

The INI field definitions for dates in a DATE_data record appear as follows:

> [DATE_data]  
>  Date_1=String,len=8,class=DATE-YYYYMMDD  
>  Date_2=String,len=8,class=DATE-YY-MM-DD  
>  Date_3=String,len=4,class=DATE-BCD-JUL  
>  Date_4=String,len=4,class=DATE-PACK-YYYYMMDD

## Right Justified Data

The RIGHT class can be used to strip off leading padding on output and add leading padding on input. This is useful if your data needs to be right justified but you need to use it with non-right justified data in your SQL queries.

The syntax for the right class is:

> RIGHT**[**_nnn_**]**

**_Where:_**

> _nnn_ is the decimal value of the fill character. If a fill value is not supplied, then the fill defaults to a space (decimal 32).

**_Example:_**

> A class of RIGHT (or RIGHT32) indicates that the field is right justified within the physical file with leading spaces. A class of RIGHT48 indicates the field is right justified within the file with leading ASCII zeros ("0").

#### **Note:**  
The **[ ]**  _square brackets_ in the above DATE and RIGHT definitions are used to indicate "optional" keywords/values and should not be included in the class declaration.
