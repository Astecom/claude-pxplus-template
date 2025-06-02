# Data Files

**Enhanced File Format** |  **__**  
---|---  
  
Enhanced File Format (EFF) allows for single files up to 504 gigabytes in size. These are 64-bit and are intended for LFS (Large File System) operating systems that provide 64-bit file addressing and locking functions. Operating systems that do not provide 64-bit file functions are also able to read/write this format but only within a 2GB limit.

The **[CREATE TABLE](../../../directives/create_table.md)** directive is designed for creating EFF files on platforms that support LFS, 64-bit addressing. It uses the same syntax as the **[KEYED](../../../directives/keyed.md)** directive:

> **CREATE TABLE** _filename$_ ,[, _extkey_len_ ][, _key_def_ _$_ ][, _max_recs_ ][, _rec_size_ ][_, fileopt_ ]

EFF files can also be created with the **[KEYED](../../../directives/keyed.md)** directive by setting the **['KF'](../../../parameters/kf.md)** system parameter (KF"=1 or "KF"=2) or by including OPT="1" or OPT="2" in the syntax.

## See Also

**[EFF vs. VLR File Formats](EFF%20vs%20VLR%20File%20Formats.md)**
