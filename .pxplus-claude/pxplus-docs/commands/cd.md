# Extended Commands 

**CD Console Command** |  **_Change Current Directory_**  
---|---  
  
## Format

**CD** _directory_

**_Where:_**

_directory_ |  Pathname of the directory to change to.  
---|---  
  
## Description

The **CD** command can be used to change the current working directory for the process. Any valid directory name may be provided. All prefix and pathname translation rules (such as *****  _asterisk_ for system library) will apply.

To change to the **_home directory_** , enter the **CD** command immediately followed by a **~** (_tilde_):

> **CD ~**

To change to a **_sub-directory_** (i.e. _mydir_) in the home directory, include the sub-directory name after the **~** (_tilde_), separated by a **/** (_slash_):

> **CD ~/**_mydir_

_(The CD command was added in PxPlus v6.30.)_
