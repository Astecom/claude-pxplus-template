# Printing

**Print Drivers and Link Files** |  **__**  
---|---  
  
While it is possible to communicate with a printer directly, most output data is delivered through one or more interfaces, software liaisons between the source application and the printer.

Printer manufacturers generally supply their own interfaces (printer drivers) to make it easier for operating systems to communicate with their products. Windows supplies its own interface (print subsystem API) for directing access to the various printer drivers installed on the system. It also handles other tasks, including _print manager_ that allows users to select from a list of available printers to which they may send their output, and **_spooler_** that acts as a buffer/queue for multiple print jobs so that printers can receive data at their own rate.

There are different printing interfaces within the PxPlus environment itself. PxPlus includes several ready-made interfaces (***WINDEV*** , ***WINPRT*** , ***PDF*** , etc.) that allow you to print directly from an application. However, you can also assemble your own interfaces for tailoring print requirements to different environments:

  * A **[Custom Driver](Overview.htm#Mark1)** consolidates mnemonics and (legacy) control sequences into a single executable file to be called from the main program whenever the target device is opened.
  * A **[Link File](Overview.htm#Mark2)** allows you to maintain a common printer name (**_alias_**) that will represent all possible print destinations from your application.



#### **Note:**  
While this section focuses primarily on printers, custom drivers can be created for use with any device to be accessed by the PxPlus environment. See **[Device Drivers](../../Appendix%20of%20Miscellaneous%20Topics/Device%20Drivers/Overview.md)**.

##  Custom Driver

A **_custom driver_** is a PxPlus program that is automatically loaded and run when the target device file is opened. They reside outside the main program in the PxPlus ***dev** directory (lib/_dev). Driver names are limited to 12 characters in length.

Most custom drivers are used to consolidate a set of **[Mnemonics](../../../mnemonics.md)** or the escape sequences that apply to a specific file or printer. They are often used to initialize printers in **[Character-Based Printing](../Character-Based%20Printing/Overview.md)**, but they can also be used to redirect output from one device/file to another, prompt the user for additional information, and/or execute operating system commands.

The **[DEFPRT](../../../directives/defprt.md)** directive at the beginning of the code tells PxPlus that the channel is a printer.

**_Example:_**

The following printer driver, ***** dev/hplaser, defines the maximum columns and rows for the printer, then defines all of the mnemonics and initializes the printer:

> 0010 ! HP Laser Jet: 10 cpi, 6 lpi, Portrait   
>  0020 DEFPRT (LFO)80,60   
>  0030 MNEMONIC (LFO)'*C'=ESC+"E" ! Close printer mnemonic -- Resets all   
>  0040 MNEMONIC (LFO)'FF'=$0C$ ! <formfeed>   
>  0050 MNEMONIC (LFO)'CR'=$0D$ ! <cr>   
>  0060 MNEMONIC (LFO)'LF'=$0D0A$ ! <cr><lf>   
>  0070 MNEMONIC (LFO)'NP'=ESC+"&k0S":80,0 ! 10 cpi  
>  0080 MNEMONIC (LFO)'SP'=ESC+"(s12H":96,0 ! 12 cpi  
>  0090 MNEMONIC (LFO)'CP'=ESC+"&k2S":132,0 ! 16.66 cpi   
>  0100 MNEMONIC (LFO)'LT'=ESC+"&l12D":0,120 ! 12 Lines per inch   
>  0110 MNEMONIC (LFO)'L8'=ESC+"&l8D":0,80 ! 8 lines per inch   
>  0120 MNEMONIC (LFO)'L6'=ESC+"&l6D":0,60 ! 6 lines per inch   
>  0130 MNEMONIC (LFO)'PM'=ESC+"&l0O" ! Portrait mode   
>  0140 MNEMONIC (LFO)'LM'=ESC+"&l1O" ! Landscape mode   
>  0150 MNEMONIC (LFO)'RM'=MNM('PM',LFO)+MNM('NP',LFO)+MNM('L6',LFO):80,60   
>  0160 X$=MNM('PS',0); IF X$<>"" THEN MNEMONIC (LFO)'PS'=X$ ! Printer Start   
>  0170 X$=MNM('PE',0); IF X$<>"" THEN MNEMONIC (LFO)'PE'=X$ ! Printer End   
>  0180 X$=FIB(LFO); IF X$(19,1)="S" THEN LOCK (LFO,ERR=*NEXT)   
>  0190 PRINT (LFO,ERR=0200)'*C','RM',   
>  0200 END

The system variable **[LFO](../../../variables/lfo.md)** is used to identify the affected channel/file. It will contain the value of the last file opened, which, in the case of a device driver, is the channel for which the driver is responsible. Once created, ***** dev/hplaser could be accessed in an application as follows:

> OPEN (1)"*WINDEV*;HP Laser Jet"   
>  CALL "*dev/hplaser"

For general information on device drivers in PxPlus, see **[Device Drivers](../../Appendix%20of%20Miscellaneous%20Topics/Device%20Drivers/Overview.md)**.

##  Link File

A **_link file_** is a device descriptor that contains a single line of code that simply points to a device or device driver.

**_Example:_**

> [Pvxdev]*WINDEV*;Generic/Text Only;FILE=ABC.PRN hplaser

**_Where:_**

The format of the device descriptor is as follows:

**Location** |  **Length** |  **Contents**  
---|---|---  
1 |  8 |  "[Pvxdev]": Device descriptor ID  
9 |  60 |  True path to the device  
69 |  12 |  Device type (name of driver)  
71 |  184 |  Reserved for future (blank)  
  
When PxPlus opens a link file, it redirects to the path specified in bytes (9,60). This is the actual file to be opened. Once the file is opened, PxPlus will automatically CALL the device driver specified in bytes (69,12).

The link file name serves as an "alias" that can be used in place of where the associated file or device information appears in an application's OPEN statement.

**_Example:_**

If the HP Laser Jet device and driver described above were defined in a link named "LP", the device could then be accessed from the application as follows:

> OPEN (1)"LP"

The application now sends data to the printer defined via "LP". If "LP" is always used in the OPEN statement, the contents of the link file itself can be changed, tailored to any device or driver that will be used with the application. If device information changes, the application will direct output to the new destination, provided that the contents of the "LP" link file is updated, the device exists, and the custom driver is located in the PxPlus ***dev** directory.

Link files are simply plain text files that may be produced using any text editor. PxPlus also supplies a _prompt-driven utility_ (***UCL**) that simplifies the creation and maintenance of link files. This utility allows you to choose between three slightly different link header types (File, Device or Attached Printer):

**[Pvxlnk]** |  To point to a file without calling a program. **_Example:_** If you moved the GLDetail file to another directory, you could create a link file using the original name (GLDetail), then with the file name portion of the link, point to the new location of the _actual_ GLDetail file.  
---|---  
**[Pvxdev]** |  To open a file, as well as call a program. Commonly used to associate printers and printer drivers.  
**[Pvxapr]** |  Specifically for pointing to a printer that is physically attached to the computer. This issues an additional escape sequence wrapped around every line. PxPlus opens a file, calls the program in question and automatically prints the **['PS'](../../../mnemonics/ps.md)** mnemonic to the printer. It will also issue a **['PE'](../../../mnemonics/pe.md)** mnemonic when it attempts to close the file.  
  
***UCL** prompts for the device information that will appear on the descriptor line. The following examples illustrate some device information that could be written to Link files via the ***UCL** utility for various printer setups:

**_Example:_**

> Link File Name: LP   
>  Other File to Open: LPT1   
>  Program to Call: epson   
>   
>  Link File Name: /MYAPP/P1   
>  Other File to Open: >lp -d queuename -c -s 2>/dev/null   
>  Program to Call: hplaser   
>   
>  Link File Name: Googles   
>  Other File to Open: /tmp   
>  Program to Call: spooler   
>   
>  Link File Name: WINDOWS   
>  Other File to Open: [wdx]*winprt*   
>  Program to Call: myprog

## Pages and Forms Feeds in Printing

You can access an entire page and print to it. However, you can only print to the current page at any one time. To complete a page, either use a form feed or close the channel. For proper spooler operation, do not include leading or trailing form feeds within the print job. Spoolers always assume the paper is at top-of-form when a job begins.

#### **Note:**  
A form feed is automatically appended to every print job sent.
