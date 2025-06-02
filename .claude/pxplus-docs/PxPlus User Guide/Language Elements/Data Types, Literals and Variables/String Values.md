# Data Types, Literals and Variables

**String Values** |  **__**  
---|---  
  
The string data type defines values that represent any sequence of displayable characters (letters, numbers, spaces, punctuation symbols, etc.). Strings typically contain ASCII data but may contain any sequence of 8-bit bytes of data. In PxPlus, these values can appear in the form of literals, variables, arrays and substrings. String manipulation facilities include concatenation, comparing, scanning and conversion.

String literals must be contained within**" "**_(quotation marks)._ Spaces within the quotation marks are considered an integral part of the string:

> "PVX Plus Technologies Ltd. "**_is not the same as_** "PVX Plus Technologies Ltd."

To include an actual quotation mark symbol within a string literal, two quotation marks must be specified back-to-back:

> "My name is ""Joe"""**_produces the result_** My name is "Joe"

## Hexadecimal String Literals

Hexadecimal string literals provide the ability to define a string of data, which may contain other than displayable ASCII characters. In PxPlus, a hexadecimal string is delimited by two dollar signs. A single character is defined by a pair of hexadecimal digits (0-9, A-F) with each pair representing a single byte of data.

**_Example:_**

Below are examples of hexadecimal strings:

|  $414243$ |  = "ABC"  
---|---|---  
|  $30313233$ |  = "0123"  
|  $0D0A$ |  = _Carriage Return/Line Feed_  
  
## String Variables

The name of a string variable is always terminated by a single **$** (_dollar sign_):

> A$, NAME$, CUST_ADR$, USER.ID$, X1$, WEEK_DAY$

A null string is defined as a string that contains no data; in other words, a string that is set to "" or $$ and whose length is 0 _zero_. Initially all string variables are defined as null strings. String variables can also be defined via the **[DIM](../../../directives/dim.md)** directive, which allows the programmer to define the length (and contents) of a string variable.

PxPlus includes a set of **_system variables_** that provide access to internally defined string values, such as formatted date, pathname, etc. These may be referenced like any other variable but are generally read only.

See **[System Variables](../../../variables.md)**.

##  String Arrays

String arrays, like **[Numeric Arrays](Numeric%20Values.htm#numeric_arrays)**, provide the ability to handle lists, tables, or matrices. They are also defined and referenced in the same manner as numeric arrays. The only distinguishing feature between the two types of arrays is that string array names always end with a **$** (_dollar sign_).

Arrays are created using the **[DIM](../../../directives/dim.md)** directive. This directive defines the array's name, number of dimensions (one, two or three), and minimum to maximum subscript in each dimension. 

**_Example:_**

A one-dimensional array with the name ADR$ with eleven elements would be defined as follows:

> DIM ADR$[10]

Access to an entry within a string array is specified by the array name, followed by the array subscript (contained within square brackets). The subscripts may be specified as **[Literals](Literals.md)** or **[Variables](Variables.md)**.

Use the **[DIM( )](../../../functions/dim.md)** function to determine information about array dimensions.

**_Example:_**

> DIM X$[1:10]   
>  PRINT DIM(READ NUM(X$)) ! Read total number of elements   
>  10   
>  PRINT DIM(READ MIN(X$)) ! Read minimum element number   
>  1   
>  PRINT DIM(READ MAX(X$)) ! Read maximum element number   
>  10

To access a **_range_** of entries, specify the string array name, followed by subscripts ranging **_from_** : ** _to_** (or ALL) using _braces_ instead of parentheses.

**_Example:_**

|  _Assigning a value to an entire array:_ |  LET A${ALL}="ABC"  
---|---|---  
|  _Assigning a value to a range of array elements:_ |  LET A${1:5}="ABC"  
|  _Copying the contents of one array into another:_ |  LET A${ALL}=B${ALL}  
|  _Assigning a range of values from one array to another:_ |  LET A${1:5}=B${6:10}  
  
The element positions in an array can be shifted/rearranged using a combination of subscripts (literals, variables, expressions and ranges).

**_Example:_**

|  _Shift up by deleting at subscript_ P: |  X${P:ElementCount}=X${P+1:ElementCount+1}  
---|---|---  
|  _Shift down by inserting at subscript_ P: |  X${ElementCount+1:P+1}=X${ElementCount:P}  
|  |  X$[P]=NewValue$  
  
## Dynamic Arrays

The DIM statement can also be used to create dynamic string arrays by using an *****_(asterisk)_ as the subscript in the **[DIM](../../../directives/dim.md)** directive. See **[Numeric Arrays](Numeric%20Values.htm#numeric_arrays)**.

_(Dynamic arrays were added in PxPlus v10.)_

## Substrings

A substring consists of a portion of a string variable. Substrings are accessed by specifying the string variable, followed by the _starting character_ position within the string and (optionally) the _length_ of the substring enclosed by parentheses. If no length is specified, then the substring consists of all characters from the starting character up to and including the last character within the string. 

**_Example:_**

If string A$ contains "ABCDEFGHIJK", then the following are valid:

> A$(1,1) = "A"   
>  A$(3,4) = "CDEF"   
>  A$(4) = "DEFGHIJK"

A substring must not exceed the current size of the string variable it references. If a variable Z$ contains "ABC", then Z$(3,2) would be invalid (resulting in Error #46: Length of string invalid). One exception to this rule would be the substring Z$(4) or Z$(4,0), which would equate to a null string. To avoid Error #46, the **[MID( )](../../../functions/mid.md)** function can also be used to return a substring.

Substrings may be used wherever a string variable is used. When the value being assigned to a substring is less than the length of the substring, it will be padded with space characters. If the string is longer, it will be truncated.

**_Example:_**

The following examples assume string A$ contains "ABCDEF":

|  LET A$(2,2) = "XX" |  _yields_ |  A$="AXXDEF"  
---|---|---|---  
|  LET A$(2,2) = "X" |  _yields_ |  A$="AX DEF"  
|  LET A$(2,2) = "XXX" |  _yields_ |  A$="AXXDEF"  
|  LET A$(2) = "X" |  _yields_ |  A$="AX "  
  
Substrings can also be used on string arrays by specifying both the array element (within square brackets) and the substring (within parentheses):

> ADDR$[1,2](2,3)

The above substring indicates characters 2 through 4 of element 1,2.

## String Concatenation

The mathematical**+**_plus_ operator can be used to concatenate strings. When two strings are concatenated, the resultant string consists of the contents of the string left of the**+** , followed immediately by the contents of the string to the right.

**_Example:_**

> x$="hello"+"world";print x$   
> helloworld   
>  a$="PVX Plus Technologies",b$="Canada Ltd."   
>  print a$+" "+b$   
>  PVX Plus Technologies, Canada Ltd.

Any number of strings may be concatenated as long as the total length of the resultant string does not exceed current **[System Limits](../../../appendix/system_limits.md)**.

## String Comparison

The following relational operators can be used to compare two strings:

**=** |  A$ = B$ yields 1 if A$ and B$ are equal, else yields 0 _zero_.  
---|---  
**< ** |  A$ < B$ yields 1 if A$ is less than B$, else yields 0 _zero_.  
**> ** |  A$ > B$ yields 1 if A$ is greater than B$, else yields 0 _zero_.  
**< > ** |  A$ <> B$ yields 1 if the A$ and B$ are not equal, else yields 0 _zero_.  
**< =** |  A$ <= B$ yields 1 if A$ is less than or equal to B$, else yields 0 _zero_.  
**> =** |  A$ >= B$ yields 1 if A$ is greater than or equal to B$, else yields 0 _zero_.  
**LIKE** |  In the example A$ LIKE B$, the LIKE operator can be used to compare strings based on a pattern match. See **LIKE Operator** below.  
  
**< >**,** <=**, and** >=** may be entered as** ><**,**= < ,** and**= >** respectively.

## LIKE Operator

The LIKE operator provides an easy-to-read mechanism to compare strings to recognized patterns. It is typically used in an IF expression, as follows:

> IF A$ LIKE PATTERN$ THEN . . .

This would be equivalent to the statement:

> IF MSK(A$,PATTERN$)<>0 THEN . . .

See **[MSK( )](../../../functions/msk.md)** function for details on what a mask can contain.

#### **Note:**  
The LIKE operator can be altered to use a masking formula compatible with Thoroughbred Basic using the **['TL'](../../../parameters/tl.md)** system parameter.

In string comparisons, each character in one string is compared to the corresponding character in another string to yield a binary result. The comparison is performed on the internal binary value of each byte.

When comparing strings of unequal lengths (and the longer string matches the shorter string for the full length of the shorter string), the longer string is considered the greater of the two strings.

**_Example:_**

> "PVX Plus Technologies" is **_always less than_** "PVX Plus Technologies, Ltd."

## String System Functions

PxPlus includes various internal functions that return string values based on the parameters provided. System functions can be used to evaluate, convert, and format strings, or to determine system and file information.

See **[System Functions](../../../functions.md)**.

Thoroughbred is a registered trademark of Thoroughbred Software International Inc.
