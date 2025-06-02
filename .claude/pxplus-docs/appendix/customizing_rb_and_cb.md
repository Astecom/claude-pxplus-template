# Language Reference - Appendix

**Customizing Radio Buttons and Check Boxes**|   
---|---  
  
You can customize the **_default_** Radio Button and Check Box display when using the **['4D'](../mnemonics/4d.md)** GUI display mnemonic. This can be done by using the following pairs of device options with either the **['OPTION'](../mnemonics/option.md)** mnemonic or **[SETDEV](../directives/setdev_set.md)** directive **_(for Windows Only)_** :

|  **_For Check Boxes:_** |  **[CbxImage](../mnemonics/option.htm#cbximage)** and **[CbxMarkSize](../mnemonics/option.htm#cbxmarksize)**  
---|---|---  
|  **_For Radio Buttons:_** |  **[RbtImage](../mnemonics/option.htm#rbtimage)** and **[RbtMarkSize](../mnemonics/option.htm#rbtmarksize)**  
  
_(New options for customizing Radio Buttons and Check Boxes were added in PxPlus 2017.)_

The '_xxx_**Image** ' setting for each of these defines an image file (BMP, JPG or PNG) that contains various images to be displayed to represent the control status.

For **_Check Boxes_** , the image file must contain 9 sections (3 rows of three). For **_Radio Buttons_** , the image file must contain 6 sections (2 rows of three).

Refer to the sample illustrations below.

**Check Box (3x3)** |  **Radio Button (2x3)** ****  
---|---  
**Sample Image Files  
** _(The patterned background indicates that Transparency is turned On.)_  
  
Each row within the image file contains the image you want to display based on the **_state_** of the control: _Normal_ , _Mouse Over_ and _Disabled_.

The **_first_** row of images is used for the **_Off_** state of the control.

The **_second_** row of images is used for the **_On_** state of the control.

The **_third_** row of images _(for Check Boxes only)_ is used for the optional **_third state_** for Tristate_Box controls.

The images contained within each section will be scaled and centered to fit in front of the text for their respective controls. To improve the quality of the output, it is strongly suggested that you use PNG images with alpha blending.

The '_xxx_**MarkSize** ' settings control the width of the space in front of the text that will be reserved for the images.

#### **Note:**  
The images will always be scaled to fit within the space allotted for the control. This means that if the image section is perfectly square and '_xxx_**MarkSize** ' is set to 30 pixels but the height of the control is only 20 pixels, the image will be scaled down to 20x20.
