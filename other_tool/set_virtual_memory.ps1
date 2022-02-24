# Uncheck automatically managed paging file
$pagefile = Get-WmiObject Win32_ComputerSystem -EnableAllPrivileges
$pagefile.AutomaticManagedPagefile = $false
$pagefile.put() | Out-Null

# Set the pagefile size
$pagefile.InitialSize = 16000
$pagefileset.MaximumSize = 16000
$pagefileset.Put() | Out-Null