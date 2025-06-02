# Directives

**REDIM** |  **_Re-Dimension Array_**  
---|---  
  
##  Formats

1. |  _Re-dimension Array_ : |  **REDIM** _array_name_**[** $**]** **(**_subscript_1_**[** ,_subscript_2_**[** ,_subscript_3_**]])**  
---|---|---  
2. |  _Insert Array Indices_ : |  **REDIM INSERT**  _array_ **[** $**]** **[**_index_ :_count_ **]**  
3. |  _Delete Array Indices_ : |  **REDIM DELETE**  _array_ **[** $**]** **[**_index_ :_count_ **]**  
  
**_Where:_**

_array_name_[_$_] |  Numeric or string variable to be dimensioned as an array.  
---|---  
_subscript_1_ |  1st dimensions (_minimum:maximum_) of array. Numeric expression, integers.  
_subscript_2_ |  2nd dimensions (_minimum:maximum_) of array. Numeric expression, integers.  
_subscript_3_ |  3rd dimensions (_minimum:maximum_) of array. Numeric expression, integers.  
_array_ |  String or numeric array.  
_index_ :_count_ |  Numeric index at which the element or range of elements will be inserted or deleted. If _count_ is omitted, it will default to 1. Multiple dimensions could be specified as: **REDIM INSERT**  _array_**[**_index_ :_count_ , _index_ :_count_ , _index_ :_count_ **]**  
**REDIM DELETE**  _array_**[**_index_ :_count_ , _index_ :_count_ , _index_ :_count_ **]** For array dimensions that you do not want changed, set _count_ to zero.  
  
##  Description

The **REDIM** directive is used to re-dimension an array without destroying data already contained within the array. All existing data is preserved in the exact same location within the re-dimensioned array. This directive will work on string or numeric arrays.

The **REDIM INSERT** directive is used to insert either a single element at the specified index or a range of elements.

The **REDIM DELETE** directive is used to delete the specified index or range of indices.

#### **Note:**  
Data in array elements that do not exist in the re-dimensioned array are discarded.  
  
The **REDIM INSERT** and **REDIM DELETE** directives do not work on associative arrays and will generate errors if the insertion/deletion index does not exist or if you attempt to delete elements that do not exist.

_(The REDIM INSERT and REDIM DELETE directives were added in PxPlus 2021.)_

##  See Also

**[DIM Define Arrays and Strings](dim.md)  
[DIM( ) Generate String/Get Array Size](../functions/dim.md)**

##  Example

dim X[1:10]  
X[5]=5,X[6]=6  
redim X[-5:20,4]

X[5,0] has 5 and X[6,0] has 6 because the default second index is 0; i.e. the original dimension was effectively the same as X[1:10,0:0,0:0].
