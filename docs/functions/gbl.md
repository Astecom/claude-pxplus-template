# System Functions

**GBL( )** |  **_Reference Global String Variable_**  
---|---  
  
##  Formats

1. |  _Get/Maintain Entries:_ |  **GBL(**_string_name_ _$_[,_contents$_][,**ERR=**_stmtref_]**)**  
---|---|---  
2. |  _Delete/List Single Value:_ |  **GBL(**{**DELETE** | **LIST**}_string_name_ _$_[,**ERR=**_stmtref_]**)**  
3. |  _Delete/List All Up to Value:_ |  **GBL(**{**DELETE** | **LIST**} **TO** _string_name_ _$_[,**ERR=**_stmtref_]**)**  
4. |  _[Delete/List Table](gbl.htm#Mark11):_ |  **GBL(**{**DELETE** | **LIST**}*[,**ERR=**_stmtref_]**)**  
  
**_Where:_**

***** |  _(Asterisk)_ Indicates **_all_** global string table entries.  
---|---  
_contents$_ |  Value to assign to the global string. Optional. String expression.  
_stmtref_ |  Program line number or statement label to which to transfer control.  
_string_name_ _$_ |  Name of the global string in the internal table. String expression.  
  
##  Returns

Values in internal table of strings.

#### **Note:**  
This function is primarily provided for compatibility with other languages and has been made virtually obsolete by global variables - a much more efficient way to handle common data elements (string, numeric, arrays, etc.).

##  Description

The **GBL( )** function returns and maintains the values in an internal table of string definitions.

##  Format 1

**_Get/Maintain Entries_**  
  
**GBL(**_string_name_ _$_[,_contents$_][,**ERR=**_stmtref_]**)**

Use this format to set or obtain the current value of the global string variable whose name you specify. If you include a _contents_ value (optional), it will be placed into the global string variable.

##  Format 2

**_Delete/List Single Value_**  
  
**GBL(**{**DELETE** | **LIST**}_string_name_ _$_[,**ERR=**_stmtref_]**)**

Use the **GBL(DELETE ...)** format to delete an individual global string from the table.

Use the **GBL(LIST ...)** format to have the function return an individual string.

##  Format 3

**_Delete/List All Up to Value_**  
  
**GBL(**{**DELETE** | **LIST**} **TO** _string_name_ _$_[,**ERR=**_stmtref_]**)**

Use the **GBL(DELETE TO ...)** format to delete items up **TO** an individual global string from the table.

Use the **GBL(LIST TO ...)** format to have the function return a list of global string names up **TO** an individual item ($00$ separated).

##  Format 4

**_Delete/List Table_**  
  
**GBL(**{**DELETE** | **LIST**}*[,**ERR=**_stmtref_]**)**

Use the **GBL(DELETE *)** format to remove all entries from the table.

The **GBL(LIST *)** format returns the names of all strings in the table ($00$ separated).
