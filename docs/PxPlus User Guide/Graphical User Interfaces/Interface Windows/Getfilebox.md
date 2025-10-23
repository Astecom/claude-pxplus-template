# Interface Windows

**GET_FILE_BOX** |  **_File Selection Dialog_**  
---|---  
  
The **[GET_FILE_BOX](../../../directives/get_file_box.md)** directive is used to display a standardized window for entering and selecting a directory or file on the system. On a **_Windows_** system, the standard Windows file selection dialog is used, while the **_WindX_** system and **[iNomads](../../../iNOMADS/iNOMADS%20Introduction.md)** use a dialog box created by a PxPlus utility program. There are different formats of the **GET_FILE_BOX** directive to accommodate selecting a file to**READ** or to**WRITE** or selecting a **DIRECTORY**.

**_Example:_**

> GET_FILE_BOX READ X$,"*demo\2022\reports","Select Report File","All Files (*.*)|*.*,Report Files (*.pvr)|*.pvr,","pvr"

On a **_Windows_** system, this example displays the following window:

|   
---|---  
  
On a **_WindX_** system **_and_** in **_iNomads_** , this same example displays the following window (default is **_Detail View_**):

|    
**Detail View _(WindX)_**  
---|---  
  
On a **_WindX_** system **_and_** in **_iNomads_** , selecting the View button toggles this display between **_Detail_** and **_Summary View_** :

|    
**Detail View _(WindX)_** |    
**Summary View _(WindX)_**  
---|---|---  
  
Selecting the _Make New Folder_ button (**_WindX_** and **_iNomads_**) displays a separate panel used for entering the name of a _New Folder_ within the current _Directory_ displayed. After a name is entered, click _OK_ to create the new folder or click _Cancel_ (or X) to close the _Make New Folder_ panel without creating the new folder. If you enter a folder name that already exists, a message will display.

#### **Note 1:**  
The _Make New Folder_ button can be suppressed on the **_WindX_** and **_iNomads_** GET_FILE_BOX by setting the [**%NOMADS'SuppressWindXMakeFolder**](../../../NOMADS%20Graphical%20Application/Appendix/NOMADS%20Variables/Overview.htm#suppressmakefolder) property to non-zero.  
  
**Note 2:**  
The **[%NOMADS'Gfb_Dir_Tbl$](../../../NOMADS%20Graphical%20Application/Appendix/NOMADS%20Variables/Overview.htm#gfbdirtbl)** property, if present, can contain a semi-colon delimited list of directories to which the user can have access. The system will not allow the user to select any other directories.  
  
_(The %NOMADS'SuppressWindXMakeFolder and %NOMADS'Gfb_Dir_Tbl$ properties were added in PxPlus 2019.)_

When displayed on a **_UNIX_** system, the **_WindX_ GET_FILE_BOX** dialog contains a _Case Insensitive Suffix_ check box at the bottom of the panel next to the _Make New Folder_ button. By default, this check box is selected. This indicates that any file extensions being applied (as specified in the drop box next to the _File Name_ field) are case insensitive.

**_Example:_**

If the file extension (specified in the drop box) is "Nomads lib (*.en)", NOMADS library files with extensions of _.EN_ (in uppercase) will also display in the list box. If the _Case Insensitive Suffix_ check box is **_not_** selected, only files with lowercase _.en_ extensions will display.

If the file name is manually typed in the _File Name_ field, it should be entered using proper casing so that the desired file is located.

_(The ability to toggle between Detail and Summary View was added in PxPlus 2016 Update 0001.)  
(The Make New Folder button was added in PxPlus 2017.)_  
_(The Case Insensitive Suffix checkbox was added in PxPlus 2019.)_
