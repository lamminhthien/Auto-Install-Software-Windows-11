# Stop service
sc.exe stop wuauserv

# Disabled service, prevent start again
sc.exe config wuauserv start=disabled

# Check service start
sc.exe query wuauserv
