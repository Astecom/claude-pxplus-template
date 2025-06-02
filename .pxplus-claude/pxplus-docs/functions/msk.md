# System Functions

**MSK( )** |  **_Scan String for Mask_**  
---|---  
  
##  Formats

1. |  _Search Subject String for Pattern:_ |  **MSK(**_string$,mask_ _$_[,**ERR** =_stmtref_]**)**  
---|---|---  
2. |  _Return Captured Sub-Pattern (**'OM'=0** Only):_ |  **MSK(**_index_[,**ERR** =_stmtref_]**)** _(added in PxPlus 2014)_  
**_Where:_** |   
---|---  
_mask$_ |  String containing the pattern/mask definition. If this value is null, then the previously used pattern is reused. String expression.  
_stmtref_ |  Program line number or statement label to which to transfer control.  
_string$_ |  String to search. Maximum string size 8KB.  
_index_ |  Index of the captured sub-pattern to return, with 1-n being the captured sub-patterns, and 0 being the match for the whole pattern.  
  
##  Returns

**_Format 1:_** Integer reporting the starting offset of the matched pattern _mask$_ in the subject string _string_ _$_.

**_Format 2:_** Integer reporting the starting offset of the captured sub-pattern from the previous **MSK( )**_Format 1_ call.

The **[MSL](../variables/msl.md)** system variable and **TCB(16)** return the length of the string found for both formats.

## Format 1

Use the **MSK( )** function to scan a string looking for a specific pattern of characters. The values returned are the starting offset and length of the string matching the given mask or pattern. The return value of the **MSK( )** function is the offset while the length is returned via the **MSL** system variable and **TCB(16)**. The pattern defines the mask as a regular expression. The types of regular expressions that are supported are dependent on the **['OM'](../parameters/om.md)** parameter:

|  **'OM'=0** |  _(Default)_ Perl compatible regular expressions (PCRE) are supported. This supports everything below and will match the first match of the pattern unless otherwise specified. This mode supports UTF-8.  
---|---|---  
|  **'OM' >1** |  Mostly POSIX compatible regular expressions are supported. This supports some features below and will match the longest match of the pattern. This mode does **_not_** support UTF-8.  
  
The following table displays a summary of the supported regular expression syntax:

#### **Note:  
** This table does not list all allowed syntax for '**OM'=0** regular expressions. Only the ones most often used are listed. See **<http://manual.pvxplus.com/pcresyntax.html>**.

**Mask Character** |  **Format in Pattern$** |  **Search**  
---|---|---  
**^** (Caret) |  At the start of regular expression |  To find a match with the start of the string being searched  
**$** (Dollar Sign) |  At the end of regular expression |  To find a match with the end of the string being searched  
**.** (Period) |  Anywhere in the pattern except within square brackets |  To find a match with any character  
**(**_string_**)** |  String of characters (or other codes) enclosed in parentheses |  To define a sub-pattern to match  
  
If **'OM'=0** and PxPlus 2014 is used, then it also sets up the sub-pattern to be captured.  
**[**_string_**]** |  String enclosed in square brackets |  To find a match with any character in that string  
**[^**_string_**]** |  Square bracketing combined with a caret **^** as the first character of the string |  To find a match with any character except the characters in the string  
  
** _Example:  
_**  
[xyz] matches x, y, or z, while [^xyz] matches a, b, c, but not x, y, or z.  
**[**_str**-** ing_**]** |  Dash within string in square brackets |  To form expressions  
  
** _Example:  
_**  
[a-bd-z] to search for a match with any lowercase letter except c  
***** (Asterisk) |  At the end of a character (or sub-pattern) |  To search for zero or more occurrences of the character (or sub-pattern)  
  
**_Example:  
_**  
In fo*, the * operates on the o; it matches f, fo, foo, etc. but does not match fa. The expression f(at)* matches f, fat, fatat, fatatat, etc.  
**+** (Plus Sign) |  At the end of a character (or sub-pattern) |  To find a match with one or more occurrences of the character (or sub-pattern)  
  
**_Example:  
_**  
In fa+, matches fa, faa, faaa, etc. but not f.  
**{** min**,** max**}** |  At the end of a character (or sub-pattern) |  To find a match with at least (min) and at most (max) occurrences of the character (or sub-pattern)  
  
**_Example:  
_**  
go{2,4}d matches good, good, or gooood.

#### **Note:  
'OM'=0** on PxPlus 2014 Only  
  
**?** (Question Mark) |  At the end of a character (or sub-pattern) or following a *, +, or {min,max} metacharacter |  Used at the end of a character (or sub-pattern) to indicate that it is optional  
  
** _Example:  
_**  
colou?r matches color or colour and sea(horse)? matches sea or seahorse.  
  
Used after a *, +, or {min,max} metacharacter to indicate that the preceding metacharacter should match the shortest match  
  
** _Example:  
_**  
l+? matches l but not ll in the string _hello world_.

#### **Note:  
'OM'=0** on PxPlus 2014 Only  
  
**|** (Vertical Bar) |  Separating two expressions |  To find a match for either of the two expressions  
  
** _Example:  
_**  
cat|dog matches cat or dog.  
c(at)|(dog) matches cat or dog.  
my ((cat)|(dog)) matches my cat or my dog.  
**\** (Backslash) |  Preceding a mask character |  To indicate that the character that follows is to be taken literally  
  
** _Example:  
_**  
To search for multiple asterisks, use **\\****.  
  
**ASCII Character Classes**  
---  
The following can be used anywhere in the pattern to match common types of characters:

#### **Note** :  
This only works for **'OM'=0** on PxPlus 2014.  
  
\a |  Alarm; that is, the BEL character (Hex 07)  
\cx |  "control-x", where x is any ASCII character  
\e |  Escape (Hex 1B)  
\f |  Form feed (Hex 0C)  
\n |  Linefeed (Hex 0A)  
\r |  Carriage return (Hex 0D)  
\t |  Tab (Hex 09)  
0dd |  Character with octal code 0dd  
\ddd |  Character with octal code ddd or back reference  
\o{ddd..} |  Character with octal code ddd  
\xhh |  Character with Hex code hh  
\x{hhh..} |  Character with Hex code hhh (Non-JavaScript Mode)  
\uhhhh |  Character with Hex code hhhh (JavaScript Mode Only)  
\d |  Any decimal digit  
\D |  Any character that is not a decimal digit  
\h |  Any horizontal white space character  
\H |  Any character that is not a horizontal white space character  
\s |  Any white space character  
\S |  Any character that is not a white space character  
\v |  Any vertical white space character  
\V |  Any character that is not a vertical white space character  
\w |  Any "word" character  
\W |  Any "non-word" character  
\b |  Matches at a word boundary  
\B |  Matches when not at a word boundary  
\A |  Matches at the start of the subject  
\Z |  Matches at the end of the subject; also matches before a new line at the end of the subject  
\z |  Matches only at the end of the subject  
\G |  Matches at the first matching position in the subject  
  
**ASCII Character Classes**  
---  
The following can be used as part of any string enclosed in square brackets to match common types of characters (i.e. [[:digit:]%] will match any digit or percent sign character):

#### **Note** :  
This only works for **'OM'=0** on PxPlus 2014.  
  
[:alnum:] |  Alphanumeric characters  
[:alpha:] |  Alphabetic characters  
[:ascii:] |  ASCII characters  
[:blank:] |  Space and tab  
[:cntrl:] |  Control characters  
[:digit:] |  Digits  
[:graph:] |  Visible characters (i.e. Anything except spaces, control characters, etc.)  
[:lower:] |  Lowercase letters  
[:print:] |  Visible characters and spaces (i.e. Anything except control characters, etc.)  
[:punct:] |  Punctuation and symbols  
[:space:] |  All white space characters, including line breaks  
[:upper:] |  Uppercase letters  
[:word:] |  Word characters (Letters, Numbers and Underscores)  
[:xdigit:] |  Hexadecimal digits  
  
**UTF-8 Character Classes**  
---  
The following can be used anywhere in the pattern to match common types of characters:

#### **Note** :  
This only works for **'OM'=0** on PxPlus 2014.  
  
\p{xx} |  A character with the xx property  
\P{xx} |  A character without the xx property  
\X |  A Unicode extended grapheme cluster  
  
**_Where_** xx can be:

|  **C** |  Other |  **No** |  Other number  
---|---|---|---|---  
|  **Cc** |  Control |  **P** |  Punctuation  
|  **Cf** |  Format |  **Pc** |  Connector punctuation  
|  **Cn** |  Unassigned |  **Pd** |  Dash punctuation  
|  **Co** |  Private use |  **Pe** |  Close punctuation  
|  **Cs** |  Surrogate |  **Pf** |  Final punctuation  
|  **L** |  Letter |  **Pi** |  Initial punctuation  
|  **Ll** |  Lowercase letter |  **Po** |  Other punctuation  
|  **Lm** |  Modifier letter |  **Ps** |  Open punctuation  
|  **Lo** |  Other letter |  **S** |  Symbol  
|  **Lt** |  Title case letter |  **Sc** |  Currency symbol  
|  **Lu** |  Uppercase letter |  **Sk** |  Modifier symbol  
|  **M** |  Mark |  **Sm** |  Mathematical symbol  
|  **Mc** |  Spacing mark |  **So** |  Other symbol  
|  **Me** |  Enclosing mark |  **Z** |  Separator  
|  **Mn** |  Non-spacing mark |  **Zl** |  Line separator  
|  **N** |  Number |  **Zp** |  Paragraph separator  
|  **Nd** |  Decimal number |  **Zs** |  Space separator  
|  **Nl** |  Letter number |  **** |   
  
## Format 2

Return the starting offset and length of a captured sub-pattern as specified by index from a previous _Format 1_ **MSK( )** function call or if the index is 0, then return the starting offset and length returned by the previous _Format 1_ **MSK( )** function. If there was no previous _Format 1_ **MSK(** **)** function call or the pattern did not include the specified sub-pattern, then this call will result in an Error #42: Subscript out of range/Invalid subscript.

If the **['OM'](../parameters/om.md)** parameter is not equal to 0, then this call will always return an Error #42: Subscript out of range/Invalid subscript if _index_ > 0.

Sub-patterns are parts of a mask/pattern string that are enclosed by parentheses (round brackets), which can be nested. Including a sub-pattern in a mask/pattern string does two things:

|  1. |  It defines the sub-pattern as a group where operators, such as **+** , will apply to the whole group instead of just the character that preceded it.  
---|---|---  
|  2. |  It allows _Format 2_ of the **MSK( )** function to return the portion of the matched mask/pattern string that matched the sub-pattern. Opening parentheses are counted from left to right (starting from 1) to obtain indexes for the captured sub-patterns. **_Example:_** For the string "the small fox" and the pattern "the ((small|large) (raccoon|fox))", the captured sub-patterns are 1: "small fox", 2: "small", 3: "fox".  
  
See **<http://manual.pvxplus.com/pcrepattern.html>**.

_(Format 2 was added in PxPlus 2014.)_

##  See Also

**[MSL Length of String Matching Last MSK](../variables/msl.md)**  
**[TCB( ) Return Task Information](tcb.md)**  
**['TL' LIKE Emulates Thoroughbred](../parameters/tl.md)**  
**['OM' Old Style Mask](../parameters/om.md)**  
**[Operators](../appendix/operators.md)**

## Example

Below is an example of using the **MSK(** **)** function and the **MSL** variable to do pattern and sub-pattern matching:

> ?prm('OM')  
>  0  
>  string$="the small fox"  
>  mask$="the ((small|large) (raccoon|fox))"  
>  ?msk(string$,mask$),msl  
>  1 13  
>  ?msk(0),msl  
>  1 13  
>  ?msk(1),msl  
>  5 9  
>  ?msk(2),msl  
>  5 5  
>  ?msk(3),msl  
>  11 3

Below is another example of using the **MSK(** **)** function to do a more complicated pattern search. In this example, we are matching any whole number in some text. We also use sub-patterns to get just the number from the match without white space:

> ?prm('OM')  
>  0  
>  string$="99 bottles of beer on the wall."  
>  mask$="(\A|\s)(\d+)(\s|\\.|\z)"  
>  ?msk(string$,mask$),msl  
>  1 3  
>  ?msk(2),msl  
>  1 2

#### **Note:**  
When the **['TL'](../parameters/tl.md)** system parameter (Thoroughbred **LIKE**) is **_Off_** , the **LIKE** operator uses the same pattern matching as specified by the **['OM'](../parameters/om.md)** parameter.

Thoroughbred is a registered trademark of Thoroughbred Software International Inc.
