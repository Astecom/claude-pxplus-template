# Utility Routines 

***BROWSER** |  **_Chromium Browser Object_**  
---|---  
  
## Format

_Initializes Browser Object:_ |  **DEF OBJECT** obj_id,**@(**_col,ln,wth,ht_ **)**{**,** |**=**}**"*BROWSER"**  
---|---  
**_Where:_** |   
---|---  
***BROWSER** |  Keyword used in defining PxPlus Chromium Browser Object.  
**@(**_col,ln,wth,ht_**)** |  Numeric expressions. Column and line coordinates for top left corner, width in number of columns and height in number of lines.  
obj_id |  Numeric variable that will be used to save the object reference.  
  
##  Description

This object allows you to embed a Chromium Browser into PxPlus windows. Use this object to display a Web page, execute JavaScript, and subscribe to browser events.

If loading a Web page that has a certificate error (i.e. self-signed, expired, etc.), a warning will display. It will describe the certificate error and give the option to either go back to safety or proceed to the URL that has the error. The warning may be avoided if the server is added to the exceptions list. See **[CertErrExceptions$](browser.htm#Mark8)** property.

_(The Chromium Browser object was added in PxPlus 2017.)  
(Support for ignoring certificate errors was added in PxPlus 2022.)_

The **['BI'](../parameters/bi.md)** system parameter controls whether or not the embedded Chromium browser runs in **_incognito_** mode. If running in incognito mode, the browser does not store or cache anything. This system parameter defaults to **_On_** , indicating that all Chromium browsers created will be in incognito mode.

_(The 'BI' parameter was added in PxPlus 2017 Update 0001.)_

The language of the embedded browser will be based on the Windows user language. This can be overridden by specifying the language code of the desired language in the **[BrowserLang INI](../PxPlus%20Installation%20and%20Configuration/Customizing%20PxPlus/INI%20Contents.htm#Mark6)** setting or **['OPTION'](../mnemonics/option.md)** mnemonic. See the **[Language Codes](browser.htm#Mark1)** table for a list of supported languages and codes.

_(Embedded browser support of other languages was added in PxPlus 2019.)_

If *BROWSER Debug mode is **_On_** , the browser developer console will display in a popup window for *BROWSER controls that are created. The browser developer console makes it possible to examine the code and properties of the Web page loaded by the *BROWSER control and debug any errors. Debug mode can be set in the **[BrowserDebug INI](../PxPlus%20Installation%20and%20Configuration/Customizing%20PxPlus/INI%20Contents.htm#Mark9)** setting or **['OPTION'](../mnemonics/option.htm#browserdebug)** mnemonic.

_(The *BROWSER Debug mode was added in PxPlus 2021.)_

A **[Find( )](browser.htm#Mark6)** method is provided that opens a **Find** dialog for searching text in a *BROWSER displayed Web page. By default, no hot key is assigned to the **Find** dialog. A **[FindHotKey](browser.htm#Mark7)** property gives you the option to enable the standard hot key Ctrl+F, define a custom hot key (e.g. Ctrl+S) or have no hot key. The **Find( )** method makes it possible for developers to add their own menus and buttons for opening the **Find** dialog.

_(The Find( ) method and FindHotKey property were added in PxPlus 2021 Update 2.)_

The first *BROWSER created by a process will initialize the language and incognito settings for all embedded chromium browsers created by the process. These settings cannot be changed on the fly; i.e. changing the setting after the first *BROWSER has been created will have no effect.

For information on adding a Chromium Browser control to a NOMADS panel, see **[External Controls - *Browser, ActiveX (COM), PVX Plus, .NET](../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/COM%20Control/COM%20Control.md)**.

#### **Note:**  
Some *BROWSER properties and methods (see tables below) have an "alias" that has been provided to match the Shell.Explorer external object properties and methods. The purpose for this is to make it easier to use *BROWSER as a drop-in replacement for Shell.Explorer.

## Properties, Methods and Events

The interface supports the following **_properties_** :

**Property** |  **Description**  
---|---  
**CertErrExceptions$** |  Gets/Sets a comma-separated list of servers where certificate errors are ignored. You must only specify the **_server_** portion of the URL. **_Example:_** For the URL **https://home.pvxplus.com/pgsrvr.pvp?pg=products** , the server portion is only **home.pvxplus.com** : "localhost,127.0.0.1,192.168.1.100,home.pvxplus.com" This property can also be set to "All" to ignore certificate errors on any server. For security reasons, this is not recommended unless the *BROWSER control is only loading pages locally and not from the Internet. _(The CertErrExceptions$ property was added in PxPlus 2022.)_  
**Col** |  Gets/Sets the position of the left side of the embedded browser (in columns) from the left side of the panel.  
**Cols** |  Gets/Sets the width of the embedded browser (in columns).  
**Document** |  Access the document object (HTML DOM) of the active URL. For details on the HTML DOM, visit **<http://www.w3schools.com/jsref/default.asp>**.

#### **Note:**  
Not accessible when using iNomads due to browser security.  
  
**DragDrop** |  Gets/Sets whether the browser allows drag and drop into the browser control or popup windows. _(Support to allow drag and drop was added in PxPlus 2021.)_  
**FindHotKey** |  Used to set the hot key for opening the **Find** dialog (if applicable). See **[Find( )](browser.htm#Mark6)** method. Set this property to 1 to enable the standard Ctrl+F Find hot key or leave it set to 0 (**_default_**) if no hot key will be used. Alternatively, a custom Find hot key can be defined using this format: DEC("_char_ ") **_Where:_** _char_ is a single alpha character ("A" to "Z"), enclosed in quotes. **_Example:_** To set Ctrl+S as the Find hot key: dec("S") _(The FindHotKey property was added in PxPlus 2021 Update 2.)_  
**Height  
PvxHeight** |  Gets/Sets the height of the embedded browser (in pixels).  
**History  
Location  
Navigator  
Screen  
Window** |  Access the various browser BOM objects. For details on the browser BOM objects, visit **<http://www.w3schools.com/jsref/default.asp>**.

#### **Note:**  
Not accessible when using iNomads due to browser security.  
  
**Left  
PvxLeft** |  Gets/Sets the position of the left side of the embedded browser (in pixels) from the left side of the panel.  
**Line** |  Gets/Sets the position of the top of the embedded browser (in lines) from the top of the panel.  
**Lines** |  Gets/Sets the height of the embedded browser (in lines).  
**PvxEvents[$]** |  Returns the PxPlus class object that is handling events or returns a list of events names (depending on **$** suffix) for the object.

#### **Note:**  
Not accessible when using iNomads due to browser security.  
  
**PvxExtData[$]** |  Returns zero or an empty string. **_(Included for Shell.Explorer Compatibility)_** _(Support for the numeric PvxExtData_[_$_]_property was added in PxPlus 2020 Update 1.)_  
**Title$  
LocationName$** |  Gets the title of the resource that is currently loaded in the embedded browser.

#### **Note:**  
Due to browser security when using iNomads, the title can only be accessed if the browser has loaded a resource from the same domain as the iNomads server.  
  
If the resource is from a different domain, the message "Cross domain cannot access title" is returned.  
  
**Top  
PvxTop** |  Gets/Sets the position of the top of the embedded browser (in pixels) from the top of the panel.  
**URL$  
LocationURL$** |  Gets/Sets the URL or path of the resource that is currently loaded in the embedded browser.  
**Width  
PvxWidth** |  Gets/Sets the width of the embedded browser (in pixels).  
  
The interface supports the following **_methods_**:

**Method** |  **Description**  
---|---  
**ExecJS**[**$**](_JavaScript$_) |  Executes _JavaScript$_ in the currently loaded resource of the embedded browser and returns the result, if any.

#### **Note:**  
Not accessible when using iNomads due to browser security.  
  
**Find**( ) |  Opens the **Find** dialog, which allows users to search for specified text within the contents of a *BROWSER displayed Web page. The **[FindHotKey](browser.htm#Mark7)** property is used to set or not set a Find hot key for opening this dialog. This dialog consists of the following: |  _Find What_ |  Enter the search text. If text is selected in the Web page when the **Find** dialog is invoked, the selected text will be used as the default search text.  
---|---  
_Match case_ |  Select this option if the search is to be case sensitive. By default, this option is unchecked.  
_Direction_ |  Searches up or down within the displayed Web page. By default, _Down_ is selected.  
_Find Next_ |  Finds the next occurrence of the specified search text.  
_Cancel_ |  Cancels the search and closes the **Find** dialog.  
  
_(The Find( ) method was added in PxPlus 2021 Update 2.)_  
  
**GoBack**( ) |  Navigates the embedded browser backward to the previously loaded URL.  
**GoForward**( ) |  Navigates the embedded browser forward to the URL loaded before a **GoBack**( ).  
**Navigate**(_url_ _$_)  
**Navigate2**(_url_ _$_) |  Navigates the embedded browser to a resource identified by _url_ _$_ , which could be a URL or a full path.  
**PrintToPDF** _(PdfPath$)_ |  Saves the current contents of the browser as a PDF file. **_Where:_** _PdfPath_ _$_ is the path that the PDF will be saved as. _(The PrintToPDF method was added in PxPlus 2023.)_  
**Refresh**( )  
**Refresh2**( ) |  Reloads the resource that is currently loaded in the embedded browser.  
**Stop**( ) |  Cancels a pending navigation or download and stops dynamic page elements such as background sounds and animations.  
  
The interface supports the following **_events_** :

#### **Note:**  
Not accessible when using iNomads due to browser security.

**Event** |  **Description**  
---|---  
**BeforeNavigate**(_pDisp_ , _url_ _, flags, targetFrameName, postData, headers, cancel_)  
**  
BeforeNavigate2**(_pDisp_ , _url_ _, flags, targetFrameName, postData, headers, cancel_) |  This event is fired just before the embedded browser navigates to a new resource URL. |  _pDisp_ |  Always zero. **_(Included for Shell.Explorer Compatibility)_**  
---|---  
_url_ |  A reference to a variant object containing the URL to be navigated to as a string.  
_flags_ |  A reference to a variant object containing the number zero. ** _(Included for Shell.Explorer Compatibility)_**  
_targetFrameName_ |  A reference to a variant object containing the name of the frame to be navigated as a string.  
_postData_ |  A reference to a variant object containing the navigation request post data as a string.  
_headers_ |  A reference to a variant object containing the navigation request headers as a string.  
_cancel_ |  A number that can be set to non-zero in the event handler to cancel the navigation.  
  
To use a reference to a variant object, you must first perform a **[DEF OBJECT](../directives/def_object.md)** on it to convert it to a PxPlus **[*VARIANT](../Automation%20in%20PxPlus/PxPlus%20COM%20Interface%20Extensions/Overview.htm#variant)** object. Once you have a ***VARIANT** object, you can use the **[VAL](../Automation%20in%20PxPlus/PxPlus%20COM%20Interface%20Extensions/Overview.htm#val)** property to access what the variant stores.

#### **Warning!**  
Any PxPlus event handler for this event **_must not use_** any of the following; otherwise, the system will hang if used:  
  
\- **ExecJS** method  
\- **Document** or **Document** -related properties  
\- **History** or **History** -related properties  
\- **Location** or **Location** -related properties  
\- **Navigator** or **Navigator** -related properties  
\- **Screen** or **Screen** -related properties  
\- **Window** or **Window** -related properties  
  
**DownloadBegin**( ) |  This event is fired just before the embedded browser begins a download.  
**DownloadComplete**( ) |  This event is fired just after the embedded browser completes a download.  
**TitleChange**(_newTitle_ _$_) |  This event is fired just after the embedded browser has its title changed to _newTitle_ _$_.  
  
## Example Code

The following code gives you an example of embedding a Chromium Browser in your panel and loading a Web page:

> def object mySite,@(20,5,40,20),"*BROWSER"  
> mySite'Url$="www.mysite.com"

##  Language Codes

This table lists supported languages and codes:

**Language Name** |  **Language Code**  
---|---  
Amharic |  am  
Arabic |  ar  
Bengali |  bn  
Bulgarian |  bg  
Catalan |  ca  
Chinese (Mainland China) |  zh-CN  
Chinese (Taiwan) |  zh-TW  
Croatian |  hr  
Czech |  cs  
Danish |  da  
Dutch |  nl  
English (United Kingdom) |  en-GB  
English (United States) |  en-US  
Estonian |  et  
Filipino |  fil  
Finnish |  fi  
French |  fr  
German |  de  
Greek (Modern) |  el  
Gujarati |  gu  
Hebrew (Modern) |  he  
Hindi |  hi  
Hungarian |  hu  
Indonesian |  id  
Italian |  it  
Japanese |  ja  
Kannada |  kn  
Korean |  ko  
Latvian |  lv  
Lithuanian |  lt  
Malay |  ms  
Malayalam |  ml  
Marathi |  mr  
Norwegian (Bokml) |  nb  
Persian |  fa  
Polish |  pl  
Portuguese (Brazil) |  pt-BR  
Portuguese (Portugal) |  pt-PT  
Romanian |  ro  
Russian |  ru  
Serbian |  sr  
Slovak |  sk  
Slovenian |  sl  
Spanish |  es  
Spanish (Central and South America) |  es-419  
Swahili |  sw  
Swedish |  sv  
Tamil |  ta  
Telugu |  te  
Thai |  th  
Turkish |  tr  
Ukrainian |  uk  
Vietnamese |  vi  
  
_(Embedded browser support of other languages was added in PxPlus 2019.)_

## See Also

**[DEF OBJECT Define Windows Object](../directives/def_object.md)  
**[**DELETE OBJECT Remove Object**](../directives/delete_object.md)   
[**ON EVENT Event Processing**](../directives/on_event.md)   
[**Apostrophe Operator**](../appendix/apostrophe_operator.md)  
**[*VARIANT Extended Object](../Automation%20in%20PxPlus/PxPlus%20COM%20Interface%20Extensions/Overview.htm#variant)  
[External Controls - *Browser, ActiveX (COM), PVX Plus, .NET](../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/COM%20Control/COM%20Control.md)  
['BI' Browser Incognito Mode](../parameters/bi.md)**
