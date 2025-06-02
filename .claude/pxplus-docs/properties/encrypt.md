# Control Object Properties

**Encrypt$** |  **_Apply Encryption on Input_**  
---|---  
  
## Description

Apply encryption on input

The 'Encrypt$ property for multi-lines can be set on fields that are to be kept confidential by the user (such as a password) and that the system only needs to verify that the user has entered the same value as opposed to knowing what the user entered. When the 'Encrypt$ property is set, the control will return the SHA1 hash key of the value set in 'Encrypt$ followed by the value in the field. This is an industry standard hashing algorithm that is generally acceptable for security purposes.

**Example:** If the input field contains the value "MyPassword", then setting the 'Encrypt$ property to "Hide the Password:" -- when you read the field, it will return the value of HSH ("Hide the Password:MyPassword",-1) which is its SHA1 value. This is a one-way encrypt into a 40 byte (20 Hex characters or 160 bit) value (visit **<https://en.wikipedia.org/wiki/SHA-1>**).

#### **Note:**  
When the Encrypt$ property is set, you cannot load a value into the multi-line, you can only clear it. Any attempt to set a value in the multi-line is ignored (since a write back would be trying to write back the SHA1 value).

This feature allows the system to store a user input such as a password and validate against the SHA1 of a prior entry without ever knowing what the password is. For increased security, you cannot read back the 'Encrypt property. If you do read, this property will return the following string:

> **D:_n_ ,L:_n_ ,U:_n_ ,S:_n_**

**_Where:_**

Each of the '_n_ ' values indicates the number of **D** igits, **L** owercase, **U** ppercase and **S** pecial characters in the field. This can be used to determine general password characteristics so the developer can impose restrictions on the password such as must be > 6 characters, contain a number and at least one special character.

**['SelectText$](selecttext_.md)** will be disabled while 'Encrypt$ has a value, and this property is **_only_** valid on regular multi-lines -- not Rich Text multi-lines. Once set, this will allow for secure interaction for password fields with a WindX connection without having to resort to using SSL for communications.

_(The Encrypt$ property was added in PxPlus v11.50.)_

## Used By

**MULTI_LINE**
