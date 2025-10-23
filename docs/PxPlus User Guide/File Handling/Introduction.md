# Introduction to Using PxPlus

**File Handling** |  **__**  
---|---  
  
From a computing perspective, a file is simply a named storage location on disk that contains a collection of data. There are many different types of files: text, programs, documents, directories, ASCII, binary, etc. It is the contents of a file that determines how it will be used. For example, a PxPlus _data file_ contains information that is organized specifically to be accessed for processing by a PxPlus program.

This section focuses primarily on the PxPlus operations for creating data files and for transferring data in and out of different data file types.

All aspects of PxPlus are designed to work seamlessly together while, at the same time, interfacing with other external components. This is also true with regards to data handling. Internally, all PxPlus database and file systems are viewed as datasets, which can be accessed either sequentially or by key (such as a client or product identifier). PxPlus datasets can be accessed quickly and easily, and their format is designed for maximum performance while simplifying accessibility and maintainability.

The native file system in PxPlus is optimized for small to mid-range systems, but it includes all the features required to develop and maintain large-scale business applications. PxPlus supports transparent access to external databases. Built-in rollback and recovery is available for maintaining data consistency. Other features include the **[Views System](../../Views%20System/Introduction.md)**, the ability to include **[Embedded I/O](Embedded%20IO%20Procedures/Overview.md)** processes to filtering/handling data, along with dynamic index creation and deletion.

#### **Note:**  
For information on the options that are available for storing and retrieving data, outside access to PxPlus data files, and the handling of third-party data formats (Oracle, Microsoft SQL, etc.), see **[Data Integration](../Data%20Integration/Introduction.md)**.

## See Also

**[Data Files](Data%20Files/Overview.md)  
[Processing Data Files](Processing%20Data%20Files/Overview.md)  
[Embedded I/O Procedures](Embedded%20IO%20Procedures/Overview.md)  
[File Naming Conventions](File%20Naming%20Conventions/Overview.md)  
[Prefix Processing](Prefix%20Processing/Overview.md)  
[Foreign File Access](Foreign%20File%20Access/Overview.md)  
[Views System](Views%20System/Overview.md)  
[Open Load Caching](Open%20Load%20Caching.md)  
[Data Mirroring](../../Data%20Mirroring/Introduction.md)  
[Historical File Splitting](../../Historical%20File%20Splitting/Introduction.md)**
