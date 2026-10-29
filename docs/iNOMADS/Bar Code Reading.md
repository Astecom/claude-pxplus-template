# iNomads

**Bar Code Reading**|   
---|---  
  
Bar code reading interfaces to ZXing (Zebra Crossing) bar code reader, which is available on most current Android smartphones/tablets (requires Ice Cream Sandwich or newer) and to a limited extent, iPhone/iPads. The interface works by examining the image of the bar code using the front facing camera on the device and analysing the image to detect bar codes.

## Supported Bar Codes

For the Android device, the following codes are supported: UPC-A/E, EAN-8/13, Code 39/93/128, ITF, Codabar, QR code. Currently, iPad/iPhone only supports QR Code.

For more information, visit [**http://code.google.com/p/zxing**](http://code.google.com/p/zxing/).

## Invocation Methods

Two methods are provided to invoke the scanner software:

  * The _first_ method is a callable routine that will initiate the scanner and return the value directly to an application variable.
  * The _second_ method provides the ability to scan bar codes directly into input fields on the current panel in response to a button on the panel caption line being selected.



**_Callable Routine_**

> **call "*plus/inomads/scanner"**, _return_value_ _$_ , _codes$_

**_Where:_**

_return_value_ _$_ |  Variable that will receive the returned bar code value.  
---|---  
_codes$_ |  A comma-separated list of bar codes that you want the software to look for. Valid code types are: AZTEC, CODABAR, CODE_39, CODE_93, CODE_128, DATA_MATRIX, EAN_8, EAN_13, ITF, MAXICODE, PDF_417, QR_CODE, RSS_14, RSS_EXPANDED, UPC_A, UPC_E. (Default = "UPC_A,EAN_13")  
  
## Built-in Caption Line Scan Button

This button must be enabled in the template definition in the _Misc_ tab (see **[Template Configuration Maintenance](Template%20Configuration.md)**) where you can provide a list of browsers that, if detected, will have the scan button enabled _(Default: Android),_ along with a list of acceptable bar codes.

The button on the caption line will only be enabled on unformatted input fields and only on the browsers named. If the user selects the _Caption Line_ button, the current input field is automatically filled in with scanned data and an On Change event will be initiated with EOM="S".

         

## Printing Code 128 Bar Codes

While most bar codes can be printed using a font, Code 128 bar codes are special in that the data requires a check digit to be added to the output.

**_Example:_**

The following example is a program to produce Code 128:

> ! code128 - Outputs graphical bar code symbol code 128 thru *WINPRT*   
> !  
> ! Updated 05/31/2018 by PVX Plus Technologies Ltd.  
> !  
> ! For unlimited distribution without warranty and free of charge.  
> !  
> ! CALL "code128", Channel, Text$, xPos, yPos, High, Scale  
> !  
> ! Where:  
> !  
> ! Channel   = channel to direct output (open *WINPRT*/PDF file)  
> ! Text$       = string to output as barcode  
> ! xPos,yPos = graphical location to place barcode  
> ! High      = # of Graphical units high  
> ! Dots      = # of Graphical units wide per bar for thin line (Integer)  
> !  
>   if stk(properties)="" \  
>    then goto Demo ! Simple run of program does a test  
> !  
> CODE128:  
>   enter Channel,(Text$),xPos,yPos,High,Scale  
> !  
>   if len(Text$)=0 or High<1 or Scale<1 \  
>    then exit  
> !  
>   Bytes$="",ShiftCode$=chr(98)  
> !  
>   for I=1 to len(Text$)  
>   J=asc(Text$(I,1))  
>   if J<32 \  
>    then Bytes$+=ShiftCode$+chr(J+64) \  
>    else if J<128 \  
>          then Bytes$+=chr(J-32)  
>   next I  
> !  
>   Margin=Scale*10  
>   BarWidth=(11*len(Bytes$)+35)*Scale  
>   High=max(High,BarWidth*.15)  
>   print (Channel)'pen'(0,1,0),'fill'(1,7),  
>   print (Channel)'rectangle'(xPos-Margin,yPos,xPos+Margin+BarWidth,yPos-High),  
>   print (Channel)'pen'(1,1,0),'fill'(1,0),  
>   CheckDigit=0  
>   for I=1 to len(Bytes$)  
>   CheckDigit+=I*asc(Bytes$(I,1))  
>   next I  
>   CheckDigit=mod(104+CheckDigit,103)  
>   Bytes$=chr(104)+Bytes$+chr(CheckDigit)+chr(106)  
> !  
>   dim Patterns$[0:255] ! Max is 255 characters  
>   for I=0 to 255  
>   read data Patterns$[I],end=*break  
>   next I  
> !  
>   for I=1 to len(Bytes$)  
>   ChrPattern$=Patterns$[asc(Bytes$(I,1))]  
>   if ChrPattern$="" \  
>    then continue  
> !  
>   for J=1 to len(ChrPattern$)  
>   CurBarWide=num(ChrPattern$(J,1))*Scale  
>   if mod(J,2)=1 \  
>    then print (Channel)'rectangle'(xPos,yPos,xPos+CurBarWide,yPos-High),  
>   xPos+=CurBarWide  
>   next J  
> !  
>   next I  
> CODE128_DONE:  
>   exit  
> !  
> ! Code 128 data  
> !  
>   data "212222" !Set  A: (SPACE ) B: (SPACE ) C: (  00  )  
>   data "222122" !Set  A: (  !   ) B: (  !   ) C: (  01  )  
>   data "222221" !Set  A: (  "   ) B: (  "   ) C: (  02  )  
>   data "121223" !Set  A: (  #   ) B: (  #   ) C: (  03  )  
>   data "121322" !Set  A: (  $   ) B: (  $   ) C: (  04  )  
>   data "131222" !Set  A: (  %   ) B: (  %   ) C: (  05  )  
>   data "122213" !Set  A: (  &   ) B: (  &   ) C: (  06  )  
>   data "122312" !Set  A: (  '   ) B: (  '   ) C: (  07  )  
>   data "132212" !Set  A: (  (   ) B: (  (   ) C: (  08  )  
>   data "221213" !Set  A: (  )   ) B: (  )   ) C: (  09  )  
>   data "221312" !Set  A: (  *   ) B: (  *   ) C: (  10  )  
>   data "231212" !Set  A: (  +   ) B: (  +   ) C: (  11  )  
>   data "112232" !Set  A: (  ,   ) B: (  ,   ) C: (  12  )  
>   data "122132" !Set  A: (  -   ) B: (  -   ) C: (  13  )  
>   data "122231" !Set  A: (  .   ) B: (  .   ) C: (  14  )  
>   data "113222" !Set  A: (  /   ) B: (  /   ) C: (  15  )  
>   data "123122" !Set  A: (  0   ) B: (  0   ) C: (  16  )  
>   data "123221" !Set  A: (  1   ) B: (  1   ) C: (  17  )  
>   data "223211" !Set  A: (  2   ) B: (  2   ) C: (  18  )  
>   data "221132" !Set  A: (  3   ) B: (  3   ) C: (  19  )  
>   data "221231" !Set  A: (  4   ) B: (  4   ) C: (  20  )  
>   data "213212" !Set  A: (  5   ) B: (  5   ) C: (  21  )  
>   data "223112" !Set  A: (  6   ) B: (  6   ) C: (  22  )  
>   data "312131" !Set  A: (  7   ) B: (  7   ) C: (  23  )  
>   data "311222" !Set  A: (  8   ) B: (  8   ) C: (  24  )  
>   data "321122" !Set  A: (  9   ) B: (  9   ) C: (  25  )  
>   data "321221" !Set  A: (  :   ) B: (  :   ) C: (  26  )  
>   data "312212" !Set  A: (  ;   ) B: (  ;   ) C: (  27  )  
>   data "322112" !Set  A: (  <   ) B: (  <   ) C: (  28  )  
>   data "322211" !Set  A: (  =   ) B: (  =   ) C: (  29  )  
>   data "212123" !Set  A: (  >   ) B: (  >   ) C: (  30  )  
>   data "212321" !Set  A: (  ?   ) B: (  ?   ) C: (  31  )  
>   data "232121" !Set  A: (  @   ) B: (  @   ) C: (  32  )  
>   data "111323" !Set  A: (  A   ) B: (  A   ) C: (  33  )  
>   data "131123" !Set  A: (  B   ) B: (  B   ) C: (  34  )  
>   data "131321" !Set  A: (  C   ) B: (  C   ) C: (  35  )  
>   data "112313" !Set  A: (  D   ) B: (  D   ) C: (  36  )   
>   data "132113" !Set  A: (  E   ) B: (  E   ) C: (  37  )  
>   data "132311" !Set  A: (  F   ) B: (  F   ) C: (  38  )   
>   data "211313" !Set  A: (  G   ) B: (  G   ) C: (  39  )  
>   data "231113" !Set  A: (  H   ) B: (  H   ) C: (  40  )  
>   data "231311" !Set  A: (  I   ) B: (  I   ) C: (  41  )  
>   data "112133" !Set  A: (  J   ) B: (  J   ) C: (  42  )  
>   data "112331" !Set  A: (  K   ) B: (  K   ) C: (  43  )  
>   data "132131" !Set  A: (  L   ) B: (  L   ) C: (  44  )  
>   data "113123" !Set  A: (  M   ) B: (  M   ) C: (  45  )   
>   data "113321" !Set  A: (  N   ) B: (  N   ) C: (  46  )  
>   data "133121" !Set  A: (  O   ) B: (  O   ) C: (  47  )  
>   data "313121" !Set  A: (  P   ) B: (  P   ) C: (  48  )  
>   data "211331" !Set  A: (  Q   ) B: (  Q   ) C: (  49  )  
>   data "231131" !Set  A: (  R   ) B: (  R   ) C: (  50  )  
>   data "213113" !Set  A: (  S   ) B: (  S   ) C: (  51  )  
>   data "213311" !Set  A: (  T   ) B: (  T   ) C: (  52  )  
>   data "213131" !Set  A: (  U   ) B: (  U   ) C: (  53  )  
>   data "311123" !Set  A: (  V   ) B: (  V   ) C: (  54  )  
>   data "311321" !Set  A: (  W   ) B: (  W   ) C: (  55  )  
>   data "331121" !Set  A: (  X   ) B: (  X   ) C: (  56  )  
>   data "312113" !Set  A: (  Y   ) B: (  Y   ) C: (  57  )  
>   data "312311" !Set  A: (  Z   ) B: (  Z   ) C: (  58  )  
>   data "332111" !Set  A: (  [   ) B: (  [   ) C: (  59  )  
>   data "314111" !Set  A: (  \   ) B: (  \   ) C: (  60  )  
>   data "221411" !Set  A: (  ]   ) B: (  ]   ) C: (  61  )  
>   data "431111" !Set  A: (  ^   ) B: (  ^   ) C: (  62  )  
>   data "111224" !Set  A: (  _   ) B: (  _   ) C: (  63  )  
>   data "111422" !Set  A: ( NUL  ) B: (  '   ) C: (  64  )  
>   data "121124" !Set  A: ( SOH  ) B: (  a   ) C: (  65  )  
>   data "121421" !Set  A: ( STX  ) B: (  b   ) C: (  66  )  
>   data "141122" !Set  A: ( ETX  ) B: (  c   ) C: (  67  )  
>   data "141221" !Set  A: ( EOT  ) B: (  d   ) C: (  68  )  
>   data "112214" !Set  A: ( ENQ  ) B: (  e   ) C: (  69  )  
>   data "112412" !Set  A: ( ACK  ) B: (  f   ) C: (  70  )  
>   data "122114" !Set  A: ( BEL  ) B: (  g   ) C: (  61  )  
>   data "122411" !Set  A: (  BS  ) B: (  h   ) C: (  72  )  
>   data "142112" !Set  A: (  HT  ) B: (  i   ) C: (  73  )  
>   data "142211" !Set  A: (  LF  ) B: (  j   ) C: (  74  )  
>   data "241211" !Set  A: (  VT  ) B: (  k   ) C: (  75  )  
>   data "221114" !Set  A: (  FF  ) B: (  l   ) C: (  76  )  
>   data "413111" !Set  A: (  CR  ) B: (  m   ) C: (  77  )  
>   data "241112" !Set  A: (  SO  ) B: (  n   ) C: (  78  )  
>   data "134111" !Set  A: (  SI  ) B: (  o   ) C: (  79  )  
>   data "111242" !Set  A: ( DLE  ) B: (  p   ) C: (  80  )  
>   data "121142" !Set  A: ( DC1  ) B: (  q   ) C: (  81  )  
>   data "121241" !Set  A: ( DC2  ) B: (  r   ) C: (  82  )  
>   data "114212" !Set  A: ( DC3  ) B: (  s   ) C: (  83  )  
>   data "124112" !Set  A: ( DC4  ) B: (  t   ) C: (  84  )  
>   data "124211" !Set  A: ( NAK  ) B: (  u   ) C: (  85  )  
>   data "411212" !Set  A: ( SYN  ) B: (  v   ) C: (  86  )  
>   data "421112" !Set  A: ( ETB  ) B: (  w   ) C: (  87  )  
>   data "421211" !Set  A: ( CAN  ) B: (  x   ) C: (  88  )  
>   data "212141" !Set  A: (  EM  ) B: (  y   ) C: (  89  )  
>   data "214121" !Set  A: ( SUB  ) B: (  z   ) C: (  90  )  
>   data "412121" !Set  A: ( ESC  ) B: (  {   ) C: (  91  )  
>   data "111143" !Set  A: (  FS  ) B: (  |   ) C: (  92  )  
>   data "111341" !Set  A: (  GS  ) B: (  }   ) C: (  93  )  
>   data "131141" !Set  A: (  RS  ) B: (  ~   ) C: (  94  )  
>   data "114113" !Set  A: (  US  ) B: ( DEL  ) C: (  95  )  
>   data "114311" !Set  A: (FNC 3 ) B: (FNC 3 ) C: (  96  )  
>   data "411113" !Set  A: (FNC 2 ) B: (FNC 2 ) C: (  97  )  
>   data "411311" !Set  A: (SHIFT ) B: (SHIFT ) C: (  98  )  
>   data "113141" !Set  A: (CODE C) B: (CODE C) C: (  99  )  
>   data "114131" ! Set A: (CODE B) B: (FNC 4 ) C: (CODE B)  
>   data "311141" ! Set A: (FNC 4 ) B: (CODE A) C: (CODE A)  
>   data "411131" ! Set A: (FNC 1 ) B: (FNC 1 ) C: (FNC 1 )  
>   data "211412" ! START (Code A)  
>   data "211214" ! START (Code B)  
>   data "211232" ! START (Code C)  
>   data "2331112" ! STOP  
> !  
> Demo:  
>   open (hfn)"[lcl]*winprt*";  
>   Channel=lfo  
> !  
>   call pgn+";code128",(Channel),"123456",200,200,50,2  
> !  
>   close (Channel)  
> !  
>   end

 

 

 
