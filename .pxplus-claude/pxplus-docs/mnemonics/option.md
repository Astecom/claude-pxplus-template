# Mnemonics 

**'OPTION'** |  **_On-the-Fly Setting_**  
---|---  
  
**Behaviour**

##  Format

**'OPTION' (_keyword$,value_**[_$_]**)**

**_Where:_**

_keyword$_ |  Named property. Case insensitive string expression (characteristic, icon, font, colour index) described below.  
---|---  
_value_[_$_] |  Value assigned to _keyword$_. String or numeric expression. (The numeric option was added in PxPlus v11.)  
  
##  Description

The **'OPTION'** mnemonic allows specific PxPlus environment properties (typically set via INI entries) to be set at run time (on the fly) within a session.

#### **Note:**  
To read the **'OPTION'** PxPlus environment properties, use **FIN**(0, _keyword$_).

**Item Colors**  
  
The following _keyword$_ values assign colors to specific characteristics:  
---  
**BtnFaceClr** |  Button face color.  
**BtnFocusHilight** |  Focus highlight.  
**BtnFrameClr** |  Button/Check Box/Radio Button frame color.  
**BtnHoverHilight** **** |  Mouse Over highlight.  
**CbxMarkClr** |  Check mark or 'X' in a Check Box.  
**ClrHighlight  
ClrHighlightText** |  Sets the background and text colors used to display currently selected items from a List Box or Drop Box and display the background and text in a Multi-Line when it has focus. If setting focus on the Multi-Line, selects all of the text. If selecting a portion of the inputted text for Copy, Cut, Delete or Paste functions, then the color of the selected text will be displayed in the standard Windows color for selected text. _(added in PxPlus 2017)_  
**ClrPlusZ_SB_Back** |  Background for any 'SB' data. (_Default:_ Light Gray button face color) _(added in PxPlus 2022 Update 1)_  
**ClrPlusZ_SF_Back** |  Background for any 'SF' data. (_Default:_ White) _(added in PxPlus 2022 Update 1)_  
**ClrPlusZ_Text** |  Text (_Default:_ Black) _(added in PxPlus 2022 Update 1)_  
**ClrToolBar** |  Background color for the tool bar. _(added in PxPlus v9)_  
**DrpBtnBackClr** |  Background color of the Drop Box button. _(added in PxPlus 2024)_  
**DrpBtnDisableBackClr** |  Background color of the Drop Box button when the Drop Box is disabled. _(added in PxPlus 2024)_  
**DrpBtnHoverBackClr** |  Background color of the Drop Box button while hovering over it. Defaults to the Windows hover color if no drop button colors are set; otherwise, it defaults to the drop button background color but is 25% lighter. _(added in PxPlus 2024)_  
**DrpBtnHoverTickClr** |  Color of the down arrow/tick on the Drop Box button while hovering over it. Defaults to the Windows tick color if no drop button colors are set; otherwise, it defaults to the drop button tick color but is 25% lighter. _(added in PxPlus 2024)_  
**DrpBtnTickClr** |  Color of the down arrow/tick on the Drop Box button. _(added in PxPlus 2024)_  
**FrameDarkClr** |  Color of shadow line drawn by **['FRAME'](frame.md)** mnemonic. (_Default_ : Dark Gray) _(added in PxPlus v11)_  
**FrameLiteClr** |  Color of highlight line drawn by **['FRAME'](frame.md)** mnemonic. (_Default_ : Light Gray) _(added in PxPlus v11)_  
**FrameTextClr** |  Color of text header used by the **['FRAME'](frame.md)** mnemonic. _(added in PxPlus v11)_  
**RbtMarkClr** |  Ball within a Radio Button.  
**StdFocusBackClr** |  Sets the background colors used to display currently selected items from a List Box or Drop Box and display the background color in a Multi-Line when the control has focus. _(added in PxPlus 2018)_  
**StdFocusTextClr** |  Sets the text colors used to display currently selected items from a List Box or Drop Box and display the text in a Multi-Line when the control has focus. _(added in PxPlus 2018)_  
**StdGridLineClr** |  Sets the standard/default line color for all subsequent grids. (_Default_ is RGB: 220,220,220.) _(added in PxPlus 2020)_  
**StdLvueHotlinkClr** |  **_(Report View Only)_** Used to define the default hotlink column color for List Views. _(added in PxPlus 2018)_  
**StdLvueHoverBackClr** |  **_(Report View Only)_** Used to specify a system-wide background hover color for all List Views. _(added in PxPlus 2018)_  
**StdLvueHoverTextClr** |  **_(Report View Only)_** Used to define the text color when the mouse is over a row in a List View. _(added in PxPlus 2018)_  
**StdLvueLineClr** |  **_(Report View Only)_** Sets the standard/default line color for all subsequent report style List Views. (_Default_ is RGB: 220,220,220.) _(added in PxPlus 2020)_  
**StdRowHilight1** |  Color to be used as the background of alternate rows in a List Box or Grid. _(added in PxPlus v11)_  
**StdRowHilight2** |  Color to be used as the second background of alternate rows in a List Box or Grid. _(added in PxPlus v11)_  
**TipArrowColor** |  Used by HTML tips to define the color of the tip arrowhead _and_ the underline below the tip title. (_Default:_ Dark Red) For information on HTML tips, see **[Defining an Info Tip](../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Defining%20an%20Info%20Tip.md)**. _(added in PxPlus 2016)_  
**TipColor**  
 _  
or_ **TipColour** |  Used to define the color for non-HTML tips. Valid formats for defining a color include predefined system color names (e.g. LightRed), RGB values, HSL values, Hex color codes, color blending, and dynamic color lightening. For information on these formats, see **[Color Properties](../control_object_properties/colour_properties.md)**. Setting this option sets the **['TC'](../parameters/tc.md)** system parameter to -3. If 'TC' is set to -3 but the **TipColor** (or **TipColour**) setting is not defined, the default Windows color will be used. _(added in PxPlus 2021)_  
The _value$_ may be assigned as color names. |  |  Black |  |  White |  |  DarkGray |  |  LightGray |   
---|---|---|---|---|---|---|---  
LightRed |  |  LightMagenta |  |  DarkRed |  |  DarkMagenta |   
LightGreen |  |  LightCyan |  |  DarkGreen |  |  DarkCyan |   
LightBlue |  |  LightYellow |  |  DarkBlue |  |  DarkYellow |   
  
or via RGB code (i.e. RGB:_n_  _n_ _n**where** n = _0 - 255) as in:  
  
print (0)'option'("BtnNormMidClr","RGB:192,192,192"),  
  
**Item Shading**** _  
_**  
The following _keyword$_ values set shading for specific characteristics:  
**BtnDownBtmClr** |  Colour for blend at the bottom of pushed button.  
**BtnDownBtmPct** |  Lightness applied to face at the bottom of pushed button.  
**BtnDownMidClr** |  Colour for blend at in middle of pushed button.  
**BtnDownMiddle** |  Mid-point percentage from the top of pushed button.  
**BtnDownMidPct** |  Lightness applied to face in middle of pushed button.  
**BtnDownTopClr** |  Colour for blend at the top of pushed button.  
**BtnDownTopPct** |  Lightness applied to face at the top of pushed button.  
**BtnNormBtmClr** |  Colour for blend at the bottom of normal button.  
**BtnNormBtmPct** |  Lightness applied to face at the bottom of normal button.  
**BtnNormMidClr** |  Colour for blend at in middle of normal button.  
**BtnNormMiddle** |  Mid-point percentage from the top of normal button.  
**BtnNormMidPct** |  Lightness applied to face in middle of normal button.  
**BtnNormTopClr** |  Colour for blend at the top of normal button.  
**BtnNormTopPct** |  Lightness applied to face at the top of normal button.  
**ClrAutoCompBack** |  Background colour to be used for text in auto complete List Boxes. _(added in PxPlus v9.00, build 9200)_  
**ClrAutoCompText** |  Text colour to be used for text in auto complete List Boxes. _(added in PxPlus v9.00, build 9200)_  
**ClrDisabledBack** |  Background colour to be used for text in disabled List Boxes, Multi-Lines, Radio Button text and Check Boxes. _(added in PxPlus v9.00, build 9200)_  
**ClrDisabledText** |  Text colour to be used for text in disabled List Boxes, Multi-Lines, Radio Button text and Check Boxes. _(added in PxPlus v9.00, build 9200)_  
**CtlFrameClr** |  Colour of lines in a frame.  
The _value$_ must be defined as a numeric string, either from 0 to 100 (for colour indexes) or -100 to 100 (for percentages) depending on the associated item.  
  
**_Example:_**

> print (0)'option'("BtnDownBtmPct","-75")  
  
**Icons**** _  
_  
'OPTION'** can be used to control which icon, if any, is to be used within the upper left corner of a window/dialogue:  
**Icon** |  Set the icon for current and subsequent windows.  
**WdwIcon** |  Set the icon for the current window only.  
The _value$_ assigned may be the path and name of the image _.icofile_ or a full icon specification. If it is null " ", the icon is removed from the current window. If it is an ***** (_asterisk_), the default icon is displayed for the window. **_Example:_**

> print 'dialogue'(1,1,80,25,"My Window",'CS',opt="i")  
>  print 'option'("WDWICON","C:\Windows\System32\Shell32.dll@137%32")  
>  print 'option'("WDWICON","")  
>  print 'option'("WDWICON","*")  
  
**Fonts**  
  
The following _keyword$_ values can be used to change various text plane and graphic fonts:  
**CB_RB_TextFont** |  Controls the font to use for Radio Button and Check Box text. Setting to "1" causes the system to display text using fixed text plane font. _Default_ is to use the graphical font ("0").  
**Font** |  Sets the current window's text plane font.  
**GraphicFont** |  Sets the current window's default graphic font.  
**StdFont** |  Sets the session's default text plane font.  
**StdGraphicFont** |  Sets the session's default graphic font. If set, this must be prior to drawing any graphical user interface controls.  
The _value$_ indicates the current font specification. See [**'FONT'**](font.md) mnemonic for specification. If the numeric font size specified in _value$_ is negative, then it provides the logical font height, not the point size.  
**Colour Index**** _  
_**  
The **'OPTION'** mnemonic can be used to manually set the colour index (Colour16 to Colour254) to specific RGB values:  
**Color** _nnn_  
  
 _or_**Colour** _nnn_ |  Sets color number _nnn_ _._  
While the colour index allows numbers 0 - 254, the first 16 are predefined by the system (0 - 15). The remaining colours must be assigned in order without skipping (i.e. Colour16 then Colour17 then Colour18, etc.). The _value$_ assigned may be any RGB code (RGB:_n_  _n_ _n**where** n = _0 - 255); e.g. A null " ", either removes the assigned number from the table or resets it to the default colour (as predefined by PxPlus). **_Example:_** |  print 'option'("Colour64","") |  ! Clear out index 64 for re-use  
---|---  
print 'option'("Colour7","") |  ! Reset to the default  
  
#### **Note:  
** It is easier to simply use the colour once with the **['COLOUR'](colour.md)** mnemonic, which automatically adds that colour to the internal colour table.  
  
**General Windows/System-Wide Options**  
  
These options are generic to windows processing and can be applied to channel 0:  
**4D_ML_Adjust** |  Setting this option to a non-zero numeric value overrides the standard Multi-Line height adjustment to the value specified (in pixels). Setting the value to "0" restores the standard adjustment.  
**AlwaysOnTop** |  This option is used to control locking the current window on top of all other windows. If _value$_ is set to "1", then the window is locked on top; else if "0", then the window is released from being locked on top.

#### **Note:**  
Only one window should be locked 'OnTop' as the system will not be able to determine which window is the top most in case the windows overlap.  
  
**Animate** |  Allows the application to animate the window generally during the transition from visible to hidden or vice-versa. Possible values are: |  "FADE" 2 |  The window will fade from solid to transparent (or vice versa).  
---|---  
"UP" 2 |  The window will collapse/expand upward.  
"DOWN" 2 |  The window will collapse/expand downward.  
"LEFT" 2 |  The window will collapse/expand right-to-left.  
"RIGHT" 2 |  The window will collapse/expand left-to-right.  
"CENTER" 2 |  The window will collapse into/expand out from the center.  
"SHAKE" |  The window will shake left-to-right but remain visible.  
  
#### **Note:**  
To get the desired results, the options that affect screen movement (UP, DOWN, LEFT, RIGHT and CENTER) should be avoided when using windows that have captions and thick frames. Change the window to use either a thin frame or no frame before using these options.  
  
The FADE and SHAKE options can be used with any window, regardless of the frame style.

** 2  These option words can be suffixed by "IN" or "OUT" (e.g. "FADEIN", "FADEOUT") to force the specified windows transition. If "IN" is specified, the window will be forced visible. If "OUT" is specified, the window will be forced hidden. Normally, if no suffix is provided (such as "FADE"), the window changes from visible to hidden or vice-versa, depending on its current state.**  
  
**AutoCompleteLimit** |  Sets the AutoComplete limit. Issuing PRINT 'OPTION'("AutoCompleteLimit", "_nnn_ ") or SETDEV (0) SET "AutoCompleteLimit" TO "_nnn_ " can be used to set the AutoComplete limit.  
**AutoConvertUtf8** |  Setting this option to "1" (or "Y") in conjunction with setting the **['U8'](../parameters/u8.md)** system parameter will internally convert UTF-8 data to its corresponding single byte character based on the current text plane character set to allow for its display. This conversion will be done on any standard PRINT to the text plane and on all user input of extended characters (e.g. accented characters, high-order ASCII, etc.). Where there is no corresponding single byte character for a UTF-8 code, a **?** (_question_ _mark_) will be output. If the 'U8' system parameter is **_not_** set, this option is ignored. _(added in PxPlus 2014)_  
**AutoSpellCheck** |  This option is used to set automatic spell checking for Multi-Line controls. Possible values are: |  "YES" |  _(Default)_ Spell checking is automatically applied to Multi-Line controls that allow multiple lines of input (greater than 1.5 lines high).  
---|---  
"ALL" |  Spell checking is automatically applied to Multi-Line controls that allow multiple lines of input, as well as all Multi-Line controls that allow for 12 or more characters of input and do **_not_** have a format mask. Controls that are marked _Uppercase_ only or are used for Arabic (right to left) input are **_not_** spell checked.  
"NO" |  Spell checking is **_not_** automatically applied to Multi-Line controls. Only Multi-Line controls with the "S" option specified (see **[MULTI-LINE](../directives/multi_line.htm#Mark4)** directive) will have spell checking enabled.  
  
_(added in PxPlus 2019)_  
  
**BlinkTime** |  Controls the rate at which data will blink on a graphical device. The value provided defines the rate at which the data appears or disappears in terms of milliseconds (i.e. "500" indicated 500ms or 1/2 a second). A rate of "0" terminates blinking. _Default_ rate is "500" milliseconds. _(added in PxPlus v8.11, build 9182)_  
**BrowserDebug** |  Setting this option to "1", "Y" or "y" causes the browser developer console to display in a popup window for any subsequently created **[*BROWSER](../utilities/browser.md)** controls. The browser developer console makes it possible to examine the code and properties of the Web page loaded by the *BROWSER control and debug any errors. _(added in PxPlus 2021)_  
**BrowserLang** |  Defines the language code that controls the embedded Chromium browser language. See **[Language Codes](../utilities/browser.htm#Mark1)** for a list of supported languages and codes. The value of **BrowserLang** is only read the first time per process that an embedded Chromium browser is created. This will override the **BrowserLang** INI setting. Defaults to user OS language unless **BrowserLang** was set in the INI file. See **[INI Contents](../PxPlus%20Installation%20and%20Configuration/Customizing%20PxPlus/INI%20Contents.htm#Mark6)**. _(added in PxPlus 2019)_  
**CaptureClientOnly** |  Controls the SAVE CONTROL output. If set to "1", only the client area (interior) of a window/control will be saved; otherwise, the border and caption for the window/control will be included in the output. _Default_ setting is **_Off_** ("0"). _(added in PxPlus v11.50)_  
**CbxImage** |  **_(Windows Only)_** Defines the pathname to the image used to create Check Boxes on the screen. See **[Customizing Radio Buttons and Check Boxes](../appendix/customizing_rb_and_cb.md)**. _(added in PxPlus 2017)_  
**CbxMarkSize** |  **_(Windows Only)_** If not set, the default size of the Check Box image is based on the height of one line. If set, the size of the Check Box image will be based on the value of CbxMarkSize (in pixels) **_or_** the height of the Check Box control, _whichever is smaller._ **_Example:_**

> See **[Customizing Radio Buttons and Check Boxes](../appendix/customizing_rb_and_cb.md)**. _(added in PxPlus 2017)_  
**CenterWdw** |  Center the current window (DIALOGUE) on screen. This mnemonic takes into account multiple monitors and places the window in the center of the nearest monitor currently displaying the window.  
**ClrSelectIgnore** |  Setting this option controls the colors that are used for displaying a selected line in a list box/list view.  
  
If set to "1" _(Default)_ , the Windows default display colors (white characters on blue) are used.  
If set to "0", the colors specified for the list box/list view contents are used.  
  
To set the option, issue either of the following:  
  
PRINT 'OPTION'("ClrSelectIgnore","1") ! (or "0" to turn **_Off_**)  
SETDEV (0) SET "ClrSelectIgnore" TO "1"  
**Copy_1Line_NoCR** |  This option controls the system built-in text Copy functionality. When set to "1" or "YES" and the text being copied consists of only one line, no trailing line feed will be appended to the text. In all cases, copying multiple lines of text will append a trailing line feed. _(added in PxPlus 2021 Update 1)_  
**DeleteOnClose** |  Setting this option to "1" will cause the system to attempt to delete the associated file when closed. _(added in PxPlus 2014)_  
**DoubleBfr** |  Controls the double buffering of screen updates on Windows. If set to "1", screen updates are first done off-screen then copied on-screen in a single update thereby reducing flickering. _Default_ setting is **_Off_** (0). Affects current window **_only_**. Set this option after a window is created for each window on which you want double buffering to apply. _(added in PxPlus v10)_  
**Flash** |  Controls flashing of the frame for the current window and the task bar. |  "ON" |  Frame and task bar will flash until turned OFF by the application.  
---|---  
"OFF" |  Frame and task bar will stop flashing (return to normal display).  
"" |  Frame and task bar will flash at least once and then continue to flash until the application is made 'active' (brought to the forefront of user session).  
  
_(added in PxPlus v8.11, build 9182)_  
  
**Frame** |  This option is used to control the type of frame/border for the current window. Possible values are: |  "NONE" |  The window has no border/frame.  
---|---  
"CAPTION" |  The window has a border and caption line.  
"THICK" |  The window has a thick border.  
"THIN" |  The window has a thin border (usually a single pixel wide black line).  
  
_(added in PxPlus v7.00, build 9163.1)_  
  
**GrayDisabledBmp** |  This option is used to control the display of images on disabled buttons. If set to **_Off_** ("0" or "N"), the images on disabled buttons will display only as shadows. This means that only the shadow left by the outline of the image will be seen. If set to **_On_** ("1" or "Y"), the images on disabled buttons will be converted to gray scale. _Default_ setting is "0" or "N" (image displays as a shadow). **_Example:_** _(added in PxPlus 2017)_  
**GridAlignLines** | 

#### **Note:**  
This option applies **_only_** to Grids created _after_ setting the option and **_only_** to the **_Button_** family of **[Cell Types](../directives/grid.htm#Mark8)**: _Button, FlatButton, FlatButtonInOnly, TextButton, FlatTextButton_ and _FlatTextButtonInOnly_.

When **_enabled_** (set to "1" or "Y"), any Multi-Line text (lines separated by line feed $0a$) in a Grid **_Button-style cell_** will have each line of text individually aligned as per the **['Align$](../properties/align_.md)** property. If **_disabled_** (set to "0" or "N"), the lines will be treated as a block of text, and that full block will be aligned as per the **['Align$](../properties/align_.md)** property. This option was added in PxPlus 2017 with a _default_ setting of **_enabled_**. Prior versions of PxPlus did **_not_** have this setting, and the Grid output was as if the option was disabled. _(added in PxPlus 2017)_  
**GridMLVersion** |  This option is used to set the behavior of the **Enter** key and the **Up/Down** arrow keys when editing a Grid cell with lines of Multi-Line text. When set to "1" _(Default)_ , pressing **Enter** or **Ctrl - Enter** creates a new line, and the **Up/Down** arrow keys are used to move up/down between the lines of text in the cell. If set to "0", pressing **Ctrl - Enter** creates a new line, the **Enter** key enters/exits the cell, and the **Up/Down** arrow keys are used to move to other cells. _(added in PxPlus 2019)_  
**HideTips** |  This option is used to control the display of Floating tips in the system. When set to "1", tips will not be displayed. Setting it to a null value or "0" (_Default_) enables tips.  
**HoverCtl** |  This option is used to define a CTL value that the system will generate when the mouse hovers over the text plane in the current windows. Passing a null value or "0" disables this option.  
**Invalid_Bmp** |  This option is used to set the name of a Bitmap/Image file to be used whenever the selected Bitmap is not available for display. Use this option to avoid missing images from your application. _(added in PxPlus v7.00, build 9163.1)_  
**Keyboard** |  This option can be sent to channel 0 on a Windows (or WindX) session to change the current keyboard language. _(added in PxPlus v8.11, build 9182)_  
**LCL_MTime  
LCL_ATime  
LCL_CTime**   
(_if file system supports_) |  Setting this option will change the file creation, modified, and last access time based on the value provided in the following format: YYYY-MM-DD hh:mm:ss The date/time returned has be converted to local time on the system thus for files on a shared server the value may differ based on the current time zone. _(added in PxPlus v10.10)_  
**LockOverDisable** |  When this option is set ("1" or "Y"), Multi_Line input fields that are **_both_** locked **_and_** disabled will display as locked (as opposed to disabled). _(added in PxPlus 2023 Update 1)_  
**LogFile** |  This option is used to set the system log file and can be used to override the setting in the INI file. The pathname can include **%Y** , **%M** and/or **%D** , which will each be replaced by the current year, month and day respectively (2 digits). When defining the log file, you can specify the maximum file size (in megabytes) that you want the log file to grow. See **[PxPlus Log File](../PxPlus%20User%20Guide/Development%20Tools/Error%20Handling%20and%20Debugging/Additional%20Debugging%20Procedures%20and%20Facilities.htm#logfile)**. _(added in PxPlus v10)_  
**MaskColour****  
**  
_or_ **MaskColor** |  Sets the colour to be considered completely transparent within the current window. Note that clicking the mouse on a fully transparent section of the window passes the mouse click to the window below. Setting this value along with removing the window frame is used to create windows of different shapes. _(added in PxPlus v7.00, build 9163.1)_  
**MessageBar** |  This option is used to set the height (in pixels expressed as a string) for the message/status bar at the bottom of the window.  
**ML_Overlap_Adjust** |  Setting this option to "1" (_Default_) enables an automatic adjustment of the size/position of overlapping Multi-Line controls. When enabled, the system will adjust Multi-Lines so that neither the field nor its border overlaps any adjacent Multi-Line.  
**MouseWheel** |  This option is used to adjust the MouseWheel increment value. This is the count of logical Up/Down arrow keys that the system will emulate when the wheel is used.  
**Msg_Is_Tip** |  This option tells the system that when the mouse hovers over a control, the MSG= value should be used as a TIP when no TIP is assigned. This avoids having to set both the TIP and MSG properties for all the controls. _(added in PxPlus v7.00, build 9163.1)_  
**PasteFilter** |  This option sets the **[PasteFilter](../properties/pastefilter.md)** property for Multi-Line controls. Possible values are: |  "YES" |  Applies filter to single line inputs, **_not_** multiple line inputs.  
---|---  
"ALL" |  Applies filter to **_both_** single and multiple line inputs.  
"NO" |  Does not apply filter.  
  
Defaults to "YES" except for Multi-Lines that are >1 line high and accept multiple lines of input, which default to "NO".

_(added in PxPlus 2020 Update 1)  
__("ALL" option was added in PxPlus 2020 Update 2.)_  
  
**RbtImage** |  **_(Windows Only)_** Defines the pathname to the image used to create Radio Buttons on the screen. See **[Customizing Radio Buttons and Check Boxes](../appendix/customizing_rb_and_cb.md)**. _(added in PxPlus 2017)_  
**RbtMarkSize** |  **_(Windows Only)_** If not set, the default size of the Radio Button image is based on the height of one line. If set, the size of the Radio Button image will be based on the value of RbtMarkSize (in pixels) **_or_** the height of the Radio Button control, _whichever is smaller._ **_Example:_**

> See **[Customizing Radio Buttons and Check Boxes](../appendix/customizing_rb_and_cb.md)**. _(added in PxPlus 2017)_  
**ResourceLib** |  Sets or changes the current resource library/libraries. As of PxPlus V11, the resource library value may contain multiple semi-colon (or comma) separated file names up to a maximum of 10.  
**RMouseCopy** |  This option enables right mouse click Copy/Paste functionality whenever focus is on the window and not on a control. It is primarily used when running older Text mode applications and provides the ability to copy/paste text from the screen much like a terminal emulator. The value can be set "1" to enable the option or "0" (_Default_) to disable it. Its setting will be automatically cascaded to subsequent windows. _(added in PxPlus v8.11, build 9182)_  
**Save_Msg_Bfr** |  This option is used to control the return of error messages generated by a SAVE command. If initially set to non-blank (by the **[SETDEV](../directives/setdev_set.md)** directive or **'OPTION'** mnemonic) and a SAVE command is issued, this value will return a list of errors that occurred during the SAVE function.  
**SignalCaptionChg** |  Setting this option causes a specified CTL value to be generated when the caption on the current window is changed. Any numeric value may be used as the CTL value, but -1109 is reserved by NOMADS. The setting applies only to the current window. Setting the item to null will turn this option off. _(added in PxPlus 2017)_  
**SortImageList** |  This option controls the sorting of all **['IMAGE'](image.md)** graphics groups by name. This sort order is used by the **[NOMADS Panel Designer](../NOMADS%20Graphical%20Application/Panel%20Designer/Introduction.md)** to determine the order in which the graphics are drawn on a window. When set to "1", the 'IMAGE' groups are sorted and drawn in alphabetical order by name on the current window. When a new 'IMAGE' group is created, it is inserted into the list of 'IMAGE' groups alphabetically. When set to "0" _(Default)_ , the 'IMAGE' groups are drawn in the order they are created with the default group first followed by all subsequent groups in the order they were created. _(added in PxPlus 2014.01 Update 0005)_  
**StdGridHideButtons** |  Sets the default **['HideButtons](../properties/hidebuttons.md)** property for all subsequent grids. _(added in PxPlus 2020)_  
**StdGridQueryImg** |  This option defines the image to use in the query/lookup buttons of a grid. The value of the setting is an image pathname or internal image (!xxxxxx). An invalid value will result in the original ellipsis (...) being used. This value is only referenced when a grid is first created; therefore, changing the value will not affect any grid already in existence. _(added in PxPlus 2021)_  
**StdSortOrder** |  The value provided defines the default column sort settings used by the List_Box (Report View) and Grid. Possible values are: |  Null |  Uses StdSortOrder setting (if StdSortOrder not set, uses raw sort).  
---|---  
R |  Raw binary sort.  
C |  Case insensitive sort.  
A |  Sort ignores accents.  
N |  Null values at end of sort.  
CA |  Ignore case and accents.  
CN |  Ignore case/Null values last.  
AN |  Ignore accents/Null values last.  
CAN |  Ignore case and accents/Null values last.  
  
_(added in PxPlus v11.00 and upgraded to a string value in PxPlus v11.50)_  
  
**Suppress_FF** |  Sets the file 'FF' suppression settings to one of the following values: |  "NO" |  No 'FF' suppression.  _(Default)_  
---|---  
"ALL" |  Suppresses any 'FF' mnemonic if it will result in a blank page being produced. This setting will **_not_** suppress an 'FF' mnemonic at the start of a report where a leading 'FF' is often used to assure output starts at the top of a page.

#### **Note:**  
PDF and WINPRT output will suppress a leading 'FF', as these by definition always start a report on a new page.  
  
"FIRST" |  Suppresses an 'FF' mnemonic if it is the first output to the channel. Only the first 'FF' is suppressed.  
"LAST" |  Suppresses a trailing 'FF' mnemonic that applications often send to eject the paper at the end of a report. It is always enabled on output to PDF files.  
"BOTH" |  A combination of "FIRST" and "LAST".  
  
#### **Note:  
** Setting channel 0 sets the FF suppression option for all files subsequently opened.

_(added in PxPlus v9.00, build 9200)_  
  
**SysMenu#** |  This option can be used to add a menu item to the system drop-down menu, which displays when clicking the icon in the upper left corner of the PxPlus launch window or when using Alt + Spacebar. The contents of _value$_ would be "SysMenu#" where # can be a range between 1 to 10, followed by "Menu Text=###" for displaying the text for the menu item. The "Menu Text" can contain an **&**  _(ampersand)_ preceding any character to be used as a "hot key" to select the menu item when the menu is displayed. When the menu item is selected, the CTL value specified by ### will be generated. To set a Menu #2, you would issue:  
  
PRINT 'OPTION'("SysMenu2","Menu Text=###")  
  
**_or_**  
  
SETDEV (0) SET "SysMenu2" TO "Menu Text=###" To remove an item from the menu, set the item to null: PRINT 'OPTION'("SysMenu2","") **_Examples:  
_**  
SysMenu1=&Sleepy=1001  
SysMenu2=&Dopey=1002  
SysMenu3=&Bashful=1003  
SysMenu4=D&oc=1004 If no number is specified (i.e. "SysMenu"), the system will set the first unused slot in the system menu. To retrieve the value, use the **[FIN( )](../functions/fin.md)** function. _(added in PxPlus 2016)_  
**TipFont** |  Setting this option _n_ channel 0 changes the current font attributes of the tip window.  
**TipTimerCycles** |  Defines the length of time (in tenths of a second) that a tip will be displayed. _(added in PxPlus v8.30)_  
**ToolBar** |  This option is used to set the height (in pixels expressed as a string) for the toolbar.  
**Transparency** |  Percentage transparent for the current window. A value of "0" indicates non-transparent, "100" would be completely transparent. Can only be applied to TOP level windows.  
**UTC_MTime  
UTC_ATime  
UTC_CTime**   
 _(if file system supports)_ |  Setting this option will change the file creation, modified, and last access time based on the value in the value provided consisting of UTC in seconds since Jan 1,1970. _(added in PxPlus v10.10)_  
**Utility** |  This option is used to add lines to the 'Utility' command mode menu option. The contents of _value_ $ should contain a CTL code in the range of between 3900 and 3999 followed by an **=**  _(equals sign)_ and then the text to display in the menu. When the menu item is selected, the CTL value specified will be sent to the system command processor (actual value will be negated).  
**Window_NoAuto_Focus** |  Setting this option to "1" will avoid window frame repaints when changing focus between concurrent windows. _(added in PxPlus 2014)_  
**XYPos**   
  
_or_ **XYPos_NoChk** |  This option is used to change the position of the current window. The contents of _value_ $ would be two comma separated numbers containing the absolute pixel address (top, left) to which to move the current window. These numbers are relative to the desktop of the workstation or the current window's parent window. The **XYPos** and **XYPos_NoChk** options are identical with the exception that **XYPos** validates the location (on screen and is visible), while **XYPos_NoChk** changes the position of the window without validating the location.

#### **Note:**  
When setting a position, the system will validate the location indicated is visible (if **XYPos** is used); otherwise, the window will be centered on the closest monitor to the position supplied.

_(added in PxPlus v7.00, build 9163.1)_  
**XYWdw** |  This option is used to change the position of the current window. The contents of _value_ $ would be four comma separated numbers containing the absolute pixel address (top, left, bottom, and right in pixels) to move/resize the current window to. This is slightly different to XYPOS in that the information pertains to the Child windows as opposed to the outer/dialog window. _(added in PxPlus v8.11, build 9182)_  
**ZOrder** |  If _value$_ is "1", the current window will be brought to the top of the Z-Order when input focus switches to the window. "0" indicates that the Z-Order of the window will not be changed when focus switches to the window. _(added in PxPlus v8.11, build 9182)_  
**Miscellaneous Options**  
**DateFmt** |  This option allows you to change/set the Date format to be used on the specified channel open to an **[ODB](../command_tags/odb.md)**, **[MySql](../command_tags/mysql.md)**, **[OCI](../command_tags/oci.md)**, **[DB2](../command_tags/db2.md)** or **[ADO](../command_tags/ADO.md)** database connection. If **DateFmt** is set to null, the system will use the format specific to the type of database being used (generally YYYY-MM-DD hh:mm:ss.hhh). **_Example:_** PRINT (_channel_), 'OPTION'("DATEFMT","YYYYMMDD") If used with a native file, this will result in Error #32: Invalid or redundant Input/Output option. _(added in PxPlus 2023)_  
  
**Indicates this option can only be used with channel 0 under Windows (or WindX)**

**_*WINPRT*_**__**Options**  
---  
**Orientation** |  This option is used to control the orientation of the **next** page to be printed. The orientation of the current page cannot be changed. Possible values are "LANDSCAPE" or "PORTRAIT" (only the first letter is checked).  
**Source** |  This option controls the paper source for the **next** page to be printed. It will take effect on the next **['FF'](ff.md)** mnemonic. The parameter specified must be the numeric value associated with the various paper trays for the printer. Use the [**FIN(_nnn_ , "SOURCELIST")**](../functions/fin.htm#sourcelist) function to get a list of possible values.  
**_TCP Options_**  
**Secure** |  Sets the current connection on TCP/IP from unsecure to secure. The option, if specified, can contain the pathname to the security certificate to use. Once a connection is set to SECURE, it cannot be set unsecured.  
**TLS** |  This option is used to force the current secure connection on TCP/IP to only use a specific TLS protocol version (if the OS supported it) as opposed to the default mode of supporting SSL v2, v3, TLS1, 1.1, 1.2 and 1.3 (negotiated with the other end). Possible values are: |  "1" |  TLS1  
---|---  
"1.1" |  TLS1.1  
"1.2" |  TLS1.2  
"1.3" |  TLS1.3  
"" |  Allow SSL v2, v3, TLS1, 1.1, 1.2 and 1.3 (negotiated with the other end)  
  
**_Example:_**

PRINT (_chan_)'OPTION'("TLS","1.2")

This example would make an existing secure TCP connection force the use of TLS 1.2 protocol.

_(added TLS 1.3 support in PxPlus 2020)_  
  
**_PDF Options_**  
**Bookmark** |  Set bookmark location, text and hierarchy. For information on bookmarks, see [***PDF* - PDF Print Interface**](../file_handling/~pdf~.md).  
**Special Processing PDF Options**  
  
Although these options relate to PDF processing, these options should be issued against channel 0 prior opening the PDF file.  
**PDFFactor** |  This option defines a multiplication factor to be used in computing the extra vertical space (height) to be allocated to PDF fonts. Increasing this value will result in wider spacing between lines when using the font size for line spacing. This applies only to PDF files using the Haru library. (_Default_ is 1.2.) _(added in PxPlus v9.00, build 9200)_  
**PDFFontDir** |  **_(Linux Only)_** This option can be used to change the location of the font directory when creating PDF files using true type fonts.

#### **Important Note:**  
It **_must_** be changed **_before_** the first open of a PDF file to be effective.

_(added in PxPlus v9.00, build 9200.1)_  
**PDFMargin** |  This option controls the number of thousandths of an inch to use for setting the default PDF printer margins. These will be assigned on all edges of the printed document. _Default_ is 250 (1/4 of an inch). _(added in PxPlus v9.00, build 9200)_  
  
## Debugging Functionality

Debugging functionality includes the ability to add watch values, set dynamic breakpoints, initiate program tracing, as well as the ability to transfer the contents of the debug window to the Clipboard.

This can be set on the fly using the _keyword$_ "DebugWindow", which determines the specific functionality based on the associated _value$_ settings.

**_Example:_**

> print 'option'("DebugWindow","Trace")  
>  print 'option'("DebugWindow","Host Command Open")  
>  print 'option'("DebugWindow","Watch Add x$")  
>  print 'option'("DebugWindow","Host Break Add Program=C:\Work51\email\send_email.pvx,Statement=10,Change=SMTPSERVER$")

The available DebugWindow  _value$_ settings for enhanced debugging functionality are described by category in the table below.

The Windows version of PxPlus also includes a debugging environment that can be accessed via the PxPlus icon drop-down menu by selecting _Debugging Environment_. See **[Windows Debugging Environment](../PxPlus%20User%20Guide/Development%20Tools/Error%20Handling%20and%20Debugging/Windows%20Debugging%20Environment.md)**.

**Break Window Specific** |  Break Window is used to assign logical break points for halting execution in an application. Can be used in combination with other settings. See **[Multi-Use Commands](option.htm#multi_use)**.  
---|---  
"Break" |  Activate Break window.  
**Command Window Specific** |  Command Window is used to handle all console commands without disrupting your standard screen display. Can be used in combination with other settings. See **[Multi-Use Commands](option.htm#multi_use)**.  
"Command" |  Activate Command mode window.  
"Halt" |  Simulate a Command window halt (stop program).  
"Step" |  Simulate a Command mode window step.  
**Trace Window Specific** |  Trace Window is used to trace the execution of an application. Can be used in combination with other settings. See **[Multi-Use Commands](option.htm#multi_use)**.  
**"** DebugPlus**[** with**] [** Backtrace**] [** Enable**|** Disable**]** " |  Enable/disable DebugPlus Backtrace option.  
**"** File**[** IO**] [** Operation**] [** Trace**] [** Enable**|** Disable**]** " |  Enable/disable file IO operation trace option.  
**"** File Opens**[** Enable**|** Disable**]** " |  Enable/disable trace file opens option.  
**"** File Opens**[** Failures**] [** Enable**|** Disable**]** " |  Enable/disable trace file open failures option.  
"**[** Host**]** Log**[** All**] [** Errors**] [** Enable**|** Disable**]** " |  Enable logging of errors on the host or local machine.  
"Host Trace Programs**[** Enable**|** Disable**]** " |  Enable/disable host trace programs option.  
"Show**[** Property**] [** GET**] [** Enable**|** Disable**]** " |  Enable/disable show property GET option.  
**"** Show**[** Property**] [** SET**] [** Enable**|** Disable**]** " |  Enable/disable show property SET option.  
"Size=1k" |  Set 1K program trace size.  
"Size=2k" |  Set 2K program trace size.  
"Size=8k" |  Set 8K program trace size.  
"Size=16k" |  Set 16K program trace size.  
"Size=32k" |  Set 32K program trace size.  
"Suppress**[** Program**[** Trace**[** Enable**|** Disable**]]]** " |  Enable/disable suppress program trace option.  
"Trace" |  Activate Trace window.  
**Watch Window Specific** |  Watch Window allows you to constantly monitor variables and/or expressions during program execution. Can be used in combination with other settings. See **[Multi-Use Commands](option.htm#multi_use)**.  
"Size=0" |  Select the no-data-break option.  
"Size=50" |  Select the 50-byte-data-break option.  
"Size=100" |  Select the 100-byte-data-break option.  
"Size=no" |  Select the No-data-break option.  
"Watch" |  Activate Watch Window.  
**Multi-Use Commands** |   
**"** Host**[** Break**|** Trace**|** Watch**] [** Enable**|** Disable**]** " |  Enable/disable host trace option.  
**"[** Host**] [** Break**|** Watch**]** Add "String to Add" |  Add a (pre-formatted) item to the Break|Watch window.  
**_When using the following commands, if the Debug window type is not specified, then the last window used will be utilized:_**  
"**[** Host**] [** Break**|** Command**|** Trace**|** Watch**]** Close" |  Close window option.  
"**[** Host**] [** Break**|** Command**|** Trace**|** Watch**]** Disable" |  Disable window without closing.  
"**[** Host**] [** Break**|** Trace**|** Watch**]** Clear" |  Clear window contents.  
"**[** Host**] [** Break**|** Trace**|** Watch**]** Copy" |  Copy window contents to the Clipboard.  
**Miscellaneous Debug Options** |   
PRINT 'OPTION'("Logfile", _filename$_) |  **_(Windows Only)_** Allows setting the Log File name on the fly.  
PRINT 'OPTION'("TraceWdwToLogfile", "0"**|** "1") |  Copies all information written to the Trace window to the _filename$_ specified by the "Logfile" setting. "1" enables the functionality and "0" disables it.
