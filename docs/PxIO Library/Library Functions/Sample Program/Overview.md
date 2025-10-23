# Library Functions

**Sample Program** |  **__**  
---|---  
  
The following is a sample program:

/* pxio_sample.c : Sample PxIO console application */   
  
/* An error buffer size of 100 will always be large enough. */   
#define ERROR_BUFFER_SIZE 100   
#define RECORD_SIZE 50   
  
#include <stdio.h>   
#include <string.h>   
  
#include "PxIO.h"   
  
int main( int argc, char * argv[])   
{   
PxIOFileHandle fileHandle;   
PxIOService serviceHandle;   
const char fileName[] = "testfile";   
inti;   
KeyInfo key;   
RecordInfo record;   
char recordData[20];   
char keyData[5];   
char readBuffer[RECORD_SIZE];   
int status, pxPlusErrorValue;   
char errorBuffer[ERROR_BUFFER_SIZE];   
size_t errorBufferSize = ERROR_BUFFER_SIZE;   
/* This is the default PxPlus field separator. */  
const unsigned char fieldSeparator = 0x8a;   
  
const char activationString[] = "XXXXXXXXXXXX" ;   
const int activationNumber = 000000000000;   
  
/* Before we use the PxIO Library we must activate it... */  
status = PxIOActivation(activationString, activationNumber);   
if (status < 0)   
{   
pxPlusErrorValue = PxIOGetError(status, errorBuffer, &errorBufferSize);   
printf( "%s\n" , errorBuffer);   
return status;   
}   
  
/* ...and initialize it for single threading by setting the multithread option  
to FALSE. */  
status = PxIOLibInit(FALSE);   
if (status < 0)   
{   
pxPlusErrorValue = PxIOGetError(status, errorBuffer, &errorBufferSize);   
printf( "%s\n" , errorBuffer);   
return status;   
}   
  
/* Create a local instance of the library. */  
status = PxIOCreateService(&serviceHandle, NULL, 0, 0, NULL, NULL, NULL);   
if (status < 0)   
{   
pxPlusErrorValue = PxIOGetError(status, errorBuffer, &errorBufferSize);   
printf( "%s\n" , errorBuffer);   
return status;   
}   
  
/* Erase any previous test file. */  
status = PxIOErase(serviceHandle, fileName, FALSE);   
if (status < 0)   
{   
/* If the error we encounter is anything other than a missing file error  
(a value of 12), report the error and return. */  
if (PxIOGetError(status, NULL, NULL) != 12)   
{   
pxPlusErrorValue = PxIOGetError(status, errorBuffer, &errorBufferSize);  
printf( "%s\n" , errorBuffer);   
return status;   
}   
}   
  
/* Create a keyed file with a record size of RECORD_SIZE, a key size of 4, no  
maximum number of records, a simple key definition, a variable record size, the  
default buffer size, and a field separator that we specify. */  
status = PxIOFileCreate( serviceHandle, fileName, FILE_TYPE_KEYED, RECORD_SIZE,   
4, 0, "[1:1:4]", CREATE_OPTION_VARRECSZ, 0, fieldSeparator);   
if (status < 0)   
{   
pxPlusErrorValue = PxIOGetError(status, errorBuffer, &errorBufferSize);   
printf( "%s\n" , errorBuffer);   
return status;   
}   
  
/* Open the file. */  
status = PxIOOpen(serviceHandle, &fileHandle, "testfile" , 0, NULL, 0, 0);   
if (status < 0)   
{   
pxPlusErrorValue = PxIOGetError(status, errorBuffer, &errorBufferSize);   
printf( "%s\n" , errorBuffer);   
return status;   
}   
  
/* Add 10 records to the opened file. */  
for (i = 1; i <= 10; ++i)   
{   
/* Create a record. Note the field separator at the end. */  
sprintf( recordData, "Record #%d%c" , i, fieldSeparator);   
  
record.length = ( int )strlen(recordData);   
record.data = recordData;   
  
/* Create the key. */  
key.length = 4;   
sprintf(keyData, "%04d" , i);   
key.data = keyData;   
  
/* Write the data. */  
status = PxIOKeyWrite(fileHandle, &record, &key, TRUE);   
if (status < 0)   
{   
pxPlusErrorValue = PxIOGetError(status, errorBuffer, &errorBufferSize);   
printf("%s\n" , errorBuffer);   
return status;   
}   
  
/* Overwrite the field separator, which we put at the end of the record,  
so it looks normal when printing. */  
recordData[strlen(recordData) - 1] = '\0' ;   
  
printf("Writing record #%d: \"%s\"\n" , i, recordData);   
}   
  
printf("\n");   
  
/* Seek to a key in the file. */  
key.length = 4;   
key.data = "0005" ;   
status = PxIOKeySeek(fileHandle, &key, 0);   
if (status < 0)   
{   
pxPlusErrorValue = PxIOGetError(status, errorBuffer, &errorBufferSize);   
printf( "%s\n" , errorBuffer);   
return status;   
}   
  
/* Read the records following the key we specified until the end of the  
file is reached. */  
while (1)   
{   
status = PxIORead(fileHandle, &record, -1, READ_TYPE_NO_OPTIONS);   
  
/* If we've reached the end of the file, exit the loop. */  
if (PxIOGetError(status, NULL, NULL) == 2) break;   
  
/* If we've encountered any other error, return from the routine. */  
if (status < 0)   
{   
pxPlusErrorValue = PxIOGetError(status, errorBuffer, &errorBufferSize);  
printf ( "%s\n" , errorBuffer);   
return status;   
}   
  
/* Save the record into our buffer. */  
memcpy(readBuffer, record.data, record.length);   
  
/* Overwrite the field separator, which will be at the end of the record,  
so it looks normal when printing. */  
readBuffer[ record.length - 1] = '\0' ;   
printf("Information read: \"%s\"\n" , readBuffer);   
}   
  
/* Close the file. */  
status = PxIOClose( fileHandle);   
if (status < 0)   
{   
pxPlusErrorValue = PxIOGetError(status, errorBuffer, &errorBufferSize);   
printf("%s\n" , errorBuffer);   
return status;   
}   
  
/* Destroy the local service. */  
status = PxIODestroyService(serviceHandle);   
if (status < 0)   
{   
pxPlusErrorValue = PxIOGetError(status, errorBuffer, &errorBufferSize);   
printf( "%s\n" , errorBuffer);   
return status;   
}   
  
/* We're finished with the PxIO Library, so we shut it down. */  
status = PxIOLibShutDown();   
if (status < 0)   
{   
pxPlusErrorValue = PxIOGetError(status, errorBuffer, &errorBufferSize);   
printf("%s\n" , errorBuffer);   
return status;   
}   
  
return 0;   
}
