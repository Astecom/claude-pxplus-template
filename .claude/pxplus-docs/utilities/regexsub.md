# Utility Routines

***TOOLS/REGEXSUB** |  **_Regular Expression Substitution_**  
---|---  
  
## Invocation

**CALL** **"*tools/regExSub"** , _input$_ , _mask$_ , _replacement$_ , _output$_

**_Where:_**

_input$_ |  Input string to match against the mask.  
---|---  
_mask$_ |  Regular expression to process the input. Perl compatible regular expressions (PCRE) are supported. See **[MSK( )](../functions/msk.md)** function.  
_replacement$_ |  The string to output if the input matches the mask. If the string contains %1 to %9, it will be replaced in the output by the corresponding match from the input.  
_output$_ |  Output string where the input string or the replacement string is returned.  
  
## Description

This utility is used to perform regular expression substitution similar to Apache RedirectMatch.

If the input string matches the mask, then it will output the replacement string. The utility will substitute any parenthesized matches into the output where the first match replaces %1, the second match replaces %2, and so on up to the ninth match replacing %9.

If the input string does not match the mask, then it will output the input string.

_(The RegExSub utility was added in PxPlus 2022.)_

## Example

CALL "*tools\regExSub","http://www.devdaily.com/handler.php?cat=java&article=1001", "/handler\\.php\?cat=(.*)&article=(.*)", "http://www.devdaily.com/%1/%2",_output$_

**_Where:_**

_output_ _$_ will be "http://www.devdaily.com/java/1001".
