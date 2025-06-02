# Introduction to Using PxPlus

**Punctuation/Syntax**|   
---|---  
  
The following punctuation symbols have fixed meaning in a PxPlus application:

**!** |  **Exclamation** |  PxPlus accepts an exclamation mark as a substitute for the [**REM**](../directives/rem.md) directive. **_Example:_** !this remark An exclamation mark as the leading character of a string also denotes one of Sage Software's embedded bitmaps; e.g. !STOP.  
---|---|---  
**"** |  **Quotes** |  Standard quotation marks enclose string literals. A leading quotation mark can also be used at the start of a statement as a substitute for the [**INVOKE**](../directives/invoke.md) directive. **_Example:  
  
_** "NOTEPAD is the same as INVOKE "NOTEPAD  
**$** |  **Dollar Sign** |  A dollar sign at the end of a variable name marks a string variable. **_Example:_** CUST$ Dollar signs can also enclose hexadecimal values. **_Example:_** $8A$  
**'** |  **Apostrophe** |  Single quotation marks (_apostrophes_) enclose system parameters and mnemonics; e.g. 'TL' and 'CS'. The [**Apostrophe Operator**](../appendix/apostrophe_operator.md) is used to indicate a control object property.  
**;** |  **Semi-colon** |  Directives and entry points are separated by semi-colons in program statements.  
***** |  **Asterisk** |  PxPlus includes a number of auxiliary applications. These utility names are preceded by an ***** (_asterisk_); e.g. *CMD, *UPB, and the***[ ]** search utility described below. An asterisk may have specific meaning in the syntax of some directives or functions; e.g. as a wildcard character to denote a _global_ occurrence.  
**%** |  **Percent Sign** |  A percent sign _before_ a variable name denotes a _global_ variable or function. **_Example:_** %DEPT A percent sign _following_ a variable name indicates that the variable is an _integer_. **_Example:_** DEPT% A variable name having _both_ leading **_and_** trailing percent signs denotes a global variable for integer values. **_Example:_** %DEPT%  
***[ ]** |  **Asterisk + Square Brackets** |  The **_search utility_** (for searching programs) is invoked by enclosing a search string within square brackets preceded by an ***** (_asterisk_). **_Example:_** ->*[print]  
0090 rem Printing  
0100 print day  
0120 print "Today's date is ",day  
0610 if len(X$)>100 then print "TOO LONG"; goto 0210  
->*[26]  
0110 setday "02/26/99" The search is not case sensitive.  
  
***[ ]=[ ]** Global **_search and replace_** can be used to make changes in programs. See **[Search and Replace](../PxPlus%20User%20Guide/Development%20Tools/Writing%20and%20Modifying%20Program%20Code/PxPlus%20Command%20Line%20Editing.htm#search)**. **_Example:_** *[CST$]=[CUST$] changes all instances of CST$ to CUST$. If square brackets are part of the search string, use curly braces **{ }** to enclose the search string. **_Example:_** {[26]}  
**-:  
  
->  
  
-}** |  **Prompts** |  When your PxPlus prompt is a dash with a colon, this indicates that your current program has not been saved.  
  
After you save your program, the prompt reverts to an arrow.  
  
Under WindX, the prompt is a dash and a right brace.  
**/_or_ \** |  **Slashes** |  PxPlus accepts either slash (forward or back) as a substitute for the [**LIST**](../directives/list.md) directive. **_Example:_** /30 is the same as LIST 30  
**xxxx:** |  **String-Trailing Colon** |  Use a trailing colon to denote that your string is a line label (statement reference or entry point). **_Example:_** 0110 if UPDATE$="Y" gosub CUSTOMER  
...  
2000 CUSTOMER:  
2010 input 'CS',@(5,5),"Enter customer number",CST  
2020 ! Rest of routine ...  
2200 return  
**?** |  **Question Mark** |  PxPlus accepts a leading question mark as a substitute for the [**PRINT**](../directives/print.md) directive. **_Example:_** ?CUST$ is the same as PRINT CUST$ PxPlus also places a question mark between a line number and program statement to denote a syntax error.  
**`** |  **Back Apostrophe** |  PxPlus accepts the back apostrophe as a substitute for the [**EDIT**](../directives/edit.md) directive.
