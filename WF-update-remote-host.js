// try to update the remote workstation

// submit to script
var ecc = new GlideRecord("ecc_queue");  
ecc.initialize();  
ecc.agent = "mid.server.ServiceNowMid.<your_domain>";  
ecc.topic = "Command";        
ecc.name = "powershell c:\\scripts\\update-IP-remote-host.ps1 -IPAddress " + ipaddy + " -Remhost " + remhost;
ecc.queue = "output";  
ecc.state = "ready"; 
var ecc_sysid = ecc.insert();         
