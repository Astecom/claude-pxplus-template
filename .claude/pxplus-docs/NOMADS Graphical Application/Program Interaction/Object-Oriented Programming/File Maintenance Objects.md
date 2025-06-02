#   
  
**File Maintenance Objects (Legacy)** |  **_Historical Reference_**  
---|---  
  
#### **Important Note:**  
**_This page is for historical reference only._**  
  
As of PxPlus 2019, a new **[File Maintenance Generator](../../Dictionary-Based%20Development/Fmgen/Fmgen%20Introduction.md)** was created to make it easier to generate file maintenance (or inquiry-only) panels. As of PxPlus 2021, it can also be used to generate HTML pages.

The legacy version of the NOMADS File Maintenance Generator interface includes two _Program Type_ options for creating file maintenance panels - **_Generic Object_** and **_Custom Object_**. For either option, the File Maintenance Generator will build a panel with no logic attached for the panel or the controls. The event logic for a file maintenance panel is encapsulated in the methods of the maintenance program.

## File Maintenance Objects

The Generic Object uses two standard programs: ***win/flmaint.pvc** and ***win/flmaintio.pvc**. All file IO is handled by the **flmaintio.pvc** program, while **flmaint.pvc** handles all the panel and control events. The **flmaint.pvc** program inherits both the NOMADS object, ***nomads.pvc** and **flmaintio.pvc**.

If the _Program Type_ is Custom Object, then a custom program will be generated. The same methods used by the generic object **flmaint.pvc** will be added to the custom program. The folder methods, such as DefaultFolderPreload( ), will be declared only if the maintenance panel is generated with the Folders option selected.

**_Flmaint_** ** _Object_**

Below is a list of methods in **flmaint.pvc**.

**Methods** |  **Description**  
---|---  
**Button_Cancel**( ) |  Check if current record has been changed and close panel. Return value is ignored.  
**Button_Clear**( ) |  Clear record inputs/fields. Return value is ignored.  
**Button_Del**( ) |  Delete current record. Return value is ignored.  
**Button_First**( ) |  Get first record on file. Return value is ignored.  
**Button_Last**( ) |  Get last record on file. Return value is ignored.  
**Button_Next**( ) |  Get next record on file. Return value is ignored.  
**Button_Prior**( ) |  Get prior record on file. Return value is ignored.  
**Button_Write**( ) |  Write current record. Return value is ignored.  
**DefaultChange**( ) |  **_(Internal Use Only)_** Read current record. This logic will only execute if the control name is part of the key definition. Return value is ignored.  
**DefaultInitialize**( ) |  **_(Internal Use Only)_** Setup key definition fields, required fields and numeric fields. Return value is ignored.  
**DefaultOnFocus**( ) |  **_(Internal Use Only)_** Check if current record has been changed and enable/disable field inputs. Return value is ignored.  
**InitializeFolder_Tab_1**( ) |  **_(Internal Use Only)_** Build tab direction and NEXT_FOLDER string. Sets up the hidden multi-line control Folder_Tab_1. Return value is ignored.  
**InitializeFolder_Tab_2**( ) |  **_(Internal Use Only)_** Build tab direction and NEXT_FOLDER string. Sets up the hidden multi-line control Folder_Tab_2. Return value is ignored.  
**InitializeFolder_Tab2M**( ) |  **_(Internal Use Only)_** Build tab direction and NEXT_FOLDER string. Sets up the hidden multi-line control Folder_Tab_2M. Return value is ignored.  
**OnFocusFolder_Tab_1**( ) |  **_(Internal Use Only)_** On focus logic for hidden multi-line control Folder_Tab_1. Return value is ignored.  
**OnFocusFolder_Tab_2**( ) |  **_(Internal Use Only)_** On focus logic for hidden multi-line control Folder_Tab_2. Return value is ignored.  
**OnFocusFolder_Tab_2M**( ) |  **_(Internal Use Only)_** On focus logic for hidden multi-line control Folder_Tab_2M. Return value is ignored.  
**OnExit**( ) |  **_(Internal Use Only)_** Panel header on exit logic. Reset message library, parameters and close file. Return value must be 1 in order to allow the panel to terminate.  
  
If the method returns 0, then the panel will not be closed.  
**PostLoad**( ) |  **_(Internal Use Only)_** Build tables from embedded file info, enable/disable input fields, validate ARG_1$ and load a default record. Return value is ignored.  
**DefaultFolderPostLoad**( ) |  **_(Internal Use Only)_** Enable/disable groups and assign NEXT_ID depending on the tab direction variable Tab_Flg$. Return value is ignored.  
**PreLoad**( ) |  **_(Internal Use Only)_** Activate message library, open file, initialize variables. Return value is ignored.  
**DefaultFolderPreLoad**( ) |  **_(Internal Use Only)_** Build first tab and last tab string (used to control tab direction). Return value is ignored.  
  
**_Flmaintio_** ** _Object_**

Below is a list of methods in **flmaintio.pvc**.

**Methods** |  **Description**  
---|---  
**Delete**( ) |  **_(Internal Use Only)_** Delete current record. Returns **1** if successful, **0** if unsuccessful.  
**Extract**(**_**_ReviewRec_ _)_ |  **_(Internal Use Only)_** Lock record.   
  
__ReviewRec_ \- If **1** , then extract the record using an alternate IOList. Default is **0**. Returns **1** if successful, **0** if unsuccessful.  
**KeyAfterNext**( ) |  **_(Internal Use Only)_** Return key after next record. Returns **1** if successful, **0** if unsuccessful.  
**OpenFile**(**_**_File_Name_ _$_) |  **_(Internal Use Only)_** Open file.   
_  
_File_Name$_ \- Name of physical file. Returns **1** if successful, **0** if unsuccessful.  
**ReadByKey**(_Keyno_ ,_Seg1$_ ,  
_Seg2$_ ,_Seg3$_ ,_Seg4$_ ,_Seg5$_) |  **_(Internal Use Only)_** Read file using key number and key segments.  
_  
KeyNo_ \- Key number  
 _Seg1$_ \- Key segment 1  
 _Seg2$_ \- Key segment 2 (optional)  
_Seg3$_ \- Key segment 3 (optional)  
_Seg4$_ \- Key segment 4 (optional)  
_Seg5$_ \- Key segment 5 (optional)  
  
Returns **1** if successful, **0** if unsuccessful.  
**ReadFirst**( ) |  **_(Internal Use Only)_** Return first record using same key. Returns **1** if successful, **0** if unsuccessful.  
**ReadLast**( ) |  **_(Internal Use Only)_** Return last record using same key. Returns **1** if successful, **0** if unsuccessful.  
**ReadNext**( ) |  **_(Internal Use Only)_** Return next record using same key. Returns **1** if successful, **0** if unsuccessful.  
**ReadNext**(_N$_) |  **_(Internal Use Only)_** Return next record on file using an alternate key name or key number.   
  
_N$_ \- Alternate key name or key number. Returns **1** if successful, **0** if unsuccessful.  
**ReadPrevious**( ) |  **_(Internal Use Only)_** Return prior record using same key. Returns **1** if successful, **0** if unsuccessful.  
**Update**(__KeyType_) |  **_(Internal Use Only)_** Update current record.  
  
__KeyType_ \- Set to **1** if the file contains an external key. Default is **0**. Returns **1** if successful, **0** if unsuccessful.  
  
## Invoking an Object

A file maintenance panel is invoked as follows:

> O=new("<.pvc program>","<panel name>","<library name>")   
> O'Process(arg_1$,arg_2$.....arg_20$)

In the above syntax, the _arg_1$_ through _arg_20$_ are optional.

**_Example:_**

The following example uses the generic object:

> Cust_Id $="0001"   
>  O=new("*win/flmaint","Customer","Mylib.en")   
> O'Process(Cust_Id$)

Data for customer 0001 will automatically be loaded after the panel is displayed.

## Customizing a File Maintenance Program

The program created for a Custom object is designed to allow customization.

You can also create customized code for a Generic object if you wish. Save ***win/flmaint.pvc** under a new name and enter this name in the Maintenance Program input field. The program name must contain a **_.pvc_** extension.

## Customizing a File Maintenance Panel

The File Maintenance Generator includes two Button Location options for the browse/edit buttons on the panel - _Bottom_ (default) or _Side_. The browse and edit buttons for the objects can be found in the library ***win/scrnlib.en**. The **flmaintobj** panel contains a horizontal button set and the **flmaintobj.v** panel contains buttons that appear vertically on the side of the generated panel.

To customize buttons on file maintenance panels, copy the **flmaintobj** panels to an alternate library and load the global variable **%Flmaint_Lib$** with the alternate library name. NOMADS will then use these custom panels when generating a new file maintenance panel.
