# Directives

**EDIT** |  **_Edit Line in Program_**  
---|---  
  
##  Formats

1. |  _Edit:_ |  **EDIT** _stmtref_ __{**D[**_string_**]** | **C[**_string_**]** | **R[**_string_**]** | **[**_string_**]**}  
---|---|---  
2. |  _Edit Using Back Apostrophe:_ |  **`**_stmtref_ __{**D[**_string_**]** | **C[**_string_**]** | **R[**_string_**]** | **[**_string_**]**}  
  
#### **Note:**  
The square brackets above are part of the statement's syntax.

**_Where:_**

**`** |  _Back Apostrophe._ PxPlus accepts this as a substitute for typing EDIT.  
---|---  
**[**_string_**]** |  _Add.****_ String literal to add to the statement.  
**C[**_string_**]** |  _Copy.___ String literal contains the final character(s) of string to be copied.  
**D[**_string_**]** |  _Delete.****_ String literal contains the final character(s) of the string to be deleted.  
**R[**_string_**]** |  _Replace.****_ String literal is the new text to replace the existing string.  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
#### **Note:**  
The **EDIT** directive is used in Command mode.

##  Description

Use the **EDIT** directive to change an existing statement in a program. PxPlus builds a new statement based on the commands you use in the **EDIT** directive. The new statement then replaces the existing one, unless you change the line number. (In the latter case, the original statement remains in the program at the original line number, and the new or resultant statement is added to the program at the new line number.) If you do not include parameters following the statement reference, PxPlus displays the specified line so that you can edit it directly using the keyboard.

Four options are available in the **EDIT** directive:

**_Delete text from statement_** |  Use the **D** option to scan along the original statement up to and including the given string without copying the data to the new statement. The result omits the deleted portion of the string from the new statement.  
---|---  
**_Copy text from current statement to the new statement_** |  Use the **C** option to scan along the original statement from the cursor up to and including the given string, copying the data to the new statement.  
**_Replace text from current line in the new statement_** |  Use the **R** option to append the given string to the new statement while advancing over the corresponding number of characters in the original statement.  
**_Add text to the new statement_** |  This option adds the given string to the new statement.  
  
After all options have been processed, any remaining portion of the original statement is appended to the new statement.

##  Example

0200 let A=4*M; print "ANSWER =",A  
edit 200 C[=] D[*] C[A] R[nswer] [ now]  
  
After **EDIT** :  
  
0200 let A=M; print "Answer now =",A
