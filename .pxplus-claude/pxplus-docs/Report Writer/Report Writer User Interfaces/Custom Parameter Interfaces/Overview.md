# Report Writer User Interfaces

**Custom Parameter Interfaces** |  **__**  
---|---  
  
The Report Writer interfaces with optional user-created programs or panels that are used to process external parameters that are used with the report. The developer interface may consist of a program (and optional label) to be called or a library and panel to be processed. If a Parameter Interface is not specified, or if a program or panel is specified and cannot be found, then the default will be the generic parameter interface panel supplied with the Report Writer.

##  Parameter Program Interface

To interface with a program, the _Program_ setting must be selected as the _Parameter Interface_ in the Report Options _Custom Interface_ folder. The program specification may include a program entry point (separated by a _semi-colon_) and may be a fixed value or expression.

At run time, the report generator will invoke the parameter program from within the **AcceptParameters( )** method (which is invoked by the **RunReport(**_file$_**)** and **RunReport(**_file$,channel_**)** methods) using the **[CALL](../../../directives/call.md)** directive:

> **call** _ParameterProgram$,_**STR(**_Rpt_**)** ,_Status$,P1$,P2$,,P18$_

The user parameter program therefore requires a corresponding **ENTER** statement:

> **enter** _Rpt$,Status$_**[,**_P1$_**,...,**_P18$_**],ERR=**_StmntRef_

**_Where:_**

_Rpt_ _$_ |  **RptObjID =num(**_Rpt_ _$_**)** Object handle for the **[pvxreport](../../Object-Oriented%20Interface/pvxreport/Overview.md)** object. This makes the existing **[rptparam](../../Object-Oriented%20Interface/rptparam/Overview.md)** objects available to be accessed for information.  
---|---  
_Status$_ |  Return status may be loaded with four values: |  **Null** (**""**) or "**0** " |  Cancel the report.  
---|---  
"**1** " |  Parameter values have been successfully retrieved and placed in argument fields P1$ through P18$ as required. These values will automatically be loaded into the **[rptparam](../../Object-Oriented%20Interface/rptparam/Overview.md)** objects by the Report Writer.  
"**2** " |  Parameter values have been successfully retrieved and directly loaded into the existing **rptparam** objects by the parameter program.  
_P1$,,P18$_ |  Optional arguments to pass the parameter values specified for the report. See **[Parameters](../../Designing%20a%20Report/Defining%20the%20Data/Parameters.md)**. The order of the parameters and argument values correspond. Arguments may be used to receive default parameter values set up when the report parameters are defined, as well as to return the final parameter values to the report generator. If _Status$_ is set to "1", these values must be returned, as the values will be loaded into the **rptparam** objects by the **AcceptParameters(** **)** method that called the program. The **AcceptParameters(** **)** method will not validate these values, as it will be assumed they are correct. The number of parameter value arguments loaded is determined by the number of parameters set up in the report definition. If _Status$_ is set to "2", these arguments are not required to return parameter values, as it will be assumed that the **rptparam** objects were updated by the user program logic.  
  
**_Example - Sample Parameter Program 1:_**

In this example, the report definition has two parameters defined to indicate the start and end point of a date range. These parameters are retrieved by reading two records from a serial file. Besides the required arguments to contain the **[pvxreport](../../Object-Oriented%20Interface/pvxreport/Overview.md)** object ID and the status value, the **ENTER** statement in the parameter program must contain two arguments to pass these values back in the order required by the report definition. Within the program, the Status$ variable is initialized to "0", which would cause the report to be aborted if an error occurred when the file was opened. After the successful retrieval of the parameter values, Status$ is set to "1" to indicate success and to flag the fact that the **AcceptParameters(** **)** method should proceed to load these values into the internal **rptparam** objects for use by the report generator.

> ! Retrieve StartDate$ and EndDate$ parameters from a serial file  
>  enter Rpt$,Status$,StartDate$,EndDate$,err=*next  
>  Status$="0"  
>  open (1,err=Done)"DateRange.txt"  
>  read record StartDate$  
>  read record EndDate$  
>  close (1)  
>  Status$="1"  
>  Done: \  
>  exit

**_Example - Sample Parameter Program 2:_**

In this example, the report definition includes two parameters called StartDate and EndDate to indicate the start and endpoint of a date range. These parameters are retrieved by reading two records from a serial file. The report parameters will be set right in the program code, so only the first two arguments, the **pvxreport** object ID and the status value, are required. In this case, the **SetParameter(** **)** method is used to set the parameter, using the parameter name to identify it. Status$ is set to "2" to indicate success and to flag the fact that the new parameter values have been set.

> ! Retrieve StartDate and EndDate parameters from a serial file  
>  enter Rpt$,Status$,err=*next  
>  Rpt=num(Rpt$)  
>  Status$="0"  
>  open (1,err=Done)"DateRange.txt"  
>  read record SDate$  
>  read record EDate$  
>  close (1)  
>  Rpt'SetParameter("StartDate",SDate$)  
>  Rpt'SetParameter("EndDate",EDate$)  
>  Status$="2"  
>  Done: \  
>  exit

## Parameter Panel Interface

To interface with a panel, the _Panel_ setting must be selected as the _Parameter Interface_ in the Report Options _Custom Interface_ folder. The panel specification requires the entry of a panel library and the name of a panel. The panel should be defined as a 'dialogue' in the panel's header attributes.

At run time, the report generator will invoke the parameter panel from within the **AcceptParameters( )** method (which is invoked by the **RunReport(**_file$_**)** and **RunReport(**_file$,channel_**)** methods) as follows:

> **process** _ParmPanel$,ParmLibrary$,_**STR(**_Rpt_**)** ,_Status$_**,**_P1$,...,P18$_

**_Where:_**

|  _ParmPanel_ _$_ |  Name of the panel to be processed  
---|---|---  
|  _ParmLibrary_ _$_ |  Library path  
|  _Rpt_ _$_ |  See **[Parameter Program Interface](Overview.htm#paramprogram)**.  
|  _Status$_ |  See **[Parameter Program Interface](Overview.htm#paramprogram)**.  
|  _P1$,,P18$_ |  See **[Parameter Program Interface](Overview.htm#paramprogram)**.  
  
When processing a panel, the report object handle can be retrieved from _ARG_1$_ (e.g. Rpt=num(ARG_1$), and status can be returned in _ARG_2$_ (e.g. ARG_2$="1").

Parameter default values are passed to the panel process using _ARG_3$_ through _ARG_20$._ Final parameter values may be returned in _ARG_3$_ through _ARG_20$_ as well; e.g. ARG_3$=StartDate$, ARG_4$=EndDate$.
