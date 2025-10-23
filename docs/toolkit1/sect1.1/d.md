# IT - Integrated Toolkit™

**Program Synopsis** |  **__**  
---|---  
  
The program Synopsis display is designed to help simplify your understanding, navigation and manipulation of a program. The Synopsis display provides an overview of a program and is dynamically updated with a list that includes statement labels, functions, variables and any detected errors. As you make changes to the program, IT updates this display in real time. Unlike many other program editors, there is no need to compile or refresh the program details. The Synopsis display does this dynamically as code is entered or edited.

The Synopsis display also simplifies program navigation by providing direct transfers to statement labels and functions. Double clicking on a statement label or function causes the system to "go to" that label or function definition within the current program.

Right clicking on an entry in the Synopsis display displays a menu with selections for finding all references to statement labels, functions and variables, or highlighting them for easy viewing. A Rename option is also available on the right-click menu for changing change the name of any statement label or variable.

Refer to the table below for a detailed description of each of the right click menu options.

_Goto_ _definition_ |  **_(Applies Only to Statement Labels and Functions)_** Goes to the corresponding statement label or function within the current program. You can also double click on the statement label or function in the list.  
---|---  
_Find next reference_ |  Finds the next occurrence of the selected statement label, function or variable within the program (or press F3).  
_Highlight References_ |  Highlights all occurrences of the selected statement label, function or variable with a yellow background within the current program for easier identification when you vertically scroll through the program. To remove the highlight, right click on the heading again and select _Remove Highlight_.

#### **Note:**  
Only one label or variable at a time can be highlighted. When you select the _Highlight References_ option for a different item in the list, the highlighting from the previous item will be removed.  
  
_Rename_ |  **_(Applies Only to Statement Labels and Variables)_** Allows you to change the name of any statement label or variable. All occurrences will be changed automatically. The system assures that only the label or variable being renamed is changed. For example, without a Synopsis display, changing the name of a variable such as "A" requires each occurrence of the letter A to be scrutinized. Renaming within the Synopsis display assures proper editing of just the specific item so that changing the _statement label_ DELETE, for example, will only affect that label and will **_not_** affect a variable called DELETE or any place where DELETE may occur within a word/string.

#### **Note:**  
When renaming statement labels, the system will not rename occurrences of the label that may appear in a string.  
  
**_Example:_**  
  
PERFORM PGN+";Delete"  
  
_Add to Watch_ |  **_(Applies Only to Variables)_** Allows you to add variables directly to the Watch list if you are using the built-in debugger. See **[Debug Facility](b.md)**. This can also be done by dragging and dropping the variable from the Synopsis display into the Watch list display.  
_Refresh_ |  Refreshes and collapses the list for **_all_** of the items in the Synopsis display. Click the **+**  _plus sign_ to expand a specific item or select _Expand all_ to expand all items.  
_Expand all_ |  Expands the list for **_all_** of the items in the Synopsis display.  
  
## Error Handling

If you make an error when typing or editing a line in the program and then you move off the line, the Synopsis display detects the error and adds a "Warnings/Errors" section to the bottom of the list. When you click the **+**  _plus sign_ to expand this section, the error and the line number on which the error occurs are displayed. Double-click on the error to go to that line and manually correct the error. The status line at the bottom of the IT screen indicates the error and includes information about the error and where it occurred. When you successfully correct the error, the status line will be cleared. When there are no more errors, the "Warnings/Errors" section will also be cleared from the Synopsis display.

If you mistype the name of a variable, a quick review of the Variables list in the Synopsis display can often help you to detect such errors. To correct an incorrect variable name, right click on the mistyped variable name in the list and select _Rename_.
