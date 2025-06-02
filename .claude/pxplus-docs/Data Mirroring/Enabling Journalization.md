# Data Mirroring  
  
**File System Journalization**|   
---|---  
  
To enable journalization, you must first define the system journal directory/file(s), which is typically done in the application START_UP program, and then enable journalization on either all files or a specific file. Once enabled, PxPlus will automatically journalize all updates to the designated files, and if journaling all file updates, the system will also journalize all file creates, deletions and renames.

#### **Important Note:**  
  
**_Prior to PxPlus 2023 Update 1:_** Files with extended records cannot be journalized and therefore cannot be used with Data Mirroring.  
  
**_PxPlus 2023 Update 1 or later:_** Files with extended records can be journalized and therefore can be used with Data Mirroring. There is a size limit of 8MB for extended records. Records larger than that cannot be journalized, and any attempt to write the record will result in an Error #108: Record size error.  
  
_(Support for the journalization of files with extended records was added in PxPlus 2023 Update 1.)_

To open the system journal directory/file, you need to issue the following command:

> **SYSTEM_JRNL OPEN**  _pathname$_

**_Where:_**

> _pathname_ _$_ can be either a directory or a file.  
>   
>  If **_directory_** , the system will create one or more journal files in this directory. Each journal file will be called journal._nnn_ _,_ where _nnn_ is a sequence number for the journal.  
>   
>  If **_file_** , the file can grow to 2GB, and then a new file must be defined.

#### **Note:**  
If you rename a file on the main system after the Data Mirroring system has been set up, that file will also be renamed in the target system. See **[SYSTEM_JRNL](../directives/system_jrnl.md)** directive.  
  
_(The renaming logic was added in PxPlus 2014 Feature Pack 1)_

To **_enable_** journalization either for _all_ files or a _specific_ file, use the following command:

|  _For all files_ |  **SYSTEM_JRNL ENABLE ***  
---|---|---  
|  _For specific file_ |  **SYSTEM_JRNL ENABLE**  _pathname$_  
  
**_Where:_**  
_pathname$_ is the name of the file for which journalization is to be enabled. When enabling on a file-by-file basis, the file requires that a journal file be present.  
  
#### **Note:**  
Adding the **SYSTEM_JRNL OPEN** and **SYSTEM_JRNL ENABLE** commands to the application START_UP program tells the system _where_ the journal file is located and _which_ files to journalize (_asterisk_ * indicates _all files_).

To **_disable_** journalization either for _all_ files or a _specific_ file, use the following command:

|  _For all files_ |  **SYSTEM_JRNL DISABLE ***  
---|---|---  
|  _For specific file_ |  **SYSTEM_JRNL DISABLE**  _pathname$_  
  
**_Where:_**  
_pathname$_ is the name of the file for which journalization is to be disabled.
