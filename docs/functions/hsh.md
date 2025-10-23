# System Functions

**HSH( )** |  **_Generate Hash Value_**  
---|---  
  
##  Formats

1\. _Compute Hash Key_: |  **HSH(**_string$_[,_hashkey_ _$_ **|** ,_chunkedhash_ _$_][ ,_hashtype_ [,_KeyHashedWith_] ][,**ERR=**_stmtref_]**)**  
---|---  
2\. _Encrypt Data Using Key_: |  **HSH(PASSWORD** _string$_**WITH** _method$_ ,**KEY=**_hashkey_ _$_ [,**SIZ=**_keylen_ ] [,**TBL=**_initval_ _$_ ] [,**ERR=**_stmtref_]**)**  
3\. _Decrypt Data Using Key_: |  **HSH(EXTRACT** _string$_**WITH** _method$_ ,**KEY=**_hashkey_ _$_ [,**SIZ=**_keylen_ ] [,**TBL=**_initval_ _$_ ] [,**ERR=**_stmtref_]**)**  
4\. _[Return List of Available Encryption Algorithms](hsh.htm#format4)_: |  **HSH(PASSWORD** "*" **WITH** "",**KEY=** ''''[,**ERR=**_stmtref_]**)**  
**HSH(EXTRACT** "*" **WITH** "",**KEY=** ''''[,**ERR=**_stmtref_]**)**  
  
#### **Important Note:**  
As of PxPlus 2022 on Windows and Apple Silicone Mac, OpenSSL legacy ciphers are no longer supported by default. See **[Legacy Cipher Support](hsh.htm#legacy)**.

**_Where:_**

_string$_ |  String expression whose hash value is to be returned or an empty string to finalize a chunked hash. See **[Chunked Hashing](hsh.htm#chunked_hashing)**.  
---|---  
_hashkey_ _$_ |  String expression representing key to use during the hashing/encryption operation.  
_chunkedhash_ _$_ |  String expression representing chunked hash data or an empty string to begin a chunked hash. See **[Chunked Hashing](hsh.htm#chunked_hashing)**.  
_hashtype_ |  Optional numeric value representing the type of hash to return for the data. An invalid value causes Error #41: Invalid integer encountered. See **[Note](hsh.htm#note)**.  
_initval_ _$_ |  Optional initialization value used by some ciphers.  
_KeyHashedWith_ |  Optional numeric value used to specify which _hashtype_ the _hashkey_ _$_ is based on (_hashtype_ values 0 through 6, 224, 256, 384 or 512). Only available with _hashtype_ 7 (HMAC). The HMAC hash is a special case. Data that has been hashed with a _hashtype_ such as MD5 will return an MD5 hash key. When the original data and the MD5 hash key are hashed together as an HMAC, this new HMAC hash is called a _Message Authentication Code_. An invalid value results in an Error #41: Invalid integer encountered.  
_keylen_ |  If supplied, overrides the length of the key used in the encryption algorithm. Applicable only for those algorithms that allow for multiple key lengths. (Value specified is the number of bytes in the key.)  
_method$_ |  String expression with the name of the encryption algorithm to use. See **[method$ Values](hsh.htm#method_values)**.  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
_(Chunked Hashing was added in PxPlus 2019.)_

##  Format 1

**_Compute Hash Key_**

**HSH(**_string$_[,_hashkey_ _$_ **|** ,_chunkedhash_ _$_][ ,_hashtype_ [,_KeyHashedWith_] ][,**ERR=**_stmtref_]**)**

## Returns

String value that is a hash key for the data or the partial hash data used in subsequent calls.

## Description

The **HSH( )** function returns a hash value for the given string. The hash value returned in a 2**-** byte string can be used to check the integrity of a character string. The initial value can be used to calculate the hash value of an entire string by taking its component parts. (See the examples below.)

The type of hash algorithm that will be applied to the data is defined by the _hashtype_ value provided. If no _hashtype_ is given, the default PxPlus internal 2-byte hash algorithm will be used.

The following table defines the currently supported _hashtype_ values:

**Hashtype** |  **Description**  
---|---  
0 |  PxPlus 2-byte hash (Default, if not specified)  
1 |  MD5  
2 |  MD4  
3 |  MD2

#### **Note:**  
As of PxPlus 2022 on Windows, the MD2 hashtype is no longer supported. On UNIX/Linux, any system with OpenSSL 3.0.0 or higher also no longer supports the MD2 hashtype.  
  
4 |  SHA-1  
5 |  MDC2  
6 |  RIPEMD  
7 |  HMAC  
224 |  SHA-224 (28-byte value)  
256 |  SHA-256 (32-byte value)  
384 |  SHA-384 (48-byte value)  
512 |  SHA-512 (64-byte value)  
-1 |  SHA-1 using internal functions _(This internal function was added in PxPlus v11.00.)_  
-2 |  SHA-256 (32-byte value) using internal functions _(This internal function was added in PxPlus 2019.)_  
  
If _hashtype_ is from 1 to 7, 224, 256, 384 and 512, OpenSSL libraries are required to perform the hash. Only versions of PxPlus that support OpenSSL and have OpenSSL installed properly will be able to access these hashes. The hashtype must also exist within the OpenSSL modules for the extended hashtypes to be available. Not all builds of OpenSSL contain all possible hashes. If a specific hashtype is not available, an Error #99: Feature not supported is reported.

If _hashtype_ is 7 (HMAC), a key value (_hashkey_ _$_) must be supplied for the hashing operation. This **_must_** be 2 characters in length; otherwise, an Error #46: Length of string invalid is generated. _Hashkey_ _$_ is optional for when _hashtype_ is 0 and it is ignored for _hashtype_ 1 through 6, 224, 256, 384 and 512. If _hashtype_ is -1 or -2, then _hashkey_ _$_ is considered _chunkedhash_ _$_ and should be an empty string or the previously returned chunked hash data. This **_must_** be 104 bytes in length; otherwise, an Error #46: Length of string invalid is generated.

If _hashtype_ is 7 (HMAC), a numeric value (_KeyHashedWith_) can be used to specify which _hashtype_ the _hashkey_ _$_ is based on (values 0 to 6, 224, 256, 384 and 512). This only applies to _hashtype_ 7\. The HMAC hash is a special case. Data that has been hashed with a _hashtype_ such as MD5 will return an MD5 hash key. When the original data and the MD5 hash key are hashed together as an HMAC, the new HMAC hash is called a _Message Authentication Code_. An invalid value results in an Error #41: Invalid integer encountered.

PxPlus provides internal SHA-1 or SHA-256 hashing (_hashtype_ _=_ -1 or _hashtype_ = -2) that can be used where the application is unsure of the existence of the OpenSSL libraries. This function is handled internally by PxPlus. Unlike all other functions, the return value of these internal functions returns the hash value as an ASCII formatted string containing the Hex hash value (an HTA of the hash result).

**_Chunked Hashing_**

When using the internal SHA-1 or SHA-256 function to hash a large amount of data, it may be desirable not to have all of that data in memory. You can hash the data in chunks so that it does not need to be in memory all at once. To do this, begin by passing in an empty string as _chunkedhash_ _$_. Use the return value of that call in the subsequent calls to hash more data. When you have hashed all the data, make a call with an empty string as _string$_. The return value of that call will be the hash of all the data.

> open (1,isz=1)"bigfile"  
>  read record (1,siz=4096)datachunk$  
> chunkedhsh$=hsh(datachunk$,"",-2) ! Begin chunked hash  
>  while 1  
>  read record (1,siz=4096,end=*break)datachunk$  
>  chunkedhsh$=hsh(datachunk$,chunkedhsh$,-2) ! Update chunked hash  
>  wend  
> bigfilehsh$=hsh("",chunkedhsh$,-2) ! Finish chunked hash

_(Chunked Hashing was added in PxPlus 2019.)_

**_Examples_**** _:_**

To get a PxPlus hash of a string:

> print hta(hsh("An internal PxPlus Hash"))  
>   
>  3960

To get a PxPlus hash of a string based on a key:

> print hta(hsh("An internal PxPlus Hash based on a Key","K1",0))  
>   
>  8AEA

To get an MD5 hash:

> print hta(hsh("A string to be MD5 hashed",1))  
>   
>  C9755C05F3EF1704114446A04F4072DF

To get or check a Message for Authentication based on HMAC-SHA-1:

> Data$="This is a string of data"  
>  SHA1Hash$=hsh(Data$,4)  
> MessageAuthenticationKey$=hsh(Data$,SHA1Hash$,7,4)  
>  if KeyReceived$<>MessageAuthenticationKey$ \  
>  then msgbox "Message has been tampered with"

##  Formats 2 and 3

**_Encrypt Data String_**

**HSH(PASSWORD** _string$_**WITH** _method$_ ,**KEY=**_hashkey_ _$_ [,**SIZ=**_keylen_ ] [,**TBL=**_initval_ _$_ ] [,**ERR=**_stmtref_]**)**

**_Decrypt Data String_**

**HSH(EXTRACT** _string$_**WITH** _method$_ ,**KEY=**_hashkey_ _$_ [,**SIZ=**_keylen_ ] [,**TBL=**_initval_ _$_ ] [,**ERR=**_stmtref_]**)**

_(The ability to have a SEP table was added in PxPlus v7.00.)_

## Returns

Encrypted (or decrypted) data string value based on the value in _string_ $, the encryption method, and key value.

## Description

These forms of the **HSH( )** function can be used to utilize any of a number of industry standard encryption formulas to encode data. The **HSH(PASSWORD** ...**)** function will take a string of data and, using the specified encryption method and key, return its encrypted value. The **HSH(EXTRACT**...**)** function can be used to reverse this encryption.

Each encryption algorithm (cipher) has specific rules that must be followed by the application and the encryption process in terms of the size and type of key to be provided. Some algorithms require unique keys for encryption versus decryption, enabling you to encrypt data for another application that itself might only have the decryption key. The nature of algorithm chosen is beyond the scope of this document. For further information, refer to documentation that is specific to the algorithm chosen or the OpenSSL whose functions are used by PxPlus.

The _method$_ value is used to determine the type of algorithm to apply. See **[method$ Values](hsh.htm#method_values)** and **[Encryption Algorithms](hsh.htm#algorithms)**.

**_Legacy Cipher Support_**

Methods marked as "legacy" are legacy encryption algorithms and they are **_not recommended_**. If you are using a legacy algorithm, it is strongly suggested that you transition to a non-legacy algorithm such as aes256.

As of PxPlus 2022 on Windows and Apple Silicone Mac, OpenSSL legacy ciphers are no longer supported by default. You will need to download (using this link **<https://home.pvxplus.com/downloads/openssl>**) and install the legacy OpenSSL library to use legacy ciphers. On UNIX/Linux, legacy ciphers will be supported by default.

**_Encryption Algorithms_**

Use **[Format 4](hsh.htm#format4)** to get a list of available encryption algorithms. The basic algorithms supported (at time of printing) are:

**Method** |  **Description**(Data derived from <https://www.wikipedia.org/> information)  
---|---  
_aes_ |  **Advanced Encryption Standard** (AES), also known as Rijndael, is a block cipher with a block size of 128 bits and key sizes of 128, 192 and 256 bits. It was adopted as an encryption standard by the US government.  
_aria_ |  **ARIA** is a block cipher with a block size of 128 bits and key sizes of 128, 192 and 256 bits. It was designed in 2003 by a large group of South Korean researchers. In 2004, the Korean Agency for Technology and Standards selected it as a standard cryptographic technique.  
_bf_ |  **_(Legacy - Not Recommended)_** See **[Legacy Cipher Support](hsh.htm#legacy)**. **Blowfish** is a keyed, symmetric block cipher, designed in 1993 by Bruce Schneier and included in a large number of cipher suites and encryption products.  
_camellia_ |  **Camellia** is a symmetric key block cipher with a block size of 128 bits and key sizes of 128, 192 and 256 bits. It was jointly developed by Mitsubishi Electric and NTT of Japan. The cipher has been approved for use by the ISO/IEC, the European Union's NESSIE project and the Japanese CRYPTREC project. The cipher has security levels and processing abilities comparable to the Advanced Encryption Standard.  
_cast, cast5_ |  **_(Legacy - Not Recommended)_** See **[Legacy Cipher Support](hsh.htm#legacy)**. **CAST** is a block cipher used in a number of products, notably as the default cipher in some versions of GPG and PGP. It has also been approved for Canadian government use by the Communications Security Establishment.  
_chacha20_ |  **ChaCha20** is a stream cipher developed by Daniel J. Bernstein. It was designed in 2005 then later submitted to the eSTREAM European Union cryptographic validation process by Bernstein.  
_des, des3_ |  **_(Legacy - Not Recommended)_** See **[Legacy Cipher Support](hsh.htm#legacy)**. The **Data Encryption Standard** (DES) is a cipher (a method for encrypting information) selected as an official **Federal Information Processing Standard** (FIPS) for the United States in 1976 and has subsequently enjoyed widespread use internationally. Triple DES (DES3) is a block cipher formed from the **Data Encryption Standard** (DES) cipher by using it three times.  
_desx_ |  **_(Legacy - Not Recommended)_** See **[Legacy Cipher Support](hsh.htm#legacy)**. **DES-X** is a variant on the DES (**Data Encryption Standard**) block cipher intended to increase the complexity of a brute force attack using a technique called key whitening.  
_idea_ |  **_(Legacy - Not Recommended)_** See **[Legacy Cipher Support](hsh.htm#legacy)**. The **International Data Encryption Algorithm** (IDEA), originally called **Improved Proposed Encryption Standard** (IPES), is a symmetric-key block cipher designed by James Massey of ETH Zurich and Xuejia Lai and was first described in 1991. The algorithm was intended as a replacement for the **Data Encryption Standard** (DES).  
_rc2_ |  **_(Legacy - Not Recommended)_** See **[Legacy Cipher Support](hsh.htm#legacy)**. **RC2** is a block cipher designed by Ron Rivest in 1987. (_"RC"_ stands for _"Ron's Code"_ or _"Rivest Cipher"._)  
_rc4_ |  **_(Legacy - Not Recommended)_** See **[Legacy Cipher Support](hsh.htm#legacy)**. **RC4** (also known as ARC4 or ARCFOUR) is the most widely used software stream cipher and is used in popular protocols such as Secure Sockets Layer (SSL) (to protect Internet traffic) and WEP (to secure wireless networks).  
_seed_ |  **_(Legacy - Not Recommended)_** See **[Legacy Cipher Support](hsh.htm#legacy)**. **SEED** is a block cipher developed by the **Korea Internet & Security Agency** (KISA). It is used broadly throughout South Korean industry but seldom found elsewhere.  
_sm4_ |  **SM4** (formerly SMS4) is a block cipher used in the Chinese National Standard for Wireless LAN WAPI (WLAN Authentication and Privacy Infrastructure).  
  
Most of the encryption algorithms have a wide variety of options in terms of how they are used; thus, the actual value in _method$_ usually needs to specify more than the basic method. Details as to the exact nature of each of the methods are beyond the scope of this document.

**_method_ _$ Values_**

The known/supported _method$_ values within the OpenSSL libraries are:

**_method$_ Value** |  **Description of Cipher/Encryption Technique**  
---|---  
_aes-128-cbc_ |  128-bit **A** dvanced **E** ncryption **S** tandard (AES) in **C** ipher **B** lock **C** haining (CBC) mode  
_aes128_ |  Alias for AES-128-CBC  
_aes128-wrap_ |  Alias for id-aes128-wrap  
_aes128-wrap-pad_ |  Alias for id-aes128-wrap-pad  
_aes-128-ccm_ |  Alias for id-aes128-ccm  
_aes-128-cfb_ |  128-bit **A** dvanced **E** ncryption **S** tandard (AES) in **C** ipher **F** eed**b** ack (CFB) mode  
_aes-128-cfb1_ |  128-bit **A** dvanced **E** ncryption **S** tandard (AES) in 1-bit **C** ipher **F** eed**b** ack (CFB) mode  
_aes-128-cfb8_ |  128-bit **A** dvanced **E** ncryption **S** tandard (AES) in 8-bit **C** ipher **F** eed**b** ack (CFB) mode  
_aes-128-ctr_ |  128-bit **A** dvanced **E** ncryption **S** tandard (AES) in **C** oun**t** e**r** (CTR) mode  
_aes-128-ecb_ |  128-bit **A** dvanced **E** ncryption **S** tandard (AES) in **E** lectronic**C** ode**b** ook****(ECB) mode  
_aes-128-gcm_ |  Alias for id-aes128-gcm  
_aes-128-ocb_ |  128-bit **A** dvanced **E** ncryption **S** tandard (AES) in **O** ffset**C** ode**b** ook****(OCB) mode  
_aes-128-ofb_ |  128-bit **A** dvanced **E** ncryption **S** tandard (AES) in **O** utput**F** eed**b** ack****(OFB) mode  
_aes-128-wrap_ |  Alias for id-aes128-wrap  
_aes-128-wrap-pad_ |  Alias for id-aes128-wrap-pad  
_aes-128-xts_ |  128-bit **A** dvanced **E** ncryption **S** tandard (AES) in **X** EX-based **T** weaked-codebook with Ciphertext **S** tealing (XTS) mode  
_aes-192-cbc_ |  192-bit **A** dvanced **E** ncryption **S** tandard (AES) in **C** ipher **B** lock **C** haining (CBC) mode  
_aes192_ |  Alias for AES-192-CBC  
_aes192-wrap_ |  Alias for id-aes192-wrap  
_aes192-wrap-pad_ |  Alias for id-aes192-wrap-pad  
_aes-192-ccm_ |  Alias for id-aes192-ccm  
_aes-192-cfb_ |  192-bit **A** dvanced **E** ncryption **S** tandard (AES) in **C** ipher **F** eed**b** ack (CFB) mode  
_aes-192-cfb1_ |  192-bit **A** dvanced **E** ncryption **S** tandard (AES) in 1-bit **C** ipher **F** eed**b** ack (CFB) mode  
_aes-192-cfb8_ |  192-bit **A** dvanced **E** ncryption **S** tandard (AES) in 8-bit **C** ipher **F** eed**b** ack (CFB) mode  
_aes-192-ctr_ |  192-bit **A** dvanced **E** ncryption **S** tandard (AES) in **C** oun**t** e**r** (CTR) mode  
_aes-192-ecb_ |  192-bit **A** dvanced **E** ncryption **S** tandard (AES) in **E** lectronic**C** ode**b** ook****(ECB) mode  
_aes-192-ocb_ |  192-bit **A** dvanced **E** ncryption **S** tandard (AES) in **O** ffset**C** ode**b** ook****(OCB) mode  
_aes-192-ofb_ |  192-bit **A** dvanced **E** ncryption **S** tandard (AES) in **O** utput**F** eed**b** ack****(OFB) mode  
_aes-192-wrap_ |  Alias for id-aes192-wrap  
_aes-192-wrap-pad_ |  Alias for id-aes192-wrap-pad  
_aes-256-cbc_ |  256-bit **A** dvanced **E** ncryption **S** tandard (AES) in **C** ipher **B** lock **C** haining (CBC) mode  
_aes256_ |  Alias for AES-256-CBC  
_aes-256-wrap_ |  Alias for id-aes256-wrap  
_aes-256-wrap-pad_ |  Alias for id-aes256-wrap-pad  
_aes-256-ccm_ |  Alias for id-aes256-ccm  
_aes-256-cfb_ |  256-bit **A** dvanced **E** ncryption **S** tandard (AES) in **C** ipher **F** eed**b** ack (CFB) mode  
_aes-256-cfb1_ |  256-bit **A** dvanced **E** ncryption **S** tandard (AES) in 1-bit **C** ipher **F** eed**b** ack (CFB) mode  
_aes-256-cfb8_ |  256-bit **A** dvanced **E** ncryption **S** tandard (AES) in 8-bit **C** ipher **F** eed**b** ack (CFB) mode  
_aes-256-ctr_ |  256-bit **A** dvanced **E** ncryption **S** tandard (AES) in **C** oun**t** e**r** (CTR) mode  
_aes-256-ecb_ |  256-bit **A** dvanced **E** ncryption **S** tandard (AES) in **E** lectronic**C** ode**b** ook****(ECB) mode  
_aes-256-ocb_ |  256-bit **A** dvanced **E** ncryption **S** tandard (AES) in **O** ffset**C** ode**b** ook****(OCB) mode  
_aes-256-ofb_ |  256-bit **A** dvanced **E** ncryption **S** tandard (AES) in **O** utput**F** eed**b** ack****(OFB) mode  
_aes-256-wrap_ |  Alias for id-aes256-wrap  
_aes-256-wrap-pad_ |  Alias for id-aes256-wrap-pad  
_aes-256-xts_ |  256-bit **A** dvanced **E** ncryption **S** tandard (AES) in **X** EX-based **T** weaked-codebook with Ciphertext **S** tealing (XTS) mode  
_aria-128-cbc_ |  128-bit ARIA in **C** ipher **B** lock **C** haining (CBC) mode  
_aria128_ |  Alias for ARIA-128-CBC  
_aria-128-ccm_ |  128-bit ARIA in **C** ounter with Cipher Block **C** haining **M** essage Authentication Code (CCM) mode  
_aria-128-cfb_ |  128-bit ARIA in **C** ipher **F** eed**b** ack (CFB) mode  
_aria-128-cfb1_ |  128-bit ARIA in 1-bit **C** ipher **F** eed**b** ack (CFB) mode  
_aria-128-cfb8_ |  128-bit ARIA in 8-bit **C** ipher **F** eed**b** ack (CFB) mode  
_aria-128-ctr_ |  128-bit ARIA in **C** oun**t** e**r** (CTR) mode  
_aria-128-ecb_ |  128-bit ARIA in **E** lectronic**C** ode**b** ook****(ECB) mode  
_aria-128-gcm_ |  128-bit ARIA in **G** alois/**C** ounter **M** ode (GCM)  
_aria-128-ofb_ |  128-bit ARIA in **O** utput**F** eed**b** ack****(OFB) mode  
_aria-192-cbc_ |  192-bit ARIA in **C** ipher **B** lock **C** haining (CBC) mode  
_aria192_ |  Alias for ARIA-192-CBC  
_aria-192-ccm_ |  192-bit ARIA in **C** ounter with Cipher Block **C** haining **M** essage Authentication Code (CCM) mode  
_aria-192-cfb_ |  192-bit ARIA in **C** ipher **F** eed**b** ack (CFB) mode  
_aria-192-cfb1_ |  192-bit ARIA in 1-bit **C** ipher **F** eed**b** ack (CFB) mode  
_aria-192-cfb8_ |  192-bit ARIA in 8-bit **C** ipher **F** eed**b** ack (CFB) mode  
_aria-192-ctr_ |  192-bit ARIA in **C** oun**t** e**r** (CTR) mode  
_aria-192-ecb_ |  192-bit ARIA in **E** lectronic**C** ode**b** ook****(ECB) mode  
_aria-192-gcm_ |  192-bit ARIA in **G** alois/**C** ounter **M** ode (GCM)  
_aria-192-ofb_ |  192-bit ARIA in **O** utput**F** eed**b** ack (OFB) mode  
_aria-256-cbc_ |  256-bit ARIA in **C** ipher **B** lock **C** haining (CBC) mode  
_aria256_ |  Alias for ARIA-256-CBC  
_aria-256-ccm_ |  256-bit ARIA in **C** ounter with Cipher Block **C** haining **M** essage Authentication Code (CCM) mode  
_aria-256-cfb_ |  256-bit ARIA in **C** ipher **F** eed**b** ack (CFB) mode  
_aria-256-cfb1_ |  256-bit ARIA in 1-bit **C** ipher **F** eed**b** ack (CFB) mode  
_aria-256-cfb8_ |  256-bit ARIA in 8-bit **C** ipher **F** eed**b** ack (CFB) mode  
_aria-256-ctr_ |  256-bit ARIA in **C** oun**t** e**r** (CTR) mode  
_aria-256-ecb_ |  256-bit ARIA in **E** lectronic**C** ode**b** ook****(ECB) mode  
_aria-256-gcm_ |  256-bit ARIA in **G** alois/**C** ounter **M** ode (GCM)  
_aria-256-ofb_ |  256-bit ARIA in **O** utput**F** eed**b** ack****(OFB) mode  
_bf-cbc_ |  **_(Legacy - Not Recommended)_** See **[Legacy Cipher Support](hsh.htm#legacy)**. Blowfish in **C** ipher **B** lock **C** haining (CBC) mode  
_bf_ |  **_(Legacy - Not Recommended)_** See **[Legacy Cipher Support](hsh.htm#legacy)**. Alias for BF-CBC  
_bf-cfb_ |  **_(Legacy - Not Recommended)_** See **[Legacy Cipher Support](hsh.htm#legacy)**. Blowfish in **C** ipher **F** eed**b** ack (CFB) mode  
_bf-ecb_ |  **_(Legacy - Not Recommended)_** See **[Legacy Cipher Support](hsh.htm#legacy)**. Blowfish in **E** lectronic**C** ode**b** ook****(ECB) mode  
_bf-ofb_ |  **_(Legacy - Not Recommended)_** See **[Legacy Cipher Support](hsh.htm#legacy)**. Blowfish in **O** utput**F** eed**b** ack****(OFB) mode  
_camellia-128-cbc_ |  128-bit Camellia in **C** ipher **B** lock **C** haining (CBC) mode  
_camellia128_ |  Alias for CAMELLIA-128-CBC  
_camellia-128-cfb_ |  128-bit Camellia in **C** ipher **F** eed**b** ack (CFB) mode  
_camellia-128-cfb1_ |  128-bit Camellia in 1-bit **C** ipher **F** eed**b** ack (CFB) mode  
_camellia-128-cfb8_ |  128-bit Camellia in 8-bit **C** ipher **F** eed**b** ack (CFB) mode  
_camellia-128-ctr_ |  128-bit Camellia in **C** oun**t** e**r** (CTR) mode  
_camellia-128-ecb_ |  128-bit Camellia in **E** lectronic**C** ode**b** ook****(ECB) mode  
_camellia-128-ofb_ |  128-bit Camellia in **O** utput**F** eed**b** ack****(OFB) mode  
_camellia-192-cbc_ |  192-bit Camellia in **C** ipher **B** lock **C** haining (CBC) mode  
_camellia192_ |  Alias for CAMELLIA-192-CBC  
_camellia-192-cfb_ |  192-bit Camellia in **C** ipher **F** eed**b** ack (CFB) mode  
_camellia-192-cfb1_ |  192-bit Camellia in 1-bit **C** ipher **F** eed**b** ack (CFB) mode  
_camellia-192-cfb8_ |  192-bit Camellia in 8-bit **C** ipher **F** eed**b** ack (CFB) mode  
_camellia-192-ctr_ |  192-bit Camellia in **C** oun**t** e**r** (CTR) mode  
_camellia-192-ecb_ |  192-bit Camellia in **E** lectronic**C** ode**b** ook****(ECB) mode  
_camellia-192-ofb_ |  192-bit Camellia in **O** utput**F** eed**b** ack****(OFB) mode  
_camellia-256-cbc_ |  256-bit Camellia in **C** ipher **B** lock **C** haining (CBC) mode  
_camellia256_ |  Alias for CAMELLIA-256-CBC  
_camellia-256-cfb_ |  256-bit Camellia in **C** ipher **F** eed**b** ack (CFB) mode  
_camellia-256-cfb1_ |  256-bit Camellia in 1-bit **C** ipher **F** eed**b** ack (CFB) mode  
_camellia-256-cfb8_ |  256-bit Camellia in 8-bit **C** ipher **F** eed**b** ack (CFB) mode  
_camellia-256-ctr_ |  256-bit Camellia in **C** oun**t** e**r** (CTR) mode  
_camellia-256-ecb_ |  256-bit Camellia in **E** lectronic**C** ode**b** ook****(ECB) mode  
_camellia-256-ofb_ |  256-bit Camellia in **O** utput**F** eed**b** ack****(OFB) mode  
_cast5-cbc_ |  **_(Legacy - Not Recommended)_** See **[Legacy Cipher Support](hsh.htm#legacy)**. CAST5 in **C** ipher **B** lock **C** haining (CBC) mode  
_cast_ |  **_(Legacy - Not Recommended)_** See **[Legacy Cipher Support](hsh.htm#legacy)**. Alias for CAST5-CBC  
_cast-cbc_ |  **_(Legacy - Not Recommended)_** See **[Legacy Cipher Support](hsh.htm#legacy)**. Alias for CAST5-CBC  
_cast5-cfb_ |  **_(Legacy - Not Recommended)_** See **[Legacy Cipher Support](hsh.htm#legacy)**. CAST5 in **C** ipher **F** eed**b** ack (CFB) mode  
_cast5-ecb_ |  **_(Legacy - Not Recommended)_** See **[Legacy Cipher Support](hsh.htm#legacy)**. CAST5 in **E** lectronic**C** ode**b** ook****(ECB) mode  
_cast5-ofb_ |  **_(Legacy - Not Recommended)_** See **[Legacy Cipher Support](hsh.htm#legacy)**. CAST5 in **O** utput **F** eed**b** ack (OFB) mode  
_chacha20_ |  ChaCha20 stream cipher  
_chacha20-poly1305_ |  ChaCha20 stream cipher with the Poly1305 message authentication code  
_des-cbc_ |  **_(Legacy - Not Recommended)_** See **[Legacy Cipher Support](hsh.htm#legacy)**. **D** ata **E** ncryption **S** tandard (DES) in **C** ipher **B** lock **C** haining (CBC) mode  
_des_ |  **_(Legacy - Not Recommended)_** See **[Legacy Cipher Support](hsh.htm#legacy)**. Alias for DES-CBC  
_des-cfb_ |  **_(Legacy - Not Recommended)_** See **[Legacy Cipher Support](hsh.htm#legacy)**. **D** ata **E** ncryption **S** tandard (DES) in **C** ipher **F** eed**b** ack (CFB) mode  
_des-cfb1_ |  **_(Legacy - Not Recommended)_** See **[Legacy Cipher Support](hsh.htm#legacy)**. **D** ata **E** ncryption **S** tandard (DES) in 1-bit **C** ipher **F** eed**b** ack (CFB) mode  
_des-cfb8_ |  **_(Legacy - Not Recommended)_** See **[Legacy Cipher Support](hsh.htm#legacy)**. **D** ata **E** ncryption **S** tandard (DES) in 8-bit **C** ipher **F** eed**b** ack (CFB) mode  
_des-ecb_ |  **_(Legacy - Not Recommended)_** See **[Legacy Cipher Support](hsh.htm#legacy)**. **D** ata **E** ncryption **S** tandard (DES) in **E** lectronic**C** ode**b** ook****(ECB) mode  
_des-ede_ |  Two key triple Encrypt-Decrypt-Encrypt (EDE) **D** ata **E** ncryption **S** tandard (DES) in **E** lectronic**C** ode**b** ook****(ECB) mode  
_des-ede-cbc_ |  Two key triple Encrypt-Decrypt-Encrypt (EDE) **D** ata **E** ncryption **S** tandard (DES) in **C** ipher **B** lock **C** haining (CBC) mode  
_des-ede-cfb_ |  Two key triple Encrypt-Decrypt-Encrypt (EDE) **D** ata **E** ncryption **S** tandard (DES) in **C** ipher **F** eed**b** ack (CFB) mode  
_des-ede-ecb_ |  Alias for DES-EDE  
_des-ede-ofb_ |  Two key triple Encrypt-Decrypt-Encrypt (EDE) **D** ata **E** ncryption **S** tandard (DES) in **O** utput**F** eed**b** ack****(OFB) mode  
_des-ede3_ |  Three key triple Encrypt-Decrypt-Encrypt (EDE) **D** ata **E** ncryption **S** tandard (DES) in **E** lectronic**C** ode**b** ook****(ECB) mode  
_des-ede3-cbc_ |  Three key triple Encrypt-Decrypt-Encrypt (EDE) **D** ata **E** ncryption **S** tandard (DES) in **C** ipher **B** lock **C** haining (CBC) mode  
_des-ede3-cfb_ |  Three key triple Encrypt-Decrypt-Encrypt (EDE) **D** ata **E** ncryption **S** tandard (DES) in **C** ipher **F** eed**b** ack (CFB) mode  
_des-ede3-cfb1_ |  Three key triple Encrypt-Decrypt-Encrypt (EDE) **D** ata **E** ncryption **S** tandard (DES) in 1-bit **C** ipher **F** eed**b** ack (CFB) mode  
_des-ede3-cfb8_ |  Three key triple Encrypt-Decrypt-Encrypt (EDE) **D** ata **E** ncryption **S** tandard (DES) in 8-bit **C** ipher **F** eed**b** ack (CFB) mode  
_des-ede3-ecb_ |  Alias for DES-EDE3  
_des-ede3-ofb_ |  Three key triple Encrypt-Decrypt-Encrypt (EDE) **D** ata **E** ncryption **S** tandard (DES) in **O** utput**F** eed**b** ack****(OFB) mode  
_des-ofb_ |  **D** ata **E** ncryption **S** tandard (DES) in **O** utput**F** eed**b** ack****(OFB) mode  
_des3_ |  Alias for DES-EDE3-CBC  
_des3-wrap_ |  Alias for id-smime-alg-CMS3DESwrap  
_desx-cbc_ |  **_(Legacy - Not Recommended)_** See **[Legacy Cipher Support](hsh.htm#legacy)**. DESX**** algorithm (**D** ata **E** ncryption **S** tandard (DES) variant) in **C** ipher **B** lock **C** haining (CBC) mode  
_desx_ |  **_(Legacy - Not Recommended)_** See **[Legacy Cipher Support](hsh.htm#legacy)**. Alias for DESX-CBC  
_id-aes128-ccm_ |  128-bit **A** dvanced **E** ncryption **S** tandard (AES) in **C** ounter with Cipher Block **C** haining **M** essage Authentication Code (CCM) mode  
_id-aes128-gcm_ |  128-bit **A** dvanced **E** ncryption **S** tandard (AES) in **G** alois/**C** ounter **M** ode (GCM) mode  
_id-aes128-wrap_ |  128-bit **A** dvanced **E** ncryption **S** tandard (AES) in key wrapping mode  
_id-aes128-wrap-pad_ |  128-bit **A** dvanced **E** ncryption **S** tandard (AES) in key wrapping with padding mode  
_id-aes192-ccm_ |  192-bit **A** dvanced **E** ncryption **S** tandard (AES) in **C** ounter with Cipher Block **C** haining **M** essage Authentication Code (CCM) mode  
_id-aes192-gcm_ |  192-bit **A** dvanced **E** ncryption **S** tandard (AES) in **G** alois/**C** ounter **M** ode (GCM) mode  
_id-aes192-wrap_ |  192-bit **A** dvanced **E** ncryption **S** tandard (AES) in key wrapping mode  
_id-aes192-wrap-pad_ |  192-bit **A** dvanced **E** ncryption **S** tandard (AES) in key wrapping with padding mode  
_id-aes256-ccm_ |  256-bit **A** dvanced **E** ncryption **S** tandard (AES) in **C** ounter with Cipher Block **C** haining **M** essage Authentication Code (CCM) mode  
_id-aes256-gcm_ |  256-bit **A** dvanced **E** ncryption **S** tandard (AES) in **G** alois/**C** ounter **M** ode (GCM) mode  
_id-aes256-wrap_ |  256-bit **A** dvanced **E** ncryption **S** tandard (AES) in key wrapping mode  
_id-aes256-wrap-pad_ |  256-bit **A** dvanced **E** ncryption **S** tandard (AES) in key wrapping with padding mode  
_id-smime-alg-cms3deswrap_ |  Cryptographic Message Syntax (CMS) implementation with triple Data Encryption Standard (3DES) key wrap  
_idea-cbc_ |  **_(Legacy - Not Recommended)_** See **[Legacy Cipher Support](hsh.htm#legacy)**. **I** nternational**D** ata**E** ncryption**A** lgorithm (IDEA) in **C** ipher **B** lock **C** haining (CBC) mode  
_idea_ |  **_(Legacy - Not Recommended)_** See **[Legacy Cipher Support](hsh.htm#legacy)**. Alias for IDEA-CBC  
_idea-cfb_ |  **_(Legacy - Not Recommended)_** See **[Legacy Cipher Support](hsh.htm#legacy)**. **I** nternational**D** ata**E** ncryption**A** lgorithm (IDEA) in **C** ipher **F** eed**b** ack (CFB) mode  
_idea-ecb_ |  **_(Legacy - Not Recommended)_** See **[Legacy Cipher Support](hsh.htm#legacy)**. **I** nternational**D** ata**E** ncryption**A** lgorithm (IDEA) in **E** lectronic**C** ode**b** ook****(ECB) mode  
_idea-ofb_ |  **_(Legacy - Not Recommended)_** See **[Legacy Cipher Support](hsh.htm#legacy)**. **I** nternational**D** ata**E** ncryption**A** lgorithm (IDEA) in **O** utput**F** eed**b** ack****(OFB) mode  
_rc2-40-cbc_ |  **_(Legacy - Not Recommended)_** See **[Legacy Cipher Support](hsh.htm#legacy)**. 40-bit RC2 in **C** ipher **B** lock **C** haining (CBC) mode  
_rc2-40_ |  **_(Legacy - Not Recommended)_** See **[Legacy Cipher Support](hsh.htm#legacy)**. Alias for RC2-40-CBC  
_rc2-64-cbc_ |  **_(Legacy - Not Recommended)_** See **[Legacy Cipher Support](hsh.htm#legacy)**. 64-bit RC2 in **C** ipher **B** lock **C** haining (CBC) mode  
_rc2-64_ |  **_(Legacy - Not Recommended)_** See **[Legacy Cipher Support](hsh.htm#legacy)**. Alias for RC2-64-CBC  
_rc2-cbc_ |  **_(Legacy - Not Recommended)_** See **[Legacy Cipher Support](hsh.htm#legacy)**. 128-bit RC2 in **C** ipher **B** lock **C** haining (CBC) mode  
_rc2_ |  **_(Legacy - Not Recommended)_** See **[Legacy Cipher Support](hsh.htm#legacy)**. Alias for RC2-CBC  
_rc2-128_ |  **_(Legacy - Not Recommended)_** See **[Legacy Cipher Support](hsh.htm#legacy)**. Alias for RC2-CBC  
_rc2-cfb_ |  **_(Legacy - Not Recommended)_** See **[Legacy Cipher Support](hsh.htm#legacy)**. 128-bit RC2 in **C** ipher **F** eed**b** ack (CFB) mode  
_rc2-ecb_ |  **_(Legacy - Not Recommended)_** See **[Legacy Cipher Support](hsh.htm#legacy)**. 128-bit RC2 in **E** lectronic**C** ode**b** ook****(ECB) mode  
_rc2-ofb_ |  **_(Legacy - Not Recommended)_** See **[Legacy Cipher Support](hsh.htm#legacy)**. 128-bit RC2 in **O** utput**F** eed**b** ack****(OFB) mode  
_rc4_ |  **_(Legacy - Not Recommended)_** See **[Legacy Cipher Support](hsh.htm#legacy)**. 128-bit RC4  
_rc4-40_ |  **_(Legacy - Not Recommended)_** See **[Legacy Cipher Support](hsh.htm#legacy)**. 40-bit RC4  
_rc4-hmac-md5_ |  **_(Legacy - Not Recommended)_** See **[Legacy Cipher Support](hsh.htm#legacy)**. 128-bit RC4 with **H** ashed **M** essage **A** uthentication **C** ode (HMAC) using the **M** essage-**D** igest algorithm 5 (MD5) checksum function  
_seed-cbc_ |  **_(Legacy - Not Recommended)_** See **[Legacy Cipher Support](hsh.htm#legacy)**. SEED in **C** ipher **B** lock **C** haining (CBC) mode  
_seed_ |  **_(Legacy - Not Recommended)_** See **[Legacy Cipher Support](hsh.htm#legacy)**. Alias for SEED-CBC  
_seed-cfb_ |  **_(Legacy - Not Recommended)_** See **[Legacy Cipher Support](hsh.htm#legacy)**. SEED in **C** ipher **F** eed**b** ack (CFB) mode  
_seed-ecb_ |  **_(Legacy - Not Recommended)_** See **[Legacy Cipher Support](hsh.htm#legacy)**. SEED in **E** lectronic**C** ode**b** ook (ECB) mode  
_seed-ofb_ |  **_(Legacy - Not Recommended)_** See **[Legacy Cipher Support](hsh.htm#legacy)**. SEED in **O** utput**F** eed**b** ack (OFB) mode  
_sm4-cbc_ |  SM4 in **C** ipher **B** lock **C** haining (CBC) mode  
_sm4_ |  Alias for SM4-CBC  
_sm4-cfb_ |  SM4 in **C** ipher **F** eed**b** ack (CFB) mode  
_sm4-ctr_ |  SM4 in **C** oun**t** e**r** (CTR) mode  
_sm4-ecb_ |  SM4 in **E** lectronic**C** ode**b** ook (ECB) mode  
_sm4-ofb_ |  SM4 in **O** utput**F** eed**b** ack (OFB) mode  
  
It is up to the application programmer to assure that the key size and contents are valid for the specified cipher. Incorrect key sizes or values may cause the function to fail. To avoid issues with short keys, the system will always pad the key supplied with nulls up to the key size specified by the algorithm.

#### **Note****:**  
When using a _hashtype_ other than 0 (which is always available) or any of the Encryption/Decryption functionality, the system will rely on the OpenSSL libraries to perform process. Only versions of the software that support OpenSSL and have OpenSSL installed properly will be able to access these hashes.  
  
In addition, the _hashtype_ and encryption algorithm must exist within the OpenSSL modules for the functions to work properly. Not all builds of OpenSSL contain all possible algorithms. If a specific _hashtype_ is not available, an Error #99: Feature not supported is reported.

##  Format 4

**_Return List of Available Encryption Algorithms_**

**HSH(PASSWORD** "*" **WITH** "",**KEY=** ''''[,**ERR=**_stmtref_]**)**  
**HSH(EXTRACT** "*" **WITH** "",**KEY=** ''''[,**ERR=**_stmtref_]**)**

## Returns

A comma-separated list of available encryption algorithms is returned.

## Description

Both functions will return the same list of encryption algorithms from OpenSSL. This list is useful for determining which algorithms can be used with **[Formats 2 and 3](hsh.htm#format2)**.

## Copyright Information

PxPlus includes software developed by the OpenSSL Project (http://www.openssl.org/) and cryptographic software written by Eric Young (eay@cryptsoft.com) and Tim Hudson (tjh@cryptsoft.com). 
