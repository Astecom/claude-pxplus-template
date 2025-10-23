# UTF-8/Unicode and DBCS Support

**UTF-8 Facilities and Support** |   
---|---  
  
**UTF-8** (8-bit Unicode Transformation Format) provides a method to store Unicode data in 8-bit bytes. It uses variable-length character encoding to represent the various Unicode values. It is able to represent any universal character in the Unicode standard, yet maintains backwards compatibility with ASCII.

It is because of the fact that it provides direct access to the Unicode character set while it maintains 8-bit characters that has been embraced by PxPlus and is steadily becoming the preferred encoding for email, web pages, and other places where characters are stored or streamed. In addition, UTF-8 is commonly used on Web pages to display extended characters sets.

Internally, **UTF-8** uses one to four bytes (strictly octets) per character, depending on the Unicode symbol. Only one byte is needed to encode the 128 US-ASCII characters (Unicode range U+0000 to U+007F). Two bytes are needed for Latin letters with diacritics, combining them. In addition, two bytes are used to represent a character in Greek, Cyrillic, Armenian, Hebrew, Arabic, Syriac and Thaana alphabets (Unicode range U+0080 to U+07FF). Three bytes are needed for the rest of the Basic Multilingual Plane (which contains virtually all characters in common use). Four bytes are needed for characters in other planes of Unicode and although supported by PxPlus, are generally not commonly used.

The following table shows how this encoding is done:

**Unicode Value** |  **UTF-8 Bytes**  _(xxx indicates bits from value)_  
---|---  
U-00000000 - - U-0000007F |  0xxxxxxx  
U-00000080 - - U-000007FF |  110xxxxx 10xxxxxx  
U-00000800 - - U-0000FFFF |  1110xxxx 10xxxxxx 10xxxxxx  
U-00010000 - - U-001FFFFF |  11110xxx 10xxxxxx 10xxxxxx 10xxxxxx  
U-00200000 - - U-03FFFFFF |  111110xx 10xxxxxx 10xxxxxx 10xxxxxx 10xxxxxx  
U-04000000 - - U-7FFFFFFF |  1111110x 10xxxxxx 10xxxxxx 10xxxxxx 10xxxxxx 10xxxxxx   
  
In the above table, the first column represents the Unicode value in hex ranging from 0 through the potential maximum four-byte value. Depending on the Unicode value, the system will use 1 through 6 UTF-8 bytes. The first byte of the UTF-8 sequence indicates the number of bytes in the sequence. If the Unicode value is between 0 and 127 ($00$ through $7F$), then the UTF-8 byte will be the same. If it is in the range of between $80$ and $7FF$, the first byte will be in the range of $C0$ through $DF$. The first byte will consist of $C0$ Or'ed with the top 5 bits of the Unicode value followed by the next bits from the Unicode value Or'ed with $80$.

As the Unicode value increases, so does the number of the UTF-8 bytes needed to represent the data.

**_Example:_**

Assuming you wanted to display the output "Good Morning" in Chinese or 早晨, these two characters represent Unicode values 26089 and 26216.

To have the system generate a UTF-8 character string containing 早晨, you could use the CVS function:

> LET GOODMORNING$=CVS(26089,26216)

Internally, this would have the value of $E697A9$+$E699A8$.

## System Parameter

The [**'U8'**](../parameters/u8.md) system parameter is used to control the UTF-8 logic in the system. This parameter contains a series of bits (flags) used to control the processing of UTF-8 data.

If the 'U8' parameter is **_zero_**  _(all bits off -- default setting)_ , then no special processing will be done for UTF-8 support. If **_non-zero_** , the following bits will apply:

**Bit** |  **Value** |  **Description**  
---|---|---  
1 |  1 |  If set, the system will consider all data as potentially containing UTF-8 data.  
  
When parsing data for field separators ($8A$), the system will ignore separators within UTF data strings. All graphical controls will handle UTF-8 encoding for display, printing and size computations.   
  
The **[INPUT](../directives/input.md)** directive will convert extended ASCII to UTF-8 values. Text-mode screen handling will be limited to 8-bit ISO values.  
2 |  2 |  The system will generate an error whenever an invalid UTF-8 sequence is detected. If not set, the data will be considered normal 8-bit data and the UTF-8 encoding ignored.  
3 |  4 |  The system **[POS](../functions/pos.md)** function will assume the data is UTF-8 encoded when attempting to advance its pointer (increment value).  
4 |  8 |  The system **[MID](../functions/mid.md) **function will assume the data is UTF-8 encoded when attempting to sub-string data.  
5 |  16 |  The in-line sub-string logic will assume the data is UTF-8 encoded when attempting to sub-string data.  
6 |  32 |  Used to control UTF-8 support in the **[CVS](../functions/cvsextend.md)**, **[UCS](../functions/ucs.md)** and **[LCS](../functions/lcs.md)** functions.  _(**UTF-8** support was added in PxPlus 2017.)_  
  
To enable UTF-8 logic, you will set the value of the 'U8' system parameter to a value made up of the above sum of the above option values.

## Separators

One of the challenges in implementing UTF-8 encoding is that the standard PxPlus field separator character ($8A$) can occur within the UTF-8 data string.

PxPlus handles this problem by only detecting the field separator when not processing a UTF-8 sequence. Internally, when looking for the field separator, the system will skip over any UTF-8 encoded values. This resolves the problem since all UTF-8 encoded string start with a hex $C0$ or above.

## Functions

**OPT= For Selective Override**

The functions LEN, MID, POS, UCS, LCS, CVS support a ,OPT="..." specification that can be used to override the default UTF-8 encoding as defined above. If OPT="U" is added to the end of any of these functions, the system will consider the data being processed as UTF-8. If OPT="B" is present, then the data will be consider standard binary/ASCII values.

**_Example:_**

> MID(X$, 1, 10, OPT="U") ! Force MID to consider data as UTF8 encoded  
>  POS(X$ = Y$, 10, OPT="B") ! Force POS to consider the data as Binary (non-encoded bytes)

The OPT= has special meaning on the LEN function. If ,OPT="U" is passed to the LEN function, the input is considered to be UTF-8 and the system will return the length in terms of actual characters. An ,OPT="B" is ignored in the LEN function.

## UTF-8 and Windows

When the 'U8' parameter is enabled on Windows, PxPlus will automatically start supporting Unicode input on all controls and graphical output. The system will translate all Unicode to UTF-8 format (and vice-versa) to allow the application to function normally. This includes menus, multi_lines, list_boxes, drop_boxes, buttons, check_boxes, radio_buttons, along with all graphical mnemonics (except 'Caption').

In addition, the CLIP_BOARD READ and WRITE directives will convert the data to/from Unicode to preserve its contents.

**_Current Limitations_**

The following are the current limitations within the Windows implementation:

  * The Window heading lines may not contain Unicode data.
  * DDE data will be passed as UTF-8.
  * The built in PDF printing does not support UTF-8. (We suggest you utilize an external PDF driver that can imbed the extended character sets into the PDF file.)
  * The TEXT plane will not display Unicode - it is locked into 8-bit characters since many Unicode characters vary in width. However, entering Unicode data into the text plane will result in UTF-8 data entry. See **Note** below.
  * The *viewer* supports UTF-8 encoding but requires your START_UP to have the 'U8' system parameter set.
  * Formatted MULTI_LINES will NOT support Unicode input/output due to the nature of the internal nature of the data.



#### **Note:**  
A new 'OPTION' mnemonic setting of **[AutoConvertUtf8](../mnemonics/option.htm#autoconvertutf8)** has been provided that, when enabled in conjunction with the 'U8' system parameter, will internally convert UTF-8 data to its corresponding single byte character based on the current text plane character set to allow for its display. This conversion will be done on any standard PRINT to the text plane and on all user input of extended characters (e.g. Accented characters, high-order Ascii, etc.). Where there is no corresponding single byte character for a UTF-8 code, a ? will be output.  
  
_(AutoConvertUtf8 was added in PxPlus 2014.)_

**_Example:_**

To display a prompt on the screen containing "Enter Product" in Chinese:

> The Chinese text for "Enter Product" in Unicode is 36664, 20837, 29986, 21697 or 輸入產品.

> So to display it on the screen, you could use:

> > PRINT 'TEXT'(@X(c), @Y(l), CVS(36664,20837,29986,21697)),

> Or, to create a button:

> > BUTTON 10,@(l,c,w,h)=CVS(36664,20837,29986,21697)

These values can be stored and retrieved from a file, as such the NOMADS screen designer can be used to draw the screen and enter the text.

Simply make sure the 'U8' parameter is set. It is **_strongly_** recommended that you set this in your START_UP program if you are planning on using it.

#### **Note:**  
To simplify the conversion of the Euro currency symbol (****) which historically has been coded as $80$ in Windows, the UTF-8 convertor will automatically change $80$ to $20AC$, which is its associated Unicode equivalent. Note that this translation is**only** done when going from UTF-8 to Unicode, not vice versa, as application should start using the proper Unicode values.
