// try to update the remote workstation

// submit to script
var ecc = new GlideRecord("ecc_queue");  
ecc.initialize();  
ecc.agent = "mid.server.MIDSERVER1";  
ecc.topic = "Command";        
ecc.name = "powershell c:\\scripts\\update-IP-remote-host.ps1 -IPAddress " + workflow.scratchpad.freeIP + " -Remhost " + current.variables.workstation_name;
ecc.queue = "output";  
ecc.state = "ready"; 
var ecc_sysid = ecc.insert();         

// now get the results....which, hopefully, is the mac address of the computer

var gr = new GlideRecord('ecc_queue'); 
gr.addQuery("response_to", ecc_sysid);
gr.addQuery("queue", "input");   
gr.query();  
 
while(gr.next()) {  
    var text = gr.payload;  
    parser = new DOMParser();
    xmlDoc = parser.parseFromString(text,"text/xml");
    var stdout = xmlDoc.getElementsByTagName("stdout")[0].childNodes[0].nodeValue;
    workflow.scratchpad.macaddy = stdout;
}
       
