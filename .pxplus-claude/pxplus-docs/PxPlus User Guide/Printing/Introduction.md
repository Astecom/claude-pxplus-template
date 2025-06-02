# Introduction to Using PxPlus

**Printing** |  **__**  
---|---  
  
**PRINT** (**?**) is the directive for formatting and displaying data at the console (_screen, display_). However, as the keyword suggests, **PRINT** can also be used to render text and images on paper using a hard copy device _(printer)_. Actually, the definition of "printing" is not limited to hard copy format. In PxPlus, this can mean any process by which the data (reports, documents or images) are sent to an output destination (device, interface or file format).

Unless the output is intended for immediate display, a **PRINT** statement must include a valid **_channel number_** to indicate a destination other than the PxPlus console. Channels are established using an **OPEN** directive, which identifies the connection to a specific device, interface or file. See **[Opening/Closing Devices and Files](../Programming%20Constructs/Basic%20Input%20and%20Output/Overview.htm#Mark1)**.

Printing requires the use of both the **OPEN** directive and the **PRINT** directive:

|  **[OPEN](../../directives/open.md)** |  To assign a channel number to an output destination  
---|---|---  
|  **[PRINT](../../directives/print.md)** |  To format and direct output data to the destination defined via **OPEN**  
  
## Printing Options

The PxPlus environment is designed for graphical application development, platform and device independence and for the migration of older code to newer technologies. As a result, it comes equipped with a variety of **PRINT** destinations (see **[PRINT Destinations](Introduction.htm#print)** below) to accommodate a broad range of application printing requirements.

PxPlus allows you to control all the steps in the printing process, but the end result is contingent on which method is used and on how the different parts work together. _So how do you determine which tools are right for the job?_

It is important to understand the capabilities, the limitations and the intended purpose of the different printing methods before you try to incorporate them into your PxPlus application:

  * If your PxPlus application is designed run in Microsoft Windows, then you should be able to handle most hard copy printing tasks using the standard Windows printer interface***WINPRT***. Output may be controlled using various**Graphical Mnemonics** and through defaults established by the **[WINPRT_SETUP](../../directives/winprt_setup.md)** directive. See **[Printing in MS Windows](Printing%20in%20MS%20Windows/Printing%20in%20MS%20Windows.md)**.
  * Legacy or converted character-based programs can use***WINPRT*** just as easily, provided they are running under Windows. However, output that requires direct-to-device access (via raw escape sequences) should be sent to the***WINDEV*** interface instead. See **[Character-Based Printing](Character-Based%20Printing/Overview.md)**.
  * UNIX/Linux-based PxPlus programs can access either***WINPRT*** or***WINDEV*** via WindX. If you are printing over a network print spooler or using a local port connection, the specific UNIX/Linux print routines may be maintained using custom print drivers and link files (explained in the next point).
  * When your application has specific output requirements that need to be customized for different environments and/or multiple devices, then you should make use of a custom print driver. This is a basic PxPlus file that allows you to maintain initialization code, mnemonics, and device-specific control sequences **_outside your application_**. Devices, device drivers and other settings can be easily maintained (and are interchangeable) when defined using a **_link_**. See **[Print Drivers and Link Files](Print%20Drivers%20and%20Link%20Files/Overview.md)**.
  * **PRINT** destinations are not limited to hard copy. PxPlus has an extensive list of output choices, which include the generation of HTML, 24-bit colour bitmap images, PDF-compatible files, and the Print Preview facility. See **[Logical Printers](Logical%20Printers/Overview.md)**.
  * Under WindX,***WINPRT*** and***WINDEV*** interfaces are accessible on the Windows system that issues the command. The**[WDX]** prefix is required to ensure that print jobs and dialogues are directed to the client. See **[Printing via Thin-Clients](Printing%20via%20Thin-Clients/Overview.md)**.



## Character-Based vs. Graphical Printing

In the section **[Programming Constructs](../Programming%20Constructs/Basic%20Input%20and%20Output/Output%20Statements.md)**, the **PRINT** directive is first introduced within the context of a character-based implementation of PxPlus. This is also referred to as _character mode_ , and it defines syntax elements for generating line-oriented output on both the printer and screen.

By default, character-based **PRINT** statements will only advance by one line at a time when they print to the page. Automatic advance can be overridden by placing a _hanging comma_ after the statement.***WINPRT*** has been designed to minimize changes to existing text-based applications and allow virtually any printer to be used. See **[Character-Based Printing](Character-Based%20Printing/Overview.md)**.

_Graphical mode_ in PxPlus takes the original character mode behavior and has added syntax elements that are capable of graphical, page-oriented output. This implementation is ideally suited for GUI (graphical user interface) applications and is designed for sending graphical data to a Windows printer.

#### **Note:**  
Character and graphical mode methods may be mixed to produce desired output; however, be careful to ensure that the mixed elements are compatible. For example, using**'FONT'** and**'DEFAULT' or 'DF'** mnemonics to change character mode fonts can affect the x/y positioning of graphical output.

##  PRINT Destinations

Physical printers, printer interfaces and output files can all be classified as **PRINT** destinations in PxPlus if they are made available for use (in an**OPEN** statement). There are several options for defining how, where and in which format the output will be sent.

For syntax options for the logical file names (i.e. ***WINPRT*** , ***PDF***), see **[Special File Handling](../../file_handling.md)**.

***BITMAP*** |  **_(WindX or Windows Only)_** Generates 24-bit colour bitmap images in memory. **_Example:_** OPEN (12)"*bitmap*"; PRINT 'CS' ***BITMAP*** contents can be accessed via the **['PICTURE'](../../mnemonics/picture.md)** mnemonic and the **[SAVE FILE](../../directives/save_file.md)** directive. See **[Logical Printers](Logical%20Printers/Overview.htm#bitmap)**.  
---|---  
***HTML*** |  Generates HTML-formatted reports. **_Example:_** OPEN (1,OPT="FILE=Sample.htm;SHOW;FONT=Courier New;TITLE=Sample;BACK=FFFFFF;TEXT=000000")"*HTML*" Reports that are formatted using normal fixed fonts may be read using any HTML viewer (browser). The system prompts for a file name to store the resulting HTML document. See **[Logical Printers](Logical%20Printers/Overview.htm#html)**.  
***PDF*** |  Generates a PDF file from PxPlus output. **_Example:_** OPEN (1) "*pdf*;FILE=/tmp/pvx.pdf; FORM=Letter:8.5in:11in" If the file name is omitted, a dialogue appears for users to specify the path, PDF name, and properties. See **[Logical Printers](Logical%20Printers/Overview.htm#pdf)**.  
***VIEWER*** |  **_(WindX or Windows Only)_** Allows users to preview reports. **_Example:_** OPEN (CHAN)"*VIEWER*" This renders output to a screen "viewer" exactly as it would print out in hard copy format via***WINPRT***. See **[Logical Printers](Logical%20Printers/Overview.htm#viewer)**.  
***WINDEV*** |  **_(WindX or Windows Only)_** Sends character-based data to the Windows print sub-system/spooler. **_Example:_** OPEN (1)"*WINDEV*;HP Laser Jet on \\\Main_Server\HPLaser" This permits the Windows equivalent of sending data to a directly connected printer. It provides an interface to the Windows API in a _pass-through_ mode that accepts raw data and device-specific escape sequences. See **[Raw Printing](Character-Based%20Printing/Overview.htm#rawprinting)**. For graphical printing, use ***WINPRT*** (see below).  
***WINPRT*** |  **_(WindX or Windows Only)_** Enables standard API access to the Windows print sub-system/spooler. **_Example:_** OPEN (1)"*WINPRT*" This provides access to the standard Windows Printer dialogue for both graphical and character-based data; however, raw escape sequences are not permitted in graphical printing. For raw printing, see ***WINDEV*** (see above). Use the **[WINPRT_SETUP](../../directives/winprt_setup.md)** directive to establish default printing options for the Windows printer; i.e. paper size, margins, copies, etc. See **[Printing in MS Windows](Printing%20in%20MS%20Windows/Printing%20in%20MS%20Windows.md)**.  
**_LPT Access_** |  Specifies the port number of a directly connected printer device. **_Example:_**  
  
OPEN (1)"*LPT1*"   
  
This format accepts raw data, along with printer escape sequences, but does not support graphical printing. See **[Raw Printing](Character-Based%20Printing/Overview.htm#rawprinting)**.  
**_UNC Name_** |  **_(WindX or Windows Only)_** Specifies the location of a shared server/printer on the network. **_Example:_**  
  
OPEN (1)"\\\Print_Server\HP_Laser" The output device can be any shared resource that is identified via Universal Naming Convention. This format accepts raw data, along with printer escape sequences, but does not support graphical printing.
