# Graphical User Interfaces

**Display Objects** |  **__**  
---|---  
  
Besides the interactive **[Control Objects](../Control%20Objects/Overview.md)** that add functionality to a graphical user interface panel, other graphical components are needed to help with the usability, organization and layout of your graphical application.

These are display-only objects, such as text and labels, images and shapes drawn on the canvas of the graphical panel. These types of objects are created with mnemonics (rather than directives) and have no associated events.

Mnemonics for creating graphical objects include: **'[TEXT](../../../mnemonics/text.md)'**, **'[FONT](../../../mnemonics/font.md)'**, **'[PICTURE](../../../mnemonics/picture.md)'**, **'[ARC](../../../mnemonics/arc.md)'**, **'[PIE](../../../mnemonics/pie.md)'**, **'[CIRCLE](../../../mnemonics/circle.md)'**, **'[LINE](../../../mnemonics/line.md)'**, **'[POLYGON](../../../mnemonics/polygon.md)'** and **'[RECTANGLE](../../../mnemonics/rectangle.md)'**. There is also a mnemonic for creating a graphical group, **'[IMAGE](../../../mnemonics/image.md)'**. These objects are output on the graphic plane via the **[PRINT](../../../directives/print.md)** directive. By default, **PRINT** outputs a line feed to the text plane unless the statement is terminated by a trailing comma. Therefore, it is recommended that the trailing comma be used when drawing graphical elements to prevent unwanted scrolling of the text plane. For syntax details, see **[PRINT](../../../directives/print.md)** directive.
