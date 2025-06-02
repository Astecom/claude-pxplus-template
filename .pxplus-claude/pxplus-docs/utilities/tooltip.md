# Utility Routines  
  
***TOOLTIP** |  **_External Tooltip Processor_**  
---|---  
  
## Description

The ***tooltip** program is launched automatically by the Windows version of PxPlus 2016. It is designed to monitor tooltip display requests that will be sent to its uniquely named window "*Tip_SerVer*", which will be done by PxPlus whenever either an HTML tip is detected (first character is <) or a tip with a header is detected (first character is *) and the **['TC'](../parameters/tc.md)** system parameter is set to -2.

The method used to send the message to this program is via the **[WRITE WINDOW DATA](../directives/writewindowdata.md)** directive, which issues a WM_COPYDATA and CTL value to the receiver. The data sent from PxPlus to the tooltip program is the tip contents, color (as defined by the TipArrowColor 'Option' setting), and the desired location on the screen.

When the message is received, the tooltip program generates/modifies the tip contents to display, places it into a Shell.Explorer control with a wrapper so the size can easily be determined and displays it on the screen.

If a null text message is received, the tooltip will be cleared. In addition, when PxPlus is shutdown, it sends a message with CTL -1, which tells the program to check for other sessions, as one tip display program can service multiple instances.

## Customization

If desired, you can create and define a custom tooltip display program based on *tooltip and place it in *ext/tooltip. If this program is found, the system will run it instead. Check with the *tooltip program source for additional information pertaining to the customization.

#### **Note:**  
Customization is supported **_only_** in NOMADS.
