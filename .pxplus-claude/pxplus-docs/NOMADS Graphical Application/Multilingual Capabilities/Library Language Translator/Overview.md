# Multilingual Capabilities

**Library Language Translator** |  **__**  
---|---  
  
This utility will translate NOMADS and Message libraries from one language to another.

To access the Library Language Translator, go to the [**NOMADS Session Manager**](../../NOMADS%20Development/Getting%20Started.htm#sessionmgr) and from the  _Utilities_ menu, select **Library Language Translation**.

> [ ](http://wiki.pvxplus.com/index.php/File:Xlate.jpg """Xlate.jpg" " ")

The language translation is facilitated through either Google's Translate API or Microsoft's Bing utilities. Before you can run a translation, an API key from the Translate API service is required.

For a Google Account, visit **<http://code.google.com/apis/language/translate/v2/getting_started.html>** and create an account.

For a Microsoft account, visit **<http://www.bing.com/developers/appids.aspx>**. The supplied key can then be transferred to the _Translate Key_ entry field.

> [ ](http://wiki.pvxplus.com/index.php/File:Xlate_key.jpg """Xlate key.jpg" " ")

## Text Sources

Text comes from a number of locations. In the case of NOMADS libraries, it will come from control objects and their associated properties.

**Control Type** |  **Description**  
---|---  
_Button_ |  Text/Bitmaps, Floating Tip, Help Reference, Message Bar and Automation Text  
_Radio Button_ |  Text/Bitmaps, Floating Tip, Help Reference, Message Bar and Automation Text  
_Check Box_ |  Text/Bitmaps, Floating Tip, Help Reference, Message Bar and Automation Text  
_List Box_ |  List Values, Floating Tip, Help Reference, Message Bar and Automation Text  
_Drop Box_ |  List Values, Floating Tip, Help Reference, Message Bar and Automation Text  
_Multi-Line_ |  Floating Tip, Help Reference, Message Bar and Automation Text  
_Fonted Text_ |  Text  
_Text_ |  Text  
_Frame_ |  Title  
_Vertical Scrollbar_ |  Floating Tip, Help Reference and Message Bar  
_Horizontal Scrollbar_ |  Floating Tip, Help Reference and Message Bar  
_Folder_ |  Tab Definition  
_Grid_ |  Format Definition, Presets, Floating Tip, Help Reference and Message Bar  
_Chart_ |  Title 1, Title 2, X-Axis Title, Y-Axis Title, Z-Axis Title, Floating Tip and Help Reference  
  
For Message libraries, text will come from the _Text_ field.

##  Load Libraries

To begin the process, text to be translated needs to be loaded. Select the NOMADS or Message libraries to load and list the required text in the _Old Text_ column. Multiple libraries can be loaded to build a master Translation Table.

Save the _Old Text_ to keep from having to reload libraries. The _Save_ button will prompt for location and file name of the Translation Table.

To export translation table lists, click on the _Export_ button, select a location, file name and file type. The preferred file type would be in CSV format. This allows the option to import into Excel for third-party adjustments.

The **Import** allows text to be loaded into the list. The column headers _Old Text_ and _New Text_ should be ignored during the import, if they were not removed from the import file prior to the import.

## Translation

To run a translation, select a language from the drop-down list or enter one from the list of available language translations. Consult the Translation API's site for the available language codes. The _Translate_ button will begin the process. It may take a few seconds to begin as a connection must be made over the Internet. The translated text will show on the _New Text_ column opposite the _Old Text_. Pressing the **Esc** ape key will interrupt the translation. The _Old Text_ will only be translated when the corresponding _New Text_ column is empty.

The process will attempt to keep Hot Key characters active and move the _ampersand_ to the first matching character. If one does not exist in the translated text, then it will prefix the translated text with the _ampersand_ , original character and _colon_. The text will also display in the _Warnings_ list to allow quick access by double clicking for manual adjustment. _New Text_ can be manually adjusted by entering any translation opposite the _Old Text_. To remove a warning from the list, make an adjustment to the text and click the _Refresh_ button.

## Apply

When the translation table is ready to be applied against NOMADS or Message libraries, click the _Apply_ button.

The _Resize_ check box will attempt to adjust the size of _Text_ and _Fonted Text_ controls. The first attempt will be to lengthen the display. If more space is required, then it will move the starting location incrementally to the left until it either runs out of space or it fits.

> [ ](http://wiki.pvxplus.com/index.php/File:Xlate_save.jpg """Xlate save.jpg" " ")

A secondary window will open to collect the library to which to apply the translation and the name of the new library. The apply process will read through the library and apply any matching translated text and write it out to the new library.

## Report

You can view a report of all translations. To print or save the report, right click on the list box and choose the appropriate menu item.

> [ ](http://wiki.pvxplus.com/index.php/File:Xlate_print.jpg """Xlate print.jpg" " ")

##  Suggested Operation

**_Building a Translation Table_**

  1. Load one or several libraries to create a language translation table. The _Library Browse_ button can be used to find and load all libraries that need to be translated.
  2. Save the loaded libraries into a master translation table. This will save time from having to reload libraries for later translations.
  3. Select a translation language from the drop down list.
  4. Click the _Translate_ button. This will begin the translation into the selected language.
  5. Save the language translation table.
  6. Review the warning box and translations. Make corrections as required.
  7. The _Export_ button will generate a CSV-formatted file that can be used for third-party reviews and corrections.
  8. The _Import_ button will import CSV files. Save the imported translations.



**_Translating Libraries_**

  1. Using the _Translation Table_ browse button, load the language file required.
  2. Click on the _Resize_ check box if the text is to be resized during translation.
  3. Click the _Apply_ button.
  4. Enter the _From_ and _To_ library names.
  5. Using the translated report, review the libraries and make any manual adjustments that may be required.


