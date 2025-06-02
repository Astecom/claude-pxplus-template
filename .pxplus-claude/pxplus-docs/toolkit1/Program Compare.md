# IT - Integrated Toolkit™  
  
**Program Compare**|   
---|---  
  
The *IT - Integrated Toolkit includes a **Program Compare Utility** for programs with or without line numbers. This utility can use either an **_Internal_** program compare utility or a third party **_External_** compare tool.

To invoke this utility, select _Compare programs_ from the _Tools_ menu. You can also right click inside the *IT program display and editing region, and select either _Compare programs_ or _File > Compare programs_ from the popup menu.

> This window consists of the following:

_Original Program_ |  Enter the path and file name of the _original_ program to be compared or click the Query button to specify the file.  
---|---  
_Revised Program_ |  Enter the path and file name of the _revised_ program to be compared against the original program or click the Query button to specify the file.  
**Internal Compare**  
_(List Box)_ |  When the _Compare_ button is selected, the list box displays the compare results and indicates any program differences with color highlighting: Additions (light green), Deletions (light red) and Changes (light blue). The detail that is displayed is determined by the _Differences only_ check box (explained below). To go to the _Next_ difference, click the "Find next difference" button to the right of the list box or press F8. To go to the _Prior_ difference, click the "Find prior difference" button to the right of the list box or press F7.  
_Differences only_ |  Check box option that determines the amount of detail displayed in the list box when the _Compare_ button is selected. If not selected **_(default)_** , all the lines in the original and revised programs are displayed with the differences highlighted; otherwise, only the highlighted differences are displayed.  
_Ignore Case_ |  Check box option that determines whether the Compare program will check for case when comparing statement labels, functions, variables, etc. If not selected **_(default)_** , any differences in case are highlighted; otherwise, they are ignored.  
_Generate Patches_ |  Each of these two buttons generates a patch file of the differences to the Clipboard: The  _right pointing arrow_ button generates a patch file of the differences in the original program when it is compared against the revised program. The  _left pointing arrow_ button generates a patch file of the differences in the revised program when it is compared against the original program.  
_Print_ |  Generates a PDF report of the compare results for printing.  
**External Compare**  
_External Compare Command_ |  The External compare allows you to use a variety of external programs to compare the source of your programs. When the **External Compare** tab is selected, you can enter the command required to launch the External compare. The Command line will have the value %1 and %2 replaced with the pathname to the files - %1 will be the original program and %2 the revised file. The _External Compare Command_ field contains a drop down list that is pre-loaded with command lines that are compatible with a few of the more common Windows-based compare utilities. Once you select or enter the command to use, the system will remember the command and use it on subsequent comparisons. The system will convert the programs into text files prior to launching the External Compare process. The text file names as opposed to the actual program file names will be passed to the Compare program. When the Compare program terminates, these text files are removed from the system. When running in a client server environment (WindX), the system creates the text files on the workstation so that the Compare process can access them directly.  
_Compare formatted program_ |  Check box option that determines whether you want to compare formatted (with indented lines) or unformatted program files.  
_Compare_ |  Invokes the Compare process based on the current selections. If any of the selections are changed, the _Compare_ button must be selected again.  
_Close_ |  Exits the **Program Compare Utility**.  
  
## Comparing Prior Versions

The steps to compare prior versions of a program are:

**Step** |  **Description**  
---|---  
1. |  Select _File > Open_ to load the program file to be compared.  
2. |  Select _File > Properties_ to invoke the **Program Information** window, which presents a list of prior versions for the selected program.  
3. |  In the _History_ list box, select the prior version to compare against the loaded file.  
4. |  At this point, you can either invoke the Compare process (see **_Method 1_**) or extract (save) a copy of the prior version to use for the Compare process (see **_Method 2_**): |  **_Method 1:_** |  Invoke the Compare process by clicking the _Compare_ button to launch the **Program Compare Utility**. Verify your file selections and then click _Compare_.  
---|---  
**_or_** |   
**_Method 2:_** |  Extract (save) a copy of the prior version by clicking the _Extract_ button. This launches a separate window that indicates the prior version will be extracted to a separate file suffixed with the version number you selected _(default)_. **_Example:_**  
_  
_ _v0.00.0001_ of program _cnv2_ would be extracted to _cnv2.v0.00.0001_. Click _Extract_ to save this file or click _Cancel_ to return to the **Program Information** window. Once you have saved a copy of the prior version, the next step is to invoke the Compare process. From the Program Editor menu, select _Tools > Compare Programs_ to launch the **Program Compare Utility**. Enter the _Original Program_ and _Revised Program_ files to compare and then click _Compare_.
