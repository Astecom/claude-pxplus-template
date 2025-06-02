# Mnemonics

**'RECTANGLE'** |  **_Draw a Rectangle_**  
---|---  
  
**GUI Display/Printer**

##  Format

**'RECTANGLE'(**_x,y,x,y_**[**_,radius_**[**_,attrib$_**]])**

**_Where:_**

_x_**,**_y,x,y_ |  Coordinates for top left/bottom right corners, in graphical units.  
---|---  
_radius_ |  Positive integer representing the _rounding factor_ for corners. A negative value will have its sign flipped. If the radius exceeds half the height (or width), the system assumes a semi-circle is used to round the edge.  
_attrib_ _$_ |  Optional attribute string. The valid code is: |  **<**_URL_**>** |  **_(*PDF* Only)_** Changes the rectangle into a hyperlink.  _(added in PxPlus 2019)_ **_Where:_** _URL_ is the destination of the hyperlink. See **[Hyperlinks](rectangle.htm#Mark5)**.

#### **Note:**  
This option **_requires_** the use of the Haru PDF library; therefore, the **['HP'](../parameters/hp.md)** system parameter **_must_** be set.  
  
---|---  
  
##  Description

Use **'RECTANGLE'** to draw (print) a rectangle defined by two sets of x,y coordinates. Use graphical units or **@X(**_col_**)** and **@Y(**_line_**)** functions for the coordinates. The **'RECTANGLE'** mnemonic uses current attributes for the **['FILL'](fill.md)** and **['PEN'](pen.md)** mnemonics.

##  Hyperlinks

**_Rectangle Hyperlinks_**

If using the LibHaru **[*PDF*](../file_handling/~pdf~.htm#Mark27)** interface, i.e. **['HP'](../parameters/hp.md)** is **_On_** , and you print to a ***PDF*** channel using **'RECTANGLE'** with the **<**_URL_**>** attribute, the rectangle will become a hyperlink with _URL_ as the destination. This can also be used to create an arbitrary region in the PDF that is a hyperlink. By setting **['PEN'](pen.md)** to 0, the rectangle will not be drawn, but the hyperlink will be created.

PDF viewer applications will attempt to guess whether a URL is a Web link or a file link. To prevent the PDF viewer application from being incorrect, the recommendation is that you prefix Web links with **_http://_** , **_https://_** or **_ftp://_** and prefix file links with **_file:///_**.

If you are creating a file link and using the **_file:///_** prefix, you **_must_** use an absolute path to the file. However, if you want to use a relative path to the file, do **_not_** use the **_file:///_** prefix and instead just specify the relative path. For example, if the open PDF file is in the directory _C:\myapp\reports_ and you want to link to another PDF file called _abc.pdf_ located in _C:\myapp\reports\2016,_ the URL must be specified as _2016\abc.pdf_.

**_Example:_**

> open (pdf_chan)"*PDF*;file=C:\my_app\abc\report.pdf"  
>  print (pdf_chan)'pen'(1,3,8),'fill'(2,6)  
>  print (pdf_chan)'rectangle'(200,200,600,600,0,"<https://www.pvxplus.com>")  
> print (pdf_chan)'pen'(0,0,0)  
>  print (pdf_chan)'rectangle'(800,100,900,400,0,"<file:///C:/my_app/abc/map.pdf>")  
>  close (pdf_chan)

_(Support for rectangle hyperlinks in PDFs if using LibHaru was added in PxPlus 2019.)_

##  Example

print 'pen'(1,3,8),'fill'(2,6)  
print 'rectangle'(100,100,400,600)  
print 'rectangle'(700,100,820,220,30)
