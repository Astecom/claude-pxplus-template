# Graphical User Interfaces

**Taskbar Notification Icon** |  **__**  
---|---  
  
In PxPlus for Windows, the **[BUTTON](../../../directives/button.md)**, **[CHECK_BOX](../../../directives/check_box.md)** and **[TRISTATE_BOX](../../../directives/tristate_box.md)** directives (with **OPT="Y"** setting) can be used to place an icon in the _Taskbar Notification Area_(also known as the _System Tray_) in the bottom right corner of the MS Windows desktop.

Different aspects of this type of control may be defined, including the icon used, floating tip, balloon information and right mouse menu. Depending on the number of _states_ required, **BUTTON** is used to define one icon, **CHECK_BOX** toggles between two different icons, and **TRISTATE_BOX** cycles between three icons. The ability to cycle between states is controlled using the **'Value** property.

## Creation Format

Apart from the fact that each directive defines a specific number of images (states), the creation format for a taskbar notification icon is basically the same, regardless of which directive is used:

> **BUTTON** [*****] _ctl_id_ , **@(**_col,ln,wth,ht_**)=**_contents$_[,_ctrlopt_], **OPT="Y"**

In the above syntax example, **OPT="Y"** identifies this control as an icon to be placed in the _Taskbar Notification Area._ The _contents_ $ argument defines the icon image inside **{ }**  _braces,_ followed by text information to be used as the title for a balloon message. See **[Balloon Text](Overview.htm#balloontext)**.

**_Example:_**

The following is an example of a creation command for a single-state taskbar notification icon:

> BUTTON *10,@(0,0,0,0)="{}PxPlus Tray Control",opt="Y",tip="A Floating Tooltip",mnu=11,msg="{pxplus.exe@4}This is line 1 of a tray balloon"+$0d0a$+"And this would be line 2"+$0d0a0d0a$+"Click on the balloon to continue"

Coordinates are ignored for taskbar notification icons. A leading ***** (_asterisk_) denotes it as a "global" icon; in which case, the icon is tied to the whole PxPlus session and remains visible no matter which window is considered current. Otherwise, the icon is tied only to the window where it was created and is hidden/shown as necessary when moving to a different window. See **[Other Formats](Overview.htm#otherformats)**.

## Assigning an Icon Image

The string assigned on the creation command may contain one or more icon images enclosed in **{ }**  _braces_ and separated by **|** (_pipe_) symbols. If no icon is specified or a null icon is specified, then the current icon in use by the PxPlus session is used. Only _.ico_ images may be used in the _Taskbar Notification Area._ Other file formats (._bmp_ , ._jpg_ , etc.) are ignored.

## Floating Tips

Floating tips may be specified by adding **TIP=**_text$_ to the creation command.

## Right-Mouse Events

A CTL value may be assigned to any right mouse clicks by adding a **MNU=**_ctl_ to the creation command.

##  Balloon Text

Balloons may be specified via the control option **MSG=** during creation or may be changed on the fly via the **'Msg$** property. The string data may include an icon for use within the balloon itself, as well as lines of text and other options to control specific balloon behaviour.

#### **Note:  
** Only the **[BUTTON](../../../directives/button.md)** directive supports the addition of balloon text to a System Tray icon.

The format of the **MSG=** or **'Msg$** string is:

> **"**{_icon_} _text_**;QUIET;REALTIME"**

**_Where:_**

_{icon}_ |  Balloon icon. Optional. Must appear before _text_ when used. If no braces are present, then no icon appears in the balloon. If **{ }** (_braces_ with no contents) are given, then the icon currently in use by the PxPlus session will be used. Any other icon specification follows PxPlus' icon specification conventions. {**!ERROR**}, {**!INFO**} or {**!WARNING**} define built-in icons that use the Windows standard icons and potentially any sound associated.  
---|---  
_text_ |  Balloon text. This may contain CRLF ($0D0A$) to specify line breaks. The maximum length is 255 characters.  
**;QUIET** |  Turns off sound associated with the balloon tip (if any). Optional. Must appear after _text_ when used.  
**;REALTIME** |  Tells the operating system not to display the balloon if it cannot be displayed right away. Optional (Vista only). Must appear after _text_ when used.  
  
## Control Object Properties

Most **[Dynamic Control Properties](../Introduction.htm#dynamic)** will have no effect on a notification icon; i.e. you cannot change items such as **BackColour** , **Left** , **Line** , etc. The properties that **_do_** have an effect are:

**Enabled** |  Can be read or set to disabled (0) or enabled (1).  
---|---  
**Eom$** |  Contains the character that caused the last CTL event for this control.  
**Focus** |  May be set to 1, which sets focus to this control within the notification tray and away from the current PxPlus window.  
**ImageCount** |  Returns the number of icons associated with this control.  
**MenuCTL** |  Can be read or set to a CTL value that will be generated when the user right mouse clicks on this control.  
**Msg$** |  Can be read or set to change the balloon information on the fly.  
**OnFocusCTL** |  Can be read or set to a CTL value that will be generated when the user clicks on the balloon while the balloon is visible.  
**Text$** |  Can be read or set to change the icon and text (bolded title in the balloon).  
**Tip$** |  Can be read or set to change the floating tool tip.  
**Value** |  Can be set to 1, 2 or 3 to switch between icons specified in the text of the control. (**BUTTON** has one icon, **CHECK_BOX** may have two, **TRISTATE_BOX** may have three.)  
**Visible** |  Can be used to make the notification icon hide/show itself.  
  
##  Other Formats

These other formats are used to control the actions of a taskbar notification icon once it has been created. The syntax elements described below apply to all three directives; i.e. substitute the **BUTTON** keyword for **CHECK_BOX** or **TRISTATE_BOX** as required.

**BUTTON REMOVE** [*****] _ctl_id_ [, **ERR=**_stmtref_] |  Deletes a global or non-global taskbar notification icon.  
---|---  
**BUTTON** { **DISABLE** | **ENABLE** } [*] _ctl_id_ [, **ERR=**_stmtref_] |  Enables/disables a global or non-global taskbar notification icon. When enabled, CTL events will fire when the user clicks on the button. When disabled, all mouse or keyboard actions on the control are ignored. The control remains visible whether enabled or disabled.  
**BUTTON** { **HIDE** | **SHOW** } [*****] _ctl_id_ [, **ERR=**_stmtref_] |  Makes an icon visible or invisible.  
**BUTTON GOTO** [*] _ctl_id_ [, **ERR=**_stmtref_] |  Forces focus away from PxPlus and into the taskbar notification area. The icon will get focus and any floating tool tip will automatically be displayed.  
**BUTTON** { **ON** | **OFF** } [*****] _ctl_id_ [, **ERR=**_stmtref_] |  Displays the icon's balloon when **ON** is used and removes the balloon when **OFF** is used. The balloons will automatically time out themselves; therefore, it is not necessary to use **OFF** unless the developer wishes to force an early close of the balloon.  
**BUTTON READ** [*****] _ctl_id,mode_ _$_ [, **ERR=**_stmtref_] |  Returns the EOM of the last CTL event.  
  
## CTL Values for Taskbar Notification Icons

CTL values will be generated when the user clicks with the mouse or uses the keyboard with the tray control.

The events include the following:

> **LEFT MOUSE CLICK**  _or_ **SPACEBAR** generates _ctl_id_ of control, EOM= $01$.

> **LEFT DOUBLE MOUSE CLICK**  _or_ **Enter** generates _ctl_id_ of control, EOM= $02$.

If the **MNU=**_ctl_ option is specified on creation or the **'MenuCtl** property is set:

> **RIGHT MOUSE CLICK**  _or_ **RIGHT DOUBLE MOUSE CLICK** generates value of **MNU=**_ctl_ , **'MenuCtl** property, or EOM= $11$.

If the **MNU=**_ctl_ option is _not_ specified or the **'MenuCtl** property is _not_ set:

> **RIGHT MOUSE CLICK** generates _ctl_id_ of control, EOM= $11$.

> **RIGHT DOUBLE MOUSE CLICK** generates _ctl_id_ of control, EOM= $12$.

If **'OnFocusCTL** property is set:

> Any click on the balloon generates value of **'OnFocusCTL** property, EOM= $FF$. No event will be fired when clicking on the balloon if **'OnFocusCTL** is not set.

#### **Note:**  
When the user clicks on the notification icon or balloon, focus is _not_ automatically returned to the PxPlus application window. Focus remains in the taskbar notification area, as the user may hit Escape to cancel a menu selection.

**_Examples:_**

The following code creates a taskbar notification tray icon:

> BUTTON *10,@(0,0,0,0)="{}PxPlus Tray Control",opt="Y",tip="A Floating Tooltip",mnu=11,msg="{pxplus.exe@4}This is line 1 of a tray balloon"+$0d0a$+"And this would be line 2"+$0d0a0d0a$+"Click on the balloon to continue"

To display the balloon:

> BUTTON ON *10

> 
