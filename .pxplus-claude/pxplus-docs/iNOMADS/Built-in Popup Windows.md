# Running Your Application

**Built-in Popup Windows**|   
---|---  
  
iNomads provides four built in popup windows: _Calendar Selector_ , _Calculator_ , _Progress Bar_ and _MSGBOX Processor_. These functions are handled locally by iNomads JavaScript processor, which alleviates the host of much of the processing while providing flexibility of design through the use of Style Sheets.

## Calendar Popup

Whenever an input field has a query that uses the NOMADS **[Calendar Query](../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Query%20Subsystem/Invoking%20a%20Query.htm#calendar)**, the system will use a JavaScript-provided popup window. This window will be generated directly below the input field and allows the user to select the date either by using the mouse or the keyboard. The JavaScript control takes its text from the server message library, thus will reflect the current language library in effect.

To select a date using the mouse, simply click on the date desired. The following keyboard control is provided:

|  Left/Right arrows |  Prior/Next day  
---|---|---  
|  Up/Down arrow |  Prior/Next week  
|  Page Up/Page Down |  Prior/Next month  
|  Shift Up/Down arrow |  Prior/Next year  
|  Press ENTER to select  
  
Like the standard NOMADS Calendar query, the JavaScript date routine will return an eight-digit date in the form of YYYYMMDD.

## Calculator Popup

Whenever an input field has a query that uses the NOMADS _Calculator query_ , the system will use a JavaScript-provided popup window. This window will be generated directly below the input field and allows the user to enter a formula either through the keyboard or by clicking on the displayed calculator keypad.

Unlike a standard desktop calculator, the iNomads calculators will accept any type of formula, which will be displayed as entered. Pressing the Enter key or clicking on the **=**  _(equals sign)_ will evaluate the formula. Pressing Enter a second time or selecting the 'check mark' will return the value to the screen.
