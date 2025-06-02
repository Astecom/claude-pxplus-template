# Mnemonics 

**Mnemonic Categories** |   
---|---  
  
Mnemonics can be classified according to their use and the type of device they control. While there are exceptions where mnemonics can be redefined for use outside of their intended purpose, the following categories identify the standard mnemonics by their functionality as well as their names.

**Category** |  **Description**  
---|---  
_Behaviour_ |  Mnemonics that are used to modify the behaviour of PxPlus specific to the channel on which they are defined.  
_Character Display_ |  Mnemonics that are used only when sent to text-based CUI devices.  
_Character Printer_ |  Mnemonics that are used only when sent to direct-to-output devices.  
_Definition_ |  Mnemonics that contain a definition or provide information to be used by a device for performing specific operations.  
_Editing_ |  Mnemonics that are used to control various editing operations in **_both_** text-based and GUI display environments.  
_GUI Display_ |  Mnemonics that are used only in a graphical environment for output to the screen. See **Note** below.  
_GUI Printer_ |  Mnemonics that are used only when sent to a graphical printer spooling system (i.e. *WINPRT*). See **Note** below.  
_Motion_ |  Mnemonics that are used to direct cursor movement in **_both_** text-based and GUI display environments.  
  
#### **Note:**  
In Windows, the **['FILL'](fill.md)**, **['FONT'](font.md)**, **['PEN'](pen.md)** and **['PICTURE'](picture.md)** mnemonics use Graphical Device Interface (GDI) resources/handles that are only released when the window they are in is dropped or cleared, or their 'IMAGE' group is deleted.  
  
This table displays a list of mnemonics and indicates (with an X) the categories to which they belong:

**Mnemonic** |  **Category**  
---|---  
|  **_Behaviour_** |  **_Character Display_** |  **_Character Printer_** |  **_Definition_** |  **_Editing_** |  **_GUI Display_** |  **_GUI Printer_** |  **_Motion_**  
**_['@@' Define Cursor Position Sequence](~~.md)_** |  |  |  |  |  |  |  |  X  
**_['*C' Automatic Output on CLOSE](~c.md)_** |  |  |  |  X |  |  |  |   
**_['*H' Control Screen Colours](~h.md)_** |  |  |  |  X |  |  |  |   
**_['*I' Input Conversion Table](~i.md)_** |  |  |  |  X |  |  |  |   
**_['*O' Output Conversion Table](~o.md)_** |  |  |  |  X |  |  |  |   
**_['*R' OS Command String](~r.md)_** |  |  |  |  X |  |  |  |   
**_['*X' Program to Call on CLOSE](~x.md)_** |  |  |  |  X |  |  |  |   
**_['+$' & '-$' For Internal Use Only](+$.md)_** |  |  |  |  |  |  X |  |   
**_['+B' & '-B' Output Buffering On/Off](+b.md)_** |  X |  |  |  |  |  X |  |   
**_['+D' & '-D' Disabled Object Dim On/Off](+d.md)_** |  X |  |  |  |  |  X |  |   
**_['+E' & '-E' Multi-Line Enter as Tab](+e.md)_** |  X |  |  |  |  |  X |  |   
**_['+F' & '-F' Signal Change of Focus On/Off](+f.md)_** |  X |  |  |  |  |  X |  |   
**_['+I' & '-I' Implied Decimals On/Off](+i.md)_** |  X |  |  |  |  |  X |  |   
**_['+N' & '-N' Control Drop/List Box Write Error](+n.md)_** |  X |  |  |  |  |  X |  |   
**_['+P' & '-P' Define Mouse Movement](+p.md)_** |  |  |  |  |  |  X |  |   
**_['+S' & '-S' Substitute Solid Lines On/Off](+s.md)_** |  X |  |  |  |  |  X |  |   
**_['+T' & '-T' Text Display On/Off](+t.md)_** |  X |  |  |  |  |  X |  |   
**_['+U' & '-U' Screen Refresh On/Off](+u.md)_** |  X |  |  |  |  |  X |  |   
**_['+V' & '-V' Control Row Highlighting](+v.md)_** |  X |  |  |  |  |  X |  |   
**_['+W' & '-W' Windows-Style Windows](+w.md)_** |  X |  |  |  |  |  X |  |   
**_['+X' & '-X' Windows 'X' Close Button](+x.md)_** |  |  |  |  |  |  X |  |   
**_['+Z' & '-Z' Text Mode Like Windows](+z.md)_** |  |  |  |  |  |  X |  |   
**_['!W' For Internal Use Only](!w.md)_** |  X |  |  |  |  |  |  |   
**_['2D' Use 2D Controls](2d.md)_** |  |  |  |  |  |  X |  |   
**_['3D' Use 3D Controls](3d.md)_** |  |  |  |  |  |  X |  |   
**_['4D' Use 4D Controls](4d.md)_** |  |  |  |  |  |  X |  |   
**_['AB' Abort (For Windows Spooler)](ab.md)_** |  |  |  |  |  |  |  X |   
**_['ARC' Define/Draw Arc](arc.md)_** |  |  |  |  |  |  X |  X |   
**_['AT' Character Attribute Output Sequence](at.md)_** |  |  |  |  X |  |  |  |   
**_['B#' Background Colour](b_.md)_** |  |  X |  |  |  |  X |  X |   
**_['BACKGR' or 'BK' Next Colour is Background](backgr.md)_** |  |  X |  |  |  |  X |  X |   
**_['BB' Begin Blinking](bb.md)_** |  |  X |  |  |  |  |  |   
**_['BE' Begin Echoing](be.md)_** |  |  |  |  |  X |  |  |   
**_['BEEP' Simple Sound Effect](beep.md)_** |  X |  |  |  |  |  |  |   
**_['BG' Begin Generating Error #29](bg.md)_** |  X |  |  |  |  |  |  |   
**_['BI' Begin Input Transparency](bi.md)_** |  X |  |  |  |  X |  |  |   
**_['BJ' Join Box Intersections](bj.md)_** |  |  X |  |  |  |  X |  |   
**_['BLACK' & '_BLACK' Colour Text](black.md)_** |  |  X |  X |  |  |  X |  X |   
**_['BLUE' & '_BLUE' Colour Text](blue.md)_** |  |  X |  X |  |  |  X |  X |   
**_['BM' Begin Output of Markup Files](bm.md)_** |  X |  |  |  |  |  |  |   
**_['BO' Begin Output Transparency](bo.md)_** |  X |  |  |  |  |  |  |   
**_['BOX' Define/Draw a Box](box.md)_** |  |  X |  |  |  |  X |  |   
**_['BR' Begin Reverse Video](br.md)_** |  |  X |  X |  |  |  X |  X |   
**_['BS' Cursor Back One Space](bs.md)_** |  |  |  |  |  |  |  |  X  
**_['BT' Begin Type-Ahead Mode](bt.md)_** |  X |  |  |  |  X |  |  |   
**_['BU' Begin Underscoring](bu.md)_** |  |  X |  X |  |  |  X |  X |   
**_['BW' Begin WrapAround](bw.md)_** |  X |  |  |  |  X |  |  |   
**_['BX' Define/Draw a Box](bx.md)_** |  |  X |  |  |  |  X |  |   
**_['C#' Control Cursor Display Mode](c_.md)_** |  |  X |  |  |  |  X |  |   
**_['CAPTION' Replace Caption for Window](caption.md)_** |  |  |  |  |  |  X |  |   
**_['CE' Clear from Cursor to End of Screen](ce.md)_** |  |  X |  |  |  |  X |  |   
**_['CF' Clear Foreground Mode](cf.md)_** |  |  X |  |  |  |  X |  |   
**_['CH' Position Cursor at Home](ch.md)_** |  |  |  |  |  |  |  |  X  
**_['CI' Clear Input Type-Ahead Buffer](ci.md)_** |  |  |  |  |  X |  |  |   
**_['CIRCLE' Define/Draw a Circle](circle.md)_** |  |  |  |  |  |  X |  X |   
**_['CL' Clear from Cursor to End of Line](cl.md)_** |  |  X |  |  |  |  X |  |   
**_['COLOUR' & '_COLOUR' User-Defined Colours](colour.md)_** |  |  X |  X |  |  |  X |  X |   
**_['CP' Condense Print for Screen](cp.md)_** |  |  X |  X |  |  |  X |  X |   
**_['CPI' Logical Characters per Inch](cpi.md)_** |  |  |  |  |  |  |  X |   
**_['CR' Carriage Return](cr.md)_** |  |  |  |  |  |  |  |  X  
**_['CS' Clear Screen](cs.md)_** |  |  X |  |  |  |  X |  |  X  
**_['CURSOR' Control Cursor, Mouse Pointer](cursor.md)_** |  |  |  |  |  |  X |  |   
**_['CYAN' & '_CYAN' Colour Text](cyan.md)_** |  |  X |  X |  |  |  X |  X |   
**_['DC' Delete Character at Cursor](dc.md)_** |  |  |  |  |  X |  |  |   
**_['DEFAULT' or 'DF' Define Default](default.md)_** |  |  X |  |  |  |  X |  X |   
**_['DIALOGUE' Define/Draw Dialogue Region](dialogue.md)_** |  |  |  |  |  |  X |  |   
**_['DN' Move Cursor Down a Line](dn.md)_** |  |  |  |  |  |  |  |  X  
**_['DO' Delete Objects in Scroll Region](do.md)_** |  X |  |  |  |  |  |  |   
**_['DROP' or 'WD' Drop Identified Window](drop.md)_** |  |  X |  |  |  |  X |  |   
**['EB' End Blinking Mode](eb.md)** |  |  X |  |  |  |  |  |   
**_['EE' End Echo Mode](ee.md)_** |  |  |  |  |  X |  |  |   
**_['EG' End Generating Error #29](eg.md)_** |  X |  |  |  |  |  |  |   
**_['EI' End Input Transparency](ei.md)_** |  X |  |  |  |  X |  |  |   
**_['EJ' End Box Joining](ej.md)_** |  |  X |  |  |  |  X |  |   
**_['EL' End VFU Load](el.md)_** |  X |  |  X |  |  X |  |  |   
**_['EM' End Output Markup Mode](em.md)_** |  X |  |  |  |  |  |  |   
**_['EO' End Output Transparency](eo.md)_** |  X |  |  |  |  |  |  |   
**_['EP' Start Expanded Print](ep.md)_** |  |  |  X |  |  |  |  X |   
**_['ER' End Reverse Video](er.md)_** |  |  X |  X |  |  |  X |  |   
**_['ES' Send Escape](es.md)_** |  |  X |  X |  |  |  |  |   
**_['ET' End Type Ahead](et.md)_** |  X |  |  |  |  X |  |  |   
**_['EU' End Underscoring](eu.md)_** |  |  X |  X |  |  |  X |  X |   
**_['EW' End WrapAround](ew.md)_** |  X |  |  |  |  X |  |  |   
**_['F#' Foreground Colour](f_.md)_** |  |  X |  X |  |  |  X |  X |   
**_['F+' & 'F-' Control Background Filling](backfill.md)_** |  |  |  |  |  |  X |  |   
**_['FF' Form Feed](ff.md)_** |  |  X |  X |  |  |  X |  X |   
**_['FILL' Define Fill Style](fill.md)_** |  |  |  |  |  |  X |  X |   
**_['FL' Start Function Key Load](fl.md)_** |  X |  |  |  |  X |  |  |   
**_['FONT' Define/List Fonts](font.md)_** |  |  |  |  |  |  X |  X |   
**_['FRAME' Define/Draw a Frame](frame.md)_** |  |  |  |  |  |  X |  |   
**_['GD' Define Graphics Character Set](gd.md)_** |  |  |  |  X |  |  |  |   
**_['GE' End Graphics Data](ge.md)_** |  |  X |  X |  |  |  X |  X |   
**_['GF' Default Font for Window Objects](gf.md)_** |  |  |  |  |  |  X |  |   
**_['GOTO' or 'WG' Make Window Current](goto.md)_** |  |  X |  |  |  |  X |  |   
**_['GREEN' & '_GREEN' Colour Text](green.md)_** |  |  X |  X |  |  |  X |  X |   
**_['GS' Start Graphics Data Transmission](gs.md)_** |  |  X |  X |  |  |  X |  |   
**_['IC' Insert a Space at Cursor](ic.md)_** |  X |  |  |  |  X |  |  |   
**_['IMAGE' Define a Graphics Group](image.md)_** |  |  |  |  |  |  X |  |   
**_['JC' Justify Centre](jc.md)_** |  |  |  |  |  |  X |  X |   
**_['JD' Justify Decimal-Aligned](jd.md)_** |  |  |  |  |  |  X |  X |   
**_['JL' Left Justify Text](jl.md)_** |  |  |  |  |  |  X |  X |   
**_['JN' Right Justify for Numeric](jn.md)_** |  |  |  |  |  |  X |  X |   
**_['JR' Right Justify Text](jr.md)_** |  |  |  |  |  |  X |  X |   
**_['JS' Left Justify String](js.md)_** |  |  |  |  |  |  X |  X |   
**_['L6' Set to 6 LPI](l6.md)_** |  |  |  X |  |  |  |  X |   
**_['L8' Set to 8 LPI](l8.md)_** |  |  |  X |  |  |  |  X |   
**_['LC' Mixed-Case User Input](lc.md)_** |  X |  |  |  |  X |  |  |   
**_['LD' Delete Current Line](ld.md)_** |  |  |  |  |  X |  |  |   
**_['LF' Line Feed (Advance Line)](lf.md)_** |  |  X |  X |  |  |  X |  X |  X   
**_['LI' Insert Line](li.md)_** |  |  |  |  |  X |  |  |   
**_['LINE' Define/Draw a Line](line.md)_** |  |  |  |  |  |  X |  X |   
**_['LM' Set Landscape Mode](lm.md)_** |  |  |  |  |  |  |  X |   
**_['LPI' Logical Lines/Inch](lpi.md)_** |  |  |  |  |  |  |  X |   
**_['LT' Move Left One Column](lt.md)_** |  |  |  |  |  |  |  |  X  
**_['MAGENTA' & '_MAGENTA' Colour Text](magenta.md)_** |  |  X |  X |  |  |  X |  X |   
**_['MAXSIZE' & 'MINSIZE' Window Resize User Limit](maxsize.md)_** |  |  |  |  |  |  X |  |   
**_['ME' Begin Edit Mode](me.md)_** |  X |  |  |  |  X |  |  |   
**_['MESSAGE' Define Message Bar Text](message.md)_** |  |  |  |  |  |  X |  |   
**_['MN' End Edit Mode](mn.md)_** |  X |  |  |  |  X |  |  |   
**_['MODE' Set Attributes and Colour](mode.md)_** |  |  X |  X |  |  |  X |  |   
**_['MOVE' or 'WM' Relocate Current Window](move.md)_** |  |  X |  |  |  |  X |  |   
**_['MP' Parallel Printer Mode](mp.md)_** |  |  |  X |  |  |  |  X |   
**_['MS' Serial Printer Mode](ms.md)_** |  |  |  |  |  |  |  X |   
**_['NI' Next Input Numeric](ni.md)_** |  |  |  |  |  X |  |  |   
**_['OFFSET' Offset for *WINPRT*](offset.md)_** |  |  |  |  |  |  |  X |   
**_['OPTION' On-the-Fly Setting](option.md)_** |  X |  |  |  |  |  |  |   
**_['PE' Auxiliary Port Off](pe.md)_** |  |  |  X |  |  |  |  |   
**_['PEN' Define Pen Style](pen.md)_** |  |  |  |  |  |  X |  X |   
**_['PICTURE' Define/Draw Picture](picture.md)_** |  |  |  |  |  |  X |  X |   
**_['PIE' Define/Draw Pie Slice](pie.md)_** |  |  |  |  |  |  X |  X |   
**_['PM' Set Portrait Mode](pm.md)_** |  |  |  |  |  |  |  X |   
**_['POLYGON' Define/Draw a Polygon](polygon.md)_** |  |  |  |  |  |  X |  X |   
**_['POP' or 'WR' Restore Previous Window](pop.md)_** |  |  X |  |  |  |  X |  |   
**_['PS' Auxiliary Port On](ps.md)_** |  |  |  X |  |  |  |  |   
**_['PUSH' or 'WC' Save/Copy Current Window](push.md)_** |  |  X |  |  |  |  X |  |   
**_['RA' Restore Saved Attributes](ra.md)_** |  |  X |  X |  |  |  |  |   
**_['RB' Ring Bell](rb.md)_** |  |  |  |  |  X |  |  |   
**_['RC' Return Cursor Address](rc.md)_** |  |  |  |  |  X |  |  |   
**_['RECTANGLE' Draw a Rectangle](rectangle.md)_** |  |  |  |  |  |  X |  X |   
**_['RED' & '_RED' Colour Text](red.md)_** |  |  X |  X |  |  |  X |  X |   
**_['RL' Return Line Contents](rl.md)_** |  |  |  |  |  X |  |  |   
**_['RM' Reset to Default Mode](rm.md)_** |  X |  |  |  |  |  |  |   
**_['RP' Terminal Read to End](rp.md)_** |  |  |  |  |  X |  |  |   
**_['RS' Restore Screen](rs.md)_** |  |  X |  |  |  X |  |  |   
**_['RT' Move Right One Column](rt.md)_** |  |  |  |  |  |  |  |  X  
**_['S#' Slew to Channel](s_.md)_** |  |  |  X |  |  |  |  X |   
**_['SA' Save Attributes](sa.md)_** |  |  X |  X |  |  |  |  |   
**_['SB' Set Mode to Background](sb.md)_** |  |  X |  |  |  |  |  |   
**_['SCROLL' Define/Control Scroll Region](scroll.md)_** |  |  X |  |  |  X |  X |  |   
**_['SE' & 'SD' Scroll Enable/Disable](se.md)_** |  |  X |  |  |  X |  X |  |   
**_['SF' Set Mode to Foreground](sf.md)_** |  |  X |  |  |  |  |  |   
**_['SHOW' Control Window Display](show.md)_** |  |  |  |  |  |  X |  |   
**_['SIZE' Control Visual Size of Window](size.md)_** |  |  |  |  |  |  X |  |   
**_['SL' Start VFU Load](sl.md)_** |  |  |  X |  |  |  |  X |   
**_['SN' Native Screen Mode](sn.md)_** |  X |  |  |  |  |  |  |   
**_['SP' Standard Print](sp.md)_** |  |  X |  X |  |  |  X |  X |   
**_['SR' Scroll Reset](sr.md)_** |  |  X |  |  |  |  X |  |   
**_['SWAP' or 'WS' Swap Windows on Stack](swap.md)_** |  |  X |  |  |  |  X |  |   
**_['SX' Set Extended Screen Mode](sx.md)_** |  X |  |  |  |  |  |  |   
**_['TEXT' Draw Text](text.md)_** |  |  |  |  |  |  X |  X |   
**_['TEXTWDW' Create Text Window](textwdw.md)_** |  |  X |  |  |  |  X |  |   
**_['TR' Terminal Read from Start](tr.md)_** |  |  |  |  |  X |  |  |   
**_['TW' Transmit Windows as String](tw.md)_** |  |  |  |  |  X |  |  |   
**_['UC' Convert Input to Uppercase](uc.md)_** |  X |  |  |  |  X |  |  |   
**_['UP' Move Up One Line](up.md)_** |  |  |  |  |  |  |  |  X  
**_['VT' Slew to S6, Vertical Tab](vt.md)_** |  |  |  X |  |  |  |  X |   
**_['WHITE' & '_WHITE' Colour Text](white.md)_** |  |  X |  X |  |  |  X |  X |   
**_['WINDOW' or 'WA' Define/Draw Window](window.md)_** |  |  X |  |  |  |  X |  |   
**['WP' Wide Printer](wp.md)** |  |  |  X |  |  |  |  |   
**_['WRAP' WrapAround On/Off](wrap.md)_** |  X |  |  |  |  X |  |  |   
**_['WX' Windows Definition Sequence](wx.md)_** |  |  |  |  X |  |  |  |   
**['XP' Line Mode](xp.md)** |  |  X |  |  |  |  |  |   
**_['YELLOW' & '_YELLOW' Colour Text](yellow.md)_** |  |  X |  X |  |  |  X |  X |   
**_['ZX' Return Attributes as per BBx](zx.md)_** |  X |  |  |  |  |  |  |   
  
#### **Note:**  
All colour mnemonics (i.e. **'BLACK'** , **'BLUE'** , **'CYAN'** , **'GREEN'** , **'MAGENTA'** , **'RED'** , **'WHITE'** and **'YELLOW'**) are supported on character printers, assuming that the required escape sequence was defined when setting up the printer. While most character printers only print with black ink, it is possible to print to an HP ink jet printer as a character device.

BBx is a registered trademark of BASIS International Ltd.
