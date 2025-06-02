# Directives 

**SETMOUSE** |  **_Control/Set Mouse_**  
---|---  
  
##  Formats

1\. _Define Mouse Region_ _:_ |  **SETMOUSE** [*-**@(**_col,ln,width,hi_**)**{= | : | ^} _expression_  
---|---  
2\. _Use String to Define Event_ _:_ |  **SETMOUSE**[*****]_string$_{ | **:**} _expression_  
3\. _Use Current Window Size_ _:_ |  **SETMOUSE**[*]@(*){ | :} _expression_  
4\. _Clear All Settings_ _:_ |  **SETMOUSE CLEAR**  
5\. _Enable/Disable:_ |  **SETMOUSE**{**ON** |**OFF**}  
  
**_Where_**

***** |  Optional. The first instance of an ***** (_asterisk_) in Formats 2 through 4 defines the mouse event as being for all windows. The second instance of the ***** (_asterisk_) in Format 3 is a size option. See **@(**_col,ln,width,hi_** _)_** below.  
---|---  
**@(**_col,ln,width,hi_**)** |  Mouse region coordinates. Numeric expressions: starting column, starting line, width (number of columns) and height (number of lines). Using an optional single ***** (_asterisk_) instead of _col,ln,width,hi_ defines the mouse region for the event as equal in size to the current window.  
**= | : | ^** |  Operators control mouse event processing: |  **:** |  _(colon)_ |  When mouse button is pressed/dragged in the region  
---|---|---  
**=** |  _(equals sign)_ |  When mouse button is released in the region  
**^** |  _(exponentiation symbol)_ |  When mouse hovers over the selected area _(added in PxPlus 2019)_  
_expression_ |  Expression to define the type of function for mouse events in the specified region: if _numeric_ , the CTL value to return, and if _string_ , the directive to execute.

#### **Note:**  
The hover option ( **^** ) only supports numeric expressions.  
  
_string$_ |  Character string to be compared to the current screen contents. String expression.  
  
##  Description

Use the **SETMOUSE** directive to define and control mouse events. By default, the mouse events are tied to the current window only. The **SETMOUSE** directive supports fractional coordinates to two decimal places.

#### **Note:**  
Only a single **SETMOUSE** directive can be active for the same region at any time.

##  Format 1

**_Define Mouse Region_**

**SETMOUSE** [*-**@(**_col,ln,width,hi_**)**{= | : | ^} _expression_

Use this format to define the region in which a mouse event can occur.

Use an optional ***** (_asterisk_) to define the mouse event as being for all windows instead of just the current window.

**_Example:_**

> 0010 rem Return CTL=4 when mouse released on line 20 in columns 0 through 5  
>  0010 setmouse on  
>  0020 print 'CS',@(0,20),"[Quit]",  
>  0030 setmouse @(0,20,6,1)=4  
>  0100 input @(10,10),"Enter name:",X$  
>  0110 if ctl=4 then goto 9000 ! Wrap-up

##  Format 2

**_Use String to Define Event_**

**SETMOUSE**[*****]_string_ _$_{ |**:**} _expression_

Use this format to define a character string to set the function the mouse event will generate. To remove a mouse event definition, use a null **""** expression.

Use an optional ***** (_asterisk_) to define the mouse event as being for all windows instead of just the current window.

**_Example:_**

This logic returns CTL=6 whenever the mouse is released on the string 'Help' and CTL=4 on the string 'Quit'. Whenever the mouse is released on the word 'Calc', PxPlus calls "CALC" and then returns to the current statement after "CALC" is executed.

> setmouse on  
> setmouse *"Help"=6 ! Help request  
> setmouse *"Quit"=4 ! Quit  
> setmouse *"Calc"="CALL ""CALC"""

##  Format 3

**_Use Current Window Size_**

**SETMOUSE [*]@(*)**{ |**:**} _expression_

The first optional ***** (_asterisk_) defines the mouse event as being for all windows instead of just the current window. Use the second ***** (_asterisk_) in this format to define the mouse region as equal to the dimensions of the current window.

##  Format 4

**_Clear All Settings_**

**SETMOUSE CLEAR**

Use this format to remove all previously defined **SETMOUSE** regions.

##  Format 5

**_Enable/Disable Mouse_**

**SETMOUSE** {**ON** | **OFF**}

Use **SETMOUSE ON** to enable the mouse or **SETMOUSE OFF** to disable it.

When **SETMOUSE OFF** is used, mouse signals in the menu bar, tool bar and status bar regions of a window are ignored. **_(Windows Only)_**

The **ON | OFF** state is reflected in the mse(1,1) system variable, as in the following example:

**_Example:_**

> print hta(mid(mse,1,1))  
>  00  
> setmouse off  
>  print hta(mid(mse,1,1))  
>  FF

_(Support for SETMOUSE OFF to ignore mouse signals in the stated regions was added in PxPlus 2018.)_

## See Also

**[MSE Mouse State](../variables/mse.md)**
