# System Parameters

**'TL'** |  **_LIKE Emulates Thoroughbred_**  
---|---  
  
##  Description

Sets the **LIKE Operator** to use a simplified pattern match that emulates the behaviour of **LIKE** as used by application written for use with Thoroughbred Basic.

The revised Thoroughbred-like pattern matching logic is:

> **"*"**  _(asterisk)_ in the mask stands for any number of characters including none.

> "?" in the mask will match any single character.

> [ ... ] will match any of the characters within the brackets.

> A range of characters may be specified by including a dash, as in A-Z, which would match the characters A through Z.

To match any of the above escape characters ( * , ? or [ ), you need to include the character within square brackets as is:

> [*] - Will match an asterisk

> [?] - Will match a question mark

> [[] - Will match an open square bracket

##  Default

The default setting is **_Off_** , meaning the **LIKE** operator will use the same pattern matching as **MSK( )** function.

## See Also

[**MSK( ) Scan String for Mask**](../functions/msk.md)

##  Example

"ABCDEF" matches "*DEF", "ABC???", "*CD*" but not "ABC" or "?".

Thoroughbred is a registered trademark of Thoroughbred Software International, Inc.
