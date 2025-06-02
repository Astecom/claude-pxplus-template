# Language Reference - Appendix 

**Data Format Masks** |   
---|---  
  
A format mask is a character string that can be used to define how data is to be displayed or printed in PxPlus (see [**PRINT**](../directives/print.md) directive). Masks can also be applied to filter data being received from the keyboard (see [**INPUT**](../directives/input.md) directive) or in the conversion/validation of a string (see [**STR( )**](../functions/str.md) function).

For information on data input and output in PxPlus, see **[Basic Input and Output](../PxPlus%20User%20Guide/Programming%20Constructs/Basic%20Input%20and%20Output/Overview.md)**.

##  Assigning a Format Mask

To specify a format mask to be applied to a numeric value, place a colon before the mask following the given data value:

> _value**:**__mask_ _$_

**_Where:_**

_value_ |  Value (string or numeric) that is to be converted  
---|---  
_mask$_ |  A literal string, a string variable, substring, or a string expression  
  
**_Example:_**

> print "The total is ",A:"$#,###,##0.00CR"  
>   
> **_or_** _  
> _  
>  MASK$="000-0000"  
>  print "Phone: ",T:MASK$

The number of characters defined in a mask must be equal to or larger than the number of characters to be displayed. One output character is generated for each character present in the format mask.

When more characters exist in the data value than are specified in the format mask, the result will generate an Error #43: Format mask invalid; e.g. outputting 1000 with a mask of "##0" causes an error.

The [**'FI'**](../parameters/fi.md), [**'F,'**](../parameters/f~.md) and [**'FO'=**](../parameters/fo.md) system parameters can be specified to handle overflows without generating errors.

##  Format Defaults

If no format mask is specified when outputting numeric values, the system formats the value as follows:

|  The first character output will indicate the sign of the value. A space will be output if positive; a minus sign if negative.  
---|---  
|  If the absolute value is greater than 10E+18 or is less than 10E-18 (but not zero), the value is output using scientific notation.  
|  The number is rounded to the current precision in effect and output suppressing all leading zeroes and all trailing zeroes following the decimal point. The decimal point is suppressed if no digits remain after it.  
  
**_Example:_**

Assuming precision of 2:

> print 3/2,6/3,3-4,2/3  
>   
>  1.5 2-1 .67

##  Numeric Format Masks

Numeric format mask characters are used to convert numeric data (from literals, variables, or numeric expressions) to ASCII. Format masks allow for the generation of fixed format data with the insertion of fill characters (usually a space) to suppress leading/trailing zeroes.

This table lists the recognized numeric format mask characters.

#### **Important Note:**  
Some numeric format mask characters cannot be used in the **INPUT** and **MULTI_LINE** directives (as indicated below). The characters that can be used in these directives are **0 # . ! - + , $** ***** (**$** in the leading position only).

**Character** |  **Description**  
---|---  
0 |  _(Zero)_ Outputs one digit from the numeric value.  
# |  Outputs one digit of the number unless the digit is zero and no digits have been output yet, in which case it outputs a fill character (suppresses leading zeroes).  
. |  Outputs/aligns decimal point. One occurrence allowed per mask.  
! |  Treated as '**.** ' but causes output to be replaced with spaces if the value is 0 (zero); i.e. 'Blank when Zero'. Currency symbols and signs are also suppressed.  
- |  In front end of a mask, inserts '**-** ' (if value negative) or a fill character (if positive) just before the first digit. In the trailing end of a mask, outputs either a '**-** ' or a fill character. Within the mask, outputs a dash regardless of the value.  
+ |  Outputs either a '-' if the number is < 0; otherwise, outputs a '+'. If this format mask character is in front of the number, the output is placed just before the first digit (floating +).  
, |  Outputs a comma if some digits have been output; otherwise, it outputs a fill character.  
$ |  If at the front of the number, indicates that a dollar sign is to be output in front of the first digit of the number (floating dollar sign). Anywhere else, indicates that a dollar sign is to be output.  
* |  If before any digits of the number, causes asterisks to be used as the fill character instead of a space. If it occurs anywhere else within the mask, it causes an asterisk to be output.  
~ ** 1** |  Outputs a "~" in lieu of a digit from the input numeric value. This is typically used as a hidden mask character to hide the data from the user. _(The ability to use a "~" format mask character was added in PxPlus v10.00.)_  
( _or_ ) ** 1** |  Outputs parentheses if the value is negative; otherwise, it outputs a fill character.  
CR ** 1** |  Outputs CR if the value is negative; otherwise, it outputs two fill characters.  
DR ** 1** |  Outputs CR if the value is negative; otherwise, it outputs DR.  
B ** 1** |  Outputs a space.  
_other_ ** 1** |  Outputs the character.  
  
** 1** **Indicates that the numeric format mask character cannot be used in the INPUT and MULTI_LINE directives**

Before being output, the number is rounded to the number of decimal places specified in the format mask. If no sign indication is specified (i.e. no -, +, (, ), CR, or DR in mask), no sign will be output.

This table shows the results of various masks used on different values:

**Value** |  **Mask** |  **Result**  
---|---|---  
1 |  "000000" |  "000001"  
1 |  "####0" |  "1"  
-2.4 |  "-###0.00" |  "-2.400"  
1000.9 |  "#,##0+" |  "1,001+"  
-10.5 |  "$#,##0.00BDR" |  "$10.50 CR"  
5551212 |  "000-0000" |  "555-1212" (Phone)  
2359 |  "00:00" |  "23:59" (Time)  
-45 |  "###0" |  "45"  
  
##  String Format Masks

String data can also be converted through the use of format masks. Unlike numeric format masks, string format masks are typically used to validate that the contents of a string match a pre-defined format.

This table lists the recognized string format mask characters.

**Character** |  **Description**  
---|---  
0 |  _(Zero)_ String must contain either a digit (0-9) in this position.  
A |  String must contain an alphabetic letter (A-Z, a-z) in this position. The output of the format mask is converted to uppercase.  
a |  String must contain an alphabetic letter (A-Z, a-z) in this position.  
X |  String can contain any character in this position. The output of the format mask is converted to uppercase.  
x |  String can contain any character in this position.  
Z |  String must contain an alphabetic letter (A-Z, a-z) or a digit (0-9) in this position. The output of the format mask is converted to uppercase.  
z |  String must contain an alphabetic letter (A-Z, a-z) or a digit (0-9) in this position.  
~ |  Outputs a "~" in lieu of a character from the input string value. This is typically used as a hidden mask character to hide the data from the user as in credit cards. _(The ability to use a "~" format mask character was added in PxPlus v10.00.)_  
(_nn_) |  A numeric value surrounded by parenthesis may be used to specify a repeat count for the preceding format character; e.g. AAAAA may also be specified as A(5).  
_other_ |  Outputs the character.
