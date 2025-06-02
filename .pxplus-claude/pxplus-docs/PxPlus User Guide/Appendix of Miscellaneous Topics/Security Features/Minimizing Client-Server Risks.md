# Security Features

**Minimizing Client-Server Risks** |  **__**  
---|---  
  
Controlling the TCP/IP services available on a particular machine and plugging security holes at the OS level (if any) will help keep unauthorized people from accessing sensitive data in a client-server implementation.

Your hosting facility should be able to manage what your users are capable of running via WindX. Remember that the *NTHost server supplied with PxPlus does not have built-in security and is not recommended for use outside of a closed local area network. The PxPlus Application Server includes administrative services that allow you to protect your applications and data over an unsecured network, such as the Internet. See **[Client/Server](../../Client-Server/Introduction.md)**.

The security holes in your applications are the greatest concern. While the OS itself may be tightly secured, programming mistakes in the applications, which run on the server are far more prevalent security risks, particularly if they grant access to console mode or give the ability to run OS commands. See **[Restricting Access to Command Mode](Restricting%20Access%20to%20Command%20Mode.md)**.

Servers that are protected behind firewalls do provide some security. However, each port on a firewall that allows inbound access or is redirected to an internal server will have the potential to show cracks. Security depends on the application that is servicing the particular port. Whether or not you are opening (or redirecting) one port or one thousand ports on a firewall does not really make a difference. Once a single port is open for an application to service, the security is only as good as that provided within the application.

Virtual Private Networks (VPN) that allow remote users to become a part of the internal LAN provide good security if the authentication methods are sufficiently stringent. The best security VPN servers provide for security measures is Secure ID, a rotating authentication code. Only those users with the correct access codes and one time Secure ID codes may get in.

VPNs do require a large amount of computing power at both the server side and the client end. Since all packets transmitted by each client are encrypted and then placed inside a packet, which will be routed across the Internet, the client must be fairly powerful to keep up with encrypting outgoing packets and decrypting incoming packets. The server, on the other hand, must be able to recognize which packets are destined for which VPN-connected clients, capture them out of the data stream, encrypt them, and transmit them to the appropriate client.

Remote access solutions, such as Citrix, MS Remote Desktop, and VNC, provide security at the login level. Once a client has a login, they typically have access levels that are the same as any local PC on a network and can do as much damage as any given PC / User Login may do.

_Secure Socket Layer_ (SSL) encryption only deals with data that is in transit from the server to the client and vice versa. Encrypting the data does not provide application-level security; it only prevents unauthorized people from capturing the data packets between machines and using the data within those packets. See **[Secure Socket Layer (SSL)](Secure%20Socket%20Layer%20\(SSL\).htm)**.
