# Creating Panel Controls

**Image/Picture Control** |  **__**  
---|---  
  
The Image tool is used to insert a bitmap or multimedia image in a panel; e.g. company logo, product diagram or photograph. This object type is for display purposes only and does not respond to events.

For information on the use of graphics in PxPlus, see **'[PICTURE](../../../mnemonics/picture.md)'** mnemonic.

## Adding a Picture

To insert a graphic image/picture on a panel, select the Picture control tool from the **[Controls Toolbar](../../Panel%20Designer/Drawing%20and%20Modifying%20Panel%20Objects/Controls%20Toolbox.md)**, then hold down the left mouse button and drag the mouse to create a rectangle to the desired size. Release the mouse button to create the location for inserting the new image, as defined via the Picture Path property.

For making other adjustments, see **[Modifying Objects](../../Panel%20Designer/Drawing%20and%20Modifying%20Panel%20Objects/Modifying%20Objects.md)**.

To assign a name and location of the image file to be used, as well as define specific image attributes, see **[Image Properties](Image.htm#imageproperties)**.

##  Image Properties

When creating or editing an _Image_ control, the **Image/Picture Properties** dialogue (pictured below using the **[Folder Style](../../Panel%20Designer/Folder%20Style/Using%20the%20Folder%20Style.md)** version of the NOMADS Panel Designer) is displayed:

> This dialogue is divided into the following tabbed panels for viewing and/or changing image/picture properties: **[Display](Image.htm#display)** and **[Advanced](Image.htm#advanced)**.

_Name_ |  Unique name of the image control (NOMADS provides a default). Naming conventions for variables apply. Click the Browse Library button to copy parameters from an existing object (via the **[Library Browse](../../Panel%20Designer/Drawing%20and%20Modifying%20Panel%20Objects/Library%20Browse.md)** dialogue).

#### **Note:**  
When a new control name is entered, it will be checked against the **[Reserved Words](../../../Reserved%20Words.md)** list to determine if it is restricted for use as a NOMADS control name. If it is found, a warning message will display.  
  
_(User Reserved Words Maintenance was added in PxPlus 2020.)_  
  
---|---  
**Preview** |  Displays how the visible properties of the control will appear at run time.  
**Display**  
**Picture Path** |  Name and location of picture file (_Fixed_ value or string _Expression_).  
**Image Format** |  |  _Graphic Display_ |  Defines how the picture is to be drawn. Click the drop-down arrow for a list of selections: _Asis_ _  
_ _Centered_(center/cropped within region)_  
_ _Scaled_(scale to fit)_  
_ _Tiled_(tile bitmaps to fill region)_  
_ _Halftone_(enhanced legibility - may lighten black images)_  
_ _Align to top left (preserve aspect ratio)  
_ _Centered (preserve aspect ratio)  
__Centered (scale and crop)_ **_Example:_**  
---|---  
  
_(The "Centered (scale and crop)" option was added in PxPlus 2019 Update 1.)_  
  
**Position** |  |  _Column_ |  Starting column for top left corner of the control - numeric expression. Format mask is #0.00. Valid entries are 0 to 620.  
---|---  
_Line_ |  Starting line for top left corner of the control - numeric expression. Format mask is #0.00. Valid entries are 0 to 255.  
  
_(Support for increased Column and Line maximums was added in PxPlus 2021.)_  
  
**Size** |  |  _Width_ |  Width of control in number of columns - numeric expression. Format mask is #0.00. Valid entries are 0 to 620.  
---|---  
_Height_ |  Height of control in number of lines - numeric expression. Format mask is #0.00. Valid entries are 0 to 255.  
  
_(Support for increased Width and Height maximums was added in PxPlus 2021.)_  
  
**General Attributes** |  |  _Initially Hidden_ |  Control is not displayed but is accessible programmatically.  
---|---  
_Dynamic_ |  NOMADS will automatically redraw a new image when you change the value of the control name variable. If a Picture Path is entered, it will be used as the initial path for the image.  
**iNomads Class** |  Assign an iNomads class to the control. Can be _Fixed_ or _Expression_. The iNomads class contains class attribute references used when defining the control in the HTML code generated in iNomads. An iNomads class reference must start with an alpha character (A-Z or a-z), followed by any combination of A-Z, a-z, 0-9, underscore or dash. Multiple references may be entered, separated by a space. For a list of pre-defined iNomads classes, see **[iNomads Classes](../../../iNOMADS/iNomads%20Classes.md)**. _(The iNomads Class property was added to Images in PxPlus 2018.)_  
**iNomads Alt Text** |  Text to be used as the alternate text for the image when running iNomads. _(The iNomads Alt Text property was added in PxPlus 2021.)_  
**Advanced**  
**Cropping (Pixels from Top/Left of Image (0.0))** |  Define the cropped image in terms of _Left, Right, Top_ and _Bottom_ where these values are the number of pixels from the top left corner (0,0) of the image.

#### **Note:**  
_Cropping_ is _not_ supported in [ **iNomads**](../../../iNOMADS/iNOMADS%20Introduction.md).  
  
**Attributes** |  |  _Image Transparency_ |  Transparency option for the image. Transparent images are only supported when the picture does not need to be scaled. Click the drop-down arrow for a list of selections: _None, Pixel sets transparency_ or _'Light Gray' is transparent_.  
---|---  
_Flip Image_ |  Flips the image. Click the drop-down arrow for a list of selections: _None, Flip horizontally (left/right), Flip vertically (up/down)_ or _Flip horizontally and vertically_.  
_Rotation Angle_ |  Counter clockwise rotation angle at which to display the image. Valid entries are 0 to 359.  
_Invert Image_ |  Display the image with inverted colors.  
_Gray Scale Image_ |  Converts the image to gray scale.  
  
#### **Note:**  
_Image Transparency_ is _not_ supported in [ **iNomads**](../../../iNOMADS/iNOMADS%20Introduction.md).  
  
_Security_ |  Security restrictions. See **[Restricting Access](../../System%20Maintenance%20Tools/Security%20Manager/Restricting%20Access.md)** for information on **Object Security Definition**.  
_Groups_ |  Assign the control to a group. See **[Group Assignment](../../NOMADS%20Development/Maintaining%20Library%20Objects/Group%20Assignment.md).**  
_Notes_ |  Add notes/comments for the control. Maximum 1024 characters. _(The Notes button was added in PxPlus 2023.)_
