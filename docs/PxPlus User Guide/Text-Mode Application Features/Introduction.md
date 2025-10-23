# Introduction to Using PxPlus

**Text-Mode Application Features** |  **__**  
---|---  
  
Certain features can be used to enhance the appearance and functionality of a text-mode application, such as hot keys, built-in help and queries, mouse interface, and device drivers.

Most of these features can be added to existing applications with a minimum of effort. For the most part, these features can be implemented fully with no changes to the application source code.

If converting an existing application to PxPlus from some other language, the functionality described below will enhance the functionality and appearance of the application.

##  Function and Control Keys

PxPlus provides flexibility in the handling of function and control keys external from the application program. PxPlus allows the mapping of function and control key sequences into CTL values via the **[DEFCTL](../../directives/defctl.md)** directive. By using this directive, the programmer can customize the terminal keyboard to:

  * Add additional CTL values (>5).
  * Redefine other keys to return common CTL values.
  * Add keys to invoke system utilities, etc.
  * Program keys to call user-developed programs.
  * Define input editing control keys.



Typically, these keys are defined by using the keyboard configuration utility "*UCK" and then loaded during device initialization by the program "*TTY". PxPlus provides standard definitions for most common terminal types used. For additional information on defining and customizing terminal definitions, see **[Device Drivers](../Appendix%20of%20Miscellaneous%20Topics/Device%20Drivers/Overview.md)**.

The CTL value can be defined by the programmer by using the **[DEFCTL](../../directives/defctl.md)** directive. It is used to define the CTL value (and thus determine the function to be performed) when the key or keying sequence is entered by the user. Positive CTL values are always returned to the user application program. The positive value can be in the range of from 0 to 32767. **[Negative CTL Values](../../appendix/negative_ctl_definitions.md)** are handled by PxPlus internally.

## Defining HOT-KEY Programs

CTL values from -1 to -9 and -1000 and below are defined for use by the PxPlus input editor. These are passed to the system utility **"*control"** for processing when received by the input processor. The *control program internally processes the CTL values between -1 and -9.

The values between -10 and -999 are reserved for user-defined HOT-KEYS and will cause the system to automatically call user defined and developed programs. These programs must have the name $CTL _-nnn_ where _\- nnn_ is the CTL value. For example, a CTL value of -10 calls "$CTL-10", -500 call "$CTL-500", and so on.

Prior to executing these programs, *control will save the current screen image and restore it once the program terminates. The $CTL _-nnn_ programs must not change the status of any open files in order not to affect the program currently being saved by the system.

**_Composite Character Generation_**

The CTL values between -2000 and -2255 are used to generate single characters. Whenever a CTL value in this range is detected by PxPlus, the character, whose ASCII value equals the absolute value of CTL less 2000, is placed into the input buffer.

This feature allows the programmer to define input sequences to generate the Extended ASCII characters even when the terminal cannot generate them.

**_Example:_**

Assume the programmer wants F11 followed by a character to generate that character with an accent. Given the following:

> \- F11 generates the code $00007A$ (Windows keyboard)  
>  \- Accented E has ASCII value of 130 (Hex 82)  
>  \- Accented O has ASCII value of 162 (Hex A2)  
>  \- Accented U has ASCII value of 163 (Hex A3)

Then:

> DEFCTL $00007A$+"E"=-2130 ! Upper case  
>  DEFCTL $00007A$+"O"=-2162  
>  DEFCTL $00007A$+"U"=-2163  
>  DEFCTL $00007A$+"e"=-2130 ! Lower case  
>  DEFCTL $00007A$+"o"=-2162  
>  DEFCTL $00007A$+"u"=-2163

#### **Note:**  
As in the above example, it is important to include both the _Upper_ and _Lower_ case values when defining extended keyboard sequences. In some instances, the Upper and Lower case values will generate the same internal character, while in others, it may be necessary to have them generate unique internal characters.   
  
On some terminals, it may also be necessary to define an output translation table to display the desired character using the **['*O'](../../mnemonics/~o.md)** mnemonic.

**_Secondary CTL Definitions_**

Another function of the **[DEFCTL](../../directives/defctl.md)** directive is to define secondary or _alternate_ CTL values. Normally, when processing input edit control keys and an invalid key is entered (such as Up arrow in a single line entry), PxPlus will reject the key and ring the bell on the terminal. Secondary CTL values are used to define a different functionality that is to be performed when an invalid key is pressed.

A very common use for secondary CTL values is to define a CTL value to be returned to the program when the Up arrow is pressed.

**_Example:_**

The following program uses CTL 3 to back up to the prior input.

> 0010 PRINT 'CS',"Customer ADD"   
>  0020 INPUT EDIT @(5,5),"Customer #:",CS_ID$:"AAAA"   
>  0030 ON CTL GOTO 0040,0020,0020,9000,9000   
>  0040 INPUT EDIT @(5,7)," Address:",CS_AD$:"X(30)"   
>  0050 ON CTL GOTO 0060,0040,0040,0020,9000   
>  0060 INPUT EDIT @(5,8)," City:",CS_CT$:"X(30)"   
>  0070 ON CTL GOTO 0080,0060,0060,0040,9000   
>  0080 WRITE (%CST_FN,KEY=CS_ID$) CS_AD$,CS_DT$   
>  0090 END

To simplify the data entry process, it would be desirable to have both CTL 3 and Up arrow back up a field. This could be accomplished by executing the following directive:

> DEFCTL -1011=3

#### **Note:**  
This specific definition is quite common in PxPlus and is usually placed in the START_UP program. Other common declarations are:   
  
DEFCTL -1012=0 ! Down-arrow = End input   
DEFCTL -1014=4 ! Page-up = Exit (CTL 4)

## Online Help and Query Facility

The PxPlus Development Environment provides a built-in HELP facility, which can be added to existing applications without any changes to the application. Two types of online help exist -- field help and program help.

Field help provides information regarding the current field or input being requested. Program help provides information regarding the execution of the program or application that is currently running.

To invoke online help, the user simply depresses a function key (or CTRL key sequence) at any terminal input. The system will look up the help text and, if defined, present the help text to the user. When the user has read the information presented, he/she simply presses the ENTER key to return to normal processing.

PxPlus uses the following function keys with the Help sub-system by default:

__ |  _Shifted Function Key 1_ |  **Field Help**  
---|---|---  
__ |  _Shifted Function Key 2_ |  **Field Query**  
__ |  _Shifted Function Key 3_ |  **Program Help**  
  
These key assignments can be altered by changing the definition of the system CTL values -5, -6, and -7 respectively. See **[Function and Control Keys](Introduction.htm#functionkeys)** on how to alter these defaults.

The **[Field Help](Introduction.htm#fieldhelp)** facility allows for definition of multi-line help messages to be defined for each terminal input for a specific program. The field being requested is normally identified by the program name and current input screen position (line and column). Optionally, the programmer may specify a specific help identifier by providing an HLP= option in the INPUT directive. Up to three lines of text can be displayed for each field help.

The **[Program Help](Introduction.htm#programhelp)** facility allows for definition of multiple pages of help information on a program to be recorded and displayed by the system. This help information, when requested, is displayed a page at a time to the user. It is intended to contain a program narrative that will provide guidance to the end-user as to how to use the current program, as well as its purpose and function. This help differs from field help in that the same information is displayed regardless of what input is being requested by the program.

Both forms of online help allow for the definition of generic help texts to be used by more than one program or input field. This facilitates the entry and maintenance of help information for common data elements such as account number, codes, etc.

The **[Online Query](Introduction.htm#fieldquery)** facility is an extension of the online field help facility. It allows the application developer to design and write programs to assist the user in determining his/her answer to input requests. These query programs are used to display information such as code tables or account numbers, and allow the user to scroll or search the file or table and select the desired response. A typical use of a query program would be for product number lookup.

## How the Help Sub-System Works

The HELP sub-system is implemented as an extension of the standard input control program '*CONTROL'. When the system receives a function or control key designated _'Field Help'_ , _'Program Help'_ or _'Field Query',_ it invokes the HELP sub-system. This sub-system utilizes the information contained within the HELP.INF data file. It is the presence (or absence) of this file that determines whether online help exists in an application.

**_Field Help (CTL-5)_**

When a request for 'Field Help' is received, the current program name is taken for the program stack (STK function), a "-", and the last input position (LIP variable) are used as a key into the HELP.INF file. *CONTROL passes control to '*HELP' to read and display the help text maintained on the HELP.INF file. If no record exists for the key, the message "No help exists" is displayed. If the record does exist, the help message text (3 lines max) is displayed at the bottom of the screen (at the top of the screen if the input field occurs in a line number >19).

If desired, an indirect pointer to a common/generic help message may be placed against this input field. Generic field help is identified by an '=' in the first character position of the first line of help text, followed by the name of the generic help message.

Help message text can be added and edited by entering the _Help Sub-system Password._ See **[Installing Help](Introduction.htm#installinghelp)** below.

**_Field Query (CTL-6)_**

When a Field Query request is received, *CONTROL determines the key to the HELP.INF file as in 'Field Help', reads the help text and, if there is a Query program assigned to the help text, calls it. The query program is intended to provide the user with a list of possible responses to the input request. If the query program wants to respond to the input request, it issues a PREINPUT statement to load the input buffer with the desired response for the user.

**_Program Help (CTL-7)_**

When a Program Help request is received, *CONTROL passes control to '*HELP.PRG', which, in turn, checks the HELP.INF file to determine if any program help text exists by using the key of the program name. If the help text exists, it displays a page at a time. Function/control key 2 and 3 can be used to page forward and back with the text. If no text is available, the message "No help available" is displayed.

To change the help text, the user enters the _Help Sub-system Password._ The system will extract the existing help text (if any) and call the operating system editor to allow for the changing of the text. Page breaks are indicated by lines with a '/' in the first column.

The choice of editor is made by the program *HELP.PRG. By default, it uses "notepad" on Windows and "vi" on UNIX. To override this selection, set the environment variable **['PVXEDIT](../../PxPlus%20Installation%20and%20Configuration/Customizing%20PxPlus/Environment%20Variables.htm#Mark9)**' to the name of the editor desired.

##  Installing Help

The Help sub-system is automatically installed with PxPlus. The user only needs to define the help texts to use it. It automatically creates a file 'HELP._xxx_ ' **_where_** _xxx_ is the current language code (EN by default). This language code is taken from the environment variable **["LANG"](../../PxPlus%20Installation%20and%20Configuration/Customizing%20PxPlus/Environment%20Variables.htm#Mark10)**.

**_Default Password_**

By default, the _Help Sub-system Password_ is SYBEX. This password is defined by the program '*HELP.PWD'. This program has been saved with the password 'SYBEX' on your release copy of PxPlus.

To change the password, enter the following:

> LOAD "*HELP.PWD"  
>  PASSWORD "SYBEX"  
>  PASSWORD "_new_password_ "  
>  SAVE
