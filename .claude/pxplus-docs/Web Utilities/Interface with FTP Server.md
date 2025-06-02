# Web Utilities

***WEB/FTP** |  **_Interface with FTP Server_**  
---|---  
  
## Description

The ***web/ftp** utility is used to interface with a server that is running an FTP server program. It can be used to send files to, receive files from, delete files from, or get a directory listing from an FTP server.

As of PxPlus 2020, the ***web/ftp** utility can communicate with an FTP server using any of the following:

  * File transfer protocol (FTP)
  * Implicit file transfer protocol over SSL/TLS (FTPS)
  * Explicit file transfer protocol over SSL/TLS (FTPES)
  * Secure file transfer protocol (SFTP) (**_Requires_** the use of **[Curl Options](Interface%20with%20FTP%20Server.htm#curl_opts)**)



To specify which protocol to use, see **[Protocol](Interface%20with%20FTP%20Server.htm#protocol)**.

An easier way to use secure FTP (SFTP) is to use the ***web/sftp** utility, which does not require knowing any curl options. See **[Interface with SFTP Server](Interface%20with%20SFTP%20Server.md)**.

#### **Note:**  
As of PxPlus 2017, the ***web/ftp** utility can use **_curl_** , the URL data transfer command line tool, which can significantly improve speed. The curl utility is included in the Windows installation of PxPlus. On many UNIX/Linux systems, the curl utility comes with the OS.  
  
On UNIX/Linux systems where you want to use the faster ***web/ftp** , check that curl is installed and is in the path by running the **_curl -V_** command from the Command line.  
  
If the response is curl version information, this confirms that curl is installed and is in the path; therefore, the faster ***web/ftp** will work.  
  
If the response is an error stating that curl cannot be found, then you need to install it, or if already installed, add the location of curl to the path.  
  
If curl is not found, the ***web/ftp** utility defaults to the original slower version.  
  
To find and install a version of curl, visit **<https://curl.haxx.se/download.html>**.

## Formats

1. |  **CALL "*web/ftp;send"** , _ftpserver_ _$, user$, password$, timeout, files_to_send$, upload_dir$, case$, result$_  
---|---  
2. |  **CALL "*web/ftp;receive"** , _ftpserver_ _$, user$, password$, timeout, files_to_receive$, download_dir$, case$, result$_  
3. |  **CALL "*web/****ftp;delete"** ,  _ftpserver_ _$, user$, password$, timeout, files_to_delete$, case$, result$_  
4. |  **CALL "*web/****ftp;list"** , _ftpserver_ _$, user$, password$, timeout, recursion, result$_  
  
_(The "*web/ftp;list" command was added in PxPlus 2016 Update 0001.)_  
_(The "*web/ftp;delete" command was added in PxPlus 2018.)_

**_Where:_**

_ftpserver_ _$_ |  **_(Input)_** Contains the name of the FTP server. It should be in the form of **SERVER;SOCKET**. **_Example:_** ftp.pvx.com;21 An FTP sub-directory can be appended to the **SERVER** portion. See **Important Note**.

#### **Important Note:**  
The sub-directory path **_must_** URL encode any special URL characters (except for slashes).  
  
**_Example_** :  
  
"ftp.pvx.com/home/myapp/Help"+CVS("?","ASCII:URL")

If no socket number is specified, then a default FTP number of 21 is used. Maximum length of _ftpserver_ _$_ is 128 characters. The communication protocol is determined by which prefix is used with the server URL. See **[Protocol](Interface%20with%20FTP%20Server.htm#protocol)**. Additional curl options can be specified after the server URL. See **[Curl Options](Interface%20with%20FTP%20Server.htm#curl_opts)**. _(TLS support for FTP was added as of PxPlus 2020.)_  
---|---  
_user$_ |  **_(Input)_** Contains the user ID. Maximum length of _user$_ is 64 characters.  
_password$_ |  **_(Input)_** Contains the user password. Maximum length of _password$_ is 64 characters.  
_timeout_ |  **_(Input)_** If non-zero, this parameter specifies the timeouts for sending directly to an FTP Server. If zero, the timeout value is set to 60 seconds. (Only values greater than zero have an effect with PxPlus version 4.15 or higher.)  
_files_to_send_ _$_ |  **_(Input)_** List of the files to _send to_ an FTP Server or a pattern matching the files to send to an FTP server. Maximum length of _files_to_send_ _$_ is 32,000 characters. See **[Usage Details](Interface%20with%20FTP%20Server.htm#usage)**.

#### **Note:**  
_files_to_send_ _$_ ** _cannot_** be null.  
  
_files_to_receive_ _$_ |  **_(Input)_** List of the files to _receive from_ an FTP Server or a pattern matching the files to receive from an FTP server. Maximum length of _files_to_receive_ _$_ is 32,000 characters. See **[Usage Details](Interface%20with%20FTP%20Server.htm#usage)**.

#### **Note:**  
_files_to_receive_ _$_ ** _cannot_** be null.  
  
_files_to_delete_ _$_ |  **_(Input)_** List of the files to _delete from_ an FTP Server or a pattern matching the files to delete from an FTP server. Maximum length of _files_to_delete_ _$_ is 32,000 characters. See **[Usage Details](Interface%20with%20FTP%20Server.htm#usage)**.

#### **Note:**  
_files_to_delete_ _$**cannot**_ be null.

_(files_to_delete$ was added in PxPlus 2018.)_  
_upload_dir_ _$_ |  **_(Input)_** Contains the path and the directory name on an FTP Server to use to store files. If null, the upload directory is the root directory of the FTP Server.  
_download_dir_ _$_ |  **_(Input)_** Contains the path and the directory name on a client machine to use to store files. If null, the download directory is the working directory of the machine.  
_case$_ |  **_(Input)_** Possible values are: |  "U" |  Converts all file and directory names to uppercase  
---|---  
"L" |  Converts all file and directory names to lowercase  
"" |  Does not change file and directory names  
_recursion_ |  **_(Input)_** If non-zero, the directory listing returned will include the listing of all sub-directories as well. If zero, the directory listing will only list the current directory.  
_result$_ |  **_(Output)_** If doing a **LIST** (see **[Format 4](Interface%20with%20FTP%20Server.htm#format4)** above), the program loads this variable with the directory list results.  
  
If an error is encountered while sending, receiving, deleting or listing files, then the program loads this variable with a textual description of the problem and exits with an error.  
  
If one (or more) of the sending/receiving file names is invalid, then all remaining files that can be sent/received will be transferred, and those which cannot be transferred will be returned in the _result$_ field.  
  
##  Protocol

The protocol that is used is determined by the prefix of the server URL.

**_Example:_**

> ftps://files.server.com

If the prefix is omitted, FTP will be used.

Depending on the protocol used, additional curl options may be specified. See **Curl Options** below.

_(TLS support for FTP was added as of PxPlus 2020.)_

##  Curl Options

When using FTPS, FTPES or SFTP, additional curl options may be specified at the end of the server URL (separated with a space). This allows anyone familiar with curl to have more control over communication with the FTP server.

#### **Important Note:**  
**_Caution must be used_** when specifying additional curl options, as they are passed "as is" to curl. Incorrect or conflicting options will cause the utility not to work.

Any of the following curl options may be used:

**Curl Option** |  **Description**  
---|---  
**-k** |  Allow untrusted certificates or self-signed certificates.  
**\--cacert**  _file_path_ |  Specify custom CA certificate store as opposed to PxPlus-supplied CA certificate store.  
**\--key**  _kep_path_ |  Private key for SSH authentication (SFTP).  
**\--pass**  _passphrase_ |  Passphrase for the private key.  
  
**_Example:_**

> ftpes://files.server.com -k

This example uses the curl option **-k** to allow untrusted certificates or self-signed certificates.

_(The use of curl options for FTPS, FTPES or SFTP was added as of PxPlus 2020.)_

##  Usage Details

**_files_to_send_ _$ / files_to_receive$ / files_to_delete$_**

Wild characters are accepted in file names (unless **MSK( )** regular expression pattern matching is enabled):

|  **?** |  Any one character  
---|---|---  
|  ***** |  Any number of any characters  
  
Arguments can contain more than one file name. File names should be separated using one of the following: **$8A$** , **$0A$** , **$0D0A$** , or **;**  _(semi-colon)_.

#### **Note:**  
If you have a directory or filename that includes one of the wildcard or separator characters, you cannot reference that path directly in the files list, as that character will be interpreted as a wildcard. You need to use **MSK( )** mode and escape any special characters.  
  
**_Example:_**  
  
If the filename is "Help?", then:  
  
files_to_send$="Help\?|M"

A number of options may be specified after a file name. Options should be separated from the file name by a **|**  _(pipe)_. Options are:

**Transfer Type** |  **A** = ASCII mode _  
_**B** = Binary mode _(default)_ |  Ignored in _files_to_delete_ _$._  
---|---|---  
**Overwrite**  
 _(if the file already exists on the FTP Server)_ |  **0** = Always overwrite _(default)  
_**1** = Never overwrite _  
_**2** = Overwrite if the file being sent is newer |  Ignored in _files_to_delete_ _$._  
**Recursion** |  **R** = Recursion ON _  
_**""** = Recursion OFF _(default)_ |  In _files_to_delete_ _$_ , only applies to pattern matching.  
  
If a directory is specified, it **_must_** recursively delete it regardless of this option.  
**Regular Expression Pattern Matching** |  **M** = Enable **MSK( )** regular expression pattern matching  
**""** = Wildcard pattern matching (_default_) |   
  
**_Example:_**

> file_name1|A1;c:\tmp\\*.*|B0R;C:\\\reports\\\report[0-9]+\\.(pdf|doc|docx)|2M

In this example, _file_name1_ will be transferred in ASCII; it will not be transferred if it currently exists. The directory _c:\tmp_ and all files with it will be transferred in binary and will always overwrite any existing file of the same name. It will also recurse through all sub-directories of _c:\tmp_ and transfer all files in every sub-directory. All files in _c:\reports_ that start with the name _report_ , end with a number and have the extension _.pdf, .doc_ or _.docx_ will be transferred as binary and only if newer (if it already exists).

_(File list option "M" that allows full MSK pattern matching was added in PxPlus 2016 Update 0001.)_

##  See Also

**[MSK( ) Scan String for Mask](../functions/msk.md)**  
**[Interface with SFTP Server](Interface%20with%20SFTP%20Server.md)**
