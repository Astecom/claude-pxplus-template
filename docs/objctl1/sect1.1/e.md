# Object Controls

**Mnemonic Processing** |  **__**  
---|---  
  
To trap and handle key mnemonics generated from your application, an **[ODC Server](d.md)** can contain a property 'Mnemonics that contains the Object ID for a mnemonic processor. The system invokes this mnemonic processor when encountering any of the following mnemonics:

**Mnemonic** |  **Method Call** |  **Description**  
---|---|---  
'BEEP' |  'Beep _(sound$)_ |  Play sound.  
'CAPTION' |  'Caption _(ttl$)_ |  Set caption line text.  
'COLOUR' |  'Colour _(clr$)_ |  Set foreground colour.  
'_COLOUR' |  '_Colour _(clr$)_ |  Set background colour.  
'CS' |  'ClearScreen( ) |  Clear the screen and delete all graphics.  
'DO' |  'DropObjects _(c,l,w,h)_ |  Drop all objects within specified area. This mnemonic is generally sent when change folder tabs.   
'FONT' |  'Font _(fnt$, sz, atr$, angle)_ |  Set current font.  
'FRAME' |  'Frame _(x1,y1,x2,y2,wide,ttl$)_ |  Create a frame.  
'IMAGE'_(n$)_ |  'Image _(n$)_ |  Set current image name.  
'IMAGE'(DELETE _n$_) |  'ImageDelete _(n$)_ |  Delete name image.  
'IMAGE'(DISABLE _n$_) |  'ImageDisable _(n$)_ |  Disable/hide image.  
'IMAGE'(ENABLE _n$_) |  'ImageEnable _(n$)_ |  Enable/show image.  
'OPTION' |  'Option _(opt$, value$)_ |  Set option value.  
'PICTURE' |  'Picture _(x1,y1,x2,y2,path$,mode)_ |  Display a picture.  
'TEXT' |  'Text _(x1,y1,x2,y2.txt$,atr$)_ |  Display text. If only one _x/y_ coordinate is given, _x2_ and y2 will be zero.  
  
When processing any of the above methods, a non-zero return value indicates that the mnemonic should not be sent to the terminal.

A return value of zero or no method present causes the normal mnemonic processing to take place.
