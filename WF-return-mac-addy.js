// now get the results....which, hopefully, is the mac address of the computer

if (workflow.scratchpad.ecc_sysid) {
    var gr = new GlideRecord('ecc_queue'); 
    gr.addQuery("response_to", workflow.scratchpad.ecc_sysid);
    gr.addQuery("queue", "input");   
    gr.query();  
    
    while(gr.next()) {  
        var text = gr.payload;  
        parser = new DOMParser();
        xmlDoc = parser.parseFromString(text,"text/xml");
        var stdout = xmlDoc.getElementsByTagName("stdout")[0].childNodes[0].nodeValue;

        workflow.scratchpad.macaddy = stdout;
    }
}