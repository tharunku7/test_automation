// update the record so as to make the IP unavailable

run();

function run() {
	var target = new GlideRecord('cmdb_ci_ip_address');
	target.addQuery('ip_address', workflow.scratchpad.freeIP);
	target.query();
	
	while (target.next()) { 
	  target.u_availability = "Assigned";
	  target.assigned_to = "Roger Poore";
      target.update();
	}	
	
	return;
}