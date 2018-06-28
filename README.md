# SNIPAM

An IP address manager for ServiceNow

## Overview

This project is for a catalog item in ServiceNow that allows users to request a static IP address.  The only thing that's really special about this is that the Mid server uses PS Remoting to update the IP address on the user's workstation.

NOTE: this documentation is a work-in-progress

### Prerequisites

In order for the PS Remoting to work, you will, of course, have to have admin access on the remote machine. I created a special AD account for this purpose and stuck it in the local admin group via group policy.  Easy enough.

For the remote workstation name, it was easy enough for me to get because I had created an audit script that runs at logon.  When users log in, the audit script stores their username and hostname (among other things) in a MySQL table.  So, it was pretty easy for me to find out the name of the remote workstation to give a static IP.  

![alt workflow](https://gitlab.com/rpoore/snipam/blob/master/wf.png)