# UTF-8/Unicode and DBCS Support

**Using DBCS** |   
---|---  
  
## Setup

To use DBCS, PxPlus needs to determine which character set or 'codepage' to use to represent the data. Generally, all character sets will use the same values for characters whose values are between $00$ and $7F$ (basic ANSI alpha-numerics and symbols). Characters $80$ and above change based on the character set you chose.

To simplify the process of defining the character set to use, PxPlus uses the character set defined for the base text font on the system. This is the font selected using ALT-Space, Font from the windows screen.

> Select the desired font you wish to use and then the desired character set _(Script)_ to use with that Font. 

#### **Note:**  
Not all Fonts work with all Character sets.

Once selected, all characters used by the system will utilize this character set. The setting is maintained by the system in the Charset entry, Font section of the INI file.

The approach used by PxPlus allows for the use of different characters on different systems, usually based on where the application is running. All workstations using the application need to use the same character set to assure the consistency of the data.

## Internal Values

Two values are used by the system to control access to the current character mappings.

The first value is the character set number. This is the value that Windows assigns to a font to define which character set the font uses.

Some of the common character sets are:

0 |  ANSI_CHARSET  
---|---  
2 |  SYMBOL_CHARSET  
128 |  SHIFTJIS_CHARSET  
129 |  HANGEUL_CHARSET  
134 |  GB2312_CHARSET  
136 |  CHINESEBIG5_CHARSET  
255 |  OEM_CHARSET (Old PC DOS characters)  
  
These numbers can be used on any FONT specification within PxPlus by preceding the numeric value by a % in the Font attributes.

The second value is the number assigned to the codepage translation table. This is a numeric value assigned to the table to use when translating data between DBCS and UNICODE. The default codepage number is 1252 for normal ANSI data.

These two values can be retrieved from the following TCB values:

> TCB(504) -- Current character set  
>  TCB(505) -- Current codepage number
