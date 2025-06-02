# 

**PxPlus Version Control System Using TortoiseSVN** |  **__**  
---|---  
  
PVX Plus provides integration with TortoiseSVN, a free open-source Windows client for the Subversion source Version Control System. A Version Control System manages files and directories, as well as the changes made to them over time. It serves as a repository for the source files; it keeps a history of the changes and allows the recovery of previous versions. It also manages changes from multiple users, merging simple modifications or facilitating user intervention with more complex modifications.

PxPlus integration includes utilities to import PxPlus application programs into a TortoiseSVN or SVN repository, checkout source from the repository, commit source changes to and update application programs from the repository.

**_About TortoiseSVN_**

TortoiseSVN is free, easy-to-use source control software for Microsoft Windows. It is integrated into the Windows Explorer where the file status is displayed in the file icons, and all TortoiseSVN commands are available from the right-click pop-up menu.

#### **Note:**  
Minimum TortoiseSVN Version supported is 1.4.

To learn more about TortoiseSVN, visit  [**https://tortoisesvn.net/**](https://tortoisesvn.net/ "http://tortoisesvn.net/").

#### **Important Note:**  
The metadata storage architecture was changed in TortoiseSVN Version 1.7 and is supported by the PxPlus Version Control System. _(as of PxPlus v10.20)_**  
**  
**_PxPlus 2018 is required_** for TortoiseSVN Version 1.10 and above.

**_Background_**

Source programs are imported into the SVN repository where they are stored and become available to be checked out by other users. The source programs are stored as text files to facilitate comparison and merging. However, since a PxPlus application consists of tokenized programs, screen library files, data files and miscellaneous other files, these files must first be extracted into a format that is usable by the Version Control System.

> Once the source files have been imported into the repository, this step need not be repeated for this source directory. The source files are now available to be checked out by other users working with the same files or project.

When source files are checked out by a user into a source directory (also referred to as the working copy by Subversion or the sandbox by CVS), it is the text version of the programs and screen library files that is copied into the source directory, as well as hidden directories and files used to manage the files. The source files must also be converted into usable application files and stored in the application directory. As well, PxPlus requires some administrative files to be set up in both the source and application directories to manage its side of the integrated Version Control System.

> ## See Also

**[Setup and Installation](Setup%20and%20Installation/Overview.md)**   
**[Using the Version Control System](Using%20the%20Version%20Control%20System/Introduction.md)**
