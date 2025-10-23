# Processing Data Files 

**Accessing ZIP Files** |  **__**  
---|---  
  
A ZIP file (.ZIP) is a compressed archive file format. A ZIP file usually contains a single or multiple file/directory entries that have been compressed. ZIP files are often used for email attachments and backup archival purposes.

**_PxPlus ZIP File Support_**

Using PxPlus, you can:

  * Create and/or open a ZIP file using the **[OPEN [CREATE]](../../../directives/open.htm)** directive.
  * Get metadata about all of the files/directories contained within the ZIP archive using the **[FIN( )](../../../functions/fin.md)** system function.
  * Extract and read the compressed data of the files within the ZIP archive using the **[READ RECORD](../../../directives/read_record.md)** or **[EXTRACT FILE](../../../directives/extract_file.md)** directive.
  * Compress and append files/directories to the ZIP archive using the **[WRITE RECORD](../../../directives/write_record.md)** or **[INSERT FILE](../../../directives/insert_file.md)** directive.
  * Remove files/directories from the ZIP archive using the **[REMOVE](../../../directives/remove.md)** directive.



PxPlus uses a record/index to represent a file/directory entry within a ZIP file. The order of the records depends on the order that the file/directory entries were added to the ZIP archive.

PxPlus uses the key to represent the file/directory name of an entry in the ZIP file.

_(PxPlus ZIP file support was added in PxPlus 2014.)_

## Creating a ZIP File

To **_create_** a ZIP file, use the **[OPEN CREATE](../../../directives/open.md)** directive with OPT="ZIP":

> **OPEN CREATE** (_chan_ , OPT="ZIP") "myZIPFile.zip"

## Opening a ZIP File

To **_open_** a ZIP file, use the standard **[OPEN](../../../directives/open.md)** directive:

> **OPEN** (_chan_) "myZIPFile.zip"

## Getting ZIP Metadata

Use the **[FIN( )](../../../functions/fin.md)** system function to get metadata about the compressed files/directories within the ZIP archive. The file/directory entry that you get metadata about is the next record. If there is no next record, a null value is returned.

The "ZIPFilename" keyword returns the file/directory name of the next ZIP archive entry. Directory names will always end in a '**/** ' _(forward slash)._

> **FIN** (_chan_ , "ZIPFilename")

The "ZIPInfo" keyword will return all of the metadata about a file/directory in a ZIP archive.

> **FIN** (_chan_ , "ZIPInfo")

The key system functions **[KEF( )](../../../functions/kef.md)**, **[KEP( )](../../../functions/kep.md)**, **[KEC( )](../../../functions/kec.md)**, **[KEY( )](../../../functions/key.md)**, **[KEN( )](../../../functions/ken.md)** and **[KEL( )](../../../functions/kel.md)** can also be used to return the file/directory name of ZIP archive entries. **KEY(**_chan_**)** and **FIN(**_chan_ , "ZIPFilename"**)** are equivalent and will return the same file/directory name.

## Extracting from a ZIP File

You can **_extract_ a _file_** in two ways:

  * You can use the **[EXTRACT FILE](../../../directives/extract_file.md)** directive, which will decompress the file in the archive and put it on your system. **_OR_**
  * You can use the **[READ RECORD](../../../directives/read_record.md)** directive, which will return the decompressed binary data of the compressed file in the archive.



If the file/record is a _directory_ , the **EXTRACT FILE** directive will result in an Error #3: Input/Output error on file. The **READ RECORD** directive will return an empty string.

To use **EXTRACT FILE** , you must know the name of the file in the ZIP archive you want to extract.

> **EXTRACT FILE** "new_filename" FROM (_chan_ , KEY="filename")

If the path and filename of the file to _extract_ are the same as what you want to put on your system, then you can leave out the _KEY=_ option.

> **EXTRACT FILE** "filename" FROM (_chan_)

PxPlus supports the following uses of **READ RECORD** for ZIP files:

  * **_Sequential -_** Where the files/directories entries in the ZIP archive are read sequentially in the order that they were added.



> **READ RECORD** (_chan_) data$

  * **_By Key -_** Where the key is the filename of the file within the ZIP archive.



> **READ RECORD** (_chan_ , KEY="filename") data$

  * **_By Record Number -_** Where the record number assigned to the files/directory entries is based on the order that they were added into the ZIP archive. Record numbers start at one.



> **READ RECORD** (_chan_ , RNO=recNum) data$

  * **_By Index Number -_** Where the index number assigned to the files/directory entries is based on the order that they were added into the ZIP archive. Index numbers start at zero.



> **READ RECORD** (_chan_ , IND=indNum) data$

#### **Note:  
** It is also possible to use the **[SELECT RECORD](../../../directives/select.md)** directive to extract from a ZIP file. As the entries in a ZIP file are not sortable, the use of BEGIN and END with the **SELECT RECORD** is **_not_** supported.

##  Appending to a ZIP File

You can _append a file_ to the end of the ZIP archive in two ways:

  * Use the **[INSERT FILE](../../../directives/insert_file.md)** directive, which will compress a file on your system and append it to the end of the ZIP archive.



> **_or_**

  * Use the **[WRITE RECORD](../../../directives/write_record.md)** directive, which will compress binary data and append it to the end of the ZIP archive.



If the file/record is a _directory_ , the **[INSERT FILE](../../../directives/insert_file.md)** directive will result in an Error #3: Input/Output error on file.

To use **INSERT FILE** , you must know the name of the file you want to put in the ZIP archive.

> **INSERT FILE** "filename" TO (_chan_ , KEY="new_filename")

#### **Note:**  
UNIX/Linux does **_not_** support appending a file to the ZIP archive if the filename contains either a **\**  _(backslash)_ or a **:**  _(colon)_.

If the path and filename of the file to _zip_ are the same as what you want to put in the ZIP archive, then you can leave out the _KEY=_ option.

> **INSERT FILE** "filename" TO (_chan_)

PxPlus supports appending both files and directories:

  * To _append a file_ , use the **[WRITE RECORD](../../../directives/write_record.md)** directive, where the _key_ is the name of the _file_ to append to the ZIP archive, and _contents_ contains the binary data of the file to add to the ZIP archive.



> **WRITE RECORD** (_chan_ , KEY="filename") contents$

  * To _append a directory_ to the end of the ZIP archive, issue a **[WRITE RECORD](../../../directives/write_record.md)** directive, where the _key_ is the name of the _directory_ to append to the ZIP archive, and _contents_ is an empty string. Directory names must end in a '**/** ' _(forward slash)_ to be recognized as directory names.



> **WRITE RECORD** (_chan_ , KEY="dir/") ""

## Removing from a ZIP File

To _remove a file/directory entry_ from a ZIP archive, you can use the **[REMOVE](../../../directives/remove.md)** directive. PxPlus supports the following uses of **REMOVE** for ZIP files:

  * **_Sequential -_** Where the files/directories entries in the ZIP archive are removed sequentially in the order that they were added.



> **REMOVE** _(__chan_ _)_

  * **_By Key -_** Where the key is the name of the file/directory entry within the ZIP archive. If it is a directory name, it must end in a '**/** ' _(forward slash)._



> **REMOVE** (_chan_ , KEY="filename")

  * **_By Index Number -_** Where the index number assigned to the files/directory entries is based on the order that they were added into the ZIP archive. Index numbers start at zero.



> **REMOVE** (_chan_ , IND=indNum)

## See Also

**[*TOOLS/ZIP](../../../utilities/zipcontents.md)** and **[*TOOLS/UNZIP](../../../utilities/unzipcontents.md)** Utilities  
**[EXTRACT FILE Directive](../../../directives/extract_file.md)**  
**[INSERT FILE Directive](../../../directives/insert_file.md)**  
**[READ RECORD Directive](../../../directives/read_record.md)  
[REMOVE Directive](../../../directives/remove.md)**  
**[WRITE RECORD Directive](../../../directives/write_record.md)**
