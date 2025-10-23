# Data Files

**EFF vs. VLR File Formats**|   
---|---  
  
This page provides information to help explain the differences between Enhanced File Format (EFF) and Variable Length Record (VLR) file formats.

The EFF file format was originally designed to provide a few features not present in VLR file formats such as increased maximum file size, transaction processing and additional keys (explained below). However, unless you plan to use the transaction processing features of EFF, the new PxPlus VLR files provide a better alternative with regards to speed, space utilization and recoverability.

## Increased Maximum File Size

VLR files store data on pages where each page contains its absolute physical address in bytes 2 through 5 of the page. Because only four bytes were used, the largest that a single VLR file could grow to was 2GB. EFF addressed this by storing a relative page number in these bytes; therefore, the maximum size of an EFF file was 2 billion pages where each page could be over 60Kb in size, allowing files in the terabyte range.

PxPlus adapted this design to increase the maximum size of enhanced VLR files based on the fact that all pages were multiples of 1K. This meant that a number of the bits (depending on the page size) in the address field had to be zero. With PxPlus-enhanced VLR files, when a file exceeds 2GB, the page address field was extended into these lower bits that were never used.

In addition, some of these bits were used to extend the number of key entries that a key page could contain. The original VLR- and EFF-based files have a limit of 255 key entries on a key page. For example, if you had a 6-byte key and allowed for overhead, the maximum space used for the keys on a key page would be around 2800 (255*(6+5)). This meant that on a typical 4K page size, more than 30% of the key space was wasted.

The PxPlus-enhanced VLR format allows up to 64,000 key entries on a page, which maximizes space utilization and performance due to shorter key trees searches.

## Transaction Processing

EFF files use a technique called _shadow paging_ , which allows updates to a file to be deferred until a transaction is committed or rolled back. For information on shadow paging, visit **[https://en.wikipedia.org/wiki/shadow_paging](https://en.wikipedia.org/wiki/Shadow_paging)**.

When a page is updated, it is not overwritten but is placed in an empty/unused page on the file. When the data needs to be committed, the system flips an internal flag. As a result, these updated pages become live, and the old live pages are freed for re-use. This technique allows you start an update (transaction), modify the EFF files, and then tell the system to commit all the updates. This functionality does **_not_** exist in VLR files; therefore, to use this type of logic, you **_must_** use EFF files.

#### **Important Note:**  
The use of shadow paging makes EFF files harder to physically recover if a hardware/software failure occurs and you lose some of the file control information. If the system is not able to determine the shadow pages from the live pages, there is no way to programmatically recover the data, and you will need to restore your files from a backup. In addition, EFF files tend to be slower than VLR files for updates but are faster for reading, as multiple readers can be active during update cycles.

## Additional Keys

Although EFF files were designed to allow more keys, some system utilities and existing applications have not been adapted to detect more than 16 keys.

#### **Important Note:**  
To avoid any potential issues, **_it is strongly recommended that you only use 16 keys or less_**.
