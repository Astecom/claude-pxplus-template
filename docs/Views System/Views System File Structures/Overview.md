# Views System  
  
**Views System File Structures** |  **__**  
---|---  
  
The Views System uses seven data control files:

**** |  **[pvxview.vue](Overview.htm#vue)** |  Defines view contents.  
---|---|---  
**** |  **[pvxview.src](Overview.htm#src)** |  Defines data sources and views.  
|  **[pvxview.clc](Overview.htm#clc)** |  Defines calculated items in a view.  
**** |  **[pvxview.itm](Overview.htm#itm)** |  Defines elements within the data sources.  
**** |  **[pvxview.lnk](Overview.htm#lnk)** |  Defines interrelationships between the data sources.  
**** |  **[pvxview.grp](Overview.htm#grp)** |  Defines group names.  
**** |  **[pvxview.gpd](Overview.htm#gpd)** |  Defines which data sources and views belong to which group.  
  
These files are initially created in the current working directory and must be accessible whenever view components are defined or accessed.

_(The pvxview.clc file was added in PxPlus 2021.)_

## View Definitions - pvxview.vue

The file structure for _pvxview.vue_ is explained below.

**Element Name** |  **Description** |  **Length** |  **Print Format**  
---|---|---|---  
VUE_ID |  View identifier |  8 |  XXX00000  
VUE_SEQ |  View sequence. An optional record with sequence 0000 may exist for views with a free-form filter assigned. Free-form filters are applied at the view level rather than at the field level. |  4 |  0000  
VUE_PATH |  Source linkage. An item from the primary data source is defined by its ITM_ID$ alone. Items from linked or related files are defined by the LNK_ID$(s) followed by the item's ITM_ID$. |  240|   
VUE_COLUMN |  Column name |  60|   
VUE_CONDITION |  Filter condition. This is applied at the view level if VUE_SEQ is 0000 and applied at the field level if VUE_SEQ is greater than 0000.

#### **Note:**  
The format of the VUE_CONDITION contents changed as of PxPlus v8.00 to make it more flexible. It is not possible to use views with conditions defined or updated in v8.00 or later with an earlier version.

|  500|   
VUE_TYPE |  |  "I" or blank |  Item is a data source element  
---|---  
"C" |  Item is a calculated item  
  
_(VUE_TYPE was added in PxPlus 2021.)_

1 |   
  
Record size (including delimiters): |  819  
---|---  
Defined record size: |  1024 (Variable)  
**_Key Definitions:_**  
Primary key: |  VUE_ID + VUE_SEQ |  [1:1:8]+[2:1:4]  
| | |   
  
#### **Note:  
** All fields are delimited strings.

## Calculated Fields \- pvxview.clc

The file structure for _pvxview.clc_ is explained below.

_(The pvxview.clc file was added in PxPlus 2021.)_

**Element Name** |  **Description** |  **Length** |  **Print Format**  
---|---|---|---  
CLC_ID |  Element ID |  8 |  XXX00000  
CLC_SRC_ID |  Parent (view) ID |  8 |  XXX00000  
CLC_NAME |  Field or column name |  30 |   
CLC_DESC |  Item description |  64 |   
CLC_DATA_TYPE |  Data type |  S |  String data **_(Default)_**  
---|---  
N |  Numeric data  
1 |   
CLC_LENGTH |  Item length |  10 |   
CLC_EXPR_IND |  Type of expression _(Not Used)_ |  1 |   
CLC_SOURCE |  Formula/expression |  300 |   
CLC_CLASS |  Class of item |  24 |   
CLC_FLD_SEQ |  Item sequence |  4 |  0000  
  
Record size (including delimiters): |  460  
---|---  
Defined record size: |  640 (Variable)  
  
**_Key Definitions:_**  
Primary key: |  CLC_ID |  [1:1:8]  
Alternate Key 1: |  CLC_SRC_ID + CLC_ID |  [2:1:8]+[1:1:8]  
Alternate Key 2: |  CLC_SRC_ID + CLC_NAME |  [2:1:8]+[3:1:30:"C"]  
Alternate Key 3: |  CLC_SRC_ID + CLC_DESC |  [2:1:8]+[4:1:64:"C"]  
Alternate Key 4: |  CLC_SRC_ID + CLC_FLD_SEQ |  [2:1:8]+[10:1:4]  
| | |   
  
#### **Note:  
** All fields are delimited strings.

## Data Sources - pvxview.src

The file structure for _pvxview.src_ is explained below.

**Element Name** |  **Description** |  **Length** |  **Print Format**  
---|---|---|---  
SRC_ID |  Data source ID |  8 |  XXX00000  
SRC_DESC |  Data source description |  64|   
SRC_TYPE |  Source type |  L |  Logical name  
---|---  
P |  Path name  
O |  Object name  
T |  External database table  
V |  View  
1|   
SRC_EXPR_IND |  Expression indicator |  = |  Expression  
---|---  
1|   
SRC_PRIMARY_SOURCE |  Data source |  T |  Connection string  
---|---  
L |  Logical file name  
P |  File name  
O |  Object name  
V |  Primary source ID  
1024|   
SRC_KEY |  **_(Used by SRC_TYPE V Only)_** Sort key |  64|   
SRC_ORDER |  **_(Used by SRC_TYPE V Only)_** Element order |  A |  Alphabetic  
---|---  
" " _null_ |  Natural order **_(Default)_**  
1|   
SRC_UPD_STAMP |  Last update |  48|   
SRC_LONG_DESC |  Long description |  255|   
SRC_PASSWORD |  **_(Used by SRC_TYPE V Only)_** Password (encrypted) |  12|   
SRC_INIT_LOGIC |  Initialization logic |  128|   
SRC_EXEC_LOGIC |  Execution logic |  128|   
SRC_CLOSE_LOGIC |  Closing logic |  128|   
SRC_LOGIC_OBJECT |  Logic object |  128|   
Record size (including delimiters): |  2004  
---|---  
Defined record size: |  2176 (Variable)  
**_Key Definitions:_**  
Primary key: |  SRC_ID |  [1:1:8]  
Alternate Key 1: |  SRC_DESC |  [2:1:64:"UC"]  
  
#### **Note:  
** All fields are delimited strings.

## Data Elements - pvxview.itm

The file structure for _pvxview.itm_ is explained below.

**Element Name** |  **Description** |  **Length** |  **Print Format**  
---|---|---|---  
ITM_ID |  Element ID |  8 |  XXX00000  
ITM_SRC_ID |  Parent (data source) ID |  8 |  XXX00000  
ITM_NAME |  Field or column name |  30|   
ITM_DESC |  Element description |  64|   
ITM_DATA_TYPE |  Data type |  S |  String data **_(Default)_**  
---|---  
N |  Numeric data  
1|   
ITM_LENGTH |  **_(Optional)_** Item length |  10|   
ITM_EXPR_IND |  Type of expression _(Not Used)_ |  1|   
ITM_SOURCE |  Formula/expression |  300|   
ITM_CLASS |  Class of item |  24|   
ITM_FLD_SEQ |  Element sequence |  4 |  0000  
Record size (including delimiters): |  460  
---|---  
Defined record size: |  640 (Variable)  
**_Key Definitions:_**  
Primary key: |  ITM_ID |  [1:1:8]  
Alternate Key 1: |  ITM_SRC_ID + ITM_ID |  [2:1:8]+[1:1:8]  
Alternate Key 2: |  ITM_SRC_ID + ITM_NAME |  [2:1:8]+[3:1:30:"C"]  
Alternate Key 3: |  ITM_SRC_ID + ITM_DESC |  [2:1:8]+[4:1:64:"C"]  
Alternate Key 4: |  ITM_SRC_ID + ITM_FLD_SEQ |  [2:1:8]+[10:1:4]  
| | |   
  
#### **Note:  
** All fields are delimited strings.

## Relationships - pvxview.lnk

The file structure for _pvxview.lnk_ is explained below.

**Element Name** |  **Description** |  **Length** |  **Print Format**  
---|---|---|---  
LNK_ID |  Link identifier |  8 |  XXX00000  
LNK_PARENT_ID |  Parent source ID (Data source this link belongs to) |  8 |  XXX00000  
LNK_SRC_ID |  Linked data source ID (Linked data source) |  8 |  XXX00000  
LNK_DESC |  Link description |  64|   
LNK_TYPE |  Type of relationship |  1 |  One-to-one  
---|---  
***** |  One-to-many  
(Key expression used as a range)  
1|   
LNK_NO_DATA_OPTION |  File/Data is **_mandatory_** |  1 |  Return null data for subordinate fields  
---|---  
2 |  Display *****_asterisk_ in string fields  
3 |  Skip the record  
1|   
LNK_KNO |  Related key name/number |  64|   
LNK_EXPR_IND |  Type of expression _(Not Used)_ |  1|   
LNK_KEYDEF |  Key expression |  300|   
LNK_PREFIX |  Record prefix for link file |  10|   
Record size (including delimiters): |  475  
---|---  
Defined record size: |  640 (Variable)  
**_Key Definitions:_**  
Primary key: |  LNK_ID |  [1:1:8]  
Alternate Key 1: |  LNK_PARENT_ID+ LNK_SRC_ID |  [2:1:8]+[3:1:8]  
Alternate Key 2: |  LNK_PARENT_ID + LNK_DESC |  [2:1:8:"U"]+[4:1:64:"C"]  
Alternate Key 3: |  LNK_SRC_ID + LNK_PARENT_ID |  [3:1:8]+[2:1:8]  
| | |   
  
#### **Note:  
** All fields are delimited strings.

## Data Groups - pvxview.grp

The file structure for _pvxview.grp_ is explained below.

**Element Name** |  **Description** |  **Length** |  **Print Format**  
---|---|---|---  
GRP_ID |  Group identifier |  8 |  XXX00000  
GRP_DESC |  Group description |  64|   
Record size (including delimiters): |  74  
---|---  
Defined record size: |  256 (Variable)  
**_Key Definitions:_**  
Primary key: |  GRP_ID |  [1:1:8]  
Alternate Key 1: |  GRP_DESC |  [2:1:64:"UC"]  
  
#### **Note:   
**All fields are delimited strings.

## Grouped Data Sources - pvxview.gpd

The file structure for _pvxview.gpd_ is explained below.

**Element Name** |  **Description** |  **Length** |  **Print Format**  
---|---|---|---  
GPD_GRP_ID |  Group identifier |  8 |  XXX00000  
GPD_SRC_ID |  Data source identifier |  8 |  XXX00000  
Record size (including delimiters): |  18  
---|---  
Defined record size: |  256 (Variable)  
**_Key Definitions:_**  
Primary key: |  GPD_GRP_ID + GPD_SRC_ID |  [1:1:8]+[2:1:8]  
Alternate Key 1: |  GPD_SRC_ID + GPD_GRP_ID |  [2:1:8]+[1:1:8]  
| | |   
  
#### **Note:   
**All fields are delimited strings.
