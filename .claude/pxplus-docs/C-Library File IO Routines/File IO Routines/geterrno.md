# C-Library File IO Routines

**PVK_geterrno( )** |  **_Return Last Error Status_**  
---|---  
  
## Format

int **PVK_geterrno**(void);

## Description

This function returns the last known error status. It will return one of the following values:

#define ERR_CANT_OPEN |  1  
---|---  
#define ERR_BAD_FH |  2  
#define ERR_NOSUCH_KEY |  3  
#define ERR_EOF |  4  
#define ERR_BAD_TYPE |  5  
#define ERR_KEYNO |  6  
#define ERR_KEY_LENGTH |  7  
#define ERR_NO_MEMORY |  8  
#define ERR_KIO_OFS |  9  
#define ERR_KIO_FAILED |  10  
#define ERR_KIO_WRONG |  11  
#define ERR_KSZ_WRONG |  12  
#define ERR_RSZ_WRONG |  13  
#define ERR_SEEK_FAILED |  14  
#define ERR_READ_FAILED |  15  
#define ERR_READ_SHORT |  16  
#define ERR_BAD_FUNCTION |  17  
#define ERR_INDEXED_FILE |  18  
#define ERR_WRITE_FAILED |  19  
#define ERR_KIO_BADADR |  20  
#define ERR_KIO_DELCHN |  21  
#define ERR_KIO_NOEOF |  22  
#define ERR_BUSY |  23  
#define ERR_FILE_FULL |  24  
#define ERR_NOT_REGISTERED |  25  
#define ERR_DOM |  26  
#define ERR_KIO_RSIZE |  27  
#define ERR_KIO_BADSEG |  28  
#define ERR_IND_HEADER |  29  
#define ERR_KIO_DECOMPFAIL |  30  
#define ERR_PSWD_WRONG |  31  
#define ERR_BAD_OFFSET |  32  
#define ERR_NO_SUCH_FILE |  33  
#define ERR_RESTRICT_FAILED |  34  
#define ERR_ACCESS_VLTN |  35  
#define ERR_TX_BEGIN |  36  
#define ERR_TX_ROLLBACK |  37  
#define ERR_FILE_BUSY |  38  
#define ERR_MISSING_INFO |  39  
#define ERR_OBJ_VER_WRONG |  40
