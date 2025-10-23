# PxPlus System Programs and Files

***KYBRD.CFG and *KYBRD.STD** |  **_Keyboard Definition Files_**  
---|---  
  
These two keyed files, ***KYBRD.CFG** and ***KYBRD.STD** , contain the keyboard command sequences and their respective CTL values. The system utility ***TTY** uses the information contained in these files to load the CTL key definitions for terminals.

The ***KYBRD.STD** file contains the standard keyboard definitions as provided by PVX Plus Technologies. The ***KYBRD.CFG** file contains any custom definitions that have been defined by the users. The system utility ***UCK** creates and updates the ***KYBRD.CFG** file. These files contain records with 80 elements where each element has the input sequences for various CTL functions. The CTL values for each of the 80 elements is maintained in the ***KYBRD.STD** file along with the keyword description of the function it represents.

When ***TTY** is looking for a keyboard definition, it first looks in the ***KYBRD.CFG** file. If no entry is found, the ***KYBRD.STD** file is used.

Running the ***UCK** utility invokes the following window for specifying the keyboard definitions:

> #### **Note:**  
The "ALT" that precedes the ALT - F1 to F4 key combinations in the bottom right section stands for "alternate" (**_not_** the actual _Alt_ key). This means that you have the option to set an alternate or secondary definition for the F1 to F4 keys, if desired.
