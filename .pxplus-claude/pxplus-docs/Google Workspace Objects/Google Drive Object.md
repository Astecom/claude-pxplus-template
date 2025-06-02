# Google Workspace Objects

**PxPlus Google Drive Object**|   
---|---  
  
The PxPlus **Google Drive** object provides the ability to work with Google Workspace Drive, a cloud-based file storage application. This object consists of various properties and methods that are used to interact with Google Drive files. See **[Properties and Methods](Google%20Drive%20Object.htm#properties)** below.

The Google Drive object allows more than one file to be opened at one time.

_(The PxPlus Google Drive object was added in PxPlus 2021.)_

## Instantiating the Object

To **_instantiate_** the Google Drive object using the handle **drive_obj** (where **drive_obj** could be any numeric variable), enter the following command:

> drive_obj=NEW("*obj/GoogleDrive",_client_ID$_ ,_client_secret$_**[** ,_login_token$_**]**)

The constructor requires a Client ID and Client Secret, both of which must be obtained from Google via the Google API Console. See **[Google API App Setup](App%20Setup.md)** for detailed steps.

The login token can be optionally used to avoid having to select a Google account and login more than once. See **[Google Authentication](Google%20Drive%20Object.htm#googleauth)** for information on how to get a _login_token_ _$_.

To access any of the available properties and/or methods, the Google Drive object handle (**drive_obj**) is used, followed by an **'**  _(apostrophe)_ and the property or method (with the desired parameters).

**_Examples:_**

> file=drive_obj'ACTIVE_FILE  
>   
> retVal=drive_obj'SetFile(3)

**_Google Authentication_**

During object instantiation, the user will be asked to select and login to a Google account and allow PxPlus access to it via their default Web browser. When this process is completed, the **[Login( )](Google%20Drive%20Object.htm#login)** method must be run to complete login to Google Drive.

Successful login can be confirmed via the **[IsLoggedIn( )](Google%20Drive%20Object.htm#isloggedin)** method. If successfully logged in, then files can be read, modified and saved to a local file system.

Once logged in to Google Drive, the **[LOGIN_TOKEN$](Google%20Drive%20Object.htm#logintoken)** property can be accessed and saved to avoid having to select and login to a Google account, allow access, and run the **Login( )** method again. The login token can either be hard-coded into an encrypted program or saved to an encrypted file. The next time the Google Drive object gets instantiated, just include the saved login token and it will be logged into the same Google account automatically.

After one hour of inactivity, Google automatically expires a login. If logged in and Google expires the login, the next time you run a method, the object will automatically re-login. This may be noticeable if a method takes longer than usual to complete.

##  Cloud-Based Files

Files are stored in your Google Drive cloud storage, not as local files. Google Drive supports directories and sub-directories. All methods of this object that support a file path allow the Google Drive directories and the file name to be specified so that files can be organized more easily. For example, to download the "SalesReport" PDF file in the Google Drives directory "Template", the following method can be used:

> **DownloadFileByPath**("C:\Users\user\Documents\SalesReport.pdf","Templates\SalesReport.pdf")

To work with a local file, upload it to Google Drive by using the **[UploadFile( )](Google%20Drive%20Object.htm#uploadfile)** method. This method uploads the local file into Google Drive and possibly converts the file into a Google file type such as a document or spreadsheet. For a list of supported conversions, visit <https://developers.google.com/drive/api/v3/manage-uploads#import_to_google_docs_types>.

To download a Google file such as a document or spreadsheet, use the **[ExportFile( )](Google%20Drive%20Object.htm#exportfile)** method. This method converts the Google Drive file into a local file. The type of file is determined by the file extension specified in the output path. For a list of supported file types that a Google file can be converted to, visit <https://developers.google.com/drive/api/v3/ref-export-formats>.

##  Properties and Methods

The **_properties_** used by the Google Drive object are listed below.

**Property** |  **Description**  
---|---  
**ACTIVE_FILE** |  **_(Read Only)_** Index of the active open file. This property is set by using the **[SetFile( )](Google%20Drive%20Object.htm#setfile)** method. If the **ACTIVE_FILE** is not set with the **SetFile****( )** method, it is always the last opened file/highest index number. Returns '0' if no files are opened.  
**FILES_COUNT** |  **_(Read Only)_** Number of files opened.  
**LOGIN_TOKEN$** |  Login token (also known as an Oauth2 refresh token) that can be used when instantiating the object to avoid having to login again.  
  
The **_methods_** used by the Google Drive object are listed below. To make it easier to locate information for a particular method, this list has been broken into smaller groups as follows:

|  **[Authentication Methods](Google%20Drive%20Object.htm#methodsauth)** |  For logging into Google and confirming logged in status  
---|---|---  
|  **[File Methods](Google%20Drive%20Object.htm#methodsfile)** |  For working with Google Drive files  
  
**_Common Parameters_**

The following is a list of some of the common parameters used by multiple methods of the Google Drive object:

#### **Note:**  
The _file_ , _fileID_ _$_ and _file_path_ _$_ parameters can refer to a Google Drive directory, as well as a file. All methods that work with these parameters can accept properties that point to directories, as well as files, with the exception of **[Copy](Google%20Drive%20Object.htm#copyfile)**, **[Download](Google%20Drive%20Object.htm#downloadfile)** and **[Export](Google%20Drive%20Object.htm#exportfile)**.

**Parameter** |  **Description**  
---|---  
_file_ |  1-based index number in the list of sequentially opened files. If FileA, FileB and FileC were opened in that order, the corresponding indexes would be 1, 2 and 3. If FileA was closed at index 1, then FileB and FileC would now have indexes 1 and 2 respectively.  
_fileID_ _$_ |  Every file in a Google Drive cloud has a unique file ID. The file ID is displayed in the address bar when a file from a Google Drive cloud is opened in a Web browser. Since it is possible to have more than one file with the same path, the file ID is used to specify a particular file. This parameter is used by methods that end with **ByID**.  
_file_path_ _$_ |  The Google Drive path consists of any directories and a file name. It can be used as a simple and readable method to specify a file. This parameter is used by methods that end with **ByPath**.

#### **Note:**  
This path consists of the directories and file name from the Google Drive cloud, not a path to a file on the local file system.  
  
**_Authentication Methods_**

**Authentication Methods** |  **Description**  
---|---  
**IsLoggedIn( )** |  Returns '1' if logged into Google Drive. Returns '0' if not yet logged into Google Drive.

#### **Note:**  
After one hour of inactivity, Google Drive will expire the login; however, this method will still return '1'.  
  
**Login( )** |  During object instantiation, the user will be asked to select a Google account and allow access to it. When this process is completed, run this method to complete login to Google Drive. Returns '1' if successful. Returns '0' if any error is encountered while logging in.  
  
**_File Methods_**

**File Methods** |  **Description**  
---|---  
**CloseFile( )** **CloseFile(**_file_**)** **CloseFileByID(**_fileID_ _$_**)** **CloseFileByPath(**_file_path_ _$_**)** |  Closes the file specified by an open file index number, a Google Drive file ID, or a Google Drive path. If no file is specified, the active file will be closed. If you close the **ACTIVE_FILE** , the **ACTIVE_FILE** is set to the last opened file still open; i.e. the highest file index or 0 if no files are left opened.

#### **Note:**  
When closing a file, any file opened after the closed file was opened (any file with a higher index) will have its index shifted down 1. For example, if closing the file with index 2, then the file at index 3 becomes index 2.

Returns '1' if successful. Returns '0' if any error is encountered while closing the file.  
**CloseFiles( )** |  Closes all open files. Returns '1' if successful. Returns '0' if any error is encountered while closing the files.  
**CopyFile(**_copy_path_ _$_**)** **CopyFile(**_copy_path$,file_**)** **CopyFileByID(**_copy_path$,fileID$_**)** **CopyFileByPath(**_copy_path$,file_path$_**)** |  Makes a copy with the given path of the file specified by an open file index number, a Google Drive file ID, or a Google Drive path. If no file is specified, the active file will be copied. Returns '1' if successful. Returns '0' if any error is encountered while copying the file.  
**CreateFile(**_file_path$,mime_type$_**)** |  Creates a new blank Google Drive file with the path _file_path_ _$_. The file type is determined by the _mime_type_ _$_. For a list of common mime types, visit: <https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types> The new file is opened and becomes the **[ACTIVE_FILE](Google%20Drive%20Object.htm#properties)**. If the _file_path_ _$_ parameter is null, the file is named "Untitled".

#### **Important Note:**  
It is possible to have multiple files with the same path. They have different file IDs.

Returns '1' if successful. Returns '0' if any error is encountered while creating the file.  
**CreateFolder(**_folder_path_ _$_**)** |  Creates a new empty Google Drive folder with the path _folder_path_ _$_. The new folder is opened and becomes the **[ACTIVE_FILE](Google%20Drive%20Object.htm#properties)**. If the _folder_path_ _$_ parameter is null, the folder is named "Untitled".

#### **Important Note:**  
It is possible to have multiple folders with the same path. They have different file IDs.

Returns '1' if successful. Returns '0' if any error is encountered while creating the folder.  
**DeleteFile( )** **DeleteFile(**_file_**)** **DeleteFileByID(**_fileID_ _$_**)** **DeleteFileByPath(**_file_path_ _$_**)** |  Deletes the file from Google Drive specified by an open file index number, a Google Drive file ID, or a Google Drive path. If no file is specified, the active file will be deleted. The file is closed as well. Returns '1' if successful. Returns '0' if any error is encountered while deleting the file.  
**DownloadFile(**_output_path_ _$_**)** **DownloadFile(**_output_path$,file_**)** **DownloadFileByID(**_output_path$,fileID$_**)** **DownloadFileByPath(**_output_path$,file_path$_**)** |  Downloads the Google Drive file specified by the **[ACTIVE_FILE](Google%20Drive%20Object.htm#properties)** or the file specified by the open file index number, a Google Drive file ID, or a Google Drive path. The path of the downloaded file is determined by _output_path_ _$_. Returns '1' if successful. Returns '0' if any error is encountered while downloading the file.  
**ExportFile(**_output_path_ _$_**)** **ExportFile(**_output_path$,file_**)** **ExportFileByID(**_output_path$,fileID$_**)** **ExportFileByPath(**_output_path$,file_path$_**)** |  Converts the **[ACTIVE_FILE](Google%20Drive%20Object.htm#properties)** or the file specified by the open file index number, a Google Drive file ID, or a Google Drive path from a Google Workspace file (document, sheet, etc.) to a local file, and then downloads the file to the local file system. The type of local file and the path of the file is determined by _output_path_ _$_. For supported _output_path_ _$_ file types, see **[Cloud-Based Files](Google%20Drive%20Object.htm#cloudbased)**. Returns '1' if successful. Returns '0' if any error is encountered while converting and downloading the file.  
**GetFileID$( )** **GetFileID$(**_file_**)** **GetFileID$(**_file_path_ _$_**)** |  Returns a Google Drive file ID of the file specified by an open file index number or a Google Drive path. If no file is specified, the Google Drive file ID of the active file is returned. Before getting a file ID, the file must be opened first. Returns "" if unable to locate the file.  
**GetMimeType$( )** **GetMimeType$(**_file_**)** |  Returns the mime type of the file specified by an open file index number. If no file is specified, the mime type of the active file is returned. Returns "" if unable to locate the file.  
**GetPath$( )** **GetPath$(**_file_**)** |  Returns a Google Drive path of the file specified by an open file index number. If no file is specified, the Google Drive path of the active file is returned. Returns "" if unable to locate the file.  
**ListFiles( )** |  Returns a handle to a memory file loaded with the directory and file information from Google Drive. The IOL of the memory file is: _file_name$  
fileID$  
directory_path$  
mime_type$  
file_size$  
created_time$  
modified_time$  
viewed_by_me_time$_ Returns "" if any error is encountered while listing files.  
**OpenFileByID(**_fileID_ _$_**)** **OpenFileByPath(**_file_path_ _$_**)** |  Opens the Google Drive file specified by either a Google Drive file ID or a Google Drive path. After opening a file, the **[ACTIVE_FILE](Google%20Drive%20Object.htm#properties)** property is set to the file index corresponding to the file just opened.

#### **Note:**  
When opening a file, the index is set to the number of open files. The first file opened will be index 1, the second file opened will be index 2, etc.

Returns '1' if successful. Returns '0' if any error is encountered while opening the file.  
**SetFile(**_file_**)** **SetFileByID(**_fileID_ _$_**)** **SetFileByPath(**_file_path_ _$_**)** |  Sets the **[ACTIVE_FILE](Google%20Drive%20Object.htm#properties)** index to the file specified by an open file index number, a Google Drive file ID, or a Google Drive path. For a file to be set as active, the file must be opened. Returns '1' if successful. Returns '0' if unable to locate the file.  
**UploadFile(**_input_path$_**,**_file_path_ _$_**)** **UploadFile(**_input_path$_**,**_file_path$,mime_type$_**)** |  Upload a local file _input_path_ _$_ to Google Drive. If a _mime_type_ _$_ is specified, the file is converted to a Google file such as a document or spreadsheet. The new Google Drive file is given the specified Google Drive path. For supported conversions, see **[Cloud-Based Files](Google%20Drive%20Object.htm#cloudbased)**. Returns '1' if successful. Returns '0' if any error is encountered while uploading the file.  
  
## Example: Testing the Google Drive Object

This example program tests the Google Drive object.

> ! Test Google Drive object  
>  !   
>  ! Instantiate object where you define the clientID$ and clientSecret$ variables to be the values you got from Google  
> gd=NEW("*obj/GoogleDrive",clientID$,clientSecret$)  
>  !  
>  ! Wait for user to complete Google sign-in and allow PxPlus access  
>  INPUT "Press any key to continue after logging into Google account and allowing PxPlus access:",*;print ""  
>  !  
>  ! Complete the Google Drive login  
> gd'Login()  
>  !  
>  ! Open file from root Google Drive folder  
>  path$="SalesReport.pdf"  
>  if gd'OpenFileByPath(path$)=0 then MSGBOX "Error opening first file"  
>  !  
>  ! Open another file this one from a different Google Drive folder  
>  path2$="Notifications/NewDiscount.txt"  
>  if gd'OpenFileByPath(path2$)=0 then MSGBOX "Error opening second file"  
>  !  
>  ! Check number of files open  
>  MSGBOX STR(gd'files_count),"Open File Count"  
>  !  
>  ! Create a backup folder  
>  if gd'CreateFolder("backups/")<>1 then MSGBOX "Error creating backup folder"  
>  !  
>  ! Set active file as the first open file  
>  if gd'SetFileByPath(path$)=0 then MSGBOX "Error making first file active"  
>  !  
>  ! Create a copy in backups  
>  if gd'CopyFile("backups/"+path$)<>1 then MSGBOX "Error copying file"  
>  !  
>  ! Set active file   
>  if gd'SetFile(2)=0 then MSGBOX "Error making second file active"  
>  !  
>  ! Download active document  
> gd'DownloadFile("c:\users\user\documents\NewDiscount.txt")  
>  !  
>  ! Delete downloaded file  
>  if gd'DeleteFile(2)<>1 then MSGBOX "Error deleting file"  
>  !  
>  !  
>  DROP OBJECT gd  
>  END

## See Also

**[PxPlus Google Docs Object](Google%20Docs%20Object.md)**  
**[PxPlus Google Sheets Object](Google%20Sheets%20Object.md)**

Google Workspace is a registered trademark of Google LLC
