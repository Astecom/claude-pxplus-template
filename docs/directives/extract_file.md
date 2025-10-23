# Directives 

**EXTRACT FILE** |  **_Extract Compressed File from ZIP Archive_**  
---|---  
  
##  Format

**EXTRACT FILE** _filename$_ **FROM**(_chan_**[** , **ERR=**_stmtref_**]** **[** ,**KEY =**_string$_**]**)

**_Where:_**

_filename$_ |  Path and filename of the extracted file.  
---|---  
_chan_ |  Open file channel of the ZIP archive from which to extract the file.  
_string$_ |  Path and filename of the file in the ZIP archive to extract. (Required only if this is different from _filename$_.)  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Description

The **EXTRACT FILE** directive will decompress the specified file in the ZIP archive and will then create that file on your system with the path and filename specified.

#### **Note:**  
The **EXTRACT FILE** directive will not extract a directory, **_only a file_**. Attempting to extract a directory will result in an Error #3: Input/Output error on file.  
  
Directories do not need to be extracted because if a directory is found in a ZIP archive, the **[DIRECTORY](directory.md)** directive can be used to create it on the system. Any files in directories within the ZIP archive can and will be extracted.

_(The EXTRACT FILE directive was added in PxPlus 2016.)_

## See Also

**[INSERT FILE Insert and Compress File into ZIP Archive](insert_file.md)**  
**[Accessing ZIP Files](../PxPlus%20User%20Guide/File%20Handling/Processing%20Data%20Files/Accessing%20ZIP%20Files.md)**

##  Example

open (hfn)"test.zip"  
extract file "test" from (lfo)  
load "test"  
list  
close (lfo)
