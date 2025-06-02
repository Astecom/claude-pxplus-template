# Resizing and Persistence

**Panel Resizing** |  **__**  
---|---  
  
By default, NOMADS panels are created as _Fixed_ size, but you can optionally define a panel as resizable. A resizable panel is one whose dimensions can be increased or decreased horizontally or vertically by dragging the panel edges, or maximized and restored by clicking the Maximize/Restore buttons on the panel title bar.

To create a resizable panel, three requirements **_must_** be met:

|  1. |  The panel must be defined as a **_Dialogue_**.  
---|---|---  
|  2. |  The panel must have a **_Maximize Box_**. (This must be set even if you suppress the panel title bar.)  
|  3. |  The **_Sizing Parameter_** must be set to one of the four _non-fixed_ resizing options for a NOMADS panel or specifically set to the _Resizable/Custom_ resizing option for iNomads. (See **Resizing Options** below.)  
  
These settings are specified in the Panel Header Definition on the **[Attributes](../Panel%20Header/Overview.htm#attributes)** tab. The **_Sizing Parameter_** determines overall panel resizing behavior. Certain options, such as _Resizable/Auto Scroll_ and _Resizable/Custom_ , require setting the sizing attributes for individual controls as well.

## Resizing Options

The resizing options determine whether a panel can be resized and determine the behavior of the objects on the panel in terms of their size and location.

_Fixed_ |  Panel size is fixed, and objects have fixed sizes and locations.  
---|---  
_Resizable_ |  Panel is resizable, but objects have fixed sizes and locations.  
_Resizable/Auto Scroll_ |  Panel is resizable, and objects have fixed sizes. However, specific objects can be set to scroll by selecting the _Enable Scrolling_ property in the _Movement_ column of the **[NOMADS+ Toolbar](../../../NOMADS+%20Toolbar/Introduction.md)** or in the **[Custom Sizing Definition Utility](Panel%20Resizing.htm#CustomSizing)** or by right clicking the control to access the popup menu options.  
_Resizable/Auto Size_ |  Panel is resizable, and objects are resized and relocated based on the ratio of the original size to the new panel size.  
_Resizable/Custom_ |  Panel is resizable, and each object can be resized _(Auto Size)_ , stretched in size horizontally or vertically _(Stretch)_ or remain fixed in size _(Fixed)_. Auto Size objects are automatically relocated, whereas Fixed Size objects will have the following _Movement_ options available: _Default, Default (Centered),_ or _Anchored (Top, Bottom, Left, Right, Top/Left, Top/Right, Bottom/Left and Bottom/Right)_. See **[Resizable/Custom Option](Panel%20Resizing.htm#ResizableCustom)** below. The sizing attributes of the individual controls on the panel can be defined in the _Movement_ column of the **[NOMADS+ Toolbar](../../../NOMADS+%20Toolbar/Introduction.md)** or in the **[Custom Sizing Definition Utility](Panel%20Resizing.htm#CustomSizing)** or by right clicking the control to access the popup menu options.

#### **Note:**  
This is the only resize setting supported by iNomads. At least one object on the panel must be set as _Auto Size_ for iNomads to recognize the panel as resizable.  
  
##  Custom Sizing Definition Utility

The Custom Sizing Definition Utility allows you to set overall resize functionality for a panel, as well as for individual controls (where applicable).

To access this utility, select _Utilities > Resize_ from the menu bar, or select the _ReSize_ toolbar option. (The _Movement_ column on the **[NOMADS+ Toolbar](../../../NOMADS+%20Toolbar/Introduction.md)** allows you to set the _Resize_ attribute for individual controls as well.)

The _Panel Sizing_ field in the Custom Sizing Definition is similar to the _Sizing Parameter_ field in the Panel Header Definition (_Attributes_ tab) and determines what criteria will be available in the Custom Sizing Definition based on panel resizing described above. By default, the _Panel Sizing_ field is set to _Fixed_ , as are the values for all of the listed controls. If you change the _Panel Sizing_ field, the criteria displayed (e.g. _Sizing_ , _Movement_) will be accessible based on the sizing option selected.

In general, the resizing behavior of the panel and controls is self-evident for the _Fixed, Resizable, Resizable/Auto Scroll_ and _Resizable/Auto Size_ options. However, the _Resizable/Custom_ option is more complex and requires further explanation. See **Resizable/Custom Option** below.

##  Resizable/Custom Option

When the _Resizable/Custom_ option is selected, one or more controls must be defined as _Auto Size_ for the panel to be resizable. When one or more controls are resizable, a _resize zone_ is established to determine how the controls are resized relative to each other and within the panel borders. The rectangular area surrounding Auto Size objects forms the resize zone. The border regions surrounding this area remain fixed in size to maximize the effect on the objects to be resized.

Objects within a resize zone marked as Auto Size are resized and relocated based on ratios computed for the original size to the new resize zone. Fixed Size objects in the panel are located based on the following options:

_Default_ |  Relocated based on the ratio of the original size to the new resize zone.  
---|---  
_Default (Centered)_ |  Centered within the coordinates that the object would occupy if it was resized along with the panel.  
_Anchored:  
Top  
Bottom_ |  Default horizontal location, anchored vertically to the top or bottom of the resize zone.  
_Anchored:  
Left  
Right_ |  Default vertical location, anchored horizontally to the left or right of the resize zone.  
_Anchored:  
Top/Left  
Top/Right  
Bottom/Left  
Bottom/Right_ |  Anchored to the specified corner.  
  
Fixed Size objects in the border region are located based on the following options:

_Default_ |  Anchored to nearest edge. Objects located in the border regions **_left and right_** of the _resize zone_ have their horizontal locations anchored to the left and right borders of the panel respectively. Objects located in the border regions **_above and below_** the _resize zone_ have their vertical locations anchored to the top and bottom of the panel respectively. Objects located in the **_vertical border_** regions whose vertical location falls within the _resize zone_ are moved vertically with respect to the new size of the _resize zone_. Objects located in the **_horizontal border_** regions whose horizontal location falls within the _resize zone_ are moved horizontally with respect to the new size of the _resize zone_.  
---|---  
_Default (Centered)_ |  Centered within the coordinates that the object would occupy if it was resized along with the panel.  
_Anchored:  
Top  
Bottom_ |  Anchored vertically to the top or bottom of the panel _(default horizontal location)_.  
_Anchored:  
Left  
Right_ |  Anchored horizontally to the left or right of the panel _(default vertical location)_.  
_Anchored:  
Top/Left  
Top/Right  
Bottom/Left  
Bottom/Right_ |  Anchored to the indicated corner of the panel.

#### **Note:**  
These combinations are not necessary for border objects, as all border objects are anchored to at least one panel edge by default.  
  
#### **Note:**  
Default anchoring can take precedence over that specified in the selected option. For example, if an object located directly above the resize zone is defined as being anchored to the bottom, the default anchor to the top will take precedence.

## Resizing Folder Panels

The sizing and placement of folder panels and their objects on a main panel depends primarily on the sizing definition of the main panel. If the main panel does not allow for the resizing of the folder object, then the folder panel and its objects are treated as _Fixed_ , regardless of the folder panel's sizing definition. Otherwise, the sizing and placement of the objects on the folder panel are governed by the sizing definition of the folder panel itself.
