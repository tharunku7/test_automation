########################################################################################
# Changes the IP of the remote host

param ( 
    [Parameter(Mandatory=$true)][string]$IPAddress,
    [Parameter(Mandatory=$true)][string]$Remhost            
)

# formulate the gateway from the IP address
$net = $IPAddress.Substring(0, $IPAddress.LastIndexOf('.') + 1)
$gw = $net + '1'

$script = "New-NetIPAddress –InterfaceAlias "“Primary”" –IPv4Address $IPAddress –PrefixLength 24 -DefaultGateway $gw"

Invoke-Command -ComputerName $Remhost -ScriptBlock { Start-Job -ScriptBlock { $script } }

# return the MAC address
Get-NetAdapter -Name "Primary" | select MacAddress