# Views Definition Object

**VError Codes** |  **__**  
---|---  
  
The tables below list the error codes that may be returned in the **ViewCtl** property, **VError** , and the descriptions returned using the **VError$( )** method. The descriptions may also be retrieved using the Command line program **VError**  _nnnn_ at the Command prompt **_where_**  _nnnn_ is the error code number; e.g. verror 1234.

Use the following links to jump to a particular list of error codes:

|  **[CalcItem Object Errors](VError%20Codes.htm#Mark8)**  
---|---  
|  **[DataGroup Object Errors](VError%20Codes.htm#Mark7)**  
|  **[DataSource Object Errors](VError%20Codes.htm#Mark2)**  
|  **[DS_Item Object Errors](VError%20Codes.htm#Mark3)**  
|  **[DS_Link Object Errors](VError%20Codes.htm#Mark4)**  
|  **[ViewCtl Object Errors](VError%20Codes.htm#Mark1)**  
|  **[ViewDef Object Errors](VError%20Codes.htm#Mark5)**  
|  **[ViewItem Object Errors](VError%20Codes.htm#Mark6)**  
  
## ViewCtl Object Errors

The following table provides a list of ViewCtl object errors:

**Error Number** |  **ViewCtl Method** |  **Description**  
---|---|---  
1000 |  **On_Create** |  **On_Create** failed  
1010 |  **AddDataGroup** |  Invalid arguments  
1011 |  **AddDataGroup** |  Unable to add **DataGroup** object  
1013 |  **AddDataGroup** |  Duplicate group description  
1020 |  **AddDataSource** |  Invalid arguments  
1030 |  **AddItem** |  Invalid arguments  
1038 |  **AddItem** |  Invalid object type  
1040 |  **AddLink** |  Invalid arguments  
1044 |  **AddLink** |  Cannot find primary **DataSource** object  
1050 |  **AddView** |  Invalid arguments  
1051 |  **AddView** |  Unable to add **ViewDef** object  
1058 |  **AddView** |  Invalid object type  
1060 |  **AssignToDataGroup** |  Invalid arguments  
1064 |  **AssignToDataGroup** |  Unknown source or group  
1070 |  **CheckDuplicateDescription** |  Invalid arguments  
1100 |  **Copy** |  Invalid arguments  
1104 |  **Copy** |  Source not found  
1106 |  **Copy** |  Group not found  
1108 |  **Copy** |  Invalid object type  
1110 |  **Delete** |  Invalid arguments  
1114 |  **Delete** |  Source not found  
1115 |  **Delete** |  Error deleting source record  
1120 |  **DeleteDataGroup** |  Invalid arguments  
1124 |  **DeleteDataGroup** |  Unknown group  
1126 |  **DeleteDataGroup** |  Cannot delete default group  
1130 |  **DeleteFromDataGroup** |  Invalid arguments  
1134 |  **DeleteFromDataGroup** |  Unknown source or group  
1135 |  **DeleteFromDataGroup** |  Error deleting group entry  
1140 |  **Disable** |  Invalid arguments  
1144 |  **Disable** |  Source not found  
1145 |  **Disable** |  Unable to disable source record  
1148 |  **Disable** |  Invalid object type  
1160 |  **GetDataGroup** |  Invalid arguments  
1162 |  **GetDataGroup** |  No groups defined  
1164 |  **GetDataGroup** |  Group not found  
1170 |  **GetDataSource** |  Invalid arguments  
1172 |  **GetDataSource** |  No data sources defined  
1174 |  **GetDataSource** |  **DataSource** not found  
1180 |  **GetGroupID** |  Invalid arguments  
1184 |  **GetGroupID** |  Group not found  
1190 |  **GetItem** |  Invalid arguments  
1197 |  **GetItem** |  Invalid path  
1198 |  **GetItem** |  Invalid object type  
1200 |  **GetLink** |  Invalid arguments  
1205 |  **GetLink** |  Invalid link  
1207 |  **GetLink** |  Invalid path  
1210 |  **GetNextKeyID** |  Invalid arguments  
1220 |  **GetType** |  Invalid arguments  
1224 |  **GetType** |  Source not found  
1230 |  **GetView** |  Invalid arguments  
1232 |  **GetView** |  No views defined  
1234 |  **GetView** |  View not found  
1240 |  **List** |  Invalid arguments  
1250 |  **ListByGroup** |  Invalid arguments  
1260 |  **ListGroupMembers** |  Invalid arguments  
1264 |  **ListGroupMembers** |  Group not found  
1280 |  **Load** |  Invalid arguments  
1281 |  **Load** |  Unable to add **DataSource** or **ViewDef** object  
1284 |  **Load** |  Source not found  
1288 |  **Load** |  Invalid source type  
1290 |  **LoadDataGroup** |  Invalid arguments  
1291 |  **LoadDataGroup** |  Unable to create **Datagroup** object  
1294 |  **LoadDataGroup** |  Group not found  
1300 |  **OpenLink** |  Invalid arguments  
1304 |  **OpenLink** |  Link record not found  
1306 |  **OpenLink** |  Undefined source id  
1308 |  **OpenLink** |  Invalid source type  
1310 |  **Print** |  Invalid arguments  
1315 |  **Print** |  Print error  
1320 |  **Remove** |  Invalid arguments  
1322 |  **Remove** |  No **DataSource** or **ViewDef** objects defined  
1324 |  **Remove** |  Object not found  
1330 |  **RemoveDataGroup** |  Invalid arguments  
1332 |  **RemoveDataGroup** |  No **DataGroup** objects defined  
1334 |  **RemoveDataGroup** |  **DataGroup** not found  
1340 |  **RemoveFromDataGroup** |  Invalid arguments  
1344 |  **RemoveFromDataGroup** |  Data source/view not found  
1346 |  **RemoveFromDataGroup** |  Group not found  
1350 |  **RemoveItem** |  Invalid arguments  
1354 |  **RemoveItem** |  Item not found  
1358 |  **RemoveItem** |  Invalid object type  
1360 |  **RemoveLink** |  Invalid arguments  
1370 |  **Save** |  Invalid arguments  
1372 |  **Save** |  No **DataSource** objects defined  
1373 |  **Save** |  Invalid view item path  
1375 |  **Save** |  Write failed  
1376 |  **Save** |  Unresolved link  
1377 |  **Save** |  Unresolved primary source id  
1378 |  **Save** |  Invalid object type  
1379 |  **Save** |  Views package not activated  
1380 |  **SetDescription** |  Invalid arguments  
1383 |  **SetDescription** |  Duplicate description  
1394 |  **SetDirectory** |  Directory path not found  
1395 |  **SetDirectory** |  Not a directory path  
1396 |  **SetDirectory** |  Error opening View Definition files  
1397 |  **SetDirectory** |  File check failure  
1400 |  **SetFilter** |  Invalid arguments  
1408 |  **SetFilter** |  Invalid object type  
1410 |  **SetInternalKeycode** |  Invalid arguments  
1420 |  **SetUnassignedMessage** |  Invalid arguments  
1430 |  **TranslatePath** |  Invalid arguments  
1440 |  **WriteDataGroup** |  Invalid arguments  
1445 |  **WriteDataGroup** |  Write failed  
1450 |  **CopyDataGroup** |  Invalid arguments  
1454 |  **CopyDataGroup** |  Data group not found  
1460 |  **Export** |  Invalid arguments  
1462 |  **Export** |  Disabled source  
1464 |  **Export** |  Source record not found  
1465 |  **Export** |  Error writing to export file  
1466 |  **Export** |  Error accessing export file  
1468 |  **Export** |  Invalid file type  
1470 |  **GetImportList** |  Invalid arguments  
1478 |  **GetImportList** |  Invalid file type  
1480 |  **SetImport** |  Invalid arguments  
1490 |  **Import** |  Invalid arguments  
1498 |  **Import** |  Invalid file type  
1501 |  **Import** |  Unresolved data source reference  
1502 |  **Import** |  Unresolved link parent source reference  
1503 |  **Import** |  Unresolved link source reference  
1504 |  **Import** |  Unresolved view primary data source reference  
1505 |  **Import** |  Unresolved view reference  
1506 |  **Import** |  Unresolved group reference  
1507 |  **Import** |  Unresolved group membership reference  
1508 |  **Import** |  Unresolved view item path  
1511 |  **Import** |  Error writing view or data source header (**pvxview.src**)  
1512 |  **Import** |  Error writing data source item (**pvxview.itm**)  
1513 |  **Import** |  Error writing data source link (**pvxview.lnk**)  
1514 |  **Import** |  Error writing view item (**pvxview.vue**)  
1515 |  **Import** |  Error writing group (**pvxview.grp**)  
1516 |  **Import** |  Error writing group membership (**pvxview.gpd**)  
1517 |  **Import** |  Error writing definition record  
1521 |  **ChangeDataGroupDescription** |  Invalid arguments  
1524 |  **ChangeDataGroupDescription** |  Original description not found  
1530 |  **SetCloseLogic** |  Invalid arguments  
1535 |  **SetCloseLogic** |  Invalid logic  
1540 |  **SetExecutionLogic** |  Invalid arguments  
1545 |  **SetExecutionLogic** |  Invalid logic  
1550 |  **SetInitLogic** |  Invalid arguments  
1555 |  **SetInitLogic** |  Invalid logic  
1560 |  **ListMemberGroups** |  Invalid arguments  
1564 |  **ListMemberGroups** |  Invalid data source or view  
1570 |  **GetDataSourceIDs** |  Invalid arguments  
1574 |  **GetDataSourceIDs** |  View not found  
1578 |  **GetDataSourceIDs** |  Invalid class type  
  
## DataSource Object Errors

Below is a list of DataSource object errors.

**Error Number** |  **DataSource Method** |  **Description**  
---|---|---  
2000 |  **On_Create** |  Invalid arguments  
2001 |  **On_Create** |  Invalid Source expression  
2002 |  **On_Create/SetPrimarySource** |  Unable to create source object (e.g. *views/logio, custom data source object)  
2003 |  **On_Create/SetPrimarySource** |  Invalid logical name  
2004 |  **On_Create/SetPrimarySource** |  Invalid path name  
2005 |  **On_Create/SetPrimarySource** |  Invalid database source  
2006 |  **On_Create/SetPrimarySource** |  Invalid custom data source arguments  
2007 |  **On_Create/SetPrimarySource** |  File authorization error  
2011 |  **AddItem** |  Unable to add **DS_Item** object  
2021 |  **AddLink** |  Unable to add **DS_Link** object  
2030 |  **GetItem** |  Invalid arguments  
2040 |  **GetItemIndex** |  Invalid arguments  
2042 |  **GetItemIndex** |  No items defined  
2045 |  **GetItemIndex** |  Item not found  
2050 |  **GetLink** |  Invalid arguments  
2060 |  **GetLinkIndex** |  Invalid arguments  
2062 |  **GetLinkIndex** |  No items defined  
2065 |  **GetLinkIndex** |  Item not found  
2070 |  **RemoveItem** |  Invalid arguments  
2080 |  **RemoveLink** |  Invalid arguments  
2090 |  **SetDescription** |  Invalid arguments  
2100 |  **SetInternalID** |  Invalid internal ID  
2110 |  **SetCloseLogic** |  Invalid arguments  
2115 |  **SetCloseLogic** |  Invalid logic  
2120 |  **SetInitLogic** |  Invalid arguments  
2125 |  **SetInitLogic** |  Invalid logic  
2130 |  **SetPrimarySource** |  Invalid arguments  
  
_(Error Number 2007 was added in PxPlus 2023.)_

## DS_Item Object Errors

Below is a list of DS_Item object errors.

**Error Number** |  **DS_Item Method** |  **Description**  
---|---|---  
2500 |  **On_Create** |  **On_Create** failure  
2520 |  **SetType** |  Invalid arguments  
2530 |  **SetDescription** |  Invalid arguments  
2540 |  **SetExpression** |  Invalid arguments  
2545 |  **SetExpression** |  Invalid expression  
2550 |  **SetInternalID** |  Invalid internal ID  
2560 |  **SetLength** |  Invalid argument  
2570 |  **SetName** |  Invalid argument  
2575 |  **SetName** |  Invalid name  
  
## DS_Link Object Errors

Below is a list of DS_Link object errors.

**Error Number** |  **DS_Link Method** |  **Description**  
---|---|---  
2700 |  **On_Create** |  **On_Create** failure  
2710 |  **SetDescription** |  Invalid arguments  
2720 |  **SetInternalID** |  Invalid internal ID  
2730 |  **SetSourceID** |  Invalid internal ID  
2740 |  **SetKeyDef** |  Invalid arguments  
2745 |  **SetKeyDef** |  Invalid key definition  
2750 |  **SetKNO** |  Invalid arguments  
2755 |  **SetKNO** |  Invalid key number/name  
2760 |  **SetNoDataOption** |  Invalid arguments  
2775 |  **SetPrefix** |  Invalid prefix  
2780 |  **SetType** |  Invalid arguments  
  
## ViewDef Object Errors

Below is a list of ViewDef object errors.

**Error Number** |  **ViewDef Method** |  **Description**  
---|---|---  
3000 |  **On_Create** |  **On_Create** failure  
3011 |  **AddItem** |  Unable to add **ViewItem** object  
3012 |  **AddCalcItem** |  Unable to add **CalcItem** object  
3018 |  **AddCalcItem** |  Locked view  
3019 |  **AddItem** |  Locked view  
3029 |  **Clear** |  Locked view  
3038 |  **ClearCalcItems** |  Locked view  
3039 |  **ClearItems** |  Locked view  
3040 |  **GetItem** |  Invalid argument  
3045 |  **GetCalcItem** |  Invalid argument  
3050 |  **GetItemIndex** |  Invalid argument  
3052 |  **GetItemIndex** |  No items defined  
3055 |  **GetItemIndex** |  Item not found  
3056 |  **GetCalcItemIndex** |  Invalid argument  
3057 |  **GetCalcItemIndex** |  No items defined  
3058 |  **GetCalcItemIndex** |  Item not found  
3060 |  **LoadPassword** |  Invalid arguments  
3066 |  **LoadPassword** |  Cannot reload a password  
3069 |  **LoadPassword** |  Locked view  
3079 |  **SetPassword** |  Locked view  
3080 |  **Unlock** |  Invalid arguments  
3085 |  **Unlock** |  Invalid password  
3090 |  **RemoveItem** |  Invalid arguments  
3091 |  **RemoveCalcItem** |  Invalid arguments  
3098 |  **RemoveCalcItem** |  Locked view  
3099 |  **RemoveItem** |  Locked view  
3100 |  **SetDescription** |  Invalid arguments  
3109 |  **SetDescription** |  Locked view  
3110 |  **SetFilter** |  Invalid arguments  
3115 |  **SetFilter** |  Invalid filter  
3119 |  **SetFilter** |  Locked view  
3120 |  **SetInternalID** |  Invalid internal ID  
3129 |  **SetInternalID** |  Locked view  
3130 |  **SetKey** |  Invalid arguments  
3139 |  **SetKey** |  Locked view  
3149 |  **SetLongDescription** |  Locked view  
3159 |  **SetOrder** |  Locked view  
3166 |  **SetPrimarySource** |  Cannot reset PrimarySource  
3169 |  **SetPrimarySource** |  Locked view  
3179 |  **SetUpdateStamp** |  Locked view  
3180 |  **SetCondition** |  Invalid arguments  
3189 |  **SetCondition** |  Locked view  
3190 |  **SetOriginalDescription** |  Invalid argument  
3200 |  **SetCloseLogic** |  Invalid arguments  
3205 |  **SetCloseLogic** |  Invalid logic  
3210 |  **SetInitLogic** |  Invalid arguments  
3215 |  **SetInitLogic** |  Invalid logic  
  
_(ViewDef error codes 3012, 3018, 3038, 3045, 3056, 3057, 3058, 3091 and 3098 were added in PxPlus 2021.)_

## ViewItem Object Errors

Below is a list of ViewItem object errors.

**Error Number** |  **ViewItem Method** |  **Description**  
---|---|---  
3500 |  **On_Create** |  **On_Create** failure  
3510 |  **SetPath** |  Invalid arguments  
3515 |  **SetPath** |  Invalid path  
3519 |  **SetPath** |  View locked  
3520 |  **SetColumn** |  Invalid arguments  
3525 |  **SetColumn** |  Invalid column name  
3529 |  **SetColumn** |  View locked  
3530 |  **SetCondition** |  Invalid arguments  
3535 |  **SetCondition** |  Invalid condition  
3539 |  **SetCondition** |  View locked  
3549 |  **SetType** |  View locked  
  
_(ViewItem error code 3549 was added in PxPlus 2021.)_

## DataGroup Object Errors

Below is a list of DataGroup object errors.

**Error Number** |  **DataGroup Method** |  **Description**  
---|---|---  
4000 |  **On_Create** |  **On_Create** failure  
4010 |  **AddMember** |  Invalid arguments  
4020 |  **FindMember** |  Invalid arguments  
4025 |  **FindMember** |  Not a member of the group  
4030 |  **RemoveMember** |  Invalid arguments  
4040 |  **SetDescription** |  Invalid arguments  
4050 |  **SetInternalID** |  Invalid internal ID  
  
## CalcItem Object Errors

Below is a list of CalcItem object errors.

**Error Number** |  **CalcItem Method** |  **Description**  
---|---|---  
5020 |  **SetType** |  Invalid arguments  
5030 |  **SetDescription** |  Invalid arguments  
5040 |  **SetExpression** |  Invalid arguments  
5045 |  **SetExpression** |  Invalid expression  
5050 |  **SetInternalID** |  Invalid internal ID  
5060 |  **SetLength** |  Invalid argument  
5070 |  **SetName** |  Invalid argument  
5080 |  **SetName** |  Invalid name  
  
_(CalcItem error codes were added in PxPlus 2021.)_
