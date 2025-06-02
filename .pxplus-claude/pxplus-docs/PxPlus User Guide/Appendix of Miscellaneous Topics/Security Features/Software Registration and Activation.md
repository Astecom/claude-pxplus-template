# Security Features

**Software Registration and Activation** |  **__**  
---|---  
  
PxPlus includes tools and facilities to protect applications from software piracy through the use of package registration and activation. Activation keys are based on specific hardware configurations, thus preventing applications from being moved from one computer to another without reactivation.

#### **Note:**  
For information on PxPlus product licensing, see [**Licensing and Activation Keys**](../../../PxPlus%20Installation%20and%20Configuration/Licensing%20and%20Activation%20Keys/Overview.md).

## Registration System

Developers can also have activation keys assigned specifically to their applications where, without the correct key, the programs cannot be viewed, modified or run. In fact, the programs are encrypted with a key to which only the original developer will have access. The registration system is also useful for releasing software that has a built-in expiry date/time based on an assigned activation key.

Each development shop using this feature would be required to maintain their own key generation system for creating and distributing keys. They will be given a unique **_owner code_** , where each generated key is specific to that code only. One owner code will not provide access to another development shop's programs. Each is independent of the other.

A registered program may be assigned from 0 to 20 flags. When a key is generated, it may be done in such a way that one or more flags will be valid. This gives the developer the ability to create keys that allow or deny users access to specific modules within his/her application. In addition, flags may be used to control whether or not the key allows the person running the program the ability to modify or list programs. To obtain a registration number and the tools required to implement this facility, contact your local distributor.

## Creating Registered Programs

To create a program which is to be secured via a registered activation key, the programmer uses the following command:

> **SAVE** "_progname_ ", **OWN=**_package_no_ [, **FLG=**_n :n_ : _n_ ]

The package number must be a registered package number that has been assigned to the developer and for which he/she must have been activated as a developer. The**FLG=**_n :_  _n_ : _n_ option allows the programmer to define which registration flags must be active in order to**LOAD** /**RUN** this program. If any flags are specified, then at least one flag must match that of the user's registration.

#### **Note:**  
Full details on the use of this facility are beyond the scope of this documentation but can be provided to developers upon request.

**_Other Considerations_**

This type of registration is not for everyone. It requires that each development shop maintain their own system to implement, track and distribute their unique keys. Due to commitment involved in this type of system, the majority of PxPlus developers prefer to use other distribution controls within their applications; i.e. **[Password Protection](Password%20Protection.md)**.

In addition, PVX Plus may be able to recover a passworded program when the password is lost; however, it is impossible to recover a program that is encoded with an owner code if the mechanisms used to encrypt it are lost. Because of this danger, you can arrange for PVX Plus to maintain a copy of your activation key generation parameters, which provides a method of recovery in case you lose your key generation components.
