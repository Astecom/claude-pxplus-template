# System Parameters

**'+P'** |  **_Define DIM Padding Character_**  
---|---  
  
##  Description

The value contained within the **'+P'** parameter is used to define the character to use in the **DIM** directive and function when they are passed a null string as the initialized value. This value is **_only_** used when the second parameter is present in the **DIM** statement for a string and only if that second parameter is a zero-length string.

_(The '+P' system parameter was added in PxPlus v8.11.)_

##  Default

**32** , which represents Hex $20$ or the ASCII space character

## See Also

**[DIM Define Arrays and Strings](../directives/dim.md)**

## Example

If the program issues DIM X$(30,""), X$ will have a string of 30 characters, each set based on the value set by this parameter.
