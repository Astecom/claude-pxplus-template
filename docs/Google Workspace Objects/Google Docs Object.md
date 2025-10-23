# Google Workspace Objects

**PxPlus Google Docs Object**|   
---|---  
  
The PxPlus **Google Docs** object provides the ability to work with Google Workspace Docs, a cloud-based word processing application. This object consists of various properties and methods that are used to interact with Google Docs documents. See **[Properties and Methods](Google%20Docs%20Object.htm#properties)** below.

The Google Docs object allows more than one document to be opened at one time.

_(The PxPlus Google Docs object was added in PxPlus 2021.)_

## Instantiating the Object

To **_instantiate_** the Google Docs object using the handle **docs_obj** (where **docs_obj** could be any numeric variable), enter the following command:

> docs_obj=NEW("*obj/GoogleDocs",_client_ID$_ ,_client_secret$_**[** ,_login_token$_**]**)

The constructor requires a Client ID and Client Secret, both of which must be obtained from Google via the Google API Console. See **[Google API App Setup](App%20Setup.md)** for detailed steps.

The login token can be optionally used to avoid having to select a Google account and login more than once. See **[Google Authentication](Google%20Docs%20Object.htm#googleauth)** for information on how to get a _login_token_ _$_.

To access any of the available properties and/or methods, the Google Docs object handle (**docs_obj**) is used, followed by an **'**  _(apostrophe)_ and the property or method (with the desired parameters).

**_Examples:_**

> doc=docs_obj'ACTIVE_DOCUMENT  
>   
> retVal=docs_obj'SetDocument(3)

**_Google Authentication_**

During object instantiation, the user will be asked to select and login to a Google account and allow PxPlus access to it via their default Web browser. When this process is completed, the **[Login( )](Google%20Docs%20Object.htm#login)** method must be run to complete login to Google Docs.

Successful login can be confirmed via the **[IsLoggedIn( )](Google%20Docs%20Object.htm#isloggedin)** method. If successfully logged in, then documents can be read, modified and saved to the local file system.

Once logged in to Google Docs, the **[LOGIN_TOKEN$](Google%20Docs%20Object.htm#logintoken)** property can be accessed and saved to avoid having to select and login to a Google account, allow access, and run the **Login( )** method again. The login token can either be hard-coded into an encrypted program or saved to an encrypted file. The next time the Google Docs object gets instantiated, just include the saved login token and it will be logged into the same Google account automatically.

After one hour of inactivity, Google automatically expires a login. If logged in and Google expires the login, the next time you run a method, the object will automatically re-login. This may be noticeable if a method takes longer than usual to complete.

##  Cloud-Based Documents

Google Docs documents are stored in your Google Drive cloud storage, not as local files. Google Drive supports directories and sub-directories. All methods of this object that support a document path allow the Google Drive directories and the document name to be specified so that documents can be organized more easily. For example, to create a new document "SalesReport" in the Google Drives directory "Template", the following method can be used:

> **CreateDocument**("Templates\SalesReport")

All modifications made to a Google Docs document are **_automatically_** saved. There are no Save methods. Modifications should not be made unless they are to be saved. If the original unmodified document needs to be preserved, create a copy and modify it.

To work with a local document, upload it to Google Docs by using the **[UploadDocument( )](Google%20Docs%20Object.htm#uploaddoc)** method. This method converts the local document file into a Google Docs document, allowing you to work with it using this object. Supported file types that can be uploaded and converted are Microsoft Word (_.doc, .docx, .dot_), OpenDocument Text (_.odt_), HTML (_.htm, .html_), RTF (_.rtf_) and plain text (_.txt_).

To download a Google Docs document, use the **[ExportDocument( )](Google%20Docs%20Object.htm#exportdoc)** method. This method converts the Google Docs document into a local document file. The type of document is determined by the file extension specified in the output path. Supported file types that a document can be converted to and downloaded are Microsoft Word (_.doc, .docx, .dot_), Open Office doc (_.odt_), HTML (_.htm, .html_), zipped HTML (_.zip_), RTF (_.rtf_), plain text (_.txt_), PDF (_.pdf_), and EPUB (_.epub_).

##  Properties and Methods

The **_properties_** used by the Google Docs object are listed below.

**Property** |  **Description**  
---|---  
**CASE_SENSITIVE_SEARCH** |  Defaults to '0' for case insensitive searches. Set to '1' for case sensitive searches. See **[Find](Google%20Docs%20Object.htm#find)**, **[FindInsert](Google%20Docs%20Object.htm#findinsert)**, **[FindReplace](Google%20Docs%20Object.htm#findreplace)**, **[FindReplaceAll](Google%20Docs%20Object.htm#findreplaceall)**, **[FindSetColor](Google%20Docs%20Object.htm#findsetcolor)** and **[FindSetFont](Google%20Docs%20Object.htm#findsetfont)** methods below.  
**ACTIVE_DOCUMENT** |  **_(Read Only)_** Index of the active open document. This property is set by using the **[SetDocument( )](Google%20Docs%20Object.htm#setdoc)** method. If the **ACTIVE_DOCUMENT** is not set with the **SetDocument****( )** method, it is always the last opened document/highest index number. Returns '0' if no documents are opened.  
**DOCUMENTS_COUNT** |  **_(Read Only)_** Number of documents opened.  
**INSERT_BEFORE** |  Defaults to '0' so that the **Insert** (see **[FindInsert](Google%20Docs%20Object.htm#findinsert)**) will insert text **_after_** the position located with the **Find** method. To insert text **_before_** the position located with the **Find** method, set this value to '1'.  
**LOGIN_TOKEN$** |  Login token (also known as an Oauth2 refresh token) that can be used when instantiating the object to avoid having to login again.  
**SEARCH_FORWARD** |  Defaults to '1' so that the **[FindReplaceAll](Google%20Docs%20Object.htm#findreplaceall)** and the various **Find** methods (see **[Find](Google%20Docs%20Object.htm#find)**, **[FindInsert](Google%20Docs%20Object.htm#findinsert)**, **[FindReplace](Google%20Docs%20Object.htm#findreplace)**, **[FindSetColor](Google%20Docs%20Object.htm#findsetcolor)** and **[FindSetFont](Google%20Docs%20Object.htm#findsetfont)**) will search from the beginning of the document to the end. To begin at the end of the document (i.e. find the last occurrence of a string), set this value to '0'.  
  
The **_methods_** used by the Google Docs object are listed below. To make it easier to locate information for a particular method, this list has been broken into smaller groups as follows:

|  **[Authentication Methods](Google%20Docs%20Object.htm#methodsauth)** |  For logging into Google and confirming logged in status  
---|---|---  
|  **[Document Methods](Google%20Docs%20Object.htm#methodsdoc)** |  For working with Google Docs document files  
|  **[Paragraph Methods](Google%20Docs%20Object.htm#methodspara)** |  For working with paragraphs in a Google Docs document  
|  **[Sentence Methods](Google%20Docs%20Object.htm#methodssentence)** |  For working with sentences in a Google Docs document  
|  **[Text Methods](Google%20Docs%20Object.htm#methodstxt)** |  For working with found text in a Google Docs document  
  
**_Common Parameters_**

The following is a list of some of the common parameters used by multiple methods of the Google Docs object:

**Parameter** |  **Description**  
---|---  
_document_ |  1-based index number in the list of sequentially opened documents. If DocA, DocB and DocC were opened in that order, the corresponding indexes would be 1, 2 and 3. If DocAwas closed at index 1, then DocB and DocC would now have indexes 1 and 2 respectively.  
_document_fileID_ _$_ |  Every document in a Google Drive cloud has a unique file ID. The file ID is displayed in the address bar when a Google Docs document is opened in a Web browser. Since it is possible to have more than one document with the same path, the file ID is used to specify a particular document. This parameter is used by methods that end with **ByID**.  
_document_path_ _$_ |  The Google Docs path consists of any directories and a document name. It can be used as a simple and readable method to specify a document. This parameter is used by methods that end with **ByPath**.

#### **Note:**  
This path consists of the directories and document name from the Google Docs cloud, **_not_** the path to a document on the local file system.  
  
**_Authentication Methods_**

**Authentication Methods** |  **Description**  
---|---  
**IsLoggedIn( )** |  Returns '1' if logged into Google Docs. Returns '0' if not yet logged into Google Docs.

#### **Note:**  
After one hour of inactivity, Google Docs will expire the login; however, this method will still return '1'.  
  
**Login( )** |  During object instantiation, the user will be asked to select a Google account and allow access to it. When this process is completed, run this method to complete login to Google Docs. Returns '1' if successful. Returns '0' if any error is encountered while logging in.  
  
**_Document Methods_**

**Document Methods** |  **Description**  
---|---  
**CloseDocument( )** **CloseDocument(**_document_**)** **CloseDocumentByID(**_document_fileID_ _$_**)** **CloseDocumentByPath(**_document_path_ _$_**)** |  Closes the document specified by an open document index number, a Google Docs file ID, or a Google Docs path. If no document is specified, the active document will be closed. If you close the **ACTIVE_DOCUMENT** , the **ACTIVE_DOCUMENT** is set to the last opened document still open; i.e. the highest document index or 0 if no documents are left opened.

#### **Note:**  
When closing a document, any document opened after the closed document was opened (any document with a higher index) will have its index shifted down 1. For example, if closing the document with index 2, the document at index 3 becomes index 2.

Returns '1' if successful. Returns '0' if any error is encountered while closing the document.  
**CloseDocuments( )** |  Closes all open documents. Returns '1' if successful. Returns '0' if any error is encountered while closing the documents.  
**CopyDocument(**_copy_path_ _$_**)** **CopyDocument(**_copy_path$,document_**)** **CopyDocumentByID(**_copy_path$,document_fileID$_**)** **CopyDocumentByPath(**_copy_path$,document_path$_**)** |  Makes a copy with the given path of the document specified by an open document index number, a Google Docs file ID, or a Google Docs path. If no document is specified, the active document will be copied. Returns '1' if successful. Returns '0' if any error is encountered while copying the document.  
**CreateDocument(**_document_path_ _$_**)** |  Creates a new blank Google Docs document with the path _document_path_ _$_. The new document is opened and becomes the **[ACTIVE_DOCUMENT](Google%20Docs%20Object.htm#activedoc)**. If the _document_path_ _$_ parameter is null, the document is named "Untitled".

#### **Important Note:**  
It is possible to have multiple documents with the same path. They have different file IDs.

Returns '1' if successful. Returns '0' if any error is encountered while creating the document.  
**DeleteDocument( )** **DeleteDocument(**_document_**)** **DeleteDocumentByID(**_document_fileID_ _$_**)** **DeleteDocumentByPath(**_document_path_ _$_**)** |  Deletes the document from Google Docs specified by an open document index number, a Google Docs file ID, or a Google Docs path. If no document is specified, the active document will be deleted. The document is closed as well. Returns '1' if successful. Returns '0' if any error is encountered while deleting the document.  
**ExportDocument(**_output_path_ _$_**)** **ExportDocument(**_output_path$,document_**)** **ExportDocumentByID(**_output_path$,document_fileID$_**)** **ExportDocumentByPath(**_output_path$,document_path$_**)** |  Converts the **[ACTIVE_DOCUMENT](Google%20Docs%20Object.htm#activedoc)** or the document specified by the open document index number, a Google Docs file ID, or a Google Docs path from a Google Docs document to a document file, and then downloads the file to the local file system. The type of local document file and the path of the file is determined by _output_path_ _$_. For supported _output_path_ _$_ file types, see **[Cloud-Based Documents](Google%20Docs%20Object.htm#cloudbased)**. Returns '1' if successful. Returns '0' if any error is encountered while converting and downloading the document.  
**GetFileID$( )** **GetFileID$(**_document_**)** |  Returns a Google Docs file ID of the document specified by an open document index number. If no document is specified, the Google Docs file ID of the active document is returned. Before getting a file ID, the file must be opened first. Returns "" if unable to locate the document.  
**GetPath$( )** **GetPath$(**_document_**)** |  Returns a Google Docs path of the document specified by an open document index number. If no document is specified, the Google Docs path of the active document is returned. Returns "" if unable to locate the document.  
**OpenDocumentByID(**_document_fileID_ _$_**)** **OpenDocumentByPath(**_document_path_ _$_**)** |  Opens the Google Docs document specified either by a Google Docs file ID or a Google Docs path. After opening a document, the **[ACTIVE_DOCUMENT](Google%20Docs%20Object.htm#activedoc)** property is set to the document index corresponding to the document just opened.

#### **Note:**  
When opening a document, the index is set to the number of open documents. The first document opened will be index 1, the second document opened will be index 2, etc.

Returns '1' if successful. Returns '0' if any error is encountered while opening the document.  
**SetDocument(**_document_**)** **SetDocumentByID(**_document_fileID_ _$_**)** **SetDocumentByPath(**_document_path_ _$_**)** |  Sets the **[ACTIVE_DOCUMENT](Google%20Docs%20Object.htm#activedoc)** index to the document specified by an open document index number, a Google Docs file ID, or a Google Docs path. For a document to be set as active, the document must be opened. Returns '1' if successful. Returns '0' if unable to locate the document.  
**UploadDocument(**_input_path$_**,**_document_path_ _$_**)** |  Upload a local document file _input_path_ _$_ to Google Docs and convert to Google Docs document. The new Google Docs document is given the specified Google Docs path. For supported _input_path_ _$_ file types, see **[Cloud-Based Documents](Google%20Docs%20Object.htm#cloudbased)**. Returns '1' if successful. Returns '0' if any error is encountered while uploading the document.  
  
**_Paragraph Methods_**

**Paragraph Methods** |  **Description**  
---|---  
**AppendParagraph(**_para_text_ _$_**)** **AppendParagraph(**_para_text$_ ,_document_**)** **AppendParagraphByID(**_para_text$_ ,_document_fileID_ _$_**)** **AppendParagraphByPath(**_para_text$_ ,_document_path_ _$_**)** |  Appends the text _para_text_ _$_ as a new paragraph at the end of the document specified by an open document index number, a Google Docs file ID, or a Google Docs path. If no document is specified, the active document is assumed. To insert a paragraph with no text, set _para_text_ _$=_ "". Returns '1' if successful. Returns '0' if unable to locate the document specified.  
**InsertParagraph(**_para_text_ _$_**)** **InsertParagraph(**_para_text$_ ,_para_num_**)** **InsertParagraph(**_para_text$_ ,_para_num_ ,_document_**)** **InsertParagraphByID(**_para_text$_ ,_para_num_ ,_document_fileID_ _$_**)** **InsertParagraphByPath(**_para_text$_ ,_para_num_ ,_document_path_ _$_**)** |  Inserts the text _para_text_ _$_ as a new paragraph added to the document specified by an open document index number, a Google Docs file ID, or a Google Docs path. The paragraph will be inserted as paragraph number _para_num_. If no document is specified, the active document is assumed. If _para_num_ is not specified or is set to 0, the paragraph will be inserted as paragraph 1. If _para_num_ is larger than the current number of paragraphs, the paragraph will be inserted as the last paragraph. Alternatively, to insert a paragraph at the very end of the document, use one of the **AppendParagraph(** **)** methods. To insert a paragraph with no text, set _para_text_ _$=_ "". Returns '1' if successful. Returns '0' if unable to locate the document specified.  
**ReadParagraph$(**_para_num_**)** **ReadParagraph$(**_para_num,document_**)** **ReadParagraphByID$(**_para_num,document_fileID_ _$_**)** **ReadParagraphByPath$(**_para_num,document_path_ _$_**)** |  Reads the contents of the paragraph numbered _para_num_ in the document specified by an open document index number, a Google Docs file ID, or a Google Docs path. If no document is specified, the active document is assumed. A _para_num_ value of less than 1 will read the first paragraph. Returns a string containing the text for the paragraph specified if successful. Returns "0" if unable to locate the document specified or the paragraph number _para_num_ does not exist.  
**DeleteParagraph(**_para_num_**)** **DeleteParagraph(**_para_num,document_**)** **DeleteParagraphByID(**_para_num,document_fileID_ _$_**)** **DeleteParagraphByPath(**_para_num,document_path_ _$_**)** |  Deletes the paragraph numbered _para_num_ from the document specified by an open document index number, a Google Docs file ID, or a Google Docs path. If no document is specified, the active document is assumed. A _para_num_ value of less than 1 will delete the first paragraph. Returns '1' if successful. Returns '0' if unable to locate the document specified or the paragraph number _para_num_ does not exist.  
  
**_Sentence Methods_**

**Sentence Methods** |  **Description**  
---|---  
**AppendSentence(**_sent_text_ _$_**)** **AppendSentence(**_sent_text$,document_**)** **AppendSentenceByID(**_sent_text$,document_fileID$_**)** **AppendSentenceByPath(**_sent_text$,document_path$_**)** |  Appends the text _sent_text_ _$_ as a new sentence (or sentences) at the end of the document specified by an open document index number, a Google Docs file ID, or a Google Docs path. If no document is specified, the active document is assumed. Returns '1' if successful. Returns '0' if unable to locate the document specified.  
**InsertSentence(**_sent_text_ _$_**)** **InsertSentence(**_sent_text$,sent_num_**)** **InsertSentence(**_sent_text$,sent_num,document_**)** **InsertSentenceByID(**_sent_text$,sent_num,document_fileID$_**)** **InsertSentenceByPath(**_sent_text$,sent_num,document_path$_**)** |  Inserts the text _sent_text_ _$_ as a new sentence (or sentences) added to the document specified by an open document index number, a Google Docs file ID, or a Google Docs path. If no document is specified, the active document is assumed. If _sent_num_ is set to 0, the sentence will be inserted as sentence 1. If _sent_num_ is larger than the current number of sentences, the sentence will be inserted as the last sentence. Alternatively, to insert a sentence at the very end of the document, use one of the **AppendSentence(** **)** methods. Returns '1' if successful. Returns '0' if unable to locate the document specified.  
**ReadSentence$(**_sent_num_**)** **ReadSentence$(**_sent_num,document_**)** **ReadSentenceByID$(**_sent_num,document_fileID_ _$_**)** **ReadSentenceByPath$(**_sent_num,document_path_ _$_**)** |  Reads the contents of the sentence numbered _sent_num_ in the document specified by an open document index number, a Google Docs file ID, or a Google Docs path. If no document is specified, the active document is assumed. A _sent_num_ value of less than 1 will read the first sentence. Returns a string containing the text for the sentence specified if successful. Returns "0" if unable to locate the document specified or the sentence number _sent_num_ does not exist.  
**DeleteSentence(**_sent_num_**)** **DeleteSentence(**_sent_num,document_**)** **DeleteSentenceByID(**_sent_num,document_fileID_ _$_**)** **DeleteSentenceByPath(**_sent_num,document_path_ _$_**)** |  Deletes the sentence numbered _sent_num_ from the document specified by an open document index number, a Google Docs file ID, or a Google Docs path. If no document is specified, the active document is assumed. A _sent_num_ value of less than 1 will delete the first sentence. Returns '1' if successful. Returns '0' if unable to locate the document specified or the sentence number _sent_num_ does not exist.  
  
**_Text Methods_**

**Text Methods** |  **Description**  
---|---  
**Find(**_find$_**)** **Find(**_find$,document_**)** **Find(**_find$,document,instance_**)** **FindByID(**_find$,document_fileID$_**)** **FindByID(**_find$,document_fileID$,instance_**)** **FindByPath(**_find$,document_path$_**)** **FindByPath(**_find$,document_path$,instance_**)** |  Determines if a particular string _(find$)_ exists in a document specified by an open document index number, a Google Docs file ID, or a Google Docs path. If no document is specified or the document index number is 0, the active document is assumed. Specify an _instance_ value to indicate which occurrence of the _find$_ text that the Find is to locate if different from the first occurrence. (e.g. _instance_ of 2 refers to second occurrence). If the Find is to begin from the end of the document, set the **[SEARCH_FORWARD](Google%20Docs%20Object.htm#searchforward)** property to '0'. Searches are case insensitive by default. For case sensitive searches, set the **[CASE_SENSITIVE_SEARCH](Google%20Docs%20Object.htm#casesearch)** property to '1'. Returns '1' if the text _find$_ was found. Returns '0' if unable to locate the document or if the text _find$_ was not found in the document.  
**FindInsert(**_find$,insert_ _$_**)** **FindInsert(**_find$,insert$,document_**)** **FindInsert(**_find$,insert$,document,instance_**)** **FindInsertByID(**_find$,insert$,document_fileID$_**)** **FindInsertByID(**_find$,insert$,document_fileID$,instance_**)** **FindInsertByPath(**_find$,insert$,document_path$_**)** **FindInsertByPath(**_find$,insert$,document_path$,instance_**)** |  Finds the text _find$_ in a document specified by an open document index number, a Google Docs file ID, or a Google Docs path and inserts the text _insert$_ into the document. If no document is specified or the document index number is 0, the active document is assumed. To perform the Insert on all opened documents, pass a _document_path_ _$_ of "**ALL** " (case insensitive). Specify an _instance_ value to indicate which occurrence of the _find$_ text that the Find is to locate if different from the first occurrence. (e.g. _instance_ of 2 refers to second occurrence). If the Find is to begin from the end of the document, set the **[SEARCH_FORWARD](Google%20Docs%20Object.htm#searchforward)** property to '0'. Searches are case insensitive by default. For case sensitive searches, set the **[CASE_SENSITIVE_SEARCH](Google%20Docs%20Object.htm#casesearch)** property to '1'. By default, the _insert$_ text will be inserted immediately following the _find$_ text. To insert the _insert$_ text before the _find$_ text, set the **[INSERT_BEFORE](Google%20Docs%20Object.htm#insertbefore)** property to '1'. Returns '1' if successful. Returns '0' if the Find was unsuccessful or if unable to locate the document or insert the text.  
**FindReplace(**_find$,replace_ _$_**)** **FindReplace(**_find$,replace$,document_**)** **FindReplace(**_find$,replace$,document,instance_**)** **FindReplaceByID(**_find$,replace$,document_fileID$_**)** **FindReplaceByID(**_find$,replace$,document_fileID$,instance_**)** **FindReplaceByPath(**_find$,replace$,document_path$_**)** **FindReplaceByPath(**_find$,replace$,document_path$,instance_**)** |  Finds the text _find$_ in a document specified by an open document index number, a Google Docs file ID, or a Google Docs path and replaces the _find$_ text with the _replace$_ text. If no document is specified or the document index number is 0, the active document is assumed. To perform the Replace on all opened documents, pass a _document_path_ _$_ of "**ALL** " (case insensitive). Specify an _instance_ value to indicate which occurrence of the _find$_ text that the Find is to locate if different from the first occurrence. (e.g. _instance_ of 2 refers to second occurrence). If the Find is to begin from the end of the document, set the **[SEARCH_FORWARD](Google%20Docs%20Object.htm#searchforward)** property to '0'. Searches are case insensitive by default. For case sensitive searches, set the **[CASE_SENSITIVE_SEARCH](Google%20Docs%20Object.htm#casesearch)** property to '1'. Returns '1' if successful. Returns '0' if the Find was unsuccessful or if unable to locate the document or replace the text.  
**FindReplaceAll(**_find$,replace_ _$_**)** **FindReplaceAll(**_find$,replace$,document_**)** **FindReplaceAllByID(**_find$,replace$,document_fileID$_**)** **FindReplaceAllByPath(**_find$,replace$,document_path$_**)** |  Finds the string _find$_ and replaces all occurrences with the string _replace$_. When only the _find$_ and _replace_ $ parameters are passed, Find/Replace is performed on the active document. Pass an open document index number, a Google Docs file ID, or a Google Docs path to perform Find/Replace on a document other than the active document without changing the **[ACTIVE_DOCUMENT](Google%20Docs%20Object.htm#activedoc)** property. To perform the Find/Replace on all opened documents, pass a _document_path_ _$_ of "**ALL** " (case insensitive). Searches are case insensitive by default. For case sensitive searches, set the **[CASE_SENSITIVE_SEARCH](Google%20Docs%20Object.htm#casesearch)** property to '1'. Searches will replace all occurrences of the _find$_ string. The **FindReplace** method can be used to replace a single occurrence of the _find$_ string. Returns '1' if successful. Returns '0' if unable to perform Find/Replace on any of the documents specified or if the _find$_ value was not found. **_When finding/replacing on all documents_** : Returns '-1' if only able to perform Find/Replace on some of the documents successfully.  
**FindSetColor(**_find$,color_index_**)** **FindSetColor(**_find$,color_index,document_**)** **FindSetColor(**_find$,color_index,document,instance_**)** **FindSetColorByID(**_find$,color_index,document_fileID$_**)** **FindSetColorByID(**_find$,color_index,document_fileID$,instance_**)** **FindSetColorByPath(**_find$,color_index,document_path$_**)** **FindSetColorByPath(**_find$,color_index,document_path$,instance_**)** **FindSetColor(**_find$,color_ _$_**)** **FindSetColor(**_find$,color$,document_**)** **FindSetColor(**_find$,color$,document,instance_**)** **FindSetColorByID(**_find$,color$,document_fileID$_**)** **FindSetColorByID(**_find$,color$,document_fileID$,instance_**)** **FindSetColorByPath(**_find$,color$,document_path$_**)** **FindSetColorByPath(**_find$,color$,document_path$,instance_**)** |  Finds the text _find$_ in a document specified by an open document index number, a Google Docs file ID, or a Google Docs path and sets the color for that text as specified in _color_index_ or _color$_. If no document is specified or the document index number is 0, the active document is assumed. To set the color of the _find$_ text on all opened documents, pass a _document_path_ _$_ of "**ALL** " (case insensitive). Specify an _instance_ value to indicate which occurrence of the _find$_ text that the Find is to locate if different from the first occurrence. (e.g. _instance_ of 2 refers to second occurrence). If the Find is to begin from the end of the document, set the **[SEARCH_FORWARD](Google%20Docs%20Object.htm#searchforward)** property to '0'. Searches are case insensitive by default. For case sensitive searches, set the **[CASE_SENSITIVE_SEARCH](Google%20Docs%20Object.htm#casesearch)** property to '1'. The text color may be passed as one of the following: A color index (numeric) An RGB value in the format "RGB:_rrr_ ,_ggg_ ,_bbb_ " (string) "HSL:_hhh_ ,_sss_ ,_lll_ " (string) Hex "_#nnnnnn_ " (string) One of the 16 basic PxPlus named colors, such as 'Red', 'Dark Blue' or 'Light Cyan' (string) A color-blended string, such as 'Red'+'Yellow' Dynamic color lightening, such as "Red*50" (string) Returns '1' if successful. Returns '0' if the Find was unsuccessful or if unable to locate the document or set the color.  
**FindSetFont(**_find$,font_ _$_**)** **FindSetFont(**_find$,font$,document_**)** **FindSetFont(**_find$,font$,document,instance_**)** **FindSetFontByFileID(**_find$,font$,document_fileID$_**)** **FindSetFontByFileID(**_find$,font$,document_fileID$,instance_**)** **FindSetFontByPath(**_find$,font$,document_path$_**)** **FindSetFontByPath(**_find$,font$,document_path$,instance_**)** |  Finds the text _find$_ in a document specified by an open document index number, a Google Docs file ID, or a Google Docs path and sets the font information (font name, font size, font style) for that text as specified in _font$_. If no document is specified or the document index number is 0, the active document is assumed. To set the font of the _find$_ text on all opened documents, pass a _document_path_ _$_ of "**ALL** " (case insensitive). Specify an _instance_ value to indicate which occurrence of the _find$_ text that the Find is to locate if different from the first occurrence. (e.g. _instance_ of 2 refers to second occurrence). If the Find is to begin from the end of the document, set the **[SEARCH_FORWARD](Google%20Docs%20Object.htm#searchforward)** property to '0'. Searches are case insensitive by default. For case sensitive searches, set the **[CASE_SENSITIVE_SEARCH](Google%20Docs%20Object.htm#casesearch)** property to '1'. The _font$_ variable can pass font name, font size and font style (Bold, Italic, etc.), separated by commas. The font name is case sensitive. If an unsupported font name is specified, Arial is used. **_Example:_**  
_  
font$=_ "Arial" sets only the font name.  
_font_ _$=_ "Arial,12" sets the name and size.  
_font_ _$=_ "Arial,12, Bold" sets the name and size and bolds the text in the range.

#### **Note:**  
Valid font style values are 'Regular', 'Italic', 'Bold' and 'Bold Italic'.

Returns '1' if successful. Returns '0' if the Find was unsuccessful or if unable to locate the document or set the font.  
  
## Example 1: Testing the Google Docs Object

This example program tests the Google Docs object.

> ! Test Google Docs object  
>  !   
>  ! Instantiate object where you define the clientID$ and clientSecret$ variables to be the values you got from Google  
> gd=NEW("*obj/GoogleDocs",clientID$,clientSecret$)  
>  !  
>  ! Wait for user to complete Google sign-in and allow PxPlus access  
>  INPUT "Press any key to continue after logging into Google account and allowing PxPlus access:",*;print ""  
>  !  
>  ! Complete the Google Docs login  
> gd'Login()  
>  !  
>  ! Open document from root Google Docs folder  
>  path$="SalesReport"  
>  if gd'OpenDocumentByPath(path$)=0 then MSGBOX "Error opening first document"  
>  !  
>  ! Open another document this one from a different Google Docs folder  
>  path2$="Notifications/NewDiscount"  
>  if gd'OpenDocumentByPath(path2$)=0 then MSGBOX "Error opening second document"  
>  !  
>  ! Check number of documents open   
>  MSGBOX STR(gd'documents_count),"Open Document Count"  
>  !  
>  ! Set document to first document opened   
>  if gd'SetDocumentByPath(path$)=0 then MSGBOX "Error making first document active"  
>  !  
>  ! Search and Replace on all opened documents  
>  find$="[FirstName]"  
>  replace$=firstName$  
>  if gd'FindReplaceAllByPath(find$,replace$,"all")<>1 then MSGBOX "Error inserting name into templates"  
>  !  
>  ! Set active document   
>  if gd'SetDocument(2)=0 then MSGBOX "Error making second document active"  
>  !  
>  ! find text and set font in active document  
>  if gd'FindSetFont("New discount","Algerian,18,bold")=0 then MSGBOX "Error setting font"  
>  !  
>  ! find second instance of text and set color to light blue of active document  
>  if gd'FindSetColor("Sample text",4,0,2)=o then MSGBOX "Error setting color"  
>  !  
>  ! Find last instance of text and replace with alternate text in test.docx  
> gd'search_forward=0  
>  if gd'FindReplaceByPath("Find Text","Replace text",path2$,1)=0 then MSGBOX "Error replacing last instance of text in second document"  
>  !  
>  ! Save active document as local docx file  
> gd'ExportDocument("c:\users\user\documents\NewDiscount.docx")  
>  !  
>  !  
>  DROP OBJECT gd  
>  END

## Example 2: Using the Google Docs Object in a Template

This example demonstrates using the Google Docs object to replace given placeholders in a template document with variable data:

  * The **_promo_** document below acts as the template document.
  * The **_PxPlus promo_** program uses the Google Docs object to populate the various pieces of data within the square brackets.



**_promo_** ** _document:_**

> **_PxPlus promo program:_**

> ! promo - Use Google Docs object for mail merge  
>  !   
>  OPEN (HFN,IOL=*)"client"  
>  clients=LFO  
>  !   
> path$="C:\PVX Plus Technologies\PxPlus _version_number_ \word\"  
>  !  
>  ! replace x's with your client ID, client secret, and login token before running this program  
> clientID$="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" ! Get from Google  
> clientSecret$="xxxxxxxxxxxxxxxx" ! Get from Google  
> loginToken$="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" ! Get from running Google Docs object, doing a login, and getting LOGIN_TOKEN$ property previously  
>  !  
> gd=NEW("*obj/GoogleDocs",clientID$,clientSecret$,loginToken$)  
>  !   
>  ! populate client name and address data   
>  search_fields$="ClientName$"+SEP+"Address1$"+SEP+"Address2$"+SEP+"City$"+SEP+"State$"+SEP+"Country$"+SEP+"ZipCode$"+SEP+"ytdSales"+SEP  
>  SELECT * FROM clients WHERE ytdSales>10000  
>  ERASE path$+clientID$+".docx",ERR=*NEXT  
> gd'DeleteDocumentByPath("promos/"+clientID$)  
> gd'UploadDocument(path$+"promos.docx","promos/"+clientID$)  
> gd'OpenDocumentByPath("promos/"+clientID$)  
>  !   
>  !   
>  FOR field$ FROM search_fields$  
>  find$="["+field$+"]"  
>  IF find$="[ytdSales]" THEN replace$="$"+STP(STR(ytdSales:"###,###.00"),"L"," ") ELSE replace$=VIS(field$)  
> gd'case_sensitive_search=1  
> gd'FindReplaceAll(find$,replace$)  
>  NEXT   
>  !   
>  ! populate dates  
> gd'FindReplaceAll("[TodaysDate]",DTE(0:"%Ml %D,%Y"))  
> gd'FindReplaceAll("[YearDate]",DTE(0:"%Y"))  
>  !   
>  ! highlight '25% off coupon'  
> gd'FindSetColor("25% off coupon","red")  
>  !  
> gd'ExportDocument(path$+clientID$+".docx")  
> gd'CloseDocument(1)  
>  !   
>  NEXT RECORD   
>  !   
>  DROP OBJECT gd  
>  CLOSE (clients,ERR=*NEXT)  
>  !   
>  END

## See Also

**[PxPlus Google Drive Object](Google%20Drive%20Object.md)**  
**[PxPlus Google Sheets Object](Google%20Sheets%20Object.md)**

Google Workspace is a registered trademark of Google LLC
