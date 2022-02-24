# Install Chocolatey
if (!(Get-Command choco.exe -ErrorAction SilentlyContinue)) {
Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))}

# Install Visual Studio 2022 Community 
choco install visualstudio2022community -y