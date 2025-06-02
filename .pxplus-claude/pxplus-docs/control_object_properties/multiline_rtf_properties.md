# MULTI_LINE Rich Text Word Processor Control

**MULTI_LINE Rich Text Properties**|   
---|---  
  
In addition to the **[MULTI_LINE Properties](multiline_properties.md)**, the table below lists properties that are used with **_Rich Text Format_** word processor controls. See **[MULTI_LINE Rich Text Word Processor Control](../directives/multi_rtf.md)** directive.

#### **Note:**  
Rich Text Multi-Line controls are **_not_** supported in iNomads.

Use the links in the **Property** column to access the PxPlus Help page for a selected property. The Help page may provide additional details, particularly if the property can be used to define other controls.

The **'Sel _xxxxxx_** properties can be used to change the format of the current selected text, or if no text is selected, the changes affect the current text being entered.

For a complete list of all the properties available, see **[Properties List](properties_list.md)**.

**Property** |  **Description**  
---|---  
**[Auto](../properties/auto.md)** |  When set, the control will generate a 'Change' event whenever its value changes as opposed to the default _Off_ state where the control will only generate the change event when losing focus. Possible values are: |  0 |  Only signal change when exiting the control or on special event such as double click/Enter. **_(Default)_**  
---|---  
1 |  Signal all changes to the value of the control regardless of why the change occurred.  
2 |  Signal all changes done by the user but not done by the program.  
**[BackColor$  
BackColour$](../properties/backcolor_.md)** |  Background color. For information on valid color names and color specifications, see **[Color Properties](colour_properties.md)**. (**_Default:_** "DEFAULT")  
**[Border](../properties/border.md)** |  Add border: 1 - Border; 0 - No border (**_Default:_** 1)

#### **Note:**  
Applicable only when using Windows XP or Windows 7 style controls.  
  
**[DisableBackColor$  
DisableBackColour$](../properties/disablebackcolor.md)** |  Background color when the control is disabled. For information on valid color names and color specifications, see **[Color Properties](colour_properties.md)**. _( RTF_ _Multi-Line support was added in PxPlus 2024.)_  
**[DisableTextColor$  
DisableTextColour$](../properties/disabletextcolor.md)** |  Foreground text color when the control is disabled. For information on valid color names and color specifications, see **[Color Properties](colour_properties.md)**. _(RTF Multi-Line support was added in PxPlus 2024.)_  
**[EnterMode](../properties/entermode.md)** |  This property is used to define how the ENTER key will be processed with the control. For the multi-line, the EnterMode property defines whether the ENTER key is to be allowed within the control or considered a TAB to exit the control. When 0 (zero), it indicates that the ENTER key will not be considered as a TAB; thus, depending on the type of multi-line, it will signal the input complete for a 1-line field or insert a line feed on a control with multiple input lines. (**_Default for Multi-line:_** The default setting reflects the **['+E'](../mnemonics/+e.md)** mnemonic setting.)  
**[Eom$](../properties/eom_.md)** |  Last change terminator. See also **[MULTI_LINE](../directives/multi_line.md)** directive.  
**[FindText](../properties/findtext.md)** |  Controls RTF word processor Find option: This property controls access to the **Find** text dialogue box within the RTF word processor control. When this control is set to 1, the user can press CTRL-F to initiate a find within the control. Setting the control to 0 disables CTRL-F. (**_Default:_** 1 - CTRL-F enabled) This property also controls the F3 key for Find Next. If desired, the property can be set to 2, which will cause the **Find** dialogue box to be initiated under program control.

#### **Note:**  
The Find logic within the system uses a common buffer for the Find string throughout the session. This means that when the **Find** dialog is initiated, it will default to the string last found within the same session.  
  
**[Focus](../properties/focus.md)** |  Focus indicator: 1 = Control has focus (**_Default:_** 0)  
**[FrameColor$  
FrameColour$](../properties/framecolor_.md)** |  Color of the frame/border around the control. For information on valid color names and color specifications, see **[Color Properties](colour_properties.md)**. _(The FrameColor$ property was added in PxPlus 2024.)_  
**[HoverBackColor$  
HoverBackColour$](../properties/hoverbackcolor_.md)** |  Background color when mouse is over the control. For information on valid color names and color specifications, see **[Color Properties](colour_properties.md)**. _(RTF Multi-line support was added in PxPlus 2025.)_  
**[HoverBorderColor$  
HoverBorderColour$](../properties/hoverbordercolor_.md)** |  Color of border when mouse is over the control. For information on valid color names and color specifications, see **[Color Properties](colour_properties.md)**. _(RTF Multi-line support was added in PxPlus 2025.)_  
**[HoverTextColor$  
HoverTextColour$](../properties/hovertextcolor_.md)** |  Foreground text color when mouse is over the control. For information on valid color names and color specifications, see **[Color Properties](colour_properties.md)**. _(RTF Multi-line support was added in PxPlus 2025.)_  
**[Len](../properties/len.md)** |  Input length of line.  
**[Lock](../properties/lock.md)** |  Lock status: Possible values are: |  0 |  Unlock **_(Default)_**  
---|---  
1 |  Lock  
2 |  Lock (cell contents can be selected/copied) **_(Grid Only)_**  
-1 |  Permanently locked **_(Multi-Line Only)_**  
  
_(The Lock status of 2 was added in PxPlus 2019.)_  
  
**[LockBackColor$  
LockBackColour$](../properties/lockbackclr_.md)** |  Background color when the control is locked. For information on valid color names and color specifications, see **[Color Properties](colour_properties.md)**. _(The LockBackColor$ property was added in PxPlus 2024.)_  
**[LockTextColor$  
LockTextColour$](../properties/locktextclr_.md)** |  Foreground text color when the control is locked. For information on valid color names and color specifications, see **[Color Properties](colour_properties.md)**. _(The LockTextColor$ property was added in PxPlus 2024.)_  
**[MenuCtl](../properties/menuctl.md)** |  This property reports/sets the CTL value to generate when an object is selected on a right-click of the mouse.  
**[Msg$](../properties/msg_.md)** |  Message line text for the control.  
**[OnFocusCtl](../properties/onfocusctl.md)** |  On Focus CTL event: 0 is returned if no On Focus CTL value is set up for the control.  
**[SelAlign$](../properties/selalign.md)** |  RTF word processor Alignment: This property controls the font for the currently selected text in a RTF word processor Multi_Line style control. If no text is currently selected, the current text entry will be affected. Paragraph alignment: "R"ight, "L"eft, "C"entered. (**_Default:_** The default setting is the control font.)  
**[SelBold](../properties/selbold.md)** |  RTF word processor BOLD setting: This property reflects whether the text will be bold for the currently selected text in a RTF word processor Multi_Line style control. If no text is currently selected, the current text entry will be affected. 0 if not bold, 1 if bold. (**_Default:_** The default setting is the control font.)  
**[SelBulletno](../properties/selbulletno.md)** |  RTF word processor bullet number setting: This property reflects the bullet number for the current text in a RTF word processor Multi_Line style control. Changing this number will change the current bullet sequence number and those following. (**_Default:_** The default setting starts at 1 and increments by 1 for each paragraph.)  
**[SelBullets](../properties/selbullets.md)** |  RTF word processor bullets setting: This property reflects whether the text will be bulleted for the currently selected text in a RTF word processor Multi_Line style control. (0 = None, 1 = Yes, 2 = Numbers)  
**[SelBulletStyle](../properties/selbulletstyle.md)** |  RTF word processor bullet style setting: This property reflects the bullet style for the current text in a RTF word processor Multi_Line style control.  
**[SelChooseFont](../properties/selchoosefont.md)** |  RTF word processor Font selector: This property controls access to the **Font** selection dialogue box within the RTF word processor Multi_Line style control. When this control is set to 1, the user can press Ctrl-Shift-Insert to initiate a Font selector within the control. Setting the control to 0 disables Ctrl-Shift-Insert. If desired, the property can be set to 2, which will cause the **Font** selection dialogue box to be initiated under program control. (**_Default:_** The default setting is 1 - Ctrl-Shift-Insert enabled).  
**[SelectLength](../properties/selectlength.md)** |  Length of selected item: This reports the number of characters currently highlighted. This allows for cut, copy and paste within a graphical user interface input region.  
**[SelectOffset](../properties/selectoffset.md)** |  This property indicates where the highlight begins within the data or, if nothing is highlighted, the current cursor location. This allows for cut, copy and paste within a graphical user interface input region.  
**[SelectText$](../properties/selecttext_.md)** |  Text contained within the highlight: This allows for cut, copy and paste within a graphical user interface input region. See [**Multiple Selections**](multipleselect.md).  
**[SelEmboss](../properties/selemboss.md)** |  RTF word processor Emboss setting: This property reflects whether the text will be Embossed for the currently selected text in a RTF word processor Multi_Line style control. If no text is currently selected, the current text entry will be affected. 0 if not Embossed, 1 if Embossed. (**_Default:_** The default setting is the control font.)  
**[SelFont$](../properties/selfont.md)** |  RTF word processor Font setting: This property reflects the Font to be used for the currently selected text in a RTF word processor Multi_Line style control. If no text is currently selected, the current text entry will be affected. (**_Default:_** The default setting comes from the control's default Font specification.) See **['FONT'](../mnemonics/font.md)** mnemonic. **_Example:_** To set the font to Arial, 1.5 times normal size, and Bold, the format would be xxx'Font$="Arial,1.5,B" (comma-separated).  
**[SelFontSize](../properties/selfontsize.md)** |  RTF word processor Font Size setting: This property reflects the Font Size to be used for the currently selected text in a RTF word processor Multi_Line style control.  
**[SelIndent](../properties/selindent.md)** |  RTF word processor Indentation setting: This property reflects the Indentation to be used for the currently selected paragraph(s) in a RTF word processor Multi_Line style control. If no paragraph is currently selected, the current text entry will be affected. (**_Default:_** 0) The indentation is measured in TWIPS, which is 1/1440 of an inch (or 1/20th of a POINT). To create an indentation of 1/2 an inch, use 720.  
**[SelItalic](../properties/selitalic.md)** |  RTF word processor Italics setting: This property reflects whether the text will be in Italics for the currently selected text in a RTF word processor Multi_Line style control. If no text is currently selected, the current text entry will be affected. 0 if not in italics, 1 if in italics. (**_Default:_** The default setting is the control font.)  
**[SelParaUndent](../properties/selparaundent.md)** |  RTF word processor Paragraph Undent setting: This property reflects the amount of indentation to be eliminated from the contents of the currently selected paragraph(s) in a RTF word processor Multi_Line style control. If no paragraph is currently selected, the current text entry will be affected. (**_Default:_** 0) The Indentation is measured in TWIPS, which is 1/1440 of an inch (or 1/20th of a POINT). To create an indentation of 1/2 an inch, use 720. The Undentation only affects the body of the paragraph that follows the first line. **_Example:_** If you wanted to indent the first line by 1/2 an inch yet leave the rest of the paragraph un-indented, you would set both the 'Indent and 'ParaUndent properties to 720.  
**[SelRightIndent](../properties/selrightindent.md)** |  RTF word processor Right Indentation setting: This property reflects the right side indentation to be used for the currently selected paragraph(s) in a RTF word processor Multi_Line style control. If no paragraph is currently selected, the current text entry will be affected. (**_Default:_** 0) The Indentation is measured in TWIPS, which is 1/1440 of an inch (or 1/20th of a POINT). To create an indentation of 1/2 an inch, use 720.  
**[SelStrikeOut](../properties/selstrikeout.md)** |  RTF word processor Strikeout setting: This property reflects whether the text will be "Striked Out" for the currently selected text in a RTF word processor Multi_Line style control. If no text is currently selected, the current text entry will be affected. (**_Default:_** 0 - No Strikeout)  
**[SelTextColor$  
SelTextColour$](../properties/seltextcolor.md)** |  RTF word processor Text Color setting: This property reflects the color of the text that is currently selected in a RTF word processor Multi_Line style control. If no text is currently selected, the current text entry will be affected. For information on valid color names and color specifications, see **[Color Properties](colour_properties.md)**. (**_Default:_** The default setting is "DEFAULT" (normally BLACK)).  
**[SelUnderline](../properties/selunderline.md)** |  RTF word processor Underline setting: This property reflects whether the text will be underlined for the currently selected text in a RTF word processor Multi_Line style control. If no text is currently selected, the current text entry will be affected. 0 if not underlined, 1 if underlined. (**_Default:_** The default setting is the control font.)  
**[SignalOnExit](../properties/signalonexit.md)** |  Controls whether a 'Change' signal will be generated when the control (or region of a grid control) is exited regardless of whether the control's value changes. Normally, controls only signal changes when the control loses focus **_and_** the contents have changed. Setting 'SignalOnExit allows a change signal to also be generated whenever focus leaves the control (or region for grid). |  0 |  No signal on exit unless control value has changed.  
---|---  
1 |  Signal on exit regardless of whether value has changed (on grid, signals whenever changing cell).  
2 |  Signal when changing row or on exit of grid (sets column value to 0 and row value to last row exited)._**(Grid Only)**_  
3 |  Signal when exiting the grid (sets column and row values to zero). **_(Grid Only)_**  
**[Text$](../properties/text_.md)** |  Text of item.

#### **Note:**  
The **['Value$](../properties/value_.md)** property of a Rich Text control returns the data in RTF format, whereas the **['Text$](../properties/text_.md)** property will return just the text without any formatting information.  
  
**[TextColor$  
TextColour$](../properties/textcolor_.md)** |  Foreground text color. For information on valid color names and color specifications, see **[Color Properties](colour_properties.md)**. (**_Default:_** "DEFAULT") _(The TextColor$ property for RTF Multi-Lines was added in PxPlus 2024.)_  
**[Tip$](../properties/tip_.md)** |  Tip message for control.  
**[Value$](../properties/value_.md)** |  Current item value.

#### **Note:**  
The **['Value$](../properties/value_.md)** property of a Rich Text control returns the data in RTF format, whereas the **['Text$](../properties/text_.md)** property will return just the text without any formatting information.  
  
## See Also

**[MULTI_LINE Properties](multiline_properties.md)**  
**[Color Properties](colour_properties.md)**  
**['COLOUR' & '_COLOUR' Mnemonic](../mnemonics/colour.md)**  
**[Using Property Names](../control_object_properties.htm#Mark1)**  
**[Compound Properties](compound_properties.md)**
