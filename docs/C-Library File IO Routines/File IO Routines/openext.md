# C-Library File IO Routines

**PVK_OpenExt( )** |  **_Extended File Open_**  
---|---  
  
## Format

int **PVK_OpenExt** **(HPVKENV**  _hEnv_ , char _*path_ , char _*pswd_ , int  _pswd_sz_ , INT16 _opt_ , INT32 _*open_err_);

**_Where:_**

_hEnv_ |  Handle to environment structure created by **[PVK_AllocEnv( )](allocenv.md)**  
---|---  
_path_ |  Pointer to a null terminated string containing the pathname of the keyed/direct/indexed/view file to open  
_pswd_ |  Pointer to a buffer that contains the optional password required to access a keyed or direct file  
_pswd_sz_ |  Indicates the length of the _pswd_ buffer  
_opt_ |  Indicates whether a file should be opened in read-only mode _(Windows or UNIX)_ or for exclusive use _(Windows Only)_  
_open_err_ |  Error code (See **[Error Code](openext.htm#errorcodes)** values)  
  
## Description

**PVK_OpenExt(** **)** is used to open a PxPlus keyed/direct/indexed/EFF files or Views which requires a password or extended options. It will return the logical file handle for the file, provided it can be opened. All subsequent file I/O calls to PXPIO functions must specify the returned handle.

Valid opt values include **WSF_INPUT** for read-only and **WSF_LOCK** for exclusive mode. A value of -1 is returned if the file cannot be opened.

**Opt Table**  
---  
#define FAM_READONLY |  0x0000 |  /* File in read only mode */  
#define FAM_READWRITE  |  0x0001 |  /* File in read write mode */  
#define WSF_LOCK |  0x0400 |  /* File was opened with exclusive use */  
  
**PXPIO Error Codes**  
---  
#define ERR_OK |  0 |  /* no error */  
#define ERR_CANT_OPEN |  1 |   
#define ERR_BAD_FH |  2 |   
#define ERR_NOSUCH_KEY |  3 |   
#define ERR_EOF |  4 |   
#define ERR_BAD_TYPE |  5 |   
#define ERR_KEYNO |  6 |   
#define ERR_KEY_LENGTH |  7 |   
#define ERR_NO_MEMORY |  8 |   
#define ERR_KIO_OFS |  9 |   
#define ERR_KIO_FAILED |  10 |   
#define ERR_KIO_WRONG |  11 |   
#define ERR_KSZ_WRONG |  12 |   
#define ERR_RSZ_WRONG |  13 |   
#define ERR_SEEK_FAILED |  14 |   
#define ERR_READ_FAILED |  15 |   
#define ERR_READ_SHORT |  16 |   
#define ERR_BAD_FUNCTION |  17 |   
#define ERR_INDEXED_FILE |  18 |   
#define ERR_WRITE_FAILED |  19 |   
#define ERR_KIO_BADADR |  20 |   
#define ERR_KIO_DELCHN |  21 |   
#define ERR_KIO_NOEOF |  22 |   
#define ERR_BUSY |  23 |  /* File or Data busy */  
#define ERR_FILE_FULL |  24 |   
#define ERR_NOT_REGISTERED |  25 |   
#define ERR_DOM |  26 |  /* Duplicate key not allowed if missing Rpt ERR_NO_SUCH_KEY */  
#define ERR_KIO_RSIZE |  27 |  /* Keyed file error (Record length invalid) */  
#define ERR_KIO_BADSEG |  28 |  /* Invalid segment number */  
#define ERR_IND_HEADER |  29 |  /* Unable to access Indexed file header */  
#define ERR_KIO_DECOMPFAIL |  30 |  /* Decompress of record failed */  
#define ERR_PSWD_WRONG |  31 |  /* Wrong password supplied */  
#define ERR_BAD_OFFSET |  32 |  /* Bad Read Offset */  
#define ERR_NO_SUCH_FILE |  33 |  /* File does not exist (or already exists) */  
#define ERR_RESTRICT_FAILED |  34 |   
#define ERR_ACCESS_VLTN |  35 |  /* Access violation, attempt to write to Read Only file */  
#define ERR_TX_BEGIN |  36 |  /* Begin transaction without finishing previous */  
#define ERR_TX_ROLLBACK |  37 |  /* Rollback/Commit without proper Begin transaction */  
#define ERR_FILE_BUSY |  38 |  /* File is busy */  
#define ERR_MISSING_INFO |  39 |  /* Not enough information passed in */  
#define ERR_OBJ_VER_WRONG |  40 |   
#define ERR_BAD_BUFFER |  41 |  /* Incorrect buffer returned from page_get */  
#define ERR_SYS_NOFH |  42 |  /* os error: No more file handles available (too many open files)*/  
#define ERR_NET_FAILED |  43 |  /* network error */  
#define ERR_VERSION |  44 |   
#define ERR_SECURITY_FAILED |  45 |  /* Logon failed */  
#define ERR_PVK_NOTSUPPORTED |  46 |  /* Feature is not supported */
