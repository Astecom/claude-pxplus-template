# PxPlus COM Support

**PxPlus Excel Object**|   
---|---  
  
The **PxPlus Excel** object simplifies the use of the Excel.Application extended object. This object consists of various properties and methods that make it easier to interact with Excel workbooks and worksheets. See **[Properties and Methods](Excel%20Object.htm#properties)** below.

When a new Excel file is created, a workbook is created with a given number of worksheets _(Sheet1_ , _Sheet2, Sheet3, etc.)_ , depending on your default template. The Excel object allows more than one workbook to be opened at one time, each containing various worksheets.

_(The PxPlus Excel object was added in PxPlus 2017.)_

**_Instantiating the Excel Object_**

To **_instantiate_** the Excel object using the handle **excel_obj** (where **excel_obj** could be any numeric variable), enter the following command:

> excel_obj=NEW("*obj/excel")

If the object should bind to a running instance of Excel, you may pass the **[RUNNING]** option for the **[DEF_OBJECT](Referencing%20a%20COM%20Object.htm#running)** directive by entering the command as:

> excel_obj=NEW("*obj/excel","running")

> **_Where:_**

> "running" is case insensitive.

_(The ability to instantiate the Excel object by passing the [RUNNING] parameter was added in PxPlus 2025.)_

If the object should bind to a running instance of Excel, if possible, but create a new instance otherwise, you may pass the **[RUNNING OR NEW]** option for the **[DEF_OBJECT](Referencing%20a%20COM%20Object.htm#runningnew)** directive by entering the command as:

> excel_obj=NEW("*obj/excel","running or new")

> **_Where:_**

> "running or new" is case insensitive.

_(The ability to instantiate the Excel object by passing the [RUNNING OR NEW] parameter was added in PxPlus 2025.)_

To access any of the available properties and/or methods, the Excel object handle (**excel_obj**) is used, followed by an **'**  _(apostrophe)_ and the property or method (with the desired parameters).

**_Examples:_**

> cw=excel_obj'ACTIVE_SHEET  
>   
> retVal=excel_obj'OpenWorkbook("C:/Application/Spreadsheet Location/test.xlsx")

#### **Note:**  
If you are familiar with the Excel.Application extended object, all existing properties and methods will continue to be accessible by referencing the **EXCEL** property.  
  
**_Example:_**  
  
C=excel_obj'EXCEL'WORKBOOKS'Count

**_When an Error is Encountered_**

In case of method failure, the **[ERROR](Extended%20Objects.htm#error)** object can be used to get additional information about the last error encountered.

**_Example:_**

If Excel is unable to open the workbook in the previous example because the "C:/Application/Spreadsheet Location/test.xlsx" file does not exist, retVal will be equal to '0'. Checking the **Description$** property of the **[ERROR](Extended%20Objects.htm#error)** object may also provide more information:

> PRINT excel_obj'ERROR'Description$  
>   
>  'C:\Application/Spreadsheet Location/test.xlsx' could not be found. Check the spelling of the file name, and verify that the file location is correct.  
>  If you are trying to open the file from your list of most recently used files, make sure that the file has not been renamed, moved or deleted.

**_Global Named Constants_**

The Excel Application makes use of hundreds of global named constants. If required, these constants may be accessed by using the **[PVXCONSTANTS](Extended%20Properties%20and%20Methods.htm#pvxconstants)** object, which has been defined as a property called **ECONSTANTS**. See **[*CONSTANTS](Extended%20Objects.htm#constants)**.

**_Example:_**

> PRINT excel_obj'ECONSTANTS'xlNoChanges _(__should return 4)_

##  Properties and Methods

The **_properties_** used by the Excel object are listed below.

**Property** |  **Description**  
---|---  
**ACTIVE_RANGE** |  **_(Read Only)_** Handle to the active range object (selected cells) for the active worksheet. Used in conjunction with setting fonts/colors, reading and writing when not specifying a range. This property corresponds to the EXCEL'Selection value and defaults to the selected range when the worksheet was last saved (regardless of whether the save was done using this Excel Object or from within Excel itself). See **[SetRange Methods](Excel%20Object.htm#methodsrange)**.

#### **Note:**  
Since it is not possible to know the active range on a newly-opened worksheet, it is good practice to either set the range (i.e. **[SetRange](Excel%20Object.htm#setrange)**, **[SetRangeColumn](Excel%20Object.htm#setrangecol)** or **[SetRangeRow](Excel%20Object.htm#setrangerow)**) before assuming the default range on subsequent method calls or specify the range to use (cells$) in each individual method call.  
  
**ACTIVE_SHEET** |  **_(Read Only)_** Handle to the active worksheet object. This is the active worksheet on the active workbook and corresponds to the EXCEL'ActiveSheet value. Defaults to the active worksheet when the workbook was last saved. See **[SetWorksheet](Excel%20Object.htm#setworksheet)** method.  
**ACTIVE_WORKBOOK** |  **_(Read Only)_** Handle to the active workbook object. This property corresponds to the EXCEL'ActiveWorkbook value. See **[SetWorkbook](Excel%20Object.htm#setworkbook)** method.  
**CASE_SENSITIVE_SEARCH** |  Defaults to '0' for case insensitive searches. Set to '1' for case sensitive searches. See **[FindReplaceAll](Excel%20Object.htm#findreplaceall)** method.  
**DISPLAY_ALERTS** |  Allows suppression of Excel message boxes. Defaults to **_Off_** ('0').  
**ECONSTANTS** |  **_(Read Only)_** Handle to the Excel **[CONSTANTS](Extended%20Objects.htm#constants)** object.  
**ERROR** |  **_(Read Only)_** Handle to the Excel **[ERROR](Extended%20Objects.htm#error)** object. Can be used to display the last error message via the **Description$** property.  
**EXCEL** |  **_(Read Only)_** Handle to the main Excel object.

#### **Note:**  
This property **_cannot be set_** but is provided to allow access to all of the properties and methods in the Excel Application.  
  
**KEEP_VISIBLE** |  Set to a non-zero value to keep the Excel application active and visible when the PxPlus Excel Object is dropped. Has no effect if the **VISIBLE** property has not been set. Defaults to **_Off_** ("0"). _(The KEEP_VISIBLE property was added in PxPlus 2020.)_  
**LAST_COLUMN** |  **_(Read Only)_** Column number of the last column of data in the active spreadsheet **[(ACTIVE_SHEET)](Excel%20Object.htm#active_sheet)**. _(The LAST_COLUMN property was added in PxPlus 2019.)_  
**LAST_ROW** |  **_(Read Only)_** Row number of the last row of data in the active spreadsheet **[(ACTIVE_SHEET)](Excel%20Object.htm#active_sheet)**. _(The LAST_ROW property was added in PxPlus 2019.)_  
**MATCH_ENTIRE_CELL** |  Defaults to '0' for partial matches within cell contents. Set to '1' to force matches on the entire cell contents. See **[FindReplaceAll](Excel%20Object.htm#findreplaceall)** method.  
**SEP$** |  Delimiter used on various **Read$** and **Write** methods to separate individual cell values. Defaults to the standard PxPlus field delimiter SEP ($8A$). See **[Cell Values Methods](Excel%20Object.htm#methodscellval)**. _(The SEP$ property was added in PxPlus 2018.)_  
**VISIBLE** |  Allows the Excel application to be visible. Defaults to **_Off_** ('0').  
**WORKBOOKS_COUNT** |  **_(Read Only)_** Number of workbooks opened. This property corresponds to the EXCEL'WORKBOOKS'Count value.  
  
The **_methods_** used by the Excel object are listed below. To make it easier to locate information for a particular method, this list has been broken into the following smaller groups:

|  **[Workbook Methods](Excel%20Object.htm#methodsworkbk)** |  For creating, opening, setting, saving and closing a workbook  
---|---|---  
|  **[Worksheet Methods](Excel%20Object.htm#methodsworksht)** |  For creating, printing, setting and hiding/showing a worksheet  
|  **[Range Methods](Excel%20Object.htm#methodsrange)** |  For setting a range  
|  **[Cell Values Methods](Excel%20Object.htm#methodscellval)** |  For finding, replacing, reading and writing cell values  
|  **[Cell Formatting Methods](Excel%20Object.htm#methodscellfmt)** |  For setting text color, fill (background) color, font, and number format  
|  **[Number Formatting Methods](Excel%20Object.htm#methodsnumfmt)** |  For setting a numeric format  
|  **[Column Methods](Excel%20Object.htm#methodscol)** |  For deleting and inserting columns  
|  **[Row Methods](Excel%20Object.htm#methodsrow)** |  For deleting and inserting rows  
  
**_Common Parameters_**

The following is a list of some of the common parameters used by multiple methods of the Excel object:

**Parameter** |  **Description**  
---|---  
_workbook_ |  1-based index number of the Excel workbook.  
_workbook_name_ _$_ |  Simple workbook name without the full path (e.g. _"test_workbook.xlsx"_).  
_path$**or** workbook_path$_ |  Full path name for the workbook (e.g. _"c:/application/test_workbook.xlsx"_).  
_cells$_ |  Range of cells to be considered. **_Example:_**  
  
"A12" would specify a single cell.  
"A2:D5" would denote a group of cells from column A, line 2 to column D, line 5. To use a previously named range, _cells$_ would be set to the name of the range itself (e.g. _"header_row"_).  
  
**_Workbook Methods_**

**Workbook Methods** |  **Description**  
---|---  
**CloseWorkbook( )** **CloseWorkbook(**_workbook_**)** **CloseWorkbook(**_workbook_name_ _$_**)** |  Closes the workbook specified by either an index number or a simple workbook name. If no workbook is specified, the active workbook will be closed.

#### **Note:**  
Any unsaved changes in a workbook are **_not_** saved if the **[DISPLAY_ALERTS](Excel%20Object.htm#displayalerts)** property is set to '0' (zero), the default value. To prompt the user about saving the changes, set **DISPLAY_ALERTS** to '1'. To ensure that all changes are saved and minimize user intervention, be sure to save the workbook prior to closing.

Returns '1' if successful. Returns '0' if Excel was unable to locate or close the workbook.  
**CloseWorkbooks( )** |  Closes all open workbooks. This method is called automatically when the Excel object is dropped.

#### **Note:**  
Any unsaved changes in the workbooks are **_not_** saved if the **[DISPLAY_ALERTS](Excel%20Object.htm#displayalerts)** property is set to '0' (zero), the default value. To prompt the user about saving the changes, set **DISPLAY_ALERTS** to '1'. To ensure that all changes are saved and minimize user intervention, be sure to save the workbooks prior to closing.

Returns '1' if successful. Returns '0' if Excel was unable to close the workbooks.  
**CreateWorkbook(**_path$_**)** **CreateWorkbook(**_path$_ ,_overwrite_flag_**)** |  Creates a new Excel workbook (_path$_) according to the default Excel template. The _path$_ parameter may be either a simple or full pathname. The new workbook is opened and becomes the **[ACTIVE_WORKBOOK](Excel%20Object.htm#active_workbk)**. **[ACTIVE_SHEET](Excel%20Object.htm#active_sheet)** will default to the first worksheet, and **[ACTIVE_RANGE](Excel%20Object.htm#active_range)** will default to the first cell. If the _path$_ parameter is null, the workbook is named according to the default Excel template (e.g. _Book1.xlsx_). It is not advisable to use a null name when running multiple sessions on the same machine as only one user will be able to open the default template file at the same time.

#### **Note:**  
In case of a pre-existing file named _path$_ , set the _overwrite_flag_ parameter to '1' to overwrite the file without displaying a message box to the user.

Returns '1' if successful. Returns '0' if Excel was unable to add the workbook or if an existing workbook with the same name is already in use.  
**OpenWorkbook(**_path$_**)** |  Opens the Excel workbook located at pathname _path$_. After opening a workbook, the **[ACTIVE_WORKBOOK](Excel%20Object.htm#active_workbk)** property is set to the workbook object corresponding to the workbook just opened. The **[ACTIVE_SHEET](Excel%20Object.htm#active_sheet)** property is set according to the value when the workbook was last saved. Returns '1' if successful. Returns '0' if the path specified was invalid or if Excel was unable to open the workbook.  
**SaveAsWorkbook(**_workbook_path_ _$_**)** **SaveAsWorkbook(**_workbook_path$,workbook_**)** **SaveAsWorkbook(**_workbook_path$,workbook_name$_**)** |  Used to save a workbook to a different location or with a different file format. Saves the workbook specified (by either an index number or a simple workbook name) with the pathname provided. If no workbook is specified, the active workbook is saved. If a full pathname is not provided, the workbook will be saved in the default Excel folder. The format used to save the workbook is determined by the extension specified in the _workbook_path_ _$_. Supported extensions are listed below (in alphabetical order). |  |  _.csv_ |  CSV (comma delimited) |  _.xlam_ |  Excel Add-In  
---|---|---|---|---  
|  _.dif_ |  DIF Data Interchange Format |  _.xls_ |  Excel 97 2003 Workbook  
|  _.htm, .html_ |  Web Page |  _.xlsb_ |  Excel Binary Workbook  
|  _.mht, .mhtml_ |  Single File Web Page |  _.xlsm_ |  Excel Macro-Enabled Workbook  
|  _.ods_ |  OpenDocument Spreadsheet |  _.xlsx (or null)_ |  Excel Workbook  
|  _.pdf_ |  PDF |  _.xlt_ |  Excel 97 2003 Template  
|  _.prn_ |  Formatted Text (space delimited) |  _.xltm_ |  Excel Macro-Enabled Template  
|  _.slk_ |  SYLK (Symbolic Link) |  _.xltx_ |  Excel Template  
|  _.txt._ |  Text (tab delimited) |  _.xml_ |  XML Data  
|  _.xla_ |  Excel 97 2003 Ad-In |  _.xps_ |  XPS Document  
  
Returns '1' if successful.

Returns '0' if the pathname is invalid, already exists, or if Excel was unable to save the workbook.

_(Support for other file formats was added in PxPlus 2018.)_  
  
**SaveWorkbook( )** **SaveWorkbook(**_workbook_**)** **SaveWorkbook(**_workbook_name_ _$_**)** |  Saves the workbook specified by either an index number or a simple workbook name. If no workbook is specified, the active workbook is saved. Returns '1' if successful. Returns '0' if Excel was unable to locate or save the workbook.  
**SaveWorkbooks( )** |  Saves the values in all currently opened workbooks. Returns '1' if successful. Returns '0' if Excel was unable to save any of the workbooks. Returns '-1' if Excel was only able to save some of the workbooks successfully.  
**SetWorkbook(**_workbook_**)** **SetWorkbook(**_workbook_name_ _$_**)** |  Sets the active workbook object **[ACTIVE_WORKBOOK](Excel%20Object.htm#active_workbk)** to the workbook specified by either an index number or a simple workbook name (e.g. _"1234.xlsx"_).

#### **Note:**  
Setting a workbook will also reset the **[ACTIVE_SHEET](Excel%20Object.htm#active_sheet)** value to the value corresponding to the new worksheet.

Returns '1' if successful. Returns '0' if Excel was unable to locate the workbook.  
  
**_Worksheet Methods_**

**Worksheet Methods** |  **Description**  
---|---  
**CreateWorksheet(**_worksheet_name_ _$_**)** **CreateWorksheet(**_worksheet_name$,tab_index_**)** |  Creates a new worksheet (_worksheet_name_ _$_) in the **[ACTIVE_WORKBOOK](Excel%20Object.htm#active_workbk)**. If no _tab_index_ is specified, the new worksheet will be inserted before the **[ACTIVE_SHEET](Excel%20Object.htm#active_sheet)**. If a _tab_index_ is specified, the worksheet will be inserted as the worksheet index specified. Specifying a _tab_index_ higher than the current number of worksheets will create the new worksheet as the last worksheet. If the _worksheet_name_ _$_ parameter is null, the default worksheet name will be used (i.e. '_SheetX_ _'_ where _X_ is an incremental number to avoid worksheet name conflicts). Returns '1' if successful. Returns '0' if Excel was unable to add the worksheet. _(The CreateWorksheet(worksheet_name$,tab_index) method was added in PxPlus 2018.)_  
**PrintWorksheet( )** **PrintWorksheet(**_worksheet_**)** **PrintWorksheet(**_worksheet_name_ _$_**)** |  Prints the worksheet specified by either an index number or a simple worksheet name. If no worksheet is specified, the active worksheet is printed.

#### **Note:**  
No printer dialog will be displayed. The worksheet will be printed to the default Excel printer with the default settings.

Returns '1' if successful. Returns '0' if Excel was unable to locate the worksheet.  
**SetWorksheet(**_worksheet_**)** **SetWorksheet(**_worksheet_name_ _$_**)** |  Sets the active worksheet object **[ACTIVE_SHEET](Excel%20Object.htm#active_sheet)** to the worksheet specified by either an index number or a simple worksheet name (e.g. _"Sheet1"_). Returns '1' if successful. Returns '0' if Excel was unable to locate the worksheet. Returns '-1' if the worksheet exists but is hidden. _(Support for hiding the worksheet was added in PxPlus 2021 Update 1.)_  
**WorksheetHide(**_worksheet_**)** **WorksheetHide(**_worksheet_name_ _$_**)** |  Hides the specified worksheet, which the user can make visible via menu. Returns '1' if successful. Returns '0' if Excel was unable to locate the worksheet. _(The WorksheetHide method was added in PxPlus 2021 Update 1.)_  
**WorksheetVeryHide(**_worksheet_**)** **WorksheetVeryHide(**_worksheet_name_ _$_**)** |  Hides the specified worksheet so that the user cannot make the object visible via menu. Returns '1' if successful. Returns '0' if Excel was unable to locate the worksheet. _(The WorksheetVeryHide method was added in PxPlus 2021 Update 1.)_  
**WorksheetVisible(**_worksheet_**)** **WorksheetVisible(**_worksheet_name_ _$_**)** |  Makes the specified worksheet visible (not hidden). Returns '1' if successful. Returns '0' if Excel was unable to locate the worksheet. _(The WorksheetVisible method was added in PxPlus 2021 Update 1.)_  
  
**_Range Methods_**

**Range Methods** |  **Description**  
---|---  
**SetRange(**_cells$_**)** **SetRange(**_cells$,worksheet_**)** **SetRange(**_cells$,worksheet_name$_**)** |  Sets the active range object **[ACTIVE_RANGE](Excel%20Object.htm#active_range)**. When no worksheet is specified, the range will be set on the active worksheet. Pass either a worksheet index number or a simple worksheet name to define a range on a different worksheet. Specify the range in the _cells$_ variable (e.g. _"A12"_ or _"A2:D5"_ or _range_name_ _$_). Returns '1' if successful. Returns '0' if Excel was unable to locate the worksheet or set the range. _(The capability to specify a range_name$ was added in PxPlus 2018.)_  
**SetRangeColumn(**_col_**)** **SetRangeColumn(**_col,worksheet_**)** **SetRangeColumn(**_col,worksheet_name_ _$_**)** **SetRangeColumn(**_col$_**)** **SetRangeColumn(**_col$,worksheet_**)** **SetRangeColumn(**_col$,worksheet_name$_**)** |  Sets the active range object **[ACTIVE_RANGE](Excel%20Object.htm#active_range)** to a particular column number (_col_) or letter (_col$_).

#### **Note:**  
An Excel column contains 1,048,576 rows. If this range is used to subsequently set a font, a text color or a fill color, only the first 16,385 cells in the range will be considered.

When no worksheet is specified, the range will be set to a column on the active worksheet. Pass either a worksheet index number or a simple worksheet name to define a column range on a different worksheet. Returns '1' if successful. Returns '0' if Excel was unable to locate the worksheet or set the range.  
**SetRangeRow(**_row_**)** **SetRangeRow(**_row,worksheet_**)** **SetRangeRow(**_row,worksheet_name_ _$_**)** |  Sets the active range object **[ACTIVE_RANGE](Excel%20Object.htm#active_range)** to a particular row (_row_).

#### **Note:**  
An Excel row includes 16,384 columns.

When no worksheet is specified, the range will be set to a row on the active worksheet. Pass either a worksheet index number or a simple worksheet name to define a row range on a different worksheet. Returns '1' if successful. Returns '0' if Excel was unable to locate the worksheet or set the range.  
**AddNamedRange(**_name$,cells_ _$_**)** **AddNamedRange(**_name$,cells$,worksheet_**)** **AddNamedRange(**_name,cells$,worksheet_name$_**)** |  Creates a _named_ range with the specified _name$_ and range (_cells$_).

#### **Note:**  
A range name (_name$_) **_cannot_** contain any spaces.

When no worksheet is specified, the named range will be created on the active worksheet. Pass either a worksheet index number or a simple worksheet name to define the named range on a different worksheet. Once a named range is created, the name of the range (_name$_) may be used to refer to the range in any method where a range is specified (_cells$_). Returns '1' if successful. Returns '0' if Excel is not able to create the named range with the parameters provided. _(The AddNamedRange method was added in PxPlus 2018.)_  
**DeleteNamedRange(**_name$_**)** **DeleteNamedRange(**_name$,worksheet_**)** **DeleteNamedRange(**_name$,worksheet_name$_**)** |  Deletes a previously created _named_ range (_name$_).

#### **Note:**  
A range name (_name$_) **_cannot_** contain any spaces.

When no worksheet is specified, the named range will be deleted from the active worksheet. Pass either a worksheet index number or a simple worksheet name to delete the named range from a different worksheet. Returns '1' if successful. Returns '0' if Excel is not able to delete the named range with the parameters provided. _(The DeleteNamedRange method was added in PxPlus 2018.)_  
  
**_Cell Values Methods_**

**Cell Values Methods** |  **Description**  
---|---  
**FindReplaceAll(**_find$,replace_ _$_**)** **FindReplaceAll(**_find$,replace$,worksheet_**)** **FindReplaceAll(**_find$,replace$,worksheet_name$_**)** |  Finds cells with the value _find$_ and replaces all occurrences with the string _replace$_. When only the _find$_ and _replace_ $ parameters are passed, the Find/Replace is performed on the active worksheet. Pass either a worksheet index number or a simple worksheet name to perform the Find/Replace on a worksheet other than the active worksheet without changing the **[ACTIVE_SHEET](Excel%20Object.htm#active_sheet)** property. To perform the Find/Replace on all opened worksheets, pass a _worksheet_name_ _$_ of '**ALL** ' (case insensitive). Searches will be case insensitive by default. For case sensitive searches, set the **[CASE_SENSITIVE_SEARCH](Excel%20Object.htm#casesearch)** property to '1'. By default, the _find$_ value will be replaced if it is located anywhere within a cell value. Set the **[MATCH_ENTIRE_CELL](Excel%20Object.htm#matchcell)** property to '1' to replace text only if the entire cell contents is equal to the _find$_ value. Returns '1' if successful. Returns '0' if Excel was unable to find/replace on any of the worksheets specified or if the _find$_ value was not found. **_When finding/replacing on all worksheets_** : Returns '-1' if Excel was only able to perform find/replace on some of the worksheets successfully.  
**Read$( )** **Read$(**_cells$_**)** **Read$(**_cells$,worksheet_**)** **Read$(**_cells$,worksheet_name$_**)** |  Reads data from a worksheet. When no worksheet is specified, the data will be read from the active worksheet. Pass either a worksheet index number or a simple worksheet name to read data from a different worksheet without changing the **[ACTIVE_SHEET](Excel%20Object.htm#active_sheet)** property. When no range is specified in _cells$_ , data is read from the active range in the active worksheet. Pass a value in the _cells$_ parameter (e.g. _"A12"_ or _"A2:D5"_ or _range_name_ _$_) to specify a different range without changing the **[ACTIVE_RANGE](Excel%20Object.htm#active_range)** property. When the _cells$_ value corresponds to a single cell in the worksheet, a string value is returned. When the _cells$_ value corresponds to a range of 2 or more cells, a **[SEP$](Excel%20Object.htm#sep)** delimited string is returned. If a problem is encountered, a null string is returned. _(The capability to specify a range_name$ was added in PxPlus 2018.)_  
**Write(**_cell_values_ _$_**)** **Write(**_cell_values$,cells_ _$_**)** **Write(**_cell_values$,cells$,worksheet_**)** **Write(**_cell_values$,cells$,worksheet_name$_**)** |  Writes data to a spreadsheet. When no worksheet is specified, the data will be written to the active worksheet. Pass either a worksheet index number or a simple worksheet name to write data to a different worksheet without changing the **[ACTIVE_SHEET](Excel%20Object.htm#active_sheet)** property. When no range is specified in _cells$_ , data is written to the active range in the active worksheet. Pass a value in the _cells$_ parameter (e.g. _"A12"_ or "_A2:D5"_ or _range_name_ _$_) to specify a different range without changing the **[ACTIVE_RANGE](Excel%20Object.htm#active_range)** property. When writing data to a single cell, _cell_values_ _$_ should contain a string value. When writing to a range of cells, _cell_values_ _$_ should contain a string value delimited with a delimiter corresponding to the current value in the **[SEP$](Excel%20Object.htm#sep)** property. **_Example:_** When SEP$=SEP:  
  
 _cell_values_ _$_ = "value one" + SEP + "value two" + SEP + "value three" + SEP Returns '0' if the data was not written. Returns '1' if the data was written successfully and the number of specified cell values (_cell_values_ _$_) matched the number of cells in the specified range (_cells$_). Returns '-1' if the data was written but the number of specified cell values (_cell_values_ _$_) did **_not_** match the number of cells in the specified range _(cells$)_. In this case, one of the following instances can occur: If the number of cell values _(cell_values$)_ is **_greater_** than the number of cells in the specified range _(cells$)_ , the remaining cell values not written to a cell will be ignored. If the number of cell values _(cell_values$)_ is **_fewer_** than the number of cells in the specified range _(cells$)_ , null values will be written into the remaining cells in that range to which no cell values were assigned. _(The capability to specify a range_name$ was added in PxPlus 2018.)_  
  
**_Cell Formatting Methods_**

**Cell Formatting Methods** |  **Description**  
---|---  
**AutoFitAll( )** **AutoFitAll(**_worksheet_**)** **AutoFitAll(**_worksheet_name_ _$_**)** |  Sets the **[AutoFit](../../../properties/autofit.md)** property for all columns and rows in a worksheet specified by either an index number or a worksheet name. If no worksheet is specified, the active worksheet is used. Should be used after the cells are populated to adjust column widths and row heights to fit the existing data. Returns '1' if successful. Returns '0' if Excel was unable to locate the worksheet or set the range. _(The AutoFitAll method was added in PxPlus 2025.)_  
**AutoFitColumns( )** **AutoFitColumns(**_cells$_**)** **AutoFitColumns(**_cells$,worksheet_**)** **AutoFitColumns(**_cells$,worksheet_name$_**)** |  Sets the **[AutoFit](../../../properties/autofit.md)** property for the columns for a range of cells in a given worksheet. When no worksheet is specified, the column widths will be autofitted on the active worksheet. Pass either a worksheet index number or a simple worksheet name to autofit column widths on a different worksheet without changing the **[ACTIVE_SHEET](Excel%20Object.htm#active_sheet)** property. When no range is specified in _cells$_ , the column widths will be autofitted for the active range of the specified worksheet or the entire worksheet if there is no active range. Pass a value in the _cells$_ parameter (e.g. _"A12"_ or _"A2:D5"_ or _range_name_ _$_) to specify a different range without changing the **[ACTIVE_RANGE](Excel%20Object.htm#active_range)** property. Should be used after the cells are populated to adjust column widths to fit the existing data. Returns '1' if successful. Returns '0' if Excel was unable to locate the worksheet or set the range. _(The AutoFitColumns method was added in PxPlus 2025.)_  
**AutoFitRows( )** **AutoFitRows(**_cells$_**)** **AutoFitRows(**_cells$,worksheet_**)** **AutoFitRows(**_cells$,worksheet_name$_**)** |  Sets the **[AutoFit](../../../properties/autofit.md)** property for the rows in a range of cells in a given worksheet. When no worksheet is specified, the row heights will be autofitted on the active worksheet. Pass either a worksheet index number or a simple worksheet name to autofit row heights on a different worksheet without changing the **[ACTIVE_SHEET](Excel%20Object.htm#active_sheet)** property. When no range is specified in _cells$_ , the row heights will be autofitted for the active range of the specified worksheet or the entire worksheet if there is no active range. Pass a value in the _cells$_ parameter (e.g. _"A12"_ or _"A2:D5"_ or _range_name_ _$_) to specify a different range without changing the **[ACTIVE_RANGE](Excel%20Object.htm#active_range)** property. Should be used after the cells are populated to adjust row heights to fit the existing data. Returns '1' if successful. Returns '0' if Excel was unable to locate the worksheet or set the range. _(The AutoFitRows method was added in PxPlus 2025.)_  
**SetColor(**_color_index_**)** **SetColor(**_color$_**)** **SetColor(**_color_index,cells_ _$_**)** **SetColor(**_color$,cells_ _$_**)** **SetColor(**_color_index,cells$,worksheet_**)** **SetColor(**_color$,cells$,worksheet_**)** **SetColor(**_color_index,cells$,worksheet_name$_**)** **SetColor(**_color$,cells$,worksheet_name$_**)** |  Sets the text color for a range of cells in a given worksheet. When no worksheet is specified, the text color will be set on the active worksheet. Pass either a worksheet index number or a simple worksheet name to define the text color on a different worksheet without changing the **[ACTIVE_SHEET](Excel%20Object.htm#active_sheet)** property. When no range is specified in _cells$_ , the text color will be set in the active range of the specified worksheet. Pass a value in the _cells$_ parameter (e.g. _"A12"_ or _"A2:D5"_ or _range_name_ _$_) to specify a different range without changing the **[ACTIVE_RANGE](Excel%20Object.htm#active_range)** property.

#### **Note:**  
If the active range contains more than 16,385 cells (e.g. an entire column), the text color will only be set for the first 16,385 cells in the range.

The text color may be passed as one of the following: A color index (numeric)  
An RBG value in the format "**RGB(**_rrr,ggg,bbb_**)** " (string)  
One of the 16 basic PxPlus named colors such as 'Red', 'Dark Blue' or 'Light Cyan' (string) _(RGB values were added in PxPlus 2019.)_

#### **Note:**  
An Excel color index is an integer value ranging from 1 to 56.

Returns '1' if successful. Returns '0' if Excel is unable to determine the worksheet or range. _(The capability to specify a range_name$ was added in PxPlus 2018.)_  
**SetFillColor(**_color_index_**)** **SetFillColor(**_color$_**)** **SetFillColor(**_color_index,cells_ _$_**)** **SetFillColor(**_color$,cells_ _$_**)** **SetFillColor(**_color_index,cells$,worksheet_**)** **SetFillColor(**_color$,cells$,worksheet_**)** **SetFillColor(**_color_index,cells$,worksheet_name$_**)** **SetFillColor(**_color$,cells$,worksheet_name$_**)** |  Sets the fill (background) color for a range of cells in a given worksheet. When no worksheet is specified, the fill color will be set on the active worksheet. Pass either a worksheet index number or a simple worksheet name to define the fill color on a different worksheet without changing the **[ACTIVE_SHEET](Excel%20Object.htm#active_sheet)** property. When no range is specified in _cells$_ , the fill color will be set in the active range of the specified worksheet. Pass a value in the _cells$_ parameter (e.g. _"A12"_ or _"A2:D5"_ or _range_name_ _$_) to specify a different range without changing the **[ACTIVE_RANGE](Excel%20Object.htm#active_range)** property.

#### **Note:**  
If the active range contains more than 16,385 cells (e.g. an entire column), the fill color will only be set for the first 16,385 cells in the range.

The fill color may be passed as a color index (numeric), an RGB value in the format "**RGB(**_rrr,ggg,bbb_**)** " (string), or as one of the 16 basic PxPlus named colors such as 'red', 'dark blue' or 'light cyan' (string). _(RGB values were added in PxPlus 2019.)_

#### **Note:**  
An Excel color index is an integer value ranging from 1 to 56.

Returns '1' if successful. Returns '0' if Excel is unable to determine the worksheet or range. _(The capability to specify a range_name$ was added in PxPlus 2018.)_  
**SetFont(**_font$_**)** **SetFont(**_font$,cells_ _$_**)** **SetFont(**_font$,cells$,worksheet_**)** **SetFont(**_font$,cells$,worksheet_name$_**)** |  Sets font information (font name, font size, font style) for a range of cells in a given worksheet. When no worksheet is specified, the font will be set on the active worksheet. Pass either a worksheet index number or a simple worksheet name to define the font on a different worksheet without changing the **[ACTIVE_SHEET](Excel%20Object.htm#active_sheet)** property. When no range is specified in _cells$_ , the font will be set in the active range of the specified worksheet. Pass a value in the _cells$_ parameter (e.g. _"A12"_ or _"A2:D5"_ or _range_name_ _$_) to specify a different range without changing the **[ACTIVE_RANGE](Excel%20Object.htm#active_range)** property.

#### **Note:**  
If the active range contains more than 16,385 cells (e.g. an entire column), the font will only be set for the first 16,385 cells in the range.

The _font$_ variable can pass font name, font size and font style (Bold, Italic, etc.), separated by commas. **_Example:_**  
_  
_ _font$_ ="Arial" sets only the font name.  
_font_ _$_ ="Arial,12" sets the font name and size.  
_font_ _$_ ="Arial,12, Italic" sets the font name and size and adds italics to the text in the range.  
_font_ _$_ ="Arial,12, Bold, Underline-" sets the font name and size, adds bolding and removes any underlining.  
 _font_ _$_ ="Arial,12, Regular" sets the font name and size and removes any bolding, italics and underlining.

#### **Note:**  
Valid _fontstyle_ _$_ values are 'Regular', 'Bold+', 'Bold-', 'Bold' (same as 'Bold+'), 'Italic+', 'Italic-', 'Italic' (same as 'Italic+'), 'Underline+', 'Underline-', 'Underline' (same as 'Underline+') or any combination of these.

Returns '1' if successful. Returns '0' if Excel is unable to determine the worksheet or range. _(The capability to specify a range_name$ was added in PxPlus 2018.)  
__(Support for removing bolding, italics and underlining was added in PxPlus 2021.)_  
  
**_Number Formatting Methods_**

**Number Formatting Methods** |  **Description**  
---|---  
**SetNumFormat(**_format$_**)** **SetNumFormat(**_format$,cells_ _$_**)** **SetNumFormat(**_format$,cells$,worksheet_**)** **SetNumFormat(**_format$,cells$,worksheet_name$_**)** |  Sets a numeric format for a specified range of the worksheet specified by either a worksheet index number or a simple worksheet name. If no worksheet is specified, the active worksheet is used. If no range is specified (_cells$_), the active range is used. The _format$_ can be defined as a custom value or as a value corresponding to the following standard formats available in Excel: |  **_format$_ Value (case insensitive)** |  **Format sent to Excel**  
---|---  
_General_ |  General  
_Number_ |  0  
_Currency_ |  $#,##0.00;[Red]$#,##0.00"  
_Accounting_ |  _($* #,##0.00_);_($* (#,##0.00);_($* "+QUO+"-"+QUO+"??_);_(@_)  
_Date_ |  m/d/yyyy  
_Short Date_ |  m/d/yyyy  
_Long Date_ |  dddd, mmmm dd, yyyy  
_Time_ |  [$-F400]h:mm:ss am/pm  
_Percentage_ |  0.0000%  
_Fraction_ |  # ?/?  
_Scientific_ |  0.00E+00  
_Text_ |  @  
_Any Custom Format_ |  Format supplied  
  
Returns '1' if successful.

Returns '0' if Excel is unable to locate the specified worksheet or range.

_(The SetNumFormat method was added in PxPlus 2023.)_  
  
**_Column Methods_**

**Column Methods** |  **Description**  
---|---  
**DeleteColumn(**_col_**)** **DeleteColumn(**_col,worksheet_**)** **DeleteColumn(**_col,worksheet_name_ _$_**)** **DeleteColumn(**_col$_**)** **DeleteColumn(**_col$,worksheet_**)** **DeleteColumn(**_col$,worksheet_name$_**)** |  Deletes column number _col_ (or column letter _col$_) in the worksheet specified by either a worksheet index number or a simple worksheet name. If no worksheet is specified, the column is deleted from the active worksheet. Returns '1' if successful. Returns '0' if Excel is unable to locate the worksheet.  
**InsertColumn(**_col_**)** **InsertColumn(**_col,worksheet_**)** **InsertColumn(**_col,worksheet_name_ _$_**)** **InsertColumn(**_col$_**)** **InsertColumn(**_col$,worksheet_**)** **InsertColumn(**_col$,worksheet_name$_**)** |  Inserts a new blank column number _col_ (or column letter _col$_) in the worksheet specified by either a worksheet index number or a simple worksheet name. If no worksheet is specified, the column is inserted into the active worksheet. Returns '1' if successful. Returns '0' if Excel is unable to locate the worksheet.  
**SetColumnWidth(**_width_**)** **SetColumnWidth(**_width,cells_ _$_**)** **SetColumnWidth(**_width,cells$,worksheet_**)** **SetColumnWidth(**_width,cells$,worksheet_name$_**)** |  Sets the width of all columns in a specified range of the worksheet specified by either a worksheet index number or a simple worksheet name. If no worksheet is specified, the active worksheet is used. If no range is specified (_cells$_), the active range is used. Returns '1' if successful. Returns '0' if Excel is unable to locate the specified worksheet or range. _(The SetColumnWidth method was added in PxPlus 2018.)_  
  
**_Row Methods_**

**Row Methods** |  **Description**  
---|---  
**DeleteRow(**_row_**)** **DeleteRow(**_row,worksheet_**)** **DeleteRow(**_row,worksheet_name_ _$_**)** |  Deletes row number _row_ in the worksheet specified by either a worksheet index number or a simple worksheet name. If no worksheet is specified, the row is deleted from the active worksheet. Returns '1' if successful. Returns '0' if Excel is unable to locate the worksheet.  
**InsertRow(**_row_**)** **InsertRow(**_row,worksheet_**)** **InsertRow(**_row,worksheet_name_ _$_**)** |  Inserts a new blank row number _row_ in the worksheet specified by either a worksheet index number or a simple worksheet name. If no worksheet is specified, the row is inserted into the active worksheet. Returns '1' if successful. Returns '0' if Excel is unable to locate the worksheet.  
  
## Example Program

An **_Example_** program is provided below.

> ! Test excel object  
>  !  
>  ! instantiate object  
>  x=NEW("*obj/excel")  
>  !  
>  ! Open workbook   
>  path$="c:\spreadsheets\2759.xlsx"  
> wb=x'OpenWorkbook(path$)  
>  !  
>  ! Open another workbook   
>  Path2$="c:\spreadsheets\another.xlsx"  
>  wb2=x'OpenWorkbook(path2$)   
>  !  
>  ! Set Worksheet by name  
> ws=x'SetWorksheet("sheet1")  
>  !  
>  ! Read a value in cell C2 of active worksheet  
>  c$=x'read$("C2")  
>  !  
>  ! Write a value to cell C3 in active worksheet  
> retVal=x'write("*THIS HAS BEEN CHANGED!*","C3")  
>  !  
>  ! Read row 3 in worksheet 2  
>  r=x'SetRange("A3:E3",2)  
>  range$=x'read$()  
>  !  
>  ! Write to row 3 (active range in worksheet 2)  
> new_range$="*Column 1*"+SEP+"*Column 2*"+SEP+"*Column3*"+SEP+"*Column 4*"+SEP+"*Column 5*"+SEP  
> retVal=x'write(new_range$)  
>  !  
>  ! Read column 4 (D) in worksheet 1  
>  row$=x'read$("D1:D10",1)  
>  !  
>  ! Switch back to first workbook  
> retVal=x'SetWorkbook(1)  
>  !  
>  ! Set a range  
>  r=x'SetRange("A1:D4")   
>  !  
>  ! Set Font for active range and worksheet   
> retVal=x'SetFont("Arial,16,Bold")  
>  !  
>  ! Create a 'named' range for the first row  
> retVal=x'AddNamedRange("Headers","A1:Z1")  
>  !  
>  ! Set active range text color to red  
> retVal=x'SetColor(3)  
>  !  
>  ! Insert a row #5 in active worksheet  
> retVal=x'InsertRow(5)  
>  !  
>  ! Set the fill color to yellow for a different range in the third worksheet  
> retVal=x'SetFillColor("light yellow","B3:F8",3)  
>  !  
>  ! Set the text for column "C" to blue, Courier New  
>  r=x'SetRangeColumn("C")  
>  ret1=x'SetColor(5)  
>  ret2=x'SetFont("Courier New")  
>  !   
>  ! Set the numeric format for cell G9 to percentage format  
>  r=x'SetNumFormat("percentage","G9")  
>  !  
>  ! Set the numeric format for cell M7 to custom date format  
>  r=x'SetNumFormat("dd/mm/yyyy","M7")  
>  !  
>  ! Save workbook named "another.xlsx"  
> retVal=x'SaveWorkbook("another.xlsx")  
>  !  
>  ! Save current workbook as a web page  
> retVal=x'SaveAsWorkbook(path$+".htm")  
>  !  
>  ! Save changes for all workbooks  
> retVal=x'SaveWorkbooks()  
>  !   
>  ! Close workbook 1  
> retVal=x'CloseWorkbook(1)  
>  !  
>  ! Drop object  
>  DROP OBJECT x  
>  END

## See Also

**[PxPlus Word Object](Word%20Object.md)**  
**[Google Workspace Objects](../../../Google%20Workspace%20Objects/Introduction.md)**
