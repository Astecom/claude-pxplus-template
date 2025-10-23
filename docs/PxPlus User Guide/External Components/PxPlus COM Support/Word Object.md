# PxPlus COM Support

**PxPlus Word Object**|   
---|---  
  
The **PxPlus Word** object simplifies the use of the Word.Application extended object. This object consists of various properties and methods that make it easier to interact with Word documents. See **[Properties and Methods](Word%20Object.htm#properties)**.

The Word object allows more than one Word document to be opened at one time.

_(The Word object was added in PxPlus 2017.)_

**_Instantiating the Word Object_**

To **_instantiate_** the Word object using the handle **word_obj** (where **word_obj** could be any numeric variable), enter the following command:

> word_obj=NEW("*obj/word")

If the object should bind to a running instance of Word, you may pass the **[RUNNING]** option for the **[DEF_OBJECT](Referencing%20a%20COM%20Object.htm#running)** directive by entering the command as:

> word_obj=NEW("*obj/word","running")

> **_Where:_**

> "running" is case insensitive.

_(The ability to instantiate the Word object by passing the [RUNNING] parameter was added in PxPlus 2025.)_

If the object should bind to a running instance of Word, if possible, but create a new instance otherwise, you may pass the **[RUNNING OR NEW]** option for the **[DEF_OBJECT](Referencing%20a%20COM%20Object.htm#runningnew)** directive by entering the command as:

> word_obj=NEW("*obj/word","running or new")

> **_Where:_**

> "running or new" is case insensitive.

_(The ability to instantiate the Word object by passing the [RUNNING OR NEW] parameter was added in PxPlus 2025.)_

To access any of the available properties and/or methods, the Word object handle (**word_obj**) is used, followed by an **'**  _(apostrophe)_ and the property or method (with the desired parameters).

**_Examples:_**

> doc=word_obj'ACTIVE_DOCUMENT  
>   
> retVal=word_obj'SetDocument(3)

#### **Note:**  
If you are familiar with the Word.Application extended object, all existing properties and methods will continue to be accessible by referencing the **WORD** property.  
  
**_Example:_**  
  
C=word_obj'WORD'DOCUMENTS'Count

**_When an Error is Encountered_**

In case of method failure, the **[ERROR](Extended%20Objects.htm#error)** object may be useful in getting more information about the last error encountered.

**_Example:_**

If Word is unable to set the active document in the previous example because there are not three documents in the collection, retVal will be equal to '0'. Checking the **Description$** property of the **[ERROR](Extended%20Objects.htm#error)** object may also provide more information:

> PRINT word_obj'ERROR'Description$  
>   
> The requested member of the collection does not exist.

**_Global Named Constants_**

The Word Application makes use of hundreds of global named constants. If required, these constants may be accessed by using the **[PVXCONSTANTS](Extended%20Properties%20and%20Methods.htm#pvxconstants)** object, which has been defined as a property called **WCONSTANTS**. See **[*CONSTANTS](Extended%20Objects.htm#constants)**.

**_Example:_**

> PRINT word_obj'WCONSTANTS'wdAlertsMessageBox _(should return -2)_

##  Properties and Methods

The **_properties_** used by the Word object are listed below.

**Property** |  **Description**  
---|---  
**ACTIVE_DOCUMENT** |  **_(Read Only)_** Handle to the active document object. This property is set by using the **[SetDocument](Word%20Object.htm#setdocument)** method and corresponds to the WORD'ActiveDocument value.  
**CASE_SENSITIVE_SEARCH** |  Defaults to '0' for case insensitive searches. Set to '1' for case sensitive searches.  
  
See **[Find](Word%20Object.htm#find)**, **[FindInsert](Word%20Object.htm#findinsert)**, **[FindReplace](Word%20Object.htm#findreplace)**, **[FindReplaceAll](Word%20Object.htm#findreplaceall)**, **[FindSetColor](Word%20Object.htm#findsetcolor)** and **[FindSetFont](Word%20Object.htm#findsetfont)** methods below.  
**DISPLAY_ALERTS** |  Allows suppression of Word message boxes. Defaults to **_Off_** ('0').  
**DOCUMENTS_COUNT** |  **_(Read Only)_** Number of documents opened. This property corresponds to the WORD'DOCUMENTS'Count value.  
**ERROR** |  **_(Read Only)_** Handle to Word **[ERROR](Extended%20Objects.htm#error)** object. Can be used to display the last error message via the **Description$** property.  
**INSERT_BEFORE** |  Defaults to '0' so that the **Insert** (see **[FindInsert](Word%20Object.htm#findinsert)** below) will insert text **_after_** the position located with the **Find** method.  
  
To insert text **_before_** the position located with the **Find** method, set this value to '1'.  
**KEEP_VISIBLE** |  Set to a non-zero value to keep the Word application active and visible when the PxPlus Word Object is dropped. Has no effect if the **VISIBLE** property has not been set. Defaults to **_Off_** ("0"). _(The KEEP_VISIBLE property was added in PxPlus 2020.)_  
**SEARCH_FORWARD** |  Defaults to '1' so that the **[FindReplaceAll](Word%20Object.htm#findreplaceall)** and the various **Find** methods (see **[Find](Word%20Object.htm#find)**, **[FindInsert](Word%20Object.htm#findinsert)**, **[FindReplace](Word%20Object.htm#findreplace)**, **[FindSetColor](Word%20Object.htm#findsetcolor)** and **[FindSetFont](Word%20Object.htm#findsetfont)**) will search from the beginning of the document to the end.  
  
To begin at the end of the document (i.e. find the last occurrence of a string), set this value to '0'.  
**VISIBLE** |  Allows the Word application to be made visible. Defaults to **_Off_** ('0').  
**WCONSTANTS** |  **_(Read Only)_** Handle to the Word **[CONSTANTS](Extended%20Objects.htm#constants)** object.  
**WORD** |  **_(Read Only)_** Handle to the main Word object.

#### **Note:**  
This property **_cannot be set_** but is provided to allow access to all of the properties and methods in the Word Application.  
  
The **_methods_** used by the Word object are listed below. To make it easier to locate information for a particular method, this list has been broken into the following smaller groups:

|  **[Document Methods](Word%20Object.htm#methodsdoc)** |  For creating, setting, printing, saving and closing a document  
---|---|---  
|  **[Paragraph Methods](Word%20Object.htm#methodspara)** |  For creating, inserting, reading and deleting a paragraph  
|  **[Sentence Methods](Word%20Object.htm#methodssentence)** |  For creating, inserting, reading and deleting a sentence  
|  **[Text Methods](Word%20Object.htm#methodstxt)** |  For finding, replacing, inserting and setting text color/font  
  
**_Common Parameters_**

The following is a list of some of the common parameters used by multiple methods of the Word object:

**Parameter** |  **Description**  
---|---  
_document_ |  1-based index number of the Word document.  
_document_name_ _$_ |  Simple document name without the full path (e.g. _"test_document.docx"_).  
_path$**or** document_path$_ |  Full path name for the document (e.g. _"c:/application/test_document.docx"_).  
  
**_Document Methods_**

**Document Methods** |  **Description**  
---|---  
**AppendFile(**_path$_**)** **AppendFile(**_path$_ ,_document_**)** **AppendFile(**_path$_ ,_document_name_ _$_**)** |  Appends the file defined as _path$_ at the end of the document specified by either an index number or a simple document name. If no document is specified, the active document is assumed. Returns '1' if successful. Returns '0' if Word was unable to locate the document specified or the file indicated by _path$_ is invalid. _(The AppendFile method was added in PxPlus 2019.)_  
**CloseDocument( )** **CloseDocument(**_document_**)** **CloseDocument(**_document_name_ _$_**)** |  Closes the document specified by either an index number or a simple document name. If no document is specified, the active document will be closed.

#### **Note:**  
Any unsaved changes in a document are **_not_** saved if the **[DISPLAY_ALERTS](Word%20Object.htm#displayalerts)** property is set to '0' (zero), the default value. To prompt the user about saving the changes, set **DISPLAY_ALERTS** to '1'. To ensure that all changes are saved and minimize user intervention, be sure to save the document prior to closing.

Returns '1' if successful.  
  
Returns '0' if Word was unable to locate or close the document.  
**CloseDocuments( )** |  Closes all open documents. This method is called automatically when the Word object is dropped.

#### **Note:**  
Any unsaved changes in the documents are **_not_** saved if the **[DISPLAY_ALERTS](Word%20Object.htm#displayalerts)** property is set to '0' (zero), the default value. To prompt the user about saving the changes, set **DISPLAY_ALERTS** to '1'. To ensure that all changes are saved and minimize user intervention, be sure to save the documents prior to closing.

Returns '1' if successful. Returns '0' if Word was unable to close the documents.  
**CreateDocument(**_path$_**)** |  Creates a new Word document (_path$_). The _path$_ parameter may be either a simple or full pathname. The new document is opened and becomes the **[ACTIVE_DOCUMENT](Word%20Object.htm#activedocument)**. If the _path$_ parameter is null, the document is named according to the Word default (e.g. _Document1.docx_).

#### **Warning!**  
In case of a pre-existing file named _path$_ , the previous version will be **_overwritten with no prompt_** to the user.

Returns '1' if successful. Returns '0' if Word was unable to add the document.  
**InsertFile(**_path$_**)** **InsertFile(**_path$_ ,_para_num_**)** **InsertFile(**_path$_ ,_para_num_ ,_document_**)** **InsertFile(**_path$_ ,_para_num_ ,_document_name_ _$_**)** |  Allows you to merge two files together by inserting a specified file into a given location (paragraph number) in a particular document. Inserts the file defined as _path$_ in the document specified by either an index number or a simple document name. The file will be inserted beginning as paragraph number _para_num_. If no document is specified, the active document is assumed. If _para_num_ is not specified or is set to 0, the file will be inserted beginning at paragraph 1. If _para_num_ is larger than the current number of paragraphs, the paragraph will be inserted before the last paragraph. Alternatively, to insert a file at the very end of the document, use one of the **[AppendFile( )](Word%20Object.htm#appendfile)** methods. Returns '1' if successful. Returns '0' if Word was unable to locate the document specified or the file indicated by _path$_ is invalid. _(The InsertFile method was added in PxPlus 2019.)_  
**OpenDocument(**_path$_**)** |  Opens the Word document located at pathname _path$_. After opening a document, the **[ACTIVE_DOCUMENT](Word%20Object.htm#activedocument)** property is set to the document object corresponding to the document just opened.

#### **Note:**  
When opening more than one document, the last document opened is always considered to be document index 1. All of the previously opened document indexes move up one index higher.

Returns '1' if successful.  
  
Returns '0' if the path specified was invalid or if Word was unable to open the document.  
**PrintDocument( )** **PrintDocument(**_document_**)** **PrintDocument(**_document_name_ _$_**)** |  Prints the document specified by either an index number or a simple document name. If no document is specified, the active document is printed. To print all of the documents currently opened, pass a _document_name_ _$_ of '**ALL** ' (case insensitive).

#### **Note:**  
No printer dialog will be displayed. The document will be printed to the default Word printer with the default settings.

Returns '1' if successful.  
  
Returns '0' if Word was unable to locate the document.  
**SaveAsDocument(**_document_path_ _$_**)** **SaveAsDocument(**_document_path$,document_**)** **SaveAsDocument(**_document_path$,document_name$_**)** |  Used to save a document to a different location or with a different file format. Saves the document specified (by either an index number or a simple document name) with the pathname provided. If no document is specified, the active document is saved. If a full pathname is not provided, the document will be saved in the default Word document folder. The format used to save the document is determined by the extension specified in the _document_path_ _$_. Supported extensions are listed below (in alphabetical order). |  |  _.doc_ |  Word 97 - 2003 Document |  _.mht, .mhtml_ |  Single File Web Page  
---|---|---|---|---  
|  _.docm_ |  Word Macro-Enabled Document |  _.odt_ |  Open Document Text  
|  _.docx (or null)_ |  Word Document |  _.pdf_ |  PDF  
|  _.dot_ |  Word 97 2003 Template |  _.rtf_ |  Rich Text Format  
|  _.dotm_ |  Word Macro-Enabled Template |  _.txt_ |  Plain Text (preserve line breaks)  
|  _.dotx_ |  Word Template |  _.xml_ |  Word XML Document  
|  _.htm, .html_ |  Web Page |  _.xps_ |  XPS Document  
  
Returns '1' if successful.  
  
Returns '0' if the pathname is invalid, already exists, or if Word was unable to save the document.

_(Support for other file formats was added in PxPlus 2018.)_  
  
**SaveDocuments( )** |  Saves all currently opened documents. Returns '1' if successful.  
  
Returns '0' if Word was unable to save any of the documents.  
  
Returns '-1' if Word was only able to save some of the documents successfully.  
**SaveDocument( )** **SaveDocument(**_document_**)** **SaveDocument(**_document_name_ _$_**)** |  Saves the document specified by either an index number or a simple document name. If no document is specified, the active document is saved. Returns '1' if successful.  
  
Returns '0' if Word was unable to locate or save the document.  
**SetDocument(**_document_**)** **SetDocument(**_document_name_ _$_**)** |  Sets the active document object **[ACTIVE_DOCUMENT](Word%20Object.htm#activedocument)** to the document specified by either an index number or a simple document name (e.g. _sample_doc.docx_). Returns '1' if successful.  
  
Returns '0' if Word was unable to locate the document.  
  
**_Paragraph Methods_**

**Paragraph Methods** |  **Description**  
---|---  
**AppendParagraph(**_para_text_ _$_**)** **AppendParagraph(**_para_text$_ ,_document_**)** **AppendParagraph(**_para_text$_ ,_document_name_ _$_**)** |  Appends the text defined as _para_text_ _$_ as a new paragraph at the end of the document specified by either an index number or a simple document name. If no document is specified, the active document is assumed. To insert a paragraph with no text, set _para_text_ _$=""_. Returns '1' if successful. Returns '0' if Word was unable to locate the document specified. _(The AppendParagraph method was added in PxPlus 2019.)_  
**InsertParagraph(**_para_text_ _$_**)** **InsertParagraph(**_para_text$_ ,_para_num_**)** **InsertParagraph(**_para_text$_ ,_para_num_ ,_document_**)** **InsertParagraph(**_para_text$_ ,_para_num_ ,_document_name_ _$_**)** |  Inserts the text defined as _para_text_ _$_ as a new paragraph added to the document specified by either an index number or a simple document name. The paragraph will be inserted as paragraph number _para_num_. If no document is specified, the active document is assumed. If _para_num_ is not specified or is set to 0, the paragraph will be inserted as paragraph 1. If _para_num_ is larger than the current number of paragraphs, the paragraph will be inserted as the last paragraph. Alternatively, to insert a paragraph at the very end of the document, use one of the **AppendParagraph(** **)** methods. To insert a paragraph with no text, set _para_text_ _$=""_. Returns '1' if successful. Returns '0' if Word was unable to locate the document specified. _(The InsertParagraph method was added in PxPlus 2019.)_  
**ReadParagraph$(**_para_num_**)** **ReadParagraph$(**_para_num,document_**)** **ReadParagraph$(**_para_num,document_name_ _$_**)** |  Reads the contents of the paragraph numbered _para_num_ in the document specified by either an index number or a simple document name. If no document is specified, the active document is assumed. A _para_num_ value of less than 1 will read the first paragraph. Returns a string containing the text for the paragraph specified if successful. Returns '0' if Word was unable to locate the document specified or the paragraph number _para_num_ does not exist. _(The ReadParagraph$ method was added in PxPlus 2019.)_  
**DeleteParagraph(**_para_num_**)** **DeleteParagraph(**_para_num,document_**)** **DeleteParagraph(**_para_num,document_name_ _$_**)** |  Deletes the paragraph numbered _para_num_ from the document specified by either an index number or a simple document name. If no document is specified, the active document is assumed. A _para_num_ value of less than 1 will delete the first paragraph. Returns '1' if successful. Returns '0' if Word was unable to locate the document specified or the paragraph number _para_num_ does not exist. _(The DeleteParagraph method was added in PxPlus 2019.)_  
  
**_Sentence Methods_**

**Sentence Methods** |  **Description**  
---|---  
**AppendSentence(**_sent_text_ _$_**)** **AppendSentence(**_sent_text$,document_**)** **AppendSentence(**_sent_text$,document,name$_**)** |  Appends the text defined as _sent_text_ _$_ as a new sentence (or sentences) at the end of the document specified by either an index number or a simple document name. If no document is specified, the active document is assumed. Returns '1' if successful. Returns '0' if Word was unable to locate the document specified. _(The AppendSentence method was added in PxPlus 2019.)_  
**InsertSentence(**_sent_text_ _$_**)** **InsertSentence(**_sent_text$,sent_num_**)** **InsertSentence(**_sent_text$,sent_num,document_**)** **InsertSentence(**_sent_text$,sent_num,document_name$_**)** |  Inserts the text defined as _sent_text_ _$_ as a new sentence added to the document specified by either an index number or a simple document name. If no document is specified, the active document is assumed. If _sent_num_ is set to 0, the sentence will be inserted as sentence 1. If _sent_num_ is larger than the current number of sentences, the sentence will be inserted as the last sentence. Alternatively, to insert a sentence at the very end of the document, use one of the **AppendSentence(** **)** methods. Returns '1' if successful. Returns '0' if Word was unable to locate the document specified. _(The InsertSentence method was added in PxPlus 2019.)_  
**ReadSentence$(**_sent_num_**)** **ReadSentence$(**_sent_num,document_**)** **ReadSentence$(**_sent_num,document_name_ _$_**)** |  Reads the contents of the sentence numbered _sent_num_ in the document specified by either an index number or a simple document name. If no document is specified, the active document is assumed. A _sent_num_ value of less than 1 will read the first sentence. Returns a string containing the text for the sentence specified if successful. Returns '0' if Word was unable to locate the document specified or the sentence number _sent_num_ does not exist. _(The ReadSentence$ method was added in PxPlus 2019.)_  
**DeleteSentence(**_sent_num_**)** **DeleteSentence(**_sent_num,document_**)** **DeleteSentence(**_sent_num,document_name_ _$_**)** |  Deletes the sentence numbered _sent_num_ from the document specified by either an index number or a simple document name. If no document is specified, the active document is assumed. A _sent_num_ value of less than 1 will delete the first sentence. Returns '1' if successful. Returns '0' if Word was unable to locate the document specified or the sentence number _sent_num_ does not exist. _(The DeleteSentence method was added in PxPlus 2019.)_  
  
**_Text Methods_**

**Text Methods** |  **Description**  
---|---  
**Find(**_find$_**)** **Find(**_find$,document_**)** **Find(**_find$,document,instance_**)** **Find(**_find$,document_name$_**)** **Find(**_find$,document_name$,instance_**)** |  Determines if a particular string _(find$)_ exists in a document specified by either an index number or a simple document name. If no document is specified, the Find will check the active document. Searches are case insensitive by default. For case sensitive searches, set the **[CASE_SENSITIVE_SEARCH](Word%20Object.htm#casesearch)** property to '1'. Returns '1' if the text _find$_ was found.  
  
Returns '0' if Word was unable to locate the document or if the text _find$_ was not found in the document.  
**FindInsert(**_find$,insert_ _$_**)** **FindInsert(**_find$,insert$,document_**)** **FindInsert(**_find$,insert$,document,instance_**)** **FindInsert(**_find$,insert$,document_name$_**)** **FindInsert(**_find$,insert$,document_name$,instance_**)** |  Finds the text defined as _find_ _$_ in a document specified by either an index number or a simple document name and inserts the text defined as _insert$_ into the document. If no document is specified, the active document is assumed. To perform the Insert on all opened documents, pass a _document_name_ _$_ of '**ALL** ' (case insensitive). Specify an _instance_ value to indicate which occurrence of the _find$_ text that the Find is to locate if different from the first occurrence. (e.g. _instance_ of 2 refers to second occurrence). If the Find is to begin from the end of the document, set the **[SEARCH_FORWARD](Word%20Object.htm#searchforward)** property to '0'. By default, the _insert$_ text will be inserted immediately following the _find$_ text. To insert the _insert$_ text before the _find$_ text, set the **[INSERT_BEFORE](Word%20Object.htm#insertbefore)** property to '1'. Returns '1' if successful.  
  
Returns '0' if the Find was unsuccessful or if Word was unable to locate the document or insert the text.  
**FindReplace(**_find$,replace_ _$_**)** **FindReplace(**_find$,replace$,document_**)** **FindReplace(**_find$,replace$,document,instance_**)** **FindReplace(**_find$,replace$,document_name$_**)** **FindReplace(**_find$,replace$,document_name$,instance_**)** |  Finds the text defined as _find_ _$_ in a document specified by either an index number or a simple document name and replaces the _find$_ text with the _replace$_ text. If no document is specified, the active document is assumed. To perform the Replace on all opened documents, pass a _document_name_ _$_ of '**ALL** ' (case insensitive). Specify an _instance_ value to indicate which occurrence of the _find$_ text that the Find is to locate if different from the first occurrence. (e.g. _instance_ of 2 refers to second occurrence). If the Find is to begin from the end of the document, set the **[SEARCH_FORWARD](Word%20Object.htm#searchforward)** property to '0'. Returns '1' if successful.  
  
Returns '0' if the Find was unsuccessful or if Word was unable to locate the document or replace the text.  
**FindReplaceAll(**_find$,replace_ _$_**)** **FindReplaceAll(**_find$,replace$,document_**)** **FindReplaceAll(**_find$,replace$,document_name$_**)** |  Finds the string _find$_ and replaces all occurrences with the string _replace$_. When only the _find$_ and _replace_ $ parameters are passed, the Find/Replace is performed on the active document. Pass either a document index number or a simple document name to perform the Find/Replace on a document other than the active document without changing the **[ACTIVE_DOCUMENT](Word%20Object.htm#activedocument)** property. To perform the Find/Replace on all opened documents, pass a _document_name_ _$_ of '**ALL** ' (case insensitive). Searches are case insensitive by default. For case sensitive searches, set the **[CASE_SENSITIVE_SEARCH](Word%20Object.htm#casesearch)** property to '1'. Searches will replace all occurrences of the _find$_ string. The **FindReplace** method can be used to replace a single occurrence of the _find$_ string. Returns '1' if successful.  
  
Returns '0' if Word was unable to perform Find/Replace on any of the documents specified or if the _find$_ value was not found. **_When finding/replacing on all documents_** : Returns '-1' if Word was only able to perform find/replace on some of the documents successfully.  
**FindSetColor(**_find$,color_index_**)** **FindSetColor(**_find$,color_index,document_**)** **FindSetColor(**_find$,color_index,document,instance_**)** **FindSetColor(**_find$,color_index,document_name$_**)** **FindSetColor(**_find$,color_index,document_name$,instance_**)** **FindSetColor(**_find$,color_ _$_**)** **FindSetColor(**_find$,color$,document_**)** **FindSetColor(**_find$,color$,document,instance_**)** **FindSetColor(**_find$,color$,document_name$_**)** **FindSetColor(**_find$,color$,document_name$,instance_**)** |  Finds the text defined as _find_ _$_ in a document specified by either an index number or a simple document name and sets the color for that text as specified in _color_index_ or _color$_. If no document is specified, the active document is assumed. To set the color of the _find$_ text on all opened documents, pass a _document_name_ _$_ of '**ALL** ' (case insensitive). Specify an _instance_ value to indicate which occurrence of the _find$_ text that the Find is to locate if different from the first occurrence. (e.g. _instance_ of 2 refers to second occurrence). If the Find is to begin from the end of the document, set the **[SEARCH_FORWARD](Word%20Object.htm#searchforward)** property to '0'. The text color may be passed as one of the following: A color index (numeric)  
An RGB value in the format "**RGB(**_rrr,ggg,bbb_**)** " (string)  
A **wdColorIndex** constant such as "wdColorAqua" (string)  
A **wdColor** constant such as "wdPink"   
One of the 16 basic PxPlus named colors such as 'Red', 'Dark Blue' or 'Light Cyan' (string)  
  
_(RGB values and color constants were added in PxPlus 2019.)_

#### **Note:**  
A Word color index is an integer value ranging from 1 to 16.

Returns '1' if successful.  
  
Returns '0' if the Find was unsuccessful or if Word was unable to locate the document or set the color.  
**FindSetFont(**_find$,font_ _$_**)** **FindSetFont(**_find$,font$,document_**)** **FindSetFont(**_find$,font$,document,instance_**)** **FindSetFont(**_find$,font$,document_name$_**)** **FindSetFont(**_find$,font$,document_name$,instance_**)** |  Finds the text defined as _find_ _$_ in a document specified by either an index number or a simple document name and sets the font information (font name, font size, font style) for that text as specified in _font$_. If no document is specified, the active document is assumed. To set the font of the _find$_ text on all opened documents, pass a _document_name_ _$_ of '**ALL** ' (case insensitive). Specify an _instance_ value to indicate which occurrence of the _find$_ text that the Find is to locate if different from the first occurrence. (e.g. _instance_ of 2 refers to second occurrence). If the Find is to begin from the end of the document, set the **[SEARCH_FORWARD](Word%20Object.htm#searchforward)** property to '0'. The _font$_ variable can pass font name, font size and font style (Bold, Italic, etc.), separated by commas. **_Example:_**  
_  
_ _font$_ ="Arial" sets only the font name.  
_font_ _$_ ="Arial,12" sets the font name and size.  
_font_ _$_ ="Arial,12, Italic" sets the font name and size and adds italics to the text in the range.  
_font_ _$_ ="Arial,12, Bold, Underline-" sets the font name and size, adds bolding and removes any underlining.  
_font$_ ="Arial,12, Regular" sets the font name and size and removes any bolding, italics and underlining.

#### **Note:**  
Valid _fontstyle_ _$_ values are 'Regular', 'Bold+', 'Bold-', 'Bold' (same as 'Bold+'), 'Italic+', 'Italic-', 'Italic' (same as Italic+), 'Underline+', 'Underline-', 'Underline' (same as 'Underline+') or any combination of these.

Returns '1' if successful. Returns '0' if the Find was unsuccessful or if Word was unable to locate the document or set the font. _(Support for removing bolding, italics and underlining was added in PxPlus 2021.)_  
  
## Example 1: Testing the Word Object

This example tests the Word object.

> ! Test word object  
>  !   
>  ! Instantiate object  
>  w=NEW("*obj/word")  
>  !  
>  ! Open document   
>  path$="c:\documents\document1.docx"  
>  doc1=w'OpenDocument(path$)  
>  !  
>  ! Open another document   
>  path2$="c:\documents\document2.docx"  
>  doc2=w'openDocument(path2$)  
>  !  
>  ! Check number of documents open   
>  MSGBOX STR(w'documents_count)  
>  !  
>  ! Set document to first document opened   
>  t=w'SetDocument("document2.docx)  
>  !  
>  ! Search and Replace on all opened documents  
>  find$="[FirstName]"  
>  replace$=firstName$  
>  test=w'FindReplaceAll(find$,replace$,"all")  
>  !  
>  ! Make Word visible   
> w'Visible=1  
>  !  
>  ! Set active document   
>  q=w'SetDocument(2)  
>  !  
>  ! find text and set font in active document  
> w'FindSetFont("Set font on this text","Algerian,18,bold")  
>  !  
>  ! find second instance of text and set color index of active document  
> w'FindSetColor("Sample text",4,0,2)  
>  !  
>  ! Find last instance of text and replace with alternate text in test.docx  
> w'search_forward=0  
> w'FindReplace("Find Text","Replace text","test.docx",1)  
>  !  
>  ! Save active document with another name  
> w'SaveAsDocument("c:\document\differentdoc.docx")  
>  !  
>  !  
>  DROP OBJECT w  
>  END

## Example 2: Using the Word Object in a Template

This example demonstrates using the Word object to replace given placeholders in a template document with variable data:

  * The **_promo.docx_** document below acts as the template document.
  * The **_PxPlus promo_** program uses the Word object to populate the various pieces of data within the square brackets.



**_promo.docx_** ** _document:_**

> **_PxPlus promo program:_**

> ! promo - Use Word object for mail merge   
>  !   
>  OPEN (HFN,IOL=*)"client"  
>  clients=LFO  
>  !   
> path$="C:\PVX Plus Technologies\PxPlus _version_number_ \word\"  
>  !   
>  w=NEW("*obj/word")  
>  !   
>  ! populate client name and address data   
>  search_fields$="ClientName$"+SEP+"Address1$"+SEP+"Address2$"+SEP+"City$"+SEP+"State$"+SEP+"Country$"+SEP+"ZipCode$"+SEP+"ytdSales"+SEP  
>  SELECT * FROM clients WHERE ytdSales>10000  
>  promo=w'OpenDocument(path$+"promo.docx")  
>  !   
>  ERASE path$+Clientid$+"docx",ERR=*NEXT  
>  !   
>  FOR field$ FROM search_fields$  
>  find$="["+field$+"]"  
>  IF find$="[ytdSales]" THEN replace$="$"+STP(STR(ytdSales:"###,###.00"),"L"," ") ELSE replace$=VIS(field$)  
> w'case_sensitive_search=1  
> w'FindReplaceAll(find$,replace$)  
>  NEXT   
>  !   
>  ! populate dates  
> w'FindReplaceAll("[TodaysDate]",DTE(0:"%Ml %D,%Y"))  
> w'FindReplaceAll("[YearDate]",DTE(0:"%Y"))  
>  !   
>  ! highlight '25% off coupon'  
> W'FindSetColor("25% off coupon","red")  
>  !  
> w'SaveAsDocument(path$+ClientId$)  
> w'PrintDocument(1)  
> w'CloseDocument(1)  
>  !   
>  NEXT RECORD   
>  !   
>  DROP OBJECT w  
>  CLOSE (clients,ERR=*NEXT)  
>  !   
>  END

## See Also

**[PxPlus Excel Object](Excel%20Object.md)**  
**[Google Workspace Objects](../../../Google%20Workspace%20Objects/Introduction.md)**
