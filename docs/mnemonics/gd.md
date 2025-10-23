# Mnemonics 

**'GD'** |  **_Define Graphics Character Set_**  
---|---  
  
**Definition**

##  Description

Use the **'GD'** mnemonic to define the 11 characters that will be used in text mode _line drawing_ operations. The standard line drawing characters are A to K (and for compatibility, 0 to 9 and _colon_) as defined below:

A _or_ 2 |  |  Top left corner  
---|---|---  
B _or_ 3 |  |  Top right corner  
C _or_ 4 |  |  Bottom left corner  
D _or_ 5 |  |  Bottom right corner  
E _or_ 0 |  |  Horizontal line  
F _or_ 1 |  |  Vertical line  
G _or_ **:** |  |  Cross hairs  
H _or_ 6 |  |  Vertical with horizontal right  
I _or_ 7 |  |  Vertical with horizontal left  
J _or_ 8 |  |  Horizontal with vertical up  
K _or_ 9 |  |  Horizontal with vertical down  
  
## Terminals

When using normal terminals, the **'GD'** mnemonic should define the characters that are to be sent to the device in order to display the above line drawings. These will vary between devices; thus, you should consult your manufacturer should the defaults supplied with PxPlus not be satisfactory.

## Windows

On Windows, where drawing is done internally by PxPlus, each character consists of up to four lines (each line represented by a bit in the byte defined by **'GD'**):

> $01$ - Horizontal line centered top to bottom in left half of cell  
>  $02$ - Vertical line centered left-right in top half of cell  
>  $04$ - Horizontal line centered top to bottom in right half of cell  
>  $08$ - Vertical line centered left-right in bottom half of cell

If **'GD'** is not defined for the output, then $0C090603050A0F0E0B070D$ is the default. This conforms to the standard graphical character outputs as defined in the above table. The mnemonics **'GS'** and **'GE'** will not (and should not) be defined. If an output character is not defined by the **'GD'** mnemonic, the cross hairs will be used.

For additional information regarding the use of special mnemonics (i.e. **'@@'** , **'*C'** , **'*I'** , **'*O'** , **'*R'** , **'*X'** , **'AT'** , **'GD'** , **'WX'**) when creating a device driver, see [**Dynamic Information in Mnemonics**](dynamic_information_in_mnemonics.md) or **[Device Drivers](../PxPlus%20User%20Guide/Appendix%20of%20Miscellaneous%20Topics/Device%20Drivers/Overview.md)**.

##  Example

mnemonic (FIL_NO)'GD'=$C9BBC8BCCDBACECCB9CACB$ ! For double-line graphics  
mnemonic (FIL_NO)'GD'=$DABFC0D9C4B3C5C3B4C1C2$ ! For single-line graphics
