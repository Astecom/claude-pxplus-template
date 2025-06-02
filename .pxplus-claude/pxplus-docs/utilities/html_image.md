# Utility Routines

***TOOLS/HTMLIMAGE** |  **_Generate an Image of a Web Page_**  
---|---  
  
## Invocation

**CALL** "***tools/htmlimage** ", **ERR=**_stmtref,url$,imgFile$_**[** ,_imgWidth,imgHeight_**]**

**_Where:_**

_url_ _$_ |  URL to the Web page or HTML file whose image is to be generated. The following can apply:  
  
Can be a URL (starts with _http://_ or _https://_)  
Can be a file reference (starts with _file:///_)  
If missing _http://_ , _https://_ or _file:///_ , default will prefix with _file:///_  
---|---  
_imgFile_ _$_ |  Path of the image file to be generated. It **_must_** include the image file suffix (i.e. _.jpg_ , ._png_ , _.bmp_).  
_imgWidth_ _  
imgHeight_ |  Optional dimensions (in pixels) of the Web page image. If not specified, dimensions will default to 800 pixels wide by 600 pixels high.  
_stmtref_ |  Error transfer. Most errors result in an Error #201 with specific error messages.  
  
## Description

The "***tools/htmlimage** " utility allows you to generate an image file (_.png_ , ._jpg_ , _.bmp_) based on a URL, whether it is a website reference (starts with _http://_ or _https:__//_) or a reference to an HTML file (starts with _file:///_).

#### **Important Note:**  
To generate an image based on a URL, certain third-party applications are **_required_** :  
  
On **_Windows_** servers, the **_Chrome_** browser is recommended for generating images; however, the **_Firefox_** browser (v57 and later) can also be used to generate images.  
  
On ** _Linux_** servers, the **_Firefox_** browser (v57 and later) will generate _.png_ images. To generate _.jpg_ and _.bmp_ images, the **_ImageMagick_** command line tool must also be installed.
