# IT - Integrated Toolkit™  
  
**Version Control** |  **__**  
---|---  
  
PxPlus provides an integrated Version Control System that uses TortoiseSVN whereby every time a program is saved, the system will assign it a new version number and will maintain multiple versions of the program on the program file. See **[PxPlus Version Control System Using TortoiseSVN](../../PxPlus%20Version%20Control%20System%20Using%20TortoiseSVN/Introduction.md)**.

The Integrated Toolkit includes features and functions that are designed specifically to work with this Version Control System.

The _Properties_ option on the _File_ menu launches the **Program Information** window that displays the current version information and a list of all prior versions for the selected program file.

> This window presents the following:

_Pathname_ |  **_(Display Only)_** Displays the path and file name of the selected program file.  
---|---  
**Program Information** |  **_(Display Only)_** Displays details about the selected program file when it was last saved such as date, time and user ID.  
**History (Internal Versions)** |  **_(Display Only)_** Lists the prior versions of the selected program file.  
_Extract_ |  **_(Available when one or more prior versions of the program are selected in the History list. To select multiple versions, use Shift-Click or Ctrl-Click.)_** Launches the extraction process, which takes the selected version(s) of the program and places them into individual program files suffixed with the version number. **_Example:_**_  
  
_ _v0.00.0001_ of program _cnv2_ would be extracted to _cnv2.v0.00.0001_. Once extracted, the program(s) can be loaded into the IT Editor for viewing.  
_Delete_ |  **_(Available when one or more prior versions of the program are selected in the History list. To select multiple versions, use Shift-Click or Ctrl-Click.)_** Deletes the selected version(s) of the program. You are prompted to confirm your selections prior to deletion.  
_Compare_ |  **_(Available when one or two prior versions of the program are selected in the History list. To select two versions, use Shift-Click or Ctrl-Click.)_** Launches the **[Program Compare Utility](../Program%20Compare.md)** that is used to compare a prior version of a program file with the current version or with another version. If only one version is selected, the compare is between that version and the current program.  
If two versions are selected, they will be compared against each other.  
If three or more versions are selected, the _Compare_ button becomes disabled. During the compare process, the programs will be extracted to temporary files that will be deleted once the compare is over.  
_Cancel_ |  Exits the **Program Information** window.  
  
## Setting the Version

The _Save Version_ option on the _File_ menu allows the developer to enter a specific version number for a program during a SAVE operation. In addition, the developer can record notes about the version being saved (80 characters maximum).
