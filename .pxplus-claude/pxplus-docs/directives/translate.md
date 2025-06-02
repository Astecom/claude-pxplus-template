# Directives 

**TRANSLATE** |  **_Translate Contents of Variable_**  
---|---  
  
##  Formats

1. |  _Translate from String_ _:_ |  **TRANSLATE** _var$,table$,offset_  
---|---|---  
2. |  _Translate from Variable to Variable_ _:_ |  **TRANSLATE** _to_var$,translate_tbl$,offset_  
3. |  _Translate Single Character_ _:_ |  **TRANSLATE** _var_ _$,to_char$,from_char$_  
4. |  _Translate Character via Hex Value_ _:_ |  **TRANSLATE** _var_ _$,hex_string$_  
  
**_Where:_**

_from_char_ _$_ |  Character to be searched for and replaced.  
---|---  
_translate_tbl_ _$_ |  Conversion table to be used as the new value(s) in the translation. String expression.  
_hex_string_ _$_ |  Formatted hex string indicating characters and replacement characters.  
_offset_ |  Base value to subtract from the characters in the variable to calculate the offset into the translate table during conversion. Numeric expression.  
_table$_ |  Conversion table to be used as the new value(s) in the translation. String expression.  
_to_char_ _$_ |  New character to replace the original _from_char_ _$_. All instances of the _from_char_ _$_ in the _var_ _$_ string are replaced with the _to_char_ _$_.  
_to_var_ _$_ |  Variable in which the translation is performed. Starting at the offset, _to_var_ _$_ receives the translation of its own old values to the corresponding new values (from the table or _from_var_ _$_ string).  
_var_ _$_ |  String variable to be translated.  
  
##  Description

Use the **TRANSLATE** directive to convert/translate a string variable on a character-by-character basis using a conversion table or value. Use this directive to convert data from one character set to another (e.g. ASCII to EBCDIC).

##  Format 1

**_Translate from String_**  
  
**TRANSLATE** _var$,table$,offset_

Use this format to replace a character in a string variable with a character from a table string/expression. PxPlus performs the conversion by taking each character from the variable, subtracting the offset from its binary value, and using the result as an offset into the table whose character will then replace the original character in the variable.

When PxPlus computes the offset into the table, it will treat an offset of zero as the first character from the table. If the result of the subtraction is an offset that exceeds the length of the table, then no conversion takes place for the character.

**_Example:_**

> 0110 let A$="ABCD"  
>  0130 translate A$,"ZYXWVUTS",dec("A")  
>  0140 print A$  
>   
>  ->goto 110  
>  ->run  
>  ZYXW

##  Format 2

**_Translate from Variable to Variable_**  
  
**TRANSLATE** _to_var$,from_var$,offset_

Use this format to copy the character-by-character values from one variable to another variable up to the length of the shorter variable. In this format, PxPlus also uses a numeric starting offset into the target table.

**_Example:_**

> 0110 let A$="1234567890"  
>  0120 let B$="ABCD"  
>  0130 translate A$,B$,dec("3")  
>  0140 print A$  
>   
>  ->goto 110  
>  ->run  
>  12ABCD7890

##  Format 3

**_Translate Single Character_**  
  
**TRANSLATE** _var_ _$,to_char$,from_char$_

Use this format to replace all instances of a given character in a string variable with another character.

**_Example:_**

> STRVAR$="ABxDEFG xxx"  
>  translate STRVAR$,"C","x"  
>  print STRVAR$  
>   
>  ->run  
> ABCDEFG CCC

##  Format 4

**_Translate Character via Hex Value_**  
  
**TRANSLATE** _var_ _$,hex_string$_

Use this format to replace a single character in a string variable with designated character(s).

_hex_string_ _$_ consists of a string of hexadecimal values indicating the character to be replaced, the number of characters to replace that character, and then the replacement character(s).

**_Example:_**

> translate R$,$0A020D0A$

The line-feed character ($0A$) will be replaced by two ($02$) characters: carriage-return and line-feed ($0D0A$). Multiple sets of characters may be translated by extending the translation string:

> translate R$,$0A020D0A090120$

In this case, the line-feed character ($0A$) will be replaced by the two ($02$) carriage-return and a line-feed characters ($0D0A$), and the tab character ($09$) will be replaced by one ($01$) space character ($20$).
