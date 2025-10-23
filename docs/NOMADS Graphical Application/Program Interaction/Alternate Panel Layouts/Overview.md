# Program Interaction

**Alternate Panel Layouts** |  **__**  
---|---  
  
Alternate panels are interchangeable panels that contain the same controls but have different layouts. The controls on the panels differ only in size, location and resizing attributes. The purpose of alternate panel layouts is to offer differing layouts that can be switched dynamically at run time. The various alternate panels can be switched either programmatically by setting up special variables to trigger the switch (see **[Switching Panels Programmatically](Overview.htm#Mark3)** below) or automatically when the panel is resized, based on conditions that have been pre-set (see **[Switching Panels Automatically on a Resize Event](Overview.htm#Mark4)** below).

**_Example:_**

In this example, two views are available for the Invoice Header maintenance panel.

The first is the main panel that is initially processed:

> The second is an _alternate_ wider panel with a different layout:

> Both panels and, in this case, the corresponding sub-panels, are identical except for the panel size, as well as the size, placement and resizing attributes of the controls. (See **[Designing Alternate Panel Layouts](Overview.htm#Mark1)** below for exceptions.)

In this example, a _Change View_ button added to the panel allows the user to toggle between the original panel and the wider layout. This is accomplished programmatically through the button's _OnChange_ logic. Alternatively, the _Change View_ button could be removed, and the view changed automatically when the panel is resized by pre-setting conditions for the main and alternate panels to be displayed.

##  Designing Alternate Panel Layouts

In the simplest scenario where no folder controls are involved, two or more panels are created in the **[Panel Designer](../../Panel%20Designer/Introduction.md)** with identical controls whose sizes and locations may be different. However, if there are folder controls, the main (parent) panel and sub-panels may require corresponding alternate panels to be created as well. It is also possible to have an alternate sub-panel without switching the main panel, but this is only supported when switching panels programmatically. The original and alternate panels must be in the same library.

#### **Important Note:**  
If a panel contains a folder control, it is important that the folder _Tab Definition_ of the original _and_ alternate panels have a _one-to-one mapping_ of the original and alternate sub-panels.

As for the controls being identical, there are certain exceptions. The text value of _Fonted Text_ and _Frame_ controls can be different on the various panels, with the text of the panel currently in use being displayed, allowing you to shorten/lengthen the text displayed based on available space. In addition, various _Shapes_ and their attributes and static (i.e. non-dynamic) _Images_ may be different on the various panels. All other controls will maintain their current values.

##  Switching Panels Programmatically

An event trigger, such as a button click, is required to invoke logic to switch the panels. In the corresponding event logic, two variables, ALTERNATE_PANEL$ and ALTERNATE_PANEL_TYPE$ must be set. If set correctly, NOMADS will switch to the alternate panel and place all the controls at their new location. If the alternate panel does not exist, then the current panel will remain.

ALTERNATE_PANEL$ contains the name(s) of the panel(s) to be displayed, which must be in the same library as the original parent. ALTERNATE_PANEL_TYPE$ describes the panel type, either "M" _(main level)_ , "F" _(folder control)_ , or "MF" _(both)_. The syntax is described below.

The alternate for a typical **_main_** level panel is defined as follows:

> ALTERNATE_PANEL$=_"AltMain"_  
>  ALTERNATE_PANEL_TYPE$="M"

If the alternate panel is a sub-panel inside a **_folder_** control, it would be defined as follows:

> ALTERNATE_PANEL$=_"AltFold"_  
>  ALTERNATE_PANEL_TYPE$="F"

However, if the alternate panel does not fit in the designated folder region of the parent panel, then you must also recreate the main level panel to accommodate the size of the folder inside; i.e. an Error #29 will occur if the control's new coordinates are outside of the folder region. This requires the definition of **_two_** alternate panels separated by a semi-colon, a parent panel and a sub-panel within a folder control:

> ALTERNATE_PANEL$=_"AltMain;AltFold"_  
>  ALTERNATE_PANEL_TYPE$="MF"

**_Example:_**

The following is sample _OnChange_ logic for switching panel layouts when the _Change View_ button is selected:

> Change_View:  
>  ! Main panel is INV_MNT with subpanels INV_MNT.1, INV_MNT.2 and INV_MNT.3  
>  ! Alternates are INV_MNT.A with subpanels INV_MNT.1A, INV_MNT.2A and INV_MNT.2A  
>  IF STP(UCS(MAIN_SCRN_K$),2)="INV_MNT"  
>  THEN ALTERNATE_PANEL$="INV_MNT.A;"+UCS(FOLDER_ID$)+"A"   
>  ELSE ALTERNATE_PANEL$="INV_MNT;"+MID(UCS(FOLDER_ID$),1,LEN(FOLDER_ID$)-1)  
>  LET ALTERNATE_PANEL_TYPE$="MF" ! Switch main and folder subpanel  
>  RETURN

##  Switching Panels Automatically on a Resize Event

To take advantage of this feature, the panels involved must be defined as _Resizable/Custom_ or _Resizable/Auto Size_. (See **[Panel Resizing](../../Panel%20Designer/Resizing%20and%20Persistence/Panel%20Resizing.md)**.)

When a panel is resized, a check is performed to see if there are any pre-set conditions assigned to it to determine if an alternate panel should be displayed. These conditions are set up for a panel using the **[Alternate Panel Maintenance](Overview.htm#Mark2)** utility in the NOMADS Panel Designer when the panel is being edited. If conditions do exist, they are evaluated at run time in the order in which they appear in the definition. When a condition is evaluated as true, then no more conditions are evaluated, and the associated alternate panel is displayed. If no conditions are true, then the panel that was originally being processed is displayed.

When setting up alternate panels, only the original panel that is being processed needs to have alternate panels assigned in **Alternate Panel Maintenance**. When the original panel is processed, the names of the original and alternate panels, sub-panels and alternate sub-panels, as well as the conditions associated with them, are automatically loaded into memory for subsequent processing.

##  Alternate Panel Maintenance

The **Alternate Panel Maintenance** utility allows you to specify conditions to apply when resizing the panel currently being defined in the NOMADS Panel Designer and the alternate panel to display when a condition is true. To invoke this utility, select _Assign Alternate Panels_ from the _Utilities_ menu in the **[NOMADS Panel Designer](../../Panel%20Designer/Introduction.md)**.

> This dialog consists of the following:

**Condition** |  Specifies the condition to be evaluated in determining if an alternate panel will be displayed when the panel is resized. For the test, three generic conditions may be specified, as well as an entry that allows you to supply custom logic for testing your own criteria. |  _Resized panel shape: Portrait_  _(or Landscape_) |  The alternate panel will be used when the resized panel has Portrait dimensions (i.e. width <= height) or Landscape dimensions (i.e. width > height). You can click the button next to the condition to switch between _Portrait_ and _Landscape_ settings.  
---|---  
_Resized panel width: Between 0 and 999 columns wide inclusive._ |  The alternate panel will be used when the size of the resized panel falls within the specified minimum/maximum dimensions. **_Example:_** To display an alternate panel when the resized panel **_width_** is 100 columns or more, click the button next to the condition and set the minimum value to 100.  
_Resized panel height: Between 0 and 999 lines high inclusive._ |  The alternate panel will be used when the size of the resized panel falls within the specified minimum/maximum dimensions. **_Example:_** To display an alternate panel when the resized **_height_** is 30 lines or less, click the button next to the condition to set the maximum value to 30.  
_Logic to execute when panel is resized_ |  When the panel is resized, the specified user logic will be executed. If the logic determines that an alternate panel is to be displayed, then it must set the _Alternate_Panel$_ variable to the name of the panel to use. If the criteria is not met, then _Alternate_Panel$_ should be set to null (""). The special variables _pnlWidth_ and _pnlHeight_ can be used to test the resized panel width or height in columns and lines. The special variables _W_ and _H_ can be used to test the resized panel width or height in graphical units (NOMADS) or pixels (iNomads). **_Example:_** To display an alternate panel when the dimensions of the resized panel reach a particular ratio, click the button next to the condition and select the type of logic (_Execute_ or _Perform_) and then enter the logic reference: _Execute_ IF W/H>1.6 THEN Alternate_Panel$="INV_MNT.A"  
**Alternate Panel**  
**(Nomads)** / **(iNomads)** |  The names of the panel to be displayed in the NOMADS desktop environment and/or the iNomads browser environment after a resizing event has occurred and the associated condition is true. The drop-down list contains all the panels in the library, or you can type the panel name. If the panel does not currently exist, a warning is displayed, but the panel is considered valid. If the Logic condition has been selected, this is set to _Alternate_Panel$_. You can specify an alternate panel for a single environment by leaving the selection blank.  
Clear Row |  Select this button to clear the settings for the currently selected row.  
Move Row Up  
Move Row Down |  Select these buttons to change the order of the conditions and their associated alternate panels.

#### **Important Note:**  
The order in which the conditions and their associated alternate panels are displayed is important, as that is the order in which the conditions are evaluated when the resize event occurs.  
  
#### **Note:**  
To test alternate panel logic in the **[NOMADS Panel Designer](../../Panel%20Designer/Introduction.md)**, select the _Test Alt/Subs Pnls_ check box (if using **[Folder Style](../../Panel%20Designer/Folder%20Style/Using%20the%20Folder%20Style.md)** or **[Property Sheets](../../Panel%20Designer/Properties%20Table/Overview.md)**) or the _Test using Alternate/Substitute Panels_ check box (if using **[NOMADS+ Toolbar](../../../NOMADS+%20Toolbar/Introduction.htm#testaltsub)**) on the Panel Designer tool bar. This check box option is available **_only_** when alternate and/or substitute panels have been assigned to the current panel. The alternate panel logic is tested when the Panel Designer _Test_ option is selected.  
  
To test the current panel without the alternate panel logic, uncheck this option.  
  
When a selected panel with alternate panel logic is tested from the **[Library Object Selection](../../NOMADS%20Development/Library%20Object%20Selection/Console%20and%20Object%20List.md)** window, testing will always enforce alternate panel logic.  
  
_(The Test Alternate/Substitute Panels option was added in PxPlus 2017 Update 0002.)_

## Switching Panels When a Device is Rotated

One of the most widespread uses for automatically switched alternate panels is to provide a different view (_Portrait_ versus _Landscape_) when displayed on a rotatable hand-held device such as a tablet. 

#### **Note:**  
Keep in mind that switching panels automatically requires a resizing event and simply rotating the device does not guarantee this. See **[Switching Panels Automatically on a Resize Event](Overview.htm#Mark4)** above.

For example, in a NOMADS environment, when a device is rotated, the display can rotate 90 degrees without the panel being resized. The panel will remain the same size and simply extend beyond the display area. If, however, the panel has been maximized, then the rotation will result in the panel being maximized based on the different orientation (i.e. different size), and this can trigger the display of an alternate panel, depending on the conditions you have set. Therefore, if the panel is being displayed on a hand-held device, you may want to include logic to maximize the panel.

In an iNomads environment, whether the rotation causes a resizing event depends on the viewport setting, i.e. the visible area of a Web page. Sometimes, when you rotate a small device from a _Landscape_ to a _Portrait_ orientation (and vice versa), the scale of the display changes; therefore, the number of rows/columns does not change and there is no resize. To get a resize event, the device needs to maintain a constant row/column size so that the number of rows/columns changes when rotated and the panel is resized to fit. This is accomplished with an HTML meta tag that you can insert into your iNomads template using the **[Template Configuration Maintenance](../../../iNOMADS/Template%20Configuration.md)** utility. Click the **[HTML](../../../iNOMADS/Template%20Configuration.htm#html)** tab, and under the _Additional header META tags to be included in the HTML_ option, enter the following:

> <meta name="viewport" content="width=device-width"/>

Another point to keep in mind when in iNomads is that if you are using the _Resized panel shape: Portrait (or Landscape)_ condition (see **[Alternate Panel Maintenance](Overview.htm#Mark2)** above) to trigger the display of an alternate panel, be aware that the **_shape_** of the panel itself within the iNomads template will be tested. If the iNomads template you are using has header/footer areas and may look like a Portrait display, the panel itself between those areas may still have a Landscape shape when rotated to a Portrait orientation, and no trigger will occur.
