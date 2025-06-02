# System Parameters

**'EA'** |  **_Encryption Algorithm_**  
---|---  
  
##  Description

The **'EA'** parameter controls how file passwords are hashed and how files are encrypted for new file passwords.

If this parameter is **_On_** , the industry standard SHA-256 algorithm will be used to hash the password with a salt before it is written to the file. If the file is to be encrypted, the industry standard AES-256 algorithm will be used to encrypt any data written to the file. The maximum password size is 128 characters, and any data beyond that is simply ignored.

If this parameter is **_Off_** , the legacy custom PxPlus password hash algorithm will be used to hash the password before it is written to the file. If the file is to be encrypted, the legacy custom PxPlus encryption algorithm will be used to encrypt any data written to the file. The maximum password size is 8 characters, and any data beyond that is simply ignored.

#### **Note:**  
If a password is added to a file when the '**EA'** parameter is **_On_** , older versions of PxPlus will **_not_** be able to open the file.

_(The 'EA**'** system parameter was added in PxPlus 2019.)_

## Default

**_Off_** The legacy custom PxPlus password hash algorithm is used for new file passwords.

##  See Also

[**PASSWORD Apply Password and Encryption**](../directives/password.md)
