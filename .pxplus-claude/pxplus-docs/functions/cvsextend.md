# System Functions

**CVS( )** |  **_Convert Internal Format of Data_**  
---|---  
  
##  Format

_Convert String:_ |  **CVS(**_data$_ , _conversion$_**[**_, text length_ **]** **[** , **ERR=**_stmtref_**] )**  
---|---  
  
**_Where:_**

_data$_ |  Data to convert. String expression.  
---|---  
_conversion$_ |  String that defines the input and output data formats.  
_text length_ |  **_(Optional - Only applicable when converting to BASE64 or BASE64URL)_**  
  
Wraps text at the given position. If not specified, 72 is used (_default_). If 0 (zero) is used, the text will not wrap.  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Returns

This format of the **CVS( )** function allows for rapid data transformation between two different internal formats such as normal ASCII and BASE64 or UUENCODE.

##  Description

The **CVS( )** function converts a string of data to different internal formats based on the values defined by _conversion$_ , which is made up of two data definition values separated by a **:** (_colon_). The first data definition value defines the input format. The second defines the desired target format.

**_Example:_**

To convert normal ASCII to BASE64, the value in _conversion$_ would be:

> "ASCII:BASE64"

Possible values for the input/output formats are:

**Format** |  **Description**  
---|---  
ASCII  
 _  
or_ ANSI |  Normal 8-bit data in ASCII format. The exact character set is based on the operating system currently in use. For most systems, this is ANSI (code table 1252 on Windows); however, when DBCS is enabled, use of ASCII will mean the current default character set.  
BASE64  
 _  
or_ BASE64URL  
 _  
or_ BASE64ANY |  The MIME e-mail format BASE64 is a binary to text encoding scheme whereby an arbitrary sequence of bytes is converted to a sequence of printable ASCII characters. The only characters used are the uppercase and lowercase alphabetic characters (A - Z, a - z), the numerals (0 - 9), and the "+" and "/" symbols, with the "=" symbol is a special suffix code. (BASE64URL is an industry recognized variant on BASE64 where the + and / characters are replaced with - and _ respectively). The BASE64ANY should only be used as an input specifier and will allow the system to accept either BASE64 or BASE64URL formatted data. If used on output, standard BASE64 is assumed. Full specifications for base64 are contained in RFC 1421 and RFC 2045.  
CODE _nnnn_ |  8-bit data represented by the industry assigned code page number _nnnn_. The following codesets are supported on all platforms: (as of PxPlus v8.11, build 9182) |  |  Character Codepage 437 (US English)  
---|---  
|  Character Codepage 737 (Greek IBM PC defacto Standard)  
|  Character Codepage 850 (Multilingual - Latin 1)  
|  Character Codepage 852 (Multilingual - Latin 2)  
|  Character Codepage 863 (Canada (French)  
|  Character Codepage 865 (Norway)  
|  Character Codepage 866 (Russia)  
  
Additional codepage are available on Windows and can be added to UNIX/Linux systems by creating conversion tables in the _*plus/codepage_ directory.  
  
HSL |  When specified for the INPUT format, tries to convert input as three numeric values representing an HSL color code. If not valid, converts input as a standard color to HTML representation. On output, converts color to HSL value. _(HSL support was added in PxPlus 2014.)_  
HTML |  Standard 8-bit data that uses HTML encoding for **<** , **>** , and **&** as **& lt;** **& gt;** and **& amp;** respectively. On output, converts all characters less than $20$ or greater than $7E$ to their respective &#xXX; form. On input, the HTML format will also replace most industry standard HTML Character Entity codes such as &#38;trade&#59; (&trade;), &#38;yen&#59; (&yen;), or &#38;copy&#59; (&copy;) with their respective UNICODE character equivalents. _(HTML support was added in PxPlus 2017.)_  
LINK |  Same as **[URL](cvsextend.htm#url)** but does not translate **/** (_slash_) to %2F. _(LINK support was added in PxPlus 2020.)_  
NATIVE |  When NATIVE is specified, the system will use either ASCII or UTF8, depending on the setting of the [**'U8'**](../parameters/u8.md) system parameter. (UTF-8 is used when the parameter is non-zero.)  
QPRINT |  Used to convert Quoted Printable text. By default, output of quoted printable text will wrap/break at 76 characters. When converting to QPRINT format, all end-of-line characters will be converted to the OS end-of-line characters; i.e. on Windows, a Carriage Return followed by Line Feed ($0d0a$), and on UNIX/Linux, a Line Feed ($0a$). The following conversion formats can also be used: |  |  QPRINTLF |  Use the UNIX end-of-line  
---|---|---  
|  QPRINTCRLF |  Use Windows end-of-line  
|  QPRINTBIN |  Treat data as binary and encode all new lines  
  
_(QPRINT support was added in PxPlus 2017.)_  
  
RGB |  When specified for the INPUT format, tries to convert input as three numeric values representing an RGB color code; if not valid, converts input as a standard color to HTML representation. On output, convert color to RGB value. _(RGB support was added in PxPlus 2014.)_  
RTF |  This can only be used as input (from) data format and tells the system to strip the RTF formatting information from the input, returning just the text.  
UNICODE |  Available on Windows and on UNIX/Linux. _(As of PxPlus v9.10, build 9201)_  
URL |  The URL Encode/Decode is used to convert characters that cannot be used in a Web-based URL to their appropriate hexadecimal equivalent with a leading % character.  
URL? |  Same as URL but does not translate either **/** (_slash_) or **?** (_question_ _mark_) until a **?** is found in the string. After the **?** (_question_ _mark_), **/** (_slash)_ becomes %2F and **?** (_question_ _mark)_ becomes %1F as in the URL conversion. _(URL? support was added in PxPlus 2020.)_  
UTF8 |  Available on Windows and on UNIX/Linux. _(As of PxPlus v9.10, build 9201)_  
UUENCODE |  Uuencode repeatedly takes in a group of three bytes to create a 24-bit value that is split into four groups of six, which are treated as numbers between 0 and 63. Decimal 32 is added to each number and they are output as ASCII characters, which will be in the range 32 (space) to 32+63 = 95 (underscore).  
XML |  Standard 8-bit data that uses XML encoding for **<** , **>** , **&** , **'** , and **"** as **& lt;** **& gt;** **& amp;** **& apos;** and **& quot;** respectively. On output, converts all characters less than $20$ or greater than $7E$ to their respective &#xXX; form. Hex/Unicode characters will also be replaced. (as of PxPlus v8.30, build 9190.3) When the CDATA tag is used, data will be passed "as is" within CDATA. _(CDATA support was added to XML conversion in PxPlus 2014.)_  
  
(The extended CVS conversion functionality was added in PxPlus v7.00, build 9163.)
