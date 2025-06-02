# System Parameters

**'BX'** |  **_BBx_**** _Emulation_**  
---|---  
  
##  Description

Sets the system to BBx emulation mode.

Setting or resetting this parameter will affect a variety of other system parameters to establish an environment that is fundamentally compatible with running programs designed for BBx.

The system parameters affected by setting the 'BX' system parameter are as follows:

**Parameter** |  **Setting** |  **Effect**  
---|---|---  
**['AD'](ad.md)** |  On |  Indicates that the system should auto-dimension arrays when used in assignments and the array size can be determined due to usage.  
**['B0'](b0.md)** |  On |  Sets the base number to one for level and window identifiers.   
**['BT'](bt.md)** |  On |  Sets binary test for serial files on first read. If a size is indicated (**ISZ=**_option_), then the file is treated as binary. Otherwise, the file is treated as record-oriented.  
**['BY'](by.md)** |  =0 |  This parameter defines the base year for the [**JUL( )**](../functions/jul.md) and [**DTE( )**](../functions/dte.md) functions. By setting this parameter to zero, the **JUL( )** and **DTE( )** functions operate under the Julian calendar where day 0 is around **_4713 BC_**.  
**['CD'](cd.md)** |  On |  Checks the current directory first before checking the prefix list for a file.  
**['DC'](dc.md)** |  On |  Sets destructive cursor. (Moving from left to right replaces intervening characters with spaces up to the new cursor position).  
**['EX'](ex.md)** |  On |  Sets **[EXECUTE](../directives/execute.md)** directive to affect the program at level 0, thus commands that would alter the program contents will alter the program at the top level of the execution stack.  
**['FF'](ff.md)** |  =3 |  Defines the format of information returned by the **[FID( )](../functions/fid.md)** function to return a BBx style format.  
**['I0'](i0.md)** |  On |  Allows the program to access substring (0,0) of an empty string without generating an error. Normally, accessing offset 0 of a string will result in an Error #47.  
**['KR'](kr.md)** |  On |  Special Keyed file I/O module for BBx emulation mode.  
  
When **_On_** , the [**KEP( )**](../functions/kep.md) function returns the key of the record just read instead of the key of the record prior the record just read. In addition, specifying KNO= on any of the **[KEY( )](../functions/key.md)** functions will **_not_** switch key numbers; only the KNO= on a READ will switch the current key number.  
**['MP'](mp.md)** |  On |  To have the **[MOD( )](../functions/mod.md)** function always return a positive number, even when dealing with negative numbers.  
**['NR'](nr.md)** |  On |  Prevents intermediate rounding on division. (This only affects division, not other operations such as multiplication.)  
**['OP'](op.md)** |  On |  Sets the **[PGM( )](../functions/pgm.md)** function to return the original program name as opposed to the resolved program pathname.  
**['QS'](qs.md)** |  On |  When a **[START](../directives/start.md)** command includes the name of a program to run, the system will effectively only execute a **[BEGIN](../directives/begin.md)** and then **[RUN](../directives/run.md)** the program specified.  
**['RS'](rs.md)** |  On |  Enables automatic rounding of numeric data when processed by the **[STR( )](../functions/str.md)** function.  
**['WK'](wk.md)** |  On |  Prevents **['WINDOW'](../mnemonics/window.md)** and **['DIALOGUE'](../mnemonics/dialogue.md)** boxes from being automatically dropped when you use a **[BEGIN](../directives/begin.md)** (or **[END](../directives/end.md)** in Command mode) or a **[CLOSE](../directives/close.md)**.  
**['XF'](xf.md)** |  On |  Sets extended file mode where the channels range from 1 - 32767 for local files and 32768 - 65000 for global files.  
  
In addition to the above, the following logic changes are controlled by the setting of the 'BX' system parameter:

  * The **['TR'](../mnemonics/tr.md)** mnemonic will return information from location 0,0 to the current location instead of the full screen.
  * The size specified on the START command and returned by TCB(15) will be in 256 byte logical pages.
  * The **[ADDR](../directives/addr.md)** directive will return an error if the used against a program that has already been ADDR'ed.
  * The value returned by the **[TIM](../variables/tim.md)** system variable will be rounded to the current precision.
  * The system will return an error if attempting to issue a 'DROP' or 'POP' against the primary window.
  * The **[WRITE](../directives/write.md)** directive will ignore the KEY= option when used against a file that does not have an external key. (This functionality was added in PxPlus v6.30.)



##  Default

**_Off_** \- PxPlus is in standard mode.

BBx is a registered trademark of BASIS International Ltd.
