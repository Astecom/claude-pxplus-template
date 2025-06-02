# Device Drivers

**Terminal Devices** |  **__**  
---|---  
  
Historically, the main user interface hardware of a computer (keyboard and video display) was called a terminal. However, this definition is not as common today with the advent of personal computers, graphical user interface environments, and the variety of operating systems and interface devices available. While the term is still used on occasion, "terminal" is usually associated with a system's command line shell or console-style environment; e.g. text terminal or terminal window.

Applications running on some older operating systems may require a terminal device driver to be configured for user access in this environment. Terminal device drivers are opened during the PxPlus start_up. PxPlus uses the value assigned in the TERM environment variable to determine which device driver is used for the current terminal. Generally, this is already set to an appropriate value by the operating system.

## Driver Content

The following is an example of a terminal device driver. In general, terminal drivers are much like printer drivers in that they define the command sequences for the mnemonics, as well as the input sequences that the terminal generates for function and edit command keys.

**_Example:_**

> 0010 ! WYSE 50 -- Terminal driver   
>  0020 DEFTTY (LFO)80,24   
>  1000 ! 1000 - Mnemonics   
>  1010 MNEMONIC (LFO)'@@'=ESC+"=\LB\CB"   
>  1020 MNEMONIC (LFO)'BS'=$08$   
>  1030 MNEMONIC (LFO)'CE'=ESC+"Y"   
>  1040 MNEMONIC (LFO)'CH'=ESC+"= "   
>  1050 MNEMONIC (LFO)'CL'=ESC+"T"   
>  1060 MNEMONIC (LFO)'CS'=ESC+"+"   
>  1070 MNEMONIC (LFO)'CF'=ESC+"&"+ESC+";"+ESC+"'"   
>  1080 MNEMONIC (LFO)'DC'=ESC+"W"   
>  1090 MNEMONIC (LFO)'IC'=ESC+"Q"   
>  1100 MNEMONIC (LFO)'LD'=ESC+"R"   
>  1110 MNEMONIC (LFO)'LI'=ESC+"E"   
>  1120 MNEMONIC (LFO)'RB'=$07$   
>  1130 MNEMONIC (LFO)'RM'=ESC+" "+$0000$+ESC+"("+   
>  1130:ESC+"H"+$03$+ESC+"G0"   
>  1140 MNEMONIC (LFO)'SB'=ESC+")"   
>  1150 MNEMONIC (LFO)'SF'=ESC+"("   
>  1160 ! Define Attribute output table   
>  1170 MNEMONIC (LFO)'AT'=ESC+"G\A"+"&"+$0F$+"T"+   
>  1170:$10$+"0p4t2r6v8x<|:z>~"   
>  1180 MNEMONIC (LFO)'GS'=ESC+"H"+$02$   
>  1190 MNEMONIC (LFO)'GE'=ESC+"H"+$03$   
>  1200 MNEMONIC (LFO)'GD'="2315:6849=0"   
>  9000 ! 9000 - Load terminal control keys   
>  9010 RUN "*TTY"

A terminal device driver is typically much larger than a printer device driver. This has to do with the fact that more mnemonics are required for a terminal than for a printer. While it is not necessary to define matches within a terminal driver for all PxPlus mnemonics, it is better to define as many as possible. For example, if no**'CL'** mnemonic is specified, PxPlus will output spaces in order to clear a line (this is not very efficient). The only mnemonic absolutely necessary is the internal mnemonic **['@@'](../../../mnemonics/~~.md)** that is used to define how to position the cursor.

The**DEFTTY** command is also mandatory. This directive indicates to PxPlus that the device is a terminal (not a printer).**DEFTTY** must contain two additional parameters: (1) the default number of columns, and (2) the default number of lines.

## About *TTY

The last line of any terminal device driver should be RUN "*TTY". This utility performs additional terminal initialization for function keys, etc. It also checks the lib/_udev directory automatically to locate and**CALL** the supplemental terminal device driver (if found).

##  Creating a Supplemental Device Driver

Terminal device drivers supplied with PxPlus should not be modified directly. Instead, create a supplementary driver and store it in a directory called ***UDEV** (e.g. /pvx/lib/_udev).

Follow the steps below:

|  1. |  If it does not already exist, create the***UDEV** directory (e.g. /pvx/lib/_udev).  
---|---|---  
|  2. |  Create a new program.

#### **Note:**  
**_Do not modify/overwrite the original driver._** Place only modified or additional content in the supplemental driver. This program should terminate using an**END** directive (do not use RUN "*TTY").  
  
|  3. |  Save the new program in***UDEV** using the same file name as the original driver.  
  
At run time, PxPlus will start by calling the original driver. The***TTY** program will automatically locate and**CALL** the supplemental version of the device driver from***UDEV**. For example, if you need to make modifications to***DEV/VT100** , you would create a second file as***UDEV/VT100** to include the changes -***TTY** checks the***UDEV** directory for the supplemental**VT100** driver immediately after it runs the original***DEV/VT100** driver.

## Creating a New Terminal Device Driver

If you need a device driver for a terminal type that is not already installed with PxPlus, a new driver may be created for this purpose. You can take a chance and save the file in the***DEV** directory, but if PxPlus decides to support this terminal type in a future release, your new device driver may get overwritten.

This risk can be avoided using a technique similar to creating a supplemental driver in the***UDEV** directory. In this case, the "supplemental" file contains almost all of the driver content.

Follow the steps below:

|  1. |  Create a new program that contains only two commands. **_Example:_** DEFTTY 80,25  
RUN "*TTY" This will be the starting device driver. The maximum lines and columns must be set here and cannot be changed in the supplemental program. Save it in***DEV** (e.g., /pvx/lib/_dev).  
---|---|---  
|  2. |  If it does not already exist, create the ***UDEV** directory (e.g., /pvx/lib/_udev).  
|  3. |  Create a new program to map the mnemonics and control sequences required for running the new device. This program should terminate using an **[END](../../../directives/end.md)** directive. (Do **_not_** use RUN "*TTY").   
  
Save this file in***UDEV** using the same name as the starting device driver (created in step 1).  
  
At run time, PxPlus will**CALL** the first driver, then immediately**CALL** the "supplemental" device driver from***UDEV** to run the true driver content.

#### **Note:**  
Terminal display mnemonics are described below. For information on mnemonics, see **[Mnemonics](../../../mnemonics.md)**.

## Variable Mnemonic Data

Some mnemonics require dynamic information (variables) to generate specific output sequences (e.g. the line and column number defined in the **['@@'](../../../mnemonics/~~.md)** mnemonic). There are 11 variables that may be included in the output sequence. Identifying these variables is done by specifying a **\**_(backslash)_ , followed by a one-character variable identifier and output formatting information.

_Define Variable:_**=ESC+"[_\_**_id_char_**{**_modifier_**}**_fmt_code_**"**

**_Where:_**

_\id_char_ |  Identifier for the variable. Include the backslash in the syntax. Valid identifiers include: |  \b |  Bottom margin of window/scroll region  
---|---  
\h |  Height of window/scroll region  
\l |  (lowercase L) Left margin of window/scroll region  
\r |  Right margin of window/scroll region  
\t |  Top margin of window/scroll region  
\w |  Width of window/scroll region  
\A |  Current attributes in binary  
\B |  Background colour index  
\C |  Current column  
\F |  Foreground colour index  
\L |  Current line  
_fmt_code_ |  The variables above must be followed by one of the following output format character codes: |  2 |  Output is two-byte ASCII  
---|---  
3 |  Output is three-byte ASCII  
a |  Output is ASCII plain text number (base 0)  
b |  Output is single-byte binary (base 0)  
A |  Output is ASCII plain text number (base 1)  
B |  Output is single** _-_** byte binary (base 0x20)  
T |  Table output. Following T, the next byte must contain the number of bytes in the table. The table must follow that in the output sequence. If the number of bytes exceeds table length, no output is generated.  
_modifier_ |  Between the output format code and variable, you can optionally specify one or more modifiers of the variable value. The list below shows valid modifiers and their associated functions: |  **+** |  (Plus sign) |  Add the value of the next byte  
---|---|---  
**-** |  (Minus sign) |  Subtract the value of the byte  
**&** |  (Ampersand) |  AND the value of the next byte  
**^** |  (Caret) |  XOR the value of the next byte  
**|** |  (Pipe) |  OR the value of the next byte  
  
**_'@@' Mnemonic - Cursor Position_**

This mnemonic must be defined for a terminal. It is used by PxPlus to position the cursor within the screen. Typically, the command sequence for this mnemonic will reference the mnemonic variables \L and \C.

If the terminal supports the ability to establish scroll region, you may specify a **['WX'](../../../mnemonics/wx.md)** mnemonic. This mnemonic will be output by PxPlus whenever a**'SCROLL'** or**'WINDOW'** related mnemonic is executed. The**'WX'** mnemonic command sequence must establish a new top/bottom line on the screen and restrict all displays within this region. If the terminal does not support a scroll region (as is usually the case), PxPlus will emulate this functionality.

**_'RM' - Reset Mode_**

This mnemonic should define the required command sequence to restore the terminal to foreground mode, line wrap enabled, no blinking, no underscore, no reverse, scroll mode enabled, and white on black text.

**_'Fn ' and 'Bn ' - Colour Attributes_**

The mnemonics**'F0'** through**'F7'** and**'B0'** through**'B7'** are used to define the command sequences to set terminal foreground and background colours respectively.

**_'AT' - Visual Attributes_**

Since many terminals vary in the command sequences required to enable and disable visual attributes (underscore, blink, etc.), PxPlus provides special processing for attribute mnemonic output.

Generally, when the user program issues a mnemonic to enable a visual attribute, PxPlus will output the command sequence associated with the specified mnemonic. When the program issues the mnemonic to disable the attribute, its command sequence is output. Unfortunately, not all terminals have command sequences to disable specific attributes. In this case, PxPlus will issue an **['RM'](../../../mnemonics/rm.md)** mnemonic and then resend all other necessary command sequences needed to set the terminal to the proper mode.

Some terminals require that visual attributes be merged into a single attribute character. To handle these types of terminals, PxPlus uses the pseudo mnemonic **['AT'](../../../mnemonics/at.md)**. If the 'AT' mnemonic is defined, PxPlus will output it in order to satisfy all visual attribute changes. The command sequence for the 'AT' mnemonic can use the parameter '\A' (current attributes in binary) to determine the desired attribute.

The attribute values (\A) are comprised of a binary value representing the various attribute options. These are: 1 - _Bold/Foreground;_ 2 - _Inverse video;_ 4 - _Blink;_ 8 - _Underscore;_ and 16 - _Graphics character_.

**_'Cn ' - Cursor Display Mnemonics_**

Three mnemonics are used to control the display of the terminal cursor:

|  **['C0'](../../../mnemonics/c_.md)** |  Hide cursor command sequence  
---|---|---  
|  **['C1'](../../../mnemonics/c_.md)** |  Regular cursor display sequence  
|  **['C2'](../../../mnemonics/c_.md)** |  Insert mode cursor display sequence  
  
#### **Note:   
**Within Windows, the values declared for 'C1' and 'C2' determine the cursor size/shape. The default value for 'C1' is $10$, and for 'C2', it is $11$.  
  
If the first hex digit is non-zero, the cursor will be a vertical line (top to bottom).  
  
If the second hex digit is non-zero, the cursor will be a horizontal line (underscore).  
  
If both are non-zero, the cursor will be a solid block.  
  
In PxPlus, the actual value of the hex digit represents the thickness of the line (only used if non-block cursor).

**_'GD' - Graphic Characters_**

The **['GD'](../../../mnemonics/gd.md)** mnemonic is used to define the 11 characters that can be used for text mode line-drawing operations. The standard line-drawing characters are A-K (and for compatibility 0-9 and colon). See **['GD'](../../../mnemonics/gd.md)** mnemonic in the _PxPlus Language Reference_.

**_'CP' and 'SP' - Screen Size_**

When specifying a mnemonic that will change the size of the screen (such as **['CP'](../../../mnemonics/cp.md)** for condensed print), you must provide new screen dimensions with the **[MNEMONIC](../../../directives/mnemonic.md)** directive. For example, a WYSE 60 supports the following command sequence:

> MNEMONIC (LFO)'CP'=ESC+";":132,25

The parameters 132,25 tell PxPlus the new dimensions of the screen.

## Flexible Text Fonts

Applications can change the text font used by the screen in Windows by simply defining the font and the logical screen size as a mnemonic:

> MNEMONIC (0) 'CP' = "Courier New,-8":120,40  
>  MNEMONIC (0) 'SP' = "*":80,25

Once the above mnemonics have been set up, issuing a PRINT 'CP' will change the screen font to _Courier New_ with a size of 8 points. PRINT 'SP' will restore the screen font to the default.

#### **Note:**  
The text plain font must always be a fixed font.

## Specifying Conversion Tables

Two special mnemonics are also supported for character translation:

|  **'*I'** |  Defines a 256-byte table of characters. As PxPlus receives each character of input, it is used as an offset into this table. The byte found at the offset is the actual character value returned to the program.  
---|---|---  
|  **'*O'** |  Defines a 256-byte table, which is used during output. If defined, each character output is used to offset into the table to get the true character to send to the device.  
  
## Defining Control Key Values

Within the device driver, the**DEFCTL** directive can be used to define the terminal input sequences for the various function and editing keys. To simplify the process of defining these keys, the PxPlus utility***TTY** is called. It reads the system file "*KYBRD.CFG" which contains the key configuration information and will automatically load them.

The utility***UCK** is provided to allow the user to define and change the keyboard map based on the terminal type and user ID.
