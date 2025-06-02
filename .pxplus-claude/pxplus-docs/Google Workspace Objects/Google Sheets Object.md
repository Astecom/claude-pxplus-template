# Google Workspace Objects

**PxPlus Google Sheets Object**|   
---|---  
  
The PxPlus **Google Sheets** object provides the ability to work with Google Workspace Sheets, a cloud-based spreadsheet application. This object consists of various properties and methods that are used to interact with Google Sheets spreadsheets. See **[Properties and Methods](Google%20Sheets%20Object.htm#properties)** below.

The Google Sheets object allows more than one spreadsheet to be opened at one time, and each spreadsheet can consist of one or multiple sheets.

_(The PxPlus Google Sheets object was added in PxPlus 2021.)_

The following terms are used in Google Sheets:

|  _Sheet_ |  A single page in which data is entered into grid columns and rows.  
---|---|---  
|  _Column_ |  Cells that are stacked vertically in a sheet. Column headers are labelled with alphabetical characters.  
|  _Row_ |  Cells that extend horizontally in a sheet. Row headers are labelled with numbers.  
|  _Cell_ |  The single point at which a column and row intersect (A1, B2, C4, etc.). A cell can contain a single piece of data.  
|  _Range_ |  A block of selected or highlighted cells (e.g. the range A3:B4 includes the cells A3, A4, B3 and B4).  
  
A range of cells can be optionally given a name (e.g. the range of cells A4:F4 can be named "SalesTotal"). A named range is easier to understand and simpler to use when creating formulas that reference values in other cells. For example, instead of using cell references in the formula =SUM(A4:F4), the range name can be used instead, as in =SUM(SalesTotal). Any range names that have been defined are saved with the sheet.  
|  _Spreadsheet_ |  Cloud-based file consisting of a collection of individual sheets that have been saved.  
  
## Instantiating the Object

To **_instantiate_** the Google Sheets object using the handle **sheets_obj** (where **sheets_obj** could be any numeric variable), enter the following command:

> sheets_obj=NEW("*obj/GoogleSheets",_client_ID$_ ,_client_secret$_**[** ,_login_token$_**]**)

The constructor requires a Client ID and Client Secret, both of which must be obtained from Google via the Google API Console. See **[Google API App Setup](App%20Setup.md)** for detailed steps.

The login token can be optionally used to avoid having to select a Google account and login more than once. See **[Google Authentication](Google%20Sheets%20Object.htm#googleauth)** for information on how to get a _login_token_ _$_.

To access any of the available properties and/or methods, the Google Sheets object handle (**sheets_obj**) is used, followed by an **'**  _(apostrophe)_ and the property or method (with the desired parameters).

**_Examples:_**

> sheet=sheets_obj'ACTIVE_SPREADSHEET  
>   
> retVal=sheets_obj'SetSpreadsheet(3)

**_Google Authentication_**

During object instantiation, the user will be asked to select and login to a Google account and allow PxPlus access to it via their default Web browser. When this process is completed, the **[Login( )](Google%20Sheets%20Object.htm#login)** method must be run to complete login to Google Sheets.

Successful login can be confirmed via the **[IsLoggedIn( )](Google%20Sheets%20Object.htm#isloggedin)** method. If successfully logged in, then spreadsheets can be read, modified and saved to the local file system.

Once logged in to Google Sheets, the **[LOGIN_TOKEN$](Google%20Sheets%20Object.htm#logintoken)** property can be accessed and saved to avoid having to select and login to a Google account, allow access, and run the **Login( )** method again. The login token can either be hard-coded into an encrypted program or saved to an encrypted file. The next time the Google Sheets objects gets instantiated, just include the saved login token and it will be logged into the same Google account automatically.

After one hour of inactivity, Google automatically expires a login. If logged in and Google expires the login, the next time you run a method, the object will automatically re-login. This may be noticeable if a method takes longer than usual to complete.

##  Cloud-Based Spreadsheets

Google Sheets spreadsheets are stored in your Google Drive cloud storage, not as local files. Google Drive supports directories and sub-directories. All methods of this object that support a spreadsheet path allow the Google Drive directories and the spreadsheet name to be specified so that spreadsheets can be organized more easily. For example, to create a new spreadsheet "ABC123456" in the Google Drives directory "Clients", the following method can be used:

> **CreateSpreadsheet**("Clients\ABC123456")

All modifications made to a Google Sheets spreadsheet are **_automatically_** saved. There are no Save methods. Modifications should not be made unless they are to be saved. If the original unmodified spreadsheet needs to be preserved, create a copy and modify it.

To work with a local spreadsheet, upload it to Google Sheets by using the **[UploadSpreadsheet( )](Google%20Sheets%20Object.htm#uploadspreadsheet)** method. This method converts the local spreadsheet file into a Google Sheets spreadsheet, allowing you to work with it using this object. Supported file types that can be uploaded and converted are Microsoft Excel (_.xls_ , _.xlsx_ , _.__xlt_), OpenDocument spreadsheet (_.ods_), CSV (_.csv_), TSV (_.tsv_) and plain text (_.txt_).

To download a Google Sheets spreadsheet, use the **[ExportSpreadsheet( )](Google%20Sheets%20Object.htm#exportspreadsheet)** method. This method converts the Google Sheets spreadsheet into a local spreadsheet file. The type of spreadsheet is determined by the file extension specified in the output path. Supported file types that a spreadsheet can be converted to and downloaded are Microsoft Excel (_.xls_ , _.xlsx_ , ._xlt_), Open Office sheet (_.ods_), HTML (_.htm_ , _.html_), zipped HTML (_.zip_), CSV (_.csv_), TSV (_.tsv_), plain text (_.txt_) and PDF (_.pdf_).

##  Properties and Methods

The **_properties_** used by the Google Sheets object are listed below.

**Property** |  **Description**  
---|---  
**ACTIVE_RANGE$** |  **_(Read Only)_** The active range string for the active sheet. Used in conjunction with setting fonts/colors, reading and writing when not specifying a range. When no active range is defined, **ACTIVE_RANGE$** is an empty string "". This property is set using the **[SetRange Methods](Google%20Sheets%20Object.htm#methodsrange)**.

#### **Note:**  
There is no active range on a newly opened sheet. It is good practice to either set the range (i.e. **[SetRange](Google%20Sheets%20Object.htm#setrange)**, **[SetRangeColumn](Google%20Sheets%20Object.htm#setrangecol)** or **[SetRangeRow](Google%20Sheets%20Object.htm#setrangerow)**) before assuming the default range on subsequent method calls or specify the range to use (cells$) in each individual method call.  
  
**ACTIVE_SHEET** |  **_(Read Only)_** Index (1-based) to the active sheet. This is the active sheet on the active spreadsheet. Returns 0 if there are no open spreadsheets. A newly opened spreadsheet will default the active sheet to 1. See **[SetSheet( )](Google%20Sheets%20Object.htm#methodssheet)** method.  
**ACTIVE_SPREADSHEET** |  **_(Read Only)_** Index (1-based) of the active open spreadsheet. See **[SetSpreadsheet( )](Google%20Sheets%20Object.htm#setspreadsheet)** method. If the **ACTIVE_SPREADSHEET** is not set with **SetSpreadsheet(** **)** method, it is always the last opened spreadsheet/highest index number. Returns '0' if no spreadsheets are opened.  
**CASE_SENSITIVE_SEARCH** |  Defaults to '0' for case insensitive searches. Set to '1' for case sensitive searches. See **[FindReplaceAll( )](Google%20Sheets%20Object.htm#findreplaceall)** method.  
**LAST_COLUMN** |  **_(Read Only)_** Column number of the last column of data in the active spreadsheet **[(ACTIVE_SHEET)](Google%20Sheets%20Object.htm#active_sheet)**.  
**LAST_ROW** |  **_(Read Only)_** Row number of the last row of data in the active spreadsheet **[(ACTIVE_SHEET)](Google%20Sheets%20Object.htm#active_sheet)**.  
**LOGIN_TOKEN$** |  Login token (also known as an Oauth2 refresh token) that can be used when instantiating the object to avoid having to login again.  
**MATCH_ENTIRE_CELL** |  Defaults to '0' for partial matches within cell contents. Set to '1' to force matches on the entire cell contents. See **[FindReplaceAll( )](Google%20Sheets%20Object.htm#findreplaceall)** method.  
**SEP$** |  Delimiter used on various **Read$** and **Write** methods to separate individual cell values. Defaults to the standard PxPlus field delimiter SEP ($8A$). See **[Cell Values Methods](Google%20Sheets%20Object.htm#methodscellval)**.  
**SPREADSHEETS_COUNT** |  **_(Read Only)_** Number of spreadsheets opened.  
  
The **_methods_** used by the Google Sheets object are listed below. To make it easier to locate information for a particular method, this list has been broken into the following smaller groups:

|  **[Authentication Methods](Google%20Sheets%20Object.htm#methodsauth)** |  For logging into Google and confirming logged in status  
---|---|---  
|  **[Spreadsheet Methods](Google%20Sheets%20Object.htm#methodsspreadsheet)** |  For creating, opening, exporting, uploading, setting and closing a spreadsheet  
|  **[Sheet Methods](Google%20Sheets%20Object.htm#methodssheet)** |  For creating and setting a sheet  
|  **[Range Methods](Google%20Sheets%20Object.htm#methodsrange)** |  For setting a range  
|  **[Cell Values Methods](Google%20Sheets%20Object.htm#methodscellval)** |  For finding, replacing, reading and writing cell values  
|  **[Cell Formatting Methods](Google%20Sheets%20Object.htm#methodscellfmt)** |  For setting text color, fill (background) color, font and number format  
|  **[Column Methods](Google%20Sheets%20Object.htm#methodscol)** |  For deleting and inserting columns  
|  **[Row Methods](Google%20Sheets%20Object.htm#methodsrow)** |  For deleting and inserting rows  
  
**_Common Parameters_**

The following is a list of some of the common parameters used by multiple methods of the Google Sheets object:

**Parameter** |  **Description**  
---|---  
_spreadsheet_ |  1-based index number of the open Google Sheets spreadsheet. The index is set in the list of sequentially opened spreadsheets. If SpreadsheetA, SpreadsheetB and SpreadsheetC were opened in that order, the corresponding indexes would be 1, 2 and 3. If SpreadsheetA was closed at index 1, then SpreadsheetB and SpreadsheetC would now have indexes 1 and 2 respectively.  
_spreadsheet_fileID_ _$_ |  Every spreadsheet in a Google Drive cloud has a unique file ID. The file ID is displayed in the address bar when a Google Sheets spreadsheet is opened in a Web browser. Since it is possible to have more than one spreadsheet with the same path, the file ID is used to specify a particular spreadsheet. This parameter is used by methods that end with **ByID**.  
_spreadsheet_path_ _$_ |  The Google Sheets path consists of any directories and a spreadsheet name. It can be used as a simple and readable method to specify a spreadsheet. This parameter is used by methods that end with **ByPath**.

#### **Note:**  
This path consists of the directories and spreadsheet name from the Google Sheets cloud, **_not_** the path to a spreadsheet on the local file system.  
  
_sheet_ |  1-based index number of a specific sheet in a spreadsheet. The index is set in the list of sequentially opened sheets.  
_sheet_name_ _$_ |  Name of a specific sheet in a spreadsheet.  
_cells$_ |  Range of cells to be considered. **_Example:_**  
  
"A12" would specify a single cell.  
"A2:D5" would denote a group of cells from column A, row 2 to column D, row 5.  
"A:B" would specify all of column A and column B.  
"2:2" would specify all of row 2. To use a previously named range, _cells$_ would be set to the name of the range itself (e.g. _"header_row"_).

#### **Note:**  
The sheet is defined as part of the named range. If specifying a named range, a sheet does not need to be specified. If specifying a named range and a particular sheet, the sheet defined in the named range is used.  
  
**_Authentication Methods_**

**Authentication Methods** |  **Description**  
---|---  
**IsLoggedIn( )** |  Returns '1' if logged into Google Sheets. Returns '0' if not yet logged into Google Sheets.

#### **Note:**  
After one hour of inactivity, Google Sheets will expire the login; however, this method will still return '1'.  
  
**Login( )** |  During object instantiation, the user will be asked to select a Google account and allow access to it. When this process is completed, run this method to complete login to Google Sheets. Returns '1' if successful. Returns '0' if any error is encountered while logging in.  
  
**_Spreadsheet Methods_**

**Spreadsheet Methods** |  **Description**  
---|---  
**CloseSpreadsheet( )** **CloseSpreadsheet(**_spreadsheet_**)** **CloseSpreadsheetByID(**_spreadsheet_fileID_ _$_**)** **CloseSpreadsheetByPath(**_spreadsheet_path_ _$_**)** |  Closes the spreadsheet specified by an index number, a Google Sheets file ID, or a Google Sheets path. If no spreadsheet is specified, the active spreadsheet will be closed. If you close the **ACTIVE_SPREADSHEET** , the **ACTIVE_SPREADSHEET** is set to the last opened spreadsheet still open; i.e. the highest spreadsheet index or 0 if no spreadsheets are left opened. The **ACTIVE_SHEET** is also reset to 1.

#### **Note:**  
When closing a spreadsheet, any spreadsheet opened after the closed spreadsheet was opened (any spreadsheet with a higher index) will have its index shifted down 1. For example, if closing the spreadsheet with index 2, the spreadsheet at index 3 becomes index 2.

Returns '1' if successful. Returns '0' if any error is encountered while closing the spreadsheet.  
**CloseSpreadsheets( )** |  Closes all open spreadsheets. Returns '1' if successful. Returns '0' if any error is encountered while closing the spreadsheets.  
**CopySpreadsheet(**_copy_path_ _$_**)** **CopySpreadsheet(**_copy_path$,spreadsheet_**)** **CopySpreadsheetByID(**_copy_path$,spreadsheet_fileID$_**)** **CopySpreadsheetByPath(**_copy_path$,spreadsheet_path$_**)** |  Makes a copy with the given path of the spreadsheet specified by an open spreadsheet index number, a Google Sheets file ID, or a Google Sheets path. If no spreadsheet is specified, the active spreadsheet will be copied. Returns '1' if successful. Returns '0' if any error is encountered while copying the spreadsheet.  
**CreateSpreadsheet(**_spreadsheet_path_ _$_**)** |  Creates a new blank Google Sheets spreadsheet with the path _spreadsheet_path_ _$_. The new spreadsheet is opened and becomes the **[ACTIVE_SPREADSHEET](Google%20Sheets%20Object.htm#active_spreadsheet)**. If the _spreadsheet_path_ _$_ parameter is null, the spreadsheet is named "Untitled".

#### **Important Note:**  
It is possible to have multiple spreadsheets with the same path. They have different file IDs.

Returns '1' if successful. Returns '0' if any error is encountered while creating the spreadsheet.  
**DeleteSpreadsheet( )** **DeleteSpreadsheet(**_spreadsheet_**)** **DeleteSpreadsheetByID(**_spreadsheet_fileID_ _$_**)** **DeleteSpreadsheetByPath(**_spreadsheet_path_ _$_**)** |  Deletes the spreadsheet from Google Sheets specified by an open spreadsheet index number, a Google Sheets file ID, or a Google Sheets path. If no spreadsheet is specified, the active spreadsheet will be deleted. The spreadsheet is closed as well. Returns '1' if successful. Returns '0' if any error is encountered while deleting the spreadsheet.  
**ExportSpreadsheet(**_output_path_ _$_**)** **ExportSpreadsheet(**_output_path$,spreadsheet_**)** **ExportSpreadsheetByID(**_output_path$,spreadsheet_fileID$_**)** **ExportSpreadsheetByPath(**_output_path$,spreadsheet_path$_**)** |  Converts the **[ACTIVE_SPREADSHEET](Google%20Sheets%20Object.htm#active_spreadsheet)** or the spreadsheet specified by an open spreadsheet index number, a Google Sheets file ID, or a Google Sheets path from a Google Sheets spreadsheet to a spreadsheet file and then downloads the file to the local file system. The type of local spreadsheet file and the path of the file is determined by _output_path_ _$_. For supported _output_path_ _$_ file types, see **[Cloud-Based Spreadsheets](Google%20Sheets%20Object.htm#cloudbased)**. Returns '1' if successful. Returns '0' if any error is encountered while converting and downloading the spreadsheet.  
**GetFileID$( )** **GetFileID$(**_spreadsheet_**)** |  Returns a Google Sheets file ID of the spreadsheet specified by an open spreadsheet index number. If no spreadsheet is specified, the Google Sheets file ID of the active spreadsheet is returned. Before getting a file ID, the file must be opened first. Returns "" if unable to locate the spreadsheet.  
**GetPath$(**__**)** **GetPath$(**_spreadsheet_**)** |  Returns a Google Sheets path of the spreadsheet specified by an open spreadsheet index number. If no spreadsheet is specified, the Google Sheets path of the active spreadsheet is returned. Returns "" if unable to locate the spreadsheet.  
**OpenSpreadsheetByID(**_spreadsheet_fileID_ _$_**)** **OpenSpreadsheetByPath(**_spreadsheet_path_ _$_**)** |  Opens the Google Sheets spreadsheet specified by either _spreadsheet_fileID_ _$_ or _spreadsheet_path_ _$_. After opening a spreadsheet, the **[ACTIVE_SPREADSHEET](Google%20Sheets%20Object.htm#active_spreadsheet)** property is set to the spreadsheet index corresponding to the spreadsheet just opened.

#### **Note:**  
When opening a spreadsheet, the index is set to the number of open spreadsheets. The first spreadsheet opened will be index 1, the second spreadsheet opened will be index 2, etc.

Returns '1' if successful. Returns '0' if any error is encountered while opening the spreadsheet.  
**SetSpreadsheet(**_spreadsheet_**)** **SetSpreadsheetByID(**_spreadsheet_fileID_ _$_**)** **SetSpreadsheetByPath(**_spreadsheet_path_ _$_**)** |  Sets the active spreadsheet index [**ACTIVE_SPREADSHEET**](Google%20Sheets%20Object.htm#active_spreadsheet) to the spreadsheet specified by an open spreadsheet index number, a Google Sheets file ID, or a Google Sheets path. For a spreadsheet to be set as active, the spreadsheet must be opened.

#### **Note:**  
Setting a spreadsheet will also reset the [ **ACTIVE_SHEET**](Google%20Sheets%20Object.htm#active_sheet) to the first sheet (index 1) and [ **ACTIVE_RANGE$**](Google%20Sheets%20Object.htm#active_range) to an empty string "".

Returns '1' if successful. Returns '0' if unable to locate the spreadsheet.  
**UploadSpreadsheet(**_input_path$_**,**_spreadsheet_path_ _$_**)** |  Upload a local spreadsheet file _input_path_ _$_ to Google Sheets and convert to Google Sheets spreadsheet. The new Google Sheets spreadsheet is given the specified path. For supported _input_path_ _$_ file types, see **[Cloud-Based Spreadsheets](Google%20Sheets%20Object.htm#cloudbased)**. Returns '1' if successful. Returns '0' if any error is encountered while uploading the spreadsheet.  
  
**_Sheet Methods_**

**Sheet Methods** |  **Description**  
---|---  
**CreateSheet(**_sheet_name_ _$_**)** **CreateSheet(**_sheet_name$,tab_index_**)** |  Creates a new sheet (_sheet_name_ _$_) in the **[ACTIVE_SPREADSHEET](Google%20Sheets%20Object.htm#active_spreadsheet)**. If no _tab_index_ is specified, the new sheet will be inserted before the **[ACTIVE_SHEET](Google%20Sheets%20Object.htm#active_sheet)**. If a _tab_index_ is specified, the sheet will be inserted as the sheet index specified. Specifying a _tab_index_ higher than the current number of sheets will create the new sheet as the last sheet. If the _sheet_name_ _$_ parameter is null, the default sheet name will be used (i.e. '_SheetX_ _'_ where _X_ is an incremental number to avoid sheet name conflicts). Returns '1' if successful. Returns '0' if unable to add the sheet.  
**SetSheet(**_sheet_**)** **SetSheet(**_sheet_name_ _$_**)** |  Sets the active sheet index **[ACTIVE_SHEET](Google%20Sheets%20Object.htm#active_sheet)** to the sheet specified by either an index number or a simple sheet name (e.g. _"Sheet1"_). Returns '1' if successful. Returns '0' if unable to locate the sheet.  
  
**_Range Methods_**

**Range Methods** |  **Description**  
---|---  
**AddNamedRange(**_name$,cells_ _$_**)** **AddNamedRange(**_name$,cells$,sheet_**)** **AddNamedRange(**_name$,cells$,sheet_name$_**)** |  Creates a _named_ range with the specified _name$_ and range (_cells$_).

#### **Note:**  
A range name (_name$_) **_cannot_** contain any spaces.

When no sheet is specified, the named range will be created using the active sheet. Pass either a sheet index number or a simple sheet name to define the named range using a different sheet. Once a named range is created, the name of the range (_name$_) may be used to refer to the range and sheet in any method where a range is specified (_cells$_). Returns '1' if successful. Returns '0' if not able to create the named range with the parameters provided.  
**DeleteNamedRange(**_name$_**)** |  Deletes a previously created _named_ range (_name$_).

#### **Note:**  
A range name (_name$_) **_cannot_** contain any spaces.

Returns '1' if successful. Returns '0' if not able to delete the named range.  
**SetRange(**_cells$_**)** **SetRange(**_cells$,sheet_**)** **SetRange(**_cells$,sheet_name$_**)** |  Sets the active range **[ACTIVE_RANGE$](Google%20Sheets%20Object.htm#active_range)**. When no sheet is specified, the range will be set on the active sheet or the sheet specified by the named range. Pass either a sheet index number or a simple sheet name to set the active range on a different sheet. Specify the range in the _cells$_ variable (e.g. _"A12"_ or _"A2:D5"_ or _range_name_ _$_). Returns '1' if successful. Returns '0' if unable to locate the sheet or set the range.  
**SetRangeColumn(**_col_**)** **SetRangeColumn(**_col,sheet_**)** **SetRangeColumn(**_col,sheet_name_ _$_**)** **SetRangeColumn(**_col$_**)** **SetRangeColumn(**_col$,sheet_**)** **SetRangeColumn(**_col$,sheet_name$_**)** |  Sets the active range **[ACTIVE_RANGE$](Google%20Sheets%20Object.htm#active_range)** to a particular column number (_col_) or letter (_col$_). When no sheet is specified, the range will be set to a column on the active sheet or the sheet specified by the named range. Pass either a sheet index number or a simple sheet name to set the active range on a different sheet. Returns '1' if successful. Returns '0' if unable to locate the sheet or set the range.  
**SetRangeRow(**_row_**)** **SetRangeRow(**_row,sheet_**)** **SetRangeRow(**_row,sheet_name_ _$_**)** |  Sets the active range **[ACTIVE_RANGE$](Google%20Sheets%20Object.htm#active_range)** to a particular row (_row_). When no sheet is specified, the range will be set to a row on the active sheet or the sheet specified by the named range. Pass either a sheet index number or a simple sheet name to set the active range on a different sheet. Returns '1' if successful. Returns '0' if unable to locate the sheet or set the range.  
  
**_Cell Values Methods_**

**Cell Values Methods** |  **Description**  
---|---  
**FindReplaceAll(**_find$,replace_ _$_**)** **FindReplaceAll(**_find$,replace$,sheet_**)** **FindReplaceAll(**_find$,replace$,sheet_name$_**)** |  Finds cells with the value _find$_ and replaces all occurrences with the string _replace$_. When only the _find$_ and _replace_ $ parameters are passed, the **Find/Replace** is performed on the active sheet. Pass either a sheet index number or a simple sheet name to perform the **Find/Replace** on a sheet other than the active sheet without changing the **[ACTIVE_SHEET](Google%20Sheets%20Object.htm#active_sheet)** property. To perform the **Find/Replace** on all opened sheets, pass a _sheet_name_ _$_ of "**ALL** " (case insensitive). Searches will be case insensitive by default. For case sensitive searches, set the **[CASE_SENSITIVE_SEARCH](Google%20Sheets%20Object.htm#casesearch)** property to '1'. By default, the _find$_ value will be replaced if it is located anywhere within a cell value. Set the **[MATCH_ENTIRE_CELL](Google%20Sheets%20Object.htm#matchcell)** property to '1' to replace text only if the entire cell contents is equal to the _find$_ value. Returns '1' if successful. Returns '0' if unable to **Find/Replace** on any of the sheets specified or if the _find$_ value was not found. **_When finding/replacing on all sheets_** : Returns '-1' if only able to perform **Find/Replace** on some of the sheets successfully.  
**Read$( )** **Read$(**_cells$_**)** **Read$(**_cells$,sheet_**)** **Read$(**_cells$,sheet_name$_**)** |  Reads data from a sheet. When no sheet is specified, the data will be read from the active sheet or the sheet specified by the named range. Pass either a sheet index number or a simple sheet name to read data from a different sheet without changing the **[ACTIVE_SHEET](Google%20Sheets%20Object.htm#active_sheet)** property. When no range is specified or _cells$_ is an empty string "", data is read from the active range. Pass a value in the _cells$_ parameter (e.g. _"A12"_ or _"A2:D5"_ or _range_name_ _$_) to specify a different range without changing the **[ACTIVE_RANGE$](Google%20Sheets%20Object.htm#active_range)** property. When the _cells$_ value corresponds to a single cell in the sheet, a string value is returned. When the _cells$_ value corresponds to a range of 2 or more cells, a **[SEP$](Google%20Sheets%20Object.htm#sep)** delimited string is returned. If a problem is encountered, a null string is returned.  
**Write(**_cell_values_ _$_**)** **Write(**_cell_values$,cells_ _$_**)** **Write(**_cell_values$,cells$,sheet_**)** **Write(**_cell_values$,cells$,sheet_name$_**)** |  Writes data to a sheet. When no sheet is specified, the data will be written to the active sheet or the sheet specified by the named range. Pass either a sheet index number or a simple sheet name to write data to a different sheet without changing the **[ACTIVE_SHEET](Google%20Sheets%20Object.htm#active_sheet)** property. When no range is specified or _cells$_ is an empty string "", data is written to the active range. Pass a value in the _cells$_ parameter (e.g. _"A12"_ or "_A2:D5"_ or _range_name_ _$_) to specify a different range without changing the **[ACTIVE_RANGE$](Google%20Sheets%20Object.htm#active_range)** property. When writing data to a single cell, _cell_values_ _$_ should contain a string value. When writing to a range of cells, _cell_values_ _$_ should contain a string value delimited with a delimiter corresponding to the current value in the **[SEP$](Google%20Sheets%20Object.htm#sep)** property. **_Example:_** When SEP$=SEP:  
  
_cell_values_ _$_ = "value one" + SEP + "value two" + SEP + "value three" + SEP Returns '0' if the data was not written. Returns '1' if the data was written successfully and the number of specified cell values (_cell_values_ _$_) matched the number of cells in the specified range (_cells$_). Returns '-1' if the data was written but the number of specified cell values (_cell_values_ _$_) did **_not_** match the number of cells in the specified range _(cells$)_. In this case, one of the following instances can occur: If the number of cell values _(cell_values$)_ is **_greater_** than the number of cells in the specified range _(cells$)_ , the remaining cell values not written to a cell will be ignored. If the number of cell values _(cell_values$)_ is **_fewer_** than the number of cells in the specified range _(cells$)_ , null values will be written into the remaining cells in that range to which no cell values were assigned.  
  
**_Cell Formatting Methods_**

**Cell Formatting Methods** |  **Description**  
---|---  
**AutoFitAll( )** **AutoFitAll(**_sheet_**)** **AutoFitAll(**_sheet_name_ _$_**)** |  Auto resize all column widths and row heights based on cell content in a sheet. When no sheet is specified, the auto resize will be done on the active sheet or the sheet specified by the named range. Pass either a sheet index number or a simple sheet name to define the auto resize on a different sheet without changing the **[ACTIVE_SHEET](Google%20Sheets%20Object.htm#active_sheet)** property. Should be used after the cells are populated to adjust column widths and row heights to fit the existing data. Returns '1' if successful. Returns '0' if unable to locate the sheet. _(The AutoFitAll method was added in PxPlus 2025.)_  
**AutoFitColumns( )** **AutoFitColumns(**_cells$_**)** **AutoFitColumns(**_cells$,sheet_**)** **AutoFitColumns(**_cells$,sheet_name$_**)** |  Auto resize the column widths based on cell content for a range of cells in a given sheet. When no sheet is specified, the auto resize will be done on the active sheet or the sheet specified by the named range. Pass either a sheet index number or a simple sheet name to define the auto resize on a different sheet without changing the **[ACTIVE_SHEET](Google%20Sheets%20Object.htm#active_sheet)** property. When no range is specified or _cells$_ is an empty string "", the auto resize will be done for the active range. Pass a value in the _cells$_ parameter (e.g. _"A12"_ or _"A2:D5"_ or _range_name_ _$_) to specify a different range without changing the **[ACTIVE_RANGE$](Google%20Sheets%20Object.htm#active_range)** property. Should be used after the cells are populated to adjust column widths to fit the existing data. Returns '1' if successful. Returns '0' if unable to locate the sheet or set the range. _(The AutoFitColumns method was added in PxPlus 2025.)_  
**AutoFitRows( )** **AutoFitRows(**_cells$_**)** **AutoFitRows(**_cells$,sheet_**)** **AutoFitRows(**_cells,sheet_name_ _$_**)** |  Auto resize the row heights based on cell content for a range of cells in a given sheet. When no sheet is specified, the auto resize will be done on the active sheet or the sheet specified by the named range. Pass either a sheet index number or a simple sheet name to define the auto resize on a different sheet without changing the **[ACTIVE_SHEET](Google%20Sheets%20Object.htm#active_sheet)** property. When no range is specified or _cells$_ is an empty string "", the auto resize will be done for the active range. Pass a value in the _cells$_ parameter (e.g. _"A12"_ or _"A2:D5"_ or _range_name_ _$_) to specify a different range without changing the **[ACTIVE_RANGE$](Google%20Sheets%20Object.htm#active_range)** property. Should be used after the cells are populated to adjust row heights to fit the existing data. Returns '1' if successful. Returns '0' if unable to locate the sheet or set the range. _(The AutoFitRows method was added in PxPlus 2025.)_  
**SetColor(**_color_index_**)** **SetColor(**_color$_**)** **SetColor(**_color_index,cells_ _$_**)** **SetColor(**_color$,cells_ _$_**)** **SetColor(**_color_index,cells$,sheet_**)** **SetColor(**_color$,cells$,sheet_**)** **SetColor(**_color_index,cells$,sheet_name$_**)** **SetColor(**_color$,cells$,sheet_name$_**)** |  Sets the text color for a range of cells in a sheet. When no sheet is specified, the text color will be set on the active sheet or the sheet specified by the named range. Pass either a sheet index number or a simple sheet name to define the text color on a different sheet without changing the **[ACTIVE_SHEET](Google%20Sheets%20Object.htm#active_sheet)** property. When no range is specified or _cells$_ is an empty string "", the text color will be set in the active range. Pass a value in the _cells$_ parameter (e.g. _"A12"_ or _"A2:D5"_ or _range_name_ _$_) to specify a different range without changing the **[ACTIVE_RANGE$](Google%20Sheets%20Object.htm#active_range)** property. The text color may be passed as one of the following: A color index (numeric) An RGB value in the format "RGB:_rrr_ ,_ggg_ ,_bbb_ " (string) "HSL:_hhh_ ,_sss_ ,_lll_ " (string) Hex "_#nnnnnn_ " (string) One of the 16 basic PxPlus named colors, such as 'Red', 'Dark Blue' or 'Light Cyan' (string) A color-blended string, such as 'Red'+'Yellow' Dynamic color lightening, such as "Red*50" (string) Returns '1' if successful. Returns '0' if unable to determine the sheet or range.  
**SetFillColor(**_color_index_**)** **SetFillColor(**_color$_**)** **SetFillColor(**_color_index,cells_ _$_**)** **SetFillColor(**_color$,cells_ _$_**)** **SetFillColor(**_color_index,cells$,sheet_**)** **SetFillColor(**_color$,cells$,sheet_**)** **SetFillColor(**_color_index,cells$,sheet_name$_**)** **SetFillColor(**_color$,cells$,sheet_name$_**)** |  Sets the fill (background) color for a range of cells in a sheet. When no sheet is specified, the fill color will be set on the active sheet or the sheet specified by the named range. Pass either a sheet index number or a simple sheet name to define the fill color on a different sheet without changing the **[ACTIVE_SHEET](Google%20Sheets%20Object.htm#active_sheet)** property. When no range is specified or _cells$_ is an empty string "", the fill color will be set in the active range. Pass a value in the _cells$_ parameter (e.g. _"A12"_ or _"A2:D5"_ or _range_name_ _$_) to specify a different range without changing the **[ACTIVE_RANGE$](Google%20Sheets%20Object.htm#active_range)** property. The fill (background) color may be passed as one of the following: A color index (numeric) An RGB value in the format "RGB:_rrr_ ,_ggg_ ,_bbb_ " (string) "HSL:_hhh_ ,_sss_ ,_lll_ " (string) Hex "_#nnnnnn_ " (string) One of the 16 basic PxPlus named colors, such as 'Red', 'Dark Blue' or 'Light Cyan' (string) A color-blended string, such as 'Red'+'Yellow' Dynamic color lightening, such as "Red*50" (string) Returns '1' if successful. Returns '0' if unable to determine the sheet or range.  
**SetFont(**_font$_**)** **SetFont(**_font$,cells_ _$_**)** **SetFont(**_font$,cells$,sheet_**)** **SetFont(**_font$,cells$,sheet_name$_**)** |  Sets font information (font name, font size, font style) for a range of cells in a sheet. When no sheet is specified, the font will be set on the active sheet or the sheet specified by the named range. Pass either a sheet index number or a simple sheet name to define the font on a different sheet without changing the **[ACTIVE_SHEET](Google%20SHeets%20Object.htm#active_sheet)** property. When no range is specified or _cells$_ is an empty string "", the font will be set in the active range. Pass a value in the _cells$_ parameter (e.g. _"A12"_ or _"A2:D5"_ or _range_name_ _$_) to specify a different range without changing the **[ACTIVE_RANGE$](Google%20Sheets%20Object.htm#active_range)** property. The _font$_ variable can pass font name, font size and font style (Bold, Italic, etc.), separated by commas. The font name is case sensitive. If a unsupported font name is specified, Arial is used.  
  
**_Example:_**  
  
 _font$=_ "Arial" sets only the font name.  
_font_ _$=_ "Arial,12" sets the name and size.  
_font_ _$=_ "Arial,12,Bold" sets the name and size and bolds the text in the range.

#### **Note:**  
Valid font style values are 'Regular', 'Italic', 'Bold' and 'Bold Italic'.

Returns '1' if successful. Returns '0' if unable to determine the sheet or range.  
**SetNumFormat(**_num_type$,num_pattern$_**)** **SetNumFormat(**_num_type$,num_pattern$,cells_ _$_**)** **SetNumFormat(**_num_type$,num_pattern$,cells$,sheet_**)** **SetNumFormat(**_num_type$,num_pattern$,cells$,sheet_name$_**)** |  Sets the number format for a range of cells in a sheet. When no sheet is specified, the number format will be set on the active sheet or the sheet specified by the named range. Pass either a sheet index number or a simple sheet name to define the number format on a different sheet without changing the **[ACTIVE_SHEET](Google%20SHeets%20Object.htm#active_sheet)** property. When no range is specified or _cells$_ is an empty string "", the number format will be set in the active range. Pass a value in the _cells$_ parameter (e.g. "A12" or "A2:D5" or range_name$) to specify a different range without changing the **[ACTIVE_RANGE$](Google%20Sheets%20Object.htm#active_range)** property. _num_type_ _$_ may be passed as one of the following (you must pass a valid _num_type_ _$_): "TEXT"  
"NUMBER"  
"CURRENCY"  
"PERCENT"  
"DATE"  
"TIME"  
"DATE_TIME"  
"SCIENTIFIC" _num_pattern_ _$_ is a string (e.g. "###0.000") that defines how it is displayed. (Leave blank if you just want to set the _num_type_ _$_.) Returns '1' if successful. Returns '0' if unable to determine the sheet or range. _(The SetNumFormat method was added in PxPlus 2023.)_  
  
**_Column Methods_**

**Column Methods** |  **Description**  
---|---  
**DeleteColumn(**_col_**)** **DeleteColumn(**_col,sheet_**)** **DeleteColumn(**_col,sheet_name_ _$_**)** **DeleteColumn(**_col$_**)** **DeleteColumn(**_col$,sheet_**)** **DeleteColumn(**_col$,sheet_name$_**)** |  Deletes column number _col_ (or column letter _col$_) in the sheet specified by either a sheet index number or a simple sheet name. If no sheet is specified, the column is deleted from the active sheet. Returns '1' if successful. Returns '0' if unable to locate the sheet and column.  
**InsertColumn(**_col_**)** **InsertColumn(**_col,sheet_**)** **InsertColumn(**_col,sheet_name_ _$_**)** **InsertColumn(**_col$_**)** **InsertColumn(**_col$,sheet_**)** **InsertColumn(**_col$,sheet_name$_**)** |  Inserts a new blank column number _col_ (or column letter _col$_) in the sheet specified by either a sheet index number or a simple sheet name. If no sheet is specified, the column is inserted into the active sheet. Returns '1' if successful. Returns '0' if unable to locate the sheet and column.  
**SetColumnWidth(**_width_**)** **SetColumnWidth(**_width,cells_ _$_**)** **SetColumnWidth(**_width,cells$,sheet_**)** **SetColumnWidth(**_width,cells$,sheet_name$_**)** |  Sets the width of all columns in a specified range. If no sheet is specified, the active sheet is used or the sheet specified by the named range. If no range is specified (_cells$_), the active range is used. Returns '1' if successful. Returns '0' if unable to locate the specified sheet or range.  
  
**_Row Methods_**

**Row Methods** |  **Description**  
---|---  
**DeleteRow(**_row_**)** **DeleteRow(**_row,sheet_**)** **DeleteRow(**_row,sheet_name_ _$_**)** |  Deletes row number _row_ in the sheet specified by either a sheet index number or a simple sheet name. If no sheet is specified, the row is deleted from the active sheet. Returns '1' if successful. Returns '0' if unable to locate the sheet and row.  
**InsertRow(**_row_**)** **InsertRow(**_row,sheet_**)** **InsertRow(**_row,sheet_name_ _$_**)** |  Inserts a new blank row number _row_ in the sheet specified by either a sheet index number or a simple sheet name. If no sheet is specified, the row is inserted into the active sheet. Returns '1' if successful. Returns '0' if unable to locate the sheet and row.  
  
## Example: Testing the Google Sheets Object

This example program tests the Google Sheets object.

> ! Test Google Sheets object  
>  !  
>  ! instantiate object  
>  x=NEW("*obj/GoogleSheets",clientID$,clientSecret$)  
>  !   
>  ! Wait for user to complete Google sign-in and allow PxPlus access  
>  INPUT "Press any key to continue after logging into Google account and allowing PxPlus access:",*;PRINT ""  
>  !   
>  ! Complete the Google Sheets login  
> x'Login()  
>  !  
>  ! Open spreadsheet   
>  path$="Commissions/JuneCommissions"  
>  if x'openSpreadsheetByPath(path$)=0 then MSGBOX "Couldn't find "+path$  
>  !  
>  ! Open another Spreadsheet   
>  path2$="Commissions/JulyCommissions"  
>  if x'openSpreadsheetByPath(path2$)=0 then MSGBOX "Couldn't find "+path2$   
>  !  
>  ! Set sheet by name  
>  if x'SetSheet("Sheet1")=0 then MSGBOX "Couldn't find Sheet1"  
>  !  
>  ! Read a value in cell C2 of active sheet  
>  c$=x'read$("C2")  
>  !  
>  ! Write a value to cell C3 in active sheet  
>  if x'write("*THIS HAS BEEN CHANGED!*","C3")=0 then MSGBOX "Couldn't complete the 1st write"  
>  !  
>  ! Read row 3 in sheet 2  
>  if x'SetRange("A3:E3",2)=0 then MSGBOX "Couldn't set the active range"  
>  range$=x'read$()  
>  !  
>  ! Write to row 3 (active range in sheet 2)  
> new_range$="*Column 1*"+SEP+"*Column 2*"+SEP+"*Column3*"+SEP+"*Column 4*"+SEP+"*Column 5*"+SEP  
>  if x'write(new_range$)=0 then MSGBOX "Couldn't complete the 2nd write"  
>  !  
>  ! Read column 4 (D) in sheet 1  
>  row$=x'read$("D1:D10",1)  
>  !  
>  ! Switch back to first workbook  
>  if x'SetSpreadsheet(1)=0 then MSGBOX "Couldn't find spreadsheet1"  
>  !  
>  ! Set a range  
>  if x'SetRange("A1:D4")=0 then MSGBOX "Couldn't set the active range"  
>  !  
>  ! Set Font for active range and sheet  
>  if x'SetFont("Arial,16,Bold")=0 then MSGBOX "Couldn't set the font"  
>  !  
>  ! Create a 'named' range for the first row  
>  if x'AddNamedRange("Headers","A1:Z1")=0 then MSGBOX "Couldn't add a named range"  
>  !  
>  ! Set active range text colour to red  
>  if x'SetColor(5)=0 then MSGBOX "Couldn't change text color"  
>  !  
>  ! Insert a row #5 in active sheet  
>  if x'InsertRow(5)=0 then MSGBOX "Couldn't insert a new row"  
>  !  
>  ! Set the fill color to yellow for a different range in the third sheet  
>  if x'SetFillColor("light yellow","B3:F8",3)=0 then MSGBOX "Couldn't change fill (background) color"  
>  !  
>  ! Set the text for column "C" to blue, Courier New  
>  if x'SetRangeColumn("C")=0 then MSGBOX "Failed setting a column range"  
>  if x'SetColor(4)=0 then MSGBOX "Couldn't change text color"  
>  if x'SetFont("Courier New")=0 then MSGBOX "Couldn't set the font"  
>  !  
>  ! Export current spreadsheet as a CSV  
>  if x'ExportSpreadsheet("C:\Users\User\Documents\JuneCommissions.csv")=0 then MSGBOX "Couldn't export to csv"  
>  !   
>  ! Close spreadsheets  
>  if x'CloseSpreadsheets()=0 then MSGBOX "Couldn't close spreadsheets"  
>  !  
>  ! Drop object  
>  DROP OBJECT x  
>  END

## See Also

**[PxPlus Google Docs Object](Google%20Docs%20Object.md)**  
**[PxPlus Google Drive Object](Google%20Drive%20Object.md)**

Google Workspace is a registered trademark of Google LLC
