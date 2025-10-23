# Language Reference - Appendix   
  
**Displaying Bitmaps/Icons** |   
---|---  
  
Using the following techniques in PxPlus, you can retrieve and incorporate bitmaps and icons for a variety of uses in your graphical user interface based applications:

|  Display images via the **['PICTURE'](../mnemonics/picture.md)** mnemonic.  
---|---  
|  Associate images for graphical user interface controls using the control object directives **[BUTTON](../directives/button.md)**, **[CHECK_BOX](../directives/check_box.md)**, **[LIST_BOX](../directives/list_box.md)**, **[RADIO_BUTTON](../directives/radio_button.md)**, **[TRISTATE_BOX](../directives/tristate_box.md)**, **[MENU_BAR](../directives/menu_bar.md)**, **[POPUP_MENU](../directives/popup_menu.md)**.  
|  Specify icons to customize the upper left corner of dialogue windows via the **['OPTION'](../mnemonics/option.md)** mnemonic or the ICON= INI file setting.  
  
In addition, the NOMADS toolset provides a fully integrated development environment for creating and modifying graphical screen layouts. For information on handling images in NOMADS, see **[Images/Pictures](../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Image%20Control/Image.md)**.

Some of the general concepts and PxPlus functionality involving the use of images in PxPlus applications are explained below.

##  Internal vs. External Images

Images are recognized as **_internal_** in PxPlus if they have a leading **!**  _exclamation_ _mark_ in their filenames:

> PRINT 'PICTURE'(220,210,600,500,"!Binoculars",2)

Internal images can be accessed if they are embedded within the PxPlus executable itself, supplied in an associated resource library, or exist in a file located in the *BMP directory. All internal images have an implied light gray transparency.

#### **Note:**  
When applying transparency to _.png_ and _.gif_ image files, the system will handle them the same, regardless of their source.  
  
_(Support for handling .png and .gif image files the same when applying transparency was added in PxPlus 2017 Update 0004.)_

Use the **['PICTURE'](../mnemonics/picture.md)** mnemonic to return a list of available internal images (including the set of standard operating system icons).

**_Example:_**

> X$='PICTURE'(*)  
>  PRINT X$ 

To access images that are **_external_** to PxPlus, specify the path and filename instead of the **!**  _(exclamation point)_ :

> PRINT 'PICTURE'(1,1,100,100,"C:\WINDOWS\CLOUDS.BMP,T",0)

##  Internal Images

The following table shows the internal bitmap images (as of PxPlus 2014) that can be referenced by specifying the image name prefixed by an **!** (_exclamation_ _point_):

> **_Pre-PxPlus 2014 Image Library_**

Versions of PxPlus/ProvideX  _prior PxPlus 2014_ had a different set of images, mostly low-resolution using only 16 colors. If you wish to retain these older images, PxPlus 2014 is shipped with a _.dll_ (oldimages.dll) which contains these older images that can be added to your system as a resource library using the following command:

> SETDEV (0) SET "ResourceLib" TO "oldimages.dll"

Alternatively, the ResourceLib may be included in your INI file.

## Recognized File Types

By default, only bitmap _(bmp)_ or icon _(ico)_ file types are supported automatically in PxPlus. By using the **_Multiple Image Type_** feature, you can extend graphic image support to include other file types such as _jpg, tiff, png, pcx, pax, wmf, emf, apm_ and _tga_.

##  Enhanced Icons

PxPlus is also able to use _ico_ files that contain multiple icons, different sizes, and different colour formats. Icons can also be retrieved from other file types including _.exe, .dll, .ocx, .drv, .cpl, .scr_ and ._icl_ (icon libraries). See **[Icon File Types](displaying_bitmaps~icons.htm#Mark6)** below.

The following optional syntax items may be applied in the **['PICTURE'](../mnemonics/picture.md)** and **['OPTION'](../mnemonics/option.md)** mnemonics, as well as in control object directives, to define the location and attributes of an icon to be retrieved from an enhanced icon source: 

> [_filename_] [**@**_resourcename_ | **@**_resourcenum_] [**%**_size_] [**,T** |**,G** | **,N**] 

**_Where:_**

_filename_ |  File containing icon(s). If no filename is given, then the currently loaded resource library is searched.  
---|---  
**@**_resourcename_ |  String name of the specific resource identifying the icon. If no resource is specified, the first icon in the file will be loaded.  
**@**_resourcenum_ |  Specific resource number identifying the icon. If no resource is specified, the first icon in the file will be loaded.  
_%size_ |  1 to 3 digit number of pixels representing the X or Y size of the icon displayed. This size is used for both X and Y axes; e.g. %16 displays the icon in 16 x 16 pixels. If no _%size_ is given, then the first format available for the icon is used. If %0 is specified, then the default operating system icon size is used.  
**T, G** _or_ **N** |  Transparency substitution indicator where (can also be applied to internal images): **T** \- Means use upper left most pixel colour  
**G** \- Means use light gray colour RGB: 192,192,192  
**N** \- Means no transparency (allows override for "!" bitmaps which always imply Light gray transparency)  
  
#### **Note:**  
Syntax options (if applied) must appear in the above defined order. In addition, note that the T, G or N options can be applied to internal bitmaps (those prefixed with "!").

Standard PxPlus search rules apply to the filenames. A leading exclamation will also search the *BMP directory. Colour depth selection (16, 256 or 24-bit) is chosen automatically by the operating system based on the user's current video card colour depth and the colour depth of the icon available within the file.

**_Examples:_**

> C:\Pvx\Pvx.ico%16,T C:\Windows\System32\Shell32.dll@137%32,T C:\Windows\System32\Shell32.dll@137%32,T   
>  !myico.ico%48   
>  !myico.ico%48,G   
>  @PxPlus,T   
>  <path>\pxplus.exe@PxPlus%16,T

**_Icon File Types_**

PxPlus accepts icons from the following file extensions:

**File Suffix** |  **Description**  
---|---  
_.ico_ |  Does not support loading by resource name/resource number. You must specify the filename (with or without path) ending in _.ico_.  
_.exe, .dll, .ocx, .drv, .cpl, .scr_ |  _(Any file type that the MS Windows API allows a LoadImage from)_. You must specify a resource name or number.  
_.icl_ |  Icon Library (commonly used by Icon editing tools). You must specify a resource number only (0 based). It ignores icon size specifications.

#### **Note:**  
If you intend to use icons from an _.icl_ , it is recommended that you convert it to a _.dll_ so that you may take advantage of any size specifications.  
  
**_Enhanced Icons in INI Files_**

The [Config] section of your INI file, allows for an ICON= using any of the above syntax for specifying the icon. If no filename is given or there is no leading @ sign, then the name given is assumed to be a resource name from either the currently loaded resource library (if any) or from the PxPlus executable:

> [Config]   
>  Icon=myname ! Would be the icon "myname" in a resource library  
>  Icon=@myname ! Same as above   
>  Icon=mydll.dll@myapp

#### **Note:**  
Specifying an icon in a INI file can impact your user license count for PxPlus, as the icon name will be used for the Window Class Name, and PxPlus sessions with different Class Names do not share their user licenses.

**_Enhanced Icons in Objects_**

When using enhanced icons in objects, the filename and syntax must be enclosed in curly braces:

> BUTTON 10,@(40,2,8,3)="{pxplus.exe@PxPlus%32,T}" BUTTON 10,@(40,2,10,2)="{@90w%32,T}"

#### **Note:**  
Transparency effects are currently not supported in menus or popup menus.
