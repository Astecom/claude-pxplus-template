# Directives

**CREATE FILE** |  **_Create File Copy/Backup_**  
---|---  
  
## Format

**CREATE FILE**  _new_pathname_ **FROM[**  _old_pathname_ **|** ** _(_**_chnl_** _)_** **]** **[** ,**ERR** =_stmtref_ __**]**

**_Where:_**

_new_pathname_ |  Name of the output file to be created/updated.  
---|---  
_old_pathname_ |  Name of the current file to be copied/backed up.  
_chnl_ |  Channel number of a currently open file that you want copied/backed up.  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
## Description

Use the **CREATE FILE** directive to create a copy/backup of a file. The contents of _new_pathname_ will be overwritten with the contents of the input file **_only_** if the file is the same type as the input file. If the output file does not exist, it will be created.

During the copy/backup, the input file will have a temporary internal lock placed against its contents to avoid any concurrent update.

When copying a link file, the **CREATE FILE** directive will copy the file link references, not the actual link file.

_(The CREATE FILE directive was added in PxPlus 2016.)_

## Example

The following is an example of the **CREATE FILE** directive with a channel:

open (1,iol=*)"clients"  
create file "clients.backup" from (1)
