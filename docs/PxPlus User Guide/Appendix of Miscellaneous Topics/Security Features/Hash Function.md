# Security Features

**Hash Function** |  **__**  
---|---  
  
The PxPlus **HSH( )** function introduces another technique for data protection. It is not used to encrypt data directly but to check authenticity. The hashing mechanism takes a block of data as input and produces a hash key value as output. The key value can then be used to check the integrity of the original data without having to reveal its contents. Hashes are most often used to obscure sensitive data that should not be made available to anyone but the owner (e.g. credit card numbers, bank IDs, passwords, etc.).

**HSH( )** supports the most widely used and trusted hash algorithms in the industry, including MD5 and SHA-1; however, only versions of PxPlus that support OpenSSL and have OpenSSL installed properly will be able to access these types of hashes. It also has the ability to access ciphers in OpenSSL libraries to encrypt and decrypt information.

For information on the use of PxPlus hash functionality, see **[HSH( )](../../../functions/hsh.md)** function.
