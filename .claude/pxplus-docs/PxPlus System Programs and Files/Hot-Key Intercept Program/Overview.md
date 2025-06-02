# PxPlus System Programs and Files

***CONTROL** |  **_Hot-Key Intercept Program_**  
---|---  
  
***CONTROL** is the hot-key intercept utility program. It is invoked internally by the PxPlus executive whenever a terminal input encounters a CTL value between -1 and -999. It processes the following:

**CTL Value** |  **Processing**  
---|---  
-1 |  Calls the system utilities main menu *U.  
-2 |  Prints the contents of the current screen.  
-3 |  Line-switch (on some systems).  
-4 |  Display current statistics.  
-5 |  Input field help (Calls *HELP).  
-6 |  Input field query (Calls *QUERY).  
-7 |  Program help (Calls *HELP.PRG).  
-8 |  Resets screen.  
-9 |  _(Reserved for future usage.)_  
-10 thru -999 |  Calls the program $CTL _-nnn_ ** _where_** '_-nnn_ ' is the CTL value. Before calling this program, a new window consisting of the entire screen is created. It is dropped when the program returns.  
  
Once ***CONTROL** has completed processing the **[CTL](../../functions/ctl.md)** function, PxPlus will re-execute the **[INPUT](../../directives/input.md)** (or **[OBTAIN](../../directives/obtain.md)**) directive that initiated the process.

If the program reads raw data directly from the keyboard using the mnemonics **'[BI](../../mnemonics/bi.md)'** or **'[ME](../../mnemonics/me.md)'** or the directives **[READ RECORD](../../directives/read_record.md)** or **[ACCEPT](../../directives/accept.md)**, the program must call ***CONTROL** to handle all CTL values between -1 and -999.

**_Example:_**

Read single character but detect hot-key call to system functions.
