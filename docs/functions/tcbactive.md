# System Functions  
  
**TCB(FILE | OBJECT | WINDOW | CONTROL)** |  **_Return Active Elements_**  
---|---  
  
##  Format

1\. _Return Open (and Accessible) Files_: |  **TCB(FILE** _index_[,**ERR=**_stmtref_]**)**  
---|---  
2\. _Return Existing Objects_: |  **TCB(OBJECT** _index_[,**ERR=**_stmtref_]**)**  
3\. _Return Open Windows_: |  **TCB(WINDOW**  _index_ [::_name_] [,**ERR=**_stmtref_]**)**  
4\. _Return Existing Controls_: |  **TCB(CONTROL** _index_[,**ERR=**_stmtref_]**)**  
  
**_Where:_**

_index_ |  A numeric value containing either 0 (to retrieve the count of elements) or the index of the desired element.  
---|---  
_stmtref_ |  Program line number or statement label to which to transfer control.  
::_name_ |  Can be any of the following window attributes for which information is to be retrieved: |  **::_name_** |  **Return Value**  
---|---  
::Columns |  Number of columns wide.  
::Lines |  Number of lines high.  
::CurrentColumn |  Current column.  
::CurrentLine |  Current line.  
::AbsColumn |  Column window was created at (**_not current if moved_**).  
::AbsLine |  Line window was created at.  
::ScrollColumn |  Scroll region column.  
::ScrollLine |  Scroll region line.  
::ScrollColumns |  Scroll region number of columns.  
::ScrollLines |  Scroll region number of lines.  
::LeftColumn |  Leftmost column displayed on screen.  
::TopLine |  Top line displayed on screen.  
::ViewableColumns |  Number of visible columns.  
::ViewableLines |  Number of visible lines.  
::IsDialogue |  Returns 1 if a Dialogue window; else 0.  
  
_(The ::name option was added in PxPlus 2021.)_

##  Description

The **TCB(FILE | OBJECT | WINDOW | CONTROL** _index_**)** function is designed to allow the programmer an easy method to determine which elements are currently in existence/active in the system.

In all cases when using this function, if the value in _index_ is zero, the function will return the number of currently active elements. For example, **TCB(OBJECT 0)** will return the total number of objects currently active in the system.

If the value of _index_ is non-zero, it is considered the relative number of the specified element. For example, **TCB(WINDOW 2**) will return the window number of the second relative window (the window directly behind the current one).

If the value of _index_ is < zero or greater than the number of elements, an Error #41: Invalid integer encountered will be generated and an error exception will occur.

Using this function with the ::_name_ option provides the ability to access a number of window attributes.

_(The TCB(FILE | OBJECT | WINDOW | CONTROL index) function was added in PxPlus v7.00.)_

## Format 1

**_Return Open/Accessible Files_**

**TCB(FILE** _index_ [,**ERR=**_stmtref_]**)**

This function will return the count and channel number for open and currently accessible files. Files that are opened exclusively by objects and thus may not be accessible are **_not_** included.

If this function is invoked from within an object that does have access to the file, it will be included in the count. The return value for a non-zero index will be the file channel number. **TCB(** **FILE 1)** will always return zero.

##  Format 2

**_Return Objects Handles_**

**TCB(OBJECT** _index_[,**ERR=**_stmtref_]**)**

This function will return the count and handle numbers for the PxPlus objects that currently exist in the system. The return value for a non-zero index will be the object number (handle).

##  Format 3

**_Return Open Windows_**

**TCB(WINDOW**  _index_ [::_name_] [,**ERR=**_stmtref_]**)**

This function will return the count and window numbers for all the windows currently in existence. The values returned will reflect the display order of the windows; thus, **TCB(WINDOW 1)** will return the current window number. The return value for a non-zero index will be the window number.

When used with the ::_name_ option, the index **_must_** be a variable, **_not_** a literal window number or expression. This function provides the ability to access information for the **[Window Attributes](tcbactive.htm#Mark2)** in the table above.

**_Example:_**

This example uses the ::Columns option to return the width of the current window:

> X = TCB(WINDOW 1)  
>  TCB(WINDOW X::Columns)

_(The ::name option was added in PxPlus 2021.)_

## Format 4

**_Return Control Handles_**

**TCB(CONTROL** _index_[,**ERR=**_stmtref_]**)**

This function will return the count and CTL value associated with all the controls currently in use. This will include all controls in the current window (whether hidden or disabled) and controls in any concurrent windows. Global controls are **_not_** accessible.

The return value for a non-zero index will be the CTL value associated with the control.

#### **Note:**  
When using the **TCB(CONTROL** _index_**)** function under **_WindX_** , the system will have to send the request to the workstation in order to get the value. This can result in performance problems when used repeatedly. The suggestion is that if you want to access the list of active controls, you should use the **FIN (0, "CTLLIST")** function, which will return a comma-separated list of CTL numbers.
