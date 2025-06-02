# Special File Handling

***WINPRT* Redirection to Fax/Viewer/** |   
---|---  
  
The **WINPRT** interface within PxPlus allows a logical Windows printer to be defined on a PC that will automatically redirect output to another logical PxPlus "**_*xxxx*_** " file. This capability allows developers to create Windows printers on workstations that will actually route the printed output to the logical files such as the *VIEWER*, *PDF* or *HTML* without having to code a custom printer selection routine.

This feature uses the name and properties of the printer selected in order to determine if the output should be redirected and if the printer selected by the user satisfies the following criteria:

|  |  The printer must have an output port of "**NUL:** ".  
---|---|---  
|  |  The **_second_** word in the printer's logical file will be parsed out, and an **_** (_underscore_) will be added to the beginning and end of this value. The PxPlus _Lib_ directory will be scanned for a file that matches this name.  
  
For example, if the printer name was "Joes viewer", the system would look for the file "_viewer_" in the system _Lib_ directory.  
  
#### **Note:**  
If the output port is set to**NUL:** but no corresponding file is found, the printer will not be mapped anywhere, and any data output will simply route to **NUL:**.

## Example

The following are some sample printer names and how they would be mapped:

|  Printer Name: |  **"PxPlus Viewer"**  
---|---|---  
|  Maps to: |  ***Viewer***  
|  Printer Name: |  **"Georges PDF"**  
|  Maps to: |  ***PDF***  
|  Printer Name: |  **"Acctg html"**  
|  Maps to: |  ***HTML***  
|  Printer Name: |  **"Mikes plusfax"**  
|  Maps to: |  ***PLUSFAX***  
  
## Configuration

To add a redirected logical printer to a Windows workstation, perform the following steps:

**Step** |  **Description**  
---|---  
1. |  Go to Window's Printers and Faxes.  
2. |  Select "**Add a printer** ".  
3. |  Select "**Local printer** ".  
4. |  Check the "**Use the following port** " for an entry of "**NUL** :". Generally, this will not exist the first time you add a logical printer; however, if it does exist, select it and proceed to **Step 8**.  
5. |  Select "**Create a New Port** ".  
6. |  Set the "**Type of Por** t" = "**Local Port** ".  
7. |  For "**Port Name** ", enter "**NUL** :" (without the quotes and **_make sure to remember the trailing colon_**).  
8. |  When prompted for the device driver from the manufacturer/printers dialogue, select "**Generic** " for a manufacturer and "**Generic/Text Only** " for the printer.  
9. |  Select "**Keep existing driver** ".  
10. |  Enter the logical name you want to use for your printer. Keep in mind that the second word in the name is what must match the device driver.  
  
**_Example:_**  
  
If you enter "PxPlus Viewer" as the logical name, output to this printer by PxPlus will route to ***viewer***.  
11. |  Select "**No** " for the "**Set as default printer** ".  
12. |  Select "**No** " for printer "**Sharing** ".  
13. |  Select "**No** " for "**Print a test page ?** ".  
14. |  Check your settings and select "**Finish** ".  
  
You should now have a printer named "PxPlus Viewer" as one of this workstation's printers.

#### **Note:**  
While these printers will allow for the automatic redirection of output from within PxPlus applications, any attempt to output to these printers from non-PxPlus application will result in no output being generated.
