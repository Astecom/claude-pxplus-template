# Extended NOMADS Objects

**eSignature Capture**|   
---|---  
  
The eSignature Capture control is a PxPlus extended control that is used to draw and capture electronic signatures in online and desktop environments. This control can be used either in a NOMADS desktop environment or in an iNomads environment with mobile devices such as tablets and smartphones. The signature is drawn on the control using the native pointing device (finger, stylus, etc.), and the signature can then be captured either as a Portable Network Graphics (_png_) image string or as an HTML-compliant URI data string.

> The eSignature Capture extended control is defined in the NOMADS Panel Designer through the **External Control Properties** window. Select _Signature Capture Control_ from the list of _PVX Plus Controls_ to specify the type of External Control to create.

The eSignature Capture control has properties to control the background and stroke colors, as well as the presence of a black frame around the control. There are also methods to load and retrieve Portable Network Graphics (_png_) image strings or to load an existing image file (_png_ , _gif_ , _jpg_ , etc.). The signature image may also be loaded or retrieved as a Base64 URI _data:image_ format HTML-compliant data string via the control's **value$** property.

As an extended control, the eSignature Capture control is not included in the NOMADS tab sequence and does not have an OnChange event. It is a browser-based control built on the HTML5 canvas element. In an iNomads environment, the eSignature Capture control is supported on any browser that supports the canvas element, and in a NOMADS environment, the local system must have Internet Explorer 9 or later installed.

## Using the eSignature Capture Control

To add an eSignature Capture control to your application panel, follow these steps to create an **[External Control](../../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/COM%20Control/COM%20Control.md)** using the **[NOMADS Panel Designer](../../NOMADS%20Graphical%20Application/Panel%20Designer/Introduction.md)**:

1. |  Select _External Control_ from the **Controls** tool bar. Click and drag the mouse to outline the location of the eSignature Capture control on the panel.   
---|---  
2. |  When the mouse is released, the **External Control Properties** window displays. Enter an _Object Name_ for the control (e.g. SIGCAP).  
3. |  Click the _Ext. Control_ query button and select _PVX Plus Controls_ from the pop-up menu.  
4. |  From the list of _PVX Plus Controls_ that displays, select _Signature Capture Control_.  
5. |  In the **External Control Properties** window, click the **Properties** tab to set the properties. The properties that are specific to the eSignature Capture control include **BackColor$** (or **BackColour$**), **StrokeColor$** (or **StrokeColour$**), and **Frame**. These properties are optional. (Other properties are for use by NOMADS/iNomads). See **[eSignature Capture Properties](esignature%20capture.htm#properties)**.  
6. |  Save the definition.  
  
To give you an example of other functionality that may be added, you can add the following four buttons to the panel: _Capture_ , _Load_ , _Clear_ and _Close_.

> _Capture_ |  The _Capture_ button retrieves the signature as a _png_ image and saves it to a file. The OnChange logic looks like this: sigcap.ctl'saveImageFile("sigtest.png")  
---|---  
_Load_ |  The _Load_ button reads the _png_ file that was saved in the Capture logic and loads it into the control. The OnChange logic looks like this: sigcap.ctl'loadImageFile("sigtest.png")  
_Clear_ |  The _Clear_ button clears the image from the control. The OnChange logic looks like this: sigcap.ctl'clear( )  
_Close_ |  The _Close_ button exits the panel.  
  
## eSignature Capture Properties

The following properties (on the **Properties** tab in the **External Control Properties** window) are specific to the eSignature Capture control:

**Property** |  **Description**  
---|---  
**BackColor $  
BackColour$** |  Background colour. For display only; not included as part of the image. (**_Default_** is White.) Format includes the standard PxPlus colors (e.g. Light Yellow, Dark Gray, etc.), RGB colors (e.g. "RGB 192 80 80") or standard HTML color names (e.g. Navy, Maroon, Olive, Gold, Silver, etc.).  
**col** |  Screen position (column) of the control.  
**cols** |  Width of the control in column units.  
**Frame** |  When set to 1 **_(default)_** , a one pixel black border is displayed around the signature canvas. When set to 0, the frame is suppressed.  
**Image$** |  Contains a Portable Network Graphics (_png_) image string of the signature strokes currently being displayed in the signature canvas. (Does not include background color.) Populating and retrieving this value is comparable to using the **setImage( )** method to load an image into the canvas and the **getImage( )** method to retrieve the image; however, using the **Image$** property is more efficient and is recommended in a WindX environment. See **[eSignature Capture Methods](esignature%20capture.htm#methods)**.  
**Line** |  Screen position of the control.  
**Lines** |  Height of the control in number of lines.  
**StrokeColor $  
StrokeColour$** |  Color of the pen stroke. The color is included as part of the image. (**_Default_** is Black.) Format includes the standard PxPlus colors (e.g. Light Yellow, Dark Gray, etc.), RGB colors (e.g. "RGB 192 80 80") or standard HTML color names (e.g. Navy, Maroon, Olive, Gold, Silver, etc.).  
**value$** |  Contains a Base64 URI _data:image_ format HTML-compliant data string. Its format consists of a header ("data:image/png;base64,") followed by a Portable Network Graphics (_png_) image string converted to Base64. The resulting value can be used with a _src_ _=_ attribute for HTML _< img>_ and  _< canvas>_ elements. The Base64 value is also a convenient format for storage as a field in a native PxPlus file, as the Base64 conversion contains no special characters. **_Example:_** Signature$=SigCap.ctl'value$  
write (channel)iol=Name$,Date$,Signature$  
  
read (channel)iol=Name$,Date$,Signature$  
SigCap.ctl'value$=Signature$ If no strokes have been drawn and no image loaded, or the image has just been cleared, the **value$** property will return a null string ("").

#### **Note:**  
The _png_ image format is very efficient for storing stroke-based images.  
  
## eSignature Capture Methods

The following methods are supported:

**Method** |  **Description**  
---|---  
**clear( )** |  Clears the signature canvas.  
**getImage $( )** |  Returns a Portable Network Graphics (_png_) image string of the signature strokes. (Does not include background color.) See  [**Image$**](esignature%20capture.htm#image) property.

#### **Note:**  
The _png_ image format is very efficient for storing stroke-based images.  
  
**loadImageFile(**_file.png$_**)** |  Loads the specified _png_ file into the signature canvas.  
**saveImageFile(**_file.png$_**)** |  Saves the signature strokes to the specified _png_ file name. Creates the file if it does not exist and purges an existing file before writing to it.  
**setImage(**_png_ _$_**)** |  Loads a Portable Network Graphics (_png_) image into the signature canvas. **_Where:_**  
  
_png_ _$_ is the Portable Network Graphics image string. See  [**Image$**](esignature%20capture.htm#image) property.  
**setImageFile $(**_url_ _$_**)** |  Loads an existing image file into the signature canvas using a URL reference. The image can be types other than _png_ (i.e. _jpg, gif, tif_ , etc.).  
  
**_Example:_**  
  
sigcap.ctl'setImageFile("images/mysig.png")  
sigcap.ctl'setImageFile("file:///c:/resources/images/logo.gif")  
sigcap.ctl'setImageFile("http://www.mydomain.com/images/mypic.jpg")

#### **Note:**  
If a URL to an external website is used to load an image, you cannot retrieve the contents of the signature canvas using **'value$** or **getImage$( )** , as a Dom exception 18 security error will occur.
