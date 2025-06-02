# Directives 

**PASSWORD** |  **_Apply Password and Encryption_**  
---|---  
  
##  Formats

1. |  _On Program_: |  **PASSWORD** _pswd_ _$_  
---|---|---  
2. |  _On Common Password to All Programs_: |  **PASSWORD ***[**,**_pswd_ _$_]  
3. |  _On Data File - Required_: |  **PASSWORD**(_chan_[,**ERR=**_stmtref_]) _pswd_ _$_**REQUIRED FOR OPEN**  
4. |  _On Data File - Read Only_: |  **PASSWORD**(_chan_[,**ERR=**_stmtref_]) _pswd_ _$_**REQUIRED FOR WRITE**  
5. |  _On Data File - Required and Encryption_: |  **PASSWORD**(_chan_[,**ERR=**_stmtref_]) _pswd_ _$_**REQUIRED FOR OPEN AND ON DATA**  
6. |  _On Data File - Read Only and Encryption_: |  **PASSWORD**(_chan_[,**ERR=**_stmtref_]) _pswd_ _$_**REQUIRED FOR WRITE AND ON DATA**  
7. |  _Copy Password to Data File from Data File_: |  **PASSWORD**(_chan1_[,**ERR=**_stmtref_]) **FROM**(_chan2_[,**ERR=**_stmtref_]) [,**ERR=**_stmtref_]  
8. |  _Remove Password from Data File_ _:_ |  **PASSWORD**(_chan_[,**ERR=**_stmtref_]) **REMOVE**  
  
**_Where:_**

***** |  An a _sterisk_ defines a password as common to all programs.  
---|---  
_chan_ |  Channel or logical file number.  
_pswd_ _$_ |  Password for program/data file protection.  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Description

Use the **PASSWORD** directive to assign/remove passwords to/from programs and data files.

#### **Important Note:**  
When encryption is enabled on a data file, all key and data blocks will be encrypted; therefore, routines that attempt to parse a passworded file in Binary mode will not function correctly. This includes ***UFAR** , the file recovery utility.

##  Formats 1 and 2

**_Assign or Remove Passwords on Programs_**

The formats described in this section assign/remove password protection on **_programs_**. Passworded programs cannot be listed or edited in PxPlus in any way unless the correct password is used.

**PASSWORD** _pswd_ _$_

**_Apply to Program_**

To assign a password, load the program, enter the **PASSWORD** directive followed by the new password _pswd_ _$_ , and then save the program.

**_Example:_**

> load "MYPROG"  
>  password "CAT"  
>  save "MYPROG"  
>  load "MYPROG"  
>  list  
>  Error #52 -- Program password protected  
>  delete 10  
>  Error #52 -- Program password protected  
>  password "CAT"  
>  list  
>  0010 rem...  
> 0020 ... etc.

Before changing a password, you must reload the program and enter the **PASSWORD** directive followed by the previously assigned password. At this point, you can either _change_ the password by entering **PASSWORD**(again) followed by a new string, or _remove_ password protection by entering **PASSWORD**(again) followed by a null string.

**PASSWORD *[** ,_pswd_ _$_**]**

**_Apply Password Common to All Programs_**

Use the *****  _(asterisk)_ to denote a common password. PxPlus will apply a common password automatically to all previously passworded programs when they are loaded and to all new programs.

#### **Note:**  
To help eliminate the possibility of a hacker attempting to determine a program password by brute force, every wrong password attempt will result in a one second delay.

##  Formats 3, 4, 5 and 6

**_Assign Password to Data File_**

The formats described in this section assign password protection to **_data files_**. A **KEY=**_pswd_ _$_ option is required to **OPEN** a passworded file. To define/change a password, you must have exclusive access to the file and it must be empty.

#### **Note:**  
File passwords are only available for VLR and EFF files.

The maximum length for a file password is determined by the **['EA'](../parameters/ea.md)** system parameter:

> If the **'EA'** system parameter is **_Off_** or is not supported by the PxPlus version being used (i.e. PxPlus 2018 and prior), the maximum password length is 8 characters, and any data beyond that is simply ignored.

> If the **'EA'** system parameter is **_On_** , the maximum password length is 128 characters, and any data beyond that is simply ignored.

In **_both_** cases, a password longer than 240 characters will result in an error.

Use one of the following syntax formats to assign a password to a data file:

**PASSWORD**(_chan1_[,**ERR=**_stmtref_]) _pswd_ _$_**REQUIRED FOR OPEN** |  **REQUIRED FOR OPEN** indicates that the correct password is **_always_** required on an OPEN.  
---|---  
**PASSWORD**(_chan1_[,**ERR=**_stmtref_]) _pswd_ _$_**REQUIRED FOR WRITE** |  **REQUIRED FOR WRITE** indicates that the correct password is required for WRITE access but is **_not_** required for READ only access.  
**PASSWORD**(_chan1_[,**ERR=**_stmtref_]) _pswd_ _$_**REQUIRED FOR OPEN AND ON DATA** |  **REQUIRED FOR OPEN AND ON DATA** indicates that the correct password is **_always_** required and that the data is encrypted.  
**PASSWORD**(_chan1_[,**ERR=**_stmtref_]) _pswd_ _$_**REQUIRED FOR WRITE AND ON DATA** |  **REQUIRED FOR WRITE AND ON DATA** indicates that the correct password is required for WRITE access but is not required for READ only access, and that the data is encrypted.  
  
The following table outlines the usage, access level, and encryption associated with each syntax format used to assign a password to a data file:

**PASSWORD Format** |  **Access Level** |  **Without Password** |  **With Correct Password** |  **Encrypted**  
---|---|---|---|---  
|  |  **Open** |  **Read** |  **Write** |  **Open** |  **Read** |  **Write**|   
**OPEN** |  0 |  No |  No |  No |  Yes |  Yes |  Yes |  No  
**WRITE** |  1 |  Yes |  Yes |  No |  Yes |  Yes |  Yes |  No  
**OPEN AND ON DATA** |  2 |  No |  No |  No |  Yes |  Yes |  Yes |  Yes  
**WRITE AND ON DATA** |  3 |  Yes |  Yes |  No |  Yes |  Yes |  Yes |  Yes  
  
An internal password queue records passwords for successfully opened files and checks when an attempt is made to open a passworded file without specifying a **KEY=** clause or when a null **KEY=** value is supplied. The password stored in the queue is used if an entry exists for that file. The number of entries to keep in the queue is controlled by the [**'PQ'**](../parameters/pq.md) system parameter. The ability to distinguish between an invalid password and a non-existent password is provided by means of the [**'PE'**](../parameters/pe.md) system parameter.

Due to the fact that all key and data blocks are encrypted, routines that attempt to parse a passworded file in binary mode will not function correctly. This includes ***UFAR** , the file recovery utility.

**_Encryption Algorithm_**

Prior to PxPlus 2019, passworded files use custom PxPlus algorithms for hashing a password before it is written to the file and for encrypting data written to the file.

As of PxPlus 2019, the **['EA'](../parameters/ea.md)** system parameter provides the ability to use industry standard algorithms for hashing a password with a salt (SHA-256) before it is written to the file and for encrypting data (AES-256) written to the file. By default, the '**EA'** system parameter is **_Off_** , which indicates that the legacy custom PxPlus algorithms are used.

To use the industry standard algorithms, set the **'EA'** system parameter to **_On_**.

#### **Note:**  
If a password is added to a file when the **'EA'** system parameter is **_On_** , older versions of PxPlus will **_not_** be able to open the file.

With the **'EA'** system parameter **_Off_** , it is still possible to password a file using the industry standard algorithms if _pswd_ _$_ is prefixed with "*AES:".

_(The 'EA' system parameter and the use of industry standard encryption algorithms for passworded files was added in PxPlus 2019.)_

**_Prompting for Password_**

PxPlus includes a generic program called **_get_pswd_** that will prompt for a password when **KEY=** is invalid or missing when a passworded file is opened. PxPlus checks the existence of the **_get_pswd_** program in the ***ext** sub-directory first, and then in ***ext/system** if the former is not found. This feature also allows the developer to customize the interface. As the prompt will be handled by a called program, it is also WindX-aware.

An embedded I/O (EIO) processing entry point called **Get_Password** provides the ability to prompt the user for a password based on logic associated with the EIO program. Provided the EIO program is valid and the entry point **Get_Password** exists, it will be used instead of the generic ***ext/system/get_pswd** or custom ***ext/get_pswd**. As the file is not in an **OPEN** state at the point when the entry point is called, the LFO and LFA values do not contain meaningful information. For this reason, the name of the file will be passed in the fourth parameter, normally referred to as **Value$**.

**_Example:_**

> keyed "MyFile",[1:1:10],0,0  
>  open lock (1)"MyFile"  
>  password (1)"ABC" required for open  
>  close (1)  
>  open (1,key="ABC")"MyFile"  
>  write (1)"Record A"  
>  lock (1)  
>  password (1)"XYZ" required for open Error #13: File access mode invalid  
>  purge (1)  
>  password (1)"XYZ" required for open  
>  close (1)  
>  open (1,key="XYZ")"MyFile"

**_Monitoring Attempts_**

**TCB(68)** reports the number of attempts that have been made to prompt for the password. This value is incremented prior to PxPlus calling the embedded I/O or **_get_pswd_** routine; therefore, the first attempt will have a **TCB(68)** value of 1.

By default, the first three attempts to access a passworded file using an invalid password will result in a prompt to re-enter the password. The fourth attempt generates an Error #53: Invalid password. This behavior is controlled via the [**'PP'**](../parameters/pp.md) system parameter.

**_Password Error Reporting_**

The following error conditions will be trapped and reported:

**Error #13: File access mode invalid** |  Attempt to apply or remove a password when the file is in READ only mode, not locked or not empty.  
---|---  
**Error #14: Invalid I/O request for file state** |  Attempt to apply a password to an unopened channel.  
**Error #17: Invalid file type or contents** |  Attempt to apply a password to a non-Keyed file or to encrypt a non-VLR formatted file.  
**Error #46: Length of string invalid** |  Attempt to assign a password longer than 240 characters.  
**Error #53: Invalid password** |  Attempt to open a file using invalid password.  
**Error #61: Authorization failure** |  Password record failed the internal CRC check.  
  
##  Format 7

**_Copy Password to Data File from Data File_**

**PASSWORD** (_chan1_[,**ERR=**_stmtref_]) **FROM** (_chan2_[,**ERR=**_stmtref_]) [,**ERR=**_stmtref_]

**PASSWORD FROM** allows a password from one file to be copied directly to another file **_without prompting the user for the password_**. Its use is primarily for rebuilding data files on the fly.

#### **Note:**  
An Error #13: File access mode invalid will occur if the destination file has an existing password, and an Error #53: Invalid password is generated when the source file does not contain a password.

##  Format 8

**_Remove Password from Data File_**

**PASSWORD**(_chan_) _pswd_ _$_ **REMOVE**

This format removes password protection from a data file. To remove a password, you must have exclusive access to the file, and it must be empty.

##  See Also

[**'EA' Encryption Algorithm**](../parameters/ea.md)  
[**'EL' Encryption Level**](../parameters/el.md)  
[**'PE' Password Error Control**](../parameters/pe.md)  
[**'PP' Prompt for Password**](../parameters/pp.md)  
[**'PQ' Password Queue**](../parameters/pq.md)  
[**OPEN Open a File for Processing**](open.md)
