# Introduction to Using PxPlus

**Handling Images and Icons** |  **__**  
---|---  
  
The following techniques allow you to retrieve and incorporate images and icons for a variety of purposes in your graphical user interface based applications:

  * Display images via the **['PICTURE'](../../../mnemonics/picture.md)** mnemonic (see **[Display Objects](../../Graphical%20User%20Interfaces/Display%20Objects/Overview.md)**).
  * Associate images for graphical user interface controls (see **[Control Objects](../../Graphical%20User%20Interfaces/Control%20Objects/Overview.md)**).
  * Specify icons to customize the upper left corner of dialogue windows via the **['OPTION'](../../../mnemonics/option.md)** mnemonic or INI file setting, ICON=.



For information on handling images in NOMADS, see [**PxPlus NOMADS**](../../../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Image%20Control/Image.md).

For information on creating graphical controls and other graphical objects, see **[Graphical User Interfaces](../../Graphical%20User%20Interfaces/Introduction.md)**.

## Internal vs. External Images

Images are recognized as **_internal_** in PxPlus if they have a leading **!**  _(exclamation mark)_ in their file names:

> PRINT 'PICTURE'(220,210,600,500,"!Binoculars",2)

Internal images can be accessed if they are embedded within the PxPlus executable itself, supplied in an associated resource library, or exist in a file located in the *BMP directory. Use the **['PICTURE'](../../../mnemonics/picture.md)** mnemonic to return a list of available internal images (including the set of standard OS icons):

> X$='PICTURE'(*)   
>  PRINT X$

To access images that are **_external_** to PxPlus, specify the path and file name instead of the **!**  _(exclamation mark)_ :

> PRINT 'PICTURE'(1,1,100,100,"C:\WINDOWS\CLOUDS.BMP,T",0)

#### **Note:**  
The names of image files placed in the *BMP directory should be in lowercase.

##  Recognized File Types

PxPlus supports several image formats: _bmp_ , _jpg, ico, gif, tiff, png, pcx, pax, wmf, emf, apm_ and _tga_ _._ Knowing which image format to use with PxPlus depends on how you want the image to be handled with regards to scaling, masking and transparency.

The following table explains how the four common image formats - _jpg, bmp, png, gif_ \- handle images.

_jpg_ |  **_(Not Suitable for Image Transparency or Masking)_** A _jpg_ file loses true color rendering in exchange for smaller images file sizes. It blends nearby color using an algorithm, which is suitable for rendering picture/photos, as the file sizes are smaller and faster to render. However, if you tell the system that the pixel in the top left corner is transparent, that color may not exactly match the other pixels in the image.  
---|---  
_bmp_ |  **_(Suitable for Image Transparency or Masking, Not Suitable for Scaling)_** The issue with a _bmp_ file is that when it is scaled, neighboring colors are blended; therefore, colors will change, resulting in an incomplete mask.  
_png_ |  **_(Suitable for Transparency with Scaling - PxPlus 2017 Only)_** **_Prior to PxPlus 2017_** , PxPlus used the _png_ transparency (alpha channel) to generate a mask for the image, resulting in similar issues as _bmp_ formats. **_As of PxPlus 2017_** , _png_ alpha channel support was added, improving the handling of image transparency.  
_gif_ |  Same as _bmp._  
  
#### **Note:**  
For cleanly scaled images with transparency, the recommendation is to use _png_ ** _in PxPlus 2017_**. Otherwise, _gif_ or _bmp_ can be used if scaling is not needed, and _jpg_ should **_never_** be used if transparency is expected.

## Sizing and Placement

For some controls (i.e. **LIST_BOX** ,**MENU_BAR** and **POPUP_MENU**), the dimensions of the first bitmap/icon defined in a list of elements is assumed to be the default size and placement for all images in the control. See **[Control Objects](../../Graphical%20User%20Interfaces/Control%20Objects/Overview.md)**.

## Enhanced Icons

PxPlus is able to use _ico_ files that contain multiple icons, different sizes and different colour formats. Icons can also be retrieved from other file types, including: _.exe, .dll, .ocx, .drv, .cpl, .scr_ and _.icl_ (icon libraries). See **[Icon File Types](Overview.htm#Mark1)**.

The following optional syntax items may be applied in the **['PICTURE'](../../../mnemonics/picture.md)** and **['OPTION'](../../../mnemonics/option.md)** mnemonics, as well as in control object directives to define the location and/or attributes of an icon to be retrieved from an enhanced icon source:

> [ _filename_ ] [ **@**_resourcename_ | **@**_resourcenum_ ] [ **%**_size_ ] [ **,T** | **,G** ]

**_Where:_**

|  _filename_ |  File containing icon(s). If no file name is given, then the currently loaded resource library is searched.  
---|---|---  
|  @_resourcename_ |  String name of the specific resource identifying the icon. If no resource is specified, the first icon in the file will be loaded.  
|  @_resourcenum_ |  Specific resource number identifying the icon. If no resource is specified, the first icon in the file will be loaded.  
|  _%size_ |  1 to 3 digit number of pixels representing the X or Y size of the icon displayed. This size is used for both X and Y axes; e.g. %16 displays the icon in 16 x 16 pixels. If no _%size_ is given, then the first format available for the icon is used. If %0 is specified, then the default OS icon size is used.  
**** |  **T** _or_**G** |  Transparency substitution indicator where**T** means use upper leftmost pixel colour or**G** means use colour RGB: 192,192,192.  
  
#### **Note:**  
Syntax options (if applied) must appear in the above defined order.

Standard PxPlus search rules apply to the file names. A leading **!**  _(exclamation mark)_ will also search the *BMP directory. Colour depth selection (16, 256 or 24-bit) is chosen automatically by the OS based on the user's current video card colour depth and the colour depth of the icon available within the file.

**_Example:_**

> C:\Pvx\Pvx.ico%16,T  
>  C:\Windows\System32\Shell32.dll@137%32,T  
>  C:\Windows\System32\Shell32.dll@137%32,T  
> !myico.ico%48  
>  !myico.ico%48,G  
>  @PxPlus,T  
>  <path>\pxplus.exe@PxPlus%16,T

**_Icon File Types_**

PxPlus accepts icons from the following file extensions:

_.ico_ |  Does not support loading by resource name/resource number. You must specify the file name (with or without path) ending in _.ico_.  
---|---  
_.exe, .dll, .ocx, .drv, .cpl, .scr_ (and any file type from which the MS Windows API allows a LoadImage) |  You must specify a resource name or number.  
_.icl_ |  Icon library (commonly used by icon editing tools). You must specify a resource number only (0 based). It ignores icon size specifications.  
  
If you intend to use icons from an _.icl_ , it is recommended that you convert it to a DLL so that you may take advantage of any size specifications.  
  
**_Enhanced Icons in INI Files_**

The **[Config]** section of your INI file allows for an **ICON=** using any of the above syntax for specifying the icon. If no file name is given or there is no leading **@** sign, then the name given is assumed to be a resource name from either the currently loaded resource library (if any) or from the PxPlus executable.

**_Example:_**

> [Config]  
>  Icon=myname ! Would be the icon "myname" in a resource library  
>  Icon=@myname ! Same as above  
>  Icon=mydll.dll@myapp

#### **Note:**  
Specifying an icon in an INI file can impact your user license count for PxPlus, as the icon name will be used for the Window Class Name, and PxPlus sessions with different Class Names do not share their user licenses.

**_Enhanced Icons in Objects_**

When using enhanced icons in objects, the file name and syntax must be enclosed in **{ }**  _(curly braces)_.

**_Example:_**

> BUTTON 10,@(40,2,8,3)="{pxplus.exe@PxPlus%32,T}"  
>  BUTTON 10,@(40,2,10,2)="{@90w%32,T}"

#### **Note:**  
Transparency effects are currently **_not_** supported in menus or pop-up menus.
