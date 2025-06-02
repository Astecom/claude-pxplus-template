# Mnemonics 

**'MESSAGE'** |  **_Define Message Bar Text_**  
---|---  
  
**GUI Display**

##  Format

1\. _Display Text in Message Bar:_ |  **'MESSAGE'(**_text$_**)**  
---|---  
2\. _Define Segmented Message_ : |  **'MESSAGE'(DEF** _start_1_[,_start_2_[,_start_3_]]**)**  
3\. _Define Segmented Message for Current Window Only:_ |  **'MESSAGE'(WINDOW** _start_1_[,_start_2_[,_start_3_]]**)**  
4\. _Reset Message Bar:_ |  **'MESSAGE'(DEF 0)**  
5\. _Display Text in Specific Segment:_ |  **'MESSAGE'(**_text$_**,**_segment_**)**  
6\. _Display Floating Tip:_ |  **'MESSAGE'(**_text$_**,**_col, line_**)**  
  
**_Where:_**

_text$_ |  Text to display. String expression.  
---|---  
_start_n_ |  Column number where optional additional segments begin. Default segment 0 starts at column 0. You can have up to 4 segments (0, 1, 2 and 3). Define optional segments 1, 2 and 3 by specifying their starting column number. Numeric expressions.  
_segment_ |  Segment number for display. Numeric expression. Valid range is 0 to 3.  
_col, line_ |  Column and line position where the floating tip will appear. The tip will stay visible for about 4 seconds or until the mouse is moved.  
  
_(The ability to use the 'MESSAGE' mnemonic to display a floating tip was added in PxPlus v7.10.)_

##  Description

Use **'MESSAGE'** to print text on the message bar at the bottom of the application window. When you can create optional message bar segments 1, 2 and 3, the system places the segment separator at the column number you specify in _start_#_ for the corresponding segment(s). Reset to a single segment (segment 0 at column 0) by defining segment 0.

You can send **'MESSAGE'** to segment 0 and to defined segments by segment number. By default, if you omit the segment number, your text is displayed in segment 0 starting at column 0.

#### **Note:**  
If you use a positive column number, the segment's separator is offset that many columns from the left of the message bar. Use negative values to have the separator's placement offset from the right instead.  
  
If you want to centre text within a segment, use $09$ (**Tab** character) as the first character of the text to print.

**_Message_**** _Bar_ _Region Events_**

**LEFT-MOUSE-CLICK** and **RIGHT-MOUSE-CLICK** events are supported in the message bar region. The system returns CTL values when the user clicks on a segment in the **'MESSAGE'** region.

#### **Note:**  
The existence/height of the message bar can be controlled by an INI file setting.

Each of the 4 possible segments of the message bar region has been assigned a different negative CTL value. The event is reported on the button UP only. The return values are:

**'MESSAGE'**__**Region** |  **LEFT-MOUSE-BUTTON-UP** |  **RIGHT-MOUSE-BUTTON-UP**  
---|---|---  
1st area (segment 0) |  CTL= -1400 |  CTL= -1410  
2nd area (segment 1) |  CTL= -1401 |  CTL= -1411  
3rd area (segment 2) |  CTL= -1402 |  CTL= -1412  
4th area (segment 3) |  CTL= -1403 |  CTL= -1413  
  
##  Example

print 'message'(def 7,-20) ! Create segment 1 @(7), segment 2 @(20 columns from right)  
print 'message'("") ! Null displayed in segment 0  
print 'message'("hello",1),'message'("there",2)  
print "To reset the message bar PRINT 'message'(def 0)"
