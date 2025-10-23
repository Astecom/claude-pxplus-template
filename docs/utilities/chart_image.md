# Utility Routines

***TOOLS/CHARTIMAGE** |  **_Generate a Chart Image File_**  
---|---  
  
## Formats

1. |  _Generate a Chart Image File:_ |  **CALL** "***tools/chartimage** ", **ERR=**_stmtref_ , _query$, library$, chart$, imgPath$_ **[** ,_imgWidth_ _, imgHeight_**]**  
---|---|---  
2. |  _Load a Chart from a Query Definition_ _:_ |  **CALL** "***tools/chartimage** ", **ERR=**_stmtref_ _, query$, library$, chart$, control,_ **[** ,_controlSettings_ _, var_iol$, var_rec$_**]**  
3. |  _Get Chart Definition:_ |  **CALL** "***tools/chartimage;GetChartInfo** ", **ERR** =_stmtref_ , _query$_ , _library$_ , _chart$_ , _object_  
  
_(The Get Chart Definition format was added in PxPlus 2022.)_

**_Where:_**

_query$_ |  Name of the query which owns the chart.  
---|---  
_library$_ |  Path of the library where the query definition resides.  
_chart$_ |  Name given to the chart definition associated with the query. (**_Must_** be a public definition)  
_object_ |  Variable to receive an *plus/winutil/autochart object that contains the chart definition.This **_must_** be freed by the caller when no longer needed. _(added in PxPlus 2022)_  
_imgPath_ _$_ |  Path for the resulting image file. (**_Must_** include image type suffix; i.e. ._png_ _, .jpg, .bmp, .htm/.html_)  
_imgWidth_ |  Width of the resulting image in pixels. (**_Optional_** \- Default is 400 if not specified)  
_imgHeight_ |  Height of the resulting image in pixels. (**_Optional_** \- Default is 300 if not specified)

#### **Note:**  
If an _.htm_ or _.html_ file is being generated for a Plus chart, set _imgWidth_ and _imgHeight_ to 0 (zero) to create HTML for a responsive chart (i.e. a chart that auto-resizes).  
  
_control_ |  CTL value of the chart control to be loaded.  _(added in PxPlus 2019)_  
_controlSettings_ |  Values are: _(added in PxPlus 2019)_ 0 - Use chart format/titles from Query AutoChart definition  
1 - Use chart format/titles from control definition  
_var_iol_ _$_ |  **_(Optional)_** Compiled IOList of variables to be passed to the Load logic. _(added in PxPlus 2019 Update 1)_  
_var_rec_ _$_ |  **_(Optional)_** Values of variables in the IOList derived by **REC(**_var_iol_ _$_**)**. _(added in PxPlus 2019 Update 1)_  
_stmtref_ |  Error transfer. Errors may result when: |  Query library does not exist |  Error #12  
---|---  
Query definition does not exist |  Error #11  
Chart definition files do not exist |  Error #12  
Chart definition does not exist |  Error #11  
Errors accessing temporary HTML file |  Various errors  
Errors generating image |  Error #201 with explanatory messages  
  
## Description

This utility creates an image file (_.png, .jpg, .bmp_ or _.htm_) based on a chart definition associated with a PxPlus Query+ public **[AutoChart Definition](../NOMADS%20AutoChart/Defining%20and%20Displaying%20an%20AutoChart.md)**.

Not all chart brands are supported when generating images. Plus, RGraph and Google charts can be rendered on a Windows system; however, only Plus charts can be rendered on a Linux system. See **Important Note** , which outlines further restrictions.

If the specified chart brand is not supported by image generation, Plus charts will be used. To generate chart images, Plus charts are recommended, as well as using the ._png_ image format, which does not require additional conversion.

#### **Important Note:**  
To generate a chart image, certain third-party applications are **_required_** :  
  
On **_Windows_** servers, the **_Chrome_** browser is recommended for generating images based on Plus, Google and RGraph charts; however, the **_Firefox_** browser (v57 and later) can be used to generate images based on Plus charts.  
  
On **_Linux_** servers, the **_Firefox_** browser (v57 and later) will generate _.png_ images for Plus charts. To generate _.jpg_ and _.bmp_ images, the **_ImageMagick_** command line tool must also be installed.

This utility can also be used to generate data to load a chart control based upon a PxPlus Query+ _public_ AutoChart definition using **[Format 2](chart_image.htm#Mark2)**.

_(Plus charts were added in PxPlus 2019.)_
