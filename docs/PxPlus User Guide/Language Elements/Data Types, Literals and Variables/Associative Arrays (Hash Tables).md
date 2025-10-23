# Data Types, Literals and Variables

**Associative Arrays (Hash Tables)** |  **__**  
---|---  
  
As of version 9, PxPlus also provides the ability to index/subscript arrays not only by index number but also by keyword name. These types of arrays are commonly referred to as **_Associative Arrays_** or **_Hash Tables_**. They provide an easy means to store and reference related data using keywords, such as account key, date, name, etc.

## General Syntax

To reference an array by keyword, the standard subscript syntax is used except that, instead of a numeric subscript, a keyword subscript is used.

> X$["Custid"] = "123456"   
>  X$["Name"] = "Little Bo-Peep Lambs Wool Inc"   
>  X$["Address"] = "123 Lost Her Way Lane"

Only a single dimension is supported. The keywords are limited to 255 bytes and may contain any character except $00$. Keywords are case sensitive; thus, "Custid", "custid", "CUSTID", and "CustID" are all considered different keys and thus refer to different entries.

A numeric subscript surrounded by **" "** (_quotes_) can be used to denote a list.

**_Example:_**

> X$["1"] = "A"  
>  X$["2"] = "B"  
>  X$["3"] = "C"

Structured data can also be used with the inclusion of a **.** (_period_) in the keyword.

**_Example:_**

> X$["Company.Name"] = "PVX Plus Technologies"  
>  X$["Company.Address.Province"] = "Ontario"  
>  X$["A.1"] = "ABC"

Referencing an unknown key will return either a zero (if numeric array) or a null string (if a string array).

No upfront array declaration is needed; that is, you do not need to issue a DIM to create an associative array, and there is no predefined limit as to the number of elements an array can hold (apart from the available memory). Like normal arrays, the DIM(READ NUM/MAX/MIN...) functions may be used to determine the number of elements in the array.

Associative arrays can also be passed to sub-routines or used in IOLIST with the standard {ALL} syntax.

You can specify a **DOM=** option on an associative array element reference to detect and handle the situation where the specified element does not presently exist in the array. Normally, any element referenced will be dynamically created; however, if a DOM clause is present, no such dynamic creation will occur. _(added in PxPlus 2016)_

To clear the array and free all the associations and values, use the **[DIM](../../../directives/dim.md)** directive with no dimensions:

> DIM X$

## Internal Indexes

When elements are added to an associative array, they are automatically assigned an index number. The first keyword will be assigned index number 1 with each subsequent new keyword being assigned the next higher index. Elements in the array can be referenced either by element number or keyword:

> BEGIN   
>  X$["Custid"]="123456"   
>  PRINT x$["Custid"]   
>  123456   
>  PRINT x$[1]   
>  123456

Associative arrays/hash tables have a base index of 1 as opposed to normal arrays, which generally are base zero.

To determine the internal index of a given keyword, you can use the DIM(INDEX element) function. This function will return the index number for a given keyword or zero if not defined:

> PRINT dim(index x$["Custid"])   
>  1   
>  PRINT dim(index x$["Custno"])   
>  0

## FOR All Keywords

To simplify the processing of all elements in an associative array, the INDEX option of the **[FOR](../../../directives/for.md)** directive has been enhanced to return the keyword for each element in an array.

#### **Note:**  
The order of the keys to be processed is undefined, as the names will have been _hashed_ for quick access (thus the name, _hash table_ ).

**_Syntax:_**

> FOR _strvar_ _$_ INDEX _array_

**_Where:_**

__ |  _strvar_ _$_ |  Variable to receive the keyword for each element in the array.  
---|---|---  
__ |  _array_ |  Defines the array you wish to reference in the form variable {ALL}.  
  
**_Example:_**

> 0010 BEGIN  
>  0020 LET X$["Custid"]="123456"  
>  0030 LET X$["Name"]="Little Bo-Peep Lambs Wool Inc"  
>  0040 LET X$["Address"]="123 Lost Her Way Lane"  
>  0050 FOR N$ INDEX X${ALL}  
>  0060 PRINT "Key:",N$,@(20),X$[N$]  
>  0070 NEXT  
>  run  
> Key:Custid 123456  
> Key:Name Little Bo-Peep Lambs Wool Inc  
> Key:Address 123 Lost Her Way Lane
