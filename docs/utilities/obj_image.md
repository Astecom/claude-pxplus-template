# Utility Routines 

***OBJ/IMAGE** |  **_Create Image Object_**  
---|---  
  
## Format

_oHandle_ __ = **NEW("*obj/image",**_imageFilename_ _$_**[** , _imageType_ _$_**][** ,_dpi$_**][** , _width$_**][** , _height$_**])**

**_Where:_**

_imageFilename_ _$_ |  Path and filename of the image to create.  
---|---  
_imageType_ _$_ |  Optional parameter for the object creation that may contain one of the following: **_png_** , **_jpg_** , or **_jpeg_**. Defaults to using the file extension of the _imageFilename_ _$_ to determine image type.  
_dpi$_ |  Dots per inch. Defaults to 120.  
_width$_ |  Width (in pixels) of the created image. Defaults to 1020 (1020/120 = 8.5 in).  
_height$_ |  Height (in pixels) of the created image. Defaults to 1320 (1320/120 = 11 in).  
  
## Description

This object is used to create an image on Windows or UNIX/Linux. It supports the creation of **_png_** , **_jpg_** , or **_jpeg_** images.

_(The Create Image object was added in PxPlus 2020.)_

To create an image, instantiate the object and then use the **ImageChannel** property to add things to the image. Then, drop the object and the image will be created.

#### **Note:**  
You can use the **@X/Y(=**_num_**)** function to use pixel positioning when adding things to the image.

The following **_property_** is supported:

|  **ImageChannel******|  Channel of image to create. Use this to add things to the image.  
---|---|---  
  
On UNIX/Linux, **ImageChannel** cannot be used as an input channel for the 'PICTURE' mnemonic, as this only supports *BITMAP*.

## Example

The following code provides an example of creating an image with the ***obj/image** object:

> imgObj=new("*obj/image","newimage.png","","150","1500","1500")  
> imgChn=imgObj'ImageChannel  
>  print (imgChn)'font'("Arial",-14)  
>  print (imgChn)'rectangle'(@x(=5),@y(=100),@x(=900),@y(=250))  
>  print (imgChn)'text'(@x(=1),@y(=300),@x(=500),@y(=350),"Howdy")  
>  print (imgChn)'picture'(@x(=1),@y(=500),@x(=500),@y(=1000),"image.png",2)  
>  drop object imgObj

## See Also

**[@X( ) / @Y( ) Convert X/Y Coordinates](../functions/~x.md)**
