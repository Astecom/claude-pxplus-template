# System Functions

**POS( )** |  **_Scan String_**  
---|---  
  
##  Format

**POS(**_pattern$_ { **=**__...}_string$_**[** ,_step_**[** ,_instance_**] ]** **[** ,**ERR=**_stmtref_**]** **)**

**_Where:_**

{**=**__...} |  Relationship operator. Define the relationship for the string comparison: |  **:** |  _colon_ |  Search for first instance of any character in _string$_ which is in _pattern$  
_ e.g. POS("0123456789" **:** X$) returns first digit in X$  
---|---|---  
**^** |  _caret_ |  Search for first instance of any character in _string$_ which is **not** in _pattern$  
_ e.g. POS("0123456789" **^** X$) returns first **non** -digit in X$  
**=** |  _equals sign_ |  Searches for _pattern$_ in _string$_  
**< >** |  _greater/less than_ |  Search for _pattern$**not**_ in _string$_(usually _pattern$_ is a single character)  
**>** |  _greater than_ |  Search for position where _pattern$_ is greater than _string$_  
**<** |  _less than_ |  Search for position where _pattern$_ is less than _string$_  
_instance_ |  Numeric expression tells PxPlus which occurrence(s) to report when the pattern is found in the string.  
_pattern_ |  String value or expression to scan for.  
_step_ |  Increment value of the intervals. Optional. Numeric expression (defaults to 1).  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Returns

Integer, starting position where relationship is satisfied (0 if none).

##  Description

The **POS( )** function scans the _string$_ to determine where a portion of it will satisfy the relationship with the pattern string. The function returns an integer reporting the starting position in _string$_ where the relationship is satisfied, or 0 (zero) if no position satisfies the relationship.

Use the _step_ value to set the logical increment for the next position to be checked. The default is to move one position at a time. If the value of the increment is negative, then the string is scanned from back to front.

Indicate the _instance_ or occurrence for which you want to obtain the **POS( )** value. If this value is omitted, the default is 1 (the first instance found). If the value is 0, the **POS( )** function returns the total number of matches found.

##  Example

The following examples illustrate different uses for the **POS( )** function:

**_Example 1:_**

Given A$="The quick brown fox":

> pos("q"=A$) ! Yields 5  
> pos("z"=A$) ! Yields 0

**_Example 2:_**

Given A$="The quick brown fox":

> pos("q"=A$) ! Yields 5  
> pos("z"=A$) ! Yields 0  
> pos("o"=A$) ! Yields 13  
> pos("o"=A$,-1) ! Yields 18 - Scan from end (fox)  
> pos("o"=A$,1,2) ! Yields 18 - Second occurrence (fox)  
> pos("o"=A$,2) ! Yields 13 - Checks every 2nd position  
> pos("r"<A$) ! Yields 6 - "u" is first char. > "r"  
> pos("o"=A$,1,0) ! Yields 2 - Two occurrences of "o"

Any of the comparison operators (i.e. **=** , **:** , **^** , **<** and **>**) can be used for different evaluations of the number of occurrences found within a string.
