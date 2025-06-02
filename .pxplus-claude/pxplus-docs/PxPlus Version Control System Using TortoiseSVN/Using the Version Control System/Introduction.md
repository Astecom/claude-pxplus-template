# PxPlus Version Control System Using TortoiseSVN

**Using the Version Control System** |  **__**  
---|---  
  
The main purpose of the Version Control System is to track changes and keep your programs and files up-to-date. This generally consists of committing additions, modifications and deletions within your application to the repository, as well as updating your application with changes by other developers from the repository.

##  Editing Files

You can edit programs as you always have using your favorite editor. You can edit a program in the application directory by using the **[*IT - Integrated Toolkit](../../toolkit1/overview.md)**, **[Ed+](../../Ed%20Program%20Editor.md)** program editor, **[*E](../../PxPlus%20User%20Guide/Development%20Tools/Writing%20and%20Modifying%20Program%20Code/Full-Screen%20Editors.htm#e_editor)** character-based editor or the Command line. If your favorite editor is a text editor, edit from the source directory; however, this will require an extra step later on. Edit panels from the application directory using the **[NOMADS Panel Designer](../../NOMADS%20Graphical%20Application/Panel%20Designer/Introduction.md)**. Native data files that have been flagged for conversion to formatted text files can be edited using existing file maintenance for that file within the application.

You can also edit programs, panels or flagged data files by right clicking on the file in the source directory and selecting _Edit_ from the popup menu. This invokes the default program editor for editing programs (either the *IT - Integrated Toolkit or Ed+, depending on the setting for the **[%NOMADS'Program_Editor](../../NOMADS%20Graphical%20Application/Appendix/NOMADS%20Variables/Overview.htm#programeditor)** property), the NOMADS Panel Designer for panels, or the **[File Update Utility](../../File%20Update%20Utility.md)** for flagged data files.

It is important to keep the source and application directories in sync when modifying files. If you were to modify and save a program from either the application or source directory by using *IT - Integrated Toolkit, Ed+, ***** E or the Command line, then the PxPlus Version Control System will automatically synchronize the program in the other directory. This is because whenever a program is saved using the PxPlus **[SAVE](../../directives/save.md)** directive, special administrative files are accessed (**.pluscvs** files in the application directory and **.cvsplus** in the source directory) to determine where to update the corresponding program. In addition, when you modify a screen panel using the NOMADS Panel Designer, the corresponding source file is updated automatically as well.

Whenever a flagged data file in the application directory is modified, the **.pxdat** text file in the source directory is automatically updated when the modified data file is closed. There is even special logic in the PxPlus **[Report Writer](../../Report%20Writer/Introduction.md)** to update the source directory whenever a report definition (**.pvr**) or report library (**.pvrlib**) file is created or updated.

If you use a text editor to modify programs or text versions of data files in the source directory, or copy modified programs into the application directory, then the source and application directories will no longer be in sync. In these cases, you will have to perform an extra step to re-sync the directories. In the case of modifying source files with an external editor, you will have to manually update the application directory. This can be done using the **SVN** command line program with the **APPUPDATE** option, as in **SVN APPUPDATE PATH**. The path can be a directory or file name and can reference either an application or source directory.

**_Examples:_**

> svn appupdate c:\development\myapp ! Updates all files in _myapp_ and its subdirectories  
> svn appupdate c:\development\myapp\myprog ! Updates just _myprog_

In the case of copying files into the application directory or modifying resource files or data files in the application directory that are not flagged for text conversion, to update existing files, you will have to manually refresh the source directory. This can be done using the **SVN** Command line program with either the **REFRESH** or **REFRESHALL** options, as in **SVN REFRESH PATH**.

For the **REFRESH** option, the path argument can be the source or application path of a directory or file. If a directory is specified, only the files in that directory level are processed; processing is not recursive.

To process the directory and its subdirectories, use the **REFRESHALL** option, which requires a directory path as an argument. The **REFRESH** options only affect files currently existing in the source directory.

If a new directory, panel library or resource file is added, you will have to use the **ADD** option of the **SVN** command line program to extract it into the source directory and then add it to the Repository, as in **SVN ADD PATH**.

See **[Adding Files](Introduction.htm#Adding_Files)** and **[Adding Directories and Panel Libraries](Introduction.htm#Adding_Directories)**.

**_Examples:_**

> svn refresh c:\work\mysrc ! Refreshes files in _mysrc_  
>  svn refreshall c:\work\mysrc\progs ! Refreshes files in _progs_ and its subdirectories

Native data files that have been flagged for conversion to formatted text files automatically have their text files updated in the source directory when they are closed after modification. This is useful for keeping track of changes to definition files, such as data dictionary and views definition files, or configuration files.

To flag a data file for conversion, you can select the **[Convert to Text for Version Control System](../../Data%20Dictionary/Data%20Dictionary%20Maintenance/Overview.htm#convert)** check box option for the file definition in Data Dictionary Maintenance and update the file. Alternately, you can use the **SVN** command line program with the **TEXTON** or **TEXTOFF** options to set/reset the flag.

**_Examples:_**

> svn texton \app\data\providex.ddf  
> svn texton \app\data\providex.dde

##  Adding Files

Adding new files to the system is a multi-step process that includes adding the file to the application directory, adding the corresponding format in the source directory, adding the file to the Version Control System, and finally, committing the file to the repository. Depending on the type of file and how it was created, many of these steps have been combined to make the process simpler. For example, the **SVN ADD** command will extract a file from the application directory to the source directory, as well as set it up in the Version Control System.

To add a new **_program_** , create and save it in the application directory, or source directory if created in a text editor. If the new program is created by using the **[*IT - Integrated Toolkit](../../toolkit1/overview.md)**, **[Ed+](../../Ed%20Program%20Editor.md)** program editor, **[*E](../../PxPlus%20User%20Guide/Development%20Tools/Writing%20and%20Modifying%20Program%20Code/Full-Screen%20Editors.htm#e_editor)** character-based editor or the Command line, the source directory will automatically be updated. If using a text editor or copying the new program from elsewhere, you will have to sync the directories as described earlier. New programs will be added to the repository when they are included in a commit command, or you can use the **SVN** command line program with the **ADD** option.

To add a new **_data file_** , use **[Data Dictionary Maintenance](../../Data%20Dictionary/Data%20Dictionary%20Maintenance/Overview.md)** to create the file. If the data file is flagged for file conversion, the text version will automatically be created and updated in the source directory. You can also create new data files without embedded dictionaries using the appropriate language directive, and then turn the conversion flag on using the **SVN TEXTON** command, if desired. This will also create and update the text version in the source directory. If the data file has been flagged for conversion, the system will optionally add the file to the Version System. If the data file is not flagged for conversion, or if you have chosen to skip the option that automatically added the file to the system, you will have to use the **SVN ADD** command to add the data file to the system.

New **_panels_** are created using the **[NOMADS Panel Designer](../../NOMADS%20Graphical%20Application/Panel%20Designer/Introduction.md)**, and are automatically created and updated in the source directory. Then, use the **SVN ADD <library>** to add the new panel to the Version Control System.

New **_resource files_** can be created in or copied to the application directory. Then, use the **SVN ADD** command to copy the resource file into the source directory and add it to the Version Control System.

**_Examples:_**

> svn add c:\work\myapp\data\custinfo ! Adds an unflagged data file  
> svn add c:\work\myapp\resource\logo.jpg ! Adds a resource file  
> svn add c:\work\myapp\libs\scrnlib.en ! Adds a new screen library or panel

##  Reverting Files

To undo all changes made in a file or directory since the last update, use the **SVN** command line program with the **REVERT** option.

**_Examples:_**

> svn revert c:\development\myapp\myprogs ! Reverts all files in _myprogs_ and its subdirectories  
> svn revert c:\development\myapp\myprogs\myprog ! Reverts just _myprog_  
>  svn revert c:\development\myapp\mylibs\scrnlib.en ! Reverts all panels in the _scrnlib.en_ library  
> svn revert c:\development\mysrc\mylibs\scrnlib.en\mypanel.pxpnl ! Reverts just the _mypanel_ panel

#### **Important Note:**  
Be careful if you revert a file using the _TortoiseSVN > Revert_ menu item in the popup menu, as this does **_not_** update the application directory. You would have to manually invoke the **SVN** command line program with the **APPUPDATE** option to synchronize the source and application directories.

## Deleting Files

To delete a program or resource file, it should be deleted from the source directory by right clicking on the file and using the _TortoiseSVN > Delete_ menu item in the popup menu to remove it. Deleted programs will be removed from the application directory and repository when the directory in which it was located is next committed.

To undo a deletion, you must revert the parent directory, as the deleted file no longer exists.

##  Committing Changes

After you have modified your programs and screen library files, added new files, deleted unwanted ones, etc., these changes exist only in your application and source directories until you _commit_ them to the repository. Before you commit your files, however, you should make sure that your files are up-to-date with changes made by others, so you should update your files first to determine if there are any conflicts and resolve them. See **[Updating Your Files](Introduction.htm#Updating)**. When your files are up-to-date and there are no conflicts, you are ready to commit your changes.

Several methods are available to **_commit your changes_** :

  * The **SVN** command line program has a **COMMIT** option, as in **SVN COMMIT PATH** , to commit the specified file or directory to the repository. The path can be a directory or file name and can reference either application or source directory.  
  
**_Example:_**  
  
svn commit c:\work\project\src\prg  
  
It also has a **UCOMMIT** option, as in **SVN UCOMMIT PATH,** that updates the source files prior to committing them. This is useful if you have modified resource files or copied program or library files into the application directory, as it synchronizes the files before committing them.
  * Select _TortoiseSVN Commit_ from the _Utilities_ menu on the PxPlus base window. This will invoke the TortoiseSVN Commit procedure to commit any modified files in the current directory.
  * If you are using the **[*IT - Integrated Toolkit](../../toolkit1/overview.md)** or **[Ed+](../../Ed%20Program%20Editor.md)** to edit your programs, the _Version Control_ menu has entries to commit the current program, all open programs, a specified program or file, or a specified directory. The *IT - Integrated Toolkit also has toolbar buttons to commit the current program or all open programs. Be sure to save any program changes before you commit them.
  * In Windows Explorer, select the directory or files in the source directory that you wish to commit. Right click and select _SVN Commit_ from the popup menu.



The TortoiseSVN Commit procedure will present a change list of all modified files in the specified directory and its subdirectories. You can check the files you wish to be committed. If files are specified to be committed, they will appear in the change list if they have been modified.

When committing your files, be sure to include a brief description of the changes you have made to the files for future reference. Once committed, your modifications will be available to other developers when they update their files from the repository.

##  Updating Your Files

If many people are working on the same code base, you should periodically update your source and application directories to ensure that changes done by others are incorporated. An update consists of merging any changes done by others into your source directory files, keeping any changes you may have done to the same files. Conflicts can occur during an update, however, if others changed the same lines in the same file as you. TortoiseSVN has an external merge tool to resolve such conflicts. After the TortoiseSVN update is complete, the PxPlus Version Control System automatically updates the application directory with the new program versions. The repository is not affected by an update.

Several methods are available to **_update your files_** :

  * The **SVN** command line program has an **UPDATE** option, as in **SVN UPDATE PATH** , to update the source and application from the repository. The path can be a directory or file name and can reference either the application or source directory.  
  
**_Examples:_**  
  
svn update c:\work\project\app\programs ! Updates all files in _programs_ and its subdirectories  
svn update c:\work\project\app\resources\logo.jpg ! Updates the _logo.jpg_ file  
svn update c:\work\projects\src\library\scrnlib.en\mypanel.pxpnl ! Updates the _mypanel_ panel
  * Select _TortoiseSVN Update_ from the _Utilities_ menu on the PxPlus base window. This will invoke the TortoiseSVN Update procedure to update files in the current directory.
  * If you are using the **[*IT - Integrated Toolkit](../../toolkit1/overview.md)** or **[Ed+](../../Ed%20Program%20Editor.md)** to edit your programs, the _Version Control_ menu has entries to update a specified program/file or a specified directory. The *IT - Integrated Toolkit also has a setting on the _Options_ menu to _Auto-update Version on OPEN_ that will automatically update the program being loaded. If a conflict is found, TortoiseSVN will report it so that it can be resolved.
  * In Windows Explorer, select the directory or files in the source directory that you wish to update. Right click and select _SVN Update_ from the popup menu.



If a directory path is specified for an update procedure, processing will be recursive to subdirectories.

During an update, it is possible that some of the files being updated in the application may be in use by other tasks. This prevents the update from having exclusive access to the file being transferred. This can affect the transfer of PxPlus data files and resource files (i.e. non-PxPlus files such as text files, media files, documents, etc.).

Exclusive access means that the receiving file can have a different file definition, it can be purged of the old records, and all new records can be written cleanly. Without exclusive access, if the file definition has changed, then the file cannot be updated and a transfer error will be reported in the Application Update summary. If, however, the file definition has not changed, then the old records can be removed individually to clear the file prior to writing the new records. In this case, it is possible that records extracted by another task may not be available to remove or rewrite, resulting in possible lost data.

When a file is in use by another task, three options are available:

**_Option 1:_** |  Retry opening the file with exclusive access.  
---|---  
**_Option 2:_** |  Open the file without exclusive access and continue.

#### **Warning!**  
This may result in lost data.  
  
**_Option 3:_** |  Cancel converting the file.  
  
Option 1 allows you to close down other tasks that may be using the file and retry the transfer.

Option 2 allows the process to continue with non-exclusive access to the file. Data loss is possible, but only if records are extracted by other tasks. If data is lost, then a warning will appear in the Application Update summary.

Option 3 cancels the file transfer and reports an error in the Application Update summary. If there is an issue during the file transfer, the file in question can be updated individually at a later time when exclusive access is available.

##  Adding Directories and Panel Libraries

When a new directory is added to the application, a corresponding directory must be created in the source. Then, the contents of the new directory must be extracted into the new source directory, then added and committed to the repository. This can be done in a single step using the **ADD** option of the **SVN** command line program, as in **SVN ADD PATH**. The **ADD** option also sets up version control administration files for new directories. New panel libraries and resource files may also be added this way.

**_Examples:_**

> svn add c:\work\myapp\images ! Adds the images directory and subdirectories   
> svn add c:\work\myapp\libs\scrnlib.en ! Adds a new screen library or panel

To retrieve a new directory or screen library, do a source update on a directory containing the new directory/files. The source and application files will be added automatically.
