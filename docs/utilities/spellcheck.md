# Utility Routines

***PLUS/SPELL/SPELL** |  **_Spell Checker Interface_**  
---|---  
  
## Description

PxPlus now includes a spell checker interface that provides the ability to add spell checking to input fields using either popup menus or through other application coding. The interface is designed to utilize the spell checker engine **_Ispell_** or its follow along product **_Aspell_**. These utilities are already installed with most Linux systems. Versions are also available for Windows and most other systems.

#### **Important Note:**  
Obtaining, installing and distributing Ispell or Aspell and associated dictionaries are the responsibility of the application provider. PVX Plus Technologies makes no claim to provide these tools but only to provide an interface to them.

_(The Spell Checker interface was added in PxPlus v8.11, build 9182.)_

In addition, PxPlus provides an **[AutoSpellCheck](../mnemonics/option.htm#spellcheck)** option that is used to set automatic spell checking for Multi-Line controls.

_(The AutoSpellCheck option was added in PxPlus 2019.)_

## Basic Configuration

For the spell checker to function, it needs to know the location of the spell checker engine and the language to use. Two global variables are used for this:

**%SPELL_SITE$** |  This variable contains the Internet URL (**http/https** string) to a Web site that will provide Internet base spell checking or a _pipe symbol_ ( **|** ) followed by the pathname and arguments required to run the spell checker directly on your machine. To handle different languages, the system will automatically replace "@@" with the two character language code being used. Typical Internet setting would be: %SPELL_SITE$="https://www.pvxplus.com/cgi-bin/aspell.cgi"

#### **Note:**  
To enhance security when using a Web site to provide spell checking, it is generally recommended to use **https** for a secure connection. This will make sure that the text being checked is sent encrypted to the server.

When using pipes, a typical **_UNIX/Linux_** setting would be: %SPELL_SITE$="|aspell -a --lang=@@" For **_Windows_** , this would be: %SPELL_SITE$="|"+quo+"c:\program files\aspell\bin\aspell.exe"+quo+" -a --lang=@@"

#### **Note** :  
On Windows, the Aspell module is usually installed in "Program Files", and since this has a space in the name, it must be surrounding by quotes.  
  
---|---  
**%SPELL_LANG$** |  This variable should contain the default two-character language code to use in lower case. If not set, the system will look at the current NOMADS library pathname, and if its suffix is two characters long, this will be used. Otherwise, it will default to "_en_ " for English. The language code should be one of to the international standard language codes. At this time, the spell checker includes end user screens for the following: English (_en_), French (_fr_), Spanish (_es_), German (_de_) and Dutch (_nl_).  
  
## Adding to NOMADS Application

**_Adding to an Individual Control_**

To use the spell checker in any application, you will first have to set **%SPELL_SITE$** to identify where the spell checker itself resides and optionally define the language to use in **%SPELL_LANG$**. Once these have been defined, within NOMADS you can use a popup_menu to add the spell checker to any input field.

To use, attach a popup menu to the control you want to have the spell checking capabilities then add a menu item that will issue a PERFORM of "*plus/spell/spell".

#### **Note:**  
Only add the spell checker to input fields (Multi-lines); otherwise, an error will result.

**_Adding to All Inputs in a NOMADS Application_**

You can also have the system automatically add the spell checker to all unformatted input fields (Multi-lines). Two additional global variables are used to control this functionality:

**%SPELL_POPUP$** |  This variable defines the Popup menu text to add to all input fields. It should contain an **&** (_ampersand_) to identify the letter the user can select from the popup menu. All Multi-lines will have this popup menu selection added to them. **_Example:_** %SPELL_POPUP$="&Spell Check text"  
---|---  
**%SPELL_MIN_LEN** |  This variable defines the length of smallest unformatted Multi-line to which spell check will be added. Multi-lines whose input length (or size) is smaller than the value defined in this variable will not have the spell checker added. Formatted inputs will not have the spell checker added to them whereas input fields that allow for multiple lines of input will. Setting this variable to 1 will effectively add the spell checker to all unformatted inputs.  
  
## Using Outside of NOMADS

**_Directly Invoking the Spell Checker_**

If desired, the spell checker can be called directly from your application to check the spelling of a text field. This is done by issuing a call to**"*plus/spell/spell"** where you can pass the control to check or the text to check/change.

**_Calling Sequence:_**

> **CALL** "*plus/spell/spell", _ctl_id_ , _langcode_ _$_ , _text$_ , _spell_url_ _$_

**_Where:_**

_ctl_id_ |  If non-zero, it provides the input control that contains the text to spell check. If 0 (_zero_), then the text to check will be passed in the TEXT$ field.  
---|---  
_langcode_ _$_ |  Language code to use. If a null string is passed, the current setting as defined by %SPELL_LANG$ is used.  
_text$_ |  String contains the text to check/change if _ctl_id_ is 0 (_zero_). If _ctl_id_ is non-zero, this field is ignored.  
_spell_url_ _$_ |  If non-blank, string will contain the URL that will override %SPELL_SITE$.  
  
#### **Note:**  
In all cases, the spell checker will require a graphics terminal to display the spelling errors and allow the user to correct them.

## Developer Aids

By default, the spell checker is enabled within **[NOMADS](../NOMADS%20Graphical%20Application/Introduction.md)** and the **[Integrated Toolkit (*IT)](../toolkit1/overview.md)** to provide the developer with spell checking during application development.

If %SPELL_SITE$ is not set, the built-in interface uses the Internet to validate spelling on a secure PVX Plus Technologies Web site.

## Hosting Aspell on the Web

Using a Web site to host the spell checker software makes installation and on-going dictionary updates much easier to handle. This can be done using a small 'CGI' script and the Apache Web server.

To create an Aspell Web site to provide spell checking, install and setup your Apache server, then create the following CGI script:

> #!/bin/bash  
>  echo Content-type: text/plain  
>  echo ''  
> aspell -a | grep ' '

This will run Aspell with whatever text is submitted with the Web request and will work with the *plus/spell/spell module as provided. This can be hosted as either a secure (**https:** **//**) or unsecured (**http://**) Web site.

#### **Note:**  
PVX Plus Technologies currently offers Web hosting of a spell checker. A small annual fee is charged for this service that covers the costs to maintain the site and to keep the dictionaries current.
