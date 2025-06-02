# Directives 

**INSERT FILE** |  **_Insert and Compress File into ZIP Archive_**  
---|---  
  
##  Format

**INSERT FILE** _filename$_ **TO**(_chan_**[, ERR=**_stmtref_**]** **[, KEY=**_string$_**]**)

**_Where:_**

_filename$_ |  Path and filename of the file to compress and add to the ZIP file.

#### **Note:**  
UNIX/Linux does **_not_** support appending a file to the ZIP archive if the filename contains either a **\**  _(backslash)_ or a **:**  _(colon)_.  
  
---|---  
_chan_ |  Open file channel of the ZIP archive in which to insert the file.  
_string$_ |  Path and filename of the added file as recorded in the ZIP archive. (Required only if this is different from _filename$_.)  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Description

The **INSERT FILE** directive will compress a specified file on your system and append it to the end of the ZIP archive.

#### **Note:**  
The **INSERT FILE** directive will not insert a directory, only a file. Attempting to insert a directory will result in an Error #3: Input/Output error on file.  
  
A directory can be inserted using the **[WRITE RECORD](write_record.md)** directive. Any files in sub-directories on your system can be inserted.

_(The INSERT FILE directive was added in PxPlus 2016.)_

## See Also

**[EXTRACT FILE Extract Compressed File from ZIP Archive](extract_file.md)**  
**[Accessing ZIP Files](../PxPlus%20User%20Guide/File%20Handling/Processing%20Data%20Files/Accessing%20ZIP%20Files.md)**

##  Example

open (hfn)"test.zip"  
insert file "test" to (lfo)  
close (lfo)
