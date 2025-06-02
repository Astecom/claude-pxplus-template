# Table Definitions

**Example Data and Definitions**|   
---|---  
  
**_Example 1_** \- The following example consists of all the possible field types:

> STRINGDLM$="ABCD" STRFIX$="EFGH" STRPAD$="IJKL" STRSUB$="MNOP" STRLAST$="QRST" NUMDLM=1.2   
>  NUMFIX=3.4  
>  NUMPAD=5.6  
>  NUMSUB=7.8  
>  NUMLAS=9.1  
>  NUMBIN=2.3  
>  NUMDEC=4.5  
>  NUMDECDLM=6.7  
>  NUMSGN=8.9  
>  NUMUNS=12  
>  LASSTR$="UVWX"

**_Example 2_** \- The following example shows the record as it would appear in the physical file. Values delimited by curly braces, "{ }", are hexadecimal values. Line breaks and spaces are for readability only:

> ABCD {8a} EFGHIJKLMNOPQRST {8a} 1.2 {8a} 00340005600780091 {8a} {00000017} 4.5 6.7 {8a} 089+ {0000000C} UVWX {8a}

The INI file definition appears as follows:

> **[*Tables*]  
> ** ODBC = odbcflds.dat  
>   
> **[ODBC]  
> ** stringdlm = STRING, FIELD=1, OFFSET=0, LEN=4, VARIABLE   
> strfix = STRING, FIELD=2, OFFSET=0, LEN=4, FIXED   
> strpad = STRING, FIELD=2, OFFSET=4, LEN=4, NOSTRIP   
> strsub = STRING, FIELD=2, OFFSET=8, LEN=4, SUBSTRING   
> strlast = STRING, FIELD=2, OFFSET=12, LEN=4, PADDED   
> numdlm = NUMERIC, FIELD=3, OFFSET=0, LEN=4.1, VARIABLE   
> numfix = NUMERIC, FIELD=4, OFFSET=0, LEN=4.1, FIXED   
> numpad = NUMERIC, FIELD=4, OFFSET=4, LEN=4.1, FIXED   
> numsub = NUMERIC, FIELD=4, OFFSET=8, LEN=4.1, FIXED   
> numlas = NUMERIC, FIELD=4, OFFSET=12, LEN=4.1, PADDED   
> numbin = NUMERIC, FIELD=5, OFFSET=0, LEN=4.1, BINARY   
> numdec = NUMERIC, FIELD=5, OFFSET=4, LEN=4.1, DECIMAL   
> numdecdlm = NUMERIC, FIELD=5, OFFSET=8, LEN=4.1, DELIMITED   
> numsgn = NUMERIC, FIELD=6, OFFSET=0, LEN=4.1, SIGNED   
> numuns = NUMERIC, FIELD=6, OFFSET=4, LEN=4, UNSIGNEDBINARY  
> lasstr = STRING, FIELD=6, OFFSET=8, LEN=4, PADDED

The Data Dictionary definition appears as follows:

> 
