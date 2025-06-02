# iNomads

**File Uploads/Downloads**|   
---|---  
  
Two functions are provided in iNomads for uploading or downloading files.

To request the user to **_upload_** a file from the workstation:

> **%inomads'upload_file(**_fromfile_ _$_ [, _tofile_ _$_ [, _asciiflg_ ] ] **)**

To initiate the **_download_** of a file to the workstation:

> **%inomads'download_file(**_fromfile_ _$_ [, _tofile_ _$_ [, _asciiflg_ ] ] **)**

**_Where:_**

_fromfile_ _$_ |  Pathname for the "source" location of the file being uploaded/downloaded. If uploading, a suggested file to upload is presented; however, the user ultimately decides which file to upload.  
---|---  
_tofile_ _$_ |  Pathname for the "target" location receiving the uploaded/downloaded file. If downloading, a suggested target location is presented; however, the user ultimately decides the target location. If the upload fails or the user cancels the request, the _tofile_ _$_ parameter will be set to null.  
_asciiflg_ __|  If specified, a non-zero _asciiflg_ indicates that the file contains simple text and requests CR-LF (carriage return and line feed) conversion. The system will attempt to determine the browser operating system. If uploading/downloading files from a Windows to a UNIX system, the CR-LF will be adjusted accordingly.  
  
#### **Note:**  
Browser security rules mandate that:  
  
The user cannot be forced to comply.  
The file name cannot be provided from the server.

## Examples

**_Example 1_ \- Download a PDF for display or printing**:

> %inomads'download_file(pdfPath$)

**_Example 2_ \- Download a PDF for display or printing, presenting a suggested filename to the user**:

> %inomads'download_file(pdfPath$, "SalesReport"+dte(0:"YYYYMMDD")+".pdf")

**_Example 3_ \- Upload a picture of a receipt**:

> %inomads'upload_file("receipt.png",receiptDirPath$+DLM+STR(receiptNum)+".png")
