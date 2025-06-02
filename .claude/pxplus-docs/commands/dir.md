# Extended Commands 

**DIR Console Command** |  **_View Directory_**  
---|---  
  
## Format

**DIR** **{**_name_**}**

**_Where:_**

_name_ |  Contains the name of the directory to view. ** _(Optional)_**  
---|---  
  
## Description

Typing **DIR** in console mode will open a graphical window and display the contents of the current directory (or the contents of the directory as specified in _name_).

The window can be resized, and by right clicking the List Box, you can add/remove columns to display file size, creation date and modification date. All settings that change the visual appearance of the window are stored in memory and reused until your PxPlus session is ended or restarted. Entries in the List Box will be sorted alphabetically with sub-directories always first. Clicking a List Box column header will change the sort order (different column or Ascending vs. Descending).

**DIR** will analyze each directory entry to determine if it is a PxPlus file type, a BBx program or sub-directory. While this is going on, all file types will display as '...'. Any file found that is not a recognized type will display as 'Serial'.

When a program (either PxPlus or BBx) is selected from the List Box by double clicking or selecting it and clicking OK, the system will **LOAD** it into memory.

When a PxPlus KEYED, EFF or INDEXED file is selected, the contents of that file will be shown through the '*FM' utility program. Selecting any of the other file types from the List Box will result in displaying the selected file in a remark statement. **DIR** will highlight the program currently in memory when found in the directory that is being displayed.

**DIR** does **_not_** support the use of any "[...]" prefixes on directory names and will reject them if found.

BBx is a registered trademark of BASIS International Ltd.
