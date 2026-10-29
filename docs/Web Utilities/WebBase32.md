# Web Utilities

***WEB/BASE32** |  **_Encrypt or Decode Data_**  
---|---  
  
## Description

The ***web/base32** utility is a CALLed program that contains functions to encode and decode data in Base32 format.

Base32 is a way of converting data into simple text so it can be safely shared or stored in systems that only support plain text. It is often used when only certain characters are allowed or when the text needs to be easy to read and enter; for example, for access codes, security keys, and other identifiers that avoid special symbols such as + or /.

## Format 1

**_Encode String_**

**CALL "*web/base32;ENCODE"**, _a$_ , _b$_

Use this format for encoding strings.

**_Where:_**

          _a$_    Input string to encode  
          _b$_    Output string containing Base32-encoded result

**_Example:_**

          a$ = "Hello"  
          CALL "*web/base32;ENCODE", a$, b$  
          PRINT b$ ! output JBSWY3DP

## Format 2

**_Decode String_**

**CALL "*web/base32;DECODE"**, _a$_ , _b$_

Use this format for decoding Base32 strings back to the original data.

**_Where:_**

          _a$_    Input string containing Base32 data  
          _b$_    Output string containing decoded result

**_Example:_**

          a$ = "JBSWY3DP"  
          CALL "*web/base32;DECODE", a$, b$  
          PRINT b$ ! output "Hello"

## See Also

**[*WEB/BASE64 Encrypt or Decode Data](../Web%20Server%20Reference/Setting%20Up%20PxPlus%20Web%20Server/PxPlus%20Web%20Server%20Utilities/Encrypt%20or%20Decode%20Data.md)**

 

 

 
