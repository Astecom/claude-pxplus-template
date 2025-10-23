# System Parameters 

**'MF'=** |  **_Multi-Line Size Factor_**  
---|---  
  
##  Description

**_(Windows Only)_**

The **'MF'** parameter is used to control the adjustments made to MULTI_LINE controls to accommodate accents and descenders.

By default (and by Microsoft design), all input text fields must be larger than the height of the font used within the control. This will allow adequate white space above and below the text. The **'MF'** parameter is used to determine what height adjustment is to be applied as a percentage of the font height.

For example, the default setting of 50 tells the system to create all MULTI_LINE controls 50% of a single line of fonted text higher than specified in the control definition. This assures adequate white space above/below the text. The 50% space will be distributed equally between the top and bottom of the control. In effect, this means that when you create a MULTI-LINE 1 line high, the system will actually create it 1.5 lines high and internally subtract .25 from its starting line position.

Changing this control will result in smaller MULTI_LINES; however, setting this value too small could result in the loss of accents or descenders on some fonts. Generally, numbers above 25 will work on any font.

#### **Important Note:**  
While changing this parameter allows you to reduce/increase this factor, we **_do not_** recommend it. By default, Windows has historically created multi-line input 50% larger than font size to allow for white space top and bottom. For consistency, we recommend leaving the value at 50.

##  Default

**'MF'=50**

## See Also

**[MULTI_LINE Create/Control Multi-Line Input](../directives/multi_line.md)**
