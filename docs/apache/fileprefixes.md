# Apache HTTP Interface

**Special File Prefixes** |   
---|---  
  
To simply development of applications, the following suffixes have special meaning to the Apache interface and can be added to your **AddHandler** directive in the Apache configuration file:

**Suffix** |  **Special Meaning**  
---|---  
**.pvm** or **.pxm** |  Indicates that the target file specified in the request is not a program but rather an HTML file which is to be automatically passed to **"*web/merge"**. This allows for simple dynamic html generation where the HTML document itself contains the ~~ tags to access/retrieve the data required.  
  
**_Example:_**  
  
The HTML file could contain ?T or ?P options to invoke external programs.  
**.pvraw** or **.pxraw** |  Output of the program is raw text, not HTML data. Sets the %RAW_TEXT attribute.
