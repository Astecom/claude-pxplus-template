# System Parameters

**'TC'=** |  **_Tip Colour_**  
---|---  
  
##  Description

Assigns the fill colour for the "tip" window.

Supported options include:

**-1** |  Use Windows Theme.  
---|---  
**-2** |  Forces tips with headers to display as floating external tips using the **[*tooltip](../utilities/tooltip.md)** program to display HTML. See **[Defining an Info Tip](../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Defining%20an%20Info%20Tip.md)**.  
**-3** |  Use the **[TipColor](../mnemonics/option.htm#tipclr)** (or **TipColour**) setting for non-HTML tips. If 'TC' is set to -3 but the **TipColor** (or **TipColour**) setting is not defined, the default Windows color will be used. _(Option -3 was added in PxPlus 2021.)_  
If the colour code is in the range from **_0 to 7_** , then the respective colour will be used as the fill. If the colour code is in the range from **_8 to 15_** , then **_50%_** of the colour will be used, allowing any tip text entered to still be read.  
**0** |  Current |  **8** |  Blended Gray  
**1** |  Light Red |  **9** |  Blended Red  
**2** |  Light Green |  **10** |  Blended Green  
**3** |  Light Yellow |  **11** |  Blended Yellow  
**4** |  Light Blue |  **12** |  Blended Blue  
**5** |  Light Magenta |  **13** |  Blended Magenta  
**6** |  Light Cyan |  **14** |  Blended Cyan  
**7** |  White |  **15** |  Gray  
  
#### **Note:** **  
** Only options **-1** and -**2** support the formatting for the tip title and URL added in PxPlus 2016.

##  Default

**'TC'=-2** (HTML-based tip colour/style)

#### **Note:**  
In earlier versions, 0 was the colour code for Black, and the default setting was 11 for Yellow.

_(The 'TC' system parameter was changed to default to -1 in PxPlus v10.20 (v10FP2).)  
(The 'TC' system parameter was changed to default to the new value -2 added in PxPlus 2016.)_
