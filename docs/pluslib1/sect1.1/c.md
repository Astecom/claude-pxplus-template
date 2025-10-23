# PLUSLIB DLL Library  
  
**DLL Library Conventions** |  **__**  
---|---  
  
To have PxPlus use a DLL library, it **_must_** exist in the same directory as the _pxplus.exe_ program. The Maintenance utility '***plus/dll/maint** ' provided with PxPlus is used to build a DLL library. The DLL will contain the PxPlus programs and data files that you need for your application as Windows Resources. See **[Maintenance Utility](a.md)**.

During system initialization, PxPlus will open the DLL and build a list of the files/programs that it contains. Whenever your application references any of the files contained within the library, the version in the library will be used, regardless of the value set in the **[PREFIX](../../directives/prefix.md)** directive.

#### **Note:**  
File names within the library are case insensitive, and all slashes will be converted to a forward slash.

To determine if the program/file is being accessed from the DLL library, the full pathname for the program/file will contain "[res]" as a prefix.

## Single DLL Library

The Maintenance utility '***plus/dll/maint** ' is used to create a single resource DLL library. See **[Maintenance Utility](a.md)**. For PxPlus to use the DLL library, it **_must_** be named **'PLUSLIB.DLL** '.

## Multiple DLL Libraries

One additional resource library can be referenced within the **[Config]** section of the PxPlus **[INI file](../../PxPlus%20Installation%20and%20Configuration/Customizing%20PxPlus/INI%20Contents.md)** using the **[ResourceLib=lib.dll](../../PxPlus%20Installation%20and%20Configuration/Customizing%20PxPlus/INI%20Contents.htm#Mark4)** setting.

**_Example:_**

> [Config]  
>  ResourceLib=yourlib.dll

Up to 10 additional resource libraries can be referenced by using the **'OPTION'** mnemonic (the **["ResourceLib"](../../mnemonics/option.htm#resourcelib)** setting). In the example below, each DLL is separated by a **;**  _(semi-colon)_ :

**_Example:_**

> PRINT 'OPTION'("ResourceLib","lib1.dll";"lib2.dll";"lib3.dll")

#### **Note:**  
The **PLUSLIB.DLL** is **_required_** when using multiple resource libraries. The **PLUSLIB.DLL** library can contain PxPlus programs and data files, or it can be empty.

_(Multiple libraries support was added in PxPlus v11.)_
