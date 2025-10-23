# System Functions  
  
**OBJ( )** |  **_Return Object Information_**  
---|---  
  
##  Formats

1. |  _Return Control Information_: |  **OBJ(**_ctl_id_ __**[** ,**ERR=**_stmtref_**] )**  
---|---|---  
2. |  _Return Object List_: |  **OBJ(LIST)** (added in PxPlus v9.00)  
  
**_Where:_**

_ctl_id_ |  Control ID number that is assigned to each control when created. Numeric expression. If 0 (zero), information about the current window is returned.  
---|---  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Format 1

**_Return Control Information_**

**OBJ(**_ctl_id_ __**[** ,**ERR=**_stmtref_**] )**

This format returns a string containing information about a given custom control object (i.e. button, list_box, etc.). If the control does not exist, the system returns an Error #65: Window element does not exist or already exists.

**_Example:_**

This example shows what is returned for an existing list_box 10. The string returned by the **OBJ( )** function contains 64 characters:

> list_box 10,@(10,10,60,10),fmt="L8 B2 L20 C10 N15 C3"  
>  ?hta(obj(10))  
>   
>  00040000000A000A003C000A0000000000000978004E00CE01E40092004F009501E2009000000000  
>  000000000000000000000000000000000000000000000000

**Characters** |  **Information Returned by OBJ( )**  
---|---  
1,2 |  These bytes indicate the type of control: |  **Hex Value** |  **Type of Control**  
---|---  
$0001$ |  Push Button  
$0002$ |  Check Box  
$0003$ |  Tri_State Check Box  
$0004$ |  Standard List Box  
$0005$ |  Variable List Box  
$0006$ |  Drop Box  
$0007$ |  Variable Drop Box  
$0008$ |  Multi-line Edit Box  
$0009$ |  Radio Buttons  
$000A$ |  External VBX  
$000B$ |  List View  
$000C$ |  Tree View  
$000D$ |  Grid  
$0010$ |  Vertical Scroll Bar  
$0020$ |  Horizontal Scroll Bar  
3,2 |  These bytes indicate the current status of the control. The value in the two bytes is an accumulation of bits indicating the various states: |  **Hex Value** |  **Additive Bit States**  
---|---  
$0001$ |  Drop Box open  
$0002$ |  Control changed: issue CTL on closure  
$0004$ |  Control has focus  
$0008$ |  Control is dropped  
$0010$ |  Insert mode for typing  
$0020$ |  Temporary font in effect  
$0040$ |  Ignore format  
$0080$ |  Temporarily non-paint  
$0100$ |  Notification pending "signal" button  
$0200$ |  Focus changed due to signal  
$0400$ |  Hide until input  
$0800$ |  Button is down  
$1000$ |  Focus interrupt is deferred  
$2000$ |  Input must have implied decimal point  
$8000$ |  Disabled object  
  
**_Example:_**

To detect enabled/disabled NOMADS control:

X$=obj(OBJECT_NAME.CTL)  
if and(X$(3,2),$8000$)=$8000$ \  
then print "Object is disabled"  
  
5,2 |  Column  
7,2 |  Line  
9,2 |  Width  
11,2 |  Height  
13,4 |  Visual screen attributes at time of creation  
17,4 |  Operating system handle  
21,2 |  Left Pixel }Includes Border  
23,2 |  Top Pixel }Includes Border  
25,2 |  Right Pixel }Includes Border  
27,2 |  Bottom Pixel }Includes Border  
29,2 |  Left Viewable Column  
31,2 |  Top Viewable Row  
33,2 |  Viewable number of Columns  
35,2 |  Viewable number of Rows  
  
##  Format 2

**_Return Object List_**

**OBJ(LIST)**

This format is used to return a string that describes all the objects defined within the system. For each object in the system, the function returns a string consisting of:

  * Object number for the object
  * Reference count (number of references to the object)
  * Class name from the DEF CLASS definition
  * Pathname to program file that defined contained the class definition



Each of these fields is delimited by a TAB ($09$) character, and each object's definition is terminated by the current separator character.

_(The ability to get a list of objects was added in PxPlus v9.00, build 9200.)_
