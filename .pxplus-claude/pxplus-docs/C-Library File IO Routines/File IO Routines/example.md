# C-Library File IO Routines

**Code Example**|   
---|---  
  
/* sample.c : Sample PXPIO console application*/

#include <stdio.h>

#include <windows.h>

#include "pvkio.h"

int main(int argc, char* argv[])

> HMODULE hPvkio;

> FARPROC PVK_OpenExt, PVK_close, PVK_read, PVK_write, PVK_seek;

> FARPROC PVK_AllocEnv, PVK_DeAllocEnv, PVK_RegisterKey;

> HPVKENV hEnv;

> intfh, keysz, dtasz, i, sts, fc;

> char bfr[256], keybfr[4+1], dtabfr[4+256+1], pswd[32];

> INT16 opt = 0;

> INT32 open_err = 0;

> memset(pswd, 0x00, sizeof(pswd));

> /* Load the DLL and locate necessary entrypoints */

> if ((hPvkio = LoadLibrary("pxpio.dll")) EQ NULL) return -1;

if ((PVK_OpenExt = GetProcAddress(hPvkio, "PVK_OpenExt")) |  EQ NULL) return -2;  
---|---  
if ((PVK_close = GetProcAddress(hPvkio, "PVK_close")) |  EQ NULL) return -2;  
if ((PVK_read = GetProcAddress(hPvkio, "PVK_read")) |  EQ NULL) return -2;  
if ((PVK_write = GetProcAddress(hPvkio, "PVK_write")) |  EQ NULL) return -2;  
if ((PVK_seek = GetProcAddress(hPvkio, "PVK_seek")) |  EQ NULL) return -2;  
if ((PVK_AllocEnv = GetProcAddress(hPvkio, "PVK_AllocEnv")) |  EQ NULL) return -2;  
if ((PVK_DeAllocEnv = GetProcAddress(hPvkio, "PVK_DeAllocEnv")) |  EQ NULL) return -2;  
if ((PVK_RegisterKey = GetProcAddress(hPvkio, "PVK_RegisterKey")) |  EQ NULL) return -2;  
  
> /* Create a new Environment */

> hEnv = (HPVKENV)(*PVK_AllocEnv)();

> if (hEnv EQ NULL) return -3;

> (*PVK_RegisterKey)(hEnv, "<Insert License Name and Number here>", 12345678L);

> fh = (int)((*PVK_OpenExt)(hEnv, "testfile", pswd, sizeof(pswd), opt, &open_err));

> if (fh EQ (int)-1) return -4;

> /* Insert/Update 10 records */

> for(i=1;i<=10;i++)

> {

> sprintf(keybfr, "%04d", i);

> sprintf(dtabfr, "This is record #%d%c", i, 0x8a);

> keysz = strlen(keybfr);

> dtasz = strlen(dtabfr);

> sts = (int)((*PVK_write)(fh, &dtabfr, dtasz, &keybfr, keysz));

> sprintf(bfr, "Writing: %s - %s - sts=%d\n", keybfr, dtabfr, sts);

> printf(bfr);

> }

> /* Seek to key 0005 and read until end of file */

> sts = (int)((*PVK_seek)(fh, "0005", 4, 1));

> fc = PVKRD_CUR;

> for(;;)

> {

> sts = (int)((*PVK_read)(fh, &dtabfr, sizeof(dtabfr), fc));

> if (sts EQ -1) break;/* EOF */

> dtabfr[sts] = 0;

> sprintf(bfr, "Read: %s - sts=%d\n", dtabfr, sts);

> printf(bfr);

> fc = PVKRD_NEXT;

> }

> (*PVK_close)(fh);

> (*PVK_DeAllocEnv)(hEnv);

> FreeLibrary(hPvkio);

> return 0;

}
