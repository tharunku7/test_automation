run();

function run() {
	var target = new GlideRecord('cmdb_ci_ip_address');
	target.addQuery('u_availability', "Available");
	
	// get the building network
    var building = current.variables.Building.getDisplayValue();

    switch (building) {
        case 'building_a':
            target.addQuery('ip_address', 'CONTAINS', '192.168.1.');
            break;

        case 'building_b':
            target.addQuery('ip_address', 'CONTAINS', '192.168.2.');
            break;  
        
        default:
            // throw some error
    }	
	
	target.setLimit(1);
	target.query();
	
	while (target.next()) { 
	  var freeIP = target.ip_address;
	  workflow.scratchpad.freeIP = freeIP;
	}	
	
	return;
}