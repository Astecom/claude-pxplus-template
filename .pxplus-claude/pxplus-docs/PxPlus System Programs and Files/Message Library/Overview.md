# PxPlus System Programs and Files

***MLFILE._xx_** |  **_Message Library_**  
---|---  
  
This file contains all the textual elements of the PxPlus executive. All error messages are maintained within this file as 80-byte records indexed by a message number.

The system date function **[DTE](../../functions/dte.md)** maintains the literals containing the names of the months and days in the records starting at index 129 through index 135. These messages in English are:

|  **MSG( ) Number** |  **Description**  
---|---|---  
|  0 - 127 |  See **[Error Codes and Messages](../../appendix/list_of_messages.md)**  
|  128 |  "Press <ENTER> to continue or <F4> to exit:"  
|  129 |  January, February, March, April, May, June  
|  130 |  July, August, September, October, November, December  
|  131 |  Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday  
|  132 |  am, pm, AM, PM  
|  133 |  Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec  
|  134 |  Mon, Tue, Wed, Thu, Fri, Sat, Sun  
|  135 |  am, pm, AM, PM  
|  136 |  "Delete,Paste,Copy,Cut"  
|  140 - 143 |  Uppercase character definition table (maintained in the first 64 bytes of the four records starting at index 140)  
|  144 - 147 |  Lowercase character definition table (maintained starting at index 144)  
|  148 - 151 |  Accent character definition table  
|  160 |  "OK"  
|  161 |  "OK,Cancel"  
|  162 |  "&Retry,Cancel"  
|  163 |  "&Abort,&Retry,&Ignore"  
|  164 |  "&Yes,&No"  
|  165 |  "&Yes,&No,&Cancel"  
  
Message numbers 170 - 173 define the title and text of a customizer error message box:

|  170 |  "Customi&ze Panel"  
---|---|---  
|  171 |  "The PxPlus customizer add-on has not been activated on this system."  
|  172 |  "Use of customized applications in a production system without proper"  
|  173 |  "licensing is prohibited."  
  
##  Data Validation Messages

Data validation messages 180 through 193 can be used to generate the error messages:

|  **MSG( ) Number** |  **Description**  
---|---|---  
|  180 |  %s greater than max value  
|  181 |  %s too long, exceeds %d char  
|  182 |  %s less than min value  
|  183 |  %s cannot be empty  
|  184 |  %s too short, less than %d char  
|  185 |  %s invalid PRC validation  
|  186 |  %s has more than %d decimal places  
|  187 |  %s has invalid date validation. Must use DATE-JUL class  
|  188 |  %s is an invalid %s date  
|  189 |  %s length > 4 for %s  
|  190 |  %s class invalid (DATE-JUL%s)  
|  191 |  %s length of date should be %d  
|  192 |  %s is an invalid date  
|  193 |  %s value invalid, must be %s  
  
_(Data validation messages 180 through 193 were added in PxPlus 2019.)_

##  Customizing System Messages for Different Languages

System messages can be defined to support different languages. This can be done using one of the following two methods:

**_Method 1:_**

> Use the **[DEF MSG](../../directives/def_msg.md)** directive to temporarily override the message text associated with the **MSG(** **)** number. This directive allows messages to be changed on the fly.

> **_Example:_**

> MSG(164) "&Yes,&No" can be changed to another language:

> DEF MSG(164) = "&Oui,&Non"

**_Method 2:_**

> Create a copy of **_*mlfile.en_** and give it a different language extension (e.g. _de_ or _fr_). Then, use the ***msgupd** program to modify the messages that are needed. The ***msgupd** program first asks for a language code to select the appropriate **_mlfile.xx_** to update and then asks for the message number to modify. Input the message in the different language and press Enter. If needed, input a different message number and modify a different message.

The **_*mlfile.xx_** file that PxPlus will use is determined by the **[PVXLANG](../../PxPlus%20Installation%20and%20Configuration/Customizing%20PxPlus/Environment%20Variables.htm#Mark12)** environment variable, which should be set to the language code of the desired **_*mlfile.xx_** to use. If no **PVXLANG** environment variable is found, the **[LANG](../../PxPlus%20Installation%20and%20Configuration/Customizing%20PxPlus/Environment%20Variables.htm#Mark10)** environment variable will be used, which will be the language code of the desired **_*mlfile.xx_** to use. If no **LANG** environment variable is found, it will default to **_en_** (English).
