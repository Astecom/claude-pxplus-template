# Customizer 

**Security Considerations** |  **__**  
---|---  
  
The Customizer uses **[NOMADS Security Classifications](../System%20Maintenance%20Tools/Security%20Manager/Defining%20Classifications.md)** and user definitions. Only those users assigned to the ADMIN or CUSTOMIZER classifications can create public definitions or have access to **[Customizer General Maintenance](Working%20with%20Custom%20Information.htm#custom_gen_maint)**. If no NOMADS Security is defined in a NOMADS environment, then the default is **_no restrictions_**. In an iNomads environment, however, NOMADS Security is required for personal custom definitions and for access to the run-time Customize panel utility.

The ADMIN security classification is created automatically when **NOMADS Security Classifications** are initially set up. The CUSTOMIZER classification does **_not_** exist and must be created using **[Security Class Maintenance](../System%20Maintenance%20Tools/Security%20Manager/Defining%20Classifications.md)**. Assigning this class to users allows them to access **Customizer General Maintenance** and public definitions without being given full ADMIN access to the system.

> In the NOMADS **[Data Dictionary](../../Data%20Dictionary/Introduction.md)**, security classifications may be assigned at both the file and field level. Public user files and their elements also may have security classifications assigned to them. For user files, the classifications determine whether there is **_full access_** (i.e. the user data may be updated) or **_view-only access_** or **_no access_**.

#### **Note:**  
If a file or field has been assigned security, it would have to be assigned an ADMIN and/or CUSTOMIZER classification to be available for _public_ definitions.

When creating a custom definition, security classifications determine from which files and items the user may select. When creating a public definition, files with differing security classifications may be selected, but what is displayed at run time is determined by the current user's security classifications. Only those assigned to the ADMIN or CUSTOMIZER security classifications can define free-form formulas. The use of program variables is also restricted. Formulas defined in public definitions may also be assigned security classifications to control who sees what.

_(Support for the creation of the CUSTOMIZER classification was added in PxPlus 2018.)_
