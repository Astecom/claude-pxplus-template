# Directives 

**MENU_BAR** |  **_Create/Control Menu Bar_**  
---|---  
  
##  Formats

1\. _Define/Create:_ |  **MENU_BAR** _ctl_id_**,**_menu_def_ _$_[,**ERR=**_stmtref_]  
---|---  
2\. _Read Selected Item_ _:_ |  **MENU_BAR READ** _var_ _$_[,**ERR=**_stmtref_]  
3\. _Clear Menu Bar_ _:_ |  **MENU_BAR CLEAR**[,**ERR=**_stmtref_]  
4\. _Restore Default Help:_ |  **MENU_BAR RESET**[,**ERR=**_stmtref_]  
5\. _Set Focus_ _:_ |  **MENU_BAR GOTO**[,**ERR=**_stmtref_]  
6\. _'Check'/'Uncheck' Item_ _:_ |  **MENU_BAR**{**ON** | **OFF**} _element_[$][,**ERR=**_stmtref_]  
7\. _Disable/Enable Item_ _:_ |  **MENU_BAR** {**DISABLE** |**ENABLE**} _element_[$][,**ERR=**_stmtref_]  
8\. _Remove Menu Bar_ _:_ |  **MENU_BAR REMOVE**[,**ERR=**_stmtref_]  
_The following were added in PxPlus 2020:_  
9\. _[Return Menu Bar Character Codes](menu_bar.htm#Mark22):_ |  **MENU_BAR FIND X$**  
10\. _[Set Menu Bar Entries](menu_bar.htm#Mark23):_ |  **MENU_BAR LOAD X$**  
  
**_Where:_**

_ctl_id_ |  Unique logical identifier for the menu bar. Use an integer between **-** 32000 to +32000. Avoid integers that conflict with keyboard definitions (e.g. 4 cancels CTL=4 for the **F4** key) or special negative CTL values set by the system. See [**Negative CTL Definitions**](../appendix/negative_ctl_definitions.md).  
---|---  
_element_[$] |  Individual menu selection. Expression consisting of shortcut letters or assigned item CTL values for accessing the selection.  
_menu_def_ _$_ |  Menu structure and elements. String expressions. Maximum 2047 elements. A bitmap/icon can be included for each element in the menu.

#### **Helpful Tip:**  
To determine how many elements you already have, count the _ampersands_ (&).  
  
_stmtref_ |  Program line number or statement label to which to transfer control.  
_var_ _$_ |  String variable to receive the last selected menu item.  
  
##  Description

Use the **MENU_BAR** directive to define and control the menu across the top of a window.

##  Format 1

**_Define/Create Menu Bar_**

**MENU_BAR** _ctl_id_**,**_menu_ __def_ _$_[,**ERR=**_stmtref_]

This format creates a menu bar control object. If the menu bar is not properly defined, PxPlus returns an Error #87: MENUBAR definition invalid.

Define the _menu_def_ _$_ of menu groups and elements and identify each item uniquely (e.g. **F** and **O** would identify **_F_** ile/**_O_** pen) by marking the character the user can enter in conjunction with the **Alt** key (e.g. **Alt - F**) to select the particular item. Use the following format for your string expression:

  * Enclose each menu group in square brackets.
  * Delimit each item in a group with a comma.
  * Prefix each item's selection character (hot key) with **&**  _(ampersand)_.
  * Prefix each sub-menu group with its item ID.



**_Example:_**

The example below shows a menu string containing **File** and **Edit** , each with a sub-menu (**File:** **Open** , **Save** and **Quit** / **Edit:** **Add** and **Delete**). Each item has a shortcut key. **Quit** has both the shortcut key **(Q)** and a control ID value **(4)**.

> menu_bar 100,"-[&File,&Edit],F:[&Open,&Save,&Quit=4],E:[&Add,&Delete]"

PxPlus includes the **HELP** selection on all menu bars by default. You can suppress the **HELP** selection by inserting a "**-** " (_minus sign_) as the first character in a menu definition string, as in the above example.

**_Right justify_** a description of the menu entry (e.g. to tell users what function key will give them quick access to the selection). Use the tab character $09$ to separate the text to be right justified:

**_Example:_**

> menu_bar 99,"[&File,&Edit...],E:[&Cut"+$09$+"Shft-DEL,&Paste"+$09$+"Ins]"

**_Assigning CTL Values_**

Normally, any selection from the menu bar will generate its _ctl_id_. You can also have individual menu items generate CTL values. To do this, append an "**=** " (_equals sign_) and CTL value to any item in the menu selection list (e.g. &Quit=4, as in the example above). It is best to use unique shortcut keys for selections from a given sub-menu in a group. If you have duplicates, you will have difficulty determining which selection a user makes unless a unique CTL value is assigned to each item. If you omit a shortcut key, PxPlus assigns a value equivalent to the item's placement in the definition string.

Add a line to separate options by inserting an additional "**,** " (_comma_) as a placeholder in the definition string (e.g. between &Open &Save):

> menu_bar 120,"[&File],F:[&Open,,&Save,&Quit=4]"

Menu items can be **_disabled_** or displayed in **bold** or with a **_checkmark_** by placing a "D", "B" or "C" after the "**=** " (_equals sign_) and before the assigned CTL value:

**_Example:_**

> "[&One=1,&Two=C2,&Three=D3]"

**_Bitmaps and Icons_**

Images can be included for each item in the menu. Enclose the image name in **{ }** (_curly braces_) and place it in the menu definition just prior to the specific item text:

**_Example:_**

> menu_bar 1000,"-[&File],F:[&Open=1001,{!Stop}&Stop=1002]"

Use a leading "**!** " (_exclamation_ _point_) to identify the image as internal, or specify the relative path and filename to access an image file that is external. The first bitmap determines the dimensions used to display menu items (up to 64x64). Bitmap/image transparency options can also be included. "T" indicates use of the upper left most pixel color, and "G" means use gray color as transparent (RGB: 192,192,192), as in E:[{!Copy,t}&Copy,{!Paste,g}&Paste].

For information on internal/external images and recognized image file types, see [**Displaying Bitmaps/Icons**](../appendix/displaying_bitmaps~icons.md).

**_Inclusion of Special Characters_**

If the text you want to include has any of the characters used to define the menu bar, which is **{, }** , **[,** **]** , **=** (_equals sign_), **&** (_ampersand_), **:** (_colon_) or **,** (_comma_), you will need to escape these characters with the backslash and put a backslash as the first character of the menu definition string.

**_Example:_**

If you want an entry in the menu bar to read "Export [to Word]", your menu_bar command would look like this:

> menu_bar 120,"\\[&File],F:[&Open,,&Save,&Export \\[to Word\\],&Quit=4]"

The first character of the menu bar definition string being a backslash indicates to the system that the menu bar contains escaped characters. Any subsequent character in the string preceded by a backslash will not be considered as a delimiter/control character and included in the menu_bar text.

#### **Note:**  
When combining the leading backslash and the leading **-** to suppress help, the backslash **_must_** be specified first.

_(Support to allow the inclusion of the special characters used to define the menu was added in PxPlus 2021.)_

##  Menu Colors

The **MENU_BAR** directive supports the use of parameters for defining colors in menus. The _arg_ value is defined using the same format as the **[Color Properties](../control_object_properties/properties_list.htm#Mark184)**.

This table lists the parameters that can be used:

**Parameter** |  **Description**  
---|---  
**LEFT**(_arg_) |  Background color for the bitmap portion of the menu. Must be placed outside "[...]" menu definitions. This is to support the legacy MS Office applications' two-tone effect.  
**FILL**(_arg_) |  Background color for the right/text side. If placed outside "[...]" menu definitions, it will serve as the default color for all menu items. If placed within "[...]" separated from the menu item with an **=** (_equals sign_), it will be considered the text color associated with a specific menu item.  
**HFILL**(_arg_) |  Background color for hovered over menu items. This applies to both LEFT and FILL portions of the menu item. Must be placed outside "[...]" menu definitions. _(The HFILL parameter was added in PxPlus 2024.)_  
**HTEXT**(_arg_) |  Text color for hovered over menu items. Must be placed outside "[...]" menu definitions. _(The HTEXT parameter was added in PxPlus 2024.)_  
**TEXT**(_arg_) |  Text color for the menu text. If placed outside "[...]" menu definitions, it will serve as the default text color for all menu text. If placed within "[...]" separated from the menu item with an **=** (_equals sign_), it will be considered the text color associated with a specific menu item. _(The TEXT parameter was added in PxPlus 2024.)_  
  
**_Apply Color to Top Menu_**

If the first character of the menu definition is an **!** (_exclamation_ _point_), or a first or second character of **-** (_dash_) is also specified, then the specified colors will also be applied to the top level menu (the horizontal menu at the top of the window).

By default, the color will not apply to the top level menu.

**_Examples_**

The following examples show how color can be applied when creating a menu:

**_Example 1_** \- This creates a menu with a Dark Cyan background and White text:

> menu_bar 10,"!LEFT(RGB:100,100,100),FILL(Dark Cyan),TEXT(RGB:255,255,255)[&File,&Edit,&Help],F:[&Open,&Save,&Quit],E:[&Add,&Delete],H:[&Version Info]"

**_Example 2_** \- This creates a menu with a different hover color and one item on the File menu with a different color:

> menu_bar 10,"-!HFILL(RGB:200,200,200),HTEXT(RGB:0,0,0)[&File,&Edit,&Help],F:[&Open,&Save=1001=FILL(RGB:0,0,230)=TEXT(RGB:255,255,255),&Quit],E:[&Add,&Delete],H:[&Version Info]"

**_Example 3_** \- This uses RGB color 200,200,200 for the left edge of all entries in this menu:

> menu_bar 10,"LEFT(RGB:200,200,200),[&File,&Edit,&Help],F:[&Open,&Save,&Quit],E:[&Add,&Delete],H:[&Version Info]"

**_Example 4_** \- This uses RGB color 255,255,150 as the background color for all of the text portion of the menu:

> menu_bar 10,"FILL(RGB:255,255,150),[&File,&Edit,&Help],F:[&Open,&Save,&Quit],E:[&Add,&Delete],H:[&Version Info]"

_(Support to allow more control when applying top-level menu colors was added in PxPlus 2024.)_

##  Format 2

**_Read Selected Item_**

**MENU_BAR READ** _var_ _$_[,**ERR=**_stmtref_]

When a user selects any of the items from a menu bar, PxPlus generates the _ctl_id_ __ you assigned to the menu bar.

You can return the selected CTL value in a string variable by using the **MENU_BAR READ** directive. A program does not receive the CTL value for the menu item the user has chosen until it is read.

##  Format 3

**_Clear Menu Bar_**

**MENU_BAR CLEAR**[,**ERR** =_stmtref_]

Use the **MENU_BAR CLEAR** format to remove the menu bar from the current window until a **BEGIN** or **END** is executed.

#### **Note:**  
Using **MENU_BAR CLEAR** also causes the window to shrink unless the **MENU_BAR CLEAR** is followed with a **[SIZE](../mnemonics/size.md)** mnemonic.

##  Format 4

**_Restore Standard Help_**

**MENU_BAR RESET**[,**ERR** =_stmtref_]

This format resets the current menu bar to the default Help setting.

##  Format 5

**_Set Focus_**

**MENU_BAR GOTO**[,**ERR** =_stmtref_]

**MENU_BAR GOTO** sets the focus on the menu bar.

##  Format 6

**_'Check'/'Uncheck' Item_**

**MENU_BAR**{**ON** | **OFF**} _element_[$][,**ERR=**_stmtref_]

The **MENU_BAR ON** option displays a check mark in front of a specified menu bar item, making it appear that it was selected. **MENU_BAR OFF** removes the check mark.

**_Toggling_**

For **_Formats 6_** and **_7_** , menu items _element_[$] are usually identified via shortcut keys.

**_Example:_**

> menu_bar on "FPS" (Toggles items _F_ ile, _P_ rint, _S_ ave)

When using CTL values and more than one menu item uses the same CTL, then all menu items using that CTL will be toggled. If toggling just one item, then use that CTL value only. If toggling more than one, then make a string of the CTL values, prefixing a "**#** " (_pound sign_) to each CTL value separated by commas:

**_Example:_**

> menu_bar on 12034  
> menu_bar off "#12034,#12035,#12036"

##  Format 7

**_Disable/Enable Item_**

**MENU_BAR**{**DISABLE** | **ENABLE**} _element_[$][,**ERR=**_stmtref_]

Use the **MENU_BAR DISABLE** format to gray out the specified menu bar item so that it will be visible but inaccessible to users. To reactivate it, use **MENU_BAR ENABLE**. See **[Toggling](menu_bar.htm#toggling)**.

##  Format 8

**_Remove Menu Bar_**

**MENU_BAR REMOVE**[,**ERR** =_stmtref_]

This format deletes the menu bar completely from the current session. It cannot be redisplayed until it is redefined.

#### **Note:**  
Using **MENU_BAR REMOVE** also causes the window to shrink unless the **MENU_BAR REMOVE** is followed with a **[SIZE](../mnemonics/size.md)** mnemonic.

##  Format 9

**_Return Menu Bar Character Codes_**

**MENU_BAR FIND X$**

This format returns a string consisting of all the menu bar character codes, followed by a _colon_ and their settings. For example, if File > Open has a check mark, the string would include **FO:C**.

The string will include **_all_** codes currently in the menu bar and their respective status consisting of "C" for **C** hecked, "D" for **D** isabled and "E" for **E** nabled. All codes, therefore, will have either "E" or "D" and optionally "C" if checked. Each code will be separated by a _comma_.

**_Example:_**

> menu_bar find X$  
>  print X$  
>  M:E,B:E,R:E,BP:EC,BW:D,BA:E

_(The MENU_BAR FIND format was added in PxPlus 2020.)_

##  Format 10

**_Set Menu Bar Entries_**

**MENU_BAR LOAD X$**

This format sets the enabled/disabled and optionally the _On_ /_Off_ status of menu bar entries based on their codes. This is done via a string consisting of a comma-separated list of menu codes, followed by a _colon_ and their settings: "E" for **E** nabled or "D" for **D** isabled, and optionally "C" for **C** hecked (_On_). Invalid character sequences will simply be ignored.

**_Example:_**

> menu_bar load "M:D,B:E,BP:EC"

_(The MENU_BAR LOAD format was added in PxPlus 2020.)_
