# UTF-8/Unicode and DBCS Support

**Extended Character Sets** |   
---|---  
  
Two methods are commonly used to handle extended character sets: one method is UNICODE, the other is DBCS (Double Byte Character Set).

Unicode represents all characters as two bytes, allowing for up to 64K different characters. Unfortunately, Unicode utilizes a 16-bit value for all each character and most Basic applications are designed for 8-bit characters. To solve this problem, PxPlus has adopted the UTF-8 encoding method, which is an internationally recognized standard in use by virtually all operating systems as a means to store Unicode data in 8-bit character strings.

DBCS is an older method of storing where characters out of the normal 127 ASCII characters are stored as two bytes. While similar in concept to Unicode, it is primarily used in older Microsoft Windows system and requires a selection of the conversion tables (code pages) to be specified in order to determine what the character represents. This means that the same double byte code will mean different character based on the code set chosen. For this reason, it has fallen out of favor. In DBCS, most common ANSI characters (0-9, A-Z, etc.) are represented by a single character. Multiple characters (a lead-in or escape followed by another) represent characters that are more exotic, such as those found in the Chinese or Japanese character set.

**_UTF-8: Preferred Approach_**

The approach taken by PxPlus in implementing UTF-8 has been designed to minimize the impact on your applications, allowing you to preserve the vast majority of your existing code.

While many newer applications use Unicode in order to support extended characters, the transition from a one-byte character world to a two-byte character world is not simple. Many applications make system calls or access files where they need to access a specific number of bytes based on the type of hardware they are using. Some applications have Hex values in the code, such as $FF$, which are intended to represent the 'Highest' character value or other hard-coded Hex values.

To minimize the impact on your application when it is enabled to use the extended character sets, you can enable UTF-8 as the native coding for all data. This will satisfy the needs of most applications with a minimum of retrofit requirements. An additional benefit of this approach is that existing values used for most of the more common characters do not change - for example, a quote is still $22$ not $0022$. All characters between $00$ and $7F$ remain intact when using UTF-8.
