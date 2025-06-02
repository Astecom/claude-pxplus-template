# Directives 

**DIM** |  **_Define Arrays and Strings_**  
---|---  
  
##  Formats

1. |  _Define Array_ _:_ |  **DIM** _array_name_[_$_] **[**  _subscript_1_[,_subscript_2_ [,_subscript_3_ ] ] **]**

#### **Note:**  
The square brackets (bolded above) are **_required_**.  
  
---|---|---  
2. |  _Define Composite String_ _:_ |  **DIM** _var_ _$_ :**IOL=**_iolref_  
3. |  _Initialize String:_ |  **DIM** _var_ _$_(_len_[,_char$_])[,_..._]  
4. |  [_Define Structured String_](dim_struct.md): |  **DIM** _var_ _$::structure$_  
5. |  _Load Associative Array_: |  **DIM LOAD** _array_name_[_$_] **{ALL}** = _JSON_string_ _$_  
  
**_Where:_**

_array_name_[$] |  Numeric or string variable to be dimensioned as an array.  
---|---  
_char$_ |  Value whose 1st character will be used to fill the variable up to the length specified. String expression.  
_iolref_ |  Either a string variable containing the object code of an IOList or a statement reference to an IOList (statement number or label).  
_len_ |  Desired length of the string variable. Numeric expression, integer.  
_subscript_1_ |  1st dimensions (_min:max_) of array. Numeric expression, integers. Optionally, this may be an *****  _(asterisk)_ to define a dynamic array. See **[Dynamic Arrays](dim.htm#Mark12)**.  
_subscript_2_ |  2nd dimensions (_min:max_) of array. Numeric expression, integers.  
_subscript_3_ |  3rd dimension (_min:max_) of array. Numeric expression, integers.  
_JSON_string_ _$_ |  String containing the name/value pairs to load into the array.  
  
##  Description

Use the **DIM** directive to define an array, to define a composite string or to initialize a string. See [**DIM( )**](../functions/dim.md) function to read the total number, minimum number and maximum number of elements in an array. The maximum number of elements in an array (regardless of the number of dimensions) is 100000.

To delete an array, use the [**CLEAR**](clear.md) directive.

**_Example:_**

> clear A$[all]

#### **Note:**  
For **_numeric_** arrays, you can use either **( )** (_parenthesis_) or **[ ]** (_square brackets_) to define arrays or reference elements.  
  
For **_string_** arrays, use **[ ]** (_square brackets_) to avoid confusion with substrings.  
  
Internally, all arrays have three subscripts. An array defined as X$[4] has values 0:4 for subscript 1, 0:0 for subscript 2, and 0:0 for subscript 3. However, specifying the unused subscripts is unnecessary.

##  Format 1

**_Define Array_**

**DIM** _array_name_[_$_](_subscript_1_[,_subscript_2_[,_subscript_3_]])

Use the **DIM** directive to define an array with one, two or three dimensions. Specify the dimensions using the values in the **DIM** statement. The dimensions of the array are defined as **[**_minimum_ :**]**_maximum._

If you omit the _minimum_ dimension, the system uses the default minimum, 0.

**_Example:_**

> dim X$[10] |  Creates 11 element array with elements X$[0] through X$[10]  
> ---|---  
> dim X$[0:10] |  Same as above  
> dim X$[1:6] |  Creates 6 element array with elements X$[1] through X$[6]  
  
When you refer to items in arrays, the lowest subscript is the minimum value specified; the highest is the maximum value specified. You can redefine existing arrays using the **DIM** statement. The values of all elements in the array are automatically initialized to 0 or null by the **DIM** statement.

**_Example:_**

The following example defines a three**-** dimensional array with three elements (0 through 2) in each dimension for a total of 27 elements:

> dim A(2,2,2)

The following example defines dimension one with 10 elements (1 through 10). Dimensions 2 and 3 are 0:0:

> dim CATS[1:10] !

To remove entry of single dimension arrays (typically dynamic arrays), a subscript **REMOVE** option can be used. See **[Remove Entry of Single Dimension Arrays](dim.htm#Mark13)**.

##  Dynamic Arrays

PxPlus also provides support for dynamic numeric and string arrays. These are single dimensional arrays with no pre-set upper limit and can be defined using an ***** (_asterisk_) as the first, and only subscript.

**_Example:_**

The following can be used to define dynamic array **X** :

> dim X[*]

Once defined, elements can be appended to the array either by sequential numbering the subscript starting with 1 or by using an ***** (_asterisk_) as the subscript.

To append an element to array **X** , as defined above, you would simply code **X[*]** =_value_. This would append a new element to the array and assign it the value specified. You can also code the specific element, and if the subscript is equal to the next higher element in the array, it will be appended.

**_Example:_**

To load an array with customer IDs of all customers owing more than $1,000:

> dim CUST$[*]  
>  select * from "Custfile" where Amt_OWING>1000  
>  CUST$[*]=CustId$  
>  next record

Using dynamic arrays simplifies application logic when the number of elements is not known in advance.

#### **Note:  
** When using static arrays, you cannot use dynamic subscripts. Attempting to append to dynamic arrays with a subscript that is greater than the maximum plus 1 will result in an Error #42: Subscript out of range/Invalid subscript.

**_Remove Entry of Single Dimension Arrays_**

The subscript **REMOVE** option can be used to remove entry of single dimension arrays (typically dynamic arrays). The following syntax can be used on either a dynamic array or a single dimension array:

> xxx = _array_ **[** $**]** **[**_index_ **REMOVE]**

_(The subscript REMOVE option was added in PxPlus 2021.)_

By including the keyword **REMOVE** following the initial subscript value, the system will return the value and remove the element once the expression is fully evaluated.

All array elements subsequent to the specified index will be shuffled down one position in the array.

If the array is a dynamic array, its size will be reduced by 1. If it is not a dynamic array, the original array size remains the same, and the unused elements will be initialized with 0 (if numeric) or a null string.

**_Example:_**

> dim M[1:4]  
>  read data from "100,200,300,400,",sep="," to M{all}  
>  print M[2 remove]

The above example will print the second element (200), shuffle element three to two and element four to three, and initialize element four to zero, leaving array M with four elements.

If you use a dynamic array, the array size will be adjusted as in the following example:

**_Example:_**

> dim NAMES$[*]  
>  NAMES$[*]="Mike"  
>  NAMES$[*]="Bill"  
>  NAMES$[*]="John"  
>  !  
>  while 1  
>  print (0,err=*break)NAMES$[1 remove]  
>  wend

The above example will load a dynamic array with names and then pull them off the array in order. As each element is removed from the array, the array size will be reduced by one until an error occurs, as there will be no more elements left.

_(Dynamic arrays were added in PxPlus v10.00.)_

##  Format 2

**_Define Composite String_**

**DIM** _var_ _$_ :**IOL=**_iolref_

Use this format of the **DIM** directive to define a composite string variable consisting of the fields specified in an IOList. The variable returns a string made up of the fields you specified in the IOList. If you modify the variable (e.g. by adding a field), the system will modify the fields in the IOList. Field names in the IOList are prefixed by the name of the variable and a **.** (_dot_).

**_Example:_**

> 0010 dim CST$:iol=1000  
>  1000 iolist NAME$,ADDR$,CITY$,ZIP

The above example yields the string CST$ consisting of CST.NAME$, CST.ADDR$, CST.CITY$, and CST.ZIP. Each field is separated by the **SEP** or delimiter in the default record format.

You can use the **[CLEAR](clear.md)** directive to reset a variable that is defined as a string template:

> clear CST$

**_Example:_**

The following example defines PRD$ as a 36-character string consisting of PRD.DESC$ for 30 characters and PRD.COST for 6 digits with a scale of 2 (2 implied decimal digits):

> 0010 dim PRD$:iol=2000  
>  2000 iolist DESC$:[chr(30)],COST:[num(6,2)]

#### **Note:**  
**[Composite Strings](../PxPlus%20User%20Guide/Language%20Elements/Data%20Types,%20Literals%20and%20Variables/Composite%20Strings.md)** cannot be used as object properties.

## See Also

**Composite Strings vs. BBx Templates**  
[**IOLIST Specify Variable List**](iolist.md)  
[**CLEAR Reset Variables**](clear.md)

##  Format 3

**_Initialize String_**** _with Fill Character_**

**DIM** _var_ _$_(_len_[,_char$_])[,_..._]

Use the **DIM** directive to define a string variable of a specific length. You can also use the **DIM** statement to define the value of the string variable. PxPlus uses the first character of the value you set in the _char$_ string as the fill character for the string being defined. The fill character is repeated for the length of the string as follows:

> dim A$(5,"*")

**_is_ _the same as_**

> dim A$(5,"*-")

... **_both_ _yield_** A$="*****"

If a value is not given (or is null), then the string is initialized to spaces. Combine this string initialization with the definition of string arrays (above) to pre-initialize all the elements of a string array.

**_Example:_**

The following **DIM** statement defines an array of 11 strings, each pre-initialized with 6 zeroes:

> dim ACC_IDS$[10](6,"0")

##  Format 4

PxPlus provides a structured string capability. See **[DIM Define/Use Structured Strings](dim_struct.md)** directive.

_(Structured string support was added in PxPlus v6.30, build 8915.)_

## Composite Strings vs. BBx Templates

Composite strings are made up of the variables you specify in the composite string definition, whereas string templates are strings, which are parsed to obtain the various **_logical_** variables. This has the following impact, which you should consider when you design applications:

  * You can pass a variable that is part of a composite string (e.g. CST.NAME$) to a sub-program and have a value returned in it. In a string template, however, CST.NAME$ would be considered a substring which could not be altered by a sub-program.
  * There is no performance impact when referencing individual variables in a composite string. There can be a performance impact when referencing logical variables in a template, especially when the template has variable length fields. On the other hand, when you reference the complete composite string, the string will be reconstructed each time. The string template always exists in memory, with no reconstruction required.
  * Unlike string templates, composite strings can be reconstructed on the fly.  
  
**_Example:_**  
  
0010 iolist NAME$,ADDR$,CITY$,AMT  
0020 iolist NAME$,ADDR$,CITY$,ZIP$,AMT  
0030 CST.ZIP$=""  
0040 dim CST$:iol=0010  
0050 read record (1)CST$  
0060 dim CST$:iol=0020  
0070 write record (1)CST$  
  
The logic above automatically inserts CST.ZIP$ into the composite string while preserving the other data elements. Note that composite string variables are not implicitly cleared when the composite string is defined, whereas templates are.
  * Since composite strings reference real variables, fields in composite strings have data types associated with them; that is, in a composite string, the system considers CST.AMT, CST.AMT$ and CST.AMT% to be three different fields, whereas in a string template, these would all refer to the same field.
  * The system does not currently support subscripting with composite strings.



#### **Note:**  
**[Composite Strings](../PxPlus%20User%20Guide/Language%20Elements/Data%20Types,%20Literals%20and%20Variables/Composite%20Strings.md)** cannot be used as object properties.

##  Format 5

**_Load Array from JSON Data  
_** _  
_**DIM LOAD** _array_name_ _$_**{ALL}**_= JSON_value$_

As the JSON data is parsed, the array will be loaded with elements and values from the input. White space in the data (outside of quoted text) is ignored; thus, formatted JSON input can be handled.

Structure within the JSON data (groups) will cause the generation of element names consisting of _groupname.elementname_. Any number of levels of structure can be defined; however, duplicate names within the resultant JSON structure will result in the prior definitions to be lost.

See [**DIM**](../functions/dim.htm#list) function.

Null/empty arrays are supported by including a ".0" element in the array.

**_Example:_**

> <pre>  
> ->x$="{ var1: [ ], var2: ""someString"", var3: 1.3 }"  
> ->dim load json$=x$  
> ->dump  
> ! ERR=0, CTL=0, RET=2  
> ! **********************************************************  
> ! Level=1  
> ! PGN="<Unsaved>"  
> json$["var1.0"]=""  
> json$["var2"]="someString"  
> json$["var3"]="1.3"  
> x$="{ var1: [ ], var2: ""someString"", var3: 1.3 }"  
> </pre>

_(Loading arrays from JSON data was added in PxPlus v11.00.)  
(Support for null/empty arrays for JSON was added in PxPlus 2019 Update 2.)_

BBx is a registered trademark of BASIS International Ltd.
