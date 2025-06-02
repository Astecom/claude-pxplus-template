# File Handling

**Data Files** |  **__**  
---|---  
  
When processing large volumes of data, it becomes necessary to place output into a separate storage area called a _data file._ This generally involves the use of various program instructions for creating the file, opening the file, writing to or reading from the file, and closing the file. Each data file contains a collection of data organized in a specific format and for a specific purpose, which is stored somewhere in external storage.

This section explains how to create data files and describes the various **[Data File Types](Overview.htm#types)** that are available for use in PxPlus.

##  Records and Fields

The contents of a data file is usually grouped into logically-related pieces of information called _records_. Records are generally composed of one or more _fields_ , each of which contains a single item of information.

For example, a _Customer_ file might contain records, where each record is comprised of three fields: a _Name_ field, an _Address_ field, and a _Phone_ number field. Each record is maintained in the file using a separator between fields. PxPlus uses the character Hex $8A$ as a default field separator:

|  _The default field separator character is a Hex $8A$._  
---|---  
|  |  |  |   
_Record 1_ |  Field 1 |  Field 2 |  Field 3 |  Field 4  
_Record 2_ |  Field 1 |  Field 2 |  Field 3 |  Field 4  
_Record 3_ |  Field 1 |  Field 2 |  Field 3 |  Field 4  
_Record 4_ |  Field 1 |  Field 2 |  Field 3 |  Field 4  
_Record 5_ |  Field 1 |  Field 2 |  Field 3 |  Field 4  
  
A number of different PxPlus programs should be able to access this file for writing and retrieving data.

#### **Note:**  
The SQL environment uses the terms _rows_ and _columns_ for records and fields. See **[Data Integration](../../Data%20Integration/Introduction.md)**.

## Creating, Deleting and Renaming Data Files

After input and processing operations are complete, the resultant data can be saved to a file that is structured to facilitate future access. PxPlus supports the creation of different types of data files and record formats.

Each of these **_file types_** has its advantages and disadvantages for storing and retrieving data:

|  **[Serial](Serial%20Files.md)** |  Native OS records can vary in length and are typically accessed in a _sequential_ manner from beginning to end.  
---|---|---  
|  **[Indexed](Indexed%20Files.md)** |  Records are the same length and are accessed by index number.  
|  **[Keyed](Keyed%20Files.md)** |  This is the most common file type used in PxPlus. Each record has at least one _key_ field and up to 15 _alternate keys_ for FLR/VLR files (up to 255 for EFF). This type of file may be accessed by any key field, by index, or sequentially. The record formats for keyed files may include FLR (fixed-length records padded with $00$), VLR (variable-length records), and EFF (enhanced file format).  
  
Keyed files are also categorized according to how the key is being used: |  **[Direct Files](Keyed%20Files.htm#direct)** |  Consist of an external key plus data  
---|---  
**[Sort Files](Keyed%20Files.htm#sort)** |  Consist of keys but no data  
**[Multi-Keyed Files](Keyed%20Files.htm#multi_keyed)** |  Consist of one or more keys plus data  
  
The PxPlus file creation directives are designed to not only define data files but to initialize the control information within these files - each is associated with a specific format. The **[ERASE](../../../directives/erase.md)** directive is used to delete a file or directory. This deletes all the records from the file and de-allocates the disc space for the file. Two other directives, **[PURGE](../../../directives/purge.md)** and **[REFILE](../../../directives/refile.md)**, logically delete all records from a file but leave the file defined to the system. The **[FILE](../../../directives/file.md)** directive is used to recreate a file given its file description (returned by the **[FIB( )](../../../functions/fib.md)** or **[FID( )](../../../functions/fid.md)** function). The **[RENAME](../../../directives/rename.md)** directive allows the user to rename a file (or, on some operating systems, a directory).

## See Also

**[Processing Data Files](../Processing%20Data%20Files/Overview.md)**
