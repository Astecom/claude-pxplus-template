# Templates  
  
**Template Configuration**|   
---|---  
  
You can establish settings for iNomads templates using **Template Configuration Maintenance** , which is invoked by using any of the following methods:

**Location** |  **Method**  
---|---  
From the **[PxPlus IDE Main Launcher](../PxPlus%20IDE/IDE%20Main%20Launcher.md)** |  Expand the _Web Deployment_ category and select _iNomads Setup_ to invoke the **[iNomads Setup](iNomads%20Setup.md)** window. Select the _Options_ button.  
From a Web browser |  Launch iNomads from a Web browser. From the **[iNomads Application Launchpad](iNOMADS%20Application%20Launchpad.md)** window, invoke the **[iNomads Setup](iNomads%20Setup.md)** window by either clicking the _Admin_ button or selecting _admin_ from the _Transaction_ drop box. Select the _Options_ button.  
From the PxPlus Command prompt |  Invoke the **[iNomads Setup](iNomads%20Setup.md)** window by entering the following command: **RUN "*plus/inomads/admin"**. Select the _Options_ button.  
  
**Template Configuration Maintenance** is launched. The name of the template currently selected for maintenance displays in the window header (i.e. "default").

_(The display of the template name in the window header was added in PxPlus 2018.)_

> The options for configuring iNomads templates are presented in a series of 12 tabs: **[General](Template%20Configuration.htm#general)**, **[Sizing](Template%20Configuration.htm#sizing)**, **[Overrides](Template%20Configuration.htm#overrides)**, **[ChkBox](Template%20Configuration.htm#chkbox)**, **[Lists](Template%20Configuration.htm#lists)**, **[Folders](Template%20Configuration.htm#folders)**, **[Frames](Template%20Configuration.htm#frames)**, **[Text](Template%20Configuration.htm#text)**, **[Layout](Template%20Configuration.htm#layout)**, **[Tweaks](Template%20Configuration.htm#tweaks)**, **[HTML](Template%20Configuration.htm#html)** and **[Misc](Template%20Configuration.htm#misc)**. These options represent properties of the iNomads object and are explained in the tables below. These properties are set whenever the iNomads object is instantiated (%iNomads) but can also be set programmatically by referencing them directly.

**_Example:_**

> %iNomads'Panel_Border=1

The tables below describe the options found on each of the 12 tabs. In each table, the first column displays the actual property name, and the second column displays the corresponding template option with any additional information.

**General**  
---  
**Panel position and style**  
Panel_Align$ |  _Alignment of the panel on the screen._ Setting this defines how the panel will be aligned on the screen.  
Panel_Border |  _Width of the border to include around panel. Setting this to zero will result in no border around the panel._ This is the width of the border around the panel rendering in pixels.  
Overlay_Wdws |  _Overlay windows as opposed to creating popup windows._ When enabled, new panels will overlay the current panel instead of creating a new browser popup window. Overlaying windows improves performance and avoids problems with popup blockers.  
Use_Iframes |  _Use PxPlus 2016 popup overlays to display sub-panels._ When enabled, the system will attempt to use the experimental windows overlay logic based on iFrames. _(This option was added in PxPlus 2016.)_  
**Resizing options**  
Setwdwsize |  _Resize the windows on initial load to accommodate the panel size._ If enabled, the system will attempt to grow/shrink the windows to match the size of the panel on the initial load of a panel.  
Shrink |  _Shrink the window to fit size of panel._ If the resize option is enabled (above), this controls whether to shrink the windows, as Windows will always be expanded if required.  
Maximize_Browser |  _Force browser to occupy full screen when 'SHOW'(2) issued._

#### **Note:**  
Not applicable to all browsers and not a 'true' maximize.  
  
Modal_Close_Child |  _When running a modal popup window, clicking on the panel windows 'mask' will close the child._  
Full_Screen |  _Force full screen on all resizable panels when loading._ Numeric. When non-zero, forces panels to be maximized when first displayed. _(This option was added in PxPlus 2019.)_  
  
**Sizing**  
---  
**Logical Row and Column size in Pixels**  
Line_Px |  _Number of pixels high that each logical line occupies._ The pixel size should be chosen based on the standard text size chosen for the template.  
Chr_Px |  _Number of pixels wide that each logical column occupies._ This value should accommodate the standard text size chosen for the template. If using TABLE rendering, its value must be evenly divisible by COL_PX.  
**Margins to add to outer edge of your panel**  
Frame_Width |  _Pixels to be added to window width to compensate for external margins._ When determining panel sizes, this number of pixels will be added to allow for margin width.  
Frame_Height |  _Pixels to be added to window height to compensate for external margins._ When determining panel sizes, this number of pixels will be added to allow for margin height.  
  
**Overrides**  
---  
**Colors and Font settings**  
Use_Fonts |  _Use application defined font information when displaying text._ Normally, the system uses Style Sheets to control the font of the text. Enabling this option forces iNomads to use Fonts from the panel definition/application code.

#### **Note:**  
Some standard fixed width fonts such as Courier are always used as defined in the panel/application.  
  
Use_Backcolor |  _Use application defined background colors when displaying controls/text._ Normally, the system uses Style Sheets to control the background colors. Enabling this option forces iNomads to use Background colors from the panel definition.  
Use_Textcolor |  _Use application defined text colors when displaying controls. Simple text always uses application defined color._ Normally, the system uses Style Sheets to control the text colors. Enabling this option forces iNomads to use Text colors from the panel definition.  
**Style overrides**  
Use_Images |  _Include all static application defined images. Style sheets will provide images. Dynamic images will be included._ Normally, the system uses Style Sheets to provide images. Enabling this option forces iNomads to use Images from the panel definition.  
Flat_Img_Btn |  _Force all Image-only buttons to be 'Flat' (no visible button -- image only)._  
Lvue_Hilite$ |  _How to handle list view alternate highlighting._ Option is to ignore the setting, 'Use' the colors provided by program, or use the 'StyleSheet' colors.  
Use_Fancy_Tip |  _Use Enhanced tooltips for all TIPs._ Info style Tips are rendered.  
Theme$ |  _Assign a Theme._ Themes override text and background colors, font and miscellaneous other visual properties to provide a consistent visual look and feel. _(This option was added in PxPlus 2016.)_  
  
**ChkBox**  
---  
**Check Boxes**  
Cbx_Use_Css |  _Don't use standard check boxes. Always use style sheet defined button check boxes._ Normally, the system uses style sheet defined check boxes for Tri-state boxes or those with a background color. Setting this causes the system to use style sheet boxes for all check boxes.  
**Style sheet generated Check Box contents (Must select Don't use std. above)**  
Cbx_Css_Val0$ |  _Off text value for text/html within style sheet check boxes (normally blank/empty)._  
Cbx_Css_Val1$ |  _On text value for text/html within style sheet check boxes (normally check mark)._  
Cbx_Css_Val2$ |  _3rd state text values for text/html within style sheet check boxes (normally 'X')._  
  
**Lists**  
---  
**List view presentation options**  
Lvue_Page_Output |  _Use Paged output for list views._ If enabled, list views and formatted list boxes will be presented as paged output.

#### **Note:**  
If the list view, list box or grid has _fewer than 5 rows_ , it will only display with a _ScrollView_ using scroll bars (no page numbers across the bottom).  
  
Lvue_Page_Text$ |  _Text to present in front of Page numbers._  
Lvue_Send_Cnt |  _Desired minimum number of items to send when updating screen during initial paint and scrolling._ Leave as zero for all list views to use just what is required.  
**Height adjustments for List View/Grid**  
Row_Hi_Pad |  _The number of pixels in excess of the standard line height for list view rows._ Default is 2 pixels more than line height.  
Hdr_Hi_Pad |  _The number of pixels in excess of the standard line height for list view headers._ Default is 6 pixels more than line height.  
Grid_Hi_Pad |  _The number of pixels in excess of the standard line height for grid rows._ Default is 5 pixels more than line height.  
  
**Folders**  
---  
**Folder Size and type**  
Tab_Height |  _Folder tab height in pixels. Generally this should be between 1.5 and 2 times line height. If zero then 1.5 times line height used._  
Use_Webtab |  _Use Web style vertical tabs for folders as opposed to horizontal tabs._ Default tabs look like folders. Enabling this causes each folder to render vertically.  
**iNomads unique folder options**  
Auto_Folder |  _Folder Auto-invoke option. If enabled, using the arrow keys to change tab will cause folder to be changed immediately._ If disabled, system will require the user to click on folder tab to switch to it.  
**Special Tweaks for folders**  
Folder_Factor |  _Folder height factor. The folder height (in lines) will be multiplied by this value to determine height in HTML (default 0: 1-Without frames, 1.2-With)._ If borderless frames are suppressed, we suggest 1; otherwise 1.2.  
Folder_Control_Factor |  _Height multiplication factor to apply to controls over 4 lines high within folders. (Only when using Table rendering)._ Setting this will increase the size of controls within Folders in an attempt to compensate for size increase caused by FOLDER_FACTOR (0 = no compensation).  
  
**Frames**  
---  
**Frame rendering options**  
Frame_Suppress |  _Enable suppression of 'Frames' that do not have titles associated with them._ Frames with titles are always displayed in the HTML; however, in some cases, it may be desirable to suppress simple non-titled frames due to overlaps.  
Frame_Use_Hr |  _Use <HR> for single line high frames instead of standard frame display._ Frame will be rendered as a horizontal line.  
Frame_Title_Hi |  _Frame header height override in pixels (0 means use 1 line)._ If non-zero, this field specifies the height of a frame header in pixels. Only used in Absolute rendering.  
Frame_Bottom_Hi |  _Frame bottom height to allow for corners etc. in pixels (0 means use 1 line)._ If non-zero, this field specifies the height of a frame bottom in pixels. Only used in Absolute rendering.  
Single_Frame_Crop |  _On frames with text (Headers), don't use end frame header formatted cells if frame is 1 line high._  
**Frame Tweaks**  
Frame_Btm_Adj |  _Frame bottom adjustment. Logical number of lines the bottom of a frame will be moved up to compute true bottom._  
  
**Text**  
---  
**Text message contents for messages display by system**  
Text_Close$ |  _The text word to be displayed that will 'Close' a window. Default is 'Close' but in multilingual systems you can change this._  
Text_Timeout$ |  _Text to display during disconnect countdown when device is left idle too long. Insert ##:## where the countdown is to appear._  
Text_Restore$ |  _Text to display when a screen is refreshed due to transmission errors or user sending out of sequence. Also displayed after session rescue._  
Text_Relaunch$ |  _The text to be displayed on Application complete screen to relaunch the session._ This text will be displayed with the hyperlink to relaunch the iNomads process. Default is Relaunch. If this field is blank, relaunch capability is **_not_** available. _(This option was added in PxPlus 2019.)_  
  
**Layout**  
---  
Render_Absolute |  _Enable absolute rendering as opposed to old-style table base rendering._ Preferred is Absolute over old-style table based. It provides more accurate screen layouts.  
Use_Hamburger |  _Use 3 Line (hamburger ICON) option for menu bar initiation._ If enabled, the system will render a 3 line (&equiv;) option on the panel title to indicate a menu bar. _(This option was added in PxPlus 2016.)_  
Menu_Hover_Ms |  _Menu Hover timer._ This defines the number of milli-seconds to hover the mouse over a menu option before it is automatically selected. Default is 1000. If set to 0 (zero), the menu hover has no effect, and the menu option must be manually selected. _(This option was added in PxPlus 2017.)_  
**Table rendering options which are ignored if using absolute rendering**  
Col_Px |  _Number of pixels used to define each table column when generating panels._ This defines the resolution used when converting panels to HTML tabular displays. Its value must be an integral factor of CHR_PX, generally 1/2 or 1/3.  
Vert_Allowance |  _Vertical allowance to use when generating HTML. Controls that start within this distance of proceeding control are to be considered on the same line._ If non-zero, controls positions are compared relative prior controls for alignment. If zero, controls are positioned using simple rounding.  
Vert_Adj_Method |  _Use "Original" line spacing algorithm when applying vertical allowance (above)._  
Vert_Allow_Noframes |  _Suppress the vertical allowance (above) when rendering frames._ This is only applicable if the vertical allowance is non-zero, otherwise ignored.  
Disable_Tr_Height |  _Don't force table row heights, but allow browser to determine height based on content._ If disabled, this option has been shown to cause random line spacing in FireFox.  
Snapto_Lines |  _Dynamically 'Snap' (align) all controls to standard lines increments._ Set this option to have the system 'Snap' your controls to standard vertical positions.  
Hide_Show_Redraw |  _Refresh screen when hiding/showing controls._ When using a table-based layout, special logic has to be applied to hide controls that occupy same cell. Usually the overlap logic works, but in some instances, it is better to have system just redraw screen on a hide/show.  
  
**Tweaks**  
---  
**Adjustments based on changes to Style sheet (CSS) and Font from default**  
Grid_Hi_Adj |  _The number of pixels higher your style sheet will make grid rows._ Default style sheet increases row height by 1 pixel.  
Grid_Wd_Adj |  _The number of pixels wider your style sheet will make grid columns._ Default style sheet increases width by 1 pixel.  
Lvue_Hi_Adj |  _The number of pixels higher your style sheet will make list view rows._ Default style sheet increases row height by 1 pixel.  
Lvue_Wd_Adj |  _The number of pixels wider your style sheet will make list view columns._ Default style sheet increases width by 1 pixel.  
Cbx_Rbt_Adjust |  _Right justified Check box/Radio Button pixel adjustment._ In NOMADS, the actual placement of right justified Check boxes and Radio Buttons varies based on the font. Use this to apply minor adjustments.  
Btn_Sz_Adjust |  _Amount to adjust button size/position in order to assist alignment._ Buttons beside inputs are often made slightly bigger and positioned slightly above corresponding input field. This adjustment only applies to buttons < 2 lines high.  
  
**HTML**  
---  
Ttl_Helpbtn |  _Include HELP button on title line if help present._ When set **_and_** the panel has HELP defined, the system will include a Help button on the titlebar. _(This option was added in PxPlus 2017.)_  
**HTML elements to be used/included in rendering**  
Meta_Tags$ |  _Additional header META tags to be included in the HTML._  
Window_Open$ |  _JavaScript Window.open parameters to use when creating popup windows._ Position and size parameters are generated by the system.  
**Popup windows suppression**  
Avoid_Popups |  _Avoid using popup windows._ If set, system will attempt to avoid using Popup windows to open new browser sessions.  
Popup_Pdf_Msg$ |  _Message box text to show when avoiding Popups and viewing .pdf report._  
Popup_Msg$ |  _Message box text to show when avoiding Popups and viewing other file/site._  
  
**Misc**  
---  
**URL settings**  
Img_Dir$ |  _Image web based URL (In HTML will have "/" appended - Default 'images')._  
**Miscellaneous**  
Focus_Outline$ |  _Outline to use to highlight current input field. Format is "Color Type Width" such as "Orange solid 1px" or "Invert dotted thin"._  
Chart_Obj$ |  _Charting object to use. If -none- then no chart will be available. Path must be relative *plus/inomads/add-ons._  
Calendar_Qry_Mask$ |  _Mask used to test Query to determine if JavaScript calendar can be used._ If empty, only standard test for the existence of a Query panel with the word 'calendar' is used.  
Query_View |  _Set the default Query View._ Set the default query view for this template. Available selections are: |  _Default_ |  The setting in **[%NOMADS'Query_View](../NOMADS%20Graphical%20Application/Appendix/NOMADS%20Variables/Overview.htm#queryview)** is used. If %NOMADS'Query_View is not set, the default will be the _Toolbar_ view.  
---|---  
_Drop Query_ |  Data is displayed in a _Report View_ list box directly on the current panel. Drop queries load the entire dataset prior to display; therefore, it is advisable to prevent queries that are using large datasets from being displayed as Drop queries by setting this option to _Toolbar_ , _Menu_ or _Hybrid_.   
_Toolbar_ |  Standard Query+ display featuring a toolbar to access features.  
_Menu_ |  Features are accessed by a menu (no toolbar).   
_Hybrid_ |  This view has an abridged toolbar with the remaining features available in the menu. The layout is somewhat similar to the _Classic Query_.   
_Drop Tree_ |  The **[Drop Tree Query](../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Query%20Subsystem/Overview.htm#dropquery)** displays data in a _Tree View_ list box directly on the current panel. Drop Tree queries are **_not_** recommended for large datasets, as the entire dataset is loaded prior to display. The Drop Tree supports only the _Find_ , _Refresh_ , _Print_ , _Filters_ and _Profile_ features in its right-click popup menu.  
  
To set the query view for **_all_** templates, set **[%NOMADS'Query_View](../NOMADS%20Graphical%20Application/Appendix/NOMADS%20Variables/Overview.htm#queryview)**. This is overridden by the _Set the default Query View_ option, which can be overridden at the individual query level. See **[Query Header Definition](../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Query%20Subsystem/Query%20Header.md)**.

_(Support for setting the default Query View was added in PxPlus 2017.)  
(The Drop Query selection was added in PxPlus 2016.)  
(The Menu selection was added in PxPlus 2017.)  
(The Hybrid selection was added in PxPlus 2017.)  
(The Drop Tree selection was added in PxPlus 2021.)_  
  
Fkey_Pulldown$ |  _Option to include Function key pull down on Caption line._ A Function key pull down will be included on the caption line to assist on devices without function keys based on the setting of this option.  
Rclick_Option$ |  _Option to include Right Mouse click button on Caption line._ When active, a button on the caption line allows the user to indicate the next click submitted to the panel should be considered a Right Mouse click.  
Barcode_Option$ |  _Browsers to enable Bar Code Reader Icon on._ Comma separated list of browsers whose caption line allows the user to initiate Bar Code Reader for current input field.  
Barcode_Types$ |  _Accepted Bar code that the reader will process (Blank = UPC_A,EAN_13)._ Comma separated list of Bar codes that the integrated reader will accept.
