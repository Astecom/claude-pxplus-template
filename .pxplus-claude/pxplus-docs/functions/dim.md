# System Functions

**DIM( )** |  **_Generate String/Get Array Size_**  
---|---  
  
##  Formats

1. |  _Generate or Initialize String_ _:_ |  **DIM (**_len_[,_fill$_][,**ERR=**_stmtref_]**)**  
---|---|---  
2. |  _Read Total Elements in Array_ _:_ |  **DIM (READ NUM(**_array_name_[_$_][,_subscript_]**))**  
3. |  _Get Maximum Index for an Array_ _:_ |  **DIM (READ MAX(**_array_name_[_$_][,_subscript_]**))**  
4. |  _Get Minimum Index for an Array_ _:_ |  **DIM (READ MIN(**_array_name_[_$_][,_subscript_] **))**  
  
_The following were added in PxPlus v8.00:_

5. |  _Find Max/Min Value in Array_ _:_ |  **DIM (FIND [ MIN | MAX ] (**_array_name_[_$_]**))**  
---|---|---  
6. |  _Scan Array for Value_ _:_ |  **DIM (FIND** _array_name_[_$_]=_comparison value_[_$_],**ERR=**_stmtref_**)**  
7. |  _Total Numeric Array_ _:_ |  **DIM (ADD** _array_name_**)**  
  
_The following was added in PxPlus v9.00:_

8. |  _Return Associated Index_ _:_ |  **DIM (INDEX** _array_name_[_$_] [_keyword$_] **)**  
---|---|---  
  
_The following were added in PxPlus v11.00:_

9. |  _Return Key from Index_ _:_ |  **DIM (KEY** _array_name_[_$_] [_index_] **)**  
---|---|---  
10. |  _Remove Key_ _:_ |  **DIM (DROP** _array_name_[_$_] [_keyword$_] **)**  
11. |  _Generate JSON Data from Array_ _:_ |  **DIM (LIST [ SORT | EDIT ]**_array_name_[_$_]**[** {ALL} **]**__**[ WITH NUM**(_namelist_ _$_) **]** **)**  
  
_The following was added in PxPlus 2016:_

12. |  [_Get an Elements Type-Flag_](dim.htm#typeflag): |  _strvar_ _$_ = **DIM (CLASS**  _array$_[ _strName_ _$_ ] **)**  
---|---|---  
  
**_Where:_****__**

_array$_ |  String array whose element you want to retrieve.  
---|---  
_array_name_ _[$]_ |  Name of a previously dimensioned array.  
_comparison_ |  Type of comparison to be done against each element of the array.  
_fill$_ |  Text string or value that will be used to fill the variable up to the length specified. String expression.  
[_index_] |  Numeric index for the element in the array whose keyword is to be returned.

#### **Note:**  
The square brackets around the keyword are **_required_**.  
  
[_keyword$_] |  Keyword associated with the element in the array whose index is to be returned or dropped.

#### **Note:**  
The square brackets around the keyword are **_required_**.  
  
_len_ |  Desired length of the string variable. Numeric expression, integer.  
_stmtref_ |  Program line number or statement label to which to transfer control.  
_strName_ _$_ |  String expression or literal containing the index of the element being referenced.  
_strvar_ _$_ |  String variable that will receive either an "N" (numeric) or "S" (string).  
_subscript_ |  Array's dimensions (first, second or third).  
_value_[_$_] |  Value to compare each element against. Type of value must match the type of array (string values for string array, numeric values for numeric array).  
**WITH NUM**(_namelist_ _$_) |  Optional list of subscript names, whose values are not to be quoted in JSON option.  
  
##  Returns

Initialized string, or information about dimensions of array.

##  Description

Use the **DIM( )** function to generate or initialize a string. You can also use it to obtain information about the size of an array you have already defined using the **[DIM](../directives/dim.md)** directive.

##  Format 1

**_Generate or Initialize String_**

**DIM**(_len_[,_fill$_][,**ERR=**_stmtref_])

Use this format to generate or initialize a string whose length you specify. The function fills the string by using the value for _fill$_.

#### **Note:**  
This format of the function behaves almost like the **DIM** directive's format to initialize strings. However, instead of repeating only the first character of the string, as in the directive, the function repeats the complete value of the fill string. See [**DIM**](../directives/dim.md) directive for the format to initialize strings.

If you omit the fill string, the system uses spaces as fill characters:

> print ":",dim(11,"*Cat"),":"  
>   
>  ->run  
>  *Cat*Cat*Ca:

> print 'CS',"A Title",@(0,1),dim(80,"-")  
>  rem The dim( ) above returns a string of hyphens "-" 80 characters long  
>   
>  ->run  
>  A Title  
>  \--------------------------------------------------------------------------------

##  See Also

**['+S' & '-S' Substitute Solid Lines On/Off](../mnemonics/+s.md)**

##  Formats 2, 3 and 4

**_Read Dimensions (Size) of Array_**

Use Formats 2, 3 and 4 of the **DIM( )** function to read a given array's total number of elements, the minimum element's number and the maximum element's number. If the variable you specify is not an array, **NUM** and **MIN** will return 0, **MAX** will return -1.

**DIM**(**READ NUM**(_array_name_[_$_][,_subscript_]))

The **DIM(READ NUM( ))** function is used to read the total number of elements in a dimensioned array:

> dim X[0:15]  
>  print dim(read num(X))  
>   
>  ->run  
>  16

**DIM**(**READ MAX**(_array_name_[_$_][,_subscript_]))

The **DIM(READ MAX( ))** function is used to read the maximum element number in a dimensioned array:

> dim X[0:15]  
>  print dim(read max(X))  
>   
>  ->run  
>  15

**DIM**(**READ MIN**(_array_name_[_$_][,_subscript_]))

The **DIM(READ MIN( ))** function is used to read the minimum element number in a dimensioned array:

> dim X[0:15]  
>  print dim(read min(X))  
>   
>  ->run  
>  0

##  Format 5

**_Find Max/Min Value in Array_**

**DIM (FIND [ MIN | MAX ] (**_array_name_[_$_]**))**

_(added in PxPlus v8.00)_

Use this format to scan an array to determine the index of the highest or lowest element. The return value will be the index into the array.

**_Example:_**

Assuming an array X$ contained 'Cat', 'Dog', 'Zebra', 'Ant', 'Pig' in elements 1 through 5:

|  dim (find max(X$)) |  This would yield 3 (for Zebra).  
---|---|---  
|  dim (find min(X$)) |  This would yield 4 (for Ant).  
  
##  Format 6

**_Scan Array for Value_**

**DIM (FIND** _array_name_[_$_]=_comparison value_[_$_],**ERR=**_stmtref_**)**

_(added in PxPlus v8.00)_

Use this format to locate a value in an array that will match an expression. The return value will be the index into the array. If not found, an Error 11 will be generated; therefore, the ERR= branch should be specified on the function call.

**_Example:_**  
  
Assuming an array X$ contained 'Cat', 'Dog', 'Zebra', 'Ant', 'Pig' in elements 1 through 5:

|  dim (find X$ = "Dog" |  This would yield 2.  
---|---|---  
|  dim (find X$ > "Man") |  This would yield 3 (for Zebra).  
  
##  Format 7

**_Total Numeric Array_**

**DIM (ADD** _array_name_**)**

_(added in PxPlus v8.00)_

Use this format to quickly total a numeric array.

## Format 8

**_Lookup and Return Index for Given Keyword_**

**DIM (INDEX** _array_name_[_$_] [_keyword$_] **)**

_(added in PxPlus v9.00)_

This format can be used against any associative array in order to return the index of the element for the specified keyword. If no element with the specified keyword is found, the return value will be 0 (zero).

## Format 9

**_Lookup and Return Keyword for Given Index_**

**DIM (KEY** _array_name_[_$_] [_index_] **)**

_(added in PxPlus v11.00)_

This format can be used against any associative array in order to return the keyword of the element for the specified index. If no keyword is assigned to the specified element, an Error #11 will be generated.

## Format 10

**_Lookup and Remove the Keyword from an Array_**

**DIM (DROP** _array_name_[_$_] [_keyword$_] **)**

_(added in PxPlus v11.00)_

This format can be used against any associative array to remove the specified keyword. If no element with the specified keyword is found, the return value will be 0 (zero); otherwise, the function will return the index of the element whose key was dropped.

#### **Note:**  
Using the **DIM (DROP** xxx**[** "_keyword_ "**]** **)** format does **_not_** remove the element from the array but only removes the associated keyword.

## Format 11

**_Generate JSON Data from Array_**

**DIM (LIST [ SORT | EDIT ]**_array_name_[_$_]**[** {ALL} **]**__**[ WITH NUM**(_namelist_ _$_) **]** **)**

_(added in PxPlus v11.00)_

The **DIM (LIST** xxx {ALL}**)** format can be used against any associative array in order to generate and return all the elements in the array and their values in a JSON string. This JSON string can then be used to subsequently load/reload an array or for passing the data to an external application.

#### **Note:**  
The array is automatically sorted when **'JV'** =1 (_default_). See **['JV'](../parameters/jv.md)** system parameter.

A JSON string consists of a series of comma-separated name/value pairs where the variable name is separated from the value using a **:**_(colon)_ :

**_Example:_**

> X$["FirstName"] = "John"  
>  X$["LastName"] = "Doe"

> When represented as a JSON string, this would become:

> "FirstName": "John", "LastName":"Doe"

If the value is numeric, the quotes are not needed.

The function has two optional keywords that may be supplied after **LIST** :

> **SORT:** The output will be sorted alphabetically.  
> **EDIT:** The output will be output with each item on a separate line and two spaces indentation for each level.

Structured data can also be represented with the inclusion of a _period_ in the associative name:

> X$["Company"] = "PVX Plus Technologies"  
>  X$["Address.Street"] = "45B West Wilmot"  
>  X$["Address.City"] = "Richmond Hill"  
>  X$["Address.Province"] = "Ontario"  
>  X$["Phone"] = "888-975-7587"

When represented as a JSON string generated by DIM(LIST EDIT X${ALL}), this would become:

> "Address":{  
>  "Street":"45B West Wilmot",  
>  "City":"Richmond Hill",  
>  "Province":"Canada" },  
>  "Company":"PVX Plus Technologies"  
>  "Phone":"888-975-7587"

Null/empty arrays are supported by including a ".0" element in the array:

> <pre>  
>  ->x$="{ var1: ""someString"", var2: 1.3 }"  
>  ->dim load json$=x$  
>  ->json$["varArray.0"]=""  
>  ->print dim(list edit json$)  
>  {  
>  "var1":"someString",  
>  "var2":1.3,  
>  "varArray":[ ]  
>  }  
>  </pre>

#### **Note:**  
The empty array will be included **_only if no other elements other than .0_** are defined in the array.

_(Support for null/empty arrays for JSON was added in PxPlus 2019 Update 2.)_

**_Suppressing QUOTES for Numeric Values_**

When outputting numeric data in JSON, you generally do not want the values to be quoted. This can be accomplished by adding **WITH NUM(** "name, name, name,...") to the function parameters. The array elements whose names are supplied will not have their values quoted.

Generally, this is used for numeric data; however, it can also be used for the value **_true_** and **_false_**. By default, when an array is loaded using the **[DIM LOAD](../directives/dim.htm#load)** directive, the system will attempt to remember if the value coming in had quotes or not. If there were no quotes coming in, the variable will not have quotes when output.

##  Format 12

**_Get an Elements Type-Flag_**

_strvar_ _$_ = **DIM (CLASS**  _array$_[ _strName_ _$_ ] **)**

_(added in PxPlus 2016)_

You can determine the type-flag of any element in a string associative array using the **DIM (CLASS**  _array$**)**_ function. If the element does not exist, it will be created dynamically, and the type-flag of "S" will be returned.
