# Web Server Reference  
  
**Mime Configuration** |  **__**  
---|---  
  
## Setting Up Mime Types

When you click on the Mime button in the Web Server Status/Configuration display, the Mime Configuration scroll box appears. You can add, edit or remove mime types.

#### **Note:**  
Mime_type values are always in lowercase.

A few of the more common types and defaults are listed below. All types in the text/classification automatically have their end of line characters converted to $0D0A$ (carriage return, line feed).

**Mime Type** |  **Description**  
---|---  
**text/plain** |  The default for data files and web pages: **text** is the general classification and **plain** is the specific mime type. The mime type for README and .INI files is **text/plain**.  
**text/html** |  The default for PxPlus programs: use **text** as the general classification and **html** as the specific mime type.

#### **Exception:  
** See **PxPlus** below.  
  
**PxPlus** |  Use the mime type **application/PxPlus** for ASCII PxPlus programs.  
**octet-stream** |  The mime type for plain binary is **"** **application/octet-stream".**  
**pdf** |  The mime type for general binary transfer is **"application/pdf"**. The web browser launches the PDF viewer to handle the file once it is received. If there is no viewer, then the file goes through the "Save As" dialogue in the browser.  
  
You can find more information on other mime types in Windows Explorer under View>Folder Options>File Types Tab.

## Serving Simple Mime Type Requests

The PxPlus Web Server opens the requested file in binary mode and tries to make a determination of the file contents before it attempts to match the file extension to a mime type. First, it checks to see if the file is any of the following:

  * A directory
  * A PxPlus program in tokenized form
  * An ASCII CGI program, starting with the **#!** symbols (not supported by the Web Server at present)



If the file fits none of the above categories, then the Web Server matches the file extension to the mime type to determine file type and control the transmission.

#### **Note:**  
If your browser fails to display or download data from the Web Server, check to make sure that the file's corresponding mime type is properly set up. For example, a browser cannot receive and display a **jpeg** image unless the file includes the **jpeg** file extension, which is mapped to the mime type "**image/jpeg** " in your Mime Configuration dialogue list.
