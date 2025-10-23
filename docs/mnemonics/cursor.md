# Mnemonics

**'CURSOR'** |  **_Control Cursor, Mouse Pointer_**  
---|---  
  
**GUI Display _or_ Character Display**

##  Formats

1. |  _Cursor ON (Default):_ |  **'CURSOR' ("ON")**  
---|---|---  
2. |  _Hide Cursor:_ |  **'CURSOR' ("OFF")**  
3. |  _Cursor in Replace Mode:_ |  **'CURSOR' ("REP")** *  
4. |  _Cursor in Insert Mode:_ |  **'CURSOR' ("INS")**  
5. |  _Change Mouse Pointer (GUI Only):_ |  **'CURSOR' (**_"num"_**)**  
  
**_Where:_**

_num_ |  **_(Graphics Display Only)_**  
  
Numeric code for the graphic to use as mouse pointer. Supported options include:  
---|---  
|  0 - Arrow |  7 - Rabbit in hat  
|  1 - Wait (Hourglass) |  8 - Happy face  
|  2 - I-Beam |  9 - Sad face  
|  3 - Movement arrows |  10 - Resize vertical Up/Down arrow  
|  4 - Sizing arrow |  11 - Resize horizontal Left/Right arrow  
|  5 - Hand |  12 - Not allowed (diagonal line across circle)  
|  6 - Hand in crossed circle ("No" hand)  
  
##  Description

Use the above formats to control cursor and mouse pointer displays.

#### **Note:**  
The mouse pointer selected via the **'CURSOR'** mnemonic may be overridden by settings in the INI file.

##  Example

print 'CS'  
CUR=1  
button 10,@(10,10,20,2)="CHANGE CURSOR"  
while ctl<>4  
obtain X  
if ctl=10 \  
then print 'cursor'(CUR)  
if CUR=12 \  
then CUR=0 \  
else CUR++  
wend  
print 'cursor'(0)  
end
