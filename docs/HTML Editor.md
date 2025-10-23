# 

**HTML Editor**|   
---|---  
  
The **HTML Editor** is used to create and edit HTML pages without requiring any HTML knowledge. Pre-defined tool bars provide the necessary editing tools for creating and formatting an HTML page. Position the mouse pointer over each tool bar button to display a tooltip with the button's function.

To invoke the HTML Editor, use one of the following methods:

**Location** |  **Method**  
---|---  
From the **[PxPlus IDE Main Launcher](PxPlus%20IDE/IDE%20Main%20Launcher.md)** |  Select _HTML Editor_ (near the bottom of the tree view).  
From the **[PxPlus Web IDE](PxPlus%20IDE/IDE%20Main%20Launcher_Web.md)** |  Select _HTML Editor_ from the Web header menu bar.  
  
The HTML Editor is displayed with a pre-defined layout, which can be modified if needed. See **[Using the TinyMCE HTML Editor](Extended%20NOMADS%20Objects/TinyMCE%20HTML%20Editor/Using%20the%20TinyMCE%20HTML%20Editor.md)**.

#### **Note:**  
JavaScript elements and properties are no longer stripped out, thus allowing them to be edited.  
  
_(Support to allow editing of HTML with JavaScript was added in PxPlus 2021 Update 2.)_

> ## File and Projects Menus

This table describes the options for the **_File_** and **_Projects_** menus (in the upper left corner):

**File** |  Lists HTML file options.  
---|---  
_Open_ |  Loads an existing HTML file.  
_Save_ |  Writes the current HTML file, and if it is a new file, another window will launch for entering a file name.

#### **Note:**  
If saving an HTML file that is in a source SVN directory, the file in SVN will also be updated. See **[PxPlus Version Control System Using TortoiseSVN](PxPlus%20Version%20Control%20System%20Using%20TortoiseSVN/Introduction.md)**.  
  
_(Support for updating SVN when saving an HTML file was added in PxPlus 2021.)_  
  
_Save As_ |  Launches another window for entering the file name to be written.  
_New Page_ |  Loads a blank page.  
_Save Full page_ |  A check mark beside this option indicates that when _Save_ (or _Save As_) is selected, the current HTML file will be written with all of its elements. By default, this option is On (checked). Click this option to uncheck it. A warning message will ask to confirm this change before proceeding. _(The warning message was added in PxPlus 2023.)_  
_Webster Preview URL_ |  Launches another window for specifying the URL to be used to run the Webster+ bind needed to see the preview. _(The Webster Preview URL option was added in PxPlus 2021.)_  
_Recent Files_ |  Displays a list of recently opened HTML files. _(The Recent Files list was added in PxPlus 2021.)_  
_Exit_ |  Closes HTML Editor. Any changes to the current HTML file are **_not_** automatically saved. To save changes prior to exiting, select _Save_ or _Save As_ on the **File** menu (in the upper left corner).  
**Projects******|  Lists options for creating a new project and adding an HTML file to a project. _(The Projects menu was added in PxPlus 2021.)_  
_Create New Project_ |  Launches the **[Create Project](PxPlus%20IDE/IDE%20Main%20Launcher.htm#createproject)** dialog for entering a new project for the current working directory. Click the Query button to select a different working directory.  
_Add to Project_ |  Launches the **Add to Project** dialog for adding the current HTML file to an existing project that is selected from the _Project_ drop box.  
  
##  Menu Bar Options

This table describes the **_menu bar options_** in the order of appearance. Some options may also be invoked using tool bar buttons or keyboard shortcuts. For a list of keyboard shortcuts, click the **Help** menu or the _Help_ tool bar button.

**Document** |  Lists options for printing the document and entering the different settings for the document, such as title, metadata, etc.  
---|---  
_Print_ |  Prints the current HTML document.  
_Metadata and document properties_ |  Launches a separate window for entering document information (i.e. title, description, author, etc.). If the **[Save Full page](HTML%20Editor.htm#Mark4)** option is Off (unchecked), any changes to metadata will not be saved.  
_Word count_ |  Displays the word and character count for the current HTML document and/or any selected text.  
**Edit** |  Lists options for creating and editing an HTML document.  
_Undo_ |  Reverses a change. Same as the _Undo_ tool bar button.  
_Redo_ |  Sequentially reapplies the last changes that were undone by the _Undo_ option until a new change is made. After a new change, _Redo_ will recall only changes that were "undone" after the newest change. Same as the _Redo_ tool bar button.  
_Cut_ |  Cuts selected text.  
_Copy_ |  Copies selected text.  
_Paste_ |  Pastes cut or copied contents.

#### **Note:**  
If the browser does not support direct access to the Clipboard, a message will suggest using the keyboard shortcuts instead: Ctrl X (Cut), Ctrl C (Copy) or Ctrl V (Paste).  
  
_Paste as text_ |  If selected (as indicated by a check mark), any text that was copied with predefined formatting will be pasted as plain text with no formatting. By default, this option is Off (unchecked), indicating that the copied text will be pasted with its formatting intact, if applicable.  
_Select all_ |  Highlights the contents of the current HTML document.  
_Find and replace_ |  Launches a separate window for entering the search text and the replacement value for specific or all occurrences of that text. Click the Gear drop-down button for more search options: |  _Match case_ |  Indicates that the search is case sensitive.  
---|---  
_Find whole words only_ |  Searches for the specified text value as a whole word only rather than as part of another word.  
_Find in selection_ |  Limits the search to a pre-selected portion of the document.  
  
A check mark displays beside the option when it is selected. Click the option to uncheck it.  
  
**Insert** |  Lists options for inserting additional elements (i.e. link, image, media, etc.) into an HTML document.  
_Link_ |  Launches a separate window for inserting a new link or editing the settings for an existing link in the current HTML document.  
_Remove link_ |  Removes an existing link from the selected text.  
_Image_ |  Launches a separate window for inserting a new image or editing the settings for an existing image in the current HTML document.  
_Media_ |  Launches a separate window for inserting a new video or editing the settings for an existing video in the current HTML document.  
_Special character_ |  Launches a separate window with special characters to select.  
_Date/time_ |  Presents date/time formatting options: _hh:mm:ss_ _  
yyyy-mm-dd  
hh:mm:ss AM/PM  
mm/dd/yyyy_  
_Emoticons_ |  Launches a separate window with emoticons to select.  
_Horizontal line_ |  Inserts a horizontal line at the cursor position.  
_Nonbreaking space_ |  Inserts a nonbreaking space at the cursor position.  
_Page break_ |  Inserts a page break at the cursor position.  
_Anchor_ |  Launches a separate window for entering a name for the anchor (bookmark) to be inserted at the cursor position.  
_Webster_ _Shortcodes_ |  Presents a list of **[Webster+ Short Codes](Webster/Short%20Codes.md)** that can be inserted into an HTML document. _(The Webster Shortcodes option was added in PxPlus 2021.)_  
**View** |  Lists options for showing hidden elements and previewing an HTML document.  
_Visual aids_ |  If selected (as indicated by a check mark), a dotted outline will display for a borderless table (i.e. the table's _Border Width_ property is 0). The dotted outline provides a visual cue only and does not display when the document is printed or previewed. By default, this option is On (checked).  
_Show invisible characters_ |  If selected (as indicated by a check mark), formatting symbols, which are normally hidden, will be visible. By default, this option is Off (unchecked).  
_Show blocks_ |  If selected (as indicated by a check mark), a dotted outline will surround each paragraph block as a visual cue. By default, this option is Off (unchecked).  
_Preview_ |  Presents a preview of the current HTML document.  
_Webster Preview_ |  Opens a browser window for displaying the Webster+ preview. If the **[Webster Preview URL](HTML%20Editor.htm#Mark9)** has not been defined, a message will display. _(The Webster Preview option was added in PxPlus 2021.)_  
**Format** |  Lists options for formatting the content of an HTML document.  
_Bold_ |  Text will be bolded. Same as _Bold_ tool bar button.  
_Italic_ |  Text will be in italics. Same as _Italic_ tool bar button.  
_Underline_ |  Text will be underlined. Same as _Underline_ tool bar button.  
_Strikethrough_ |  Text will show strikethrough.  
_Superscript_ |  Text will be in superscript.  
_Subscript_ |  Text will be in subscript.  
_Bullet list_ |  Creates a new bulleted list at the cursor position or changes selected text into a bullet list format. Same as _Bullet list_ tool bar button.  
_Numbered list_ |  Creates a new numbered list at the cursor position or changes selected text into a numbered list format. Same as _Numbered list_ tool bar button.  
_Decrease indent_ |  Decreases indentation (shifts text to the left). Same as _Decrease indent_ tool bar button.  
_Increase indent_ |  Increases indentation (shifts text to the right). Same as _Increase indent_ tool bar button.  
_Formats_ |  The content formatting options are: |  _Headings_ |  Options are Heading styles 1 to 6 (differ according to font size).  
---|---  
_Inline_ |  Options are _Bold_ , _Italic_ , _Underline_ , _Strikethrough_ , _Superscript_ , _Subscript_ and _Code_.  
_Blocks_ |  Options are _Paragraph_ , _Blockquote_ , _Div_ and _Pre_.  
_Align_ |  Options are _Left_ , _Center_ , _Right_ and _Justify_.  
_Clear formatting_ |  Removes formatting from selected text.  
**Table** |  Lists options for creating, editing and deleting a table within an HTML document.  
_Table_ |  Displays a 2D grid for selecting the number of rows and columns desired for the new table.  
_Table properties_ |  Displays a separate window for editing the properties (i.e. width/height, cell spacing, etc.) for an existing table.  
_Delete table_ |  Removes a selected table.  
_Cell_ |  **_(Available when cursor is positioned inside a table)_** The cell options are: |  _Cell properties_ |  Launches a separate window with options for setting cell properties.  
---|---  
_Merge cells_ |  **_(Available when two or more cells are selected)_** Joins the selected cells into a single cell.  
_Split cell_ |  **_(Available when cursor is on merged cell)_** Splits the merged cell into smaller individual cells.  
_Row_ |  **_(Available when cursor is positioned inside a table)_** The row options are: |  _Insert row before_ |  Inserts a blank row above the current row.  
---|---  
_Insert row after_ |  Inserts a blank row below the current row.  
_Delete row_ |  Deletes the current row.  
_Row properties_ |  Launches a separate window with options for setting row properties.  
_Cut row_ |  Removes the current row for subsequent pasting to a specified location.  
_Copy row_ |  Copies the current row for subsequent pasting to a specified location.  
_Paste row before_ |  Inserts a copied or cut row above the current row.  
_Paste row after_ |  Inserts a copied or cut row below the current row.  
_Column_ |  **_(Available when cursor is positioned inside a table)_** The column options are: |  _Insert column before_ |  Inserts a blank column to the left of the current column.  
---|---  
_Insert column after_ |  Inserts a blank column to the right of the current column.  
_Delete column_ |  Deletes the current column.  
_Cut column_ |  Removes the current column for subsequent pasting to a specified location.  
_Copy column_ |  Copies the current column for subsequent pasting to a specified location.  
_Paste column before_ |  Inserts a copied or cut column to the left of the current column.  
_Paste column after_ |  Inserts a copied or cut column to the right of the current column.  
**Help** |  TinyMCE Help information.  
_Help_ |  Provides the following information (same as the _Help_ tool bar button): Keyboard shortcuts Keyboard navigation List of installed TinyMCE plugins (Click on a link to display TinyMCE help for the selected plugin) List of additional TinyMCE plugins that can be installed TinyMCE version  
  
##  Tool Bar Options

The **_tool bar options_** provide convenient access to many of the functions that are also available as **[Menu Bar Options](HTML%20Editor.htm#Mark1)**.

**Tool Bar Button** |  **Description**  
---|---  
_Open_ |  Loads an existing HTML file. _(The Open tool bar option was added in PxPlus 2023.)_  
_Save_ |  Writes the current HTML file, and if it is a new file, another window will launch for entering a file name.

#### **Note:**  
If saving an HTML file that is in a source SVN directory, the file in SVN will also be updated. See [**PxPlus Version Control System Using TortoiseSVN**](PxPlus%20Version%20Control%20System%20Using%20TortoiseSVN/Introduction.md).

_(The Save tool bar option was added in PxPlus 2023.)_  
_New Page_ |  Loads a blank page. _(The New Page tool bar option was added in PxPlus 2023.)_  
_Undo_ |  Reverses a change. Also available on the **Edit** menu.  
_Redo_ |  Sequentially reapplies the last changes that were undone by the _Undo_ option until a new change is made. After a new change, _Redo_ will recall only changes that were "undone" after the newest change. Also available on the **Edit** menu.  
_Paragraph_ |  Lists options for formatting the content of an HTML document. See **[Formats](HTML%20Editor.htm#Mark2)** option on the **Format** menu.  
_System Font_ |  Font types. If a font other than the system font is used, a check mark will display beside the selected font in the list.  
_Font size_ |  Font sizes. A check mark displays beside the selected font size. Default font size is 12 point.  
_Bold_ |  Text will be bolded. Also available on the **Format** menu.  
_Italic_ |  Text will be in italic. Also available on the **Format** menu.  
_Underline_ |  Text will be underlined. Also available on the **Format** menu.  
_Text color_ |  Click the drop-down to choose a text color from the color selection grid.  
_Background color_ |  Click the drop-down to choose a background color from the color selection grid.  
_Align Left  
Align Center  
Align Right_ |  Text alignment.  
_Bullet list_ |  Creates a new bulleted list at the cursor position or changes selected text into a bullet list format. Also available on the **Format** menu.  
_Numbered list_ |  Creates a new numbered list at the cursor position or changes selected text into a numbered list format. Also available on the **Format** menu.  
_Decrease Indent_ |  Decreases indentation (shifts text to the left). Also available on the **Format** menu.  
_Increase Indent_ |  Increases indentation (shifts text to the right). Also available on the **Format** menu.  
_Source code_ |  Launches a separate window that shows the HTML formatting codes in the current HTML document. If the **[Save Full page](HTML%20Editor.htm#Mark4)** option is Off (unchecked), any changes outside the <body> tag will not be saved.  
_Help_ |  TinyMCE **[Help](HTML%20Editor.htm#Mark3)** information.  
_Webster Shortcodes_ |  Presents a list of **[Webster+ Short Codes](Webster/Short%20Codes.md)** that can be inserted into an HTML document. Also available on the **Insert** menu. _(The Webster Shortcodes tool bar option was added in PxPlus 2021.)_  
_Webster Preview_ |  Opens a browser window for displaying the Webster+ preview. Also available on the **View** menu. If the **[Webster Preview URL](HTML%20Editor.htm#Mark9)** has not been defined, a message will display. _(The Webster Preview tool bar option was added in PxPlus 2021.)_  
  
## See Also

**[Using the TinyMCE HTML Editor](Extended%20NOMADS%20Objects/TinyMCE%20HTML%20Editor/Using%20the%20TinyMCE%20HTML%20Editor.md)**  
**[Webster+](Webster/Webster.md)**

TinyMCE is a registered trademark of Tiny Technologies Inc.
