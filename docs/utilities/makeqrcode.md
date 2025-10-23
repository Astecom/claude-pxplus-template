# Utility Routines

***TOOLS/MAKEQRCODE** |  **_Generate QR Code_**  
---|---  
  
## Invocation

**CALL "*tools/makeqrcode"** , "_text_ ", "_output_file.png_ " [ ,  _qualitycode_ _$_ ]

**_Where:_**

_text_ |  Content for the QR code.  
---|---  
_output_file.png_ |  Output image file.  
_qualitycode_ _$_ |  Optional single character to indicate the quality of the QR code to be returned. Possible values are: |  "L" |  (_Low_) 7% of data bytes can be restored. (Default, if omitted)  
---|---  
"M" |  (_Medium_) 15% of data bytes can be restored.  
"Q" |  (_Quartile_) 25% of data bytes can be restored.  
"H" |  (_High_) 30% of data bytes can be restored.  
  
_(The qualitycode$ parameter was added in PxPlus 2021 Update 2.)_

## Description

This utility is used to generate a QR code.

#### **Note:**  
Internet access is required, as the logic is done on PxPlus servers. Serial number must be on maintenance/current version.

_(The MakeQRCode utility was added in PxPlus 2014.)_

## Example

call "*tools/makeqrcode","https://home.pvxplus.com","pxplus_qr_code.png"
