# File Handling

**Historical File Splitting**|   
---|---  
  
Users require the capability to store, access and maintain increasingly larger amounts of current and historical data within their applications. With that comes the need to keep the amount of time it takes to backup, as well as recover, these data files to a minimum so that daily business operations are impacted as little as possible.

To address this need, PxPlus provides a process that can automatically split larger data files into multiple independent files, some of which can be designated as _read only_. From the application's perspective, the program continues to open a single file while, behind the scenes, multiple files are being opened.

_(The historical file splitting process was added in PxPlus 2014.)_

The developer controls the number and names of all the files to be opened. The files are seen by the application as a single file, with the internal logic returning what appears to be a single set of data. One file is designated as the _active_ data file that stores all the new records. The other files can be designated either as _updatable_(the contents can be changed but no new records are added or removed) or as _read only_. A file that is marked as _read only can be backed up on permanent storage and excluded from the daily backup process_. Only the _active_ data file and other files marked as _updatable_ require regular backup.

Using this method allows files to be split either by size or by time period. For example, the _active_ file could represent the current year, with an _updatable_ file for the prior year and _read only_ files for all years before that. The result is that from the application's perspective, this appears as one large data file with multiple years' worth of data. The programs would only be allowed to add records to the current year, update the last year's records and read prior historical data.

In the event that file recovery is required, then only the files that allow updating would need to be recovered and/or rebuilt. The _read only_ historical files would simply need to be restored (assuming that the file system was lost or damaged).

This process of splitting the files is performed by means of an OOP-embedded IO procedure that intercepts all file IO directives and passes them to the appropriate files. The creation of a new control file includes the definition of the embedded IO module and has the same file characteristics as the individual data files. When the control file is opened, the embedded IO program, in turn, opens all the associated data files.

The control file's internal data dictionary contains additional entries that defines the names of the associated files, their status (active, updatable or locked), and key information used to optimize access to the files.

When doing a WRITE/INSERT with a key that does not yet exist, the file splitting rules will be checked to determine to which file the new record will be written.

When doing a WRITE/UPDATE with a key that does exist, the record will be modified in place and will not be re-sorted based on the file splitting rules. If you want the record to be sorted, you can first remove the record and then write it back.

#### **Note:  
** This implementation does not support access by RNO or IND due to the fact that these replicate between each file.

## See Also

|  **[Maintenance Methods](Maintenance%20Methods.md)** |  Lists the maintenance methods used with this utility  
---|---|---  
|  **[Embedded IO Methods](Embedded%20IO%20Methods.md)** |  Lists the embedded IO methods used with this utility  
|  **[Split File Maintenance Utility](Split%20File%20Maintenance%20Utility.md)** |  Describes the text mode and graphical interfaces used to access this utility  
  
## File Control Structure

The following fields have been added to the existing file control structure (f_def.h) in PxPlus:

**Field** |  **Description** |  **Format**  
---|---|---  
_fioMethods_ |  Bit mask for the methods that have been verified to exist in the object |  Long (32 bits)  
_fioObjID_ |  Internal object handle that handled embedded IO for the file |  Long  
  
The existing Exec_do_fio function (_pvxsub.c_), which is currently called to PERFORM embedded IO functions, has been modified to detect the existence of "obj=" as the first four characters of the embedded IO program name (_fioPath_). If present on an OPEN request, it will create an instance of the object and set it up for automatic removal when the file is closed. On all other requests, it passes control to the method of the same name as the existing PERFORM entry point names.

On the first call to each method, the logic scans to see if the method exists. If it does not exist, it uses the existing logic to skip the call; otherwise, it marks the method as present and invokes it.

#### **Note:  
** The methods **_must_** be declared as numeric methods (no trailing $) even though any value they plan on returning will be a string.

## Embedded IO Object (*obj/multifile.pvc)

This object handles the embedded IO calls to the primary logical file and forwards them as needed to the individual files. In addition, it contains file maintenance functions that are used to maintain the special data dictionary records for the primary file.

The data dictionary of the control file contains the following:

● Name of the associated files

● List of Read Only/Input files

● Definition of the field to test when adding records to determine which segment to use

● Definition of the test values for each segment

● List of keys and the following key attributes:

> \- Unique key indicator requiring the same key value to not occur in any other file  
>  \- Indicator that determines whether the keys are ascending/descending between files or if the key order is not file dependent  
>  (For example, keys based on date added would be ascending between files, whereas keys based on other data such as product code would not be.)
