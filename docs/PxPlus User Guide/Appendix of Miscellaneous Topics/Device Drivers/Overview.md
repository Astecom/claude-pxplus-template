# Introduction to Using PxPlus

**Device Drivers** |  **__**  
---|---  
  
One of the more powerful features of the PxPlus development environment is the ability for developers to modify _device drivers_ for use with their applications. Device drivers are critical software components used to define control sequences and special processing commands for handling system hardware (primarily terminals and printers).

No special device drivers are required to run applications under Windows versions of PxPlus. For UNIX/Linux installations, PxPlus ships with a variety of prebuilt device drivers (which should meet most user requirements). However, developers may need to make modifications in order to accommodate functionality that is not implemented in an existing driver, or a new driver may be required so that an application can take advantage of a device that is not currently listed.

In simple terms, device drivers are analogous to PxPlus subprograms (see **[Called Procedures](../../Programming%20Constructs/Called%20Procedures/Overview.md)**); only, in this case, the program (device driver) is used exclusively to perform the following:

  * Define the type of device.
  * Define the command sequences needed to process mnemonics.
  * Define the input sequences for the various CTL values associated with the device.



Because device drivers are programs, a variety of functions can be performed within them. They can even be used to redirect the file being opened to another device or file, ask questions of the user, or issue operating system commands. In general, it can do anything that a normal PxPlus program can do so long as nothing happens to affect the current state of the program, which originally opened the device; e.g. a **BEGIN** statement would close all files.

When PxPlus first accesses a device (and there are no problems opening the device), it automatically calls the associated device driver, if specified. For terminals, the device driver is run at the start_up of PxPlus. For printers, the device driver is run when data is sent to the printer. During execution of the device driver, the system variable**LFO** has the file number for the device.
