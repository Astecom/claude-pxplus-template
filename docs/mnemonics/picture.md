# Mnemonics 

**'PICTURE'** |  **_Define/Draw Picture_**  
---|---  
  
**GUI Display/Printer**

##  Formats

1. |  _Display/Output Picture:_ |  **'PICTURE'([**_x,y,x,y_ ,**]**  _file_and_attrib_ _$_**[** ,_display_opt_**])**  
---|---|---  
2. |  _List Embedded Pictures:_ |  _variable$_**=** '**PICTURE** '**(*)**  
  
**_Where:_**

***** |  Use an ***** (_asterisk_) to have the system return a list of its embedded pictures (e.g. X$='PICTURE'(*) PRINT X$).  
---|---  
_x,y,x,y_ |  Point/position coordinates for top left and bottom right, in graphical units. Numeric expressions. Optional when used in List_View text.  
_file_and_attrib_ _$_ |  The graphic file must be specified as either one of the following: A ** _filename_** of a graphic (e.g. C:\your_PATH\your.bmp). String expression. The icon filename must have **_.ico_** as an extension. A ** _string_** consisting of a **#** and the channel containing the graphic; i.e. the channel opened via **[*BITMAP*](../file_handling/~bitmap~.md)**.

#### **Note:**  
If printing to a ***PDF*** channel on macOS or AIX, only **_.jpg_** images are supported. On Linux, **_.jpg_** and **_.png_** images are supported.  
  
_(Support for .png images on Linux was added in PxPlus 2019.)_

Attributes can be specified by appending them after the file, separated by commas. Supported attributes are: |  **G** |  Specifies that all colors of RGB value 192,192,192 (Light Gray) are considered to be transparent.  
---|---  
**T** |  Specifies that the color of the first pixel in the upper left corner of the image is to be transparent.

#### **Note:**  
When using the 'T' option, the color will be taken from the original image, regardless of rotation, cropping or flipping. If inverted, the transparency color will also be inverted.  
  
**R:_nn_** (or **ROTATE:_nn_**) |  Specifies that the image is to be rotated '_nn_ ' degrees counter clockwise. _(added in PxPlus v10.10)_  
**C:_x1:y1:x2:y2_** (or **CROP:_x1:y1:x2:y2_**) |  Specifies that the image is to be cropped starting at _x1/y1_ through _x2/y2_. **_Where:_** _x1_ _, y1, x2, y2_ are the number of pixels from the top left corner of the image. _(added in PxPlus v10.10)_  
**F:V** , **F:H** or **F:B**  
  
(or **FLIP:HORIZONTAL | VERTICAL | BOTH**) |  Specifies that the image must be flipped horizontally (left/right), vertically (up/down), or both. _(added in PxPlus v10.20)_  
**I** (or **INVERT**) |  Specifies that the colors are to be inverted. _(added in PxPlus v10.20)_  
**B** (or **BLACK &WHITE**) |  Specifies that the image is to be converted to Gray Scale (black and white). _(added in PxPlus v11.00)_  
**<**_URL_**>** |  **_(*PDF* Only)_** Changes the picture into a hyperlink. **_Where:_** _URL_ is the destination of the hyperlink. See **[Hyperlinks](picture.htm#Mark4)**.

#### **Note:**  
This option **_requires_** the use of the Haru PDF library; therefore, the **['HP'](../parameters/hp.md)** system parameter **_must_** be set.

_(added in PxPlus 2019)_  
_display_opt_ |  Numeric code used to define style and alignment for use when displaying graphic. Supported options are: 0 = Align at top-left (See **Note** below)  
1 = Center/crop within region  
2 = Scale to fit (See **Note** below)  
3 = Tile bitmaps to fill the given area (See **Note** below)  
4 = Halftone for enhanced legibility (may lighten black images)  
5 = Scale with proper aspect ratio but output in top left of region  
6 = Scale with proper aspect ratio but centered in the region  
7 = Scale picture to completely fill region and center (See **Note** below) _(added in PxPlus 2019)_

#### **Note:**  
**_For options 0, 2 and 3:_**  
The image is cropped to fit within the region for the screen and **[*WINPRT*](../file_handling/~winprt~.md)** output. Cropping is **_not_** supported with ***PDF*** ; therefore, pictures sent to ***PDF*** that are larger than their defined region (based on 72 pixels to the inch) will be auto-scaled to avoid displaying outside the defined region.  
  
**_For option 3 (tiled):_**  
When sending to ***PDF*** , only images that fit completely inside the region will be output (based on 72 pixels per inch).  
  
**_For option 7:_**  
Once the image is scaled to cover, any overage is cropped. (This option is **_not_** supported for ***PDF*** , which uses option 6 instead.)  
  
##  Description

Use **'PICTURE'** to draw (print) a picture on the device (e.g. terminal). _x,__y,x,y_ __ coordinates define placement and size (top left and bottom right corners). Use graphical units or **@X(**_col_**)** and **@Y(**_line_**)** functions for the various coordinates.

For displaying image transparency, place a G or T at the end of the image filename.

**_Example:_**

> print 'picture'(1,1,100,100,"myimage.bmp,T",0)  
>  button 10,@(40,2,10,1.6)="{myicon.ico,T,F:V}&Name"

#### **Note:**  
PxPlus supports alpha channel transparency processing of bitmap images for the **'PICTURE'** mnemonic (for **_console output only_** , not printer and PDF).  
  
_(Alpha channel support was added in PxPlus 2017.)_

For internal images (i.e. those specified with an **!** (_exclamation point_) within braces {!imagename}), it is not necessary to use the G option because the system always assumes this transparency on an internal bitmap unless it is overridden with T. See **[Internal vs. External Images](../appendix/displaying_bitmaps~icons.htm#Mark1)** for information on the handling of internal and external images.

Transparent images are only supported when the picture does not need to be scaled. A scaled image cannot be masked since the scaling process will alter color codes.

#### **Note:**  
The transparency options are not intended for printed output (i.e. *WINPRT*, *BITMAP*, *PDF*) and can produce incorrect results. Under UNIX/Linux, the use of these options with *PDF* will generate an Error #99: Feature not supported.

To remove an image at _x,y,x,y_ coordinates, use a NULL pathname.

**_Example:_**

> print 'picture'(1,1,100,100,"")

_(The ability to use a NULL pathname was added in PxPlus v10.10.)_

##  Hyperlinks

**_Picture Hyperlinks_**

If using the LibHaru **[*PDF*](../file_handling/~pdf~.htm#Mark27)** interface, i.e. **['HP'](../parameters/hp.md)** is **_On_** , and you print to a ***PDF*** channel using **'PICTURE'** with the **_<_**_URL**>**_ attribute, the picture will become a hyperlink with _URL_ as the destination.

PDF viewer applications will attempt to guess whether a URL is a Web link or a file link. To prevent the PDF viewer application from being incorrect, the recommendation is that you prefix Web links with **_http://_** , **_https://_** or **_ftp://_** and prefix file links with **_file:///_**.

If you are creating a file link and using the **_file:///_** prefix, you **_must_** use an absolute path to the file. However, if you want to use a relative path to the file, do **_not_** use the **_file:///_** prefix and instead just specify the relative path. For example, if the open PDF file is in the directory _C:\myapp\reports_ and you want to link to another PDF file called _abc.pdf_ located in _C:\myapp\reports\2016,_ the URL must be specified as _2016\abc.pdf_.

**_Example:_**

> open (pdf_chan)"*PDF*;file=C:\my_app\abc\report.pdf"  
>  print (pdf_chan)'picture'(1,1,100,100,"C:\my_app\abc\resources\mylogo.png,<https://www.mycompany.com>",2)  
> print (pdf_chan)'picture'(500,800,700,880,"C:\my_app\resources\mapbutton.png,<file:///c:/my_app/abc/map.pdf>")  
>  close (pdf_chan)

_(Support for picture hyperlinks in PDFs if using LibHaru was added in PxPlus 2019.)_
