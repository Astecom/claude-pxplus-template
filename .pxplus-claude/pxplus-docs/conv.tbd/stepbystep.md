# Toolkit for Conversion from Thoroughbred

**Step-by-Step Conversion Process**|   
---|---  
  
The process below outlines the methodology to convert program and data files (Direct, Indexed, Msort and Sort) to PxPlus.

## Step 1: Build the Output File

Launch Thoroughbred, load and run the program **BUNDLTBD** , which is found in the _*conv.tbd_ directory. 

The conversion program will prompt you for the following information.

_Input directory_ |  Enter the name of the directory/path that contains the Thoroughbred programs and data files to be converted to PxPlus.  
---|---  
_Output file_ |  Enter the name of the flat text file that will be created and used to store a text image of the programs and data. The file will be stored in the directory associated with **"DEV D0"**. Default name for the file is **bundltbd.dat**.  
  
The conversion program will then search the _Input directory_ and any sub-directories for Thoroughbred files. Each program or file found will be added to the _Output file_ in text format.

#### **Note:**  
There is an alternate program/option to build this output file. However, this program currently does **_not_** support MSORT files.

Start Thoroughbred and merge in the program file **"bundtbd.asc"** , which can be found in the _*conv.tbd"_ directory and run it as follows:

> >DELETE  
>  >OPEN (1) "/pxplus/lib/_conv.tbd/bundltbd.asc"  
>  >MERGE (1)  
>  >CLOSE (1)  
>  >RUN

Then, follow the instructions for the prompts as noted above.

## Step 2: Exit

Exit Thoroughbred.

## Step 3: Convert Programs and Rebuild Data Files

Start PxPlus and **RUN "*conv.tbd/unbundle.tbd"**. You will be prompted for the following information:

_Name of bundle file to convert_ |  Enter the name of the _Output Text File_ created in Step 1.  
---|---  
_Name of log file (if desired)_ |  Enter the name of a flat text file that will receive a list of any errors detected. Default name for the file is **bundltbd.log**.  
_Output prefix_ |  Enter the directory where the converted PxPlus programs and data files will be created.  
  
## Step 4: Review the Error Log

When the conversion has finished, review the output of the conversion log for any errors that occurred during the conversion process.

For the most part, the conversion will be able to convert the majority of your programs with few, if any, errors.

#### **Note:**  
The conversion routine will replace several Thoroughbred functions with global functions that are defined in a program called _'*conv.tbd/function.def'_. This program should be CALLed from the START_UP program to make the functions globally available to the converted application.  
  
The supplied START_UP program in the _*conv.tbd_ directory has an example of how to define these global functions. Note that if you plan to use this START_UP program, it needs to be placed in your starting current directory and be called "START_UP" on UNIX systems **_(uppercase required)_**.

Thoroughbred is a registered trademark of Thoroughbred Software International, Inc.
