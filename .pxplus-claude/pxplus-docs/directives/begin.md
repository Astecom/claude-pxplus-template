# Directives 

**BEGIN** |  **_Reset Files and Variables_**  
---|---  
  
##  Format

**BEGIN[ [ EXCEPT** **]**_varlist_ _**| ***_ **]**

**_Where_** _:_

_varlist_ __ An optional list of variables.

##  Description

The **BEGIN** directive performs the following functions:

1\. Closes all Local files currently open._(Global files remain open unless using BEGIN *)._

#### **Note:   
**In closing all files, the main console window will be reset if the **['WK'](../parameters/wk.md)** system parameter is not on. The reset consists of dropping all windows and all non-global graphical user interface controls. In addition, the menu_bar is reset to its default "Enabled" state.

2\. Resets **PRECISION** to the default value of 2 (the value set in the [**'PD'**](../parameters/pd.md) system parameter).

3\. Clears local variables. (_Global variables are not affected unless using BEGIN *.)_

> (a) All variables if no _varlist_ appears on directive  
>  (b) Only those in _varlist_ if no **EXCEPT** clause given  
>  (c) All but those in _varlist_ if **EXCEPT** clause present  
>   
>  See **[Example](begin.htm#Mark4)**.

4\. Sets **ERR** , **RET** , and **CTL** to zero.

5\. Clears **FOR** /**NEXT** , **GOSUB** /**RETURN** , **WHILE/WEND** , etc. stack.

6\. Resets pointer to the first **DATA** item in the program.

The **BEGIN *** directive also closes all global files and clears all global variables including those defined using the [**GBL**](../functions/gbl.md) function.

#### **Note:**  
When executed within an object (in **[Object Oriented Programming](../PxPlus%20User%20Guide/Object-Oriented%20PxPlus/Introduction.md)**), the **BEGIN** directive will clear all of the object's properties, along with standard variables, and will close any standard local files and files owned by the object.

_(The ability to use * to clear all global files/variables was added in PxPlus v7.10.)_

##  See Also

[**CLEAR Reset Variables**](clear.md)  
[**RESET Reset Program State**](reset.md)  
[**START Restart Session**](start.md)  
[**ERR( ) Test Error Value**](../functions/err.md)  
[**CTL Control Code: Key to End Input**](../variables/ctl.md)  
[**RET Operating System's Last Error Code**](../variables/ret.md)

##  Example

The following examples are from step 3 above:

3(a) begin  
3(b) begin A3$,B3$,C3,D3  
3(c) begin except CST_ID$,TX_VAL,TX_TBL${all}
