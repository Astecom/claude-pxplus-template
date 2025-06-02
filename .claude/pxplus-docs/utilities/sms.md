# Utility Routines

***TOOLS/SMS** |  **_Send Short Text Message_**  
---|---  
  
## Invocation

**CALL "*tools/sms;send"** , _sms_service_name_ _$, account_info$, to$, message$_

**_Where:_**

_sms_service_name_ _$_ |  SMS service being used (case insensitive). Supported SMS service names are "clickatell", "eztexting", "seven", "smsbroadcast", "twilio" and "vonage".

#### **Note:**  
"grouptexting" is an alias for "eztexting" and "nexmo" is an alias for "vonage". These services have merged or changed names; however, the alias is still supported to allow older code to work.

_(Support for "smsbroadcast" was added in PxPlus 2020.)  
(Support for case insensitive SMS service name was added in PxPlus 2022.)  
(Support for "clickatell", "seven" and "vonage" was added in PxPlus 2024.)_  
---|---  
_account_info_ _$_ |  A semi-colon separated list of account information required by the SMS service being used. The information required by each service is indicated below. |  |  **_SMS Service_** |  **_Required Information_**  
---|---|---  
|  clickatell |  "api_key"  
|  eztexting |  "username;password"  
|  seven |  "api_key[;from_number]" **_where_** _;from_number_ is optional  
|  smsbroadcast |  "username;password"  
|  twilio |  "account_sid;auth_token;twilio_phone_number"  
|  vonage |  "api_key;api_secret;vonage_phone_number"  
  
_(Support for "smsbroadcast" was added in PxPlus 2020.)  
(Support for "clickatell", "seven" and "vonage" was added in PxPlus 2024.)_  
  
_to$_ |  Phone number(s) or group(s) to which the text message will be sent. Use a comma to separate multiple items. Phone numbers must be in the format of 15551234567 with the **_exception_** of the "eztexting" SMS service where phone numbers must exclude the beginning country code (i.e. 5551234567). Groups are only supported by the following SMS services: "eztexting" and "seven". To use groups, you must first define the groups through the SMS service Web site.  
_message$_ |  Text message that you want to send via the SMS service.  
  
## Description

This utility allows you to send short text messages via SMS (Short Message Services) to a list of phone numbers (i.e. mobile devices), as well as to a list of groups that you can define in your SMS service account.

Before you can send text messages using this utility, you must first set up an account with any one of the following supported SMS services:

|  **[www.clickatell.com](https://www.clickatell.com/)**  
---|---  
|  **[www.eztexting.com](http://www.eztexting.com/)**  
|  **[www.seven.io](https://www.seven.io/)**  
|  **[www.smsbroadcast.com.au](http://www.smsbroadcast.com.au/)**  
|  **[www.twilio.com](http://www.twilio.com/)**  
|  **[www.vonage.com](https://www.vonage.com/)**  
  
#### **Note:**  
These SMS services may be subject to changes or updates at any time, which may impact the integration to these services.

_(The SMS utility was added in PxPlus 2016.)_
