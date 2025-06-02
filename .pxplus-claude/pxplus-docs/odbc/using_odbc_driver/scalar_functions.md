# Using the PxPlus SQL ODBC Driver

**Scalar Functions**|   
---|---  
  
Scalar functions can be included right in the SQL query anywhere a _simple term_ is supported or included through the use of the escape sequence:

_scalar_ _function_ |**{**_fn_  _scalar function_**}**

**_Where:_**

_scalar_ _function_ can be any of the **[String](scalar_functions.htm#Mark26)**, **[Numeric](scalar_functions.htm#Mark27)**, **[Time and Date](scalar_functions.htm#Mark28)** or **[System](scalar_functions.htm#Mark34)** functions listed below. 

The following tables list the supported scalar functions with descriptions of their results:

##  String Functions

This table lists the string functions:

**Function** |  **Description**  
---|---  
**ASCII(**_string_**)** |  Integer representing the ASCII code value of the leftmost character of _string_.  
**BIT_LENGTH(**_string_**)** |  Length in bits of _string_.  
**CHAR(**_num_**)** |  Character that has the ASCII code value specified by _num_. The value of _num_ should be between 0 and 255.  
**CHAR_LENGTH(**_string_**)_or  
_  
CHARACTER_LENGTH(**_string_**)** |  Length in characters of _string_ if _string_ is of a character data type.  
**CONCAT(**_string1, string2_**)** |  Character string that is the result of concatenating _string2_ to _string1_.  
**DIFFERENCE(**_string1, string2_**)** |  Integer value that indicates the difference between the values returned by the SOUNDEX function for _string1_ and _string2_.  
**INSERT(**_string1, start, length, string2_**)** |  Character string where length characters have been deleted from _string1_ , beginning at start, and where _string2_ has been inserted into _string1_ , beginning at start.  
**LCASE(**_string_**)** |  String equal to that in _string_ , with all uppercase characters converted to lowercase.  
**LEFT(**_string, count_**)** |  Leftmost _count_ characters of _string_.  
**LENGTH(**_string_**)_or_**  
**  
LEN(**_string_**)** |  Number of characters in _string_ , excluding trailing blanks.  
**LOCATE(**_string1, string2_**[**_, start_**])** |  Starting position of the first occurrence of _string1_ within _string2_. The search for the first occurrence of _string1_ begins with the first character position in _string2_ unless the optional argument _start_ is specified. If _start_ is specified, the search begins with the character position indicated by the value of _start_. The first character position in _string2_ is indicated by the value 1. If _string1_ is not found within _string2_ , the value 0 is returned.  
**LTRIM(**_string_**)** |  Characters of _string_ with leading blanks removed.  
**OCTET_LENGTH(**_string_**)** |  Returns the length in bytes of _string_.  
**POSITION(**_string1_ **IN**  _string2_**)** |  Position of _string1_ in _string2_. The result is an exact numeric with precision of double and a scale of 0.  
**REPEAT(**_string, count_**)** |  Character string composed of _string_ repeated _count_ times.  
**REPLACE(**_string1, string2, string3_**)** |  Search _string1_ for occurrences of _string2_ and replace with _string3_.  
**RIGHT(**_string, count_**)** |  Rightmost _count_ characters of _string_.  
**RTRIM(**_string_**)** |  Characters of _string_ with trailing blanks removed.  
**SOUNDEX(**_string_**)** |  4-digit SOUNDEX code.  
**SPACE(**_count_**)** |  Character string consisting of _count_ spaces.  
**SUBSTRING(**_string, start, length_**)_or_**  
**  
SUBSTR(**_string, start, length_**)** |  Character string that is derived from _string_ , beginning at the character position specified by _start_ for _length_ characters.  
**UCASE(**_string_**)** |  String equal to that in _string_ , but with all lowercase characters converted to uppercase.  
  
##  Numeric Functions

This table lists the numeric functions:

#### **Note:**  
Almost all of the numeric functions accept both numbers 1234 and string numbers '1234' as arguments, with the exceptions being the second arguments for the **[MOD](scalar_functions.htm#Mark30)**, **[POWER](scalar_functions.htm#Mark31)**, **[ROUND](scalar_functions.htm#Mark32)** and **[TRUNCATE](scalar_functions.htm#Mark33)** functions, which must be numbers.

**Function** |  **Description**  
---|---  
**ABS(**_num_**)** |  Absolute value of _num_.  
**ACOS(**_float_**)** |  Arc-cosine of _float_ as an angle expressed in radians.  
**ASIN(**_float_**)** |  Arc-sine of _float_ as an angle expressed in radians.  
**ATAN(**_float_**)** |  Arc-tangent of _float_ as an angle expressed in radians.  
**ATAN2(**_float1, float2_**)** |  Arc-tangent of the x and y coordinates, specified by _float1_ and _float2_ respectively as an angle expressed in radians.  
**CEILING(**_num_**)** |  Smallest integer greater than or equal to _num_. The return value is of the same data type as the input parameter.  
**COS(**_float_**)** |  Cosine of _float_ where _float_ is an angle expressed in radians.  
**COT(**_float_**)** |  Cotangent of _float_ where _float_ is an angle expressed in radians.  
**DEGREES(**_num_**)** |  Number of degrees converted from _num_ radians.  
**EXP(**_float_**)** |  Exponential value of _float_.  
**FLOOR(**_num_**)** |  Largest integer less than or equal to _num_. The return value is of the same data type as the input parameter.  
**LOG(**_float_**)** |  Natural logarithm of _float_.  
**LOG10(**_float_**)** |  Base 10 logarithm of _float_.  
**MOD(**_int1, int2_**)** |  Remainder (modulus) of _int1_ divided by _int2_.  
**NUM(**_string_**)_or_  
  
NUMBER(**_string_**)** |  Converts _string_ into a number.  
**PI( )** |  Constant value of "pi" as a floating-point value. Pi is defined internally as 3.14159265358979323846264338327950288419716939937510.  
**POWER(**_num_ _, int_**)** |  Value of _num_ to the power of _int_.  
**RADIANS(**_num_**)** |  Number of radians converted from _num_ degrees.  
**RAND(**[_int_]**)** |  Random floating-point value using _int_ as the optional seed value.  
**ROUND(**_num_ _, int_**)** |  Returns _num_ rounded to _int_ places right of the decimal point. If _int_ is negative, _num_ is rounded _int_ places to the left of the decimal point.  
**SIGN(**_num_**)** |  Returns an indicator of the sign of _num_. **_Where:_** If _num_ is less than zero, -1 is returned.  
If _num_ equals zero, 0 is returned.  
If _num_ is greater than zero, 1 is returned.  
**SIN(**_float_**)** |  Sine of _float_ where float is an angle expressed in radians.  
**SQRT(**_float_**)** |  Square root of _float_.  
**TAN(**_float_**)** |  Tangent of _float_ where _float_ is an angle expressed in radians.  
**TRUNCATE(**_num_ , _int_**)** |  Returns _num_ truncated to _int_ places right of the decimal point. If _int_ is negative, _num_ is truncated _int_ places to the left of the decimal point.  
  
##  Time and Date Functions

This table lists the time and date functions:

#### **Note:**  
A _date_exp_ can be in the escaped date format {d '2015-07-28'} or in a simple string format '2015-07-28'.  
  
A _time_exp_ must be in a simple string format '12:00:00'.  
  
A _timestamp_exp_ must be in a simple string format '2015-07-28 12:00:00'.

**Function** |  **Description**  
---|---  
**CURRENT_DATE( )_or_**  
**  
CURDATE( )** |  Current date.  
**CURRENT_TIME( )_or_**   
**  
CURTIME( )** |  Current local time.  
**CURRENT_TIMESTAMP( )** |  Current local date and local time as a timestamp value.  
**DAYNAME(**_date_exp_**)** |  Character string containing the name of the day for the day portion of _date_exp_. Only long English names are returned (e.g. Monday through Sunday).  
**DAYOFMONTH(**_date_exp_**)** |  Day of the month based on the month field in _date_exp_ as an integer value in the range of 1 - 31.  
**DAYOFWEEK(**_date_exp_**)** |  Day of the week based on the week field in _date_exp_ as an integer value in the range of 1 - 7, where 1 represents Sunday.  
**DAYOFYEAR(**_date_exp_**)** |  Day of the year based on the year field in _date_exp_ as an integer value in the range of 1 - 366.  
**EXTRACT(**_extract-field_**FROM** _extract-source_**)** |  Returns the _extract-field_ portion of the _extract-source_. **_Where:_** |  _extract-field_ |  The _extract-field_ argument can be one of the following keywords: **YEAR** , **MONTH** , **DAY** , **HOUR** , **MINUTE** or **SECOND**.  
---|---  
_extract-source_ |  The _extract-source_ argument is a date time or interval expression.  
  
The precision of the returned value is implementation defined. The scale is 0 unless **SECOND** is specified, in which case, the scale is not less than the fractional seconds precision of the _extract-source_ field.  
  
**HOUR(**_time_exp_**)** |  Hour based on the hour field in _time_exp_ as an integer value in the range of 0 - 23.  
**MINUTE(**_time_exp_**)** |  Minute based on the minute field in _time_exp_ as an integer value in the range of 0 - 59.  
**MONTH(**_date_exp_**)** |  Month based on the month field in _date_exp_ as an integer value in the range of 1 - 12.  
**MONTHNAME(**_date_exp_**)** |  Character string containing the name of the month for the month portion of _date_exp_. Only long English names are returned (e.g. January through December).  
**NOW( )** |  Current date and time as a timestamp value.  
**QUARTER(**_date_exp_**)** |  Quarter in _date_exp_ as an integer value in the range of 1 - 4, where 1 represents January 1 through March 31.  
**SECOND(**_time_exp_**)** |  Second based on the second field in _time_exp_ as an integer value in the range of 0 - 59.  
**TIMESTAMPADD(**_interval, integer_exp, timestamp_exp_**)** |  Returns the timestamp calculated by adding _integer_exp_ intervals of type interval to _timestamp_exp_. Mmmmm Valid values of _interval_ include the following keywords: |  **SQL_TSI_DAY  
SQL_TSI_HOUR  
SQL_TSI_MINUTE  
SQL_TSI_MONTH  
SQL_TSI_QUARTER  
SQL_TSI_SECOND  
SQL_TSI_WEEK  
SQL_TSI_YEAR**  
---  
  
**_Example:_**

The following SQL statement returns the name of each employee and his/her one year anniversary date:

SELECT NAME, {fn TIMESTAMPADD(SQL_TSI_YEAR, 1, HIRE_DATE)} FROM EMPLOYEES

If _timestamp_exp_ is a _time_ value and _interval_ specifies days, weeks, months, quarters or years, the date portion of _timestamp_exp_ is set to the current date before calculating the resulting timestamp.

If _timestamp_exp_ is a _date_ value and _interval_ specifies seconds, minutes or hours, the time portion of _timestamp_exp_ is set to 0 before calculating the resulting timestamp.  
  
**TIMESTAMPDIFF(**_interval, timestamp_exp1, timestamp_exp2_**)** |  Returns the integer number of intervals of type _interval_ by which _timestamp_exp2_ is greater than _timestamp_exp1_. Mmmm Valid values of _interval_ include the following keywords: |  **SQL_TSI_DAY  
SQL_TSI_HOUR  
SQL_TSI_MINUTE  
SQL_TSI_MONTH  
SQL_TSI_QUARTER  
SQL_TSI_SECOND  
SQL_TSI_WEEK  
SQL_TSI_YEAR**  
---  
  
**_Example:_**

The following SQL statement returns the name of each employee and the number of years he/she has been employed:

SELECT NAME, {fn TIMESTAMPDIFF(SQL_TSI_YEAR, {fn CURDATE( )}, HIRE_DATE)} FROM EMPLOYEES

If either _timestamp_ expression is a _time_ value and _interval_ specifies days, weeks, months, quarters or years, the date portion of that timestamp is set to the current date before calculating the difference between the timestamps.

If either _timestamp_ expression is a _date_ value and _interval_ specifies seconds, minutes or hours, the time portion of that timestamp is set to 0 before calculating the difference between the timestamps.  
  
**WEEK(**_date_exp_**)** |  Week of the year based on the week field in _date_exp_ as an integer value in the range of 1-53.  
**YEAR(**_date_exp_**)** |  Year based on the year field in _date_exp_ as an integer value.  
  
##  System Functions

This table lists the system functions:

**Function** |  **Description**  
---|---  
**CASE** _expression_**  
WHEN** _expression_**THEN** _expression_**[.** n**]  
[ELSE **_expression_**]**_  
_**END** |  Simple Case function. Evaluate a list of WHEN expressions for equality with the CASE expression and return the related result expression. If no WHEN expression is equal to the CASE expression, return the ELSE expression if present. If there is no ELSE expression, then return NULL.  
**CASE  
WHEN **_boolean_ __**THEN** _expression_**[.** n**]  
[ELSE **_expression_**]**_  
_**END** |  Searched Case function. Evaluate a list of Booleans and return the related result expression of the first Boolean in the list that is true. If no WHEN expression is equal to the CASE expression, return the ELSE expression if present. If there is no ELSE expression, then return NULL.  
**CAST(**_expression_**AS** _data_type_ __**[(**_integer1_**[**_, integer2_**] )] )** |  Convert _expression_ into _data_type_. Optionally specify the length or precision or precision and scale of the converted to _data_type_. _(Added in PxPlus 2016)_ For details on supported data types, see **[Data Types](scalar_functions.htm#Mark29)**.  
**CONVERT(**_expression, data_type_**)** |  Convert _expression_ into _data_type_. For details on supported data types, see **[Data Types](scalar_functions.htm#Mark29)**.  
**DATABASE( )** |  Return the current Data Source Name (DSN) description text.  
**IFNULL(**_expression1, expression2_**)** |  If _expression1_ evaluates to NULL, then the result of _expression2_ is returned; otherwise, the result of _expression1_ is returned.  
  
##  Data Types

This table lists the data types:

**Data Type** |  **Description**  
---|---  
**SQL_BIGINT  
  
BIGINT** |  Exact numeric value with precision 19 (if signed) or 20 (if unsigned) and scale 0.  
**SQL_BINARY [(**_length_**)]**  
**  
BINARY [(**_length_**)]** |  Binary data of fixed length. The length can be optionally overridden using the **[CAST](scalar_functions.htm#Mark35)** function. Binary data is returned as two characters per byte Hex representation. **_Example:_** "hello world" is "68656C6C6F20776F726C64".  
**SQL_VARBINARY [(**_length_**)]**  
**  
VARBINARY [(**_length_**)]** |  Variable length binary data. The maximum length can be optionally overridden using the **[CAST](scalar_functions.htm#Mark35)** function. Binary data is returned as two characters per byte Hex representation. **_Example:_** "hello world" is "68656C6C6F20776F726C64".  
**SQL_BIT  
  
BIT** |  Single bit binary data; i.e. 0 or 1.  
**SQL_CHAR [(**_length_**)]**  
**  
CHAR [(**_length_**)]**  
**  
CHARACTER [(**_length_**)]** |  Character string of fixed length. The length can be optionally overridden using the **[CAST](scalar_functions.htm#Mark35)** function.  
**SQL_VARCHAR [(**_length_**)]**  
**  
VARCHAR [(**_length_**)]**  
**  
CHAR VARYING [(**_length_**)]**  
**  
CHARACTER VARYING [(**_length_**)]** |  Variable length character string. The maximum length can be optionally overridden using the **[CAST](scalar_functions.htm#Mark35)** function.  
**SQL_DATE  
  
SQL_TYPE_DATE  
  
DATE** |  A calendar date in the format YYYYMMDD.  
**SQL_DECIMAL [(**_precision_**[**_, scale_**])]**  
**  
DECIMAL [(**_precision_**[**_, scale_**])]**  
**  
DEC [(**_precision_**[**_, scale_**])]** |  Signed, exact, numeric value with a precision of 15 and scale of 3. The precision and/or scale can be optionally overridden using the **[CAST](scalar_functions.htm#Mark35)** function.  
**SQL_DOUBLE  
  
DOUBLE  
  
DOUBLE PRECISION** |  Signed, approximate, numeric value with a precision of 15.  
**SQL_FLOAT [(**_precision_**)]**  
**  
FLOAT [(**_precision_**)]** |  Signed, approximate, numeric value with precision of 15. The precision can be optionally overridden using the **[CAST](scalar_functions.htm#Mark35)** function.  
**SQL_INTEGER  
  
INTEGER  
  
INT** |  Exact numeric value with precision 10 and scale 0.  
**SQL_NUMERIC [(**_precision_**[**_, scale_**])]**  
**  
NUMERIC [(**_precision_**[**_, scale_**])]** |  Signed, exact, numeric value with a precision of 15 and scale of 3. The precision and/or scale can be optionally overridden using the **[CAST](scalar_functions.htm#Mark35)** function.  
**SQL_REAL  
  
REAL** |  Signed, approximate, numeric value with a precision of 7.  
**SQL_SMALLINT  
  
SMALLINT** |  Exact numeric value with precision of 5 and scale of 0.  
**SQL_TINYINT  
  
TINYINT** |  Exact numeric value with precision of 3 and scale of 0.
