# Historical File Splitting  
  
**Split File Maintenance Utility**|   
---|---  
  
Two interfaces, one for **_Text Mode_** and the other for **_Graphical_** , are needed to provide the capability to convert a file into a _split_ file, add new splits, and set/reset _Read Only_ attributes.

The **Text Mode Split File Maintenance Utility** works on a series of keyword commands, followed optionally with parameters. The basic logic is similar to the **DBG** command that allows keywords to be abbreviated to their first letter.

To access the **Text Mode** interface, enter the command **SPLITFILE** from the Command line. Optionally, the **SPLITFILE** command can be followed by the pathname of the file to be split or whose split attributes are being maintained or the keyword GUI to invoke the graphical utility.

The following keywords (and their arguments) are supported:

**Keyword** |  **Description**  
---|---  
**OPEN**  _path_ |  This command opens the file in the specified _path_. The _path_ can be either a file to be split or a file that already has splitting enabled. If splitting is enabled, the system displays the current number of split segments and their pathnames.  
**ADD**  _path_ |  This command adds the file _path_ as a new segment split to the currently open file. If the file has not been split before, file will become the first segment and all existing data will be moved to this file.

#### **Note:**  
Technically, when doing the first split, the system actually just renames the original file to the name specified in the path and creates a new control file using the originally opened file name.  
  
**DROP**  _path_ | _index_ |  This command can be used to drop the specified _path_ or _index_ from the segment list. If you drop the only segment, the file is reverted back to a standard non-segmented file. You can provide either the _path_ of the segment to drop or its _index_.  
**TEST**  _name$(ofs,len)_ |  Define the field in the file that will be tested to determine which file is to be used when adding new records. If not set, new records go in the last added segment.  
**CONDITION**  _path_ | _index_  _val_ _, val,.._ |  This command sets the values of the condition field that will indicate where new records will be added. **_Example:_** TEST 1:2013 will indicate that segment 1 will be used if the value of the condition field contains "2013". Multiple values may be specified (comma separated) or a range by separating the lower and upper bounds with a _dash_.  
**LOCK**  _path_ | _index_ |  This command locks the segment specified by _path_ or _index_. Locked segments cannot have information written to them.  
**UNLOCK**  _path_ | _index_ |  This command unlocks the segment specified by _path_ or _index_. Unlocked segments can be updated. Only the primary segment can have records added or removed.  
**KEY**  _keyno_ A | D | N |  This command allows the user to specify whether the key specified is always _Ascending_ or _Descending_ between segments. The system uses this information to help optimize some of the internal accesses.  
**GUI** |  Run the graphical maintenance utility.  
**HELP** |  Displays a list of valid commands and their function.  
**QUIT** |  Exits the utility.  
  
To access the **Graphical Split File Maintenance Utility** interface, use one of the following methods:

**Location** |  **Method**  
---|---  
From the **[PxPlus IDE Main Launcher](../PxPlus%20IDE/IDE%20Main%20Launcher.md)** |  Expand the _Data Management_ category and select _Historical File Splitting_.  
From **[Data Dictionary Maintenance](../Data%20Dictionary/Data%20Dictionary%20Maintenance/Overview.md)** |  Select an existing table name and click the _File Splitting_ toolbar button.  
  
The following interface is displayed:

> This interface consists of the following:

_Path_ |  Entering the pathname for the file displays all the existing **Segments** and their respective information, as well as the **Keys** structure.  
---|---  
_Add New_ |  To _add_ a new segment, click the _Add New_ button. An **OPEN FILE** dialog is displayed, where you can enter or select the segment pathname. If the file does not exist, the system displays a prompt to confirm the creation of the file.  
_Lock_ |  To _lock_ a segment, first select the segment to highlight it, and then click the _Lock_ button. If the segment selected is already locked, the button changes to _Unlock,_ allowing the user to remove the segment lock.  
_Delete_ |  To _delete_ a segment, first select the segment from the segment list to highlight it, and then click the _Delete_ button.  
_Clear_ |  **_(Available when a valid Path is entered)_** Clears all fields and leaves the utility open. _(The Clear button was added in PxPlus 2017.)_  
_Exit_ |  Closes the utility.  
  
For each key on the file, you can change the sort order between each segment. If a key always ascends from the top file segment in the grid down to the bottom file segment, you can set the _Order_ to _Ascending_ (or _Descending_ , if the value always descends). By default, the _Order_ is set to _None_ , which indicates that the key order between the file segments is random (providing that the key order, when one exists, can speed up processing and key retrieval).
