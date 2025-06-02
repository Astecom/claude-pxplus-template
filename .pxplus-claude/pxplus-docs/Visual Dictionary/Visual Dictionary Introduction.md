# Utility Programs

**Visual Dictionary** ™**Utility**|   
---|---  
  
The **Visual Dictionary** ™ utility provides a simple means by which a data dictionary can be defined for a data file. In addition to making it easier to define the data dictionary for existing files, it can be used to maintain basic data dictionary information for any file.

When a file is opened by the Visual Dictionary™, a grid is presented with the first 25 records of the file based on what it can determine as the data dictionary layout for the file. While the actual contents of the file cannot be changed, you can change each field's name, format and description. Once changed, the new dictionary can then be written to the file and optionally loaded into the system's data dictionary.

The **Visual Dictionary** ™ utility is accessed by using one of the following methods:

**Location** |  **Method**  
---|---  
From the **[PxPlus IDE Main Launcher](../PxPlus%20IDE/IDE%20Main%20Launcher.md)** |  Expand the _Data Management_ category and select _Visual Dictionary._  
From the PxPlus Command window |  Select _Utilities > Visual Dictionary_™ from the menu.  
From the PxPlus Command line |  Enter: **Run "*PLUS/UTIL/DICTDEF"**  
  
With each of these methods, a data file browse window is launched for selecting or manually entering the pathname of the data file to use with Visual Dictionary™. The file must be a PxPlus keyed file (VLR or EFF) and should ideally contain data to allow the utility to perform an initial analysis of the fields.

When the file is selected, the utility will either present the existing dictionary layout or attempt to determine the layout by reading the first 100 records in the file to verify the number of fields, the field sizes and field type (numeric or string). This information is presented in a grid format, as pictured below. From the selected file, the grid displays the fields, the characteristics of each field and the first 25 records. A light yellow row with a ruler displays immediately above the first record. This ruler is used to determine the column positions within each field. To view all the information in the grid, use the horizontal and vertical scrollbars or enlarge the entire window by dragging the bottom right corner of the window border.

> The top line of the grid contains the field number in the record (and optionally the offset within the field) for each column. If the width of a column is too narrow to view the data properly, you can adjust the width. Position the mouse pointer over the column's left or right border in the top line of the grid, and when it changes to a double-headed arrow, click/drag the mouse to the desired size.

If the file has an External Key, it will be identified as _ExtKey_ in the top line of the grid. The External Key needs to be defined, and how it is defined depends on whether it is associated to an existing field within the data record or is an independent field. For information on defining external keys, see **[External Key Handling](External%20Key%20Handling.md)**.

If the utility has generated "dummy" names for the fields, you will want to modify these to something more meaningful. These names represent the variable names that will be used in the programs when referencing the data. For information on entering a new name or changing an existing name, see **[Changing a Field Name](Changing%20Field%20Details.htm#change_name)**.

## Menu Options

The _File_ menu presents the following options:

**File** |   
---|---  
_Open File_ |  Invokes the data file browse window for selecting or manually entering the pathname of a file to open.  
_Save definition_ |  Updates the file's internal dictionary. See **[Saving the Dictionary](Saving%20the%20Dictionary.md)**.  
_Starting key_ |  Invokes the **Starting Key Value** window for entering the key value of the record from which the displayed list of records will start. See **[Setting the Start Key for Viewing Data](Setting%20Start%20Key%20for%20View.md)**.  
_Load Next 25_ |  Displays the next 25 records in the grid.  
_Update System Dictionary_ |  Saves the file definition to the system's data dictionary files, _providex.dde_ and _providex.ddf_. See **[Updating the System Data Dictionary](Saving%20the%20Dictionary.htm#updating)**.  
_Exit_ |  Closes the utility.  
  
## Common Tasks

The following links provide additional information for performing a number of common tasks with the Visual Dictionary™:

|  **[Defining a Logical Table Name](Defining%20a%20Logical%20Table%20Name.md)**  
---|---  
|  **[Changing Field Details](Changing%20Field%20Details.md)**  
|  **[External Key Handling](External%20Key%20Handling.md)**  
|  **[Copying Field Definitions](Copying%20Field%20Definitions.md)**  
|  **[Splitting a Field into Logical Parts](Splitting%20a%20Field%20into%20Logical%20Parts.md)**  
|  **[Merging Two Logical Fields](Merging%20Two%20Logical%20Fields.md)**  
|  **[Adding and Deleting Fields](Adding%20and%20Deleting%20Fields.md)**  
|  **[Saving the Dictionary](Saving%20the%20Dictionary.md)**  
  
The following information relates to changing the view of the data:

|  **[Selecting the Key to Use for Viewing Data](Selecting%20the%20Key%20to%20Use.md)**  
---|---  
|  **[Setting the Start Key for Viewing Data](Setting%20Start%20Key%20for%20View.md)**  
|  **[Viewing the Field Contents in Hex](Viewing%20Field%20Contents%20in%20Hex.md)**
