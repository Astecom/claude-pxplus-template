# Web Utilities

***WEB/SFTP** |  **_Interface with SFTP Server_**  
---|---  
  
## Description

The ***web/sftp** utility is used to interface with a server that is running an SFTP server. It can be used to send files to, receive files from, delete files from, or get a directory listing from an SFTP server.

#### **Note:**  
The ***web/sftp** utility uses **_curl_** \- the URL data transfer command line tool. More specifically, it uses a version of curl built with SFTP support. A compatible version of the curl utility is included in the Windows installation of PxPlus. On many UNIX/Linux systems, the curl utility comes with the OS; however, it may or may not support SFTP.  
  
On UNIX/Linux systems where you want to use ***web/sftp** , check that a compatible version of curl is installed and is in the path by running the **_curl -V_** command from the Command line. If the response is curl version information, this confirms that curl is installed and is in the path. If the response is an error stating that curl cannot be found, then you need to install it, or if already installed, add the location of curl to the path. Once curl is installed and is in the path, check that **SFTP** is listed in the supported protocols section of the output, and if listed, this confirms that ***web/sftp** will work. If it is not listed, you can find and install a version of curl with SFTP support by visiting **<https://curl.haxx.se/download.html>**.

_(The *web/sftp utility was added in PxPlus 2017.)_

## Formats

1. |  **CALL "*web/sftp;send"** , _server$, user$, password$, key_path$, key_passphrase$, insecure, timeout, files_to_send$, upload_dir$, case$, result$_  
---|---  
2. |  **CALL "*web/sftp;receive"** , _server$, user$, password$, key_path$, key_passphrase$, insecure, timeout, files_to_receive$, download_dir$, case$, result$_  
3. |  **CALL "*web/****sftp;delete"** ,  _server$, user$, password$, key_path$, key_passphrase$, insecure, timeout, files_to_delete$, case$, result$__(added in PxPlus 2018)_  
4. |  **CALL "*web/****sftp;list"** , _server$, user$, password$, key_path$, key_passphrase$, insecure, timeout, recursion, result$_  
  
**_Where:_**

_server$_ |  **_(Input)_** Contains the name of the SFTP server. It should be in the form of **SERVER;SOCKET**. **_Example:_**  
  
sftp.myserver.com;22 If no socket number is specified, then a default SFTP port of 22 is used. An SFTP sub-directory can be appended to the **SERVER** portion. See **Important Note**. **_Example:_**  
  
sftp.myserver.com/work/sftp

#### **Important Note:**  
The sub-directory path **_must_** URL encode any special URL characters (except for slashes).  
  
**_Example_** :  
  
"sftp.pvx.com/home/myapp/Help"+CVS("?","ASCII:URL")

Maximum length of _server$_ is 128 characters. _(TLS support for SFTP was added as of PxPlus 2020.)_  
---|---  
_user$_ |  **_(Input)_** Contains the user ID. Maximum length of _user$_ is 64 characters.  
_password$_ |  **_(Input)_** Contains the user password. If _key_path_ _$_ is not null, this will be ignored. Maximum length of _password$_ is 64 characters. See **[SSH Authentication](Interface%20with%20SFTP%20Server.htm#ssh)** below.  
_key_path_ _$_ |  **_(Input)_** Contains the full path of the OpenSSH Private key file to be used for authentication. If present, _password$_ will be ignored. If null, password authentication will be used. See **[SSH Authentication](Interface%20with%20SFTP%20Server.htm#ssh)** below.  
_key_passphrase_ _$_ |  **_(Input)_** The passphrase for the OpenSSH Private key, if any. See **[SSH Authentication](Interface%20with%20SFTP%20Server.htm#ssh)** below.  
_insecure_ |  **_(Input)_** If non-zero, this will avoid _known_hosts_ checking. If zero, it will check for the server's Public key in the _known_hosts_ file. See **[SSH Authentication](Interface%20with%20SFTP%20Server.htm#ssh)** below.  
_timeout_ |  **_(Input)_** If non-zero, this parameter specifies the timeouts for communicating with an SFTP server. If zero, the timeout value is set to 60 seconds.  
_files_to_send_ _$_ |  **_(Input)_** List of the files to _send to_ an SFTP server or a pattern matching the files to send to an SFTP server. Maximum length of _files_to_send_ _$_ is 32,000 characters. See **[Usage Details](Interface%20with%20SFTP%20Server.htm#usage)** below.

#### **Note:**  
_files_to_send_ _$_ ** _cannot_** be null.  
  
_files_to_receive_ _$_ |  **_(Input)_** List of the files to _receive from_ an SFTP server or a pattern matching the files to receive from an SFTP server. Maximum length of _files_to_receive_ _$_ is 32,000 characters. See **[Usage Details](Interface%20with%20SFTP%20Server.htm#usage)** below.

#### **Note:**  
_files_to_receive_ _$_ ** _cannot_** be null.  
  
_files_to_delete_ _$_ |  **_(Input)_** List of the files to _delete from_ an SFTP server or a pattern matching the files to delete from an SFTP server. Maximum length of _files_to_delete_ _$_ is 32,000 characters. See **[Usage Details](Interface%20with%20SFTP%20Server.htm#usage)** below.

#### **Note:**  
_files_to_delete_ _$**cannot**_ be null.

_(**files_to_delete$** was added in PxPlus 2018.)_  
_upload_dir_ _$_ |  **_(Input)_** Contains the path and the directory name on an SFTP server to use to store files. If null, the upload directory is the root directory of the SFTP server.  
_download_dir_ _$_ |  **_(Input)_** Contains the path and the directory name on a client machine to use to store files. If null, the download directory is the working directory of the machine.  
_case$_ |  **_(Input)_** Possible values are: |  "U" |  Converts all file and directory names to uppercase  
---|---  
"L" |  Converts all file and directory names to lowercase  
"" |  Does not change file and directory names  
_recursion_ |  **_(Input)_** If non-zero, the directory listing returned will include the listing of all sub-directories as well. If zero, the directory listing will only list the current directory.  
_result$_ |  **_(Output)_** If doing a **LIST** (see **[Format 3](Interface%20with%20SFTP%20Server.htm#format3)** above), the program loads this variable with the directory list results.  
  
If an error is encountered while sending, receiving or listing files, then the program loads this variable with a textual description of the problem and exits with an error.  
  
If one (or more) of the sending/receiving file names is invalid, then all remaining files that can be sent/received will be transferred, and those which cannot be transferred will be returned in the _result$_ field.  
  
##  SSH Authentication

SFTP uses SSH for communication. SSH allows for Private/Public key authentication, as well as password authentication. Private/Public key authentication will be attempted first **_before_** password authentication.

**_Creating a Private/Public Key_**

To create a Private/Public key pair for SSH authentication, follow the steps below:

**_Windows_**

|  1. |  Download and install putty (if not already installed) by visiting: **<https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html>**.  
---|---|---  
|  2. |  Launch _puttygen.exe_.  
|  3. |  Click the _Generate_ button.  
|  4. |  Move the mouse around randomly in a blank area.  
|  5. |  Modify the default key comment to something like _your_name@server_name_.  
|  6 |  **_(Optional)_** Specify a key passphrase for added security.  
|  7. |  Click the _Conversions_ menu item and select _Export OpenSSH key_.  
|  8. |  Copy the Public key from the screen area labeled **Public key** for pasting into the _authorized_keys_ file in the SSH directory. Once the key has been copied, _puttygen_ can be closed.  
  
**_UNIX/Linux_**

|  1. |  At the Command prompt, type: ssh-keygen -t rsa -b 2048 -C "your_email@example.com".  
---|---|---  
|  2. |  When prompted to "_Enter a file in which to save the key_ ," press Enter. This accepts the default file location. Alternatively, you could specify the location and filename of your key.  
|  3. |  **_(Optional)_** At the prompt, type a secure passphrase for added security.  
|  4. |  At the Command prompt, type:  _cat pub_key_path_. Copy the output.  
  
**_Adding the Public Key to the Server_**

Now that a Public/Private key pair has been created, add your Public key to the server's _authorized keys_ file using the steps below, assuming you have control over the server. (If you **_do not_** have control, the server administrator will need to add your Public key.)

|  1. |  Access the server.  
---|---|---  
|  2. |  Navigate to the SSH directory, i.e._/root/.ssh_.  
|  3. |  Open the _authorized_keys2_ file for editing.  
|  4. |  Append your Public key to the end of the file.  
|  5. |  Save the changes.  
  
**_Adding the Server's Public Key to the Client_**

The final step is to add the server's Public key to the client machine's _known_hosts_ file using the steps below, assuming you have control over the server. (If you **_do not_** have control over the server, obtain the server's Public key from the server administrator.)

**_This final step is optional_**. However, if you do not perform this step, then you must set the _insecure_ option to non-zero when using ***web/sftp**. Keep in mind that things will not be as secure, as the client will not be verifying the identity of the server.

|  1. |  Access the server.  
---|---|---  
|  2. |  Navigate to the SSH configuration directory; i.e. _/etc/ssh_.  
|  3. |  At the Command prompt, type:  _cat pub_key_path_. Copy the output. (The Public key is usually named something like _ssh_host_rsa_key.pub_.)  
|  4. |  On the client machine, open/create the _known_hosts_ file for editing. (On **UNIX/Linux** , this is usually _/root/.ssh/known_hosts_. On **Windows** , this is _%USERPROFILE%\AppData\Roaming\\_ssh\known_hosts_.)  
|  5. |  Navigate to the end of the file and start a new line. Then, insert the hostname or IP address, insert a space, and then append the server's Public key.  
|  6. |  Save the changes.  
  
##  Usage Details

**_files_to_send_ _$ / files_to_receive$ / files_to_delete$_**

Wild characters are accepted in file names (unless **MSK( )** regular expression pattern matching is enabled):

|  **?** |  Any one character  
---|---|---  
|  ***** |  Any number of any characters  
  
Arguments can contain more than one file name. File names should be separated using one of the following: **$8A$** , **$0A$** , **$0D0A$** , or **;**  _(semi-colon)_.

#### **Note:**  
If you have a directory or filename that includes one of the wildcard or separator characters, you cannot reference that path directly in the files list, as that character will be interpreted as a wildcard. You need to use **MSK(** **)** mode and escape any special characters.  
  
**_Example:_**  
  
If the filename is "Help?", then:  
  
files_to_send$="Help\?|M"

A number of options may be specified after a file name. Options should be separated from the file name by a **|**  _(pipe)_. Options are:

**Overwrite**  
 _(if the file already exists on the SFTP server)_ |  **0** = Always overwrite _(default)  
_**1** = Never overwrite |  Ignored in _files_to_delete_ _$_.  
---|---|---  
**Recursion** |  **R** = Recursion ON _  
_**""** = Recursion OFF _(default)_ |  In _files_to_delete_ _$_ , only applies to pattern matching.  
  
If a directory is specified, it **_must_** recursively delete it regardless of this option.  
**Regular Expression Pattern Matching** |  **M** = Enable **MSK( )** regular expression pattern matching  
**""** = Wildcard pattern matching (_default_) |   
  
**_Example:_**

> file_name1|1;c:\tmp\\*.*|0R;C:\\\reports\\\report[0-9]+\\.(pdf|doc|docx)|M

In this example, _file_name1_ will not be transferred if it currently exists. The directory _c:\tmp_ and all files with it will be transferred and will always overwrite any existing file of the same name. It will also recurse through all sub-directories of _c:\tmp_ and transfer all files in every sub-directory. All files in _c:\reports_ that start with the name _report_ , end with a number and have the extension _.pdf, .doc_ or _.docx_ will be transferred and will always overwrite any existing file of the same name.

#### **Note:**  
SFTP does **_not_** support ASCII transfer mode like FTP. All transfers are binary transfers.  
SFTP does **_not_** support the _Overwrite if newer_ option.

## See Also

**[MSK( ) Scan String for Mask](../functions/msk.md)**  
**[Interface with FTP Server](Interface%20with%20FTP%20Server.md)**
