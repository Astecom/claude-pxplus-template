# Language Reference

**Special File Handling** |   
---|---  
  
PxPlus supports the use of a set of device files that are designed for special file handling. When these files are used in an **[OPEN](directives/open.md)** directive, the system recognizes and processes them internally in the language at run time.

This section covers the following special device files:

**File** |  **Description**  
---|---  
***BITMAP*** |  Special file for generating a 24-bit colour bitmap image in memory. See [***BITMAP* Virtual Bitmap**](file_handling/~bitmap~.md).  
***HTML*** |  Special device file used to generate HTML formatted output. See [***HTML* Print to HTML**](file_handling/~html~.md).  
***MEMORY*** |  Memory**-** resident logical file. See [***MEMORY* Create and Use Memory File**](file_handling/~memory~.md).  
***PDF*** |  Output interface for generating PDF-compatible files. See [***PDF* PDF Print Interface**](file_handling/~pdf~.md).  
***PLUSFAX*** |  Special device file that provides fax output using email and internet access. See [***PLUSFAX* Send to Fax via Email**](file_handling/~plusfax~.md). _(added in PxPlus v7.00, build 9162)_  
***QUERY*** |  Access the contents of a Query like a standard read-only file. See [***QUERY* Query-based File**](file_handling/~query~.md). _(added in PxPlus v9.00)_  
***STDIO*** |  Special logical device the allows Windows applications to access the logical files 'stdin' and 'stdout' that are generally only available when run from Windows Command mode. See [***STDIO* Windows Standard IO Access**](file_handling/stdio.md). _(added in PxPlus v7.00)_  
***TBRED*** |  Special device file that provides remote access to Thoroughbred data files. Remote files must be on Unix/Linux server running the PLUSTIO access background process. See [***TBRED* Thoroughbred File Access**](file_handling/~tbred~.md). _(added in PxPlus v6.30)_  
***VIEW*** |  Access the contents of a View like a standard read-only file. See [***VIEW* View-based File**](file_handling/~view~.md). _(added in PxPlus v10.00)_  
***VIEWER*** |  **_(For Use in WindX or Windows Only)_** Special device file that allows you to preview print jobs. See [***VIEWER* Print Preview**](file_handling/~viewer~.md).  
***WINDEV*** |  **_(For Use in WindX or Windows Only)_** Special device file that provides access in **_raw_** or **_pass through_** mode to the Windows print sub-system. See [***WINDEV* Raw Print Mode**](file_handling/~windev~.md).  
***WINPRT*** |  **_(For Use in WindX or Windows Only)_** Special device file that provides standard API access to the Windows print sub-system. See [***WINPRT* Windows Printing**](file_handling/~winprt~.md).  
  
> #### **Note:**  
These filenames are not case sensitive; however, the ***** (_asterisks_) are required; e.g. open (14)"*Memory*".

Thoroughbred is a registered trademark of Thoroughbred Software International Inc.
