# SNIPAM

An IP address manager for ServiceNow

## Overview

This project is for a catalog item in ServiceNow that allows users to request a static IP address.  The only thing that's really special about this is that the Mid server uses PS Remoting to update the IP address on the user's workstation.

NOTE: this documentation is a work-in-progress

### Prerequisites

In order for the PS Remoting to work, you will, of course, have to have admin access on the remote machine. I created a special AD account for this purpose and stuck it in the local admin group via group policy. I also [created a GPO](https://www.techrepublic.com/article/how-to-enable-powershell-remoting-via-group-policy/) that enables PS Remoting on client computers.

For the remote workstation name, it was easy enough for me to get because I had created an audit script that runs at logon.  When users log in, the audit script stores their username and hostname (among other things) in a MySQL table.  So, it was pretty easy for me to find out the name of the remote workstation to give a static IP.  

On this catalog item request form, I've added a "workstation" variable.  This allows the user to provide the name of their workstation.  I'm personally not a fan of this method because it allows for user error.  However, other developers may not have the kind of enterprise access I had when this was conceived. 



![alt workflow](https://gitlab.com/rpoore/snipam/raw/master/wf.png)