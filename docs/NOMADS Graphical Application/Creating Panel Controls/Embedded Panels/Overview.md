# Creating Panel Controls

**Embedded Panels** |  **__**  
---|---  
  
The NOMADS **Embedded Panel** feature allows the contents of a different panel to be placed at a location within the current panel. A _source_ panel object would typically contain a common set of controls that are intended for reuse to be embedded in other panels throughout the application.

For example, you may have a common format for a set of _First, Prior, Next_ and _Last_ navigation buttons. Rather than recreating these controls on multiple panels, you can create them once in one panel, and then embed the contents of that panel into all the panels that need them. The main advantage to this functionality is that you only need to edit the source panel to have the changes occur wherever those controls are embedded.

At run time, all the controls in the source panel will appear in the current active panel. The embedded panel can contain any of the control types (_Button_ , _Multi-Line_ , _Drop Box_ , etc.) available in the Panel Designer (see **[Creating Panel Controls](../Introduction.md)**), as well as **[User-Defined CTLS](../../Panel%20Designer/Options%20and%20Utilities/User-Defined%20CTLs.md)**. Embedded panels can be moved around in the _container_ panel but cannot be resized. Multiple embedded panels can be assigned to a panel.

As of PxPlus 2018, you can control the **[Tab Order](../../Panel%20Designer/Drawing%20and%20Modifying%20Panel%20Objects/Tab%20Order.htm#Mark1)** and **[Dependency Definition](../../Panel%20Designer/Options%20and%20Utilities/Dependency%20Definitions.htm#Mark1)** for the embedded panel in the container panel.

The header logic events _(Pre-Display, Post-Display, On-Exit)_ , along with the default program assignment on the embedded panel, can be carried forward to the container panel. The default program in the container panel is used only if one does not exist in the embedded panel. The order of execution for panel header logic events is determined by options in the embedded panel's definition.

#### **Note:**  
[**Drag and Drop Utility**](../../Panel%20Designer/Options%20and%20Utilities/Drag%20and%20Drop%20Utility.md) definitions are _not_ carried forward to the container panel.

_(Support for User-defined CTLS in embedded panels to carry forward to the container panel was added in PxPlus 2018.)_

## Assigning Embedded Controls

To insert embedded controls within the current (_container_) panel, select the _Embed Panel_ control tool from the **[Controls Toolbar](../../Panel%20Designer/Drawing%20and%20Modifying%20Panel%20Objects/Controls%20Toolbox.md)**. Hold down the left mouse button and drag the mouse to create a rectangle to the desired area. Release the mouse button to create the new embedded panel location. Define the specific attributes for the embedded panel. See **[Embedded Panel Properties](Overview.htm#properties)**.

**_Once the Panel is Selected_**

A frame containing the name of the embedded panel will be drawn to indicate where the inherited controls will appear at run time. The frame size will be based on the top left control and the bottom right control of the embedded panel. A message will be displayed if inherited controls cannot fit in the designated region.

#### **Note:**  
Controls with duplicate names are not drawn. A warning message is displayed if there are duplicate control names. No warning message is displayed if the embedded panel does not exist.

##  Embedded Panel Properties

When creating or editing an _Embedded Panel_ control, the **Embedded Panel Properties** dialogue is displayed:

> This dialogue is used for viewing and/or changing embedded panel properties:

_Library_ |  Embedded library path. Click the drop-down arrow for a list (up to nine) of previous selections. Click the Browse button to look through the directory structure to find the library or type the library path. An expression can also be entered by preceding the expression with an **_=_**_(equals sign)_ ; e.g. _=libname$_ or _="mylib.en"_.

#### **Note:**  
The Library name may be a specific or generic reference. See [**Cascading Language Suffixes**](../../Multilingual%20Capabilities/Cascading%20Language%20Suffixes/Overview.md).

_(Support for entering an expression for a Library name was added in PxPlus 2019.)_  
---|---  
_Panel_ |  Embedded panel name. Click the drop-down arrow for a list of panels in the selected library.  
_(Display Embedded Panel in NOMADS)_ |  **_(Available when a Panel is selected)_** Button (located next to the _Panel_ drop box) that is used to display the selected panel in the **[NOMADS Panel Designer](../../Panel%20Designer/Introduction.md)** where changes can be made if needed and saved. Upon returning to the **Embedded Panel Properties** dialogue, use the **[Refresh](Overview.htm#refresh)** button to refresh the list of controls on the embedded panel. _(The Display Embedded Panel in NOMADS button was added in PxPlus 2021.)_  
_Pre-Display_ |  Determines when the Panel Header _Pre-Display_ logic will execute. Click the drop-down arrow for a list of execute options: _When the embedded panel is detected**(Default)  
**_ _Ignore_  
_Post-Display_ |  Determines when the Panel Header _Post-Display_ logic will execute. Click the drop-down arrow for a list of execute options: _After the embedded controls are drawn**(Default)**_  
 _Prior to the main panel logic  
_ _After the main panel logic  
_ _Ignore_  
_On-Exit_ |  Determines when the Panel Header _On-Exit_ logic will execute. Click the drop-down arrow for a list of execute options: _Prior to main panel logic**(Default)**_  
_After the main panel logic  
_ _Ignore_  
**Position** |  |  _Column_ |  Starting column for the top left corner of the control - numeric expression. Format mask is ##0.00. Valid entries are 0 to 620.  
---|---  
_Line_ |  Starting line for the top left corner of the control - numeric expression. Format mask is ##0.00. Valid entries are 0 to 255.  
  
_(The capability to specify Column and Line coordinates was added in PxPlus 2016.)  
__(Support for increased Column and Line maximums was added in PxPlus 2021.)_  
  
**Attributes** |  |  _Stretchable_ |  Allows the embedded panel to resize itself automatically to adapt to the width or height of the main window or dialogue into which it is inserted. (**_Default:_**  _Off_)

#### **Important Note:**  
When a control is placed within a certain distance from the horizontal and/or vertical edge of an embedded panel that is flagged as _Stretchable_ , the control will be automatically stretched to the horizontal and/or vertical edge of the main window or dialogue into which the embedded panel is inserted.  
  
For desired results, allow additional space between the control and the outer edges of the embedded panel, as any extra blank space will be ignored when the embedded panel is inserted into the main window or dialogue.  
  
---|---  
**Controls on Embedded Panel** |  **_(Display Only)_** Displays information about the controls on the embedded panel. _(The Controls on Embedded Panel list box was added in PxPlus 2018.)_  
_(Refresh)___|  Button that is used to refresh the list of controls on the embedded panel. _(The Refresh button was added in PxPlus 2021.)_  
_Notes_ |  Button that is used to add (or edit) notes/comments for the embedded panel. Maximum 1024 characters. _(The Notes button was added in PxPlus 2023.)_
