# Basic Input and Output

**Input Statements** |  **__**  
---|---  
  
The PxPlus **[INPUT](../../../directives/input.md)** directive is used to process interactive responses. It can be used to prompt for, receive and validate input from the user in a character-based application.

**_Example:_**

> INPUT NUMBER   
>  INPUT "Please enter your name:",NM$   
>  INPUT "Please enter your name",NM$, "Thank You"

#### **Note:**  
In cases where it is _undesirable_ to echo user input, use **OBTAIN** in place of the**INPUT**. For syntax, see **[OBTAIN](../../../directives/obtain.md)** directive.

Input from the user is stored in the variables specified. PxPlus treats any literals or expressions included in the statement as prompts. String variables will be assigned any keyboard characters. Numeric variables must be assigned numeric data only. Non-numeric input in response to a numeric variable (other than commas and decimals) will cause an Error #26: Variable type invalid.

For syntax details, see **[INPUT](../../../directives/input.md)** directive.

**_Example 1:_**

> 0010 INPUT "Enter a number:", A   
>  0020 IF A=0 THEN STOP   
>  0030 PRINT "You entered ", A   
>  0040 GOTO 0010

When the above example is run, it yields the following as the user enters input to the prompts:

> Enter a number:5   
>  You entered 5   
>  Enter a number:1,000   
>  You entered 1000   
>  Enter a number:4.X   
>  0010 INPUT "Enter a number:", A   
>  Error #26 - Incorrect variable type

**_Example 2:_**

> 0010 INPUT "What is your name?", A$   
>  0020 INPUT "How old are you "+A$+"?",A   
>  0030 IF A<18 THEN PRINT "Sorry X-Rated"; STOP   
>  0040 ......

When this is run, it yields the following: 

> RUN   
>  What is your name?MIKE   
>  How old are you MIKE?13   
>  Sorry X-Rated 

The **[INPUT](../../../directives/input.md)** directive can also receive input from other than just the user console by specifying a channel of a device from which to receive. Channel number 0 (zero) is used to identify the console (keyboard and display):

> 0010 INPUT (0,ERR=0100) "Enter amount:", A   
>  0020 LET INTEREST=A*RATE   
>  .......   
>  0100 PRINT "Invalid amount -- Retry"   
>  0110 GOTO 0010

If, in the above example, the user enters invalid numeric data in response to the "Enter amount:", the program would transfer to statement 100. As a different tactic, statement 0010 could have specified the option ERR=0010, which would result in the**INPUT** directive being reissued until valid data was received.

#### **Note:**  
The **[INPUT](../../../directives/input.md)** directive is primarily designed for use with terminals, but it can also be used with other file types. See **[Processing Data Files](../../File%20Handling/Processing%20Data%20Files/Overview.md)**.

## Default Input Values

Depending on your application, it is sometimes useful to display a default value at the input prompt. The **[INPUT EDIT](../../../directives/input.md)** directive can be used to preload the input buffer with the current contents of the specified variable; the user may then choose to edit the current value or enter a new one.

If the user starts typing, the contents of the variable is reinitialized with a new value; otherwise, the current value can be edited and/or re-entered.

**_Example:_**

In the following example,**INPUT EDIT** places the current contents of NAME$ into the input buffer:

> 0010 NAME$="JOHN DOE", AGE=21   
>  0020 INPUT EDIT "What is your name?", NAME$   
>  0030 PRINT "Hi ",NAME$   
>  0040 INPUT EDIT "How old are you?",AGE:"##0"   
>  RUN   
>  What is your name?JOHN DOE

At this point, the user can choose to edit the default JOHN DOE or enter a new name.

## Formatted Input

An**INPUT** statement can establish a format to be used on either numeric or string information during the input cycle. This forces the data to adhere to the format mask specified (and prevents invalid entries).

To specify a format mask to be used during an input statement, place a :  _colon_ and format string after the input variable.

**_Example:_**

> 0010 INPUT "Enter Amount:",AMT:"$##,##0.00-"   
>  RUN   
>  Enter Amount: $0.00

In the above example, the format mask specified in the**INPUT** directive would be used to control the entering of the value. One major advantage of using formatted**INPUT** statements is that no ERR= clause is required, since invalid data cannot be entered. For numeric data within a format mask, PxPlus aligns the data to the decimal point.

See **[Data Format Masks](../../../appendix/data_format_masks.md)**.

## Input Size Control

Two options are available for use with the**INPUT** statement for controlling the size of the input data. The**LEN=** option sets the maximum length of input allowed. If the user attempts to enter more characters than is specified on the**LEN=** option, it is rejected. The**SIZ=** option sets the number of characters which can be entered, after which the input automatically terminates.

A special feature of the**INPUT** directive is the ability to allow for scrolling input. By specifying both**LEN=** and**SIZ=** options, you can control the maximum length of the data you wish to have entered, as well as the size of the data as it is to appear on the screen. For example, if you wish to allow the user to enter 100 characters of input but only wish to have 30 characters appear of the screen, you would specify the following:

> INPUT (0,LEN=100,SIZ=30) X$

## Input Validation

**INPUT** variables can also include options to validate the values as they are being received. To specify validation on input, place a **:**_colon_ _,_ followed by conditions (in parentheses) after the input variable:

> 0010 INPUT A$:("A"=0100,"B"=0200)

This type of validation option is called a **_branchlist_**. If the input is "A", control transfers to statement 0100. If the input is "B", control transfers to statement 0200. Any number of entries may be included in the branchlist. Each entry is processed as it appears, from left to right. A branchlist may be specified with either **_string_** or **_numeric_** variables. Numeric data is converted only after the branchlist is processed.

## String Validation

For input to a **_string variable_** , the validation may contain a branchlist, as well as an additional **_length_** option. The length option takes the form:

> **LEN=**_minimum_ [, _maximum_ ]

The input must contain at least the number of characters specified as a _minimum_ but no more than the number specified as a _maximum._ If no _maximum_ is specified, then the input length must equal the _minimum_ (_maximum_ set to _minimum_).

In the following**INPUT** statement, if "END" is entered in response to the prompt "Name:", then control transfers to statement 0100; otherwise, the input string would have to be between one and twenty characters long:

> 0010 INPUT "Name:",N$:("END"=0100,LEN=1,20)

If the input is less than one character long (null) or greater than twenty, an Error #48 is generated. Only one**LEN=** condition may be specified, and it must follow the branchlist (if provided). When validating a string variable, an Error #48: Invalid input is generated if input does not match one of the entries in the branchlist and/or no**LEN=** option is provided.

**_Example:_**

The following statement does not have a branch list - input must be exactly six characters long or an error will occur:

> 0010 INPUT (0,ERR=0010)"Invoice #:",I$:(LEN=6)

If the LEN=6 condition is not met, the ERR=0010 clause causes the **[INPUT](../../../directives/input.md)** directive to repeat.

In the following example, the prompt "Yes or No" is displayed and the variable C$ is requested:

> 0010 INPUT (0,ERR=0010) "Yes or No", C$:("Y"=0100,"N"=0200)

The input validation options cause control to transfer to 0100 if "Y" is input, and 0200 if "N" is input. Any other input will cause an error, which due to the ERR=0010 clause, causes the**INPUT** directive to repeat.

## Numeric Validation

For input to a **_numeric variable_** , the validation may contain a branchlist, as well as an additional **_range check_**. The branchlist is processed before the input data is converted to an internal numeric value; therefore, it is possible for non-numeric input to be processed.

A numeric range check is specified by providing the maximum value to be allowed:

> 0010 INPUT "Enter hour to start:",H:(23)

In this example, the input to H would have to be an integer between 0 and 23. A number outside of this range generates Error #48: Invalid input. If the value specified in the range check is positive (greater than zero), then the input must be numeric between zero and the number specified (inclusive).

The range check can also include negative numbers:

> 0010 INPUT (0,ERR=0010)"Percent: ",P:("X"=0100,-99)

In this example, the input range is between -99 and +99. If the input consisted of the single character "X", then control transfers to statement 0100. Non-numeric input or a number outside of the specified range would cause the**INPUT** directive to repeat due to the ERR=0010.

The number of digits to the right of the decimal point (in the range value) define the maximum number of decimal places to be accepted:

> 0010 INPUT (0,ERR=BAD_INP)"Discount:",D:(19.99)

This statement would allow the user to enter a number between 0 and 19.99. Two digits to the right of the decimal point are allowed. If the input is non-numeric, outside the range specified, or has more than two digits to the right of the decimal point, an error is generated and control transfers to the line label BAD_INP.

Any numeric value (constant, variable or expression) can be used to specify the range of numeric input. It must follow any branchlist specification within the validation list. If no range check is specified, then the input is only checked for valid numeric data.

##  Submitting Input (CTL Values)

From the keyboard, input is received when the user presses Enter. By default, this keystroke signals to PxPlus that**INPUT** has terminated and that the entered values can be submitted for use in the running program. This keystroke also sets the PxPlus**CTL** system variable to a specific _numeric code_ (CTL value) representing use of the Enter key.

Other types of keys can be used to terminate an**INPUT** statement. The CTL values assigned to keyboard actions are listed as follows:

__ |  _0_ |  **Enter** key (normal)  
---|---|---  
__ |  _1 - 4_ |  **F1** to**F4** keys  
__ |  _5_ |  Input terminated due to**SIZ=** option  
__ |  _6 - 12_ |  **F6** to **F12** keys  
  
**_Example:_**

> 0010 INPUT "Enter customer id:",CST_ID$   
>  0020 ON CTL GOTO 0030,0010,0010,9000,9000   
>  0030 INPUT "Enter date:", DTE_ID$   
>  0040 ON CTL GOTO 0050,0030,0030,0010,9000   
>  0050 .....

In fact, all user input (keyboard or mouse) can be mapped to user-specified actions via CTL values and the **[CTL](../../../variables/ctl.md)** system variable. Programs can test this variable during user interaction to determine what action is to be taken.

For information on the use of CTL values and the CTL system variable, see **[Graphical User Interfaces](../../Graphical%20User%20Interfaces/Introduction.md)** and **[External Components](../../External%20Components/Introduction.md)**.

#### **Note:**  
In character-based PxPlus, the standard convention for**F4** (**CTL** = 4) terminates the program, and**F3** (**CTL** = 3) backs up one field.

**_Positive_** CTL values represent function/control keys and can also be applied to other input signals that are returned to the user application. These CTL values may be defined/redefined using the**DEFCTL** directive; however, the replacement only occurs when the original value is rejected. See **[DEFCTL](../../../directives/defctl.md)** directive.

**_Negative_** CTL values have special significance in PxPlus. They have fixed definitions and are handled internally by the system. See **[Negative CTL Definitions](../../../appendix/negative_ctl_definitions.md)**.

Input editing can also be overridden using the **['BI'](../../../mnemonics/bi.md)** and **['EI'](../../../mnemonics/ei.md)**  _(Input Transparency)_ mnemonics, in which case, you will receive the CTL values directly. A variation is to use the **['ME'](../../../mnemonics/me.md)** and **['MN'](../../../mnemonics/mn.md)**  _(Edit Mode)_ mnemonics, which deal with all CTL values that can be handled directly by PxPlus but will pass any invalid requests on to the program.

## CTL Sub-Routines

The**SETCTL** directive can be used to simplify the processing of CTL values by transferring control to a sub-routine whenever a specified CTL value is received by an**INPUT** statement.

When the sub-routine returns, the**INPUT** statement is re-executed:

> 0010 SETCTL 4:WRAP_UP   
>  0020 SETCTL 3:BACK_UP   
>  ...   
>  0300 BACK_UP:   
>  0310 FLD_NO=FLD_NO-1   
>  0320 EXITTO 0110   
>  ...   
>  9000 WRAP_UP:   
>  9010 END

This directive can simplify the coding of programs that implement several**INPUT** statements and is ideal for the reuse of**CTL** processing procedures.

See **[SETCTL](../../../directives/setctl.md)** directive.
