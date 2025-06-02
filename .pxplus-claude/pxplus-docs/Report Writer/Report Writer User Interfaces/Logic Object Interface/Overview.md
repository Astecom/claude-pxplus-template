# Report Writer User Interfaces

**Logic Object Interface** |  **__**  
---|---  
  
The Report Writer can interface with an optional user-created object, which supplies additional generic logic for processing reports. Specifically, the user object has properties and methods, as specified in the **User Interface Specifications** section below, that can be used to set up the execution environment, load variables, specify new system variables, adjust the report format, manipulate data, and reset the environment. The user object may also have additional miscellaneous methods that can be referenced in the report definition.

The user logic object must either reside under the *rpt directory and be named *rpt/userlogic.pvc, or the global variable %RW_UserLogic$ can be pre-loaded with the object name before the Report Writer object (*rpt/pvxreport) is created. The object named in %RW_UserLogic$ will take precedence. If an *rpt/userlogic.pvc logic object exists or one is specified in %RW_UserLogic$, it will be used to process all reports.

## User Interface Specifications

***rpt/userlogic.pvc**   
  
The user logic object will be created during the On_Create logic of the ***rpt/pvxreport** report object and dropped during the On_Delete logic. It must be defined with specific properties and functions, although additional local properties and On_Create/On_Delete logic may be included as desired. The required methods may contain simple stubs if there is no additional logic associated with them.

**_The user interface must include the following properties and methods:_**

_function_**Initialize( )** |  The ***rpt/pvxreport** object will invoke this method in its On_Create logic. It is useful for setting up the execution environment for defining or generating a report.  
---|---  
_function_**Reset( )** |  The report object will invoke this method in its On_Delete logic. It can be used to reset the execution environment, if desired.  
_function_**UpdateReport(**_Rpt_**)** |  This method is invoked as the first step in the ***rpt/pvxreport** object **StartReport(** **)** method. At this point, a report definition is contained within the report object, and the object handle for *rpt/pvxreport (_Rpt_) is passed to **UpdateReport(** **)** so it has access to change the definition before the report is generated.  
_function_**UpdateData $(**_Data$_**,**_iolist_ _$_**)** |  This method is used within the *rpt/pvxreport object **ReadData$( )** method immediately after a record is read. If the file being read has an external key, then this method is invoked passing the unparsed key data and the key IOList. The method is also invoked passing unparsed record data and the compiled data IOList. This method can be useful for translating unprintable characters that could exist in the data. Data can be manipulated on the unparsed record level, or on a field by field level by reading the data from the record into the fields (i.e. READ DATA FROM Data$ to IOL=iolist$). This method returns a string value consisting of the manipulated record. If the data was parsed into fields and manipulated, it must be reassembled into a record to be returned; i.e. REC(iolist$).  
_property_**UserVariableCount**   
 _  
function_**GetUserVariable$(**_idx_**)**  
_  
function_**GetUserVariableDescription$(**_idx_**)**  
_  
function_**GetUserVariableLength(**_idx_**)**  
_  
function_**GetUserVariableValue$(**_idx_**)** |  The user object contains a series of properties and methods that allow the user to specify user variables that can be appended to the list of standard system variables that are supported by the Report Writer. If any user variables are defined, then they will be included wherever standard system variables may be accessed, such as the Field Selection list of the Report Designer where they can be dragged and dropped on the report layout, or in formula definitions where they can be included as part of the formula. The **UserVariableCount** property must be set with the number of user variables to be defined, and methods must be defined to return information concerning each variable: |  **GetUserVariable $(**_idx_**)** |  Returns the variable name  
---|---  
**GetUserVariableDescription $(**_idx_**)** |  Returns a short description of the variable  
**GetUserVariableLength(**_idx_**)** |  Returns the maximum length of its value  
**GetUserVariableValue $(**_idx_**)** |  Returns its current value as a string (must convert numerics)  
  
The user variable in question is identified by an index (i.e. information concerning the first variable will be returned if the index passed to the method is one, etc.).  
  
## Additional Methods

The developer may include additional methods that can be accessed in the report using UserLogic as the object handle.

**_Example:_**

The user could include a method in the user object to format the page number in a particular way:

> function UserPage$(PageNumber$)=msg("PAGE")+PageNumber$

Then, in the report definition, the formula UserLogic'UserPage$(_Page$) could be used in one of the page header cells to format the page number.

**_Post Report Logic_**

Another example of an additional method is a Post Report method that would be invoked upon completion of a report. In the case of Post Report methods, the method call is defined as **[Post Report Logic](../../Designing%20a%20Report/Report%20Options/Overview.htm#post_rpt)** in the **Report Options** window (on the **Custom Interfaces** tab). The arguments that may be passed to this method include report properties, field names and method calls (using the report object handle variable THIS).

**_Example:_**

A function, such as the following, could be defined in the user Logic Object:

> function PostReportLogic(rpt,invoice$)  
>  enter rpt,invoice$  
>  ! In this case the logic can use the rpt report handle to reference all report properties and methods  
>  ! Post report logic could be used to email pdf files, notify users that a report is complete, etc.  
>  return 1

The method would then be defined In the **Post Report Logic** of the **Report Options** window (on the **Custom Interfaces** tab) as:

> Method: PostReportLogic(THIS,INV_NUM$)

**_Where:_**

THIS is the report object handle and INV_NUM$ is a field in the report.

_(The Post Report Logic method call was added in PxPlus 2022.)_

***rpt/rptuserlogic _Template_**

The following template is supplied for the ***rpt/userlogic** object, constructed with stubs for all required methods.

> ! *rpt/rptuserlogic.pvc - Template for the UserLogic object  
>  !  
> !  
>  def class "*rpt/rptuserlogic"  
>  !  
>  property UserVariableCount  
>  !  
>  function Initialize()=1  
>  function Reset()=1  
>  function UpdateReport(Rpt)=1  
>  function UpdateData$(data$,iolist$)=data$  
>  function GetUserVariable$(idx)=""  
>  function GetUserVariableDescription$(idx)=""  
>  function GetUserVariableLength(idx)=0  
>  function GetUserVariableValue$(idx)=""  
>  !  
>  end def

When creating the *rpt/userlogic object, it is recommended that the class definition include a LIKE "*rpt/rptuserlogic" statement. This means that stubs are present for methods that are not required, and the user need only supply properties and methods for which there is additional logic. It also ensures that stubs will be present for new methods that may be required in future enhancements.

**_Example:_**

The following is a sample ***rpt/userlogic** object:

> ! Userlogic.pvc - Sample Report User Logic object  
>  !  
> !  
>  def class "*rpt/userlogic" create required  
>  !  
>  like "*rpt/rptuserlogic"  
>  !  
>  property UserVariableCount  
>  !  
>  local UserVariableName$  
>  local UserVariableDescription$  
>  local UserVariableLength  
>  local User$  
>  local TRN_TBL$=$FF3B3B3B3B3B3B3B3B3B3B3B3B3B3B3B3B3B3B3B3B3B3B3B3B3B3B3B3B3B3B3B3B202122232425262728292A2B2C2D2E2F303132333435363738393A3B3C3D3E3F  
>  404142434445464748494A4B4C4D4E4F505152535455565758595A5B5C5D5E5F606162636466666768696A6B6C6D6E6F707172737475767778797A7B7C7D7E7F808182838485868788898A8B8C  
>  8D8E8F909192939495969798999A9B9C9D9E9FA0A1A2A3A4A5A6A7A8A9AAABACADAEAFB0B1B2B3B4B5B6B7B8B9BABBBCBDBEBFC0C1C2C3C4C5C6C7C8C9CACBCCCDCECFD0D1D  
>  2D3D4D5D6D7D8D9DADBDCDDDEDFE0E1E2E3E4E5E6E7E8E9EAEBECEDEEEFF0F1F2F3F4F5F6F7F8F9FAFBFCFDFEFF$  
>  !  
>  function Initialize()Initialize  
>  function UpdateReport(Rpt)Update_Report  
>  function UpdateData$(data$,iolist$)=tbl(data$,TRN_TBL$)  
>  function GetUserVariable$(idx)Get_User_Variable_Name  
>  function GetUserVariableDescription$(idx)Get_User_Variable_Description  
>  function GetUserVariableLength(idx)Get_User_Variable_Length  
>  function GetUserVariableValue$(idx)Get_User_Variable_Value  
>  !  
>  !  
>  end def  
>  !  
>  !  
> On_Create:  
>  UserVariableCount=3 ! Set the number of user variables here  
>  dim UserVariableName$[1:UserVariableCount];  
>  UserVariableName$[1]="CompanyName$";  
>  UserVariableName$[2]="CompanyCode$";  
>  UserVariableName$[3]="VersionNumber" ! Dimension and load the variable name array  
>  dim UserVariableDescription$[1:UserVariableCount];  
>  UserVariableDescription$[1]="Company Name";  
>  UserVariableDescription$[2]="Company Code";  
>  UserVariableDescription$[3]="Version Number" ! Dim and load the description array  
>  dim UserVariableLength[1:UserVariableCount];  
>  UserVariableLength[1]=40;  
>  UserVariableLength[2]=3;  
>  UserVariableLength[3]=4.2  
>  ! Dimension and load the variable max length array  
>  ! Initialize other work variables  
>  if tcb(88) \  
>  then call "[wdx]*windx.utl;get_val","WHO",User$ \  
>  else User$=who  
>  return  
>  !  
>  !  
>  Initialize:  
>  %ReportDirectory$="R:\rpt\"  
>  return 1  
>  !  
> Update_Report:  
>  enter Rpt  
>  ! Only BigBoss gets to see the individual balances  
>  if User$="BigBoss" \  
>  then return 1  
>  gc=Rpt'GroupCount()  
>  for gc  
>  grp=Rpt'GetGroup(gc)  
>  lc=grp'LineCount()  
>  for lc  
>  line=grp'GetLine(lc)  
>  cc=line'CellCount()  
>  for cc  
>  cell=line'GetCell(cc)  
>  if cell'format$<>"" and pos("BALANCE"=ucs(cell'value$)) \  
>  then cell'value$="------------",cell'format$=""  
>  if cell'AlternateCell>0 and cell'AlternateCell'format$<>"" and pos("BALANCE"=ucs(cell'AlternateCell'value$)) \  
>  then cell'AlternateCell'value$="------------",cell'AlternateCell'format$=""  
>  next cc  
>  next lc  
>  next gc  
>  return 1  
>  !  
> Get_User_Variable_Name: \  
>  enter idx  
>  if idx<1 or idx>UserVariableCount \  
>  then return "" \  
>  else return UserVariableName$[idx]  
>  !  
> Get_User_Variable_Description:  
>  enter idx  
>  if idx<1 or idx>UserVariableCount \  
>  then return "" \  
>  else return UserVariableDescription$[idx]  
>  !  
> Get_User_Variable_Length:  
>  enter idx  
>  if idx<1 or idx>UserVariableCount \  
>  then return 0 \  
>  else return UserVariableLength[idx]  
>  !  
> Get_User_Variable_Value:  
>  enter idx  
>  if idx<1 or idx>UserVariableCount \  
>  then return ""  
>  switch idx  
>  case 1  
>  v$="ABC Company" ! supply the value of the user variable  
>  break  
>  case 2  
>  v$="ABC"  
>  break  
>  case 3  
>  v$="7.00"  
>  break  
>  end switch  
>  return v$
