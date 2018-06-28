// I run this as a background script to create the IP range

var rec = new GlideRecord('cmdb_ci_ip_address');
rec.initialize();
 
// set the network base
var base = '192.168.2.';
var location = 'building_b';
var scope = 'Private';
var status = 'Available';
var i = 10;
 
while (i <= 50) {
  rec.ip_address = base + i++; 
  rec.u_building.setDisplayValue(location);
  rec.u_scope = scope;
  rec.u_availability= status;  
  
  rec.insert();
}