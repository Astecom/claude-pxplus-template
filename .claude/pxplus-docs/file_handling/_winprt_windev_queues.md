# Special File Handling

***WINPRT* / *WINDEV* Queues**|   
---|---  
  
The queue information provided below applies to both *WINDEV* and *WINPRT* device files. The examples illustrate the formats you can use to designate printer queues and assign values to a printer's properties, Q_options**(*WINPRT* only)**.

To select a particular printer, use the actual OS print queue name in your **[OPEN](../directives/open.md)** directive. The _Q_name_ you use must match the print queue's OS name (in the _Printers_ folder of the _Control Panel_ on the local Windows PC, as assigned to the printer when it was installed; e.g. "Bills Desk - Canon". 

Omit any mention of ports. For instance, if the _Control Panel_ folder records the name as "HP LasertJet on LPT1", simply use  _HP LaserJet_ as the queue name in your directive.

**_Example:_**

In these examples, because the queue is named in the [**OPEN**](../directives/open.md) directive, the end users will not see the printer selection dialogue at run time. (You can use this to your advantage if you want to prevent users from changing the printer and properties during the print run.)

> open (1)"*WINPRT*;HP LaserJet"  
>  open (2)"*WINPRT*;Bills Desk - Canon;orientation=landscape;copies=3"  
>  open (3)"*WINDEV*;HP LaserJet;copies=2"

**ASIS**

Use the **ASIS** keyword to **OPEN** the most recently selected printer with all its settings **_as is_**. Again, the users will not have access to the printer selection dialogue at run time and cannot alter the settings.

#### **Warning!**  
All the settings for the queue options will be identical to the previous selection. For the examples below, the previous selection was the HP LaserJet, copies=2; therefore, the **ASIS** print jobs below are sent to the HP LaserJet using its current property settings. All properties (including copies=2 ) will be identical.

**_Example:_**

> open (1)"*WINPRT*;ASIS"  
>  open (2)"*WINDEV*;ASIS"

For ***WINPRT*** only - you can override the **ASIS** queue option settings in your **OPEN** directive:

> open (1)"*WINPRT*;ASIS;copies=5;offset=500:500"  
>  open (2)"*WINPRT*;ASIS;file=hello.txt"

(Make sure your properties and values are valid for the given driver.)

**DEFAULT**

Use the **DEFAULT** keyword to **OPEN** the printer currently "Set As Default". The users will not have access to the printer selection dialogue and cannot alter your settings at run time.

For ***WINPRT*** only - you can use queue options to override the current **DEFAULT** properties.

**_Example_**** _:_**

If the default printer is "Bills Desk - Canon", then the print jobs in the examples below will be sent to that Canon printer:

> open (1)"*WINPRT*;DEFAULT"  
>  open (2)"*WINPRT*;DEFAULT;copies=5;orientation=landscape;offset=300:600"  
>  open (3)"*WINDEV*;DEFAULT"

**NORMAL**

Use the **NORMAL** keyword in your **[OPEN](../directives/open.md)** directive when you want the user to see the printer selection dialogue including a page range option (but no paper size or source tray options) at run time. The users can accept the current settings or alter them. The current options (including any options you set for ***WINPRT*** in your **OPEN** directive) are displayed in the printer selection dialogue when the user sees it.

Note that either open (30)"*WINDEV*" (omitting the queue name) or open (30)"*WINDEV*;NORMAL" will display the dialogue box so that the user can make changes. However, a queue name (in this case, NORMAL) is **_mandatory_** if you include queue options in a ***WINPRT*** command:

> open (14)"*WINPRT*;NORMAL;orientation=landscape"

**SETUP**

Use the **SETUP** keyword in your **[OPEN](../directives/open.md)** directive when you want the user to see the printer selection dialogue with paper size and source tray options (without the page range option) at run time. The current options (including any options you set in your **OPEN** directive for ***WINPRT***) are displayed in the printer selection dialogue when the user sees it.

**_Example:_**

> open (1)"*WINPRT*;SETUP"  
>  open (2)"*WINDEV*;SETUP"  
>  open (3)"*WINPRT*;SETUP;range=1:5"

##  *WINPRT* and *WINDEV* Queue Properties

To retrieve a list of the properties that are valid for a given queue, use **WINPRT_SETUP READ PROPERTIES**.

**_Example:_**

> open input (30)"*WINDEV*;ASIS"  
> winprt_setup read properties WHAT_PROP$  
>   
>  ?WHAT_PROP$  
>  RANGE=ALL;COLLATE=NO;COPIES=1;ORIENTATION=PORTRAIT;PAPERSIZE=1;SOURCE=1;RESOLUTION=300:300;OFFSET=0:0;TRUETYPE=2;DRIVER=WINSPOOL  
>  close (30)

For ***WINPRT*** only - You can use _Q_options_ in your directive to assign values to the properties the individual driver allows for your given queue. Most _Q_options_ are self-explanatory, such as COPIES=1. For a list of properties, see **[WINPRT_SETUP](../directives/winprt_setup.md)** directive.

You can obtain information on available fonts for graphics mode printing via **PRINT 'FONT'(LIST *)**. This mnemonic is **_not_** for character mode. See **['FONT'](../mnemonics/font.md)** mnemonic.

##  Link Files for Queues

You can use a link file, associating a device or file with a device driver. The device can be any valid device or filename including any of the Windows printers. The device driver is a PxPlus-based program that resides in the _*dev_ directory (or _/pvx/lib/_dev_ directory). Link files are maintained with the PxPlus utility *UCL (Utilities/Configuration/Link files).

The name of the link file can be any valid operating system filename:

__ |  _Link Filename:_ |  LP  
---|---|---  
__ |  _Device/Filename:_ |  *WINDEV*;HP Laser Jet  
__ |  _Device Driver:_ |  HPLASER
