# Data Dictionary Maintenance  
  
**Copy Data Dictionary**|   
---|---  
  
The **Copy Data Dictionary** function is used to copy the data dictionary definition from an existing file to a new file.

Access to this function is from the **[Data Dictionary Maintenance](Overview.md)** main panel where you first select the file to copy from, and then click the _Copy_ toolbar button to invoke the **Copy Data Dictionary** window.

> _(Copy Data Dictionary was added in PxPlus 2014 - Feature Pack 1.)_

This window consists of the following:

**Copy Data Dictionary From** |  |  _Name_ |  Name of the file to copy from, which defaults to the file selected on the **[Data Dictionary Maintenance](Overview.md)** main panel. To copy from a _different_ data dictionary file, click the Query button or type the name of the existing file.  
---|---  
_Description_ |  Description of the selected file.  
  
#### **Note:**  
You **_cannot_** copy from the {Global Dictionary}.

_(The Query button was added in PxPlus 2017.)_  
**Copy Data Dictionary To** |  |  _Name_ |  Enter the file name to copy to, which enables subsequent fields. If the name already exists in the dictionary, a message displays and your input is subsequently cleared.  
---|---  
_Description_ |  Enter the new description for the file name. Maximum description: 80 characters.  
_Physical File_ |  Pathname of the actual database file - either a _Fixed_ value or _Expression_ ; e.g. _Fixed:_ XX_AR **_or_**  _Expression:_ %COMPANY$+"_AR". Click the Query button to select an existing file. If the file does not exist, the following message displays with Yes/No responses: "Unable to access file: _xxx_ Use pathname anyway?"  
  
If the file exists _with_ a dictionary, a message displays and your input is subsequently cleared.  
  
If the file exists _without_ a dictionary, no message displays and you are allowed to continue with the entry.  
_Copy Elements_ |  Copies the defined elements from the selected _copy from_ file to the new file. By default, this check box is selected.  
_Copy Key Definitions_ |  **_(Available when Copy Elements check box is selected)_**  
  
Copies the key definitions from the selected _copy from_ file to the new file. By default, this check box is selected.  
  
_(The Copy Key Definitions option was added in PxPlus 2017.)_  
  
_OK_ |  Click _OK_ to proceed with the Copy process. A new data dictionary definition with the defined _Name, Description_ and _Physical File_ is created. If the _Copy Elements_ check box was selected, the elements are also copied.  
_Exit_ |  Closes the **Copy Data Dictionary** window with no further action taken and returns to the **Data Dictionary Maintenance** main panel.
