# Utilities and Extended Commands

**Example Objects - REST Interfaces to Cloud Services**|   
---|---  
  
The following example objects are included to provide help with developing your own interfaces to REST-based cloud services:

> **[PayPal (*obj/example/paypal/api)](restexamples.htm#paypal)**

> **[Salesforce (*obj/example/salesforce/api)](restexamples.htm#salesforce)**

The example code below can be used as a reference, or it can be copied and tailored to your specific needs.

#### **Important Note:**  
These examples are provided only to serve as a guide when developing your own REST interfaces and are **_not_** supported by PxPlus since the PayPal and Salesforce APIs may be subject to change without notice.

_(The PayPal and Salesforce example objects were added in PxPlus 2021.)_

## PayPal (*obj/example/paypal/api)

The PayPal example object handles authentication with PayPal and allows you to send and receive money using PayPal. This object currently points to the PayPal sandbox API for testing; however, it can be easily modified to point to the live PayPal API once testing is done. See [**Example: Using the PayPal Object**](restexamples.htm#example_pay) for an example program.

Before you can interface with PayPal from PxPlus, a Client ID and Client Secret must be obtained from PayPal. To do this, first create a PayPal developer account and then follow the instructions provided at this Web site:

> <https://developer.paypal.com/docs/api-basics/manage-apps/>

The PayPal object runs an EzWeb server on the port specified in the constructor. The EzWeb server is used for handling PayPal order payment call-backs. If an order payment is completed, the HTML page ***obj/example/paypalpaycomplete.htm** will be loaded. If the order payment is cancelled, then the HTML page ***obj/example/paypal/paycancel.htm** will be loaded. Currently, the callback HTML pages are simply text stating whether the payment was completed or cancelled.

To instantiate the PayPal object using the handle **paypal** (where **paypal** could be any numeric variable), enter the following command:

> paypal=NEW("*obj/example/paypal/api", clientID$, clientSecret$, ezPort)

There is no need to login to a PayPal account on object instantiation.

**_Methods_**

The methods used by the PayPal object are listed below. To access them, use the PayPal object handle **paypal** , followed by an **'** (_apostrophe_) and the method name (with the desired parameters).

**Methods** |  **Description**  
---|---  
**CaptureOrder(**_orderID_ _$_**)** |  Capture the payment for the given order. Returns 1 if the order was captured. Returns 0 if the order was not captured yet or there was an issue processing the request.  
**CheckInvoice(**_invoiceID_ _$_**)** |  Check invoice status to see if it is paid. Returns 1 if the invoice was paid. Returns 0 if the invoice was not paid yet or there was an issue processing the request.  
**CheckPayment(**_paymentID_ _$_**)** |  Check if recipient accepted the sent money. Returns 1 if the payment was accepted. Returns 0 if the payment was not accepted yet or there was an issue processing the request.  
**NewInvoice$(**_invoiceNum_ _, recipientEmail$, items_**)** |  Create and send an invoice that directs the user to pay. The items are passed in via an [ **Items Object**](restexamples.htm#items). An invoice will be sent to the user via e-mail. The user can pay the invoice by clicking a link in the e-mail that takes he/she to PayPal to pay. Returns the invoice ID as a string that can be used to work with the invoice if the request was successful. Returns an empty string if there was a problem with the request.

#### **Note:**  
Currently, the details of the invoice and recipient are hard coded; however, in actual practice, this information would be passed in.  
  
**NewOrder$(**_items_**)** |  Create an order and display payment screen. The items are passed in via an [**Items Object**](restexamples.htm#items). An order will be presented to the user via the default Web browser where he/she can pay for the order. Returns the order ID as a string that can be used to work with the order if the request was successful. Returns an empty string if there was a problem with the request.  
**NewPayment$(**_recipientEmail_ _$, subject$, message$, paymentAmount_**)** |  Send money. Returns the payment ID as a string that can be used to work with the payment if the request was successful. Returns an empty string if there was a problem with the request.  
  
**_Items Object_**

The purpose of the Items object is to create orders and invoices. Use this object to add all the items to the order/invoice and set the tax and shipping cost. It will automatically calculate the sub-total and total.

To instantiate the Items object using the handle **items** (where **items** could be any numeric variable), enter the following command:

> items=NEW("*obj/example/paypal/items")

**_Properties and Methods_**

The properties and methods used by the Items object are listed below. To access them, use the Items object handle **items** , followed by an **'** (_apostrophe_) and the property or method (with the desired parameters).

The **_properties_** are as follows:

**Properties** |  **Description**  
---|---  
**NumItems** |  **_(Read Only)_** Number of items.  
**ShippingCost** |  Cost of shipping.  
**Subtotal** |  **_(Read Only)_** Sum of the price of all items.  
**Taxes** |  **_(Read Only)_** Sum of all the taxes.  
**TaxPercentage** |  Tax percentage applied to the price of the items.  
**Total** |  **_(Read Only)_** Final sum of sub-total + taxes + shipping.  
  
The **_methods_** are as follows:

**Methods** |  **Description**  
---|---  
**AddItem(**_description$, price_**)** |  Add an item to the list.  
**GetItem(**_index, description$, price, tax_**)** |  Read an item from the list.  
  
## Example: Using the PayPal Object

Below is an example program using the PayPal object.

> !  
>  ! Replace x's with your client ID, client secret before running this program  
>  clientID$="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"  
>  clientSecret$="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"  
>  !  
>  ! Port to listen for order result on  
>  listenPort=8080  
>  !  
>  ! Initial Paypal REST API interface  
>  paypal=new("*obj/example/paypal/api",clientID$,clientSecret$,listenPort)  
>  !  
>  ! Define items for order/invoice as well as shipping and tax  
>  items=new("*obj/example/paypal/items")  
>  items'TaxPercentage=13  
>  items'ShippingCost=11  
>  items'AddItem("CPU",459.49)  
>  items'AddItem("Memory",112.99)  
>  items'AddItem("Motherboard",160.00)  
>  items'AddItem("GPU",524.99)  
>  items'AddItem("PSU",150.99)  
>  items'AddItem("SSD",178.00)  
>  items'AddItem("Case",190.98)  
>  !  
>  ! Create an order and bring up the browser for the user to pay it  
>  orderId$=paypal'NewOrder$(items)  
>  !  
>  ! Wait for user input letting us know they have paid the order  
>  ! Instead of waiting for input you could modify the paycomplete and paycancel web pages to notify our application and act on that  
>  input "Press any key to continue after paying the order",*;  
>  print ""  
>  !  
>  ! Capture order payment and check for success  
>  if paypal'CaptureOrder(orderId$)=1 \  
>  then print "Captured payment" \  
>  else msgbox "Failed to capture payment","Error"  
>  !  
>  ! Define an invoice  
>  invoiceNum=1234  
>  recipientEmail$="xxxxxxxxxxx@example.com"  
>  !  
>  ! Create and send an invoice  
>  invoiceId$=paypal'NewInvoice$(invoiceNum,recipientEmail$,items)  
>  !  
>  ! Wait for user input letting us know they have paid the email invoice.  
>  input "Press any key to continue after paying the invoice received by email",*;  
>  print ""  
>  !  
>  ! Check if the invoice was paid  
>  if paypal'CheckInvoice(invoiceId$)=1 \  
>  then print "Invoice paid" \  
>  else msgbox "Invoice has not been paid","Error"  
>  !  
>  ! Define a payment  
>  paymentAmount=202.04  
>  subject$="Commission Payment"  
>  message$="Your commission payment has arrived. Amount: $"+str(paymentAmount)  
>  !  
>  ! Create and send a payment  
>  paymentId$=paypal'NewPayment$(recipientEmail$,subject$,message$,paymentAmount)  
>  !  
>  ! wait a little bit to make sure when we check it has completed  
>  wait 2.5  
>  !  
>  ! Check if payment was sent successfully  
>  if paypal'CheckPayment(paymentId$)=1 \  
>  then print "Payment accepted" \  
>  else msgbox "Payment incomplete","Error"  
>  !  
>  ! Clean up objects  
>  drop object items  
>  drop object paypal  
>  !  
>  end

## Salesforce (*obj/example/salesforce/api)

The Salesforce example object handles authentication with Salesforce and allows you to work with Salesforce Accounts and Opportunities, as well as perform a Salesforce query. See [**Example: Using the Salesforce Object**](restexamples.htm#example_sales) for an example program.

Before you can interface with Salesforce from PxPlus, a Client ID and Client Secret must be obtained from Salesforce. To do this, first create a Salesforce developer account, and then follow the instructions provided at both of these Web sites:

> [https://help.salesforce.com/articleView?id=connected_app_create_basics.htm&type=5](https://help.salesforce.com/articleView?id=connected_app_create_basics.htm&type=5)  
>   
>  [https://help.salesforce.com/articleView?id=connected_app_create_api_integration.htm&type=5](https://help.salesforce.com/articleView?id=connected_app_create_api_integration.htm&type=5)

To instantiate the Salesforce object using the handle **salesforce** (where **salesforce** could be any numeric variable), enter the following command:

> Salesforce=NEW("*obj/example/salesforce/api", _clientId_ _$_ , _clientSecret_ _$_**[** , _refreshToken_ _$_**]**)

During object instantiation, the user is asked to select and login to a Salesforce account and allow PxPlus access to it via the default Web browser. When this process is completed, the **Login( )** method must be run to complete the login to Salesforce.

The refresh token can optionally be used to avoid having to select a Salesforce account and login more than once. Once logged in to Salesforce, the RefreshToken$ property can be accessed and saved to avoid having to select and login to a Salesforce account, allow access, and run the **Login( )** method again. You can either hard code the refresh token into an encrypted program or save it to an encrypted file. The next time the Salesforce object is instantiated, just include the saved refresh token, and it will be logged into the same Salesforce account automatically.

The **_login lasts for 15 minutes_** by default. After that, you need to call **Login( )** again; otherwise, **_the methods will fail_**.

**_Properties and Methods_**

The properties and methods used by the Salesforce object are listed below. To access them, use the Salesforce object handle **salesforce** , followed by an **'** (_apostrophe_) and the property or method (with the desired parameters).

The **properties** are as follows:

**Properties** |  **Description**  
---|---  
**RefreshToken$** |  oAuth2 refresh token used to auto login.  
  
The **_methods_** are as follows:

**Methods** |  **Description**  
---|---  
**DeleteAccount(**_accountID_ _$_**)** |  Delete a Salesforce account. Returns 1 if the account was deleted; otherwise, returns 0.  
**DeleteOpportunity(**_opportunityID_ _$_**)** |  Delete a Salesforce opportunity. Returns 1 if the opportunity was deleted; otherwise, returns 0.  
**GetAccount(**_accountID_ _$, account_**)** |  Get a Salesforce account. The account details are returned via an  [**Account Object**](restexamples.htm#acct). Returns 1 if the account was received; otherwise, returns 0.  
**GetOpportunity(**_opportunityID_ _$, opportunity_**)** |  Get a Salesforce opportunity. The opportunity details are returned via an  [**Opportunity Object**](restexamples.htm#opportunity). Returns 1 if the opportunity was received; otherwise, returns 0.  
**Login( )** |  Complete the login process after user signs in and allows access. Returns 1 if oAuth2 login successful; otherwise, returns 0.  
**NewAccount$(**_account_**)** |  Create a new Salesforce account. The new account details are passed in via an  [**Account Object**](restexamples.htm#acct). Returns the account ID as a string that can be used to work with the account if the request was successful. Returns an empty string if there was a problem with the request.  
**NewOpportunity$(**_opportunity_**)** |  Create a new Salesforce opportunity. The new opportunity details are passed in via an  [**Opportunity Object**](restexamples.htm#opportunity). Returns the opportunity ID as a string that can be used to work with the opportunity if the request was successful. Returns an empty string if there was a problem with the request.  
**TopThreeActiveAccounts$( )** |  Return details of the top three accounts with the largest dollar amount of open opportunities.  
**UpdateAccount(**_accountID_ _$, account_**)** |  Update a Salesforce account. The updated account details are passed in via an  [**Account Object**](restexamples.htm#acct). Returns 1 if the account was updated; otherwise, returns 0.  
**UpdateOpportunity(**_opportunityID_ _$, opportunity_**)** |  Update a Salesforce opportunity. The updated opportunity details are passed in via an  [**Opportunity Object**](restexamples.htm#opportunity). Returns 1 if the opportunity was updated; otherwise, returns 0.  
  
**_Account Object_**

The Account object is used to create, read and update Salesforce accounts. This object only includes a subset of the account fields and can be modified by adding or removing fields as needed for your own application. The only required field is **Name$**.

To instantiate the Account object using the handle **account** (where **account** could be any numeric variable), enter the following command:

> account=NEW("*obj/example/salesforce/account")

**_Properties_**

The properties used by the Account object are listed below. To access them, use the Account object handle **account** , followed by an **'** (_apostrophe_) and the property (with the desired parameters).

To **_create_** a new account, create a new Account object and set all the properties to the values you want for your new account and pass the object to the **NewAccount( )** method.

To **_read_** an account from Salesforce, create a new Account object and pass in the empty object to the **GetAccount( )** method. It will populate the object with the values from Salesforce.

To **_update_** an account, first read the account and then modify any fields you want to update and pass the updated account object to the **UpdateAccount( )** method.

**Properties** |  **Description**  
---|---  
**AccountNumber$** |  Account number assigned to the account. (Does not refer to the unique, system-generated ID assigned during creation.)  
**AnnualRevenue** |  Estimated annual revenue of the account.  
**Description$** |  Description of the account.  
**BillingCity$** |  City for the billing address of this account.  
**BillingCountry$** |  Country for the billing address of this account.  
**BillingPostalCode$** |  Zip/Postal Code for the billing address of this account.  
**BillingState$** |  State/Province for the billing address of this account.  
**BillingStreet$** |  Street address for the billing address of this account.  
**Name$** |  Name of the account. Required when creating an account. Cannot be modified once the account is created.  
**NumberOfEmployees** |  Number of employees working at the company.  
**Phone$** |  Phone number for this account.  
**ShippingCity$** |  City for the shipping address of this account.  
**ShippingCountry$** |  Country for the shipping address of this account.  
**ShippingPostalCode$** |  Zip/Postal Code for the shipping address of this account.  
**ShippingState$** |  State/Province for the shipping address of this account.  
**ShippingStreet$** |  Street address for the shipping address of this account.  
**Type$** |  Type of account (e.g. Customer, Competitor or Partner).  
**Website$** |  Web site for this account.  
  
**_Opportunity Object_**

The Opportunity object is used to create, read and update Salesforce opportunities. This object only includes a subset of the opportunity fields and can be modified by adding or removing fields as needed for your own application. The only **_required_** fields are **CloseDate$** , **Name$** and **StageName$**.

To instantiate the opportunity object using the handle **opportunity** (where **opportunity** could be any numeric variable), enter the following command:

> opportunity=NEW("*obj/example/salesforce/opportunity")

**_Properties_**

The properties used by the Opportunity object are listed below. To access them, use the Opportunity object handle **opportunity** , followed by an **'** (_apostrophe_) and the property (with the desired parameters).

To **_create_** a new Salesforce opportunity, create a new Opportunity object and set all the properties to the values you want for your new opportunity and pass the object to the **NewOpportunity( )** method.

To **_read_** an opportunity from Salesforce, create a new Opportunity object and pass in the empty object to the **GetOpportunity(** **)** method. It will populate the object with the values from Salesforce.

To **_update_** an opportunity, first read the opportunity and then modify any fields you want to update and pass the updated opportunity object to the **UpdateOpportunity(** **)** method.

**Properties** |  **Description**  
---|---  
**AccountID$** |  ID of the account associated with this opportunity.  
**Amount** |  Estimated total sale amount.  
**CloseDate$** |  Date when the opportunity is expected to close (format: YYYY-MM-DD). **_Required_** when creating an opportunity. Cannot be modified once the opportunity is created.  
**Description$** |  Description of the opportunity.  
**Name$** |  Name of the opportunity. **_Required_** when creating an opportunity. Cannot be modified once the opportunity is created.  
**StageName$** |  Current stage of this opportunity. **_Required_** when creating an opportunity. Cannot be modified once the opportunity is created.  
  
Possible stage names are:  
  
_Prospecting  
Qualifying  
Needs Analysis  
Value Proposition  
Id. Needs Analysis  
Perception Analysis  
Proposal/Price Quote  
Negotiation/Review  
Closed Won  
Closed Lost_  
  
## Example: Using the Salesforce Object

Below is an example program using the Salesforce object.

> !  
>  ! Replace x's with your client ID, client secret before running this program  
>  clientID$="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"  
>  clientSecret$="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"  
>  !  
>  ! Initialize Salesforce REST API interface. This will bring up a browser to login to Salesforce.  
>  salesforce=new("*obj/example/salesforce/api",clientID$,clientSecret$)  
>  !  
>  ! Wait for user to complete Salesforce sign-in and allow PxPlus access  
>  input "Press any key to continue after logging into Salesforce account and allowing PxPlus access:",*  
>  print ""  
>  !  
>  ! Complete the Salesforce login  
>  salesforce'Login()  
>  !  
>  ! Define account  
>  newAccount=new("*obj/example/salesforce/account")  
>  newAccount'Name$="Example Corp"  
>  newAccount'AccountNumber$="00123456"  
>  newAccount'Description$="An Example company we sell product too."  
>  newAccount'NumberOfEmployees=100  
>  newAccount'AnnualRevenue=3500000  
>  newAccount'BillingStreet$="123 Example Rd"  
>  newAccount'BillingCity$="St. John's"  
>  newAccount'BillingState$="Newfoundland and Labrador"  
>  newAccount'BillingPostalCode$="A1A1A1"  
>  newAccount'BillingCountry$="Canada"  
>  newAccount'ShippingStreet$=newAccount'BillingStreet$  
>  newAccount'ShippingCity$=newAccount'BillingCity$  
>  newAccount'ShippingState$=newAccount'BillingState$  
>  newAccount'ShippingPostalCode$=newAccount'BillingPostalCode$  
>  newAccount'ShippingCountry$=newAccount'BillingCountry$  
>  newAccount'Phone$="5551234567"  
>  newAccount'Website$=https://www.example.com  
>  newAccount'Type$="Customer"  
>  !  
>  ! Create a new account  
>  newAccountId$=salesforce'NewAccount$(newAccount)  
>  if newAccountId$<>"" \  
>  then print "Created account" \  
>  else msgbox "Failed to create an account","Error"  
>  !  
>  ! Replace x's with account ID of account to return from Salesforce  
>  getAccountId$="0014x00000CMnElAAL"  
>  getAccount=new("*obj/example/salesforce/account")  
>  !  
>  ! Get account info  
>  if salesforce'getAccount(getAccountId$,getAccount)=1 \  
>  then print "Get "+getAccount'Name$+" account success" \  
>  else msgbox "Failed to get an account","Error"  
>  !  
>  ! Modify account information  
>  getAccount'Website$=https://www.titancorp.com  
>  !  
>  ! Modify Salesforce account  
>  if salesforce'UpdateAccount(getAccountId$,getAccount)=1 \  
>  then print "Update account website success" \  
>  else msgbox "Failed to update account","Error"  
>  !  
>  ! Replace x's with ID of account to delete from Salesforce  
>  deleteAccountId$=newAccountId$  
>  !  
>  ! Delete an account from Salesforce  
>  if salesforce'DeleteAccount(deleteAccountId$)=1 \  
>  then print "Delete account success" \  
>  else msgbox "Failed to delete account","Error"  
>  !  
>  ! Define opportunity  
>  newOpportunity=new("*obj/example/salesforce/opportunity")  
>  newOpportunity'Name$="Example Corp Server Upgrades"  
>  newOpportunity'AccountId$="0014x00000CMnElAAL"  
>  newOpportunity'Description$="They need to buy 50 new servers to upgrade old ones."  
>  newOpportunity'Amount=30000  
>  newOpportunity'CloseDate$="2021-12-30"  
>  newOpportunity'StageName$="Prospecting"  
>  !  
>  ! Create a new opportunity  
>  newOpportunityId$=salesforce'NewOpportunity$(newOpportunity)  
>  if newOpportunityId$<>"" \  
>  then print "Created opportunity" \  
>  else msgbox "Failed to create an opportunity","Error";  
>  escape  
>  !  
>  ! Replace x's with ID of opportunity to return from Salesforce  
>  getOpportunityId$="0064x000003IgNAAA0"  
>  getOpportunity=new("*obj/example/salesforce/opportunity")  
>  !  
>  ! Get opportunity info  
>  if salesforce'getOpportunity(getOpportunityId$,getOpportunity)=1 \  
>  then print "Get "+getOpportunity'Name$+" opportunity success" \  
>  else msgbox "Failed to get an opportunity","Error"  
>  !  
>  ! Modify opportunity information  
>  getOpportunity'StageName$="Qualification"  
>  !  
>  ! Modify Salesforce opportunity  
>  if salesforce'UpdateOpportunity(getOpportunityId$,getOpportunity)=1 \  
>  then print "Update opportunity stage success" \  
>  else msgbox "Failed to update opportunity","Error"  
>  !  
>  ! Replace x's with ID of opportunity to delete from Salesforce  
>  deleteOpportunityId$=newOpportunityId$  
>  !  
>  ! Delete an account from Salesforce  
>  if salesforce'DeleteOpportunity(deleteOpportunityId$)=1 \  
>  then print "Delete opportunity success" \  
>  else msgbox "Failed to delete opportunity","Error"  
>  !  
>  !  
>  print "Top 3 Accounts"+sep+salesforce'TopThreeActiveAccounts$()  
>  !  
>  ! Clean up object  
>  drop object newAccount  
>  drop object getAccount  
>  drop object newOpportunity  
>  drop object getOpportunity  
>  drop object salesforce  
>  !  
>  end

> PayPal is a registered trademark of PayPal Holdings Inc.  
Salesforce is a registered trademark of Salesforce.com Inc.

> > > > 
