# Data Dictionary Maintenance 

**Defining Keys** |  **__**  
---|---  
  
A _key_ is a string of characters that are used to identify the records in a file. Define the **_Primary_** and **_Alternate_** keys for the physical file by clicking the _Define Keys_ button on the **Data Dictionary Maintenance** tool bar or by selecting _File > Define Keys_ from the menu bar.

**_Primary Key_**

If a primary key has not yet been defined, clicking the _Define Keys_ button will display a message, asking to define it. Respond _Yes_ to invoke the **[Key Definition](Defining%20Keys.htm#keydef)** window, which is used to select the data fields and the sort order that will make up the primary key. Key segments can be composed of one or more strings or sub-strings.

If the key is external, select the _External_ check box option; otherwise, the key will be considered internal. An external key can be made up of segments and can include a mixture of external-only and duplicated elements. The _Unique_ check box option is selected by default.

> **_Alternate Keys_**

Once a primary key is defined, you will be able to include up to 15 alternate keys with a total of 96 segments (FLR/VLR). EFF files can have a maximum of 255 keys and 255 segments per key.

##  Key Definition

Keys that have been defined are displayed in the **Key Definition** list when the _Define Keys_ option is selected on the tool bar or from the **File** menu.

> This window consists of the following:

_New Key_ |  Invokes the **[Key Definition](Defining%20Keys.htm#keydef_wdw)** window for defining a new key.  
---|---  
_Modify_ |  To modify an existing key, select the key from the list and then click the _Modify_ button, which invokes the **[Key Definition](Defining%20Keys.htm#keydef_wdw)** window for the selected key.  
_Delete_ |  To remove an existing key, select the key from the list and then click the _Delete_ button. Prior to deletion, a message will display.

#### **Note:**  
Deleting a key will affect alternate keys with higher key number values, as their key numbers will be reduced by one. This will result in possible code changes where alternate keys are referenced using the **KNO=** clause.  
  
In addition, if the key being deleted is an external key, the replacement key will also remain external, and any fields that are defined as "external only" will become redundant.

_(The Delete button was added in PxPlus 2021.)_  
_Move Up  
Move Down_ |  To change the order of alternate keys, use the Move Up/Down buttons to move the selected key up or down within the **Key Definition** list.

#### **Note:**  
The primary key will always be the first entry in the list and cannot be moved.  
  
Changing the order of the alternate keys will change the key numbers. This will result in possible code changes where alternate keys are referenced using the **KNO=** clause.

_(The Move Up/Down buttons were added in PxPlus 2023.)_  
  
The **Key Definition** window identifies the new or selected key in the title bar, either as a _Primary Key_ or as an _Alternate Key_ (displaying the Key **#**  _number_ /KNO).

> This window consists of the following:

**Data Fields** |  Lists the defined **[Data Elements](Overview.htm#elementstab)** for the selected file. You can select these to construct the key.  
---|---  
**Key Segments** |  Lists of all the data elements that currently make up the key.  
_Ascending_ |  Button used to insert the selected element from the **Data Fields** list into the **Key Segments** list. Sort order for this portion of the key is _ascending_.  
_Descending_ |  Button used to insert the selected element from the **Data Fields** list into the **Key Segments** list. Sort order for this portion of the key is _descending_.  
_Binary Increment_ |  Button used to define binary auto increment for the key, record-based, by the _Record Offset_ (base 1) and _Length_ (1, 2 or 4 bytes). Segments may be designated as swapped (same as **SWP(** **)** type 7, Intel x86 type swapping only).  
_Remove_ |  Button used to remove the selected segment from the key definition.  
**Key Options** |  |  _External_ |  Select this option if the _primary key_ is external. External keys are unique by default. They cannot have auto-increment segments or segments consisting of partial fields with offsets greater than one.

#### **Note:**  
Descending sequence is **_not_** supported. Segment options are **_not_** supported.  
  
---|---  
_Unique_ |  Must be unique.  
_Null Key  
Null Character_ |  If all characters of the key match the null character, the key is not added to the key tree. The _Null Character_ is represented by the ASCII hexadecimal value.  
_Partial Field_ |  Defines a portion of a data field (sub-string options). A separate window displays with the following options: |  _Field Offset_ |  Indicates where the sub-string begins (first position offset = 1).

#### **Note:**  
External keys do **_not_** support offsets greater than one.  
  
---|---  
_Field Length_ |  Number of characters in the sub-string. If _Field Length_ = 0 (zero), the data element is read from the offset value, and all remaining characters in the data element will be used as the key segment.

#### **Note:**  
The maximum key field length, including the field offset value, is 3839.  
  
_Segment Options_ |  Sets different segment options for the selected segment. A separate window displays with the following options: |  _Auto Increment_ |  Zero-filled, right-justified ASCII numeric (e.g. "0001") or space-filled, right-justified ASCII numeric (e.g. " 1"). This is for sequential numbering of records in the order that they are inserted.  
---|---  
_Byte Swapped_ |  Designates segments as swapped, which is the same as **SWP( )**  _type 7_ (Intel x86 type swapping only).  
_Case Sensitivity_ |  Allows key segments to be stored in uppercase or lowercase.  
_Null Segment/Character_ |  Definition attribute for any segment. If all characters of a segment match the null character, the key is not added to the key tree. Character is represented by ASCII hexadecimal value.  
_Translate_ |  Force automatic accent translation for individual key segments (i.e. to translate accented/extended characters to their non-accented counterparts). Useful when sorting multilingual characters into a single unified sort sequence.  
_Signed Integer_ |  Key segment stored as a signed binary integer.  
  
#### **Note:**  
External keys do **_not_** support segment options.  
  
_Key Name_ |  Used for entering a valid key name.  
_OK_ |  Saves any changes and exits the **Key Definition** window, returning to the **Key Definition** list. If a new key was defined, it will be added to the bottom of the list.  
_Cancel_ |  Closes the **Key Definition** window without saving any changes.
