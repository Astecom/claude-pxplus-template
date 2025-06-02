# PxPlus Version Control System Using TortoiseSVN

**SVN Command Line Program** |  **__**  
---|---  
  
The SVN command line program has a number of options that allow you to execute almost every aspect of the Version Control System:

**Command** |  **Option** |  **Argument** |  **Description**  
---|---|---|---  
svn |  [?]|  |  Help description.  
svn |  setup|  |  Same as the _TortoiseSVN Setup_ option that can be selected from the _Utilities_ menu on the PxPlus base window or from the _Version Control_ menu in the **[*IT - Integrated Toolkit](../../toolkit1/Using%20the%20Program%20Editor.htm#versionctrl)** and **[Ed+](../../Ed%20Program%20Editor.htm#versionctrl)** program editor. Interactive interface to choose import or checkout functionality.  
svn |  import|  |  Interactive interface to extract files from application directory into source directory and then import into repository.  
svn |  checkout|  |  Interactive interface to checkout source directory from repository and convert into application files. Also sets up administrative directories and files used by the Version Control System.  
svn |  add |  [appPath]* |  Extracts files from the application directory or panel library into source directory, then adds and commits the directories into the repository, as well as adding administrative files in the new directories. Can also be used for individual program and resource files. New panels are added by adding the panel library.  
svn |  commit |  [path]* |  Commits the specified directory/file to the repository.  
svn |  ucommit |  [path]** |  Updates the specified source directory/file and commits it to the repository. Does not add new files.  
svn |  update |  [path]* |  Updates the specified directory/file from the repository to the source directory and updates the application files.  
svn |  refresh |  [path]** |  Refresh the specified directory/file in the source directory from the application directory. **_(Not recursive)_** The source directory/file must exist. (Use the **Add** option to add new files.)  
svn |  refreshall |  [dirpath]** |  Refresh the source directory and sub-directories from the application directory. The source directory must exist.  
svn |  revert |  [path]* |  Undo all changes made in the specified directory/file since the last update.  
svn |  extract|  |  Extracts application files into source files. Runs ***plus/proj/extract**.  
svn |  appupdate |  [path]** |  Updates the specified directory/file from the source directory to the application directory. Runs ***plus/proj/update**.  
svn |  register|  |  Sets up registry entries required to integrate TortoiseSVN and the PxPlus Version Control System. Also creates the TortoiseSVN hook scripts required to integrate the TortoiseSVN commit and update functionality with the Version Control System.  
svn |  target |  [srcdir]** |  Creates administrative files required by PxPlus Version Control System integration. Runs ***plus/proj/target**.  
svn |  texton |  [path] |  Turn on the flag to save the specified native data in the source directory as a formatted text file with a **.pxdta** extension. Whenever the file is modified in the application directory, the text version in the source directory will automatically be updated. This facilitates tracking changes in the file.  
svn |  textoff |  [path] |  Turn off the flag to save the specified native data file in the source directory as a text file. Instead, the file will be saved in the source directory as-is whenever the file is extracted or refreshed. The file will **_not_** be automatically updated when modified.  
  
#### **Notes:**  
  
***** Paths are optional and default to the current program if omitted. If no program is loaded, default is the current directory.  
****** Paths are optional and default to the current directory if omitted.  
  
Paths can reference either source or application directory, unless otherwise specified. To process a single panel in a panel library, the panel reference in the source directory must be used. When directories are specified, processing is recursive to sub-directories.

**_Examples:_**

> svn checkout  
> svn commit c:\development\svnsrc\proj\browser.pxprg  
> svn update c:\development\myapp  
> svn revert c:\development\svnsrc\library\scrnlib.en\main.pxpnl  
>  svn refresh browser
