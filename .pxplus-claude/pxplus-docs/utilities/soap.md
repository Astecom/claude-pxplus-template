# Utility Routines

***SOAP** |  **_Create SOAP Transactions with *SOAP API_**  
---|---  
  
## Generating a SOAP Transaction

SOAP (Simple Object Access Protocol) transactions take many formats and therefore need to be customized for the site and service with which you are attempting to communicate.

Below is a sample from **[www.w3.org](http://www.w3.org/)** that will be generated using *SOAP in PxPlus.

## Sample SOAP Transaction

<?xml version="1.0"?>  
<soap:Envelope xmlns:soap="**http://www.w3.org/2001/12/soap-envelope** "  
soap:encodingStyle="**http://www.w3.org/2001/12/soap-encoding** ">  
<soap:Body xmlns:m="**http://www.example.org/stock** ">  
<m:GetStockPrice>  
<m:StockName>IBM</m:StockName>  
</m:GetStockPrice>  
</soap:Body>   
</soap:Envelope>

## Sample PxPlus Program

**bf$=""  
** _* Clear variable_  
**CALL "*soap;Init",bf$  
** * _Initiate process by adding beginning XML/SOAP headers:_  
<?xml version="1.0" encoding="utf-8"?>  
<soap:Envelope xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance** "  
xmlns:xsd="**http://www.w3.org/2001/XMLSchema** "  
xmlns:soap="**http://schemas.xmlsoap.org/soap/envelope/** ">  
<soap:Body>  
**CALL "*soap;Method",bf$,"GetStockPrice",""**  
* _Start method that will be the main request_  
<GetStockPrice >  
</GetStockPrice>  
**CALL "*soap;AddValue",bf$,"StockName","PVXPLUS"**  
* _Add the information to the method_  
<StockName>PVXPLUS</StockName>  
**CALL "*soap;Finalize",bf$**  
* _End the transaction_  
</soap:Body>  
</soap:Envelope>  
**CALL "*soap;Exchange",bf$,"https://www.example.com/stock",response$**  
* _Process the transaction and return the response._

## Sample Generated Request

<?xml version="1.0" encoding="utf-8"?>  
<soap:Envelope xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance** " xmlns:xsd="**http://www.w3.org/2001/XMLSchema** "  
xmlns:soap="**http://schemas.xmlsoap.org/soap/envelope/** ">  
<soap:Body>  
<GetStockPrice >  
<StockName>PVXPLUS</StockName>  
</GetStockPrice>  
</soap:Body>  
</soap:Envelope>

## Sample Generated Response

<?xml version="1.0"?>  
<soap:Envelope xmlns:soap="**http://www.w3.org/2001/12/soap-envelope** "  
soap:encodingStyle="**http://www.w3.org/2001/12/soap-encoding** ">  
<soap:Body xmlns:m="**http://www.example.org/stock** ">  
<m:GetStockPriceResponse>  
<m:Price>34.5</m:Price>  
</m:GetStockPriceResponse>  
</soap:Body>  
</soap:Envelope>
