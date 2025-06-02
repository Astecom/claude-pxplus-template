# How to Use PxPlus Query Definitions in Non-NOMADS Environments  
  
**Display a Lookup Table**|   
---|---  
  
Even if your application is not running in a NOMADS environment, you can access NOMADS panels and logic using the **[PROCESS](../directives/process.md)** directive. In this way, you can display the contents of a query definition and select an item using a NOMADS Query lookup panel from your application.

  
**_NOMADS Query Lookup Panel  
(Toolbar Format)_**  
---  
  
The NOMADS _Query+_ lookup panel comes in several formats: _Toolbar_ , _Menu_ , _Hybrid_ , _Drop Query_ and _Drop Tree_. Most formats give you access to run-time features, such as marking favorites, hiding/showing/moving columns, adding formulas, exporting data, creating charts and managing profiles for saving different run-time settings. (A _Classic Query_ format is also available; however, this format supports fewer features.)

Processing a Query lookup panel also allows you to pass an argument that has a dual purpose: the value of the argument will position the start value in the list of data displayed, and when an item in the data list is selected, the return value is loaded into the same argument to make it available to your program code.

**[Using the PROCESS Directive](../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Query%20Subsystem/Invoking%20a%20Query.htm#process)** to display a lookup panel in your application code is done by using the following format:

> **PROCESS** "_QueryName_ ", "_LibraryName_ ", _value$_ ! Query and library names are not case sensitive

When the lookup panel exits, logic returns to your program with the selected value in the third argument.

**_Example:_**

> PROCESS "qClient", "panels.en", qryval$  
>  IF qryval$ <> "" THEN ! process the value returned in qryval$
