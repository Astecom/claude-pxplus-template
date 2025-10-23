# Data Integration

**PVKIO - PxPlus IO Library** |  **__**  
---|---  
  
The PxPlus IO Library (PVKIO) consists of a set of functions that can be used with programs written in C, C++, and other programming languages. These functions enable direct access to PxPlus keyed and indexed data files from applications that are external to PxPlus and have been precompiled for use in MS Windows, AIX and Linux.

The PxPlus IO Library includes functions for performing a variety actions:

  * Allocate/deallocate environment
  * Get/Set environment variables
  * Extend file open
  * Close file
  * Read a record from a file
  * Position within keyed/indexed file
  * Write/rewrite a record
  * Write a new record
  * Update an existing record
  * Remove a record
  * Get/Set address/position within file
  * Return last error status, last error message
  * Read dictionary
  * Point to internal structure block
  * Describe file
  * Get tables in catalog



For a list of all the available functions and for syntax details, see **[PxPlus PVKIO](../../../C-Library%20File%20IO%20Routines/Introduction.md)**.

Use and distribution of PVKIO requires a separately purchased activation key apart from your initial PxPlus activation. A warning message to this effect is presented whenever a file is opened unless the application first invokes the **PVK_register( )** function with a valid registration string and registration number. Contact your local PxPlus reseller or visit the PxPlus website at **[www.pvxplus.com](http://www.pvxplus.com/)** for complete product information and licensing.
