# File Maintenance Generator

**Step 5: File Maintenance Key Settings**|   
---|---  
  
Information about the file, such as the primary Key field(s), required fields, etc., is determined from the embedded data dictionary record on the file at run time.

The options in this step allow you to define either a record query or a fixed key segment if the primary Key has more than a single segment. If defining a record query, a record query button will be added beside the first segment of the key. If defining a fixed key segment and the first segment of the key contains a fixed value that does not change, then that field can be preloaded, and the field disabled or hidden at run time.

If the primary Key has a single segment, the options on this panel will not apply and will be disabled since the record query and fixed key segment are **_not_** applicable to a key with only one segment.

If the primary Key has a single segment and a default value is assigned to the segment in the data dictionary, the value will not be applied when the panel is generated. In addition, if the primary Key has more than a single segment, a default value assigned to the **_last_** key segment will not be applied.

#### **Note:**  
If editing a primary Key field in NOMADS after generating a file maintenance panel, any tag value entered should be preceded with "TAG=" (case insensitive).  
  
_(The use of "TAG=" was added in PxPlus 2021.)_

  
**_Primary Key Field (single segment)_** |    
**_Primary Key Field (multi-segments)_**  
---|---  
  
This panel consists of the following:

**Primary Key Field(s)** |  _The primary Key field(s) identifies each record in the file._  
---|---  
|  **_(Display Only)_** Primary Key field(s) for the data dictionary table selected in **[Step 1: Definition](Object%20Definition.md)**.

#### **Note:**  
For single-segment keys, the remainder of the options on this panel do not apply and are disabled.  
  
**Record Query** |  _The Record Query applies only to files that have a multi-segment key. When defined, a record query button displays beside the first key segment on the panel._ _If the_ **[Lock First Segment](Key%20Settings.htm#lockfirstseg)** _check box is selected, the Record Query fields will be disabled, and the record query button will not display._ _(The Record Query was added in PxPlus 2023 Update 1.)_  
_Library_ |  Enter the path to the library containing the query definition. The drop-down arrow invokes a list of recently used libraries. The Browse button allows you to browse the directory to find the library.  
_Panel_ |  Name of the query definition to invoke. The drop-down list contains all panels in the library. If the query has not yet been defined, enter a new name and click the Define Query button to create it. The [**Return Prime Key Value in Hex**](../Query%20Subsystem/Query%20Header.htm#returnvaluehead) check box in **Query Header Definition** (on the **Options** tab) **_must_** also be selected.

#### **Note:**  
When entering a new name, valid characters are: letters (A-Z, a-z); numbers (0-9); **~**  _(tilde)_ ; **@**  _(at symbol)_ ; **.**  _(period)_ ; **$**  _(dollar sign)_ ; **_**  _(underscore)_ ; **-**  _(dash)_ ; **+**  _(plus sign)_. If an invalid character is used, a message will display.  
  
_(Define Query)_ |  Button (beside the _Panel_ drop box) that launches **[Query Definition](../Query%20Subsystem/Query%20Definition.md)** (for Standard Query) or **[Query List Definition](../../Smart%20Controls/Defining%20Smart%20Controls.htm#Mark4)** (for Query List) using the _Panel_ name to either create a new or edit an existing query definition. If creating a new query definition, a prompt displays for selecting a **[Query Type](../Query%20Subsystem/Defining%20a%20Query.htm#type)**.  
_Bitmap_ |  **_(Applicable for NOMADS Panels Only)_** Bitmap to display on the query button. Click the Bitmap Library lookup button to invoke the Bitmaps dialog.  
_HTML Symbol_ |  **_(Applicable for HTML Pages Only)_** A symbol that will be displayed on the query button on the Webster+ HTML page. It can be either a Font Awesome symbol or a standard PxPlus bitmap selected from the Bitmap Library lookup button. For a list of Font Awesome symbols, visit <https://fontawesome.com/v4/icons/>.

#### **Note:**  
When specifying the Font Awesome symbol name, do not include the leading 'fa-'.  
  
**Fixed Key Segment** |  _Fixed Key Segment applies only to files that have a fixed value, which makes up the first segment of the key._  
_Lock First Segment_ |  **_(Not Applicable for Single Segment Keys)_** If the primary Key has more than a single segment defined, selecting this check box allows the first key segment to be locked to contain a fixed value that does not change. If selected, a value for the fixed key segment **_must_** be entered in the _Value to Pre-load_ field.  
_Behavior_ |  **_(Available when Lock First Segment check box is selected)_** Select to _Disable_ or _Hide_ the locked segment at run time.  
_Value to Pre-load_ |  **_(Available when Lock First Segment check box is selected)_** Sets a value to preload, which can be defined as a _Fixed_ value or an _Expression_.  
**Cross Reference Key Field** |  _This option is applicable if a unique, single segment key is to be maintained automatically. If a cross reference key is used, this data is stored in the Tag Field property of the control corresponding to the first key segment._  
_Field that Contains 'Reference Key'_ |  Click the drop-down arrow to select the field that contains the unique identifier generated by the system to cross-reference with the primary Key field.  
  
## See Also

**[File Maintenance Generator Steps](Fmgen%20Introduction.htm#steps)**
